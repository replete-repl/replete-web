(ns replete.prepl
  (:refer-clojure :exclude [resolve eval])
  (:require-macros [cljs.env.macros :refer [ensure with-compiler-env]]
                   [cljs.analyzer.macros :refer [no-warn]])
  (:require [clojure.string :as string]
            [cljs.repl :as repl]
            [cljs.js :as cljs]
            [cljs.analyzer :as ana]
            [cljs.env :as env]
            [cljs.tools.reader :as r]
            [cljs.tagged-literals :as tags]
            [replete.priv-repl :as pr]
            [replete.repl-resources :refer [special-doc-map repl-special-doc-map]]
            [replete.pprint :as pprint]))

(defn- skip-load?
  [{:keys [name macros]}]
  (or (= name 'cljsjs.parinfer)
      (= name 'cljs.core)
      (= name 'cljs.env)
      (= name 'cljs.test.check)
      (= name 'cljs.test.check.clojure-test)
      (= name 'cljs.test.check.generators)
      (= name 'cljs.test.check.properties)
      (= name 'replete.repl)
      (and (= name 'cljs.compiler.macros) macros)
      (and (= name 'cljs.repl) macros)
      (and (= name 'cljs.js) macros)
      (and (= name 'cljs.reader) macros)
      (and (= name 'cljs.spec.alpha.macros) macros)
      (and (= name 'clojure.template) macros)
      (and (= name 'tailrecursion.cljson) macros)
      (and (= name 'lazy-map.core) macros)))

(defn- hack-macros
  [{:keys [name macros] :as full}]
  (cond
    (= name 'cljs.tools.reader.reader-types)
    (merge full {:extensions [".cljs" ".js"]})

    (= name 'cljs.stacktrace)
    (merge full {:extensions [".js" ".cljc"]})

    (= name 'cljs.analyzer.macros)
    (merge full {:extensions [".clj" ".cljc"]})

    (or (= name 'cljs.tools.reader.reader-types)
        (= name 'cljs.pprint)
        (= name 'cljs.spec.alpha)
        (= name 'cljs.spec.gen.alpha)
        (= name 'cljs.spec.test.alpha)
        (= name 'cljs.test))
    (merge full {:extensions
                 (if macros [".cljc"]
                            [".cljs" ".cljc" ".js"])})

    (or (= name 'clojure.test.check)
        (= name 'clojure.test.check.generators)
        (= name 'clojure.test.check.properties)
        (= name 'clojure.test.check.clojure-test)
        (= name 'cljs.analyzer)
        (= name 'cljs.analyzer.api)
        (= name 'cljs.tagged-literals))
    (merge full {:extensions [".cljc"]})

    :else
    (merge full {:extensions
                 (if macros
                   [".clj" ".cljc"]
                   [".cljs" ".cljc" ".js"])})))

(defn load [{:keys [name path] :as full} cb]
  (cond
    (skip-load? full)
    (cb {:lang :js :source ""})

    (re-matches #"^goog/.*" path)
    (pr/do-load-goog name cb)

    :else
    (loop [{:keys [name macros path extensions]} (hack-macros full)]
      (if extensions
        (when-not (pr/load-and-callback! name path (first extensions) macros cb)
          (recur (next extensions)))
        (cb nil)))))

(defn- process-in-ns
  [argument]
  (let [result-data (atom {})]
    (cljs/eval
      pr/st
      argument
      (pr/make-base-eval-opts)
      (fn [result]
        (if (:error result)
          (reset! result-data {:tag :err
                               :val (:error result)})
          (let [ns-name (:value result)]
            (if-not (symbol? ns-name)
              (reset! result-data {:tag :err
                                   :val "Argument to in-ns must be a symbol."})
              (if (some (partial = ns-name) (pr/known-namespaces))
                (do (reset! pr/current-ns ns-name)
                    (reset! result-data {:tag :ret
                                         :val ns-name}))
                (let [ns-form `(~'ns ~ns-name)]
                  (cljs/eval
                    pr/st
                    ns-form
                    (pr/make-base-eval-opts)
                    (fn [{e :error}]
                      (if e
                        (reset! result-data {:tag :err
                                             :val e})
                        (do (reset! pr/current-ns ns-name)
                            (reset! result-data {:tag :ret
                                                 :val ns-name}))))))))))))
    (merge @result-data {:ns @pr/current-ns})))

(defn- string-find-doc*
  [re-string-or-pattern]
  (let [re (re-pattern re-string-or-pattern)
        sym-docs (sort-by first
                          (mapcat (fn [ns]
                                    (map (juxt first (comp :doc second))
                                         (get-in @pr/st [::ana/namespaces ns :defs])))
                                  (pr/all-ns)))]
    (string/join (for [[sym doc] sym-docs
                       :when (and doc
                                  (name sym)
                                  (or (re-find re doc)
                                      (re-find re (name sym))))]
                   (pr/doc* sym pr/string-doc)))))

(defn- string-error
  ([error]
   (string-error error false))
  ([error include-stacktrace?]
   (if include-stacktrace?
     (let [error (or (.-cause error) error)]
       (str (.-message error) \newline (.-stack error)))
     (let [error (cond-> error
                         (-> (ex-data (ex-cause error)) (contains? :clojure.error/phase))
                         ex-cause)]
       (repl/error->str error)))))

(defn- string-pst*
  ([]
   (string-pst* '*e))
  ([expr]
   (try (cljs/eval pr/st
                   expr
                   (pr/make-base-eval-opts)
                   (fn [{:keys [value]}]
                     (when value
                       {:tag :err
                        :val (string-error value true)})))
        (catch js/Error e {:tag                 :err
                           :clojure.error/phase :execution
                           :val                 (str :caught e)}))))

(defn ^:export read-eval
  ([source]
   (read-eval source true))
  ([source expression?]
   (let [result {:tag :ret :form source :ns @pr/current-ns}]
     (binding [ana/*cljs-warning-handlers* (if expression?
                                             [pr/warning-handler]
                                             [ana/default-warning-handler])
               ana/*cljs-ns* @pr/current-ns
               env/*compiler* pr/st
               *ns* (create-ns @pr/current-ns)
               r/*data-readers* tags/*cljs-data-readers*
               r/resolve-symbol ana/resolve-symbol
               r/*alias-map* (pr/current-alias-map)]
       (try
         (let [expression-form (and expression? (pr/repl-read-string source))]
           (if (pr/repl-special? expression-form)
             (let [special-form (first expression-form)
                   argument (second expression-form)
                   result (merge result {:tag :out})]
               (case special-form
                 in-ns (merge result (process-in-ns argument))
                 dir (merge result {:val (pr/string-dir argument)})
                 apropos (let [value (pr/apropos* argument)]
                           (pr/process-1-2-3 expression-form value)
                           (merge result {:val value}))
                 doc (merge result {:val (pr/doc* argument pr/string-doc)})
                 find-doc (merge result {:val (pr/string-find-doc argument)})
                 source (merge result {:val (pr/string-source argument)})
                 pst (merge result (if argument
                                     (string-pst* argument)
                                     (string-pst*)))))
             (let [eval-result (atom [])
                   prepl-print-fn (fn [x]
                                    (swap! eval-result conj
                                           (assoc result :tag :out
                                                         :val x)))]
               (binding [*print-newline* true
                         *print-fn* prepl-print-fn
                         *print-err-fn* prepl-print-fn]
                 (cljs/eval-str
                   pr/st
                   source
                   (if expression? source "File")           ;; TODO
                   (merge
                     {:ns         @pr/current-ns
                      :load       load
                      :eval       cljs/js-eval
                      :source-map false
                      :verbose    (:verbose @pr/app-env)}
                     (when (:checked-arrays @pr/app-env)
                       {:checked-arrays (:checked-arrays @pr/app-env)})
                     (when expression?
                       {:context       :expr
                        :def-emits-var true}))
                   (fn [{:keys [ns value error]}]
                     (if expression?
                       (when-not error
                         (pr/process-1-2-3 expression-form value)
                         (when (pr/def-form? expression-form)
                           (let [{:keys [ns name]} (meta value)]
                             (swap! pr/st assoc-in [::ana/namespaces ns
                                                    :defs name
                                                    ::repl-entered-source] source)))
                         (reset! pr/current-ns ns)
                         (let [out-str (with-out-str (pprint/pprint value {:width (or (:width @pr/app-env)
                                                                                      35)
                                                                           :ns    ns
                                                                           :theme "plain"}))
                               out-str (subs out-str 0 (dec (count out-str)))]
                           (swap! eval-result conj (assoc result :val out-str)))))
                     (when error
                       (set! *e error)
                       (swap! eval-result conj (merge result
                                                      {:tag                 :err
                                                       :clojure.error/phase :execution
                                                       :val                 (string-error error)}))))))
               @eval-result)))
         (catch :default e
           [(merge result {:tag                 :err
                           :clojure.error/phase :read-source
                           :val                 (string-error e)})]))))))
