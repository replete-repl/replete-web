(ns replete.helpers
  (:require [clojure.string :as string]))

(defn max-line-width
      "The maximum width of lines in `s` or 0 if `s` is nil"
      [s]
      (or (some->> s
                   string/split-lines
                   (map count)
                   (reduce max))
          0))

(defn lines-count
      "The count of lines in `s` or 0 if `s` is nil"
      [s]
      (or (some-> s string/split-lines count) 0))
