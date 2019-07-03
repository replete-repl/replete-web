// Compiled by ClojureScript 1.10.520 {:target :webworker}
goog.provide('replete.worker');
goog.require('cljs.core');
goog.require('replete.prepl');
goog.require('cljs.reader');
var this_18798 = this;
replete.worker.send_BANG_ = ((function (this_18798){
return (function replete$worker$send_BANG_(event){
return this_18798.postMessage(cljs.core.str.cljs$core$IFn$_invoke$arity$1(event));
});})(this_18798))
;
if((typeof replete !== 'undefined') && (typeof replete.worker !== 'undefined') && (typeof replete.worker.handle_message !== 'undefined')){
} else {
replete.worker.handle_message = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"replete.worker","handle-message"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (p1__18799_SHARP_){
return cljs.core.first.call(null,p1__18799_SHARP_);
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,replete.worker.handle_message,new cljs.core.Keyword("eval","form","eval/form",-1627220315),(function (p__18800){
var vec__18801 = p__18800;
var _ = cljs.core.nth.call(null,vec__18801,(0),null);
var clojure_form = cljs.core.nth.call(null,vec__18801,(1),null);
var result = replete.prepl.read_eval.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure_form));
return replete.worker.send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("eval","result","eval/result",1420716095),result], null));
}));
var this_18805 = this;
this_18805.addEventListener("message",((function (this_18805){
return (function (p1__18804_SHARP_){
return replete.worker.handle_message.call(null,cljs.reader.read_string.call(null,p1__18804_SHARP_.data));
});})(this_18805))
);

//# sourceMappingURL=worker.js.map
