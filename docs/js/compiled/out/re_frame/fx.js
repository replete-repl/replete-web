// Compiled by ClojureScript 1.10.520 {}
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
var _STAR_current_trace_STAR__orig_val__11650 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__11651 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__11651;

try{try{var seq__11652 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__11653 = null;
var count__11654 = (0);
var i__11655 = (0);
while(true){
if((i__11655 < count__11654)){
var vec__11662 = cljs.core._nth.call(null,chunk__11653,i__11655);
var effect_key = cljs.core.nth.call(null,vec__11662,(0),null);
var effect_value = cljs.core.nth.call(null,vec__11662,(1),null);
var temp__5718__auto___11684 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___11684)){
var effect_fn_11685 = temp__5718__auto___11684;
effect_fn_11685.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__11686 = seq__11652;
var G__11687 = chunk__11653;
var G__11688 = count__11654;
var G__11689 = (i__11655 + (1));
seq__11652 = G__11686;
chunk__11653 = G__11687;
count__11654 = G__11688;
i__11655 = G__11689;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__11652);
if(temp__5720__auto__){
var seq__11652__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11652__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__11652__$1);
var G__11690 = cljs.core.chunk_rest.call(null,seq__11652__$1);
var G__11691 = c__4550__auto__;
var G__11692 = cljs.core.count.call(null,c__4550__auto__);
var G__11693 = (0);
seq__11652 = G__11690;
chunk__11653 = G__11691;
count__11654 = G__11692;
i__11655 = G__11693;
continue;
} else {
var vec__11665 = cljs.core.first.call(null,seq__11652__$1);
var effect_key = cljs.core.nth.call(null,vec__11665,(0),null);
var effect_value = cljs.core.nth.call(null,vec__11665,(1),null);
var temp__5718__auto___11694 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___11694)){
var effect_fn_11695 = temp__5718__auto___11694;
effect_fn_11695.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__11696 = cljs.core.next.call(null,seq__11652__$1);
var G__11697 = null;
var G__11698 = (0);
var G__11699 = (0);
seq__11652 = G__11696;
chunk__11653 = G__11697;
count__11654 = G__11698;
i__11655 = G__11699;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__11330__auto___11700 = re_frame.interop.now.call(null);
var duration__11331__auto___11701 = (end__11330__auto___11700 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__11331__auto___11701,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__11330__auto___11700);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__11650;
}} else {
var seq__11668 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__11669 = null;
var count__11670 = (0);
var i__11671 = (0);
while(true){
if((i__11671 < count__11670)){
var vec__11678 = cljs.core._nth.call(null,chunk__11669,i__11671);
var effect_key = cljs.core.nth.call(null,vec__11678,(0),null);
var effect_value = cljs.core.nth.call(null,vec__11678,(1),null);
var temp__5718__auto___11702 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___11702)){
var effect_fn_11703 = temp__5718__auto___11702;
effect_fn_11703.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__11704 = seq__11668;
var G__11705 = chunk__11669;
var G__11706 = count__11670;
var G__11707 = (i__11671 + (1));
seq__11668 = G__11704;
chunk__11669 = G__11705;
count__11670 = G__11706;
i__11671 = G__11707;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__11668);
if(temp__5720__auto__){
var seq__11668__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11668__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__11668__$1);
var G__11708 = cljs.core.chunk_rest.call(null,seq__11668__$1);
var G__11709 = c__4550__auto__;
var G__11710 = cljs.core.count.call(null,c__4550__auto__);
var G__11711 = (0);
seq__11668 = G__11708;
chunk__11669 = G__11709;
count__11670 = G__11710;
i__11671 = G__11711;
continue;
} else {
var vec__11681 = cljs.core.first.call(null,seq__11668__$1);
var effect_key = cljs.core.nth.call(null,vec__11681,(0),null);
var effect_value = cljs.core.nth.call(null,vec__11681,(1),null);
var temp__5718__auto___11712 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___11712)){
var effect_fn_11713 = temp__5718__auto___11712;
effect_fn_11713.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__11714 = cljs.core.next.call(null,seq__11668__$1);
var G__11715 = null;
var G__11716 = (0);
var G__11717 = (0);
seq__11668 = G__11714;
chunk__11669 = G__11715;
count__11670 = G__11716;
i__11671 = G__11717;
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
var seq__11718 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__11719 = null;
var count__11720 = (0);
var i__11721 = (0);
while(true){
if((i__11721 < count__11720)){
var map__11726 = cljs.core._nth.call(null,chunk__11719,i__11721);
var map__11726__$1 = (((((!((map__11726 == null))))?(((((map__11726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11726):map__11726);
var effect = map__11726__$1;
var ms = cljs.core.get.call(null,map__11726__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__11726__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__11718,chunk__11719,count__11720,i__11721,map__11726,map__11726__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__11718,chunk__11719,count__11720,i__11721,map__11726,map__11726__$1,effect,ms,dispatch))
,ms);
}


var G__11730 = seq__11718;
var G__11731 = chunk__11719;
var G__11732 = count__11720;
var G__11733 = (i__11721 + (1));
seq__11718 = G__11730;
chunk__11719 = G__11731;
count__11720 = G__11732;
i__11721 = G__11733;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__11718);
if(temp__5720__auto__){
var seq__11718__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11718__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__11718__$1);
var G__11734 = cljs.core.chunk_rest.call(null,seq__11718__$1);
var G__11735 = c__4550__auto__;
var G__11736 = cljs.core.count.call(null,c__4550__auto__);
var G__11737 = (0);
seq__11718 = G__11734;
chunk__11719 = G__11735;
count__11720 = G__11736;
i__11721 = G__11737;
continue;
} else {
var map__11728 = cljs.core.first.call(null,seq__11718__$1);
var map__11728__$1 = (((((!((map__11728 == null))))?(((((map__11728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11728):map__11728);
var effect = map__11728__$1;
var ms = cljs.core.get.call(null,map__11728__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__11728__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__11718,chunk__11719,count__11720,i__11721,map__11728,map__11728__$1,effect,ms,dispatch,seq__11718__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__11718,chunk__11719,count__11720,i__11721,map__11728,map__11728__$1,effect,ms,dispatch,seq__11718__$1,temp__5720__auto__))
,ms);
}


var G__11738 = cljs.core.next.call(null,seq__11718__$1);
var G__11739 = null;
var G__11740 = (0);
var G__11741 = (0);
seq__11718 = G__11738;
chunk__11719 = G__11739;
count__11720 = G__11740;
i__11721 = G__11741;
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
var seq__11742 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__11743 = null;
var count__11744 = (0);
var i__11745 = (0);
while(true){
if((i__11745 < count__11744)){
var event = cljs.core._nth.call(null,chunk__11743,i__11745);
re_frame.router.dispatch.call(null,event);


var G__11746 = seq__11742;
var G__11747 = chunk__11743;
var G__11748 = count__11744;
var G__11749 = (i__11745 + (1));
seq__11742 = G__11746;
chunk__11743 = G__11747;
count__11744 = G__11748;
i__11745 = G__11749;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__11742);
if(temp__5720__auto__){
var seq__11742__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11742__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__11742__$1);
var G__11750 = cljs.core.chunk_rest.call(null,seq__11742__$1);
var G__11751 = c__4550__auto__;
var G__11752 = cljs.core.count.call(null,c__4550__auto__);
var G__11753 = (0);
seq__11742 = G__11750;
chunk__11743 = G__11751;
count__11744 = G__11752;
i__11745 = G__11753;
continue;
} else {
var event = cljs.core.first.call(null,seq__11742__$1);
re_frame.router.dispatch.call(null,event);


var G__11754 = cljs.core.next.call(null,seq__11742__$1);
var G__11755 = null;
var G__11756 = (0);
var G__11757 = (0);
seq__11742 = G__11754;
chunk__11743 = G__11755;
count__11744 = G__11756;
i__11745 = G__11757;
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
var seq__11758 = cljs.core.seq.call(null,value);
var chunk__11759 = null;
var count__11760 = (0);
var i__11761 = (0);
while(true){
if((i__11761 < count__11760)){
var event = cljs.core._nth.call(null,chunk__11759,i__11761);
clear_event.call(null,event);


var G__11762 = seq__11758;
var G__11763 = chunk__11759;
var G__11764 = count__11760;
var G__11765 = (i__11761 + (1));
seq__11758 = G__11762;
chunk__11759 = G__11763;
count__11760 = G__11764;
i__11761 = G__11765;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__11758);
if(temp__5720__auto__){
var seq__11758__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11758__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__11758__$1);
var G__11766 = cljs.core.chunk_rest.call(null,seq__11758__$1);
var G__11767 = c__4550__auto__;
var G__11768 = cljs.core.count.call(null,c__4550__auto__);
var G__11769 = (0);
seq__11758 = G__11766;
chunk__11759 = G__11767;
count__11760 = G__11768;
i__11761 = G__11769;
continue;
} else {
var event = cljs.core.first.call(null,seq__11758__$1);
clear_event.call(null,event);


var G__11770 = cljs.core.next.call(null,seq__11758__$1);
var G__11771 = null;
var G__11772 = (0);
var G__11773 = (0);
seq__11758 = G__11770;
chunk__11759 = G__11771;
count__11760 = G__11772;
i__11761 = G__11773;
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
