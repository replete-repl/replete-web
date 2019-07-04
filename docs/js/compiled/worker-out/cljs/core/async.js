// Compiled by ClojureScript 1.10.520 {:target :webworker}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__10109 = arguments.length;
switch (G__10109) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10110 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10110 = (function (f,blockable,meta10111){
this.f = f;
this.blockable = blockable;
this.meta10111 = meta10111;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10112,meta10111__$1){
var self__ = this;
var _10112__$1 = this;
return (new cljs.core.async.t_cljs$core$async10110(self__.f,self__.blockable,meta10111__$1));
});

cljs.core.async.t_cljs$core$async10110.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10112){
var self__ = this;
var _10112__$1 = this;
return self__.meta10111;
});

cljs.core.async.t_cljs$core$async10110.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10110.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async10110.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async10110.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async10110.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta10111","meta10111",1593388902,null)], null);
});

cljs.core.async.t_cljs$core$async10110.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10110.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10110";

cljs.core.async.t_cljs$core$async10110.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async10110");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10110.
 */
cljs.core.async.__GT_t_cljs$core$async10110 = (function cljs$core$async$__GT_t_cljs$core$async10110(f__$1,blockable__$1,meta10111){
return (new cljs.core.async.t_cljs$core$async10110(f__$1,blockable__$1,meta10111));
});

}

return (new cljs.core.async.t_cljs$core$async10110(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__10116 = arguments.length;
switch (G__10116) {
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
var G__10119 = arguments.length;
switch (G__10119) {
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
var G__10122 = arguments.length;
switch (G__10122) {
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
var val_10124 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_10124);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_10124,ret){
return (function (){
return fn1.call(null,val_10124);
});})(val_10124,ret))
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
var G__10126 = arguments.length;
switch (G__10126) {
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
var n__4607__auto___10128 = n;
var x_10129 = (0);
while(true){
if((x_10129 < n__4607__auto___10128)){
(a[x_10129] = (0));

var G__10130 = (x_10129 + (1));
x_10129 = G__10130;
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

var G__10131 = (i + (1));
i = G__10131;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10132 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10132 = (function (flag,meta10133){
this.flag = flag;
this.meta10133 = meta10133;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10134,meta10133__$1){
var self__ = this;
var _10134__$1 = this;
return (new cljs.core.async.t_cljs$core$async10132(self__.flag,meta10133__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async10132.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10134){
var self__ = this;
var _10134__$1 = this;
return self__.meta10133;
});})(flag))
;

cljs.core.async.t_cljs$core$async10132.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10132.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async10132.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async10132.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async10132.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta10133","meta10133",-239980789,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async10132.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10132.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10132";

cljs.core.async.t_cljs$core$async10132.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async10132");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10132.
 */
cljs.core.async.__GT_t_cljs$core$async10132 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async10132(flag__$1,meta10133){
return (new cljs.core.async.t_cljs$core$async10132(flag__$1,meta10133));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async10132(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10135 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10135 = (function (flag,cb,meta10136){
this.flag = flag;
this.cb = cb;
this.meta10136 = meta10136;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10137,meta10136__$1){
var self__ = this;
var _10137__$1 = this;
return (new cljs.core.async.t_cljs$core$async10135(self__.flag,self__.cb,meta10136__$1));
});

cljs.core.async.t_cljs$core$async10135.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10137){
var self__ = this;
var _10137__$1 = this;
return self__.meta10136;
});

cljs.core.async.t_cljs$core$async10135.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10135.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async10135.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async10135.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async10135.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta10136","meta10136",-1551816245,null)], null);
});

cljs.core.async.t_cljs$core$async10135.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10135.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10135";

cljs.core.async.t_cljs$core$async10135.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async10135");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10135.
 */
cljs.core.async.__GT_t_cljs$core$async10135 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async10135(flag__$1,cb__$1,meta10136){
return (new cljs.core.async.t_cljs$core$async10135(flag__$1,cb__$1,meta10136));
});

}

return (new cljs.core.async.t_cljs$core$async10135(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__10138_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10138_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10139_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10139_SHARP_,port], null));
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
var G__10140 = (i + (1));
i = G__10140;
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
var len__4730__auto___10146 = arguments.length;
var i__4731__auto___10147 = (0);
while(true){
if((i__4731__auto___10147 < len__4730__auto___10146)){
args__4736__auto__.push((arguments[i__4731__auto___10147]));

var G__10148 = (i__4731__auto___10147 + (1));
i__4731__auto___10147 = G__10148;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__10143){
var map__10144 = p__10143;
var map__10144__$1 = (((((!((map__10144 == null))))?(((((map__10144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10144):map__10144);
var opts = map__10144__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq10141){
var G__10142 = cljs.core.first.call(null,seq10141);
var seq10141__$1 = cljs.core.next.call(null,seq10141);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10142,seq10141__$1);
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
var G__10150 = arguments.length;
switch (G__10150) {
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
var c__10049__auto___10196 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10049__auto___10196){
return (function (){
var f__10050__auto__ = (function (){var switch__10032__auto__ = ((function (c__10049__auto___10196){
return (function (state_10174){
var state_val_10175 = (state_10174[(1)]);
if((state_val_10175 === (7))){
var inst_10170 = (state_10174[(2)]);
var state_10174__$1 = state_10174;
var statearr_10176_10197 = state_10174__$1;
(statearr_10176_10197[(2)] = inst_10170);

(statearr_10176_10197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10175 === (1))){
var state_10174__$1 = state_10174;
var statearr_10177_10198 = state_10174__$1;
(statearr_10177_10198[(2)] = null);

(statearr_10177_10198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10175 === (4))){
var inst_10153 = (state_10174[(7)]);
var inst_10153__$1 = (state_10174[(2)]);
var inst_10154 = (inst_10153__$1 == null);
var state_10174__$1 = (function (){var statearr_10178 = state_10174;
(statearr_10178[(7)] = inst_10153__$1);

return statearr_10178;
})();
if(cljs.core.truth_(inst_10154)){
var statearr_10179_10199 = state_10174__$1;
(statearr_10179_10199[(1)] = (5));

} else {
var statearr_10180_10200 = state_10174__$1;
(statearr_10180_10200[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10175 === (13))){
var state_10174__$1 = state_10174;
var statearr_10181_10201 = state_10174__$1;
(statearr_10181_10201[(2)] = null);

(statearr_10181_10201[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10175 === (6))){
var inst_10153 = (state_10174[(7)]);
var state_10174__$1 = state_10174;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10174__$1,(11),to,inst_10153);
} else {
if((state_val_10175 === (3))){
var inst_10172 = (state_10174[(2)]);
var state_10174__$1 = state_10174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10174__$1,inst_10172);
} else {
if((state_val_10175 === (12))){
var state_10174__$1 = state_10174;
var statearr_10182_10202 = state_10174__$1;
(statearr_10182_10202[(2)] = null);

(statearr_10182_10202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10175 === (2))){
var state_10174__$1 = state_10174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10174__$1,(4),from);
} else {
if((state_val_10175 === (11))){
var inst_10163 = (state_10174[(2)]);
var state_10174__$1 = state_10174;
if(cljs.core.truth_(inst_10163)){
var statearr_10183_10203 = state_10174__$1;
(statearr_10183_10203[(1)] = (12));

} else {
var statearr_10184_10204 = state_10174__$1;
(statearr_10184_10204[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10175 === (9))){
var state_10174__$1 = state_10174;
var statearr_10185_10205 = state_10174__$1;
(statearr_10185_10205[(2)] = null);

(statearr_10185_10205[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10175 === (5))){
var state_10174__$1 = state_10174;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10186_10206 = state_10174__$1;
(statearr_10186_10206[(1)] = (8));

} else {
var statearr_10187_10207 = state_10174__$1;
(statearr_10187_10207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10175 === (14))){
var inst_10168 = (state_10174[(2)]);
var state_10174__$1 = state_10174;
var statearr_10188_10208 = state_10174__$1;
(statearr_10188_10208[(2)] = inst_10168);

(statearr_10188_10208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10175 === (10))){
var inst_10160 = (state_10174[(2)]);
var state_10174__$1 = state_10174;
var statearr_10189_10209 = state_10174__$1;
(statearr_10189_10209[(2)] = inst_10160);

(statearr_10189_10209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10175 === (8))){
var inst_10157 = cljs.core.async.close_BANG_.call(null,to);
var state_10174__$1 = state_10174;
var statearr_10190_10210 = state_10174__$1;
(statearr_10190_10210[(2)] = inst_10157);

(statearr_10190_10210[(1)] = (10));


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
});})(c__10049__auto___10196))
;
return ((function (switch__10032__auto__,c__10049__auto___10196){
return (function() {
var cljs$core$async$state_machine__10033__auto__ = null;
var cljs$core$async$state_machine__10033__auto____0 = (function (){
var statearr_10191 = [null,null,null,null,null,null,null,null];
(statearr_10191[(0)] = cljs$core$async$state_machine__10033__auto__);

(statearr_10191[(1)] = (1));

return statearr_10191;
});
var cljs$core$async$state_machine__10033__auto____1 = (function (state_10174){
while(true){
var ret_value__10034__auto__ = (function (){try{while(true){
var result__10035__auto__ = switch__10032__auto__.call(null,state_10174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10035__auto__;
}
break;
}
}catch (e10192){if((e10192 instanceof Object)){
var ex__10036__auto__ = e10192;
var statearr_10193_10211 = state_10174;
(statearr_10193_10211[(5)] = ex__10036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10212 = state_10174;
state_10174 = G__10212;
continue;
} else {
return ret_value__10034__auto__;
}
break;
}
});
cljs$core$async$state_machine__10033__auto__ = function(state_10174){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10033__auto____1.call(this,state_10174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10033__auto____0;
cljs$core$async$state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10033__auto____1;
return cljs$core$async$state_machine__10033__auto__;
})()
;})(switch__10032__auto__,c__10049__auto___10196))
})();
var state__10051__auto__ = (function (){var statearr_10194 = f__10050__auto__.call(null);
(statearr_10194[(6)] = c__10049__auto___10196);

return statearr_10194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10051__auto__);
});})(c__10049__auto___10196))
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
return (function (p__10213){
var vec__10214 = p__10213;
var v = cljs.core.nth.call(null,vec__10214,(0),null);
var p = cljs.core.nth.call(null,vec__10214,(1),null);
var job = vec__10214;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10049__auto___10385 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10049__auto___10385,res,vec__10214,v,p,job,jobs,results){
return (function (){
var f__10050__auto__ = (function (){var switch__10032__auto__ = ((function (c__10049__auto___10385,res,vec__10214,v,p,job,jobs,results){
return (function (state_10221){
var state_val_10222 = (state_10221[(1)]);
if((state_val_10222 === (1))){
var state_10221__$1 = state_10221;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10221__$1,(2),res,v);
} else {
if((state_val_10222 === (2))){
var inst_10218 = (state_10221[(2)]);
var inst_10219 = cljs.core.async.close_BANG_.call(null,res);
var state_10221__$1 = (function (){var statearr_10223 = state_10221;
(statearr_10223[(7)] = inst_10218);

return statearr_10223;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10221__$1,inst_10219);
} else {
return null;
}
}
});})(c__10049__auto___10385,res,vec__10214,v,p,job,jobs,results))
;
return ((function (switch__10032__auto__,c__10049__auto___10385,res,vec__10214,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10033__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10033__auto____0 = (function (){
var statearr_10224 = [null,null,null,null,null,null,null,null];
(statearr_10224[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10033__auto__);

(statearr_10224[(1)] = (1));

return statearr_10224;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10033__auto____1 = (function (state_10221){
while(true){
var ret_value__10034__auto__ = (function (){try{while(true){
var result__10035__auto__ = switch__10032__auto__.call(null,state_10221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10035__auto__;
}
break;
}
}catch (e10225){if((e10225 instanceof Object)){
var ex__10036__auto__ = e10225;
var statearr_10226_10386 = state_10221;
(statearr_10226_10386[(5)] = ex__10036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10387 = state_10221;
state_10221 = G__10387;
continue;
} else {
return ret_value__10034__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10033__auto__ = function(state_10221){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10033__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10033__auto____1.call(this,state_10221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10033__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10033__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10033__auto__;
})()
;})(switch__10032__auto__,c__10049__auto___10385,res,vec__10214,v,p,job,jobs,results))
})();
var state__10051__auto__ = (function (){var statearr_10227 = f__10050__auto__.call(null);
(statearr_10227[(6)] = c__10049__auto___10385);

return statearr_10227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10051__auto__);
});})(c__10049__auto___10385,res,vec__10214,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__10228){
var vec__10229 = p__10228;
var v = cljs.core.nth.call(null,vec__10229,(0),null);
var p = cljs.core.nth.call(null,vec__10229,(1),null);
var job = vec__10229;
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
var n__4607__auto___10388 = n;
var __10389 = (0);
while(true){
if((__10389 < n__4607__auto___10388)){
var G__10232_10390 = type;
var G__10232_10391__$1 = (((G__10232_10390 instanceof cljs.core.Keyword))?G__10232_10390.fqn:null);
switch (G__10232_10391__$1) {
case "compute":
var c__10049__auto___10393 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10389,c__10049__auto___10393,G__10232_10390,G__10232_10391__$1,n__4607__auto___10388,jobs,results,process,async){
return (function (){
var f__10050__auto__ = (function (){var switch__10032__auto__ = ((function (__10389,c__10049__auto___10393,G__10232_10390,G__10232_10391__$1,n__4607__auto___10388,jobs,results,process,async){
return (function (state_10245){
var state_val_10246 = (state_10245[(1)]);
if((state_val_10246 === (1))){
var state_10245__$1 = state_10245;
var statearr_10247_10394 = state_10245__$1;
(statearr_10247_10394[(2)] = null);

(statearr_10247_10394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10246 === (2))){
var state_10245__$1 = state_10245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10245__$1,(4),jobs);
} else {
if((state_val_10246 === (3))){
var inst_10243 = (state_10245[(2)]);
var state_10245__$1 = state_10245;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10245__$1,inst_10243);
} else {
if((state_val_10246 === (4))){
var inst_10235 = (state_10245[(2)]);
var inst_10236 = process.call(null,inst_10235);
var state_10245__$1 = state_10245;
if(cljs.core.truth_(inst_10236)){
var statearr_10248_10395 = state_10245__$1;
(statearr_10248_10395[(1)] = (5));

} else {
var statearr_10249_10396 = state_10245__$1;
(statearr_10249_10396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10246 === (5))){
var state_10245__$1 = state_10245;
var statearr_10250_10397 = state_10245__$1;
(statearr_10250_10397[(2)] = null);

(statearr_10250_10397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10246 === (6))){
var state_10245__$1 = state_10245;
var statearr_10251_10398 = state_10245__$1;
(statearr_10251_10398[(2)] = null);

(statearr_10251_10398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10246 === (7))){
var inst_10241 = (state_10245[(2)]);
var state_10245__$1 = state_10245;
var statearr_10252_10399 = state_10245__$1;
(statearr_10252_10399[(2)] = inst_10241);

(statearr_10252_10399[(1)] = (3));


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
});})(__10389,c__10049__auto___10393,G__10232_10390,G__10232_10391__$1,n__4607__auto___10388,jobs,results,process,async))
;
return ((function (__10389,switch__10032__auto__,c__10049__auto___10393,G__10232_10390,G__10232_10391__$1,n__4607__auto___10388,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10033__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10033__auto____0 = (function (){
var statearr_10253 = [null,null,null,null,null,null,null];
(statearr_10253[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10033__auto__);

(statearr_10253[(1)] = (1));

return statearr_10253;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10033__auto____1 = (function (state_10245){
while(true){
var ret_value__10034__auto__ = (function (){try{while(true){
var result__10035__auto__ = switch__10032__auto__.call(null,state_10245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10035__auto__;
}
break;
}
}catch (e10254){if((e10254 instanceof Object)){
var ex__10036__auto__ = e10254;
var statearr_10255_10400 = state_10245;
(statearr_10255_10400[(5)] = ex__10036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10401 = state_10245;
state_10245 = G__10401;
continue;
} else {
return ret_value__10034__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10033__auto__ = function(state_10245){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10033__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10033__auto____1.call(this,state_10245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10033__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10033__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10033__auto__;
})()
;})(__10389,switch__10032__auto__,c__10049__auto___10393,G__10232_10390,G__10232_10391__$1,n__4607__auto___10388,jobs,results,process,async))
})();
var state__10051__auto__ = (function (){var statearr_10256 = f__10050__auto__.call(null);
(statearr_10256[(6)] = c__10049__auto___10393);

return statearr_10256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10051__auto__);
});})(__10389,c__10049__auto___10393,G__10232_10390,G__10232_10391__$1,n__4607__auto___10388,jobs,results,process,async))
);


break;
case "async":
var c__10049__auto___10402 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10389,c__10049__auto___10402,G__10232_10390,G__10232_10391__$1,n__4607__auto___10388,jobs,results,process,async){
return (function (){
var f__10050__auto__ = (function (){var switch__10032__auto__ = ((function (__10389,c__10049__auto___10402,G__10232_10390,G__10232_10391__$1,n__4607__auto___10388,jobs,results,process,async){
return (function (state_10269){
var state_val_10270 = (state_10269[(1)]);
if((state_val_10270 === (1))){
var state_10269__$1 = state_10269;
var statearr_10271_10403 = state_10269__$1;
(statearr_10271_10403[(2)] = null);

(statearr_10271_10403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10270 === (2))){
var state_10269__$1 = state_10269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10269__$1,(4),jobs);
} else {
if((state_val_10270 === (3))){
var inst_10267 = (state_10269[(2)]);
var state_10269__$1 = state_10269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10269__$1,inst_10267);
} else {
if((state_val_10270 === (4))){
var inst_10259 = (state_10269[(2)]);
var inst_10260 = async.call(null,inst_10259);
var state_10269__$1 = state_10269;
if(cljs.core.truth_(inst_10260)){
var statearr_10272_10404 = state_10269__$1;
(statearr_10272_10404[(1)] = (5));

} else {
var statearr_10273_10405 = state_10269__$1;
(statearr_10273_10405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10270 === (5))){
var state_10269__$1 = state_10269;
var statearr_10274_10406 = state_10269__$1;
(statearr_10274_10406[(2)] = null);

(statearr_10274_10406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10270 === (6))){
var state_10269__$1 = state_10269;
var statearr_10275_10407 = state_10269__$1;
(statearr_10275_10407[(2)] = null);

(statearr_10275_10407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10270 === (7))){
var inst_10265 = (state_10269[(2)]);
var state_10269__$1 = state_10269;
var statearr_10276_10408 = state_10269__$1;
(statearr_10276_10408[(2)] = inst_10265);

(statearr_10276_10408[(1)] = (3));


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
});})(__10389,c__10049__auto___10402,G__10232_10390,G__10232_10391__$1,n__4607__auto___10388,jobs,results,process,async))
;
return ((function (__10389,switch__10032__auto__,c__10049__auto___10402,G__10232_10390,G__10232_10391__$1,n__4607__auto___10388,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10033__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10033__auto____0 = (function (){
var statearr_10277 = [null,null,null,null,null,null,null];
(statearr_10277[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10033__auto__);

(statearr_10277[(1)] = (1));

return statearr_10277;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10033__auto____1 = (function (state_10269){
while(true){
var ret_value__10034__auto__ = (function (){try{while(true){
var result__10035__auto__ = switch__10032__auto__.call(null,state_10269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10035__auto__;
}
break;
}
}catch (e10278){if((e10278 instanceof Object)){
var ex__10036__auto__ = e10278;
var statearr_10279_10409 = state_10269;
(statearr_10279_10409[(5)] = ex__10036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10410 = state_10269;
state_10269 = G__10410;
continue;
} else {
return ret_value__10034__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10033__auto__ = function(state_10269){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10033__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10033__auto____1.call(this,state_10269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10033__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10033__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10033__auto__;
})()
;})(__10389,switch__10032__auto__,c__10049__auto___10402,G__10232_10390,G__10232_10391__$1,n__4607__auto___10388,jobs,results,process,async))
})();
var state__10051__auto__ = (function (){var statearr_10280 = f__10050__auto__.call(null);
(statearr_10280[(6)] = c__10049__auto___10402);

return statearr_10280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10051__auto__);
});})(__10389,c__10049__auto___10402,G__10232_10390,G__10232_10391__$1,n__4607__auto___10388,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10232_10391__$1)].join('')));

}

var G__10411 = (__10389 + (1));
__10389 = G__10411;
continue;
} else {
}
break;
}

var c__10049__auto___10412 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10049__auto___10412,jobs,results,process,async){
return (function (){
var f__10050__auto__ = (function (){var switch__10032__auto__ = ((function (c__10049__auto___10412,jobs,results,process,async){
return (function (state_10302){
var state_val_10303 = (state_10302[(1)]);
if((state_val_10303 === (7))){
var inst_10298 = (state_10302[(2)]);
var state_10302__$1 = state_10302;
var statearr_10304_10413 = state_10302__$1;
(statearr_10304_10413[(2)] = inst_10298);

(statearr_10304_10413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10303 === (1))){
var state_10302__$1 = state_10302;
var statearr_10305_10414 = state_10302__$1;
(statearr_10305_10414[(2)] = null);

(statearr_10305_10414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10303 === (4))){
var inst_10283 = (state_10302[(7)]);
var inst_10283__$1 = (state_10302[(2)]);
var inst_10284 = (inst_10283__$1 == null);
var state_10302__$1 = (function (){var statearr_10306 = state_10302;
(statearr_10306[(7)] = inst_10283__$1);

return statearr_10306;
})();
if(cljs.core.truth_(inst_10284)){
var statearr_10307_10415 = state_10302__$1;
(statearr_10307_10415[(1)] = (5));

} else {
var statearr_10308_10416 = state_10302__$1;
(statearr_10308_10416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10303 === (6))){
var inst_10283 = (state_10302[(7)]);
var inst_10288 = (state_10302[(8)]);
var inst_10288__$1 = cljs.core.async.chan.call(null,(1));
var inst_10289 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10290 = [inst_10283,inst_10288__$1];
var inst_10291 = (new cljs.core.PersistentVector(null,2,(5),inst_10289,inst_10290,null));
var state_10302__$1 = (function (){var statearr_10309 = state_10302;
(statearr_10309[(8)] = inst_10288__$1);

return statearr_10309;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10302__$1,(8),jobs,inst_10291);
} else {
if((state_val_10303 === (3))){
var inst_10300 = (state_10302[(2)]);
var state_10302__$1 = state_10302;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10302__$1,inst_10300);
} else {
if((state_val_10303 === (2))){
var state_10302__$1 = state_10302;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10302__$1,(4),from);
} else {
if((state_val_10303 === (9))){
var inst_10295 = (state_10302[(2)]);
var state_10302__$1 = (function (){var statearr_10310 = state_10302;
(statearr_10310[(9)] = inst_10295);

return statearr_10310;
})();
var statearr_10311_10417 = state_10302__$1;
(statearr_10311_10417[(2)] = null);

(statearr_10311_10417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10303 === (5))){
var inst_10286 = cljs.core.async.close_BANG_.call(null,jobs);
var state_10302__$1 = state_10302;
var statearr_10312_10418 = state_10302__$1;
(statearr_10312_10418[(2)] = inst_10286);

(statearr_10312_10418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10303 === (8))){
var inst_10288 = (state_10302[(8)]);
var inst_10293 = (state_10302[(2)]);
var state_10302__$1 = (function (){var statearr_10313 = state_10302;
(statearr_10313[(10)] = inst_10293);

return statearr_10313;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10302__$1,(9),results,inst_10288);
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
});})(c__10049__auto___10412,jobs,results,process,async))
;
return ((function (switch__10032__auto__,c__10049__auto___10412,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10033__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10033__auto____0 = (function (){
var statearr_10314 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10314[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10033__auto__);

(statearr_10314[(1)] = (1));

return statearr_10314;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10033__auto____1 = (function (state_10302){
while(true){
var ret_value__10034__auto__ = (function (){try{while(true){
var result__10035__auto__ = switch__10032__auto__.call(null,state_10302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10035__auto__;
}
break;
}
}catch (e10315){if((e10315 instanceof Object)){
var ex__10036__auto__ = e10315;
var statearr_10316_10419 = state_10302;
(statearr_10316_10419[(5)] = ex__10036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10420 = state_10302;
state_10302 = G__10420;
continue;
} else {
return ret_value__10034__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10033__auto__ = function(state_10302){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10033__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10033__auto____1.call(this,state_10302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10033__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10033__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10033__auto__;
})()
;})(switch__10032__auto__,c__10049__auto___10412,jobs,results,process,async))
})();
var state__10051__auto__ = (function (){var statearr_10317 = f__10050__auto__.call(null);
(statearr_10317[(6)] = c__10049__auto___10412);

return statearr_10317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10051__auto__);
});})(c__10049__auto___10412,jobs,results,process,async))
);


var c__10049__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10049__auto__,jobs,results,process,async){
return (function (){
var f__10050__auto__ = (function (){var switch__10032__auto__ = ((function (c__10049__auto__,jobs,results,process,async){
return (function (state_10355){
var state_val_10356 = (state_10355[(1)]);
if((state_val_10356 === (7))){
var inst_10351 = (state_10355[(2)]);
var state_10355__$1 = state_10355;
var statearr_10357_10421 = state_10355__$1;
(statearr_10357_10421[(2)] = inst_10351);

(statearr_10357_10421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10356 === (20))){
var state_10355__$1 = state_10355;
var statearr_10358_10422 = state_10355__$1;
(statearr_10358_10422[(2)] = null);

(statearr_10358_10422[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10356 === (1))){
var state_10355__$1 = state_10355;
var statearr_10359_10423 = state_10355__$1;
(statearr_10359_10423[(2)] = null);

(statearr_10359_10423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10356 === (4))){
var inst_10320 = (state_10355[(7)]);
var inst_10320__$1 = (state_10355[(2)]);
var inst_10321 = (inst_10320__$1 == null);
var state_10355__$1 = (function (){var statearr_10360 = state_10355;
(statearr_10360[(7)] = inst_10320__$1);

return statearr_10360;
})();
if(cljs.core.truth_(inst_10321)){
var statearr_10361_10424 = state_10355__$1;
(statearr_10361_10424[(1)] = (5));

} else {
var statearr_10362_10425 = state_10355__$1;
(statearr_10362_10425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10356 === (15))){
var inst_10333 = (state_10355[(8)]);
var state_10355__$1 = state_10355;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10355__$1,(18),to,inst_10333);
} else {
if((state_val_10356 === (21))){
var inst_10346 = (state_10355[(2)]);
var state_10355__$1 = state_10355;
var statearr_10363_10426 = state_10355__$1;
(statearr_10363_10426[(2)] = inst_10346);

(statearr_10363_10426[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10356 === (13))){
var inst_10348 = (state_10355[(2)]);
var state_10355__$1 = (function (){var statearr_10364 = state_10355;
(statearr_10364[(9)] = inst_10348);

return statearr_10364;
})();
var statearr_10365_10427 = state_10355__$1;
(statearr_10365_10427[(2)] = null);

(statearr_10365_10427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10356 === (6))){
var inst_10320 = (state_10355[(7)]);
var state_10355__$1 = state_10355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10355__$1,(11),inst_10320);
} else {
if((state_val_10356 === (17))){
var inst_10341 = (state_10355[(2)]);
var state_10355__$1 = state_10355;
if(cljs.core.truth_(inst_10341)){
var statearr_10366_10428 = state_10355__$1;
(statearr_10366_10428[(1)] = (19));

} else {
var statearr_10367_10429 = state_10355__$1;
(statearr_10367_10429[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10356 === (3))){
var inst_10353 = (state_10355[(2)]);
var state_10355__$1 = state_10355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10355__$1,inst_10353);
} else {
if((state_val_10356 === (12))){
var inst_10330 = (state_10355[(10)]);
var state_10355__$1 = state_10355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10355__$1,(14),inst_10330);
} else {
if((state_val_10356 === (2))){
var state_10355__$1 = state_10355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10355__$1,(4),results);
} else {
if((state_val_10356 === (19))){
var state_10355__$1 = state_10355;
var statearr_10368_10430 = state_10355__$1;
(statearr_10368_10430[(2)] = null);

(statearr_10368_10430[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10356 === (11))){
var inst_10330 = (state_10355[(2)]);
var state_10355__$1 = (function (){var statearr_10369 = state_10355;
(statearr_10369[(10)] = inst_10330);

return statearr_10369;
})();
var statearr_10370_10431 = state_10355__$1;
(statearr_10370_10431[(2)] = null);

(statearr_10370_10431[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10356 === (9))){
var state_10355__$1 = state_10355;
var statearr_10371_10432 = state_10355__$1;
(statearr_10371_10432[(2)] = null);

(statearr_10371_10432[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10356 === (5))){
var state_10355__$1 = state_10355;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10372_10433 = state_10355__$1;
(statearr_10372_10433[(1)] = (8));

} else {
var statearr_10373_10434 = state_10355__$1;
(statearr_10373_10434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10356 === (14))){
var inst_10335 = (state_10355[(11)]);
var inst_10333 = (state_10355[(8)]);
var inst_10333__$1 = (state_10355[(2)]);
var inst_10334 = (inst_10333__$1 == null);
var inst_10335__$1 = cljs.core.not.call(null,inst_10334);
var state_10355__$1 = (function (){var statearr_10374 = state_10355;
(statearr_10374[(11)] = inst_10335__$1);

(statearr_10374[(8)] = inst_10333__$1);

return statearr_10374;
})();
if(inst_10335__$1){
var statearr_10375_10435 = state_10355__$1;
(statearr_10375_10435[(1)] = (15));

} else {
var statearr_10376_10436 = state_10355__$1;
(statearr_10376_10436[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10356 === (16))){
var inst_10335 = (state_10355[(11)]);
var state_10355__$1 = state_10355;
var statearr_10377_10437 = state_10355__$1;
(statearr_10377_10437[(2)] = inst_10335);

(statearr_10377_10437[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10356 === (10))){
var inst_10327 = (state_10355[(2)]);
var state_10355__$1 = state_10355;
var statearr_10378_10438 = state_10355__$1;
(statearr_10378_10438[(2)] = inst_10327);

(statearr_10378_10438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10356 === (18))){
var inst_10338 = (state_10355[(2)]);
var state_10355__$1 = state_10355;
var statearr_10379_10439 = state_10355__$1;
(statearr_10379_10439[(2)] = inst_10338);

(statearr_10379_10439[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10356 === (8))){
var inst_10324 = cljs.core.async.close_BANG_.call(null,to);
var state_10355__$1 = state_10355;
var statearr_10380_10440 = state_10355__$1;
(statearr_10380_10440[(2)] = inst_10324);

(statearr_10380_10440[(1)] = (10));


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
});})(c__10049__auto__,jobs,results,process,async))
;
return ((function (switch__10032__auto__,c__10049__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10033__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10033__auto____0 = (function (){
var statearr_10381 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10381[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10033__auto__);

(statearr_10381[(1)] = (1));

return statearr_10381;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10033__auto____1 = (function (state_10355){
while(true){
var ret_value__10034__auto__ = (function (){try{while(true){
var result__10035__auto__ = switch__10032__auto__.call(null,state_10355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10035__auto__;
}
break;
}
}catch (e10382){if((e10382 instanceof Object)){
var ex__10036__auto__ = e10382;
var statearr_10383_10441 = state_10355;
(statearr_10383_10441[(5)] = ex__10036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10442 = state_10355;
state_10355 = G__10442;
continue;
} else {
return ret_value__10034__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10033__auto__ = function(state_10355){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10033__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10033__auto____1.call(this,state_10355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10033__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10033__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10033__auto__;
})()
;})(switch__10032__auto__,c__10049__auto__,jobs,results,process,async))
})();
var state__10051__auto__ = (function (){var statearr_10384 = f__10050__auto__.call(null);
(statearr_10384[(6)] = c__10049__auto__);

return statearr_10384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10051__auto__);
});})(c__10049__auto__,jobs,results,process,async))
);

return c__10049__auto__;
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
var G__10444 = arguments.length;
switch (G__10444) {
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
var G__10447 = arguments.length;
switch (G__10447) {
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
var G__10450 = arguments.length;
switch (G__10450) {
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
var c__10049__auto___10499 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10049__auto___10499,tc,fc){
return (function (){
var f__10050__auto__ = (function (){var switch__10032__auto__ = ((function (c__10049__auto___10499,tc,fc){
return (function (state_10476){
var state_val_10477 = (state_10476[(1)]);
if((state_val_10477 === (7))){
var inst_10472 = (state_10476[(2)]);
var state_10476__$1 = state_10476;
var statearr_10478_10500 = state_10476__$1;
(statearr_10478_10500[(2)] = inst_10472);

(statearr_10478_10500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (1))){
var state_10476__$1 = state_10476;
var statearr_10479_10501 = state_10476__$1;
(statearr_10479_10501[(2)] = null);

(statearr_10479_10501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (4))){
var inst_10453 = (state_10476[(7)]);
var inst_10453__$1 = (state_10476[(2)]);
var inst_10454 = (inst_10453__$1 == null);
var state_10476__$1 = (function (){var statearr_10480 = state_10476;
(statearr_10480[(7)] = inst_10453__$1);

return statearr_10480;
})();
if(cljs.core.truth_(inst_10454)){
var statearr_10481_10502 = state_10476__$1;
(statearr_10481_10502[(1)] = (5));

} else {
var statearr_10482_10503 = state_10476__$1;
(statearr_10482_10503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (13))){
var state_10476__$1 = state_10476;
var statearr_10483_10504 = state_10476__$1;
(statearr_10483_10504[(2)] = null);

(statearr_10483_10504[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (6))){
var inst_10453 = (state_10476[(7)]);
var inst_10459 = p.call(null,inst_10453);
var state_10476__$1 = state_10476;
if(cljs.core.truth_(inst_10459)){
var statearr_10484_10505 = state_10476__$1;
(statearr_10484_10505[(1)] = (9));

} else {
var statearr_10485_10506 = state_10476__$1;
(statearr_10485_10506[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (3))){
var inst_10474 = (state_10476[(2)]);
var state_10476__$1 = state_10476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10476__$1,inst_10474);
} else {
if((state_val_10477 === (12))){
var state_10476__$1 = state_10476;
var statearr_10486_10507 = state_10476__$1;
(statearr_10486_10507[(2)] = null);

(statearr_10486_10507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (2))){
var state_10476__$1 = state_10476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10476__$1,(4),ch);
} else {
if((state_val_10477 === (11))){
var inst_10453 = (state_10476[(7)]);
var inst_10463 = (state_10476[(2)]);
var state_10476__$1 = state_10476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10476__$1,(8),inst_10463,inst_10453);
} else {
if((state_val_10477 === (9))){
var state_10476__$1 = state_10476;
var statearr_10487_10508 = state_10476__$1;
(statearr_10487_10508[(2)] = tc);

(statearr_10487_10508[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (5))){
var inst_10456 = cljs.core.async.close_BANG_.call(null,tc);
var inst_10457 = cljs.core.async.close_BANG_.call(null,fc);
var state_10476__$1 = (function (){var statearr_10488 = state_10476;
(statearr_10488[(8)] = inst_10456);

return statearr_10488;
})();
var statearr_10489_10509 = state_10476__$1;
(statearr_10489_10509[(2)] = inst_10457);

(statearr_10489_10509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (14))){
var inst_10470 = (state_10476[(2)]);
var state_10476__$1 = state_10476;
var statearr_10490_10510 = state_10476__$1;
(statearr_10490_10510[(2)] = inst_10470);

(statearr_10490_10510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (10))){
var state_10476__$1 = state_10476;
var statearr_10491_10511 = state_10476__$1;
(statearr_10491_10511[(2)] = fc);

(statearr_10491_10511[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10477 === (8))){
var inst_10465 = (state_10476[(2)]);
var state_10476__$1 = state_10476;
if(cljs.core.truth_(inst_10465)){
var statearr_10492_10512 = state_10476__$1;
(statearr_10492_10512[(1)] = (12));

} else {
var statearr_10493_10513 = state_10476__$1;
(statearr_10493_10513[(1)] = (13));

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
});})(c__10049__auto___10499,tc,fc))
;
return ((function (switch__10032__auto__,c__10049__auto___10499,tc,fc){
return (function() {
var cljs$core$async$state_machine__10033__auto__ = null;
var cljs$core$async$state_machine__10033__auto____0 = (function (){
var statearr_10494 = [null,null,null,null,null,null,null,null,null];
(statearr_10494[(0)] = cljs$core$async$state_machine__10033__auto__);

(statearr_10494[(1)] = (1));

return statearr_10494;
});
var cljs$core$async$state_machine__10033__auto____1 = (function (state_10476){
while(true){
var ret_value__10034__auto__ = (function (){try{while(true){
var result__10035__auto__ = switch__10032__auto__.call(null,state_10476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10035__auto__;
}
break;
}
}catch (e10495){if((e10495 instanceof Object)){
var ex__10036__auto__ = e10495;
var statearr_10496_10514 = state_10476;
(statearr_10496_10514[(5)] = ex__10036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10515 = state_10476;
state_10476 = G__10515;
continue;
} else {
return ret_value__10034__auto__;
}
break;
}
});
cljs$core$async$state_machine__10033__auto__ = function(state_10476){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10033__auto____1.call(this,state_10476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10033__auto____0;
cljs$core$async$state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10033__auto____1;
return cljs$core$async$state_machine__10033__auto__;
})()
;})(switch__10032__auto__,c__10049__auto___10499,tc,fc))
})();
var state__10051__auto__ = (function (){var statearr_10497 = f__10050__auto__.call(null);
(statearr_10497[(6)] = c__10049__auto___10499);

return statearr_10497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10051__auto__);
});})(c__10049__auto___10499,tc,fc))
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
var c__10049__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10049__auto__){
return (function (){
var f__10050__auto__ = (function (){var switch__10032__auto__ = ((function (c__10049__auto__){
return (function (state_10536){
var state_val_10537 = (state_10536[(1)]);
if((state_val_10537 === (7))){
var inst_10532 = (state_10536[(2)]);
var state_10536__$1 = state_10536;
var statearr_10538_10556 = state_10536__$1;
(statearr_10538_10556[(2)] = inst_10532);

(statearr_10538_10556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10537 === (1))){
var inst_10516 = init;
var state_10536__$1 = (function (){var statearr_10539 = state_10536;
(statearr_10539[(7)] = inst_10516);

return statearr_10539;
})();
var statearr_10540_10557 = state_10536__$1;
(statearr_10540_10557[(2)] = null);

(statearr_10540_10557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10537 === (4))){
var inst_10519 = (state_10536[(8)]);
var inst_10519__$1 = (state_10536[(2)]);
var inst_10520 = (inst_10519__$1 == null);
var state_10536__$1 = (function (){var statearr_10541 = state_10536;
(statearr_10541[(8)] = inst_10519__$1);

return statearr_10541;
})();
if(cljs.core.truth_(inst_10520)){
var statearr_10542_10558 = state_10536__$1;
(statearr_10542_10558[(1)] = (5));

} else {
var statearr_10543_10559 = state_10536__$1;
(statearr_10543_10559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10537 === (6))){
var inst_10519 = (state_10536[(8)]);
var inst_10523 = (state_10536[(9)]);
var inst_10516 = (state_10536[(7)]);
var inst_10523__$1 = f.call(null,inst_10516,inst_10519);
var inst_10524 = cljs.core.reduced_QMARK_.call(null,inst_10523__$1);
var state_10536__$1 = (function (){var statearr_10544 = state_10536;
(statearr_10544[(9)] = inst_10523__$1);

return statearr_10544;
})();
if(inst_10524){
var statearr_10545_10560 = state_10536__$1;
(statearr_10545_10560[(1)] = (8));

} else {
var statearr_10546_10561 = state_10536__$1;
(statearr_10546_10561[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10537 === (3))){
var inst_10534 = (state_10536[(2)]);
var state_10536__$1 = state_10536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10536__$1,inst_10534);
} else {
if((state_val_10537 === (2))){
var state_10536__$1 = state_10536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10536__$1,(4),ch);
} else {
if((state_val_10537 === (9))){
var inst_10523 = (state_10536[(9)]);
var inst_10516 = inst_10523;
var state_10536__$1 = (function (){var statearr_10547 = state_10536;
(statearr_10547[(7)] = inst_10516);

return statearr_10547;
})();
var statearr_10548_10562 = state_10536__$1;
(statearr_10548_10562[(2)] = null);

(statearr_10548_10562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10537 === (5))){
var inst_10516 = (state_10536[(7)]);
var state_10536__$1 = state_10536;
var statearr_10549_10563 = state_10536__$1;
(statearr_10549_10563[(2)] = inst_10516);

(statearr_10549_10563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10537 === (10))){
var inst_10530 = (state_10536[(2)]);
var state_10536__$1 = state_10536;
var statearr_10550_10564 = state_10536__$1;
(statearr_10550_10564[(2)] = inst_10530);

(statearr_10550_10564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10537 === (8))){
var inst_10523 = (state_10536[(9)]);
var inst_10526 = cljs.core.deref.call(null,inst_10523);
var state_10536__$1 = state_10536;
var statearr_10551_10565 = state_10536__$1;
(statearr_10551_10565[(2)] = inst_10526);

(statearr_10551_10565[(1)] = (10));


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
});})(c__10049__auto__))
;
return ((function (switch__10032__auto__,c__10049__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__10033__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10033__auto____0 = (function (){
var statearr_10552 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10552[(0)] = cljs$core$async$reduce_$_state_machine__10033__auto__);

(statearr_10552[(1)] = (1));

return statearr_10552;
});
var cljs$core$async$reduce_$_state_machine__10033__auto____1 = (function (state_10536){
while(true){
var ret_value__10034__auto__ = (function (){try{while(true){
var result__10035__auto__ = switch__10032__auto__.call(null,state_10536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10035__auto__;
}
break;
}
}catch (e10553){if((e10553 instanceof Object)){
var ex__10036__auto__ = e10553;
var statearr_10554_10566 = state_10536;
(statearr_10554_10566[(5)] = ex__10036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10567 = state_10536;
state_10536 = G__10567;
continue;
} else {
return ret_value__10034__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10033__auto__ = function(state_10536){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10033__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10033__auto____1.call(this,state_10536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10033__auto____0;
cljs$core$async$reduce_$_state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10033__auto____1;
return cljs$core$async$reduce_$_state_machine__10033__auto__;
})()
;})(switch__10032__auto__,c__10049__auto__))
})();
var state__10051__auto__ = (function (){var statearr_10555 = f__10050__auto__.call(null);
(statearr_10555[(6)] = c__10049__auto__);

return statearr_10555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10051__auto__);
});})(c__10049__auto__))
);

return c__10049__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__10049__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10049__auto__,f__$1){
return (function (){
var f__10050__auto__ = (function (){var switch__10032__auto__ = ((function (c__10049__auto__,f__$1){
return (function (state_10573){
var state_val_10574 = (state_10573[(1)]);
if((state_val_10574 === (1))){
var inst_10568 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_10573__$1 = state_10573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10573__$1,(2),inst_10568);
} else {
if((state_val_10574 === (2))){
var inst_10570 = (state_10573[(2)]);
var inst_10571 = f__$1.call(null,inst_10570);
var state_10573__$1 = state_10573;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10573__$1,inst_10571);
} else {
return null;
}
}
});})(c__10049__auto__,f__$1))
;
return ((function (switch__10032__auto__,c__10049__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__10033__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10033__auto____0 = (function (){
var statearr_10575 = [null,null,null,null,null,null,null];
(statearr_10575[(0)] = cljs$core$async$transduce_$_state_machine__10033__auto__);

(statearr_10575[(1)] = (1));

return statearr_10575;
});
var cljs$core$async$transduce_$_state_machine__10033__auto____1 = (function (state_10573){
while(true){
var ret_value__10034__auto__ = (function (){try{while(true){
var result__10035__auto__ = switch__10032__auto__.call(null,state_10573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10035__auto__;
}
break;
}
}catch (e10576){if((e10576 instanceof Object)){
var ex__10036__auto__ = e10576;
var statearr_10577_10579 = state_10573;
(statearr_10577_10579[(5)] = ex__10036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10580 = state_10573;
state_10573 = G__10580;
continue;
} else {
return ret_value__10034__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10033__auto__ = function(state_10573){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10033__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10033__auto____1.call(this,state_10573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10033__auto____0;
cljs$core$async$transduce_$_state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10033__auto____1;
return cljs$core$async$transduce_$_state_machine__10033__auto__;
})()
;})(switch__10032__auto__,c__10049__auto__,f__$1))
})();
var state__10051__auto__ = (function (){var statearr_10578 = f__10050__auto__.call(null);
(statearr_10578[(6)] = c__10049__auto__);

return statearr_10578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10051__auto__);
});})(c__10049__auto__,f__$1))
);

return c__10049__auto__;
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
var G__10582 = arguments.length;
switch (G__10582) {
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
var c__10049__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10049__auto__){
return (function (){
var f__10050__auto__ = (function (){var switch__10032__auto__ = ((function (c__10049__auto__){
return (function (state_10607){
var state_val_10608 = (state_10607[(1)]);
if((state_val_10608 === (7))){
var inst_10589 = (state_10607[(2)]);
var state_10607__$1 = state_10607;
var statearr_10609_10630 = state_10607__$1;
(statearr_10609_10630[(2)] = inst_10589);

(statearr_10609_10630[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (1))){
var inst_10583 = cljs.core.seq.call(null,coll);
var inst_10584 = inst_10583;
var state_10607__$1 = (function (){var statearr_10610 = state_10607;
(statearr_10610[(7)] = inst_10584);

return statearr_10610;
})();
var statearr_10611_10631 = state_10607__$1;
(statearr_10611_10631[(2)] = null);

(statearr_10611_10631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (4))){
var inst_10584 = (state_10607[(7)]);
var inst_10587 = cljs.core.first.call(null,inst_10584);
var state_10607__$1 = state_10607;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10607__$1,(7),ch,inst_10587);
} else {
if((state_val_10608 === (13))){
var inst_10601 = (state_10607[(2)]);
var state_10607__$1 = state_10607;
var statearr_10612_10632 = state_10607__$1;
(statearr_10612_10632[(2)] = inst_10601);

(statearr_10612_10632[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (6))){
var inst_10592 = (state_10607[(2)]);
var state_10607__$1 = state_10607;
if(cljs.core.truth_(inst_10592)){
var statearr_10613_10633 = state_10607__$1;
(statearr_10613_10633[(1)] = (8));

} else {
var statearr_10614_10634 = state_10607__$1;
(statearr_10614_10634[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (3))){
var inst_10605 = (state_10607[(2)]);
var state_10607__$1 = state_10607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10607__$1,inst_10605);
} else {
if((state_val_10608 === (12))){
var state_10607__$1 = state_10607;
var statearr_10615_10635 = state_10607__$1;
(statearr_10615_10635[(2)] = null);

(statearr_10615_10635[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (2))){
var inst_10584 = (state_10607[(7)]);
var state_10607__$1 = state_10607;
if(cljs.core.truth_(inst_10584)){
var statearr_10616_10636 = state_10607__$1;
(statearr_10616_10636[(1)] = (4));

} else {
var statearr_10617_10637 = state_10607__$1;
(statearr_10617_10637[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (11))){
var inst_10598 = cljs.core.async.close_BANG_.call(null,ch);
var state_10607__$1 = state_10607;
var statearr_10618_10638 = state_10607__$1;
(statearr_10618_10638[(2)] = inst_10598);

(statearr_10618_10638[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (9))){
var state_10607__$1 = state_10607;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10619_10639 = state_10607__$1;
(statearr_10619_10639[(1)] = (11));

} else {
var statearr_10620_10640 = state_10607__$1;
(statearr_10620_10640[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (5))){
var inst_10584 = (state_10607[(7)]);
var state_10607__$1 = state_10607;
var statearr_10621_10641 = state_10607__$1;
(statearr_10621_10641[(2)] = inst_10584);

(statearr_10621_10641[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (10))){
var inst_10603 = (state_10607[(2)]);
var state_10607__$1 = state_10607;
var statearr_10622_10642 = state_10607__$1;
(statearr_10622_10642[(2)] = inst_10603);

(statearr_10622_10642[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10608 === (8))){
var inst_10584 = (state_10607[(7)]);
var inst_10594 = cljs.core.next.call(null,inst_10584);
var inst_10584__$1 = inst_10594;
var state_10607__$1 = (function (){var statearr_10623 = state_10607;
(statearr_10623[(7)] = inst_10584__$1);

return statearr_10623;
})();
var statearr_10624_10643 = state_10607__$1;
(statearr_10624_10643[(2)] = null);

(statearr_10624_10643[(1)] = (2));


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
});})(c__10049__auto__))
;
return ((function (switch__10032__auto__,c__10049__auto__){
return (function() {
var cljs$core$async$state_machine__10033__auto__ = null;
var cljs$core$async$state_machine__10033__auto____0 = (function (){
var statearr_10625 = [null,null,null,null,null,null,null,null];
(statearr_10625[(0)] = cljs$core$async$state_machine__10033__auto__);

(statearr_10625[(1)] = (1));

return statearr_10625;
});
var cljs$core$async$state_machine__10033__auto____1 = (function (state_10607){
while(true){
var ret_value__10034__auto__ = (function (){try{while(true){
var result__10035__auto__ = switch__10032__auto__.call(null,state_10607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10035__auto__;
}
break;
}
}catch (e10626){if((e10626 instanceof Object)){
var ex__10036__auto__ = e10626;
var statearr_10627_10644 = state_10607;
(statearr_10627_10644[(5)] = ex__10036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10645 = state_10607;
state_10607 = G__10645;
continue;
} else {
return ret_value__10034__auto__;
}
break;
}
});
cljs$core$async$state_machine__10033__auto__ = function(state_10607){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10033__auto____1.call(this,state_10607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10033__auto____0;
cljs$core$async$state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10033__auto____1;
return cljs$core$async$state_machine__10033__auto__;
})()
;})(switch__10032__auto__,c__10049__auto__))
})();
var state__10051__auto__ = (function (){var statearr_10628 = f__10050__auto__.call(null);
(statearr_10628[(6)] = c__10049__auto__);

return statearr_10628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10051__auto__);
});})(c__10049__auto__))
);

return c__10049__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10646 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10646 = (function (ch,cs,meta10647){
this.ch = ch;
this.cs = cs;
this.meta10647 = meta10647;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10648,meta10647__$1){
var self__ = this;
var _10648__$1 = this;
return (new cljs.core.async.t_cljs$core$async10646(self__.ch,self__.cs,meta10647__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async10646.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10648){
var self__ = this;
var _10648__$1 = this;
return self__.meta10647;
});})(cs))
;

cljs.core.async.t_cljs$core$async10646.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10646.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async10646.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10646.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10646.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10646.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10646.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta10647","meta10647",-242993805,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async10646.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10646.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10646";

cljs.core.async.t_cljs$core$async10646.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async10646");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10646.
 */
cljs.core.async.__GT_t_cljs$core$async10646 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async10646(ch__$1,cs__$1,meta10647){
return (new cljs.core.async.t_cljs$core$async10646(ch__$1,cs__$1,meta10647));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async10646(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10049__auto___10868 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10049__auto___10868,cs,m,dchan,dctr,done){
return (function (){
var f__10050__auto__ = (function (){var switch__10032__auto__ = ((function (c__10049__auto___10868,cs,m,dchan,dctr,done){
return (function (state_10783){
var state_val_10784 = (state_10783[(1)]);
if((state_val_10784 === (7))){
var inst_10779 = (state_10783[(2)]);
var state_10783__$1 = state_10783;
var statearr_10785_10869 = state_10783__$1;
(statearr_10785_10869[(2)] = inst_10779);

(statearr_10785_10869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (20))){
var inst_10682 = (state_10783[(7)]);
var inst_10694 = cljs.core.first.call(null,inst_10682);
var inst_10695 = cljs.core.nth.call(null,inst_10694,(0),null);
var inst_10696 = cljs.core.nth.call(null,inst_10694,(1),null);
var state_10783__$1 = (function (){var statearr_10786 = state_10783;
(statearr_10786[(8)] = inst_10695);

return statearr_10786;
})();
if(cljs.core.truth_(inst_10696)){
var statearr_10787_10870 = state_10783__$1;
(statearr_10787_10870[(1)] = (22));

} else {
var statearr_10788_10871 = state_10783__$1;
(statearr_10788_10871[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (27))){
var inst_10724 = (state_10783[(9)]);
var inst_10726 = (state_10783[(10)]);
var inst_10731 = (state_10783[(11)]);
var inst_10651 = (state_10783[(12)]);
var inst_10731__$1 = cljs.core._nth.call(null,inst_10724,inst_10726);
var inst_10732 = cljs.core.async.put_BANG_.call(null,inst_10731__$1,inst_10651,done);
var state_10783__$1 = (function (){var statearr_10789 = state_10783;
(statearr_10789[(11)] = inst_10731__$1);

return statearr_10789;
})();
if(cljs.core.truth_(inst_10732)){
var statearr_10790_10872 = state_10783__$1;
(statearr_10790_10872[(1)] = (30));

} else {
var statearr_10791_10873 = state_10783__$1;
(statearr_10791_10873[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (1))){
var state_10783__$1 = state_10783;
var statearr_10792_10874 = state_10783__$1;
(statearr_10792_10874[(2)] = null);

(statearr_10792_10874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (24))){
var inst_10682 = (state_10783[(7)]);
var inst_10701 = (state_10783[(2)]);
var inst_10702 = cljs.core.next.call(null,inst_10682);
var inst_10660 = inst_10702;
var inst_10661 = null;
var inst_10662 = (0);
var inst_10663 = (0);
var state_10783__$1 = (function (){var statearr_10793 = state_10783;
(statearr_10793[(13)] = inst_10663);

(statearr_10793[(14)] = inst_10701);

(statearr_10793[(15)] = inst_10661);

(statearr_10793[(16)] = inst_10662);

(statearr_10793[(17)] = inst_10660);

return statearr_10793;
})();
var statearr_10794_10875 = state_10783__$1;
(statearr_10794_10875[(2)] = null);

(statearr_10794_10875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (39))){
var state_10783__$1 = state_10783;
var statearr_10798_10876 = state_10783__$1;
(statearr_10798_10876[(2)] = null);

(statearr_10798_10876[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (4))){
var inst_10651 = (state_10783[(12)]);
var inst_10651__$1 = (state_10783[(2)]);
var inst_10652 = (inst_10651__$1 == null);
var state_10783__$1 = (function (){var statearr_10799 = state_10783;
(statearr_10799[(12)] = inst_10651__$1);

return statearr_10799;
})();
if(cljs.core.truth_(inst_10652)){
var statearr_10800_10877 = state_10783__$1;
(statearr_10800_10877[(1)] = (5));

} else {
var statearr_10801_10878 = state_10783__$1;
(statearr_10801_10878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (15))){
var inst_10663 = (state_10783[(13)]);
var inst_10661 = (state_10783[(15)]);
var inst_10662 = (state_10783[(16)]);
var inst_10660 = (state_10783[(17)]);
var inst_10678 = (state_10783[(2)]);
var inst_10679 = (inst_10663 + (1));
var tmp10795 = inst_10661;
var tmp10796 = inst_10662;
var tmp10797 = inst_10660;
var inst_10660__$1 = tmp10797;
var inst_10661__$1 = tmp10795;
var inst_10662__$1 = tmp10796;
var inst_10663__$1 = inst_10679;
var state_10783__$1 = (function (){var statearr_10802 = state_10783;
(statearr_10802[(13)] = inst_10663__$1);

(statearr_10802[(15)] = inst_10661__$1);

(statearr_10802[(16)] = inst_10662__$1);

(statearr_10802[(17)] = inst_10660__$1);

(statearr_10802[(18)] = inst_10678);

return statearr_10802;
})();
var statearr_10803_10879 = state_10783__$1;
(statearr_10803_10879[(2)] = null);

(statearr_10803_10879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (21))){
var inst_10705 = (state_10783[(2)]);
var state_10783__$1 = state_10783;
var statearr_10807_10880 = state_10783__$1;
(statearr_10807_10880[(2)] = inst_10705);

(statearr_10807_10880[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (31))){
var inst_10731 = (state_10783[(11)]);
var inst_10735 = done.call(null,null);
var inst_10736 = cljs.core.async.untap_STAR_.call(null,m,inst_10731);
var state_10783__$1 = (function (){var statearr_10808 = state_10783;
(statearr_10808[(19)] = inst_10735);

return statearr_10808;
})();
var statearr_10809_10881 = state_10783__$1;
(statearr_10809_10881[(2)] = inst_10736);

(statearr_10809_10881[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (32))){
var inst_10724 = (state_10783[(9)]);
var inst_10723 = (state_10783[(20)]);
var inst_10726 = (state_10783[(10)]);
var inst_10725 = (state_10783[(21)]);
var inst_10738 = (state_10783[(2)]);
var inst_10739 = (inst_10726 + (1));
var tmp10804 = inst_10724;
var tmp10805 = inst_10723;
var tmp10806 = inst_10725;
var inst_10723__$1 = tmp10805;
var inst_10724__$1 = tmp10804;
var inst_10725__$1 = tmp10806;
var inst_10726__$1 = inst_10739;
var state_10783__$1 = (function (){var statearr_10810 = state_10783;
(statearr_10810[(9)] = inst_10724__$1);

(statearr_10810[(20)] = inst_10723__$1);

(statearr_10810[(10)] = inst_10726__$1);

(statearr_10810[(21)] = inst_10725__$1);

(statearr_10810[(22)] = inst_10738);

return statearr_10810;
})();
var statearr_10811_10882 = state_10783__$1;
(statearr_10811_10882[(2)] = null);

(statearr_10811_10882[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (40))){
var inst_10751 = (state_10783[(23)]);
var inst_10755 = done.call(null,null);
var inst_10756 = cljs.core.async.untap_STAR_.call(null,m,inst_10751);
var state_10783__$1 = (function (){var statearr_10812 = state_10783;
(statearr_10812[(24)] = inst_10755);

return statearr_10812;
})();
var statearr_10813_10883 = state_10783__$1;
(statearr_10813_10883[(2)] = inst_10756);

(statearr_10813_10883[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (33))){
var inst_10742 = (state_10783[(25)]);
var inst_10744 = cljs.core.chunked_seq_QMARK_.call(null,inst_10742);
var state_10783__$1 = state_10783;
if(inst_10744){
var statearr_10814_10884 = state_10783__$1;
(statearr_10814_10884[(1)] = (36));

} else {
var statearr_10815_10885 = state_10783__$1;
(statearr_10815_10885[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (13))){
var inst_10672 = (state_10783[(26)]);
var inst_10675 = cljs.core.async.close_BANG_.call(null,inst_10672);
var state_10783__$1 = state_10783;
var statearr_10816_10886 = state_10783__$1;
(statearr_10816_10886[(2)] = inst_10675);

(statearr_10816_10886[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (22))){
var inst_10695 = (state_10783[(8)]);
var inst_10698 = cljs.core.async.close_BANG_.call(null,inst_10695);
var state_10783__$1 = state_10783;
var statearr_10817_10887 = state_10783__$1;
(statearr_10817_10887[(2)] = inst_10698);

(statearr_10817_10887[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (36))){
var inst_10742 = (state_10783[(25)]);
var inst_10746 = cljs.core.chunk_first.call(null,inst_10742);
var inst_10747 = cljs.core.chunk_rest.call(null,inst_10742);
var inst_10748 = cljs.core.count.call(null,inst_10746);
var inst_10723 = inst_10747;
var inst_10724 = inst_10746;
var inst_10725 = inst_10748;
var inst_10726 = (0);
var state_10783__$1 = (function (){var statearr_10818 = state_10783;
(statearr_10818[(9)] = inst_10724);

(statearr_10818[(20)] = inst_10723);

(statearr_10818[(10)] = inst_10726);

(statearr_10818[(21)] = inst_10725);

return statearr_10818;
})();
var statearr_10819_10888 = state_10783__$1;
(statearr_10819_10888[(2)] = null);

(statearr_10819_10888[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (41))){
var inst_10742 = (state_10783[(25)]);
var inst_10758 = (state_10783[(2)]);
var inst_10759 = cljs.core.next.call(null,inst_10742);
var inst_10723 = inst_10759;
var inst_10724 = null;
var inst_10725 = (0);
var inst_10726 = (0);
var state_10783__$1 = (function (){var statearr_10820 = state_10783;
(statearr_10820[(9)] = inst_10724);

(statearr_10820[(20)] = inst_10723);

(statearr_10820[(27)] = inst_10758);

(statearr_10820[(10)] = inst_10726);

(statearr_10820[(21)] = inst_10725);

return statearr_10820;
})();
var statearr_10821_10889 = state_10783__$1;
(statearr_10821_10889[(2)] = null);

(statearr_10821_10889[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (43))){
var state_10783__$1 = state_10783;
var statearr_10822_10890 = state_10783__$1;
(statearr_10822_10890[(2)] = null);

(statearr_10822_10890[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (29))){
var inst_10767 = (state_10783[(2)]);
var state_10783__$1 = state_10783;
var statearr_10823_10891 = state_10783__$1;
(statearr_10823_10891[(2)] = inst_10767);

(statearr_10823_10891[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (44))){
var inst_10776 = (state_10783[(2)]);
var state_10783__$1 = (function (){var statearr_10824 = state_10783;
(statearr_10824[(28)] = inst_10776);

return statearr_10824;
})();
var statearr_10825_10892 = state_10783__$1;
(statearr_10825_10892[(2)] = null);

(statearr_10825_10892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (6))){
var inst_10715 = (state_10783[(29)]);
var inst_10714 = cljs.core.deref.call(null,cs);
var inst_10715__$1 = cljs.core.keys.call(null,inst_10714);
var inst_10716 = cljs.core.count.call(null,inst_10715__$1);
var inst_10717 = cljs.core.reset_BANG_.call(null,dctr,inst_10716);
var inst_10722 = cljs.core.seq.call(null,inst_10715__$1);
var inst_10723 = inst_10722;
var inst_10724 = null;
var inst_10725 = (0);
var inst_10726 = (0);
var state_10783__$1 = (function (){var statearr_10826 = state_10783;
(statearr_10826[(9)] = inst_10724);

(statearr_10826[(20)] = inst_10723);

(statearr_10826[(10)] = inst_10726);

(statearr_10826[(30)] = inst_10717);

(statearr_10826[(21)] = inst_10725);

(statearr_10826[(29)] = inst_10715__$1);

return statearr_10826;
})();
var statearr_10827_10893 = state_10783__$1;
(statearr_10827_10893[(2)] = null);

(statearr_10827_10893[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (28))){
var inst_10742 = (state_10783[(25)]);
var inst_10723 = (state_10783[(20)]);
var inst_10742__$1 = cljs.core.seq.call(null,inst_10723);
var state_10783__$1 = (function (){var statearr_10828 = state_10783;
(statearr_10828[(25)] = inst_10742__$1);

return statearr_10828;
})();
if(inst_10742__$1){
var statearr_10829_10894 = state_10783__$1;
(statearr_10829_10894[(1)] = (33));

} else {
var statearr_10830_10895 = state_10783__$1;
(statearr_10830_10895[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (25))){
var inst_10726 = (state_10783[(10)]);
var inst_10725 = (state_10783[(21)]);
var inst_10728 = (inst_10726 < inst_10725);
var inst_10729 = inst_10728;
var state_10783__$1 = state_10783;
if(cljs.core.truth_(inst_10729)){
var statearr_10831_10896 = state_10783__$1;
(statearr_10831_10896[(1)] = (27));

} else {
var statearr_10832_10897 = state_10783__$1;
(statearr_10832_10897[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (34))){
var state_10783__$1 = state_10783;
var statearr_10833_10898 = state_10783__$1;
(statearr_10833_10898[(2)] = null);

(statearr_10833_10898[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (17))){
var state_10783__$1 = state_10783;
var statearr_10834_10899 = state_10783__$1;
(statearr_10834_10899[(2)] = null);

(statearr_10834_10899[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (3))){
var inst_10781 = (state_10783[(2)]);
var state_10783__$1 = state_10783;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10783__$1,inst_10781);
} else {
if((state_val_10784 === (12))){
var inst_10710 = (state_10783[(2)]);
var state_10783__$1 = state_10783;
var statearr_10835_10900 = state_10783__$1;
(statearr_10835_10900[(2)] = inst_10710);

(statearr_10835_10900[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (2))){
var state_10783__$1 = state_10783;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10783__$1,(4),ch);
} else {
if((state_val_10784 === (23))){
var state_10783__$1 = state_10783;
var statearr_10836_10901 = state_10783__$1;
(statearr_10836_10901[(2)] = null);

(statearr_10836_10901[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (35))){
var inst_10765 = (state_10783[(2)]);
var state_10783__$1 = state_10783;
var statearr_10837_10902 = state_10783__$1;
(statearr_10837_10902[(2)] = inst_10765);

(statearr_10837_10902[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (19))){
var inst_10682 = (state_10783[(7)]);
var inst_10686 = cljs.core.chunk_first.call(null,inst_10682);
var inst_10687 = cljs.core.chunk_rest.call(null,inst_10682);
var inst_10688 = cljs.core.count.call(null,inst_10686);
var inst_10660 = inst_10687;
var inst_10661 = inst_10686;
var inst_10662 = inst_10688;
var inst_10663 = (0);
var state_10783__$1 = (function (){var statearr_10838 = state_10783;
(statearr_10838[(13)] = inst_10663);

(statearr_10838[(15)] = inst_10661);

(statearr_10838[(16)] = inst_10662);

(statearr_10838[(17)] = inst_10660);

return statearr_10838;
})();
var statearr_10839_10903 = state_10783__$1;
(statearr_10839_10903[(2)] = null);

(statearr_10839_10903[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (11))){
var inst_10682 = (state_10783[(7)]);
var inst_10660 = (state_10783[(17)]);
var inst_10682__$1 = cljs.core.seq.call(null,inst_10660);
var state_10783__$1 = (function (){var statearr_10840 = state_10783;
(statearr_10840[(7)] = inst_10682__$1);

return statearr_10840;
})();
if(inst_10682__$1){
var statearr_10841_10904 = state_10783__$1;
(statearr_10841_10904[(1)] = (16));

} else {
var statearr_10842_10905 = state_10783__$1;
(statearr_10842_10905[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (9))){
var inst_10712 = (state_10783[(2)]);
var state_10783__$1 = state_10783;
var statearr_10843_10906 = state_10783__$1;
(statearr_10843_10906[(2)] = inst_10712);

(statearr_10843_10906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (5))){
var inst_10658 = cljs.core.deref.call(null,cs);
var inst_10659 = cljs.core.seq.call(null,inst_10658);
var inst_10660 = inst_10659;
var inst_10661 = null;
var inst_10662 = (0);
var inst_10663 = (0);
var state_10783__$1 = (function (){var statearr_10844 = state_10783;
(statearr_10844[(13)] = inst_10663);

(statearr_10844[(15)] = inst_10661);

(statearr_10844[(16)] = inst_10662);

(statearr_10844[(17)] = inst_10660);

return statearr_10844;
})();
var statearr_10845_10907 = state_10783__$1;
(statearr_10845_10907[(2)] = null);

(statearr_10845_10907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (14))){
var state_10783__$1 = state_10783;
var statearr_10846_10908 = state_10783__$1;
(statearr_10846_10908[(2)] = null);

(statearr_10846_10908[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (45))){
var inst_10773 = (state_10783[(2)]);
var state_10783__$1 = state_10783;
var statearr_10847_10909 = state_10783__$1;
(statearr_10847_10909[(2)] = inst_10773);

(statearr_10847_10909[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (26))){
var inst_10715 = (state_10783[(29)]);
var inst_10769 = (state_10783[(2)]);
var inst_10770 = cljs.core.seq.call(null,inst_10715);
var state_10783__$1 = (function (){var statearr_10848 = state_10783;
(statearr_10848[(31)] = inst_10769);

return statearr_10848;
})();
if(inst_10770){
var statearr_10849_10910 = state_10783__$1;
(statearr_10849_10910[(1)] = (42));

} else {
var statearr_10850_10911 = state_10783__$1;
(statearr_10850_10911[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (16))){
var inst_10682 = (state_10783[(7)]);
var inst_10684 = cljs.core.chunked_seq_QMARK_.call(null,inst_10682);
var state_10783__$1 = state_10783;
if(inst_10684){
var statearr_10851_10912 = state_10783__$1;
(statearr_10851_10912[(1)] = (19));

} else {
var statearr_10852_10913 = state_10783__$1;
(statearr_10852_10913[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (38))){
var inst_10762 = (state_10783[(2)]);
var state_10783__$1 = state_10783;
var statearr_10853_10914 = state_10783__$1;
(statearr_10853_10914[(2)] = inst_10762);

(statearr_10853_10914[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (30))){
var state_10783__$1 = state_10783;
var statearr_10854_10915 = state_10783__$1;
(statearr_10854_10915[(2)] = null);

(statearr_10854_10915[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (10))){
var inst_10663 = (state_10783[(13)]);
var inst_10661 = (state_10783[(15)]);
var inst_10671 = cljs.core._nth.call(null,inst_10661,inst_10663);
var inst_10672 = cljs.core.nth.call(null,inst_10671,(0),null);
var inst_10673 = cljs.core.nth.call(null,inst_10671,(1),null);
var state_10783__$1 = (function (){var statearr_10855 = state_10783;
(statearr_10855[(26)] = inst_10672);

return statearr_10855;
})();
if(cljs.core.truth_(inst_10673)){
var statearr_10856_10916 = state_10783__$1;
(statearr_10856_10916[(1)] = (13));

} else {
var statearr_10857_10917 = state_10783__$1;
(statearr_10857_10917[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (18))){
var inst_10708 = (state_10783[(2)]);
var state_10783__$1 = state_10783;
var statearr_10858_10918 = state_10783__$1;
(statearr_10858_10918[(2)] = inst_10708);

(statearr_10858_10918[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (42))){
var state_10783__$1 = state_10783;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10783__$1,(45),dchan);
} else {
if((state_val_10784 === (37))){
var inst_10742 = (state_10783[(25)]);
var inst_10751 = (state_10783[(23)]);
var inst_10651 = (state_10783[(12)]);
var inst_10751__$1 = cljs.core.first.call(null,inst_10742);
var inst_10752 = cljs.core.async.put_BANG_.call(null,inst_10751__$1,inst_10651,done);
var state_10783__$1 = (function (){var statearr_10859 = state_10783;
(statearr_10859[(23)] = inst_10751__$1);

return statearr_10859;
})();
if(cljs.core.truth_(inst_10752)){
var statearr_10860_10919 = state_10783__$1;
(statearr_10860_10919[(1)] = (39));

} else {
var statearr_10861_10920 = state_10783__$1;
(statearr_10861_10920[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (8))){
var inst_10663 = (state_10783[(13)]);
var inst_10662 = (state_10783[(16)]);
var inst_10665 = (inst_10663 < inst_10662);
var inst_10666 = inst_10665;
var state_10783__$1 = state_10783;
if(cljs.core.truth_(inst_10666)){
var statearr_10862_10921 = state_10783__$1;
(statearr_10862_10921[(1)] = (10));

} else {
var statearr_10863_10922 = state_10783__$1;
(statearr_10863_10922[(1)] = (11));

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
});})(c__10049__auto___10868,cs,m,dchan,dctr,done))
;
return ((function (switch__10032__auto__,c__10049__auto___10868,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10033__auto__ = null;
var cljs$core$async$mult_$_state_machine__10033__auto____0 = (function (){
var statearr_10864 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10864[(0)] = cljs$core$async$mult_$_state_machine__10033__auto__);

(statearr_10864[(1)] = (1));

return statearr_10864;
});
var cljs$core$async$mult_$_state_machine__10033__auto____1 = (function (state_10783){
while(true){
var ret_value__10034__auto__ = (function (){try{while(true){
var result__10035__auto__ = switch__10032__auto__.call(null,state_10783);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10035__auto__;
}
break;
}
}catch (e10865){if((e10865 instanceof Object)){
var ex__10036__auto__ = e10865;
var statearr_10866_10923 = state_10783;
(statearr_10866_10923[(5)] = ex__10036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10924 = state_10783;
state_10783 = G__10924;
continue;
} else {
return ret_value__10034__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10033__auto__ = function(state_10783){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10033__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10033__auto____1.call(this,state_10783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10033__auto____0;
cljs$core$async$mult_$_state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10033__auto____1;
return cljs$core$async$mult_$_state_machine__10033__auto__;
})()
;})(switch__10032__auto__,c__10049__auto___10868,cs,m,dchan,dctr,done))
})();
var state__10051__auto__ = (function (){var statearr_10867 = f__10050__auto__.call(null);
(statearr_10867[(6)] = c__10049__auto___10868);

return statearr_10867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10051__auto__);
});})(c__10049__auto___10868,cs,m,dchan,dctr,done))
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
var G__10926 = arguments.length;
switch (G__10926) {
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
var len__4730__auto___10938 = arguments.length;
var i__4731__auto___10939 = (0);
while(true){
if((i__4731__auto___10939 < len__4730__auto___10938)){
args__4736__auto__.push((arguments[i__4731__auto___10939]));

var G__10940 = (i__4731__auto___10939 + (1));
i__4731__auto___10939 = G__10940;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__10932){
var map__10933 = p__10932;
var map__10933__$1 = (((((!((map__10933 == null))))?(((((map__10933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10933):map__10933);
var opts = map__10933__$1;
var statearr_10935_10941 = state;
(statearr_10935_10941[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__10933,map__10933__$1,opts){
return (function (val){
var statearr_10936_10942 = state;
(statearr_10936_10942[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__10933,map__10933__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_10937_10943 = state;
(statearr_10937_10943[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq10928){
var G__10929 = cljs.core.first.call(null,seq10928);
var seq10928__$1 = cljs.core.next.call(null,seq10928);
var G__10930 = cljs.core.first.call(null,seq10928__$1);
var seq10928__$2 = cljs.core.next.call(null,seq10928__$1);
var G__10931 = cljs.core.first.call(null,seq10928__$2);
var seq10928__$3 = cljs.core.next.call(null,seq10928__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10929,G__10930,G__10931,seq10928__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10944 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10944 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta10945){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta10945 = meta10945;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10946,meta10945__$1){
var self__ = this;
var _10946__$1 = this;
return (new cljs.core.async.t_cljs$core$async10944(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta10945__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10944.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10946){
var self__ = this;
var _10946__$1 = this;
return self__.meta10945;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10944.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10944.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10944.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10944.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10944.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10944.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10944.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10944.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async10944.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta10945","meta10945",775539217,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10944.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10944.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10944";

cljs.core.async.t_cljs$core$async10944.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async10944");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10944.
 */
cljs.core.async.__GT_t_cljs$core$async10944 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async10944(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10945){
return (new cljs.core.async.t_cljs$core$async10944(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10945));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async10944(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10049__auto___11108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10049__auto___11108,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10050__auto__ = (function (){var switch__10032__auto__ = ((function (c__10049__auto___11108,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_11048){
var state_val_11049 = (state_11048[(1)]);
if((state_val_11049 === (7))){
var inst_10963 = (state_11048[(2)]);
var state_11048__$1 = state_11048;
var statearr_11050_11109 = state_11048__$1;
(statearr_11050_11109[(2)] = inst_10963);

(statearr_11050_11109[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (20))){
var inst_10975 = (state_11048[(7)]);
var state_11048__$1 = state_11048;
var statearr_11051_11110 = state_11048__$1;
(statearr_11051_11110[(2)] = inst_10975);

(statearr_11051_11110[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (27))){
var state_11048__$1 = state_11048;
var statearr_11052_11111 = state_11048__$1;
(statearr_11052_11111[(2)] = null);

(statearr_11052_11111[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (1))){
var inst_10950 = (state_11048[(8)]);
var inst_10950__$1 = calc_state.call(null);
var inst_10952 = (inst_10950__$1 == null);
var inst_10953 = cljs.core.not.call(null,inst_10952);
var state_11048__$1 = (function (){var statearr_11053 = state_11048;
(statearr_11053[(8)] = inst_10950__$1);

return statearr_11053;
})();
if(inst_10953){
var statearr_11054_11112 = state_11048__$1;
(statearr_11054_11112[(1)] = (2));

} else {
var statearr_11055_11113 = state_11048__$1;
(statearr_11055_11113[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (24))){
var inst_10999 = (state_11048[(9)]);
var inst_11022 = (state_11048[(10)]);
var inst_11008 = (state_11048[(11)]);
var inst_11022__$1 = inst_10999.call(null,inst_11008);
var state_11048__$1 = (function (){var statearr_11056 = state_11048;
(statearr_11056[(10)] = inst_11022__$1);

return statearr_11056;
})();
if(cljs.core.truth_(inst_11022__$1)){
var statearr_11057_11114 = state_11048__$1;
(statearr_11057_11114[(1)] = (29));

} else {
var statearr_11058_11115 = state_11048__$1;
(statearr_11058_11115[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (4))){
var inst_10966 = (state_11048[(2)]);
var state_11048__$1 = state_11048;
if(cljs.core.truth_(inst_10966)){
var statearr_11059_11116 = state_11048__$1;
(statearr_11059_11116[(1)] = (8));

} else {
var statearr_11060_11117 = state_11048__$1;
(statearr_11060_11117[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (15))){
var inst_10993 = (state_11048[(2)]);
var state_11048__$1 = state_11048;
if(cljs.core.truth_(inst_10993)){
var statearr_11061_11118 = state_11048__$1;
(statearr_11061_11118[(1)] = (19));

} else {
var statearr_11062_11119 = state_11048__$1;
(statearr_11062_11119[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (21))){
var inst_10998 = (state_11048[(12)]);
var inst_10998__$1 = (state_11048[(2)]);
var inst_10999 = cljs.core.get.call(null,inst_10998__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11000 = cljs.core.get.call(null,inst_10998__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11001 = cljs.core.get.call(null,inst_10998__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11048__$1 = (function (){var statearr_11063 = state_11048;
(statearr_11063[(9)] = inst_10999);

(statearr_11063[(12)] = inst_10998__$1);

(statearr_11063[(13)] = inst_11000);

return statearr_11063;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_11048__$1,(22),inst_11001);
} else {
if((state_val_11049 === (31))){
var inst_11030 = (state_11048[(2)]);
var state_11048__$1 = state_11048;
if(cljs.core.truth_(inst_11030)){
var statearr_11064_11120 = state_11048__$1;
(statearr_11064_11120[(1)] = (32));

} else {
var statearr_11065_11121 = state_11048__$1;
(statearr_11065_11121[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (32))){
var inst_11007 = (state_11048[(14)]);
var state_11048__$1 = state_11048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11048__$1,(35),out,inst_11007);
} else {
if((state_val_11049 === (33))){
var inst_10998 = (state_11048[(12)]);
var inst_10975 = inst_10998;
var state_11048__$1 = (function (){var statearr_11066 = state_11048;
(statearr_11066[(7)] = inst_10975);

return statearr_11066;
})();
var statearr_11067_11122 = state_11048__$1;
(statearr_11067_11122[(2)] = null);

(statearr_11067_11122[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (13))){
var inst_10975 = (state_11048[(7)]);
var inst_10982 = inst_10975.cljs$lang$protocol_mask$partition0$;
var inst_10983 = (inst_10982 & (64));
var inst_10984 = inst_10975.cljs$core$ISeq$;
var inst_10985 = (cljs.core.PROTOCOL_SENTINEL === inst_10984);
var inst_10986 = ((inst_10983) || (inst_10985));
var state_11048__$1 = state_11048;
if(cljs.core.truth_(inst_10986)){
var statearr_11068_11123 = state_11048__$1;
(statearr_11068_11123[(1)] = (16));

} else {
var statearr_11069_11124 = state_11048__$1;
(statearr_11069_11124[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (22))){
var inst_11007 = (state_11048[(14)]);
var inst_11008 = (state_11048[(11)]);
var inst_11006 = (state_11048[(2)]);
var inst_11007__$1 = cljs.core.nth.call(null,inst_11006,(0),null);
var inst_11008__$1 = cljs.core.nth.call(null,inst_11006,(1),null);
var inst_11009 = (inst_11007__$1 == null);
var inst_11010 = cljs.core._EQ_.call(null,inst_11008__$1,change);
var inst_11011 = ((inst_11009) || (inst_11010));
var state_11048__$1 = (function (){var statearr_11070 = state_11048;
(statearr_11070[(14)] = inst_11007__$1);

(statearr_11070[(11)] = inst_11008__$1);

return statearr_11070;
})();
if(cljs.core.truth_(inst_11011)){
var statearr_11071_11125 = state_11048__$1;
(statearr_11071_11125[(1)] = (23));

} else {
var statearr_11072_11126 = state_11048__$1;
(statearr_11072_11126[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (36))){
var inst_10998 = (state_11048[(12)]);
var inst_10975 = inst_10998;
var state_11048__$1 = (function (){var statearr_11073 = state_11048;
(statearr_11073[(7)] = inst_10975);

return statearr_11073;
})();
var statearr_11074_11127 = state_11048__$1;
(statearr_11074_11127[(2)] = null);

(statearr_11074_11127[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (29))){
var inst_11022 = (state_11048[(10)]);
var state_11048__$1 = state_11048;
var statearr_11075_11128 = state_11048__$1;
(statearr_11075_11128[(2)] = inst_11022);

(statearr_11075_11128[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (6))){
var state_11048__$1 = state_11048;
var statearr_11076_11129 = state_11048__$1;
(statearr_11076_11129[(2)] = false);

(statearr_11076_11129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (28))){
var inst_11018 = (state_11048[(2)]);
var inst_11019 = calc_state.call(null);
var inst_10975 = inst_11019;
var state_11048__$1 = (function (){var statearr_11077 = state_11048;
(statearr_11077[(15)] = inst_11018);

(statearr_11077[(7)] = inst_10975);

return statearr_11077;
})();
var statearr_11078_11130 = state_11048__$1;
(statearr_11078_11130[(2)] = null);

(statearr_11078_11130[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (25))){
var inst_11044 = (state_11048[(2)]);
var state_11048__$1 = state_11048;
var statearr_11079_11131 = state_11048__$1;
(statearr_11079_11131[(2)] = inst_11044);

(statearr_11079_11131[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (34))){
var inst_11042 = (state_11048[(2)]);
var state_11048__$1 = state_11048;
var statearr_11080_11132 = state_11048__$1;
(statearr_11080_11132[(2)] = inst_11042);

(statearr_11080_11132[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (17))){
var state_11048__$1 = state_11048;
var statearr_11081_11133 = state_11048__$1;
(statearr_11081_11133[(2)] = false);

(statearr_11081_11133[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (3))){
var state_11048__$1 = state_11048;
var statearr_11082_11134 = state_11048__$1;
(statearr_11082_11134[(2)] = false);

(statearr_11082_11134[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (12))){
var inst_11046 = (state_11048[(2)]);
var state_11048__$1 = state_11048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11048__$1,inst_11046);
} else {
if((state_val_11049 === (2))){
var inst_10950 = (state_11048[(8)]);
var inst_10955 = inst_10950.cljs$lang$protocol_mask$partition0$;
var inst_10956 = (inst_10955 & (64));
var inst_10957 = inst_10950.cljs$core$ISeq$;
var inst_10958 = (cljs.core.PROTOCOL_SENTINEL === inst_10957);
var inst_10959 = ((inst_10956) || (inst_10958));
var state_11048__$1 = state_11048;
if(cljs.core.truth_(inst_10959)){
var statearr_11083_11135 = state_11048__$1;
(statearr_11083_11135[(1)] = (5));

} else {
var statearr_11084_11136 = state_11048__$1;
(statearr_11084_11136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (23))){
var inst_11007 = (state_11048[(14)]);
var inst_11013 = (inst_11007 == null);
var state_11048__$1 = state_11048;
if(cljs.core.truth_(inst_11013)){
var statearr_11085_11137 = state_11048__$1;
(statearr_11085_11137[(1)] = (26));

} else {
var statearr_11086_11138 = state_11048__$1;
(statearr_11086_11138[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (35))){
var inst_11033 = (state_11048[(2)]);
var state_11048__$1 = state_11048;
if(cljs.core.truth_(inst_11033)){
var statearr_11087_11139 = state_11048__$1;
(statearr_11087_11139[(1)] = (36));

} else {
var statearr_11088_11140 = state_11048__$1;
(statearr_11088_11140[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (19))){
var inst_10975 = (state_11048[(7)]);
var inst_10995 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10975);
var state_11048__$1 = state_11048;
var statearr_11089_11141 = state_11048__$1;
(statearr_11089_11141[(2)] = inst_10995);

(statearr_11089_11141[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (11))){
var inst_10975 = (state_11048[(7)]);
var inst_10979 = (inst_10975 == null);
var inst_10980 = cljs.core.not.call(null,inst_10979);
var state_11048__$1 = state_11048;
if(inst_10980){
var statearr_11090_11142 = state_11048__$1;
(statearr_11090_11142[(1)] = (13));

} else {
var statearr_11091_11143 = state_11048__$1;
(statearr_11091_11143[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (9))){
var inst_10950 = (state_11048[(8)]);
var state_11048__$1 = state_11048;
var statearr_11092_11144 = state_11048__$1;
(statearr_11092_11144[(2)] = inst_10950);

(statearr_11092_11144[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (5))){
var state_11048__$1 = state_11048;
var statearr_11093_11145 = state_11048__$1;
(statearr_11093_11145[(2)] = true);

(statearr_11093_11145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (14))){
var state_11048__$1 = state_11048;
var statearr_11094_11146 = state_11048__$1;
(statearr_11094_11146[(2)] = false);

(statearr_11094_11146[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (26))){
var inst_11008 = (state_11048[(11)]);
var inst_11015 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11008);
var state_11048__$1 = state_11048;
var statearr_11095_11147 = state_11048__$1;
(statearr_11095_11147[(2)] = inst_11015);

(statearr_11095_11147[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (16))){
var state_11048__$1 = state_11048;
var statearr_11096_11148 = state_11048__$1;
(statearr_11096_11148[(2)] = true);

(statearr_11096_11148[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (38))){
var inst_11038 = (state_11048[(2)]);
var state_11048__$1 = state_11048;
var statearr_11097_11149 = state_11048__$1;
(statearr_11097_11149[(2)] = inst_11038);

(statearr_11097_11149[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (30))){
var inst_10999 = (state_11048[(9)]);
var inst_11000 = (state_11048[(13)]);
var inst_11008 = (state_11048[(11)]);
var inst_11025 = cljs.core.empty_QMARK_.call(null,inst_10999);
var inst_11026 = inst_11000.call(null,inst_11008);
var inst_11027 = cljs.core.not.call(null,inst_11026);
var inst_11028 = ((inst_11025) && (inst_11027));
var state_11048__$1 = state_11048;
var statearr_11098_11150 = state_11048__$1;
(statearr_11098_11150[(2)] = inst_11028);

(statearr_11098_11150[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (10))){
var inst_10950 = (state_11048[(8)]);
var inst_10971 = (state_11048[(2)]);
var inst_10972 = cljs.core.get.call(null,inst_10971,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10973 = cljs.core.get.call(null,inst_10971,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10974 = cljs.core.get.call(null,inst_10971,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_10975 = inst_10950;
var state_11048__$1 = (function (){var statearr_11099 = state_11048;
(statearr_11099[(16)] = inst_10973);

(statearr_11099[(17)] = inst_10972);

(statearr_11099[(18)] = inst_10974);

(statearr_11099[(7)] = inst_10975);

return statearr_11099;
})();
var statearr_11100_11151 = state_11048__$1;
(statearr_11100_11151[(2)] = null);

(statearr_11100_11151[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (18))){
var inst_10990 = (state_11048[(2)]);
var state_11048__$1 = state_11048;
var statearr_11101_11152 = state_11048__$1;
(statearr_11101_11152[(2)] = inst_10990);

(statearr_11101_11152[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (37))){
var state_11048__$1 = state_11048;
var statearr_11102_11153 = state_11048__$1;
(statearr_11102_11153[(2)] = null);

(statearr_11102_11153[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (8))){
var inst_10950 = (state_11048[(8)]);
var inst_10968 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10950);
var state_11048__$1 = state_11048;
var statearr_11103_11154 = state_11048__$1;
(statearr_11103_11154[(2)] = inst_10968);

(statearr_11103_11154[(1)] = (10));


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
});})(c__10049__auto___11108,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10032__auto__,c__10049__auto___11108,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10033__auto__ = null;
var cljs$core$async$mix_$_state_machine__10033__auto____0 = (function (){
var statearr_11104 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11104[(0)] = cljs$core$async$mix_$_state_machine__10033__auto__);

(statearr_11104[(1)] = (1));

return statearr_11104;
});
var cljs$core$async$mix_$_state_machine__10033__auto____1 = (function (state_11048){
while(true){
var ret_value__10034__auto__ = (function (){try{while(true){
var result__10035__auto__ = switch__10032__auto__.call(null,state_11048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10035__auto__;
}
break;
}
}catch (e11105){if((e11105 instanceof Object)){
var ex__10036__auto__ = e11105;
var statearr_11106_11155 = state_11048;
(statearr_11106_11155[(5)] = ex__10036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11156 = state_11048;
state_11048 = G__11156;
continue;
} else {
return ret_value__10034__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10033__auto__ = function(state_11048){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10033__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10033__auto____1.call(this,state_11048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10033__auto____0;
cljs$core$async$mix_$_state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10033__auto____1;
return cljs$core$async$mix_$_state_machine__10033__auto__;
})()
;})(switch__10032__auto__,c__10049__auto___11108,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10051__auto__ = (function (){var statearr_11107 = f__10050__auto__.call(null);
(statearr_11107[(6)] = c__10049__auto___11108);

return statearr_11107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10051__auto__);
});})(c__10049__auto___11108,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__11158 = arguments.length;
switch (G__11158) {
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
var G__11162 = arguments.length;
switch (G__11162) {
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
return (function (p1__11160_SHARP_){
if(cljs.core.truth_(p1__11160_SHARP_.call(null,topic))){
return p1__11160_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__11160_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11163 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11163 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11164){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11164 = meta11164;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11165,meta11164__$1){
var self__ = this;
var _11165__$1 = this;
return (new cljs.core.async.t_cljs$core$async11163(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11164__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11163.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11165){
var self__ = this;
var _11165__$1 = this;
return self__.meta11164;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11163.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11163.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11163.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11163.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11163.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async11163.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11163.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11163.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11164","meta11164",-692774102,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11163.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11163.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11163";

cljs.core.async.t_cljs$core$async11163.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async11163");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11163.
 */
cljs.core.async.__GT_t_cljs$core$async11163 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async11163(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11164){
return (new cljs.core.async.t_cljs$core$async11163(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11164));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async11163(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10049__auto___11283 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10049__auto___11283,mults,ensure_mult,p){
return (function (){
var f__10050__auto__ = (function (){var switch__10032__auto__ = ((function (c__10049__auto___11283,mults,ensure_mult,p){
return (function (state_11237){
var state_val_11238 = (state_11237[(1)]);
if((state_val_11238 === (7))){
var inst_11233 = (state_11237[(2)]);
var state_11237__$1 = state_11237;
var statearr_11239_11284 = state_11237__$1;
(statearr_11239_11284[(2)] = inst_11233);

(statearr_11239_11284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11238 === (20))){
var state_11237__$1 = state_11237;
var statearr_11240_11285 = state_11237__$1;
(statearr_11240_11285[(2)] = null);

(statearr_11240_11285[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11238 === (1))){
var state_11237__$1 = state_11237;
var statearr_11241_11286 = state_11237__$1;
(statearr_11241_11286[(2)] = null);

(statearr_11241_11286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11238 === (24))){
var inst_11216 = (state_11237[(7)]);
var inst_11225 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11216);
var state_11237__$1 = state_11237;
var statearr_11242_11287 = state_11237__$1;
(statearr_11242_11287[(2)] = inst_11225);

(statearr_11242_11287[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11238 === (4))){
var inst_11168 = (state_11237[(8)]);
var inst_11168__$1 = (state_11237[(2)]);
var inst_11169 = (inst_11168__$1 == null);
var state_11237__$1 = (function (){var statearr_11243 = state_11237;
(statearr_11243[(8)] = inst_11168__$1);

return statearr_11243;
})();
if(cljs.core.truth_(inst_11169)){
var statearr_11244_11288 = state_11237__$1;
(statearr_11244_11288[(1)] = (5));

} else {
var statearr_11245_11289 = state_11237__$1;
(statearr_11245_11289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11238 === (15))){
var inst_11210 = (state_11237[(2)]);
var state_11237__$1 = state_11237;
var statearr_11246_11290 = state_11237__$1;
(statearr_11246_11290[(2)] = inst_11210);

(statearr_11246_11290[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11238 === (21))){
var inst_11230 = (state_11237[(2)]);
var state_11237__$1 = (function (){var statearr_11247 = state_11237;
(statearr_11247[(9)] = inst_11230);

return statearr_11247;
})();
var statearr_11248_11291 = state_11237__$1;
(statearr_11248_11291[(2)] = null);

(statearr_11248_11291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11238 === (13))){
var inst_11192 = (state_11237[(10)]);
var inst_11194 = cljs.core.chunked_seq_QMARK_.call(null,inst_11192);
var state_11237__$1 = state_11237;
if(inst_11194){
var statearr_11249_11292 = state_11237__$1;
(statearr_11249_11292[(1)] = (16));

} else {
var statearr_11250_11293 = state_11237__$1;
(statearr_11250_11293[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11238 === (22))){
var inst_11222 = (state_11237[(2)]);
var state_11237__$1 = state_11237;
if(cljs.core.truth_(inst_11222)){
var statearr_11251_11294 = state_11237__$1;
(statearr_11251_11294[(1)] = (23));

} else {
var statearr_11252_11295 = state_11237__$1;
(statearr_11252_11295[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11238 === (6))){
var inst_11218 = (state_11237[(11)]);
var inst_11168 = (state_11237[(8)]);
var inst_11216 = (state_11237[(7)]);
var inst_11216__$1 = topic_fn.call(null,inst_11168);
var inst_11217 = cljs.core.deref.call(null,mults);
var inst_11218__$1 = cljs.core.get.call(null,inst_11217,inst_11216__$1);
var state_11237__$1 = (function (){var statearr_11253 = state_11237;
(statearr_11253[(11)] = inst_11218__$1);

(statearr_11253[(7)] = inst_11216__$1);

return statearr_11253;
})();
if(cljs.core.truth_(inst_11218__$1)){
var statearr_11254_11296 = state_11237__$1;
(statearr_11254_11296[(1)] = (19));

} else {
var statearr_11255_11297 = state_11237__$1;
(statearr_11255_11297[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11238 === (25))){
var inst_11227 = (state_11237[(2)]);
var state_11237__$1 = state_11237;
var statearr_11256_11298 = state_11237__$1;
(statearr_11256_11298[(2)] = inst_11227);

(statearr_11256_11298[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11238 === (17))){
var inst_11192 = (state_11237[(10)]);
var inst_11201 = cljs.core.first.call(null,inst_11192);
var inst_11202 = cljs.core.async.muxch_STAR_.call(null,inst_11201);
var inst_11203 = cljs.core.async.close_BANG_.call(null,inst_11202);
var inst_11204 = cljs.core.next.call(null,inst_11192);
var inst_11178 = inst_11204;
var inst_11179 = null;
var inst_11180 = (0);
var inst_11181 = (0);
var state_11237__$1 = (function (){var statearr_11257 = state_11237;
(statearr_11257[(12)] = inst_11178);

(statearr_11257[(13)] = inst_11203);

(statearr_11257[(14)] = inst_11179);

(statearr_11257[(15)] = inst_11180);

(statearr_11257[(16)] = inst_11181);

return statearr_11257;
})();
var statearr_11258_11299 = state_11237__$1;
(statearr_11258_11299[(2)] = null);

(statearr_11258_11299[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11238 === (3))){
var inst_11235 = (state_11237[(2)]);
var state_11237__$1 = state_11237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11237__$1,inst_11235);
} else {
if((state_val_11238 === (12))){
var inst_11212 = (state_11237[(2)]);
var state_11237__$1 = state_11237;
var statearr_11259_11300 = state_11237__$1;
(statearr_11259_11300[(2)] = inst_11212);

(statearr_11259_11300[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11238 === (2))){
var state_11237__$1 = state_11237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11237__$1,(4),ch);
} else {
if((state_val_11238 === (23))){
var state_11237__$1 = state_11237;
var statearr_11260_11301 = state_11237__$1;
(statearr_11260_11301[(2)] = null);

(statearr_11260_11301[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11238 === (19))){
var inst_11218 = (state_11237[(11)]);
var inst_11168 = (state_11237[(8)]);
var inst_11220 = cljs.core.async.muxch_STAR_.call(null,inst_11218);
var state_11237__$1 = state_11237;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11237__$1,(22),inst_11220,inst_11168);
} else {
if((state_val_11238 === (11))){
var inst_11178 = (state_11237[(12)]);
var inst_11192 = (state_11237[(10)]);
var inst_11192__$1 = cljs.core.seq.call(null,inst_11178);
var state_11237__$1 = (function (){var statearr_11261 = state_11237;
(statearr_11261[(10)] = inst_11192__$1);

return statearr_11261;
})();
if(inst_11192__$1){
var statearr_11262_11302 = state_11237__$1;
(statearr_11262_11302[(1)] = (13));

} else {
var statearr_11263_11303 = state_11237__$1;
(statearr_11263_11303[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11238 === (9))){
var inst_11214 = (state_11237[(2)]);
var state_11237__$1 = state_11237;
var statearr_11264_11304 = state_11237__$1;
(statearr_11264_11304[(2)] = inst_11214);

(statearr_11264_11304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11238 === (5))){
var inst_11175 = cljs.core.deref.call(null,mults);
var inst_11176 = cljs.core.vals.call(null,inst_11175);
var inst_11177 = cljs.core.seq.call(null,inst_11176);
var inst_11178 = inst_11177;
var inst_11179 = null;
var inst_11180 = (0);
var inst_11181 = (0);
var state_11237__$1 = (function (){var statearr_11265 = state_11237;
(statearr_11265[(12)] = inst_11178);

(statearr_11265[(14)] = inst_11179);

(statearr_11265[(15)] = inst_11180);

(statearr_11265[(16)] = inst_11181);

return statearr_11265;
})();
var statearr_11266_11305 = state_11237__$1;
(statearr_11266_11305[(2)] = null);

(statearr_11266_11305[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11238 === (14))){
var state_11237__$1 = state_11237;
var statearr_11270_11306 = state_11237__$1;
(statearr_11270_11306[(2)] = null);

(statearr_11270_11306[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11238 === (16))){
var inst_11192 = (state_11237[(10)]);
var inst_11196 = cljs.core.chunk_first.call(null,inst_11192);
var inst_11197 = cljs.core.chunk_rest.call(null,inst_11192);
var inst_11198 = cljs.core.count.call(null,inst_11196);
var inst_11178 = inst_11197;
var inst_11179 = inst_11196;
var inst_11180 = inst_11198;
var inst_11181 = (0);
var state_11237__$1 = (function (){var statearr_11271 = state_11237;
(statearr_11271[(12)] = inst_11178);

(statearr_11271[(14)] = inst_11179);

(statearr_11271[(15)] = inst_11180);

(statearr_11271[(16)] = inst_11181);

return statearr_11271;
})();
var statearr_11272_11307 = state_11237__$1;
(statearr_11272_11307[(2)] = null);

(statearr_11272_11307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11238 === (10))){
var inst_11178 = (state_11237[(12)]);
var inst_11179 = (state_11237[(14)]);
var inst_11180 = (state_11237[(15)]);
var inst_11181 = (state_11237[(16)]);
var inst_11186 = cljs.core._nth.call(null,inst_11179,inst_11181);
var inst_11187 = cljs.core.async.muxch_STAR_.call(null,inst_11186);
var inst_11188 = cljs.core.async.close_BANG_.call(null,inst_11187);
var inst_11189 = (inst_11181 + (1));
var tmp11267 = inst_11178;
var tmp11268 = inst_11179;
var tmp11269 = inst_11180;
var inst_11178__$1 = tmp11267;
var inst_11179__$1 = tmp11268;
var inst_11180__$1 = tmp11269;
var inst_11181__$1 = inst_11189;
var state_11237__$1 = (function (){var statearr_11273 = state_11237;
(statearr_11273[(17)] = inst_11188);

(statearr_11273[(12)] = inst_11178__$1);

(statearr_11273[(14)] = inst_11179__$1);

(statearr_11273[(15)] = inst_11180__$1);

(statearr_11273[(16)] = inst_11181__$1);

return statearr_11273;
})();
var statearr_11274_11308 = state_11237__$1;
(statearr_11274_11308[(2)] = null);

(statearr_11274_11308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11238 === (18))){
var inst_11207 = (state_11237[(2)]);
var state_11237__$1 = state_11237;
var statearr_11275_11309 = state_11237__$1;
(statearr_11275_11309[(2)] = inst_11207);

(statearr_11275_11309[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11238 === (8))){
var inst_11180 = (state_11237[(15)]);
var inst_11181 = (state_11237[(16)]);
var inst_11183 = (inst_11181 < inst_11180);
var inst_11184 = inst_11183;
var state_11237__$1 = state_11237;
if(cljs.core.truth_(inst_11184)){
var statearr_11276_11310 = state_11237__$1;
(statearr_11276_11310[(1)] = (10));

} else {
var statearr_11277_11311 = state_11237__$1;
(statearr_11277_11311[(1)] = (11));

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
});})(c__10049__auto___11283,mults,ensure_mult,p))
;
return ((function (switch__10032__auto__,c__10049__auto___11283,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10033__auto__ = null;
var cljs$core$async$state_machine__10033__auto____0 = (function (){
var statearr_11278 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11278[(0)] = cljs$core$async$state_machine__10033__auto__);

(statearr_11278[(1)] = (1));

return statearr_11278;
});
var cljs$core$async$state_machine__10033__auto____1 = (function (state_11237){
while(true){
var ret_value__10034__auto__ = (function (){try{while(true){
var result__10035__auto__ = switch__10032__auto__.call(null,state_11237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10035__auto__;
}
break;
}
}catch (e11279){if((e11279 instanceof Object)){
var ex__10036__auto__ = e11279;
var statearr_11280_11312 = state_11237;
(statearr_11280_11312[(5)] = ex__10036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11313 = state_11237;
state_11237 = G__11313;
continue;
} else {
return ret_value__10034__auto__;
}
break;
}
});
cljs$core$async$state_machine__10033__auto__ = function(state_11237){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10033__auto____1.call(this,state_11237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10033__auto____0;
cljs$core$async$state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10033__auto____1;
return cljs$core$async$state_machine__10033__auto__;
})()
;})(switch__10032__auto__,c__10049__auto___11283,mults,ensure_mult,p))
})();
var state__10051__auto__ = (function (){var statearr_11281 = f__10050__auto__.call(null);
(statearr_11281[(6)] = c__10049__auto___11283);

return statearr_11281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10051__auto__);
});})(c__10049__auto___11283,mults,ensure_mult,p))
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
var G__11315 = arguments.length;
switch (G__11315) {
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
var G__11318 = arguments.length;
switch (G__11318) {
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
var G__11321 = arguments.length;
switch (G__11321) {
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
var c__10049__auto___11388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10049__auto___11388,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10050__auto__ = (function (){var switch__10032__auto__ = ((function (c__10049__auto___11388,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11360){
var state_val_11361 = (state_11360[(1)]);
if((state_val_11361 === (7))){
var state_11360__$1 = state_11360;
var statearr_11362_11389 = state_11360__$1;
(statearr_11362_11389[(2)] = null);

(statearr_11362_11389[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11361 === (1))){
var state_11360__$1 = state_11360;
var statearr_11363_11390 = state_11360__$1;
(statearr_11363_11390[(2)] = null);

(statearr_11363_11390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11361 === (4))){
var inst_11324 = (state_11360[(7)]);
var inst_11326 = (inst_11324 < cnt);
var state_11360__$1 = state_11360;
if(cljs.core.truth_(inst_11326)){
var statearr_11364_11391 = state_11360__$1;
(statearr_11364_11391[(1)] = (6));

} else {
var statearr_11365_11392 = state_11360__$1;
(statearr_11365_11392[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11361 === (15))){
var inst_11356 = (state_11360[(2)]);
var state_11360__$1 = state_11360;
var statearr_11366_11393 = state_11360__$1;
(statearr_11366_11393[(2)] = inst_11356);

(statearr_11366_11393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11361 === (13))){
var inst_11349 = cljs.core.async.close_BANG_.call(null,out);
var state_11360__$1 = state_11360;
var statearr_11367_11394 = state_11360__$1;
(statearr_11367_11394[(2)] = inst_11349);

(statearr_11367_11394[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11361 === (6))){
var state_11360__$1 = state_11360;
var statearr_11368_11395 = state_11360__$1;
(statearr_11368_11395[(2)] = null);

(statearr_11368_11395[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11361 === (3))){
var inst_11358 = (state_11360[(2)]);
var state_11360__$1 = state_11360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11360__$1,inst_11358);
} else {
if((state_val_11361 === (12))){
var inst_11346 = (state_11360[(8)]);
var inst_11346__$1 = (state_11360[(2)]);
var inst_11347 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11346__$1);
var state_11360__$1 = (function (){var statearr_11369 = state_11360;
(statearr_11369[(8)] = inst_11346__$1);

return statearr_11369;
})();
if(cljs.core.truth_(inst_11347)){
var statearr_11370_11396 = state_11360__$1;
(statearr_11370_11396[(1)] = (13));

} else {
var statearr_11371_11397 = state_11360__$1;
(statearr_11371_11397[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11361 === (2))){
var inst_11323 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_11324 = (0);
var state_11360__$1 = (function (){var statearr_11372 = state_11360;
(statearr_11372[(9)] = inst_11323);

(statearr_11372[(7)] = inst_11324);

return statearr_11372;
})();
var statearr_11373_11398 = state_11360__$1;
(statearr_11373_11398[(2)] = null);

(statearr_11373_11398[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11361 === (11))){
var inst_11324 = (state_11360[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11360,(10),Object,null,(9));
var inst_11333 = chs__$1.call(null,inst_11324);
var inst_11334 = done.call(null,inst_11324);
var inst_11335 = cljs.core.async.take_BANG_.call(null,inst_11333,inst_11334);
var state_11360__$1 = state_11360;
var statearr_11374_11399 = state_11360__$1;
(statearr_11374_11399[(2)] = inst_11335);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11360__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11361 === (9))){
var inst_11324 = (state_11360[(7)]);
var inst_11337 = (state_11360[(2)]);
var inst_11338 = (inst_11324 + (1));
var inst_11324__$1 = inst_11338;
var state_11360__$1 = (function (){var statearr_11375 = state_11360;
(statearr_11375[(10)] = inst_11337);

(statearr_11375[(7)] = inst_11324__$1);

return statearr_11375;
})();
var statearr_11376_11400 = state_11360__$1;
(statearr_11376_11400[(2)] = null);

(statearr_11376_11400[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11361 === (5))){
var inst_11344 = (state_11360[(2)]);
var state_11360__$1 = (function (){var statearr_11377 = state_11360;
(statearr_11377[(11)] = inst_11344);

return statearr_11377;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11360__$1,(12),dchan);
} else {
if((state_val_11361 === (14))){
var inst_11346 = (state_11360[(8)]);
var inst_11351 = cljs.core.apply.call(null,f,inst_11346);
var state_11360__$1 = state_11360;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11360__$1,(16),out,inst_11351);
} else {
if((state_val_11361 === (16))){
var inst_11353 = (state_11360[(2)]);
var state_11360__$1 = (function (){var statearr_11378 = state_11360;
(statearr_11378[(12)] = inst_11353);

return statearr_11378;
})();
var statearr_11379_11401 = state_11360__$1;
(statearr_11379_11401[(2)] = null);

(statearr_11379_11401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11361 === (10))){
var inst_11328 = (state_11360[(2)]);
var inst_11329 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_11360__$1 = (function (){var statearr_11380 = state_11360;
(statearr_11380[(13)] = inst_11328);

return statearr_11380;
})();
var statearr_11381_11402 = state_11360__$1;
(statearr_11381_11402[(2)] = inst_11329);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11360__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11361 === (8))){
var inst_11342 = (state_11360[(2)]);
var state_11360__$1 = state_11360;
var statearr_11382_11403 = state_11360__$1;
(statearr_11382_11403[(2)] = inst_11342);

(statearr_11382_11403[(1)] = (5));


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
});})(c__10049__auto___11388,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10032__auto__,c__10049__auto___11388,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10033__auto__ = null;
var cljs$core$async$state_machine__10033__auto____0 = (function (){
var statearr_11383 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11383[(0)] = cljs$core$async$state_machine__10033__auto__);

(statearr_11383[(1)] = (1));

return statearr_11383;
});
var cljs$core$async$state_machine__10033__auto____1 = (function (state_11360){
while(true){
var ret_value__10034__auto__ = (function (){try{while(true){
var result__10035__auto__ = switch__10032__auto__.call(null,state_11360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10035__auto__;
}
break;
}
}catch (e11384){if((e11384 instanceof Object)){
var ex__10036__auto__ = e11384;
var statearr_11385_11404 = state_11360;
(statearr_11385_11404[(5)] = ex__10036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11405 = state_11360;
state_11360 = G__11405;
continue;
} else {
return ret_value__10034__auto__;
}
break;
}
});
cljs$core$async$state_machine__10033__auto__ = function(state_11360){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10033__auto____1.call(this,state_11360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10033__auto____0;
cljs$core$async$state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10033__auto____1;
return cljs$core$async$state_machine__10033__auto__;
})()
;})(switch__10032__auto__,c__10049__auto___11388,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10051__auto__ = (function (){var statearr_11386 = f__10050__auto__.call(null);
(statearr_11386[(6)] = c__10049__auto___11388);

return statearr_11386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10051__auto__);
});})(c__10049__auto___11388,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__11408 = arguments.length;
switch (G__11408) {
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
var c__10049__auto___11462 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10049__auto___11462,out){
return (function (){
var f__10050__auto__ = (function (){var switch__10032__auto__ = ((function (c__10049__auto___11462,out){
return (function (state_11440){
var state_val_11441 = (state_11440[(1)]);
if((state_val_11441 === (7))){
var inst_11419 = (state_11440[(7)]);
var inst_11420 = (state_11440[(8)]);
var inst_11419__$1 = (state_11440[(2)]);
var inst_11420__$1 = cljs.core.nth.call(null,inst_11419__$1,(0),null);
var inst_11421 = cljs.core.nth.call(null,inst_11419__$1,(1),null);
var inst_11422 = (inst_11420__$1 == null);
var state_11440__$1 = (function (){var statearr_11442 = state_11440;
(statearr_11442[(7)] = inst_11419__$1);

(statearr_11442[(8)] = inst_11420__$1);

(statearr_11442[(9)] = inst_11421);

return statearr_11442;
})();
if(cljs.core.truth_(inst_11422)){
var statearr_11443_11463 = state_11440__$1;
(statearr_11443_11463[(1)] = (8));

} else {
var statearr_11444_11464 = state_11440__$1;
(statearr_11444_11464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11441 === (1))){
var inst_11409 = cljs.core.vec.call(null,chs);
var inst_11410 = inst_11409;
var state_11440__$1 = (function (){var statearr_11445 = state_11440;
(statearr_11445[(10)] = inst_11410);

return statearr_11445;
})();
var statearr_11446_11465 = state_11440__$1;
(statearr_11446_11465[(2)] = null);

(statearr_11446_11465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11441 === (4))){
var inst_11410 = (state_11440[(10)]);
var state_11440__$1 = state_11440;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11440__$1,(7),inst_11410);
} else {
if((state_val_11441 === (6))){
var inst_11436 = (state_11440[(2)]);
var state_11440__$1 = state_11440;
var statearr_11447_11466 = state_11440__$1;
(statearr_11447_11466[(2)] = inst_11436);

(statearr_11447_11466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11441 === (3))){
var inst_11438 = (state_11440[(2)]);
var state_11440__$1 = state_11440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11440__$1,inst_11438);
} else {
if((state_val_11441 === (2))){
var inst_11410 = (state_11440[(10)]);
var inst_11412 = cljs.core.count.call(null,inst_11410);
var inst_11413 = (inst_11412 > (0));
var state_11440__$1 = state_11440;
if(cljs.core.truth_(inst_11413)){
var statearr_11449_11467 = state_11440__$1;
(statearr_11449_11467[(1)] = (4));

} else {
var statearr_11450_11468 = state_11440__$1;
(statearr_11450_11468[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11441 === (11))){
var inst_11410 = (state_11440[(10)]);
var inst_11429 = (state_11440[(2)]);
var tmp11448 = inst_11410;
var inst_11410__$1 = tmp11448;
var state_11440__$1 = (function (){var statearr_11451 = state_11440;
(statearr_11451[(10)] = inst_11410__$1);

(statearr_11451[(11)] = inst_11429);

return statearr_11451;
})();
var statearr_11452_11469 = state_11440__$1;
(statearr_11452_11469[(2)] = null);

(statearr_11452_11469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11441 === (9))){
var inst_11420 = (state_11440[(8)]);
var state_11440__$1 = state_11440;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11440__$1,(11),out,inst_11420);
} else {
if((state_val_11441 === (5))){
var inst_11434 = cljs.core.async.close_BANG_.call(null,out);
var state_11440__$1 = state_11440;
var statearr_11453_11470 = state_11440__$1;
(statearr_11453_11470[(2)] = inst_11434);

(statearr_11453_11470[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11441 === (10))){
var inst_11432 = (state_11440[(2)]);
var state_11440__$1 = state_11440;
var statearr_11454_11471 = state_11440__$1;
(statearr_11454_11471[(2)] = inst_11432);

(statearr_11454_11471[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11441 === (8))){
var inst_11419 = (state_11440[(7)]);
var inst_11410 = (state_11440[(10)]);
var inst_11420 = (state_11440[(8)]);
var inst_11421 = (state_11440[(9)]);
var inst_11424 = (function (){var cs = inst_11410;
var vec__11415 = inst_11419;
var v = inst_11420;
var c = inst_11421;
return ((function (cs,vec__11415,v,c,inst_11419,inst_11410,inst_11420,inst_11421,state_val_11441,c__10049__auto___11462,out){
return (function (p1__11406_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__11406_SHARP_);
});
;})(cs,vec__11415,v,c,inst_11419,inst_11410,inst_11420,inst_11421,state_val_11441,c__10049__auto___11462,out))
})();
var inst_11425 = cljs.core.filterv.call(null,inst_11424,inst_11410);
var inst_11410__$1 = inst_11425;
var state_11440__$1 = (function (){var statearr_11455 = state_11440;
(statearr_11455[(10)] = inst_11410__$1);

return statearr_11455;
})();
var statearr_11456_11472 = state_11440__$1;
(statearr_11456_11472[(2)] = null);

(statearr_11456_11472[(1)] = (2));


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
});})(c__10049__auto___11462,out))
;
return ((function (switch__10032__auto__,c__10049__auto___11462,out){
return (function() {
var cljs$core$async$state_machine__10033__auto__ = null;
var cljs$core$async$state_machine__10033__auto____0 = (function (){
var statearr_11457 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11457[(0)] = cljs$core$async$state_machine__10033__auto__);

(statearr_11457[(1)] = (1));

return statearr_11457;
});
var cljs$core$async$state_machine__10033__auto____1 = (function (state_11440){
while(true){
var ret_value__10034__auto__ = (function (){try{while(true){
var result__10035__auto__ = switch__10032__auto__.call(null,state_11440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10035__auto__;
}
break;
}
}catch (e11458){if((e11458 instanceof Object)){
var ex__10036__auto__ = e11458;
var statearr_11459_11473 = state_11440;
(statearr_11459_11473[(5)] = ex__10036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11474 = state_11440;
state_11440 = G__11474;
continue;
} else {
return ret_value__10034__auto__;
}
break;
}
});
cljs$core$async$state_machine__10033__auto__ = function(state_11440){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10033__auto____1.call(this,state_11440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10033__auto____0;
cljs$core$async$state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10033__auto____1;
return cljs$core$async$state_machine__10033__auto__;
})()
;})(switch__10032__auto__,c__10049__auto___11462,out))
})();
var state__10051__auto__ = (function (){var statearr_11460 = f__10050__auto__.call(null);
(statearr_11460[(6)] = c__10049__auto___11462);

return statearr_11460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10051__auto__);
});})(c__10049__auto___11462,out))
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
var G__11476 = arguments.length;
switch (G__11476) {
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
var c__10049__auto___11521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10049__auto___11521,out){
return (function (){
var f__10050__auto__ = (function (){var switch__10032__auto__ = ((function (c__10049__auto___11521,out){
return (function (state_11500){
var state_val_11501 = (state_11500[(1)]);
if((state_val_11501 === (7))){
var inst_11482 = (state_11500[(7)]);
var inst_11482__$1 = (state_11500[(2)]);
var inst_11483 = (inst_11482__$1 == null);
var inst_11484 = cljs.core.not.call(null,inst_11483);
var state_11500__$1 = (function (){var statearr_11502 = state_11500;
(statearr_11502[(7)] = inst_11482__$1);

return statearr_11502;
})();
if(inst_11484){
var statearr_11503_11522 = state_11500__$1;
(statearr_11503_11522[(1)] = (8));

} else {
var statearr_11504_11523 = state_11500__$1;
(statearr_11504_11523[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11501 === (1))){
var inst_11477 = (0);
var state_11500__$1 = (function (){var statearr_11505 = state_11500;
(statearr_11505[(8)] = inst_11477);

return statearr_11505;
})();
var statearr_11506_11524 = state_11500__$1;
(statearr_11506_11524[(2)] = null);

(statearr_11506_11524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11501 === (4))){
var state_11500__$1 = state_11500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11500__$1,(7),ch);
} else {
if((state_val_11501 === (6))){
var inst_11495 = (state_11500[(2)]);
var state_11500__$1 = state_11500;
var statearr_11507_11525 = state_11500__$1;
(statearr_11507_11525[(2)] = inst_11495);

(statearr_11507_11525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11501 === (3))){
var inst_11497 = (state_11500[(2)]);
var inst_11498 = cljs.core.async.close_BANG_.call(null,out);
var state_11500__$1 = (function (){var statearr_11508 = state_11500;
(statearr_11508[(9)] = inst_11497);

return statearr_11508;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11500__$1,inst_11498);
} else {
if((state_val_11501 === (2))){
var inst_11477 = (state_11500[(8)]);
var inst_11479 = (inst_11477 < n);
var state_11500__$1 = state_11500;
if(cljs.core.truth_(inst_11479)){
var statearr_11509_11526 = state_11500__$1;
(statearr_11509_11526[(1)] = (4));

} else {
var statearr_11510_11527 = state_11500__$1;
(statearr_11510_11527[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11501 === (11))){
var inst_11477 = (state_11500[(8)]);
var inst_11487 = (state_11500[(2)]);
var inst_11488 = (inst_11477 + (1));
var inst_11477__$1 = inst_11488;
var state_11500__$1 = (function (){var statearr_11511 = state_11500;
(statearr_11511[(10)] = inst_11487);

(statearr_11511[(8)] = inst_11477__$1);

return statearr_11511;
})();
var statearr_11512_11528 = state_11500__$1;
(statearr_11512_11528[(2)] = null);

(statearr_11512_11528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11501 === (9))){
var state_11500__$1 = state_11500;
var statearr_11513_11529 = state_11500__$1;
(statearr_11513_11529[(2)] = null);

(statearr_11513_11529[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11501 === (5))){
var state_11500__$1 = state_11500;
var statearr_11514_11530 = state_11500__$1;
(statearr_11514_11530[(2)] = null);

(statearr_11514_11530[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11501 === (10))){
var inst_11492 = (state_11500[(2)]);
var state_11500__$1 = state_11500;
var statearr_11515_11531 = state_11500__$1;
(statearr_11515_11531[(2)] = inst_11492);

(statearr_11515_11531[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11501 === (8))){
var inst_11482 = (state_11500[(7)]);
var state_11500__$1 = state_11500;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11500__$1,(11),out,inst_11482);
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
});})(c__10049__auto___11521,out))
;
return ((function (switch__10032__auto__,c__10049__auto___11521,out){
return (function() {
var cljs$core$async$state_machine__10033__auto__ = null;
var cljs$core$async$state_machine__10033__auto____0 = (function (){
var statearr_11516 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11516[(0)] = cljs$core$async$state_machine__10033__auto__);

(statearr_11516[(1)] = (1));

return statearr_11516;
});
var cljs$core$async$state_machine__10033__auto____1 = (function (state_11500){
while(true){
var ret_value__10034__auto__ = (function (){try{while(true){
var result__10035__auto__ = switch__10032__auto__.call(null,state_11500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10035__auto__;
}
break;
}
}catch (e11517){if((e11517 instanceof Object)){
var ex__10036__auto__ = e11517;
var statearr_11518_11532 = state_11500;
(statearr_11518_11532[(5)] = ex__10036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11533 = state_11500;
state_11500 = G__11533;
continue;
} else {
return ret_value__10034__auto__;
}
break;
}
});
cljs$core$async$state_machine__10033__auto__ = function(state_11500){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10033__auto____1.call(this,state_11500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10033__auto____0;
cljs$core$async$state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10033__auto____1;
return cljs$core$async$state_machine__10033__auto__;
})()
;})(switch__10032__auto__,c__10049__auto___11521,out))
})();
var state__10051__auto__ = (function (){var statearr_11519 = f__10050__auto__.call(null);
(statearr_11519[(6)] = c__10049__auto___11521);

return statearr_11519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10051__auto__);
});})(c__10049__auto___11521,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11535 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11535 = (function (f,ch,meta11536){
this.f = f;
this.ch = ch;
this.meta11536 = meta11536;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11537,meta11536__$1){
var self__ = this;
var _11537__$1 = this;
return (new cljs.core.async.t_cljs$core$async11535(self__.f,self__.ch,meta11536__$1));
});

cljs.core.async.t_cljs$core$async11535.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11537){
var self__ = this;
var _11537__$1 = this;
return self__.meta11536;
});

cljs.core.async.t_cljs$core$async11535.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11535.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11535.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11535.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11535.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11538 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11538 = (function (f,ch,meta11536,_,fn1,meta11539){
this.f = f;
this.ch = ch;
this.meta11536 = meta11536;
this._ = _;
this.fn1 = fn1;
this.meta11539 = meta11539;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11540,meta11539__$1){
var self__ = this;
var _11540__$1 = this;
return (new cljs.core.async.t_cljs$core$async11538(self__.f,self__.ch,self__.meta11536,self__._,self__.fn1,meta11539__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async11538.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11540){
var self__ = this;
var _11540__$1 = this;
return self__.meta11539;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11538.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11538.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11538.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11538.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__11534_SHARP_){
return f1.call(null,(((p1__11534_SHARP_ == null))?null:self__.f.call(null,p1__11534_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async11538.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11536","meta11536",1775115601,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async11535","cljs.core.async/t_cljs$core$async11535",-1244999119,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta11539","meta11539",461059651,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11538.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11538.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11538";

cljs.core.async.t_cljs$core$async11538.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async11538");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11538.
 */
cljs.core.async.__GT_t_cljs$core$async11538 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11538(f__$1,ch__$1,meta11536__$1,___$2,fn1__$1,meta11539){
return (new cljs.core.async.t_cljs$core$async11538(f__$1,ch__$1,meta11536__$1,___$2,fn1__$1,meta11539));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async11538(self__.f,self__.ch,self__.meta11536,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async11535.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11535.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async11535.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11536","meta11536",1775115601,null)], null);
});

cljs.core.async.t_cljs$core$async11535.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11535.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11535";

cljs.core.async.t_cljs$core$async11535.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async11535");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11535.
 */
cljs.core.async.__GT_t_cljs$core$async11535 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11535(f__$1,ch__$1,meta11536){
return (new cljs.core.async.t_cljs$core$async11535(f__$1,ch__$1,meta11536));
});

}

return (new cljs.core.async.t_cljs$core$async11535(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11541 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11541 = (function (f,ch,meta11542){
this.f = f;
this.ch = ch;
this.meta11542 = meta11542;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11543,meta11542__$1){
var self__ = this;
var _11543__$1 = this;
return (new cljs.core.async.t_cljs$core$async11541(self__.f,self__.ch,meta11542__$1));
});

cljs.core.async.t_cljs$core$async11541.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11543){
var self__ = this;
var _11543__$1 = this;
return self__.meta11542;
});

cljs.core.async.t_cljs$core$async11541.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11541.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11541.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11541.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11541.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11541.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async11541.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11542","meta11542",-833143339,null)], null);
});

cljs.core.async.t_cljs$core$async11541.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11541.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11541";

cljs.core.async.t_cljs$core$async11541.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async11541");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11541.
 */
cljs.core.async.__GT_t_cljs$core$async11541 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async11541(f__$1,ch__$1,meta11542){
return (new cljs.core.async.t_cljs$core$async11541(f__$1,ch__$1,meta11542));
});

}

return (new cljs.core.async.t_cljs$core$async11541(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11544 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11544 = (function (p,ch,meta11545){
this.p = p;
this.ch = ch;
this.meta11545 = meta11545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11546,meta11545__$1){
var self__ = this;
var _11546__$1 = this;
return (new cljs.core.async.t_cljs$core$async11544(self__.p,self__.ch,meta11545__$1));
});

cljs.core.async.t_cljs$core$async11544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11546){
var self__ = this;
var _11546__$1 = this;
return self__.meta11545;
});

cljs.core.async.t_cljs$core$async11544.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11544.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11544.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11544.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11544.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11544.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11544.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async11544.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11545","meta11545",-1727233406,null)], null);
});

cljs.core.async.t_cljs$core$async11544.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11544.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11544";

cljs.core.async.t_cljs$core$async11544.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async11544");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11544.
 */
cljs.core.async.__GT_t_cljs$core$async11544 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async11544(p__$1,ch__$1,meta11545){
return (new cljs.core.async.t_cljs$core$async11544(p__$1,ch__$1,meta11545));
});

}

return (new cljs.core.async.t_cljs$core$async11544(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__11548 = arguments.length;
switch (G__11548) {
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
var c__10049__auto___11588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10049__auto___11588,out){
return (function (){
var f__10050__auto__ = (function (){var switch__10032__auto__ = ((function (c__10049__auto___11588,out){
return (function (state_11569){
var state_val_11570 = (state_11569[(1)]);
if((state_val_11570 === (7))){
var inst_11565 = (state_11569[(2)]);
var state_11569__$1 = state_11569;
var statearr_11571_11589 = state_11569__$1;
(statearr_11571_11589[(2)] = inst_11565);

(statearr_11571_11589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11570 === (1))){
var state_11569__$1 = state_11569;
var statearr_11572_11590 = state_11569__$1;
(statearr_11572_11590[(2)] = null);

(statearr_11572_11590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11570 === (4))){
var inst_11551 = (state_11569[(7)]);
var inst_11551__$1 = (state_11569[(2)]);
var inst_11552 = (inst_11551__$1 == null);
var state_11569__$1 = (function (){var statearr_11573 = state_11569;
(statearr_11573[(7)] = inst_11551__$1);

return statearr_11573;
})();
if(cljs.core.truth_(inst_11552)){
var statearr_11574_11591 = state_11569__$1;
(statearr_11574_11591[(1)] = (5));

} else {
var statearr_11575_11592 = state_11569__$1;
(statearr_11575_11592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11570 === (6))){
var inst_11551 = (state_11569[(7)]);
var inst_11556 = p.call(null,inst_11551);
var state_11569__$1 = state_11569;
if(cljs.core.truth_(inst_11556)){
var statearr_11576_11593 = state_11569__$1;
(statearr_11576_11593[(1)] = (8));

} else {
var statearr_11577_11594 = state_11569__$1;
(statearr_11577_11594[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11570 === (3))){
var inst_11567 = (state_11569[(2)]);
var state_11569__$1 = state_11569;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11569__$1,inst_11567);
} else {
if((state_val_11570 === (2))){
var state_11569__$1 = state_11569;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11569__$1,(4),ch);
} else {
if((state_val_11570 === (11))){
var inst_11559 = (state_11569[(2)]);
var state_11569__$1 = state_11569;
var statearr_11578_11595 = state_11569__$1;
(statearr_11578_11595[(2)] = inst_11559);

(statearr_11578_11595[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11570 === (9))){
var state_11569__$1 = state_11569;
var statearr_11579_11596 = state_11569__$1;
(statearr_11579_11596[(2)] = null);

(statearr_11579_11596[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11570 === (5))){
var inst_11554 = cljs.core.async.close_BANG_.call(null,out);
var state_11569__$1 = state_11569;
var statearr_11580_11597 = state_11569__$1;
(statearr_11580_11597[(2)] = inst_11554);

(statearr_11580_11597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11570 === (10))){
var inst_11562 = (state_11569[(2)]);
var state_11569__$1 = (function (){var statearr_11581 = state_11569;
(statearr_11581[(8)] = inst_11562);

return statearr_11581;
})();
var statearr_11582_11598 = state_11569__$1;
(statearr_11582_11598[(2)] = null);

(statearr_11582_11598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11570 === (8))){
var inst_11551 = (state_11569[(7)]);
var state_11569__$1 = state_11569;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11569__$1,(11),out,inst_11551);
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
});})(c__10049__auto___11588,out))
;
return ((function (switch__10032__auto__,c__10049__auto___11588,out){
return (function() {
var cljs$core$async$state_machine__10033__auto__ = null;
var cljs$core$async$state_machine__10033__auto____0 = (function (){
var statearr_11583 = [null,null,null,null,null,null,null,null,null];
(statearr_11583[(0)] = cljs$core$async$state_machine__10033__auto__);

(statearr_11583[(1)] = (1));

return statearr_11583;
});
var cljs$core$async$state_machine__10033__auto____1 = (function (state_11569){
while(true){
var ret_value__10034__auto__ = (function (){try{while(true){
var result__10035__auto__ = switch__10032__auto__.call(null,state_11569);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10035__auto__;
}
break;
}
}catch (e11584){if((e11584 instanceof Object)){
var ex__10036__auto__ = e11584;
var statearr_11585_11599 = state_11569;
(statearr_11585_11599[(5)] = ex__10036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11569);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11600 = state_11569;
state_11569 = G__11600;
continue;
} else {
return ret_value__10034__auto__;
}
break;
}
});
cljs$core$async$state_machine__10033__auto__ = function(state_11569){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10033__auto____1.call(this,state_11569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10033__auto____0;
cljs$core$async$state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10033__auto____1;
return cljs$core$async$state_machine__10033__auto__;
})()
;})(switch__10032__auto__,c__10049__auto___11588,out))
})();
var state__10051__auto__ = (function (){var statearr_11586 = f__10050__auto__.call(null);
(statearr_11586[(6)] = c__10049__auto___11588);

return statearr_11586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10051__auto__);
});})(c__10049__auto___11588,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__11602 = arguments.length;
switch (G__11602) {
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
var c__10049__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10049__auto__){
return (function (){
var f__10050__auto__ = (function (){var switch__10032__auto__ = ((function (c__10049__auto__){
return (function (state_11665){
var state_val_11666 = (state_11665[(1)]);
if((state_val_11666 === (7))){
var inst_11661 = (state_11665[(2)]);
var state_11665__$1 = state_11665;
var statearr_11667_11705 = state_11665__$1;
(statearr_11667_11705[(2)] = inst_11661);

(statearr_11667_11705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (20))){
var inst_11631 = (state_11665[(7)]);
var inst_11642 = (state_11665[(2)]);
var inst_11643 = cljs.core.next.call(null,inst_11631);
var inst_11617 = inst_11643;
var inst_11618 = null;
var inst_11619 = (0);
var inst_11620 = (0);
var state_11665__$1 = (function (){var statearr_11668 = state_11665;
(statearr_11668[(8)] = inst_11617);

(statearr_11668[(9)] = inst_11619);

(statearr_11668[(10)] = inst_11620);

(statearr_11668[(11)] = inst_11618);

(statearr_11668[(12)] = inst_11642);

return statearr_11668;
})();
var statearr_11669_11706 = state_11665__$1;
(statearr_11669_11706[(2)] = null);

(statearr_11669_11706[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (1))){
var state_11665__$1 = state_11665;
var statearr_11670_11707 = state_11665__$1;
(statearr_11670_11707[(2)] = null);

(statearr_11670_11707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (4))){
var inst_11606 = (state_11665[(13)]);
var inst_11606__$1 = (state_11665[(2)]);
var inst_11607 = (inst_11606__$1 == null);
var state_11665__$1 = (function (){var statearr_11671 = state_11665;
(statearr_11671[(13)] = inst_11606__$1);

return statearr_11671;
})();
if(cljs.core.truth_(inst_11607)){
var statearr_11672_11708 = state_11665__$1;
(statearr_11672_11708[(1)] = (5));

} else {
var statearr_11673_11709 = state_11665__$1;
(statearr_11673_11709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (15))){
var state_11665__$1 = state_11665;
var statearr_11677_11710 = state_11665__$1;
(statearr_11677_11710[(2)] = null);

(statearr_11677_11710[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (21))){
var state_11665__$1 = state_11665;
var statearr_11678_11711 = state_11665__$1;
(statearr_11678_11711[(2)] = null);

(statearr_11678_11711[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (13))){
var inst_11617 = (state_11665[(8)]);
var inst_11619 = (state_11665[(9)]);
var inst_11620 = (state_11665[(10)]);
var inst_11618 = (state_11665[(11)]);
var inst_11627 = (state_11665[(2)]);
var inst_11628 = (inst_11620 + (1));
var tmp11674 = inst_11617;
var tmp11675 = inst_11619;
var tmp11676 = inst_11618;
var inst_11617__$1 = tmp11674;
var inst_11618__$1 = tmp11676;
var inst_11619__$1 = tmp11675;
var inst_11620__$1 = inst_11628;
var state_11665__$1 = (function (){var statearr_11679 = state_11665;
(statearr_11679[(8)] = inst_11617__$1);

(statearr_11679[(9)] = inst_11619__$1);

(statearr_11679[(10)] = inst_11620__$1);

(statearr_11679[(11)] = inst_11618__$1);

(statearr_11679[(14)] = inst_11627);

return statearr_11679;
})();
var statearr_11680_11712 = state_11665__$1;
(statearr_11680_11712[(2)] = null);

(statearr_11680_11712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (22))){
var state_11665__$1 = state_11665;
var statearr_11681_11713 = state_11665__$1;
(statearr_11681_11713[(2)] = null);

(statearr_11681_11713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (6))){
var inst_11606 = (state_11665[(13)]);
var inst_11615 = f.call(null,inst_11606);
var inst_11616 = cljs.core.seq.call(null,inst_11615);
var inst_11617 = inst_11616;
var inst_11618 = null;
var inst_11619 = (0);
var inst_11620 = (0);
var state_11665__$1 = (function (){var statearr_11682 = state_11665;
(statearr_11682[(8)] = inst_11617);

(statearr_11682[(9)] = inst_11619);

(statearr_11682[(10)] = inst_11620);

(statearr_11682[(11)] = inst_11618);

return statearr_11682;
})();
var statearr_11683_11714 = state_11665__$1;
(statearr_11683_11714[(2)] = null);

(statearr_11683_11714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (17))){
var inst_11631 = (state_11665[(7)]);
var inst_11635 = cljs.core.chunk_first.call(null,inst_11631);
var inst_11636 = cljs.core.chunk_rest.call(null,inst_11631);
var inst_11637 = cljs.core.count.call(null,inst_11635);
var inst_11617 = inst_11636;
var inst_11618 = inst_11635;
var inst_11619 = inst_11637;
var inst_11620 = (0);
var state_11665__$1 = (function (){var statearr_11684 = state_11665;
(statearr_11684[(8)] = inst_11617);

(statearr_11684[(9)] = inst_11619);

(statearr_11684[(10)] = inst_11620);

(statearr_11684[(11)] = inst_11618);

return statearr_11684;
})();
var statearr_11685_11715 = state_11665__$1;
(statearr_11685_11715[(2)] = null);

(statearr_11685_11715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (3))){
var inst_11663 = (state_11665[(2)]);
var state_11665__$1 = state_11665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11665__$1,inst_11663);
} else {
if((state_val_11666 === (12))){
var inst_11651 = (state_11665[(2)]);
var state_11665__$1 = state_11665;
var statearr_11686_11716 = state_11665__$1;
(statearr_11686_11716[(2)] = inst_11651);

(statearr_11686_11716[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (2))){
var state_11665__$1 = state_11665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11665__$1,(4),in$);
} else {
if((state_val_11666 === (23))){
var inst_11659 = (state_11665[(2)]);
var state_11665__$1 = state_11665;
var statearr_11687_11717 = state_11665__$1;
(statearr_11687_11717[(2)] = inst_11659);

(statearr_11687_11717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (19))){
var inst_11646 = (state_11665[(2)]);
var state_11665__$1 = state_11665;
var statearr_11688_11718 = state_11665__$1;
(statearr_11688_11718[(2)] = inst_11646);

(statearr_11688_11718[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (11))){
var inst_11617 = (state_11665[(8)]);
var inst_11631 = (state_11665[(7)]);
var inst_11631__$1 = cljs.core.seq.call(null,inst_11617);
var state_11665__$1 = (function (){var statearr_11689 = state_11665;
(statearr_11689[(7)] = inst_11631__$1);

return statearr_11689;
})();
if(inst_11631__$1){
var statearr_11690_11719 = state_11665__$1;
(statearr_11690_11719[(1)] = (14));

} else {
var statearr_11691_11720 = state_11665__$1;
(statearr_11691_11720[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (9))){
var inst_11653 = (state_11665[(2)]);
var inst_11654 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_11665__$1 = (function (){var statearr_11692 = state_11665;
(statearr_11692[(15)] = inst_11653);

return statearr_11692;
})();
if(cljs.core.truth_(inst_11654)){
var statearr_11693_11721 = state_11665__$1;
(statearr_11693_11721[(1)] = (21));

} else {
var statearr_11694_11722 = state_11665__$1;
(statearr_11694_11722[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (5))){
var inst_11609 = cljs.core.async.close_BANG_.call(null,out);
var state_11665__$1 = state_11665;
var statearr_11695_11723 = state_11665__$1;
(statearr_11695_11723[(2)] = inst_11609);

(statearr_11695_11723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (14))){
var inst_11631 = (state_11665[(7)]);
var inst_11633 = cljs.core.chunked_seq_QMARK_.call(null,inst_11631);
var state_11665__$1 = state_11665;
if(inst_11633){
var statearr_11696_11724 = state_11665__$1;
(statearr_11696_11724[(1)] = (17));

} else {
var statearr_11697_11725 = state_11665__$1;
(statearr_11697_11725[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (16))){
var inst_11649 = (state_11665[(2)]);
var state_11665__$1 = state_11665;
var statearr_11698_11726 = state_11665__$1;
(statearr_11698_11726[(2)] = inst_11649);

(statearr_11698_11726[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (10))){
var inst_11620 = (state_11665[(10)]);
var inst_11618 = (state_11665[(11)]);
var inst_11625 = cljs.core._nth.call(null,inst_11618,inst_11620);
var state_11665__$1 = state_11665;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11665__$1,(13),out,inst_11625);
} else {
if((state_val_11666 === (18))){
var inst_11631 = (state_11665[(7)]);
var inst_11640 = cljs.core.first.call(null,inst_11631);
var state_11665__$1 = state_11665;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11665__$1,(20),out,inst_11640);
} else {
if((state_val_11666 === (8))){
var inst_11619 = (state_11665[(9)]);
var inst_11620 = (state_11665[(10)]);
var inst_11622 = (inst_11620 < inst_11619);
var inst_11623 = inst_11622;
var state_11665__$1 = state_11665;
if(cljs.core.truth_(inst_11623)){
var statearr_11699_11727 = state_11665__$1;
(statearr_11699_11727[(1)] = (10));

} else {
var statearr_11700_11728 = state_11665__$1;
(statearr_11700_11728[(1)] = (11));

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
});})(c__10049__auto__))
;
return ((function (switch__10032__auto__,c__10049__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__10033__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10033__auto____0 = (function (){
var statearr_11701 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11701[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10033__auto__);

(statearr_11701[(1)] = (1));

return statearr_11701;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10033__auto____1 = (function (state_11665){
while(true){
var ret_value__10034__auto__ = (function (){try{while(true){
var result__10035__auto__ = switch__10032__auto__.call(null,state_11665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10035__auto__;
}
break;
}
}catch (e11702){if((e11702 instanceof Object)){
var ex__10036__auto__ = e11702;
var statearr_11703_11729 = state_11665;
(statearr_11703_11729[(5)] = ex__10036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11730 = state_11665;
state_11665 = G__11730;
continue;
} else {
return ret_value__10034__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10033__auto__ = function(state_11665){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10033__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10033__auto____1.call(this,state_11665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10033__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10033__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10033__auto__;
})()
;})(switch__10032__auto__,c__10049__auto__))
})();
var state__10051__auto__ = (function (){var statearr_11704 = f__10050__auto__.call(null);
(statearr_11704[(6)] = c__10049__auto__);

return statearr_11704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10051__auto__);
});})(c__10049__auto__))
);

return c__10049__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__11732 = arguments.length;
switch (G__11732) {
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
var G__11735 = arguments.length;
switch (G__11735) {
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
var G__11738 = arguments.length;
switch (G__11738) {
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
var c__10049__auto___11785 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10049__auto___11785,out){
return (function (){
var f__10050__auto__ = (function (){var switch__10032__auto__ = ((function (c__10049__auto___11785,out){
return (function (state_11762){
var state_val_11763 = (state_11762[(1)]);
if((state_val_11763 === (7))){
var inst_11757 = (state_11762[(2)]);
var state_11762__$1 = state_11762;
var statearr_11764_11786 = state_11762__$1;
(statearr_11764_11786[(2)] = inst_11757);

(statearr_11764_11786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11763 === (1))){
var inst_11739 = null;
var state_11762__$1 = (function (){var statearr_11765 = state_11762;
(statearr_11765[(7)] = inst_11739);

return statearr_11765;
})();
var statearr_11766_11787 = state_11762__$1;
(statearr_11766_11787[(2)] = null);

(statearr_11766_11787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11763 === (4))){
var inst_11742 = (state_11762[(8)]);
var inst_11742__$1 = (state_11762[(2)]);
var inst_11743 = (inst_11742__$1 == null);
var inst_11744 = cljs.core.not.call(null,inst_11743);
var state_11762__$1 = (function (){var statearr_11767 = state_11762;
(statearr_11767[(8)] = inst_11742__$1);

return statearr_11767;
})();
if(inst_11744){
var statearr_11768_11788 = state_11762__$1;
(statearr_11768_11788[(1)] = (5));

} else {
var statearr_11769_11789 = state_11762__$1;
(statearr_11769_11789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11763 === (6))){
var state_11762__$1 = state_11762;
var statearr_11770_11790 = state_11762__$1;
(statearr_11770_11790[(2)] = null);

(statearr_11770_11790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11763 === (3))){
var inst_11759 = (state_11762[(2)]);
var inst_11760 = cljs.core.async.close_BANG_.call(null,out);
var state_11762__$1 = (function (){var statearr_11771 = state_11762;
(statearr_11771[(9)] = inst_11759);

return statearr_11771;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11762__$1,inst_11760);
} else {
if((state_val_11763 === (2))){
var state_11762__$1 = state_11762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11762__$1,(4),ch);
} else {
if((state_val_11763 === (11))){
var inst_11742 = (state_11762[(8)]);
var inst_11751 = (state_11762[(2)]);
var inst_11739 = inst_11742;
var state_11762__$1 = (function (){var statearr_11772 = state_11762;
(statearr_11772[(10)] = inst_11751);

(statearr_11772[(7)] = inst_11739);

return statearr_11772;
})();
var statearr_11773_11791 = state_11762__$1;
(statearr_11773_11791[(2)] = null);

(statearr_11773_11791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11763 === (9))){
var inst_11742 = (state_11762[(8)]);
var state_11762__$1 = state_11762;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11762__$1,(11),out,inst_11742);
} else {
if((state_val_11763 === (5))){
var inst_11742 = (state_11762[(8)]);
var inst_11739 = (state_11762[(7)]);
var inst_11746 = cljs.core._EQ_.call(null,inst_11742,inst_11739);
var state_11762__$1 = state_11762;
if(inst_11746){
var statearr_11775_11792 = state_11762__$1;
(statearr_11775_11792[(1)] = (8));

} else {
var statearr_11776_11793 = state_11762__$1;
(statearr_11776_11793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11763 === (10))){
var inst_11754 = (state_11762[(2)]);
var state_11762__$1 = state_11762;
var statearr_11777_11794 = state_11762__$1;
(statearr_11777_11794[(2)] = inst_11754);

(statearr_11777_11794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11763 === (8))){
var inst_11739 = (state_11762[(7)]);
var tmp11774 = inst_11739;
var inst_11739__$1 = tmp11774;
var state_11762__$1 = (function (){var statearr_11778 = state_11762;
(statearr_11778[(7)] = inst_11739__$1);

return statearr_11778;
})();
var statearr_11779_11795 = state_11762__$1;
(statearr_11779_11795[(2)] = null);

(statearr_11779_11795[(1)] = (2));


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
});})(c__10049__auto___11785,out))
;
return ((function (switch__10032__auto__,c__10049__auto___11785,out){
return (function() {
var cljs$core$async$state_machine__10033__auto__ = null;
var cljs$core$async$state_machine__10033__auto____0 = (function (){
var statearr_11780 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11780[(0)] = cljs$core$async$state_machine__10033__auto__);

(statearr_11780[(1)] = (1));

return statearr_11780;
});
var cljs$core$async$state_machine__10033__auto____1 = (function (state_11762){
while(true){
var ret_value__10034__auto__ = (function (){try{while(true){
var result__10035__auto__ = switch__10032__auto__.call(null,state_11762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10035__auto__;
}
break;
}
}catch (e11781){if((e11781 instanceof Object)){
var ex__10036__auto__ = e11781;
var statearr_11782_11796 = state_11762;
(statearr_11782_11796[(5)] = ex__10036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11797 = state_11762;
state_11762 = G__11797;
continue;
} else {
return ret_value__10034__auto__;
}
break;
}
});
cljs$core$async$state_machine__10033__auto__ = function(state_11762){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10033__auto____1.call(this,state_11762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10033__auto____0;
cljs$core$async$state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10033__auto____1;
return cljs$core$async$state_machine__10033__auto__;
})()
;})(switch__10032__auto__,c__10049__auto___11785,out))
})();
var state__10051__auto__ = (function (){var statearr_11783 = f__10050__auto__.call(null);
(statearr_11783[(6)] = c__10049__auto___11785);

return statearr_11783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10051__auto__);
});})(c__10049__auto___11785,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__11799 = arguments.length;
switch (G__11799) {
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
var c__10049__auto___11865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10049__auto___11865,out){
return (function (){
var f__10050__auto__ = (function (){var switch__10032__auto__ = ((function (c__10049__auto___11865,out){
return (function (state_11837){
var state_val_11838 = (state_11837[(1)]);
if((state_val_11838 === (7))){
var inst_11833 = (state_11837[(2)]);
var state_11837__$1 = state_11837;
var statearr_11839_11866 = state_11837__$1;
(statearr_11839_11866[(2)] = inst_11833);

(statearr_11839_11866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11838 === (1))){
var inst_11800 = (new Array(n));
var inst_11801 = inst_11800;
var inst_11802 = (0);
var state_11837__$1 = (function (){var statearr_11840 = state_11837;
(statearr_11840[(7)] = inst_11801);

(statearr_11840[(8)] = inst_11802);

return statearr_11840;
})();
var statearr_11841_11867 = state_11837__$1;
(statearr_11841_11867[(2)] = null);

(statearr_11841_11867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11838 === (4))){
var inst_11805 = (state_11837[(9)]);
var inst_11805__$1 = (state_11837[(2)]);
var inst_11806 = (inst_11805__$1 == null);
var inst_11807 = cljs.core.not.call(null,inst_11806);
var state_11837__$1 = (function (){var statearr_11842 = state_11837;
(statearr_11842[(9)] = inst_11805__$1);

return statearr_11842;
})();
if(inst_11807){
var statearr_11843_11868 = state_11837__$1;
(statearr_11843_11868[(1)] = (5));

} else {
var statearr_11844_11869 = state_11837__$1;
(statearr_11844_11869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11838 === (15))){
var inst_11827 = (state_11837[(2)]);
var state_11837__$1 = state_11837;
var statearr_11845_11870 = state_11837__$1;
(statearr_11845_11870[(2)] = inst_11827);

(statearr_11845_11870[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11838 === (13))){
var state_11837__$1 = state_11837;
var statearr_11846_11871 = state_11837__$1;
(statearr_11846_11871[(2)] = null);

(statearr_11846_11871[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11838 === (6))){
var inst_11802 = (state_11837[(8)]);
var inst_11823 = (inst_11802 > (0));
var state_11837__$1 = state_11837;
if(cljs.core.truth_(inst_11823)){
var statearr_11847_11872 = state_11837__$1;
(statearr_11847_11872[(1)] = (12));

} else {
var statearr_11848_11873 = state_11837__$1;
(statearr_11848_11873[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11838 === (3))){
var inst_11835 = (state_11837[(2)]);
var state_11837__$1 = state_11837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11837__$1,inst_11835);
} else {
if((state_val_11838 === (12))){
var inst_11801 = (state_11837[(7)]);
var inst_11825 = cljs.core.vec.call(null,inst_11801);
var state_11837__$1 = state_11837;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11837__$1,(15),out,inst_11825);
} else {
if((state_val_11838 === (2))){
var state_11837__$1 = state_11837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11837__$1,(4),ch);
} else {
if((state_val_11838 === (11))){
var inst_11817 = (state_11837[(2)]);
var inst_11818 = (new Array(n));
var inst_11801 = inst_11818;
var inst_11802 = (0);
var state_11837__$1 = (function (){var statearr_11849 = state_11837;
(statearr_11849[(7)] = inst_11801);

(statearr_11849[(8)] = inst_11802);

(statearr_11849[(10)] = inst_11817);

return statearr_11849;
})();
var statearr_11850_11874 = state_11837__$1;
(statearr_11850_11874[(2)] = null);

(statearr_11850_11874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11838 === (9))){
var inst_11801 = (state_11837[(7)]);
var inst_11815 = cljs.core.vec.call(null,inst_11801);
var state_11837__$1 = state_11837;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11837__$1,(11),out,inst_11815);
} else {
if((state_val_11838 === (5))){
var inst_11801 = (state_11837[(7)]);
var inst_11802 = (state_11837[(8)]);
var inst_11805 = (state_11837[(9)]);
var inst_11810 = (state_11837[(11)]);
var inst_11809 = (inst_11801[inst_11802] = inst_11805);
var inst_11810__$1 = (inst_11802 + (1));
var inst_11811 = (inst_11810__$1 < n);
var state_11837__$1 = (function (){var statearr_11851 = state_11837;
(statearr_11851[(12)] = inst_11809);

(statearr_11851[(11)] = inst_11810__$1);

return statearr_11851;
})();
if(cljs.core.truth_(inst_11811)){
var statearr_11852_11875 = state_11837__$1;
(statearr_11852_11875[(1)] = (8));

} else {
var statearr_11853_11876 = state_11837__$1;
(statearr_11853_11876[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11838 === (14))){
var inst_11830 = (state_11837[(2)]);
var inst_11831 = cljs.core.async.close_BANG_.call(null,out);
var state_11837__$1 = (function (){var statearr_11855 = state_11837;
(statearr_11855[(13)] = inst_11830);

return statearr_11855;
})();
var statearr_11856_11877 = state_11837__$1;
(statearr_11856_11877[(2)] = inst_11831);

(statearr_11856_11877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11838 === (10))){
var inst_11821 = (state_11837[(2)]);
var state_11837__$1 = state_11837;
var statearr_11857_11878 = state_11837__$1;
(statearr_11857_11878[(2)] = inst_11821);

(statearr_11857_11878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11838 === (8))){
var inst_11801 = (state_11837[(7)]);
var inst_11810 = (state_11837[(11)]);
var tmp11854 = inst_11801;
var inst_11801__$1 = tmp11854;
var inst_11802 = inst_11810;
var state_11837__$1 = (function (){var statearr_11858 = state_11837;
(statearr_11858[(7)] = inst_11801__$1);

(statearr_11858[(8)] = inst_11802);

return statearr_11858;
})();
var statearr_11859_11879 = state_11837__$1;
(statearr_11859_11879[(2)] = null);

(statearr_11859_11879[(1)] = (2));


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
});})(c__10049__auto___11865,out))
;
return ((function (switch__10032__auto__,c__10049__auto___11865,out){
return (function() {
var cljs$core$async$state_machine__10033__auto__ = null;
var cljs$core$async$state_machine__10033__auto____0 = (function (){
var statearr_11860 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11860[(0)] = cljs$core$async$state_machine__10033__auto__);

(statearr_11860[(1)] = (1));

return statearr_11860;
});
var cljs$core$async$state_machine__10033__auto____1 = (function (state_11837){
while(true){
var ret_value__10034__auto__ = (function (){try{while(true){
var result__10035__auto__ = switch__10032__auto__.call(null,state_11837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10035__auto__;
}
break;
}
}catch (e11861){if((e11861 instanceof Object)){
var ex__10036__auto__ = e11861;
var statearr_11862_11880 = state_11837;
(statearr_11862_11880[(5)] = ex__10036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11881 = state_11837;
state_11837 = G__11881;
continue;
} else {
return ret_value__10034__auto__;
}
break;
}
});
cljs$core$async$state_machine__10033__auto__ = function(state_11837){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10033__auto____1.call(this,state_11837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10033__auto____0;
cljs$core$async$state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10033__auto____1;
return cljs$core$async$state_machine__10033__auto__;
})()
;})(switch__10032__auto__,c__10049__auto___11865,out))
})();
var state__10051__auto__ = (function (){var statearr_11863 = f__10050__auto__.call(null);
(statearr_11863[(6)] = c__10049__auto___11865);

return statearr_11863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10051__auto__);
});})(c__10049__auto___11865,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__11883 = arguments.length;
switch (G__11883) {
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
var c__10049__auto___11953 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10049__auto___11953,out){
return (function (){
var f__10050__auto__ = (function (){var switch__10032__auto__ = ((function (c__10049__auto___11953,out){
return (function (state_11925){
var state_val_11926 = (state_11925[(1)]);
if((state_val_11926 === (7))){
var inst_11921 = (state_11925[(2)]);
var state_11925__$1 = state_11925;
var statearr_11927_11954 = state_11925__$1;
(statearr_11927_11954[(2)] = inst_11921);

(statearr_11927_11954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11926 === (1))){
var inst_11884 = [];
var inst_11885 = inst_11884;
var inst_11886 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_11925__$1 = (function (){var statearr_11928 = state_11925;
(statearr_11928[(7)] = inst_11885);

(statearr_11928[(8)] = inst_11886);

return statearr_11928;
})();
var statearr_11929_11955 = state_11925__$1;
(statearr_11929_11955[(2)] = null);

(statearr_11929_11955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11926 === (4))){
var inst_11889 = (state_11925[(9)]);
var inst_11889__$1 = (state_11925[(2)]);
var inst_11890 = (inst_11889__$1 == null);
var inst_11891 = cljs.core.not.call(null,inst_11890);
var state_11925__$1 = (function (){var statearr_11930 = state_11925;
(statearr_11930[(9)] = inst_11889__$1);

return statearr_11930;
})();
if(inst_11891){
var statearr_11931_11956 = state_11925__$1;
(statearr_11931_11956[(1)] = (5));

} else {
var statearr_11932_11957 = state_11925__$1;
(statearr_11932_11957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11926 === (15))){
var inst_11915 = (state_11925[(2)]);
var state_11925__$1 = state_11925;
var statearr_11933_11958 = state_11925__$1;
(statearr_11933_11958[(2)] = inst_11915);

(statearr_11933_11958[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11926 === (13))){
var state_11925__$1 = state_11925;
var statearr_11934_11959 = state_11925__$1;
(statearr_11934_11959[(2)] = null);

(statearr_11934_11959[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11926 === (6))){
var inst_11885 = (state_11925[(7)]);
var inst_11910 = inst_11885.length;
var inst_11911 = (inst_11910 > (0));
var state_11925__$1 = state_11925;
if(cljs.core.truth_(inst_11911)){
var statearr_11935_11960 = state_11925__$1;
(statearr_11935_11960[(1)] = (12));

} else {
var statearr_11936_11961 = state_11925__$1;
(statearr_11936_11961[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11926 === (3))){
var inst_11923 = (state_11925[(2)]);
var state_11925__$1 = state_11925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11925__$1,inst_11923);
} else {
if((state_val_11926 === (12))){
var inst_11885 = (state_11925[(7)]);
var inst_11913 = cljs.core.vec.call(null,inst_11885);
var state_11925__$1 = state_11925;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11925__$1,(15),out,inst_11913);
} else {
if((state_val_11926 === (2))){
var state_11925__$1 = state_11925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11925__$1,(4),ch);
} else {
if((state_val_11926 === (11))){
var inst_11889 = (state_11925[(9)]);
var inst_11893 = (state_11925[(10)]);
var inst_11903 = (state_11925[(2)]);
var inst_11904 = [];
var inst_11905 = inst_11904.push(inst_11889);
var inst_11885 = inst_11904;
var inst_11886 = inst_11893;
var state_11925__$1 = (function (){var statearr_11937 = state_11925;
(statearr_11937[(11)] = inst_11903);

(statearr_11937[(7)] = inst_11885);

(statearr_11937[(8)] = inst_11886);

(statearr_11937[(12)] = inst_11905);

return statearr_11937;
})();
var statearr_11938_11962 = state_11925__$1;
(statearr_11938_11962[(2)] = null);

(statearr_11938_11962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11926 === (9))){
var inst_11885 = (state_11925[(7)]);
var inst_11901 = cljs.core.vec.call(null,inst_11885);
var state_11925__$1 = state_11925;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11925__$1,(11),out,inst_11901);
} else {
if((state_val_11926 === (5))){
var inst_11889 = (state_11925[(9)]);
var inst_11886 = (state_11925[(8)]);
var inst_11893 = (state_11925[(10)]);
var inst_11893__$1 = f.call(null,inst_11889);
var inst_11894 = cljs.core._EQ_.call(null,inst_11893__$1,inst_11886);
var inst_11895 = cljs.core.keyword_identical_QMARK_.call(null,inst_11886,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_11896 = ((inst_11894) || (inst_11895));
var state_11925__$1 = (function (){var statearr_11939 = state_11925;
(statearr_11939[(10)] = inst_11893__$1);

return statearr_11939;
})();
if(cljs.core.truth_(inst_11896)){
var statearr_11940_11963 = state_11925__$1;
(statearr_11940_11963[(1)] = (8));

} else {
var statearr_11941_11964 = state_11925__$1;
(statearr_11941_11964[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11926 === (14))){
var inst_11918 = (state_11925[(2)]);
var inst_11919 = cljs.core.async.close_BANG_.call(null,out);
var state_11925__$1 = (function (){var statearr_11943 = state_11925;
(statearr_11943[(13)] = inst_11918);

return statearr_11943;
})();
var statearr_11944_11965 = state_11925__$1;
(statearr_11944_11965[(2)] = inst_11919);

(statearr_11944_11965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11926 === (10))){
var inst_11908 = (state_11925[(2)]);
var state_11925__$1 = state_11925;
var statearr_11945_11966 = state_11925__$1;
(statearr_11945_11966[(2)] = inst_11908);

(statearr_11945_11966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11926 === (8))){
var inst_11889 = (state_11925[(9)]);
var inst_11885 = (state_11925[(7)]);
var inst_11893 = (state_11925[(10)]);
var inst_11898 = inst_11885.push(inst_11889);
var tmp11942 = inst_11885;
var inst_11885__$1 = tmp11942;
var inst_11886 = inst_11893;
var state_11925__$1 = (function (){var statearr_11946 = state_11925;
(statearr_11946[(14)] = inst_11898);

(statearr_11946[(7)] = inst_11885__$1);

(statearr_11946[(8)] = inst_11886);

return statearr_11946;
})();
var statearr_11947_11967 = state_11925__$1;
(statearr_11947_11967[(2)] = null);

(statearr_11947_11967[(1)] = (2));


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
});})(c__10049__auto___11953,out))
;
return ((function (switch__10032__auto__,c__10049__auto___11953,out){
return (function() {
var cljs$core$async$state_machine__10033__auto__ = null;
var cljs$core$async$state_machine__10033__auto____0 = (function (){
var statearr_11948 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11948[(0)] = cljs$core$async$state_machine__10033__auto__);

(statearr_11948[(1)] = (1));

return statearr_11948;
});
var cljs$core$async$state_machine__10033__auto____1 = (function (state_11925){
while(true){
var ret_value__10034__auto__ = (function (){try{while(true){
var result__10035__auto__ = switch__10032__auto__.call(null,state_11925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10035__auto__;
}
break;
}
}catch (e11949){if((e11949 instanceof Object)){
var ex__10036__auto__ = e11949;
var statearr_11950_11968 = state_11925;
(statearr_11950_11968[(5)] = ex__10036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11969 = state_11925;
state_11925 = G__11969;
continue;
} else {
return ret_value__10034__auto__;
}
break;
}
});
cljs$core$async$state_machine__10033__auto__ = function(state_11925){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10033__auto____1.call(this,state_11925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10033__auto____0;
cljs$core$async$state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10033__auto____1;
return cljs$core$async$state_machine__10033__auto__;
})()
;})(switch__10032__auto__,c__10049__auto___11953,out))
})();
var state__10051__auto__ = (function (){var statearr_11951 = f__10050__auto__.call(null);
(statearr_11951[(6)] = c__10049__auto___11953);

return statearr_11951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10051__auto__);
});})(c__10049__auto___11953,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
