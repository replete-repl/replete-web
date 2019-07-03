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
var _STAR_current_trace_STAR__orig_val__10178 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__10179 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__10179;

try{try{var seq__10180 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__10181 = null;
var count__10182 = (0);
var i__10183 = (0);
while(true){
if((i__10183 < count__10182)){
var vec__10190 = chunk__10181.cljs$core$IIndexed$_nth$arity$2(null,i__10183);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10190,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10190,(1),null);
var temp__5718__auto___10212 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___10212)){
var effect_fn_10213 = temp__5718__auto___10212;
(effect_fn_10213.cljs$core$IFn$_invoke$arity$1 ? effect_fn_10213.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_10213.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__10214 = seq__10180;
var G__10215 = chunk__10181;
var G__10216 = count__10182;
var G__10217 = (i__10183 + (1));
seq__10180 = G__10214;
chunk__10181 = G__10215;
count__10182 = G__10216;
i__10183 = G__10217;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__10180);
if(temp__5720__auto__){
var seq__10180__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10180__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__10180__$1);
var G__10218 = cljs.core.chunk_rest(seq__10180__$1);
var G__10219 = c__4550__auto__;
var G__10220 = cljs.core.count(c__4550__auto__);
var G__10221 = (0);
seq__10180 = G__10218;
chunk__10181 = G__10219;
count__10182 = G__10220;
i__10183 = G__10221;
continue;
} else {
var vec__10193 = cljs.core.first(seq__10180__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10193,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10193,(1),null);
var temp__5718__auto___10222 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___10222)){
var effect_fn_10223 = temp__5718__auto___10222;
(effect_fn_10223.cljs$core$IFn$_invoke$arity$1 ? effect_fn_10223.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_10223.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__10224 = cljs.core.next(seq__10180__$1);
var G__10225 = null;
var G__10226 = (0);
var G__10227 = (0);
seq__10180 = G__10224;
chunk__10181 = G__10225;
count__10182 = G__10226;
i__10183 = G__10227;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__9714__auto___10228 = re_frame.interop.now();
var duration__9715__auto___10229 = (end__9714__auto___10228 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__9715__auto___10229,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__9714__auto___10228);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__10178;
}} else {
var seq__10196 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__10197 = null;
var count__10198 = (0);
var i__10199 = (0);
while(true){
if((i__10199 < count__10198)){
var vec__10206 = chunk__10197.cljs$core$IIndexed$_nth$arity$2(null,i__10199);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10206,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10206,(1),null);
var temp__5718__auto___10230 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___10230)){
var effect_fn_10231 = temp__5718__auto___10230;
(effect_fn_10231.cljs$core$IFn$_invoke$arity$1 ? effect_fn_10231.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_10231.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__10232 = seq__10196;
var G__10233 = chunk__10197;
var G__10234 = count__10198;
var G__10235 = (i__10199 + (1));
seq__10196 = G__10232;
chunk__10197 = G__10233;
count__10198 = G__10234;
i__10199 = G__10235;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__10196);
if(temp__5720__auto__){
var seq__10196__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10196__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__10196__$1);
var G__10236 = cljs.core.chunk_rest(seq__10196__$1);
var G__10237 = c__4550__auto__;
var G__10238 = cljs.core.count(c__4550__auto__);
var G__10239 = (0);
seq__10196 = G__10236;
chunk__10197 = G__10237;
count__10198 = G__10238;
i__10199 = G__10239;
continue;
} else {
var vec__10209 = cljs.core.first(seq__10196__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10209,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10209,(1),null);
var temp__5718__auto___10240 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___10240)){
var effect_fn_10241 = temp__5718__auto___10240;
(effect_fn_10241.cljs$core$IFn$_invoke$arity$1 ? effect_fn_10241.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_10241.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__10242 = cljs.core.next(seq__10196__$1);
var G__10243 = null;
var G__10244 = (0);
var G__10245 = (0);
seq__10196 = G__10242;
chunk__10197 = G__10243;
count__10198 = G__10244;
i__10199 = G__10245;
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
var seq__10246 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__10247 = null;
var count__10248 = (0);
var i__10249 = (0);
while(true){
if((i__10249 < count__10248)){
var map__10254 = chunk__10247.cljs$core$IIndexed$_nth$arity$2(null,i__10249);
var map__10254__$1 = (((((!((map__10254 == null))))?(((((map__10254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10254):map__10254);
var effect = map__10254__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10254__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10254__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__10246,chunk__10247,count__10248,i__10249,map__10254,map__10254__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__10246,chunk__10247,count__10248,i__10249,map__10254,map__10254__$1,effect,ms,dispatch))
,ms);
}


var G__10258 = seq__10246;
var G__10259 = chunk__10247;
var G__10260 = count__10248;
var G__10261 = (i__10249 + (1));
seq__10246 = G__10258;
chunk__10247 = G__10259;
count__10248 = G__10260;
i__10249 = G__10261;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__10246);
if(temp__5720__auto__){
var seq__10246__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10246__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__10246__$1);
var G__10262 = cljs.core.chunk_rest(seq__10246__$1);
var G__10263 = c__4550__auto__;
var G__10264 = cljs.core.count(c__4550__auto__);
var G__10265 = (0);
seq__10246 = G__10262;
chunk__10247 = G__10263;
count__10248 = G__10264;
i__10249 = G__10265;
continue;
} else {
var map__10256 = cljs.core.first(seq__10246__$1);
var map__10256__$1 = (((((!((map__10256 == null))))?(((((map__10256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10256):map__10256);
var effect = map__10256__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10256__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10256__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__10246,chunk__10247,count__10248,i__10249,map__10256,map__10256__$1,effect,ms,dispatch,seq__10246__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__10246,chunk__10247,count__10248,i__10249,map__10256,map__10256__$1,effect,ms,dispatch,seq__10246__$1,temp__5720__auto__))
,ms);
}


var G__10266 = cljs.core.next(seq__10246__$1);
var G__10267 = null;
var G__10268 = (0);
var G__10269 = (0);
seq__10246 = G__10266;
chunk__10247 = G__10267;
count__10248 = G__10268;
i__10249 = G__10269;
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
var seq__10270 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__10271 = null;
var count__10272 = (0);
var i__10273 = (0);
while(true){
if((i__10273 < count__10272)){
var event = chunk__10271.cljs$core$IIndexed$_nth$arity$2(null,i__10273);
re_frame.router.dispatch(event);


var G__10274 = seq__10270;
var G__10275 = chunk__10271;
var G__10276 = count__10272;
var G__10277 = (i__10273 + (1));
seq__10270 = G__10274;
chunk__10271 = G__10275;
count__10272 = G__10276;
i__10273 = G__10277;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__10270);
if(temp__5720__auto__){
var seq__10270__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10270__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__10270__$1);
var G__10278 = cljs.core.chunk_rest(seq__10270__$1);
var G__10279 = c__4550__auto__;
var G__10280 = cljs.core.count(c__4550__auto__);
var G__10281 = (0);
seq__10270 = G__10278;
chunk__10271 = G__10279;
count__10272 = G__10280;
i__10273 = G__10281;
continue;
} else {
var event = cljs.core.first(seq__10270__$1);
re_frame.router.dispatch(event);


var G__10282 = cljs.core.next(seq__10270__$1);
var G__10283 = null;
var G__10284 = (0);
var G__10285 = (0);
seq__10270 = G__10282;
chunk__10271 = G__10283;
count__10272 = G__10284;
i__10273 = G__10285;
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
var seq__10286 = cljs.core.seq(value);
var chunk__10287 = null;
var count__10288 = (0);
var i__10289 = (0);
while(true){
if((i__10289 < count__10288)){
var event = chunk__10287.cljs$core$IIndexed$_nth$arity$2(null,i__10289);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__10290 = seq__10286;
var G__10291 = chunk__10287;
var G__10292 = count__10288;
var G__10293 = (i__10289 + (1));
seq__10286 = G__10290;
chunk__10287 = G__10291;
count__10288 = G__10292;
i__10289 = G__10293;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__10286);
if(temp__5720__auto__){
var seq__10286__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10286__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__10286__$1);
var G__10294 = cljs.core.chunk_rest(seq__10286__$1);
var G__10295 = c__4550__auto__;
var G__10296 = cljs.core.count(c__4550__auto__);
var G__10297 = (0);
seq__10286 = G__10294;
chunk__10287 = G__10295;
count__10288 = G__10296;
i__10289 = G__10297;
continue;
} else {
var event = cljs.core.first(seq__10286__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__10298 = cljs.core.next(seq__10286__$1);
var G__10299 = null;
var G__10300 = (0);
var G__10301 = (0);
seq__10286 = G__10298;
chunk__10287 = G__10299;
count__10288 = G__10300;
i__10289 = G__10301;
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
