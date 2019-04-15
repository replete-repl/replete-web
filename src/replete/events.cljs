(ns replete.events
  (:require [replete.io-impl]
            [replete.repl :as repl]
            [re-frame.core :refer [reg-event-db reg-event-fx
                                   reg-fx dispatch]]
            [clojure.edn :as edn]))

(def DEFAULT_SERVER_TIMEOUT 3100)

(reg-event-db
  ::initialize-db
  (fn [_ _]
    {:app-name "replete-web"}))

(reg-event-db
  ::clojure-forms
  (fn [db [_ clojure-forms]]
    (assoc db :clojure-forms clojure-forms)))

(reg-event-db
  ::eval-result
  (fn [db [_ eval-result]]
    (assoc db :eval-result eval-result)))

(reg-fx
  ::async-eval
  (fn [clojure-forms]
    (let [result (repl/read-eval clojure-forms)]
      (dispatch [::eval-result result]))))

(reg-event-fx
  ::eval
  (fn [{:keys [db]} [_ clojure-forms]]
    {:db          db
     ::async-eval clojure-forms}))

(defn simulate-edits
  [new-value]
  (dispatch [::clojure-forms new-value])
  (dispatch [::eval new-value]))

