(ns replete.subs
  (:require [re-frame.core :refer [reg-sub]]))

(reg-sub
  ::eval-result
  (fn [db]
    (:eval-result db)))

(reg-sub
  ::os
  (fn [db]
    (:os db)))