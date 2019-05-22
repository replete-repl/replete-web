(ns replete.cm
  (:require [cljsjs.codemirror]
            [cljsjs.codemirror.addon.edit.matchbrackets]
            [cljsjs.codemirror.addon.hint.show-hint]
            [cljsjs.codemirror.mode.clojure]
            [cljsjs.parinfer]
            [cljsjs.parinfer-codemirror]
            [reagent.core :as reagent]
            [reagent.dom :as dom]
            [re-frame.core :as re-frame]
            [replete.events :as events]
            [replete.pprint :as pprint]
            [clojure.string :as string]))

(defn cm-parinfer
  [dom-node opts]
  (let [code-mirror (js/CodeMirror.fromTextArea
                      dom-node
                      (clj->js (merge {:lineWrapping  true
                                       :matchBrackets true
                                       :mode          :clojure}
                                      opts)))]
    (.setSize code-mirror "100%" "100%")
    (js/parinferCodeMirror.init code-mirror)
    code-mirror))

(defmulti render-val :tag)

(defmethod render-val :ret
  [{:keys [val ns]}]
  (with-out-str (pprint/pprint val
                               {:width 70                   ; TODO determine character-width of screen
                                :ns    ns
                                :theme "plain"})))

(defmethod render-val :default
  [prepl-result]
  (str (:val prepl-result)))

(defn parse-result
  [prepl-result]
  (when-let [{:keys [form]} prepl-result]
    (str (and form (str form "\n"))
         (:val prepl-result) "\n\n")))

(defn save-form
  [clojure-form]
  (re-frame/dispatch
    [::events/save-form clojure-form]))

(defn ckey-binding
  [ckey-binding]
  (assoc {} ckey-binding #(re-frame/dispatch [::events/eval])))

(defn cmirror-comp
  [opts]
  (let [cmirror (atom nil)
        history (atom [])
        editor? (:editor? opts)
        node-id (:node-id opts)
        cm-update (fn [comp]
                    (let [changes (:changes (reagent/props comp))]
                      (if (:clear-input-form changes)
                        (.setValue @cmirror "")
                        (when-let [output (parse-result changes)]
                          (swap! history conj output)
                          (.setValue @cmirror (apply str @history))
                          (.scrollIntoView @cmirror #js {:line (.lastLine @cmirror)})))))]
    (reagent/create-class
      {:reagent-render
       (fn cm-render []
         [:textarea {:id            node-id
                     :auto-complete :off
                     :readOnly      (false? editor?)}])

       :component-did-mount
       (fn cm-did-mount [comp]
         (let [node (dom/dom-node comp)
               extra-keys (ckey-binding (:ckey-binding opts))
               editor-shortcut (if editor? {:extraKeys extra-keys} {})
               cm-opts (merge (:cm-options opts) editor-shortcut)
               cm (cm-parinfer node cm-opts)]
           (when editor?
             (.on cm "change"
                  (fn [cm _]
                    (let [val (string/trim (.getValue cm))]
                      (when-not (empty? val)
                        (save-form val))))))
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
