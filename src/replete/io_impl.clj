(ns replete.io-impl
  (:require [clojure.tools.namespace.find :as find]
            [clojure.tools.namespace.file :as file]
            [clojure.java.io :as io]
            [clojure.java.classpath :as classpath]
            [clojure.string :as string]))

(defn ns->path
  [ns]
  (-> (name ns)
      (string/replace #"\." "/")
      (string/replace #"-" "_")))

(defn ns-relative-path
  [ns path]
  (let [ns-pattern (re-pattern (str (ns->path ns) ".*"))]
    (re-find ns-pattern path)))

(defn meta+val [rdr]
  (when-let [ns-decl (-> rdr file/read-file-ns-decl)]
    (let [ns (-> ns-decl second str)]
      {:relative-path (ns-relative-path ns (.getPath rdr))
       :ns ns
       :source (slurp rdr)})))

(defn name-val [rdr]
  [(-> rdr file/read-file-ns-decl second str) (slurp rdr)])

(defn clj-files []
  (->> (classpath/classpath-directories)
       (mapcat #(find/find-sources-in-dir %))))

(defn cljs-files []
  (->> (classpath/classpath-directories)
       (mapcat #(find/find-sources-in-dir % find/cljs))))

(defn jars []
  (->> (classpath/classpath-jarfiles)
       (mapcat #(find/sources-in-jar % find/cljs))
       (map io/resource)))

(defn resources []
  (concat (jars) (clj-files) (cljs-files)))

(defn collate [entries]
  (reduce conj {} entries))

;; must be able to know if source
;; is clj / cljs / cljc
;; cos filename is passed not the namespace

;; clojure/test/check.clj
;; clojure/test/check.cljc
;; clojure/test/check.cljs

;; clojure/test/check/clojure_test.clj
;; clojure/test/check/clojure_test.cljc
;; clojure/test/check/clojure_test.cljs

;; so we should carry the names of the files too

(defn sources* [names]
  (let [in-names? (->> names (map str) set)
        relevant? (fn [[name _]] (in-names? name))]
    (->> (resources)
         (map name-val)
         (filter relevant?)
         collate)))

(defn key-val [meta-plus-val]
  [(:relative-path meta-plus-val) meta-plus-val])

(defn sources+meta* [names]
  (let [in-names? (->> names (map str) set)
        relevant? (fn [{:keys [ns]}] (in-names? ns))]
    (->> (resources)
         (keep meta+val)
         (filter relevant?)
         set
         (map key-val)
         collate)))

(defmacro sources
  "Make a map of namespace name to source, looking for files on the classpath and in jars."
  [& names]
  (sources+meta* names))