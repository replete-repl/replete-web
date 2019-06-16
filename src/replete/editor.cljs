(ns replete.editor
  (:require
    [re-frame.core :as re-frame]
    [re-com.core :refer [h-box v-box box button gap line scroller
                         border label input-text v-split md-icon-button
                         input-textarea title flex-child-style p slider]]
    [replete.cm-edit :as cm-edit]
    [replete.cm-eval :as cm-eval]
    [replete.events :as events]
    [replete.helpers :as helpers]
    [replete.subs :as subs]))

(def ^:private editor-box-style
  (merge (flex-child-style "1")
         {:border          "1px solid lightgrey"
            :border-radius "4px"}))

(defn- enter-binding
  [enter]
  (assoc {} enter #(re-frame/dispatch [::events/eval])))

(defn- up-binding
  [up]
  (assoc {} up #(re-frame/dispatch [::events/history-prev])))

(defn- down-binding
  [down]
  (assoc {} down #(re-frame/dispatch [::events/history-next])))

(defn edit-mirror
  "Edit forms with parinfer support"
  [key-bindings]
  (let [clear-form (re-frame/subscribe [::subs/clear-input-form])
        restore-item (re-frame/subscribe [::subs/restore-item])
        enter (enter-binding (:enter key-bindings))
        down (down-binding (:down key-bindings))
        up (up-binding (:up key-bindings))]
    (fn []
      (let [opts {:node-id    "editor"
                  :changes    (or @restore-item @clear-form)
                  :cm-options {:autofocus true
                               :extraKeys (merge enter up down)
                               :theme     "replete-edit-light"}}]
        [box
         :style editor-box-style
         :child [cm-edit/cmirror-edit-comp opts]]))))

(def ^:private replete-preamble-text
  (str "ClojureScript " *clojurescript-version*
       "\n    Docs : (doc function-name)"
       "\n           (find-doc \"part-of-name\")"
       "\n  Source : (source function-name)"
       "\n Results : Stored in *1, *2, *3,"
       "\n           an exception in *e\n\n"))

(def ^:private preamble-markup
  {:start 0
   :end   (helpers/lines-count replete-preamble-text)
   :width (helpers/max-line-width replete-preamble-text)})


(defn eval-mirror
  "Show evalled results from the component it is `watching`"
  []
  (let [result (re-frame/subscribe [::subs/eval-result])]
    (fn []
      (let [opts {:editor?         false
                  :node-id         "eval-history"
                  :cm-options      {:readOnly true
                                    :theme    "replete-eval-light"}
                  :preamble-text   replete-preamble-text
                  :preamble-markup preamble-markup
                  :changes         @result}]
        [box
         :style editor-box-style
         :child [cm-eval/cmirror-eval-comp opts]]))))

(defn- button-label
  [os]
  (str "Eval (or "
       (if (= os :macosx) "Cmd" "Ctrl")
       "-Enter)"))

(defn edit-panel
  []
  (let [key-bindings (re-frame/subscribe [::subs/key-bindings])]
    (fn []
      [v-box :size "100%" :gap "5px"
       :children
       [[edit-mirror @key-bindings]
        [button
         :class "btn-primary"
         :label (str "Eval")
         :tooltip (str "Shortcut: " (name (:enter @key-bindings)))
         :on-click #(re-frame/dispatch [::events/eval])]]])))

(def ^:private main-style
  {:position "absolute"
   :padding  "5px"
   :top      "0px"
   :bottom   "0px"
   :width    "100%"})

(defn replete-editor
  []
  [box
   :style main-style
   :child [v-split :initial-split 70
           :panel-1 [eval-mirror]
           :panel-2 [edit-panel]]])


