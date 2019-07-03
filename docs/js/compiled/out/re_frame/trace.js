// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__13266){
var map__13267 = p__13266;
var map__13267__$1 = (((((!((map__13267 == null))))?(((((map__13267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13267):map__13267);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13267__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13267__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13267__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13267__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),cljs.core.cst$kw$start,re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__13269_13293 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__13270_13294 = null;
var count__13271_13295 = (0);
var i__13272_13296 = (0);
while(true){
if((i__13272_13296 < count__13271_13295)){
var vec__13283_13297 = chunk__13270_13294.cljs$core$IIndexed$_nth$arity$2(null,i__13272_13296);
var k_13298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13283_13297,(0),null);
var cb_13299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13283_13297,(1),null);
try{var G__13287_13300 = cljs.core.deref(re_frame.trace.traces);
(cb_13299.cljs$core$IFn$_invoke$arity$1 ? cb_13299.cljs$core$IFn$_invoke$arity$1(G__13287_13300) : cb_13299.call(null,G__13287_13300));
}catch (e13286){var e_13301 = e13286;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_13298,"while storing",cljs.core.deref(re_frame.trace.traces),e_13301], 0));
}

var G__13302 = seq__13269_13293;
var G__13303 = chunk__13270_13294;
var G__13304 = count__13271_13295;
var G__13305 = (i__13272_13296 + (1));
seq__13269_13293 = G__13302;
chunk__13270_13294 = G__13303;
count__13271_13295 = G__13304;
i__13272_13296 = G__13305;
continue;
} else {
var temp__5720__auto___13306 = cljs.core.seq(seq__13269_13293);
if(temp__5720__auto___13306){
var seq__13269_13307__$1 = temp__5720__auto___13306;
if(cljs.core.chunked_seq_QMARK_(seq__13269_13307__$1)){
var c__4550__auto___13308 = cljs.core.chunk_first(seq__13269_13307__$1);
var G__13309 = cljs.core.chunk_rest(seq__13269_13307__$1);
var G__13310 = c__4550__auto___13308;
var G__13311 = cljs.core.count(c__4550__auto___13308);
var G__13312 = (0);
seq__13269_13293 = G__13309;
chunk__13270_13294 = G__13310;
count__13271_13295 = G__13311;
i__13272_13296 = G__13312;
continue;
} else {
var vec__13288_13313 = cljs.core.first(seq__13269_13307__$1);
var k_13314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13288_13313,(0),null);
var cb_13315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13288_13313,(1),null);
try{var G__13292_13316 = cljs.core.deref(re_frame.trace.traces);
(cb_13315.cljs$core$IFn$_invoke$arity$1 ? cb_13315.cljs$core$IFn$_invoke$arity$1(G__13292_13316) : cb_13315.call(null,G__13292_13316));
}catch (e13291){var e_13317 = e13291;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_13314,"while storing",cljs.core.deref(re_frame.trace.traces),e_13317], 0));
}

var G__13318 = cljs.core.next(seq__13269_13307__$1);
var G__13319 = null;
var G__13320 = (0);
var G__13321 = (0);
seq__13269_13293 = G__13318;
chunk__13270_13294 = G__13319;
count__13271_13295 = G__13320;
i__13272_13296 = G__13321;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});
