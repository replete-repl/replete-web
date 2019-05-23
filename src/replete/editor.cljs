(ns replete.editor
  (:require
    [re-frame.core :as re-frame]
    [re-com.core :refer [h-box v-box box button gap line scroller
                         border label input-text v-split md-icon-button
                         input-textarea title flex-child-style p slider]]
    [replete.cm :as cmirror]
    [replete.events :as events]
    [replete.subs :as subs]))

(defonce box-style
         (merge
           (flex-child-style "1")
           {:font-family   "Menlo, Lucida Console, Monaco, monospace"
            :border        "1px solid lightgrey"
            :border-radius "4px"}))

(defn edit-mirror
  "Edit forms with parinfer support"
  [ckey-binding]
  (let [clear-form (re-frame/subscribe [::subs/clear-input-form])]
    (fn []
      (let [opts {:node-id      "editor"
                  :ckey-binding ckey-binding
                  :changes      @clear-form
                  :cm-options   {:autofocus true}}]
        [box
         :style box-style
         :child [cmirror/cmirror-edit-comp opts]]))))

(defn eval-mirror
  "Show evalled results from the component it is `watching`"
  []
  (let [result (re-frame/subscribe [::subs/eval-result])]
    (fn []
      (let [opts {:editor?    false
                  :node-id    "eval-history"
                  :cm-options {:readOnly true}
                  :changes    @result}]
        [box
         :style box-style
         :child [cmirror/cmirror-eval-comp opts]]))))

(defn button-label
  [os]
  (str "Eval (or "
       (if (= os :macosx) "Cmd" "Ctrl")
       "-Enter)"))

(defn edit-panel
  []
  (let [ckey-binding (re-frame/subscribe [::subs/ckey-binding])]
    (fn []
      [v-box :size "100%" :gap "5px"
       :children
       [[edit-mirror @ckey-binding]
        [button
         :class "btn-primary"
         :label (str "Eval (or " (name @ckey-binding) ")")
         :on-click #(re-frame/dispatch [::events/eval])]]])))

(def main-style
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


