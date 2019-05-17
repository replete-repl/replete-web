(ns replete.events
  (:require [replete.io-impl]
            [replete.prepl :as prepl]
            [re-frame.core :refer [reg-event-db reg-event-fx
                                   reg-fx dispatch]]))

(def preamble
  (str "ClojureScript " *clojurescript-version*
       "\n    Docs : (doc function-name)"
       "\n           (find-doc \"part-of-name\")"
       "\n  Source : (source function-name)"
       "\n Results : Stored in *1, *2, *3,"
       "\n           an exception in *e"))

(reg-event-db
  ::initialize-db
  (fn [_ _]
    {:app-name "replete-web"
     :eval-result {:val preamble}}))

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
    (let [result (prepl/read-eval clojure-forms)]
      (dispatch [::eval-result result]))))

(reg-event-fx
  ::eval
  (fn [{:keys [db]} [_ clojure-forms]]
    {:db          db
     ::async-eval clojure-forms}))

