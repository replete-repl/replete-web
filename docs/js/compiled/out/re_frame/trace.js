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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__9797){
var map__9798 = p__9797;
var map__9798__$1 = (((((!((map__9798 == null))))?(((((map__9798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9798):map__9798);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9798__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9798__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9798__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9798__$1,cljs.core.cst$kw$child_DASH_of);
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
var seq__9800_9824 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__9801_9825 = null;
var count__9802_9826 = (0);
var i__9803_9827 = (0);
while(true){
if((i__9803_9827 < count__9802_9826)){
var vec__9814_9828 = chunk__9801_9825.cljs$core$IIndexed$_nth$arity$2(null,i__9803_9827);
var k_9829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9814_9828,(0),null);
var cb_9830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9814_9828,(1),null);
try{var G__9818_9831 = cljs.core.deref(re_frame.trace.traces);
(cb_9830.cljs$core$IFn$_invoke$arity$1 ? cb_9830.cljs$core$IFn$_invoke$arity$1(G__9818_9831) : cb_9830.call(null,G__9818_9831));
}catch (e9817){var e_9832 = e9817;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_9829,"while storing",cljs.core.deref(re_frame.trace.traces),e_9832], 0));
}

var G__9833 = seq__9800_9824;
var G__9834 = chunk__9801_9825;
var G__9835 = count__9802_9826;
var G__9836 = (i__9803_9827 + (1));
seq__9800_9824 = G__9833;
chunk__9801_9825 = G__9834;
count__9802_9826 = G__9835;
i__9803_9827 = G__9836;
continue;
} else {
var temp__5720__auto___9837 = cljs.core.seq(seq__9800_9824);
if(temp__5720__auto___9837){
var seq__9800_9838__$1 = temp__5720__auto___9837;
if(cljs.core.chunked_seq_QMARK_(seq__9800_9838__$1)){
var c__4550__auto___9839 = cljs.core.chunk_first(seq__9800_9838__$1);
var G__9840 = cljs.core.chunk_rest(seq__9800_9838__$1);
var G__9841 = c__4550__auto___9839;
var G__9842 = cljs.core.count(c__4550__auto___9839);
var G__9843 = (0);
seq__9800_9824 = G__9840;
chunk__9801_9825 = G__9841;
count__9802_9826 = G__9842;
i__9803_9827 = G__9843;
continue;
} else {
var vec__9819_9844 = cljs.core.first(seq__9800_9838__$1);
var k_9845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9819_9844,(0),null);
var cb_9846 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9819_9844,(1),null);
try{var G__9823_9847 = cljs.core.deref(re_frame.trace.traces);
(cb_9846.cljs$core$IFn$_invoke$arity$1 ? cb_9846.cljs$core$IFn$_invoke$arity$1(G__9823_9847) : cb_9846.call(null,G__9823_9847));
}catch (e9822){var e_9848 = e9822;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_9845,"while storing",cljs.core.deref(re_frame.trace.traces),e_9848], 0));
}

var G__9849 = cljs.core.next(seq__9800_9838__$1);
var G__9850 = null;
var G__9851 = (0);
var G__9852 = (0);
seq__9800_9824 = G__9849;
chunk__9801_9825 = G__9850;
count__9802_9826 = G__9851;
i__9803_9827 = G__9852;
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
