(ns replete.cm
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

;; TODO: how to ensure codemirror uses parinfer rendering for
;; TODO: showing values and plainer formatting for other text?
(defn parse-update
  [update]
  (let [{:keys [preamble val form]} update]
    (str (if val                                            ; PREPL
           (str form "\n" val)
           preamble)
         "\n\n")))

(defn save-form
  [clojure-form]
  (re-frame/dispatch
    [::events/save-form clojure-form]))

(defn ckey-binding
  [ckey-binding]
  (assoc {} ckey-binding #(re-frame/dispatch [::events/eval])))

(defn cmirror-eval-comp
  [opts]
  (let [cmirror (atom nil)
        history (atom [])
        node-id (:node-id opts)
        cm-update (fn [comp]
                    (let [output (parse-update (:changes (reagent/props comp)))]
                      (swap! history conj output)
                      (.setValue @cmirror (apply str @history))
                      (.scrollIntoView @cmirror #js {:line (.lastLine @cmirror)})))]
    (reagent/create-class
      {:reagent-render
       (fn cm-render []
         [:textarea {:id node-id :auto-complete :off}])

       :component-did-mount
       (fn cm-did-mount [comp]
         (let [node (dom/dom-node comp)
               cm-opts (:cm-options opts)
               cm (cm-parinfer node cm-opts)]
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

(defn cmirror-edit-comp
  [opts]
  (let [cmirror (atom nil)
        node-id (:node-id opts)
        cm-update (fn [comp]
                    (let [changes (:changes (reagent/props comp))]
                      (when (:clear-input-form changes)
                        (.setValue @cmirror ""))))]
    (reagent/create-class
      {:reagent-render
       (fn cm-render
         []
         [:textarea {:id node-id :auto-complete :off}])

       :component-did-mount
       (fn cm-did-mount
         [comp]
         (let [node (dom/dom-node comp)
               extra-keys (ckey-binding (:ckey-binding opts))
               editor-shortcut {:extraKeys extra-keys}
               cm-opts (merge (:cm-options opts) editor-shortcut)
               cm (cm-parinfer node cm-opts)]
           (.on cm "change" (fn [cm _]
                              (let [val (string/trim (.getValue cm))]
                                (when-not (empty? val)
                                  (save-form val)))))
           (reset! cmirror cm))
         (cm-update comp))

       :component-will-unmount
       (fn cm-will-unmount
         []
         (.toTextArea @cmirror)
         (reset! cmirror nil))

       :component-did-update
       cm-update

       :display-name
       node-id})))
