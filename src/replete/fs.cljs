(ns replete.fs
  (:require [clojure.set :refer [map-invert]]
            [clojure.string :as string]))

(def kw-encodings {:utf-8 "UTF-8"})
(def str-encodings (map-invert kw-encodings))

(defn node
  [node-name]
  {:name node-name})

(defn file
  [file-name]
  (merge
    (node file-name)
    {:type    :file
     :address (keyword (str (random-uuid)))}))

(defn dir
  ([dir-name]
   (dir dir-name {}))
  ([dir-name nodes]
   (assoc {}
     (keyword dir-name)
     (merge (node dir-name)
            {:type  :directory
             :nodes nodes}))))

;; Basic FS structure

(def replete-fs (atom {:nodes   {}
                       :content {}}))


;; Simpler functions first ---

(defn create-file
  "Creates a node in the file system with an address for content"
  ([file-name]
    (create-file replete-fs file-name))
  ([fs file-name]
   (let [file (file file-name)]
     (swap! fs assoc-in [:nodes (keyword (:name file))] file))))

(def file-not-found 0)

(defn open-file
  "Provides a link for clients to an actual file or 0"
  ([file-name]
    (open-file replete-fs file-name))
  ([fs file-name]
   (if-let [leaf-node (get-in @fs [:nodes (keyword file-name)])]
     (:address leaf-node)
     file-not-found)))

(defn write-file
  ([fd content]
    (write-file replete-fs fd content))
  ([fs fd content]
   (swap! fs assoc-in [:content fd] content)))

(defn read-file
  ([fd]
    (read-file replete-fs fd))
  ([fs fd]
   (get-in @fs [:content fd])))



