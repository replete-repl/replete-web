// Compiled by ClojureScript 1.10.520 {}
goog.provide('replete.worker');
goog.require('cljs.core');
goog.require('replete.prepl');
goog.require('cljs.reader');
<<<<<<< HEAD:docs/js/compiled/worker-out/replete/worker.js
var this_1939 = this;
replete.worker.send_BANG_ = ((function (this_1939){
return (function replete$worker$send_BANG_(event){
return this_1939.postMessage(cljs.core.str.cljs$core$IFn$_invoke$arity$1(event));
});})(this_1939))
=======
var this_1976 = this;
replete.worker.send_BANG_ = ((function (this_1976){
return (function replete$worker$send_BANG_(event){
return this_1976.postMessage(cljs.core.str.cljs$core$IFn$_invoke$arity$1(event));
});})(this_1976))
>>>>>>> :simple optimizations:docs/js/compiled/out/replete/worker.js
;
if((typeof replete !== 'undefined') && (typeof replete.worker !== 'undefined') && (typeof replete.worker.handle_message !== 'undefined')){
} else {
replete.worker.handle_message = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"replete.worker","handle-message"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
<<<<<<< HEAD:docs/js/compiled/worker-out/replete/worker.js
return (function (p1__1940_SHARP_){
return cljs.core.first.call(null,p1__1940_SHARP_);
=======
return (function (p1__1977_SHARP_){
return cljs.core.first.call(null,p1__1977_SHARP_);
>>>>>>> :simple optimizations:docs/js/compiled/out/replete/worker.js
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
<<<<<<< HEAD:docs/js/compiled/worker-out/replete/worker.js
cljs.core._add_method.call(null,replete.worker.handle_message,new cljs.core.Keyword("eval","form","eval/form",-1627220315),(function (p__1941){
var vec__1942 = p__1941;
var _ = cljs.core.nth.call(null,vec__1942,(0),null);
var clojure_form = cljs.core.nth.call(null,vec__1942,(1),null);
var result = replete.prepl.read_eval.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure_form));
return replete.worker.send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("eval","result","eval/result",1420716095),result], null));
}));
var this_1946 = this;
this_1946.addEventListener("message",((function (this_1946){
return (function (p1__1945_SHARP_){
return replete.worker.handle_message.call(null,cljs.reader.read_string.call(null,p1__1945_SHARP_.data));
});})(this_1946))
=======
cljs.core._add_method.call(null,replete.worker.handle_message,new cljs.core.Keyword("eval","form","eval/form",-1627220315),(function (p__1978){
var vec__1979 = p__1978;
var _ = cljs.core.nth.call(null,vec__1979,(0),null);
var clojure_form = cljs.core.nth.call(null,vec__1979,(1),null);
var result = replete.prepl.read_eval.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure_form));
return replete.worker.send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("eval","result","eval/result",1420716095),result], null));
}));
var this_1983 = this;
this_1983.addEventListener("message",((function (this_1983){
return (function (p1__1982_SHARP_){
return replete.worker.handle_message.call(null,cljs.reader.read_string.call(null,p1__1982_SHARP_.data));
});})(this_1983))
>>>>>>> :simple optimizations:docs/js/compiled/out/replete/worker.js
);

//# sourceMappingURL=worker.js.map
