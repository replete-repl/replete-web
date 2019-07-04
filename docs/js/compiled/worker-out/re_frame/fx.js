// Compiled by ClojureScript 1.10.520 {:target :webworker}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__3944 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__3945 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__3945;

try{try{var seq__3946 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__3947 = null;
var count__3948 = (0);
var i__3949 = (0);
while(true){
if((i__3949 < count__3948)){
var vec__3956 = cljs.core._nth.call(null,chunk__3947,i__3949);
var effect_key = cljs.core.nth.call(null,vec__3956,(0),null);
var effect_value = cljs.core.nth.call(null,vec__3956,(1),null);
var temp__5718__auto___3978 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___3978)){
var effect_fn_3979 = temp__5718__auto___3978;
effect_fn_3979.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__3980 = seq__3946;
var G__3981 = chunk__3947;
var G__3982 = count__3948;
var G__3983 = (i__3949 + (1));
seq__3946 = G__3980;
chunk__3947 = G__3981;
count__3948 = G__3982;
i__3949 = G__3983;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__3946);
if(temp__5720__auto__){
var seq__3946__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3946__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__3946__$1);
var G__3984 = cljs.core.chunk_rest.call(null,seq__3946__$1);
var G__3985 = c__4550__auto__;
var G__3986 = cljs.core.count.call(null,c__4550__auto__);
var G__3987 = (0);
seq__3946 = G__3984;
chunk__3947 = G__3985;
count__3948 = G__3986;
i__3949 = G__3987;
continue;
} else {
var vec__3959 = cljs.core.first.call(null,seq__3946__$1);
var effect_key = cljs.core.nth.call(null,vec__3959,(0),null);
var effect_value = cljs.core.nth.call(null,vec__3959,(1),null);
var temp__5718__auto___3988 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___3988)){
var effect_fn_3989 = temp__5718__auto___3988;
effect_fn_3989.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__3990 = cljs.core.next.call(null,seq__3946__$1);
var G__3991 = null;
var G__3992 = (0);
var G__3993 = (0);
seq__3946 = G__3990;
chunk__3947 = G__3991;
count__3948 = G__3992;
i__3949 = G__3993;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__3773__auto___3994 = re_frame.interop.now.call(null);
var duration__3774__auto___3995 = (end__3773__auto___3994 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__3774__auto___3995,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__3773__auto___3994);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__3944;
}} else {
var seq__3962 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__3963 = null;
var count__3964 = (0);
var i__3965 = (0);
while(true){
if((i__3965 < count__3964)){
var vec__3972 = cljs.core._nth.call(null,chunk__3963,i__3965);
var effect_key = cljs.core.nth.call(null,vec__3972,(0),null);
var effect_value = cljs.core.nth.call(null,vec__3972,(1),null);
var temp__5718__auto___3996 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___3996)){
var effect_fn_3997 = temp__5718__auto___3996;
effect_fn_3997.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__3998 = seq__3962;
var G__3999 = chunk__3963;
var G__4000 = count__3964;
var G__4001 = (i__3965 + (1));
seq__3962 = G__3998;
chunk__3963 = G__3999;
count__3964 = G__4000;
i__3965 = G__4001;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__3962);
if(temp__5720__auto__){
var seq__3962__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3962__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__3962__$1);
var G__4002 = cljs.core.chunk_rest.call(null,seq__3962__$1);
var G__4003 = c__4550__auto__;
var G__4004 = cljs.core.count.call(null,c__4550__auto__);
var G__4005 = (0);
seq__3962 = G__4002;
chunk__3963 = G__4003;
count__3964 = G__4004;
i__3965 = G__4005;
continue;
} else {
var vec__3975 = cljs.core.first.call(null,seq__3962__$1);
var effect_key = cljs.core.nth.call(null,vec__3975,(0),null);
var effect_value = cljs.core.nth.call(null,vec__3975,(1),null);
var temp__5718__auto___4006 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___4006)){
var effect_fn_4007 = temp__5718__auto___4006;
effect_fn_4007.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__4008 = cljs.core.next.call(null,seq__3962__$1);
var G__4009 = null;
var G__4010 = (0);
var G__4011 = (0);
seq__3962 = G__4008;
chunk__3963 = G__4009;
count__3964 = G__4010;
i__3965 = G__4011;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__4012 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__4013 = null;
var count__4014 = (0);
var i__4015 = (0);
while(true){
if((i__4015 < count__4014)){
var map__4020 = cljs.core._nth.call(null,chunk__4013,i__4015);
var map__4020__$1 = (((((!((map__4020 == null))))?(((((map__4020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4020):map__4020);
var effect = map__4020__$1;
var ms = cljs.core.get.call(null,map__4020__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__4020__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__4012,chunk__4013,count__4014,i__4015,map__4020,map__4020__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__4012,chunk__4013,count__4014,i__4015,map__4020,map__4020__$1,effect,ms,dispatch))
,ms);
}


var G__4024 = seq__4012;
var G__4025 = chunk__4013;
var G__4026 = count__4014;
var G__4027 = (i__4015 + (1));
seq__4012 = G__4024;
chunk__4013 = G__4025;
count__4014 = G__4026;
i__4015 = G__4027;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__4012);
if(temp__5720__auto__){
var seq__4012__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4012__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__4012__$1);
var G__4028 = cljs.core.chunk_rest.call(null,seq__4012__$1);
var G__4029 = c__4550__auto__;
var G__4030 = cljs.core.count.call(null,c__4550__auto__);
var G__4031 = (0);
seq__4012 = G__4028;
chunk__4013 = G__4029;
count__4014 = G__4030;
i__4015 = G__4031;
continue;
} else {
var map__4022 = cljs.core.first.call(null,seq__4012__$1);
var map__4022__$1 = (((((!((map__4022 == null))))?(((((map__4022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4022):map__4022);
var effect = map__4022__$1;
var ms = cljs.core.get.call(null,map__4022__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__4022__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__4012,chunk__4013,count__4014,i__4015,map__4022,map__4022__$1,effect,ms,dispatch,seq__4012__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__4012,chunk__4013,count__4014,i__4015,map__4022,map__4022__$1,effect,ms,dispatch,seq__4012__$1,temp__5720__auto__))
,ms);
}


var G__4032 = cljs.core.next.call(null,seq__4012__$1);
var G__4033 = null;
var G__4034 = (0);
var G__4035 = (0);
seq__4012 = G__4032;
chunk__4013 = G__4033;
count__4014 = G__4034;
i__4015 = G__4035;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__4036 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__4037 = null;
var count__4038 = (0);
var i__4039 = (0);
while(true){
if((i__4039 < count__4038)){
var event = cljs.core._nth.call(null,chunk__4037,i__4039);
re_frame.router.dispatch.call(null,event);


var G__4040 = seq__4036;
var G__4041 = chunk__4037;
var G__4042 = count__4038;
var G__4043 = (i__4039 + (1));
seq__4036 = G__4040;
chunk__4037 = G__4041;
count__4038 = G__4042;
i__4039 = G__4043;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__4036);
if(temp__5720__auto__){
var seq__4036__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4036__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__4036__$1);
var G__4044 = cljs.core.chunk_rest.call(null,seq__4036__$1);
var G__4045 = c__4550__auto__;
var G__4046 = cljs.core.count.call(null,c__4550__auto__);
var G__4047 = (0);
seq__4036 = G__4044;
chunk__4037 = G__4045;
count__4038 = G__4046;
i__4039 = G__4047;
continue;
} else {
var event = cljs.core.first.call(null,seq__4036__$1);
re_frame.router.dispatch.call(null,event);


var G__4048 = cljs.core.next.call(null,seq__4036__$1);
var G__4049 = null;
var G__4050 = (0);
var G__4051 = (0);
seq__4036 = G__4048;
chunk__4037 = G__4049;
count__4038 = G__4050;
i__4039 = G__4051;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__4052 = cljs.core.seq.call(null,value);
var chunk__4053 = null;
var count__4054 = (0);
var i__4055 = (0);
while(true){
if((i__4055 < count__4054)){
var event = cljs.core._nth.call(null,chunk__4053,i__4055);
clear_event.call(null,event);


var G__4056 = seq__4052;
var G__4057 = chunk__4053;
var G__4058 = count__4054;
var G__4059 = (i__4055 + (1));
seq__4052 = G__4056;
chunk__4053 = G__4057;
count__4054 = G__4058;
i__4055 = G__4059;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__4052);
if(temp__5720__auto__){
var seq__4052__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4052__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__4052__$1);
var G__4060 = cljs.core.chunk_rest.call(null,seq__4052__$1);
var G__4061 = c__4550__auto__;
var G__4062 = cljs.core.count.call(null,c__4550__auto__);
var G__4063 = (0);
seq__4052 = G__4060;
chunk__4053 = G__4061;
count__4054 = G__4062;
i__4055 = G__4063;
continue;
} else {
var event = cljs.core.first.call(null,seq__4052__$1);
clear_event.call(null,event);


var G__4064 = cljs.core.next.call(null,seq__4052__$1);
var G__4065 = null;
var G__4066 = (0);
var G__4067 = (0);
seq__4052 = G__4064;
chunk__4053 = G__4065;
count__4054 = G__4066;
i__4055 = G__4067;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
