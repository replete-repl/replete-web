// Compiled by ClojureScript 1.10.520 {:target :webworker}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__3795){
var map__3796 = p__3795;
var map__3796__$1 = (((((!((map__3796 == null))))?(((((map__3796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3796):map__3796);
var operation = cljs.core.get.call(null,map__3796__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__3796__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__3796__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__3796__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__3798_3818 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__3799_3819 = null;
var count__3800_3820 = (0);
var i__3801_3821 = (0);
while(true){
if((i__3801_3821 < count__3800_3820)){
var vec__3810_3822 = cljs.core._nth.call(null,chunk__3799_3819,i__3801_3821);
var k_3823 = cljs.core.nth.call(null,vec__3810_3822,(0),null);
var cb_3824 = cljs.core.nth.call(null,vec__3810_3822,(1),null);
try{cb_3824.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e3813){var e_3825 = e3813;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_3823,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_3825);
}

var G__3826 = seq__3798_3818;
var G__3827 = chunk__3799_3819;
var G__3828 = count__3800_3820;
var G__3829 = (i__3801_3821 + (1));
seq__3798_3818 = G__3826;
chunk__3799_3819 = G__3827;
count__3800_3820 = G__3828;
i__3801_3821 = G__3829;
continue;
} else {
var temp__5720__auto___3830 = cljs.core.seq.call(null,seq__3798_3818);
if(temp__5720__auto___3830){
var seq__3798_3831__$1 = temp__5720__auto___3830;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3798_3831__$1)){
var c__4550__auto___3832 = cljs.core.chunk_first.call(null,seq__3798_3831__$1);
var G__3833 = cljs.core.chunk_rest.call(null,seq__3798_3831__$1);
var G__3834 = c__4550__auto___3832;
var G__3835 = cljs.core.count.call(null,c__4550__auto___3832);
var G__3836 = (0);
seq__3798_3818 = G__3833;
chunk__3799_3819 = G__3834;
count__3800_3820 = G__3835;
i__3801_3821 = G__3836;
continue;
} else {
var vec__3814_3837 = cljs.core.first.call(null,seq__3798_3831__$1);
var k_3838 = cljs.core.nth.call(null,vec__3814_3837,(0),null);
var cb_3839 = cljs.core.nth.call(null,vec__3814_3837,(1),null);
try{cb_3839.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e3817){var e_3840 = e3817;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_3838,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_3840);
}

var G__3841 = cljs.core.next.call(null,seq__3798_3831__$1);
var G__3842 = null;
var G__3843 = (0);
var G__3844 = (0);
seq__3798_3818 = G__3841;
chunk__3799_3819 = G__3842;
count__3800_3820 = G__3843;
i__3801_3821 = G__3844;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (25)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map
