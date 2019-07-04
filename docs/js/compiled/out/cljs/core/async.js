// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14445 = arguments.length;
switch (G__14445) {
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
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14446 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14446 = (function (f,blockable,meta14447){
this.f = f;
this.blockable = blockable;
this.meta14447 = meta14447;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14448,meta14447__$1){
var self__ = this;
var _14448__$1 = this;
return (new cljs.core.async.t_cljs$core$async14446(self__.f,self__.blockable,meta14447__$1));
});

cljs.core.async.t_cljs$core$async14446.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14448){
var self__ = this;
var _14448__$1 = this;
return self__.meta14447;
});

cljs.core.async.t_cljs$core$async14446.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14446.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14446.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async14446.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async14446.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14447","meta14447",951442901,null)], null);
});

cljs.core.async.t_cljs$core$async14446.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14446.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14446";

cljs.core.async.t_cljs$core$async14446.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async14446");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14446.
 */
cljs.core.async.__GT_t_cljs$core$async14446 = (function cljs$core$async$__GT_t_cljs$core$async14446(f__$1,blockable__$1,meta14447){
return (new cljs.core.async.t_cljs$core$async14446(f__$1,blockable__$1,meta14447));
});

}

return (new cljs.core.async.t_cljs$core$async14446(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__14452 = arguments.length;
switch (G__14452) {
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
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__14455 = arguments.length;
switch (G__14455) {
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
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__14458 = arguments.length;
switch (G__14458) {
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
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_14460 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_14460);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_14460,ret){
return (function (){
return fn1.call(null,val_14460);
});})(val_14460,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var G__14462 = arguments.length;
switch (G__14462) {
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
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
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
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___14464 = n;
var x_14465 = (0);
while(true){
if((x_14465 < n__4607__auto___14464)){
(a[x_14465] = (0));

var G__14466 = (x_14465 + (1));
x_14465 = G__14466;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__14467 = (i + (1));
i = G__14467;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14468 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14468 = (function (flag,meta14469){
this.flag = flag;
this.meta14469 = meta14469;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14470,meta14469__$1){
var self__ = this;
var _14470__$1 = this;
return (new cljs.core.async.t_cljs$core$async14468(self__.flag,meta14469__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async14468.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14470){
var self__ = this;
var _14470__$1 = this;
return self__.meta14469;
});})(flag))
;

cljs.core.async.t_cljs$core$async14468.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14468.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async14468.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14468.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14468.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14469","meta14469",-1812282693,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async14468.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14468.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14468";

cljs.core.async.t_cljs$core$async14468.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async14468");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14468.
 */
cljs.core.async.__GT_t_cljs$core$async14468 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async14468(flag__$1,meta14469){
return (new cljs.core.async.t_cljs$core$async14468(flag__$1,meta14469));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async14468(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14471 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14471 = (function (flag,cb,meta14472){
this.flag = flag;
this.cb = cb;
this.meta14472 = meta14472;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14473,meta14472__$1){
var self__ = this;
var _14473__$1 = this;
return (new cljs.core.async.t_cljs$core$async14471(self__.flag,self__.cb,meta14472__$1));
});

cljs.core.async.t_cljs$core$async14471.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14473){
var self__ = this;
var _14473__$1 = this;
return self__.meta14472;
});

cljs.core.async.t_cljs$core$async14471.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14471.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async14471.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14471.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async14471.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14472","meta14472",-1148373749,null)], null);
});

cljs.core.async.t_cljs$core$async14471.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14471.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14471";

cljs.core.async.t_cljs$core$async14471.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async14471");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14471.
 */
cljs.core.async.__GT_t_cljs$core$async14471 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async14471(flag__$1,cb__$1,meta14472){
return (new cljs.core.async.t_cljs$core$async14471(flag__$1,cb__$1,meta14472));
});

}

return (new cljs.core.async.t_cljs$core$async14471(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14474_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14474_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14475_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14475_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__14476 = (i + (1));
i = G__14476;
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
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var len__4730__auto___14482 = arguments.length;
var i__4731__auto___14483 = (0);
while(true){
if((i__4731__auto___14483 < len__4730__auto___14482)){
args__4736__auto__.push((arguments[i__4731__auto___14483]));

var G__14484 = (i__4731__auto___14483 + (1));
i__4731__auto___14483 = G__14484;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14479){
var map__14480 = p__14479;
var map__14480__$1 = (((((!((map__14480 == null))))?(((((map__14480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14480):map__14480);
var opts = map__14480__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14477){
var G__14478 = cljs.core.first.call(null,seq14477);
var seq14477__$1 = cljs.core.next.call(null,seq14477);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14478,seq14477__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__14486 = arguments.length;
switch (G__14486) {
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
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14385__auto___14532 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14385__auto___14532){
return (function (){
var f__14386__auto__ = (function (){var switch__14368__auto__ = ((function (c__14385__auto___14532){
return (function (state_14510){
var state_val_14511 = (state_14510[(1)]);
if((state_val_14511 === (7))){
var inst_14506 = (state_14510[(2)]);
var state_14510__$1 = state_14510;
var statearr_14512_14533 = state_14510__$1;
(statearr_14512_14533[(2)] = inst_14506);

(statearr_14512_14533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14511 === (1))){
var state_14510__$1 = state_14510;
var statearr_14513_14534 = state_14510__$1;
(statearr_14513_14534[(2)] = null);

(statearr_14513_14534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14511 === (4))){
var inst_14489 = (state_14510[(7)]);
var inst_14489__$1 = (state_14510[(2)]);
var inst_14490 = (inst_14489__$1 == null);
var state_14510__$1 = (function (){var statearr_14514 = state_14510;
(statearr_14514[(7)] = inst_14489__$1);

return statearr_14514;
})();
if(cljs.core.truth_(inst_14490)){
var statearr_14515_14535 = state_14510__$1;
(statearr_14515_14535[(1)] = (5));

} else {
var statearr_14516_14536 = state_14510__$1;
(statearr_14516_14536[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14511 === (13))){
var state_14510__$1 = state_14510;
var statearr_14517_14537 = state_14510__$1;
(statearr_14517_14537[(2)] = null);

(statearr_14517_14537[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14511 === (6))){
var inst_14489 = (state_14510[(7)]);
var state_14510__$1 = state_14510;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14510__$1,(11),to,inst_14489);
} else {
if((state_val_14511 === (3))){
var inst_14508 = (state_14510[(2)]);
var state_14510__$1 = state_14510;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14510__$1,inst_14508);
} else {
if((state_val_14511 === (12))){
var state_14510__$1 = state_14510;
var statearr_14518_14538 = state_14510__$1;
(statearr_14518_14538[(2)] = null);

(statearr_14518_14538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14511 === (2))){
var state_14510__$1 = state_14510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14510__$1,(4),from);
} else {
if((state_val_14511 === (11))){
var inst_14499 = (state_14510[(2)]);
var state_14510__$1 = state_14510;
if(cljs.core.truth_(inst_14499)){
var statearr_14519_14539 = state_14510__$1;
(statearr_14519_14539[(1)] = (12));

} else {
var statearr_14520_14540 = state_14510__$1;
(statearr_14520_14540[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14511 === (9))){
var state_14510__$1 = state_14510;
var statearr_14521_14541 = state_14510__$1;
(statearr_14521_14541[(2)] = null);

(statearr_14521_14541[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14511 === (5))){
var state_14510__$1 = state_14510;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14522_14542 = state_14510__$1;
(statearr_14522_14542[(1)] = (8));

} else {
var statearr_14523_14543 = state_14510__$1;
(statearr_14523_14543[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14511 === (14))){
var inst_14504 = (state_14510[(2)]);
var state_14510__$1 = state_14510;
var statearr_14524_14544 = state_14510__$1;
(statearr_14524_14544[(2)] = inst_14504);

(statearr_14524_14544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14511 === (10))){
var inst_14496 = (state_14510[(2)]);
var state_14510__$1 = state_14510;
var statearr_14525_14545 = state_14510__$1;
(statearr_14525_14545[(2)] = inst_14496);

(statearr_14525_14545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14511 === (8))){
var inst_14493 = cljs.core.async.close_BANG_.call(null,to);
var state_14510__$1 = state_14510;
var statearr_14526_14546 = state_14510__$1;
(statearr_14526_14546[(2)] = inst_14493);

(statearr_14526_14546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__14385__auto___14532))
;
return ((function (switch__14368__auto__,c__14385__auto___14532){
return (function() {
var cljs$core$async$state_machine__14369__auto__ = null;
var cljs$core$async$state_machine__14369__auto____0 = (function (){
var statearr_14527 = [null,null,null,null,null,null,null,null];
(statearr_14527[(0)] = cljs$core$async$state_machine__14369__auto__);

(statearr_14527[(1)] = (1));

return statearr_14527;
});
var cljs$core$async$state_machine__14369__auto____1 = (function (state_14510){
while(true){
var ret_value__14370__auto__ = (function (){try{while(true){
var result__14371__auto__ = switch__14368__auto__.call(null,state_14510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14371__auto__;
}
break;
}
}catch (e14528){if((e14528 instanceof Object)){
var ex__14372__auto__ = e14528;
var statearr_14529_14547 = state_14510;
(statearr_14529_14547[(5)] = ex__14372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14548 = state_14510;
state_14510 = G__14548;
continue;
} else {
return ret_value__14370__auto__;
}
break;
}
});
cljs$core$async$state_machine__14369__auto__ = function(state_14510){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14369__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14369__auto____1.call(this,state_14510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14369__auto____0;
cljs$core$async$state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14369__auto____1;
return cljs$core$async$state_machine__14369__auto__;
})()
;})(switch__14368__auto__,c__14385__auto___14532))
})();
var state__14387__auto__ = (function (){var statearr_14530 = f__14386__auto__.call(null);
(statearr_14530[(6)] = c__14385__auto___14532);

return statearr_14530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14387__auto__);
});})(c__14385__auto___14532))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__14549){
var vec__14550 = p__14549;
var v = cljs.core.nth.call(null,vec__14550,(0),null);
var p = cljs.core.nth.call(null,vec__14550,(1),null);
var job = vec__14550;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__14385__auto___14721 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14385__auto___14721,res,vec__14550,v,p,job,jobs,results){
return (function (){
var f__14386__auto__ = (function (){var switch__14368__auto__ = ((function (c__14385__auto___14721,res,vec__14550,v,p,job,jobs,results){
return (function (state_14557){
var state_val_14558 = (state_14557[(1)]);
if((state_val_14558 === (1))){
var state_14557__$1 = state_14557;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14557__$1,(2),res,v);
} else {
if((state_val_14558 === (2))){
var inst_14554 = (state_14557[(2)]);
var inst_14555 = cljs.core.async.close_BANG_.call(null,res);
var state_14557__$1 = (function (){var statearr_14559 = state_14557;
(statearr_14559[(7)] = inst_14554);

return statearr_14559;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14557__$1,inst_14555);
} else {
return null;
}
}
});})(c__14385__auto___14721,res,vec__14550,v,p,job,jobs,results))
;
return ((function (switch__14368__auto__,c__14385__auto___14721,res,vec__14550,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14369__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14369__auto____0 = (function (){
var statearr_14560 = [null,null,null,null,null,null,null,null];
(statearr_14560[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14369__auto__);

(statearr_14560[(1)] = (1));

return statearr_14560;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14369__auto____1 = (function (state_14557){
while(true){
var ret_value__14370__auto__ = (function (){try{while(true){
var result__14371__auto__ = switch__14368__auto__.call(null,state_14557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14371__auto__;
}
break;
}
}catch (e14561){if((e14561 instanceof Object)){
var ex__14372__auto__ = e14561;
var statearr_14562_14722 = state_14557;
(statearr_14562_14722[(5)] = ex__14372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14723 = state_14557;
state_14557 = G__14723;
continue;
} else {
return ret_value__14370__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14369__auto__ = function(state_14557){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14369__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14369__auto____1.call(this,state_14557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14369__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14369__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14369__auto__;
})()
;})(switch__14368__auto__,c__14385__auto___14721,res,vec__14550,v,p,job,jobs,results))
})();
var state__14387__auto__ = (function (){var statearr_14563 = f__14386__auto__.call(null);
(statearr_14563[(6)] = c__14385__auto___14721);

return statearr_14563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14387__auto__);
});})(c__14385__auto___14721,res,vec__14550,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__14564){
var vec__14565 = p__14564;
var v = cljs.core.nth.call(null,vec__14565,(0),null);
var p = cljs.core.nth.call(null,vec__14565,(1),null);
var job = vec__14565;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___14724 = n;
var __14725 = (0);
while(true){
if((__14725 < n__4607__auto___14724)){
var G__14568_14726 = type;
var G__14568_14727__$1 = (((G__14568_14726 instanceof cljs.core.Keyword))?G__14568_14726.fqn:null);
switch (G__14568_14727__$1) {
case "compute":
var c__14385__auto___14729 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14725,c__14385__auto___14729,G__14568_14726,G__14568_14727__$1,n__4607__auto___14724,jobs,results,process,async){
return (function (){
var f__14386__auto__ = (function (){var switch__14368__auto__ = ((function (__14725,c__14385__auto___14729,G__14568_14726,G__14568_14727__$1,n__4607__auto___14724,jobs,results,process,async){
return (function (state_14581){
var state_val_14582 = (state_14581[(1)]);
if((state_val_14582 === (1))){
var state_14581__$1 = state_14581;
var statearr_14583_14730 = state_14581__$1;
(statearr_14583_14730[(2)] = null);

(statearr_14583_14730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14582 === (2))){
var state_14581__$1 = state_14581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14581__$1,(4),jobs);
} else {
if((state_val_14582 === (3))){
var inst_14579 = (state_14581[(2)]);
var state_14581__$1 = state_14581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14581__$1,inst_14579);
} else {
if((state_val_14582 === (4))){
var inst_14571 = (state_14581[(2)]);
var inst_14572 = process.call(null,inst_14571);
var state_14581__$1 = state_14581;
if(cljs.core.truth_(inst_14572)){
var statearr_14584_14731 = state_14581__$1;
(statearr_14584_14731[(1)] = (5));

} else {
var statearr_14585_14732 = state_14581__$1;
(statearr_14585_14732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14582 === (5))){
var state_14581__$1 = state_14581;
var statearr_14586_14733 = state_14581__$1;
(statearr_14586_14733[(2)] = null);

(statearr_14586_14733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14582 === (6))){
var state_14581__$1 = state_14581;
var statearr_14587_14734 = state_14581__$1;
(statearr_14587_14734[(2)] = null);

(statearr_14587_14734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14582 === (7))){
var inst_14577 = (state_14581[(2)]);
var state_14581__$1 = state_14581;
var statearr_14588_14735 = state_14581__$1;
(statearr_14588_14735[(2)] = inst_14577);

(statearr_14588_14735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__14725,c__14385__auto___14729,G__14568_14726,G__14568_14727__$1,n__4607__auto___14724,jobs,results,process,async))
;
return ((function (__14725,switch__14368__auto__,c__14385__auto___14729,G__14568_14726,G__14568_14727__$1,n__4607__auto___14724,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14369__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14369__auto____0 = (function (){
var statearr_14589 = [null,null,null,null,null,null,null];
(statearr_14589[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14369__auto__);

(statearr_14589[(1)] = (1));

return statearr_14589;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14369__auto____1 = (function (state_14581){
while(true){
var ret_value__14370__auto__ = (function (){try{while(true){
var result__14371__auto__ = switch__14368__auto__.call(null,state_14581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14371__auto__;
}
break;
}
}catch (e14590){if((e14590 instanceof Object)){
var ex__14372__auto__ = e14590;
var statearr_14591_14736 = state_14581;
(statearr_14591_14736[(5)] = ex__14372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14737 = state_14581;
state_14581 = G__14737;
continue;
} else {
return ret_value__14370__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14369__auto__ = function(state_14581){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14369__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14369__auto____1.call(this,state_14581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14369__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14369__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14369__auto__;
})()
;})(__14725,switch__14368__auto__,c__14385__auto___14729,G__14568_14726,G__14568_14727__$1,n__4607__auto___14724,jobs,results,process,async))
})();
var state__14387__auto__ = (function (){var statearr_14592 = f__14386__auto__.call(null);
(statearr_14592[(6)] = c__14385__auto___14729);

return statearr_14592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14387__auto__);
});})(__14725,c__14385__auto___14729,G__14568_14726,G__14568_14727__$1,n__4607__auto___14724,jobs,results,process,async))
);


break;
case "async":
var c__14385__auto___14738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14725,c__14385__auto___14738,G__14568_14726,G__14568_14727__$1,n__4607__auto___14724,jobs,results,process,async){
return (function (){
var f__14386__auto__ = (function (){var switch__14368__auto__ = ((function (__14725,c__14385__auto___14738,G__14568_14726,G__14568_14727__$1,n__4607__auto___14724,jobs,results,process,async){
return (function (state_14605){
var state_val_14606 = (state_14605[(1)]);
if((state_val_14606 === (1))){
var state_14605__$1 = state_14605;
var statearr_14607_14739 = state_14605__$1;
(statearr_14607_14739[(2)] = null);

(statearr_14607_14739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14606 === (2))){
var state_14605__$1 = state_14605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14605__$1,(4),jobs);
} else {
if((state_val_14606 === (3))){
var inst_14603 = (state_14605[(2)]);
var state_14605__$1 = state_14605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14605__$1,inst_14603);
} else {
if((state_val_14606 === (4))){
var inst_14595 = (state_14605[(2)]);
var inst_14596 = async.call(null,inst_14595);
var state_14605__$1 = state_14605;
if(cljs.core.truth_(inst_14596)){
var statearr_14608_14740 = state_14605__$1;
(statearr_14608_14740[(1)] = (5));

} else {
var statearr_14609_14741 = state_14605__$1;
(statearr_14609_14741[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14606 === (5))){
var state_14605__$1 = state_14605;
var statearr_14610_14742 = state_14605__$1;
(statearr_14610_14742[(2)] = null);

(statearr_14610_14742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14606 === (6))){
var state_14605__$1 = state_14605;
var statearr_14611_14743 = state_14605__$1;
(statearr_14611_14743[(2)] = null);

(statearr_14611_14743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14606 === (7))){
var inst_14601 = (state_14605[(2)]);
var state_14605__$1 = state_14605;
var statearr_14612_14744 = state_14605__$1;
(statearr_14612_14744[(2)] = inst_14601);

(statearr_14612_14744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__14725,c__14385__auto___14738,G__14568_14726,G__14568_14727__$1,n__4607__auto___14724,jobs,results,process,async))
;
return ((function (__14725,switch__14368__auto__,c__14385__auto___14738,G__14568_14726,G__14568_14727__$1,n__4607__auto___14724,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14369__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14369__auto____0 = (function (){
var statearr_14613 = [null,null,null,null,null,null,null];
(statearr_14613[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14369__auto__);

(statearr_14613[(1)] = (1));

return statearr_14613;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14369__auto____1 = (function (state_14605){
while(true){
var ret_value__14370__auto__ = (function (){try{while(true){
var result__14371__auto__ = switch__14368__auto__.call(null,state_14605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14371__auto__;
}
break;
}
}catch (e14614){if((e14614 instanceof Object)){
var ex__14372__auto__ = e14614;
var statearr_14615_14745 = state_14605;
(statearr_14615_14745[(5)] = ex__14372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14746 = state_14605;
state_14605 = G__14746;
continue;
} else {
return ret_value__14370__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14369__auto__ = function(state_14605){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14369__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14369__auto____1.call(this,state_14605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14369__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14369__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14369__auto__;
})()
;})(__14725,switch__14368__auto__,c__14385__auto___14738,G__14568_14726,G__14568_14727__$1,n__4607__auto___14724,jobs,results,process,async))
})();
var state__14387__auto__ = (function (){var statearr_14616 = f__14386__auto__.call(null);
(statearr_14616[(6)] = c__14385__auto___14738);

return statearr_14616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14387__auto__);
});})(__14725,c__14385__auto___14738,G__14568_14726,G__14568_14727__$1,n__4607__auto___14724,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14568_14727__$1)].join('')));

}

var G__14747 = (__14725 + (1));
__14725 = G__14747;
continue;
} else {
}
break;
}

var c__14385__auto___14748 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14385__auto___14748,jobs,results,process,async){
return (function (){
var f__14386__auto__ = (function (){var switch__14368__auto__ = ((function (c__14385__auto___14748,jobs,results,process,async){
return (function (state_14638){
var state_val_14639 = (state_14638[(1)]);
if((state_val_14639 === (7))){
var inst_14634 = (state_14638[(2)]);
var state_14638__$1 = state_14638;
var statearr_14640_14749 = state_14638__$1;
(statearr_14640_14749[(2)] = inst_14634);

(statearr_14640_14749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14639 === (1))){
var state_14638__$1 = state_14638;
var statearr_14641_14750 = state_14638__$1;
(statearr_14641_14750[(2)] = null);

(statearr_14641_14750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14639 === (4))){
var inst_14619 = (state_14638[(7)]);
var inst_14619__$1 = (state_14638[(2)]);
var inst_14620 = (inst_14619__$1 == null);
var state_14638__$1 = (function (){var statearr_14642 = state_14638;
(statearr_14642[(7)] = inst_14619__$1);

return statearr_14642;
})();
if(cljs.core.truth_(inst_14620)){
var statearr_14643_14751 = state_14638__$1;
(statearr_14643_14751[(1)] = (5));

} else {
var statearr_14644_14752 = state_14638__$1;
(statearr_14644_14752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14639 === (6))){
var inst_14624 = (state_14638[(8)]);
var inst_14619 = (state_14638[(7)]);
var inst_14624__$1 = cljs.core.async.chan.call(null,(1));
var inst_14625 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14626 = [inst_14619,inst_14624__$1];
var inst_14627 = (new cljs.core.PersistentVector(null,2,(5),inst_14625,inst_14626,null));
var state_14638__$1 = (function (){var statearr_14645 = state_14638;
(statearr_14645[(8)] = inst_14624__$1);

return statearr_14645;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14638__$1,(8),jobs,inst_14627);
} else {
if((state_val_14639 === (3))){
var inst_14636 = (state_14638[(2)]);
var state_14638__$1 = state_14638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14638__$1,inst_14636);
} else {
if((state_val_14639 === (2))){
var state_14638__$1 = state_14638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14638__$1,(4),from);
} else {
if((state_val_14639 === (9))){
var inst_14631 = (state_14638[(2)]);
var state_14638__$1 = (function (){var statearr_14646 = state_14638;
(statearr_14646[(9)] = inst_14631);

return statearr_14646;
})();
var statearr_14647_14753 = state_14638__$1;
(statearr_14647_14753[(2)] = null);

(statearr_14647_14753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14639 === (5))){
var inst_14622 = cljs.core.async.close_BANG_.call(null,jobs);
var state_14638__$1 = state_14638;
var statearr_14648_14754 = state_14638__$1;
(statearr_14648_14754[(2)] = inst_14622);

(statearr_14648_14754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14639 === (8))){
var inst_14624 = (state_14638[(8)]);
var inst_14629 = (state_14638[(2)]);
var state_14638__$1 = (function (){var statearr_14649 = state_14638;
(statearr_14649[(10)] = inst_14629);

return statearr_14649;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14638__$1,(9),results,inst_14624);
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
});})(c__14385__auto___14748,jobs,results,process,async))
;
return ((function (switch__14368__auto__,c__14385__auto___14748,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14369__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14369__auto____0 = (function (){
var statearr_14650 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14650[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14369__auto__);

(statearr_14650[(1)] = (1));

return statearr_14650;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14369__auto____1 = (function (state_14638){
while(true){
var ret_value__14370__auto__ = (function (){try{while(true){
var result__14371__auto__ = switch__14368__auto__.call(null,state_14638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14371__auto__;
}
break;
}
}catch (e14651){if((e14651 instanceof Object)){
var ex__14372__auto__ = e14651;
var statearr_14652_14755 = state_14638;
(statearr_14652_14755[(5)] = ex__14372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14756 = state_14638;
state_14638 = G__14756;
continue;
} else {
return ret_value__14370__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14369__auto__ = function(state_14638){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14369__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14369__auto____1.call(this,state_14638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14369__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14369__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14369__auto__;
})()
;})(switch__14368__auto__,c__14385__auto___14748,jobs,results,process,async))
})();
var state__14387__auto__ = (function (){var statearr_14653 = f__14386__auto__.call(null);
(statearr_14653[(6)] = c__14385__auto___14748);

return statearr_14653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14387__auto__);
});})(c__14385__auto___14748,jobs,results,process,async))
);


var c__14385__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14385__auto__,jobs,results,process,async){
return (function (){
var f__14386__auto__ = (function (){var switch__14368__auto__ = ((function (c__14385__auto__,jobs,results,process,async){
return (function (state_14691){
var state_val_14692 = (state_14691[(1)]);
if((state_val_14692 === (7))){
var inst_14687 = (state_14691[(2)]);
var state_14691__$1 = state_14691;
var statearr_14693_14757 = state_14691__$1;
(statearr_14693_14757[(2)] = inst_14687);

(statearr_14693_14757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (20))){
var state_14691__$1 = state_14691;
var statearr_14694_14758 = state_14691__$1;
(statearr_14694_14758[(2)] = null);

(statearr_14694_14758[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (1))){
var state_14691__$1 = state_14691;
var statearr_14695_14759 = state_14691__$1;
(statearr_14695_14759[(2)] = null);

(statearr_14695_14759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (4))){
var inst_14656 = (state_14691[(7)]);
var inst_14656__$1 = (state_14691[(2)]);
var inst_14657 = (inst_14656__$1 == null);
var state_14691__$1 = (function (){var statearr_14696 = state_14691;
(statearr_14696[(7)] = inst_14656__$1);

return statearr_14696;
})();
if(cljs.core.truth_(inst_14657)){
var statearr_14697_14760 = state_14691__$1;
(statearr_14697_14760[(1)] = (5));

} else {
var statearr_14698_14761 = state_14691__$1;
(statearr_14698_14761[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (15))){
var inst_14669 = (state_14691[(8)]);
var state_14691__$1 = state_14691;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14691__$1,(18),to,inst_14669);
} else {
if((state_val_14692 === (21))){
var inst_14682 = (state_14691[(2)]);
var state_14691__$1 = state_14691;
var statearr_14699_14762 = state_14691__$1;
(statearr_14699_14762[(2)] = inst_14682);

(statearr_14699_14762[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (13))){
var inst_14684 = (state_14691[(2)]);
var state_14691__$1 = (function (){var statearr_14700 = state_14691;
(statearr_14700[(9)] = inst_14684);

return statearr_14700;
})();
var statearr_14701_14763 = state_14691__$1;
(statearr_14701_14763[(2)] = null);

(statearr_14701_14763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (6))){
var inst_14656 = (state_14691[(7)]);
var state_14691__$1 = state_14691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14691__$1,(11),inst_14656);
} else {
if((state_val_14692 === (17))){
var inst_14677 = (state_14691[(2)]);
var state_14691__$1 = state_14691;
if(cljs.core.truth_(inst_14677)){
var statearr_14702_14764 = state_14691__$1;
(statearr_14702_14764[(1)] = (19));

} else {
var statearr_14703_14765 = state_14691__$1;
(statearr_14703_14765[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (3))){
var inst_14689 = (state_14691[(2)]);
var state_14691__$1 = state_14691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14691__$1,inst_14689);
} else {
if((state_val_14692 === (12))){
var inst_14666 = (state_14691[(10)]);
var state_14691__$1 = state_14691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14691__$1,(14),inst_14666);
} else {
if((state_val_14692 === (2))){
var state_14691__$1 = state_14691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14691__$1,(4),results);
} else {
if((state_val_14692 === (19))){
var state_14691__$1 = state_14691;
var statearr_14704_14766 = state_14691__$1;
(statearr_14704_14766[(2)] = null);

(statearr_14704_14766[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (11))){
var inst_14666 = (state_14691[(2)]);
var state_14691__$1 = (function (){var statearr_14705 = state_14691;
(statearr_14705[(10)] = inst_14666);

return statearr_14705;
})();
var statearr_14706_14767 = state_14691__$1;
(statearr_14706_14767[(2)] = null);

(statearr_14706_14767[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (9))){
var state_14691__$1 = state_14691;
var statearr_14707_14768 = state_14691__$1;
(statearr_14707_14768[(2)] = null);

(statearr_14707_14768[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (5))){
var state_14691__$1 = state_14691;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14708_14769 = state_14691__$1;
(statearr_14708_14769[(1)] = (8));

} else {
var statearr_14709_14770 = state_14691__$1;
(statearr_14709_14770[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (14))){
var inst_14669 = (state_14691[(8)]);
var inst_14671 = (state_14691[(11)]);
var inst_14669__$1 = (state_14691[(2)]);
var inst_14670 = (inst_14669__$1 == null);
var inst_14671__$1 = cljs.core.not.call(null,inst_14670);
var state_14691__$1 = (function (){var statearr_14710 = state_14691;
(statearr_14710[(8)] = inst_14669__$1);

(statearr_14710[(11)] = inst_14671__$1);

return statearr_14710;
})();
if(inst_14671__$1){
var statearr_14711_14771 = state_14691__$1;
(statearr_14711_14771[(1)] = (15));

} else {
var statearr_14712_14772 = state_14691__$1;
(statearr_14712_14772[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (16))){
var inst_14671 = (state_14691[(11)]);
var state_14691__$1 = state_14691;
var statearr_14713_14773 = state_14691__$1;
(statearr_14713_14773[(2)] = inst_14671);

(statearr_14713_14773[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (10))){
var inst_14663 = (state_14691[(2)]);
var state_14691__$1 = state_14691;
var statearr_14714_14774 = state_14691__$1;
(statearr_14714_14774[(2)] = inst_14663);

(statearr_14714_14774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (18))){
var inst_14674 = (state_14691[(2)]);
var state_14691__$1 = state_14691;
var statearr_14715_14775 = state_14691__$1;
(statearr_14715_14775[(2)] = inst_14674);

(statearr_14715_14775[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (8))){
var inst_14660 = cljs.core.async.close_BANG_.call(null,to);
var state_14691__$1 = state_14691;
var statearr_14716_14776 = state_14691__$1;
(statearr_14716_14776[(2)] = inst_14660);

(statearr_14716_14776[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__14385__auto__,jobs,results,process,async))
;
return ((function (switch__14368__auto__,c__14385__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14369__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14369__auto____0 = (function (){
var statearr_14717 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14717[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14369__auto__);

(statearr_14717[(1)] = (1));

return statearr_14717;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14369__auto____1 = (function (state_14691){
while(true){
var ret_value__14370__auto__ = (function (){try{while(true){
var result__14371__auto__ = switch__14368__auto__.call(null,state_14691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14371__auto__;
}
break;
}
}catch (e14718){if((e14718 instanceof Object)){
var ex__14372__auto__ = e14718;
var statearr_14719_14777 = state_14691;
(statearr_14719_14777[(5)] = ex__14372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14778 = state_14691;
state_14691 = G__14778;
continue;
} else {
return ret_value__14370__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14369__auto__ = function(state_14691){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14369__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14369__auto____1.call(this,state_14691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14369__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14369__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14369__auto__;
})()
;})(switch__14368__auto__,c__14385__auto__,jobs,results,process,async))
})();
var state__14387__auto__ = (function (){var statearr_14720 = f__14386__auto__.call(null);
(statearr_14720[(6)] = c__14385__auto__);

return statearr_14720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14387__auto__);
});})(c__14385__auto__,jobs,results,process,async))
);

return c__14385__auto__;
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
var G__14780 = arguments.length;
switch (G__14780) {
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
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__14783 = arguments.length;
switch (G__14783) {
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
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__14786 = arguments.length;
switch (G__14786) {
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
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__14385__auto___14835 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14385__auto___14835,tc,fc){
return (function (){
var f__14386__auto__ = (function (){var switch__14368__auto__ = ((function (c__14385__auto___14835,tc,fc){
return (function (state_14812){
var state_val_14813 = (state_14812[(1)]);
if((state_val_14813 === (7))){
var inst_14808 = (state_14812[(2)]);
var state_14812__$1 = state_14812;
var statearr_14814_14836 = state_14812__$1;
(statearr_14814_14836[(2)] = inst_14808);

(statearr_14814_14836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14813 === (1))){
var state_14812__$1 = state_14812;
var statearr_14815_14837 = state_14812__$1;
(statearr_14815_14837[(2)] = null);

(statearr_14815_14837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14813 === (4))){
var inst_14789 = (state_14812[(7)]);
var inst_14789__$1 = (state_14812[(2)]);
var inst_14790 = (inst_14789__$1 == null);
var state_14812__$1 = (function (){var statearr_14816 = state_14812;
(statearr_14816[(7)] = inst_14789__$1);

return statearr_14816;
})();
if(cljs.core.truth_(inst_14790)){
var statearr_14817_14838 = state_14812__$1;
(statearr_14817_14838[(1)] = (5));

} else {
var statearr_14818_14839 = state_14812__$1;
(statearr_14818_14839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14813 === (13))){
var state_14812__$1 = state_14812;
var statearr_14819_14840 = state_14812__$1;
(statearr_14819_14840[(2)] = null);

(statearr_14819_14840[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14813 === (6))){
var inst_14789 = (state_14812[(7)]);
var inst_14795 = p.call(null,inst_14789);
var state_14812__$1 = state_14812;
if(cljs.core.truth_(inst_14795)){
var statearr_14820_14841 = state_14812__$1;
(statearr_14820_14841[(1)] = (9));

} else {
var statearr_14821_14842 = state_14812__$1;
(statearr_14821_14842[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14813 === (3))){
var inst_14810 = (state_14812[(2)]);
var state_14812__$1 = state_14812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14812__$1,inst_14810);
} else {
if((state_val_14813 === (12))){
var state_14812__$1 = state_14812;
var statearr_14822_14843 = state_14812__$1;
(statearr_14822_14843[(2)] = null);

(statearr_14822_14843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14813 === (2))){
var state_14812__$1 = state_14812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14812__$1,(4),ch);
} else {
if((state_val_14813 === (11))){
var inst_14789 = (state_14812[(7)]);
var inst_14799 = (state_14812[(2)]);
var state_14812__$1 = state_14812;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14812__$1,(8),inst_14799,inst_14789);
} else {
if((state_val_14813 === (9))){
var state_14812__$1 = state_14812;
var statearr_14823_14844 = state_14812__$1;
(statearr_14823_14844[(2)] = tc);

(statearr_14823_14844[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14813 === (5))){
var inst_14792 = cljs.core.async.close_BANG_.call(null,tc);
var inst_14793 = cljs.core.async.close_BANG_.call(null,fc);
var state_14812__$1 = (function (){var statearr_14824 = state_14812;
(statearr_14824[(8)] = inst_14792);

return statearr_14824;
})();
var statearr_14825_14845 = state_14812__$1;
(statearr_14825_14845[(2)] = inst_14793);

(statearr_14825_14845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14813 === (14))){
var inst_14806 = (state_14812[(2)]);
var state_14812__$1 = state_14812;
var statearr_14826_14846 = state_14812__$1;
(statearr_14826_14846[(2)] = inst_14806);

(statearr_14826_14846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14813 === (10))){
var state_14812__$1 = state_14812;
var statearr_14827_14847 = state_14812__$1;
(statearr_14827_14847[(2)] = fc);

(statearr_14827_14847[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14813 === (8))){
var inst_14801 = (state_14812[(2)]);
var state_14812__$1 = state_14812;
if(cljs.core.truth_(inst_14801)){
var statearr_14828_14848 = state_14812__$1;
(statearr_14828_14848[(1)] = (12));

} else {
var statearr_14829_14849 = state_14812__$1;
(statearr_14829_14849[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__14385__auto___14835,tc,fc))
;
return ((function (switch__14368__auto__,c__14385__auto___14835,tc,fc){
return (function() {
var cljs$core$async$state_machine__14369__auto__ = null;
var cljs$core$async$state_machine__14369__auto____0 = (function (){
var statearr_14830 = [null,null,null,null,null,null,null,null,null];
(statearr_14830[(0)] = cljs$core$async$state_machine__14369__auto__);

(statearr_14830[(1)] = (1));

return statearr_14830;
});
var cljs$core$async$state_machine__14369__auto____1 = (function (state_14812){
while(true){
var ret_value__14370__auto__ = (function (){try{while(true){
var result__14371__auto__ = switch__14368__auto__.call(null,state_14812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14371__auto__;
}
break;
}
}catch (e14831){if((e14831 instanceof Object)){
var ex__14372__auto__ = e14831;
var statearr_14832_14850 = state_14812;
(statearr_14832_14850[(5)] = ex__14372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14851 = state_14812;
state_14812 = G__14851;
continue;
} else {
return ret_value__14370__auto__;
}
break;
}
});
cljs$core$async$state_machine__14369__auto__ = function(state_14812){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14369__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14369__auto____1.call(this,state_14812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14369__auto____0;
cljs$core$async$state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14369__auto____1;
return cljs$core$async$state_machine__14369__auto__;
})()
;})(switch__14368__auto__,c__14385__auto___14835,tc,fc))
})();
var state__14387__auto__ = (function (){var statearr_14833 = f__14386__auto__.call(null);
(statearr_14833[(6)] = c__14385__auto___14835);

return statearr_14833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14387__auto__);
});})(c__14385__auto___14835,tc,fc))
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
var c__14385__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14385__auto__){
return (function (){
var f__14386__auto__ = (function (){var switch__14368__auto__ = ((function (c__14385__auto__){
return (function (state_14872){
var state_val_14873 = (state_14872[(1)]);
if((state_val_14873 === (7))){
var inst_14868 = (state_14872[(2)]);
var state_14872__$1 = state_14872;
var statearr_14874_14892 = state_14872__$1;
(statearr_14874_14892[(2)] = inst_14868);

(statearr_14874_14892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14873 === (1))){
var inst_14852 = init;
var state_14872__$1 = (function (){var statearr_14875 = state_14872;
(statearr_14875[(7)] = inst_14852);

return statearr_14875;
})();
var statearr_14876_14893 = state_14872__$1;
(statearr_14876_14893[(2)] = null);

(statearr_14876_14893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14873 === (4))){
var inst_14855 = (state_14872[(8)]);
var inst_14855__$1 = (state_14872[(2)]);
var inst_14856 = (inst_14855__$1 == null);
var state_14872__$1 = (function (){var statearr_14877 = state_14872;
(statearr_14877[(8)] = inst_14855__$1);

return statearr_14877;
})();
if(cljs.core.truth_(inst_14856)){
var statearr_14878_14894 = state_14872__$1;
(statearr_14878_14894[(1)] = (5));

} else {
var statearr_14879_14895 = state_14872__$1;
(statearr_14879_14895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14873 === (6))){
var inst_14855 = (state_14872[(8)]);
var inst_14852 = (state_14872[(7)]);
var inst_14859 = (state_14872[(9)]);
var inst_14859__$1 = f.call(null,inst_14852,inst_14855);
var inst_14860 = cljs.core.reduced_QMARK_.call(null,inst_14859__$1);
var state_14872__$1 = (function (){var statearr_14880 = state_14872;
(statearr_14880[(9)] = inst_14859__$1);

return statearr_14880;
})();
if(inst_14860){
var statearr_14881_14896 = state_14872__$1;
(statearr_14881_14896[(1)] = (8));

} else {
var statearr_14882_14897 = state_14872__$1;
(statearr_14882_14897[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14873 === (3))){
var inst_14870 = (state_14872[(2)]);
var state_14872__$1 = state_14872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14872__$1,inst_14870);
} else {
if((state_val_14873 === (2))){
var state_14872__$1 = state_14872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14872__$1,(4),ch);
} else {
if((state_val_14873 === (9))){
var inst_14859 = (state_14872[(9)]);
var inst_14852 = inst_14859;
var state_14872__$1 = (function (){var statearr_14883 = state_14872;
(statearr_14883[(7)] = inst_14852);

return statearr_14883;
})();
var statearr_14884_14898 = state_14872__$1;
(statearr_14884_14898[(2)] = null);

(statearr_14884_14898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14873 === (5))){
var inst_14852 = (state_14872[(7)]);
var state_14872__$1 = state_14872;
var statearr_14885_14899 = state_14872__$1;
(statearr_14885_14899[(2)] = inst_14852);

(statearr_14885_14899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14873 === (10))){
var inst_14866 = (state_14872[(2)]);
var state_14872__$1 = state_14872;
var statearr_14886_14900 = state_14872__$1;
(statearr_14886_14900[(2)] = inst_14866);

(statearr_14886_14900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14873 === (8))){
var inst_14859 = (state_14872[(9)]);
var inst_14862 = cljs.core.deref.call(null,inst_14859);
var state_14872__$1 = state_14872;
var statearr_14887_14901 = state_14872__$1;
(statearr_14887_14901[(2)] = inst_14862);

(statearr_14887_14901[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__14385__auto__))
;
return ((function (switch__14368__auto__,c__14385__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__14369__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14369__auto____0 = (function (){
var statearr_14888 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14888[(0)] = cljs$core$async$reduce_$_state_machine__14369__auto__);

(statearr_14888[(1)] = (1));

return statearr_14888;
});
var cljs$core$async$reduce_$_state_machine__14369__auto____1 = (function (state_14872){
while(true){
var ret_value__14370__auto__ = (function (){try{while(true){
var result__14371__auto__ = switch__14368__auto__.call(null,state_14872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14371__auto__;
}
break;
}
}catch (e14889){if((e14889 instanceof Object)){
var ex__14372__auto__ = e14889;
var statearr_14890_14902 = state_14872;
(statearr_14890_14902[(5)] = ex__14372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14903 = state_14872;
state_14872 = G__14903;
continue;
} else {
return ret_value__14370__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14369__auto__ = function(state_14872){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14369__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14369__auto____1.call(this,state_14872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14369__auto____0;
cljs$core$async$reduce_$_state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14369__auto____1;
return cljs$core$async$reduce_$_state_machine__14369__auto__;
})()
;})(switch__14368__auto__,c__14385__auto__))
})();
var state__14387__auto__ = (function (){var statearr_14891 = f__14386__auto__.call(null);
(statearr_14891[(6)] = c__14385__auto__);

return statearr_14891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14387__auto__);
});})(c__14385__auto__))
);

return c__14385__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__14385__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14385__auto__,f__$1){
return (function (){
var f__14386__auto__ = (function (){var switch__14368__auto__ = ((function (c__14385__auto__,f__$1){
return (function (state_14909){
var state_val_14910 = (state_14909[(1)]);
if((state_val_14910 === (1))){
var inst_14904 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_14909__$1 = state_14909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14909__$1,(2),inst_14904);
} else {
if((state_val_14910 === (2))){
var inst_14906 = (state_14909[(2)]);
var inst_14907 = f__$1.call(null,inst_14906);
var state_14909__$1 = state_14909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14909__$1,inst_14907);
} else {
return null;
}
}
});})(c__14385__auto__,f__$1))
;
return ((function (switch__14368__auto__,c__14385__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__14369__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14369__auto____0 = (function (){
var statearr_14911 = [null,null,null,null,null,null,null];
(statearr_14911[(0)] = cljs$core$async$transduce_$_state_machine__14369__auto__);

(statearr_14911[(1)] = (1));

return statearr_14911;
});
var cljs$core$async$transduce_$_state_machine__14369__auto____1 = (function (state_14909){
while(true){
var ret_value__14370__auto__ = (function (){try{while(true){
var result__14371__auto__ = switch__14368__auto__.call(null,state_14909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14371__auto__;
}
break;
}
}catch (e14912){if((e14912 instanceof Object)){
var ex__14372__auto__ = e14912;
var statearr_14913_14915 = state_14909;
(statearr_14913_14915[(5)] = ex__14372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14916 = state_14909;
state_14909 = G__14916;
continue;
} else {
return ret_value__14370__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14369__auto__ = function(state_14909){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14369__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14369__auto____1.call(this,state_14909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14369__auto____0;
cljs$core$async$transduce_$_state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14369__auto____1;
return cljs$core$async$transduce_$_state_machine__14369__auto__;
})()
;})(switch__14368__auto__,c__14385__auto__,f__$1))
})();
var state__14387__auto__ = (function (){var statearr_14914 = f__14386__auto__.call(null);
(statearr_14914[(6)] = c__14385__auto__);

return statearr_14914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14387__auto__);
});})(c__14385__auto__,f__$1))
);

return c__14385__auto__;
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
var G__14918 = arguments.length;
switch (G__14918) {
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
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14385__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14385__auto__){
return (function (){
var f__14386__auto__ = (function (){var switch__14368__auto__ = ((function (c__14385__auto__){
return (function (state_14943){
var state_val_14944 = (state_14943[(1)]);
if((state_val_14944 === (7))){
var inst_14925 = (state_14943[(2)]);
var state_14943__$1 = state_14943;
var statearr_14945_14966 = state_14943__$1;
(statearr_14945_14966[(2)] = inst_14925);

(statearr_14945_14966[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14944 === (1))){
var inst_14919 = cljs.core.seq.call(null,coll);
var inst_14920 = inst_14919;
var state_14943__$1 = (function (){var statearr_14946 = state_14943;
(statearr_14946[(7)] = inst_14920);

return statearr_14946;
})();
var statearr_14947_14967 = state_14943__$1;
(statearr_14947_14967[(2)] = null);

(statearr_14947_14967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14944 === (4))){
var inst_14920 = (state_14943[(7)]);
var inst_14923 = cljs.core.first.call(null,inst_14920);
var state_14943__$1 = state_14943;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14943__$1,(7),ch,inst_14923);
} else {
if((state_val_14944 === (13))){
var inst_14937 = (state_14943[(2)]);
var state_14943__$1 = state_14943;
var statearr_14948_14968 = state_14943__$1;
(statearr_14948_14968[(2)] = inst_14937);

(statearr_14948_14968[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14944 === (6))){
var inst_14928 = (state_14943[(2)]);
var state_14943__$1 = state_14943;
if(cljs.core.truth_(inst_14928)){
var statearr_14949_14969 = state_14943__$1;
(statearr_14949_14969[(1)] = (8));

} else {
var statearr_14950_14970 = state_14943__$1;
(statearr_14950_14970[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14944 === (3))){
var inst_14941 = (state_14943[(2)]);
var state_14943__$1 = state_14943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14943__$1,inst_14941);
} else {
if((state_val_14944 === (12))){
var state_14943__$1 = state_14943;
var statearr_14951_14971 = state_14943__$1;
(statearr_14951_14971[(2)] = null);

(statearr_14951_14971[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14944 === (2))){
var inst_14920 = (state_14943[(7)]);
var state_14943__$1 = state_14943;
if(cljs.core.truth_(inst_14920)){
var statearr_14952_14972 = state_14943__$1;
(statearr_14952_14972[(1)] = (4));

} else {
var statearr_14953_14973 = state_14943__$1;
(statearr_14953_14973[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14944 === (11))){
var inst_14934 = cljs.core.async.close_BANG_.call(null,ch);
var state_14943__$1 = state_14943;
var statearr_14954_14974 = state_14943__$1;
(statearr_14954_14974[(2)] = inst_14934);

(statearr_14954_14974[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14944 === (9))){
var state_14943__$1 = state_14943;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14955_14975 = state_14943__$1;
(statearr_14955_14975[(1)] = (11));

} else {
var statearr_14956_14976 = state_14943__$1;
(statearr_14956_14976[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14944 === (5))){
var inst_14920 = (state_14943[(7)]);
var state_14943__$1 = state_14943;
var statearr_14957_14977 = state_14943__$1;
(statearr_14957_14977[(2)] = inst_14920);

(statearr_14957_14977[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14944 === (10))){
var inst_14939 = (state_14943[(2)]);
var state_14943__$1 = state_14943;
var statearr_14958_14978 = state_14943__$1;
(statearr_14958_14978[(2)] = inst_14939);

(statearr_14958_14978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14944 === (8))){
var inst_14920 = (state_14943[(7)]);
var inst_14930 = cljs.core.next.call(null,inst_14920);
var inst_14920__$1 = inst_14930;
var state_14943__$1 = (function (){var statearr_14959 = state_14943;
(statearr_14959[(7)] = inst_14920__$1);

return statearr_14959;
})();
var statearr_14960_14979 = state_14943__$1;
(statearr_14960_14979[(2)] = null);

(statearr_14960_14979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__14385__auto__))
;
return ((function (switch__14368__auto__,c__14385__auto__){
return (function() {
var cljs$core$async$state_machine__14369__auto__ = null;
var cljs$core$async$state_machine__14369__auto____0 = (function (){
var statearr_14961 = [null,null,null,null,null,null,null,null];
(statearr_14961[(0)] = cljs$core$async$state_machine__14369__auto__);

(statearr_14961[(1)] = (1));

return statearr_14961;
});
var cljs$core$async$state_machine__14369__auto____1 = (function (state_14943){
while(true){
var ret_value__14370__auto__ = (function (){try{while(true){
var result__14371__auto__ = switch__14368__auto__.call(null,state_14943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14371__auto__;
}
break;
}
}catch (e14962){if((e14962 instanceof Object)){
var ex__14372__auto__ = e14962;
var statearr_14963_14980 = state_14943;
(statearr_14963_14980[(5)] = ex__14372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14981 = state_14943;
state_14943 = G__14981;
continue;
} else {
return ret_value__14370__auto__;
}
break;
}
});
cljs$core$async$state_machine__14369__auto__ = function(state_14943){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14369__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14369__auto____1.call(this,state_14943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14369__auto____0;
cljs$core$async$state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14369__auto____1;
return cljs$core$async$state_machine__14369__auto__;
})()
;})(switch__14368__auto__,c__14385__auto__))
})();
var state__14387__auto__ = (function (){var statearr_14964 = f__14386__auto__.call(null);
(statearr_14964[(6)] = c__14385__auto__);

return statearr_14964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14387__auto__);
});})(c__14385__auto__))
);

return c__14385__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

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
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
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
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
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
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
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
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14982 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14982 = (function (ch,cs,meta14983){
this.ch = ch;
this.cs = cs;
this.meta14983 = meta14983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14984,meta14983__$1){
var self__ = this;
var _14984__$1 = this;
return (new cljs.core.async.t_cljs$core$async14982(self__.ch,self__.cs,meta14983__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async14982.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14984){
var self__ = this;
var _14984__$1 = this;
return self__.meta14983;
});})(cs))
;

cljs.core.async.t_cljs$core$async14982.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14982.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async14982.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14982.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14982.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14982.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14982.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14983","meta14983",-2116475629,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async14982.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14982.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14982";

cljs.core.async.t_cljs$core$async14982.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async14982");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14982.
 */
cljs.core.async.__GT_t_cljs$core$async14982 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async14982(ch__$1,cs__$1,meta14983){
return (new cljs.core.async.t_cljs$core$async14982(ch__$1,cs__$1,meta14983));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async14982(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__14385__auto___15204 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14385__auto___15204,cs,m,dchan,dctr,done){
return (function (){
var f__14386__auto__ = (function (){var switch__14368__auto__ = ((function (c__14385__auto___15204,cs,m,dchan,dctr,done){
return (function (state_15119){
var state_val_15120 = (state_15119[(1)]);
if((state_val_15120 === (7))){
var inst_15115 = (state_15119[(2)]);
var state_15119__$1 = state_15119;
var statearr_15121_15205 = state_15119__$1;
(statearr_15121_15205[(2)] = inst_15115);

(statearr_15121_15205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (20))){
var inst_15018 = (state_15119[(7)]);
var inst_15030 = cljs.core.first.call(null,inst_15018);
var inst_15031 = cljs.core.nth.call(null,inst_15030,(0),null);
var inst_15032 = cljs.core.nth.call(null,inst_15030,(1),null);
var state_15119__$1 = (function (){var statearr_15122 = state_15119;
(statearr_15122[(8)] = inst_15031);

return statearr_15122;
})();
if(cljs.core.truth_(inst_15032)){
var statearr_15123_15206 = state_15119__$1;
(statearr_15123_15206[(1)] = (22));

} else {
var statearr_15124_15207 = state_15119__$1;
(statearr_15124_15207[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (27))){
var inst_14987 = (state_15119[(9)]);
var inst_15060 = (state_15119[(10)]);
var inst_15067 = (state_15119[(11)]);
var inst_15062 = (state_15119[(12)]);
var inst_15067__$1 = cljs.core._nth.call(null,inst_15060,inst_15062);
var inst_15068 = cljs.core.async.put_BANG_.call(null,inst_15067__$1,inst_14987,done);
var state_15119__$1 = (function (){var statearr_15125 = state_15119;
(statearr_15125[(11)] = inst_15067__$1);

return statearr_15125;
})();
if(cljs.core.truth_(inst_15068)){
var statearr_15126_15208 = state_15119__$1;
(statearr_15126_15208[(1)] = (30));

} else {
var statearr_15127_15209 = state_15119__$1;
(statearr_15127_15209[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (1))){
var state_15119__$1 = state_15119;
var statearr_15128_15210 = state_15119__$1;
(statearr_15128_15210[(2)] = null);

(statearr_15128_15210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (24))){
var inst_15018 = (state_15119[(7)]);
var inst_15037 = (state_15119[(2)]);
var inst_15038 = cljs.core.next.call(null,inst_15018);
var inst_14996 = inst_15038;
var inst_14997 = null;
var inst_14998 = (0);
var inst_14999 = (0);
var state_15119__$1 = (function (){var statearr_15129 = state_15119;
(statearr_15129[(13)] = inst_14998);

(statearr_15129[(14)] = inst_14997);

(statearr_15129[(15)] = inst_14996);

(statearr_15129[(16)] = inst_15037);

(statearr_15129[(17)] = inst_14999);

return statearr_15129;
})();
var statearr_15130_15211 = state_15119__$1;
(statearr_15130_15211[(2)] = null);

(statearr_15130_15211[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (39))){
var state_15119__$1 = state_15119;
var statearr_15134_15212 = state_15119__$1;
(statearr_15134_15212[(2)] = null);

(statearr_15134_15212[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (4))){
var inst_14987 = (state_15119[(9)]);
var inst_14987__$1 = (state_15119[(2)]);
var inst_14988 = (inst_14987__$1 == null);
var state_15119__$1 = (function (){var statearr_15135 = state_15119;
(statearr_15135[(9)] = inst_14987__$1);

return statearr_15135;
})();
if(cljs.core.truth_(inst_14988)){
var statearr_15136_15213 = state_15119__$1;
(statearr_15136_15213[(1)] = (5));

} else {
var statearr_15137_15214 = state_15119__$1;
(statearr_15137_15214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (15))){
var inst_14998 = (state_15119[(13)]);
var inst_14997 = (state_15119[(14)]);
var inst_14996 = (state_15119[(15)]);
var inst_14999 = (state_15119[(17)]);
var inst_15014 = (state_15119[(2)]);
var inst_15015 = (inst_14999 + (1));
var tmp15131 = inst_14998;
var tmp15132 = inst_14997;
var tmp15133 = inst_14996;
var inst_14996__$1 = tmp15133;
var inst_14997__$1 = tmp15132;
var inst_14998__$1 = tmp15131;
var inst_14999__$1 = inst_15015;
var state_15119__$1 = (function (){var statearr_15138 = state_15119;
(statearr_15138[(18)] = inst_15014);

(statearr_15138[(13)] = inst_14998__$1);

(statearr_15138[(14)] = inst_14997__$1);

(statearr_15138[(15)] = inst_14996__$1);

(statearr_15138[(17)] = inst_14999__$1);

return statearr_15138;
})();
var statearr_15139_15215 = state_15119__$1;
(statearr_15139_15215[(2)] = null);

(statearr_15139_15215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (21))){
var inst_15041 = (state_15119[(2)]);
var state_15119__$1 = state_15119;
var statearr_15143_15216 = state_15119__$1;
(statearr_15143_15216[(2)] = inst_15041);

(statearr_15143_15216[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (31))){
var inst_15067 = (state_15119[(11)]);
var inst_15071 = done.call(null,null);
var inst_15072 = cljs.core.async.untap_STAR_.call(null,m,inst_15067);
var state_15119__$1 = (function (){var statearr_15144 = state_15119;
(statearr_15144[(19)] = inst_15071);

return statearr_15144;
})();
var statearr_15145_15217 = state_15119__$1;
(statearr_15145_15217[(2)] = inst_15072);

(statearr_15145_15217[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (32))){
var inst_15060 = (state_15119[(10)]);
var inst_15061 = (state_15119[(20)]);
var inst_15062 = (state_15119[(12)]);
var inst_15059 = (state_15119[(21)]);
var inst_15074 = (state_15119[(2)]);
var inst_15075 = (inst_15062 + (1));
var tmp15140 = inst_15060;
var tmp15141 = inst_15061;
var tmp15142 = inst_15059;
var inst_15059__$1 = tmp15142;
var inst_15060__$1 = tmp15140;
var inst_15061__$1 = tmp15141;
var inst_15062__$1 = inst_15075;
var state_15119__$1 = (function (){var statearr_15146 = state_15119;
(statearr_15146[(10)] = inst_15060__$1);

(statearr_15146[(20)] = inst_15061__$1);

(statearr_15146[(12)] = inst_15062__$1);

(statearr_15146[(21)] = inst_15059__$1);

(statearr_15146[(22)] = inst_15074);

return statearr_15146;
})();
var statearr_15147_15218 = state_15119__$1;
(statearr_15147_15218[(2)] = null);

(statearr_15147_15218[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (40))){
var inst_15087 = (state_15119[(23)]);
var inst_15091 = done.call(null,null);
var inst_15092 = cljs.core.async.untap_STAR_.call(null,m,inst_15087);
var state_15119__$1 = (function (){var statearr_15148 = state_15119;
(statearr_15148[(24)] = inst_15091);

return statearr_15148;
})();
var statearr_15149_15219 = state_15119__$1;
(statearr_15149_15219[(2)] = inst_15092);

(statearr_15149_15219[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (33))){
var inst_15078 = (state_15119[(25)]);
var inst_15080 = cljs.core.chunked_seq_QMARK_.call(null,inst_15078);
var state_15119__$1 = state_15119;
if(inst_15080){
var statearr_15150_15220 = state_15119__$1;
(statearr_15150_15220[(1)] = (36));

} else {
var statearr_15151_15221 = state_15119__$1;
(statearr_15151_15221[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (13))){
var inst_15008 = (state_15119[(26)]);
var inst_15011 = cljs.core.async.close_BANG_.call(null,inst_15008);
var state_15119__$1 = state_15119;
var statearr_15152_15222 = state_15119__$1;
(statearr_15152_15222[(2)] = inst_15011);

(statearr_15152_15222[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (22))){
var inst_15031 = (state_15119[(8)]);
var inst_15034 = cljs.core.async.close_BANG_.call(null,inst_15031);
var state_15119__$1 = state_15119;
var statearr_15153_15223 = state_15119__$1;
(statearr_15153_15223[(2)] = inst_15034);

(statearr_15153_15223[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (36))){
var inst_15078 = (state_15119[(25)]);
var inst_15082 = cljs.core.chunk_first.call(null,inst_15078);
var inst_15083 = cljs.core.chunk_rest.call(null,inst_15078);
var inst_15084 = cljs.core.count.call(null,inst_15082);
var inst_15059 = inst_15083;
var inst_15060 = inst_15082;
var inst_15061 = inst_15084;
var inst_15062 = (0);
var state_15119__$1 = (function (){var statearr_15154 = state_15119;
(statearr_15154[(10)] = inst_15060);

(statearr_15154[(20)] = inst_15061);

(statearr_15154[(12)] = inst_15062);

(statearr_15154[(21)] = inst_15059);

return statearr_15154;
})();
var statearr_15155_15224 = state_15119__$1;
(statearr_15155_15224[(2)] = null);

(statearr_15155_15224[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (41))){
var inst_15078 = (state_15119[(25)]);
var inst_15094 = (state_15119[(2)]);
var inst_15095 = cljs.core.next.call(null,inst_15078);
var inst_15059 = inst_15095;
var inst_15060 = null;
var inst_15061 = (0);
var inst_15062 = (0);
var state_15119__$1 = (function (){var statearr_15156 = state_15119;
(statearr_15156[(10)] = inst_15060);

(statearr_15156[(20)] = inst_15061);

(statearr_15156[(12)] = inst_15062);

(statearr_15156[(21)] = inst_15059);

(statearr_15156[(27)] = inst_15094);

return statearr_15156;
})();
var statearr_15157_15225 = state_15119__$1;
(statearr_15157_15225[(2)] = null);

(statearr_15157_15225[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (43))){
var state_15119__$1 = state_15119;
var statearr_15158_15226 = state_15119__$1;
(statearr_15158_15226[(2)] = null);

(statearr_15158_15226[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (29))){
var inst_15103 = (state_15119[(2)]);
var state_15119__$1 = state_15119;
var statearr_15159_15227 = state_15119__$1;
(statearr_15159_15227[(2)] = inst_15103);

(statearr_15159_15227[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (44))){
var inst_15112 = (state_15119[(2)]);
var state_15119__$1 = (function (){var statearr_15160 = state_15119;
(statearr_15160[(28)] = inst_15112);

return statearr_15160;
})();
var statearr_15161_15228 = state_15119__$1;
(statearr_15161_15228[(2)] = null);

(statearr_15161_15228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (6))){
var inst_15051 = (state_15119[(29)]);
var inst_15050 = cljs.core.deref.call(null,cs);
var inst_15051__$1 = cljs.core.keys.call(null,inst_15050);
var inst_15052 = cljs.core.count.call(null,inst_15051__$1);
var inst_15053 = cljs.core.reset_BANG_.call(null,dctr,inst_15052);
var inst_15058 = cljs.core.seq.call(null,inst_15051__$1);
var inst_15059 = inst_15058;
var inst_15060 = null;
var inst_15061 = (0);
var inst_15062 = (0);
var state_15119__$1 = (function (){var statearr_15162 = state_15119;
(statearr_15162[(10)] = inst_15060);

(statearr_15162[(30)] = inst_15053);

(statearr_15162[(20)] = inst_15061);

(statearr_15162[(12)] = inst_15062);

(statearr_15162[(21)] = inst_15059);

(statearr_15162[(29)] = inst_15051__$1);

return statearr_15162;
})();
var statearr_15163_15229 = state_15119__$1;
(statearr_15163_15229[(2)] = null);

(statearr_15163_15229[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (28))){
var inst_15078 = (state_15119[(25)]);
var inst_15059 = (state_15119[(21)]);
var inst_15078__$1 = cljs.core.seq.call(null,inst_15059);
var state_15119__$1 = (function (){var statearr_15164 = state_15119;
(statearr_15164[(25)] = inst_15078__$1);

return statearr_15164;
})();
if(inst_15078__$1){
var statearr_15165_15230 = state_15119__$1;
(statearr_15165_15230[(1)] = (33));

} else {
var statearr_15166_15231 = state_15119__$1;
(statearr_15166_15231[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (25))){
var inst_15061 = (state_15119[(20)]);
var inst_15062 = (state_15119[(12)]);
var inst_15064 = (inst_15062 < inst_15061);
var inst_15065 = inst_15064;
var state_15119__$1 = state_15119;
if(cljs.core.truth_(inst_15065)){
var statearr_15167_15232 = state_15119__$1;
(statearr_15167_15232[(1)] = (27));

} else {
var statearr_15168_15233 = state_15119__$1;
(statearr_15168_15233[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (34))){
var state_15119__$1 = state_15119;
var statearr_15169_15234 = state_15119__$1;
(statearr_15169_15234[(2)] = null);

(statearr_15169_15234[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (17))){
var state_15119__$1 = state_15119;
var statearr_15170_15235 = state_15119__$1;
(statearr_15170_15235[(2)] = null);

(statearr_15170_15235[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (3))){
var inst_15117 = (state_15119[(2)]);
var state_15119__$1 = state_15119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15119__$1,inst_15117);
} else {
if((state_val_15120 === (12))){
var inst_15046 = (state_15119[(2)]);
var state_15119__$1 = state_15119;
var statearr_15171_15236 = state_15119__$1;
(statearr_15171_15236[(2)] = inst_15046);

(statearr_15171_15236[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (2))){
var state_15119__$1 = state_15119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15119__$1,(4),ch);
} else {
if((state_val_15120 === (23))){
var state_15119__$1 = state_15119;
var statearr_15172_15237 = state_15119__$1;
(statearr_15172_15237[(2)] = null);

(statearr_15172_15237[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (35))){
var inst_15101 = (state_15119[(2)]);
var state_15119__$1 = state_15119;
var statearr_15173_15238 = state_15119__$1;
(statearr_15173_15238[(2)] = inst_15101);

(statearr_15173_15238[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (19))){
var inst_15018 = (state_15119[(7)]);
var inst_15022 = cljs.core.chunk_first.call(null,inst_15018);
var inst_15023 = cljs.core.chunk_rest.call(null,inst_15018);
var inst_15024 = cljs.core.count.call(null,inst_15022);
var inst_14996 = inst_15023;
var inst_14997 = inst_15022;
var inst_14998 = inst_15024;
var inst_14999 = (0);
var state_15119__$1 = (function (){var statearr_15174 = state_15119;
(statearr_15174[(13)] = inst_14998);

(statearr_15174[(14)] = inst_14997);

(statearr_15174[(15)] = inst_14996);

(statearr_15174[(17)] = inst_14999);

return statearr_15174;
})();
var statearr_15175_15239 = state_15119__$1;
(statearr_15175_15239[(2)] = null);

(statearr_15175_15239[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (11))){
var inst_14996 = (state_15119[(15)]);
var inst_15018 = (state_15119[(7)]);
var inst_15018__$1 = cljs.core.seq.call(null,inst_14996);
var state_15119__$1 = (function (){var statearr_15176 = state_15119;
(statearr_15176[(7)] = inst_15018__$1);

return statearr_15176;
})();
if(inst_15018__$1){
var statearr_15177_15240 = state_15119__$1;
(statearr_15177_15240[(1)] = (16));

} else {
var statearr_15178_15241 = state_15119__$1;
(statearr_15178_15241[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (9))){
var inst_15048 = (state_15119[(2)]);
var state_15119__$1 = state_15119;
var statearr_15179_15242 = state_15119__$1;
(statearr_15179_15242[(2)] = inst_15048);

(statearr_15179_15242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (5))){
var inst_14994 = cljs.core.deref.call(null,cs);
var inst_14995 = cljs.core.seq.call(null,inst_14994);
var inst_14996 = inst_14995;
var inst_14997 = null;
var inst_14998 = (0);
var inst_14999 = (0);
var state_15119__$1 = (function (){var statearr_15180 = state_15119;
(statearr_15180[(13)] = inst_14998);

(statearr_15180[(14)] = inst_14997);

(statearr_15180[(15)] = inst_14996);

(statearr_15180[(17)] = inst_14999);

return statearr_15180;
})();
var statearr_15181_15243 = state_15119__$1;
(statearr_15181_15243[(2)] = null);

(statearr_15181_15243[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (14))){
var state_15119__$1 = state_15119;
var statearr_15182_15244 = state_15119__$1;
(statearr_15182_15244[(2)] = null);

(statearr_15182_15244[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (45))){
var inst_15109 = (state_15119[(2)]);
var state_15119__$1 = state_15119;
var statearr_15183_15245 = state_15119__$1;
(statearr_15183_15245[(2)] = inst_15109);

(statearr_15183_15245[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (26))){
var inst_15051 = (state_15119[(29)]);
var inst_15105 = (state_15119[(2)]);
var inst_15106 = cljs.core.seq.call(null,inst_15051);
var state_15119__$1 = (function (){var statearr_15184 = state_15119;
(statearr_15184[(31)] = inst_15105);

return statearr_15184;
})();
if(inst_15106){
var statearr_15185_15246 = state_15119__$1;
(statearr_15185_15246[(1)] = (42));

} else {
var statearr_15186_15247 = state_15119__$1;
(statearr_15186_15247[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (16))){
var inst_15018 = (state_15119[(7)]);
var inst_15020 = cljs.core.chunked_seq_QMARK_.call(null,inst_15018);
var state_15119__$1 = state_15119;
if(inst_15020){
var statearr_15187_15248 = state_15119__$1;
(statearr_15187_15248[(1)] = (19));

} else {
var statearr_15188_15249 = state_15119__$1;
(statearr_15188_15249[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (38))){
var inst_15098 = (state_15119[(2)]);
var state_15119__$1 = state_15119;
var statearr_15189_15250 = state_15119__$1;
(statearr_15189_15250[(2)] = inst_15098);

(statearr_15189_15250[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (30))){
var state_15119__$1 = state_15119;
var statearr_15190_15251 = state_15119__$1;
(statearr_15190_15251[(2)] = null);

(statearr_15190_15251[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (10))){
var inst_14997 = (state_15119[(14)]);
var inst_14999 = (state_15119[(17)]);
var inst_15007 = cljs.core._nth.call(null,inst_14997,inst_14999);
var inst_15008 = cljs.core.nth.call(null,inst_15007,(0),null);
var inst_15009 = cljs.core.nth.call(null,inst_15007,(1),null);
var state_15119__$1 = (function (){var statearr_15191 = state_15119;
(statearr_15191[(26)] = inst_15008);

return statearr_15191;
})();
if(cljs.core.truth_(inst_15009)){
var statearr_15192_15252 = state_15119__$1;
(statearr_15192_15252[(1)] = (13));

} else {
var statearr_15193_15253 = state_15119__$1;
(statearr_15193_15253[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (18))){
var inst_15044 = (state_15119[(2)]);
var state_15119__$1 = state_15119;
var statearr_15194_15254 = state_15119__$1;
(statearr_15194_15254[(2)] = inst_15044);

(statearr_15194_15254[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (42))){
var state_15119__$1 = state_15119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15119__$1,(45),dchan);
} else {
if((state_val_15120 === (37))){
var inst_15087 = (state_15119[(23)]);
var inst_14987 = (state_15119[(9)]);
var inst_15078 = (state_15119[(25)]);
var inst_15087__$1 = cljs.core.first.call(null,inst_15078);
var inst_15088 = cljs.core.async.put_BANG_.call(null,inst_15087__$1,inst_14987,done);
var state_15119__$1 = (function (){var statearr_15195 = state_15119;
(statearr_15195[(23)] = inst_15087__$1);

return statearr_15195;
})();
if(cljs.core.truth_(inst_15088)){
var statearr_15196_15255 = state_15119__$1;
(statearr_15196_15255[(1)] = (39));

} else {
var statearr_15197_15256 = state_15119__$1;
(statearr_15197_15256[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (8))){
var inst_14998 = (state_15119[(13)]);
var inst_14999 = (state_15119[(17)]);
var inst_15001 = (inst_14999 < inst_14998);
var inst_15002 = inst_15001;
var state_15119__$1 = state_15119;
if(cljs.core.truth_(inst_15002)){
var statearr_15198_15257 = state_15119__$1;
(statearr_15198_15257[(1)] = (10));

} else {
var statearr_15199_15258 = state_15119__$1;
(statearr_15199_15258[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__14385__auto___15204,cs,m,dchan,dctr,done))
;
return ((function (switch__14368__auto__,c__14385__auto___15204,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__14369__auto__ = null;
var cljs$core$async$mult_$_state_machine__14369__auto____0 = (function (){
var statearr_15200 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15200[(0)] = cljs$core$async$mult_$_state_machine__14369__auto__);

(statearr_15200[(1)] = (1));

return statearr_15200;
});
var cljs$core$async$mult_$_state_machine__14369__auto____1 = (function (state_15119){
while(true){
var ret_value__14370__auto__ = (function (){try{while(true){
var result__14371__auto__ = switch__14368__auto__.call(null,state_15119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14371__auto__;
}
break;
}
}catch (e15201){if((e15201 instanceof Object)){
var ex__14372__auto__ = e15201;
var statearr_15202_15259 = state_15119;
(statearr_15202_15259[(5)] = ex__14372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15260 = state_15119;
state_15119 = G__15260;
continue;
} else {
return ret_value__14370__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14369__auto__ = function(state_15119){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14369__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14369__auto____1.call(this,state_15119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14369__auto____0;
cljs$core$async$mult_$_state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14369__auto____1;
return cljs$core$async$mult_$_state_machine__14369__auto__;
})()
;})(switch__14368__auto__,c__14385__auto___15204,cs,m,dchan,dctr,done))
})();
var state__14387__auto__ = (function (){var statearr_15203 = f__14386__auto__.call(null);
(statearr_15203[(6)] = c__14385__auto___15204);

return statearr_15203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14387__auto__);
});})(c__14385__auto___15204,cs,m,dchan,dctr,done))
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
var G__15262 = arguments.length;
switch (G__15262) {
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
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
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
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
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
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
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
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
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
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
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
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15274 = arguments.length;
var i__4731__auto___15275 = (0);
while(true){
if((i__4731__auto___15275 < len__4730__auto___15274)){
args__4736__auto__.push((arguments[i__4731__auto___15275]));

var G__15276 = (i__4731__auto___15275 + (1));
i__4731__auto___15275 = G__15276;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15268){
var map__15269 = p__15268;
var map__15269__$1 = (((((!((map__15269 == null))))?(((((map__15269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15269):map__15269);
var opts = map__15269__$1;
var statearr_15271_15277 = state;
(statearr_15271_15277[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__15269,map__15269__$1,opts){
return (function (val){
var statearr_15272_15278 = state;
(statearr_15272_15278[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__15269,map__15269__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_15273_15279 = state;
(statearr_15273_15279[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15264){
var G__15265 = cljs.core.first.call(null,seq15264);
var seq15264__$1 = cljs.core.next.call(null,seq15264);
var G__15266 = cljs.core.first.call(null,seq15264__$1);
var seq15264__$2 = cljs.core.next.call(null,seq15264__$1);
var G__15267 = cljs.core.first.call(null,seq15264__$2);
var seq15264__$3 = cljs.core.next.call(null,seq15264__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15265,G__15266,G__15267,seq15264__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15280 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15280 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15281){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15281 = meta15281;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15282,meta15281__$1){
var self__ = this;
var _15282__$1 = this;
return (new cljs.core.async.t_cljs$core$async15280(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15281__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15280.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15282){
var self__ = this;
var _15282__$1 = this;
return self__.meta15281;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15280.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15280.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15280.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15280.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15280.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15280.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15280.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15280.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15280.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15281","meta15281",86524284,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15280.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15280.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15280";

cljs.core.async.t_cljs$core$async15280.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async15280");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15280.
 */
cljs.core.async.__GT_t_cljs$core$async15280 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async15280(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15281){
return (new cljs.core.async.t_cljs$core$async15280(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15281));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async15280(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14385__auto___15444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14385__auto___15444,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__14386__auto__ = (function (){var switch__14368__auto__ = ((function (c__14385__auto___15444,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15384){
var state_val_15385 = (state_15384[(1)]);
if((state_val_15385 === (7))){
var inst_15299 = (state_15384[(2)]);
var state_15384__$1 = state_15384;
var statearr_15386_15445 = state_15384__$1;
(statearr_15386_15445[(2)] = inst_15299);

(statearr_15386_15445[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15385 === (20))){
var inst_15311 = (state_15384[(7)]);
var state_15384__$1 = state_15384;
var statearr_15387_15446 = state_15384__$1;
(statearr_15387_15446[(2)] = inst_15311);

(statearr_15387_15446[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15385 === (27))){
var state_15384__$1 = state_15384;
var statearr_15388_15447 = state_15384__$1;
(statearr_15388_15447[(2)] = null);

(statearr_15388_15447[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15385 === (1))){
var inst_15286 = (state_15384[(8)]);
var inst_15286__$1 = calc_state.call(null);
var inst_15288 = (inst_15286__$1 == null);
var inst_15289 = cljs.core.not.call(null,inst_15288);
var state_15384__$1 = (function (){var statearr_15389 = state_15384;
(statearr_15389[(8)] = inst_15286__$1);

return statearr_15389;
})();
if(inst_15289){
var statearr_15390_15448 = state_15384__$1;
(statearr_15390_15448[(1)] = (2));

} else {
var statearr_15391_15449 = state_15384__$1;
(statearr_15391_15449[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15385 === (24))){
var inst_15335 = (state_15384[(9)]);
var inst_15358 = (state_15384[(10)]);
var inst_15344 = (state_15384[(11)]);
var inst_15358__$1 = inst_15335.call(null,inst_15344);
var state_15384__$1 = (function (){var statearr_15392 = state_15384;
(statearr_15392[(10)] = inst_15358__$1);

return statearr_15392;
})();
if(cljs.core.truth_(inst_15358__$1)){
var statearr_15393_15450 = state_15384__$1;
(statearr_15393_15450[(1)] = (29));

} else {
var statearr_15394_15451 = state_15384__$1;
(statearr_15394_15451[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15385 === (4))){
var inst_15302 = (state_15384[(2)]);
var state_15384__$1 = state_15384;
if(cljs.core.truth_(inst_15302)){
var statearr_15395_15452 = state_15384__$1;
(statearr_15395_15452[(1)] = (8));

} else {
var statearr_15396_15453 = state_15384__$1;
(statearr_15396_15453[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15385 === (15))){
var inst_15329 = (state_15384[(2)]);
var state_15384__$1 = state_15384;
if(cljs.core.truth_(inst_15329)){
var statearr_15397_15454 = state_15384__$1;
(statearr_15397_15454[(1)] = (19));

} else {
var statearr_15398_15455 = state_15384__$1;
(statearr_15398_15455[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15385 === (21))){
var inst_15334 = (state_15384[(12)]);
var inst_15334__$1 = (state_15384[(2)]);
var inst_15335 = cljs.core.get.call(null,inst_15334__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15336 = cljs.core.get.call(null,inst_15334__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15337 = cljs.core.get.call(null,inst_15334__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15384__$1 = (function (){var statearr_15399 = state_15384;
(statearr_15399[(9)] = inst_15335);

(statearr_15399[(13)] = inst_15336);

(statearr_15399[(12)] = inst_15334__$1);

return statearr_15399;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_15384__$1,(22),inst_15337);
} else {
if((state_val_15385 === (31))){
var inst_15366 = (state_15384[(2)]);
var state_15384__$1 = state_15384;
if(cljs.core.truth_(inst_15366)){
var statearr_15400_15456 = state_15384__$1;
(statearr_15400_15456[(1)] = (32));

} else {
var statearr_15401_15457 = state_15384__$1;
(statearr_15401_15457[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15385 === (32))){
var inst_15343 = (state_15384[(14)]);
var state_15384__$1 = state_15384;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15384__$1,(35),out,inst_15343);
} else {
if((state_val_15385 === (33))){
var inst_15334 = (state_15384[(12)]);
var inst_15311 = inst_15334;
var state_15384__$1 = (function (){var statearr_15402 = state_15384;
(statearr_15402[(7)] = inst_15311);

return statearr_15402;
})();
var statearr_15403_15458 = state_15384__$1;
(statearr_15403_15458[(2)] = null);

(statearr_15403_15458[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15385 === (13))){
var inst_15311 = (state_15384[(7)]);
var inst_15318 = inst_15311.cljs$lang$protocol_mask$partition0$;
var inst_15319 = (inst_15318 & (64));
var inst_15320 = inst_15311.cljs$core$ISeq$;
var inst_15321 = (cljs.core.PROTOCOL_SENTINEL === inst_15320);
var inst_15322 = ((inst_15319) || (inst_15321));
var state_15384__$1 = state_15384;
if(cljs.core.truth_(inst_15322)){
var statearr_15404_15459 = state_15384__$1;
(statearr_15404_15459[(1)] = (16));

} else {
var statearr_15405_15460 = state_15384__$1;
(statearr_15405_15460[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15385 === (22))){
var inst_15343 = (state_15384[(14)]);
var inst_15344 = (state_15384[(11)]);
var inst_15342 = (state_15384[(2)]);
var inst_15343__$1 = cljs.core.nth.call(null,inst_15342,(0),null);
var inst_15344__$1 = cljs.core.nth.call(null,inst_15342,(1),null);
var inst_15345 = (inst_15343__$1 == null);
var inst_15346 = cljs.core._EQ_.call(null,inst_15344__$1,change);
var inst_15347 = ((inst_15345) || (inst_15346));
var state_15384__$1 = (function (){var statearr_15406 = state_15384;
(statearr_15406[(14)] = inst_15343__$1);

(statearr_15406[(11)] = inst_15344__$1);

return statearr_15406;
})();
if(cljs.core.truth_(inst_15347)){
var statearr_15407_15461 = state_15384__$1;
(statearr_15407_15461[(1)] = (23));

} else {
var statearr_15408_15462 = state_15384__$1;
(statearr_15408_15462[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15385 === (36))){
var inst_15334 = (state_15384[(12)]);
var inst_15311 = inst_15334;
var state_15384__$1 = (function (){var statearr_15409 = state_15384;
(statearr_15409[(7)] = inst_15311);

return statearr_15409;
})();
var statearr_15410_15463 = state_15384__$1;
(statearr_15410_15463[(2)] = null);

(statearr_15410_15463[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15385 === (29))){
var inst_15358 = (state_15384[(10)]);
var state_15384__$1 = state_15384;
var statearr_15411_15464 = state_15384__$1;
(statearr_15411_15464[(2)] = inst_15358);

(statearr_15411_15464[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15385 === (6))){
var state_15384__$1 = state_15384;
var statearr_15412_15465 = state_15384__$1;
(statearr_15412_15465[(2)] = false);

(statearr_15412_15465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15385 === (28))){
var inst_15354 = (state_15384[(2)]);
var inst_15355 = calc_state.call(null);
var inst_15311 = inst_15355;
var state_15384__$1 = (function (){var statearr_15413 = state_15384;
(statearr_15413[(15)] = inst_15354);

(statearr_15413[(7)] = inst_15311);

return statearr_15413;
})();
var statearr_15414_15466 = state_15384__$1;
(statearr_15414_15466[(2)] = null);

(statearr_15414_15466[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15385 === (25))){
var inst_15380 = (state_15384[(2)]);
var state_15384__$1 = state_15384;
var statearr_15415_15467 = state_15384__$1;
(statearr_15415_15467[(2)] = inst_15380);

(statearr_15415_15467[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15385 === (34))){
var inst_15378 = (state_15384[(2)]);
var state_15384__$1 = state_15384;
var statearr_15416_15468 = state_15384__$1;
(statearr_15416_15468[(2)] = inst_15378);

(statearr_15416_15468[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15385 === (17))){
var state_15384__$1 = state_15384;
var statearr_15417_15469 = state_15384__$1;
(statearr_15417_15469[(2)] = false);

(statearr_15417_15469[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15385 === (3))){
var state_15384__$1 = state_15384;
var statearr_15418_15470 = state_15384__$1;
(statearr_15418_15470[(2)] = false);

(statearr_15418_15470[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15385 === (12))){
var inst_15382 = (state_15384[(2)]);
var state_15384__$1 = state_15384;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15384__$1,inst_15382);
} else {
if((state_val_15385 === (2))){
var inst_15286 = (state_15384[(8)]);
var inst_15291 = inst_15286.cljs$lang$protocol_mask$partition0$;
var inst_15292 = (inst_15291 & (64));
var inst_15293 = inst_15286.cljs$core$ISeq$;
var inst_15294 = (cljs.core.PROTOCOL_SENTINEL === inst_15293);
var inst_15295 = ((inst_15292) || (inst_15294));
var state_15384__$1 = state_15384;
if(cljs.core.truth_(inst_15295)){
var statearr_15419_15471 = state_15384__$1;
(statearr_15419_15471[(1)] = (5));

} else {
var statearr_15420_15472 = state_15384__$1;
(statearr_15420_15472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15385 === (23))){
var inst_15343 = (state_15384[(14)]);
var inst_15349 = (inst_15343 == null);
var state_15384__$1 = state_15384;
if(cljs.core.truth_(inst_15349)){
var statearr_15421_15473 = state_15384__$1;
(statearr_15421_15473[(1)] = (26));

} else {
var statearr_15422_15474 = state_15384__$1;
(statearr_15422_15474[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15385 === (35))){
var inst_15369 = (state_15384[(2)]);
var state_15384__$1 = state_15384;
if(cljs.core.truth_(inst_15369)){
var statearr_15423_15475 = state_15384__$1;
(statearr_15423_15475[(1)] = (36));

} else {
var statearr_15424_15476 = state_15384__$1;
(statearr_15424_15476[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15385 === (19))){
var inst_15311 = (state_15384[(7)]);
var inst_15331 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15311);
var state_15384__$1 = state_15384;
var statearr_15425_15477 = state_15384__$1;
(statearr_15425_15477[(2)] = inst_15331);

(statearr_15425_15477[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15385 === (11))){
var inst_15311 = (state_15384[(7)]);
var inst_15315 = (inst_15311 == null);
var inst_15316 = cljs.core.not.call(null,inst_15315);
var state_15384__$1 = state_15384;
if(inst_15316){
var statearr_15426_15478 = state_15384__$1;
(statearr_15426_15478[(1)] = (13));

} else {
var statearr_15427_15479 = state_15384__$1;
(statearr_15427_15479[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15385 === (9))){
var inst_15286 = (state_15384[(8)]);
var state_15384__$1 = state_15384;
var statearr_15428_15480 = state_15384__$1;
(statearr_15428_15480[(2)] = inst_15286);

(statearr_15428_15480[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15385 === (5))){
var state_15384__$1 = state_15384;
var statearr_15429_15481 = state_15384__$1;
(statearr_15429_15481[(2)] = true);

(statearr_15429_15481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15385 === (14))){
var state_15384__$1 = state_15384;
var statearr_15430_15482 = state_15384__$1;
(statearr_15430_15482[(2)] = false);

(statearr_15430_15482[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15385 === (26))){
var inst_15344 = (state_15384[(11)]);
var inst_15351 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15344);
var state_15384__$1 = state_15384;
var statearr_15431_15483 = state_15384__$1;
(statearr_15431_15483[(2)] = inst_15351);

(statearr_15431_15483[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15385 === (16))){
var state_15384__$1 = state_15384;
var statearr_15432_15484 = state_15384__$1;
(statearr_15432_15484[(2)] = true);

(statearr_15432_15484[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15385 === (38))){
var inst_15374 = (state_15384[(2)]);
var state_15384__$1 = state_15384;
var statearr_15433_15485 = state_15384__$1;
(statearr_15433_15485[(2)] = inst_15374);

(statearr_15433_15485[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15385 === (30))){
var inst_15335 = (state_15384[(9)]);
var inst_15336 = (state_15384[(13)]);
var inst_15344 = (state_15384[(11)]);
var inst_15361 = cljs.core.empty_QMARK_.call(null,inst_15335);
var inst_15362 = inst_15336.call(null,inst_15344);
var inst_15363 = cljs.core.not.call(null,inst_15362);
var inst_15364 = ((inst_15361) && (inst_15363));
var state_15384__$1 = state_15384;
var statearr_15434_15486 = state_15384__$1;
(statearr_15434_15486[(2)] = inst_15364);

(statearr_15434_15486[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15385 === (10))){
var inst_15286 = (state_15384[(8)]);
var inst_15307 = (state_15384[(2)]);
var inst_15308 = cljs.core.get.call(null,inst_15307,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15309 = cljs.core.get.call(null,inst_15307,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15310 = cljs.core.get.call(null,inst_15307,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15311 = inst_15286;
var state_15384__$1 = (function (){var statearr_15435 = state_15384;
(statearr_15435[(16)] = inst_15308);

(statearr_15435[(17)] = inst_15309);

(statearr_15435[(18)] = inst_15310);

(statearr_15435[(7)] = inst_15311);

return statearr_15435;
})();
var statearr_15436_15487 = state_15384__$1;
(statearr_15436_15487[(2)] = null);

(statearr_15436_15487[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15385 === (18))){
var inst_15326 = (state_15384[(2)]);
var state_15384__$1 = state_15384;
var statearr_15437_15488 = state_15384__$1;
(statearr_15437_15488[(2)] = inst_15326);

(statearr_15437_15488[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15385 === (37))){
var state_15384__$1 = state_15384;
var statearr_15438_15489 = state_15384__$1;
(statearr_15438_15489[(2)] = null);

(statearr_15438_15489[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15385 === (8))){
var inst_15286 = (state_15384[(8)]);
var inst_15304 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15286);
var state_15384__$1 = state_15384;
var statearr_15439_15490 = state_15384__$1;
(statearr_15439_15490[(2)] = inst_15304);

(statearr_15439_15490[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__14385__auto___15444,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__14368__auto__,c__14385__auto___15444,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__14369__auto__ = null;
var cljs$core$async$mix_$_state_machine__14369__auto____0 = (function (){
var statearr_15440 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15440[(0)] = cljs$core$async$mix_$_state_machine__14369__auto__);

(statearr_15440[(1)] = (1));

return statearr_15440;
});
var cljs$core$async$mix_$_state_machine__14369__auto____1 = (function (state_15384){
while(true){
var ret_value__14370__auto__ = (function (){try{while(true){
var result__14371__auto__ = switch__14368__auto__.call(null,state_15384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14371__auto__;
}
break;
}
}catch (e15441){if((e15441 instanceof Object)){
var ex__14372__auto__ = e15441;
var statearr_15442_15491 = state_15384;
(statearr_15442_15491[(5)] = ex__14372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15492 = state_15384;
state_15384 = G__15492;
continue;
} else {
return ret_value__14370__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14369__auto__ = function(state_15384){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14369__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14369__auto____1.call(this,state_15384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14369__auto____0;
cljs$core$async$mix_$_state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14369__auto____1;
return cljs$core$async$mix_$_state_machine__14369__auto__;
})()
;})(switch__14368__auto__,c__14385__auto___15444,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__14387__auto__ = (function (){var statearr_15443 = f__14386__auto__.call(null);
(statearr_15443[(6)] = c__14385__auto___15444);

return statearr_15443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14387__auto__);
});})(c__14385__auto___15444,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
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
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
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
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__15494 = arguments.length;
switch (G__15494) {
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
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var G__15498 = arguments.length;
switch (G__15498) {
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
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__15496_SHARP_){
if(cljs.core.truth_(p1__15496_SHARP_.call(null,topic))){
return p1__15496_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__15496_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15499 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15499 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15500){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15500 = meta15500;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15499.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15501,meta15500__$1){
var self__ = this;
var _15501__$1 = this;
return (new cljs.core.async.t_cljs$core$async15499(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15500__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15499.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15501){
var self__ = this;
var _15501__$1 = this;
return self__.meta15500;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15499.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15499.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15499.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15499.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15499.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15499.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15499.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15499.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15500","meta15500",-20889557,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15499.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15499.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15499";

cljs.core.async.t_cljs$core$async15499.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async15499");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15499.
 */
cljs.core.async.__GT_t_cljs$core$async15499 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async15499(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15500){
return (new cljs.core.async.t_cljs$core$async15499(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15500));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async15499(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14385__auto___15619 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14385__auto___15619,mults,ensure_mult,p){
return (function (){
var f__14386__auto__ = (function (){var switch__14368__auto__ = ((function (c__14385__auto___15619,mults,ensure_mult,p){
return (function (state_15573){
var state_val_15574 = (state_15573[(1)]);
if((state_val_15574 === (7))){
var inst_15569 = (state_15573[(2)]);
var state_15573__$1 = state_15573;
var statearr_15575_15620 = state_15573__$1;
(statearr_15575_15620[(2)] = inst_15569);

(statearr_15575_15620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15574 === (20))){
var state_15573__$1 = state_15573;
var statearr_15576_15621 = state_15573__$1;
(statearr_15576_15621[(2)] = null);

(statearr_15576_15621[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15574 === (1))){
var state_15573__$1 = state_15573;
var statearr_15577_15622 = state_15573__$1;
(statearr_15577_15622[(2)] = null);

(statearr_15577_15622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15574 === (24))){
var inst_15552 = (state_15573[(7)]);
var inst_15561 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15552);
var state_15573__$1 = state_15573;
var statearr_15578_15623 = state_15573__$1;
(statearr_15578_15623[(2)] = inst_15561);

(statearr_15578_15623[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15574 === (4))){
var inst_15504 = (state_15573[(8)]);
var inst_15504__$1 = (state_15573[(2)]);
var inst_15505 = (inst_15504__$1 == null);
var state_15573__$1 = (function (){var statearr_15579 = state_15573;
(statearr_15579[(8)] = inst_15504__$1);

return statearr_15579;
})();
if(cljs.core.truth_(inst_15505)){
var statearr_15580_15624 = state_15573__$1;
(statearr_15580_15624[(1)] = (5));

} else {
var statearr_15581_15625 = state_15573__$1;
(statearr_15581_15625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15574 === (15))){
var inst_15546 = (state_15573[(2)]);
var state_15573__$1 = state_15573;
var statearr_15582_15626 = state_15573__$1;
(statearr_15582_15626[(2)] = inst_15546);

(statearr_15582_15626[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15574 === (21))){
var inst_15566 = (state_15573[(2)]);
var state_15573__$1 = (function (){var statearr_15583 = state_15573;
(statearr_15583[(9)] = inst_15566);

return statearr_15583;
})();
var statearr_15584_15627 = state_15573__$1;
(statearr_15584_15627[(2)] = null);

(statearr_15584_15627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15574 === (13))){
var inst_15528 = (state_15573[(10)]);
var inst_15530 = cljs.core.chunked_seq_QMARK_.call(null,inst_15528);
var state_15573__$1 = state_15573;
if(inst_15530){
var statearr_15585_15628 = state_15573__$1;
(statearr_15585_15628[(1)] = (16));

} else {
var statearr_15586_15629 = state_15573__$1;
(statearr_15586_15629[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15574 === (22))){
var inst_15558 = (state_15573[(2)]);
var state_15573__$1 = state_15573;
if(cljs.core.truth_(inst_15558)){
var statearr_15587_15630 = state_15573__$1;
(statearr_15587_15630[(1)] = (23));

} else {
var statearr_15588_15631 = state_15573__$1;
(statearr_15588_15631[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15574 === (6))){
var inst_15554 = (state_15573[(11)]);
var inst_15504 = (state_15573[(8)]);
var inst_15552 = (state_15573[(7)]);
var inst_15552__$1 = topic_fn.call(null,inst_15504);
var inst_15553 = cljs.core.deref.call(null,mults);
var inst_15554__$1 = cljs.core.get.call(null,inst_15553,inst_15552__$1);
var state_15573__$1 = (function (){var statearr_15589 = state_15573;
(statearr_15589[(11)] = inst_15554__$1);

(statearr_15589[(7)] = inst_15552__$1);

return statearr_15589;
})();
if(cljs.core.truth_(inst_15554__$1)){
var statearr_15590_15632 = state_15573__$1;
(statearr_15590_15632[(1)] = (19));

} else {
var statearr_15591_15633 = state_15573__$1;
(statearr_15591_15633[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15574 === (25))){
var inst_15563 = (state_15573[(2)]);
var state_15573__$1 = state_15573;
var statearr_15592_15634 = state_15573__$1;
(statearr_15592_15634[(2)] = inst_15563);

(statearr_15592_15634[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15574 === (17))){
var inst_15528 = (state_15573[(10)]);
var inst_15537 = cljs.core.first.call(null,inst_15528);
var inst_15538 = cljs.core.async.muxch_STAR_.call(null,inst_15537);
var inst_15539 = cljs.core.async.close_BANG_.call(null,inst_15538);
var inst_15540 = cljs.core.next.call(null,inst_15528);
var inst_15514 = inst_15540;
var inst_15515 = null;
var inst_15516 = (0);
var inst_15517 = (0);
var state_15573__$1 = (function (){var statearr_15593 = state_15573;
(statearr_15593[(12)] = inst_15517);

(statearr_15593[(13)] = inst_15514);

(statearr_15593[(14)] = inst_15515);

(statearr_15593[(15)] = inst_15516);

(statearr_15593[(16)] = inst_15539);

return statearr_15593;
})();
var statearr_15594_15635 = state_15573__$1;
(statearr_15594_15635[(2)] = null);

(statearr_15594_15635[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15574 === (3))){
var inst_15571 = (state_15573[(2)]);
var state_15573__$1 = state_15573;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15573__$1,inst_15571);
} else {
if((state_val_15574 === (12))){
var inst_15548 = (state_15573[(2)]);
var state_15573__$1 = state_15573;
var statearr_15595_15636 = state_15573__$1;
(statearr_15595_15636[(2)] = inst_15548);

(statearr_15595_15636[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15574 === (2))){
var state_15573__$1 = state_15573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15573__$1,(4),ch);
} else {
if((state_val_15574 === (23))){
var state_15573__$1 = state_15573;
var statearr_15596_15637 = state_15573__$1;
(statearr_15596_15637[(2)] = null);

(statearr_15596_15637[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15574 === (19))){
var inst_15554 = (state_15573[(11)]);
var inst_15504 = (state_15573[(8)]);
var inst_15556 = cljs.core.async.muxch_STAR_.call(null,inst_15554);
var state_15573__$1 = state_15573;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15573__$1,(22),inst_15556,inst_15504);
} else {
if((state_val_15574 === (11))){
var inst_15514 = (state_15573[(13)]);
var inst_15528 = (state_15573[(10)]);
var inst_15528__$1 = cljs.core.seq.call(null,inst_15514);
var state_15573__$1 = (function (){var statearr_15597 = state_15573;
(statearr_15597[(10)] = inst_15528__$1);

return statearr_15597;
})();
if(inst_15528__$1){
var statearr_15598_15638 = state_15573__$1;
(statearr_15598_15638[(1)] = (13));

} else {
var statearr_15599_15639 = state_15573__$1;
(statearr_15599_15639[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15574 === (9))){
var inst_15550 = (state_15573[(2)]);
var state_15573__$1 = state_15573;
var statearr_15600_15640 = state_15573__$1;
(statearr_15600_15640[(2)] = inst_15550);

(statearr_15600_15640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15574 === (5))){
var inst_15511 = cljs.core.deref.call(null,mults);
var inst_15512 = cljs.core.vals.call(null,inst_15511);
var inst_15513 = cljs.core.seq.call(null,inst_15512);
var inst_15514 = inst_15513;
var inst_15515 = null;
var inst_15516 = (0);
var inst_15517 = (0);
var state_15573__$1 = (function (){var statearr_15601 = state_15573;
(statearr_15601[(12)] = inst_15517);

(statearr_15601[(13)] = inst_15514);

(statearr_15601[(14)] = inst_15515);

(statearr_15601[(15)] = inst_15516);

return statearr_15601;
})();
var statearr_15602_15641 = state_15573__$1;
(statearr_15602_15641[(2)] = null);

(statearr_15602_15641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15574 === (14))){
var state_15573__$1 = state_15573;
var statearr_15606_15642 = state_15573__$1;
(statearr_15606_15642[(2)] = null);

(statearr_15606_15642[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15574 === (16))){
var inst_15528 = (state_15573[(10)]);
var inst_15532 = cljs.core.chunk_first.call(null,inst_15528);
var inst_15533 = cljs.core.chunk_rest.call(null,inst_15528);
var inst_15534 = cljs.core.count.call(null,inst_15532);
var inst_15514 = inst_15533;
var inst_15515 = inst_15532;
var inst_15516 = inst_15534;
var inst_15517 = (0);
var state_15573__$1 = (function (){var statearr_15607 = state_15573;
(statearr_15607[(12)] = inst_15517);

(statearr_15607[(13)] = inst_15514);

(statearr_15607[(14)] = inst_15515);

(statearr_15607[(15)] = inst_15516);

return statearr_15607;
})();
var statearr_15608_15643 = state_15573__$1;
(statearr_15608_15643[(2)] = null);

(statearr_15608_15643[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15574 === (10))){
var inst_15517 = (state_15573[(12)]);
var inst_15514 = (state_15573[(13)]);
var inst_15515 = (state_15573[(14)]);
var inst_15516 = (state_15573[(15)]);
var inst_15522 = cljs.core._nth.call(null,inst_15515,inst_15517);
var inst_15523 = cljs.core.async.muxch_STAR_.call(null,inst_15522);
var inst_15524 = cljs.core.async.close_BANG_.call(null,inst_15523);
var inst_15525 = (inst_15517 + (1));
var tmp15603 = inst_15514;
var tmp15604 = inst_15515;
var tmp15605 = inst_15516;
var inst_15514__$1 = tmp15603;
var inst_15515__$1 = tmp15604;
var inst_15516__$1 = tmp15605;
var inst_15517__$1 = inst_15525;
var state_15573__$1 = (function (){var statearr_15609 = state_15573;
(statearr_15609[(12)] = inst_15517__$1);

(statearr_15609[(13)] = inst_15514__$1);

(statearr_15609[(14)] = inst_15515__$1);

(statearr_15609[(17)] = inst_15524);

(statearr_15609[(15)] = inst_15516__$1);

return statearr_15609;
})();
var statearr_15610_15644 = state_15573__$1;
(statearr_15610_15644[(2)] = null);

(statearr_15610_15644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15574 === (18))){
var inst_15543 = (state_15573[(2)]);
var state_15573__$1 = state_15573;
var statearr_15611_15645 = state_15573__$1;
(statearr_15611_15645[(2)] = inst_15543);

(statearr_15611_15645[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15574 === (8))){
var inst_15517 = (state_15573[(12)]);
var inst_15516 = (state_15573[(15)]);
var inst_15519 = (inst_15517 < inst_15516);
var inst_15520 = inst_15519;
var state_15573__$1 = state_15573;
if(cljs.core.truth_(inst_15520)){
var statearr_15612_15646 = state_15573__$1;
(statearr_15612_15646[(1)] = (10));

} else {
var statearr_15613_15647 = state_15573__$1;
(statearr_15613_15647[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__14385__auto___15619,mults,ensure_mult,p))
;
return ((function (switch__14368__auto__,c__14385__auto___15619,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__14369__auto__ = null;
var cljs$core$async$state_machine__14369__auto____0 = (function (){
var statearr_15614 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15614[(0)] = cljs$core$async$state_machine__14369__auto__);

(statearr_15614[(1)] = (1));

return statearr_15614;
});
var cljs$core$async$state_machine__14369__auto____1 = (function (state_15573){
while(true){
var ret_value__14370__auto__ = (function (){try{while(true){
var result__14371__auto__ = switch__14368__auto__.call(null,state_15573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14371__auto__;
}
break;
}
}catch (e15615){if((e15615 instanceof Object)){
var ex__14372__auto__ = e15615;
var statearr_15616_15648 = state_15573;
(statearr_15616_15648[(5)] = ex__14372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15649 = state_15573;
state_15573 = G__15649;
continue;
} else {
return ret_value__14370__auto__;
}
break;
}
});
cljs$core$async$state_machine__14369__auto__ = function(state_15573){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14369__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14369__auto____1.call(this,state_15573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14369__auto____0;
cljs$core$async$state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14369__auto____1;
return cljs$core$async$state_machine__14369__auto__;
})()
;})(switch__14368__auto__,c__14385__auto___15619,mults,ensure_mult,p))
})();
var state__14387__auto__ = (function (){var statearr_15617 = f__14386__auto__.call(null);
(statearr_15617[(6)] = c__14385__auto___15619);

return statearr_15617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14387__auto__);
});})(c__14385__auto___15619,mults,ensure_mult,p))
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
var G__15651 = arguments.length;
switch (G__15651) {
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
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__15654 = arguments.length;
switch (G__15654) {
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
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var G__15657 = arguments.length;
switch (G__15657) {
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
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__14385__auto___15724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14385__auto___15724,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__14386__auto__ = (function (){var switch__14368__auto__ = ((function (c__14385__auto___15724,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15696){
var state_val_15697 = (state_15696[(1)]);
if((state_val_15697 === (7))){
var state_15696__$1 = state_15696;
var statearr_15698_15725 = state_15696__$1;
(statearr_15698_15725[(2)] = null);

(statearr_15698_15725[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15697 === (1))){
var state_15696__$1 = state_15696;
var statearr_15699_15726 = state_15696__$1;
(statearr_15699_15726[(2)] = null);

(statearr_15699_15726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15697 === (4))){
var inst_15660 = (state_15696[(7)]);
var inst_15662 = (inst_15660 < cnt);
var state_15696__$1 = state_15696;
if(cljs.core.truth_(inst_15662)){
var statearr_15700_15727 = state_15696__$1;
(statearr_15700_15727[(1)] = (6));

} else {
var statearr_15701_15728 = state_15696__$1;
(statearr_15701_15728[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15697 === (15))){
var inst_15692 = (state_15696[(2)]);
var state_15696__$1 = state_15696;
var statearr_15702_15729 = state_15696__$1;
(statearr_15702_15729[(2)] = inst_15692);

(statearr_15702_15729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15697 === (13))){
var inst_15685 = cljs.core.async.close_BANG_.call(null,out);
var state_15696__$1 = state_15696;
var statearr_15703_15730 = state_15696__$1;
(statearr_15703_15730[(2)] = inst_15685);

(statearr_15703_15730[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15697 === (6))){
var state_15696__$1 = state_15696;
var statearr_15704_15731 = state_15696__$1;
(statearr_15704_15731[(2)] = null);

(statearr_15704_15731[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15697 === (3))){
var inst_15694 = (state_15696[(2)]);
var state_15696__$1 = state_15696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15696__$1,inst_15694);
} else {
if((state_val_15697 === (12))){
var inst_15682 = (state_15696[(8)]);
var inst_15682__$1 = (state_15696[(2)]);
var inst_15683 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15682__$1);
var state_15696__$1 = (function (){var statearr_15705 = state_15696;
(statearr_15705[(8)] = inst_15682__$1);

return statearr_15705;
})();
if(cljs.core.truth_(inst_15683)){
var statearr_15706_15732 = state_15696__$1;
(statearr_15706_15732[(1)] = (13));

} else {
var statearr_15707_15733 = state_15696__$1;
(statearr_15707_15733[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15697 === (2))){
var inst_15659 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_15660 = (0);
var state_15696__$1 = (function (){var statearr_15708 = state_15696;
(statearr_15708[(7)] = inst_15660);

(statearr_15708[(9)] = inst_15659);

return statearr_15708;
})();
var statearr_15709_15734 = state_15696__$1;
(statearr_15709_15734[(2)] = null);

(statearr_15709_15734[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15697 === (11))){
var inst_15660 = (state_15696[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15696,(10),Object,null,(9));
var inst_15669 = chs__$1.call(null,inst_15660);
var inst_15670 = done.call(null,inst_15660);
var inst_15671 = cljs.core.async.take_BANG_.call(null,inst_15669,inst_15670);
var state_15696__$1 = state_15696;
var statearr_15710_15735 = state_15696__$1;
(statearr_15710_15735[(2)] = inst_15671);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15696__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15697 === (9))){
var inst_15660 = (state_15696[(7)]);
var inst_15673 = (state_15696[(2)]);
var inst_15674 = (inst_15660 + (1));
var inst_15660__$1 = inst_15674;
var state_15696__$1 = (function (){var statearr_15711 = state_15696;
(statearr_15711[(7)] = inst_15660__$1);

(statearr_15711[(10)] = inst_15673);

return statearr_15711;
})();
var statearr_15712_15736 = state_15696__$1;
(statearr_15712_15736[(2)] = null);

(statearr_15712_15736[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15697 === (5))){
var inst_15680 = (state_15696[(2)]);
var state_15696__$1 = (function (){var statearr_15713 = state_15696;
(statearr_15713[(11)] = inst_15680);

return statearr_15713;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15696__$1,(12),dchan);
} else {
if((state_val_15697 === (14))){
var inst_15682 = (state_15696[(8)]);
var inst_15687 = cljs.core.apply.call(null,f,inst_15682);
var state_15696__$1 = state_15696;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15696__$1,(16),out,inst_15687);
} else {
if((state_val_15697 === (16))){
var inst_15689 = (state_15696[(2)]);
var state_15696__$1 = (function (){var statearr_15714 = state_15696;
(statearr_15714[(12)] = inst_15689);

return statearr_15714;
})();
var statearr_15715_15737 = state_15696__$1;
(statearr_15715_15737[(2)] = null);

(statearr_15715_15737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15697 === (10))){
var inst_15664 = (state_15696[(2)]);
var inst_15665 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_15696__$1 = (function (){var statearr_15716 = state_15696;
(statearr_15716[(13)] = inst_15664);

return statearr_15716;
})();
var statearr_15717_15738 = state_15696__$1;
(statearr_15717_15738[(2)] = inst_15665);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15696__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15697 === (8))){
var inst_15678 = (state_15696[(2)]);
var state_15696__$1 = state_15696;
var statearr_15718_15739 = state_15696__$1;
(statearr_15718_15739[(2)] = inst_15678);

(statearr_15718_15739[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__14385__auto___15724,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__14368__auto__,c__14385__auto___15724,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__14369__auto__ = null;
var cljs$core$async$state_machine__14369__auto____0 = (function (){
var statearr_15719 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15719[(0)] = cljs$core$async$state_machine__14369__auto__);

(statearr_15719[(1)] = (1));

return statearr_15719;
});
var cljs$core$async$state_machine__14369__auto____1 = (function (state_15696){
while(true){
var ret_value__14370__auto__ = (function (){try{while(true){
var result__14371__auto__ = switch__14368__auto__.call(null,state_15696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14371__auto__;
}
break;
}
}catch (e15720){if((e15720 instanceof Object)){
var ex__14372__auto__ = e15720;
var statearr_15721_15740 = state_15696;
(statearr_15721_15740[(5)] = ex__14372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15741 = state_15696;
state_15696 = G__15741;
continue;
} else {
return ret_value__14370__auto__;
}
break;
}
});
cljs$core$async$state_machine__14369__auto__ = function(state_15696){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14369__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14369__auto____1.call(this,state_15696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14369__auto____0;
cljs$core$async$state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14369__auto____1;
return cljs$core$async$state_machine__14369__auto__;
})()
;})(switch__14368__auto__,c__14385__auto___15724,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__14387__auto__ = (function (){var statearr_15722 = f__14386__auto__.call(null);
(statearr_15722[(6)] = c__14385__auto___15724);

return statearr_15722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14387__auto__);
});})(c__14385__auto___15724,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__15744 = arguments.length;
switch (G__15744) {
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
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14385__auto___15798 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14385__auto___15798,out){
return (function (){
var f__14386__auto__ = (function (){var switch__14368__auto__ = ((function (c__14385__auto___15798,out){
return (function (state_15776){
var state_val_15777 = (state_15776[(1)]);
if((state_val_15777 === (7))){
var inst_15756 = (state_15776[(7)]);
var inst_15755 = (state_15776[(8)]);
var inst_15755__$1 = (state_15776[(2)]);
var inst_15756__$1 = cljs.core.nth.call(null,inst_15755__$1,(0),null);
var inst_15757 = cljs.core.nth.call(null,inst_15755__$1,(1),null);
var inst_15758 = (inst_15756__$1 == null);
var state_15776__$1 = (function (){var statearr_15778 = state_15776;
(statearr_15778[(7)] = inst_15756__$1);

(statearr_15778[(9)] = inst_15757);

(statearr_15778[(8)] = inst_15755__$1);

return statearr_15778;
})();
if(cljs.core.truth_(inst_15758)){
var statearr_15779_15799 = state_15776__$1;
(statearr_15779_15799[(1)] = (8));

} else {
var statearr_15780_15800 = state_15776__$1;
(statearr_15780_15800[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15777 === (1))){
var inst_15745 = cljs.core.vec.call(null,chs);
var inst_15746 = inst_15745;
var state_15776__$1 = (function (){var statearr_15781 = state_15776;
(statearr_15781[(10)] = inst_15746);

return statearr_15781;
})();
var statearr_15782_15801 = state_15776__$1;
(statearr_15782_15801[(2)] = null);

(statearr_15782_15801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15777 === (4))){
var inst_15746 = (state_15776[(10)]);
var state_15776__$1 = state_15776;
return cljs.core.async.ioc_alts_BANG_.call(null,state_15776__$1,(7),inst_15746);
} else {
if((state_val_15777 === (6))){
var inst_15772 = (state_15776[(2)]);
var state_15776__$1 = state_15776;
var statearr_15783_15802 = state_15776__$1;
(statearr_15783_15802[(2)] = inst_15772);

(statearr_15783_15802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15777 === (3))){
var inst_15774 = (state_15776[(2)]);
var state_15776__$1 = state_15776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15776__$1,inst_15774);
} else {
if((state_val_15777 === (2))){
var inst_15746 = (state_15776[(10)]);
var inst_15748 = cljs.core.count.call(null,inst_15746);
var inst_15749 = (inst_15748 > (0));
var state_15776__$1 = state_15776;
if(cljs.core.truth_(inst_15749)){
var statearr_15785_15803 = state_15776__$1;
(statearr_15785_15803[(1)] = (4));

} else {
var statearr_15786_15804 = state_15776__$1;
(statearr_15786_15804[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15777 === (11))){
var inst_15746 = (state_15776[(10)]);
var inst_15765 = (state_15776[(2)]);
var tmp15784 = inst_15746;
var inst_15746__$1 = tmp15784;
var state_15776__$1 = (function (){var statearr_15787 = state_15776;
(statearr_15787[(11)] = inst_15765);

(statearr_15787[(10)] = inst_15746__$1);

return statearr_15787;
})();
var statearr_15788_15805 = state_15776__$1;
(statearr_15788_15805[(2)] = null);

(statearr_15788_15805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15777 === (9))){
var inst_15756 = (state_15776[(7)]);
var state_15776__$1 = state_15776;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15776__$1,(11),out,inst_15756);
} else {
if((state_val_15777 === (5))){
var inst_15770 = cljs.core.async.close_BANG_.call(null,out);
var state_15776__$1 = state_15776;
var statearr_15789_15806 = state_15776__$1;
(statearr_15789_15806[(2)] = inst_15770);

(statearr_15789_15806[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15777 === (10))){
var inst_15768 = (state_15776[(2)]);
var state_15776__$1 = state_15776;
var statearr_15790_15807 = state_15776__$1;
(statearr_15790_15807[(2)] = inst_15768);

(statearr_15790_15807[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15777 === (8))){
var inst_15756 = (state_15776[(7)]);
var inst_15757 = (state_15776[(9)]);
var inst_15746 = (state_15776[(10)]);
var inst_15755 = (state_15776[(8)]);
var inst_15760 = (function (){var cs = inst_15746;
var vec__15751 = inst_15755;
var v = inst_15756;
var c = inst_15757;
return ((function (cs,vec__15751,v,c,inst_15756,inst_15757,inst_15746,inst_15755,state_val_15777,c__14385__auto___15798,out){
return (function (p1__15742_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__15742_SHARP_);
});
;})(cs,vec__15751,v,c,inst_15756,inst_15757,inst_15746,inst_15755,state_val_15777,c__14385__auto___15798,out))
})();
var inst_15761 = cljs.core.filterv.call(null,inst_15760,inst_15746);
var inst_15746__$1 = inst_15761;
var state_15776__$1 = (function (){var statearr_15791 = state_15776;
(statearr_15791[(10)] = inst_15746__$1);

return statearr_15791;
})();
var statearr_15792_15808 = state_15776__$1;
(statearr_15792_15808[(2)] = null);

(statearr_15792_15808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__14385__auto___15798,out))
;
return ((function (switch__14368__auto__,c__14385__auto___15798,out){
return (function() {
var cljs$core$async$state_machine__14369__auto__ = null;
var cljs$core$async$state_machine__14369__auto____0 = (function (){
var statearr_15793 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15793[(0)] = cljs$core$async$state_machine__14369__auto__);

(statearr_15793[(1)] = (1));

return statearr_15793;
});
var cljs$core$async$state_machine__14369__auto____1 = (function (state_15776){
while(true){
var ret_value__14370__auto__ = (function (){try{while(true){
var result__14371__auto__ = switch__14368__auto__.call(null,state_15776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14371__auto__;
}
break;
}
}catch (e15794){if((e15794 instanceof Object)){
var ex__14372__auto__ = e15794;
var statearr_15795_15809 = state_15776;
(statearr_15795_15809[(5)] = ex__14372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15810 = state_15776;
state_15776 = G__15810;
continue;
} else {
return ret_value__14370__auto__;
}
break;
}
});
cljs$core$async$state_machine__14369__auto__ = function(state_15776){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14369__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14369__auto____1.call(this,state_15776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14369__auto____0;
cljs$core$async$state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14369__auto____1;
return cljs$core$async$state_machine__14369__auto__;
})()
;})(switch__14368__auto__,c__14385__auto___15798,out))
})();
var state__14387__auto__ = (function (){var statearr_15796 = f__14386__auto__.call(null);
(statearr_15796[(6)] = c__14385__auto___15798);

return statearr_15796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14387__auto__);
});})(c__14385__auto___15798,out))
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__15812 = arguments.length;
switch (G__15812) {
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
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14385__auto___15857 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14385__auto___15857,out){
return (function (){
var f__14386__auto__ = (function (){var switch__14368__auto__ = ((function (c__14385__auto___15857,out){
return (function (state_15836){
var state_val_15837 = (state_15836[(1)]);
if((state_val_15837 === (7))){
var inst_15818 = (state_15836[(7)]);
var inst_15818__$1 = (state_15836[(2)]);
var inst_15819 = (inst_15818__$1 == null);
var inst_15820 = cljs.core.not.call(null,inst_15819);
var state_15836__$1 = (function (){var statearr_15838 = state_15836;
(statearr_15838[(7)] = inst_15818__$1);

return statearr_15838;
})();
if(inst_15820){
var statearr_15839_15858 = state_15836__$1;
(statearr_15839_15858[(1)] = (8));

} else {
var statearr_15840_15859 = state_15836__$1;
(statearr_15840_15859[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15837 === (1))){
var inst_15813 = (0);
var state_15836__$1 = (function (){var statearr_15841 = state_15836;
(statearr_15841[(8)] = inst_15813);

return statearr_15841;
})();
var statearr_15842_15860 = state_15836__$1;
(statearr_15842_15860[(2)] = null);

(statearr_15842_15860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15837 === (4))){
var state_15836__$1 = state_15836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15836__$1,(7),ch);
} else {
if((state_val_15837 === (6))){
var inst_15831 = (state_15836[(2)]);
var state_15836__$1 = state_15836;
var statearr_15843_15861 = state_15836__$1;
(statearr_15843_15861[(2)] = inst_15831);

(statearr_15843_15861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15837 === (3))){
var inst_15833 = (state_15836[(2)]);
var inst_15834 = cljs.core.async.close_BANG_.call(null,out);
var state_15836__$1 = (function (){var statearr_15844 = state_15836;
(statearr_15844[(9)] = inst_15833);

return statearr_15844;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15836__$1,inst_15834);
} else {
if((state_val_15837 === (2))){
var inst_15813 = (state_15836[(8)]);
var inst_15815 = (inst_15813 < n);
var state_15836__$1 = state_15836;
if(cljs.core.truth_(inst_15815)){
var statearr_15845_15862 = state_15836__$1;
(statearr_15845_15862[(1)] = (4));

} else {
var statearr_15846_15863 = state_15836__$1;
(statearr_15846_15863[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15837 === (11))){
var inst_15813 = (state_15836[(8)]);
var inst_15823 = (state_15836[(2)]);
var inst_15824 = (inst_15813 + (1));
var inst_15813__$1 = inst_15824;
var state_15836__$1 = (function (){var statearr_15847 = state_15836;
(statearr_15847[(8)] = inst_15813__$1);

(statearr_15847[(10)] = inst_15823);

return statearr_15847;
})();
var statearr_15848_15864 = state_15836__$1;
(statearr_15848_15864[(2)] = null);

(statearr_15848_15864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15837 === (9))){
var state_15836__$1 = state_15836;
var statearr_15849_15865 = state_15836__$1;
(statearr_15849_15865[(2)] = null);

(statearr_15849_15865[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15837 === (5))){
var state_15836__$1 = state_15836;
var statearr_15850_15866 = state_15836__$1;
(statearr_15850_15866[(2)] = null);

(statearr_15850_15866[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15837 === (10))){
var inst_15828 = (state_15836[(2)]);
var state_15836__$1 = state_15836;
var statearr_15851_15867 = state_15836__$1;
(statearr_15851_15867[(2)] = inst_15828);

(statearr_15851_15867[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15837 === (8))){
var inst_15818 = (state_15836[(7)]);
var state_15836__$1 = state_15836;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15836__$1,(11),out,inst_15818);
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
});})(c__14385__auto___15857,out))
;
return ((function (switch__14368__auto__,c__14385__auto___15857,out){
return (function() {
var cljs$core$async$state_machine__14369__auto__ = null;
var cljs$core$async$state_machine__14369__auto____0 = (function (){
var statearr_15852 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15852[(0)] = cljs$core$async$state_machine__14369__auto__);

(statearr_15852[(1)] = (1));

return statearr_15852;
});
var cljs$core$async$state_machine__14369__auto____1 = (function (state_15836){
while(true){
var ret_value__14370__auto__ = (function (){try{while(true){
var result__14371__auto__ = switch__14368__auto__.call(null,state_15836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14371__auto__;
}
break;
}
}catch (e15853){if((e15853 instanceof Object)){
var ex__14372__auto__ = e15853;
var statearr_15854_15868 = state_15836;
(statearr_15854_15868[(5)] = ex__14372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15869 = state_15836;
state_15836 = G__15869;
continue;
} else {
return ret_value__14370__auto__;
}
break;
}
});
cljs$core$async$state_machine__14369__auto__ = function(state_15836){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14369__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14369__auto____1.call(this,state_15836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14369__auto____0;
cljs$core$async$state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14369__auto____1;
return cljs$core$async$state_machine__14369__auto__;
})()
;})(switch__14368__auto__,c__14385__auto___15857,out))
})();
var state__14387__auto__ = (function (){var statearr_15855 = f__14386__auto__.call(null);
(statearr_15855[(6)] = c__14385__auto___15857);

return statearr_15855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14387__auto__);
});})(c__14385__auto___15857,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15871 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15871 = (function (f,ch,meta15872){
this.f = f;
this.ch = ch;
this.meta15872 = meta15872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15873,meta15872__$1){
var self__ = this;
var _15873__$1 = this;
return (new cljs.core.async.t_cljs$core$async15871(self__.f,self__.ch,meta15872__$1));
});

cljs.core.async.t_cljs$core$async15871.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15873){
var self__ = this;
var _15873__$1 = this;
return self__.meta15872;
});

cljs.core.async.t_cljs$core$async15871.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15871.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15871.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15871.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15871.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15874 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15874 = (function (f,ch,meta15872,_,fn1,meta15875){
this.f = f;
this.ch = ch;
this.meta15872 = meta15872;
this._ = _;
this.fn1 = fn1;
this.meta15875 = meta15875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15876,meta15875__$1){
var self__ = this;
var _15876__$1 = this;
return (new cljs.core.async.t_cljs$core$async15874(self__.f,self__.ch,self__.meta15872,self__._,self__.fn1,meta15875__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async15874.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15876){
var self__ = this;
var _15876__$1 = this;
return self__.meta15875;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15874.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15874.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15874.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15874.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__15870_SHARP_){
return f1.call(null,(((p1__15870_SHARP_ == null))?null:self__.f.call(null,p1__15870_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async15874.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15872","meta15872",-910667359,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async15871","cljs.core.async/t_cljs$core$async15871",-517842881,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta15875","meta15875",-1423084545,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15874.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15874.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15874";

cljs.core.async.t_cljs$core$async15874.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async15874");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15874.
 */
cljs.core.async.__GT_t_cljs$core$async15874 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15874(f__$1,ch__$1,meta15872__$1,___$2,fn1__$1,meta15875){
return (new cljs.core.async.t_cljs$core$async15874(f__$1,ch__$1,meta15872__$1,___$2,fn1__$1,meta15875));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async15874(self__.f,self__.ch,self__.meta15872,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async15871.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15871.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async15871.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15872","meta15872",-910667359,null)], null);
});

cljs.core.async.t_cljs$core$async15871.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15871.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15871";

cljs.core.async.t_cljs$core$async15871.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async15871");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15871.
 */
cljs.core.async.__GT_t_cljs$core$async15871 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15871(f__$1,ch__$1,meta15872){
return (new cljs.core.async.t_cljs$core$async15871(f__$1,ch__$1,meta15872));
});

}

return (new cljs.core.async.t_cljs$core$async15871(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15877 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15877 = (function (f,ch,meta15878){
this.f = f;
this.ch = ch;
this.meta15878 = meta15878;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15877.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15879,meta15878__$1){
var self__ = this;
var _15879__$1 = this;
return (new cljs.core.async.t_cljs$core$async15877(self__.f,self__.ch,meta15878__$1));
});

cljs.core.async.t_cljs$core$async15877.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15879){
var self__ = this;
var _15879__$1 = this;
return self__.meta15878;
});

cljs.core.async.t_cljs$core$async15877.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15877.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15877.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15877.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15877.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15877.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async15877.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15878","meta15878",694585293,null)], null);
});

cljs.core.async.t_cljs$core$async15877.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15877.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15877";

cljs.core.async.t_cljs$core$async15877.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async15877");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15877.
 */
cljs.core.async.__GT_t_cljs$core$async15877 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async15877(f__$1,ch__$1,meta15878){
return (new cljs.core.async.t_cljs$core$async15877(f__$1,ch__$1,meta15878));
});

}

return (new cljs.core.async.t_cljs$core$async15877(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15880 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15880 = (function (p,ch,meta15881){
this.p = p;
this.ch = ch;
this.meta15881 = meta15881;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15880.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15882,meta15881__$1){
var self__ = this;
var _15882__$1 = this;
return (new cljs.core.async.t_cljs$core$async15880(self__.p,self__.ch,meta15881__$1));
});

cljs.core.async.t_cljs$core$async15880.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15882){
var self__ = this;
var _15882__$1 = this;
return self__.meta15881;
});

cljs.core.async.t_cljs$core$async15880.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15880.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15880.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15880.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15880.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15880.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15880.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async15880.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15881","meta15881",998691499,null)], null);
});

cljs.core.async.t_cljs$core$async15880.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15880.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15880";

cljs.core.async.t_cljs$core$async15880.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async15880");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15880.
 */
cljs.core.async.__GT_t_cljs$core$async15880 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async15880(p__$1,ch__$1,meta15881){
return (new cljs.core.async.t_cljs$core$async15880(p__$1,ch__$1,meta15881));
});

}

return (new cljs.core.async.t_cljs$core$async15880(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__15884 = arguments.length;
switch (G__15884) {
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
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14385__auto___15924 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14385__auto___15924,out){
return (function (){
var f__14386__auto__ = (function (){var switch__14368__auto__ = ((function (c__14385__auto___15924,out){
return (function (state_15905){
var state_val_15906 = (state_15905[(1)]);
if((state_val_15906 === (7))){
var inst_15901 = (state_15905[(2)]);
var state_15905__$1 = state_15905;
var statearr_15907_15925 = state_15905__$1;
(statearr_15907_15925[(2)] = inst_15901);

(statearr_15907_15925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15906 === (1))){
var state_15905__$1 = state_15905;
var statearr_15908_15926 = state_15905__$1;
(statearr_15908_15926[(2)] = null);

(statearr_15908_15926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15906 === (4))){
var inst_15887 = (state_15905[(7)]);
var inst_15887__$1 = (state_15905[(2)]);
var inst_15888 = (inst_15887__$1 == null);
var state_15905__$1 = (function (){var statearr_15909 = state_15905;
(statearr_15909[(7)] = inst_15887__$1);

return statearr_15909;
})();
if(cljs.core.truth_(inst_15888)){
var statearr_15910_15927 = state_15905__$1;
(statearr_15910_15927[(1)] = (5));

} else {
var statearr_15911_15928 = state_15905__$1;
(statearr_15911_15928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15906 === (6))){
var inst_15887 = (state_15905[(7)]);
var inst_15892 = p.call(null,inst_15887);
var state_15905__$1 = state_15905;
if(cljs.core.truth_(inst_15892)){
var statearr_15912_15929 = state_15905__$1;
(statearr_15912_15929[(1)] = (8));

} else {
var statearr_15913_15930 = state_15905__$1;
(statearr_15913_15930[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15906 === (3))){
var inst_15903 = (state_15905[(2)]);
var state_15905__$1 = state_15905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15905__$1,inst_15903);
} else {
if((state_val_15906 === (2))){
var state_15905__$1 = state_15905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15905__$1,(4),ch);
} else {
if((state_val_15906 === (11))){
var inst_15895 = (state_15905[(2)]);
var state_15905__$1 = state_15905;
var statearr_15914_15931 = state_15905__$1;
(statearr_15914_15931[(2)] = inst_15895);

(statearr_15914_15931[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15906 === (9))){
var state_15905__$1 = state_15905;
var statearr_15915_15932 = state_15905__$1;
(statearr_15915_15932[(2)] = null);

(statearr_15915_15932[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15906 === (5))){
var inst_15890 = cljs.core.async.close_BANG_.call(null,out);
var state_15905__$1 = state_15905;
var statearr_15916_15933 = state_15905__$1;
(statearr_15916_15933[(2)] = inst_15890);

(statearr_15916_15933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15906 === (10))){
var inst_15898 = (state_15905[(2)]);
var state_15905__$1 = (function (){var statearr_15917 = state_15905;
(statearr_15917[(8)] = inst_15898);

return statearr_15917;
})();
var statearr_15918_15934 = state_15905__$1;
(statearr_15918_15934[(2)] = null);

(statearr_15918_15934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15906 === (8))){
var inst_15887 = (state_15905[(7)]);
var state_15905__$1 = state_15905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15905__$1,(11),out,inst_15887);
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
});})(c__14385__auto___15924,out))
;
return ((function (switch__14368__auto__,c__14385__auto___15924,out){
return (function() {
var cljs$core$async$state_machine__14369__auto__ = null;
var cljs$core$async$state_machine__14369__auto____0 = (function (){
var statearr_15919 = [null,null,null,null,null,null,null,null,null];
(statearr_15919[(0)] = cljs$core$async$state_machine__14369__auto__);

(statearr_15919[(1)] = (1));

return statearr_15919;
});
var cljs$core$async$state_machine__14369__auto____1 = (function (state_15905){
while(true){
var ret_value__14370__auto__ = (function (){try{while(true){
var result__14371__auto__ = switch__14368__auto__.call(null,state_15905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14371__auto__;
}
break;
}
}catch (e15920){if((e15920 instanceof Object)){
var ex__14372__auto__ = e15920;
var statearr_15921_15935 = state_15905;
(statearr_15921_15935[(5)] = ex__14372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15936 = state_15905;
state_15905 = G__15936;
continue;
} else {
return ret_value__14370__auto__;
}
break;
}
});
cljs$core$async$state_machine__14369__auto__ = function(state_15905){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14369__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14369__auto____1.call(this,state_15905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14369__auto____0;
cljs$core$async$state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14369__auto____1;
return cljs$core$async$state_machine__14369__auto__;
})()
;})(switch__14368__auto__,c__14385__auto___15924,out))
})();
var state__14387__auto__ = (function (){var statearr_15922 = f__14386__auto__.call(null);
(statearr_15922[(6)] = c__14385__auto___15924);

return statearr_15922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14387__auto__);
});})(c__14385__auto___15924,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__15938 = arguments.length;
switch (G__15938) {
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
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14385__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14385__auto__){
return (function (){
var f__14386__auto__ = (function (){var switch__14368__auto__ = ((function (c__14385__auto__){
return (function (state_16001){
var state_val_16002 = (state_16001[(1)]);
if((state_val_16002 === (7))){
var inst_15997 = (state_16001[(2)]);
var state_16001__$1 = state_16001;
var statearr_16003_16041 = state_16001__$1;
(statearr_16003_16041[(2)] = inst_15997);

(statearr_16003_16041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16002 === (20))){
var inst_15967 = (state_16001[(7)]);
var inst_15978 = (state_16001[(2)]);
var inst_15979 = cljs.core.next.call(null,inst_15967);
var inst_15953 = inst_15979;
var inst_15954 = null;
var inst_15955 = (0);
var inst_15956 = (0);
var state_16001__$1 = (function (){var statearr_16004 = state_16001;
(statearr_16004[(8)] = inst_15953);

(statearr_16004[(9)] = inst_15978);

(statearr_16004[(10)] = inst_15955);

(statearr_16004[(11)] = inst_15954);

(statearr_16004[(12)] = inst_15956);

return statearr_16004;
})();
var statearr_16005_16042 = state_16001__$1;
(statearr_16005_16042[(2)] = null);

(statearr_16005_16042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16002 === (1))){
var state_16001__$1 = state_16001;
var statearr_16006_16043 = state_16001__$1;
(statearr_16006_16043[(2)] = null);

(statearr_16006_16043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16002 === (4))){
var inst_15942 = (state_16001[(13)]);
var inst_15942__$1 = (state_16001[(2)]);
var inst_15943 = (inst_15942__$1 == null);
var state_16001__$1 = (function (){var statearr_16007 = state_16001;
(statearr_16007[(13)] = inst_15942__$1);

return statearr_16007;
})();
if(cljs.core.truth_(inst_15943)){
var statearr_16008_16044 = state_16001__$1;
(statearr_16008_16044[(1)] = (5));

} else {
var statearr_16009_16045 = state_16001__$1;
(statearr_16009_16045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16002 === (15))){
var state_16001__$1 = state_16001;
var statearr_16013_16046 = state_16001__$1;
(statearr_16013_16046[(2)] = null);

(statearr_16013_16046[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16002 === (21))){
var state_16001__$1 = state_16001;
var statearr_16014_16047 = state_16001__$1;
(statearr_16014_16047[(2)] = null);

(statearr_16014_16047[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16002 === (13))){
var inst_15953 = (state_16001[(8)]);
var inst_15955 = (state_16001[(10)]);
var inst_15954 = (state_16001[(11)]);
var inst_15956 = (state_16001[(12)]);
var inst_15963 = (state_16001[(2)]);
var inst_15964 = (inst_15956 + (1));
var tmp16010 = inst_15953;
var tmp16011 = inst_15955;
var tmp16012 = inst_15954;
var inst_15953__$1 = tmp16010;
var inst_15954__$1 = tmp16012;
var inst_15955__$1 = tmp16011;
var inst_15956__$1 = inst_15964;
var state_16001__$1 = (function (){var statearr_16015 = state_16001;
(statearr_16015[(8)] = inst_15953__$1);

(statearr_16015[(10)] = inst_15955__$1);

(statearr_16015[(11)] = inst_15954__$1);

(statearr_16015[(14)] = inst_15963);

(statearr_16015[(12)] = inst_15956__$1);

return statearr_16015;
})();
var statearr_16016_16048 = state_16001__$1;
(statearr_16016_16048[(2)] = null);

(statearr_16016_16048[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16002 === (22))){
var state_16001__$1 = state_16001;
var statearr_16017_16049 = state_16001__$1;
(statearr_16017_16049[(2)] = null);

(statearr_16017_16049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16002 === (6))){
var inst_15942 = (state_16001[(13)]);
var inst_15951 = f.call(null,inst_15942);
var inst_15952 = cljs.core.seq.call(null,inst_15951);
var inst_15953 = inst_15952;
var inst_15954 = null;
var inst_15955 = (0);
var inst_15956 = (0);
var state_16001__$1 = (function (){var statearr_16018 = state_16001;
(statearr_16018[(8)] = inst_15953);

(statearr_16018[(10)] = inst_15955);

(statearr_16018[(11)] = inst_15954);

(statearr_16018[(12)] = inst_15956);

return statearr_16018;
})();
var statearr_16019_16050 = state_16001__$1;
(statearr_16019_16050[(2)] = null);

(statearr_16019_16050[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16002 === (17))){
var inst_15967 = (state_16001[(7)]);
var inst_15971 = cljs.core.chunk_first.call(null,inst_15967);
var inst_15972 = cljs.core.chunk_rest.call(null,inst_15967);
var inst_15973 = cljs.core.count.call(null,inst_15971);
var inst_15953 = inst_15972;
var inst_15954 = inst_15971;
var inst_15955 = inst_15973;
var inst_15956 = (0);
var state_16001__$1 = (function (){var statearr_16020 = state_16001;
(statearr_16020[(8)] = inst_15953);

(statearr_16020[(10)] = inst_15955);

(statearr_16020[(11)] = inst_15954);

(statearr_16020[(12)] = inst_15956);

return statearr_16020;
})();
var statearr_16021_16051 = state_16001__$1;
(statearr_16021_16051[(2)] = null);

(statearr_16021_16051[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16002 === (3))){
var inst_15999 = (state_16001[(2)]);
var state_16001__$1 = state_16001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16001__$1,inst_15999);
} else {
if((state_val_16002 === (12))){
var inst_15987 = (state_16001[(2)]);
var state_16001__$1 = state_16001;
var statearr_16022_16052 = state_16001__$1;
(statearr_16022_16052[(2)] = inst_15987);

(statearr_16022_16052[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16002 === (2))){
var state_16001__$1 = state_16001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16001__$1,(4),in$);
} else {
if((state_val_16002 === (23))){
var inst_15995 = (state_16001[(2)]);
var state_16001__$1 = state_16001;
var statearr_16023_16053 = state_16001__$1;
(statearr_16023_16053[(2)] = inst_15995);

(statearr_16023_16053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16002 === (19))){
var inst_15982 = (state_16001[(2)]);
var state_16001__$1 = state_16001;
var statearr_16024_16054 = state_16001__$1;
(statearr_16024_16054[(2)] = inst_15982);

(statearr_16024_16054[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16002 === (11))){
var inst_15953 = (state_16001[(8)]);
var inst_15967 = (state_16001[(7)]);
var inst_15967__$1 = cljs.core.seq.call(null,inst_15953);
var state_16001__$1 = (function (){var statearr_16025 = state_16001;
(statearr_16025[(7)] = inst_15967__$1);

return statearr_16025;
})();
if(inst_15967__$1){
var statearr_16026_16055 = state_16001__$1;
(statearr_16026_16055[(1)] = (14));

} else {
var statearr_16027_16056 = state_16001__$1;
(statearr_16027_16056[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16002 === (9))){
var inst_15989 = (state_16001[(2)]);
var inst_15990 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_16001__$1 = (function (){var statearr_16028 = state_16001;
(statearr_16028[(15)] = inst_15989);

return statearr_16028;
})();
if(cljs.core.truth_(inst_15990)){
var statearr_16029_16057 = state_16001__$1;
(statearr_16029_16057[(1)] = (21));

} else {
var statearr_16030_16058 = state_16001__$1;
(statearr_16030_16058[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16002 === (5))){
var inst_15945 = cljs.core.async.close_BANG_.call(null,out);
var state_16001__$1 = state_16001;
var statearr_16031_16059 = state_16001__$1;
(statearr_16031_16059[(2)] = inst_15945);

(statearr_16031_16059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16002 === (14))){
var inst_15967 = (state_16001[(7)]);
var inst_15969 = cljs.core.chunked_seq_QMARK_.call(null,inst_15967);
var state_16001__$1 = state_16001;
if(inst_15969){
var statearr_16032_16060 = state_16001__$1;
(statearr_16032_16060[(1)] = (17));

} else {
var statearr_16033_16061 = state_16001__$1;
(statearr_16033_16061[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16002 === (16))){
var inst_15985 = (state_16001[(2)]);
var state_16001__$1 = state_16001;
var statearr_16034_16062 = state_16001__$1;
(statearr_16034_16062[(2)] = inst_15985);

(statearr_16034_16062[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16002 === (10))){
var inst_15954 = (state_16001[(11)]);
var inst_15956 = (state_16001[(12)]);
var inst_15961 = cljs.core._nth.call(null,inst_15954,inst_15956);
var state_16001__$1 = state_16001;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16001__$1,(13),out,inst_15961);
} else {
if((state_val_16002 === (18))){
var inst_15967 = (state_16001[(7)]);
var inst_15976 = cljs.core.first.call(null,inst_15967);
var state_16001__$1 = state_16001;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16001__$1,(20),out,inst_15976);
} else {
if((state_val_16002 === (8))){
var inst_15955 = (state_16001[(10)]);
var inst_15956 = (state_16001[(12)]);
var inst_15958 = (inst_15956 < inst_15955);
var inst_15959 = inst_15958;
var state_16001__$1 = state_16001;
if(cljs.core.truth_(inst_15959)){
var statearr_16035_16063 = state_16001__$1;
(statearr_16035_16063[(1)] = (10));

} else {
var statearr_16036_16064 = state_16001__$1;
(statearr_16036_16064[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__14385__auto__))
;
return ((function (switch__14368__auto__,c__14385__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14369__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14369__auto____0 = (function (){
var statearr_16037 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16037[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14369__auto__);

(statearr_16037[(1)] = (1));

return statearr_16037;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14369__auto____1 = (function (state_16001){
while(true){
var ret_value__14370__auto__ = (function (){try{while(true){
var result__14371__auto__ = switch__14368__auto__.call(null,state_16001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14371__auto__;
}
break;
}
}catch (e16038){if((e16038 instanceof Object)){
var ex__14372__auto__ = e16038;
var statearr_16039_16065 = state_16001;
(statearr_16039_16065[(5)] = ex__14372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16066 = state_16001;
state_16001 = G__16066;
continue;
} else {
return ret_value__14370__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14369__auto__ = function(state_16001){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14369__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14369__auto____1.call(this,state_16001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14369__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14369__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14369__auto__;
})()
;})(switch__14368__auto__,c__14385__auto__))
})();
var state__14387__auto__ = (function (){var statearr_16040 = f__14386__auto__.call(null);
(statearr_16040[(6)] = c__14385__auto__);

return statearr_16040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14387__auto__);
});})(c__14385__auto__))
);

return c__14385__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__16068 = arguments.length;
switch (G__16068) {
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
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__16071 = arguments.length;
switch (G__16071) {
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
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__16074 = arguments.length;
switch (G__16074) {
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
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14385__auto___16121 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14385__auto___16121,out){
return (function (){
var f__14386__auto__ = (function (){var switch__14368__auto__ = ((function (c__14385__auto___16121,out){
return (function (state_16098){
var state_val_16099 = (state_16098[(1)]);
if((state_val_16099 === (7))){
var inst_16093 = (state_16098[(2)]);
var state_16098__$1 = state_16098;
var statearr_16100_16122 = state_16098__$1;
(statearr_16100_16122[(2)] = inst_16093);

(statearr_16100_16122[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (1))){
var inst_16075 = null;
var state_16098__$1 = (function (){var statearr_16101 = state_16098;
(statearr_16101[(7)] = inst_16075);

return statearr_16101;
})();
var statearr_16102_16123 = state_16098__$1;
(statearr_16102_16123[(2)] = null);

(statearr_16102_16123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (4))){
var inst_16078 = (state_16098[(8)]);
var inst_16078__$1 = (state_16098[(2)]);
var inst_16079 = (inst_16078__$1 == null);
var inst_16080 = cljs.core.not.call(null,inst_16079);
var state_16098__$1 = (function (){var statearr_16103 = state_16098;
(statearr_16103[(8)] = inst_16078__$1);

return statearr_16103;
})();
if(inst_16080){
var statearr_16104_16124 = state_16098__$1;
(statearr_16104_16124[(1)] = (5));

} else {
var statearr_16105_16125 = state_16098__$1;
(statearr_16105_16125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (6))){
var state_16098__$1 = state_16098;
var statearr_16106_16126 = state_16098__$1;
(statearr_16106_16126[(2)] = null);

(statearr_16106_16126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (3))){
var inst_16095 = (state_16098[(2)]);
var inst_16096 = cljs.core.async.close_BANG_.call(null,out);
var state_16098__$1 = (function (){var statearr_16107 = state_16098;
(statearr_16107[(9)] = inst_16095);

return statearr_16107;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16098__$1,inst_16096);
} else {
if((state_val_16099 === (2))){
var state_16098__$1 = state_16098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16098__$1,(4),ch);
} else {
if((state_val_16099 === (11))){
var inst_16078 = (state_16098[(8)]);
var inst_16087 = (state_16098[(2)]);
var inst_16075 = inst_16078;
var state_16098__$1 = (function (){var statearr_16108 = state_16098;
(statearr_16108[(10)] = inst_16087);

(statearr_16108[(7)] = inst_16075);

return statearr_16108;
})();
var statearr_16109_16127 = state_16098__$1;
(statearr_16109_16127[(2)] = null);

(statearr_16109_16127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (9))){
var inst_16078 = (state_16098[(8)]);
var state_16098__$1 = state_16098;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16098__$1,(11),out,inst_16078);
} else {
if((state_val_16099 === (5))){
var inst_16078 = (state_16098[(8)]);
var inst_16075 = (state_16098[(7)]);
var inst_16082 = cljs.core._EQ_.call(null,inst_16078,inst_16075);
var state_16098__$1 = state_16098;
if(inst_16082){
var statearr_16111_16128 = state_16098__$1;
(statearr_16111_16128[(1)] = (8));

} else {
var statearr_16112_16129 = state_16098__$1;
(statearr_16112_16129[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (10))){
var inst_16090 = (state_16098[(2)]);
var state_16098__$1 = state_16098;
var statearr_16113_16130 = state_16098__$1;
(statearr_16113_16130[(2)] = inst_16090);

(statearr_16113_16130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (8))){
var inst_16075 = (state_16098[(7)]);
var tmp16110 = inst_16075;
var inst_16075__$1 = tmp16110;
var state_16098__$1 = (function (){var statearr_16114 = state_16098;
(statearr_16114[(7)] = inst_16075__$1);

return statearr_16114;
})();
var statearr_16115_16131 = state_16098__$1;
(statearr_16115_16131[(2)] = null);

(statearr_16115_16131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__14385__auto___16121,out))
;
return ((function (switch__14368__auto__,c__14385__auto___16121,out){
return (function() {
var cljs$core$async$state_machine__14369__auto__ = null;
var cljs$core$async$state_machine__14369__auto____0 = (function (){
var statearr_16116 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16116[(0)] = cljs$core$async$state_machine__14369__auto__);

(statearr_16116[(1)] = (1));

return statearr_16116;
});
var cljs$core$async$state_machine__14369__auto____1 = (function (state_16098){
while(true){
var ret_value__14370__auto__ = (function (){try{while(true){
var result__14371__auto__ = switch__14368__auto__.call(null,state_16098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14371__auto__;
}
break;
}
}catch (e16117){if((e16117 instanceof Object)){
var ex__14372__auto__ = e16117;
var statearr_16118_16132 = state_16098;
(statearr_16118_16132[(5)] = ex__14372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16133 = state_16098;
state_16098 = G__16133;
continue;
} else {
return ret_value__14370__auto__;
}
break;
}
});
cljs$core$async$state_machine__14369__auto__ = function(state_16098){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14369__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14369__auto____1.call(this,state_16098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14369__auto____0;
cljs$core$async$state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14369__auto____1;
return cljs$core$async$state_machine__14369__auto__;
})()
;})(switch__14368__auto__,c__14385__auto___16121,out))
})();
var state__14387__auto__ = (function (){var statearr_16119 = f__14386__auto__.call(null);
(statearr_16119[(6)] = c__14385__auto___16121);

return statearr_16119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14387__auto__);
});})(c__14385__auto___16121,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__16135 = arguments.length;
switch (G__16135) {
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
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14385__auto___16201 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14385__auto___16201,out){
return (function (){
var f__14386__auto__ = (function (){var switch__14368__auto__ = ((function (c__14385__auto___16201,out){
return (function (state_16173){
var state_val_16174 = (state_16173[(1)]);
if((state_val_16174 === (7))){
var inst_16169 = (state_16173[(2)]);
var state_16173__$1 = state_16173;
var statearr_16175_16202 = state_16173__$1;
(statearr_16175_16202[(2)] = inst_16169);

(statearr_16175_16202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16174 === (1))){
var inst_16136 = (new Array(n));
var inst_16137 = inst_16136;
var inst_16138 = (0);
var state_16173__$1 = (function (){var statearr_16176 = state_16173;
(statearr_16176[(7)] = inst_16138);

(statearr_16176[(8)] = inst_16137);

return statearr_16176;
})();
var statearr_16177_16203 = state_16173__$1;
(statearr_16177_16203[(2)] = null);

(statearr_16177_16203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16174 === (4))){
var inst_16141 = (state_16173[(9)]);
var inst_16141__$1 = (state_16173[(2)]);
var inst_16142 = (inst_16141__$1 == null);
var inst_16143 = cljs.core.not.call(null,inst_16142);
var state_16173__$1 = (function (){var statearr_16178 = state_16173;
(statearr_16178[(9)] = inst_16141__$1);

return statearr_16178;
})();
if(inst_16143){
var statearr_16179_16204 = state_16173__$1;
(statearr_16179_16204[(1)] = (5));

} else {
var statearr_16180_16205 = state_16173__$1;
(statearr_16180_16205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16174 === (15))){
var inst_16163 = (state_16173[(2)]);
var state_16173__$1 = state_16173;
var statearr_16181_16206 = state_16173__$1;
(statearr_16181_16206[(2)] = inst_16163);

(statearr_16181_16206[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16174 === (13))){
var state_16173__$1 = state_16173;
var statearr_16182_16207 = state_16173__$1;
(statearr_16182_16207[(2)] = null);

(statearr_16182_16207[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16174 === (6))){
var inst_16138 = (state_16173[(7)]);
var inst_16159 = (inst_16138 > (0));
var state_16173__$1 = state_16173;
if(cljs.core.truth_(inst_16159)){
var statearr_16183_16208 = state_16173__$1;
(statearr_16183_16208[(1)] = (12));

} else {
var statearr_16184_16209 = state_16173__$1;
(statearr_16184_16209[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16174 === (3))){
var inst_16171 = (state_16173[(2)]);
var state_16173__$1 = state_16173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16173__$1,inst_16171);
} else {
if((state_val_16174 === (12))){
var inst_16137 = (state_16173[(8)]);
var inst_16161 = cljs.core.vec.call(null,inst_16137);
var state_16173__$1 = state_16173;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16173__$1,(15),out,inst_16161);
} else {
if((state_val_16174 === (2))){
var state_16173__$1 = state_16173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16173__$1,(4),ch);
} else {
if((state_val_16174 === (11))){
var inst_16153 = (state_16173[(2)]);
var inst_16154 = (new Array(n));
var inst_16137 = inst_16154;
var inst_16138 = (0);
var state_16173__$1 = (function (){var statearr_16185 = state_16173;
(statearr_16185[(10)] = inst_16153);

(statearr_16185[(7)] = inst_16138);

(statearr_16185[(8)] = inst_16137);

return statearr_16185;
})();
var statearr_16186_16210 = state_16173__$1;
(statearr_16186_16210[(2)] = null);

(statearr_16186_16210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16174 === (9))){
var inst_16137 = (state_16173[(8)]);
var inst_16151 = cljs.core.vec.call(null,inst_16137);
var state_16173__$1 = state_16173;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16173__$1,(11),out,inst_16151);
} else {
if((state_val_16174 === (5))){
var inst_16138 = (state_16173[(7)]);
var inst_16146 = (state_16173[(11)]);
var inst_16137 = (state_16173[(8)]);
var inst_16141 = (state_16173[(9)]);
var inst_16145 = (inst_16137[inst_16138] = inst_16141);
var inst_16146__$1 = (inst_16138 + (1));
var inst_16147 = (inst_16146__$1 < n);
var state_16173__$1 = (function (){var statearr_16187 = state_16173;
(statearr_16187[(11)] = inst_16146__$1);

(statearr_16187[(12)] = inst_16145);

return statearr_16187;
})();
if(cljs.core.truth_(inst_16147)){
var statearr_16188_16211 = state_16173__$1;
(statearr_16188_16211[(1)] = (8));

} else {
var statearr_16189_16212 = state_16173__$1;
(statearr_16189_16212[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16174 === (14))){
var inst_16166 = (state_16173[(2)]);
var inst_16167 = cljs.core.async.close_BANG_.call(null,out);
var state_16173__$1 = (function (){var statearr_16191 = state_16173;
(statearr_16191[(13)] = inst_16166);

return statearr_16191;
})();
var statearr_16192_16213 = state_16173__$1;
(statearr_16192_16213[(2)] = inst_16167);

(statearr_16192_16213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16174 === (10))){
var inst_16157 = (state_16173[(2)]);
var state_16173__$1 = state_16173;
var statearr_16193_16214 = state_16173__$1;
(statearr_16193_16214[(2)] = inst_16157);

(statearr_16193_16214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16174 === (8))){
var inst_16146 = (state_16173[(11)]);
var inst_16137 = (state_16173[(8)]);
var tmp16190 = inst_16137;
var inst_16137__$1 = tmp16190;
var inst_16138 = inst_16146;
var state_16173__$1 = (function (){var statearr_16194 = state_16173;
(statearr_16194[(7)] = inst_16138);

(statearr_16194[(8)] = inst_16137__$1);

return statearr_16194;
})();
var statearr_16195_16215 = state_16173__$1;
(statearr_16195_16215[(2)] = null);

(statearr_16195_16215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__14385__auto___16201,out))
;
return ((function (switch__14368__auto__,c__14385__auto___16201,out){
return (function() {
var cljs$core$async$state_machine__14369__auto__ = null;
var cljs$core$async$state_machine__14369__auto____0 = (function (){
var statearr_16196 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16196[(0)] = cljs$core$async$state_machine__14369__auto__);

(statearr_16196[(1)] = (1));

return statearr_16196;
});
var cljs$core$async$state_machine__14369__auto____1 = (function (state_16173){
while(true){
var ret_value__14370__auto__ = (function (){try{while(true){
var result__14371__auto__ = switch__14368__auto__.call(null,state_16173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14371__auto__;
}
break;
}
}catch (e16197){if((e16197 instanceof Object)){
var ex__14372__auto__ = e16197;
var statearr_16198_16216 = state_16173;
(statearr_16198_16216[(5)] = ex__14372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16217 = state_16173;
state_16173 = G__16217;
continue;
} else {
return ret_value__14370__auto__;
}
break;
}
});
cljs$core$async$state_machine__14369__auto__ = function(state_16173){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14369__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14369__auto____1.call(this,state_16173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14369__auto____0;
cljs$core$async$state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14369__auto____1;
return cljs$core$async$state_machine__14369__auto__;
})()
;})(switch__14368__auto__,c__14385__auto___16201,out))
})();
var state__14387__auto__ = (function (){var statearr_16199 = f__14386__auto__.call(null);
(statearr_16199[(6)] = c__14385__auto___16201);

return statearr_16199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14387__auto__);
});})(c__14385__auto___16201,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__16219 = arguments.length;
switch (G__16219) {
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
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14385__auto___16289 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14385__auto___16289,out){
return (function (){
var f__14386__auto__ = (function (){var switch__14368__auto__ = ((function (c__14385__auto___16289,out){
return (function (state_16261){
var state_val_16262 = (state_16261[(1)]);
if((state_val_16262 === (7))){
var inst_16257 = (state_16261[(2)]);
var state_16261__$1 = state_16261;
var statearr_16263_16290 = state_16261__$1;
(statearr_16263_16290[(2)] = inst_16257);

(statearr_16263_16290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (1))){
var inst_16220 = [];
var inst_16221 = inst_16220;
var inst_16222 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16261__$1 = (function (){var statearr_16264 = state_16261;
(statearr_16264[(7)] = inst_16221);

(statearr_16264[(8)] = inst_16222);

return statearr_16264;
})();
var statearr_16265_16291 = state_16261__$1;
(statearr_16265_16291[(2)] = null);

(statearr_16265_16291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (4))){
var inst_16225 = (state_16261[(9)]);
var inst_16225__$1 = (state_16261[(2)]);
var inst_16226 = (inst_16225__$1 == null);
var inst_16227 = cljs.core.not.call(null,inst_16226);
var state_16261__$1 = (function (){var statearr_16266 = state_16261;
(statearr_16266[(9)] = inst_16225__$1);

return statearr_16266;
})();
if(inst_16227){
var statearr_16267_16292 = state_16261__$1;
(statearr_16267_16292[(1)] = (5));

} else {
var statearr_16268_16293 = state_16261__$1;
(statearr_16268_16293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (15))){
var inst_16251 = (state_16261[(2)]);
var state_16261__$1 = state_16261;
var statearr_16269_16294 = state_16261__$1;
(statearr_16269_16294[(2)] = inst_16251);

(statearr_16269_16294[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (13))){
var state_16261__$1 = state_16261;
var statearr_16270_16295 = state_16261__$1;
(statearr_16270_16295[(2)] = null);

(statearr_16270_16295[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (6))){
var inst_16221 = (state_16261[(7)]);
var inst_16246 = inst_16221.length;
var inst_16247 = (inst_16246 > (0));
var state_16261__$1 = state_16261;
if(cljs.core.truth_(inst_16247)){
var statearr_16271_16296 = state_16261__$1;
(statearr_16271_16296[(1)] = (12));

} else {
var statearr_16272_16297 = state_16261__$1;
(statearr_16272_16297[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (3))){
var inst_16259 = (state_16261[(2)]);
var state_16261__$1 = state_16261;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16261__$1,inst_16259);
} else {
if((state_val_16262 === (12))){
var inst_16221 = (state_16261[(7)]);
var inst_16249 = cljs.core.vec.call(null,inst_16221);
var state_16261__$1 = state_16261;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16261__$1,(15),out,inst_16249);
} else {
if((state_val_16262 === (2))){
var state_16261__$1 = state_16261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16261__$1,(4),ch);
} else {
if((state_val_16262 === (11))){
var inst_16225 = (state_16261[(9)]);
var inst_16229 = (state_16261[(10)]);
var inst_16239 = (state_16261[(2)]);
var inst_16240 = [];
var inst_16241 = inst_16240.push(inst_16225);
var inst_16221 = inst_16240;
var inst_16222 = inst_16229;
var state_16261__$1 = (function (){var statearr_16273 = state_16261;
(statearr_16273[(7)] = inst_16221);

(statearr_16273[(11)] = inst_16239);

(statearr_16273[(8)] = inst_16222);

(statearr_16273[(12)] = inst_16241);

return statearr_16273;
})();
var statearr_16274_16298 = state_16261__$1;
(statearr_16274_16298[(2)] = null);

(statearr_16274_16298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (9))){
var inst_16221 = (state_16261[(7)]);
var inst_16237 = cljs.core.vec.call(null,inst_16221);
var state_16261__$1 = state_16261;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16261__$1,(11),out,inst_16237);
} else {
if((state_val_16262 === (5))){
var inst_16225 = (state_16261[(9)]);
var inst_16222 = (state_16261[(8)]);
var inst_16229 = (state_16261[(10)]);
var inst_16229__$1 = f.call(null,inst_16225);
var inst_16230 = cljs.core._EQ_.call(null,inst_16229__$1,inst_16222);
var inst_16231 = cljs.core.keyword_identical_QMARK_.call(null,inst_16222,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_16232 = ((inst_16230) || (inst_16231));
var state_16261__$1 = (function (){var statearr_16275 = state_16261;
(statearr_16275[(10)] = inst_16229__$1);

return statearr_16275;
})();
if(cljs.core.truth_(inst_16232)){
var statearr_16276_16299 = state_16261__$1;
(statearr_16276_16299[(1)] = (8));

} else {
var statearr_16277_16300 = state_16261__$1;
(statearr_16277_16300[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (14))){
var inst_16254 = (state_16261[(2)]);
var inst_16255 = cljs.core.async.close_BANG_.call(null,out);
var state_16261__$1 = (function (){var statearr_16279 = state_16261;
(statearr_16279[(13)] = inst_16254);

return statearr_16279;
})();
var statearr_16280_16301 = state_16261__$1;
(statearr_16280_16301[(2)] = inst_16255);

(statearr_16280_16301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (10))){
var inst_16244 = (state_16261[(2)]);
var state_16261__$1 = state_16261;
var statearr_16281_16302 = state_16261__$1;
(statearr_16281_16302[(2)] = inst_16244);

(statearr_16281_16302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (8))){
var inst_16221 = (state_16261[(7)]);
var inst_16225 = (state_16261[(9)]);
var inst_16229 = (state_16261[(10)]);
var inst_16234 = inst_16221.push(inst_16225);
var tmp16278 = inst_16221;
var inst_16221__$1 = tmp16278;
var inst_16222 = inst_16229;
var state_16261__$1 = (function (){var statearr_16282 = state_16261;
(statearr_16282[(14)] = inst_16234);

(statearr_16282[(7)] = inst_16221__$1);

(statearr_16282[(8)] = inst_16222);

return statearr_16282;
})();
var statearr_16283_16303 = state_16261__$1;
(statearr_16283_16303[(2)] = null);

(statearr_16283_16303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__14385__auto___16289,out))
;
return ((function (switch__14368__auto__,c__14385__auto___16289,out){
return (function() {
var cljs$core$async$state_machine__14369__auto__ = null;
var cljs$core$async$state_machine__14369__auto____0 = (function (){
var statearr_16284 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16284[(0)] = cljs$core$async$state_machine__14369__auto__);

(statearr_16284[(1)] = (1));

return statearr_16284;
});
var cljs$core$async$state_machine__14369__auto____1 = (function (state_16261){
while(true){
var ret_value__14370__auto__ = (function (){try{while(true){
var result__14371__auto__ = switch__14368__auto__.call(null,state_16261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14371__auto__;
}
break;
}
}catch (e16285){if((e16285 instanceof Object)){
var ex__14372__auto__ = e16285;
var statearr_16286_16304 = state_16261;
(statearr_16286_16304[(5)] = ex__14372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16305 = state_16261;
state_16261 = G__16305;
continue;
} else {
return ret_value__14370__auto__;
}
break;
}
});
cljs$core$async$state_machine__14369__auto__ = function(state_16261){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14369__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14369__auto____1.call(this,state_16261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14369__auto____0;
cljs$core$async$state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14369__auto____1;
return cljs$core$async$state_machine__14369__auto__;
})()
;})(switch__14368__auto__,c__14385__auto___16289,out))
})();
var state__14387__auto__ = (function (){var statearr_16287 = f__14386__auto__.call(null);
(statearr_16287[(6)] = c__14385__auto___16289);

return statearr_16287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14387__auto__);
});})(c__14385__auto___16289,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

