(ns replete.fs
  (:require [clojure.set :refer [map-invert]]
            [clojure.string :as string]))

(def kw-encodings {:utf-8 "UTF-8"})
(def str-encodings (map-invert kw-encodings))

(defn node
  [node-name]
  {:name node-name})

(defn file
  ([file-name]
   (file file-name :utf-8))
  ([file-name encoding]
   (merge
     (node file-name)
     {:type     :file
      :encoding (if (keyword? encoding)
                  encoding
                  (or (str-encodings encoding) :utf-8))
      :address  (keyword (str (random-uuid)))})))

(defn dir
  ([dir-name]
   (dir dir-name {}))
  ([dir-name nodes]
   (assoc {}
     (keyword dir-name)
     (merge (node dir-name)
            {:type  :directory
             :nodes nodes}))))

;; Basic file system structure

(def ^:private replete-fs
  (atom {:nodes   {}
         :content {}}))

;; Simpler functions first ---

(defn- create-file
  "Creates a node in the file system with an address for content"
  ([file-name encoding]
   (create-file replete-fs file-name encoding))
  ([fs file-name encoding]
   (let [f (file file-name encoding)]
     (swap! fs assoc-in [:nodes (keyword (:name f))] f))))

(def file-not-found 0)

(defn open-file-reader
  "Provides a file-descriptor to an existing file or 0"
  ([file-name]
   (open-file-reader file-name :utf-8))
  ([file-name encoding]
   (open-file-reader replete-fs file-name encoding))
  ([fs file-name encoding]
   (if-let [leaf-node (get-in @fs [:nodes (keyword file-name)])]
     (if (= (:encoding leaf-node) encoding)
       (:address leaf-node)
       file-not-found))))

(defn read-file
  "Return a tuple of [data err] where err is normally nil"
  ([fd]
   (read-file replete-fs fd))
  ([fs fd]
   [(get-in @fs [:content fd]) nil]))

(defn close-file-reader
  [fd]
  ;; no-op
  )

(defn open-file-writer
  "Provides a file-descriptor to an existing or newly created file"
  ([file-name]
   (open-file-writer replete-fs file-name false))
  ([file-name append?]
   (open-file-writer replete-fs file-name append? :utf-8))
  ([file-name append? encoding]
   (open-file-writer replete-fs file-name append? encoding))
  ([fs file-name append? encoding]
   (if-let [leaf-node (get-in @fs [:nodes (keyword file-name)])]
     (if (= (:encoding leaf-node) encoding)
       ;; Set append? on the content map
       (:address leaf-node)
       (create-file fs file-name encoding)))))

(defn write-file
  ([fd content]
   (write-file replete-fs fd content))
  ([fs fd content]
    ;; to do implement append?
   (when-not (swap! fs assoc-in [:content fd] content)
     ;; ex-info?
     :writer-error)))

(defn flush-file-writer
  [fd]
  ;; no-op
  )

(defn close-file-writer
  [fd]
  ;; clear append? on content map
  )


(set! (.-REPLETE_FILE_READER_OPEN js/goog.global) open-file-reader)
(set! (.-REPLETE_FILE_READER_READ js/goog.global) read-file)
(set! (.-REPLETE_FILE_READER_CLOSE js/goog.global) close-file-reader)

(set! (.-REPLETE_FILE_WRITER_OPEN js/goog.global) open-file-writer)
(set! (.-REPLETE_FILE_WRITER_WRITE js/goog.global) write-file)
(set! (.-REPLETE_FILE_WRITER_FLUSH js/goog.global) flush-file-writer)
(set! (.-REPLETE_FILE_WRITER_CLOSE js/goog.global) close-file-writer)




