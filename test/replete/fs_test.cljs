(ns replete.fs-test
  (:require
    [clojure.test :refer [deftest is testing run-tests use-fixtures]]
    [replete.fs :as fs]))

(deftest make-file-test
  (testing "we can manipulate a file"
    (let [file-name "file1"
          content (str "good-content")]
      (fs/create-file file-name)
      (let [fd (fs/open-file file-name)]
        (is (keyword? fd))
        (fs/write-file fd content)
        (is (= content (fs/read-file fd)))))))




