(ns replete.repl-test
  (:require
    [clojure.test :refer [deftest is testing run-tests]]
    [clojure.string :as string]
    [replete.repl :as repl]))

(defn require+dir
  [ns]
  (let [{:keys [val] :as result} (repl/read-eval (str "(require '" ns ")"))]
    (if (nil? val)
      (repl/read-eval (str "(dir " ns ")"))
      (println :nil-require :ns ns :result result))))

;; TODO map over dir of all ns-es to make this more complete
(deftest bundle-source-test
  (testing "Verify source - core cljs fn to prove out REPLETE_LOAD"
    (let [{:keys [val]} (repl/read-eval "(source max)")]
      (is (string/starts-with? val "(defn ^number max")))))

;; Currently failing - "cljs.core.async"

(deftest bundle-dir-test
  (testing "Verify dir on bundled nses"
    (let [test-nses ["clojure.data"
                     "clojure.set"
                     "clojure.string"
                     "clojure.test.check"
                     "clojure.test.check.clojure-test"
                     "clojure.test.check.generators"
                     "clojure.test.check.properties"
                     "clojure.walk"
                     "clojure.zip"
                     "cljs.analyzer"
                     "cljs.analyzer.api"
                     "cljs.analyzer.macros"
                     "cljs.core"
                     "cljs.pprint"
                     "cljs.reader"
                     "cljs.repl"
                     "cljs.spec.alpha"
                     "cljs.spec.gen.alpha"
                     "cljs.spec.test.alpha"
                     "cljs.tagged-literals"
                     "cljs.test"
                     "cljs.tools.reader"
                     "cljs.tools.reader.reader-types"]]
      (is (= (count test-nses)
             (count (filter :pass-ns
                            (map (fn [test-ns]
                                   (let [{:keys [val]} (require+dir test-ns)]
                                     (assoc {}
                                       (if (string? val)
                                         :pass-ns :fail-ns) test-ns)))
                                 test-nses))))))))


