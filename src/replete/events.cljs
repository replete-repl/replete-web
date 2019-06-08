(ns replete.events
  (:require [clojure.string :as string]
            [replete.io-impl]
            [replete.prepl :as prepl]
            [re-frame.core :refer [dispatch
                                   reg-event-db
                                   reg-event-fx
                                   reg-fx]]))

(defn key-bindings
  [os]
  (let [ckey (if (= os :macosx) "cmd" "ctrl")
        keys ["enter" "up" "down"]]
    (into
      {}
      (map
        (fn [c-key the-key]
          [(keyword the-key)
           (keyword (str (string/capitalize c-key)
                         "-"
                         (string/capitalize the-key)))])
        (repeat ckey) keys))))

(defonce
  os-data
  (let [app-version (.-appVersion js/navigator)
        os (cond
             (re-find #"Win" app-version) :windows
             (re-find #"X11" app-version) :unix
             (re-find #"Linux" app-version) :linux
             (re-find #"Mac" app-version) :macosx
             :else :unknown-os)]
    {:os os :key-bindings (key-bindings os)}))

(reg-event-db
  ::initialize-db
  (fn [_ _]
    (merge {:app-name "replete-web"}
           os-data)))

(reg-event-db
  ::save-form
  (fn [db [_ clojure-form]]
    (assoc db :current-form clojure-form
              :clear-input nil)))

(reg-event-db
  ::clear-input
  (fn [db _]
    (assoc db
      :clear-input {:clear-input-form true})))

(reg-event-db
  ::input-history
  (fn [db [_ clojure-form]]
    (let [history (or (:input-history db) [])]
      (assoc db
        :input-history (conj history clojure-form)
        :history-index (-> history count inc)))))

(reg-event-db
  ::eval-result
  (fn [db [_ eval-result]]
    (assoc db :eval-result eval-result)))

(reg-fx
  ::async-eval
  (fn [clojure-form]
    (let [result (prepl/read-eval clojure-form)]
      (dispatch [::eval-result result])
      (dispatch [::input-history clojure-form])
      (dispatch [::clear-input]))))

(reg-event-fx
  ::eval
  (fn [{:keys [db]} _]
    {:db          (assoc db :restore-item nil)
     ::async-eval (:current-form db)}))

(defn next-prev [db f]
  (let [index (f (:history-index db))
        history (:input-history db)
        item (nth history index :not-found)]
    (if (= item :not-found)
      db
      (assoc db :history-index index
                :restore-item item
                :current-form item))))

(reg-event-db
  ::history-prev
  (fn [db _]
    (next-prev db dec)))

(reg-event-db
  ::history-next
  (fn [db _]
    (next-prev db inc)))




