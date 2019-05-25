(ns replete.events
  (:require [replete.io-impl]
            [replete.prepl :as prepl]
            [re-frame.core :refer [reg-event-db reg-event-fx
                                   reg-fx dispatch]]))

(defonce preamble
         (str "ClojureScript " *clojurescript-version*
              "\n    Docs : (doc function-name)"
              "\n           (find-doc \"part-of-name\")"
              "\n  Source : (source function-name)"
              "\n Results : Stored in *1, *2, *3,"
              "\n           an exception in *e"))

(defonce os-data
         (let [app-version (.-appVersion js/navigator)
               os (cond
                    (re-find #"Win" app-version) :windows
                    (re-find #"X11" app-version) :unix
                    (re-find #"Linux" app-version) :linux
                    (re-find #"Mac" app-version) :macosx
                    :else :unknown-os)]
           {:os           os
            :ckey-binding (if (= os :macosx)
                            :Cmd-Enter
                            :Ctrl-Enter)}))

(reg-event-db
  ::initialize-db
  (fn [_ _]
    (merge {:app-name "replete-web"
            :preamble {:preamble preamble}}
           os-data)))

(reg-event-db
  ::save-form
  (fn [db [_ clojure-form]]
    (assoc db :current-form clojure-form
              :clear-input nil)))

(reg-event-db
  ::clear-input
  (fn [db _]
    (assoc db :clear-input {:clear-input-form true})))

(reg-event-db
  ::eval-result
  (fn [db [_ eval-result]]
    (assoc db :eval-result eval-result)))

(reg-fx
  ::async-eval
  (fn [clojure-forms]
    (let [result (prepl/read-eval clojure-forms)]
      (dispatch [::eval-result result])
      (dispatch [::clear-input]))))

(reg-event-fx
  ::eval
  (fn [{:keys [db]} _]
    {:db          db
     ::async-eval (:current-form db)}))

