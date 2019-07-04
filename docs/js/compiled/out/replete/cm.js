// Compiled by ClojureScript 1.10.520 {}
goog.provide('replete.cm');
goog.require('cljs.core');
goog.require('cljsjs.codemirror');
goog.require('cljsjs.codemirror.addon.edit.matchbrackets');
goog.require('cljsjs.codemirror.addon.hint.show_hint');
goog.require('cljsjs.codemirror.mode.clojure');
goog.require('cljsjs.parinfer');
goog.require('cljsjs.parinfer_codemirror');
replete.cm.cm_parinfer = (function replete$cm$cm_parinfer(dom_node,opts){
var code_mirror = CodeMirror.fromTextArea(dom_node,cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lineWrapping","lineWrapping",1248501985),true,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"clojure","clojure",438975815)], null),opts)));
code_mirror.setSize("100%","100%");

parinferCodeMirror.init(code_mirror);

return code_mirror;
});

//# sourceMappingURL=cm.js.map
