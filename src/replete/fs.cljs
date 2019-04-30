(ns replete.fs
  (:require [clojure.set :refer [map-invert]]
            [clojure.string :as string]))

(def path-separator-ch "/")
(def path-separator-kw :separator)
(def kw-encodings {:utf-8 "UTF-8"})
(def str-encodings (map-invert kw-encodings))

(defn node
  [node-name]
  {:name node-name})

;; TODO devise key that we can use for content (eg UUID)
;; TODO Put the content in another map
(defn file
  ([file-name]
   (file file-name nil))
  ([file-name content]
   (file file-name content :utf-8))
  ([file-name content encoding]
   (merge (node file-name)
          {:type     :file
           :content  content
           :encoding encoding})))

(defn file-descriptor
  "Provides a link for clients to an actual file or 0"
  [tree file]
  ())

(defn dir
  ([dir-name]
   (dir dir-name {}))
  ([dir-name nodes]
   (assoc {}
     (keyword dir-name)
     (merge (node dir-name)
            {:type  :directory
             :nodes nodes}))))

;; Make into an atom
(def replete-fs {:/ (dir "/")})

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

(defn tree-node-search
  "Return the sequence of nodes that matches
  as much pathname as possible in the file-system.
  Returns nil when there is no top-level match."
  [file-system pathname]
  {:pre [(string/starts-with? pathname "/")]}
  (if (= pathname "/")
    [file-system]
    (loop [matching-nodes [file-system]
           nodes file-system
           path-nodes (path->nodes pathname)]
      (let [node-match (get nodes (keyword (first path-nodes)))]
        (if-not node-match
          matching-nodes
          (recur (conj matching-nodes node-match)
                 (:nodes node-match)
                 (next path-nodes)))))))

(defn match-leaf-node-with
  "Invoke f on a leaf node that matches pathname in the file-system"
  [file-system pathname f]
  {:pre [(string/starts-with? pathname "/")]}
  (let [nodes (tree-node-search file-system pathname)]
    (and (= (-> pathname path->parts parts->path)
            (nodes->path (map #(or (:name %)
                                   (name (first (keys %)))) nodes)))
         (f (last nodes)))))

(defn path-exists?
  [fs pathname]
  (match-leaf-node-with
    fs pathname #(not (nil? %))))

(defn- type-exists [type node]
  (or (= (:type node) type)
      (= (-> node vals first :type)
         type)))

(defn dir-exists?
  [fs pathname]
  (match-leaf-node-with
    fs pathname
    (partial type-exists :directory)))

(defn file-exists?
  [fs pathname]
  (match-leaf-node-with
    fs pathname
    (partial type-exists :file)))

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
  (let [basedir (basedir pathname)]
    (or (= basedir "/")
        (and (dir-exists? fs basedir)
             (not (path-exists? fs pathname))))))

(defn- merge-nodes
  [node update-node]
  (let [kw-node (if-not (:type node)
                  node
                  (assoc {} (-> node :name keyword) node))]
    (if (:nodes update-node)
      (assoc {} (-> update-node :name keyword)
                (update-in update-node [:nodes] merge kw-node))
      (merge update-node kw-node))))

(defn- add-leaf-node
  [fs pathname leaf-node]
  (if-not (can-create-node? fs pathname)
    (throw (ex-info "false: can-create-node?" {:pathname pathname}))
    (let [path-nodes (tree-node-search fs (basedir pathname))
          initial-node (merge-nodes leaf-node (last path-nodes))]
      (reduce
        (fn [updated-node node]
          (merge-nodes updated-node node))
        initial-node
        (reverse (butlast path-nodes))))))

;; TODO - update atom
(defn make-directory
  [fs pathname]
  (add-leaf-node fs pathname (dir (basename pathname))))

;; TODO - update atom
(defn make-file
  [fs pathname]
  (add-leaf-node fs pathname (file (basename pathname))))

;; Update the last node, next node up and all way to the top

(def simple-fs (merge (dir "etc")
                      (dir "tmp")))

(def sample-fs (merge (dir "tmp")
                      (dir "var" {:logs    (dir "logs")
                                  :contrib (dir "contrib")})
                      (dir "etc" {:passwd (file "passwd")
                                  :group  (file "group")
                                  :local  (dir "local")})))