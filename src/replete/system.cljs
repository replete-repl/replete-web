(ns replete.system
  (:require
    [reagent.core :as reagent]
    [re-frame.core :as re-frame]
    [replete.editor :as editor]
    [replete.events :as events]
    [replete.worker-client :as wc]))

(defn dev-setup []
  (enable-console-print!))

(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (reagent/render [editor/replete-editor]
                  (.getElementById js/document "app")))

(defn ^:export init []
  (wc/init!)
  (re-frame/dispatch-sync [::events/initialize-db])
  (dev-setup)
  (mount-root))
