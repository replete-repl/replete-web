(ns replete.io-impl
  (:require-macros
    [replete.io-impl :refer [sources]]))

;js/REPLETE_COPY
;js/REPLETE_DELETE
;js/REPLETE_FILE_INPUT_STREAM_CLOSE
;js/REPLETE_FILE_INPUT_STREAM_OPEN
;js/REPLETE_FILE_INPUT_STREAM_READ
;js/REPLETE_FILE_OUTPUT_STREAM_CLOSE
;js/REPLETE_FILE_OUTPUT_STREAM_FLUSH
;js/REPLETE_FILE_OUTPUT_STREAM_OPEN
;js/REPLETE_FILE_OUTPUT_STREAM_WRITE
;js/REPLETE_FILE_READER_CLOSE
;js/REPLETE_FILE_READER_OPEN
;js/REPLETE_FILE_READER_READ
;js/REPLETE_FILE_WRITER_CLOSE
;js/REPLETE_FILE_WRITER_FLUSH
;js/REPLETE_FILE_WRITER_OPEN
;js/REPLETE_FILE_WRITER_WRITE
;js/REPLETE_FSTAT
;js/REPLETE_IS_DIRECTORY
;js/REPLETE_LIST_FILES
;js/REPLETE_LOAD
;js/REPLETE_LOAD_FROM_JAR
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
  #_(println :load
           :count (count dependencies)
           :ns namespace-relative-path
           :keys (keys (get dependencies namespace-relative-path)))
  (:source (get dependencies namespace-relative-path)))

(set! (.-REPLETE_LOAD js/goog.global) load)