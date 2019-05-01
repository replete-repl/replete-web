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

(defn find-leaf-node
  "Return the leaf node that matches pathname in the file-system"
  [file-system pathname]
  {:pre [(string/starts-with? pathname "/")]}
  (let [nodes (tree-node-search file-system pathname)]
    (and (= (-> pathname path->parts parts->path)
            (nodes->path (map #(or (:name %)
                                   (name (first (keys %)))) nodes)))
         (last nodes))))

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

(defn- type-exists?
  [type fs pathname]
  (when-let [node (find-leaf-node fs pathname)]
    (or (= (:type node) type)
        (= (-> node vals first :type)
           type))))

(def dir-exists? (partial type-exists? :directory))
(def file-exists? (partial type-exists? :file))

(defn- find-node
  [type fs pathname]
  (when-let [leaf-node (find-leaf-node fs pathname)]
    (when (type-exists? type fs leaf-node)
      leaf-node)))

(def find-file (partial find-node :file))
(def find-dir (partial find-node :directory))

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
  (let [merge-node (if-not (:type node)
                     node
                     (assoc {} (-> node :name keyword) node))]
    (cond
      (:nodes update-node)
      (assoc {} (-> update-node :name keyword)
                (update-in update-node [:nodes] merge merge-node))

      (= 1 (count update-node))
      (let [[k v] (first update-node)]
        (assoc {} k (update-in v [:nodes] merge node)))

      :else
      (merge update-node merge-node))))

(defn add-leaf-node
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

(defn make-directory
  [fs pathname]
  (reset!
    fs
    (add-leaf-node @fs pathname (dir (basename pathname)))))

(defn make-file
  [fs pathname]
  (reset!
    fs
    (add-leaf-node @fs pathname (file (basename pathname)))))

(def replete-fs (atom {}))
(def replete-content (atom {}))

(def sample-fs (reset! replete-fs
                       (merge (dir "tmp")
                              (dir "var" {:logs    (dir "logs")
                                          :contrib (dir "contrib")})
                              (dir "etc" {:passwd (file "passwd")
                                          :group  (file "group")
                                          :local  (dir "local")}))))

(def file-not-found 0)

(defn file-descriptor
  "Provides a link for clients to an actual file or 0"
  [fs path]
  (if-let [leaf-node (find-leaf-node @fs path)]
    (:address leaf-node)
    file-not-found))

(defn add-content
  [fs path content]
  (let [fd (file-descriptor @fs path)]
    (swap! replete-content assoc fd content)))

(defn get-content
  [fs path]
  (let [fd (file-descriptor @fs path)]
    (get @replete-content fd)))