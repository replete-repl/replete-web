// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('replete.cm');
goog.require('cljs.core');
goog.require('cljs.core.constants');
replete.cm.cm_parinfer = (function replete$cm$cm_parinfer(dom_node,opts){
var code_mirror = CodeMirror.fromTextArea(dom_node,cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$lineWrapping,true,cljs.core.cst$kw$mode,cljs.core.cst$kw$clojure], null),opts], 0))));
code_mirror.setSize("100%","100%");

parinferCodeMirror.init(code_mirror);

return code_mirror;
});
