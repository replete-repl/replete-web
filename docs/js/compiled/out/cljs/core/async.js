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
var G__15549 = arguments.length;
switch (G__15549) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15550 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15550 = (function (f,blockable,meta15551){
this.f = f;
this.blockable = blockable;
this.meta15551 = meta15551;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15550.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15552,meta15551__$1){
var self__ = this;
var _15552__$1 = this;
return (new cljs.core.async.t_cljs$core$async15550(self__.f,self__.blockable,meta15551__$1));
});

cljs.core.async.t_cljs$core$async15550.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15552){
var self__ = this;
var _15552__$1 = this;
return self__.meta15551;
});

cljs.core.async.t_cljs$core$async15550.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15550.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15550.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async15550.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async15550.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta15551], null);
});

cljs.core.async.t_cljs$core$async15550.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15550.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15550";

cljs.core.async.t_cljs$core$async15550.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async15550");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15550.
 */
cljs.core.async.__GT_t_cljs$core$async15550 = (function cljs$core$async$__GT_t_cljs$core$async15550(f__$1,blockable__$1,meta15551){
return (new cljs.core.async.t_cljs$core$async15550(f__$1,blockable__$1,meta15551));
});

}

return (new cljs.core.async.t_cljs$core$async15550(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__15556 = arguments.length;
switch (G__15556) {
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
var G__15559 = arguments.length;
switch (G__15559) {
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
var G__15562 = arguments.length;
switch (G__15562) {
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
var val_15564 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15564) : fn1.call(null,val_15564));
} else {
cljs.core.async.impl.dispatch.run(((function (val_15564,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15564) : fn1.call(null,val_15564));
});})(val_15564,ret))
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
var G__15566 = arguments.length;
switch (G__15566) {
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
var n__4607__auto___15568 = n;
var x_15569 = (0);
while(true){
if((x_15569 < n__4607__auto___15568)){
(a[x_15569] = (0));

var G__15570 = (x_15569 + (1));
x_15569 = G__15570;
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

var G__15571 = (i + (1));
i = G__15571;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15572 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15572 = (function (flag,meta15573){
this.flag = flag;
this.meta15573 = meta15573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15574,meta15573__$1){
var self__ = this;
var _15574__$1 = this;
return (new cljs.core.async.t_cljs$core$async15572(self__.flag,meta15573__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async15572.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15574){
var self__ = this;
var _15574__$1 = this;
return self__.meta15573;
});})(flag))
;

cljs.core.async.t_cljs$core$async15572.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15572.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async15572.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15572.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15572.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta15573], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async15572.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15572";

cljs.core.async.t_cljs$core$async15572.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async15572");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15572.
 */
cljs.core.async.__GT_t_cljs$core$async15572 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15572(flag__$1,meta15573){
return (new cljs.core.async.t_cljs$core$async15572(flag__$1,meta15573));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async15572(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15575 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15575 = (function (flag,cb,meta15576){
this.flag = flag;
this.cb = cb;
this.meta15576 = meta15576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15577,meta15576__$1){
var self__ = this;
var _15577__$1 = this;
return (new cljs.core.async.t_cljs$core$async15575(self__.flag,self__.cb,meta15576__$1));
});

cljs.core.async.t_cljs$core$async15575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15577){
var self__ = this;
var _15577__$1 = this;
return self__.meta15576;
});

cljs.core.async.t_cljs$core$async15575.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15575.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async15575.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15575.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async15575.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta15576], null);
});

cljs.core.async.t_cljs$core$async15575.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15575.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15575";

cljs.core.async.t_cljs$core$async15575.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async15575");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15575.
 */
cljs.core.async.__GT_t_cljs$core$async15575 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15575(flag__$1,cb__$1,meta15576){
return (new cljs.core.async.t_cljs$core$async15575(flag__$1,cb__$1,meta15576));
});

}

return (new cljs.core.async.t_cljs$core$async15575(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__15578_SHARP_){
var G__15580 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15578_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15580) : fret.call(null,G__15580));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15579_SHARP_){
var G__15581 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15579_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15581) : fret.call(null,G__15581));
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
var G__15582 = (i + (1));
i = G__15582;
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
var len__4730__auto___15588 = arguments.length;
var i__4731__auto___15589 = (0);
while(true){
if((i__4731__auto___15589 < len__4730__auto___15588)){
args__4736__auto__.push((arguments[i__4731__auto___15589]));

var G__15590 = (i__4731__auto___15589 + (1));
i__4731__auto___15589 = G__15590;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15585){
var map__15586 = p__15585;
var map__15586__$1 = (((((!((map__15586 == null))))?(((((map__15586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15586):map__15586);
var opts = map__15586__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15583){
var G__15584 = cljs.core.first(seq15583);
var seq15583__$1 = cljs.core.next(seq15583);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15584,seq15583__$1);
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
var G__15592 = arguments.length;
switch (G__15592) {
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
var c__13621__auto___15638 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13621__auto___15638){
return (function (){
var f__13622__auto__ = (function (){var switch__13604__auto__ = ((function (c__13621__auto___15638){
return (function (state_15616){
var state_val_15617 = (state_15616[(1)]);
if((state_val_15617 === (7))){
var inst_15612 = (state_15616[(2)]);
var state_15616__$1 = state_15616;
var statearr_15618_15639 = state_15616__$1;
(statearr_15618_15639[(2)] = inst_15612);

(statearr_15618_15639[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15617 === (1))){
var state_15616__$1 = state_15616;
var statearr_15619_15640 = state_15616__$1;
(statearr_15619_15640[(2)] = null);

(statearr_15619_15640[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15617 === (4))){
var inst_15595 = (state_15616[(7)]);
var inst_15595__$1 = (state_15616[(2)]);
var inst_15596 = (inst_15595__$1 == null);
var state_15616__$1 = (function (){var statearr_15620 = state_15616;
(statearr_15620[(7)] = inst_15595__$1);

return statearr_15620;
})();
if(cljs.core.truth_(inst_15596)){
var statearr_15621_15641 = state_15616__$1;
(statearr_15621_15641[(1)] = (5));

} else {
var statearr_15622_15642 = state_15616__$1;
(statearr_15622_15642[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15617 === (13))){
var state_15616__$1 = state_15616;
var statearr_15623_15643 = state_15616__$1;
(statearr_15623_15643[(2)] = null);

(statearr_15623_15643[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15617 === (6))){
var inst_15595 = (state_15616[(7)]);
var state_15616__$1 = state_15616;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15616__$1,(11),to,inst_15595);
} else {
if((state_val_15617 === (3))){
var inst_15614 = (state_15616[(2)]);
var state_15616__$1 = state_15616;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15616__$1,inst_15614);
} else {
if((state_val_15617 === (12))){
var state_15616__$1 = state_15616;
var statearr_15624_15644 = state_15616__$1;
(statearr_15624_15644[(2)] = null);

(statearr_15624_15644[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15617 === (2))){
var state_15616__$1 = state_15616;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15616__$1,(4),from);
} else {
if((state_val_15617 === (11))){
var inst_15605 = (state_15616[(2)]);
var state_15616__$1 = state_15616;
if(cljs.core.truth_(inst_15605)){
var statearr_15625_15645 = state_15616__$1;
(statearr_15625_15645[(1)] = (12));

} else {
var statearr_15626_15646 = state_15616__$1;
(statearr_15626_15646[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15617 === (9))){
var state_15616__$1 = state_15616;
var statearr_15627_15647 = state_15616__$1;
(statearr_15627_15647[(2)] = null);

(statearr_15627_15647[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15617 === (5))){
var state_15616__$1 = state_15616;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15628_15648 = state_15616__$1;
(statearr_15628_15648[(1)] = (8));

} else {
var statearr_15629_15649 = state_15616__$1;
(statearr_15629_15649[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15617 === (14))){
var inst_15610 = (state_15616[(2)]);
var state_15616__$1 = state_15616;
var statearr_15630_15650 = state_15616__$1;
(statearr_15630_15650[(2)] = inst_15610);

(statearr_15630_15650[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15617 === (10))){
var inst_15602 = (state_15616[(2)]);
var state_15616__$1 = state_15616;
var statearr_15631_15651 = state_15616__$1;
(statearr_15631_15651[(2)] = inst_15602);

(statearr_15631_15651[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15617 === (8))){
var inst_15599 = cljs.core.async.close_BANG_(to);
var state_15616__$1 = state_15616;
var statearr_15632_15652 = state_15616__$1;
(statearr_15632_15652[(2)] = inst_15599);

(statearr_15632_15652[(1)] = (10));


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
});})(c__13621__auto___15638))
;
return ((function (switch__13604__auto__,c__13621__auto___15638){
return (function() {
var cljs$core$async$state_machine__13605__auto__ = null;
var cljs$core$async$state_machine__13605__auto____0 = (function (){
var statearr_15633 = [null,null,null,null,null,null,null,null];
(statearr_15633[(0)] = cljs$core$async$state_machine__13605__auto__);

(statearr_15633[(1)] = (1));

return statearr_15633;
});
var cljs$core$async$state_machine__13605__auto____1 = (function (state_15616){
while(true){
var ret_value__13606__auto__ = (function (){try{while(true){
var result__13607__auto__ = switch__13604__auto__(state_15616);
if(cljs.core.keyword_identical_QMARK_(result__13607__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13607__auto__;
}
break;
}
}catch (e15634){if((e15634 instanceof Object)){
var ex__13608__auto__ = e15634;
var statearr_15635_15653 = state_15616;
(statearr_15635_15653[(5)] = ex__13608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15616);

return cljs.core.cst$kw$recur;
} else {
throw e15634;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13606__auto__,cljs.core.cst$kw$recur)){
var G__15654 = state_15616;
state_15616 = G__15654;
continue;
} else {
return ret_value__13606__auto__;
}
break;
}
});
cljs$core$async$state_machine__13605__auto__ = function(state_15616){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13605__auto____1.call(this,state_15616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13605__auto____0;
cljs$core$async$state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13605__auto____1;
return cljs$core$async$state_machine__13605__auto__;
})()
;})(switch__13604__auto__,c__13621__auto___15638))
})();
var state__13623__auto__ = (function (){var statearr_15636 = (f__13622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13622__auto__.cljs$core$IFn$_invoke$arity$0() : f__13622__auto__.call(null));
(statearr_15636[(6)] = c__13621__auto___15638);

return statearr_15636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13623__auto__);
});})(c__13621__auto___15638))
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
return (function (p__15655){
var vec__15656 = p__15655;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15656,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15656,(1),null);
var job = vec__15656;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13621__auto___15827 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13621__auto___15827,res,vec__15656,v,p,job,jobs,results){
return (function (){
var f__13622__auto__ = (function (){var switch__13604__auto__ = ((function (c__13621__auto___15827,res,vec__15656,v,p,job,jobs,results){
return (function (state_15663){
var state_val_15664 = (state_15663[(1)]);
if((state_val_15664 === (1))){
var state_15663__$1 = state_15663;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15663__$1,(2),res,v);
} else {
if((state_val_15664 === (2))){
var inst_15660 = (state_15663[(2)]);
var inst_15661 = cljs.core.async.close_BANG_(res);
var state_15663__$1 = (function (){var statearr_15665 = state_15663;
(statearr_15665[(7)] = inst_15660);

return statearr_15665;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15663__$1,inst_15661);
} else {
return null;
}
}
});})(c__13621__auto___15827,res,vec__15656,v,p,job,jobs,results))
;
return ((function (switch__13604__auto__,c__13621__auto___15827,res,vec__15656,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13605__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13605__auto____0 = (function (){
var statearr_15666 = [null,null,null,null,null,null,null,null];
(statearr_15666[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13605__auto__);

(statearr_15666[(1)] = (1));

return statearr_15666;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13605__auto____1 = (function (state_15663){
while(true){
var ret_value__13606__auto__ = (function (){try{while(true){
var result__13607__auto__ = switch__13604__auto__(state_15663);
if(cljs.core.keyword_identical_QMARK_(result__13607__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13607__auto__;
}
break;
}
}catch (e15667){if((e15667 instanceof Object)){
var ex__13608__auto__ = e15667;
var statearr_15668_15828 = state_15663;
(statearr_15668_15828[(5)] = ex__13608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15663);

return cljs.core.cst$kw$recur;
} else {
throw e15667;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13606__auto__,cljs.core.cst$kw$recur)){
var G__15829 = state_15663;
state_15663 = G__15829;
continue;
} else {
return ret_value__13606__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13605__auto__ = function(state_15663){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13605__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13605__auto____1.call(this,state_15663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13605__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13605__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13605__auto__;
})()
;})(switch__13604__auto__,c__13621__auto___15827,res,vec__15656,v,p,job,jobs,results))
})();
var state__13623__auto__ = (function (){var statearr_15669 = (f__13622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13622__auto__.cljs$core$IFn$_invoke$arity$0() : f__13622__auto__.call(null));
(statearr_15669[(6)] = c__13621__auto___15827);

return statearr_15669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13623__auto__);
});})(c__13621__auto___15827,res,vec__15656,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15670){
var vec__15671 = p__15670;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15671,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15671,(1),null);
var job = vec__15671;
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
var n__4607__auto___15830 = n;
var __15831 = (0);
while(true){
if((__15831 < n__4607__auto___15830)){
var G__15674_15832 = type;
var G__15674_15833__$1 = (((G__15674_15832 instanceof cljs.core.Keyword))?G__15674_15832.fqn:null);
switch (G__15674_15833__$1) {
case "compute":
var c__13621__auto___15835 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15831,c__13621__auto___15835,G__15674_15832,G__15674_15833__$1,n__4607__auto___15830,jobs,results,process,async){
return (function (){
var f__13622__auto__ = (function (){var switch__13604__auto__ = ((function (__15831,c__13621__auto___15835,G__15674_15832,G__15674_15833__$1,n__4607__auto___15830,jobs,results,process,async){
return (function (state_15687){
var state_val_15688 = (state_15687[(1)]);
if((state_val_15688 === (1))){
var state_15687__$1 = state_15687;
var statearr_15689_15836 = state_15687__$1;
(statearr_15689_15836[(2)] = null);

(statearr_15689_15836[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15688 === (2))){
var state_15687__$1 = state_15687;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15687__$1,(4),jobs);
} else {
if((state_val_15688 === (3))){
var inst_15685 = (state_15687[(2)]);
var state_15687__$1 = state_15687;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15687__$1,inst_15685);
} else {
if((state_val_15688 === (4))){
var inst_15677 = (state_15687[(2)]);
var inst_15678 = process(inst_15677);
var state_15687__$1 = state_15687;
if(cljs.core.truth_(inst_15678)){
var statearr_15690_15837 = state_15687__$1;
(statearr_15690_15837[(1)] = (5));

} else {
var statearr_15691_15838 = state_15687__$1;
(statearr_15691_15838[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15688 === (5))){
var state_15687__$1 = state_15687;
var statearr_15692_15839 = state_15687__$1;
(statearr_15692_15839[(2)] = null);

(statearr_15692_15839[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15688 === (6))){
var state_15687__$1 = state_15687;
var statearr_15693_15840 = state_15687__$1;
(statearr_15693_15840[(2)] = null);

(statearr_15693_15840[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15688 === (7))){
var inst_15683 = (state_15687[(2)]);
var state_15687__$1 = state_15687;
var statearr_15694_15841 = state_15687__$1;
(statearr_15694_15841[(2)] = inst_15683);

(statearr_15694_15841[(1)] = (3));


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
});})(__15831,c__13621__auto___15835,G__15674_15832,G__15674_15833__$1,n__4607__auto___15830,jobs,results,process,async))
;
return ((function (__15831,switch__13604__auto__,c__13621__auto___15835,G__15674_15832,G__15674_15833__$1,n__4607__auto___15830,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13605__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13605__auto____0 = (function (){
var statearr_15695 = [null,null,null,null,null,null,null];
(statearr_15695[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13605__auto__);

(statearr_15695[(1)] = (1));

return statearr_15695;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13605__auto____1 = (function (state_15687){
while(true){
var ret_value__13606__auto__ = (function (){try{while(true){
var result__13607__auto__ = switch__13604__auto__(state_15687);
if(cljs.core.keyword_identical_QMARK_(result__13607__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13607__auto__;
}
break;
}
}catch (e15696){if((e15696 instanceof Object)){
var ex__13608__auto__ = e15696;
var statearr_15697_15842 = state_15687;
(statearr_15697_15842[(5)] = ex__13608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15687);

return cljs.core.cst$kw$recur;
} else {
throw e15696;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13606__auto__,cljs.core.cst$kw$recur)){
var G__15843 = state_15687;
state_15687 = G__15843;
continue;
} else {
return ret_value__13606__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13605__auto__ = function(state_15687){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13605__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13605__auto____1.call(this,state_15687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13605__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13605__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13605__auto__;
})()
;})(__15831,switch__13604__auto__,c__13621__auto___15835,G__15674_15832,G__15674_15833__$1,n__4607__auto___15830,jobs,results,process,async))
})();
var state__13623__auto__ = (function (){var statearr_15698 = (f__13622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13622__auto__.cljs$core$IFn$_invoke$arity$0() : f__13622__auto__.call(null));
(statearr_15698[(6)] = c__13621__auto___15835);

return statearr_15698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13623__auto__);
});})(__15831,c__13621__auto___15835,G__15674_15832,G__15674_15833__$1,n__4607__auto___15830,jobs,results,process,async))
);


break;
case "async":
var c__13621__auto___15844 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15831,c__13621__auto___15844,G__15674_15832,G__15674_15833__$1,n__4607__auto___15830,jobs,results,process,async){
return (function (){
var f__13622__auto__ = (function (){var switch__13604__auto__ = ((function (__15831,c__13621__auto___15844,G__15674_15832,G__15674_15833__$1,n__4607__auto___15830,jobs,results,process,async){
return (function (state_15711){
var state_val_15712 = (state_15711[(1)]);
if((state_val_15712 === (1))){
var state_15711__$1 = state_15711;
var statearr_15713_15845 = state_15711__$1;
(statearr_15713_15845[(2)] = null);

(statearr_15713_15845[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15712 === (2))){
var state_15711__$1 = state_15711;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15711__$1,(4),jobs);
} else {
if((state_val_15712 === (3))){
var inst_15709 = (state_15711[(2)]);
var state_15711__$1 = state_15711;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15711__$1,inst_15709);
} else {
if((state_val_15712 === (4))){
var inst_15701 = (state_15711[(2)]);
var inst_15702 = async(inst_15701);
var state_15711__$1 = state_15711;
if(cljs.core.truth_(inst_15702)){
var statearr_15714_15846 = state_15711__$1;
(statearr_15714_15846[(1)] = (5));

} else {
var statearr_15715_15847 = state_15711__$1;
(statearr_15715_15847[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15712 === (5))){
var state_15711__$1 = state_15711;
var statearr_15716_15848 = state_15711__$1;
(statearr_15716_15848[(2)] = null);

(statearr_15716_15848[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15712 === (6))){
var state_15711__$1 = state_15711;
var statearr_15717_15849 = state_15711__$1;
(statearr_15717_15849[(2)] = null);

(statearr_15717_15849[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15712 === (7))){
var inst_15707 = (state_15711[(2)]);
var state_15711__$1 = state_15711;
var statearr_15718_15850 = state_15711__$1;
(statearr_15718_15850[(2)] = inst_15707);

(statearr_15718_15850[(1)] = (3));


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
});})(__15831,c__13621__auto___15844,G__15674_15832,G__15674_15833__$1,n__4607__auto___15830,jobs,results,process,async))
;
return ((function (__15831,switch__13604__auto__,c__13621__auto___15844,G__15674_15832,G__15674_15833__$1,n__4607__auto___15830,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13605__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13605__auto____0 = (function (){
var statearr_15719 = [null,null,null,null,null,null,null];
(statearr_15719[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13605__auto__);

(statearr_15719[(1)] = (1));

return statearr_15719;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13605__auto____1 = (function (state_15711){
while(true){
var ret_value__13606__auto__ = (function (){try{while(true){
var result__13607__auto__ = switch__13604__auto__(state_15711);
if(cljs.core.keyword_identical_QMARK_(result__13607__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13607__auto__;
}
break;
}
}catch (e15720){if((e15720 instanceof Object)){
var ex__13608__auto__ = e15720;
var statearr_15721_15851 = state_15711;
(statearr_15721_15851[(5)] = ex__13608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15711);

return cljs.core.cst$kw$recur;
} else {
throw e15720;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13606__auto__,cljs.core.cst$kw$recur)){
var G__15852 = state_15711;
state_15711 = G__15852;
continue;
} else {
return ret_value__13606__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13605__auto__ = function(state_15711){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13605__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13605__auto____1.call(this,state_15711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13605__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13605__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13605__auto__;
})()
;})(__15831,switch__13604__auto__,c__13621__auto___15844,G__15674_15832,G__15674_15833__$1,n__4607__auto___15830,jobs,results,process,async))
})();
var state__13623__auto__ = (function (){var statearr_15722 = (f__13622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13622__auto__.cljs$core$IFn$_invoke$arity$0() : f__13622__auto__.call(null));
(statearr_15722[(6)] = c__13621__auto___15844);

return statearr_15722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13623__auto__);
});})(__15831,c__13621__auto___15844,G__15674_15832,G__15674_15833__$1,n__4607__auto___15830,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15674_15833__$1)].join('')));

}

var G__15853 = (__15831 + (1));
__15831 = G__15853;
continue;
} else {
}
break;
}

var c__13621__auto___15854 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13621__auto___15854,jobs,results,process,async){
return (function (){
var f__13622__auto__ = (function (){var switch__13604__auto__ = ((function (c__13621__auto___15854,jobs,results,process,async){
return (function (state_15744){
var state_val_15745 = (state_15744[(1)]);
if((state_val_15745 === (7))){
var inst_15740 = (state_15744[(2)]);
var state_15744__$1 = state_15744;
var statearr_15746_15855 = state_15744__$1;
(statearr_15746_15855[(2)] = inst_15740);

(statearr_15746_15855[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15745 === (1))){
var state_15744__$1 = state_15744;
var statearr_15747_15856 = state_15744__$1;
(statearr_15747_15856[(2)] = null);

(statearr_15747_15856[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15745 === (4))){
var inst_15725 = (state_15744[(7)]);
var inst_15725__$1 = (state_15744[(2)]);
var inst_15726 = (inst_15725__$1 == null);
var state_15744__$1 = (function (){var statearr_15748 = state_15744;
(statearr_15748[(7)] = inst_15725__$1);

return statearr_15748;
})();
if(cljs.core.truth_(inst_15726)){
var statearr_15749_15857 = state_15744__$1;
(statearr_15749_15857[(1)] = (5));

} else {
var statearr_15750_15858 = state_15744__$1;
(statearr_15750_15858[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15745 === (6))){
var inst_15725 = (state_15744[(7)]);
var inst_15730 = (state_15744[(8)]);
var inst_15730__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15731 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15732 = [inst_15725,inst_15730__$1];
var inst_15733 = (new cljs.core.PersistentVector(null,2,(5),inst_15731,inst_15732,null));
var state_15744__$1 = (function (){var statearr_15751 = state_15744;
(statearr_15751[(8)] = inst_15730__$1);

return statearr_15751;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15744__$1,(8),jobs,inst_15733);
} else {
if((state_val_15745 === (3))){
var inst_15742 = (state_15744[(2)]);
var state_15744__$1 = state_15744;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15744__$1,inst_15742);
} else {
if((state_val_15745 === (2))){
var state_15744__$1 = state_15744;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15744__$1,(4),from);
} else {
if((state_val_15745 === (9))){
var inst_15737 = (state_15744[(2)]);
var state_15744__$1 = (function (){var statearr_15752 = state_15744;
(statearr_15752[(9)] = inst_15737);

return statearr_15752;
})();
var statearr_15753_15859 = state_15744__$1;
(statearr_15753_15859[(2)] = null);

(statearr_15753_15859[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15745 === (5))){
var inst_15728 = cljs.core.async.close_BANG_(jobs);
var state_15744__$1 = state_15744;
var statearr_15754_15860 = state_15744__$1;
(statearr_15754_15860[(2)] = inst_15728);

(statearr_15754_15860[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15745 === (8))){
var inst_15730 = (state_15744[(8)]);
var inst_15735 = (state_15744[(2)]);
var state_15744__$1 = (function (){var statearr_15755 = state_15744;
(statearr_15755[(10)] = inst_15735);

return statearr_15755;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15744__$1,(9),results,inst_15730);
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
});})(c__13621__auto___15854,jobs,results,process,async))
;
return ((function (switch__13604__auto__,c__13621__auto___15854,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13605__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13605__auto____0 = (function (){
var statearr_15756 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15756[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13605__auto__);

(statearr_15756[(1)] = (1));

return statearr_15756;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13605__auto____1 = (function (state_15744){
while(true){
var ret_value__13606__auto__ = (function (){try{while(true){
var result__13607__auto__ = switch__13604__auto__(state_15744);
if(cljs.core.keyword_identical_QMARK_(result__13607__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13607__auto__;
}
break;
}
}catch (e15757){if((e15757 instanceof Object)){
var ex__13608__auto__ = e15757;
var statearr_15758_15861 = state_15744;
(statearr_15758_15861[(5)] = ex__13608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15744);

return cljs.core.cst$kw$recur;
} else {
throw e15757;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13606__auto__,cljs.core.cst$kw$recur)){
var G__15862 = state_15744;
state_15744 = G__15862;
continue;
} else {
return ret_value__13606__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13605__auto__ = function(state_15744){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13605__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13605__auto____1.call(this,state_15744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13605__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13605__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13605__auto__;
})()
;})(switch__13604__auto__,c__13621__auto___15854,jobs,results,process,async))
})();
var state__13623__auto__ = (function (){var statearr_15759 = (f__13622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13622__auto__.cljs$core$IFn$_invoke$arity$0() : f__13622__auto__.call(null));
(statearr_15759[(6)] = c__13621__auto___15854);

return statearr_15759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13623__auto__);
});})(c__13621__auto___15854,jobs,results,process,async))
);


var c__13621__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13621__auto__,jobs,results,process,async){
return (function (){
var f__13622__auto__ = (function (){var switch__13604__auto__ = ((function (c__13621__auto__,jobs,results,process,async){
return (function (state_15797){
var state_val_15798 = (state_15797[(1)]);
if((state_val_15798 === (7))){
var inst_15793 = (state_15797[(2)]);
var state_15797__$1 = state_15797;
var statearr_15799_15863 = state_15797__$1;
(statearr_15799_15863[(2)] = inst_15793);

(statearr_15799_15863[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15798 === (20))){
var state_15797__$1 = state_15797;
var statearr_15800_15864 = state_15797__$1;
(statearr_15800_15864[(2)] = null);

(statearr_15800_15864[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15798 === (1))){
var state_15797__$1 = state_15797;
var statearr_15801_15865 = state_15797__$1;
(statearr_15801_15865[(2)] = null);

(statearr_15801_15865[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15798 === (4))){
var inst_15762 = (state_15797[(7)]);
var inst_15762__$1 = (state_15797[(2)]);
var inst_15763 = (inst_15762__$1 == null);
var state_15797__$1 = (function (){var statearr_15802 = state_15797;
(statearr_15802[(7)] = inst_15762__$1);

return statearr_15802;
})();
if(cljs.core.truth_(inst_15763)){
var statearr_15803_15866 = state_15797__$1;
(statearr_15803_15866[(1)] = (5));

} else {
var statearr_15804_15867 = state_15797__$1;
(statearr_15804_15867[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15798 === (15))){
var inst_15775 = (state_15797[(8)]);
var state_15797__$1 = state_15797;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15797__$1,(18),to,inst_15775);
} else {
if((state_val_15798 === (21))){
var inst_15788 = (state_15797[(2)]);
var state_15797__$1 = state_15797;
var statearr_15805_15868 = state_15797__$1;
(statearr_15805_15868[(2)] = inst_15788);

(statearr_15805_15868[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15798 === (13))){
var inst_15790 = (state_15797[(2)]);
var state_15797__$1 = (function (){var statearr_15806 = state_15797;
(statearr_15806[(9)] = inst_15790);

return statearr_15806;
})();
var statearr_15807_15869 = state_15797__$1;
(statearr_15807_15869[(2)] = null);

(statearr_15807_15869[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15798 === (6))){
var inst_15762 = (state_15797[(7)]);
var state_15797__$1 = state_15797;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15797__$1,(11),inst_15762);
} else {
if((state_val_15798 === (17))){
var inst_15783 = (state_15797[(2)]);
var state_15797__$1 = state_15797;
if(cljs.core.truth_(inst_15783)){
var statearr_15808_15870 = state_15797__$1;
(statearr_15808_15870[(1)] = (19));

} else {
var statearr_15809_15871 = state_15797__$1;
(statearr_15809_15871[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15798 === (3))){
var inst_15795 = (state_15797[(2)]);
var state_15797__$1 = state_15797;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15797__$1,inst_15795);
} else {
if((state_val_15798 === (12))){
var inst_15772 = (state_15797[(10)]);
var state_15797__$1 = state_15797;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15797__$1,(14),inst_15772);
} else {
if((state_val_15798 === (2))){
var state_15797__$1 = state_15797;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15797__$1,(4),results);
} else {
if((state_val_15798 === (19))){
var state_15797__$1 = state_15797;
var statearr_15810_15872 = state_15797__$1;
(statearr_15810_15872[(2)] = null);

(statearr_15810_15872[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15798 === (11))){
var inst_15772 = (state_15797[(2)]);
var state_15797__$1 = (function (){var statearr_15811 = state_15797;
(statearr_15811[(10)] = inst_15772);

return statearr_15811;
})();
var statearr_15812_15873 = state_15797__$1;
(statearr_15812_15873[(2)] = null);

(statearr_15812_15873[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15798 === (9))){
var state_15797__$1 = state_15797;
var statearr_15813_15874 = state_15797__$1;
(statearr_15813_15874[(2)] = null);

(statearr_15813_15874[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15798 === (5))){
var state_15797__$1 = state_15797;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15814_15875 = state_15797__$1;
(statearr_15814_15875[(1)] = (8));

} else {
var statearr_15815_15876 = state_15797__$1;
(statearr_15815_15876[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15798 === (14))){
var inst_15777 = (state_15797[(11)]);
var inst_15775 = (state_15797[(8)]);
var inst_15775__$1 = (state_15797[(2)]);
var inst_15776 = (inst_15775__$1 == null);
var inst_15777__$1 = cljs.core.not(inst_15776);
var state_15797__$1 = (function (){var statearr_15816 = state_15797;
(statearr_15816[(11)] = inst_15777__$1);

(statearr_15816[(8)] = inst_15775__$1);

return statearr_15816;
})();
if(inst_15777__$1){
var statearr_15817_15877 = state_15797__$1;
(statearr_15817_15877[(1)] = (15));

} else {
var statearr_15818_15878 = state_15797__$1;
(statearr_15818_15878[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15798 === (16))){
var inst_15777 = (state_15797[(11)]);
var state_15797__$1 = state_15797;
var statearr_15819_15879 = state_15797__$1;
(statearr_15819_15879[(2)] = inst_15777);

(statearr_15819_15879[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15798 === (10))){
var inst_15769 = (state_15797[(2)]);
var state_15797__$1 = state_15797;
var statearr_15820_15880 = state_15797__$1;
(statearr_15820_15880[(2)] = inst_15769);

(statearr_15820_15880[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15798 === (18))){
var inst_15780 = (state_15797[(2)]);
var state_15797__$1 = state_15797;
var statearr_15821_15881 = state_15797__$1;
(statearr_15821_15881[(2)] = inst_15780);

(statearr_15821_15881[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15798 === (8))){
var inst_15766 = cljs.core.async.close_BANG_(to);
var state_15797__$1 = state_15797;
var statearr_15822_15882 = state_15797__$1;
(statearr_15822_15882[(2)] = inst_15766);

(statearr_15822_15882[(1)] = (10));


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
});})(c__13621__auto__,jobs,results,process,async))
;
return ((function (switch__13604__auto__,c__13621__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13605__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13605__auto____0 = (function (){
var statearr_15823 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15823[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13605__auto__);

(statearr_15823[(1)] = (1));

return statearr_15823;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13605__auto____1 = (function (state_15797){
while(true){
var ret_value__13606__auto__ = (function (){try{while(true){
var result__13607__auto__ = switch__13604__auto__(state_15797);
if(cljs.core.keyword_identical_QMARK_(result__13607__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13607__auto__;
}
break;
}
}catch (e15824){if((e15824 instanceof Object)){
var ex__13608__auto__ = e15824;
var statearr_15825_15883 = state_15797;
(statearr_15825_15883[(5)] = ex__13608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15797);

return cljs.core.cst$kw$recur;
} else {
throw e15824;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13606__auto__,cljs.core.cst$kw$recur)){
var G__15884 = state_15797;
state_15797 = G__15884;
continue;
} else {
return ret_value__13606__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13605__auto__ = function(state_15797){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13605__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13605__auto____1.call(this,state_15797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13605__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13605__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13605__auto__;
})()
;})(switch__13604__auto__,c__13621__auto__,jobs,results,process,async))
})();
var state__13623__auto__ = (function (){var statearr_15826 = (f__13622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13622__auto__.cljs$core$IFn$_invoke$arity$0() : f__13622__auto__.call(null));
(statearr_15826[(6)] = c__13621__auto__);

return statearr_15826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13623__auto__);
});})(c__13621__auto__,jobs,results,process,async))
);

return c__13621__auto__;
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
var G__15886 = arguments.length;
switch (G__15886) {
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
var G__15889 = arguments.length;
switch (G__15889) {
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
var G__15892 = arguments.length;
switch (G__15892) {
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
var c__13621__auto___15941 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13621__auto___15941,tc,fc){
return (function (){
var f__13622__auto__ = (function (){var switch__13604__auto__ = ((function (c__13621__auto___15941,tc,fc){
return (function (state_15918){
var state_val_15919 = (state_15918[(1)]);
if((state_val_15919 === (7))){
var inst_15914 = (state_15918[(2)]);
var state_15918__$1 = state_15918;
var statearr_15920_15942 = state_15918__$1;
(statearr_15920_15942[(2)] = inst_15914);

(statearr_15920_15942[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15919 === (1))){
var state_15918__$1 = state_15918;
var statearr_15921_15943 = state_15918__$1;
(statearr_15921_15943[(2)] = null);

(statearr_15921_15943[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15919 === (4))){
var inst_15895 = (state_15918[(7)]);
var inst_15895__$1 = (state_15918[(2)]);
var inst_15896 = (inst_15895__$1 == null);
var state_15918__$1 = (function (){var statearr_15922 = state_15918;
(statearr_15922[(7)] = inst_15895__$1);

return statearr_15922;
})();
if(cljs.core.truth_(inst_15896)){
var statearr_15923_15944 = state_15918__$1;
(statearr_15923_15944[(1)] = (5));

} else {
var statearr_15924_15945 = state_15918__$1;
(statearr_15924_15945[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15919 === (13))){
var state_15918__$1 = state_15918;
var statearr_15925_15946 = state_15918__$1;
(statearr_15925_15946[(2)] = null);

(statearr_15925_15946[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15919 === (6))){
var inst_15895 = (state_15918[(7)]);
var inst_15901 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15895) : p.call(null,inst_15895));
var state_15918__$1 = state_15918;
if(cljs.core.truth_(inst_15901)){
var statearr_15926_15947 = state_15918__$1;
(statearr_15926_15947[(1)] = (9));

} else {
var statearr_15927_15948 = state_15918__$1;
(statearr_15927_15948[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15919 === (3))){
var inst_15916 = (state_15918[(2)]);
var state_15918__$1 = state_15918;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15918__$1,inst_15916);
} else {
if((state_val_15919 === (12))){
var state_15918__$1 = state_15918;
var statearr_15928_15949 = state_15918__$1;
(statearr_15928_15949[(2)] = null);

(statearr_15928_15949[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15919 === (2))){
var state_15918__$1 = state_15918;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15918__$1,(4),ch);
} else {
if((state_val_15919 === (11))){
var inst_15895 = (state_15918[(7)]);
var inst_15905 = (state_15918[(2)]);
var state_15918__$1 = state_15918;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15918__$1,(8),inst_15905,inst_15895);
} else {
if((state_val_15919 === (9))){
var state_15918__$1 = state_15918;
var statearr_15929_15950 = state_15918__$1;
(statearr_15929_15950[(2)] = tc);

(statearr_15929_15950[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15919 === (5))){
var inst_15898 = cljs.core.async.close_BANG_(tc);
var inst_15899 = cljs.core.async.close_BANG_(fc);
var state_15918__$1 = (function (){var statearr_15930 = state_15918;
(statearr_15930[(8)] = inst_15898);

return statearr_15930;
})();
var statearr_15931_15951 = state_15918__$1;
(statearr_15931_15951[(2)] = inst_15899);

(statearr_15931_15951[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15919 === (14))){
var inst_15912 = (state_15918[(2)]);
var state_15918__$1 = state_15918;
var statearr_15932_15952 = state_15918__$1;
(statearr_15932_15952[(2)] = inst_15912);

(statearr_15932_15952[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15919 === (10))){
var state_15918__$1 = state_15918;
var statearr_15933_15953 = state_15918__$1;
(statearr_15933_15953[(2)] = fc);

(statearr_15933_15953[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15919 === (8))){
var inst_15907 = (state_15918[(2)]);
var state_15918__$1 = state_15918;
if(cljs.core.truth_(inst_15907)){
var statearr_15934_15954 = state_15918__$1;
(statearr_15934_15954[(1)] = (12));

} else {
var statearr_15935_15955 = state_15918__$1;
(statearr_15935_15955[(1)] = (13));

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
});})(c__13621__auto___15941,tc,fc))
;
return ((function (switch__13604__auto__,c__13621__auto___15941,tc,fc){
return (function() {
var cljs$core$async$state_machine__13605__auto__ = null;
var cljs$core$async$state_machine__13605__auto____0 = (function (){
var statearr_15936 = [null,null,null,null,null,null,null,null,null];
(statearr_15936[(0)] = cljs$core$async$state_machine__13605__auto__);

(statearr_15936[(1)] = (1));

return statearr_15936;
});
var cljs$core$async$state_machine__13605__auto____1 = (function (state_15918){
while(true){
var ret_value__13606__auto__ = (function (){try{while(true){
var result__13607__auto__ = switch__13604__auto__(state_15918);
if(cljs.core.keyword_identical_QMARK_(result__13607__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13607__auto__;
}
break;
}
}catch (e15937){if((e15937 instanceof Object)){
var ex__13608__auto__ = e15937;
var statearr_15938_15956 = state_15918;
(statearr_15938_15956[(5)] = ex__13608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15918);

return cljs.core.cst$kw$recur;
} else {
throw e15937;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13606__auto__,cljs.core.cst$kw$recur)){
var G__15957 = state_15918;
state_15918 = G__15957;
continue;
} else {
return ret_value__13606__auto__;
}
break;
}
});
cljs$core$async$state_machine__13605__auto__ = function(state_15918){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13605__auto____1.call(this,state_15918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13605__auto____0;
cljs$core$async$state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13605__auto____1;
return cljs$core$async$state_machine__13605__auto__;
})()
;})(switch__13604__auto__,c__13621__auto___15941,tc,fc))
})();
var state__13623__auto__ = (function (){var statearr_15939 = (f__13622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13622__auto__.cljs$core$IFn$_invoke$arity$0() : f__13622__auto__.call(null));
(statearr_15939[(6)] = c__13621__auto___15941);

return statearr_15939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13623__auto__);
});})(c__13621__auto___15941,tc,fc))
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
var c__13621__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13621__auto__){
return (function (){
var f__13622__auto__ = (function (){var switch__13604__auto__ = ((function (c__13621__auto__){
return (function (state_15978){
var state_val_15979 = (state_15978[(1)]);
if((state_val_15979 === (7))){
var inst_15974 = (state_15978[(2)]);
var state_15978__$1 = state_15978;
var statearr_15980_15998 = state_15978__$1;
(statearr_15980_15998[(2)] = inst_15974);

(statearr_15980_15998[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15979 === (1))){
var inst_15958 = init;
var state_15978__$1 = (function (){var statearr_15981 = state_15978;
(statearr_15981[(7)] = inst_15958);

return statearr_15981;
})();
var statearr_15982_15999 = state_15978__$1;
(statearr_15982_15999[(2)] = null);

(statearr_15982_15999[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15979 === (4))){
var inst_15961 = (state_15978[(8)]);
var inst_15961__$1 = (state_15978[(2)]);
var inst_15962 = (inst_15961__$1 == null);
var state_15978__$1 = (function (){var statearr_15983 = state_15978;
(statearr_15983[(8)] = inst_15961__$1);

return statearr_15983;
})();
if(cljs.core.truth_(inst_15962)){
var statearr_15984_16000 = state_15978__$1;
(statearr_15984_16000[(1)] = (5));

} else {
var statearr_15985_16001 = state_15978__$1;
(statearr_15985_16001[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15979 === (6))){
var inst_15958 = (state_15978[(7)]);
var inst_15965 = (state_15978[(9)]);
var inst_15961 = (state_15978[(8)]);
var inst_15965__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15958,inst_15961) : f.call(null,inst_15958,inst_15961));
var inst_15966 = cljs.core.reduced_QMARK_(inst_15965__$1);
var state_15978__$1 = (function (){var statearr_15986 = state_15978;
(statearr_15986[(9)] = inst_15965__$1);

return statearr_15986;
})();
if(inst_15966){
var statearr_15987_16002 = state_15978__$1;
(statearr_15987_16002[(1)] = (8));

} else {
var statearr_15988_16003 = state_15978__$1;
(statearr_15988_16003[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15979 === (3))){
var inst_15976 = (state_15978[(2)]);
var state_15978__$1 = state_15978;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15978__$1,inst_15976);
} else {
if((state_val_15979 === (2))){
var state_15978__$1 = state_15978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15978__$1,(4),ch);
} else {
if((state_val_15979 === (9))){
var inst_15965 = (state_15978[(9)]);
var inst_15958 = inst_15965;
var state_15978__$1 = (function (){var statearr_15989 = state_15978;
(statearr_15989[(7)] = inst_15958);

return statearr_15989;
})();
var statearr_15990_16004 = state_15978__$1;
(statearr_15990_16004[(2)] = null);

(statearr_15990_16004[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15979 === (5))){
var inst_15958 = (state_15978[(7)]);
var state_15978__$1 = state_15978;
var statearr_15991_16005 = state_15978__$1;
(statearr_15991_16005[(2)] = inst_15958);

(statearr_15991_16005[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15979 === (10))){
var inst_15972 = (state_15978[(2)]);
var state_15978__$1 = state_15978;
var statearr_15992_16006 = state_15978__$1;
(statearr_15992_16006[(2)] = inst_15972);

(statearr_15992_16006[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15979 === (8))){
var inst_15965 = (state_15978[(9)]);
var inst_15968 = cljs.core.deref(inst_15965);
var state_15978__$1 = state_15978;
var statearr_15993_16007 = state_15978__$1;
(statearr_15993_16007[(2)] = inst_15968);

(statearr_15993_16007[(1)] = (10));


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
});})(c__13621__auto__))
;
return ((function (switch__13604__auto__,c__13621__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__13605__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13605__auto____0 = (function (){
var statearr_15994 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15994[(0)] = cljs$core$async$reduce_$_state_machine__13605__auto__);

(statearr_15994[(1)] = (1));

return statearr_15994;
});
var cljs$core$async$reduce_$_state_machine__13605__auto____1 = (function (state_15978){
while(true){
var ret_value__13606__auto__ = (function (){try{while(true){
var result__13607__auto__ = switch__13604__auto__(state_15978);
if(cljs.core.keyword_identical_QMARK_(result__13607__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13607__auto__;
}
break;
}
}catch (e15995){if((e15995 instanceof Object)){
var ex__13608__auto__ = e15995;
var statearr_15996_16008 = state_15978;
(statearr_15996_16008[(5)] = ex__13608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15978);

return cljs.core.cst$kw$recur;
} else {
throw e15995;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13606__auto__,cljs.core.cst$kw$recur)){
var G__16009 = state_15978;
state_15978 = G__16009;
continue;
} else {
return ret_value__13606__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13605__auto__ = function(state_15978){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13605__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13605__auto____1.call(this,state_15978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13605__auto____0;
cljs$core$async$reduce_$_state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13605__auto____1;
return cljs$core$async$reduce_$_state_machine__13605__auto__;
})()
;})(switch__13604__auto__,c__13621__auto__))
})();
var state__13623__auto__ = (function (){var statearr_15997 = (f__13622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13622__auto__.cljs$core$IFn$_invoke$arity$0() : f__13622__auto__.call(null));
(statearr_15997[(6)] = c__13621__auto__);

return statearr_15997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13623__auto__);
});})(c__13621__auto__))
);

return c__13621__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__13621__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13621__auto__,f__$1){
return (function (){
var f__13622__auto__ = (function (){var switch__13604__auto__ = ((function (c__13621__auto__,f__$1){
return (function (state_16015){
var state_val_16016 = (state_16015[(1)]);
if((state_val_16016 === (1))){
var inst_16010 = cljs.core.async.reduce(f__$1,init,ch);
var state_16015__$1 = state_16015;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16015__$1,(2),inst_16010);
} else {
if((state_val_16016 === (2))){
var inst_16012 = (state_16015[(2)]);
var inst_16013 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16012) : f__$1.call(null,inst_16012));
var state_16015__$1 = state_16015;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16015__$1,inst_16013);
} else {
return null;
}
}
});})(c__13621__auto__,f__$1))
;
return ((function (switch__13604__auto__,c__13621__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__13605__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13605__auto____0 = (function (){
var statearr_16017 = [null,null,null,null,null,null,null];
(statearr_16017[(0)] = cljs$core$async$transduce_$_state_machine__13605__auto__);

(statearr_16017[(1)] = (1));

return statearr_16017;
});
var cljs$core$async$transduce_$_state_machine__13605__auto____1 = (function (state_16015){
while(true){
var ret_value__13606__auto__ = (function (){try{while(true){
var result__13607__auto__ = switch__13604__auto__(state_16015);
if(cljs.core.keyword_identical_QMARK_(result__13607__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13607__auto__;
}
break;
}
}catch (e16018){if((e16018 instanceof Object)){
var ex__13608__auto__ = e16018;
var statearr_16019_16021 = state_16015;
(statearr_16019_16021[(5)] = ex__13608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16015);

return cljs.core.cst$kw$recur;
} else {
throw e16018;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13606__auto__,cljs.core.cst$kw$recur)){
var G__16022 = state_16015;
state_16015 = G__16022;
continue;
} else {
return ret_value__13606__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13605__auto__ = function(state_16015){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13605__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13605__auto____1.call(this,state_16015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13605__auto____0;
cljs$core$async$transduce_$_state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13605__auto____1;
return cljs$core$async$transduce_$_state_machine__13605__auto__;
})()
;})(switch__13604__auto__,c__13621__auto__,f__$1))
})();
var state__13623__auto__ = (function (){var statearr_16020 = (f__13622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13622__auto__.cljs$core$IFn$_invoke$arity$0() : f__13622__auto__.call(null));
(statearr_16020[(6)] = c__13621__auto__);

return statearr_16020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13623__auto__);
});})(c__13621__auto__,f__$1))
);

return c__13621__auto__;
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
var G__16024 = arguments.length;
switch (G__16024) {
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
var c__13621__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13621__auto__){
return (function (){
var f__13622__auto__ = (function (){var switch__13604__auto__ = ((function (c__13621__auto__){
return (function (state_16049){
var state_val_16050 = (state_16049[(1)]);
if((state_val_16050 === (7))){
var inst_16031 = (state_16049[(2)]);
var state_16049__$1 = state_16049;
var statearr_16051_16072 = state_16049__$1;
(statearr_16051_16072[(2)] = inst_16031);

(statearr_16051_16072[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16050 === (1))){
var inst_16025 = cljs.core.seq(coll);
var inst_16026 = inst_16025;
var state_16049__$1 = (function (){var statearr_16052 = state_16049;
(statearr_16052[(7)] = inst_16026);

return statearr_16052;
})();
var statearr_16053_16073 = state_16049__$1;
(statearr_16053_16073[(2)] = null);

(statearr_16053_16073[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16050 === (4))){
var inst_16026 = (state_16049[(7)]);
var inst_16029 = cljs.core.first(inst_16026);
var state_16049__$1 = state_16049;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16049__$1,(7),ch,inst_16029);
} else {
if((state_val_16050 === (13))){
var inst_16043 = (state_16049[(2)]);
var state_16049__$1 = state_16049;
var statearr_16054_16074 = state_16049__$1;
(statearr_16054_16074[(2)] = inst_16043);

(statearr_16054_16074[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16050 === (6))){
var inst_16034 = (state_16049[(2)]);
var state_16049__$1 = state_16049;
if(cljs.core.truth_(inst_16034)){
var statearr_16055_16075 = state_16049__$1;
(statearr_16055_16075[(1)] = (8));

} else {
var statearr_16056_16076 = state_16049__$1;
(statearr_16056_16076[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16050 === (3))){
var inst_16047 = (state_16049[(2)]);
var state_16049__$1 = state_16049;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16049__$1,inst_16047);
} else {
if((state_val_16050 === (12))){
var state_16049__$1 = state_16049;
var statearr_16057_16077 = state_16049__$1;
(statearr_16057_16077[(2)] = null);

(statearr_16057_16077[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16050 === (2))){
var inst_16026 = (state_16049[(7)]);
var state_16049__$1 = state_16049;
if(cljs.core.truth_(inst_16026)){
var statearr_16058_16078 = state_16049__$1;
(statearr_16058_16078[(1)] = (4));

} else {
var statearr_16059_16079 = state_16049__$1;
(statearr_16059_16079[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16050 === (11))){
var inst_16040 = cljs.core.async.close_BANG_(ch);
var state_16049__$1 = state_16049;
var statearr_16060_16080 = state_16049__$1;
(statearr_16060_16080[(2)] = inst_16040);

(statearr_16060_16080[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16050 === (9))){
var state_16049__$1 = state_16049;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16061_16081 = state_16049__$1;
(statearr_16061_16081[(1)] = (11));

} else {
var statearr_16062_16082 = state_16049__$1;
(statearr_16062_16082[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16050 === (5))){
var inst_16026 = (state_16049[(7)]);
var state_16049__$1 = state_16049;
var statearr_16063_16083 = state_16049__$1;
(statearr_16063_16083[(2)] = inst_16026);

(statearr_16063_16083[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16050 === (10))){
var inst_16045 = (state_16049[(2)]);
var state_16049__$1 = state_16049;
var statearr_16064_16084 = state_16049__$1;
(statearr_16064_16084[(2)] = inst_16045);

(statearr_16064_16084[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16050 === (8))){
var inst_16026 = (state_16049[(7)]);
var inst_16036 = cljs.core.next(inst_16026);
var inst_16026__$1 = inst_16036;
var state_16049__$1 = (function (){var statearr_16065 = state_16049;
(statearr_16065[(7)] = inst_16026__$1);

return statearr_16065;
})();
var statearr_16066_16085 = state_16049__$1;
(statearr_16066_16085[(2)] = null);

(statearr_16066_16085[(1)] = (2));


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
});})(c__13621__auto__))
;
return ((function (switch__13604__auto__,c__13621__auto__){
return (function() {
var cljs$core$async$state_machine__13605__auto__ = null;
var cljs$core$async$state_machine__13605__auto____0 = (function (){
var statearr_16067 = [null,null,null,null,null,null,null,null];
(statearr_16067[(0)] = cljs$core$async$state_machine__13605__auto__);

(statearr_16067[(1)] = (1));

return statearr_16067;
});
var cljs$core$async$state_machine__13605__auto____1 = (function (state_16049){
while(true){
var ret_value__13606__auto__ = (function (){try{while(true){
var result__13607__auto__ = switch__13604__auto__(state_16049);
if(cljs.core.keyword_identical_QMARK_(result__13607__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13607__auto__;
}
break;
}
}catch (e16068){if((e16068 instanceof Object)){
var ex__13608__auto__ = e16068;
var statearr_16069_16086 = state_16049;
(statearr_16069_16086[(5)] = ex__13608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16049);

return cljs.core.cst$kw$recur;
} else {
throw e16068;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13606__auto__,cljs.core.cst$kw$recur)){
var G__16087 = state_16049;
state_16049 = G__16087;
continue;
} else {
return ret_value__13606__auto__;
}
break;
}
});
cljs$core$async$state_machine__13605__auto__ = function(state_16049){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13605__auto____1.call(this,state_16049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13605__auto____0;
cljs$core$async$state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13605__auto____1;
return cljs$core$async$state_machine__13605__auto__;
})()
;})(switch__13604__auto__,c__13621__auto__))
})();
var state__13623__auto__ = (function (){var statearr_16070 = (f__13622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13622__auto__.cljs$core$IFn$_invoke$arity$0() : f__13622__auto__.call(null));
(statearr_16070[(6)] = c__13621__auto__);

return statearr_16070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13623__auto__);
});})(c__13621__auto__))
);

return c__13621__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16088 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16088 = (function (ch,cs,meta16089){
this.ch = ch;
this.cs = cs;
this.meta16089 = meta16089;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16090,meta16089__$1){
var self__ = this;
var _16090__$1 = this;
return (new cljs.core.async.t_cljs$core$async16088(self__.ch,self__.cs,meta16089__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async16088.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16090){
var self__ = this;
var _16090__$1 = this;
return self__.meta16089;
});})(cs))
;

cljs.core.async.t_cljs$core$async16088.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16088.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async16088.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16088.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16088.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16088.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16088.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta16089], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async16088.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16088.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16088";

cljs.core.async.t_cljs$core$async16088.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async16088");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16088.
 */
cljs.core.async.__GT_t_cljs$core$async16088 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async16088(ch__$1,cs__$1,meta16089){
return (new cljs.core.async.t_cljs$core$async16088(ch__$1,cs__$1,meta16089));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async16088(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__13621__auto___16310 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13621__auto___16310,cs,m,dchan,dctr,done){
return (function (){
var f__13622__auto__ = (function (){var switch__13604__auto__ = ((function (c__13621__auto___16310,cs,m,dchan,dctr,done){
return (function (state_16225){
var state_val_16226 = (state_16225[(1)]);
if((state_val_16226 === (7))){
var inst_16221 = (state_16225[(2)]);
var state_16225__$1 = state_16225;
var statearr_16227_16311 = state_16225__$1;
(statearr_16227_16311[(2)] = inst_16221);

(statearr_16227_16311[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16226 === (20))){
var inst_16124 = (state_16225[(7)]);
var inst_16136 = cljs.core.first(inst_16124);
var inst_16137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16136,(0),null);
var inst_16138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16136,(1),null);
var state_16225__$1 = (function (){var statearr_16228 = state_16225;
(statearr_16228[(8)] = inst_16137);

return statearr_16228;
})();
if(cljs.core.truth_(inst_16138)){
var statearr_16229_16312 = state_16225__$1;
(statearr_16229_16312[(1)] = (22));

} else {
var statearr_16230_16313 = state_16225__$1;
(statearr_16230_16313[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16226 === (27))){
var inst_16168 = (state_16225[(9)]);
var inst_16093 = (state_16225[(10)]);
var inst_16166 = (state_16225[(11)]);
var inst_16173 = (state_16225[(12)]);
var inst_16173__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16166,inst_16168);
var inst_16174 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16173__$1,inst_16093,done);
var state_16225__$1 = (function (){var statearr_16231 = state_16225;
(statearr_16231[(12)] = inst_16173__$1);

return statearr_16231;
})();
if(cljs.core.truth_(inst_16174)){
var statearr_16232_16314 = state_16225__$1;
(statearr_16232_16314[(1)] = (30));

} else {
var statearr_16233_16315 = state_16225__$1;
(statearr_16233_16315[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16226 === (1))){
var state_16225__$1 = state_16225;
var statearr_16234_16316 = state_16225__$1;
(statearr_16234_16316[(2)] = null);

(statearr_16234_16316[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16226 === (24))){
var inst_16124 = (state_16225[(7)]);
var inst_16143 = (state_16225[(2)]);
var inst_16144 = cljs.core.next(inst_16124);
var inst_16102 = inst_16144;
var inst_16103 = null;
var inst_16104 = (0);
var inst_16105 = (0);
var state_16225__$1 = (function (){var statearr_16235 = state_16225;
(statearr_16235[(13)] = inst_16104);

(statearr_16235[(14)] = inst_16103);

(statearr_16235[(15)] = inst_16102);

(statearr_16235[(16)] = inst_16105);

(statearr_16235[(17)] = inst_16143);

return statearr_16235;
})();
var statearr_16236_16317 = state_16225__$1;
(statearr_16236_16317[(2)] = null);

(statearr_16236_16317[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16226 === (39))){
var state_16225__$1 = state_16225;
var statearr_16240_16318 = state_16225__$1;
(statearr_16240_16318[(2)] = null);

(statearr_16240_16318[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16226 === (4))){
var inst_16093 = (state_16225[(10)]);
var inst_16093__$1 = (state_16225[(2)]);
var inst_16094 = (inst_16093__$1 == null);
var state_16225__$1 = (function (){var statearr_16241 = state_16225;
(statearr_16241[(10)] = inst_16093__$1);

return statearr_16241;
})();
if(cljs.core.truth_(inst_16094)){
var statearr_16242_16319 = state_16225__$1;
(statearr_16242_16319[(1)] = (5));

} else {
var statearr_16243_16320 = state_16225__$1;
(statearr_16243_16320[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16226 === (15))){
var inst_16104 = (state_16225[(13)]);
var inst_16103 = (state_16225[(14)]);
var inst_16102 = (state_16225[(15)]);
var inst_16105 = (state_16225[(16)]);
var inst_16120 = (state_16225[(2)]);
var inst_16121 = (inst_16105 + (1));
var tmp16237 = inst_16104;
var tmp16238 = inst_16103;
var tmp16239 = inst_16102;
var inst_16102__$1 = tmp16239;
var inst_16103__$1 = tmp16238;
var inst_16104__$1 = tmp16237;
var inst_16105__$1 = inst_16121;
var state_16225__$1 = (function (){var statearr_16244 = state_16225;
(statearr_16244[(13)] = inst_16104__$1);

(statearr_16244[(14)] = inst_16103__$1);

(statearr_16244[(15)] = inst_16102__$1);

(statearr_16244[(16)] = inst_16105__$1);

(statearr_16244[(18)] = inst_16120);

return statearr_16244;
})();
var statearr_16245_16321 = state_16225__$1;
(statearr_16245_16321[(2)] = null);

(statearr_16245_16321[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16226 === (21))){
var inst_16147 = (state_16225[(2)]);
var state_16225__$1 = state_16225;
var statearr_16249_16322 = state_16225__$1;
(statearr_16249_16322[(2)] = inst_16147);

(statearr_16249_16322[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16226 === (31))){
var inst_16173 = (state_16225[(12)]);
var inst_16177 = done(null);
var inst_16178 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16173);
var state_16225__$1 = (function (){var statearr_16250 = state_16225;
(statearr_16250[(19)] = inst_16177);

return statearr_16250;
})();
var statearr_16251_16323 = state_16225__$1;
(statearr_16251_16323[(2)] = inst_16178);

(statearr_16251_16323[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16226 === (32))){
var inst_16168 = (state_16225[(9)]);
var inst_16166 = (state_16225[(11)]);
var inst_16165 = (state_16225[(20)]);
var inst_16167 = (state_16225[(21)]);
var inst_16180 = (state_16225[(2)]);
var inst_16181 = (inst_16168 + (1));
var tmp16246 = inst_16166;
var tmp16247 = inst_16165;
var tmp16248 = inst_16167;
var inst_16165__$1 = tmp16247;
var inst_16166__$1 = tmp16246;
var inst_16167__$1 = tmp16248;
var inst_16168__$1 = inst_16181;
var state_16225__$1 = (function (){var statearr_16252 = state_16225;
(statearr_16252[(9)] = inst_16168__$1);

(statearr_16252[(11)] = inst_16166__$1);

(statearr_16252[(22)] = inst_16180);

(statearr_16252[(20)] = inst_16165__$1);

(statearr_16252[(21)] = inst_16167__$1);

return statearr_16252;
})();
var statearr_16253_16324 = state_16225__$1;
(statearr_16253_16324[(2)] = null);

(statearr_16253_16324[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16226 === (40))){
var inst_16193 = (state_16225[(23)]);
var inst_16197 = done(null);
var inst_16198 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16193);
var state_16225__$1 = (function (){var statearr_16254 = state_16225;
(statearr_16254[(24)] = inst_16197);

return statearr_16254;
})();
var statearr_16255_16325 = state_16225__$1;
(statearr_16255_16325[(2)] = inst_16198);

(statearr_16255_16325[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16226 === (33))){
var inst_16184 = (state_16225[(25)]);
var inst_16186 = cljs.core.chunked_seq_QMARK_(inst_16184);
var state_16225__$1 = state_16225;
if(inst_16186){
var statearr_16256_16326 = state_16225__$1;
(statearr_16256_16326[(1)] = (36));

} else {
var statearr_16257_16327 = state_16225__$1;
(statearr_16257_16327[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16226 === (13))){
var inst_16114 = (state_16225[(26)]);
var inst_16117 = cljs.core.async.close_BANG_(inst_16114);
var state_16225__$1 = state_16225;
var statearr_16258_16328 = state_16225__$1;
(statearr_16258_16328[(2)] = inst_16117);

(statearr_16258_16328[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16226 === (22))){
var inst_16137 = (state_16225[(8)]);
var inst_16140 = cljs.core.async.close_BANG_(inst_16137);
var state_16225__$1 = state_16225;
var statearr_16259_16329 = state_16225__$1;
(statearr_16259_16329[(2)] = inst_16140);

(statearr_16259_16329[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16226 === (36))){
var inst_16184 = (state_16225[(25)]);
var inst_16188 = cljs.core.chunk_first(inst_16184);
var inst_16189 = cljs.core.chunk_rest(inst_16184);
var inst_16190 = cljs.core.count(inst_16188);
var inst_16165 = inst_16189;
var inst_16166 = inst_16188;
var inst_16167 = inst_16190;
var inst_16168 = (0);
var state_16225__$1 = (function (){var statearr_16260 = state_16225;
(statearr_16260[(9)] = inst_16168);

(statearr_16260[(11)] = inst_16166);

(statearr_16260[(20)] = inst_16165);

(statearr_16260[(21)] = inst_16167);

return statearr_16260;
})();
var statearr_16261_16330 = state_16225__$1;
(statearr_16261_16330[(2)] = null);

(statearr_16261_16330[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16226 === (41))){
var inst_16184 = (state_16225[(25)]);
var inst_16200 = (state_16225[(2)]);
var inst_16201 = cljs.core.next(inst_16184);
var inst_16165 = inst_16201;
var inst_16166 = null;
var inst_16167 = (0);
var inst_16168 = (0);
var state_16225__$1 = (function (){var statearr_16262 = state_16225;
(statearr_16262[(9)] = inst_16168);

(statearr_16262[(27)] = inst_16200);

(statearr_16262[(11)] = inst_16166);

(statearr_16262[(20)] = inst_16165);

(statearr_16262[(21)] = inst_16167);

return statearr_16262;
})();
var statearr_16263_16331 = state_16225__$1;
(statearr_16263_16331[(2)] = null);

(statearr_16263_16331[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16226 === (43))){
var state_16225__$1 = state_16225;
var statearr_16264_16332 = state_16225__$1;
(statearr_16264_16332[(2)] = null);

(statearr_16264_16332[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16226 === (29))){
var inst_16209 = (state_16225[(2)]);
var state_16225__$1 = state_16225;
var statearr_16265_16333 = state_16225__$1;
(statearr_16265_16333[(2)] = inst_16209);

(statearr_16265_16333[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16226 === (44))){
var inst_16218 = (state_16225[(2)]);
var state_16225__$1 = (function (){var statearr_16266 = state_16225;
(statearr_16266[(28)] = inst_16218);

return statearr_16266;
})();
var statearr_16267_16334 = state_16225__$1;
(statearr_16267_16334[(2)] = null);

(statearr_16267_16334[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16226 === (6))){
var inst_16157 = (state_16225[(29)]);
var inst_16156 = cljs.core.deref(cs);
var inst_16157__$1 = cljs.core.keys(inst_16156);
var inst_16158 = cljs.core.count(inst_16157__$1);
var inst_16159 = cljs.core.reset_BANG_(dctr,inst_16158);
var inst_16164 = cljs.core.seq(inst_16157__$1);
var inst_16165 = inst_16164;
var inst_16166 = null;
var inst_16167 = (0);
var inst_16168 = (0);
var state_16225__$1 = (function (){var statearr_16268 = state_16225;
(statearr_16268[(9)] = inst_16168);

(statearr_16268[(11)] = inst_16166);

(statearr_16268[(29)] = inst_16157__$1);

(statearr_16268[(30)] = inst_16159);

(statearr_16268[(20)] = inst_16165);

(statearr_16268[(21)] = inst_16167);

return statearr_16268;
})();
var statearr_16269_16335 = state_16225__$1;
(statearr_16269_16335[(2)] = null);

(statearr_16269_16335[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16226 === (28))){
var inst_16165 = (state_16225[(20)]);
var inst_16184 = (state_16225[(25)]);
var inst_16184__$1 = cljs.core.seq(inst_16165);
var state_16225__$1 = (function (){var statearr_16270 = state_16225;
(statearr_16270[(25)] = inst_16184__$1);

return statearr_16270;
})();
if(inst_16184__$1){
var statearr_16271_16336 = state_16225__$1;
(statearr_16271_16336[(1)] = (33));

} else {
var statearr_16272_16337 = state_16225__$1;
(statearr_16272_16337[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16226 === (25))){
var inst_16168 = (state_16225[(9)]);
var inst_16167 = (state_16225[(21)]);
var inst_16170 = (inst_16168 < inst_16167);
var inst_16171 = inst_16170;
var state_16225__$1 = state_16225;
if(cljs.core.truth_(inst_16171)){
var statearr_16273_16338 = state_16225__$1;
(statearr_16273_16338[(1)] = (27));

} else {
var statearr_16274_16339 = state_16225__$1;
(statearr_16274_16339[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16226 === (34))){
var state_16225__$1 = state_16225;
var statearr_16275_16340 = state_16225__$1;
(statearr_16275_16340[(2)] = null);

(statearr_16275_16340[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16226 === (17))){
var state_16225__$1 = state_16225;
var statearr_16276_16341 = state_16225__$1;
(statearr_16276_16341[(2)] = null);

(statearr_16276_16341[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16226 === (3))){
var inst_16223 = (state_16225[(2)]);
var state_16225__$1 = state_16225;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16225__$1,inst_16223);
} else {
if((state_val_16226 === (12))){
var inst_16152 = (state_16225[(2)]);
var state_16225__$1 = state_16225;
var statearr_16277_16342 = state_16225__$1;
(statearr_16277_16342[(2)] = inst_16152);

(statearr_16277_16342[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16226 === (2))){
var state_16225__$1 = state_16225;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16225__$1,(4),ch);
} else {
if((state_val_16226 === (23))){
var state_16225__$1 = state_16225;
var statearr_16278_16343 = state_16225__$1;
(statearr_16278_16343[(2)] = null);

(statearr_16278_16343[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16226 === (35))){
var inst_16207 = (state_16225[(2)]);
var state_16225__$1 = state_16225;
var statearr_16279_16344 = state_16225__$1;
(statearr_16279_16344[(2)] = inst_16207);

(statearr_16279_16344[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16226 === (19))){
var inst_16124 = (state_16225[(7)]);
var inst_16128 = cljs.core.chunk_first(inst_16124);
var inst_16129 = cljs.core.chunk_rest(inst_16124);
var inst_16130 = cljs.core.count(inst_16128);
var inst_16102 = inst_16129;
var inst_16103 = inst_16128;
var inst_16104 = inst_16130;
var inst_16105 = (0);
var state_16225__$1 = (function (){var statearr_16280 = state_16225;
(statearr_16280[(13)] = inst_16104);

(statearr_16280[(14)] = inst_16103);

(statearr_16280[(15)] = inst_16102);

(statearr_16280[(16)] = inst_16105);

return statearr_16280;
})();
var statearr_16281_16345 = state_16225__$1;
(statearr_16281_16345[(2)] = null);

(statearr_16281_16345[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16226 === (11))){
var inst_16102 = (state_16225[(15)]);
var inst_16124 = (state_16225[(7)]);
var inst_16124__$1 = cljs.core.seq(inst_16102);
var state_16225__$1 = (function (){var statearr_16282 = state_16225;
(statearr_16282[(7)] = inst_16124__$1);

return statearr_16282;
})();
if(inst_16124__$1){
var statearr_16283_16346 = state_16225__$1;
(statearr_16283_16346[(1)] = (16));

} else {
var statearr_16284_16347 = state_16225__$1;
(statearr_16284_16347[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16226 === (9))){
var inst_16154 = (state_16225[(2)]);
var state_16225__$1 = state_16225;
var statearr_16285_16348 = state_16225__$1;
(statearr_16285_16348[(2)] = inst_16154);

(statearr_16285_16348[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16226 === (5))){
var inst_16100 = cljs.core.deref(cs);
var inst_16101 = cljs.core.seq(inst_16100);
var inst_16102 = inst_16101;
var inst_16103 = null;
var inst_16104 = (0);
var inst_16105 = (0);
var state_16225__$1 = (function (){var statearr_16286 = state_16225;
(statearr_16286[(13)] = inst_16104);

(statearr_16286[(14)] = inst_16103);

(statearr_16286[(15)] = inst_16102);

(statearr_16286[(16)] = inst_16105);

return statearr_16286;
})();
var statearr_16287_16349 = state_16225__$1;
(statearr_16287_16349[(2)] = null);

(statearr_16287_16349[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16226 === (14))){
var state_16225__$1 = state_16225;
var statearr_16288_16350 = state_16225__$1;
(statearr_16288_16350[(2)] = null);

(statearr_16288_16350[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16226 === (45))){
var inst_16215 = (state_16225[(2)]);
var state_16225__$1 = state_16225;
var statearr_16289_16351 = state_16225__$1;
(statearr_16289_16351[(2)] = inst_16215);

(statearr_16289_16351[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16226 === (26))){
var inst_16157 = (state_16225[(29)]);
var inst_16211 = (state_16225[(2)]);
var inst_16212 = cljs.core.seq(inst_16157);
var state_16225__$1 = (function (){var statearr_16290 = state_16225;
(statearr_16290[(31)] = inst_16211);

return statearr_16290;
})();
if(inst_16212){
var statearr_16291_16352 = state_16225__$1;
(statearr_16291_16352[(1)] = (42));

} else {
var statearr_16292_16353 = state_16225__$1;
(statearr_16292_16353[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16226 === (16))){
var inst_16124 = (state_16225[(7)]);
var inst_16126 = cljs.core.chunked_seq_QMARK_(inst_16124);
var state_16225__$1 = state_16225;
if(inst_16126){
var statearr_16293_16354 = state_16225__$1;
(statearr_16293_16354[(1)] = (19));

} else {
var statearr_16294_16355 = state_16225__$1;
(statearr_16294_16355[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16226 === (38))){
var inst_16204 = (state_16225[(2)]);
var state_16225__$1 = state_16225;
var statearr_16295_16356 = state_16225__$1;
(statearr_16295_16356[(2)] = inst_16204);

(statearr_16295_16356[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16226 === (30))){
var state_16225__$1 = state_16225;
var statearr_16296_16357 = state_16225__$1;
(statearr_16296_16357[(2)] = null);

(statearr_16296_16357[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16226 === (10))){
var inst_16103 = (state_16225[(14)]);
var inst_16105 = (state_16225[(16)]);
var inst_16113 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16103,inst_16105);
var inst_16114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16113,(0),null);
var inst_16115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16113,(1),null);
var state_16225__$1 = (function (){var statearr_16297 = state_16225;
(statearr_16297[(26)] = inst_16114);

return statearr_16297;
})();
if(cljs.core.truth_(inst_16115)){
var statearr_16298_16358 = state_16225__$1;
(statearr_16298_16358[(1)] = (13));

} else {
var statearr_16299_16359 = state_16225__$1;
(statearr_16299_16359[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16226 === (18))){
var inst_16150 = (state_16225[(2)]);
var state_16225__$1 = state_16225;
var statearr_16300_16360 = state_16225__$1;
(statearr_16300_16360[(2)] = inst_16150);

(statearr_16300_16360[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16226 === (42))){
var state_16225__$1 = state_16225;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16225__$1,(45),dchan);
} else {
if((state_val_16226 === (37))){
var inst_16193 = (state_16225[(23)]);
var inst_16093 = (state_16225[(10)]);
var inst_16184 = (state_16225[(25)]);
var inst_16193__$1 = cljs.core.first(inst_16184);
var inst_16194 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16193__$1,inst_16093,done);
var state_16225__$1 = (function (){var statearr_16301 = state_16225;
(statearr_16301[(23)] = inst_16193__$1);

return statearr_16301;
})();
if(cljs.core.truth_(inst_16194)){
var statearr_16302_16361 = state_16225__$1;
(statearr_16302_16361[(1)] = (39));

} else {
var statearr_16303_16362 = state_16225__$1;
(statearr_16303_16362[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16226 === (8))){
var inst_16104 = (state_16225[(13)]);
var inst_16105 = (state_16225[(16)]);
var inst_16107 = (inst_16105 < inst_16104);
var inst_16108 = inst_16107;
var state_16225__$1 = state_16225;
if(cljs.core.truth_(inst_16108)){
var statearr_16304_16363 = state_16225__$1;
(statearr_16304_16363[(1)] = (10));

} else {
var statearr_16305_16364 = state_16225__$1;
(statearr_16305_16364[(1)] = (11));

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
});})(c__13621__auto___16310,cs,m,dchan,dctr,done))
;
return ((function (switch__13604__auto__,c__13621__auto___16310,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__13605__auto__ = null;
var cljs$core$async$mult_$_state_machine__13605__auto____0 = (function (){
var statearr_16306 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16306[(0)] = cljs$core$async$mult_$_state_machine__13605__auto__);

(statearr_16306[(1)] = (1));

return statearr_16306;
});
var cljs$core$async$mult_$_state_machine__13605__auto____1 = (function (state_16225){
while(true){
var ret_value__13606__auto__ = (function (){try{while(true){
var result__13607__auto__ = switch__13604__auto__(state_16225);
if(cljs.core.keyword_identical_QMARK_(result__13607__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13607__auto__;
}
break;
}
}catch (e16307){if((e16307 instanceof Object)){
var ex__13608__auto__ = e16307;
var statearr_16308_16365 = state_16225;
(statearr_16308_16365[(5)] = ex__13608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16225);

return cljs.core.cst$kw$recur;
} else {
throw e16307;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13606__auto__,cljs.core.cst$kw$recur)){
var G__16366 = state_16225;
state_16225 = G__16366;
continue;
} else {
return ret_value__13606__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13605__auto__ = function(state_16225){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13605__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13605__auto____1.call(this,state_16225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13605__auto____0;
cljs$core$async$mult_$_state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13605__auto____1;
return cljs$core$async$mult_$_state_machine__13605__auto__;
})()
;})(switch__13604__auto__,c__13621__auto___16310,cs,m,dchan,dctr,done))
})();
var state__13623__auto__ = (function (){var statearr_16309 = (f__13622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13622__auto__.cljs$core$IFn$_invoke$arity$0() : f__13622__auto__.call(null));
(statearr_16309[(6)] = c__13621__auto___16310);

return statearr_16309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13623__auto__);
});})(c__13621__auto___16310,cs,m,dchan,dctr,done))
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
var G__16368 = arguments.length;
switch (G__16368) {
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
var len__4730__auto___16380 = arguments.length;
var i__4731__auto___16381 = (0);
while(true){
if((i__4731__auto___16381 < len__4730__auto___16380)){
args__4736__auto__.push((arguments[i__4731__auto___16381]));

var G__16382 = (i__4731__auto___16381 + (1));
i__4731__auto___16381 = G__16382;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16374){
var map__16375 = p__16374;
var map__16375__$1 = (((((!((map__16375 == null))))?(((((map__16375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16375):map__16375);
var opts = map__16375__$1;
var statearr_16377_16383 = state;
(statearr_16377_16383[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__16375,map__16375__$1,opts){
return (function (val){
var statearr_16378_16384 = state;
(statearr_16378_16384[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__16375,map__16375__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_16379_16385 = state;
(statearr_16379_16385[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16370){
var G__16371 = cljs.core.first(seq16370);
var seq16370__$1 = cljs.core.next(seq16370);
var G__16372 = cljs.core.first(seq16370__$1);
var seq16370__$2 = cljs.core.next(seq16370__$1);
var G__16373 = cljs.core.first(seq16370__$2);
var seq16370__$3 = cljs.core.next(seq16370__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16371,G__16372,G__16373,seq16370__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16386 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16386 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16387){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16387 = meta16387;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16388,meta16387__$1){
var self__ = this;
var _16388__$1 = this;
return (new cljs.core.async.t_cljs$core$async16386(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16387__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16386.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16388){
var self__ = this;
var _16388__$1 = this;
return self__.meta16387;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16386.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16386.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16386.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16386.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16386.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16386.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16386.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16386.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async16386.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta16387], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16386.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16386.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16386";

cljs.core.async.t_cljs$core$async16386.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async16386");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16386.
 */
cljs.core.async.__GT_t_cljs$core$async16386 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async16386(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16387){
return (new cljs.core.async.t_cljs$core$async16386(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16387));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async16386(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13621__auto___16550 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13621__auto___16550,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__13622__auto__ = (function (){var switch__13604__auto__ = ((function (c__13621__auto___16550,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16490){
var state_val_16491 = (state_16490[(1)]);
if((state_val_16491 === (7))){
var inst_16405 = (state_16490[(2)]);
var state_16490__$1 = state_16490;
var statearr_16492_16551 = state_16490__$1;
(statearr_16492_16551[(2)] = inst_16405);

(statearr_16492_16551[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16491 === (20))){
var inst_16417 = (state_16490[(7)]);
var state_16490__$1 = state_16490;
var statearr_16493_16552 = state_16490__$1;
(statearr_16493_16552[(2)] = inst_16417);

(statearr_16493_16552[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16491 === (27))){
var state_16490__$1 = state_16490;
var statearr_16494_16553 = state_16490__$1;
(statearr_16494_16553[(2)] = null);

(statearr_16494_16553[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16491 === (1))){
var inst_16392 = (state_16490[(8)]);
var inst_16392__$1 = calc_state();
var inst_16394 = (inst_16392__$1 == null);
var inst_16395 = cljs.core.not(inst_16394);
var state_16490__$1 = (function (){var statearr_16495 = state_16490;
(statearr_16495[(8)] = inst_16392__$1);

return statearr_16495;
})();
if(inst_16395){
var statearr_16496_16554 = state_16490__$1;
(statearr_16496_16554[(1)] = (2));

} else {
var statearr_16497_16555 = state_16490__$1;
(statearr_16497_16555[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16491 === (24))){
var inst_16450 = (state_16490[(9)]);
var inst_16441 = (state_16490[(10)]);
var inst_16464 = (state_16490[(11)]);
var inst_16464__$1 = (inst_16441.cljs$core$IFn$_invoke$arity$1 ? inst_16441.cljs$core$IFn$_invoke$arity$1(inst_16450) : inst_16441.call(null,inst_16450));
var state_16490__$1 = (function (){var statearr_16498 = state_16490;
(statearr_16498[(11)] = inst_16464__$1);

return statearr_16498;
})();
if(cljs.core.truth_(inst_16464__$1)){
var statearr_16499_16556 = state_16490__$1;
(statearr_16499_16556[(1)] = (29));

} else {
var statearr_16500_16557 = state_16490__$1;
(statearr_16500_16557[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16491 === (4))){
var inst_16408 = (state_16490[(2)]);
var state_16490__$1 = state_16490;
if(cljs.core.truth_(inst_16408)){
var statearr_16501_16558 = state_16490__$1;
(statearr_16501_16558[(1)] = (8));

} else {
var statearr_16502_16559 = state_16490__$1;
(statearr_16502_16559[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16491 === (15))){
var inst_16435 = (state_16490[(2)]);
var state_16490__$1 = state_16490;
if(cljs.core.truth_(inst_16435)){
var statearr_16503_16560 = state_16490__$1;
(statearr_16503_16560[(1)] = (19));

} else {
var statearr_16504_16561 = state_16490__$1;
(statearr_16504_16561[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16491 === (21))){
var inst_16440 = (state_16490[(12)]);
var inst_16440__$1 = (state_16490[(2)]);
var inst_16441 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16440__$1,cljs.core.cst$kw$solos);
var inst_16442 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16440__$1,cljs.core.cst$kw$mutes);
var inst_16443 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16440__$1,cljs.core.cst$kw$reads);
var state_16490__$1 = (function (){var statearr_16505 = state_16490;
(statearr_16505[(13)] = inst_16442);

(statearr_16505[(10)] = inst_16441);

(statearr_16505[(12)] = inst_16440__$1);

return statearr_16505;
})();
return cljs.core.async.ioc_alts_BANG_(state_16490__$1,(22),inst_16443);
} else {
if((state_val_16491 === (31))){
var inst_16472 = (state_16490[(2)]);
var state_16490__$1 = state_16490;
if(cljs.core.truth_(inst_16472)){
var statearr_16506_16562 = state_16490__$1;
(statearr_16506_16562[(1)] = (32));

} else {
var statearr_16507_16563 = state_16490__$1;
(statearr_16507_16563[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16491 === (32))){
var inst_16449 = (state_16490[(14)]);
var state_16490__$1 = state_16490;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16490__$1,(35),out,inst_16449);
} else {
if((state_val_16491 === (33))){
var inst_16440 = (state_16490[(12)]);
var inst_16417 = inst_16440;
var state_16490__$1 = (function (){var statearr_16508 = state_16490;
(statearr_16508[(7)] = inst_16417);

return statearr_16508;
})();
var statearr_16509_16564 = state_16490__$1;
(statearr_16509_16564[(2)] = null);

(statearr_16509_16564[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16491 === (13))){
var inst_16417 = (state_16490[(7)]);
var inst_16424 = inst_16417.cljs$lang$protocol_mask$partition0$;
var inst_16425 = (inst_16424 & (64));
var inst_16426 = inst_16417.cljs$core$ISeq$;
var inst_16427 = (cljs.core.PROTOCOL_SENTINEL === inst_16426);
var inst_16428 = ((inst_16425) || (inst_16427));
var state_16490__$1 = state_16490;
if(cljs.core.truth_(inst_16428)){
var statearr_16510_16565 = state_16490__$1;
(statearr_16510_16565[(1)] = (16));

} else {
var statearr_16511_16566 = state_16490__$1;
(statearr_16511_16566[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16491 === (22))){
var inst_16450 = (state_16490[(9)]);
var inst_16449 = (state_16490[(14)]);
var inst_16448 = (state_16490[(2)]);
var inst_16449__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16448,(0),null);
var inst_16450__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16448,(1),null);
var inst_16451 = (inst_16449__$1 == null);
var inst_16452 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16450__$1,change);
var inst_16453 = ((inst_16451) || (inst_16452));
var state_16490__$1 = (function (){var statearr_16512 = state_16490;
(statearr_16512[(9)] = inst_16450__$1);

(statearr_16512[(14)] = inst_16449__$1);

return statearr_16512;
})();
if(cljs.core.truth_(inst_16453)){
var statearr_16513_16567 = state_16490__$1;
(statearr_16513_16567[(1)] = (23));

} else {
var statearr_16514_16568 = state_16490__$1;
(statearr_16514_16568[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16491 === (36))){
var inst_16440 = (state_16490[(12)]);
var inst_16417 = inst_16440;
var state_16490__$1 = (function (){var statearr_16515 = state_16490;
(statearr_16515[(7)] = inst_16417);

return statearr_16515;
})();
var statearr_16516_16569 = state_16490__$1;
(statearr_16516_16569[(2)] = null);

(statearr_16516_16569[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16491 === (29))){
var inst_16464 = (state_16490[(11)]);
var state_16490__$1 = state_16490;
var statearr_16517_16570 = state_16490__$1;
(statearr_16517_16570[(2)] = inst_16464);

(statearr_16517_16570[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16491 === (6))){
var state_16490__$1 = state_16490;
var statearr_16518_16571 = state_16490__$1;
(statearr_16518_16571[(2)] = false);

(statearr_16518_16571[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16491 === (28))){
var inst_16460 = (state_16490[(2)]);
var inst_16461 = calc_state();
var inst_16417 = inst_16461;
var state_16490__$1 = (function (){var statearr_16519 = state_16490;
(statearr_16519[(15)] = inst_16460);

(statearr_16519[(7)] = inst_16417);

return statearr_16519;
})();
var statearr_16520_16572 = state_16490__$1;
(statearr_16520_16572[(2)] = null);

(statearr_16520_16572[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16491 === (25))){
var inst_16486 = (state_16490[(2)]);
var state_16490__$1 = state_16490;
var statearr_16521_16573 = state_16490__$1;
(statearr_16521_16573[(2)] = inst_16486);

(statearr_16521_16573[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16491 === (34))){
var inst_16484 = (state_16490[(2)]);
var state_16490__$1 = state_16490;
var statearr_16522_16574 = state_16490__$1;
(statearr_16522_16574[(2)] = inst_16484);

(statearr_16522_16574[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16491 === (17))){
var state_16490__$1 = state_16490;
var statearr_16523_16575 = state_16490__$1;
(statearr_16523_16575[(2)] = false);

(statearr_16523_16575[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16491 === (3))){
var state_16490__$1 = state_16490;
var statearr_16524_16576 = state_16490__$1;
(statearr_16524_16576[(2)] = false);

(statearr_16524_16576[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16491 === (12))){
var inst_16488 = (state_16490[(2)]);
var state_16490__$1 = state_16490;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16490__$1,inst_16488);
} else {
if((state_val_16491 === (2))){
var inst_16392 = (state_16490[(8)]);
var inst_16397 = inst_16392.cljs$lang$protocol_mask$partition0$;
var inst_16398 = (inst_16397 & (64));
var inst_16399 = inst_16392.cljs$core$ISeq$;
var inst_16400 = (cljs.core.PROTOCOL_SENTINEL === inst_16399);
var inst_16401 = ((inst_16398) || (inst_16400));
var state_16490__$1 = state_16490;
if(cljs.core.truth_(inst_16401)){
var statearr_16525_16577 = state_16490__$1;
(statearr_16525_16577[(1)] = (5));

} else {
var statearr_16526_16578 = state_16490__$1;
(statearr_16526_16578[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16491 === (23))){
var inst_16449 = (state_16490[(14)]);
var inst_16455 = (inst_16449 == null);
var state_16490__$1 = state_16490;
if(cljs.core.truth_(inst_16455)){
var statearr_16527_16579 = state_16490__$1;
(statearr_16527_16579[(1)] = (26));

} else {
var statearr_16528_16580 = state_16490__$1;
(statearr_16528_16580[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16491 === (35))){
var inst_16475 = (state_16490[(2)]);
var state_16490__$1 = state_16490;
if(cljs.core.truth_(inst_16475)){
var statearr_16529_16581 = state_16490__$1;
(statearr_16529_16581[(1)] = (36));

} else {
var statearr_16530_16582 = state_16490__$1;
(statearr_16530_16582[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16491 === (19))){
var inst_16417 = (state_16490[(7)]);
var inst_16437 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16417);
var state_16490__$1 = state_16490;
var statearr_16531_16583 = state_16490__$1;
(statearr_16531_16583[(2)] = inst_16437);

(statearr_16531_16583[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16491 === (11))){
var inst_16417 = (state_16490[(7)]);
var inst_16421 = (inst_16417 == null);
var inst_16422 = cljs.core.not(inst_16421);
var state_16490__$1 = state_16490;
if(inst_16422){
var statearr_16532_16584 = state_16490__$1;
(statearr_16532_16584[(1)] = (13));

} else {
var statearr_16533_16585 = state_16490__$1;
(statearr_16533_16585[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16491 === (9))){
var inst_16392 = (state_16490[(8)]);
var state_16490__$1 = state_16490;
var statearr_16534_16586 = state_16490__$1;
(statearr_16534_16586[(2)] = inst_16392);

(statearr_16534_16586[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16491 === (5))){
var state_16490__$1 = state_16490;
var statearr_16535_16587 = state_16490__$1;
(statearr_16535_16587[(2)] = true);

(statearr_16535_16587[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16491 === (14))){
var state_16490__$1 = state_16490;
var statearr_16536_16588 = state_16490__$1;
(statearr_16536_16588[(2)] = false);

(statearr_16536_16588[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16491 === (26))){
var inst_16450 = (state_16490[(9)]);
var inst_16457 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16450);
var state_16490__$1 = state_16490;
var statearr_16537_16589 = state_16490__$1;
(statearr_16537_16589[(2)] = inst_16457);

(statearr_16537_16589[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16491 === (16))){
var state_16490__$1 = state_16490;
var statearr_16538_16590 = state_16490__$1;
(statearr_16538_16590[(2)] = true);

(statearr_16538_16590[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16491 === (38))){
var inst_16480 = (state_16490[(2)]);
var state_16490__$1 = state_16490;
var statearr_16539_16591 = state_16490__$1;
(statearr_16539_16591[(2)] = inst_16480);

(statearr_16539_16591[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16491 === (30))){
var inst_16442 = (state_16490[(13)]);
var inst_16450 = (state_16490[(9)]);
var inst_16441 = (state_16490[(10)]);
var inst_16467 = cljs.core.empty_QMARK_(inst_16441);
var inst_16468 = (inst_16442.cljs$core$IFn$_invoke$arity$1 ? inst_16442.cljs$core$IFn$_invoke$arity$1(inst_16450) : inst_16442.call(null,inst_16450));
var inst_16469 = cljs.core.not(inst_16468);
var inst_16470 = ((inst_16467) && (inst_16469));
var state_16490__$1 = state_16490;
var statearr_16540_16592 = state_16490__$1;
(statearr_16540_16592[(2)] = inst_16470);

(statearr_16540_16592[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16491 === (10))){
var inst_16392 = (state_16490[(8)]);
var inst_16413 = (state_16490[(2)]);
var inst_16414 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16413,cljs.core.cst$kw$solos);
var inst_16415 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16413,cljs.core.cst$kw$mutes);
var inst_16416 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16413,cljs.core.cst$kw$reads);
var inst_16417 = inst_16392;
var state_16490__$1 = (function (){var statearr_16541 = state_16490;
(statearr_16541[(16)] = inst_16415);

(statearr_16541[(17)] = inst_16414);

(statearr_16541[(7)] = inst_16417);

(statearr_16541[(18)] = inst_16416);

return statearr_16541;
})();
var statearr_16542_16593 = state_16490__$1;
(statearr_16542_16593[(2)] = null);

(statearr_16542_16593[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16491 === (18))){
var inst_16432 = (state_16490[(2)]);
var state_16490__$1 = state_16490;
var statearr_16543_16594 = state_16490__$1;
(statearr_16543_16594[(2)] = inst_16432);

(statearr_16543_16594[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16491 === (37))){
var state_16490__$1 = state_16490;
var statearr_16544_16595 = state_16490__$1;
(statearr_16544_16595[(2)] = null);

(statearr_16544_16595[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16491 === (8))){
var inst_16392 = (state_16490[(8)]);
var inst_16410 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16392);
var state_16490__$1 = state_16490;
var statearr_16545_16596 = state_16490__$1;
(statearr_16545_16596[(2)] = inst_16410);

(statearr_16545_16596[(1)] = (10));


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
});})(c__13621__auto___16550,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__13604__auto__,c__13621__auto___16550,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__13605__auto__ = null;
var cljs$core$async$mix_$_state_machine__13605__auto____0 = (function (){
var statearr_16546 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16546[(0)] = cljs$core$async$mix_$_state_machine__13605__auto__);

(statearr_16546[(1)] = (1));

return statearr_16546;
});
var cljs$core$async$mix_$_state_machine__13605__auto____1 = (function (state_16490){
while(true){
var ret_value__13606__auto__ = (function (){try{while(true){
var result__13607__auto__ = switch__13604__auto__(state_16490);
if(cljs.core.keyword_identical_QMARK_(result__13607__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13607__auto__;
}
break;
}
}catch (e16547){if((e16547 instanceof Object)){
var ex__13608__auto__ = e16547;
var statearr_16548_16597 = state_16490;
(statearr_16548_16597[(5)] = ex__13608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16490);

return cljs.core.cst$kw$recur;
} else {
throw e16547;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13606__auto__,cljs.core.cst$kw$recur)){
var G__16598 = state_16490;
state_16490 = G__16598;
continue;
} else {
return ret_value__13606__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13605__auto__ = function(state_16490){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13605__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13605__auto____1.call(this,state_16490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13605__auto____0;
cljs$core$async$mix_$_state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13605__auto____1;
return cljs$core$async$mix_$_state_machine__13605__auto__;
})()
;})(switch__13604__auto__,c__13621__auto___16550,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__13623__auto__ = (function (){var statearr_16549 = (f__13622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13622__auto__.cljs$core$IFn$_invoke$arity$0() : f__13622__auto__.call(null));
(statearr_16549[(6)] = c__13621__auto___16550);

return statearr_16549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13623__auto__);
});})(c__13621__auto___16550,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__16600 = arguments.length;
switch (G__16600) {
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
var G__16604 = arguments.length;
switch (G__16604) {
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
return (function (p1__16602_SHARP_){
if(cljs.core.truth_((p1__16602_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16602_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16602_SHARP_.call(null,topic)))){
return p1__16602_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16602_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16605 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16605 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16606){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16606 = meta16606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16607,meta16606__$1){
var self__ = this;
var _16607__$1 = this;
return (new cljs.core.async.t_cljs$core$async16605(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16606__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16605.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16607){
var self__ = this;
var _16607__$1 = this;
return self__.meta16606;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16605.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16605.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16605.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16605.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16605.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async16605.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16605.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16605.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta16606], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16605.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16605.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16605";

cljs.core.async.t_cljs$core$async16605.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async16605");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16605.
 */
cljs.core.async.__GT_t_cljs$core$async16605 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async16605(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16606){
return (new cljs.core.async.t_cljs$core$async16605(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16606));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async16605(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13621__auto___16725 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13621__auto___16725,mults,ensure_mult,p){
return (function (){
var f__13622__auto__ = (function (){var switch__13604__auto__ = ((function (c__13621__auto___16725,mults,ensure_mult,p){
return (function (state_16679){
var state_val_16680 = (state_16679[(1)]);
if((state_val_16680 === (7))){
var inst_16675 = (state_16679[(2)]);
var state_16679__$1 = state_16679;
var statearr_16681_16726 = state_16679__$1;
(statearr_16681_16726[(2)] = inst_16675);

(statearr_16681_16726[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16680 === (20))){
var state_16679__$1 = state_16679;
var statearr_16682_16727 = state_16679__$1;
(statearr_16682_16727[(2)] = null);

(statearr_16682_16727[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16680 === (1))){
var state_16679__$1 = state_16679;
var statearr_16683_16728 = state_16679__$1;
(statearr_16683_16728[(2)] = null);

(statearr_16683_16728[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16680 === (24))){
var inst_16658 = (state_16679[(7)]);
var inst_16667 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16658);
var state_16679__$1 = state_16679;
var statearr_16684_16729 = state_16679__$1;
(statearr_16684_16729[(2)] = inst_16667);

(statearr_16684_16729[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16680 === (4))){
var inst_16610 = (state_16679[(8)]);
var inst_16610__$1 = (state_16679[(2)]);
var inst_16611 = (inst_16610__$1 == null);
var state_16679__$1 = (function (){var statearr_16685 = state_16679;
(statearr_16685[(8)] = inst_16610__$1);

return statearr_16685;
})();
if(cljs.core.truth_(inst_16611)){
var statearr_16686_16730 = state_16679__$1;
(statearr_16686_16730[(1)] = (5));

} else {
var statearr_16687_16731 = state_16679__$1;
(statearr_16687_16731[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16680 === (15))){
var inst_16652 = (state_16679[(2)]);
var state_16679__$1 = state_16679;
var statearr_16688_16732 = state_16679__$1;
(statearr_16688_16732[(2)] = inst_16652);

(statearr_16688_16732[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16680 === (21))){
var inst_16672 = (state_16679[(2)]);
var state_16679__$1 = (function (){var statearr_16689 = state_16679;
(statearr_16689[(9)] = inst_16672);

return statearr_16689;
})();
var statearr_16690_16733 = state_16679__$1;
(statearr_16690_16733[(2)] = null);

(statearr_16690_16733[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16680 === (13))){
var inst_16634 = (state_16679[(10)]);
var inst_16636 = cljs.core.chunked_seq_QMARK_(inst_16634);
var state_16679__$1 = state_16679;
if(inst_16636){
var statearr_16691_16734 = state_16679__$1;
(statearr_16691_16734[(1)] = (16));

} else {
var statearr_16692_16735 = state_16679__$1;
(statearr_16692_16735[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16680 === (22))){
var inst_16664 = (state_16679[(2)]);
var state_16679__$1 = state_16679;
if(cljs.core.truth_(inst_16664)){
var statearr_16693_16736 = state_16679__$1;
(statearr_16693_16736[(1)] = (23));

} else {
var statearr_16694_16737 = state_16679__$1;
(statearr_16694_16737[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16680 === (6))){
var inst_16660 = (state_16679[(11)]);
var inst_16658 = (state_16679[(7)]);
var inst_16610 = (state_16679[(8)]);
var inst_16658__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16610) : topic_fn.call(null,inst_16610));
var inst_16659 = cljs.core.deref(mults);
var inst_16660__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16659,inst_16658__$1);
var state_16679__$1 = (function (){var statearr_16695 = state_16679;
(statearr_16695[(11)] = inst_16660__$1);

(statearr_16695[(7)] = inst_16658__$1);

return statearr_16695;
})();
if(cljs.core.truth_(inst_16660__$1)){
var statearr_16696_16738 = state_16679__$1;
(statearr_16696_16738[(1)] = (19));

} else {
var statearr_16697_16739 = state_16679__$1;
(statearr_16697_16739[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16680 === (25))){
var inst_16669 = (state_16679[(2)]);
var state_16679__$1 = state_16679;
var statearr_16698_16740 = state_16679__$1;
(statearr_16698_16740[(2)] = inst_16669);

(statearr_16698_16740[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16680 === (17))){
var inst_16634 = (state_16679[(10)]);
var inst_16643 = cljs.core.first(inst_16634);
var inst_16644 = cljs.core.async.muxch_STAR_(inst_16643);
var inst_16645 = cljs.core.async.close_BANG_(inst_16644);
var inst_16646 = cljs.core.next(inst_16634);
var inst_16620 = inst_16646;
var inst_16621 = null;
var inst_16622 = (0);
var inst_16623 = (0);
var state_16679__$1 = (function (){var statearr_16699 = state_16679;
(statearr_16699[(12)] = inst_16623);

(statearr_16699[(13)] = inst_16621);

(statearr_16699[(14)] = inst_16620);

(statearr_16699[(15)] = inst_16622);

(statearr_16699[(16)] = inst_16645);

return statearr_16699;
})();
var statearr_16700_16741 = state_16679__$1;
(statearr_16700_16741[(2)] = null);

(statearr_16700_16741[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16680 === (3))){
var inst_16677 = (state_16679[(2)]);
var state_16679__$1 = state_16679;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16679__$1,inst_16677);
} else {
if((state_val_16680 === (12))){
var inst_16654 = (state_16679[(2)]);
var state_16679__$1 = state_16679;
var statearr_16701_16742 = state_16679__$1;
(statearr_16701_16742[(2)] = inst_16654);

(statearr_16701_16742[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16680 === (2))){
var state_16679__$1 = state_16679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16679__$1,(4),ch);
} else {
if((state_val_16680 === (23))){
var state_16679__$1 = state_16679;
var statearr_16702_16743 = state_16679__$1;
(statearr_16702_16743[(2)] = null);

(statearr_16702_16743[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16680 === (19))){
var inst_16660 = (state_16679[(11)]);
var inst_16610 = (state_16679[(8)]);
var inst_16662 = cljs.core.async.muxch_STAR_(inst_16660);
var state_16679__$1 = state_16679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16679__$1,(22),inst_16662,inst_16610);
} else {
if((state_val_16680 === (11))){
var inst_16634 = (state_16679[(10)]);
var inst_16620 = (state_16679[(14)]);
var inst_16634__$1 = cljs.core.seq(inst_16620);
var state_16679__$1 = (function (){var statearr_16703 = state_16679;
(statearr_16703[(10)] = inst_16634__$1);

return statearr_16703;
})();
if(inst_16634__$1){
var statearr_16704_16744 = state_16679__$1;
(statearr_16704_16744[(1)] = (13));

} else {
var statearr_16705_16745 = state_16679__$1;
(statearr_16705_16745[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16680 === (9))){
var inst_16656 = (state_16679[(2)]);
var state_16679__$1 = state_16679;
var statearr_16706_16746 = state_16679__$1;
(statearr_16706_16746[(2)] = inst_16656);

(statearr_16706_16746[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16680 === (5))){
var inst_16617 = cljs.core.deref(mults);
var inst_16618 = cljs.core.vals(inst_16617);
var inst_16619 = cljs.core.seq(inst_16618);
var inst_16620 = inst_16619;
var inst_16621 = null;
var inst_16622 = (0);
var inst_16623 = (0);
var state_16679__$1 = (function (){var statearr_16707 = state_16679;
(statearr_16707[(12)] = inst_16623);

(statearr_16707[(13)] = inst_16621);

(statearr_16707[(14)] = inst_16620);

(statearr_16707[(15)] = inst_16622);

return statearr_16707;
})();
var statearr_16708_16747 = state_16679__$1;
(statearr_16708_16747[(2)] = null);

(statearr_16708_16747[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16680 === (14))){
var state_16679__$1 = state_16679;
var statearr_16712_16748 = state_16679__$1;
(statearr_16712_16748[(2)] = null);

(statearr_16712_16748[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16680 === (16))){
var inst_16634 = (state_16679[(10)]);
var inst_16638 = cljs.core.chunk_first(inst_16634);
var inst_16639 = cljs.core.chunk_rest(inst_16634);
var inst_16640 = cljs.core.count(inst_16638);
var inst_16620 = inst_16639;
var inst_16621 = inst_16638;
var inst_16622 = inst_16640;
var inst_16623 = (0);
var state_16679__$1 = (function (){var statearr_16713 = state_16679;
(statearr_16713[(12)] = inst_16623);

(statearr_16713[(13)] = inst_16621);

(statearr_16713[(14)] = inst_16620);

(statearr_16713[(15)] = inst_16622);

return statearr_16713;
})();
var statearr_16714_16749 = state_16679__$1;
(statearr_16714_16749[(2)] = null);

(statearr_16714_16749[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16680 === (10))){
var inst_16623 = (state_16679[(12)]);
var inst_16621 = (state_16679[(13)]);
var inst_16620 = (state_16679[(14)]);
var inst_16622 = (state_16679[(15)]);
var inst_16628 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16621,inst_16623);
var inst_16629 = cljs.core.async.muxch_STAR_(inst_16628);
var inst_16630 = cljs.core.async.close_BANG_(inst_16629);
var inst_16631 = (inst_16623 + (1));
var tmp16709 = inst_16621;
var tmp16710 = inst_16620;
var tmp16711 = inst_16622;
var inst_16620__$1 = tmp16710;
var inst_16621__$1 = tmp16709;
var inst_16622__$1 = tmp16711;
var inst_16623__$1 = inst_16631;
var state_16679__$1 = (function (){var statearr_16715 = state_16679;
(statearr_16715[(12)] = inst_16623__$1);

(statearr_16715[(13)] = inst_16621__$1);

(statearr_16715[(14)] = inst_16620__$1);

(statearr_16715[(15)] = inst_16622__$1);

(statearr_16715[(17)] = inst_16630);

return statearr_16715;
})();
var statearr_16716_16750 = state_16679__$1;
(statearr_16716_16750[(2)] = null);

(statearr_16716_16750[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16680 === (18))){
var inst_16649 = (state_16679[(2)]);
var state_16679__$1 = state_16679;
var statearr_16717_16751 = state_16679__$1;
(statearr_16717_16751[(2)] = inst_16649);

(statearr_16717_16751[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16680 === (8))){
var inst_16623 = (state_16679[(12)]);
var inst_16622 = (state_16679[(15)]);
var inst_16625 = (inst_16623 < inst_16622);
var inst_16626 = inst_16625;
var state_16679__$1 = state_16679;
if(cljs.core.truth_(inst_16626)){
var statearr_16718_16752 = state_16679__$1;
(statearr_16718_16752[(1)] = (10));

} else {
var statearr_16719_16753 = state_16679__$1;
(statearr_16719_16753[(1)] = (11));

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
});})(c__13621__auto___16725,mults,ensure_mult,p))
;
return ((function (switch__13604__auto__,c__13621__auto___16725,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__13605__auto__ = null;
var cljs$core$async$state_machine__13605__auto____0 = (function (){
var statearr_16720 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16720[(0)] = cljs$core$async$state_machine__13605__auto__);

(statearr_16720[(1)] = (1));

return statearr_16720;
});
var cljs$core$async$state_machine__13605__auto____1 = (function (state_16679){
while(true){
var ret_value__13606__auto__ = (function (){try{while(true){
var result__13607__auto__ = switch__13604__auto__(state_16679);
if(cljs.core.keyword_identical_QMARK_(result__13607__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13607__auto__;
}
break;
}
}catch (e16721){if((e16721 instanceof Object)){
var ex__13608__auto__ = e16721;
var statearr_16722_16754 = state_16679;
(statearr_16722_16754[(5)] = ex__13608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16679);

return cljs.core.cst$kw$recur;
} else {
throw e16721;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13606__auto__,cljs.core.cst$kw$recur)){
var G__16755 = state_16679;
state_16679 = G__16755;
continue;
} else {
return ret_value__13606__auto__;
}
break;
}
});
cljs$core$async$state_machine__13605__auto__ = function(state_16679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13605__auto____1.call(this,state_16679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13605__auto____0;
cljs$core$async$state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13605__auto____1;
return cljs$core$async$state_machine__13605__auto__;
})()
;})(switch__13604__auto__,c__13621__auto___16725,mults,ensure_mult,p))
})();
var state__13623__auto__ = (function (){var statearr_16723 = (f__13622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13622__auto__.cljs$core$IFn$_invoke$arity$0() : f__13622__auto__.call(null));
(statearr_16723[(6)] = c__13621__auto___16725);

return statearr_16723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13623__auto__);
});})(c__13621__auto___16725,mults,ensure_mult,p))
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
var G__16757 = arguments.length;
switch (G__16757) {
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
var G__16760 = arguments.length;
switch (G__16760) {
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
var G__16763 = arguments.length;
switch (G__16763) {
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
var c__13621__auto___16830 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13621__auto___16830,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__13622__auto__ = (function (){var switch__13604__auto__ = ((function (c__13621__auto___16830,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16802){
var state_val_16803 = (state_16802[(1)]);
if((state_val_16803 === (7))){
var state_16802__$1 = state_16802;
var statearr_16804_16831 = state_16802__$1;
(statearr_16804_16831[(2)] = null);

(statearr_16804_16831[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16803 === (1))){
var state_16802__$1 = state_16802;
var statearr_16805_16832 = state_16802__$1;
(statearr_16805_16832[(2)] = null);

(statearr_16805_16832[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16803 === (4))){
var inst_16766 = (state_16802[(7)]);
var inst_16768 = (inst_16766 < cnt);
var state_16802__$1 = state_16802;
if(cljs.core.truth_(inst_16768)){
var statearr_16806_16833 = state_16802__$1;
(statearr_16806_16833[(1)] = (6));

} else {
var statearr_16807_16834 = state_16802__$1;
(statearr_16807_16834[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16803 === (15))){
var inst_16798 = (state_16802[(2)]);
var state_16802__$1 = state_16802;
var statearr_16808_16835 = state_16802__$1;
(statearr_16808_16835[(2)] = inst_16798);

(statearr_16808_16835[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16803 === (13))){
var inst_16791 = cljs.core.async.close_BANG_(out);
var state_16802__$1 = state_16802;
var statearr_16809_16836 = state_16802__$1;
(statearr_16809_16836[(2)] = inst_16791);

(statearr_16809_16836[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16803 === (6))){
var state_16802__$1 = state_16802;
var statearr_16810_16837 = state_16802__$1;
(statearr_16810_16837[(2)] = null);

(statearr_16810_16837[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16803 === (3))){
var inst_16800 = (state_16802[(2)]);
var state_16802__$1 = state_16802;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16802__$1,inst_16800);
} else {
if((state_val_16803 === (12))){
var inst_16788 = (state_16802[(8)]);
var inst_16788__$1 = (state_16802[(2)]);
var inst_16789 = cljs.core.some(cljs.core.nil_QMARK_,inst_16788__$1);
var state_16802__$1 = (function (){var statearr_16811 = state_16802;
(statearr_16811[(8)] = inst_16788__$1);

return statearr_16811;
})();
if(cljs.core.truth_(inst_16789)){
var statearr_16812_16838 = state_16802__$1;
(statearr_16812_16838[(1)] = (13));

} else {
var statearr_16813_16839 = state_16802__$1;
(statearr_16813_16839[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16803 === (2))){
var inst_16765 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16766 = (0);
var state_16802__$1 = (function (){var statearr_16814 = state_16802;
(statearr_16814[(9)] = inst_16765);

(statearr_16814[(7)] = inst_16766);

return statearr_16814;
})();
var statearr_16815_16840 = state_16802__$1;
(statearr_16815_16840[(2)] = null);

(statearr_16815_16840[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16803 === (11))){
var inst_16766 = (state_16802[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_16802,(10),Object,null,(9));
var inst_16775 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16766) : chs__$1.call(null,inst_16766));
var inst_16776 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16766) : done.call(null,inst_16766));
var inst_16777 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16775,inst_16776);
var state_16802__$1 = state_16802;
var statearr_16816_16841 = state_16802__$1;
(statearr_16816_16841[(2)] = inst_16777);


cljs.core.async.impl.ioc_helpers.process_exception(state_16802__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16803 === (9))){
var inst_16766 = (state_16802[(7)]);
var inst_16779 = (state_16802[(2)]);
var inst_16780 = (inst_16766 + (1));
var inst_16766__$1 = inst_16780;
var state_16802__$1 = (function (){var statearr_16817 = state_16802;
(statearr_16817[(7)] = inst_16766__$1);

(statearr_16817[(10)] = inst_16779);

return statearr_16817;
})();
var statearr_16818_16842 = state_16802__$1;
(statearr_16818_16842[(2)] = null);

(statearr_16818_16842[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16803 === (5))){
var inst_16786 = (state_16802[(2)]);
var state_16802__$1 = (function (){var statearr_16819 = state_16802;
(statearr_16819[(11)] = inst_16786);

return statearr_16819;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16802__$1,(12),dchan);
} else {
if((state_val_16803 === (14))){
var inst_16788 = (state_16802[(8)]);
var inst_16793 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16788);
var state_16802__$1 = state_16802;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16802__$1,(16),out,inst_16793);
} else {
if((state_val_16803 === (16))){
var inst_16795 = (state_16802[(2)]);
var state_16802__$1 = (function (){var statearr_16820 = state_16802;
(statearr_16820[(12)] = inst_16795);

return statearr_16820;
})();
var statearr_16821_16843 = state_16802__$1;
(statearr_16821_16843[(2)] = null);

(statearr_16821_16843[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16803 === (10))){
var inst_16770 = (state_16802[(2)]);
var inst_16771 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16802__$1 = (function (){var statearr_16822 = state_16802;
(statearr_16822[(13)] = inst_16770);

return statearr_16822;
})();
var statearr_16823_16844 = state_16802__$1;
(statearr_16823_16844[(2)] = inst_16771);


cljs.core.async.impl.ioc_helpers.process_exception(state_16802__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16803 === (8))){
var inst_16784 = (state_16802[(2)]);
var state_16802__$1 = state_16802;
var statearr_16824_16845 = state_16802__$1;
(statearr_16824_16845[(2)] = inst_16784);

(statearr_16824_16845[(1)] = (5));


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
});})(c__13621__auto___16830,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__13604__auto__,c__13621__auto___16830,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__13605__auto__ = null;
var cljs$core$async$state_machine__13605__auto____0 = (function (){
var statearr_16825 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16825[(0)] = cljs$core$async$state_machine__13605__auto__);

(statearr_16825[(1)] = (1));

return statearr_16825;
});
var cljs$core$async$state_machine__13605__auto____1 = (function (state_16802){
while(true){
var ret_value__13606__auto__ = (function (){try{while(true){
var result__13607__auto__ = switch__13604__auto__(state_16802);
if(cljs.core.keyword_identical_QMARK_(result__13607__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13607__auto__;
}
break;
}
}catch (e16826){if((e16826 instanceof Object)){
var ex__13608__auto__ = e16826;
var statearr_16827_16846 = state_16802;
(statearr_16827_16846[(5)] = ex__13608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16802);

return cljs.core.cst$kw$recur;
} else {
throw e16826;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13606__auto__,cljs.core.cst$kw$recur)){
var G__16847 = state_16802;
state_16802 = G__16847;
continue;
} else {
return ret_value__13606__auto__;
}
break;
}
});
cljs$core$async$state_machine__13605__auto__ = function(state_16802){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13605__auto____1.call(this,state_16802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13605__auto____0;
cljs$core$async$state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13605__auto____1;
return cljs$core$async$state_machine__13605__auto__;
})()
;})(switch__13604__auto__,c__13621__auto___16830,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__13623__auto__ = (function (){var statearr_16828 = (f__13622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13622__auto__.cljs$core$IFn$_invoke$arity$0() : f__13622__auto__.call(null));
(statearr_16828[(6)] = c__13621__auto___16830);

return statearr_16828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13623__auto__);
});})(c__13621__auto___16830,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__16850 = arguments.length;
switch (G__16850) {
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
var c__13621__auto___16904 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13621__auto___16904,out){
return (function (){
var f__13622__auto__ = (function (){var switch__13604__auto__ = ((function (c__13621__auto___16904,out){
return (function (state_16882){
var state_val_16883 = (state_16882[(1)]);
if((state_val_16883 === (7))){
var inst_16862 = (state_16882[(7)]);
var inst_16861 = (state_16882[(8)]);
var inst_16861__$1 = (state_16882[(2)]);
var inst_16862__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16861__$1,(0),null);
var inst_16863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16861__$1,(1),null);
var inst_16864 = (inst_16862__$1 == null);
var state_16882__$1 = (function (){var statearr_16884 = state_16882;
(statearr_16884[(7)] = inst_16862__$1);

(statearr_16884[(9)] = inst_16863);

(statearr_16884[(8)] = inst_16861__$1);

return statearr_16884;
})();
if(cljs.core.truth_(inst_16864)){
var statearr_16885_16905 = state_16882__$1;
(statearr_16885_16905[(1)] = (8));

} else {
var statearr_16886_16906 = state_16882__$1;
(statearr_16886_16906[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16883 === (1))){
var inst_16851 = cljs.core.vec(chs);
var inst_16852 = inst_16851;
var state_16882__$1 = (function (){var statearr_16887 = state_16882;
(statearr_16887[(10)] = inst_16852);

return statearr_16887;
})();
var statearr_16888_16907 = state_16882__$1;
(statearr_16888_16907[(2)] = null);

(statearr_16888_16907[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16883 === (4))){
var inst_16852 = (state_16882[(10)]);
var state_16882__$1 = state_16882;
return cljs.core.async.ioc_alts_BANG_(state_16882__$1,(7),inst_16852);
} else {
if((state_val_16883 === (6))){
var inst_16878 = (state_16882[(2)]);
var state_16882__$1 = state_16882;
var statearr_16889_16908 = state_16882__$1;
(statearr_16889_16908[(2)] = inst_16878);

(statearr_16889_16908[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16883 === (3))){
var inst_16880 = (state_16882[(2)]);
var state_16882__$1 = state_16882;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16882__$1,inst_16880);
} else {
if((state_val_16883 === (2))){
var inst_16852 = (state_16882[(10)]);
var inst_16854 = cljs.core.count(inst_16852);
var inst_16855 = (inst_16854 > (0));
var state_16882__$1 = state_16882;
if(cljs.core.truth_(inst_16855)){
var statearr_16891_16909 = state_16882__$1;
(statearr_16891_16909[(1)] = (4));

} else {
var statearr_16892_16910 = state_16882__$1;
(statearr_16892_16910[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16883 === (11))){
var inst_16852 = (state_16882[(10)]);
var inst_16871 = (state_16882[(2)]);
var tmp16890 = inst_16852;
var inst_16852__$1 = tmp16890;
var state_16882__$1 = (function (){var statearr_16893 = state_16882;
(statearr_16893[(10)] = inst_16852__$1);

(statearr_16893[(11)] = inst_16871);

return statearr_16893;
})();
var statearr_16894_16911 = state_16882__$1;
(statearr_16894_16911[(2)] = null);

(statearr_16894_16911[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16883 === (9))){
var inst_16862 = (state_16882[(7)]);
var state_16882__$1 = state_16882;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16882__$1,(11),out,inst_16862);
} else {
if((state_val_16883 === (5))){
var inst_16876 = cljs.core.async.close_BANG_(out);
var state_16882__$1 = state_16882;
var statearr_16895_16912 = state_16882__$1;
(statearr_16895_16912[(2)] = inst_16876);

(statearr_16895_16912[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16883 === (10))){
var inst_16874 = (state_16882[(2)]);
var state_16882__$1 = state_16882;
var statearr_16896_16913 = state_16882__$1;
(statearr_16896_16913[(2)] = inst_16874);

(statearr_16896_16913[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16883 === (8))){
var inst_16862 = (state_16882[(7)]);
var inst_16852 = (state_16882[(10)]);
var inst_16863 = (state_16882[(9)]);
var inst_16861 = (state_16882[(8)]);
var inst_16866 = (function (){var cs = inst_16852;
var vec__16857 = inst_16861;
var v = inst_16862;
var c = inst_16863;
return ((function (cs,vec__16857,v,c,inst_16862,inst_16852,inst_16863,inst_16861,state_val_16883,c__13621__auto___16904,out){
return (function (p1__16848_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16848_SHARP_);
});
;})(cs,vec__16857,v,c,inst_16862,inst_16852,inst_16863,inst_16861,state_val_16883,c__13621__auto___16904,out))
})();
var inst_16867 = cljs.core.filterv(inst_16866,inst_16852);
var inst_16852__$1 = inst_16867;
var state_16882__$1 = (function (){var statearr_16897 = state_16882;
(statearr_16897[(10)] = inst_16852__$1);

return statearr_16897;
})();
var statearr_16898_16914 = state_16882__$1;
(statearr_16898_16914[(2)] = null);

(statearr_16898_16914[(1)] = (2));


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
});})(c__13621__auto___16904,out))
;
return ((function (switch__13604__auto__,c__13621__auto___16904,out){
return (function() {
var cljs$core$async$state_machine__13605__auto__ = null;
var cljs$core$async$state_machine__13605__auto____0 = (function (){
var statearr_16899 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16899[(0)] = cljs$core$async$state_machine__13605__auto__);

(statearr_16899[(1)] = (1));

return statearr_16899;
});
var cljs$core$async$state_machine__13605__auto____1 = (function (state_16882){
while(true){
var ret_value__13606__auto__ = (function (){try{while(true){
var result__13607__auto__ = switch__13604__auto__(state_16882);
if(cljs.core.keyword_identical_QMARK_(result__13607__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13607__auto__;
}
break;
}
}catch (e16900){if((e16900 instanceof Object)){
var ex__13608__auto__ = e16900;
var statearr_16901_16915 = state_16882;
(statearr_16901_16915[(5)] = ex__13608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16882);

return cljs.core.cst$kw$recur;
} else {
throw e16900;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13606__auto__,cljs.core.cst$kw$recur)){
var G__16916 = state_16882;
state_16882 = G__16916;
continue;
} else {
return ret_value__13606__auto__;
}
break;
}
});
cljs$core$async$state_machine__13605__auto__ = function(state_16882){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13605__auto____1.call(this,state_16882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13605__auto____0;
cljs$core$async$state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13605__auto____1;
return cljs$core$async$state_machine__13605__auto__;
})()
;})(switch__13604__auto__,c__13621__auto___16904,out))
})();
var state__13623__auto__ = (function (){var statearr_16902 = (f__13622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13622__auto__.cljs$core$IFn$_invoke$arity$0() : f__13622__auto__.call(null));
(statearr_16902[(6)] = c__13621__auto___16904);

return statearr_16902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13623__auto__);
});})(c__13621__auto___16904,out))
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
var G__16918 = arguments.length;
switch (G__16918) {
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
var c__13621__auto___16963 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13621__auto___16963,out){
return (function (){
var f__13622__auto__ = (function (){var switch__13604__auto__ = ((function (c__13621__auto___16963,out){
return (function (state_16942){
var state_val_16943 = (state_16942[(1)]);
if((state_val_16943 === (7))){
var inst_16924 = (state_16942[(7)]);
var inst_16924__$1 = (state_16942[(2)]);
var inst_16925 = (inst_16924__$1 == null);
var inst_16926 = cljs.core.not(inst_16925);
var state_16942__$1 = (function (){var statearr_16944 = state_16942;
(statearr_16944[(7)] = inst_16924__$1);

return statearr_16944;
})();
if(inst_16926){
var statearr_16945_16964 = state_16942__$1;
(statearr_16945_16964[(1)] = (8));

} else {
var statearr_16946_16965 = state_16942__$1;
(statearr_16946_16965[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16943 === (1))){
var inst_16919 = (0);
var state_16942__$1 = (function (){var statearr_16947 = state_16942;
(statearr_16947[(8)] = inst_16919);

return statearr_16947;
})();
var statearr_16948_16966 = state_16942__$1;
(statearr_16948_16966[(2)] = null);

(statearr_16948_16966[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16943 === (4))){
var state_16942__$1 = state_16942;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16942__$1,(7),ch);
} else {
if((state_val_16943 === (6))){
var inst_16937 = (state_16942[(2)]);
var state_16942__$1 = state_16942;
var statearr_16949_16967 = state_16942__$1;
(statearr_16949_16967[(2)] = inst_16937);

(statearr_16949_16967[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16943 === (3))){
var inst_16939 = (state_16942[(2)]);
var inst_16940 = cljs.core.async.close_BANG_(out);
var state_16942__$1 = (function (){var statearr_16950 = state_16942;
(statearr_16950[(9)] = inst_16939);

return statearr_16950;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16942__$1,inst_16940);
} else {
if((state_val_16943 === (2))){
var inst_16919 = (state_16942[(8)]);
var inst_16921 = (inst_16919 < n);
var state_16942__$1 = state_16942;
if(cljs.core.truth_(inst_16921)){
var statearr_16951_16968 = state_16942__$1;
(statearr_16951_16968[(1)] = (4));

} else {
var statearr_16952_16969 = state_16942__$1;
(statearr_16952_16969[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16943 === (11))){
var inst_16919 = (state_16942[(8)]);
var inst_16929 = (state_16942[(2)]);
var inst_16930 = (inst_16919 + (1));
var inst_16919__$1 = inst_16930;
var state_16942__$1 = (function (){var statearr_16953 = state_16942;
(statearr_16953[(8)] = inst_16919__$1);

(statearr_16953[(10)] = inst_16929);

return statearr_16953;
})();
var statearr_16954_16970 = state_16942__$1;
(statearr_16954_16970[(2)] = null);

(statearr_16954_16970[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16943 === (9))){
var state_16942__$1 = state_16942;
var statearr_16955_16971 = state_16942__$1;
(statearr_16955_16971[(2)] = null);

(statearr_16955_16971[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16943 === (5))){
var state_16942__$1 = state_16942;
var statearr_16956_16972 = state_16942__$1;
(statearr_16956_16972[(2)] = null);

(statearr_16956_16972[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16943 === (10))){
var inst_16934 = (state_16942[(2)]);
var state_16942__$1 = state_16942;
var statearr_16957_16973 = state_16942__$1;
(statearr_16957_16973[(2)] = inst_16934);

(statearr_16957_16973[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16943 === (8))){
var inst_16924 = (state_16942[(7)]);
var state_16942__$1 = state_16942;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16942__$1,(11),out,inst_16924);
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
});})(c__13621__auto___16963,out))
;
return ((function (switch__13604__auto__,c__13621__auto___16963,out){
return (function() {
var cljs$core$async$state_machine__13605__auto__ = null;
var cljs$core$async$state_machine__13605__auto____0 = (function (){
var statearr_16958 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16958[(0)] = cljs$core$async$state_machine__13605__auto__);

(statearr_16958[(1)] = (1));

return statearr_16958;
});
var cljs$core$async$state_machine__13605__auto____1 = (function (state_16942){
while(true){
var ret_value__13606__auto__ = (function (){try{while(true){
var result__13607__auto__ = switch__13604__auto__(state_16942);
if(cljs.core.keyword_identical_QMARK_(result__13607__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13607__auto__;
}
break;
}
}catch (e16959){if((e16959 instanceof Object)){
var ex__13608__auto__ = e16959;
var statearr_16960_16974 = state_16942;
(statearr_16960_16974[(5)] = ex__13608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16942);

return cljs.core.cst$kw$recur;
} else {
throw e16959;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13606__auto__,cljs.core.cst$kw$recur)){
var G__16975 = state_16942;
state_16942 = G__16975;
continue;
} else {
return ret_value__13606__auto__;
}
break;
}
});
cljs$core$async$state_machine__13605__auto__ = function(state_16942){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13605__auto____1.call(this,state_16942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13605__auto____0;
cljs$core$async$state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13605__auto____1;
return cljs$core$async$state_machine__13605__auto__;
})()
;})(switch__13604__auto__,c__13621__auto___16963,out))
})();
var state__13623__auto__ = (function (){var statearr_16961 = (f__13622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13622__auto__.cljs$core$IFn$_invoke$arity$0() : f__13622__auto__.call(null));
(statearr_16961[(6)] = c__13621__auto___16963);

return statearr_16961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13623__auto__);
});})(c__13621__auto___16963,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16977 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16977 = (function (f,ch,meta16978){
this.f = f;
this.ch = ch;
this.meta16978 = meta16978;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16979,meta16978__$1){
var self__ = this;
var _16979__$1 = this;
return (new cljs.core.async.t_cljs$core$async16977(self__.f,self__.ch,meta16978__$1));
});

cljs.core.async.t_cljs$core$async16977.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16979){
var self__ = this;
var _16979__$1 = this;
return self__.meta16978;
});

cljs.core.async.t_cljs$core$async16977.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16977.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16977.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async16977.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16977.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16980 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16980 = (function (f,ch,meta16978,_,fn1,meta16981){
this.f = f;
this.ch = ch;
this.meta16978 = meta16978;
this._ = _;
this.fn1 = fn1;
this.meta16981 = meta16981;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16982,meta16981__$1){
var self__ = this;
var _16982__$1 = this;
return (new cljs.core.async.t_cljs$core$async16980(self__.f,self__.ch,self__.meta16978,self__._,self__.fn1,meta16981__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async16980.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16982){
var self__ = this;
var _16982__$1 = this;
return self__.meta16981;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16980.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16980.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16980.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16980.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__16976_SHARP_){
var G__16983 = (((p1__16976_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16976_SHARP_) : self__.f.call(null,p1__16976_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16983) : f1.call(null,G__16983));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async16980.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16978,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async16977], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta16981], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16980.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16980.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16980";

cljs.core.async.t_cljs$core$async16980.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async16980");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16980.
 */
cljs.core.async.__GT_t_cljs$core$async16980 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16980(f__$1,ch__$1,meta16978__$1,___$2,fn1__$1,meta16981){
return (new cljs.core.async.t_cljs$core$async16980(f__$1,ch__$1,meta16978__$1,___$2,fn1__$1,meta16981));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async16980(self__.f,self__.ch,self__.meta16978,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16984 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16984) : self__.f.call(null,G__16984));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async16977.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16977.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async16977.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16978], null);
});

cljs.core.async.t_cljs$core$async16977.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16977.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16977";

cljs.core.async.t_cljs$core$async16977.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async16977");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16977.
 */
cljs.core.async.__GT_t_cljs$core$async16977 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16977(f__$1,ch__$1,meta16978){
return (new cljs.core.async.t_cljs$core$async16977(f__$1,ch__$1,meta16978));
});

}

return (new cljs.core.async.t_cljs$core$async16977(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16985 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16985 = (function (f,ch,meta16986){
this.f = f;
this.ch = ch;
this.meta16986 = meta16986;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16987,meta16986__$1){
var self__ = this;
var _16987__$1 = this;
return (new cljs.core.async.t_cljs$core$async16985(self__.f,self__.ch,meta16986__$1));
});

cljs.core.async.t_cljs$core$async16985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16987){
var self__ = this;
var _16987__$1 = this;
return self__.meta16986;
});

cljs.core.async.t_cljs$core$async16985.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16985.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16985.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16985.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16985.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16985.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async16985.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16986], null);
});

cljs.core.async.t_cljs$core$async16985.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16985.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16985";

cljs.core.async.t_cljs$core$async16985.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async16985");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16985.
 */
cljs.core.async.__GT_t_cljs$core$async16985 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async16985(f__$1,ch__$1,meta16986){
return (new cljs.core.async.t_cljs$core$async16985(f__$1,ch__$1,meta16986));
});

}

return (new cljs.core.async.t_cljs$core$async16985(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16988 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16988 = (function (p,ch,meta16989){
this.p = p;
this.ch = ch;
this.meta16989 = meta16989;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16990,meta16989__$1){
var self__ = this;
var _16990__$1 = this;
return (new cljs.core.async.t_cljs$core$async16988(self__.p,self__.ch,meta16989__$1));
});

cljs.core.async.t_cljs$core$async16988.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16990){
var self__ = this;
var _16990__$1 = this;
return self__.meta16989;
});

cljs.core.async.t_cljs$core$async16988.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16988.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16988.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async16988.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16988.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16988.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16988.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async16988.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16989], null);
});

cljs.core.async.t_cljs$core$async16988.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16988.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16988";

cljs.core.async.t_cljs$core$async16988.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async16988");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16988.
 */
cljs.core.async.__GT_t_cljs$core$async16988 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async16988(p__$1,ch__$1,meta16989){
return (new cljs.core.async.t_cljs$core$async16988(p__$1,ch__$1,meta16989));
});

}

return (new cljs.core.async.t_cljs$core$async16988(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__16992 = arguments.length;
switch (G__16992) {
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
var c__13621__auto___17032 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13621__auto___17032,out){
return (function (){
var f__13622__auto__ = (function (){var switch__13604__auto__ = ((function (c__13621__auto___17032,out){
return (function (state_17013){
var state_val_17014 = (state_17013[(1)]);
if((state_val_17014 === (7))){
var inst_17009 = (state_17013[(2)]);
var state_17013__$1 = state_17013;
var statearr_17015_17033 = state_17013__$1;
(statearr_17015_17033[(2)] = inst_17009);

(statearr_17015_17033[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17014 === (1))){
var state_17013__$1 = state_17013;
var statearr_17016_17034 = state_17013__$1;
(statearr_17016_17034[(2)] = null);

(statearr_17016_17034[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17014 === (4))){
var inst_16995 = (state_17013[(7)]);
var inst_16995__$1 = (state_17013[(2)]);
var inst_16996 = (inst_16995__$1 == null);
var state_17013__$1 = (function (){var statearr_17017 = state_17013;
(statearr_17017[(7)] = inst_16995__$1);

return statearr_17017;
})();
if(cljs.core.truth_(inst_16996)){
var statearr_17018_17035 = state_17013__$1;
(statearr_17018_17035[(1)] = (5));

} else {
var statearr_17019_17036 = state_17013__$1;
(statearr_17019_17036[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17014 === (6))){
var inst_16995 = (state_17013[(7)]);
var inst_17000 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16995) : p.call(null,inst_16995));
var state_17013__$1 = state_17013;
if(cljs.core.truth_(inst_17000)){
var statearr_17020_17037 = state_17013__$1;
(statearr_17020_17037[(1)] = (8));

} else {
var statearr_17021_17038 = state_17013__$1;
(statearr_17021_17038[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17014 === (3))){
var inst_17011 = (state_17013[(2)]);
var state_17013__$1 = state_17013;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17013__$1,inst_17011);
} else {
if((state_val_17014 === (2))){
var state_17013__$1 = state_17013;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17013__$1,(4),ch);
} else {
if((state_val_17014 === (11))){
var inst_17003 = (state_17013[(2)]);
var state_17013__$1 = state_17013;
var statearr_17022_17039 = state_17013__$1;
(statearr_17022_17039[(2)] = inst_17003);

(statearr_17022_17039[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17014 === (9))){
var state_17013__$1 = state_17013;
var statearr_17023_17040 = state_17013__$1;
(statearr_17023_17040[(2)] = null);

(statearr_17023_17040[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17014 === (5))){
var inst_16998 = cljs.core.async.close_BANG_(out);
var state_17013__$1 = state_17013;
var statearr_17024_17041 = state_17013__$1;
(statearr_17024_17041[(2)] = inst_16998);

(statearr_17024_17041[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17014 === (10))){
var inst_17006 = (state_17013[(2)]);
var state_17013__$1 = (function (){var statearr_17025 = state_17013;
(statearr_17025[(8)] = inst_17006);

return statearr_17025;
})();
var statearr_17026_17042 = state_17013__$1;
(statearr_17026_17042[(2)] = null);

(statearr_17026_17042[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17014 === (8))){
var inst_16995 = (state_17013[(7)]);
var state_17013__$1 = state_17013;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17013__$1,(11),out,inst_16995);
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
});})(c__13621__auto___17032,out))
;
return ((function (switch__13604__auto__,c__13621__auto___17032,out){
return (function() {
var cljs$core$async$state_machine__13605__auto__ = null;
var cljs$core$async$state_machine__13605__auto____0 = (function (){
var statearr_17027 = [null,null,null,null,null,null,null,null,null];
(statearr_17027[(0)] = cljs$core$async$state_machine__13605__auto__);

(statearr_17027[(1)] = (1));

return statearr_17027;
});
var cljs$core$async$state_machine__13605__auto____1 = (function (state_17013){
while(true){
var ret_value__13606__auto__ = (function (){try{while(true){
var result__13607__auto__ = switch__13604__auto__(state_17013);
if(cljs.core.keyword_identical_QMARK_(result__13607__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13607__auto__;
}
break;
}
}catch (e17028){if((e17028 instanceof Object)){
var ex__13608__auto__ = e17028;
var statearr_17029_17043 = state_17013;
(statearr_17029_17043[(5)] = ex__13608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17013);

return cljs.core.cst$kw$recur;
} else {
throw e17028;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13606__auto__,cljs.core.cst$kw$recur)){
var G__17044 = state_17013;
state_17013 = G__17044;
continue;
} else {
return ret_value__13606__auto__;
}
break;
}
});
cljs$core$async$state_machine__13605__auto__ = function(state_17013){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13605__auto____1.call(this,state_17013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13605__auto____0;
cljs$core$async$state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13605__auto____1;
return cljs$core$async$state_machine__13605__auto__;
})()
;})(switch__13604__auto__,c__13621__auto___17032,out))
})();
var state__13623__auto__ = (function (){var statearr_17030 = (f__13622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13622__auto__.cljs$core$IFn$_invoke$arity$0() : f__13622__auto__.call(null));
(statearr_17030[(6)] = c__13621__auto___17032);

return statearr_17030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13623__auto__);
});})(c__13621__auto___17032,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17046 = arguments.length;
switch (G__17046) {
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
var c__13621__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13621__auto__){
return (function (){
var f__13622__auto__ = (function (){var switch__13604__auto__ = ((function (c__13621__auto__){
return (function (state_17109){
var state_val_17110 = (state_17109[(1)]);
if((state_val_17110 === (7))){
var inst_17105 = (state_17109[(2)]);
var state_17109__$1 = state_17109;
var statearr_17111_17149 = state_17109__$1;
(statearr_17111_17149[(2)] = inst_17105);

(statearr_17111_17149[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17110 === (20))){
var inst_17075 = (state_17109[(7)]);
var inst_17086 = (state_17109[(2)]);
var inst_17087 = cljs.core.next(inst_17075);
var inst_17061 = inst_17087;
var inst_17062 = null;
var inst_17063 = (0);
var inst_17064 = (0);
var state_17109__$1 = (function (){var statearr_17112 = state_17109;
(statearr_17112[(8)] = inst_17064);

(statearr_17112[(9)] = inst_17062);

(statearr_17112[(10)] = inst_17063);

(statearr_17112[(11)] = inst_17086);

(statearr_17112[(12)] = inst_17061);

return statearr_17112;
})();
var statearr_17113_17150 = state_17109__$1;
(statearr_17113_17150[(2)] = null);

(statearr_17113_17150[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17110 === (1))){
var state_17109__$1 = state_17109;
var statearr_17114_17151 = state_17109__$1;
(statearr_17114_17151[(2)] = null);

(statearr_17114_17151[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17110 === (4))){
var inst_17050 = (state_17109[(13)]);
var inst_17050__$1 = (state_17109[(2)]);
var inst_17051 = (inst_17050__$1 == null);
var state_17109__$1 = (function (){var statearr_17115 = state_17109;
(statearr_17115[(13)] = inst_17050__$1);

return statearr_17115;
})();
if(cljs.core.truth_(inst_17051)){
var statearr_17116_17152 = state_17109__$1;
(statearr_17116_17152[(1)] = (5));

} else {
var statearr_17117_17153 = state_17109__$1;
(statearr_17117_17153[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17110 === (15))){
var state_17109__$1 = state_17109;
var statearr_17121_17154 = state_17109__$1;
(statearr_17121_17154[(2)] = null);

(statearr_17121_17154[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17110 === (21))){
var state_17109__$1 = state_17109;
var statearr_17122_17155 = state_17109__$1;
(statearr_17122_17155[(2)] = null);

(statearr_17122_17155[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17110 === (13))){
var inst_17064 = (state_17109[(8)]);
var inst_17062 = (state_17109[(9)]);
var inst_17063 = (state_17109[(10)]);
var inst_17061 = (state_17109[(12)]);
var inst_17071 = (state_17109[(2)]);
var inst_17072 = (inst_17064 + (1));
var tmp17118 = inst_17062;
var tmp17119 = inst_17063;
var tmp17120 = inst_17061;
var inst_17061__$1 = tmp17120;
var inst_17062__$1 = tmp17118;
var inst_17063__$1 = tmp17119;
var inst_17064__$1 = inst_17072;
var state_17109__$1 = (function (){var statearr_17123 = state_17109;
(statearr_17123[(8)] = inst_17064__$1);

(statearr_17123[(9)] = inst_17062__$1);

(statearr_17123[(10)] = inst_17063__$1);

(statearr_17123[(14)] = inst_17071);

(statearr_17123[(12)] = inst_17061__$1);

return statearr_17123;
})();
var statearr_17124_17156 = state_17109__$1;
(statearr_17124_17156[(2)] = null);

(statearr_17124_17156[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17110 === (22))){
var state_17109__$1 = state_17109;
var statearr_17125_17157 = state_17109__$1;
(statearr_17125_17157[(2)] = null);

(statearr_17125_17157[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17110 === (6))){
var inst_17050 = (state_17109[(13)]);
var inst_17059 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17050) : f.call(null,inst_17050));
var inst_17060 = cljs.core.seq(inst_17059);
var inst_17061 = inst_17060;
var inst_17062 = null;
var inst_17063 = (0);
var inst_17064 = (0);
var state_17109__$1 = (function (){var statearr_17126 = state_17109;
(statearr_17126[(8)] = inst_17064);

(statearr_17126[(9)] = inst_17062);

(statearr_17126[(10)] = inst_17063);

(statearr_17126[(12)] = inst_17061);

return statearr_17126;
})();
var statearr_17127_17158 = state_17109__$1;
(statearr_17127_17158[(2)] = null);

(statearr_17127_17158[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17110 === (17))){
var inst_17075 = (state_17109[(7)]);
var inst_17079 = cljs.core.chunk_first(inst_17075);
var inst_17080 = cljs.core.chunk_rest(inst_17075);
var inst_17081 = cljs.core.count(inst_17079);
var inst_17061 = inst_17080;
var inst_17062 = inst_17079;
var inst_17063 = inst_17081;
var inst_17064 = (0);
var state_17109__$1 = (function (){var statearr_17128 = state_17109;
(statearr_17128[(8)] = inst_17064);

(statearr_17128[(9)] = inst_17062);

(statearr_17128[(10)] = inst_17063);

(statearr_17128[(12)] = inst_17061);

return statearr_17128;
})();
var statearr_17129_17159 = state_17109__$1;
(statearr_17129_17159[(2)] = null);

(statearr_17129_17159[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17110 === (3))){
var inst_17107 = (state_17109[(2)]);
var state_17109__$1 = state_17109;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17109__$1,inst_17107);
} else {
if((state_val_17110 === (12))){
var inst_17095 = (state_17109[(2)]);
var state_17109__$1 = state_17109;
var statearr_17130_17160 = state_17109__$1;
(statearr_17130_17160[(2)] = inst_17095);

(statearr_17130_17160[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17110 === (2))){
var state_17109__$1 = state_17109;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17109__$1,(4),in$);
} else {
if((state_val_17110 === (23))){
var inst_17103 = (state_17109[(2)]);
var state_17109__$1 = state_17109;
var statearr_17131_17161 = state_17109__$1;
(statearr_17131_17161[(2)] = inst_17103);

(statearr_17131_17161[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17110 === (19))){
var inst_17090 = (state_17109[(2)]);
var state_17109__$1 = state_17109;
var statearr_17132_17162 = state_17109__$1;
(statearr_17132_17162[(2)] = inst_17090);

(statearr_17132_17162[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17110 === (11))){
var inst_17075 = (state_17109[(7)]);
var inst_17061 = (state_17109[(12)]);
var inst_17075__$1 = cljs.core.seq(inst_17061);
var state_17109__$1 = (function (){var statearr_17133 = state_17109;
(statearr_17133[(7)] = inst_17075__$1);

return statearr_17133;
})();
if(inst_17075__$1){
var statearr_17134_17163 = state_17109__$1;
(statearr_17134_17163[(1)] = (14));

} else {
var statearr_17135_17164 = state_17109__$1;
(statearr_17135_17164[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17110 === (9))){
var inst_17097 = (state_17109[(2)]);
var inst_17098 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17109__$1 = (function (){var statearr_17136 = state_17109;
(statearr_17136[(15)] = inst_17097);

return statearr_17136;
})();
if(cljs.core.truth_(inst_17098)){
var statearr_17137_17165 = state_17109__$1;
(statearr_17137_17165[(1)] = (21));

} else {
var statearr_17138_17166 = state_17109__$1;
(statearr_17138_17166[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17110 === (5))){
var inst_17053 = cljs.core.async.close_BANG_(out);
var state_17109__$1 = state_17109;
var statearr_17139_17167 = state_17109__$1;
(statearr_17139_17167[(2)] = inst_17053);

(statearr_17139_17167[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17110 === (14))){
var inst_17075 = (state_17109[(7)]);
var inst_17077 = cljs.core.chunked_seq_QMARK_(inst_17075);
var state_17109__$1 = state_17109;
if(inst_17077){
var statearr_17140_17168 = state_17109__$1;
(statearr_17140_17168[(1)] = (17));

} else {
var statearr_17141_17169 = state_17109__$1;
(statearr_17141_17169[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17110 === (16))){
var inst_17093 = (state_17109[(2)]);
var state_17109__$1 = state_17109;
var statearr_17142_17170 = state_17109__$1;
(statearr_17142_17170[(2)] = inst_17093);

(statearr_17142_17170[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17110 === (10))){
var inst_17064 = (state_17109[(8)]);
var inst_17062 = (state_17109[(9)]);
var inst_17069 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17062,inst_17064);
var state_17109__$1 = state_17109;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17109__$1,(13),out,inst_17069);
} else {
if((state_val_17110 === (18))){
var inst_17075 = (state_17109[(7)]);
var inst_17084 = cljs.core.first(inst_17075);
var state_17109__$1 = state_17109;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17109__$1,(20),out,inst_17084);
} else {
if((state_val_17110 === (8))){
var inst_17064 = (state_17109[(8)]);
var inst_17063 = (state_17109[(10)]);
var inst_17066 = (inst_17064 < inst_17063);
var inst_17067 = inst_17066;
var state_17109__$1 = state_17109;
if(cljs.core.truth_(inst_17067)){
var statearr_17143_17171 = state_17109__$1;
(statearr_17143_17171[(1)] = (10));

} else {
var statearr_17144_17172 = state_17109__$1;
(statearr_17144_17172[(1)] = (11));

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
});})(c__13621__auto__))
;
return ((function (switch__13604__auto__,c__13621__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13605__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13605__auto____0 = (function (){
var statearr_17145 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17145[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13605__auto__);

(statearr_17145[(1)] = (1));

return statearr_17145;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13605__auto____1 = (function (state_17109){
while(true){
var ret_value__13606__auto__ = (function (){try{while(true){
var result__13607__auto__ = switch__13604__auto__(state_17109);
if(cljs.core.keyword_identical_QMARK_(result__13607__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13607__auto__;
}
break;
}
}catch (e17146){if((e17146 instanceof Object)){
var ex__13608__auto__ = e17146;
var statearr_17147_17173 = state_17109;
(statearr_17147_17173[(5)] = ex__13608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17109);

return cljs.core.cst$kw$recur;
} else {
throw e17146;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13606__auto__,cljs.core.cst$kw$recur)){
var G__17174 = state_17109;
state_17109 = G__17174;
continue;
} else {
return ret_value__13606__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13605__auto__ = function(state_17109){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13605__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13605__auto____1.call(this,state_17109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13605__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13605__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13605__auto__;
})()
;})(switch__13604__auto__,c__13621__auto__))
})();
var state__13623__auto__ = (function (){var statearr_17148 = (f__13622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13622__auto__.cljs$core$IFn$_invoke$arity$0() : f__13622__auto__.call(null));
(statearr_17148[(6)] = c__13621__auto__);

return statearr_17148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13623__auto__);
});})(c__13621__auto__))
);

return c__13621__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17176 = arguments.length;
switch (G__17176) {
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
var G__17179 = arguments.length;
switch (G__17179) {
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
var G__17182 = arguments.length;
switch (G__17182) {
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
var c__13621__auto___17229 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13621__auto___17229,out){
return (function (){
var f__13622__auto__ = (function (){var switch__13604__auto__ = ((function (c__13621__auto___17229,out){
return (function (state_17206){
var state_val_17207 = (state_17206[(1)]);
if((state_val_17207 === (7))){
var inst_17201 = (state_17206[(2)]);
var state_17206__$1 = state_17206;
var statearr_17208_17230 = state_17206__$1;
(statearr_17208_17230[(2)] = inst_17201);

(statearr_17208_17230[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17207 === (1))){
var inst_17183 = null;
var state_17206__$1 = (function (){var statearr_17209 = state_17206;
(statearr_17209[(7)] = inst_17183);

return statearr_17209;
})();
var statearr_17210_17231 = state_17206__$1;
(statearr_17210_17231[(2)] = null);

(statearr_17210_17231[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17207 === (4))){
var inst_17186 = (state_17206[(8)]);
var inst_17186__$1 = (state_17206[(2)]);
var inst_17187 = (inst_17186__$1 == null);
var inst_17188 = cljs.core.not(inst_17187);
var state_17206__$1 = (function (){var statearr_17211 = state_17206;
(statearr_17211[(8)] = inst_17186__$1);

return statearr_17211;
})();
if(inst_17188){
var statearr_17212_17232 = state_17206__$1;
(statearr_17212_17232[(1)] = (5));

} else {
var statearr_17213_17233 = state_17206__$1;
(statearr_17213_17233[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17207 === (6))){
var state_17206__$1 = state_17206;
var statearr_17214_17234 = state_17206__$1;
(statearr_17214_17234[(2)] = null);

(statearr_17214_17234[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17207 === (3))){
var inst_17203 = (state_17206[(2)]);
var inst_17204 = cljs.core.async.close_BANG_(out);
var state_17206__$1 = (function (){var statearr_17215 = state_17206;
(statearr_17215[(9)] = inst_17203);

return statearr_17215;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17206__$1,inst_17204);
} else {
if((state_val_17207 === (2))){
var state_17206__$1 = state_17206;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17206__$1,(4),ch);
} else {
if((state_val_17207 === (11))){
var inst_17186 = (state_17206[(8)]);
var inst_17195 = (state_17206[(2)]);
var inst_17183 = inst_17186;
var state_17206__$1 = (function (){var statearr_17216 = state_17206;
(statearr_17216[(10)] = inst_17195);

(statearr_17216[(7)] = inst_17183);

return statearr_17216;
})();
var statearr_17217_17235 = state_17206__$1;
(statearr_17217_17235[(2)] = null);

(statearr_17217_17235[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17207 === (9))){
var inst_17186 = (state_17206[(8)]);
var state_17206__$1 = state_17206;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17206__$1,(11),out,inst_17186);
} else {
if((state_val_17207 === (5))){
var inst_17186 = (state_17206[(8)]);
var inst_17183 = (state_17206[(7)]);
var inst_17190 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17186,inst_17183);
var state_17206__$1 = state_17206;
if(inst_17190){
var statearr_17219_17236 = state_17206__$1;
(statearr_17219_17236[(1)] = (8));

} else {
var statearr_17220_17237 = state_17206__$1;
(statearr_17220_17237[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17207 === (10))){
var inst_17198 = (state_17206[(2)]);
var state_17206__$1 = state_17206;
var statearr_17221_17238 = state_17206__$1;
(statearr_17221_17238[(2)] = inst_17198);

(statearr_17221_17238[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17207 === (8))){
var inst_17183 = (state_17206[(7)]);
var tmp17218 = inst_17183;
var inst_17183__$1 = tmp17218;
var state_17206__$1 = (function (){var statearr_17222 = state_17206;
(statearr_17222[(7)] = inst_17183__$1);

return statearr_17222;
})();
var statearr_17223_17239 = state_17206__$1;
(statearr_17223_17239[(2)] = null);

(statearr_17223_17239[(1)] = (2));


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
});})(c__13621__auto___17229,out))
;
return ((function (switch__13604__auto__,c__13621__auto___17229,out){
return (function() {
var cljs$core$async$state_machine__13605__auto__ = null;
var cljs$core$async$state_machine__13605__auto____0 = (function (){
var statearr_17224 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17224[(0)] = cljs$core$async$state_machine__13605__auto__);

(statearr_17224[(1)] = (1));

return statearr_17224;
});
var cljs$core$async$state_machine__13605__auto____1 = (function (state_17206){
while(true){
var ret_value__13606__auto__ = (function (){try{while(true){
var result__13607__auto__ = switch__13604__auto__(state_17206);
if(cljs.core.keyword_identical_QMARK_(result__13607__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13607__auto__;
}
break;
}
}catch (e17225){if((e17225 instanceof Object)){
var ex__13608__auto__ = e17225;
var statearr_17226_17240 = state_17206;
(statearr_17226_17240[(5)] = ex__13608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17206);

return cljs.core.cst$kw$recur;
} else {
throw e17225;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13606__auto__,cljs.core.cst$kw$recur)){
var G__17241 = state_17206;
state_17206 = G__17241;
continue;
} else {
return ret_value__13606__auto__;
}
break;
}
});
cljs$core$async$state_machine__13605__auto__ = function(state_17206){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13605__auto____1.call(this,state_17206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13605__auto____0;
cljs$core$async$state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13605__auto____1;
return cljs$core$async$state_machine__13605__auto__;
})()
;})(switch__13604__auto__,c__13621__auto___17229,out))
})();
var state__13623__auto__ = (function (){var statearr_17227 = (f__13622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13622__auto__.cljs$core$IFn$_invoke$arity$0() : f__13622__auto__.call(null));
(statearr_17227[(6)] = c__13621__auto___17229);

return statearr_17227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13623__auto__);
});})(c__13621__auto___17229,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17243 = arguments.length;
switch (G__17243) {
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
var c__13621__auto___17309 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13621__auto___17309,out){
return (function (){
var f__13622__auto__ = (function (){var switch__13604__auto__ = ((function (c__13621__auto___17309,out){
return (function (state_17281){
var state_val_17282 = (state_17281[(1)]);
if((state_val_17282 === (7))){
var inst_17277 = (state_17281[(2)]);
var state_17281__$1 = state_17281;
var statearr_17283_17310 = state_17281__$1;
(statearr_17283_17310[(2)] = inst_17277);

(statearr_17283_17310[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17282 === (1))){
var inst_17244 = (new Array(n));
var inst_17245 = inst_17244;
var inst_17246 = (0);
var state_17281__$1 = (function (){var statearr_17284 = state_17281;
(statearr_17284[(7)] = inst_17245);

(statearr_17284[(8)] = inst_17246);

return statearr_17284;
})();
var statearr_17285_17311 = state_17281__$1;
(statearr_17285_17311[(2)] = null);

(statearr_17285_17311[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17282 === (4))){
var inst_17249 = (state_17281[(9)]);
var inst_17249__$1 = (state_17281[(2)]);
var inst_17250 = (inst_17249__$1 == null);
var inst_17251 = cljs.core.not(inst_17250);
var state_17281__$1 = (function (){var statearr_17286 = state_17281;
(statearr_17286[(9)] = inst_17249__$1);

return statearr_17286;
})();
if(inst_17251){
var statearr_17287_17312 = state_17281__$1;
(statearr_17287_17312[(1)] = (5));

} else {
var statearr_17288_17313 = state_17281__$1;
(statearr_17288_17313[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17282 === (15))){
var inst_17271 = (state_17281[(2)]);
var state_17281__$1 = state_17281;
var statearr_17289_17314 = state_17281__$1;
(statearr_17289_17314[(2)] = inst_17271);

(statearr_17289_17314[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17282 === (13))){
var state_17281__$1 = state_17281;
var statearr_17290_17315 = state_17281__$1;
(statearr_17290_17315[(2)] = null);

(statearr_17290_17315[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17282 === (6))){
var inst_17246 = (state_17281[(8)]);
var inst_17267 = (inst_17246 > (0));
var state_17281__$1 = state_17281;
if(cljs.core.truth_(inst_17267)){
var statearr_17291_17316 = state_17281__$1;
(statearr_17291_17316[(1)] = (12));

} else {
var statearr_17292_17317 = state_17281__$1;
(statearr_17292_17317[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17282 === (3))){
var inst_17279 = (state_17281[(2)]);
var state_17281__$1 = state_17281;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17281__$1,inst_17279);
} else {
if((state_val_17282 === (12))){
var inst_17245 = (state_17281[(7)]);
var inst_17269 = cljs.core.vec(inst_17245);
var state_17281__$1 = state_17281;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17281__$1,(15),out,inst_17269);
} else {
if((state_val_17282 === (2))){
var state_17281__$1 = state_17281;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17281__$1,(4),ch);
} else {
if((state_val_17282 === (11))){
var inst_17261 = (state_17281[(2)]);
var inst_17262 = (new Array(n));
var inst_17245 = inst_17262;
var inst_17246 = (0);
var state_17281__$1 = (function (){var statearr_17293 = state_17281;
(statearr_17293[(7)] = inst_17245);

(statearr_17293[(8)] = inst_17246);

(statearr_17293[(10)] = inst_17261);

return statearr_17293;
})();
var statearr_17294_17318 = state_17281__$1;
(statearr_17294_17318[(2)] = null);

(statearr_17294_17318[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17282 === (9))){
var inst_17245 = (state_17281[(7)]);
var inst_17259 = cljs.core.vec(inst_17245);
var state_17281__$1 = state_17281;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17281__$1,(11),out,inst_17259);
} else {
if((state_val_17282 === (5))){
var inst_17254 = (state_17281[(11)]);
var inst_17245 = (state_17281[(7)]);
var inst_17246 = (state_17281[(8)]);
var inst_17249 = (state_17281[(9)]);
var inst_17253 = (inst_17245[inst_17246] = inst_17249);
var inst_17254__$1 = (inst_17246 + (1));
var inst_17255 = (inst_17254__$1 < n);
var state_17281__$1 = (function (){var statearr_17295 = state_17281;
(statearr_17295[(11)] = inst_17254__$1);

(statearr_17295[(12)] = inst_17253);

return statearr_17295;
})();
if(cljs.core.truth_(inst_17255)){
var statearr_17296_17319 = state_17281__$1;
(statearr_17296_17319[(1)] = (8));

} else {
var statearr_17297_17320 = state_17281__$1;
(statearr_17297_17320[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17282 === (14))){
var inst_17274 = (state_17281[(2)]);
var inst_17275 = cljs.core.async.close_BANG_(out);
var state_17281__$1 = (function (){var statearr_17299 = state_17281;
(statearr_17299[(13)] = inst_17274);

return statearr_17299;
})();
var statearr_17300_17321 = state_17281__$1;
(statearr_17300_17321[(2)] = inst_17275);

(statearr_17300_17321[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17282 === (10))){
var inst_17265 = (state_17281[(2)]);
var state_17281__$1 = state_17281;
var statearr_17301_17322 = state_17281__$1;
(statearr_17301_17322[(2)] = inst_17265);

(statearr_17301_17322[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17282 === (8))){
var inst_17254 = (state_17281[(11)]);
var inst_17245 = (state_17281[(7)]);
var tmp17298 = inst_17245;
var inst_17245__$1 = tmp17298;
var inst_17246 = inst_17254;
var state_17281__$1 = (function (){var statearr_17302 = state_17281;
(statearr_17302[(7)] = inst_17245__$1);

(statearr_17302[(8)] = inst_17246);

return statearr_17302;
})();
var statearr_17303_17323 = state_17281__$1;
(statearr_17303_17323[(2)] = null);

(statearr_17303_17323[(1)] = (2));


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
});})(c__13621__auto___17309,out))
;
return ((function (switch__13604__auto__,c__13621__auto___17309,out){
return (function() {
var cljs$core$async$state_machine__13605__auto__ = null;
var cljs$core$async$state_machine__13605__auto____0 = (function (){
var statearr_17304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17304[(0)] = cljs$core$async$state_machine__13605__auto__);

(statearr_17304[(1)] = (1));

return statearr_17304;
});
var cljs$core$async$state_machine__13605__auto____1 = (function (state_17281){
while(true){
var ret_value__13606__auto__ = (function (){try{while(true){
var result__13607__auto__ = switch__13604__auto__(state_17281);
if(cljs.core.keyword_identical_QMARK_(result__13607__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13607__auto__;
}
break;
}
}catch (e17305){if((e17305 instanceof Object)){
var ex__13608__auto__ = e17305;
var statearr_17306_17324 = state_17281;
(statearr_17306_17324[(5)] = ex__13608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17281);

return cljs.core.cst$kw$recur;
} else {
throw e17305;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13606__auto__,cljs.core.cst$kw$recur)){
var G__17325 = state_17281;
state_17281 = G__17325;
continue;
} else {
return ret_value__13606__auto__;
}
break;
}
});
cljs$core$async$state_machine__13605__auto__ = function(state_17281){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13605__auto____1.call(this,state_17281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13605__auto____0;
cljs$core$async$state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13605__auto____1;
return cljs$core$async$state_machine__13605__auto__;
})()
;})(switch__13604__auto__,c__13621__auto___17309,out))
})();
var state__13623__auto__ = (function (){var statearr_17307 = (f__13622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13622__auto__.cljs$core$IFn$_invoke$arity$0() : f__13622__auto__.call(null));
(statearr_17307[(6)] = c__13621__auto___17309);

return statearr_17307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13623__auto__);
});})(c__13621__auto___17309,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17327 = arguments.length;
switch (G__17327) {
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
var c__13621__auto___17397 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13621__auto___17397,out){
return (function (){
var f__13622__auto__ = (function (){var switch__13604__auto__ = ((function (c__13621__auto___17397,out){
return (function (state_17369){
var state_val_17370 = (state_17369[(1)]);
if((state_val_17370 === (7))){
var inst_17365 = (state_17369[(2)]);
var state_17369__$1 = state_17369;
var statearr_17371_17398 = state_17369__$1;
(statearr_17371_17398[(2)] = inst_17365);

(statearr_17371_17398[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17370 === (1))){
var inst_17328 = [];
var inst_17329 = inst_17328;
var inst_17330 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_17369__$1 = (function (){var statearr_17372 = state_17369;
(statearr_17372[(7)] = inst_17329);

(statearr_17372[(8)] = inst_17330);

return statearr_17372;
})();
var statearr_17373_17399 = state_17369__$1;
(statearr_17373_17399[(2)] = null);

(statearr_17373_17399[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17370 === (4))){
var inst_17333 = (state_17369[(9)]);
var inst_17333__$1 = (state_17369[(2)]);
var inst_17334 = (inst_17333__$1 == null);
var inst_17335 = cljs.core.not(inst_17334);
var state_17369__$1 = (function (){var statearr_17374 = state_17369;
(statearr_17374[(9)] = inst_17333__$1);

return statearr_17374;
})();
if(inst_17335){
var statearr_17375_17400 = state_17369__$1;
(statearr_17375_17400[(1)] = (5));

} else {
var statearr_17376_17401 = state_17369__$1;
(statearr_17376_17401[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17370 === (15))){
var inst_17359 = (state_17369[(2)]);
var state_17369__$1 = state_17369;
var statearr_17377_17402 = state_17369__$1;
(statearr_17377_17402[(2)] = inst_17359);

(statearr_17377_17402[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17370 === (13))){
var state_17369__$1 = state_17369;
var statearr_17378_17403 = state_17369__$1;
(statearr_17378_17403[(2)] = null);

(statearr_17378_17403[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17370 === (6))){
var inst_17329 = (state_17369[(7)]);
var inst_17354 = inst_17329.length;
var inst_17355 = (inst_17354 > (0));
var state_17369__$1 = state_17369;
if(cljs.core.truth_(inst_17355)){
var statearr_17379_17404 = state_17369__$1;
(statearr_17379_17404[(1)] = (12));

} else {
var statearr_17380_17405 = state_17369__$1;
(statearr_17380_17405[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17370 === (3))){
var inst_17367 = (state_17369[(2)]);
var state_17369__$1 = state_17369;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17369__$1,inst_17367);
} else {
if((state_val_17370 === (12))){
var inst_17329 = (state_17369[(7)]);
var inst_17357 = cljs.core.vec(inst_17329);
var state_17369__$1 = state_17369;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17369__$1,(15),out,inst_17357);
} else {
if((state_val_17370 === (2))){
var state_17369__$1 = state_17369;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17369__$1,(4),ch);
} else {
if((state_val_17370 === (11))){
var inst_17337 = (state_17369[(10)]);
var inst_17333 = (state_17369[(9)]);
var inst_17347 = (state_17369[(2)]);
var inst_17348 = [];
var inst_17349 = inst_17348.push(inst_17333);
var inst_17329 = inst_17348;
var inst_17330 = inst_17337;
var state_17369__$1 = (function (){var statearr_17381 = state_17369;
(statearr_17381[(7)] = inst_17329);

(statearr_17381[(11)] = inst_17349);

(statearr_17381[(8)] = inst_17330);

(statearr_17381[(12)] = inst_17347);

return statearr_17381;
})();
var statearr_17382_17406 = state_17369__$1;
(statearr_17382_17406[(2)] = null);

(statearr_17382_17406[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17370 === (9))){
var inst_17329 = (state_17369[(7)]);
var inst_17345 = cljs.core.vec(inst_17329);
var state_17369__$1 = state_17369;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17369__$1,(11),out,inst_17345);
} else {
if((state_val_17370 === (5))){
var inst_17337 = (state_17369[(10)]);
var inst_17333 = (state_17369[(9)]);
var inst_17330 = (state_17369[(8)]);
var inst_17337__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17333) : f.call(null,inst_17333));
var inst_17338 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17337__$1,inst_17330);
var inst_17339 = cljs.core.keyword_identical_QMARK_(inst_17330,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_17340 = ((inst_17338) || (inst_17339));
var state_17369__$1 = (function (){var statearr_17383 = state_17369;
(statearr_17383[(10)] = inst_17337__$1);

return statearr_17383;
})();
if(cljs.core.truth_(inst_17340)){
var statearr_17384_17407 = state_17369__$1;
(statearr_17384_17407[(1)] = (8));

} else {
var statearr_17385_17408 = state_17369__$1;
(statearr_17385_17408[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17370 === (14))){
var inst_17362 = (state_17369[(2)]);
var inst_17363 = cljs.core.async.close_BANG_(out);
var state_17369__$1 = (function (){var statearr_17387 = state_17369;
(statearr_17387[(13)] = inst_17362);

return statearr_17387;
})();
var statearr_17388_17409 = state_17369__$1;
(statearr_17388_17409[(2)] = inst_17363);

(statearr_17388_17409[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17370 === (10))){
var inst_17352 = (state_17369[(2)]);
var state_17369__$1 = state_17369;
var statearr_17389_17410 = state_17369__$1;
(statearr_17389_17410[(2)] = inst_17352);

(statearr_17389_17410[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17370 === (8))){
var inst_17329 = (state_17369[(7)]);
var inst_17337 = (state_17369[(10)]);
var inst_17333 = (state_17369[(9)]);
var inst_17342 = inst_17329.push(inst_17333);
var tmp17386 = inst_17329;
var inst_17329__$1 = tmp17386;
var inst_17330 = inst_17337;
var state_17369__$1 = (function (){var statearr_17390 = state_17369;
(statearr_17390[(7)] = inst_17329__$1);

(statearr_17390[(14)] = inst_17342);

(statearr_17390[(8)] = inst_17330);

return statearr_17390;
})();
var statearr_17391_17411 = state_17369__$1;
(statearr_17391_17411[(2)] = null);

(statearr_17391_17411[(1)] = (2));


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
});})(c__13621__auto___17397,out))
;
return ((function (switch__13604__auto__,c__13621__auto___17397,out){
return (function() {
var cljs$core$async$state_machine__13605__auto__ = null;
var cljs$core$async$state_machine__13605__auto____0 = (function (){
var statearr_17392 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17392[(0)] = cljs$core$async$state_machine__13605__auto__);

(statearr_17392[(1)] = (1));

return statearr_17392;
});
var cljs$core$async$state_machine__13605__auto____1 = (function (state_17369){
while(true){
var ret_value__13606__auto__ = (function (){try{while(true){
var result__13607__auto__ = switch__13604__auto__(state_17369);
if(cljs.core.keyword_identical_QMARK_(result__13607__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13607__auto__;
}
break;
}
}catch (e17393){if((e17393 instanceof Object)){
var ex__13608__auto__ = e17393;
var statearr_17394_17412 = state_17369;
(statearr_17394_17412[(5)] = ex__13608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17369);

return cljs.core.cst$kw$recur;
} else {
throw e17393;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13606__auto__,cljs.core.cst$kw$recur)){
var G__17413 = state_17369;
state_17369 = G__17413;
continue;
} else {
return ret_value__13606__auto__;
}
break;
}
});
cljs$core$async$state_machine__13605__auto__ = function(state_17369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13605__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13605__auto____1.call(this,state_17369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13605__auto____0;
cljs$core$async$state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13605__auto____1;
return cljs$core$async$state_machine__13605__auto__;
})()
;})(switch__13604__auto__,c__13621__auto___17397,out))
})();
var state__13623__auto__ = (function (){var statearr_17395 = (f__13622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13622__auto__.cljs$core$IFn$_invoke$arity$0() : f__13622__auto__.call(null));
(statearr_17395[(6)] = c__13621__auto___17397);

return statearr_17395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13623__auto__);
});})(c__13621__auto___17397,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

