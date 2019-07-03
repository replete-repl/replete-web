// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__17467 = arguments.length;
switch (G__17467) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17468 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17468 = (function (f,blockable,meta17469){
this.f = f;
this.blockable = blockable;
this.meta17469 = meta17469;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17470,meta17469__$1){
var self__ = this;
var _17470__$1 = this;
return (new cljs.core.async.t_cljs$core$async17468(self__.f,self__.blockable,meta17469__$1));
});

cljs.core.async.t_cljs$core$async17468.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17470){
var self__ = this;
var _17470__$1 = this;
return self__.meta17469;
});

cljs.core.async.t_cljs$core$async17468.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17468.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17468.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async17468.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17468.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta17469], null);
});

cljs.core.async.t_cljs$core$async17468.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17468.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17468";

cljs.core.async.t_cljs$core$async17468.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async17468");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17468.
 */
cljs.core.async.__GT_t_cljs$core$async17468 = (function cljs$core$async$__GT_t_cljs$core$async17468(f__$1,blockable__$1,meta17469){
return (new cljs.core.async.t_cljs$core$async17468(f__$1,blockable__$1,meta17469));
});

}

return (new cljs.core.async.t_cljs$core$async17468(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__17474 = arguments.length;
switch (G__17474) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__17477 = arguments.length;
switch (G__17477) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__17480 = arguments.length;
switch (G__17480) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17482 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17482) : fn1.call(null,val_17482));
} else {
cljs.core.async.impl.dispatch.run(((function (val_17482,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17482) : fn1.call(null,val_17482));
});})(val_17482,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__17484 = arguments.length;
switch (G__17484) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5718__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___17486 = n;
var x_17487 = (0);
while(true){
if((x_17487 < n__4607__auto___17486)){
(a[x_17487] = (0));

var G__17488 = (x_17487 + (1));
x_17487 = G__17488;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__17489 = (i + (1));
i = G__17489;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17490 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17490 = (function (flag,meta17491){
this.flag = flag;
this.meta17491 = meta17491;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17492,meta17491__$1){
var self__ = this;
var _17492__$1 = this;
return (new cljs.core.async.t_cljs$core$async17490(self__.flag,meta17491__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17490.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17492){
var self__ = this;
var _17492__$1 = this;
return self__.meta17491;
});})(flag))
;

cljs.core.async.t_cljs$core$async17490.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17490.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17490.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17490.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17490.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta17491], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17490.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17490.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17490";

cljs.core.async.t_cljs$core$async17490.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async17490");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17490.
 */
cljs.core.async.__GT_t_cljs$core$async17490 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17490(flag__$1,meta17491){
return (new cljs.core.async.t_cljs$core$async17490(flag__$1,meta17491));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17490(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17493 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17493 = (function (flag,cb,meta17494){
this.flag = flag;
this.cb = cb;
this.meta17494 = meta17494;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17495,meta17494__$1){
var self__ = this;
var _17495__$1 = this;
return (new cljs.core.async.t_cljs$core$async17493(self__.flag,self__.cb,meta17494__$1));
});

cljs.core.async.t_cljs$core$async17493.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17495){
var self__ = this;
var _17495__$1 = this;
return self__.meta17494;
});

cljs.core.async.t_cljs$core$async17493.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17493.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async17493.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17493.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17493.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta17494], null);
});

cljs.core.async.t_cljs$core$async17493.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17493.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17493";

cljs.core.async.t_cljs$core$async17493.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async17493");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17493.
 */
cljs.core.async.__GT_t_cljs$core$async17493 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17493(flag__$1,cb__$1,meta17494){
return (new cljs.core.async.t_cljs$core$async17493(flag__$1,cb__$1,meta17494));
});

}

return (new cljs.core.async.t_cljs$core$async17493(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17496_SHARP_){
var G__17498 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17496_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17498) : fret.call(null,G__17498));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17497_SHARP_){
var G__17499 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17497_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17499) : fret.call(null,G__17499));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17500 = (i + (1));
i = G__17500;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5720__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___17506 = arguments.length;
var i__4731__auto___17507 = (0);
while(true){
if((i__4731__auto___17507 < len__4730__auto___17506)){
args__4736__auto__.push((arguments[i__4731__auto___17507]));

var G__17508 = (i__4731__auto___17507 + (1));
i__4731__auto___17507 = G__17508;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17503){
var map__17504 = p__17503;
var map__17504__$1 = (((((!((map__17504 == null))))?(((((map__17504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17504):map__17504);
var opts = map__17504__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17501){
var G__17502 = cljs.core.first(seq17501);
var seq17501__$1 = cljs.core.next(seq17501);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17502,seq17501__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__17510 = arguments.length;
switch (G__17510) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17407__auto___17556 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17407__auto___17556){
return (function (){
var f__17408__auto__ = (function (){var switch__17390__auto__ = ((function (c__17407__auto___17556){
return (function (state_17534){
var state_val_17535 = (state_17534[(1)]);
if((state_val_17535 === (7))){
var inst_17530 = (state_17534[(2)]);
var state_17534__$1 = state_17534;
var statearr_17536_17557 = state_17534__$1;
(statearr_17536_17557[(2)] = inst_17530);

(statearr_17536_17557[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17535 === (1))){
var state_17534__$1 = state_17534;
var statearr_17537_17558 = state_17534__$1;
(statearr_17537_17558[(2)] = null);

(statearr_17537_17558[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17535 === (4))){
var inst_17513 = (state_17534[(7)]);
var inst_17513__$1 = (state_17534[(2)]);
var inst_17514 = (inst_17513__$1 == null);
var state_17534__$1 = (function (){var statearr_17538 = state_17534;
(statearr_17538[(7)] = inst_17513__$1);

return statearr_17538;
})();
if(cljs.core.truth_(inst_17514)){
var statearr_17539_17559 = state_17534__$1;
(statearr_17539_17559[(1)] = (5));

} else {
var statearr_17540_17560 = state_17534__$1;
(statearr_17540_17560[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17535 === (13))){
var state_17534__$1 = state_17534;
var statearr_17541_17561 = state_17534__$1;
(statearr_17541_17561[(2)] = null);

(statearr_17541_17561[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17535 === (6))){
var inst_17513 = (state_17534[(7)]);
var state_17534__$1 = state_17534;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17534__$1,(11),to,inst_17513);
} else {
if((state_val_17535 === (3))){
var inst_17532 = (state_17534[(2)]);
var state_17534__$1 = state_17534;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17534__$1,inst_17532);
} else {
if((state_val_17535 === (12))){
var state_17534__$1 = state_17534;
var statearr_17542_17562 = state_17534__$1;
(statearr_17542_17562[(2)] = null);

(statearr_17542_17562[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17535 === (2))){
var state_17534__$1 = state_17534;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17534__$1,(4),from);
} else {
if((state_val_17535 === (11))){
var inst_17523 = (state_17534[(2)]);
var state_17534__$1 = state_17534;
if(cljs.core.truth_(inst_17523)){
var statearr_17543_17563 = state_17534__$1;
(statearr_17543_17563[(1)] = (12));

} else {
var statearr_17544_17564 = state_17534__$1;
(statearr_17544_17564[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17535 === (9))){
var state_17534__$1 = state_17534;
var statearr_17545_17565 = state_17534__$1;
(statearr_17545_17565[(2)] = null);

(statearr_17545_17565[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17535 === (5))){
var state_17534__$1 = state_17534;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17546_17566 = state_17534__$1;
(statearr_17546_17566[(1)] = (8));

} else {
var statearr_17547_17567 = state_17534__$1;
(statearr_17547_17567[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17535 === (14))){
var inst_17528 = (state_17534[(2)]);
var state_17534__$1 = state_17534;
var statearr_17548_17568 = state_17534__$1;
(statearr_17548_17568[(2)] = inst_17528);

(statearr_17548_17568[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17535 === (10))){
var inst_17520 = (state_17534[(2)]);
var state_17534__$1 = state_17534;
var statearr_17549_17569 = state_17534__$1;
(statearr_17549_17569[(2)] = inst_17520);

(statearr_17549_17569[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17535 === (8))){
var inst_17517 = cljs.core.async.close_BANG_(to);
var state_17534__$1 = state_17534;
var statearr_17550_17570 = state_17534__$1;
(statearr_17550_17570[(2)] = inst_17517);

(statearr_17550_17570[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__17407__auto___17556))
;
return ((function (switch__17390__auto__,c__17407__auto___17556){
return (function() {
var cljs$core$async$state_machine__17391__auto__ = null;
var cljs$core$async$state_machine__17391__auto____0 = (function (){
var statearr_17551 = [null,null,null,null,null,null,null,null];
(statearr_17551[(0)] = cljs$core$async$state_machine__17391__auto__);

(statearr_17551[(1)] = (1));

return statearr_17551;
});
var cljs$core$async$state_machine__17391__auto____1 = (function (state_17534){
while(true){
var ret_value__17392__auto__ = (function (){try{while(true){
var result__17393__auto__ = switch__17390__auto__(state_17534);
if(cljs.core.keyword_identical_QMARK_(result__17393__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17393__auto__;
}
break;
}
}catch (e17552){if((e17552 instanceof Object)){
var ex__17394__auto__ = e17552;
var statearr_17553_17571 = state_17534;
(statearr_17553_17571[(5)] = ex__17394__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17534);

return cljs.core.cst$kw$recur;
} else {
throw e17552;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17392__auto__,cljs.core.cst$kw$recur)){
var G__17572 = state_17534;
state_17534 = G__17572;
continue;
} else {
return ret_value__17392__auto__;
}
break;
}
});
cljs$core$async$state_machine__17391__auto__ = function(state_17534){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17391__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17391__auto____1.call(this,state_17534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17391__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17391__auto____0;
cljs$core$async$state_machine__17391__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17391__auto____1;
return cljs$core$async$state_machine__17391__auto__;
})()
;})(switch__17390__auto__,c__17407__auto___17556))
})();
var state__17409__auto__ = (function (){var statearr_17554 = (f__17408__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17408__auto__.cljs$core$IFn$_invoke$arity$0() : f__17408__auto__.call(null));
(statearr_17554[(6)] = c__17407__auto___17556);

return statearr_17554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17409__auto__);
});})(c__17407__auto___17556))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__17573){
var vec__17574 = p__17573;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17574,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17574,(1),null);
var job = vec__17574;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__17407__auto___17745 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17407__auto___17745,res,vec__17574,v,p,job,jobs,results){
return (function (){
var f__17408__auto__ = (function (){var switch__17390__auto__ = ((function (c__17407__auto___17745,res,vec__17574,v,p,job,jobs,results){
return (function (state_17581){
var state_val_17582 = (state_17581[(1)]);
if((state_val_17582 === (1))){
var state_17581__$1 = state_17581;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17581__$1,(2),res,v);
} else {
if((state_val_17582 === (2))){
var inst_17578 = (state_17581[(2)]);
var inst_17579 = cljs.core.async.close_BANG_(res);
var state_17581__$1 = (function (){var statearr_17583 = state_17581;
(statearr_17583[(7)] = inst_17578);

return statearr_17583;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17581__$1,inst_17579);
} else {
return null;
}
}
});})(c__17407__auto___17745,res,vec__17574,v,p,job,jobs,results))
;
return ((function (switch__17390__auto__,c__17407__auto___17745,res,vec__17574,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17391__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17391__auto____0 = (function (){
var statearr_17584 = [null,null,null,null,null,null,null,null];
(statearr_17584[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17391__auto__);

(statearr_17584[(1)] = (1));

return statearr_17584;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17391__auto____1 = (function (state_17581){
while(true){
var ret_value__17392__auto__ = (function (){try{while(true){
var result__17393__auto__ = switch__17390__auto__(state_17581);
if(cljs.core.keyword_identical_QMARK_(result__17393__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17393__auto__;
}
break;
}
}catch (e17585){if((e17585 instanceof Object)){
var ex__17394__auto__ = e17585;
var statearr_17586_17746 = state_17581;
(statearr_17586_17746[(5)] = ex__17394__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17581);

return cljs.core.cst$kw$recur;
} else {
throw e17585;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17392__auto__,cljs.core.cst$kw$recur)){
var G__17747 = state_17581;
state_17581 = G__17747;
continue;
} else {
return ret_value__17392__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17391__auto__ = function(state_17581){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17391__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17391__auto____1.call(this,state_17581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17391__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17391__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17391__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17391__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17391__auto__;
})()
;})(switch__17390__auto__,c__17407__auto___17745,res,vec__17574,v,p,job,jobs,results))
})();
var state__17409__auto__ = (function (){var statearr_17587 = (f__17408__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17408__auto__.cljs$core$IFn$_invoke$arity$0() : f__17408__auto__.call(null));
(statearr_17587[(6)] = c__17407__auto___17745);

return statearr_17587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17409__auto__);
});})(c__17407__auto___17745,res,vec__17574,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17588){
var vec__17589 = p__17588;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17589,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17589,(1),null);
var job = vec__17589;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___17748 = n;
var __17749 = (0);
while(true){
if((__17749 < n__4607__auto___17748)){
var G__17592_17750 = type;
var G__17592_17751__$1 = (((G__17592_17750 instanceof cljs.core.Keyword))?G__17592_17750.fqn:null);
switch (G__17592_17751__$1) {
case "compute":
var c__17407__auto___17753 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17749,c__17407__auto___17753,G__17592_17750,G__17592_17751__$1,n__4607__auto___17748,jobs,results,process,async){
return (function (){
var f__17408__auto__ = (function (){var switch__17390__auto__ = ((function (__17749,c__17407__auto___17753,G__17592_17750,G__17592_17751__$1,n__4607__auto___17748,jobs,results,process,async){
return (function (state_17605){
var state_val_17606 = (state_17605[(1)]);
if((state_val_17606 === (1))){
var state_17605__$1 = state_17605;
var statearr_17607_17754 = state_17605__$1;
(statearr_17607_17754[(2)] = null);

(statearr_17607_17754[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17606 === (2))){
var state_17605__$1 = state_17605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17605__$1,(4),jobs);
} else {
if((state_val_17606 === (3))){
var inst_17603 = (state_17605[(2)]);
var state_17605__$1 = state_17605;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17605__$1,inst_17603);
} else {
if((state_val_17606 === (4))){
var inst_17595 = (state_17605[(2)]);
var inst_17596 = process(inst_17595);
var state_17605__$1 = state_17605;
if(cljs.core.truth_(inst_17596)){
var statearr_17608_17755 = state_17605__$1;
(statearr_17608_17755[(1)] = (5));

} else {
var statearr_17609_17756 = state_17605__$1;
(statearr_17609_17756[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17606 === (5))){
var state_17605__$1 = state_17605;
var statearr_17610_17757 = state_17605__$1;
(statearr_17610_17757[(2)] = null);

(statearr_17610_17757[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17606 === (6))){
var state_17605__$1 = state_17605;
var statearr_17611_17758 = state_17605__$1;
(statearr_17611_17758[(2)] = null);

(statearr_17611_17758[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17606 === (7))){
var inst_17601 = (state_17605[(2)]);
var state_17605__$1 = state_17605;
var statearr_17612_17759 = state_17605__$1;
(statearr_17612_17759[(2)] = inst_17601);

(statearr_17612_17759[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__17749,c__17407__auto___17753,G__17592_17750,G__17592_17751__$1,n__4607__auto___17748,jobs,results,process,async))
;
return ((function (__17749,switch__17390__auto__,c__17407__auto___17753,G__17592_17750,G__17592_17751__$1,n__4607__auto___17748,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17391__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17391__auto____0 = (function (){
var statearr_17613 = [null,null,null,null,null,null,null];
(statearr_17613[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17391__auto__);

(statearr_17613[(1)] = (1));

return statearr_17613;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17391__auto____1 = (function (state_17605){
while(true){
var ret_value__17392__auto__ = (function (){try{while(true){
var result__17393__auto__ = switch__17390__auto__(state_17605);
if(cljs.core.keyword_identical_QMARK_(result__17393__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17393__auto__;
}
break;
}
}catch (e17614){if((e17614 instanceof Object)){
var ex__17394__auto__ = e17614;
var statearr_17615_17760 = state_17605;
(statearr_17615_17760[(5)] = ex__17394__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17605);

return cljs.core.cst$kw$recur;
} else {
throw e17614;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17392__auto__,cljs.core.cst$kw$recur)){
var G__17761 = state_17605;
state_17605 = G__17761;
continue;
} else {
return ret_value__17392__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17391__auto__ = function(state_17605){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17391__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17391__auto____1.call(this,state_17605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17391__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17391__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17391__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17391__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17391__auto__;
})()
;})(__17749,switch__17390__auto__,c__17407__auto___17753,G__17592_17750,G__17592_17751__$1,n__4607__auto___17748,jobs,results,process,async))
})();
var state__17409__auto__ = (function (){var statearr_17616 = (f__17408__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17408__auto__.cljs$core$IFn$_invoke$arity$0() : f__17408__auto__.call(null));
(statearr_17616[(6)] = c__17407__auto___17753);

return statearr_17616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17409__auto__);
});})(__17749,c__17407__auto___17753,G__17592_17750,G__17592_17751__$1,n__4607__auto___17748,jobs,results,process,async))
);


break;
case "async":
var c__17407__auto___17762 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17749,c__17407__auto___17762,G__17592_17750,G__17592_17751__$1,n__4607__auto___17748,jobs,results,process,async){
return (function (){
var f__17408__auto__ = (function (){var switch__17390__auto__ = ((function (__17749,c__17407__auto___17762,G__17592_17750,G__17592_17751__$1,n__4607__auto___17748,jobs,results,process,async){
return (function (state_17629){
var state_val_17630 = (state_17629[(1)]);
if((state_val_17630 === (1))){
var state_17629__$1 = state_17629;
var statearr_17631_17763 = state_17629__$1;
(statearr_17631_17763[(2)] = null);

(statearr_17631_17763[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17630 === (2))){
var state_17629__$1 = state_17629;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17629__$1,(4),jobs);
} else {
if((state_val_17630 === (3))){
var inst_17627 = (state_17629[(2)]);
var state_17629__$1 = state_17629;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17629__$1,inst_17627);
} else {
if((state_val_17630 === (4))){
var inst_17619 = (state_17629[(2)]);
var inst_17620 = async(inst_17619);
var state_17629__$1 = state_17629;
if(cljs.core.truth_(inst_17620)){
var statearr_17632_17764 = state_17629__$1;
(statearr_17632_17764[(1)] = (5));

} else {
var statearr_17633_17765 = state_17629__$1;
(statearr_17633_17765[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17630 === (5))){
var state_17629__$1 = state_17629;
var statearr_17634_17766 = state_17629__$1;
(statearr_17634_17766[(2)] = null);

(statearr_17634_17766[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17630 === (6))){
var state_17629__$1 = state_17629;
var statearr_17635_17767 = state_17629__$1;
(statearr_17635_17767[(2)] = null);

(statearr_17635_17767[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17630 === (7))){
var inst_17625 = (state_17629[(2)]);
var state_17629__$1 = state_17629;
var statearr_17636_17768 = state_17629__$1;
(statearr_17636_17768[(2)] = inst_17625);

(statearr_17636_17768[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__17749,c__17407__auto___17762,G__17592_17750,G__17592_17751__$1,n__4607__auto___17748,jobs,results,process,async))
;
return ((function (__17749,switch__17390__auto__,c__17407__auto___17762,G__17592_17750,G__17592_17751__$1,n__4607__auto___17748,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17391__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17391__auto____0 = (function (){
var statearr_17637 = [null,null,null,null,null,null,null];
(statearr_17637[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17391__auto__);

(statearr_17637[(1)] = (1));

return statearr_17637;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17391__auto____1 = (function (state_17629){
while(true){
var ret_value__17392__auto__ = (function (){try{while(true){
var result__17393__auto__ = switch__17390__auto__(state_17629);
if(cljs.core.keyword_identical_QMARK_(result__17393__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17393__auto__;
}
break;
}
}catch (e17638){if((e17638 instanceof Object)){
var ex__17394__auto__ = e17638;
var statearr_17639_17769 = state_17629;
(statearr_17639_17769[(5)] = ex__17394__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17629);

return cljs.core.cst$kw$recur;
} else {
throw e17638;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17392__auto__,cljs.core.cst$kw$recur)){
var G__17770 = state_17629;
state_17629 = G__17770;
continue;
} else {
return ret_value__17392__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17391__auto__ = function(state_17629){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17391__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17391__auto____1.call(this,state_17629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17391__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17391__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17391__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17391__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17391__auto__;
})()
;})(__17749,switch__17390__auto__,c__17407__auto___17762,G__17592_17750,G__17592_17751__$1,n__4607__auto___17748,jobs,results,process,async))
})();
var state__17409__auto__ = (function (){var statearr_17640 = (f__17408__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17408__auto__.cljs$core$IFn$_invoke$arity$0() : f__17408__auto__.call(null));
(statearr_17640[(6)] = c__17407__auto___17762);

return statearr_17640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17409__auto__);
});})(__17749,c__17407__auto___17762,G__17592_17750,G__17592_17751__$1,n__4607__auto___17748,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17592_17751__$1)].join('')));

}

var G__17771 = (__17749 + (1));
__17749 = G__17771;
continue;
} else {
}
break;
}

var c__17407__auto___17772 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17407__auto___17772,jobs,results,process,async){
return (function (){
var f__17408__auto__ = (function (){var switch__17390__auto__ = ((function (c__17407__auto___17772,jobs,results,process,async){
return (function (state_17662){
var state_val_17663 = (state_17662[(1)]);
if((state_val_17663 === (7))){
var inst_17658 = (state_17662[(2)]);
var state_17662__$1 = state_17662;
var statearr_17664_17773 = state_17662__$1;
(statearr_17664_17773[(2)] = inst_17658);

(statearr_17664_17773[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17663 === (1))){
var state_17662__$1 = state_17662;
var statearr_17665_17774 = state_17662__$1;
(statearr_17665_17774[(2)] = null);

(statearr_17665_17774[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17663 === (4))){
var inst_17643 = (state_17662[(7)]);
var inst_17643__$1 = (state_17662[(2)]);
var inst_17644 = (inst_17643__$1 == null);
var state_17662__$1 = (function (){var statearr_17666 = state_17662;
(statearr_17666[(7)] = inst_17643__$1);

return statearr_17666;
})();
if(cljs.core.truth_(inst_17644)){
var statearr_17667_17775 = state_17662__$1;
(statearr_17667_17775[(1)] = (5));

} else {
var statearr_17668_17776 = state_17662__$1;
(statearr_17668_17776[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17663 === (6))){
var inst_17643 = (state_17662[(7)]);
var inst_17648 = (state_17662[(8)]);
var inst_17648__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17649 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17650 = [inst_17643,inst_17648__$1];
var inst_17651 = (new cljs.core.PersistentVector(null,2,(5),inst_17649,inst_17650,null));
var state_17662__$1 = (function (){var statearr_17669 = state_17662;
(statearr_17669[(8)] = inst_17648__$1);

return statearr_17669;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17662__$1,(8),jobs,inst_17651);
} else {
if((state_val_17663 === (3))){
var inst_17660 = (state_17662[(2)]);
var state_17662__$1 = state_17662;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17662__$1,inst_17660);
} else {
if((state_val_17663 === (2))){
var state_17662__$1 = state_17662;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17662__$1,(4),from);
} else {
if((state_val_17663 === (9))){
var inst_17655 = (state_17662[(2)]);
var state_17662__$1 = (function (){var statearr_17670 = state_17662;
(statearr_17670[(9)] = inst_17655);

return statearr_17670;
})();
var statearr_17671_17777 = state_17662__$1;
(statearr_17671_17777[(2)] = null);

(statearr_17671_17777[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17663 === (5))){
var inst_17646 = cljs.core.async.close_BANG_(jobs);
var state_17662__$1 = state_17662;
var statearr_17672_17778 = state_17662__$1;
(statearr_17672_17778[(2)] = inst_17646);

(statearr_17672_17778[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17663 === (8))){
var inst_17648 = (state_17662[(8)]);
var inst_17653 = (state_17662[(2)]);
var state_17662__$1 = (function (){var statearr_17673 = state_17662;
(statearr_17673[(10)] = inst_17653);

return statearr_17673;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17662__$1,(9),results,inst_17648);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__17407__auto___17772,jobs,results,process,async))
;
return ((function (switch__17390__auto__,c__17407__auto___17772,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17391__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17391__auto____0 = (function (){
var statearr_17674 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17674[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17391__auto__);

(statearr_17674[(1)] = (1));

return statearr_17674;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17391__auto____1 = (function (state_17662){
while(true){
var ret_value__17392__auto__ = (function (){try{while(true){
var result__17393__auto__ = switch__17390__auto__(state_17662);
if(cljs.core.keyword_identical_QMARK_(result__17393__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17393__auto__;
}
break;
}
}catch (e17675){if((e17675 instanceof Object)){
var ex__17394__auto__ = e17675;
var statearr_17676_17779 = state_17662;
(statearr_17676_17779[(5)] = ex__17394__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17662);

return cljs.core.cst$kw$recur;
} else {
throw e17675;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17392__auto__,cljs.core.cst$kw$recur)){
var G__17780 = state_17662;
state_17662 = G__17780;
continue;
} else {
return ret_value__17392__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17391__auto__ = function(state_17662){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17391__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17391__auto____1.call(this,state_17662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17391__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17391__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17391__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17391__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17391__auto__;
})()
;})(switch__17390__auto__,c__17407__auto___17772,jobs,results,process,async))
})();
var state__17409__auto__ = (function (){var statearr_17677 = (f__17408__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17408__auto__.cljs$core$IFn$_invoke$arity$0() : f__17408__auto__.call(null));
(statearr_17677[(6)] = c__17407__auto___17772);

return statearr_17677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17409__auto__);
});})(c__17407__auto___17772,jobs,results,process,async))
);


var c__17407__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17407__auto__,jobs,results,process,async){
return (function (){
var f__17408__auto__ = (function (){var switch__17390__auto__ = ((function (c__17407__auto__,jobs,results,process,async){
return (function (state_17715){
var state_val_17716 = (state_17715[(1)]);
if((state_val_17716 === (7))){
var inst_17711 = (state_17715[(2)]);
var state_17715__$1 = state_17715;
var statearr_17717_17781 = state_17715__$1;
(statearr_17717_17781[(2)] = inst_17711);

(statearr_17717_17781[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (20))){
var state_17715__$1 = state_17715;
var statearr_17718_17782 = state_17715__$1;
(statearr_17718_17782[(2)] = null);

(statearr_17718_17782[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (1))){
var state_17715__$1 = state_17715;
var statearr_17719_17783 = state_17715__$1;
(statearr_17719_17783[(2)] = null);

(statearr_17719_17783[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (4))){
var inst_17680 = (state_17715[(7)]);
var inst_17680__$1 = (state_17715[(2)]);
var inst_17681 = (inst_17680__$1 == null);
var state_17715__$1 = (function (){var statearr_17720 = state_17715;
(statearr_17720[(7)] = inst_17680__$1);

return statearr_17720;
})();
if(cljs.core.truth_(inst_17681)){
var statearr_17721_17784 = state_17715__$1;
(statearr_17721_17784[(1)] = (5));

} else {
var statearr_17722_17785 = state_17715__$1;
(statearr_17722_17785[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (15))){
var inst_17693 = (state_17715[(8)]);
var state_17715__$1 = state_17715;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17715__$1,(18),to,inst_17693);
} else {
if((state_val_17716 === (21))){
var inst_17706 = (state_17715[(2)]);
var state_17715__$1 = state_17715;
var statearr_17723_17786 = state_17715__$1;
(statearr_17723_17786[(2)] = inst_17706);

(statearr_17723_17786[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (13))){
var inst_17708 = (state_17715[(2)]);
var state_17715__$1 = (function (){var statearr_17724 = state_17715;
(statearr_17724[(9)] = inst_17708);

return statearr_17724;
})();
var statearr_17725_17787 = state_17715__$1;
(statearr_17725_17787[(2)] = null);

(statearr_17725_17787[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (6))){
var inst_17680 = (state_17715[(7)]);
var state_17715__$1 = state_17715;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17715__$1,(11),inst_17680);
} else {
if((state_val_17716 === (17))){
var inst_17701 = (state_17715[(2)]);
var state_17715__$1 = state_17715;
if(cljs.core.truth_(inst_17701)){
var statearr_17726_17788 = state_17715__$1;
(statearr_17726_17788[(1)] = (19));

} else {
var statearr_17727_17789 = state_17715__$1;
(statearr_17727_17789[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (3))){
var inst_17713 = (state_17715[(2)]);
var state_17715__$1 = state_17715;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17715__$1,inst_17713);
} else {
if((state_val_17716 === (12))){
var inst_17690 = (state_17715[(10)]);
var state_17715__$1 = state_17715;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17715__$1,(14),inst_17690);
} else {
if((state_val_17716 === (2))){
var state_17715__$1 = state_17715;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17715__$1,(4),results);
} else {
if((state_val_17716 === (19))){
var state_17715__$1 = state_17715;
var statearr_17728_17790 = state_17715__$1;
(statearr_17728_17790[(2)] = null);

(statearr_17728_17790[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (11))){
var inst_17690 = (state_17715[(2)]);
var state_17715__$1 = (function (){var statearr_17729 = state_17715;
(statearr_17729[(10)] = inst_17690);

return statearr_17729;
})();
var statearr_17730_17791 = state_17715__$1;
(statearr_17730_17791[(2)] = null);

(statearr_17730_17791[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (9))){
var state_17715__$1 = state_17715;
var statearr_17731_17792 = state_17715__$1;
(statearr_17731_17792[(2)] = null);

(statearr_17731_17792[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (5))){
var state_17715__$1 = state_17715;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17732_17793 = state_17715__$1;
(statearr_17732_17793[(1)] = (8));

} else {
var statearr_17733_17794 = state_17715__$1;
(statearr_17733_17794[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (14))){
var inst_17695 = (state_17715[(11)]);
var inst_17693 = (state_17715[(8)]);
var inst_17693__$1 = (state_17715[(2)]);
var inst_17694 = (inst_17693__$1 == null);
var inst_17695__$1 = cljs.core.not(inst_17694);
var state_17715__$1 = (function (){var statearr_17734 = state_17715;
(statearr_17734[(11)] = inst_17695__$1);

(statearr_17734[(8)] = inst_17693__$1);

return statearr_17734;
})();
if(inst_17695__$1){
var statearr_17735_17795 = state_17715__$1;
(statearr_17735_17795[(1)] = (15));

} else {
var statearr_17736_17796 = state_17715__$1;
(statearr_17736_17796[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (16))){
var inst_17695 = (state_17715[(11)]);
var state_17715__$1 = state_17715;
var statearr_17737_17797 = state_17715__$1;
(statearr_17737_17797[(2)] = inst_17695);

(statearr_17737_17797[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (10))){
var inst_17687 = (state_17715[(2)]);
var state_17715__$1 = state_17715;
var statearr_17738_17798 = state_17715__$1;
(statearr_17738_17798[(2)] = inst_17687);

(statearr_17738_17798[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (18))){
var inst_17698 = (state_17715[(2)]);
var state_17715__$1 = state_17715;
var statearr_17739_17799 = state_17715__$1;
(statearr_17739_17799[(2)] = inst_17698);

(statearr_17739_17799[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17716 === (8))){
var inst_17684 = cljs.core.async.close_BANG_(to);
var state_17715__$1 = state_17715;
var statearr_17740_17800 = state_17715__$1;
(statearr_17740_17800[(2)] = inst_17684);

(statearr_17740_17800[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__17407__auto__,jobs,results,process,async))
;
return ((function (switch__17390__auto__,c__17407__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17391__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17391__auto____0 = (function (){
var statearr_17741 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17741[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17391__auto__);

(statearr_17741[(1)] = (1));

return statearr_17741;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17391__auto____1 = (function (state_17715){
while(true){
var ret_value__17392__auto__ = (function (){try{while(true){
var result__17393__auto__ = switch__17390__auto__(state_17715);
if(cljs.core.keyword_identical_QMARK_(result__17393__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17393__auto__;
}
break;
}
}catch (e17742){if((e17742 instanceof Object)){
var ex__17394__auto__ = e17742;
var statearr_17743_17801 = state_17715;
(statearr_17743_17801[(5)] = ex__17394__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17715);

return cljs.core.cst$kw$recur;
} else {
throw e17742;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17392__auto__,cljs.core.cst$kw$recur)){
var G__17802 = state_17715;
state_17715 = G__17802;
continue;
} else {
return ret_value__17392__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17391__auto__ = function(state_17715){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17391__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17391__auto____1.call(this,state_17715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17391__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17391__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17391__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17391__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17391__auto__;
})()
;})(switch__17390__auto__,c__17407__auto__,jobs,results,process,async))
})();
var state__17409__auto__ = (function (){var statearr_17744 = (f__17408__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17408__auto__.cljs$core$IFn$_invoke$arity$0() : f__17408__auto__.call(null));
(statearr_17744[(6)] = c__17407__auto__);

return statearr_17744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17409__auto__);
});})(c__17407__auto__,jobs,results,process,async))
);

return c__17407__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__17804 = arguments.length;
switch (G__17804) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__17807 = arguments.length;
switch (G__17807) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__17810 = arguments.length;
switch (G__17810) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__17407__auto___17859 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17407__auto___17859,tc,fc){
return (function (){
var f__17408__auto__ = (function (){var switch__17390__auto__ = ((function (c__17407__auto___17859,tc,fc){
return (function (state_17836){
var state_val_17837 = (state_17836[(1)]);
if((state_val_17837 === (7))){
var inst_17832 = (state_17836[(2)]);
var state_17836__$1 = state_17836;
var statearr_17838_17860 = state_17836__$1;
(statearr_17838_17860[(2)] = inst_17832);

(statearr_17838_17860[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17837 === (1))){
var state_17836__$1 = state_17836;
var statearr_17839_17861 = state_17836__$1;
(statearr_17839_17861[(2)] = null);

(statearr_17839_17861[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17837 === (4))){
var inst_17813 = (state_17836[(7)]);
var inst_17813__$1 = (state_17836[(2)]);
var inst_17814 = (inst_17813__$1 == null);
var state_17836__$1 = (function (){var statearr_17840 = state_17836;
(statearr_17840[(7)] = inst_17813__$1);

return statearr_17840;
})();
if(cljs.core.truth_(inst_17814)){
var statearr_17841_17862 = state_17836__$1;
(statearr_17841_17862[(1)] = (5));

} else {
var statearr_17842_17863 = state_17836__$1;
(statearr_17842_17863[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17837 === (13))){
var state_17836__$1 = state_17836;
var statearr_17843_17864 = state_17836__$1;
(statearr_17843_17864[(2)] = null);

(statearr_17843_17864[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17837 === (6))){
var inst_17813 = (state_17836[(7)]);
var inst_17819 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17813) : p.call(null,inst_17813));
var state_17836__$1 = state_17836;
if(cljs.core.truth_(inst_17819)){
var statearr_17844_17865 = state_17836__$1;
(statearr_17844_17865[(1)] = (9));

} else {
var statearr_17845_17866 = state_17836__$1;
(statearr_17845_17866[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17837 === (3))){
var inst_17834 = (state_17836[(2)]);
var state_17836__$1 = state_17836;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17836__$1,inst_17834);
} else {
if((state_val_17837 === (12))){
var state_17836__$1 = state_17836;
var statearr_17846_17867 = state_17836__$1;
(statearr_17846_17867[(2)] = null);

(statearr_17846_17867[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17837 === (2))){
var state_17836__$1 = state_17836;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17836__$1,(4),ch);
} else {
if((state_val_17837 === (11))){
var inst_17813 = (state_17836[(7)]);
var inst_17823 = (state_17836[(2)]);
var state_17836__$1 = state_17836;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17836__$1,(8),inst_17823,inst_17813);
} else {
if((state_val_17837 === (9))){
var state_17836__$1 = state_17836;
var statearr_17847_17868 = state_17836__$1;
(statearr_17847_17868[(2)] = tc);

(statearr_17847_17868[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17837 === (5))){
var inst_17816 = cljs.core.async.close_BANG_(tc);
var inst_17817 = cljs.core.async.close_BANG_(fc);
var state_17836__$1 = (function (){var statearr_17848 = state_17836;
(statearr_17848[(8)] = inst_17816);

return statearr_17848;
})();
var statearr_17849_17869 = state_17836__$1;
(statearr_17849_17869[(2)] = inst_17817);

(statearr_17849_17869[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17837 === (14))){
var inst_17830 = (state_17836[(2)]);
var state_17836__$1 = state_17836;
var statearr_17850_17870 = state_17836__$1;
(statearr_17850_17870[(2)] = inst_17830);

(statearr_17850_17870[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17837 === (10))){
var state_17836__$1 = state_17836;
var statearr_17851_17871 = state_17836__$1;
(statearr_17851_17871[(2)] = fc);

(statearr_17851_17871[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17837 === (8))){
var inst_17825 = (state_17836[(2)]);
var state_17836__$1 = state_17836;
if(cljs.core.truth_(inst_17825)){
var statearr_17852_17872 = state_17836__$1;
(statearr_17852_17872[(1)] = (12));

} else {
var statearr_17853_17873 = state_17836__$1;
(statearr_17853_17873[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__17407__auto___17859,tc,fc))
;
return ((function (switch__17390__auto__,c__17407__auto___17859,tc,fc){
return (function() {
var cljs$core$async$state_machine__17391__auto__ = null;
var cljs$core$async$state_machine__17391__auto____0 = (function (){
var statearr_17854 = [null,null,null,null,null,null,null,null,null];
(statearr_17854[(0)] = cljs$core$async$state_machine__17391__auto__);

(statearr_17854[(1)] = (1));

return statearr_17854;
});
var cljs$core$async$state_machine__17391__auto____1 = (function (state_17836){
while(true){
var ret_value__17392__auto__ = (function (){try{while(true){
var result__17393__auto__ = switch__17390__auto__(state_17836);
if(cljs.core.keyword_identical_QMARK_(result__17393__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17393__auto__;
}
break;
}
}catch (e17855){if((e17855 instanceof Object)){
var ex__17394__auto__ = e17855;
var statearr_17856_17874 = state_17836;
(statearr_17856_17874[(5)] = ex__17394__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17836);

return cljs.core.cst$kw$recur;
} else {
throw e17855;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17392__auto__,cljs.core.cst$kw$recur)){
var G__17875 = state_17836;
state_17836 = G__17875;
continue;
} else {
return ret_value__17392__auto__;
}
break;
}
});
cljs$core$async$state_machine__17391__auto__ = function(state_17836){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17391__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17391__auto____1.call(this,state_17836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17391__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17391__auto____0;
cljs$core$async$state_machine__17391__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17391__auto____1;
return cljs$core$async$state_machine__17391__auto__;
})()
;})(switch__17390__auto__,c__17407__auto___17859,tc,fc))
})();
var state__17409__auto__ = (function (){var statearr_17857 = (f__17408__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17408__auto__.cljs$core$IFn$_invoke$arity$0() : f__17408__auto__.call(null));
(statearr_17857[(6)] = c__17407__auto___17859);

return statearr_17857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17409__auto__);
});})(c__17407__auto___17859,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__17407__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17407__auto__){
return (function (){
var f__17408__auto__ = (function (){var switch__17390__auto__ = ((function (c__17407__auto__){
return (function (state_17896){
var state_val_17897 = (state_17896[(1)]);
if((state_val_17897 === (7))){
var inst_17892 = (state_17896[(2)]);
var state_17896__$1 = state_17896;
var statearr_17898_17916 = state_17896__$1;
(statearr_17898_17916[(2)] = inst_17892);

(statearr_17898_17916[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17897 === (1))){
var inst_17876 = init;
var state_17896__$1 = (function (){var statearr_17899 = state_17896;
(statearr_17899[(7)] = inst_17876);

return statearr_17899;
})();
var statearr_17900_17917 = state_17896__$1;
(statearr_17900_17917[(2)] = null);

(statearr_17900_17917[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17897 === (4))){
var inst_17879 = (state_17896[(8)]);
var inst_17879__$1 = (state_17896[(2)]);
var inst_17880 = (inst_17879__$1 == null);
var state_17896__$1 = (function (){var statearr_17901 = state_17896;
(statearr_17901[(8)] = inst_17879__$1);

return statearr_17901;
})();
if(cljs.core.truth_(inst_17880)){
var statearr_17902_17918 = state_17896__$1;
(statearr_17902_17918[(1)] = (5));

} else {
var statearr_17903_17919 = state_17896__$1;
(statearr_17903_17919[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17897 === (6))){
var inst_17876 = (state_17896[(7)]);
var inst_17879 = (state_17896[(8)]);
var inst_17883 = (state_17896[(9)]);
var inst_17883__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_17876,inst_17879) : f.call(null,inst_17876,inst_17879));
var inst_17884 = cljs.core.reduced_QMARK_(inst_17883__$1);
var state_17896__$1 = (function (){var statearr_17904 = state_17896;
(statearr_17904[(9)] = inst_17883__$1);

return statearr_17904;
})();
if(inst_17884){
var statearr_17905_17920 = state_17896__$1;
(statearr_17905_17920[(1)] = (8));

} else {
var statearr_17906_17921 = state_17896__$1;
(statearr_17906_17921[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17897 === (3))){
var inst_17894 = (state_17896[(2)]);
var state_17896__$1 = state_17896;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17896__$1,inst_17894);
} else {
if((state_val_17897 === (2))){
var state_17896__$1 = state_17896;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17896__$1,(4),ch);
} else {
if((state_val_17897 === (9))){
var inst_17883 = (state_17896[(9)]);
var inst_17876 = inst_17883;
var state_17896__$1 = (function (){var statearr_17907 = state_17896;
(statearr_17907[(7)] = inst_17876);

return statearr_17907;
})();
var statearr_17908_17922 = state_17896__$1;
(statearr_17908_17922[(2)] = null);

(statearr_17908_17922[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17897 === (5))){
var inst_17876 = (state_17896[(7)]);
var state_17896__$1 = state_17896;
var statearr_17909_17923 = state_17896__$1;
(statearr_17909_17923[(2)] = inst_17876);

(statearr_17909_17923[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17897 === (10))){
var inst_17890 = (state_17896[(2)]);
var state_17896__$1 = state_17896;
var statearr_17910_17924 = state_17896__$1;
(statearr_17910_17924[(2)] = inst_17890);

(statearr_17910_17924[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17897 === (8))){
var inst_17883 = (state_17896[(9)]);
var inst_17886 = cljs.core.deref(inst_17883);
var state_17896__$1 = state_17896;
var statearr_17911_17925 = state_17896__$1;
(statearr_17911_17925[(2)] = inst_17886);

(statearr_17911_17925[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__17407__auto__))
;
return ((function (switch__17390__auto__,c__17407__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__17391__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17391__auto____0 = (function (){
var statearr_17912 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17912[(0)] = cljs$core$async$reduce_$_state_machine__17391__auto__);

(statearr_17912[(1)] = (1));

return statearr_17912;
});
var cljs$core$async$reduce_$_state_machine__17391__auto____1 = (function (state_17896){
while(true){
var ret_value__17392__auto__ = (function (){try{while(true){
var result__17393__auto__ = switch__17390__auto__(state_17896);
if(cljs.core.keyword_identical_QMARK_(result__17393__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17393__auto__;
}
break;
}
}catch (e17913){if((e17913 instanceof Object)){
var ex__17394__auto__ = e17913;
var statearr_17914_17926 = state_17896;
(statearr_17914_17926[(5)] = ex__17394__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17896);

return cljs.core.cst$kw$recur;
} else {
throw e17913;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17392__auto__,cljs.core.cst$kw$recur)){
var G__17927 = state_17896;
state_17896 = G__17927;
continue;
} else {
return ret_value__17392__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17391__auto__ = function(state_17896){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17391__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17391__auto____1.call(this,state_17896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17391__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17391__auto____0;
cljs$core$async$reduce_$_state_machine__17391__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17391__auto____1;
return cljs$core$async$reduce_$_state_machine__17391__auto__;
})()
;})(switch__17390__auto__,c__17407__auto__))
})();
var state__17409__auto__ = (function (){var statearr_17915 = (f__17408__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17408__auto__.cljs$core$IFn$_invoke$arity$0() : f__17408__auto__.call(null));
(statearr_17915[(6)] = c__17407__auto__);

return statearr_17915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17409__auto__);
});})(c__17407__auto__))
);

return c__17407__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__17407__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17407__auto__,f__$1){
return (function (){
var f__17408__auto__ = (function (){var switch__17390__auto__ = ((function (c__17407__auto__,f__$1){
return (function (state_17933){
var state_val_17934 = (state_17933[(1)]);
if((state_val_17934 === (1))){
var inst_17928 = cljs.core.async.reduce(f__$1,init,ch);
var state_17933__$1 = state_17933;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17933__$1,(2),inst_17928);
} else {
if((state_val_17934 === (2))){
var inst_17930 = (state_17933[(2)]);
var inst_17931 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_17930) : f__$1.call(null,inst_17930));
var state_17933__$1 = state_17933;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17933__$1,inst_17931);
} else {
return null;
}
}
});})(c__17407__auto__,f__$1))
;
return ((function (switch__17390__auto__,c__17407__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__17391__auto__ = null;
var cljs$core$async$transduce_$_state_machine__17391__auto____0 = (function (){
var statearr_17935 = [null,null,null,null,null,null,null];
(statearr_17935[(0)] = cljs$core$async$transduce_$_state_machine__17391__auto__);

(statearr_17935[(1)] = (1));

return statearr_17935;
});
var cljs$core$async$transduce_$_state_machine__17391__auto____1 = (function (state_17933){
while(true){
var ret_value__17392__auto__ = (function (){try{while(true){
var result__17393__auto__ = switch__17390__auto__(state_17933);
if(cljs.core.keyword_identical_QMARK_(result__17393__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17393__auto__;
}
break;
}
}catch (e17936){if((e17936 instanceof Object)){
var ex__17394__auto__ = e17936;
var statearr_17937_17939 = state_17933;
(statearr_17937_17939[(5)] = ex__17394__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17933);

return cljs.core.cst$kw$recur;
} else {
throw e17936;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17392__auto__,cljs.core.cst$kw$recur)){
var G__17940 = state_17933;
state_17933 = G__17940;
continue;
} else {
return ret_value__17392__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17391__auto__ = function(state_17933){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17391__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17391__auto____1.call(this,state_17933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__17391__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17391__auto____0;
cljs$core$async$transduce_$_state_machine__17391__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17391__auto____1;
return cljs$core$async$transduce_$_state_machine__17391__auto__;
})()
;})(switch__17390__auto__,c__17407__auto__,f__$1))
})();
var state__17409__auto__ = (function (){var statearr_17938 = (f__17408__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17408__auto__.cljs$core$IFn$_invoke$arity$0() : f__17408__auto__.call(null));
(statearr_17938[(6)] = c__17407__auto__);

return statearr_17938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17409__auto__);
});})(c__17407__auto__,f__$1))
);

return c__17407__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__17942 = arguments.length;
switch (G__17942) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17407__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17407__auto__){
return (function (){
var f__17408__auto__ = (function (){var switch__17390__auto__ = ((function (c__17407__auto__){
return (function (state_17967){
var state_val_17968 = (state_17967[(1)]);
if((state_val_17968 === (7))){
var inst_17949 = (state_17967[(2)]);
var state_17967__$1 = state_17967;
var statearr_17969_17990 = state_17967__$1;
(statearr_17969_17990[(2)] = inst_17949);

(statearr_17969_17990[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17968 === (1))){
var inst_17943 = cljs.core.seq(coll);
var inst_17944 = inst_17943;
var state_17967__$1 = (function (){var statearr_17970 = state_17967;
(statearr_17970[(7)] = inst_17944);

return statearr_17970;
})();
var statearr_17971_17991 = state_17967__$1;
(statearr_17971_17991[(2)] = null);

(statearr_17971_17991[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17968 === (4))){
var inst_17944 = (state_17967[(7)]);
var inst_17947 = cljs.core.first(inst_17944);
var state_17967__$1 = state_17967;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17967__$1,(7),ch,inst_17947);
} else {
if((state_val_17968 === (13))){
var inst_17961 = (state_17967[(2)]);
var state_17967__$1 = state_17967;
var statearr_17972_17992 = state_17967__$1;
(statearr_17972_17992[(2)] = inst_17961);

(statearr_17972_17992[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17968 === (6))){
var inst_17952 = (state_17967[(2)]);
var state_17967__$1 = state_17967;
if(cljs.core.truth_(inst_17952)){
var statearr_17973_17993 = state_17967__$1;
(statearr_17973_17993[(1)] = (8));

} else {
var statearr_17974_17994 = state_17967__$1;
(statearr_17974_17994[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17968 === (3))){
var inst_17965 = (state_17967[(2)]);
var state_17967__$1 = state_17967;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17967__$1,inst_17965);
} else {
if((state_val_17968 === (12))){
var state_17967__$1 = state_17967;
var statearr_17975_17995 = state_17967__$1;
(statearr_17975_17995[(2)] = null);

(statearr_17975_17995[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17968 === (2))){
var inst_17944 = (state_17967[(7)]);
var state_17967__$1 = state_17967;
if(cljs.core.truth_(inst_17944)){
var statearr_17976_17996 = state_17967__$1;
(statearr_17976_17996[(1)] = (4));

} else {
var statearr_17977_17997 = state_17967__$1;
(statearr_17977_17997[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17968 === (11))){
var inst_17958 = cljs.core.async.close_BANG_(ch);
var state_17967__$1 = state_17967;
var statearr_17978_17998 = state_17967__$1;
(statearr_17978_17998[(2)] = inst_17958);

(statearr_17978_17998[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17968 === (9))){
var state_17967__$1 = state_17967;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17979_17999 = state_17967__$1;
(statearr_17979_17999[(1)] = (11));

} else {
var statearr_17980_18000 = state_17967__$1;
(statearr_17980_18000[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17968 === (5))){
var inst_17944 = (state_17967[(7)]);
var state_17967__$1 = state_17967;
var statearr_17981_18001 = state_17967__$1;
(statearr_17981_18001[(2)] = inst_17944);

(statearr_17981_18001[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17968 === (10))){
var inst_17963 = (state_17967[(2)]);
var state_17967__$1 = state_17967;
var statearr_17982_18002 = state_17967__$1;
(statearr_17982_18002[(2)] = inst_17963);

(statearr_17982_18002[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17968 === (8))){
var inst_17944 = (state_17967[(7)]);
var inst_17954 = cljs.core.next(inst_17944);
var inst_17944__$1 = inst_17954;
var state_17967__$1 = (function (){var statearr_17983 = state_17967;
(statearr_17983[(7)] = inst_17944__$1);

return statearr_17983;
})();
var statearr_17984_18003 = state_17967__$1;
(statearr_17984_18003[(2)] = null);

(statearr_17984_18003[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__17407__auto__))
;
return ((function (switch__17390__auto__,c__17407__auto__){
return (function() {
var cljs$core$async$state_machine__17391__auto__ = null;
var cljs$core$async$state_machine__17391__auto____0 = (function (){
var statearr_17985 = [null,null,null,null,null,null,null,null];
(statearr_17985[(0)] = cljs$core$async$state_machine__17391__auto__);

(statearr_17985[(1)] = (1));

return statearr_17985;
});
var cljs$core$async$state_machine__17391__auto____1 = (function (state_17967){
while(true){
var ret_value__17392__auto__ = (function (){try{while(true){
var result__17393__auto__ = switch__17390__auto__(state_17967);
if(cljs.core.keyword_identical_QMARK_(result__17393__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17393__auto__;
}
break;
}
}catch (e17986){if((e17986 instanceof Object)){
var ex__17394__auto__ = e17986;
var statearr_17987_18004 = state_17967;
(statearr_17987_18004[(5)] = ex__17394__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17967);

return cljs.core.cst$kw$recur;
} else {
throw e17986;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17392__auto__,cljs.core.cst$kw$recur)){
var G__18005 = state_17967;
state_17967 = G__18005;
continue;
} else {
return ret_value__17392__auto__;
}
break;
}
});
cljs$core$async$state_machine__17391__auto__ = function(state_17967){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17391__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17391__auto____1.call(this,state_17967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17391__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17391__auto____0;
cljs$core$async$state_machine__17391__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17391__auto____1;
return cljs$core$async$state_machine__17391__auto__;
})()
;})(switch__17390__auto__,c__17407__auto__))
})();
var state__17409__auto__ = (function (){var statearr_17988 = (f__17408__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17408__auto__.cljs$core$IFn$_invoke$arity$0() : f__17408__auto__.call(null));
(statearr_17988[(6)] = c__17407__auto__);

return statearr_17988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17409__auto__);
});})(c__17407__auto__))
);

return c__17407__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18006 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18006 = (function (ch,cs,meta18007){
this.ch = ch;
this.cs = cs;
this.meta18007 = meta18007;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18008,meta18007__$1){
var self__ = this;
var _18008__$1 = this;
return (new cljs.core.async.t_cljs$core$async18006(self__.ch,self__.cs,meta18007__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18006.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18008){
var self__ = this;
var _18008__$1 = this;
return self__.meta18007;
});})(cs))
;

cljs.core.async.t_cljs$core$async18006.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18006.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18006.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18006.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18006.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18006.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18006.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta18007], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18006.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18006.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18006";

cljs.core.async.t_cljs$core$async18006.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async18006");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18006.
 */
cljs.core.async.__GT_t_cljs$core$async18006 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18006(ch__$1,cs__$1,meta18007){
return (new cljs.core.async.t_cljs$core$async18006(ch__$1,cs__$1,meta18007));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18006(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__17407__auto___18228 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17407__auto___18228,cs,m,dchan,dctr,done){
return (function (){
var f__17408__auto__ = (function (){var switch__17390__auto__ = ((function (c__17407__auto___18228,cs,m,dchan,dctr,done){
return (function (state_18143){
var state_val_18144 = (state_18143[(1)]);
if((state_val_18144 === (7))){
var inst_18139 = (state_18143[(2)]);
var state_18143__$1 = state_18143;
var statearr_18145_18229 = state_18143__$1;
(statearr_18145_18229[(2)] = inst_18139);

(statearr_18145_18229[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (20))){
var inst_18042 = (state_18143[(7)]);
var inst_18054 = cljs.core.first(inst_18042);
var inst_18055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18054,(0),null);
var inst_18056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18054,(1),null);
var state_18143__$1 = (function (){var statearr_18146 = state_18143;
(statearr_18146[(8)] = inst_18055);

return statearr_18146;
})();
if(cljs.core.truth_(inst_18056)){
var statearr_18147_18230 = state_18143__$1;
(statearr_18147_18230[(1)] = (22));

} else {
var statearr_18148_18231 = state_18143__$1;
(statearr_18148_18231[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (27))){
var inst_18084 = (state_18143[(9)]);
var inst_18091 = (state_18143[(10)]);
var inst_18011 = (state_18143[(11)]);
var inst_18086 = (state_18143[(12)]);
var inst_18091__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18084,inst_18086);
var inst_18092 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18091__$1,inst_18011,done);
var state_18143__$1 = (function (){var statearr_18149 = state_18143;
(statearr_18149[(10)] = inst_18091__$1);

return statearr_18149;
})();
if(cljs.core.truth_(inst_18092)){
var statearr_18150_18232 = state_18143__$1;
(statearr_18150_18232[(1)] = (30));

} else {
var statearr_18151_18233 = state_18143__$1;
(statearr_18151_18233[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (1))){
var state_18143__$1 = state_18143;
var statearr_18152_18234 = state_18143__$1;
(statearr_18152_18234[(2)] = null);

(statearr_18152_18234[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (24))){
var inst_18042 = (state_18143[(7)]);
var inst_18061 = (state_18143[(2)]);
var inst_18062 = cljs.core.next(inst_18042);
var inst_18020 = inst_18062;
var inst_18021 = null;
var inst_18022 = (0);
var inst_18023 = (0);
var state_18143__$1 = (function (){var statearr_18153 = state_18143;
(statearr_18153[(13)] = inst_18022);

(statearr_18153[(14)] = inst_18023);

(statearr_18153[(15)] = inst_18061);

(statearr_18153[(16)] = inst_18020);

(statearr_18153[(17)] = inst_18021);

return statearr_18153;
})();
var statearr_18154_18235 = state_18143__$1;
(statearr_18154_18235[(2)] = null);

(statearr_18154_18235[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (39))){
var state_18143__$1 = state_18143;
var statearr_18158_18236 = state_18143__$1;
(statearr_18158_18236[(2)] = null);

(statearr_18158_18236[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (4))){
var inst_18011 = (state_18143[(11)]);
var inst_18011__$1 = (state_18143[(2)]);
var inst_18012 = (inst_18011__$1 == null);
var state_18143__$1 = (function (){var statearr_18159 = state_18143;
(statearr_18159[(11)] = inst_18011__$1);

return statearr_18159;
})();
if(cljs.core.truth_(inst_18012)){
var statearr_18160_18237 = state_18143__$1;
(statearr_18160_18237[(1)] = (5));

} else {
var statearr_18161_18238 = state_18143__$1;
(statearr_18161_18238[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (15))){
var inst_18022 = (state_18143[(13)]);
var inst_18023 = (state_18143[(14)]);
var inst_18020 = (state_18143[(16)]);
var inst_18021 = (state_18143[(17)]);
var inst_18038 = (state_18143[(2)]);
var inst_18039 = (inst_18023 + (1));
var tmp18155 = inst_18022;
var tmp18156 = inst_18020;
var tmp18157 = inst_18021;
var inst_18020__$1 = tmp18156;
var inst_18021__$1 = tmp18157;
var inst_18022__$1 = tmp18155;
var inst_18023__$1 = inst_18039;
var state_18143__$1 = (function (){var statearr_18162 = state_18143;
(statearr_18162[(13)] = inst_18022__$1);

(statearr_18162[(14)] = inst_18023__$1);

(statearr_18162[(16)] = inst_18020__$1);

(statearr_18162[(17)] = inst_18021__$1);

(statearr_18162[(18)] = inst_18038);

return statearr_18162;
})();
var statearr_18163_18239 = state_18143__$1;
(statearr_18163_18239[(2)] = null);

(statearr_18163_18239[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (21))){
var inst_18065 = (state_18143[(2)]);
var state_18143__$1 = state_18143;
var statearr_18167_18240 = state_18143__$1;
(statearr_18167_18240[(2)] = inst_18065);

(statearr_18167_18240[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (31))){
var inst_18091 = (state_18143[(10)]);
var inst_18095 = done(null);
var inst_18096 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18091);
var state_18143__$1 = (function (){var statearr_18168 = state_18143;
(statearr_18168[(19)] = inst_18095);

return statearr_18168;
})();
var statearr_18169_18241 = state_18143__$1;
(statearr_18169_18241[(2)] = inst_18096);

(statearr_18169_18241[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (32))){
var inst_18084 = (state_18143[(9)]);
var inst_18083 = (state_18143[(20)]);
var inst_18085 = (state_18143[(21)]);
var inst_18086 = (state_18143[(12)]);
var inst_18098 = (state_18143[(2)]);
var inst_18099 = (inst_18086 + (1));
var tmp18164 = inst_18084;
var tmp18165 = inst_18083;
var tmp18166 = inst_18085;
var inst_18083__$1 = tmp18165;
var inst_18084__$1 = tmp18164;
var inst_18085__$1 = tmp18166;
var inst_18086__$1 = inst_18099;
var state_18143__$1 = (function (){var statearr_18170 = state_18143;
(statearr_18170[(9)] = inst_18084__$1);

(statearr_18170[(20)] = inst_18083__$1);

(statearr_18170[(21)] = inst_18085__$1);

(statearr_18170[(22)] = inst_18098);

(statearr_18170[(12)] = inst_18086__$1);

return statearr_18170;
})();
var statearr_18171_18242 = state_18143__$1;
(statearr_18171_18242[(2)] = null);

(statearr_18171_18242[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (40))){
var inst_18111 = (state_18143[(23)]);
var inst_18115 = done(null);
var inst_18116 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18111);
var state_18143__$1 = (function (){var statearr_18172 = state_18143;
(statearr_18172[(24)] = inst_18115);

return statearr_18172;
})();
var statearr_18173_18243 = state_18143__$1;
(statearr_18173_18243[(2)] = inst_18116);

(statearr_18173_18243[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (33))){
var inst_18102 = (state_18143[(25)]);
var inst_18104 = cljs.core.chunked_seq_QMARK_(inst_18102);
var state_18143__$1 = state_18143;
if(inst_18104){
var statearr_18174_18244 = state_18143__$1;
(statearr_18174_18244[(1)] = (36));

} else {
var statearr_18175_18245 = state_18143__$1;
(statearr_18175_18245[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (13))){
var inst_18032 = (state_18143[(26)]);
var inst_18035 = cljs.core.async.close_BANG_(inst_18032);
var state_18143__$1 = state_18143;
var statearr_18176_18246 = state_18143__$1;
(statearr_18176_18246[(2)] = inst_18035);

(statearr_18176_18246[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (22))){
var inst_18055 = (state_18143[(8)]);
var inst_18058 = cljs.core.async.close_BANG_(inst_18055);
var state_18143__$1 = state_18143;
var statearr_18177_18247 = state_18143__$1;
(statearr_18177_18247[(2)] = inst_18058);

(statearr_18177_18247[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (36))){
var inst_18102 = (state_18143[(25)]);
var inst_18106 = cljs.core.chunk_first(inst_18102);
var inst_18107 = cljs.core.chunk_rest(inst_18102);
var inst_18108 = cljs.core.count(inst_18106);
var inst_18083 = inst_18107;
var inst_18084 = inst_18106;
var inst_18085 = inst_18108;
var inst_18086 = (0);
var state_18143__$1 = (function (){var statearr_18178 = state_18143;
(statearr_18178[(9)] = inst_18084);

(statearr_18178[(20)] = inst_18083);

(statearr_18178[(21)] = inst_18085);

(statearr_18178[(12)] = inst_18086);

return statearr_18178;
})();
var statearr_18179_18248 = state_18143__$1;
(statearr_18179_18248[(2)] = null);

(statearr_18179_18248[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (41))){
var inst_18102 = (state_18143[(25)]);
var inst_18118 = (state_18143[(2)]);
var inst_18119 = cljs.core.next(inst_18102);
var inst_18083 = inst_18119;
var inst_18084 = null;
var inst_18085 = (0);
var inst_18086 = (0);
var state_18143__$1 = (function (){var statearr_18180 = state_18143;
(statearr_18180[(27)] = inst_18118);

(statearr_18180[(9)] = inst_18084);

(statearr_18180[(20)] = inst_18083);

(statearr_18180[(21)] = inst_18085);

(statearr_18180[(12)] = inst_18086);

return statearr_18180;
})();
var statearr_18181_18249 = state_18143__$1;
(statearr_18181_18249[(2)] = null);

(statearr_18181_18249[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (43))){
var state_18143__$1 = state_18143;
var statearr_18182_18250 = state_18143__$1;
(statearr_18182_18250[(2)] = null);

(statearr_18182_18250[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (29))){
var inst_18127 = (state_18143[(2)]);
var state_18143__$1 = state_18143;
var statearr_18183_18251 = state_18143__$1;
(statearr_18183_18251[(2)] = inst_18127);

(statearr_18183_18251[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (44))){
var inst_18136 = (state_18143[(2)]);
var state_18143__$1 = (function (){var statearr_18184 = state_18143;
(statearr_18184[(28)] = inst_18136);

return statearr_18184;
})();
var statearr_18185_18252 = state_18143__$1;
(statearr_18185_18252[(2)] = null);

(statearr_18185_18252[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (6))){
var inst_18075 = (state_18143[(29)]);
var inst_18074 = cljs.core.deref(cs);
var inst_18075__$1 = cljs.core.keys(inst_18074);
var inst_18076 = cljs.core.count(inst_18075__$1);
var inst_18077 = cljs.core.reset_BANG_(dctr,inst_18076);
var inst_18082 = cljs.core.seq(inst_18075__$1);
var inst_18083 = inst_18082;
var inst_18084 = null;
var inst_18085 = (0);
var inst_18086 = (0);
var state_18143__$1 = (function (){var statearr_18186 = state_18143;
(statearr_18186[(9)] = inst_18084);

(statearr_18186[(20)] = inst_18083);

(statearr_18186[(29)] = inst_18075__$1);

(statearr_18186[(21)] = inst_18085);

(statearr_18186[(30)] = inst_18077);

(statearr_18186[(12)] = inst_18086);

return statearr_18186;
})();
var statearr_18187_18253 = state_18143__$1;
(statearr_18187_18253[(2)] = null);

(statearr_18187_18253[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (28))){
var inst_18083 = (state_18143[(20)]);
var inst_18102 = (state_18143[(25)]);
var inst_18102__$1 = cljs.core.seq(inst_18083);
var state_18143__$1 = (function (){var statearr_18188 = state_18143;
(statearr_18188[(25)] = inst_18102__$1);

return statearr_18188;
})();
if(inst_18102__$1){
var statearr_18189_18254 = state_18143__$1;
(statearr_18189_18254[(1)] = (33));

} else {
var statearr_18190_18255 = state_18143__$1;
(statearr_18190_18255[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (25))){
var inst_18085 = (state_18143[(21)]);
var inst_18086 = (state_18143[(12)]);
var inst_18088 = (inst_18086 < inst_18085);
var inst_18089 = inst_18088;
var state_18143__$1 = state_18143;
if(cljs.core.truth_(inst_18089)){
var statearr_18191_18256 = state_18143__$1;
(statearr_18191_18256[(1)] = (27));

} else {
var statearr_18192_18257 = state_18143__$1;
(statearr_18192_18257[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (34))){
var state_18143__$1 = state_18143;
var statearr_18193_18258 = state_18143__$1;
(statearr_18193_18258[(2)] = null);

(statearr_18193_18258[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (17))){
var state_18143__$1 = state_18143;
var statearr_18194_18259 = state_18143__$1;
(statearr_18194_18259[(2)] = null);

(statearr_18194_18259[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (3))){
var inst_18141 = (state_18143[(2)]);
var state_18143__$1 = state_18143;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18143__$1,inst_18141);
} else {
if((state_val_18144 === (12))){
var inst_18070 = (state_18143[(2)]);
var state_18143__$1 = state_18143;
var statearr_18195_18260 = state_18143__$1;
(statearr_18195_18260[(2)] = inst_18070);

(statearr_18195_18260[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (2))){
var state_18143__$1 = state_18143;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18143__$1,(4),ch);
} else {
if((state_val_18144 === (23))){
var state_18143__$1 = state_18143;
var statearr_18196_18261 = state_18143__$1;
(statearr_18196_18261[(2)] = null);

(statearr_18196_18261[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (35))){
var inst_18125 = (state_18143[(2)]);
var state_18143__$1 = state_18143;
var statearr_18197_18262 = state_18143__$1;
(statearr_18197_18262[(2)] = inst_18125);

(statearr_18197_18262[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (19))){
var inst_18042 = (state_18143[(7)]);
var inst_18046 = cljs.core.chunk_first(inst_18042);
var inst_18047 = cljs.core.chunk_rest(inst_18042);
var inst_18048 = cljs.core.count(inst_18046);
var inst_18020 = inst_18047;
var inst_18021 = inst_18046;
var inst_18022 = inst_18048;
var inst_18023 = (0);
var state_18143__$1 = (function (){var statearr_18198 = state_18143;
(statearr_18198[(13)] = inst_18022);

(statearr_18198[(14)] = inst_18023);

(statearr_18198[(16)] = inst_18020);

(statearr_18198[(17)] = inst_18021);

return statearr_18198;
})();
var statearr_18199_18263 = state_18143__$1;
(statearr_18199_18263[(2)] = null);

(statearr_18199_18263[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (11))){
var inst_18042 = (state_18143[(7)]);
var inst_18020 = (state_18143[(16)]);
var inst_18042__$1 = cljs.core.seq(inst_18020);
var state_18143__$1 = (function (){var statearr_18200 = state_18143;
(statearr_18200[(7)] = inst_18042__$1);

return statearr_18200;
})();
if(inst_18042__$1){
var statearr_18201_18264 = state_18143__$1;
(statearr_18201_18264[(1)] = (16));

} else {
var statearr_18202_18265 = state_18143__$1;
(statearr_18202_18265[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (9))){
var inst_18072 = (state_18143[(2)]);
var state_18143__$1 = state_18143;
var statearr_18203_18266 = state_18143__$1;
(statearr_18203_18266[(2)] = inst_18072);

(statearr_18203_18266[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (5))){
var inst_18018 = cljs.core.deref(cs);
var inst_18019 = cljs.core.seq(inst_18018);
var inst_18020 = inst_18019;
var inst_18021 = null;
var inst_18022 = (0);
var inst_18023 = (0);
var state_18143__$1 = (function (){var statearr_18204 = state_18143;
(statearr_18204[(13)] = inst_18022);

(statearr_18204[(14)] = inst_18023);

(statearr_18204[(16)] = inst_18020);

(statearr_18204[(17)] = inst_18021);

return statearr_18204;
})();
var statearr_18205_18267 = state_18143__$1;
(statearr_18205_18267[(2)] = null);

(statearr_18205_18267[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (14))){
var state_18143__$1 = state_18143;
var statearr_18206_18268 = state_18143__$1;
(statearr_18206_18268[(2)] = null);

(statearr_18206_18268[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (45))){
var inst_18133 = (state_18143[(2)]);
var state_18143__$1 = state_18143;
var statearr_18207_18269 = state_18143__$1;
(statearr_18207_18269[(2)] = inst_18133);

(statearr_18207_18269[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (26))){
var inst_18075 = (state_18143[(29)]);
var inst_18129 = (state_18143[(2)]);
var inst_18130 = cljs.core.seq(inst_18075);
var state_18143__$1 = (function (){var statearr_18208 = state_18143;
(statearr_18208[(31)] = inst_18129);

return statearr_18208;
})();
if(inst_18130){
var statearr_18209_18270 = state_18143__$1;
(statearr_18209_18270[(1)] = (42));

} else {
var statearr_18210_18271 = state_18143__$1;
(statearr_18210_18271[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (16))){
var inst_18042 = (state_18143[(7)]);
var inst_18044 = cljs.core.chunked_seq_QMARK_(inst_18042);
var state_18143__$1 = state_18143;
if(inst_18044){
var statearr_18211_18272 = state_18143__$1;
(statearr_18211_18272[(1)] = (19));

} else {
var statearr_18212_18273 = state_18143__$1;
(statearr_18212_18273[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (38))){
var inst_18122 = (state_18143[(2)]);
var state_18143__$1 = state_18143;
var statearr_18213_18274 = state_18143__$1;
(statearr_18213_18274[(2)] = inst_18122);

(statearr_18213_18274[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (30))){
var state_18143__$1 = state_18143;
var statearr_18214_18275 = state_18143__$1;
(statearr_18214_18275[(2)] = null);

(statearr_18214_18275[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (10))){
var inst_18023 = (state_18143[(14)]);
var inst_18021 = (state_18143[(17)]);
var inst_18031 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18021,inst_18023);
var inst_18032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18031,(0),null);
var inst_18033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18031,(1),null);
var state_18143__$1 = (function (){var statearr_18215 = state_18143;
(statearr_18215[(26)] = inst_18032);

return statearr_18215;
})();
if(cljs.core.truth_(inst_18033)){
var statearr_18216_18276 = state_18143__$1;
(statearr_18216_18276[(1)] = (13));

} else {
var statearr_18217_18277 = state_18143__$1;
(statearr_18217_18277[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (18))){
var inst_18068 = (state_18143[(2)]);
var state_18143__$1 = state_18143;
var statearr_18218_18278 = state_18143__$1;
(statearr_18218_18278[(2)] = inst_18068);

(statearr_18218_18278[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (42))){
var state_18143__$1 = state_18143;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18143__$1,(45),dchan);
} else {
if((state_val_18144 === (37))){
var inst_18011 = (state_18143[(11)]);
var inst_18111 = (state_18143[(23)]);
var inst_18102 = (state_18143[(25)]);
var inst_18111__$1 = cljs.core.first(inst_18102);
var inst_18112 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18111__$1,inst_18011,done);
var state_18143__$1 = (function (){var statearr_18219 = state_18143;
(statearr_18219[(23)] = inst_18111__$1);

return statearr_18219;
})();
if(cljs.core.truth_(inst_18112)){
var statearr_18220_18279 = state_18143__$1;
(statearr_18220_18279[(1)] = (39));

} else {
var statearr_18221_18280 = state_18143__$1;
(statearr_18221_18280[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (8))){
var inst_18022 = (state_18143[(13)]);
var inst_18023 = (state_18143[(14)]);
var inst_18025 = (inst_18023 < inst_18022);
var inst_18026 = inst_18025;
var state_18143__$1 = state_18143;
if(cljs.core.truth_(inst_18026)){
var statearr_18222_18281 = state_18143__$1;
(statearr_18222_18281[(1)] = (10));

} else {
var statearr_18223_18282 = state_18143__$1;
(statearr_18223_18282[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__17407__auto___18228,cs,m,dchan,dctr,done))
;
return ((function (switch__17390__auto__,c__17407__auto___18228,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__17391__auto__ = null;
var cljs$core$async$mult_$_state_machine__17391__auto____0 = (function (){
var statearr_18224 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18224[(0)] = cljs$core$async$mult_$_state_machine__17391__auto__);

(statearr_18224[(1)] = (1));

return statearr_18224;
});
var cljs$core$async$mult_$_state_machine__17391__auto____1 = (function (state_18143){
while(true){
var ret_value__17392__auto__ = (function (){try{while(true){
var result__17393__auto__ = switch__17390__auto__(state_18143);
if(cljs.core.keyword_identical_QMARK_(result__17393__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17393__auto__;
}
break;
}
}catch (e18225){if((e18225 instanceof Object)){
var ex__17394__auto__ = e18225;
var statearr_18226_18283 = state_18143;
(statearr_18226_18283[(5)] = ex__17394__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18143);

return cljs.core.cst$kw$recur;
} else {
throw e18225;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17392__auto__,cljs.core.cst$kw$recur)){
var G__18284 = state_18143;
state_18143 = G__18284;
continue;
} else {
return ret_value__17392__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17391__auto__ = function(state_18143){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17391__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17391__auto____1.call(this,state_18143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17391__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17391__auto____0;
cljs$core$async$mult_$_state_machine__17391__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17391__auto____1;
return cljs$core$async$mult_$_state_machine__17391__auto__;
})()
;})(switch__17390__auto__,c__17407__auto___18228,cs,m,dchan,dctr,done))
})();
var state__17409__auto__ = (function (){var statearr_18227 = (f__17408__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17408__auto__.cljs$core$IFn$_invoke$arity$0() : f__17408__auto__.call(null));
(statearr_18227[(6)] = c__17407__auto___18228);

return statearr_18227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17409__auto__);
});})(c__17407__auto___18228,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__18286 = arguments.length;
switch (G__18286) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___18298 = arguments.length;
var i__4731__auto___18299 = (0);
while(true){
if((i__4731__auto___18299 < len__4730__auto___18298)){
args__4736__auto__.push((arguments[i__4731__auto___18299]));

var G__18300 = (i__4731__auto___18299 + (1));
i__4731__auto___18299 = G__18300;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18292){
var map__18293 = p__18292;
var map__18293__$1 = (((((!((map__18293 == null))))?(((((map__18293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18293):map__18293);
var opts = map__18293__$1;
var statearr_18295_18301 = state;
(statearr_18295_18301[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__18293,map__18293__$1,opts){
return (function (val){
var statearr_18296_18302 = state;
(statearr_18296_18302[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__18293,map__18293__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_18297_18303 = state;
(statearr_18297_18303[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18288){
var G__18289 = cljs.core.first(seq18288);
var seq18288__$1 = cljs.core.next(seq18288);
var G__18290 = cljs.core.first(seq18288__$1);
var seq18288__$2 = cljs.core.next(seq18288__$1);
var G__18291 = cljs.core.first(seq18288__$2);
var seq18288__$3 = cljs.core.next(seq18288__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18289,G__18290,G__18291,seq18288__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18304 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18304 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18305){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18305 = meta18305;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18306,meta18305__$1){
var self__ = this;
var _18306__$1 = this;
return (new cljs.core.async.t_cljs$core$async18304(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18305__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18304.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18306){
var self__ = this;
var _18306__$1 = this;
return self__.meta18305;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18304.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18304.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18304.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18304.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18304.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18304.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18304.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18304.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18304.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta18305], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18304.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18304.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18304";

cljs.core.async.t_cljs$core$async18304.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async18304");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18304.
 */
cljs.core.async.__GT_t_cljs$core$async18304 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18304(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18305){
return (new cljs.core.async.t_cljs$core$async18304(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18305));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18304(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17407__auto___18468 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17407__auto___18468,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__17408__auto__ = (function (){var switch__17390__auto__ = ((function (c__17407__auto___18468,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18408){
var state_val_18409 = (state_18408[(1)]);
if((state_val_18409 === (7))){
var inst_18323 = (state_18408[(2)]);
var state_18408__$1 = state_18408;
var statearr_18410_18469 = state_18408__$1;
(statearr_18410_18469[(2)] = inst_18323);

(statearr_18410_18469[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18409 === (20))){
var inst_18335 = (state_18408[(7)]);
var state_18408__$1 = state_18408;
var statearr_18411_18470 = state_18408__$1;
(statearr_18411_18470[(2)] = inst_18335);

(statearr_18411_18470[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18409 === (27))){
var state_18408__$1 = state_18408;
var statearr_18412_18471 = state_18408__$1;
(statearr_18412_18471[(2)] = null);

(statearr_18412_18471[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18409 === (1))){
var inst_18310 = (state_18408[(8)]);
var inst_18310__$1 = calc_state();
var inst_18312 = (inst_18310__$1 == null);
var inst_18313 = cljs.core.not(inst_18312);
var state_18408__$1 = (function (){var statearr_18413 = state_18408;
(statearr_18413[(8)] = inst_18310__$1);

return statearr_18413;
})();
if(inst_18313){
var statearr_18414_18472 = state_18408__$1;
(statearr_18414_18472[(1)] = (2));

} else {
var statearr_18415_18473 = state_18408__$1;
(statearr_18415_18473[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18409 === (24))){
var inst_18359 = (state_18408[(9)]);
var inst_18382 = (state_18408[(10)]);
var inst_18368 = (state_18408[(11)]);
var inst_18382__$1 = (inst_18359.cljs$core$IFn$_invoke$arity$1 ? inst_18359.cljs$core$IFn$_invoke$arity$1(inst_18368) : inst_18359.call(null,inst_18368));
var state_18408__$1 = (function (){var statearr_18416 = state_18408;
(statearr_18416[(10)] = inst_18382__$1);

return statearr_18416;
})();
if(cljs.core.truth_(inst_18382__$1)){
var statearr_18417_18474 = state_18408__$1;
(statearr_18417_18474[(1)] = (29));

} else {
var statearr_18418_18475 = state_18408__$1;
(statearr_18418_18475[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18409 === (4))){
var inst_18326 = (state_18408[(2)]);
var state_18408__$1 = state_18408;
if(cljs.core.truth_(inst_18326)){
var statearr_18419_18476 = state_18408__$1;
(statearr_18419_18476[(1)] = (8));

} else {
var statearr_18420_18477 = state_18408__$1;
(statearr_18420_18477[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18409 === (15))){
var inst_18353 = (state_18408[(2)]);
var state_18408__$1 = state_18408;
if(cljs.core.truth_(inst_18353)){
var statearr_18421_18478 = state_18408__$1;
(statearr_18421_18478[(1)] = (19));

} else {
var statearr_18422_18479 = state_18408__$1;
(statearr_18422_18479[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18409 === (21))){
var inst_18358 = (state_18408[(12)]);
var inst_18358__$1 = (state_18408[(2)]);
var inst_18359 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18358__$1,cljs.core.cst$kw$solos);
var inst_18360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18358__$1,cljs.core.cst$kw$mutes);
var inst_18361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18358__$1,cljs.core.cst$kw$reads);
var state_18408__$1 = (function (){var statearr_18423 = state_18408;
(statearr_18423[(12)] = inst_18358__$1);

(statearr_18423[(9)] = inst_18359);

(statearr_18423[(13)] = inst_18360);

return statearr_18423;
})();
return cljs.core.async.ioc_alts_BANG_(state_18408__$1,(22),inst_18361);
} else {
if((state_val_18409 === (31))){
var inst_18390 = (state_18408[(2)]);
var state_18408__$1 = state_18408;
if(cljs.core.truth_(inst_18390)){
var statearr_18424_18480 = state_18408__$1;
(statearr_18424_18480[(1)] = (32));

} else {
var statearr_18425_18481 = state_18408__$1;
(statearr_18425_18481[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18409 === (32))){
var inst_18367 = (state_18408[(14)]);
var state_18408__$1 = state_18408;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18408__$1,(35),out,inst_18367);
} else {
if((state_val_18409 === (33))){
var inst_18358 = (state_18408[(12)]);
var inst_18335 = inst_18358;
var state_18408__$1 = (function (){var statearr_18426 = state_18408;
(statearr_18426[(7)] = inst_18335);

return statearr_18426;
})();
var statearr_18427_18482 = state_18408__$1;
(statearr_18427_18482[(2)] = null);

(statearr_18427_18482[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18409 === (13))){
var inst_18335 = (state_18408[(7)]);
var inst_18342 = inst_18335.cljs$lang$protocol_mask$partition0$;
var inst_18343 = (inst_18342 & (64));
var inst_18344 = inst_18335.cljs$core$ISeq$;
var inst_18345 = (cljs.core.PROTOCOL_SENTINEL === inst_18344);
var inst_18346 = ((inst_18343) || (inst_18345));
var state_18408__$1 = state_18408;
if(cljs.core.truth_(inst_18346)){
var statearr_18428_18483 = state_18408__$1;
(statearr_18428_18483[(1)] = (16));

} else {
var statearr_18429_18484 = state_18408__$1;
(statearr_18429_18484[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18409 === (22))){
var inst_18367 = (state_18408[(14)]);
var inst_18368 = (state_18408[(11)]);
var inst_18366 = (state_18408[(2)]);
var inst_18367__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18366,(0),null);
var inst_18368__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18366,(1),null);
var inst_18369 = (inst_18367__$1 == null);
var inst_18370 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18368__$1,change);
var inst_18371 = ((inst_18369) || (inst_18370));
var state_18408__$1 = (function (){var statearr_18430 = state_18408;
(statearr_18430[(14)] = inst_18367__$1);

(statearr_18430[(11)] = inst_18368__$1);

return statearr_18430;
})();
if(cljs.core.truth_(inst_18371)){
var statearr_18431_18485 = state_18408__$1;
(statearr_18431_18485[(1)] = (23));

} else {
var statearr_18432_18486 = state_18408__$1;
(statearr_18432_18486[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18409 === (36))){
var inst_18358 = (state_18408[(12)]);
var inst_18335 = inst_18358;
var state_18408__$1 = (function (){var statearr_18433 = state_18408;
(statearr_18433[(7)] = inst_18335);

return statearr_18433;
})();
var statearr_18434_18487 = state_18408__$1;
(statearr_18434_18487[(2)] = null);

(statearr_18434_18487[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18409 === (29))){
var inst_18382 = (state_18408[(10)]);
var state_18408__$1 = state_18408;
var statearr_18435_18488 = state_18408__$1;
(statearr_18435_18488[(2)] = inst_18382);

(statearr_18435_18488[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18409 === (6))){
var state_18408__$1 = state_18408;
var statearr_18436_18489 = state_18408__$1;
(statearr_18436_18489[(2)] = false);

(statearr_18436_18489[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18409 === (28))){
var inst_18378 = (state_18408[(2)]);
var inst_18379 = calc_state();
var inst_18335 = inst_18379;
var state_18408__$1 = (function (){var statearr_18437 = state_18408;
(statearr_18437[(7)] = inst_18335);

(statearr_18437[(15)] = inst_18378);

return statearr_18437;
})();
var statearr_18438_18490 = state_18408__$1;
(statearr_18438_18490[(2)] = null);

(statearr_18438_18490[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18409 === (25))){
var inst_18404 = (state_18408[(2)]);
var state_18408__$1 = state_18408;
var statearr_18439_18491 = state_18408__$1;
(statearr_18439_18491[(2)] = inst_18404);

(statearr_18439_18491[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18409 === (34))){
var inst_18402 = (state_18408[(2)]);
var state_18408__$1 = state_18408;
var statearr_18440_18492 = state_18408__$1;
(statearr_18440_18492[(2)] = inst_18402);

(statearr_18440_18492[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18409 === (17))){
var state_18408__$1 = state_18408;
var statearr_18441_18493 = state_18408__$1;
(statearr_18441_18493[(2)] = false);

(statearr_18441_18493[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18409 === (3))){
var state_18408__$1 = state_18408;
var statearr_18442_18494 = state_18408__$1;
(statearr_18442_18494[(2)] = false);

(statearr_18442_18494[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18409 === (12))){
var inst_18406 = (state_18408[(2)]);
var state_18408__$1 = state_18408;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18408__$1,inst_18406);
} else {
if((state_val_18409 === (2))){
var inst_18310 = (state_18408[(8)]);
var inst_18315 = inst_18310.cljs$lang$protocol_mask$partition0$;
var inst_18316 = (inst_18315 & (64));
var inst_18317 = inst_18310.cljs$core$ISeq$;
var inst_18318 = (cljs.core.PROTOCOL_SENTINEL === inst_18317);
var inst_18319 = ((inst_18316) || (inst_18318));
var state_18408__$1 = state_18408;
if(cljs.core.truth_(inst_18319)){
var statearr_18443_18495 = state_18408__$1;
(statearr_18443_18495[(1)] = (5));

} else {
var statearr_18444_18496 = state_18408__$1;
(statearr_18444_18496[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18409 === (23))){
var inst_18367 = (state_18408[(14)]);
var inst_18373 = (inst_18367 == null);
var state_18408__$1 = state_18408;
if(cljs.core.truth_(inst_18373)){
var statearr_18445_18497 = state_18408__$1;
(statearr_18445_18497[(1)] = (26));

} else {
var statearr_18446_18498 = state_18408__$1;
(statearr_18446_18498[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18409 === (35))){
var inst_18393 = (state_18408[(2)]);
var state_18408__$1 = state_18408;
if(cljs.core.truth_(inst_18393)){
var statearr_18447_18499 = state_18408__$1;
(statearr_18447_18499[(1)] = (36));

} else {
var statearr_18448_18500 = state_18408__$1;
(statearr_18448_18500[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18409 === (19))){
var inst_18335 = (state_18408[(7)]);
var inst_18355 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18335);
var state_18408__$1 = state_18408;
var statearr_18449_18501 = state_18408__$1;
(statearr_18449_18501[(2)] = inst_18355);

(statearr_18449_18501[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18409 === (11))){
var inst_18335 = (state_18408[(7)]);
var inst_18339 = (inst_18335 == null);
var inst_18340 = cljs.core.not(inst_18339);
var state_18408__$1 = state_18408;
if(inst_18340){
var statearr_18450_18502 = state_18408__$1;
(statearr_18450_18502[(1)] = (13));

} else {
var statearr_18451_18503 = state_18408__$1;
(statearr_18451_18503[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18409 === (9))){
var inst_18310 = (state_18408[(8)]);
var state_18408__$1 = state_18408;
var statearr_18452_18504 = state_18408__$1;
(statearr_18452_18504[(2)] = inst_18310);

(statearr_18452_18504[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18409 === (5))){
var state_18408__$1 = state_18408;
var statearr_18453_18505 = state_18408__$1;
(statearr_18453_18505[(2)] = true);

(statearr_18453_18505[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18409 === (14))){
var state_18408__$1 = state_18408;
var statearr_18454_18506 = state_18408__$1;
(statearr_18454_18506[(2)] = false);

(statearr_18454_18506[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18409 === (26))){
var inst_18368 = (state_18408[(11)]);
var inst_18375 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18368);
var state_18408__$1 = state_18408;
var statearr_18455_18507 = state_18408__$1;
(statearr_18455_18507[(2)] = inst_18375);

(statearr_18455_18507[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18409 === (16))){
var state_18408__$1 = state_18408;
var statearr_18456_18508 = state_18408__$1;
(statearr_18456_18508[(2)] = true);

(statearr_18456_18508[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18409 === (38))){
var inst_18398 = (state_18408[(2)]);
var state_18408__$1 = state_18408;
var statearr_18457_18509 = state_18408__$1;
(statearr_18457_18509[(2)] = inst_18398);

(statearr_18457_18509[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18409 === (30))){
var inst_18359 = (state_18408[(9)]);
var inst_18360 = (state_18408[(13)]);
var inst_18368 = (state_18408[(11)]);
var inst_18385 = cljs.core.empty_QMARK_(inst_18359);
var inst_18386 = (inst_18360.cljs$core$IFn$_invoke$arity$1 ? inst_18360.cljs$core$IFn$_invoke$arity$1(inst_18368) : inst_18360.call(null,inst_18368));
var inst_18387 = cljs.core.not(inst_18386);
var inst_18388 = ((inst_18385) && (inst_18387));
var state_18408__$1 = state_18408;
var statearr_18458_18510 = state_18408__$1;
(statearr_18458_18510[(2)] = inst_18388);

(statearr_18458_18510[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18409 === (10))){
var inst_18310 = (state_18408[(8)]);
var inst_18331 = (state_18408[(2)]);
var inst_18332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18331,cljs.core.cst$kw$solos);
var inst_18333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18331,cljs.core.cst$kw$mutes);
var inst_18334 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18331,cljs.core.cst$kw$reads);
var inst_18335 = inst_18310;
var state_18408__$1 = (function (){var statearr_18459 = state_18408;
(statearr_18459[(7)] = inst_18335);

(statearr_18459[(16)] = inst_18333);

(statearr_18459[(17)] = inst_18334);

(statearr_18459[(18)] = inst_18332);

return statearr_18459;
})();
var statearr_18460_18511 = state_18408__$1;
(statearr_18460_18511[(2)] = null);

(statearr_18460_18511[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18409 === (18))){
var inst_18350 = (state_18408[(2)]);
var state_18408__$1 = state_18408;
var statearr_18461_18512 = state_18408__$1;
(statearr_18461_18512[(2)] = inst_18350);

(statearr_18461_18512[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18409 === (37))){
var state_18408__$1 = state_18408;
var statearr_18462_18513 = state_18408__$1;
(statearr_18462_18513[(2)] = null);

(statearr_18462_18513[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18409 === (8))){
var inst_18310 = (state_18408[(8)]);
var inst_18328 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18310);
var state_18408__$1 = state_18408;
var statearr_18463_18514 = state_18408__$1;
(statearr_18463_18514[(2)] = inst_18328);

(statearr_18463_18514[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__17407__auto___18468,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__17390__auto__,c__17407__auto___18468,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__17391__auto__ = null;
var cljs$core$async$mix_$_state_machine__17391__auto____0 = (function (){
var statearr_18464 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18464[(0)] = cljs$core$async$mix_$_state_machine__17391__auto__);

(statearr_18464[(1)] = (1));

return statearr_18464;
});
var cljs$core$async$mix_$_state_machine__17391__auto____1 = (function (state_18408){
while(true){
var ret_value__17392__auto__ = (function (){try{while(true){
var result__17393__auto__ = switch__17390__auto__(state_18408);
if(cljs.core.keyword_identical_QMARK_(result__17393__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17393__auto__;
}
break;
}
}catch (e18465){if((e18465 instanceof Object)){
var ex__17394__auto__ = e18465;
var statearr_18466_18515 = state_18408;
(statearr_18466_18515[(5)] = ex__17394__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18408);

return cljs.core.cst$kw$recur;
} else {
throw e18465;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17392__auto__,cljs.core.cst$kw$recur)){
var G__18516 = state_18408;
state_18408 = G__18516;
continue;
} else {
return ret_value__17392__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17391__auto__ = function(state_18408){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17391__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17391__auto____1.call(this,state_18408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17391__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17391__auto____0;
cljs$core$async$mix_$_state_machine__17391__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17391__auto____1;
return cljs$core$async$mix_$_state_machine__17391__auto__;
})()
;})(switch__17390__auto__,c__17407__auto___18468,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__17409__auto__ = (function (){var statearr_18467 = (f__17408__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17408__auto__.cljs$core$IFn$_invoke$arity$0() : f__17408__auto__.call(null));
(statearr_18467[(6)] = c__17407__auto___18468);

return statearr_18467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17409__auto__);
});})(c__17407__auto___18468,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18518 = arguments.length;
switch (G__18518) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__18522 = arguments.length;
switch (G__18522) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__18520_SHARP_){
if(cljs.core.truth_((p1__18520_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18520_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18520_SHARP_.call(null,topic)))){
return p1__18520_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18520_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18523 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18523 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18524){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18524 = meta18524;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18525,meta18524__$1){
var self__ = this;
var _18525__$1 = this;
return (new cljs.core.async.t_cljs$core$async18523(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18524__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18523.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18525){
var self__ = this;
var _18525__$1 = this;
return self__.meta18524;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18523.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18523.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18523.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18523.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18523.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18523.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18523.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18523.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta18524], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18523.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18523.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18523";

cljs.core.async.t_cljs$core$async18523.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async18523");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18523.
 */
cljs.core.async.__GT_t_cljs$core$async18523 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async18523(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18524){
return (new cljs.core.async.t_cljs$core$async18523(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18524));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async18523(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17407__auto___18643 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17407__auto___18643,mults,ensure_mult,p){
return (function (){
var f__17408__auto__ = (function (){var switch__17390__auto__ = ((function (c__17407__auto___18643,mults,ensure_mult,p){
return (function (state_18597){
var state_val_18598 = (state_18597[(1)]);
if((state_val_18598 === (7))){
var inst_18593 = (state_18597[(2)]);
var state_18597__$1 = state_18597;
var statearr_18599_18644 = state_18597__$1;
(statearr_18599_18644[(2)] = inst_18593);

(statearr_18599_18644[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18598 === (20))){
var state_18597__$1 = state_18597;
var statearr_18600_18645 = state_18597__$1;
(statearr_18600_18645[(2)] = null);

(statearr_18600_18645[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18598 === (1))){
var state_18597__$1 = state_18597;
var statearr_18601_18646 = state_18597__$1;
(statearr_18601_18646[(2)] = null);

(statearr_18601_18646[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18598 === (24))){
var inst_18576 = (state_18597[(7)]);
var inst_18585 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18576);
var state_18597__$1 = state_18597;
var statearr_18602_18647 = state_18597__$1;
(statearr_18602_18647[(2)] = inst_18585);

(statearr_18602_18647[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18598 === (4))){
var inst_18528 = (state_18597[(8)]);
var inst_18528__$1 = (state_18597[(2)]);
var inst_18529 = (inst_18528__$1 == null);
var state_18597__$1 = (function (){var statearr_18603 = state_18597;
(statearr_18603[(8)] = inst_18528__$1);

return statearr_18603;
})();
if(cljs.core.truth_(inst_18529)){
var statearr_18604_18648 = state_18597__$1;
(statearr_18604_18648[(1)] = (5));

} else {
var statearr_18605_18649 = state_18597__$1;
(statearr_18605_18649[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18598 === (15))){
var inst_18570 = (state_18597[(2)]);
var state_18597__$1 = state_18597;
var statearr_18606_18650 = state_18597__$1;
(statearr_18606_18650[(2)] = inst_18570);

(statearr_18606_18650[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18598 === (21))){
var inst_18590 = (state_18597[(2)]);
var state_18597__$1 = (function (){var statearr_18607 = state_18597;
(statearr_18607[(9)] = inst_18590);

return statearr_18607;
})();
var statearr_18608_18651 = state_18597__$1;
(statearr_18608_18651[(2)] = null);

(statearr_18608_18651[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18598 === (13))){
var inst_18552 = (state_18597[(10)]);
var inst_18554 = cljs.core.chunked_seq_QMARK_(inst_18552);
var state_18597__$1 = state_18597;
if(inst_18554){
var statearr_18609_18652 = state_18597__$1;
(statearr_18609_18652[(1)] = (16));

} else {
var statearr_18610_18653 = state_18597__$1;
(statearr_18610_18653[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18598 === (22))){
var inst_18582 = (state_18597[(2)]);
var state_18597__$1 = state_18597;
if(cljs.core.truth_(inst_18582)){
var statearr_18611_18654 = state_18597__$1;
(statearr_18611_18654[(1)] = (23));

} else {
var statearr_18612_18655 = state_18597__$1;
(statearr_18612_18655[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18598 === (6))){
var inst_18528 = (state_18597[(8)]);
var inst_18578 = (state_18597[(11)]);
var inst_18576 = (state_18597[(7)]);
var inst_18576__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18528) : topic_fn.call(null,inst_18528));
var inst_18577 = cljs.core.deref(mults);
var inst_18578__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18577,inst_18576__$1);
var state_18597__$1 = (function (){var statearr_18613 = state_18597;
(statearr_18613[(11)] = inst_18578__$1);

(statearr_18613[(7)] = inst_18576__$1);

return statearr_18613;
})();
if(cljs.core.truth_(inst_18578__$1)){
var statearr_18614_18656 = state_18597__$1;
(statearr_18614_18656[(1)] = (19));

} else {
var statearr_18615_18657 = state_18597__$1;
(statearr_18615_18657[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18598 === (25))){
var inst_18587 = (state_18597[(2)]);
var state_18597__$1 = state_18597;
var statearr_18616_18658 = state_18597__$1;
(statearr_18616_18658[(2)] = inst_18587);

(statearr_18616_18658[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18598 === (17))){
var inst_18552 = (state_18597[(10)]);
var inst_18561 = cljs.core.first(inst_18552);
var inst_18562 = cljs.core.async.muxch_STAR_(inst_18561);
var inst_18563 = cljs.core.async.close_BANG_(inst_18562);
var inst_18564 = cljs.core.next(inst_18552);
var inst_18538 = inst_18564;
var inst_18539 = null;
var inst_18540 = (0);
var inst_18541 = (0);
var state_18597__$1 = (function (){var statearr_18617 = state_18597;
(statearr_18617[(12)] = inst_18538);

(statearr_18617[(13)] = inst_18540);

(statearr_18617[(14)] = inst_18539);

(statearr_18617[(15)] = inst_18563);

(statearr_18617[(16)] = inst_18541);

return statearr_18617;
})();
var statearr_18618_18659 = state_18597__$1;
(statearr_18618_18659[(2)] = null);

(statearr_18618_18659[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18598 === (3))){
var inst_18595 = (state_18597[(2)]);
var state_18597__$1 = state_18597;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18597__$1,inst_18595);
} else {
if((state_val_18598 === (12))){
var inst_18572 = (state_18597[(2)]);
var state_18597__$1 = state_18597;
var statearr_18619_18660 = state_18597__$1;
(statearr_18619_18660[(2)] = inst_18572);

(statearr_18619_18660[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18598 === (2))){
var state_18597__$1 = state_18597;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18597__$1,(4),ch);
} else {
if((state_val_18598 === (23))){
var state_18597__$1 = state_18597;
var statearr_18620_18661 = state_18597__$1;
(statearr_18620_18661[(2)] = null);

(statearr_18620_18661[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18598 === (19))){
var inst_18528 = (state_18597[(8)]);
var inst_18578 = (state_18597[(11)]);
var inst_18580 = cljs.core.async.muxch_STAR_(inst_18578);
var state_18597__$1 = state_18597;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18597__$1,(22),inst_18580,inst_18528);
} else {
if((state_val_18598 === (11))){
var inst_18538 = (state_18597[(12)]);
var inst_18552 = (state_18597[(10)]);
var inst_18552__$1 = cljs.core.seq(inst_18538);
var state_18597__$1 = (function (){var statearr_18621 = state_18597;
(statearr_18621[(10)] = inst_18552__$1);

return statearr_18621;
})();
if(inst_18552__$1){
var statearr_18622_18662 = state_18597__$1;
(statearr_18622_18662[(1)] = (13));

} else {
var statearr_18623_18663 = state_18597__$1;
(statearr_18623_18663[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18598 === (9))){
var inst_18574 = (state_18597[(2)]);
var state_18597__$1 = state_18597;
var statearr_18624_18664 = state_18597__$1;
(statearr_18624_18664[(2)] = inst_18574);

(statearr_18624_18664[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18598 === (5))){
var inst_18535 = cljs.core.deref(mults);
var inst_18536 = cljs.core.vals(inst_18535);
var inst_18537 = cljs.core.seq(inst_18536);
var inst_18538 = inst_18537;
var inst_18539 = null;
var inst_18540 = (0);
var inst_18541 = (0);
var state_18597__$1 = (function (){var statearr_18625 = state_18597;
(statearr_18625[(12)] = inst_18538);

(statearr_18625[(13)] = inst_18540);

(statearr_18625[(14)] = inst_18539);

(statearr_18625[(16)] = inst_18541);

return statearr_18625;
})();
var statearr_18626_18665 = state_18597__$1;
(statearr_18626_18665[(2)] = null);

(statearr_18626_18665[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18598 === (14))){
var state_18597__$1 = state_18597;
var statearr_18630_18666 = state_18597__$1;
(statearr_18630_18666[(2)] = null);

(statearr_18630_18666[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18598 === (16))){
var inst_18552 = (state_18597[(10)]);
var inst_18556 = cljs.core.chunk_first(inst_18552);
var inst_18557 = cljs.core.chunk_rest(inst_18552);
var inst_18558 = cljs.core.count(inst_18556);
var inst_18538 = inst_18557;
var inst_18539 = inst_18556;
var inst_18540 = inst_18558;
var inst_18541 = (0);
var state_18597__$1 = (function (){var statearr_18631 = state_18597;
(statearr_18631[(12)] = inst_18538);

(statearr_18631[(13)] = inst_18540);

(statearr_18631[(14)] = inst_18539);

(statearr_18631[(16)] = inst_18541);

return statearr_18631;
})();
var statearr_18632_18667 = state_18597__$1;
(statearr_18632_18667[(2)] = null);

(statearr_18632_18667[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18598 === (10))){
var inst_18538 = (state_18597[(12)]);
var inst_18540 = (state_18597[(13)]);
var inst_18539 = (state_18597[(14)]);
var inst_18541 = (state_18597[(16)]);
var inst_18546 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18539,inst_18541);
var inst_18547 = cljs.core.async.muxch_STAR_(inst_18546);
var inst_18548 = cljs.core.async.close_BANG_(inst_18547);
var inst_18549 = (inst_18541 + (1));
var tmp18627 = inst_18538;
var tmp18628 = inst_18540;
var tmp18629 = inst_18539;
var inst_18538__$1 = tmp18627;
var inst_18539__$1 = tmp18629;
var inst_18540__$1 = tmp18628;
var inst_18541__$1 = inst_18549;
var state_18597__$1 = (function (){var statearr_18633 = state_18597;
(statearr_18633[(12)] = inst_18538__$1);

(statearr_18633[(13)] = inst_18540__$1);

(statearr_18633[(14)] = inst_18539__$1);

(statearr_18633[(17)] = inst_18548);

(statearr_18633[(16)] = inst_18541__$1);

return statearr_18633;
})();
var statearr_18634_18668 = state_18597__$1;
(statearr_18634_18668[(2)] = null);

(statearr_18634_18668[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18598 === (18))){
var inst_18567 = (state_18597[(2)]);
var state_18597__$1 = state_18597;
var statearr_18635_18669 = state_18597__$1;
(statearr_18635_18669[(2)] = inst_18567);

(statearr_18635_18669[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18598 === (8))){
var inst_18540 = (state_18597[(13)]);
var inst_18541 = (state_18597[(16)]);
var inst_18543 = (inst_18541 < inst_18540);
var inst_18544 = inst_18543;
var state_18597__$1 = state_18597;
if(cljs.core.truth_(inst_18544)){
var statearr_18636_18670 = state_18597__$1;
(statearr_18636_18670[(1)] = (10));

} else {
var statearr_18637_18671 = state_18597__$1;
(statearr_18637_18671[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__17407__auto___18643,mults,ensure_mult,p))
;
return ((function (switch__17390__auto__,c__17407__auto___18643,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__17391__auto__ = null;
var cljs$core$async$state_machine__17391__auto____0 = (function (){
var statearr_18638 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18638[(0)] = cljs$core$async$state_machine__17391__auto__);

(statearr_18638[(1)] = (1));

return statearr_18638;
});
var cljs$core$async$state_machine__17391__auto____1 = (function (state_18597){
while(true){
var ret_value__17392__auto__ = (function (){try{while(true){
var result__17393__auto__ = switch__17390__auto__(state_18597);
if(cljs.core.keyword_identical_QMARK_(result__17393__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17393__auto__;
}
break;
}
}catch (e18639){if((e18639 instanceof Object)){
var ex__17394__auto__ = e18639;
var statearr_18640_18672 = state_18597;
(statearr_18640_18672[(5)] = ex__17394__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18597);

return cljs.core.cst$kw$recur;
} else {
throw e18639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17392__auto__,cljs.core.cst$kw$recur)){
var G__18673 = state_18597;
state_18597 = G__18673;
continue;
} else {
return ret_value__17392__auto__;
}
break;
}
});
cljs$core$async$state_machine__17391__auto__ = function(state_18597){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17391__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17391__auto____1.call(this,state_18597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17391__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17391__auto____0;
cljs$core$async$state_machine__17391__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17391__auto____1;
return cljs$core$async$state_machine__17391__auto__;
})()
;})(switch__17390__auto__,c__17407__auto___18643,mults,ensure_mult,p))
})();
var state__17409__auto__ = (function (){var statearr_18641 = (f__17408__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17408__auto__.cljs$core$IFn$_invoke$arity$0() : f__17408__auto__.call(null));
(statearr_18641[(6)] = c__17407__auto___18643);

return statearr_18641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17409__auto__);
});})(c__17407__auto___18643,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__18675 = arguments.length;
switch (G__18675) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__18678 = arguments.length;
switch (G__18678) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__18681 = arguments.length;
switch (G__18681) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__17407__auto___18748 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17407__auto___18748,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__17408__auto__ = (function (){var switch__17390__auto__ = ((function (c__17407__auto___18748,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18720){
var state_val_18721 = (state_18720[(1)]);
if((state_val_18721 === (7))){
var state_18720__$1 = state_18720;
var statearr_18722_18749 = state_18720__$1;
(statearr_18722_18749[(2)] = null);

(statearr_18722_18749[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (1))){
var state_18720__$1 = state_18720;
var statearr_18723_18750 = state_18720__$1;
(statearr_18723_18750[(2)] = null);

(statearr_18723_18750[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (4))){
var inst_18684 = (state_18720[(7)]);
var inst_18686 = (inst_18684 < cnt);
var state_18720__$1 = state_18720;
if(cljs.core.truth_(inst_18686)){
var statearr_18724_18751 = state_18720__$1;
(statearr_18724_18751[(1)] = (6));

} else {
var statearr_18725_18752 = state_18720__$1;
(statearr_18725_18752[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (15))){
var inst_18716 = (state_18720[(2)]);
var state_18720__$1 = state_18720;
var statearr_18726_18753 = state_18720__$1;
(statearr_18726_18753[(2)] = inst_18716);

(statearr_18726_18753[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (13))){
var inst_18709 = cljs.core.async.close_BANG_(out);
var state_18720__$1 = state_18720;
var statearr_18727_18754 = state_18720__$1;
(statearr_18727_18754[(2)] = inst_18709);

(statearr_18727_18754[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (6))){
var state_18720__$1 = state_18720;
var statearr_18728_18755 = state_18720__$1;
(statearr_18728_18755[(2)] = null);

(statearr_18728_18755[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (3))){
var inst_18718 = (state_18720[(2)]);
var state_18720__$1 = state_18720;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18720__$1,inst_18718);
} else {
if((state_val_18721 === (12))){
var inst_18706 = (state_18720[(8)]);
var inst_18706__$1 = (state_18720[(2)]);
var inst_18707 = cljs.core.some(cljs.core.nil_QMARK_,inst_18706__$1);
var state_18720__$1 = (function (){var statearr_18729 = state_18720;
(statearr_18729[(8)] = inst_18706__$1);

return statearr_18729;
})();
if(cljs.core.truth_(inst_18707)){
var statearr_18730_18756 = state_18720__$1;
(statearr_18730_18756[(1)] = (13));

} else {
var statearr_18731_18757 = state_18720__$1;
(statearr_18731_18757[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (2))){
var inst_18683 = cljs.core.reset_BANG_(dctr,cnt);
var inst_18684 = (0);
var state_18720__$1 = (function (){var statearr_18732 = state_18720;
(statearr_18732[(9)] = inst_18683);

(statearr_18732[(7)] = inst_18684);

return statearr_18732;
})();
var statearr_18733_18758 = state_18720__$1;
(statearr_18733_18758[(2)] = null);

(statearr_18733_18758[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (11))){
var inst_18684 = (state_18720[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_18720,(10),Object,null,(9));
var inst_18693 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18684) : chs__$1.call(null,inst_18684));
var inst_18694 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18684) : done.call(null,inst_18684));
var inst_18695 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18693,inst_18694);
var state_18720__$1 = state_18720;
var statearr_18734_18759 = state_18720__$1;
(statearr_18734_18759[(2)] = inst_18695);


cljs.core.async.impl.ioc_helpers.process_exception(state_18720__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (9))){
var inst_18684 = (state_18720[(7)]);
var inst_18697 = (state_18720[(2)]);
var inst_18698 = (inst_18684 + (1));
var inst_18684__$1 = inst_18698;
var state_18720__$1 = (function (){var statearr_18735 = state_18720;
(statearr_18735[(7)] = inst_18684__$1);

(statearr_18735[(10)] = inst_18697);

return statearr_18735;
})();
var statearr_18736_18760 = state_18720__$1;
(statearr_18736_18760[(2)] = null);

(statearr_18736_18760[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (5))){
var inst_18704 = (state_18720[(2)]);
var state_18720__$1 = (function (){var statearr_18737 = state_18720;
(statearr_18737[(11)] = inst_18704);

return statearr_18737;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18720__$1,(12),dchan);
} else {
if((state_val_18721 === (14))){
var inst_18706 = (state_18720[(8)]);
var inst_18711 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18706);
var state_18720__$1 = state_18720;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18720__$1,(16),out,inst_18711);
} else {
if((state_val_18721 === (16))){
var inst_18713 = (state_18720[(2)]);
var state_18720__$1 = (function (){var statearr_18738 = state_18720;
(statearr_18738[(12)] = inst_18713);

return statearr_18738;
})();
var statearr_18739_18761 = state_18720__$1;
(statearr_18739_18761[(2)] = null);

(statearr_18739_18761[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (10))){
var inst_18688 = (state_18720[(2)]);
var inst_18689 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18720__$1 = (function (){var statearr_18740 = state_18720;
(statearr_18740[(13)] = inst_18688);

return statearr_18740;
})();
var statearr_18741_18762 = state_18720__$1;
(statearr_18741_18762[(2)] = inst_18689);


cljs.core.async.impl.ioc_helpers.process_exception(state_18720__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (8))){
var inst_18702 = (state_18720[(2)]);
var state_18720__$1 = state_18720;
var statearr_18742_18763 = state_18720__$1;
(statearr_18742_18763[(2)] = inst_18702);

(statearr_18742_18763[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__17407__auto___18748,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__17390__auto__,c__17407__auto___18748,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__17391__auto__ = null;
var cljs$core$async$state_machine__17391__auto____0 = (function (){
var statearr_18743 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18743[(0)] = cljs$core$async$state_machine__17391__auto__);

(statearr_18743[(1)] = (1));

return statearr_18743;
});
var cljs$core$async$state_machine__17391__auto____1 = (function (state_18720){
while(true){
var ret_value__17392__auto__ = (function (){try{while(true){
var result__17393__auto__ = switch__17390__auto__(state_18720);
if(cljs.core.keyword_identical_QMARK_(result__17393__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17393__auto__;
}
break;
}
}catch (e18744){if((e18744 instanceof Object)){
var ex__17394__auto__ = e18744;
var statearr_18745_18764 = state_18720;
(statearr_18745_18764[(5)] = ex__17394__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18720);

return cljs.core.cst$kw$recur;
} else {
throw e18744;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17392__auto__,cljs.core.cst$kw$recur)){
var G__18765 = state_18720;
state_18720 = G__18765;
continue;
} else {
return ret_value__17392__auto__;
}
break;
}
});
cljs$core$async$state_machine__17391__auto__ = function(state_18720){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17391__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17391__auto____1.call(this,state_18720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17391__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17391__auto____0;
cljs$core$async$state_machine__17391__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17391__auto____1;
return cljs$core$async$state_machine__17391__auto__;
})()
;})(switch__17390__auto__,c__17407__auto___18748,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__17409__auto__ = (function (){var statearr_18746 = (f__17408__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17408__auto__.cljs$core$IFn$_invoke$arity$0() : f__17408__auto__.call(null));
(statearr_18746[(6)] = c__17407__auto___18748);

return statearr_18746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17409__auto__);
});})(c__17407__auto___18748,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__18768 = arguments.length;
switch (G__18768) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17407__auto___18822 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17407__auto___18822,out){
return (function (){
var f__17408__auto__ = (function (){var switch__17390__auto__ = ((function (c__17407__auto___18822,out){
return (function (state_18800){
var state_val_18801 = (state_18800[(1)]);
if((state_val_18801 === (7))){
var inst_18779 = (state_18800[(7)]);
var inst_18780 = (state_18800[(8)]);
var inst_18779__$1 = (state_18800[(2)]);
var inst_18780__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18779__$1,(0),null);
var inst_18781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18779__$1,(1),null);
var inst_18782 = (inst_18780__$1 == null);
var state_18800__$1 = (function (){var statearr_18802 = state_18800;
(statearr_18802[(9)] = inst_18781);

(statearr_18802[(7)] = inst_18779__$1);

(statearr_18802[(8)] = inst_18780__$1);

return statearr_18802;
})();
if(cljs.core.truth_(inst_18782)){
var statearr_18803_18823 = state_18800__$1;
(statearr_18803_18823[(1)] = (8));

} else {
var statearr_18804_18824 = state_18800__$1;
(statearr_18804_18824[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18801 === (1))){
var inst_18769 = cljs.core.vec(chs);
var inst_18770 = inst_18769;
var state_18800__$1 = (function (){var statearr_18805 = state_18800;
(statearr_18805[(10)] = inst_18770);

return statearr_18805;
})();
var statearr_18806_18825 = state_18800__$1;
(statearr_18806_18825[(2)] = null);

(statearr_18806_18825[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18801 === (4))){
var inst_18770 = (state_18800[(10)]);
var state_18800__$1 = state_18800;
return cljs.core.async.ioc_alts_BANG_(state_18800__$1,(7),inst_18770);
} else {
if((state_val_18801 === (6))){
var inst_18796 = (state_18800[(2)]);
var state_18800__$1 = state_18800;
var statearr_18807_18826 = state_18800__$1;
(statearr_18807_18826[(2)] = inst_18796);

(statearr_18807_18826[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18801 === (3))){
var inst_18798 = (state_18800[(2)]);
var state_18800__$1 = state_18800;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18800__$1,inst_18798);
} else {
if((state_val_18801 === (2))){
var inst_18770 = (state_18800[(10)]);
var inst_18772 = cljs.core.count(inst_18770);
var inst_18773 = (inst_18772 > (0));
var state_18800__$1 = state_18800;
if(cljs.core.truth_(inst_18773)){
var statearr_18809_18827 = state_18800__$1;
(statearr_18809_18827[(1)] = (4));

} else {
var statearr_18810_18828 = state_18800__$1;
(statearr_18810_18828[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18801 === (11))){
var inst_18770 = (state_18800[(10)]);
var inst_18789 = (state_18800[(2)]);
var tmp18808 = inst_18770;
var inst_18770__$1 = tmp18808;
var state_18800__$1 = (function (){var statearr_18811 = state_18800;
(statearr_18811[(11)] = inst_18789);

(statearr_18811[(10)] = inst_18770__$1);

return statearr_18811;
})();
var statearr_18812_18829 = state_18800__$1;
(statearr_18812_18829[(2)] = null);

(statearr_18812_18829[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18801 === (9))){
var inst_18780 = (state_18800[(8)]);
var state_18800__$1 = state_18800;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18800__$1,(11),out,inst_18780);
} else {
if((state_val_18801 === (5))){
var inst_18794 = cljs.core.async.close_BANG_(out);
var state_18800__$1 = state_18800;
var statearr_18813_18830 = state_18800__$1;
(statearr_18813_18830[(2)] = inst_18794);

(statearr_18813_18830[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18801 === (10))){
var inst_18792 = (state_18800[(2)]);
var state_18800__$1 = state_18800;
var statearr_18814_18831 = state_18800__$1;
(statearr_18814_18831[(2)] = inst_18792);

(statearr_18814_18831[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18801 === (8))){
var inst_18781 = (state_18800[(9)]);
var inst_18779 = (state_18800[(7)]);
var inst_18780 = (state_18800[(8)]);
var inst_18770 = (state_18800[(10)]);
var inst_18784 = (function (){var cs = inst_18770;
var vec__18775 = inst_18779;
var v = inst_18780;
var c = inst_18781;
return ((function (cs,vec__18775,v,c,inst_18781,inst_18779,inst_18780,inst_18770,state_val_18801,c__17407__auto___18822,out){
return (function (p1__18766_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18766_SHARP_);
});
;})(cs,vec__18775,v,c,inst_18781,inst_18779,inst_18780,inst_18770,state_val_18801,c__17407__auto___18822,out))
})();
var inst_18785 = cljs.core.filterv(inst_18784,inst_18770);
var inst_18770__$1 = inst_18785;
var state_18800__$1 = (function (){var statearr_18815 = state_18800;
(statearr_18815[(10)] = inst_18770__$1);

return statearr_18815;
})();
var statearr_18816_18832 = state_18800__$1;
(statearr_18816_18832[(2)] = null);

(statearr_18816_18832[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__17407__auto___18822,out))
;
return ((function (switch__17390__auto__,c__17407__auto___18822,out){
return (function() {
var cljs$core$async$state_machine__17391__auto__ = null;
var cljs$core$async$state_machine__17391__auto____0 = (function (){
var statearr_18817 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18817[(0)] = cljs$core$async$state_machine__17391__auto__);

(statearr_18817[(1)] = (1));

return statearr_18817;
});
var cljs$core$async$state_machine__17391__auto____1 = (function (state_18800){
while(true){
var ret_value__17392__auto__ = (function (){try{while(true){
var result__17393__auto__ = switch__17390__auto__(state_18800);
if(cljs.core.keyword_identical_QMARK_(result__17393__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17393__auto__;
}
break;
}
}catch (e18818){if((e18818 instanceof Object)){
var ex__17394__auto__ = e18818;
var statearr_18819_18833 = state_18800;
(statearr_18819_18833[(5)] = ex__17394__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18800);

return cljs.core.cst$kw$recur;
} else {
throw e18818;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17392__auto__,cljs.core.cst$kw$recur)){
var G__18834 = state_18800;
state_18800 = G__18834;
continue;
} else {
return ret_value__17392__auto__;
}
break;
}
});
cljs$core$async$state_machine__17391__auto__ = function(state_18800){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17391__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17391__auto____1.call(this,state_18800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17391__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17391__auto____0;
cljs$core$async$state_machine__17391__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17391__auto____1;
return cljs$core$async$state_machine__17391__auto__;
})()
;})(switch__17390__auto__,c__17407__auto___18822,out))
})();
var state__17409__auto__ = (function (){var statearr_18820 = (f__17408__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17408__auto__.cljs$core$IFn$_invoke$arity$0() : f__17408__auto__.call(null));
(statearr_18820[(6)] = c__17407__auto___18822);

return statearr_18820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17409__auto__);
});})(c__17407__auto___18822,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__18836 = arguments.length;
switch (G__18836) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17407__auto___18881 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17407__auto___18881,out){
return (function (){
var f__17408__auto__ = (function (){var switch__17390__auto__ = ((function (c__17407__auto___18881,out){
return (function (state_18860){
var state_val_18861 = (state_18860[(1)]);
if((state_val_18861 === (7))){
var inst_18842 = (state_18860[(7)]);
var inst_18842__$1 = (state_18860[(2)]);
var inst_18843 = (inst_18842__$1 == null);
var inst_18844 = cljs.core.not(inst_18843);
var state_18860__$1 = (function (){var statearr_18862 = state_18860;
(statearr_18862[(7)] = inst_18842__$1);

return statearr_18862;
})();
if(inst_18844){
var statearr_18863_18882 = state_18860__$1;
(statearr_18863_18882[(1)] = (8));

} else {
var statearr_18864_18883 = state_18860__$1;
(statearr_18864_18883[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18861 === (1))){
var inst_18837 = (0);
var state_18860__$1 = (function (){var statearr_18865 = state_18860;
(statearr_18865[(8)] = inst_18837);

return statearr_18865;
})();
var statearr_18866_18884 = state_18860__$1;
(statearr_18866_18884[(2)] = null);

(statearr_18866_18884[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18861 === (4))){
var state_18860__$1 = state_18860;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18860__$1,(7),ch);
} else {
if((state_val_18861 === (6))){
var inst_18855 = (state_18860[(2)]);
var state_18860__$1 = state_18860;
var statearr_18867_18885 = state_18860__$1;
(statearr_18867_18885[(2)] = inst_18855);

(statearr_18867_18885[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18861 === (3))){
var inst_18857 = (state_18860[(2)]);
var inst_18858 = cljs.core.async.close_BANG_(out);
var state_18860__$1 = (function (){var statearr_18868 = state_18860;
(statearr_18868[(9)] = inst_18857);

return statearr_18868;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18860__$1,inst_18858);
} else {
if((state_val_18861 === (2))){
var inst_18837 = (state_18860[(8)]);
var inst_18839 = (inst_18837 < n);
var state_18860__$1 = state_18860;
if(cljs.core.truth_(inst_18839)){
var statearr_18869_18886 = state_18860__$1;
(statearr_18869_18886[(1)] = (4));

} else {
var statearr_18870_18887 = state_18860__$1;
(statearr_18870_18887[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18861 === (11))){
var inst_18837 = (state_18860[(8)]);
var inst_18847 = (state_18860[(2)]);
var inst_18848 = (inst_18837 + (1));
var inst_18837__$1 = inst_18848;
var state_18860__$1 = (function (){var statearr_18871 = state_18860;
(statearr_18871[(8)] = inst_18837__$1);

(statearr_18871[(10)] = inst_18847);

return statearr_18871;
})();
var statearr_18872_18888 = state_18860__$1;
(statearr_18872_18888[(2)] = null);

(statearr_18872_18888[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18861 === (9))){
var state_18860__$1 = state_18860;
var statearr_18873_18889 = state_18860__$1;
(statearr_18873_18889[(2)] = null);

(statearr_18873_18889[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18861 === (5))){
var state_18860__$1 = state_18860;
var statearr_18874_18890 = state_18860__$1;
(statearr_18874_18890[(2)] = null);

(statearr_18874_18890[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18861 === (10))){
var inst_18852 = (state_18860[(2)]);
var state_18860__$1 = state_18860;
var statearr_18875_18891 = state_18860__$1;
(statearr_18875_18891[(2)] = inst_18852);

(statearr_18875_18891[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18861 === (8))){
var inst_18842 = (state_18860[(7)]);
var state_18860__$1 = state_18860;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18860__$1,(11),out,inst_18842);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__17407__auto___18881,out))
;
return ((function (switch__17390__auto__,c__17407__auto___18881,out){
return (function() {
var cljs$core$async$state_machine__17391__auto__ = null;
var cljs$core$async$state_machine__17391__auto____0 = (function (){
var statearr_18876 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18876[(0)] = cljs$core$async$state_machine__17391__auto__);

(statearr_18876[(1)] = (1));

return statearr_18876;
});
var cljs$core$async$state_machine__17391__auto____1 = (function (state_18860){
while(true){
var ret_value__17392__auto__ = (function (){try{while(true){
var result__17393__auto__ = switch__17390__auto__(state_18860);
if(cljs.core.keyword_identical_QMARK_(result__17393__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17393__auto__;
}
break;
}
}catch (e18877){if((e18877 instanceof Object)){
var ex__17394__auto__ = e18877;
var statearr_18878_18892 = state_18860;
(statearr_18878_18892[(5)] = ex__17394__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18860);

return cljs.core.cst$kw$recur;
} else {
throw e18877;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17392__auto__,cljs.core.cst$kw$recur)){
var G__18893 = state_18860;
state_18860 = G__18893;
continue;
} else {
return ret_value__17392__auto__;
}
break;
}
});
cljs$core$async$state_machine__17391__auto__ = function(state_18860){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17391__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17391__auto____1.call(this,state_18860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17391__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17391__auto____0;
cljs$core$async$state_machine__17391__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17391__auto____1;
return cljs$core$async$state_machine__17391__auto__;
})()
;})(switch__17390__auto__,c__17407__auto___18881,out))
})();
var state__17409__auto__ = (function (){var statearr_18879 = (f__17408__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17408__auto__.cljs$core$IFn$_invoke$arity$0() : f__17408__auto__.call(null));
(statearr_18879[(6)] = c__17407__auto___18881);

return statearr_18879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17409__auto__);
});})(c__17407__auto___18881,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18895 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18895 = (function (f,ch,meta18896){
this.f = f;
this.ch = ch;
this.meta18896 = meta18896;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18895.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18897,meta18896__$1){
var self__ = this;
var _18897__$1 = this;
return (new cljs.core.async.t_cljs$core$async18895(self__.f,self__.ch,meta18896__$1));
});

cljs.core.async.t_cljs$core$async18895.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18897){
var self__ = this;
var _18897__$1 = this;
return self__.meta18896;
});

cljs.core.async.t_cljs$core$async18895.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18895.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18895.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async18895.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18895.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18898 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18898 = (function (f,ch,meta18896,_,fn1,meta18899){
this.f = f;
this.ch = ch;
this.meta18896 = meta18896;
this._ = _;
this.fn1 = fn1;
this.meta18899 = meta18899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18900,meta18899__$1){
var self__ = this;
var _18900__$1 = this;
return (new cljs.core.async.t_cljs$core$async18898(self__.f,self__.ch,self__.meta18896,self__._,self__.fn1,meta18899__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async18898.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18900){
var self__ = this;
var _18900__$1 = this;
return self__.meta18899;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18898.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18898.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18898.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18898.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__18894_SHARP_){
var G__18901 = (((p1__18894_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18894_SHARP_) : self__.f.call(null,p1__18894_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18901) : f1.call(null,G__18901));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async18898.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18896,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async18895], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta18899], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18898.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18898.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18898";

cljs.core.async.t_cljs$core$async18898.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async18898");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18898.
 */
cljs.core.async.__GT_t_cljs$core$async18898 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18898(f__$1,ch__$1,meta18896__$1,___$2,fn1__$1,meta18899){
return (new cljs.core.async.t_cljs$core$async18898(f__$1,ch__$1,meta18896__$1,___$2,fn1__$1,meta18899));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async18898(self__.f,self__.ch,self__.meta18896,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18902 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18902) : self__.f.call(null,G__18902));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async18895.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18895.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async18895.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18896], null);
});

cljs.core.async.t_cljs$core$async18895.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18895.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18895";

cljs.core.async.t_cljs$core$async18895.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async18895");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18895.
 */
cljs.core.async.__GT_t_cljs$core$async18895 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18895(f__$1,ch__$1,meta18896){
return (new cljs.core.async.t_cljs$core$async18895(f__$1,ch__$1,meta18896));
});

}

return (new cljs.core.async.t_cljs$core$async18895(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18903 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18903 = (function (f,ch,meta18904){
this.f = f;
this.ch = ch;
this.meta18904 = meta18904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18905,meta18904__$1){
var self__ = this;
var _18905__$1 = this;
return (new cljs.core.async.t_cljs$core$async18903(self__.f,self__.ch,meta18904__$1));
});

cljs.core.async.t_cljs$core$async18903.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18905){
var self__ = this;
var _18905__$1 = this;
return self__.meta18904;
});

cljs.core.async.t_cljs$core$async18903.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18903.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18903.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18903.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18903.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18903.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async18903.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18904], null);
});

cljs.core.async.t_cljs$core$async18903.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18903.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18903";

cljs.core.async.t_cljs$core$async18903.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async18903");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18903.
 */
cljs.core.async.__GT_t_cljs$core$async18903 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async18903(f__$1,ch__$1,meta18904){
return (new cljs.core.async.t_cljs$core$async18903(f__$1,ch__$1,meta18904));
});

}

return (new cljs.core.async.t_cljs$core$async18903(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18906 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18906 = (function (p,ch,meta18907){
this.p = p;
this.ch = ch;
this.meta18907 = meta18907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18908,meta18907__$1){
var self__ = this;
var _18908__$1 = this;
return (new cljs.core.async.t_cljs$core$async18906(self__.p,self__.ch,meta18907__$1));
});

cljs.core.async.t_cljs$core$async18906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18908){
var self__ = this;
var _18908__$1 = this;
return self__.meta18907;
});

cljs.core.async.t_cljs$core$async18906.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18906.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18906.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async18906.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18906.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18906.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18906.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async18906.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18907], null);
});

cljs.core.async.t_cljs$core$async18906.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18906.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18906";

cljs.core.async.t_cljs$core$async18906.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async18906");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18906.
 */
cljs.core.async.__GT_t_cljs$core$async18906 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async18906(p__$1,ch__$1,meta18907){
return (new cljs.core.async.t_cljs$core$async18906(p__$1,ch__$1,meta18907));
});

}

return (new cljs.core.async.t_cljs$core$async18906(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__18910 = arguments.length;
switch (G__18910) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17407__auto___18950 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17407__auto___18950,out){
return (function (){
var f__17408__auto__ = (function (){var switch__17390__auto__ = ((function (c__17407__auto___18950,out){
return (function (state_18931){
var state_val_18932 = (state_18931[(1)]);
if((state_val_18932 === (7))){
var inst_18927 = (state_18931[(2)]);
var state_18931__$1 = state_18931;
var statearr_18933_18951 = state_18931__$1;
(statearr_18933_18951[(2)] = inst_18927);

(statearr_18933_18951[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18932 === (1))){
var state_18931__$1 = state_18931;
var statearr_18934_18952 = state_18931__$1;
(statearr_18934_18952[(2)] = null);

(statearr_18934_18952[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18932 === (4))){
var inst_18913 = (state_18931[(7)]);
var inst_18913__$1 = (state_18931[(2)]);
var inst_18914 = (inst_18913__$1 == null);
var state_18931__$1 = (function (){var statearr_18935 = state_18931;
(statearr_18935[(7)] = inst_18913__$1);

return statearr_18935;
})();
if(cljs.core.truth_(inst_18914)){
var statearr_18936_18953 = state_18931__$1;
(statearr_18936_18953[(1)] = (5));

} else {
var statearr_18937_18954 = state_18931__$1;
(statearr_18937_18954[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18932 === (6))){
var inst_18913 = (state_18931[(7)]);
var inst_18918 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18913) : p.call(null,inst_18913));
var state_18931__$1 = state_18931;
if(cljs.core.truth_(inst_18918)){
var statearr_18938_18955 = state_18931__$1;
(statearr_18938_18955[(1)] = (8));

} else {
var statearr_18939_18956 = state_18931__$1;
(statearr_18939_18956[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18932 === (3))){
var inst_18929 = (state_18931[(2)]);
var state_18931__$1 = state_18931;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18931__$1,inst_18929);
} else {
if((state_val_18932 === (2))){
var state_18931__$1 = state_18931;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18931__$1,(4),ch);
} else {
if((state_val_18932 === (11))){
var inst_18921 = (state_18931[(2)]);
var state_18931__$1 = state_18931;
var statearr_18940_18957 = state_18931__$1;
(statearr_18940_18957[(2)] = inst_18921);

(statearr_18940_18957[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18932 === (9))){
var state_18931__$1 = state_18931;
var statearr_18941_18958 = state_18931__$1;
(statearr_18941_18958[(2)] = null);

(statearr_18941_18958[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18932 === (5))){
var inst_18916 = cljs.core.async.close_BANG_(out);
var state_18931__$1 = state_18931;
var statearr_18942_18959 = state_18931__$1;
(statearr_18942_18959[(2)] = inst_18916);

(statearr_18942_18959[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18932 === (10))){
var inst_18924 = (state_18931[(2)]);
var state_18931__$1 = (function (){var statearr_18943 = state_18931;
(statearr_18943[(8)] = inst_18924);

return statearr_18943;
})();
var statearr_18944_18960 = state_18931__$1;
(statearr_18944_18960[(2)] = null);

(statearr_18944_18960[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18932 === (8))){
var inst_18913 = (state_18931[(7)]);
var state_18931__$1 = state_18931;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18931__$1,(11),out,inst_18913);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__17407__auto___18950,out))
;
return ((function (switch__17390__auto__,c__17407__auto___18950,out){
return (function() {
var cljs$core$async$state_machine__17391__auto__ = null;
var cljs$core$async$state_machine__17391__auto____0 = (function (){
var statearr_18945 = [null,null,null,null,null,null,null,null,null];
(statearr_18945[(0)] = cljs$core$async$state_machine__17391__auto__);

(statearr_18945[(1)] = (1));

return statearr_18945;
});
var cljs$core$async$state_machine__17391__auto____1 = (function (state_18931){
while(true){
var ret_value__17392__auto__ = (function (){try{while(true){
var result__17393__auto__ = switch__17390__auto__(state_18931);
if(cljs.core.keyword_identical_QMARK_(result__17393__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17393__auto__;
}
break;
}
}catch (e18946){if((e18946 instanceof Object)){
var ex__17394__auto__ = e18946;
var statearr_18947_18961 = state_18931;
(statearr_18947_18961[(5)] = ex__17394__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18931);

return cljs.core.cst$kw$recur;
} else {
throw e18946;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17392__auto__,cljs.core.cst$kw$recur)){
var G__18962 = state_18931;
state_18931 = G__18962;
continue;
} else {
return ret_value__17392__auto__;
}
break;
}
});
cljs$core$async$state_machine__17391__auto__ = function(state_18931){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17391__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17391__auto____1.call(this,state_18931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17391__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17391__auto____0;
cljs$core$async$state_machine__17391__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17391__auto____1;
return cljs$core$async$state_machine__17391__auto__;
})()
;})(switch__17390__auto__,c__17407__auto___18950,out))
})();
var state__17409__auto__ = (function (){var statearr_18948 = (f__17408__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17408__auto__.cljs$core$IFn$_invoke$arity$0() : f__17408__auto__.call(null));
(statearr_18948[(6)] = c__17407__auto___18950);

return statearr_18948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17409__auto__);
});})(c__17407__auto___18950,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18964 = arguments.length;
switch (G__18964) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__17407__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17407__auto__){
return (function (){
var f__17408__auto__ = (function (){var switch__17390__auto__ = ((function (c__17407__auto__){
return (function (state_19027){
var state_val_19028 = (state_19027[(1)]);
if((state_val_19028 === (7))){
var inst_19023 = (state_19027[(2)]);
var state_19027__$1 = state_19027;
var statearr_19029_19067 = state_19027__$1;
(statearr_19029_19067[(2)] = inst_19023);

(statearr_19029_19067[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19028 === (20))){
var inst_18993 = (state_19027[(7)]);
var inst_19004 = (state_19027[(2)]);
var inst_19005 = cljs.core.next(inst_18993);
var inst_18979 = inst_19005;
var inst_18980 = null;
var inst_18981 = (0);
var inst_18982 = (0);
var state_19027__$1 = (function (){var statearr_19030 = state_19027;
(statearr_19030[(8)] = inst_18981);

(statearr_19030[(9)] = inst_19004);

(statearr_19030[(10)] = inst_18982);

(statearr_19030[(11)] = inst_18980);

(statearr_19030[(12)] = inst_18979);

return statearr_19030;
})();
var statearr_19031_19068 = state_19027__$1;
(statearr_19031_19068[(2)] = null);

(statearr_19031_19068[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19028 === (1))){
var state_19027__$1 = state_19027;
var statearr_19032_19069 = state_19027__$1;
(statearr_19032_19069[(2)] = null);

(statearr_19032_19069[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19028 === (4))){
var inst_18968 = (state_19027[(13)]);
var inst_18968__$1 = (state_19027[(2)]);
var inst_18969 = (inst_18968__$1 == null);
var state_19027__$1 = (function (){var statearr_19033 = state_19027;
(statearr_19033[(13)] = inst_18968__$1);

return statearr_19033;
})();
if(cljs.core.truth_(inst_18969)){
var statearr_19034_19070 = state_19027__$1;
(statearr_19034_19070[(1)] = (5));

} else {
var statearr_19035_19071 = state_19027__$1;
(statearr_19035_19071[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19028 === (15))){
var state_19027__$1 = state_19027;
var statearr_19039_19072 = state_19027__$1;
(statearr_19039_19072[(2)] = null);

(statearr_19039_19072[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19028 === (21))){
var state_19027__$1 = state_19027;
var statearr_19040_19073 = state_19027__$1;
(statearr_19040_19073[(2)] = null);

(statearr_19040_19073[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19028 === (13))){
var inst_18981 = (state_19027[(8)]);
var inst_18982 = (state_19027[(10)]);
var inst_18980 = (state_19027[(11)]);
var inst_18979 = (state_19027[(12)]);
var inst_18989 = (state_19027[(2)]);
var inst_18990 = (inst_18982 + (1));
var tmp19036 = inst_18981;
var tmp19037 = inst_18980;
var tmp19038 = inst_18979;
var inst_18979__$1 = tmp19038;
var inst_18980__$1 = tmp19037;
var inst_18981__$1 = tmp19036;
var inst_18982__$1 = inst_18990;
var state_19027__$1 = (function (){var statearr_19041 = state_19027;
(statearr_19041[(8)] = inst_18981__$1);

(statearr_19041[(14)] = inst_18989);

(statearr_19041[(10)] = inst_18982__$1);

(statearr_19041[(11)] = inst_18980__$1);

(statearr_19041[(12)] = inst_18979__$1);

return statearr_19041;
})();
var statearr_19042_19074 = state_19027__$1;
(statearr_19042_19074[(2)] = null);

(statearr_19042_19074[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19028 === (22))){
var state_19027__$1 = state_19027;
var statearr_19043_19075 = state_19027__$1;
(statearr_19043_19075[(2)] = null);

(statearr_19043_19075[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19028 === (6))){
var inst_18968 = (state_19027[(13)]);
var inst_18977 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18968) : f.call(null,inst_18968));
var inst_18978 = cljs.core.seq(inst_18977);
var inst_18979 = inst_18978;
var inst_18980 = null;
var inst_18981 = (0);
var inst_18982 = (0);
var state_19027__$1 = (function (){var statearr_19044 = state_19027;
(statearr_19044[(8)] = inst_18981);

(statearr_19044[(10)] = inst_18982);

(statearr_19044[(11)] = inst_18980);

(statearr_19044[(12)] = inst_18979);

return statearr_19044;
})();
var statearr_19045_19076 = state_19027__$1;
(statearr_19045_19076[(2)] = null);

(statearr_19045_19076[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19028 === (17))){
var inst_18993 = (state_19027[(7)]);
var inst_18997 = cljs.core.chunk_first(inst_18993);
var inst_18998 = cljs.core.chunk_rest(inst_18993);
var inst_18999 = cljs.core.count(inst_18997);
var inst_18979 = inst_18998;
var inst_18980 = inst_18997;
var inst_18981 = inst_18999;
var inst_18982 = (0);
var state_19027__$1 = (function (){var statearr_19046 = state_19027;
(statearr_19046[(8)] = inst_18981);

(statearr_19046[(10)] = inst_18982);

(statearr_19046[(11)] = inst_18980);

(statearr_19046[(12)] = inst_18979);

return statearr_19046;
})();
var statearr_19047_19077 = state_19027__$1;
(statearr_19047_19077[(2)] = null);

(statearr_19047_19077[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19028 === (3))){
var inst_19025 = (state_19027[(2)]);
var state_19027__$1 = state_19027;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19027__$1,inst_19025);
} else {
if((state_val_19028 === (12))){
var inst_19013 = (state_19027[(2)]);
var state_19027__$1 = state_19027;
var statearr_19048_19078 = state_19027__$1;
(statearr_19048_19078[(2)] = inst_19013);

(statearr_19048_19078[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19028 === (2))){
var state_19027__$1 = state_19027;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19027__$1,(4),in$);
} else {
if((state_val_19028 === (23))){
var inst_19021 = (state_19027[(2)]);
var state_19027__$1 = state_19027;
var statearr_19049_19079 = state_19027__$1;
(statearr_19049_19079[(2)] = inst_19021);

(statearr_19049_19079[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19028 === (19))){
var inst_19008 = (state_19027[(2)]);
var state_19027__$1 = state_19027;
var statearr_19050_19080 = state_19027__$1;
(statearr_19050_19080[(2)] = inst_19008);

(statearr_19050_19080[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19028 === (11))){
var inst_18993 = (state_19027[(7)]);
var inst_18979 = (state_19027[(12)]);
var inst_18993__$1 = cljs.core.seq(inst_18979);
var state_19027__$1 = (function (){var statearr_19051 = state_19027;
(statearr_19051[(7)] = inst_18993__$1);

return statearr_19051;
})();
if(inst_18993__$1){
var statearr_19052_19081 = state_19027__$1;
(statearr_19052_19081[(1)] = (14));

} else {
var statearr_19053_19082 = state_19027__$1;
(statearr_19053_19082[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19028 === (9))){
var inst_19015 = (state_19027[(2)]);
var inst_19016 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19027__$1 = (function (){var statearr_19054 = state_19027;
(statearr_19054[(15)] = inst_19015);

return statearr_19054;
})();
if(cljs.core.truth_(inst_19016)){
var statearr_19055_19083 = state_19027__$1;
(statearr_19055_19083[(1)] = (21));

} else {
var statearr_19056_19084 = state_19027__$1;
(statearr_19056_19084[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19028 === (5))){
var inst_18971 = cljs.core.async.close_BANG_(out);
var state_19027__$1 = state_19027;
var statearr_19057_19085 = state_19027__$1;
(statearr_19057_19085[(2)] = inst_18971);

(statearr_19057_19085[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19028 === (14))){
var inst_18993 = (state_19027[(7)]);
var inst_18995 = cljs.core.chunked_seq_QMARK_(inst_18993);
var state_19027__$1 = state_19027;
if(inst_18995){
var statearr_19058_19086 = state_19027__$1;
(statearr_19058_19086[(1)] = (17));

} else {
var statearr_19059_19087 = state_19027__$1;
(statearr_19059_19087[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19028 === (16))){
var inst_19011 = (state_19027[(2)]);
var state_19027__$1 = state_19027;
var statearr_19060_19088 = state_19027__$1;
(statearr_19060_19088[(2)] = inst_19011);

(statearr_19060_19088[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19028 === (10))){
var inst_18982 = (state_19027[(10)]);
var inst_18980 = (state_19027[(11)]);
var inst_18987 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18980,inst_18982);
var state_19027__$1 = state_19027;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19027__$1,(13),out,inst_18987);
} else {
if((state_val_19028 === (18))){
var inst_18993 = (state_19027[(7)]);
var inst_19002 = cljs.core.first(inst_18993);
var state_19027__$1 = state_19027;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19027__$1,(20),out,inst_19002);
} else {
if((state_val_19028 === (8))){
var inst_18981 = (state_19027[(8)]);
var inst_18982 = (state_19027[(10)]);
var inst_18984 = (inst_18982 < inst_18981);
var inst_18985 = inst_18984;
var state_19027__$1 = state_19027;
if(cljs.core.truth_(inst_18985)){
var statearr_19061_19089 = state_19027__$1;
(statearr_19061_19089[(1)] = (10));

} else {
var statearr_19062_19090 = state_19027__$1;
(statearr_19062_19090[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__17407__auto__))
;
return ((function (switch__17390__auto__,c__17407__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17391__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17391__auto____0 = (function (){
var statearr_19063 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19063[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17391__auto__);

(statearr_19063[(1)] = (1));

return statearr_19063;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17391__auto____1 = (function (state_19027){
while(true){
var ret_value__17392__auto__ = (function (){try{while(true){
var result__17393__auto__ = switch__17390__auto__(state_19027);
if(cljs.core.keyword_identical_QMARK_(result__17393__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17393__auto__;
}
break;
}
}catch (e19064){if((e19064 instanceof Object)){
var ex__17394__auto__ = e19064;
var statearr_19065_19091 = state_19027;
(statearr_19065_19091[(5)] = ex__17394__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19027);

return cljs.core.cst$kw$recur;
} else {
throw e19064;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17392__auto__,cljs.core.cst$kw$recur)){
var G__19092 = state_19027;
state_19027 = G__19092;
continue;
} else {
return ret_value__17392__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17391__auto__ = function(state_19027){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17391__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17391__auto____1.call(this,state_19027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17391__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17391__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17391__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17391__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17391__auto__;
})()
;})(switch__17390__auto__,c__17407__auto__))
})();
var state__17409__auto__ = (function (){var statearr_19066 = (f__17408__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17408__auto__.cljs$core$IFn$_invoke$arity$0() : f__17408__auto__.call(null));
(statearr_19066[(6)] = c__17407__auto__);

return statearr_19066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17409__auto__);
});})(c__17407__auto__))
);

return c__17407__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19094 = arguments.length;
switch (G__19094) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__19097 = arguments.length;
switch (G__19097) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__19100 = arguments.length;
switch (G__19100) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17407__auto___19147 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17407__auto___19147,out){
return (function (){
var f__17408__auto__ = (function (){var switch__17390__auto__ = ((function (c__17407__auto___19147,out){
return (function (state_19124){
var state_val_19125 = (state_19124[(1)]);
if((state_val_19125 === (7))){
var inst_19119 = (state_19124[(2)]);
var state_19124__$1 = state_19124;
var statearr_19126_19148 = state_19124__$1;
(statearr_19126_19148[(2)] = inst_19119);

(statearr_19126_19148[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19125 === (1))){
var inst_19101 = null;
var state_19124__$1 = (function (){var statearr_19127 = state_19124;
(statearr_19127[(7)] = inst_19101);

return statearr_19127;
})();
var statearr_19128_19149 = state_19124__$1;
(statearr_19128_19149[(2)] = null);

(statearr_19128_19149[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19125 === (4))){
var inst_19104 = (state_19124[(8)]);
var inst_19104__$1 = (state_19124[(2)]);
var inst_19105 = (inst_19104__$1 == null);
var inst_19106 = cljs.core.not(inst_19105);
var state_19124__$1 = (function (){var statearr_19129 = state_19124;
(statearr_19129[(8)] = inst_19104__$1);

return statearr_19129;
})();
if(inst_19106){
var statearr_19130_19150 = state_19124__$1;
(statearr_19130_19150[(1)] = (5));

} else {
var statearr_19131_19151 = state_19124__$1;
(statearr_19131_19151[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19125 === (6))){
var state_19124__$1 = state_19124;
var statearr_19132_19152 = state_19124__$1;
(statearr_19132_19152[(2)] = null);

(statearr_19132_19152[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19125 === (3))){
var inst_19121 = (state_19124[(2)]);
var inst_19122 = cljs.core.async.close_BANG_(out);
var state_19124__$1 = (function (){var statearr_19133 = state_19124;
(statearr_19133[(9)] = inst_19121);

return statearr_19133;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19124__$1,inst_19122);
} else {
if((state_val_19125 === (2))){
var state_19124__$1 = state_19124;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19124__$1,(4),ch);
} else {
if((state_val_19125 === (11))){
var inst_19104 = (state_19124[(8)]);
var inst_19113 = (state_19124[(2)]);
var inst_19101 = inst_19104;
var state_19124__$1 = (function (){var statearr_19134 = state_19124;
(statearr_19134[(10)] = inst_19113);

(statearr_19134[(7)] = inst_19101);

return statearr_19134;
})();
var statearr_19135_19153 = state_19124__$1;
(statearr_19135_19153[(2)] = null);

(statearr_19135_19153[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19125 === (9))){
var inst_19104 = (state_19124[(8)]);
var state_19124__$1 = state_19124;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19124__$1,(11),out,inst_19104);
} else {
if((state_val_19125 === (5))){
var inst_19104 = (state_19124[(8)]);
var inst_19101 = (state_19124[(7)]);
var inst_19108 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19104,inst_19101);
var state_19124__$1 = state_19124;
if(inst_19108){
var statearr_19137_19154 = state_19124__$1;
(statearr_19137_19154[(1)] = (8));

} else {
var statearr_19138_19155 = state_19124__$1;
(statearr_19138_19155[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19125 === (10))){
var inst_19116 = (state_19124[(2)]);
var state_19124__$1 = state_19124;
var statearr_19139_19156 = state_19124__$1;
(statearr_19139_19156[(2)] = inst_19116);

(statearr_19139_19156[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19125 === (8))){
var inst_19101 = (state_19124[(7)]);
var tmp19136 = inst_19101;
var inst_19101__$1 = tmp19136;
var state_19124__$1 = (function (){var statearr_19140 = state_19124;
(statearr_19140[(7)] = inst_19101__$1);

return statearr_19140;
})();
var statearr_19141_19157 = state_19124__$1;
(statearr_19141_19157[(2)] = null);

(statearr_19141_19157[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__17407__auto___19147,out))
;
return ((function (switch__17390__auto__,c__17407__auto___19147,out){
return (function() {
var cljs$core$async$state_machine__17391__auto__ = null;
var cljs$core$async$state_machine__17391__auto____0 = (function (){
var statearr_19142 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19142[(0)] = cljs$core$async$state_machine__17391__auto__);

(statearr_19142[(1)] = (1));

return statearr_19142;
});
var cljs$core$async$state_machine__17391__auto____1 = (function (state_19124){
while(true){
var ret_value__17392__auto__ = (function (){try{while(true){
var result__17393__auto__ = switch__17390__auto__(state_19124);
if(cljs.core.keyword_identical_QMARK_(result__17393__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17393__auto__;
}
break;
}
}catch (e19143){if((e19143 instanceof Object)){
var ex__17394__auto__ = e19143;
var statearr_19144_19158 = state_19124;
(statearr_19144_19158[(5)] = ex__17394__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19124);

return cljs.core.cst$kw$recur;
} else {
throw e19143;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17392__auto__,cljs.core.cst$kw$recur)){
var G__19159 = state_19124;
state_19124 = G__19159;
continue;
} else {
return ret_value__17392__auto__;
}
break;
}
});
cljs$core$async$state_machine__17391__auto__ = function(state_19124){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17391__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17391__auto____1.call(this,state_19124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17391__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17391__auto____0;
cljs$core$async$state_machine__17391__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17391__auto____1;
return cljs$core$async$state_machine__17391__auto__;
})()
;})(switch__17390__auto__,c__17407__auto___19147,out))
})();
var state__17409__auto__ = (function (){var statearr_19145 = (f__17408__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17408__auto__.cljs$core$IFn$_invoke$arity$0() : f__17408__auto__.call(null));
(statearr_19145[(6)] = c__17407__auto___19147);

return statearr_19145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17409__auto__);
});})(c__17407__auto___19147,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19161 = arguments.length;
switch (G__19161) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17407__auto___19227 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17407__auto___19227,out){
return (function (){
var f__17408__auto__ = (function (){var switch__17390__auto__ = ((function (c__17407__auto___19227,out){
return (function (state_19199){
var state_val_19200 = (state_19199[(1)]);
if((state_val_19200 === (7))){
var inst_19195 = (state_19199[(2)]);
var state_19199__$1 = state_19199;
var statearr_19201_19228 = state_19199__$1;
(statearr_19201_19228[(2)] = inst_19195);

(statearr_19201_19228[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19200 === (1))){
var inst_19162 = (new Array(n));
var inst_19163 = inst_19162;
var inst_19164 = (0);
var state_19199__$1 = (function (){var statearr_19202 = state_19199;
(statearr_19202[(7)] = inst_19164);

(statearr_19202[(8)] = inst_19163);

return statearr_19202;
})();
var statearr_19203_19229 = state_19199__$1;
(statearr_19203_19229[(2)] = null);

(statearr_19203_19229[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19200 === (4))){
var inst_19167 = (state_19199[(9)]);
var inst_19167__$1 = (state_19199[(2)]);
var inst_19168 = (inst_19167__$1 == null);
var inst_19169 = cljs.core.not(inst_19168);
var state_19199__$1 = (function (){var statearr_19204 = state_19199;
(statearr_19204[(9)] = inst_19167__$1);

return statearr_19204;
})();
if(inst_19169){
var statearr_19205_19230 = state_19199__$1;
(statearr_19205_19230[(1)] = (5));

} else {
var statearr_19206_19231 = state_19199__$1;
(statearr_19206_19231[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19200 === (15))){
var inst_19189 = (state_19199[(2)]);
var state_19199__$1 = state_19199;
var statearr_19207_19232 = state_19199__$1;
(statearr_19207_19232[(2)] = inst_19189);

(statearr_19207_19232[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19200 === (13))){
var state_19199__$1 = state_19199;
var statearr_19208_19233 = state_19199__$1;
(statearr_19208_19233[(2)] = null);

(statearr_19208_19233[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19200 === (6))){
var inst_19164 = (state_19199[(7)]);
var inst_19185 = (inst_19164 > (0));
var state_19199__$1 = state_19199;
if(cljs.core.truth_(inst_19185)){
var statearr_19209_19234 = state_19199__$1;
(statearr_19209_19234[(1)] = (12));

} else {
var statearr_19210_19235 = state_19199__$1;
(statearr_19210_19235[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19200 === (3))){
var inst_19197 = (state_19199[(2)]);
var state_19199__$1 = state_19199;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19199__$1,inst_19197);
} else {
if((state_val_19200 === (12))){
var inst_19163 = (state_19199[(8)]);
var inst_19187 = cljs.core.vec(inst_19163);
var state_19199__$1 = state_19199;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19199__$1,(15),out,inst_19187);
} else {
if((state_val_19200 === (2))){
var state_19199__$1 = state_19199;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19199__$1,(4),ch);
} else {
if((state_val_19200 === (11))){
var inst_19179 = (state_19199[(2)]);
var inst_19180 = (new Array(n));
var inst_19163 = inst_19180;
var inst_19164 = (0);
var state_19199__$1 = (function (){var statearr_19211 = state_19199;
(statearr_19211[(10)] = inst_19179);

(statearr_19211[(7)] = inst_19164);

(statearr_19211[(8)] = inst_19163);

return statearr_19211;
})();
var statearr_19212_19236 = state_19199__$1;
(statearr_19212_19236[(2)] = null);

(statearr_19212_19236[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19200 === (9))){
var inst_19163 = (state_19199[(8)]);
var inst_19177 = cljs.core.vec(inst_19163);
var state_19199__$1 = state_19199;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19199__$1,(11),out,inst_19177);
} else {
if((state_val_19200 === (5))){
var inst_19167 = (state_19199[(9)]);
var inst_19164 = (state_19199[(7)]);
var inst_19172 = (state_19199[(11)]);
var inst_19163 = (state_19199[(8)]);
var inst_19171 = (inst_19163[inst_19164] = inst_19167);
var inst_19172__$1 = (inst_19164 + (1));
var inst_19173 = (inst_19172__$1 < n);
var state_19199__$1 = (function (){var statearr_19213 = state_19199;
(statearr_19213[(11)] = inst_19172__$1);

(statearr_19213[(12)] = inst_19171);

return statearr_19213;
})();
if(cljs.core.truth_(inst_19173)){
var statearr_19214_19237 = state_19199__$1;
(statearr_19214_19237[(1)] = (8));

} else {
var statearr_19215_19238 = state_19199__$1;
(statearr_19215_19238[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19200 === (14))){
var inst_19192 = (state_19199[(2)]);
var inst_19193 = cljs.core.async.close_BANG_(out);
var state_19199__$1 = (function (){var statearr_19217 = state_19199;
(statearr_19217[(13)] = inst_19192);

return statearr_19217;
})();
var statearr_19218_19239 = state_19199__$1;
(statearr_19218_19239[(2)] = inst_19193);

(statearr_19218_19239[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19200 === (10))){
var inst_19183 = (state_19199[(2)]);
var state_19199__$1 = state_19199;
var statearr_19219_19240 = state_19199__$1;
(statearr_19219_19240[(2)] = inst_19183);

(statearr_19219_19240[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19200 === (8))){
var inst_19172 = (state_19199[(11)]);
var inst_19163 = (state_19199[(8)]);
var tmp19216 = inst_19163;
var inst_19163__$1 = tmp19216;
var inst_19164 = inst_19172;
var state_19199__$1 = (function (){var statearr_19220 = state_19199;
(statearr_19220[(7)] = inst_19164);

(statearr_19220[(8)] = inst_19163__$1);

return statearr_19220;
})();
var statearr_19221_19241 = state_19199__$1;
(statearr_19221_19241[(2)] = null);

(statearr_19221_19241[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__17407__auto___19227,out))
;
return ((function (switch__17390__auto__,c__17407__auto___19227,out){
return (function() {
var cljs$core$async$state_machine__17391__auto__ = null;
var cljs$core$async$state_machine__17391__auto____0 = (function (){
var statearr_19222 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19222[(0)] = cljs$core$async$state_machine__17391__auto__);

(statearr_19222[(1)] = (1));

return statearr_19222;
});
var cljs$core$async$state_machine__17391__auto____1 = (function (state_19199){
while(true){
var ret_value__17392__auto__ = (function (){try{while(true){
var result__17393__auto__ = switch__17390__auto__(state_19199);
if(cljs.core.keyword_identical_QMARK_(result__17393__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17393__auto__;
}
break;
}
}catch (e19223){if((e19223 instanceof Object)){
var ex__17394__auto__ = e19223;
var statearr_19224_19242 = state_19199;
(statearr_19224_19242[(5)] = ex__17394__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19199);

return cljs.core.cst$kw$recur;
} else {
throw e19223;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17392__auto__,cljs.core.cst$kw$recur)){
var G__19243 = state_19199;
state_19199 = G__19243;
continue;
} else {
return ret_value__17392__auto__;
}
break;
}
});
cljs$core$async$state_machine__17391__auto__ = function(state_19199){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17391__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17391__auto____1.call(this,state_19199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17391__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17391__auto____0;
cljs$core$async$state_machine__17391__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17391__auto____1;
return cljs$core$async$state_machine__17391__auto__;
})()
;})(switch__17390__auto__,c__17407__auto___19227,out))
})();
var state__17409__auto__ = (function (){var statearr_19225 = (f__17408__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17408__auto__.cljs$core$IFn$_invoke$arity$0() : f__17408__auto__.call(null));
(statearr_19225[(6)] = c__17407__auto___19227);

return statearr_19225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17409__auto__);
});})(c__17407__auto___19227,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19245 = arguments.length;
switch (G__19245) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17407__auto___19315 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17407__auto___19315,out){
return (function (){
var f__17408__auto__ = (function (){var switch__17390__auto__ = ((function (c__17407__auto___19315,out){
return (function (state_19287){
var state_val_19288 = (state_19287[(1)]);
if((state_val_19288 === (7))){
var inst_19283 = (state_19287[(2)]);
var state_19287__$1 = state_19287;
var statearr_19289_19316 = state_19287__$1;
(statearr_19289_19316[(2)] = inst_19283);

(statearr_19289_19316[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19288 === (1))){
var inst_19246 = [];
var inst_19247 = inst_19246;
var inst_19248 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_19287__$1 = (function (){var statearr_19290 = state_19287;
(statearr_19290[(7)] = inst_19247);

(statearr_19290[(8)] = inst_19248);

return statearr_19290;
})();
var statearr_19291_19317 = state_19287__$1;
(statearr_19291_19317[(2)] = null);

(statearr_19291_19317[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19288 === (4))){
var inst_19251 = (state_19287[(9)]);
var inst_19251__$1 = (state_19287[(2)]);
var inst_19252 = (inst_19251__$1 == null);
var inst_19253 = cljs.core.not(inst_19252);
var state_19287__$1 = (function (){var statearr_19292 = state_19287;
(statearr_19292[(9)] = inst_19251__$1);

return statearr_19292;
})();
if(inst_19253){
var statearr_19293_19318 = state_19287__$1;
(statearr_19293_19318[(1)] = (5));

} else {
var statearr_19294_19319 = state_19287__$1;
(statearr_19294_19319[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19288 === (15))){
var inst_19277 = (state_19287[(2)]);
var state_19287__$1 = state_19287;
var statearr_19295_19320 = state_19287__$1;
(statearr_19295_19320[(2)] = inst_19277);

(statearr_19295_19320[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19288 === (13))){
var state_19287__$1 = state_19287;
var statearr_19296_19321 = state_19287__$1;
(statearr_19296_19321[(2)] = null);

(statearr_19296_19321[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19288 === (6))){
var inst_19247 = (state_19287[(7)]);
var inst_19272 = inst_19247.length;
var inst_19273 = (inst_19272 > (0));
var state_19287__$1 = state_19287;
if(cljs.core.truth_(inst_19273)){
var statearr_19297_19322 = state_19287__$1;
(statearr_19297_19322[(1)] = (12));

} else {
var statearr_19298_19323 = state_19287__$1;
(statearr_19298_19323[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19288 === (3))){
var inst_19285 = (state_19287[(2)]);
var state_19287__$1 = state_19287;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19287__$1,inst_19285);
} else {
if((state_val_19288 === (12))){
var inst_19247 = (state_19287[(7)]);
var inst_19275 = cljs.core.vec(inst_19247);
var state_19287__$1 = state_19287;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19287__$1,(15),out,inst_19275);
} else {
if((state_val_19288 === (2))){
var state_19287__$1 = state_19287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19287__$1,(4),ch);
} else {
if((state_val_19288 === (11))){
var inst_19255 = (state_19287[(10)]);
var inst_19251 = (state_19287[(9)]);
var inst_19265 = (state_19287[(2)]);
var inst_19266 = [];
var inst_19267 = inst_19266.push(inst_19251);
var inst_19247 = inst_19266;
var inst_19248 = inst_19255;
var state_19287__$1 = (function (){var statearr_19299 = state_19287;
(statearr_19299[(11)] = inst_19267);

(statearr_19299[(12)] = inst_19265);

(statearr_19299[(7)] = inst_19247);

(statearr_19299[(8)] = inst_19248);

return statearr_19299;
})();
var statearr_19300_19324 = state_19287__$1;
(statearr_19300_19324[(2)] = null);

(statearr_19300_19324[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19288 === (9))){
var inst_19247 = (state_19287[(7)]);
var inst_19263 = cljs.core.vec(inst_19247);
var state_19287__$1 = state_19287;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19287__$1,(11),out,inst_19263);
} else {
if((state_val_19288 === (5))){
var inst_19255 = (state_19287[(10)]);
var inst_19251 = (state_19287[(9)]);
var inst_19248 = (state_19287[(8)]);
var inst_19255__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19251) : f.call(null,inst_19251));
var inst_19256 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19255__$1,inst_19248);
var inst_19257 = cljs.core.keyword_identical_QMARK_(inst_19248,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_19258 = ((inst_19256) || (inst_19257));
var state_19287__$1 = (function (){var statearr_19301 = state_19287;
(statearr_19301[(10)] = inst_19255__$1);

return statearr_19301;
})();
if(cljs.core.truth_(inst_19258)){
var statearr_19302_19325 = state_19287__$1;
(statearr_19302_19325[(1)] = (8));

} else {
var statearr_19303_19326 = state_19287__$1;
(statearr_19303_19326[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19288 === (14))){
var inst_19280 = (state_19287[(2)]);
var inst_19281 = cljs.core.async.close_BANG_(out);
var state_19287__$1 = (function (){var statearr_19305 = state_19287;
(statearr_19305[(13)] = inst_19280);

return statearr_19305;
})();
var statearr_19306_19327 = state_19287__$1;
(statearr_19306_19327[(2)] = inst_19281);

(statearr_19306_19327[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19288 === (10))){
var inst_19270 = (state_19287[(2)]);
var state_19287__$1 = state_19287;
var statearr_19307_19328 = state_19287__$1;
(statearr_19307_19328[(2)] = inst_19270);

(statearr_19307_19328[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19288 === (8))){
var inst_19255 = (state_19287[(10)]);
var inst_19247 = (state_19287[(7)]);
var inst_19251 = (state_19287[(9)]);
var inst_19260 = inst_19247.push(inst_19251);
var tmp19304 = inst_19247;
var inst_19247__$1 = tmp19304;
var inst_19248 = inst_19255;
var state_19287__$1 = (function (){var statearr_19308 = state_19287;
(statearr_19308[(14)] = inst_19260);

(statearr_19308[(7)] = inst_19247__$1);

(statearr_19308[(8)] = inst_19248);

return statearr_19308;
})();
var statearr_19309_19329 = state_19287__$1;
(statearr_19309_19329[(2)] = null);

(statearr_19309_19329[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__17407__auto___19315,out))
;
return ((function (switch__17390__auto__,c__17407__auto___19315,out){
return (function() {
var cljs$core$async$state_machine__17391__auto__ = null;
var cljs$core$async$state_machine__17391__auto____0 = (function (){
var statearr_19310 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19310[(0)] = cljs$core$async$state_machine__17391__auto__);

(statearr_19310[(1)] = (1));

return statearr_19310;
});
var cljs$core$async$state_machine__17391__auto____1 = (function (state_19287){
while(true){
var ret_value__17392__auto__ = (function (){try{while(true){
var result__17393__auto__ = switch__17390__auto__(state_19287);
if(cljs.core.keyword_identical_QMARK_(result__17393__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17393__auto__;
}
break;
}
}catch (e19311){if((e19311 instanceof Object)){
var ex__17394__auto__ = e19311;
var statearr_19312_19330 = state_19287;
(statearr_19312_19330[(5)] = ex__17394__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19287);

return cljs.core.cst$kw$recur;
} else {
throw e19311;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17392__auto__,cljs.core.cst$kw$recur)){
var G__19331 = state_19287;
state_19287 = G__19331;
continue;
} else {
return ret_value__17392__auto__;
}
break;
}
});
cljs$core$async$state_machine__17391__auto__ = function(state_19287){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17391__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17391__auto____1.call(this,state_19287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17391__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17391__auto____0;
cljs$core$async$state_machine__17391__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17391__auto____1;
return cljs$core$async$state_machine__17391__auto__;
})()
;})(switch__17390__auto__,c__17407__auto___19315,out))
})();
var state__17409__auto__ = (function (){var statearr_19313 = (f__17408__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17408__auto__.cljs$core$IFn$_invoke$arity$0() : f__17408__auto__.call(null));
(statearr_19313[(6)] = c__17407__auto___19315);

return statearr_19313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17409__auto__);
});})(c__17407__auto___19315,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

