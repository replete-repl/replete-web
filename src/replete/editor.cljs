(ns replete.editor
  (:require
    [re-frame.core :as re-frame]
    [re-com.core :refer [h-box v-box box button gap line scroller border
                         label input-text h-split v-split md-icon-button
                         input-textarea title flex-child-style p slider]]
    [replete.cm :as cmirror]
    [replete.subs :as subs]))


(defonce default-style
         {:font-family   "Menlo, Lucida Console, Monaco, monospace"
          :border-radius "8px"
          :border        "1px solid lightgrey"
          :padding       "15px 15px 15px 15px"})

(defonce box-style
         (merge (flex-child-style "1")
                default-style))

(defn box-mirror
  [opts]
  [box :style (dissoc box-style :border :padding)
   :child [cmirror/cmirror-comp opts]])

(defn edit-mirror
  "Edit forms with parinfer support"
  []
  [box-mirror {:editor?    true
               :cm-options {:autofocus true}}])

(defn eval-mirror
  "Show evalled results from the component it is `watching`"
  []
  (let [result (re-frame/subscribe [::subs/eval-result])]
    (fn []
      [box-mirror {:editor? false
                   :changes @result}])))

(defn edit-panel
  []
  [v-box :size "auto"
   :children
   [[eval-mirror]
    [line :size "2px"]
    [edit-mirror]]])

(def main-style
  {:position "absolute"
   :padding  "5px"
   :top      "0px"
   :bottom   "0px"
   :width    "100%"})

(defn replete-editor
  []
  [box :style main-style :child [edit-panel]])



