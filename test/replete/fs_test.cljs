(ns replete.fs-test
  (:require
    [clojure.test :refer [deftest is testing run-tests use-fixtures]]
    [replete.fs :as fs]))

(deftest make-file-test
  (testing "we can do simple manipulate of a file"
    (let [file-name "file1"
          content (str "good-content")]
      (let [fd (fs/open-file-writer file-name)]
        (is (keyword? fd))
        (fs/write-file fd content)
        (fs/close-file-writer fd)
        (let [[data err] (-> (fs/open-file-reader file-name)
                             (fs/read-file))]
          (is (= content data)))))))




