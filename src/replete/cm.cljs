(ns replete.cm
  (:require [cljsjs.codemirror]
            [cljsjs.codemirror.addon.edit.matchbrackets]
            [cljsjs.codemirror.addon.hint.show-hint]
            [cljsjs.codemirror.mode.clojure]
            [cljsjs.parinfer]
            [cljsjs.parinfer-codemirror]))

(defn cm-parinfer
  [dom-node opts]
  (let [code-mirror (js/CodeMirror.fromTextArea
                      dom-node
                      (clj->js (merge {:lineWrapping  true
                                       :matchBrackets true
                                       :mode          :clojure}
                                      opts)))]
    (.setSize code-mirror "100%" "100%")
    (.init js/parinferCodeMirror code-mirror)

    code-mirror))

