<<<<<<< HEAD:docs/js/compiled/worker-out/re_frame/interceptor.js
// Compiled by ClojureScript 1.10.520 {:target :webworker}
=======
// Compiled by ClojureScript 1.10.520 {}
>>>>>>> :simple optimizations:docs/js/compiled/out/re_frame/interceptor.js
goog.provide('re_frame.interceptor');
goog.require('cljs.core');
goog.require('re_frame.loggers');
goog.require('re_frame.interop');
goog.require('re_frame.trace');
goog.require('clojure.set');
re_frame.interceptor.mandatory_interceptor_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"after","after",594996914),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"before","before",-1633692388),null], null), null);
re_frame.interceptor.interceptor_QMARK_ = (function re_frame$interceptor$interceptor_QMARK_(m){
return ((cljs.core.map_QMARK_.call(null,m)) && (cljs.core._EQ_.call(null,re_frame.interceptor.mandatory_interceptor_keys,cljs.core.set.call(null,cljs.core.keys.call(null,m)))));
});
/**
 * Create an interceptor from named arguments
 */
re_frame.interceptor.__GT_interceptor = (function re_frame$interceptor$__GT_interceptor(var_args){
var args__4736__auto__ = [];
<<<<<<< HEAD:docs/js/compiled/worker-out/re_frame/interceptor.js
var len__4730__auto___3854 = arguments.length;
var i__4731__auto___3855 = (0);
while(true){
if((i__4731__auto___3855 < len__4730__auto___3854)){
args__4736__auto__.push((arguments[i__4731__auto___3855]));

var G__3856 = (i__4731__auto___3855 + (1));
i__4731__auto___3855 = G__3856;
=======
var len__4730__auto___11466 = arguments.length;
var i__4731__auto___11467 = (0);
while(true){
if((i__4731__auto___11467 < len__4730__auto___11466)){
args__4736__auto__.push((arguments[i__4731__auto___11467]));

var G__11468 = (i__4731__auto___11467 + (1));
i__4731__auto___11467 = G__11468;
>>>>>>> :simple optimizations:docs/js/compiled/out/re_frame/interceptor.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

<<<<<<< HEAD:docs/js/compiled/worker-out/re_frame/interceptor.js
re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic = (function (p__3851){
var map__3852 = p__3851;
var map__3852__$1 = (((((!((map__3852 == null))))?(((((map__3852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3852):map__3852);
var m = map__3852__$1;
var id = cljs.core.get.call(null,map__3852__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var before = cljs.core.get.call(null,map__3852__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var after = cljs.core.get.call(null,map__3852__$1,new cljs.core.Keyword(null,"after","after",594996914));
if(re_frame.interop.debug_enabled_QMARK_){
var temp__5718__auto___3857 = cljs.core.seq.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),re_frame.interceptor.mandatory_interceptor_keys));
if(temp__5718__auto___3857){
var unknown_keys_3858 = temp__5718__auto___3857;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ->interceptor",m,"has unknown keys:",unknown_keys_3858);
=======
re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic = (function (p__11463){
var map__11464 = p__11463;
var map__11464__$1 = (((((!((map__11464 == null))))?(((((map__11464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11464):map__11464);
var m = map__11464__$1;
var id = cljs.core.get.call(null,map__11464__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var before = cljs.core.get.call(null,map__11464__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var after = cljs.core.get.call(null,map__11464__$1,new cljs.core.Keyword(null,"after","after",594996914));
if(re_frame.interop.debug_enabled_QMARK_){
var temp__5718__auto___11469 = cljs.core.seq.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),re_frame.interceptor.mandatory_interceptor_keys));
if(temp__5718__auto___11469){
var unknown_keys_11470 = temp__5718__auto___11469;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ->interceptor",m,"has unknown keys:",unknown_keys_11470);
>>>>>>> :simple optimizations:docs/js/compiled/out/re_frame/interceptor.js
} else {
}
} else {
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__4131__auto__ = id;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"unnamed","unnamed",-26044928);
}
})(),new cljs.core.Keyword(null,"before","before",-1633692388),before,new cljs.core.Keyword(null,"after","after",594996914),after], null);
});

re_frame.interceptor.__GT_interceptor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/re_frame/interceptor.js
re_frame.interceptor.__GT_interceptor.cljs$lang$applyTo = (function (seq3850){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3850));
});

re_frame.interceptor.get_effect = (function re_frame$interceptor$get_effect(var_args){
var G__3860 = arguments.length;
switch (G__3860) {
=======
re_frame.interceptor.__GT_interceptor.cljs$lang$applyTo = (function (seq11462){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11462));
});

re_frame.interceptor.get_effect = (function re_frame$interceptor$get_effect(var_args){
var G__11472 = arguments.length;
switch (G__11472) {
>>>>>>> :simple optimizations:docs/js/compiled/out/re_frame/interceptor.js
case 1:
return re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1 = (function (context){
return new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
});

re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2 = (function (context,key){
return cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",-282369292),key], null));
});

re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3 = (function (context,key,not_found){
return cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",-282369292),key], null),not_found);
});

re_frame.interceptor.get_effect.cljs$lang$maxFixedArity = 3;

re_frame.interceptor.assoc_effect = (function re_frame$interceptor$assoc_effect(context,key,value){
return cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",-282369292),key], null),value);
});
re_frame.interceptor.get_coeffect = (function re_frame$interceptor$get_coeffect(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/re_frame/interceptor.js
var G__3863 = arguments.length;
switch (G__3863) {
=======
var G__11475 = arguments.length;
switch (G__11475) {
>>>>>>> :simple optimizations:docs/js/compiled/out/re_frame/interceptor.js
case 1:
return re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1 = (function (context){
return new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
});

re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2 = (function (context,key){
return cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),key], null));
});

re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$3 = (function (context,key,not_found){
return cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),key], null),not_found);
});

re_frame.interceptor.get_coeffect.cljs$lang$maxFixedArity = 3;

re_frame.interceptor.assoc_coeffect = (function re_frame$interceptor$assoc_coeffect(context,key,value){
return cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),key], null),value);
});
re_frame.interceptor.update_coeffect = (function re_frame$interceptor$update_coeffect(var_args){
var args__4736__auto__ = [];
<<<<<<< HEAD:docs/js/compiled/worker-out/re_frame/interceptor.js
var len__4730__auto___3869 = arguments.length;
var i__4731__auto___3870 = (0);
while(true){
if((i__4731__auto___3870 < len__4730__auto___3869)){
args__4736__auto__.push((arguments[i__4731__auto___3870]));

var G__3871 = (i__4731__auto___3870 + (1));
i__4731__auto___3870 = G__3871;
=======
var len__4730__auto___11481 = arguments.length;
var i__4731__auto___11482 = (0);
while(true){
if((i__4731__auto___11482 < len__4730__auto___11481)){
args__4736__auto__.push((arguments[i__4731__auto___11482]));

var G__11483 = (i__4731__auto___11482 + (1));
i__4731__auto___11482 = G__11483;
>>>>>>> :simple optimizations:docs/js/compiled/out/re_frame/interceptor.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return re_frame.interceptor.update_coeffect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

re_frame.interceptor.update_coeffect.cljs$core$IFn$_invoke$arity$variadic = (function (context,key,f,args){
return cljs.core.apply.call(null,cljs.core.update_in,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),key], null),f,args);
});

re_frame.interceptor.update_coeffect.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/re_frame/interceptor.js
re_frame.interceptor.update_coeffect.cljs$lang$applyTo = (function (seq3865){
var G__3866 = cljs.core.first.call(null,seq3865);
var seq3865__$1 = cljs.core.next.call(null,seq3865);
var G__3867 = cljs.core.first.call(null,seq3865__$1);
var seq3865__$2 = cljs.core.next.call(null,seq3865__$1);
var G__3868 = cljs.core.first.call(null,seq3865__$2);
var seq3865__$3 = cljs.core.next.call(null,seq3865__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3866,G__3867,G__3868,seq3865__$3);
=======
re_frame.interceptor.update_coeffect.cljs$lang$applyTo = (function (seq11477){
var G__11478 = cljs.core.first.call(null,seq11477);
var seq11477__$1 = cljs.core.next.call(null,seq11477);
var G__11479 = cljs.core.first.call(null,seq11477__$1);
var seq11477__$2 = cljs.core.next.call(null,seq11477__$1);
var G__11480 = cljs.core.first.call(null,seq11477__$2);
var seq11477__$3 = cljs.core.next.call(null,seq11477__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11478,G__11479,G__11480,seq11477__$3);
>>>>>>> :simple optimizations:docs/js/compiled/out/re_frame/interceptor.js
});

re_frame.interceptor.invoke_interceptor_fn = (function re_frame$interceptor$invoke_interceptor_fn(context,interceptor,direction){
var temp__5718__auto__ = cljs.core.get.call(null,interceptor,direction);
if(cljs.core.truth_(temp__5718__auto__)){
var f = temp__5718__auto__;
return f.call(null,context);
} else {
return context;
}
});
/**
 * Loop over all interceptors, calling `direction` function on each,
 *   threading the value of `context` through every call.
 * 
 *   `direction` is one of `:before` or `:after`.
 * 
 *   Each iteration, the next interceptor to process is obtained from
 *   context's `:queue`. After they are processed, interceptors are popped
 *   from `:queue` and added to `:stack`.
 * 
 *   After sufficient iteration, `:queue` will be empty, and `:stack` will
 *   contain all interceptors processed.
 * 
 *   Returns updated `context`. Ie. the `context` which has been threaded
 *   through all interceptor functions.
 * 
 *   Generally speaking, an interceptor's `:before` function will (if present)
 *   add to a `context's` `:coeffects`, while it's `:after` function
 *   will modify the `context`'s `:effects`.  Very approximately.
 * 
 *   But because all interceptor functions are given `context`, and can
 *   return a modified version of it, the way is clear for an interceptor
 *   to introspect the stack or queue, or even modify the queue
 *   (add new interceptors via `enqueue`?). This is a very fluid arrangement.
 */
re_frame.interceptor.invoke_interceptors = (function re_frame$interceptor$invoke_interceptors(context,direction){
var context__$1 = context;
while(true){
var queue = new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(context__$1);
if(cljs.core.empty_QMARK_.call(null,queue)){
return context__$1;
} else {
var interceptor = cljs.core.peek.call(null,queue);
var stack = new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(context__$1);
<<<<<<< HEAD:docs/js/compiled/worker-out/re_frame/interceptor.js
var G__3872 = re_frame.interceptor.invoke_interceptor_fn.call(null,cljs.core.assoc.call(null,context__$1,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.pop.call(null,queue),new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj.call(null,stack,interceptor)),interceptor,direction);
context__$1 = G__3872;
=======
var G__11484 = re_frame.interceptor.invoke_interceptor_fn.call(null,cljs.core.assoc.call(null,context__$1,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.pop.call(null,queue),new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj.call(null,stack,interceptor)),interceptor,direction);
context__$1 = G__11484;
>>>>>>> :simple optimizations:docs/js/compiled/out/re_frame/interceptor.js
continue;
}
break;
}
});
/**
 * Add a collection of `interceptors` to the end of `context's` execution `:queue`.
 *   Returns the updated `context`.
 * 
 *   In an advanced case, this function could allow an interceptor to add new
 *   interceptors to the `:queue` of a context.
 */
re_frame.interceptor.enqueue = (function re_frame$interceptor$enqueue(context,interceptors){
return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.fnil.call(null,cljs.core.into,re_frame.interop.empty_queue),interceptors);
});
/**
 * Create a fresh context
 */
re_frame.interceptor.context = (function re_frame$interceptor$context(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/re_frame/interceptor.js
var G__3874 = arguments.length;
switch (G__3874) {
=======
var G__11486 = arguments.length;
switch (G__11486) {
>>>>>>> :simple optimizations:docs/js/compiled/out/re_frame/interceptor.js
case 2:
return re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$2 = (function (event,interceptors){
return re_frame.interceptor.enqueue.call(null,re_frame.interceptor.assoc_coeffect.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"event","event",301435442),event),interceptors);
});

re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$3 = (function (event,interceptors,db){
return re_frame.interceptor.assoc_coeffect.call(null,re_frame.interceptor.context.call(null,event,interceptors),new cljs.core.Keyword(null,"db","db",993250759),db);
});

re_frame.interceptor.context.cljs$lang$maxFixedArity = 3;

/**
 * Called on completion of `:before` processing, this function prepares/modifies
 * `context` for the backwards sweep of processing in which an interceptor
 * chain's `:after` fns are called.
 * 
 *   At this point in processing, the `:queue` is empty and `:stack` holds all
 *   the previously run interceptors. So this function enables the backwards walk
 *   by priming `:queue` with what's currently in `:stack`
 */
re_frame.interceptor.change_direction = (function re_frame$interceptor$change_direction(context){
return re_frame.interceptor.enqueue.call(null,cljs.core.dissoc.call(null,context,new cljs.core.Keyword(null,"queue","queue",1455835879)),new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(context));
});
/**
 * Executes the given chain (coll) of interceptors.
 * 
 * Each interceptor has this form:
 *     {:before  (fn [context] ...)     ;; returns possibly modified context
 *      :after   (fn [context] ...)}    ;; `identity` would be a noop
 * 
 * Walks the queue of iterceptors from beginning to end, calling the
 * `:before` fn on each, then reverse direction and walk backwards,
 * calling the `:after` fn on each.
 * 
 * The last interceptor in the chain presumably wraps an event
 * handler fn. So the overall goal of the process is to "handle
 * the given event".
 * 
 * Thread a `context` through all calls. `context` has this form:
 * 
 *   {:coeffects {:event [:a-query-id :some-param]
 *                :db    <original contents of app-db>}
 *    :effects   {:db    <new value for app-db>
 *                :dispatch  [:an-event-id :param1]}
 *    :queue     <a collection of further interceptors>
 *    :stack     <a collection of interceptors already walked>}
 * 
 * `context` has `:coeffects` and `:effects` which, if this was a web
 * server, would be somewhat anologous to `request` and `response`
 * respectively.
 * 
 * `coeffects` will contain data like `event` and the initial
 * state of `db` -  the inputs required by the event handler
 * (sitting presumably on the end of the chain), while handler-returned
 * side effects are put into `:effects` including, but not limited to,
 * new values for `db`.
 * 
 * The first few interceptors in a chain will likely have `:before`
 * functions which "prime" the `context` by adding the event, and
 * the current state of app-db into `:coeffects`. But interceptors can
 * add whatever they want to `:coeffects` - perhaps the event handler needs
 * some information from localstore, or a random number, or access to
 * a DataScript connection.
 * 
 * Equally, some interceptors in the chain will have `:after` fn
 * which can process the side effects accumulated into `:effects`
 * including but, not limited to, updates to app-db.
 * 
 * Through both stages (before and after), `context` contains a `:queue`
 * of interceptors yet to be processed, and a `:stack` of interceptors
 * already done.  In advanced cases, these values can be modified by the
 * functions through which the context is threaded.
 */
re_frame.interceptor.execute = (function re_frame$interceptor$execute(event_v,interceptors){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
<<<<<<< HEAD:docs/js/compiled/worker-out/re_frame/interceptor.js
var new_trace__3775__auto___3876 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),interceptors], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),interceptors], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__3775__auto___3876;
=======
var new_trace__11332__auto___11488 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),interceptors], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),interceptors], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__11332__auto___11488;
>>>>>>> :simple optimizations:docs/js/compiled/out/re_frame/interceptor.js

} else {
}

return re_frame.interceptor.invoke_interceptors.call(null,re_frame.interceptor.change_direction.call(null,re_frame.interceptor.invoke_interceptors.call(null,re_frame.interceptor.context.call(null,event_v,interceptors),new cljs.core.Keyword(null,"before","before",-1633692388))),new cljs.core.Keyword(null,"after","after",594996914));
});

//# sourceMappingURL=interceptor.js.map
