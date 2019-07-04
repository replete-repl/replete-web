(ns replete.worker-client
  (:require [re-frame.core :refer [dispatch]]
            [cljs.reader :as reader]))

(def worker-path
  (if ^boolean goog.DEBUG
    "js/bootstrap_worker.js"
    "js/compiled/worker.js"))

(defn handle-message [e]
  (dispatch (reader/read-string (.-data e))))

(defonce worker (atom nil))

(defn stop! []
  (when-let [w @worker]
    (.terminate w)
    (reset! worker nil)))

(defn init! []
  (stop!)
  (reset! worker (js/Worker. worker-path))
  (.addEventListener @worker "message" handle-message))

(defn send! [event]
  (.postMessage @worker (str event)))
