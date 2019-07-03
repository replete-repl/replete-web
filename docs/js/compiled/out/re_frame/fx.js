// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
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
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__13647 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__13648 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__13648;

try{try{var seq__13649 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__13650 = null;
var count__13651 = (0);
var i__13652 = (0);
while(true){
if((i__13652 < count__13651)){
var vec__13659 = chunk__13650.cljs$core$IIndexed$_nth$arity$2(null,i__13652);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13659,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13659,(1),null);
var temp__5718__auto___13681 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___13681)){
var effect_fn_13682 = temp__5718__auto___13681;
(effect_fn_13682.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13682.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13682.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13683 = seq__13649;
var G__13684 = chunk__13650;
var G__13685 = count__13651;
var G__13686 = (i__13652 + (1));
seq__13649 = G__13683;
chunk__13650 = G__13684;
count__13651 = G__13685;
i__13652 = G__13686;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__13649);
if(temp__5720__auto__){
var seq__13649__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13649__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__13649__$1);
var G__13687 = cljs.core.chunk_rest(seq__13649__$1);
var G__13688 = c__4550__auto__;
var G__13689 = cljs.core.count(c__4550__auto__);
var G__13690 = (0);
seq__13649 = G__13687;
chunk__13650 = G__13688;
count__13651 = G__13689;
i__13652 = G__13690;
continue;
} else {
var vec__13662 = cljs.core.first(seq__13649__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13662,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13662,(1),null);
var temp__5718__auto___13691 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___13691)){
var effect_fn_13692 = temp__5718__auto___13691;
(effect_fn_13692.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13692.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13692.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13693 = cljs.core.next(seq__13649__$1);
var G__13694 = null;
var G__13695 = (0);
var G__13696 = (0);
seq__13649 = G__13693;
chunk__13650 = G__13694;
count__13651 = G__13695;
i__13652 = G__13696;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__13183__auto___13697 = re_frame.interop.now();
var duration__13184__auto___13698 = (end__13183__auto___13697 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__13184__auto___13698,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__13183__auto___13697);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__13647;
}} else {
var seq__13665 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__13666 = null;
var count__13667 = (0);
var i__13668 = (0);
while(true){
if((i__13668 < count__13667)){
var vec__13675 = chunk__13666.cljs$core$IIndexed$_nth$arity$2(null,i__13668);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13675,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13675,(1),null);
var temp__5718__auto___13699 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___13699)){
var effect_fn_13700 = temp__5718__auto___13699;
(effect_fn_13700.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13700.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13700.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13701 = seq__13665;
var G__13702 = chunk__13666;
var G__13703 = count__13667;
var G__13704 = (i__13668 + (1));
seq__13665 = G__13701;
chunk__13666 = G__13702;
count__13667 = G__13703;
i__13668 = G__13704;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__13665);
if(temp__5720__auto__){
var seq__13665__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13665__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__13665__$1);
var G__13705 = cljs.core.chunk_rest(seq__13665__$1);
var G__13706 = c__4550__auto__;
var G__13707 = cljs.core.count(c__4550__auto__);
var G__13708 = (0);
seq__13665 = G__13705;
chunk__13666 = G__13706;
count__13667 = G__13707;
i__13668 = G__13708;
continue;
} else {
var vec__13678 = cljs.core.first(seq__13665__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13678,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13678,(1),null);
var temp__5718__auto___13709 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___13709)){
var effect_fn_13710 = temp__5718__auto___13709;
(effect_fn_13710.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13710.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13710.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13711 = cljs.core.next(seq__13665__$1);
var G__13712 = null;
var G__13713 = (0);
var G__13714 = (0);
seq__13665 = G__13711;
chunk__13666 = G__13712;
count__13667 = G__13713;
i__13668 = G__13714;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
var seq__13715 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13716 = null;
var count__13717 = (0);
var i__13718 = (0);
while(true){
if((i__13718 < count__13717)){
var map__13723 = chunk__13716.cljs$core$IIndexed$_nth$arity$2(null,i__13718);
var map__13723__$1 = (((((!((map__13723 == null))))?(((((map__13723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13723):map__13723);
var effect = map__13723__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13723__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13723__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__13715,chunk__13716,count__13717,i__13718,map__13723,map__13723__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__13715,chunk__13716,count__13717,i__13718,map__13723,map__13723__$1,effect,ms,dispatch))
,ms);
}


var G__13727 = seq__13715;
var G__13728 = chunk__13716;
var G__13729 = count__13717;
var G__13730 = (i__13718 + (1));
seq__13715 = G__13727;
chunk__13716 = G__13728;
count__13717 = G__13729;
i__13718 = G__13730;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__13715);
if(temp__5720__auto__){
var seq__13715__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13715__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__13715__$1);
var G__13731 = cljs.core.chunk_rest(seq__13715__$1);
var G__13732 = c__4550__auto__;
var G__13733 = cljs.core.count(c__4550__auto__);
var G__13734 = (0);
seq__13715 = G__13731;
chunk__13716 = G__13732;
count__13717 = G__13733;
i__13718 = G__13734;
continue;
} else {
var map__13725 = cljs.core.first(seq__13715__$1);
var map__13725__$1 = (((((!((map__13725 == null))))?(((((map__13725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13725):map__13725);
var effect = map__13725__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13725__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13725__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__13715,chunk__13716,count__13717,i__13718,map__13725,map__13725__$1,effect,ms,dispatch,seq__13715__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__13715,chunk__13716,count__13717,i__13718,map__13725,map__13725__$1,effect,ms,dispatch,seq__13715__$1,temp__5720__auto__))
,ms);
}


var G__13735 = cljs.core.next(seq__13715__$1);
var G__13736 = null;
var G__13737 = (0);
var G__13738 = (0);
seq__13715 = G__13735;
chunk__13716 = G__13736;
count__13717 = G__13737;
i__13718 = G__13738;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__13739 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13740 = null;
var count__13741 = (0);
var i__13742 = (0);
while(true){
if((i__13742 < count__13741)){
var event = chunk__13740.cljs$core$IIndexed$_nth$arity$2(null,i__13742);
re_frame.router.dispatch(event);


var G__13743 = seq__13739;
var G__13744 = chunk__13740;
var G__13745 = count__13741;
var G__13746 = (i__13742 + (1));
seq__13739 = G__13743;
chunk__13740 = G__13744;
count__13741 = G__13745;
i__13742 = G__13746;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__13739);
if(temp__5720__auto__){
var seq__13739__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13739__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__13739__$1);
var G__13747 = cljs.core.chunk_rest(seq__13739__$1);
var G__13748 = c__4550__auto__;
var G__13749 = cljs.core.count(c__4550__auto__);
var G__13750 = (0);
seq__13739 = G__13747;
chunk__13740 = G__13748;
count__13741 = G__13749;
i__13742 = G__13750;
continue;
} else {
var event = cljs.core.first(seq__13739__$1);
re_frame.router.dispatch(event);


var G__13751 = cljs.core.next(seq__13739__$1);
var G__13752 = null;
var G__13753 = (0);
var G__13754 = (0);
seq__13739 = G__13751;
chunk__13740 = G__13752;
count__13741 = G__13753;
i__13742 = G__13754;
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
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__13755 = cljs.core.seq(value);
var chunk__13756 = null;
var count__13757 = (0);
var i__13758 = (0);
while(true){
if((i__13758 < count__13757)){
var event = chunk__13756.cljs$core$IIndexed$_nth$arity$2(null,i__13758);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__13759 = seq__13755;
var G__13760 = chunk__13756;
var G__13761 = count__13757;
var G__13762 = (i__13758 + (1));
seq__13755 = G__13759;
chunk__13756 = G__13760;
count__13757 = G__13761;
i__13758 = G__13762;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__13755);
if(temp__5720__auto__){
var seq__13755__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13755__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__13755__$1);
var G__13763 = cljs.core.chunk_rest(seq__13755__$1);
var G__13764 = c__4550__auto__;
var G__13765 = cljs.core.count(c__4550__auto__);
var G__13766 = (0);
seq__13755 = G__13763;
chunk__13756 = G__13764;
count__13757 = G__13765;
i__13758 = G__13766;
continue;
} else {
var event = cljs.core.first(seq__13755__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__13767 = cljs.core.next(seq__13755__$1);
var G__13768 = null;
var G__13769 = (0);
var G__13770 = (0);
seq__13755 = G__13767;
chunk__13756 = G__13768;
count__13757 = G__13769;
i__13758 = G__13770;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
