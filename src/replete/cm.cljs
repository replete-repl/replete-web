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
            [replete.events :as events]))

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

(defn cmirror-comp
  [opts]
  (let [cmirror (atom nil)
        editor? (:editor? opts)
        node-id (str (if editor? "editor" "evaller"))
        cm-update (fn [comp]
                    (when-let [{:keys [form val ns] :as c} (:changes (reagent/props comp))]
                      (.setValue @cmirror (str form "\n" val "\n" ns "=>"))))]
    (reagent/create-class
      {:reagent-render         (fn cm-render []
                                 [:textarea {:id            node-id
                                             :auto-complete :off
                                             :readOnly      (false? editor?)}])
       :component-did-mount    (fn cm-did-mount [comp]
                                 (let [node (dom/dom-node comp)
                                       extra-keys {:Cmd-Enter (fn [cm]
                                                                (re-frame/dispatch
                                                                  [::events/eval (.getValue cm)]))}
                                       editor-shortcut (if editor? {:extraKeys extra-keys} {})
                                       cm-opts (merge (:cm-options opts) editor-shortcut)
                                       cm (cm-parinfer node cm-opts)]
                                   (reset! cmirror cm))
                                 (cm-update comp))
       :component-will-unmount (fn cm-will-unmount []
                                 (.toTextArea @cmirror)
                                 (reset! cmirror nil))
       :component-did-update   cm-update
       :display-name           node-id})))
