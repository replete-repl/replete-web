(ns replete.cm-eval
  (:require [cljsjs.codemirror]
            [cljsjs.codemirror.addon.edit.matchbrackets]
            [cljsjs.codemirror.addon.hint.show-hint]
            [cljsjs.codemirror.mode.clojure]
            [cljsjs.parinfer]
            [cljsjs.parinfer-codemirror]
            [clojure.string :as string]
            [reagent.core :as reagent]
            [reagent.dom :as dom]
            [re-frame.core :as re-frame]
            [replete.cm :as cm]
            [replete.events :as events]
            [replete.pprint :as pprint]))

(defmulti render-val :tag)

(defmethod render-val :ret
  [{:keys [val ns]}]
  (with-out-str (pprint/pprint val
                               {:width 70                   ; TODO determine character-width of screen
                                :ns    ns
                                :theme "plain"})))

(defmethod render-val :default
  [prepl-result]
  (:val prepl-result))

(defn select-regex-keys
  [data regex]
  (select-keys
    data
    (filter (fn [k]
              (let [n (name k)]
                (re-find regex n)))
            (keys data))))

(defn max-line-width
  "The maximum width of lines in `s` or 0 if `s` is nil"
  [s]
  (or (some->> s
               clojure.string/split-lines
               (map count)
               (reduce max))
      0))

(defn lines-count
  "The count of lines in `s` or 0 if `s` is nil"
  [s]
  (or (some-> s clojure.string/split-lines count) 0))

(defn lines-key-data
  "A map from val kw
   {:kw-lines-count #lines
    :kw-lines-width (max of any lines in val)}"
  [val kw]
  (let [lines-count (lines-count val)
        lines-width (max-line-width val)]
    (assoc {}
      (keyword (str (name kw) "-lines-count")) lines-count
      (keyword (str (name kw) "-lines-width")) lines-width)))

(defn lines-data
  "A map of lines information for each key data"
  [data]
  (let [keys (keys data)]
    (apply merge (map (fn [k]
                        (lines-key-data (get data k) k))
                      keys))))

;(def form-gap "\n")
;(def result-gap "\n\n")

(def preamble-text
  (str "ClojureScript " *clojurescript-version*
       "\n    Docs : (doc function-name)"
       "\n           (find-doc \"part-of-name\")"
       "\n  Source : (source function-name)"
       "\n Results : Stored in *1, *2, *3,"
       "\n           an exception in *e\n\n"))

(def replete-dim-css "color: #282828")

(defn mark-up-preamble
  [cm]
  (let [width (max-line-width preamble-text)
        end-line (lines-count preamble-text)]
    (.markText cm
               #js {:line 0 :ch 0}
               #js {:line end-line :ch width}
               #js {:css replete-dim-css})))

(defn parse-prepl-response
  [prepl-response]
  {:form       (:form (first prepl-response))
   :form-gap   "\n"
   :output     (->> prepl-response
                    (map :val)
                    (apply str)
                    clojure.string/trim-newline)
   :result-gap "\n\n"})

(defn mark-up-inputform
  [cm {:keys [start end width]}]
  (.markText cm
             #js {:line start :ch 0}
             #js {:line end :ch width}
             #js {:css replete-dim-css}))

(defn mark-up-results
  [cm mark-up-directions]
  (doall (map (partial mark-up-inputform cm) mark-up-directions)))

(defn render-prepl-response
  "Render the PREPL results and return markup data for forms"
  [cm prepl-response]
  (let [cm-value (.getValue cm)
        form-start (.lastLine cm)
        {:keys [form form-gap output result-gap]} (parse-prepl-response prepl-response)]
    (.setValue cm (str cm-value form))
    (let [form-end (.lastLine cm)
          form-width (max-line-width form)
          response (str form-gap output result-gap)]
      (.setValue cm (str (.getValue cm) response))
      {:start form-start :end form-end :width form-width})))

(defn cmirror-eval-comp
  [opts]
  (let [cmirror (atom nil)
        node-id (:node-id opts)
        mark-up (atom [])
        cm-update (fn [comp]
                    (when-let [changes (:changes (reagent/props comp))]
                      (swap! mark-up conj (render-prepl-response @cmirror changes))
                      (mark-up-preamble @cmirror)
                      (mark-up-results @cmirror @mark-up)
                      (.scrollIntoView @cmirror #js {:line (.lastLine @cmirror)})))]
    (reagent/create-class
      {:reagent-render
       (fn cm-render []
         [:textarea {:id node-id :auto-complete :off}])

       :component-did-mount
       (fn cm-did-mount [comp]
         (let [node (dom/dom-node comp)
               cm-opts (:cm-options opts)
               cm (cm/cm-parinfer node cm-opts)]
           (.setValue cm preamble-text)
           (mark-up-preamble cm)
           (reset! cmirror cm))
         (cm-update comp))

       :component-will-unmount
       (fn cm-will-unmount []
         (.toTextArea @cmirror)
         (reset! cmirror nil))

       :component-did-update
       cm-update

       :display-name
       node-id})))
