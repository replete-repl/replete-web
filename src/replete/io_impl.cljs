(ns replete.io-impl
  (:require-macros
    [replete.io-impl :refer [sources]])
  (:require [clojure.string :as string]))


;js/REPLETE_COPY
;js/REPLETE_DELETE
;js/REPLETE_FSTAT
;js/REPLETE_IS_DIRECTORY
;js/REPLETE_LIST_FILES
;js/REPLETE_MKDIRS
;js/REPLETE_RAW_FLUSH_STDERR
;js/REPLETE_RAW_FLUSH_STDOUT
;js/REPLETE_RAW_READ_STDIN
;js/REPLETE_REQUEST
;js/REPLETE_SLEEP

;; Add each of the above to a global variable so that it is accessed in the code

(def dependencies
  (sources clojure.core.reducers
           clojure.data
           clojure.reflect
           clojure.set
           clojure.string
           clojure.walk
           clojure.zip
           clojure.test.check
           clojure.test.check.clojure-test
           clojure.test.check.generators
           clojure.test.check.properties
           clojure.test.check.random
           cljs.analyzer
           cljs.analyzer.api
           cljs.analyzer.macros
           cljs.core
           cljs.env
           cljs.env.macros
           cljs.js
           cljs.nodejs
           cljs.pprint
           cljs.reader
           cljs.repl
           cljs.spec.alpha
           cljs.spec.gen.alpha
           cljs.spec.test.alpha
           cljs.tagged-literals
           cljs.tools.reader
           cljs.tools.reader.reader-types
           cljs.tools.reader.impl.errors
           cljs.tools.reader.impl.commons
           cljs.tools.reader.impl.inspect
           cljs.tools.reader.impl.utils
           cljs.test))

(defn load
  "A namespace loader that looks up the source against the
   given relative path in the dependencies bundle."
  [namespace-relative-path]
  (:source (get dependencies namespace-relative-path)))

(defn load-from-jar
  [file-path resource]
  (throw (ex-info "unsupported operation"
                  {:file-path file-path :resource resource})))

;; In memory file-system
;  js/REPLETE_FILE_READER_OPEN
(defn file-reader-open
  ([path]
   (file-reader-open path "UTF-8"))
  ([path encoding])
  )

(set! (.-REPLETE_LOAD js/goog.global) load)
(set! (.-REPLETE_LOAD_FROM_JAR js/goog.global) load-from-jar)


