(ns replete.subs
  (:require [re-frame.core :refer [reg-sub]]))

(reg-sub
  ::preamble
  (fn [db]
    (:preamble db)))

(reg-sub
  ::restore-item
  (fn [db]
    (:restore-item db)))

(reg-sub
  ::input-history
  (fn [db]
    (:input-history db)))

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
  ::key-bindings
  (fn [db]
    (:key-bindings db)))




