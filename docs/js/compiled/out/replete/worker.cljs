(ns replete.worker
  (:require [replete.prepl :as prepl]
            [cljs.reader :as reader]))

(this-as this
  (defn send! [event]
    (.postMessage this (str event))))

(defmulti handle-message #(first %))

(defmethod handle-message :eval/form [[_ clojure-form]]
  (let [result (prepl/read-eval (str clojure-form))]
    (send! [:eval/result result])))

(this-as this
  (.addEventListener this "message" #(handle-message (reader/read-string (.-data %)))))
