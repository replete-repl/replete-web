// Compiled by ClojureScript 1.10.520 {}
goog.provide('clojure.core.rrb_vector.rrbt');
goog.require('cljs.core');
goog.require('clojure.core.rrb_vector.protocols');
goog.require('clojure.core.rrb_vector.nodes');
goog.require('clojure.core.rrb_vector.trees');
goog.require('clojure.core.rrb_vector.transients');
clojure.core.rrb_vector.rrbt.rrbt_concat_threshold = (33);
clojure.core.rrb_vector.rrbt.max_extra_search_steps = (2);

/**
 * @interface
 */
clojure.core.rrb_vector.rrbt.AsRRBT = function(){};

clojure.core.rrb_vector.rrbt._as_rrbt = (function clojure$core$rrb_vector$rrbt$_as_rrbt(v){
if((((!((v == null)))) && ((!((v.clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1 == null)))))){
return v.clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1(v);
} else {
var x__4433__auto__ = (((v == null))?null:v);
var m__4434__auto__ = (clojure.core.rrb_vector.rrbt._as_rrbt[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,v);
} else {
var m__4431__auto__ = (clojure.core.rrb_vector.rrbt._as_rrbt["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,v);
} else {
throw cljs.core.missing_protocol.call(null,"AsRRBT.-as-rrbt",v);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ASeq}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IChunkedNext}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {clojure.core.rrb_vector.rrbt.Object}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IChunkedSeq}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
clojure.core.rrb_vector.rrbt.RRBChunkedSeq = (function (vec,node,i,off,meta,__hash){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2179858668;
this.cljs$lang$protocol_mask$partition1$ = 1536;
});
clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_.call(null,coll);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,this$__$1);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(((self__.off + (1)) < self__.node.length)){
var s = clojure.core.rrb_vector.rrbt.rrb_chunked_seq.call(null,self__.vec,self__.node,self__.i,(self__.off + (1)));
if((s == null)){
return null;
} else {
return s;
}
} else {
return cljs.core._chunked_next.call(null,coll__$1);
}
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = cljs.core.hash_ordered_coll.call(null,coll__$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential.call(null,coll__$1,other);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.call(null,cljs.core.subvec.call(null,self__.vec,(self__.i + self__.off),cljs.core.count.call(null,self__.vec)),f);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.call(null,cljs.core.subvec.call(null,self__.vec,(self__.i + self__.off),cljs.core.count.call(null,self__.vec)),f,start);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (self__.node[self__.off]);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(((self__.off + (1)) < self__.node.length)){
var s = clojure.core.rrb_vector.rrbt.rrb_chunked_seq.call(null,self__.vec,self__.node,self__.i,(self__.off + (1)));
if((s == null)){
return cljs.core.List.EMPTY;
} else {
return s;
}
} else {
return cljs.core._chunked_rest.call(null,coll__$1);
}
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_chunk.call(null,self__.node,self__.off);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var l = self__.node.length;
var s = ((((self__.i + l) < cljs.core._count.call(null,self__.vec)))?clojure.core.rrb_vector.rrbt.rrb_chunked_seq.call(null,self__.vec,(self__.i + l),(0)):null);
if((s == null)){
return cljs.core.List.EMPTY;
} else {
return s;
}
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var self__ = this;
var coll__$1 = this;
return clojure.core.rrb_vector.rrbt.rrb_chunked_seq.call(null,self__.vec,self__.node,self__.i,self__.off,m);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons.call(null,o,coll__$1);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var l = self__.node.length;
var s = ((((self__.i + l) < cljs.core._count.call(null,self__.vec)))?clojure.core.rrb_vector.rrbt.rrb_chunked_seq.call(null,self__.vec,(self__.i + l),(0)):null);
if((s == null)){
return null;
} else {
return s;
}
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vec","vec",982683596,null),new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"off","off",-2047994980,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.cljs$lang$type = true;

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.cljs$lang$ctorStr = "clojure.core.rrb-vector.rrbt/RRBChunkedSeq";

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"clojure.core.rrb-vector.rrbt/RRBChunkedSeq");
});

/**
 * Positional factory function for clojure.core.rrb-vector.rrbt/RRBChunkedSeq.
 */
clojure.core.rrb_vector.rrbt.__GT_RRBChunkedSeq = (function clojure$core$rrb_vector$rrbt$__GT_RRBChunkedSeq(vec,node,i,off,meta,__hash){
return (new clojure.core.rrb_vector.rrbt.RRBChunkedSeq(vec,node,i,off,meta,__hash));
});

clojure.core.rrb_vector.rrbt.rrb_chunked_seq = (function clojure$core$rrb_vector$rrbt$rrb_chunked_seq(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector/rrbt.js
var G__8008 = arguments.length;
switch (G__8008) {
=======
var G__16560 = arguments.length;
switch (G__16560) {
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector/rrbt.js
case 3:
return clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$3 = (function (vec,i,off){
var cnt = vec.cnt;
var shift = vec.shift;
var root = vec.root;
var tail = vec.tail;
return (new clojure.core.rrb_vector.rrbt.RRBChunkedSeq(vec,clojure.core.rrb_vector.trees.array_for.call(null,cnt,shift,root,tail,i),i,off,null,null));
});

clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$4 = (function (vec,node,i,off){
return (new clojure.core.rrb_vector.rrbt.RRBChunkedSeq(vec,node,i,off,null,null));
});

clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$5 = (function (vec,node,i,off,meta){
return (new clojure.core.rrb_vector.rrbt.RRBChunkedSeq(vec,node,i,off,meta,null));
});

clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$lang$maxFixedArity = 5;

clojure.core.rrb_vector.rrbt.slice_right = (function clojure$core$rrb_vector$rrbt$slice_right(node,shift,end){
if((shift === (0))){
var arr = node.arr;
var new_arr = (new Array(end));
cljs.core.array_copy.call(null,arr,(0),new_arr,(0),end);

return cljs.core.__GT_VectorNode.call(null,null,new_arr);
} else {
var reg_QMARK_ = clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node);
var rngs = (((!(reg_QMARK_)))?clojure.core.rrb_vector.nodes.node_ranges.call(null,node):null);
var i = (((end - (1)) >> shift) & (31));
var i__$1 = ((reg_QMARK_)?i:(function (){var j = i;
while(true){
if((end <= (rngs[j]))){
return j;
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector/rrbt.js
var G__8010 = (j + (1));
j = G__8010;
=======
var G__16562 = (j + (1));
j = G__16562;
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector/rrbt.js
continue;
}
break;
}
})());
var child_end = ((reg_QMARK_)?(function (){var ce = cljs.core.mod.call(null,end,((1) << shift));
if((ce === (0))){
return ((1) << shift);
} else {
return ce;
}
})():(((i__$1 > (0)))?(end - (rngs[(i__$1 - (1))])):end));
var arr = node.arr;
var new_child = clojure.core.rrb_vector.rrbt.slice_right.call(null,(arr[i__$1]),(shift - (5)),child_end);
var regular_child_QMARK_ = (((shift === (5)))?((32) === new_child.arr.length):clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,new_child));
var new_arr = (new Array(((((reg_QMARK_) && (regular_child_QMARK_)))?(32):(33))));
var new_child_rng = ((regular_child_QMARK_)?(function (){var m = cljs.core.mod.call(null,child_end,((1) << shift));
if((m === (0))){
return ((1) << shift);
} else {
return m;
}
})():(((shift === (5)))?new_child.arr.length:clojure.core.rrb_vector.nodes.last_range.call(null,new_child)));
cljs.core.array_copy.call(null,arr,(0),new_arr,(0),i__$1);

(new_arr[i__$1] = new_child);

if((!(((reg_QMARK_) && (regular_child_QMARK_))))){
<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector/rrbt.js
var new_rngs_8011 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var step_8012 = ((1) << shift);
if(reg_QMARK_){
var n__4607__auto___8013 = i__$1;
var j_8014 = (0);
while(true){
if((j_8014 < n__4607__auto___8013)){
(new_rngs_8011[j_8014] = ((j_8014 + (1)) * step_8012));

var G__8015 = (j_8014 + (1));
j_8014 = G__8015;
=======
var new_rngs_16563 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var step_16564 = ((1) << shift);
if(reg_QMARK_){
var n__4607__auto___16565 = i__$1;
var j_16566 = (0);
while(true){
if((j_16566 < n__4607__auto___16565)){
(new_rngs_16563[j_16566] = ((j_16566 + (1)) * step_16564));

var G__16567 = (j_16566 + (1));
j_16566 = G__16567;
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector/rrbt.js
continue;
} else {
}
break;
}
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector/rrbt.js
var n__4607__auto___8016 = i__$1;
var j_8017 = (0);
while(true){
if((j_8017 < n__4607__auto___8016)){
(new_rngs_8011[j_8017] = (rngs[j_8017]));

var G__8018 = (j_8017 + (1));
j_8017 = G__8018;
=======
var n__4607__auto___16568 = i__$1;
var j_16569 = (0);
while(true){
if((j_16569 < n__4607__auto___16568)){
(new_rngs_16563[j_16569] = (rngs[j_16569]));

var G__16570 = (j_16569 + (1));
j_16569 = G__16570;
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector/rrbt.js
continue;
} else {
}
break;
}
}

<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector/rrbt.js
(new_rngs_8011[i__$1] = ((((i__$1 > (0)))?(new_rngs_8011[(i__$1 - (1))]):(0)) + new_child_rng));

(new_rngs_8011[(32)] = (i__$1 + (1)));

(new_arr[(32)] = new_rngs_8011);
=======
(new_rngs_16563[i__$1] = ((((i__$1 > (0)))?(new_rngs_16563[(i__$1 - (1))]):(0)) + new_child_rng));

(new_rngs_16563[(32)] = (i__$1 + (1)));

(new_arr[(32)] = new_rngs_16563);
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector/rrbt.js
} else {
}

return cljs.core.__GT_VectorNode.call(null,null,new_arr);
}
});
clojure.core.rrb_vector.rrbt.slice_left = (function clojure$core$rrb_vector$rrbt$slice_left(node,shift,start,end){
if((shift === (0))){
var arr = node.arr;
var new_len = (arr.length - start);
var new_arr = (new Array(new_len));
cljs.core.array_copy.call(null,arr,start,new_arr,(0),new_len);

return cljs.core.__GT_VectorNode.call(null,null,new_arr);
} else {
var reg_QMARK_ = clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node);
var arr = node.arr;
var rngs = (((!(reg_QMARK_)))?clojure.core.rrb_vector.nodes.node_ranges.call(null,node):null);
var i = ((start >> shift) & (31));
var i__$1 = ((reg_QMARK_)?i:(function (){var j = i;
while(true){
if((start < (rngs[j]))){
return j;
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector/rrbt.js
var G__8019 = (j + (1));
j = G__8019;
=======
var G__16571 = (j + (1));
j = G__16571;
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector/rrbt.js
continue;
}
break;
}
})());
var len = ((reg_QMARK_)?(function (){var i__$2 = i__$1;
while(true){
if((((i__$2 === (32))) || (((arr[i__$2]) == null)))){
return i__$2;
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector/rrbt.js
var G__8020 = (i__$2 + (1));
i__$2 = G__8020;
=======
var G__16572 = (i__$2 + (1));
i__$2 = G__16572;
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector/rrbt.js
continue;
}
break;
}
})():(rngs[(32)]));
var child_start = (((i__$1 > (0)))?(start - ((reg_QMARK_)?(i__$1 * ((1) << shift)):(rngs[(i__$1 - (1))]))):start);
var child_end = (function (){var x__4222__auto__ = ((1) << shift);
var y__4223__auto__ = (((i__$1 > (0)))?(end - ((reg_QMARK_)?(i__$1 * ((1) << shift)):(rngs[(i__$1 - (1))]))):end);
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var new_child = clojure.core.rrb_vector.rrbt.slice_left.call(null,(arr[i__$1]),(shift - (5)),child_start,child_end);
var new_len = (len - i__$1);
var new_len__$1 = (((new_child == null))?(new_len - (1)):new_len);
if((new_len__$1 === (0))){
return null;
} else {
if(reg_QMARK_){
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var rngs__$1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var rng0 = (((((new_child == null)) || ((shift === (5))) || (clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,new_child))))?(((1) << shift) - ((start >> (shift - (5))) & (31))):clojure.core.rrb_vector.nodes.last_range.call(null,new_child));
var step = ((1) << shift);
<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector/rrbt.js
var j_8021 = (0);
var r_8022 = rng0;
while(true){
if((j_8021 < new_len__$1)){
(rngs__$1[j_8021] = r_8022);

var G__8023 = (j_8021 + (1));
var G__8024 = (r_8022 + step);
j_8021 = G__8023;
r_8022 = G__8024;
=======
var j_16573 = (0);
var r_16574 = rng0;
while(true){
if((j_16573 < new_len__$1)){
(rngs__$1[j_16573] = r_16574);

var G__16575 = (j_16573 + (1));
var G__16576 = (r_16574 + step);
j_16573 = G__16575;
r_16574 = G__16576;
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector/rrbt.js
continue;
} else {
}
break;
}

if((new_len__$1 > (1))){
(rngs__$1[(new_len__$1 - (1))] = (end - start));
} else {
}

(rngs__$1[(32)] = new_len__$1);

cljs.core.array_copy.call(null,arr,(((new_child == null))?(i__$1 + (1)):i__$1),new_arr,(0),new_len__$1);

if((!((new_child == null)))){
(new_arr[(0)] = new_child);
} else {
}

(new_arr[(32)] = rngs__$1);

return cljs.core.__GT_VectorNode.call(null,node.edit,new_arr);
} else {
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector/rrbt.js
var j_8025 = (0);
var i_8026__$2 = i__$1;
while(true){
if((j_8025 < new_len__$1)){
(new_rngs[j_8025] = ((rngs[i_8026__$2]) - start));

var G__8027 = (j_8025 + (1));
var G__8028 = (i_8026__$2 + (1));
j_8025 = G__8027;
i_8026__$2 = G__8028;
=======
var j_16577 = (0);
var i_16578__$2 = i__$1;
while(true){
if((j_16577 < new_len__$1)){
(new_rngs[j_16577] = ((rngs[i_16578__$2]) - start));

var G__16579 = (j_16577 + (1));
var G__16580 = (i_16578__$2 + (1));
j_16577 = G__16579;
i_16578__$2 = G__16580;
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector/rrbt.js
continue;
} else {
}
break;
}

(new_rngs[(32)] = new_len__$1);

cljs.core.array_copy.call(null,arr,(((new_child == null))?(i__$1 + (1)):i__$1),new_arr,(0),new_len__$1);

if((!((new_child == null)))){
(new_arr[(0)] = new_child);
} else {
}

(new_arr[(32)] = new_rngs);

return cljs.core.__GT_VectorNode.call(null,node.edit,new_arr);

}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IVector}
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEditableCollection}
 * @implements {clojure.core.rrb_vector.rrbt.AsRRBT}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {clojure.core.rrb_vector.protocols.PSliceableVector}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IStack}
 * @implements {cljs.core.IMapEntry}
 * @implements {clojure.core.rrb_vector.rrbt.Object}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IComparable}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {clojure.core.rrb_vector.protocols.PSpliceableVector}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
clojure.core.rrb_vector.rrbt.Vector = (function (cnt,shift,root,tail,meta,__hash){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2315152159;
this.cljs$lang$protocol_mask$partition1$ = 2052;
});
clojure.core.rrb_vector.rrbt.Vector.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_.call(null,this$);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,k,null);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,k,not_found);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this$,f,init){
var self__ = this;
var this$__$1 = this;
var i = (0);
var j = (0);
var init__$1 = init;
var arr = clojure.core.rrb_vector.trees.array_for.call(null,self__.cnt,self__.shift,self__.root,self__.tail,i);
var lim = (arr.length - (1));
var step = (lim + (1));
while(true){
var init__$2 = f.call(null,init__$1,(i + j),(arr[j]));
if(cljs.core.reduced_QMARK_.call(null,init__$2)){
return cljs.core.deref.call(null,init__$2);
} else {
if((j < lim)){
<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector/rrbt.js
var G__8033 = i;
var G__8034 = (j + (1));
var G__8035 = init__$2;
var G__8036 = arr;
var G__8037 = lim;
var G__8038 = step;
i = G__8033;
j = G__8034;
init__$1 = G__8035;
arr = G__8036;
lim = G__8037;
step = G__8038;
=======
var G__16585 = i;
var G__16586 = (j + (1));
var G__16587 = init__$2;
var G__16588 = arr;
var G__16589 = lim;
var G__16590 = step;
i = G__16585;
j = G__16586;
init__$1 = G__16587;
arr = G__16588;
lim = G__16589;
step = G__16590;
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector/rrbt.js
continue;
} else {
var i__$1 = (i + step);
if((i__$1 < self__.cnt)){
var arr__$1 = clojure.core.rrb_vector.trees.array_for.call(null,self__.cnt,self__.shift,self__.root,self__.tail,i__$1);
var len = arr__$1.length;
var lim__$1 = (len - (1));
<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector/rrbt.js
var G__8039 = i__$1;
var G__8040 = (0);
var G__8041 = init__$2;
var G__8042 = arr__$1;
var G__8043 = lim__$1;
var G__8044 = len;
i = G__8039;
j = G__8040;
init__$1 = G__8041;
arr = G__8042;
lim = G__8043;
step = G__8044;
=======
var G__16591 = i__$1;
var G__16592 = (0);
var G__16593 = init__$2;
var G__16594 = arr__$1;
var G__16595 = lim__$1;
var G__16596 = len;
i = G__16591;
j = G__16592;
init__$1 = G__16593;
arr = G__16594;
lim = G__16595;
step = G__16596;
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector/rrbt.js
continue;
} else {
return init__$2;
}
}
}
break;
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,i){
var self__ = this;
var this$__$1 = this;
if(((((0) <= i)) && ((i < self__.cnt)))){
var tail_off = (self__.cnt - self__.tail.length);
if((tail_off <= i)){
return (self__.tail[(i - tail_off)]);
} else {
var i__$1 = i;
var node = self__.root;
var shift__$1 = self__.shift;
while(true){
if((shift__$1 === (0))){
var arr = node.arr;
return (arr[((i__$1 >> shift__$1) & (31))]);
} else {
if(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node)){
var arr = node.arr;
var idx = ((i__$1 >> shift__$1) & (31));
var i__$2 = i__$1;
var node__$1 = (arr[idx]);
var shift__$2 = (shift__$1 - (5));
while(true){
var arr__$1 = node__$1.arr;
var idx__$1 = ((i__$2 >> shift__$2) & (31));
if((shift__$2 === (0))){
return (arr__$1[idx__$1]);
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector/rrbt.js
var G__8045 = i__$2;
var G__8046 = (arr__$1[idx__$1]);
var G__8047 = (shift__$2 - (5));
i__$2 = G__8045;
node__$1 = G__8046;
shift__$2 = G__8047;
=======
var G__16597 = i__$2;
var G__16598 = (arr__$1[idx__$1]);
var G__16599 = (shift__$2 - (5));
i__$2 = G__16597;
node__$1 = G__16598;
shift__$2 = G__16599;
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector/rrbt.js
continue;
}
break;
}
} else {
var arr = node.arr;
var rngs = clojure.core.rrb_vector.nodes.node_ranges.call(null,node);
var idx = (function (){var j = ((i__$1 >> shift__$1) & (31));
while(true){
if((i__$1 < (rngs[j]))){
return j;
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector/rrbt.js
var G__8048 = (j + (1));
j = G__8048;
=======
var G__16600 = (j + (1));
j = G__16600;
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector/rrbt.js
continue;
}
break;
}
})();
var i__$2 = (((idx === (0)))?i__$1:(i__$1 - (rngs[(idx - (1))])));
<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector/rrbt.js
var G__8049 = i__$2;
var G__8050 = (arr[idx]);
var G__8051 = (shift__$1 - (5));
i__$1 = G__8049;
node = G__8050;
shift__$1 = G__8051;
=======
var G__16601 = i__$2;
var G__16602 = (arr[idx]);
var G__16603 = (shift__$1 - (5));
i__$1 = G__16601;
node = G__16602;
shift__$1 = G__16603;
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector/rrbt.js
continue;
}
}
break;
}
}
} else {
return cljs.core.vector_index_out_of_bounds.call(null,i,self__.cnt);
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,i,not_found){
var self__ = this;
var this$__$1 = this;
if((((i >= (0))) && ((i < self__.cnt)))){
return cljs.core._nth.call(null,this$__$1,i);
} else {
return not_found;
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,this$__$1);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (this$,i,val){
var self__ = this;
var this$__$1 = this;
if(((((0) <= i)) && ((i < self__.cnt)))){
var tail_off = clojure.core.rrb_vector.trees.tail_offset.call(null,self__.cnt,self__.tail);
if((i >= tail_off)){
var new_tail = (new Array(self__.tail.length));
var idx = (i - tail_off);
cljs.core.array_copy.call(null,self__.tail,(0),new_tail,(0),self__.tail.length);

(new_tail[idx] = val);

return (new clojure.core.rrb_vector.rrbt.Vector(self__.cnt,self__.shift,self__.root,new_tail,self__.meta,null));
} else {
return (new clojure.core.rrb_vector.rrbt.Vector(self__.cnt,self__.shift,clojure.core.rrb_vector.trees.do_assoc.call(null,self__.shift,self__.root,i,val),self__.tail,self__.meta,null));
}
} else {
if((i === self__.cnt)){
return cljs.core._conj.call(null,this$__$1,val);
} else {
return cljs.core.vector_index_out_of_bounds.call(null,i,self__.cnt);

}
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cnt;
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,(0));
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,(1));
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.cnt > (0))){
return cljs.core._nth.call(null,this$__$1,(self__.cnt - (1)));
} else {
return null;
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.cnt === (0))){
throw (new Error("Can't pop empty vector"));
} else {
if(((1) === self__.cnt)){
return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,self__.meta);
} else {
if((self__.tail.length > (1))){
var new_tail = (new Array((self__.tail.length - (1))));
cljs.core.array_copy.call(null,self__.tail,(0),new_tail,(0),new_tail.length);

return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt - (1)),self__.shift,self__.root,new_tail,self__.meta,null));
} else {
var new_tail = clojure.core.rrb_vector.trees.array_for.call(null,self__.cnt,self__.shift,self__.root,self__.tail,(self__.cnt - (2)));
var root_cnt = clojure.core.rrb_vector.trees.tail_offset.call(null,self__.cnt,self__.tail);
var new_root = clojure.core.rrb_vector.trees.pop_tail.call(null,self__.shift,root_cnt,self__.root.edit,self__.root);
if((new_root == null)){
return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt - (1)),self__.shift,clojure.core.rrb_vector.nodes.empty_node,new_tail,self__.meta,null));
} else {
if((((self__.shift > (5))) && (((new_root.arr[(1)]) == null)))){
return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt - (1)),(self__.shift - (5)),(new_root.arr[(0)]),new_tail,self__.meta,null));
} else {
return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt - (1)),self__.shift,new_root,new_tail,self__.meta,null));

}
}

}
}
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.cnt > (0))){
return (new cljs.core.RSeq(this$__$1,(self__.cnt - (1)),null));
} else {
return null;
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = cljs.core.hash_ordered_coll.call(null,this$__$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return cljs.core.equiv_sequential.call(null,this$__$1,that);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return clojure.core.rrb_vector.rrbt.__GT_Transient.call(null,self__.cnt,self__.shift,clojure.core.rrb_vector.transients.editable_root.call(null,self__.root),clojure.core.rrb_vector.transients.editable_tail.call(null,self__.tail),self__.tail.length);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,self__.meta);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$protocols$PSliceableVector$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$protocols$PSliceableVector$_slicev$arity$3 = (function (this$,start,end){
var self__ = this;
var this$__$1 = this;
var new_cnt = (end - start);
if((((start < (0))) || ((end > self__.cnt)))){
throw (new Error("vector index out of bounds"));
} else {
if((start === end)){
return cljs.core.empty.call(null,this$__$1);
} else {
if((start > end)){
throw (new Error("start index greater than end index"));
} else {
var tail_off = clojure.core.rrb_vector.trees.tail_offset.call(null,self__.cnt,self__.tail);
if((start >= tail_off)){
var new_tail = (new Array(new_cnt));
cljs.core.array_copy.call(null,self__.tail,(start - tail_off),new_tail,(0),new_cnt);

return (new clojure.core.rrb_vector.rrbt.Vector(new_cnt,(5),clojure.core.rrb_vector.nodes.empty_node,new_tail,self__.meta,null));
} else {
var tail_cut_QMARK_ = (end > tail_off);
var new_root = ((tail_cut_QMARK_)?self__.root:clojure.core.rrb_vector.rrbt.slice_right.call(null,self__.root,self__.shift,end));
var new_root__$1 = (((start === (0)))?new_root:clojure.core.rrb_vector.rrbt.slice_left.call(null,new_root,self__.shift,start,(function (){var x__4222__auto__ = end;
var y__4223__auto__ = tail_off;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})()));
var new_tail = ((tail_cut_QMARK_)?(function (){var new_len = (end - tail_off);
var new_tail = (new Array(new_len));
cljs.core.array_copy.call(null,self__.tail,(0),new_tail,(0),new_len);

return new_tail;
})():clojure.core.rrb_vector.trees.array_for.call(null,new_cnt,self__.shift,new_root__$1,[],(new_cnt - (1))));
var new_root__$2 = ((tail_cut_QMARK_)?new_root__$1:clojure.core.rrb_vector.trees.pop_tail.call(null,self__.shift,new_cnt,new_root__$1.edit,new_root__$1));
if((new_root__$2 == null)){
return (new clojure.core.rrb_vector.rrbt.Vector(new_cnt,(5),clojure.core.rrb_vector.nodes.empty_node,new_tail,self__.meta,null));
} else {
var r = new_root__$2;
var s = self__.shift;
while(true){
if((((s > (5))) && (((r.arr[(1)]) == null)))){
<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector/rrbt.js
var G__8052 = (r.arr[(0)]);
var G__8053 = (s - (5));
r = G__8052;
s = G__8053;
=======
var G__16604 = (r.arr[(0)]);
var G__16605 = (s - (5));
r = G__16604;
s = G__16605;
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector/rrbt.js
continue;
} else {
return (new clojure.core.rrb_vector.rrbt.Vector(new_cnt,s,r,new_tail,self__.meta,null));
}
break;
}
}
}

}
}
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var self__ = this;
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f,start);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,k,v){
var self__ = this;
var this$__$1 = this;
return cljs.core._assoc_n.call(null,this$__$1,k,v);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.cnt === (0))){
return null;
} else {
if((clojure.core.rrb_vector.trees.tail_offset.call(null,self__.cnt,self__.tail) === (0))){
return cljs.core.array_seq.call(null,self__.tail);
} else {
return clojure.core.rrb_vector.rrbt.rrb_chunked_seq.call(null,this$__$1,(0),(0));

}
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new clojure.core.rrb_vector.rrbt.Vector(self__.cnt,self__.shift,self__.root,self__.tail,meta__$1,self__.__hash));
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,val){
var self__ = this;
var this$__$1 = this;
if((self__.tail.length < (32))){
var tail_len = self__.tail.length;
var new_tail = (new Array((tail_len + (1))));
cljs.core.array_copy.call(null,self__.tail,(0),new_tail,(0),tail_len);

(new_tail[tail_len] = val);

return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt + (1)),self__.shift,self__.root,new_tail,self__.meta,null));
} else {
var tail_node = cljs.core.__GT_VectorNode.call(null,self__.root.edit,self__.tail);
var new_tail = (function (){var new_arr = [null];
(new_arr[(0)] = val);

return new_arr;
})();
if(clojure.core.rrb_vector.nodes.overflow_QMARK_.call(null,self__.root,self__.shift,self__.cnt)){
if(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,self__.root)){
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_root = cljs.core.__GT_VectorNode.call(null,self__.root.edit,new_arr);
<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector/rrbt.js
var G__8030_8054 = new_arr;
(G__8030_8054[(0)] = self__.root);

(G__8030_8054[(1)] = clojure.core.rrb_vector.trees.new_path.call(null,self__.tail,self__.root.edit,self__.shift,tail_node));
=======
var G__16582_16606 = new_arr;
(G__16582_16606[(0)] = self__.root);

(G__16582_16606[(1)] = clojure.core.rrb_vector.trees.new_path.call(null,self__.tail,self__.root.edit,self__.shift,tail_node));
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector/rrbt.js


return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt + (1)),(self__.shift + (5)),new_root,new_tail,self__.meta,null));
} else {
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_root = cljs.core.__GT_VectorNode.call(null,self__.root.edit,new_arr);
var root_total_range = (clojure.core.rrb_vector.nodes.node_ranges.call(null,self__.root)[(31)]);
<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector/rrbt.js
var G__8031_8055 = new_arr;
(G__8031_8055[(0)] = self__.root);

(G__8031_8055[(1)] = clojure.core.rrb_vector.trees.new_path.call(null,self__.tail,self__.root.edit,self__.shift,tail_node));

(G__8031_8055[(32)] = new_rngs);


var G__8032_8056 = new_rngs;
(G__8032_8056[(0)] = root_total_range);

(G__8032_8056[(1)] = (root_total_range + (32)));

(G__8032_8056[(32)] = (2));
=======
var G__16583_16607 = new_arr;
(G__16583_16607[(0)] = self__.root);

(G__16583_16607[(1)] = clojure.core.rrb_vector.trees.new_path.call(null,self__.tail,self__.root.edit,self__.shift,tail_node));

(G__16583_16607[(32)] = new_rngs);


var G__16584_16608 = new_rngs;
(G__16584_16608[(0)] = root_total_range);

(G__16584_16608[(1)] = (root_total_range + (32)));

(G__16584_16608[(32)] = (2));
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector/rrbt.js


return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt + (1)),(self__.shift + (5)),new_root,new_tail,self__.meta,null));
}
} else {
return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt + (1)),self__.shift,clojure.core.rrb_vector.trees.push_tail.call(null,self__.shift,self__.cnt,self__.root.edit,self__.root,tail_node),new_tail,self__.meta,null));
}
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.call = (function() {
<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector/rrbt.js
var G__8057 = null;
var G__8057__2 = (function (self__,k){
=======
var G__16609 = null;
var G__16609__2 = (function (self__,k){
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector/rrbt.js
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._nth.call(null,this$,k);
});
<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector/rrbt.js
var G__8057__3 = (function (self__,k,not_found){
=======
var G__16609__3 = (function (self__,k,not_found){
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector/rrbt.js
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._nth.call(null,this$,k,not_found);
});
<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector/rrbt.js
G__8057 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__8057__2.call(this,self__,k);
case 3:
return G__8057__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__8057.cljs$core$IFn$_invoke$arity$2 = G__8057__2;
G__8057.cljs$core$IFn$_invoke$arity$3 = G__8057__3;
return G__8057;
})()
;

clojure.core.rrb_vector.rrbt.Vector.prototype.apply = (function (self__,args8029){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args8029)));
=======
G__16609 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__16609__2.call(this,self__,k);
case 3:
return G__16609__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__16609.cljs$core$IFn$_invoke$arity$2 = G__16609__2;
G__16609.cljs$core$IFn$_invoke$arity$3 = G__16609__3;
return G__16609;
})()
;

clojure.core.rrb_vector.rrbt.Vector.prototype.apply = (function (self__,args16581){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args16581)));
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector/rrbt.js
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._nth.call(null,this$,k);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._nth.call(null,this$,k,not_found);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return cljs.core.compare_indexed.call(null,this$__$1,that);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$protocols$PSpliceableVector$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$protocols$PSpliceableVector$_splicev$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return clojure.core.rrb_vector.rrbt.splice_rrbts.call(null,this$__$1,clojure.core.rrb_vector.rrbt._as_rrbt.call(null,that));
});

clojure.core.rrb_vector.rrbt.Vector.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.Symbol(null,"shift","shift",-1657295705,null),new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.Symbol(null,"tail","tail",494507963,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

clojure.core.rrb_vector.rrbt.Vector.cljs$lang$type = true;

clojure.core.rrb_vector.rrbt.Vector.cljs$lang$ctorStr = "clojure.core.rrb-vector.rrbt/Vector";

clojure.core.rrb_vector.rrbt.Vector.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"clojure.core.rrb-vector.rrbt/Vector");
});

/**
 * Positional factory function for clojure.core.rrb-vector.rrbt/Vector.
 */
clojure.core.rrb_vector.rrbt.__GT_Vector = (function clojure$core$rrb_vector$rrbt$__GT_Vector(cnt,shift,root,tail,meta,__hash){
return (new clojure.core.rrb_vector.rrbt.Vector(cnt,shift,root,tail,meta,__hash));
});

cljs.core.PersistentVector.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1 = (function (this$){
var this$__$1 = this;
return (new clojure.core.rrb_vector.rrbt.Vector(cljs.core.count.call(null,this$__$1),this$__$1.shift,this$__$1.root,this$__$1.tail,cljs.core.meta.call(null,this$__$1),null));
});

cljs.core.Subvec.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Subvec.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1 = (function (this$){
var this$__$1 = this;
var v = this$__$1.v;
var start = this$__$1.start;
var end = this$__$1.end;
return clojure.core.rrb_vector.protocols._slicev.call(null,clojure.core.rrb_vector.rrbt._as_rrbt.call(null,v),start,end);
});
clojure.core.rrb_vector.rrbt.shift_from_to = (function clojure$core$rrb_vector$rrbt$shift_from_to(node,from,to){
while(true){
if((from === to)){
return node;
} else {
if(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node)){
<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector/rrbt.js
var G__8061 = cljs.core.__GT_VectorNode.call(null,node.edit,(function (){var G__8058 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__8058[(0)] = node);

return G__8058;
})());
var G__8062 = ((5) + from);
var G__8063 = to;
node = G__8061;
from = G__8062;
to = G__8063;
continue;
} else {
var G__8064 = cljs.core.__GT_VectorNode.call(null,node.edit,(function (){var G__8059 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__8059[(0)] = node);

(G__8059[(32)] = (function (){var G__8060 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__8060[(0)] = clojure.core.rrb_vector.nodes.last_range.call(null,node));

(G__8060[(32)] = (1));

return G__8060;
})());

return G__8059;
})());
var G__8065 = ((5) + from);
var G__8066 = to;
node = G__8064;
from = G__8065;
to = G__8066;
=======
var G__16613 = cljs.core.__GT_VectorNode.call(null,node.edit,(function (){var G__16610 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__16610[(0)] = node);

return G__16610;
})());
var G__16614 = ((5) + from);
var G__16615 = to;
node = G__16613;
from = G__16614;
to = G__16615;
continue;
} else {
var G__16616 = cljs.core.__GT_VectorNode.call(null,node.edit,(function (){var G__16611 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__16611[(0)] = node);

(G__16611[(32)] = (function (){var G__16612 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__16612[(0)] = clojure.core.rrb_vector.nodes.last_range.call(null,node));

(G__16612[(32)] = (1));

return G__16612;
})());

return G__16611;
})());
var G__16617 = ((5) + from);
var G__16618 = to;
node = G__16616;
from = G__16617;
to = G__16618;
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector/rrbt.js
continue;

}
}
break;
}
});
clojure.core.rrb_vector.rrbt.slot_count = (function clojure$core$rrb_vector$rrbt$slot_count(node,shift){
var arr = node.arr;
if((shift === (0))){
return arr.length;
} else {
if(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node)){
return clojure.core.rrb_vector.nodes.index_of_nil.call(null,arr);
} else {
var rngs = clojure.core.rrb_vector.nodes.node_ranges.call(null,node);
return (rngs[(32)]);
}
}
});
clojure.core.rrb_vector.rrbt.subtree_branch_count = (function clojure$core$rrb_vector$rrbt$subtree_branch_count(node,shift){
var arr = node.arr;
var cs = (shift - (5));
if(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node)){
var i = (0);
var sbc = (0);
while(true){
if((i === (32))){
return sbc;
} else {
var temp__5718__auto__ = (arr[i]);
if(cljs.core.truth_(temp__5718__auto__)){
var child = temp__5718__auto__;
<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector/rrbt.js
var G__8067 = (i + (1));
var G__8068 = (sbc + clojure.core.rrb_vector.rrbt.slot_count.call(null,child,cs));
i = G__8067;
sbc = G__8068;
=======
var G__16619 = (i + (1));
var G__16620 = (sbc + clojure.core.rrb_vector.rrbt.slot_count.call(null,child,cs));
i = G__16619;
sbc = G__16620;
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector/rrbt.js
continue;
} else {
return sbc;
}
}
break;
}
} else {
var lim = (clojure.core.rrb_vector.nodes.node_ranges.call(null,node)[(32)]);
var i = (0);
var sbc = (0);
while(true){
if((i === lim)){
return sbc;
} else {
var child = (arr[i]);
<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector/rrbt.js
var G__8069 = (i + (1));
var G__8070 = (sbc + clojure.core.rrb_vector.rrbt.slot_count.call(null,child,cs));
i = G__8069;
sbc = G__8070;
=======
var G__16621 = (i + (1));
var G__16622 = (sbc + clojure.core.rrb_vector.rrbt.slot_count.call(null,child,cs));
i = G__16621;
sbc = G__16622;
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector/rrbt.js
continue;
}
break;
}
}
});
clojure.core.rrb_vector.rrbt.leaf_seq = (function clojure$core$rrb_vector$rrbt$leaf_seq(arr){
<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector/rrbt.js
return cljs.core.mapcat.call(null,(function (p1__8071_SHARP_){
return p1__8071_SHARP_.arr;
=======
return cljs.core.mapcat.call(null,(function (p1__16623_SHARP_){
return p1__16623_SHARP_.arr;
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector/rrbt.js
}),cljs.core.take.call(null,clojure.core.rrb_vector.nodes.index_of_nil.call(null,arr),arr));
});
clojure.core.rrb_vector.rrbt.rebalance_leaves = (function clojure$core$rrb_vector$rrbt$rebalance_leaves(n1,cnt1,n2,cnt2,transferred_leaves){
var slc1 = clojure.core.rrb_vector.rrbt.slot_count.call(null,n1,(5));
var slc2 = clojure.core.rrb_vector.rrbt.slot_count.call(null,n2,(5));
var a = (slc1 + slc2);
var sbc1 = clojure.core.rrb_vector.rrbt.subtree_branch_count.call(null,n1,(5));
var sbc2 = clojure.core.rrb_vector.rrbt.subtree_branch_count.call(null,n2,(5));
var p = (sbc1 + sbc2);
var e = (a - (cljs.core.quot.call(null,(p - (1)),(32)) + (1)));
if((e <= (2))){
return [n1,n2];
} else {
if(((sbc1 + sbc2) <= (1024))){
var reg_QMARK_ = (cljs.core.mod.call(null,p,(32)) === (0));
var new_arr = (new Array(((reg_QMARK_)?(32):(33))));
var new_n1 = cljs.core.__GT_VectorNode.call(null,null,new_arr);
<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector/rrbt.js
var i_8072 = (0);
var bs_8073 = cljs.core.partition_all.call(null,(32),cljs.core.concat.call(null,clojure.core.rrb_vector.rrbt.leaf_seq.call(null,n1.arr),clojure.core.rrb_vector.rrbt.leaf_seq.call(null,n2.arr)));
while(true){
var temp__5720__auto___8074 = cljs.core.seq.call(null,bs_8073);
if(temp__5720__auto___8074){
var xs__6277__auto___8075 = temp__5720__auto___8074;
var block_8076 = cljs.core.first.call(null,xs__6277__auto___8075);
var a_8077__$1 = (new Array(cljs.core.count.call(null,block_8076)));
var i_8078__$1 = (0);
var xs_8079 = cljs.core.seq.call(null,block_8076);
while(true){
if(xs_8079){
(a_8077__$1[i_8078__$1] = cljs.core.first.call(null,xs_8079));

var G__8080 = (i_8078__$1 + (1));
var G__8081 = cljs.core.next.call(null,xs_8079);
i_8078__$1 = G__8080;
xs_8079 = G__8081;
=======
var i_16624 = (0);
var bs_16625 = cljs.core.partition_all.call(null,(32),cljs.core.concat.call(null,clojure.core.rrb_vector.rrbt.leaf_seq.call(null,n1.arr),clojure.core.rrb_vector.rrbt.leaf_seq.call(null,n2.arr)));
while(true){
var temp__5720__auto___16626 = cljs.core.seq.call(null,bs_16625);
if(temp__5720__auto___16626){
var xs__6277__auto___16627 = temp__5720__auto___16626;
var block_16628 = cljs.core.first.call(null,xs__6277__auto___16627);
var a_16629__$1 = (new Array(cljs.core.count.call(null,block_16628)));
var i_16630__$1 = (0);
var xs_16631 = cljs.core.seq.call(null,block_16628);
while(true){
if(xs_16631){
(a_16629__$1[i_16630__$1] = cljs.core.first.call(null,xs_16631));

var G__16632 = (i_16630__$1 + (1));
var G__16633 = cljs.core.next.call(null,xs_16631);
i_16630__$1 = G__16632;
xs_16631 = G__16633;
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector/rrbt.js
continue;
} else {
}
break;
}

<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector/rrbt.js
(new_arr[i_8072] = cljs.core.__GT_VectorNode.call(null,null,a_8077__$1));

var G__8082 = (i_8072 + (1));
var G__8083 = cljs.core.next.call(null,bs_8073);
i_8072 = G__8082;
bs_8073 = G__8083;
=======
(new_arr[i_16624] = cljs.core.__GT_VectorNode.call(null,null,a_16629__$1));

var G__16634 = (i_16624 + (1));
var G__16635 = cljs.core.next.call(null,bs_16625);
i_16624 = G__16634;
bs_16625 = G__16635;
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector/rrbt.js
continue;
} else {
}
break;
}

if((!(reg_QMARK_))){
(new_arr[(32)] = clojure.core.rrb_vector.nodes.regular_ranges.call(null,(5),p));
} else {
}

transferred_leaves.val = sbc2;

return [new_n1,null];
} else {
var reg_QMARK_ = (cljs.core.mod.call(null,p,(32)) === (0));
var new_arr1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_arr2 = (new Array(((reg_QMARK_)?(32):(33))));
var new_n1 = cljs.core.__GT_VectorNode.call(null,null,new_arr1);
var new_n2 = cljs.core.__GT_VectorNode.call(null,null,new_arr2);
<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector/rrbt.js
var i_8084 = (0);
var bs_8085 = cljs.core.partition_all.call(null,(32),cljs.core.concat.call(null,clojure.core.rrb_vector.rrbt.leaf_seq.call(null,n1.arr),clojure.core.rrb_vector.rrbt.leaf_seq.call(null,n2.arr)));
while(true){
var temp__5720__auto___8086 = cljs.core.seq.call(null,bs_8085);
if(temp__5720__auto___8086){
var xs__6277__auto___8087 = temp__5720__auto___8086;
var block_8088 = cljs.core.first.call(null,xs__6277__auto___8087);
var a_8089__$1 = (new Array(cljs.core.count.call(null,block_8088)));
var i_8090__$1 = (0);
var xs_8091 = cljs.core.seq.call(null,block_8088);
while(true){
if(xs_8091){
(a_8089__$1[i_8090__$1] = cljs.core.first.call(null,xs_8091));

var G__8092 = (i_8090__$1 + (1));
var G__8093 = cljs.core.next.call(null,xs_8091);
i_8090__$1 = G__8092;
xs_8091 = G__8093;
=======
var i_16636 = (0);
var bs_16637 = cljs.core.partition_all.call(null,(32),cljs.core.concat.call(null,clojure.core.rrb_vector.rrbt.leaf_seq.call(null,n1.arr),clojure.core.rrb_vector.rrbt.leaf_seq.call(null,n2.arr)));
while(true){
var temp__5720__auto___16638 = cljs.core.seq.call(null,bs_16637);
if(temp__5720__auto___16638){
var xs__6277__auto___16639 = temp__5720__auto___16638;
var block_16640 = cljs.core.first.call(null,xs__6277__auto___16639);
var a_16641__$1 = (new Array(cljs.core.count.call(null,block_16640)));
var i_16642__$1 = (0);
var xs_16643 = cljs.core.seq.call(null,block_16640);
while(true){
if(xs_16643){
(a_16641__$1[i_16642__$1] = cljs.core.first.call(null,xs_16643));

var G__16644 = (i_16642__$1 + (1));
var G__16645 = cljs.core.next.call(null,xs_16643);
i_16642__$1 = G__16644;
xs_16643 = G__16645;
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector/rrbt.js
continue;
} else {
}
break;
}

<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector/rrbt.js
if((i_8084 < (32))){
(new_arr1[i_8084] = cljs.core.__GT_VectorNode.call(null,null,a_8089__$1));
} else {
(new_arr2[(i_8084 - (32))] = cljs.core.__GT_VectorNode.call(null,null,a_8089__$1));
}

var G__8094 = (i_8084 + (1));
var G__8095 = cljs.core.next.call(null,bs_8085);
i_8084 = G__8094;
bs_8085 = G__8095;
=======
if((i_16636 < (32))){
(new_arr1[i_16636] = cljs.core.__GT_VectorNode.call(null,null,a_16641__$1));
} else {
(new_arr2[(i_16636 - (32))] = cljs.core.__GT_VectorNode.call(null,null,a_16641__$1));
}

var G__16646 = (i_16636 + (1));
var G__16647 = cljs.core.next.call(null,bs_16637);
i_16636 = G__16646;
bs_16637 = G__16647;
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector/rrbt.js
continue;
} else {
}
break;
}

if((!(reg_QMARK_))){
(new_arr2[(32)] = clojure.core.rrb_vector.nodes.regular_ranges.call(null,(5),(p - (1024))));
} else {
}

transferred_leaves.val = ((1024) - sbc1);

return [new_n1,new_n2];

}
}
});
clojure.core.rrb_vector.rrbt.child_seq = (function clojure$core$rrb_vector$rrbt$child_seq(node,shift,cnt){
var arr = node.arr;
var rngs = ((clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node))?clojure.core.rrb_vector.nodes.regular_ranges.call(null,shift,cnt):clojure.core.rrb_vector.nodes.node_ranges.call(null,node));
var cs = (cljs.core.truth_(rngs)?(rngs[(32)]):clojure.core.rrb_vector.nodes.index_of_nil.call(null,arr));
var cseq = ((function (arr,rngs,cs){
return (function clojure$core$rrb_vector$rrbt$child_seq_$_cseq(c,r){
var arr__$1 = c.arr;
var rngs__$1 = ((clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,c))?clojure.core.rrb_vector.nodes.regular_ranges.call(null,(shift - (5)),r):clojure.core.rrb_vector.nodes.node_ranges.call(null,c));
var gcs = (cljs.core.truth_(rngs__$1)?(rngs__$1[(32)]):clojure.core.rrb_vector.nodes.index_of_nil.call(null,arr__$1));
return cljs.core.map.call(null,cljs.core.list,cljs.core.take.call(null,gcs,arr__$1),cljs.core.take.call(null,gcs,cljs.core.map.call(null,cljs.core._,rngs__$1,cljs.core.cons.call(null,(0),rngs__$1))));
});})(arr,rngs,cs))
;
return cljs.core.mapcat.call(null,cseq,cljs.core.take.call(null,cs,arr),cljs.core.take.call(null,cs,cljs.core.map.call(null,cljs.core._,rngs,cljs.core.cons.call(null,(0),rngs))));
});
clojure.core.rrb_vector.rrbt.rebalance = (function clojure$core$rrb_vector$rrbt$rebalance(shift,n1,cnt1,n2,cnt2,transferred_leaves){
if((n2 == null)){
return [n1,null];
} else {
var slc1 = clojure.core.rrb_vector.rrbt.slot_count.call(null,n1,shift);
var slc2 = clojure.core.rrb_vector.rrbt.slot_count.call(null,n2,shift);
var a = (slc1 + slc2);
var sbc1 = clojure.core.rrb_vector.rrbt.subtree_branch_count.call(null,n1,shift);
var sbc2 = clojure.core.rrb_vector.rrbt.subtree_branch_count.call(null,n2,shift);
var p = (sbc1 + sbc2);
var e = (a - (cljs.core.quot.call(null,(p - (1)),(32)) + (1)));
if((e <= (2))){
return [n1,n2];
} else {
if(((sbc1 + sbc2) <= (1024))){
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_n1 = cljs.core.__GT_VectorNode.call(null,null,new_arr);
<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector/rrbt.js
var i_8102 = (0);
var bs_8103 = cljs.core.partition_all.call(null,(32),cljs.core.concat.call(null,clojure.core.rrb_vector.rrbt.child_seq.call(null,n1,shift,cnt1),clojure.core.rrb_vector.rrbt.child_seq.call(null,n2,shift,cnt2)));
while(true){
var temp__5720__auto___8104 = cljs.core.seq.call(null,bs_8103);
if(temp__5720__auto___8104){
var xs__6277__auto___8105 = temp__5720__auto___8104;
var block_8106 = cljs.core.first.call(null,xs__6277__auto___8105);
var a_8107__$1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var r_8108 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(a_8107__$1[(32)] = r_8108);

(r_8108[(32)] = cljs.core.count.call(null,block_8106));

var i_8109__$1 = (0);
var o_8110 = (0);
var gcs_8111 = cljs.core.seq.call(null,block_8106);
while(true){
var temp__5720__auto___8112__$1 = cljs.core.seq.call(null,gcs_8111);
if(temp__5720__auto___8112__$1){
var xs__6277__auto___8113__$1 = temp__5720__auto___8112__$1;
var vec__8096_8114 = cljs.core.first.call(null,xs__6277__auto___8113__$1);
var gc_8115 = cljs.core.nth.call(null,vec__8096_8114,(0),null);
var gcr_8116 = cljs.core.nth.call(null,vec__8096_8114,(1),null);
(a_8107__$1[i_8109__$1] = gc_8115);

(r_8108[i_8109__$1] = (o_8110 + gcr_8116));

var G__8117 = (i_8109__$1 + (1));
var G__8118 = (o_8110 + gcr_8116);
var G__8119 = cljs.core.next.call(null,gcs_8111);
i_8109__$1 = G__8117;
o_8110 = G__8118;
gcs_8111 = G__8119;
=======
var i_16654 = (0);
var bs_16655 = cljs.core.partition_all.call(null,(32),cljs.core.concat.call(null,clojure.core.rrb_vector.rrbt.child_seq.call(null,n1,shift,cnt1),clojure.core.rrb_vector.rrbt.child_seq.call(null,n2,shift,cnt2)));
while(true){
var temp__5720__auto___16656 = cljs.core.seq.call(null,bs_16655);
if(temp__5720__auto___16656){
var xs__6277__auto___16657 = temp__5720__auto___16656;
var block_16658 = cljs.core.first.call(null,xs__6277__auto___16657);
var a_16659__$1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var r_16660 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(a_16659__$1[(32)] = r_16660);

(r_16660[(32)] = cljs.core.count.call(null,block_16658));

var i_16661__$1 = (0);
var o_16662 = (0);
var gcs_16663 = cljs.core.seq.call(null,block_16658);
while(true){
var temp__5720__auto___16664__$1 = cljs.core.seq.call(null,gcs_16663);
if(temp__5720__auto___16664__$1){
var xs__6277__auto___16665__$1 = temp__5720__auto___16664__$1;
var vec__16648_16666 = cljs.core.first.call(null,xs__6277__auto___16665__$1);
var gc_16667 = cljs.core.nth.call(null,vec__16648_16666,(0),null);
var gcr_16668 = cljs.core.nth.call(null,vec__16648_16666,(1),null);
(a_16659__$1[i_16661__$1] = gc_16667);

(r_16660[i_16661__$1] = (o_16662 + gcr_16668));

var G__16669 = (i_16661__$1 + (1));
var G__16670 = (o_16662 + gcr_16668);
var G__16671 = cljs.core.next.call(null,gcs_16663);
i_16661__$1 = G__16669;
o_16662 = G__16670;
gcs_16663 = G__16671;
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector/rrbt.js
continue;
} else {
}
break;
}

<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector/rrbt.js
(new_arr[i_8102] = cljs.core.__GT_VectorNode.call(null,null,a_8107__$1));

(new_rngs[i_8102] = ((r_8108[((r_8108[(32)]) - (1))]) + (((i_8102 > (0)))?(new_rngs[(i_8102 - (1))]):(0))));

(new_rngs[(32)] = (i_8102 + (1)));

var G__8120 = (i_8102 + (1));
var G__8121 = cljs.core.next.call(null,bs_8103);
i_8102 = G__8120;
bs_8103 = G__8121;
=======
(new_arr[i_16654] = cljs.core.__GT_VectorNode.call(null,null,a_16659__$1));

(new_rngs[i_16654] = ((r_16660[((r_16660[(32)]) - (1))]) + (((i_16654 > (0)))?(new_rngs[(i_16654 - (1))]):(0))));

(new_rngs[(32)] = (i_16654 + (1)));

var G__16672 = (i_16654 + (1));
var G__16673 = cljs.core.next.call(null,bs_16655);
i_16654 = G__16672;
bs_16655 = G__16673;
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector/rrbt.js
continue;
} else {
}
break;
}

(new_arr[(32)] = new_rngs);

transferred_leaves.val = cnt2;

return [new_n1,null];
} else {
var new_arr1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_arr2 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs2 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_n1 = cljs.core.__GT_VectorNode.call(null,null,new_arr1);
var new_n2 = cljs.core.__GT_VectorNode.call(null,null,new_arr2);
<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector/rrbt.js
var i_8122 = (0);
var bs_8123 = cljs.core.partition_all.call(null,(32),cljs.core.concat.call(null,clojure.core.rrb_vector.rrbt.child_seq.call(null,n1,shift,cnt1),clojure.core.rrb_vector.rrbt.child_seq.call(null,n2,shift,cnt2)));
while(true){
var temp__5720__auto___8124 = cljs.core.seq.call(null,bs_8123);
if(temp__5720__auto___8124){
var xs__6277__auto___8125 = temp__5720__auto___8124;
var block_8126 = cljs.core.first.call(null,xs__6277__auto___8125);
var a_8127__$1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var r_8128 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(a_8127__$1[(32)] = r_8128);

(r_8128[(32)] = cljs.core.count.call(null,block_8126));

var i_8129__$1 = (0);
var o_8130 = (0);
var gcs_8131 = cljs.core.seq.call(null,block_8126);
while(true){
var temp__5720__auto___8132__$1 = cljs.core.seq.call(null,gcs_8131);
if(temp__5720__auto___8132__$1){
var xs__6277__auto___8133__$1 = temp__5720__auto___8132__$1;
var vec__8099_8134 = cljs.core.first.call(null,xs__6277__auto___8133__$1);
var gc_8135 = cljs.core.nth.call(null,vec__8099_8134,(0),null);
var gcr_8136 = cljs.core.nth.call(null,vec__8099_8134,(1),null);
(a_8127__$1[i_8129__$1] = gc_8135);

(r_8128[i_8129__$1] = (o_8130 + gcr_8136));

var G__8137 = (i_8129__$1 + (1));
var G__8138 = (o_8130 + gcr_8136);
var G__8139 = cljs.core.next.call(null,gcs_8131);
i_8129__$1 = G__8137;
o_8130 = G__8138;
gcs_8131 = G__8139;
=======
var i_16674 = (0);
var bs_16675 = cljs.core.partition_all.call(null,(32),cljs.core.concat.call(null,clojure.core.rrb_vector.rrbt.child_seq.call(null,n1,shift,cnt1),clojure.core.rrb_vector.rrbt.child_seq.call(null,n2,shift,cnt2)));
while(true){
var temp__5720__auto___16676 = cljs.core.seq.call(null,bs_16675);
if(temp__5720__auto___16676){
var xs__6277__auto___16677 = temp__5720__auto___16676;
var block_16678 = cljs.core.first.call(null,xs__6277__auto___16677);
var a_16679__$1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var r_16680 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(a_16679__$1[(32)] = r_16680);

(r_16680[(32)] = cljs.core.count.call(null,block_16678));

var i_16681__$1 = (0);
var o_16682 = (0);
var gcs_16683 = cljs.core.seq.call(null,block_16678);
while(true){
var temp__5720__auto___16684__$1 = cljs.core.seq.call(null,gcs_16683);
if(temp__5720__auto___16684__$1){
var xs__6277__auto___16685__$1 = temp__5720__auto___16684__$1;
var vec__16651_16686 = cljs.core.first.call(null,xs__6277__auto___16685__$1);
var gc_16687 = cljs.core.nth.call(null,vec__16651_16686,(0),null);
var gcr_16688 = cljs.core.nth.call(null,vec__16651_16686,(1),null);
(a_16679__$1[i_16681__$1] = gc_16687);

(r_16680[i_16681__$1] = (o_16682 + gcr_16688));

var G__16689 = (i_16681__$1 + (1));
var G__16690 = (o_16682 + gcr_16688);
var G__16691 = cljs.core.next.call(null,gcs_16683);
i_16681__$1 = G__16689;
o_16682 = G__16690;
gcs_16683 = G__16691;
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector/rrbt.js
continue;
} else {
}
break;
}

<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector/rrbt.js
if((((i_8122 < (32))) && ((((i_8122 * (32)) + cljs.core.count.call(null,block_8126)) > sbc1)))){
var tbs_8140 = (((i_8122 * (32)) + cljs.core.count.call(null,block_8126)) - sbc1);
var li_8141 = ((r_8128[(32)]) - (1));
var d_8142 = (((tbs_8140 >= (32)))?(r_8128[li_8141]):((r_8128[li_8141]) - (r_8128[(li_8141 - tbs_8140)])));
transferred_leaves.val = (transferred_leaves.val + d_8142);
} else {
}

var new_arr_8143 = (((i_8122 < (32)))?new_arr1:new_arr2);
var new_rngs_8144 = (((i_8122 < (32)))?new_rngs1:new_rngs2);
var i_8145__$1 = cljs.core.mod.call(null,i_8122,(32));
(new_arr_8143[i_8145__$1] = cljs.core.__GT_VectorNode.call(null,null,a_8127__$1));

(new_rngs_8144[i_8145__$1] = ((r_8128[((r_8128[(32)]) - (1))]) + (((i_8145__$1 > (0)))?(new_rngs_8144[(i_8145__$1 - (1))]):(0))));

(new_rngs_8144[(32)] = (i_8145__$1 + (1)));

var G__8146 = (i_8122 + (1));
var G__8147 = cljs.core.next.call(null,bs_8123);
i_8122 = G__8146;
bs_8123 = G__8147;
=======
if((((i_16674 < (32))) && ((((i_16674 * (32)) + cljs.core.count.call(null,block_16678)) > sbc1)))){
var tbs_16692 = (((i_16674 * (32)) + cljs.core.count.call(null,block_16678)) - sbc1);
var li_16693 = ((r_16680[(32)]) - (1));
var d_16694 = (((tbs_16692 >= (32)))?(r_16680[li_16693]):((r_16680[li_16693]) - (r_16680[(li_16693 - tbs_16692)])));
transferred_leaves.val = (transferred_leaves.val + d_16694);
} else {
}

var new_arr_16695 = (((i_16674 < (32)))?new_arr1:new_arr2);
var new_rngs_16696 = (((i_16674 < (32)))?new_rngs1:new_rngs2);
var i_16697__$1 = cljs.core.mod.call(null,i_16674,(32));
(new_arr_16695[i_16697__$1] = cljs.core.__GT_VectorNode.call(null,null,a_16679__$1));

(new_rngs_16696[i_16697__$1] = ((r_16680[((r_16680[(32)]) - (1))]) + (((i_16697__$1 > (0)))?(new_rngs_16696[(i_16697__$1 - (1))]):(0))));

(new_rngs_16696[(32)] = (i_16697__$1 + (1)));

var G__16698 = (i_16674 + (1));
var G__16699 = cljs.core.next.call(null,bs_16675);
i_16674 = G__16698;
bs_16675 = G__16699;
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector/rrbt.js
continue;
} else {
}
break;
}

(new_arr1[(32)] = new_rngs1);

(new_arr2[(32)] = new_rngs2);

return [new_n1,new_n2];

}
}
}
});
clojure.core.rrb_vector.rrbt.zippath = (function clojure$core$rrb_vector$rrbt$zippath(shift,n1,cnt1,n2,cnt2,transferred_leaves){
if((shift === (5))){
return clojure.core.rrb_vector.rrbt.rebalance_leaves.call(null,n1,cnt1,n2,cnt2,transferred_leaves);
} else {
var c1 = clojure.core.rrb_vector.nodes.last_child.call(null,n1);
var c2 = clojure.core.rrb_vector.nodes.first_child.call(null,n2);
var ccnt1 = ((clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,n1))?(function (){var m = cljs.core.mod.call(null,cnt1,((1) << shift));
if((m === (0))){
return ((1) << shift);
} else {
return m;
}
})():(function (){var rngs = clojure.core.rrb_vector.nodes.node_ranges.call(null,n1);
var i = ((rngs[(32)]) - (1));
if((i === (0))){
return (rngs[(0)]);
} else {
return ((rngs[i]) - (rngs[(i - (1))]));
}
})());
var ccnt2 = ((clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,n2))?(function (){var m = cljs.core.mod.call(null,cnt2,((1) << shift));
if((m === (0))){
return ((1) << shift);
} else {
return m;
}
})():(clojure.core.rrb_vector.nodes.node_ranges.call(null,n2)[(0)]));
var next_transferred_leaves = (new cljs.core.Box((0)));
<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector/rrbt.js
var vec__8148 = clojure.core.rrb_vector.rrbt.zippath.call(null,(shift - (5)),c1,ccnt1,c2,ccnt2,next_transferred_leaves);
var new_c1 = cljs.core.nth.call(null,vec__8148,(0),null);
var new_c2 = cljs.core.nth.call(null,vec__8148,(1),null);
=======
var vec__16700 = clojure.core.rrb_vector.rrbt.zippath.call(null,(shift - (5)),c1,ccnt1,c2,ccnt2,next_transferred_leaves);
var new_c1 = cljs.core.nth.call(null,vec__16700,(0),null);
var new_c2 = cljs.core.nth.call(null,vec__16700,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector/rrbt.js
var d = next_transferred_leaves.val;
transferred_leaves.val = (transferred_leaves.val + d);

return clojure.core.rrb_vector.rrbt.rebalance.call(null,shift,(((c1 === new_c1))?n1:clojure.core.rrb_vector.nodes.replace_rightmost_child.call(null,shift,n1,new_c1,d)),(cnt1 + d),(cljs.core.truth_(new_c2)?(((c2 === new_c2))?n2:clojure.core.rrb_vector.nodes.replace_leftmost_child.call(null,shift,n2,cnt2,new_c2,d)):clojure.core.rrb_vector.nodes.remove_leftmost_child.call(null,shift,n2)),(cnt2 - d),transferred_leaves);
}
});
clojure.core.rrb_vector.rrbt.squash_nodes = (function clojure$core$rrb_vector$rrbt$squash_nodes(shift,n1,cnt1,n2,cnt2){
var arr1 = n1.arr;
var arr2 = n2.arr;
var li1 = clojure.core.rrb_vector.nodes.index_of_nil.call(null,arr1);
var li2 = clojure.core.rrb_vector.nodes.index_of_nil.call(null,arr2);
var slots = cljs.core.concat.call(null,cljs.core.take.call(null,li1,arr1),cljs.core.take.call(null,li2,arr2));
if((cljs.core.count.call(null,slots) > (32))){
return [n1,n2];
} else {
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var rngs1 = cljs.core.take.call(null,li1,((clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,n1))?clojure.core.rrb_vector.nodes.regular_ranges.call(null,shift,cnt1):clojure.core.rrb_vector.nodes.node_ranges.call(null,n1)));
var rngs2 = cljs.core.take.call(null,li2,((clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,n2))?clojure.core.rrb_vector.nodes.regular_ranges.call(null,shift,cnt2):clojure.core.rrb_vector.nodes.node_ranges.call(null,n2)));
var rngs2__$1 = (function (){var r = cljs.core.last.call(null,rngs1);
return cljs.core.map.call(null,((function (r,new_rngs,new_arr,rngs1,rngs2,arr1,arr2,li1,li2,slots){
<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector/rrbt.js
return (function (p1__8151_SHARP_){
return (p1__8151_SHARP_ + r);
=======
return (function (p1__16703_SHARP_){
return (p1__16703_SHARP_ + r);
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector/rrbt.js
});})(r,new_rngs,new_arr,rngs1,rngs2,arr1,arr2,li1,li2,slots))
,rngs2);
})();
var rngs = cljs.core.concat.call(null,rngs1,rngs2__$1);
(new_arr[(32)] = new_rngs);

<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector/rrbt.js
var i_8152 = (0);
var cs_8153 = cljs.core.seq.call(null,slots);
while(true){
if(cs_8153){
(new_arr[i_8152] = cljs.core.first.call(null,cs_8153));

var G__8154 = (i_8152 + (1));
var G__8155 = cljs.core.next.call(null,cs_8153);
i_8152 = G__8154;
cs_8153 = G__8155;
=======
var i_16704 = (0);
var cs_16705 = cljs.core.seq.call(null,slots);
while(true){
if(cs_16705){
(new_arr[i_16704] = cljs.core.first.call(null,cs_16705));

var G__16706 = (i_16704 + (1));
var G__16707 = cljs.core.next.call(null,cs_16705);
i_16704 = G__16706;
cs_16705 = G__16707;
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector/rrbt.js
continue;
} else {
}
break;
}

<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector/rrbt.js
var i_8156 = (0);
var rngs_8157__$1 = cljs.core.seq.call(null,rngs);
while(true){
if(rngs_8157__$1){
(new_rngs[i_8156] = cljs.core.first.call(null,rngs_8157__$1));

var G__8158 = (i_8156 + (1));
var G__8159 = cljs.core.next.call(null,rngs_8157__$1);
i_8156 = G__8158;
rngs_8157__$1 = G__8159;
continue;
} else {
(new_rngs[(32)] = i_8156);
=======
var i_16708 = (0);
var rngs_16709__$1 = cljs.core.seq.call(null,rngs);
while(true){
if(rngs_16709__$1){
(new_rngs[i_16708] = cljs.core.first.call(null,rngs_16709__$1));

var G__16710 = (i_16708 + (1));
var G__16711 = cljs.core.next.call(null,rngs_16709__$1);
i_16708 = G__16710;
rngs_16709__$1 = G__16711;
continue;
} else {
(new_rngs[(32)] = i_16708);
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector/rrbt.js
}
break;
}

return [cljs.core.__GT_VectorNode.call(null,null,new_arr),null];
}
});
clojure.core.rrb_vector.rrbt.splice_rrbts = (function clojure$core$rrb_vector$rrbt$splice_rrbts(v1,v2){
if((cljs.core.count.call(null,v1) === (0))){
return v2;
} else {
if((cljs.core.count.call(null,v2) < (33))){
return cljs.core.into.call(null,v1,v2);
} else {
var s1 = v1.shift;
var s2 = v2.shift;
var r1 = v1.root;
var o_QMARK_ = clojure.core.rrb_vector.nodes.overflow_QMARK_.call(null,r1,s1,(cljs.core.count.call(null,v1) + ((32) - v1.tail.length)));
var r1__$1 = ((o_QMARK_)?(function (){var tail = v1.tail;
var tail_node = cljs.core.__GT_VectorNode.call(null,null,tail);
var reg_QMARK_ = ((clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,r1)) && ((tail.length === (32))));
var arr = (new Array(((reg_QMARK_)?(32):(33))));
(arr[(0)] = r1);

(arr[(1)] = clojure.core.rrb_vector.nodes.new_path_STAR_.call(null,s1,tail_node));

if((!(reg_QMARK_))){
<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector/rrbt.js
var rngs_8167 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(rngs_8167[(32)] = (2));

(rngs_8167[(0)] = (cljs.core.count.call(null,v1) - tail.length));

(rngs_8167[(1)] = cljs.core.count.call(null,v1));

(arr[(32)] = rngs_8167);
=======
var rngs_16719 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(rngs_16719[(32)] = (2));

(rngs_16719[(0)] = (cljs.core.count.call(null,v1) - tail.length));

(rngs_16719[(1)] = cljs.core.count.call(null,v1));

(arr[(32)] = rngs_16719);
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector/rrbt.js
} else {
}

return cljs.core.__GT_VectorNode.call(null,null,arr);
})():clojure.core.rrb_vector.nodes.fold_tail.call(null,r1,s1,clojure.core.rrb_vector.trees.tail_offset.call(null,v1.cnt,v1.tail),v1.tail));
var s1__$1 = ((o_QMARK_)?(s1 + (5)):s1);
var r2 = v2.root;
var s = (function (){var x__4219__auto__ = s1__$1;
var y__4220__auto__ = s2;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var r1__$2 = clojure.core.rrb_vector.rrbt.shift_from_to.call(null,r1__$1,s1__$1,s);
var r2__$1 = clojure.core.rrb_vector.rrbt.shift_from_to.call(null,r2,s2,s);
var transferred_leaves = (new cljs.core.Box((0)));
<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector/rrbt.js
var vec__8160 = clojure.core.rrb_vector.rrbt.zippath.call(null,s,r1__$2,cljs.core.count.call(null,v1),r2__$1,(cljs.core.count.call(null,v2) - v2.tail.length),transferred_leaves);
var n1 = cljs.core.nth.call(null,vec__8160,(0),null);
var n2 = cljs.core.nth.call(null,vec__8160,(1),null);
var d = transferred_leaves.val;
var ncnt1 = (cljs.core.count.call(null,v1) + d);
var ncnt2 = ((cljs.core.count.call(null,v2) - v2.tail.length) - d);
var vec__8163 = (((n2 === r2__$1))?clojure.core.rrb_vector.rrbt.squash_nodes.call(null,s,n1,ncnt1,n2,ncnt2):[n1,n2]);
var n1__$1 = cljs.core.nth.call(null,vec__8163,(0),null);
var n2__$1 = cljs.core.nth.call(null,vec__8163,(1),null);
=======
var vec__16712 = clojure.core.rrb_vector.rrbt.zippath.call(null,s,r1__$2,cljs.core.count.call(null,v1),r2__$1,(cljs.core.count.call(null,v2) - v2.tail.length),transferred_leaves);
var n1 = cljs.core.nth.call(null,vec__16712,(0),null);
var n2 = cljs.core.nth.call(null,vec__16712,(1),null);
var d = transferred_leaves.val;
var ncnt1 = (cljs.core.count.call(null,v1) + d);
var ncnt2 = ((cljs.core.count.call(null,v2) - v2.tail.length) - d);
var vec__16715 = (((n2 === r2__$1))?clojure.core.rrb_vector.rrbt.squash_nodes.call(null,s,n1,ncnt1,n2,ncnt2):[n1,n2]);
var n1__$1 = cljs.core.nth.call(null,vec__16715,(0),null);
var n2__$1 = cljs.core.nth.call(null,vec__16715,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector/rrbt.js
var ncnt1__$1 = (cljs.core.truth_(n2__$1)?ncnt1:(ncnt1 + ncnt2));
var ncnt2__$1 = (cljs.core.truth_(n2__$1)?ncnt2:(0));
if(cljs.core.truth_(n2__$1)){
var arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_root = cljs.core.__GT_VectorNode.call(null,null,arr);
(arr[(0)] = n1__$1);

(arr[(1)] = n2__$1);

<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector/rrbt.js
(arr[(32)] = (function (){var G__8166 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__8166[(0)] = ncnt1__$1);

(G__8166[(1)] = (ncnt1__$1 + ncnt2__$1));

(G__8166[(32)] = (2));

return G__8166;
=======
(arr[(32)] = (function (){var G__16718 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__16718[(0)] = ncnt1__$1);

(G__16718[(1)] = (ncnt1__$1 + ncnt2__$1));

(G__16718[(32)] = (2));

return G__16718;
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector/rrbt.js
})());

return (new clojure.core.rrb_vector.rrbt.Vector((cljs.core.count.call(null,v1) + cljs.core.count.call(null,v2)),(s + (5)),new_root,v2.tail,null,null));
} else {
var r = n1__$1;
var s__$1 = s;
while(true){
if((((s__$1 > (5))) && (((r.arr[(1)]) == null)))){
<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector/rrbt.js
var G__8168 = (r.arr[(0)]);
var G__8169 = (s__$1 - (5));
r = G__8168;
s__$1 = G__8169;
=======
var G__16720 = (r.arr[(0)]);
var G__16721 = (s__$1 - (5));
r = G__16720;
s__$1 = G__16721;
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector/rrbt.js
continue;
} else {
return (new clojure.core.rrb_vector.rrbt.Vector((cljs.core.count.call(null,v1) + cljs.core.count.call(null,v2)),s__$1,r,v2.tail,null,null));
}
break;
}
}

}
}
});

/**
* @constructor
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ITransientCollection}
 * @implements {cljs.core.ITransientVector}
 * @implements {cljs.core.ITransientAssociative}
*/
clojure.core.rrb_vector.rrbt.Transient = (function (cnt,shift,root,tail,tidx){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.tidx = tidx;
this.cljs$lang$protocol_mask$partition1$ = 88;
this.cljs$lang$protocol_mask$partition0$ = 2;
});
clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
if(self__.root.edit){
if((self__.tidx < (32))){
(self__.tail[self__.tidx] = o);

self__.cnt = (self__.cnt + (1));

self__.tidx = (self__.tidx + (1));

return this$__$1;
} else {
var tail_node = cljs.core.__GT_VectorNode.call(null,self__.root.edit,self__.tail);
var new_tail = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(new_tail[(0)] = o);

self__.tail = new_tail;

self__.tidx = (1);

if(clojure.core.rrb_vector.nodes.overflow_QMARK_.call(null,self__.root,self__.shift,self__.cnt)){
if(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,self__.root)){
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector/rrbt.js
var G__8170_8173 = new_arr;
(G__8170_8173[(0)] = self__.root);

(G__8170_8173[(1)] = clojure.core.rrb_vector.trees.new_path.call(null,self__.tail,self__.root.edit,self__.shift,tail_node));
=======
var G__16722_16725 = new_arr;
(G__16722_16725[(0)] = self__.root);

(G__16722_16725[(1)] = clojure.core.rrb_vector.trees.new_path.call(null,self__.tail,self__.root.edit,self__.shift,tail_node));
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector/rrbt.js


self__.root = cljs.core.__GT_VectorNode.call(null,self__.root.edit,new_arr);

self__.shift = (self__.shift + (5));

self__.cnt = (self__.cnt + (1));

return this$__$1;
} else {
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_root = cljs.core.__GT_VectorNode.call(null,self__.root.edit,new_arr);
var root_total_range = (clojure.core.rrb_vector.nodes.node_ranges.call(null,self__.root)[(31)]);
<<<<<<< HEAD:docs/js/compiled/worker-out/clojure/core/rrb_vector/rrbt.js
var G__8171_8174 = new_arr;
(G__8171_8174[(0)] = self__.root);

(G__8171_8174[(1)] = clojure.core.rrb_vector.trees.new_path.call(null,self__.tail,self__.root.edit,self__.shift,tail_node));

(G__8171_8174[(32)] = new_rngs);


var G__8172_8175 = new_rngs;
(G__8172_8175[(0)] = root_total_range);

(G__8172_8175[(1)] = (root_total_range + (32)));

(G__8172_8175[(32)] = (2));
=======
var G__16723_16726 = new_arr;
(G__16723_16726[(0)] = self__.root);

(G__16723_16726[(1)] = clojure.core.rrb_vector.trees.new_path.call(null,self__.tail,self__.root.edit,self__.shift,tail_node));

(G__16723_16726[(32)] = new_rngs);


var G__16724_16727 = new_rngs;
(G__16724_16727[(0)] = root_total_range);

(G__16724_16727[(1)] = (root_total_range + (32)));

(G__16724_16727[(32)] = (2));
>>>>>>> :simple optimizations:docs/js/compiled/out/clojure/core/rrb_vector/rrbt.js


self__.root = new_root;

self__.shift = (self__.shift + (5));

self__.cnt = (self__.cnt + (1));

return this$__$1;
}
} else {
var new_root = clojure.core.rrb_vector.transients.push_tail_BANG_.call(null,self__.shift,self__.cnt,self__.root.edit,self__.root,tail_node);
self__.root = new_root;

self__.cnt = (self__.cnt + (1));

return this$__$1;
}
}
} else {
throw (new Error("conj! after persistent!"));
}
});

clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.root.edit){
self__.root.edit = null;

var trimmed_tail = (new Array(self__.tidx));
cljs.core.array_copy.call(null,self__.tail,(0),trimmed_tail,(0),self__.tidx);

return (new clojure.core.rrb_vector.rrbt.Vector(self__.cnt,self__.shift,self__.root,trimmed_tail,null,null));
} else {
throw (new Error("persistent! called twice"));
}
});

clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (this$,key,val){
var self__ = this;
var this$__$1 = this;
return cljs.core._assoc_n_BANG_.call(null,this$__$1,key,val);
});

clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (this$,i,val){
var self__ = this;
var this$__$1 = this;
if(self__.root.edit){
if(((((0) <= i)) && ((i < self__.cnt)))){
var tail_off = (self__.cnt - self__.tidx);
if((tail_off <= i)){
(self__.tail[(i - tail_off)] = val);
} else {
self__.root = clojure.core.rrb_vector.transients.do_assoc_BANG_.call(null,self__.shift,self__.root.edit,self__.root,i,val);
}

return this$__$1;
} else {
if((i === self__.cnt)){
return cljs.core._conj_BANG_.call(null,this$__$1,val);
} else {
return cljs.core.vector_index_out_of_bounds.call(null,i,self__.cnt);

}
}
} else {
throw (new Error("assoc! after persistent!"));
}
});

clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.root.edit){
if((self__.cnt === (0))){
throw (new Error("Can't pop empty vector"));
} else {
if(((1) === self__.cnt)){
self__.cnt = (0);

self__.tidx = (0);

(self__.tail[(0)] = null);

return this$__$1;
} else {
if((self__.tidx > (1))){
self__.cnt = (self__.cnt - (1));

self__.tidx = (self__.tidx - (1));

(self__.tail[self__.tidx] = null);

return this$__$1;
} else {
var new_tail_base = clojure.core.rrb_vector.trees.array_for.call(null,self__.cnt,self__.shift,self__.root,self__.tail,(self__.cnt - (2)));
var new_tail = cljs.core.aclone.call(null,new_tail_base);
var new_tidx = new_tail_base.length;
var new_root = clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,self__.shift,self__.cnt,self__.root.edit,self__.root);
if((new_root == null)){
self__.cnt = (self__.cnt - (1));

self__.root = clojure.core.rrb_vector.transients.ensure_editable.call(null,self__.root.edit,clojure.core.rrb_vector.nodes.empty_node);

self__.tail = new_tail;

self__.tidx = new_tidx;

return this$__$1;
} else {
if((((self__.shift > (5))) && (((new_root.arr[(1)]) == null)))){
self__.cnt = (self__.cnt - (1));

self__.shift = (self__.shift - (5));

self__.root = (new_root.arr[(0)]);

self__.tail = new_tail;

self__.tidx = new_tidx;

return this$__$1;
} else {
self__.cnt = (self__.cnt - (1));

self__.root = new_root;

self__.tail = new_tail;

self__.tidx = new_tidx;

return this$__$1;

}
}

}
}
}
} else {
throw (new Error("count after persistent!"));
}
});

clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.root.edit){
return self__.cnt;
} else {
throw (new Error("count after persistent!"));
}
});

clojure.core.rrb_vector.rrbt.Transient.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"shift","shift",-1657295705,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"tail","tail",494507963,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"tidx","tidx",1939123455,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

clojure.core.rrb_vector.rrbt.Transient.cljs$lang$type = true;

clojure.core.rrb_vector.rrbt.Transient.cljs$lang$ctorStr = "clojure.core.rrb-vector.rrbt/Transient";

clojure.core.rrb_vector.rrbt.Transient.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"clojure.core.rrb-vector.rrbt/Transient");
});

/**
 * Positional factory function for clojure.core.rrb-vector.rrbt/Transient.
 */
clojure.core.rrb_vector.rrbt.__GT_Transient = (function clojure$core$rrb_vector$rrbt$__GT_Transient(cnt,shift,root,tail,tidx){
return (new clojure.core.rrb_vector.rrbt.Transient(cnt,shift,root,tail,tidx));
});


//# sourceMappingURL=rrbt.js.map
