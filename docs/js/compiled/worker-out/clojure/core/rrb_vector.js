// Compiled by ClojureScript 1.10.520 {}
goog.provide('clojure.core.rrb_vector');
goog.require('cljs.core');
goog.require('clojure.core.rrb_vector.protocols');
goog.require('clojure.core.rrb_vector.rrbt');
goog.require('clojure.core.rrb_vector.interop');
/**
 * Concatenates the given vectors in logarithmic time.
 */
clojure.core.rrb_vector.catvec = (function clojure$core$rrb_vector$catvec(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector.js
var G__8218 = arguments.length;
switch (G__8218) {
=======
var G__16770 = arguments.length;
switch (G__16770) {
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector.js
case 0:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector.js
var len__4730__auto___8220 = arguments.length;
var i__4731__auto___8221 = (0);
while(true){
if((i__4731__auto___8221 < len__4730__auto___8220)){
args_arr__4751__auto__.push((arguments[i__4731__auto___8221]));

var G__8222 = (i__4731__auto___8221 + (1));
i__4731__auto___8221 = G__8222;
=======
var len__4730__auto___16772 = arguments.length;
var i__4731__auto___16773 = (0);
while(true){
if((i__4731__auto___16773 < len__4730__auto___16772)){
args_arr__4751__auto__.push((arguments[i__4731__auto___16773]));

var G__16774 = (i__4731__auto___16773 + (1));
i__4731__auto___16773 = G__16774;
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector.js
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$1 = (function (v1){
return v1;
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$2 = (function (v1,v2){
return clojure.core.rrb_vector.protocols._splicev.call(null,v1,v2);
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$3 = (function (v1,v2,v3){
return clojure.core.rrb_vector.protocols._splicev.call(null,clojure.core.rrb_vector.protocols._splicev.call(null,v1,v2),v3);
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$4 = (function (v1,v2,v3,v4){
return clojure.core.rrb_vector.protocols._splicev.call(null,clojure.core.rrb_vector.protocols._splicev.call(null,v1,v2),clojure.core.rrb_vector.protocols._splicev.call(null,v3,v4));
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$variadic = (function (v1,v2,v3,v4,vn){
return clojure.core.rrb_vector.protocols._splicev.call(null,clojure.core.rrb_vector.protocols._splicev.call(null,clojure.core.rrb_vector.protocols._splicev.call(null,v1,v2),clojure.core.rrb_vector.protocols._splicev.call(null,v3,v4)),cljs.core.apply.call(null,clojure.core.rrb_vector.catvec,vn));
});

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector.js
clojure.core.rrb_vector.catvec.cljs$lang$applyTo = (function (seq8213){
var G__8214 = cljs.core.first.call(null,seq8213);
var seq8213__$1 = cljs.core.next.call(null,seq8213);
var G__8215 = cljs.core.first.call(null,seq8213__$1);
var seq8213__$2 = cljs.core.next.call(null,seq8213__$1);
var G__8216 = cljs.core.first.call(null,seq8213__$2);
var seq8213__$3 = cljs.core.next.call(null,seq8213__$2);
var G__8217 = cljs.core.first.call(null,seq8213__$3);
var seq8213__$4 = cljs.core.next.call(null,seq8213__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8214,G__8215,G__8216,G__8217,seq8213__$4);
=======
clojure.core.rrb_vector.catvec.cljs$lang$applyTo = (function (seq16765){
var G__16766 = cljs.core.first.call(null,seq16765);
var seq16765__$1 = cljs.core.next.call(null,seq16765);
var G__16767 = cljs.core.first.call(null,seq16765__$1);
var seq16765__$2 = cljs.core.next.call(null,seq16765__$1);
var G__16768 = cljs.core.first.call(null,seq16765__$2);
var seq16765__$3 = cljs.core.next.call(null,seq16765__$2);
var G__16769 = cljs.core.first.call(null,seq16765__$3);
var seq16765__$4 = cljs.core.next.call(null,seq16765__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16766,G__16767,G__16768,G__16769,seq16765__$4);
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector.js
});

clojure.core.rrb_vector.catvec.cljs$lang$maxFixedArity = (4);

/**
 * Returns a new vector containing the elements of the given vector v
 *   lying between the start (inclusive) and end (exclusive) indices in
 *   logarithmic time. end defaults to end of vector. The resulting
 *   vector shares structure with the original, but does not hold on to
 *   any elements of the original vector lying outside the given index
 *   range.
 */
clojure.core.rrb_vector.subvec = (function clojure$core$rrb_vector$subvec(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector.js
var G__8224 = arguments.length;
switch (G__8224) {
=======
var G__16776 = arguments.length;
switch (G__16776) {
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector.js
case 2:
return clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
return clojure.core.rrb_vector.protocols._slicev.call(null,v,start,cljs.core.count.call(null,v));
});

clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$3 = (function (v,start,end){
return clojure.core.rrb_vector.protocols._slicev.call(null,v,start,end);
});

clojure.core.rrb_vector.subvec.cljs$lang$maxFixedArity = 3;

/**
 * Creates a new vector containing the args.
 */
clojure.core.rrb_vector.vector = (function clojure$core$rrb_vector$vector(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector.js
var G__8232 = arguments.length;
switch (G__8232) {
=======
var G__16784 = arguments.length;
switch (G__16784) {
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector.js
case 0:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector.js
var len__4730__auto___8239 = arguments.length;
var i__4731__auto___8240 = (0);
while(true){
if((i__4731__auto___8240 < len__4730__auto___8239)){
args_arr__4751__auto__.push((arguments[i__4731__auto___8240]));

var G__8241 = (i__4731__auto___8240 + (1));
i__4731__auto___8240 = G__8241;
=======
var len__4730__auto___16791 = arguments.length;
var i__4731__auto___16792 = (0);
while(true){
if((i__4731__auto___16792 < len__4730__auto___16791)){
args_arr__4751__auto__.push((arguments[i__4731__auto___16792]));

var G__16793 = (i__4731__auto___16792 + (1));
i__4731__auto___16792 = G__16793;
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector.js
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$0 = (function (){
<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector.js
var arr__8233 = [];
return (new clojure.core.rrb_vector.rrbt.Vector(0,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__8233,null,(0)));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$1 = (function (x1){
var arr__8234 = [null];
(arr__8234[(0)] = x1);

return (new clojure.core.rrb_vector.rrbt.Vector(1,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__8234,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$2 = (function (x1,x2){
var arr__8235 = [null,null];
(arr__8235[(0)] = x1);

(arr__8235[(1)] = x2);

return (new clojure.core.rrb_vector.rrbt.Vector(2,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__8235,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$3 = (function (x1,x2,x3){
var arr__8236 = [null,null,null];
(arr__8236[(0)] = x1);

(arr__8236[(1)] = x2);

(arr__8236[(2)] = x3);

return (new clojure.core.rrb_vector.rrbt.Vector(3,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__8236,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$4 = (function (x1,x2,x3,x4){
var arr__8237 = [null,null,null,null];
(arr__8237[(0)] = x1);

(arr__8237[(1)] = x2);

(arr__8237[(2)] = x3);

(arr__8237[(3)] = x4);

return (new clojure.core.rrb_vector.rrbt.Vector(4,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__8237,null,null));
=======
var arr__16785 = [];
return (new clojure.core.rrb_vector.rrbt.Vector(0,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__16785,null,(0)));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$1 = (function (x1){
var arr__16786 = [null];
(arr__16786[(0)] = x1);

return (new clojure.core.rrb_vector.rrbt.Vector(1,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__16786,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$2 = (function (x1,x2){
var arr__16787 = [null,null];
(arr__16787[(0)] = x1);

(arr__16787[(1)] = x2);

return (new clojure.core.rrb_vector.rrbt.Vector(2,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__16787,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$3 = (function (x1,x2,x3){
var arr__16788 = [null,null,null];
(arr__16788[(0)] = x1);

(arr__16788[(1)] = x2);

(arr__16788[(2)] = x3);

return (new clojure.core.rrb_vector.rrbt.Vector(3,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__16788,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$4 = (function (x1,x2,x3,x4){
var arr__16789 = [null,null,null,null];
(arr__16789[(0)] = x1);

(arr__16789[(1)] = x2);

(arr__16789[(2)] = x3);

(arr__16789[(3)] = x4);

return (new clojure.core.rrb_vector.rrbt.Vector(4,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__16789,null,null));
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector.js
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$variadic = (function (x1,x2,x3,x4,xn){
return cljs.core.into.call(null,clojure.core.rrb_vector.vector.call(null,x1,x2,x3,x4),xn);
});

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector.js
clojure.core.rrb_vector.vector.cljs$lang$applyTo = (function (seq8227){
var G__8228 = cljs.core.first.call(null,seq8227);
var seq8227__$1 = cljs.core.next.call(null,seq8227);
var G__8229 = cljs.core.first.call(null,seq8227__$1);
var seq8227__$2 = cljs.core.next.call(null,seq8227__$1);
var G__8230 = cljs.core.first.call(null,seq8227__$2);
var seq8227__$3 = cljs.core.next.call(null,seq8227__$2);
var G__8231 = cljs.core.first.call(null,seq8227__$3);
var seq8227__$4 = cljs.core.next.call(null,seq8227__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8228,G__8229,G__8230,G__8231,seq8227__$4);
=======
clojure.core.rrb_vector.vector.cljs$lang$applyTo = (function (seq16779){
var G__16780 = cljs.core.first.call(null,seq16779);
var seq16779__$1 = cljs.core.next.call(null,seq16779);
var G__16781 = cljs.core.first.call(null,seq16779__$1);
var seq16779__$2 = cljs.core.next.call(null,seq16779__$1);
var G__16782 = cljs.core.first.call(null,seq16779__$2);
var seq16779__$3 = cljs.core.next.call(null,seq16779__$2);
var G__16783 = cljs.core.first.call(null,seq16779__$3);
var seq16779__$4 = cljs.core.next.call(null,seq16779__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16780,G__16781,G__16782,G__16783,seq16779__$4);
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector.js
});

clojure.core.rrb_vector.vector.cljs$lang$maxFixedArity = (4);

/**
 * Returns a vector containing the contents of coll.
 * 
 *   If coll is a vector, returns an RRB vector using the internal tree
 *   of coll.
 */
clojure.core.rrb_vector.vec = (function clojure$core$rrb_vector$vec(coll){
if(cljs.core.vector_QMARK_.call(null,coll)){
return clojure.core.rrb_vector.rrbt._as_rrbt.call(null,coll);
} else {
return cljs.core.apply.call(null,clojure.core.rrb_vector.vector,coll);
}
});

//# sourceMappingURL=rrb_vector.js.map
