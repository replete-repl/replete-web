(ns replete.cm-eval
  (:require
    [cljsjs.codemirror]
    [cljsjs.codemirror.addon.edit.matchbrackets]
    [cljsjs.codemirror.addon.hint.show-hint]
    [cljsjs.codemirror.mode.clojure]
    [cljsjs.parinfer]
    [cljsjs.parinfer-codemirror]
    [reagent.core :as reagent]
    [reagent.dom :as dom]
    [re-frame.core :as re-frame]
    [replete.cm :as cm]
    [replete.events :as events]
    [replete.helpers :as helpers]))

(def ^:private replete-dim-css "color: #282828")

(defn- parse-prepl-response
  [prepl-response]
  {:form       (:form (first prepl-response))
   :form-gap   "\n"
   :output     (->> prepl-response
                    (map :val)
                    (apply str)
                    clojure.string/trim-newline)
   :result-gap "\n\n"})

(defn- dim-text
  [cm {:keys [start end width]}]
  (.markText cm
             #js {:line start :ch 0}
             #js {:line end :ch width}
             #js {:css replete-dim-css}))

(defn- mark-up-results
  [cm mark-up-directions]
  (doall (map (partial dim-text cm) mark-up-directions)))

(defn- render-prepl-response!
  "Render the PREPL results and return markup data for forms"
  [cm prepl-response]
  (let [cm-value (.getValue cm)
        form-start (.lastLine cm)
        {:keys [form form-gap output result-gap]} (parse-prepl-response prepl-response)]
    (.setValue cm (str cm-value form))
    (let [form-end (.lastLine cm)
          form-width (helpers/max-line-width form)
          response (str form-gap output result-gap)]
      (.setValue cm (str (.getValue cm) response))
      {:start form-start :end form-end :width form-width})))

(defn- update-component
  [cm-ref mark-up-ref preamble-markup compnt]
  (when-let [changes (:changes (reagent/props compnt))]
    (swap! mark-up-ref conj (render-prepl-response! @cm-ref changes))
    (re-frame/dispatch [::events/mark-up-history @mark-up-ref])
    (dim-text @cm-ref preamble-markup)
    (mark-up-results @cm-ref @mark-up-ref)
    (.scrollIntoView @cm-ref #js {:line (.lastLine @cm-ref)})))

(defn cmirror-eval-comp
  [opts]
  (let [cmirror (atom nil)
        mark-up (atom [])
        {:keys [node-id preamble-markup preamble-text cm-options]} opts
        cm-update (partial update-component cmirror mark-up preamble-markup)]
    (reagent/create-class
      {:reagent-render
       (fn cm-render []
         [:textarea {:id node-id :auto-complete :off}])

       :component-did-mount
       (fn cm-did-mount [compnt]
         (let [node (dom/dom-node compnt)
               cm (cm/cm-parinfer node cm-options)]
           (.setValue cm preamble-text)
           (dim-text cm preamble-markup)
           (reset! cmirror cm)
           (re-frame/dispatch [::events/eval-codemirror cm]))
         (cm-update compnt))

       :component-will-unmount
       (fn cm-will-unmount []
         (.toTextArea @cmirror)
         (reset! cmirror nil))

       :component-did-update
       cm-update

       :display-name
       node-id})))
