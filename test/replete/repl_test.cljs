(ns replete.repl-test
  (:require
    [clojure.test :refer [deftest is testing run-tests]]
    [clojure.string :as string]
    [replete.repl :as repl]))

(def test-nses ["clojure.data"
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
                "cljs.tools.reader.reader-types"])

(defn require+fn
  ([ns f]
   (require+fn ns f nil))
  ([ns f arg]
   (let [{:keys [val] :as result}
         (repl/read-eval (str "(require '" ns ")"))]
     (if (nil? val)
       (repl/read-eval (str "(" f " " (if arg arg "") ")"))
       (println :nil-require :arg arg :result result)))))

;; Currently failing - "cljs.core.async"

(defn require+dir
  [test-ns]
  (let [{:keys [val]} (require+fn test-ns "dir" test-ns)]
    (assoc {} (if (string? val) :pass :fail) test-ns)))

(deftest bundle-dir-test
  (testing "Verify dir on bundled nses"
    (is (= (count test-nses)
           (count (filter :pass (map require+dir test-nses)))))))

(defn require+source
  [[test-ns sym]]
  (let [{:keys [val]} (require+fn test-ns "dir" test-ns)]
    (when val
      (let [_ (repl/read-eval (str "(in-ns '" test-ns ")"))
            doc (:val (repl/read-eval (str "(source " sym ")")))]
        (assoc {} (if (string? doc) :pass :fail) test-ns)))))

(deftest bundle-source-test
  (testing "Verify source on bundled nses"
    (let [test-srces [["clojure.set" "union"]]]
      (is (= (count test-srces)
             (count (filter :pass (map require+source test-srces))))))))

(deftest max-source-test
  (testing "Verify source on a core fn"
    (let [{:keys [val]} (repl/read-eval "(source max)")]
      (is (string/starts-with? val "(defn ^number max")))))


