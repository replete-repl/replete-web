(ns replete.repl-test
  (:require
    [clojure.test :refer [deftest is testing run-tests]]
    [clojure.string :as string]
    [replete.io-impl]
    [replete.repl :as repl]))

(defn require+dir
  [ns]
  (let [{:keys [val] :as result} (repl/read-eval (str "(require '" ns ")"))]
    (if (nil? val)
      (do (println :require-ok)
          (repl/read-eval (str "(dir " ns ")")))
      (println :nil-require :ns ns :result result))))

(deftest repl-bundle-test
  (testing "Verify repl source - basic REPLETE_LOAD"
    (let [{:keys [val]} (repl/read-eval "(source max)")]
      (is (string/starts-with? val "(defn ^number max"))))

  (testing "Verify repl dir - more complex REPLETE_LOAD"

    ;; Currently failing

    ;; These tests pass
    (is (-> (require+dir "cljs.pprint")
            :val (string/starts-with? "*print-base*")))
    (is (-> (require+dir "cljs.spec.alpha")
            :val (string/includes? "explain-data")))
    (is (-> (require+dir "clojure.core.reducers")
            :val (string/starts-with? "->Cat")))
    (is (-> (require+dir "clojure.data")
            :val (string/starts-with? "Diff")))
    (is (-> (require+dir "clojure.set")
            :val (string/starts-with? "difference")))
    (is (-> (require+dir "clojure.string")
            :val (string/starts-with? "blank?")))
    (is (-> (require+dir "clojure.walk")
            :val (string/starts-with? "keywordize-keys")))
    (is (-> (require+dir "clojure.zip")
            :val (string/starts-with? "append-child")))

    ))




