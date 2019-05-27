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
            [replete.events :as events]
            [replete.pprint :as pprint]))

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
  (:val prepl-result))

;; TODO: how to ensure codemirror uses parinfer rendering for
;; TODO: showing values and plainer formatting for other text?
(defn parse-update
  [eval-update]
  (cond
    (:preamble eval-update)
    (str (:preamble eval-update) "\n\n")

    (coll? eval-update)
    (str (:form (first eval-update))
         "\n"
         (apply str (map :val eval-update))
         "\n\n")))

(defn save-form
  [clojure-form]
  (re-frame/dispatch
    [::events/save-form clojure-form]))

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

(defn enter-binding
  [enter]
  (assoc {} enter #(re-frame/dispatch [::events/eval])))

(defn up-binding
  [up]
  (assoc {} up #(re-frame/dispatch [::events/history-prev])))

(defn down-binding
  [down]
  (assoc {} down #(re-frame/dispatch [::events/history-next])))

(defn cmirror-edit-comp
  [opts]
  (let [cmirror (atom nil)
        node-id (:node-id opts)
        cm-update (fn [comp]
                    (when-let [changes (:changes (reagent/props comp))]
                      (if (:clear-input-form changes)
                        (.setValue @cmirror "")
                        (.setValue @cmirror changes))))]
    (reagent/create-class
      {:reagent-render
       (fn cm-render
         []
         [:textarea {:id node-id :auto-complete :off}])

       :component-did-mount
       (fn cm-did-mount
         [comp]
         (let [node (dom/dom-node comp)
               enter (enter-binding (get-in opts [:key-bindings :enter]))
               down (down-binding (get-in opts [:key-bindings :down]))
               up (up-binding (get-in opts [:key-bindings :up]))
               editor-shortcut {:extraKeys (merge enter up down)}
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
