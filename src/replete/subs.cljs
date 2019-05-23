(ns replete.subs
  (:require [re-frame.core :refer [reg-sub]]))

(reg-sub
  ::eval-result
  (fn [db]
    (:eval-result db)))

(reg-sub
  ::current-form
  (fn [db]
    (:current-form db)))

(reg-sub
  ::clear-input-form
  (fn [db]
    (:clear-input db)))

(reg-sub
  ::os
  (fn [db]
    (:os db)))

(reg-sub
  ::ckey-binding
  (fn [db]
    (:ckey-binding db)))


