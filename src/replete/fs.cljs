(ns replete.fs
  (:require [clojure.set :refer [map-invert]]
            [clojure.string :as string]))

;; TODO - convert loop / recur fns to reduce

(def path-separator-ch "/")
(def path-separator-kw :separator)
(def kw-encodings {:utf-8 "UTF-8"})
(def str-encodings (map-invert kw-encodings))

(defn node
  [name]
  {:name name})

;; TODO Put the content in another map
(defn file
  ([name]
   (file name nil))
  ([name content]
   (file name content :utf-8))
  ([name content encoding]
   (merge (node name)
          {:type     :file
           :content  content
           :encoding encoding})))

(defn file-descriptor
  "Provides a link for clients to an actual file or 0"
  [tree file]
  ())

(defn dir
  ([name]
   (dir name #{}))
  ([name nodes]
   (merge (node name)
          {:type  :directory
           :nodes nodes})))

;; sample fs
#_(def my-fs #{(dir "/"
                    #{(dir "tmp")
                      (dir "var" #{(dir "logs")
                                   (dir "contrib")})
                      (dir "etc" #{(file "passwd")
                                   (dir "local")
                                   (file "group")})})})

;; Make into an atom
(def replete-fs #{(dir "/")})

(defn path->parts
  [pathname]
  (if (= pathname "/")
    [path-separator-kw]
    (-> pathname
        (string/split (re-pattern path-separator-ch))
        (as-> xs
              (remove #(= "" %) xs)
              (interleave (repeat path-separator-kw) xs)))))

(defn path->nodes
  [pathname]
  (->> (path->parts pathname)
       (remove #(= % path-separator-kw))))

(defn parts->path
  [parts]
  (string/join (map (fn [part]
                      (if (= path-separator-kw part)
                        path-separator-ch
                        part))
                    parts)))

(defn nodes->path
  [nodes]
  (-> (repeat path-separator-kw)
      (interleave (rest nodes))
      parts->path))

(defn tree-nodes
  "Find the sequence of nodes that matches
   pathname in the file-system or nil"
  [file-system pathname]
  {:pre [(string/starts-with? pathname "/")]}
  (if (= pathname "/")
    [(first file-system)]
    (loop [matching-nodes [(first file-system)]
           nodes (:nodes (first file-system))
           path-nodes (path->nodes pathname)]
      (let [node-match (->> nodes
                            (filter #(= (first path-nodes) (:name %)))
                            first)]
        (if-not node-match
          matching-nodes
          (recur (conj matching-nodes node-match)
                 (:nodes node-match)
                 (next path-nodes)))))))

(defn match-leaf-node-with
  "Invoke f on a leaf node that matches pathname in the file-system"
  [file-system pathname f]
  {:pre [(string/starts-with? pathname "/")]}
  (let [nodes (tree-nodes file-system pathname)]
    (and (= (-> pathname path->parts parts->path)
            (nodes->path (map :name nodes)))
         (f (last nodes)))))

(defn path-exists?
  [fs pathname]
  (match-leaf-node-with fs pathname #(not (nil? %))))

(defn dir-exists?
  [fs pathname]
  (match-leaf-node-with fs pathname #(= (:type %) :directory)))

(defn file-exists?
  [fs pathname]
  (match-leaf-node-with fs pathname #(= (:type %) :file)))

(defn basedir
  [pathname]
  (if (= pathname "/")
    pathname
    (-> pathname path->parts drop-last parts->path)))

(defn basename
  [pathname]
  (-> pathname path->parts last))

(defn can-create-node?
  [fs pathname]
  (when-let [basedir (basedir pathname)]
    (or (= basedir "/")
        (and (dir-exists? fs basedir)
             (not (path-exists? fs pathname))))))

(defn update-fs-nodes
  [node updated-node]
  (let [nodes (remove #(= (:name %) (:name updated-node)) (:nodes node))
        updated (set (conj nodes updated-node))]
    (assoc node :nodes updated)))

;; TODO - update atom
(defn add-leaf-node
  [fs pathname leaf-node]
  (when (can-create-node? fs pathname)
    (let [tree-nodes (tree-nodes fs (basedir pathname))
          new-node (update-in (last tree-nodes) [:nodes] conj leaf-node)]
      (loop [updated-fs new-node
             targets (reverse (butlast tree-nodes))]
        (if-not targets
          (set [updated-fs])
          (recur (update-fs-nodes (first targets) updated-fs)
                 (next targets)))))))

(defn make-directory
  [fs pathname]
  (add-leaf-node fs pathname (dir (basename pathname))))

(defn make-file
  [fs pathname]
  (add-leaf-node fs pathname (file (basename pathname))))

;; Update the last node, next node up and all way to the top
