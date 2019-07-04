(ns replete.priv-repl
  "Shared functions among `replete.prepl` and `replete.repl`
  - they are not declared private purely to enable code reuse.
  By the power of this comment they should not be used in other
  namespaces."
  (:refer-clojure :exclude [resolve eval])
  (:require-macros [cljs.env.macros :refer [ensure with-compiler-env]]
                   [cljs.analyzer.macros :refer [no-warn]]
                   [replete.repl :refer [with-err-str]])
  (:require [cljs.js :as cljs]
            [cljs.pprint :refer [pprint]]
            [cljs.tagged-literals :as tags]
            [cljs.tools.reader :as r]
            [cljs.tools.reader.reader-types :as rt :refer [string-push-back-reader]]
            [cljs.analyzer :as ana]
            [cljs.compiler :as c]
            [cljs.env :as env]
            [cljs.repl :as repl]
            [clojure.string :as s]
            [cljs.stacktrace :as st]
            [cljs.source-map :as sm]
            [cognitect.transit :as transit]
            [tailrecursion.cljson :refer [cljson->clj]]
            [cljsjs.parinfer]
            [lazy-map.core :refer-macros [lazy-map]]
            [replete.pprint :as pprint]
            [replete.repl-resources :refer [special-doc-map repl-special-doc-map]]
            [cljs.compiler :as comp]))

;; Prefer ES6 Number.isInteger
(set! integer? (or (.-isInteger js/Number) integer?))

;; Monkey patch target-specific core fns

(set! array? (fn [x] (instance? js/Array x)))

(set! find-ns-obj (fn [ns] (let [munged-ns (munge (str ns))
                                 segs (.split munged-ns ".")]
                             (find-ns-obj* goog/global segs))))

(def DEBUG false)

(defonce st (cljs/empty-state))

(defn ^{:treat-as-private true}
  known-namespaces
  []
  (keys (:cljs.analyzer/namespaces @st)))

(defn ^:export setup-cljs-user []
  (js/eval "goog.provide('cljs.user')")
  (js/eval "goog.require('cljs.core')"))

(def app-env (atom nil))

(defn map-keys [f m]
  (reduce-kv (fn [r k v] (assoc r (f k) v)) {} m))

(declare load-core-analysis-caches)
(declare prime-analysis-cache-for-implicit-macro-loading)

(defn ^:export init-app-env [app-env]
  (set! *print-namespace-maps* true)
  (load-core-analysis-caches true)
  (reset! replete.priv-repl/app-env (assoc (map-keys keyword (cljs.core/js->clj app-env))
                                      :checked-arrays :warn)))

(defn user-interface-idiom-ipad?
  "Returns true iff the interface idiom is iPad."
  []
  (= "iPad" (:user-interface-idiom @app-env)))

(defn repl-read-string [line]
  (try
    (r/read-string {:read-cond :allow :features #{:cljs}} line)
    (catch :default e
      (throw (ex-info nil {:clojure.error/phase :read-source} e)))))

(def ^:private expression-name "Expression")
(def ^:private could-not-eval-expr (str "Could not eval " expression-name))

(defn calc-x-line [text pos line]
  (let [x (s/index-of text "\n")]
    (if (or (nil? x)
            (< pos (inc x)))
      {:cursorX    pos
       :cursorLine line}
      (recur (subs text (inc x)) (- pos (inc x)) (inc line)))))

(defn first-non-space-pos-after [text pos]
  (if (= " " (subs text pos (inc pos)))
    (recur text (inc pos))
    pos))

(defn ^:export format [text pos enter-pressed?]
  (let [formatted-text (:text (js->clj
                                ((if enter-pressed?
                                   js/parinfer.parenMode
                                   js/parinfer.indentMode)
                                  text (clj->js (calc-x-line text pos 0)))
                                :keywordize-keys true))
        formatted-pos  (if enter-pressed?
                         (first-non-space-pos-after formatted-text pos)
                         pos)]
    #js [formatted-text formatted-pos]))


(defn ^:export set-width [width]
  (swap! app-env assoc :width width))

(def current-ns (atom 'cljs.user))

(defn ^{:treat-as-private true}
  current-alias-map
  []
  (get-in @st [::ana/namespaces @current-ns :requires]))

(defn ^{:treat-as-private true}
  all-ns
  "Returns a sequence of all namespaces."
  []
  (keys (::ana/namespaces @st)))

(defn ^:export all-vars []
  (->> (all-ns)
       (mapcat #(map first (get-in @st [::ana/namespaces % :defs])))
       (map name)
       into-array))

(defn- drop-macros-suffix
  [ns-name]
  (if (s/ends-with? ns-name "$macros")
    (apply str (drop-last 7 ns-name))
    ns-name))

(defn ^{:treat-as-private true}
  add-macros-suffix
  [sym]
  (symbol (str (name sym) "$macros")))

(defn- eliminate-macros-suffix
  [x]
  (if (symbol? x)
    (symbol (drop-macros-suffix (namespace x)) (name x))
    x))

(defn ^{:treat-as-private true}
  get-namespace
  "Gets the AST for a given namespace."
  [ns]
  {:pre [(symbol? ns)]}
  (get-in @st [::ana/namespaces ns]))

(defn- ns-syms
  "Returns a sequence of the symbols in a namespace."
  ([ns]
   (ns-syms ns (constantly true)))
  ([ns pred]
   {:pre [(symbol? ns)]}
   (->> (get-namespace ns)
        :defs
        (filter pred)
        (map key))))

(defn ^{:treat-as-private true}
  public-syms
  "Returns a sequence of the public symbols in a namespace."
  [ns]
  {:pre [(symbol? ns)]}
  (ns-syms ns (fn [[_ attrs]]
                (and (not (:private attrs))
                     (not (:anonymous attrs))))))

(defn ^{:treat-as-private true}
  get-aenv
  []
  (assoc (ana/empty-env)
    :ns (get-namespace @current-ns)
    :context :expr))

(defn- transit-json->cljs
  [json]
  (let [rdr (transit/reader :json)]
    (transit/read rdr json)))

(defn- cljs->transit-json
  [x]
  (let [wtr (transit/writer :json)]
    (transit/write wtr x)))

(defn- load-core-analysis-cache
  [eager ns-sym file-prefix]
  (let [keys [:rename-macros :renames :use-macros :excludes :name :imports :requires :uses :defs :require-macros :cljs.analyzer/constants :doc]
        load (fn [key]
               (transit-json->cljs (js/REPLETE_LOAD (str file-prefix (munge key) ".json"))))]
    (cljs/load-analysis-cache! st ns-sym
                               (if eager
                                 (zipmap keys (map load keys))
                                 (lazy-map
                                   {:rename-macros           (load :rename-macros)
                                    :renames                 (load :renames)
                                    :use-macros              (load :use-macros)
                                    :excludes                (load :excludes)
                                    :name                    (load :name)
                                    :imports                 (load :imports)
                                    :requires                (load :requires)
                                    :uses                    (load :uses)
                                    :defs                    (load :defs)
                                    :require-macros          (load :require-macros)
                                    :cljs.analyzer/constants (load :cljs.analyzer/constants)
                                    :doc                     (load :doc)})))))

(defn load-core-analysis-caches
  [eager]
  (load-core-analysis-cache eager 'cljs.core "cljs/core.cljs.cache.aot.")
  (load-core-analysis-cache eager 'cljs.core$macros "cljs/core$macros.cljc.cache."))

(defn- read-transit
  [json-file]
  (transit-json->cljs (js/REPLETE_LOAD json-file)))

(defn- load-analysis-cache
  [ns-sym cache]
  (cljs/load-analysis-cache! st ns-sym cache))

(defn- read-and-load-analysis-cache
  [ns-sym cache-json-file]
  (load-analysis-cache ns-sym (read-transit cache-json-file)))

(defn- side-load-ns
  [ns-sym]
  (when (nil? (get-in @st [::ana/namespaces ns-sym]))
    (let [ns-sym-str          (name ns-sym)
          analysis-cache-file (str (s/replace ns-sym-str "." "/") ".cljs.cache.json")]
      (read-and-load-analysis-cache ns-sym analysis-cache-file)
      (case ns-sym
        replete.http (js/goog.require "replete.http")
        replete.io (js/goog.require "replete.io"))
      (swap! cljs.js/*loaded* conj ns-sym))))

(defn ns-form? [form]
  (and (seq? form) (= 'ns (first form))))

(defn ^{:treat-as-private true}
  repl-special?
  [form]
  (and (seq? form) (repl-special-doc-map (first form))))

(defn ^{:treat-as-private true}
  special-doc
  [name-symbol]
  (assoc (special-doc-map name-symbol)
    :name name-symbol
    :special-form true))

(defn ^{:treat-as-private true}
  repl-special-doc
  [name-symbol]
  (assoc (repl-special-doc-map name-symbol)
    :name name-symbol
    :repl-special-function true))

(defn reflow [text]
  (and text
       (-> text
           (s/replace #" \n  " "")
           (s/replace #"\n  " " "))))

(defn extension->lang [extension]
  (if (= ".js" extension)
    :js
    :clj))

(defn- pre-compiled-callaback-data [path extension]
  (when-let [js-source (js/REPLETE_LOAD (str path ".js"))]
    (when-let [cache-json (js/REPLETE_LOAD (str path extension ".cache.json"))]
      {:lang   :js
       :source js-source
       :cache  (transit-json->cljs cache-json)})))

(defn- source-callback-data [path extension]
  (when-let [source (js/REPLETE_LOAD (str path extension))]
    ;; Emit a diagnostic if loading source
    #_(when-not (= ".js" extension)
        (prn "Warning: loading non-AOT source" path extension))
    {:lang   (extension->lang extension)
     :source source}))

(defn load-and-callback! [name path extension macros cb]
  (when-let [cb-data (or (pre-compiled-callaback-data (str path (when macros "$macros")) extension)
                         (source-callback-data path extension))]
    (cb cb-data)
    :loaded))

(defn- closure-index
  []
  (let [paths-to-provides
        (map (fn [[_ path provides]]
               [path (map second
                          (re-seq #"'(.*?)'" provides))])
             (re-seq #"\ngoog\.addDependency\('(.*)', \[(.*?)\].*"
                     (js/REPLETE_LOAD "goog/deps.js")))]
    (into {}
          (for [[path provides] paths-to-provides
                provide provides]
            [(symbol provide) (str "goog/" (second (re-find #"(.*)\.js$" path)))]))))

(def ^:private closure-index-mem (memoize closure-index))

(defn- skip-load?
  [{:keys [name macros]}]
  (or
    (= name 'cljsjs.parinfer)
    (= name 'cljs.core)
    (= name 'cljs.env)
    (= name 'replete.repl)
    (and (= name 'cljs.env.macros) macros)
    (and (= name 'cljs.analyzer.macros) macros)
    (and (= name 'cljs.compiler.macros) macros)
    (and (= name 'cljs.repl) macros)
    (and (= name 'cljs.tools.reader.reader-types) macros)
    (and (= name 'cljs.js) macros)
    (and (= name 'cljs.pprint) macros)
    (and (= name 'cljs.reader) macros)
    (and (= name 'clojure.template) macros)
    (and (= name 'tailrecursion.cljson) macros)
    (and (= name 'lazy-map.core) macros)))

;; Represents code for which the goog JS is already loaded
(defn- skip-load-goog-js?
  [name]
  ('#{goog.object
      goog.string
      goog.string.StringBuffer
      goog.math.Long} name))

(defn do-load-goog
  [name cb]
  (if (skip-load-goog-js? name)
    (cb {:lang   :js
         :source ""})
    (if-let [goog-path (get (closure-index-mem) name)]
      (when-not (load-and-callback! name goog-path ".js" false cb)
        (cb nil))
      (cb nil))))

(defn load [{:keys [name macros path] :as full} cb]
  (cond
    (skip-load? full) (cb {:lang   :js
                           :source ""})
    (re-matches #"^goog/.*" path) (do-load-goog name cb)
    :else (loop [extensions (if macros
                              [".clj" ".cljc"]
                              [".cljs" ".cljc" ".js"])]
            (if extensions
              (when-not (load-and-callback! name path (first extensions) macros cb)
                (recur (next extensions)))
              (cb nil)))))

(declare make-base-eval-opts)
(declare print-error)

(defn- resolve-var
  "Given an analysis environment resolve a var. Analogous to
   clojure.core/resolve"
  [env sym]
  {:pre [(map? env) (symbol? sym)]}
  (try
    (ana/resolve-var env sym
                     (ana/confirm-var-exists-throw))
    (catch :default _
      (ana/resolve-macro-var env sym))))

(defn load-core-source-maps! []
  (when-not (get (:source-maps @st) 'cljs.core)
    (swap! st update-in [:source-maps] merge {'cljs.core
                                              (sm/decode
                                                (cljson->clj
                                                  (js/REPLETE_LOAD "cljs/core.js.map")))})))

(defn unmunge-core-fn [munged-name]
  (s/replace munged-name #"^cljs\$core\$" "cljs.core/"))

(defn mapped-stacktrace-str
  "Given a vector representing the canonicalized JavaScript stacktrace and a map
  of library names to decoded source maps, print the ClojureScript stacktrace .
  See mapped-stacktrace."
  ([stacktrace sms]
   (mapped-stacktrace-str stacktrace sms nil))
  ([stacktrace sms opts]
   (with-out-str
     (doseq [{:keys [function file line column]}
             (st/mapped-stacktrace stacktrace sms opts)]
       (println
         (str (when function (str (unmunge-core-fn function) " "))
              "(" file (when line (str ":" line))
              (when column (str ":" column)) ")"))))))

(defonce ^:private can-show-indicator (atom false))

(defn ^{:treat-as-private true}
  reset-show-indicator!
  []
  (reset! can-show-indicator true))

(defn- show-indicator?
  []
  (let [rv @can-show-indicator]
    (reset! can-show-indicator false)
    rv))

(defn- form-indicator
  [column]
  (str (apply str (take (dec column) (repeat " "))) "^"))

(defn print-error
  ([error]
   (print-error error false))
  ([error include-stacktrace?]
   (if include-stacktrace?
     (let [error (or (.-cause error) error)]
       (print (str (.-message error) \newline (.-stack error))))
     (let [error (cond-> error
                         (-> (ex-data (ex-cause error)) (contains? :clojure.error/phase))
                         ex-cause)]
       (print (repl/error->str error))))))

(defn- get-macro-var
  [env sym macros-ns]
  {:pre [(symbol? macros-ns)]}
  (let [macros-ns-str (str macros-ns)
        base-ns-str   (subs macros-ns-str 0 (- (count macros-ns-str) 7))
        base-ns       (symbol base-ns-str)]
    (if-let [macro-var (with-compiler-env st
                                          (resolve-var env (symbol macros-ns-str (name sym))))]
      (update (assoc macro-var :ns base-ns)
              :name #(symbol base-ns-str (name %))))))

(defn- all-macros-ns
  []
  (->> (all-ns)
       (filter #(s/ends-with? (str %) "$macros"))))

(defn ^{:treat-as-private true}
  get-var
  [env sym]
  (let [var (or (with-compiler-env st (resolve-var env sym))
                (some #(get-macro-var env sym %) (all-macros-ns)))]
    (when var
      (if (= (namespace (:name var)) (str (:ns var)))
        (update var :name #(symbol (name %)))
        var))))

(defn- get-file-source
  [filepath]
  (if (symbol? filepath)
    (let [without-extension (s/replace
                              (s/replace (name filepath) #"\." "/")
                              #"-" "_")]
      (or
        (js/REPLETE_LOAD (str without-extension ".clj"))
        (js/REPLETE_LOAD (str without-extension ".cljc"))
        (js/REPLETE_LOAD (str without-extension ".cljs"))))
    (let [file-source (js/REPLETE_LOAD filepath)]
      (or file-source
          (js/REPLETE_LOAD (s/replace filepath #"^out/" ""))
          (js/REPLETE_LOAD (s/replace filepath #"^src/" ""))))))

(defn ^{:treat-as-private true}
  fetch-source
  [var]
  (or (::repl-entered-source var)
      (when-let [filepath (or (:file var) (:file (:meta var)))]
        (when-let [file-source (get-file-source filepath)]
          (let [rdr (rt/source-logging-push-back-reader file-source)]
            (dotimes [_ (dec (:line var))] (rt/read-line rdr))
            (binding [r/*alias-map* (reify ILookup (-lookup [_ k] k))]
              (-> (r/read {:read-cond :allow :features #{:cljs}} rdr)
                  meta :source)))))))

(defn ^{:treat-as-private true}
  make-base-eval-opts
  []
  {:ns      @current-ns
   :context :expr
   :eval    cljs/js-eval})

(defn ^{:treat-as-private true}
  process-in-ns
  [argument]
  (cljs/eval
    st
    argument
    (make-base-eval-opts)
    (fn [result]
      (if (:error result)
        (print-error (:error result))
        (let [ns-name (:value result)]
          (if-not (symbol? ns-name)
            (println "Argument to in-ns must be a symbol.")
            (if (some (partial = ns-name) (known-namespaces))
              (reset! current-ns ns-name)
              (let [ns-form `(~'ns ~ns-name)]
                (cljs/eval
                  st
                  ns-form
                  (make-base-eval-opts)
                  (fn [{e :error}]
                    (if e
                      (print-error e)
                      (reset! current-ns ns-name))))))))))))

(defn ^{:treat-as-private true}
  resolve-ns
  "Resolves a namespace symbol to a namespace by first checking to see if it
  is a namespace alias."
  [ns-sym]
  (or (get-in @st [::ana/namespaces ana/*cljs-ns* :requires ns-sym])
      (get-in @st [::ana/namespaces ana/*cljs-ns* :require-macros ns-sym])
      ns-sym))

(defn ^{:treat-as-private true}
  apropos*
  [str-or-pattern]
  (let [matches? (if (instance? js/RegExp str-or-pattern)
                   #(re-find str-or-pattern (str %))
                   #(s/includes? (str %) (str str-or-pattern)))]
    (distinct (sort (mapcat (fn [ns]
                              (let [ns-name (str ns)
                                    ns-name (if (s/ends-with? ns-name "$macros")
                                              (apply str (drop-last 7 ns-name))
                                              ns-name)]
                                (map #(symbol ns-name (str %))
                                     (filter matches? (public-syms ns)))))
                            (all-ns))))))

(defn ^{:treat-as-private true}
  undo-reader-conditional-whitespace-docstring
  "Undoes the effect that wrapping a reader conditional around
  a defn has on a docstring."
  [s]
  ;; We look for five spaces (or six, in case that the docstring
  ;; is not aligned under the first quote) after the first newline
  ;; (or two, in case the doctring has an unpadded blank line
  ;; after the first), and then replace all five (or six) spaces
  ;; after newlines with two.
  (when-not (nil? s)
    (if (re-find #"[^\n]*\n\n?      ?\S.*" s)
      (s/replace s #"\n      ?" "\n  ")
      s)))


(defn ^{:treat-as-private true}
  process-1-2-3
  [expression-form value]
  (when-not
    (or ('#{*1 *2 *3 *e} expression-form)
        (ns-form? expression-form))
    (set! *3 *2)
    (set! *2 *1)
    (set! *1 value)))

(defn ^{:treat-as-private true}
  warning-handler [warning-type env extra]
  (let [warning-string (with-err-str
                         (ana/default-warning-handler warning-type env
                                                      (update extra :js-op eliminate-macros-suffix)))]
    (binding [*print-fn* *print-err-fn*]
      (when-not (empty? warning-string)
        (when-let [column (:column env)]
          (when (show-indicator?)
            (println (form-indicator column))))
        (print warning-string)))))

(defn- call-form?
  [expression-form allowed-operators]
  (contains? allowed-operators (and (list? expression-form)
                                    (first expression-form))))

(defn ^{:treat-as-private true}
  def-form?
  "Determines if the expression is a def expression which returns a Var."
  [expression-form]
  (call-form? expression-form '#{def defn defn- defonce defmulti}))

(defn ^{:treat-as-private true}
  string-doc
  [m]
  (with-out-str
        (repl/print-doc (update m :doc (if (user-interface-idiom-ipad?)
                                         identity
                                         reflow)))))

(defn- print-doc
  [m]
  (print (string-doc m)))

(defn ^{:treat-as-private true}
  doc*
  ([sym]
    (doc* sym print-doc))
  ([sym print-doc-fn]
   (if-let [special-sym ('{&       fn
                           catch   try
                           finally try} sym)]
     (doc* special-sym)
     (cond

       (special-doc-map sym)
       (print-doc-fn (special-doc sym))

       (repl-special-doc-map sym)
       (print-doc-fn (repl-special-doc sym))

       (get-namespace sym)
       (print-doc-fn
         (select-keys (get-namespace sym) [:name :doc]))

       (get-var (get-aenv) sym)
       (print-doc-fn
         (let [var (get-var (get-aenv) sym)
               var (assoc var :forms (-> var :meta :forms second)
                              :arglists (-> var :meta :arglists second))
               m (select-keys var
                              [:ns :name :doc :forms :arglists :macro :url])
               m (update m :doc undo-reader-conditional-whitespace-docstring)]
           (cond-> (update-in m [:name] name)
                   (:protocol-symbol var)
                   (assoc :protocol true
                          :methods
                          (->> (get-in var [:protocol-info :methods])
                               (map (fn [[fname sigs]]
                                      [fname {:doc      (:doc
                                                          (get-var (get-aenv)
                                                                   (symbol (str (:ns var)) (str fname))))
                                              :arglists (seq sigs)}]))
                               (into {}))))))))))

(defn ^{:treat-as-private true}
  string-dir
  [nsname]
  (let [ns (resolve-ns nsname)]
    (with-out-str
      (run! prn
            (distinct (sort (concat
                              (public-syms ns)
                              (public-syms (add-macros-suffix ns)))))))))

(defn ^{:treat-as-private true}
  dir*
  [nsname]
  (print (string-dir nsname)))

(defn ^{:treat-as-private true}
  string-find-doc
  [re-string-or-pattern]
  (with-out-str
    (let [re (re-pattern re-string-or-pattern)
          sym-docs (sort-by first
                            (mapcat (fn [ns]
                                      (map (juxt first (comp :doc second))
                                           (get-in @st [::ana/namespaces ns :defs])))
                                    (all-ns)))]
      (doseq [[sym doc] sym-docs
              :when (and doc
                         (name sym)
                         (or (re-find re doc)
                             (re-find re (name sym))))]
        (doc* sym)))))

(defn ^{:treat-as-private true}
  find-doc*
  [re-string-or-pattern]
  (print (string-find-doc re-string-or-pattern)))

(defn ^{:treat-as-private true}
  string-source
  [sym]
  (or (fetch-source (get-var (get-aenv) sym))
      "Source not found"))

(defn ^{:treat-as-private true}
  source*
  [sym]
  (println (string-source sym)))


;; Are the functions below ever used?
;; I smell dead code...
(defn- eval
  ([form]
   (eval form @current-ns))
  ([form ns]
   (let [result (atom nil)]
     (cljs/eval st form
                {:ns            ns
                 :context       :expr
                 :def-emits-var true}
                (fn [{:keys [value error]}]
                  (if error
                    (print-error error)
                    (reset! result value))))
     @result)))

(defn- ns-resolve
  [ns sym]
  (eval `(~'var ~sym) ns))

(defn- resolve
  [sym]
  (ns-resolve @current-ns sym))

(defn- intern
  ([ns name]
   (when-let [the-ns (find-ns (cond-> ns (instance? Namespace ns) ns-name))]
     (eval `(def ~name) (ns-name the-ns))))
  ([ns name val]
   (when-let [the-ns (find-ns (cond-> ns (instance? Namespace ns) ns-name))]
     (eval `(def ~name ~val) (ns-name the-ns)))))

