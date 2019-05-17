(ns replete.editor
  (:require
    [re-frame.core :as re-frame]
    [re-com.core :refer [h-box v-box box button gap line scroller border
                         label input-text v-split md-icon-button
                         input-textarea title flex-child-style p slider]]
    [replete.cm :as cmirror]
    [replete.subs :as subs]))


(defonce default-style
         {:font-family "Menlo, Lucida Console, Monaco, monospace"
          :border      "1px solid lightgrey"
          :padding     "15px 15px 15px 15px"})

(defonce box-style
         (merge (flex-child-style "1")
                default-style))

(defn box-mirror
  [opts]
  [box
   :style (dissoc box-style :padding)
   :child [cmirror/cmirror-comp opts]])

(defn edit-mirror
  "Edit forms with parinfer support"
  []
  [box-mirror {:editor?    true
               :node-id    "editor"
               :cm-options {:autofocus true}}])

(defn eval-mirror
  "Show evalled results from the component it is `watching`"
  []
  (let [result (re-frame/subscribe [::subs/eval-result])]
    (fn []
      [box-mirror {:editor? false
                   :node-id "eval-history"
                   :changes @result}])))

(defn edit-panel
  []
  [v-box :size "100%" :gap "5px"
   :children
   [[edit-mirror]
    [button
     :class "btn-primary"
     :label "Eval (or Cmd-Enter)"]]])

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
   :child [v-split
           :panel-1 [eval-mirror]
           :panel-2 [edit-panel]]])


