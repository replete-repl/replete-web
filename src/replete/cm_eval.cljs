(ns replete.cm-eval
  (:require [clojure.string :as string]
            [cljsjs.codemirror]
            [cljsjs.codemirror.addon.edit.matchbrackets]
            [cljsjs.codemirror.addon.hint.show-hint]
            [cljsjs.codemirror.mode.clojure]
            [cljsjs.parinfer]
            [cljsjs.parinfer-codemirror]
            [reagent.core :as reagent]
            [reagent.dom :as dom]
            [replete.cm :as cm]))

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
        string/split-lines
        (map count)
        (reduce max))
    0))

(defn lines-count
  "The count of lines in `s` or 0 if `s` is nil"
  [s]
  (or (some-> s string/split-lines count) 0))

(def preamble-text
  (str "ClojureScript " *clojurescript-version*
    "\n    Docs : (doc function-name)"
    "\n           (find-doc \"part-of-name\")"
    "\n  Source : (source function-name)"
    "\n Results : Stored in *1, *2, *3,"
    "\n           an exception in *e\n\n"))

(def preamble-markup-directions
  {:start 0
   :end   (lines-count preamble-text)
   :width (max-line-width preamble-text)})

(def replete-dim-css "color: #404040")

(defn mark-up-cm
  [cm {:keys [start end width]}]
  (.markText cm
    #js {:line start :ch 0}
    #js {:line end :ch width}
    #js {:css replete-dim-css}))

(defn parse-prepl-response
  [prepl-response]
  {:form       (:form (first prepl-response))
   :form-gap   "\n"
   :output     (->> prepl-response
                 (map :val)
                 (apply str)
                 string/trim-newline)
   :result-gap "\n\n"})

(defn mark-up-results
  [cm mark-up-directions]
  (doall (map (partial mark-up-cm cm) mark-up-directions)))

(defn render-prepl-response
  "Render the PREPL results and return markup data for forms"
  [cm prepl-response]
  (let [cm-value   (.getValue cm)
        form-start (.lastLine cm)
        {:keys [form form-gap output result-gap]} (parse-prepl-response prepl-response)]
    (.setValue cm (str cm-value form))
    (let [form-end   (.lastLine cm)
          form-width (max-line-width form)
          response   (str form-gap output result-gap)]
      (.setValue cm (str (.getValue cm) response))
      {:start form-start :end form-end :width form-width})))

(defn cmirror-eval-comp
  [opts]
  (let [cmirror   (atom nil)
        node-id   (:node-id opts)
        mark-up   (atom [])
        cm-update (fn [comp]
                    (when-let [changes (:changes (reagent/props comp))]
                      (swap! mark-up conj (render-prepl-response @cmirror changes))
                      (mark-up-cm @cmirror preamble-markup-directions)
                      (mark-up-results @cmirror @mark-up)
                      (.scrollIntoView @cmirror #js {:line (.lastLine @cmirror)})))]
    (reagent/create-class
      {:reagent-render
       (fn cm-render []
         [:textarea {:id node-id :auto-complete :off}])

       :component-did-mount
       (fn cm-did-mount [comp]
         (let [node    (dom/dom-node comp)
               cm-opts (:cm-options opts)
               cm      (cm/cm-parinfer node cm-opts)]
           (.setValue cm preamble-text)
           (mark-up-cm cm preamble-markup-directions)
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
