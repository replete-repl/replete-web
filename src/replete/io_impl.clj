(ns replete.io-impl
  (:require [clojure.tools.namespace.find :as find]
            [clojure.tools.namespace.file :as file]
            [clojure.java.io :as io]
            [clojure.java.classpath :as classpath]
            [clojure.string :as string])
  (:import (java.io File)))

(defn- sort-files-breadth-first
  [files]
  (sort-by #(.getAbsolutePath ^File %) files))

(defn file-with-extension?
  "Returns true if the java.io.File represents a file whose name ends
  with one of the Strings in extensions."
  [^File file extensions]
  (and (.isFile file)
       (let [name (.getName file)]
         (some #(.endsWith name %) extensions))))

(defn find-sources-in-dir
  "Searches recursively under dir for source files. Returns a sequence
  of File objects, in breadth-first sort order.
  Second argument is a list of platform file extensions"
  [^File dir extensions]
  (->> (file-seq dir)
       (filter #(file-with-extension? % extensions))
       sort-files-breadth-first))

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
       :ns            ns
       :source        (slurp rdr)})))

(defn name-val [rdr]
  [(-> rdr file/read-file-ns-decl second str) (slurp rdr)])

(defn clj-files []
  (->> (classpath/classpath-directories)
       (mapcat #(find/find-sources-in-dir %))))

(defn cljs-files []
  (->> (classpath/classpath-directories)
       (mapcat #(find/find-sources-in-dir % find/cljs))))

(defn cljs-aot-js-files []
  (->> (io/resource "public/js/compiled/out/cljs")
       io/as-file file-seq
       (mapcat #(find-sources-in-dir % [".js" "cljs.cache.json"]))))

(defn goog-js-files []
  (->> (io/resource "public/js/compiled/out/goog")
       io/as-file file-seq
       (mapcat #(find-sources-in-dir % [".js"]))))

(defn cljs-jars []
  (->> (classpath/classpath-jarfiles)
       (mapcat #(find/sources-in-jar % find/cljs))
       (map io/resource)))

(defn clj-jars []
  (->> (classpath/classpath-jarfiles)
       (mapcat #(find/sources-in-jar %))
       (map io/resource)))

(defn resources []
  (concat (clj-jars) (cljs-jars) (clj-files) (cljs-files)))

(defn collate [entries]
  (reduce conj {} entries))

;; ALSO add support for .js so that we can load AOT version
;; if it exists

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

(defn meta+goog-dep [rdr]
  (let [ns (re-find #"goog/.*" (.getPath rdr))]
    {:relative-path ns
     :ns            ns
     :source        (slurp rdr)}))

(defn meta+cljs-aot-dep [rdr]
  (let [ns (re-find #"cljs/.*" (.getPath rdr))]
    {:relative-path ns
     :ns            ns
     :source        (slurp rdr)}))

(defn goog+meta*
  []
  (->> (goog-js-files)
       (map meta+goog-dep)
       set
       (map key-val)
       collate))

(defn cljs-aot-js+meta*
  []
  (->> (cljs-aot-js-files)
       (map meta+cljs-aot-dep)
       set
       (map key-val)
       collate))

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
  (merge (cljs-aot-js+meta*)
         (goog+meta*)
         (sources+meta* names)))