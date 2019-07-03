// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__10417){
var vec__10418 = p__10417;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10418,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10418,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__10421 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10421,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10421,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10421,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__10425 = arguments.length;
switch (G__10425) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__10427_10451 = clojure.data.equality_partition;
var G__10428_10452 = "null";
var G__10429_10453 = ((function (G__10427_10451,G__10428_10452){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__10427_10451,G__10428_10452))
;
goog.object.set(G__10427_10451,G__10428_10452,G__10429_10453);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__10430_10454 = clojure.data.equality_partition;
var G__10431_10455 = "string";
var G__10432_10456 = ((function (G__10430_10454,G__10431_10455){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__10430_10454,G__10431_10455))
;
goog.object.set(G__10430_10454,G__10431_10455,G__10432_10456);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__10433_10457 = clojure.data.equality_partition;
var G__10434_10458 = "number";
var G__10435_10459 = ((function (G__10433_10457,G__10434_10458){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__10433_10457,G__10434_10458))
;
goog.object.set(G__10433_10457,G__10434_10458,G__10435_10459);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__10436_10460 = clojure.data.equality_partition;
var G__10437_10461 = "array";
var G__10438_10462 = ((function (G__10436_10460,G__10437_10461){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__10436_10460,G__10437_10461))
;
goog.object.set(G__10436_10460,G__10437_10461,G__10438_10462);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__10439_10463 = clojure.data.equality_partition;
var G__10440_10464 = "function";
var G__10441_10465 = ((function (G__10439_10463,G__10440_10464){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__10439_10463,G__10440_10464))
;
goog.object.set(G__10439_10463,G__10440_10464,G__10441_10465);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__10442_10466 = clojure.data.equality_partition;
var G__10443_10467 = "boolean";
var G__10444_10468 = ((function (G__10442_10466,G__10443_10467){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__10442_10466,G__10443_10467))
;
goog.object.set(G__10442_10466,G__10443_10467,G__10444_10468);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__10445_10469 = clojure.data.equality_partition;
var G__10446_10470 = "_";
var G__10447_10471 = ((function (G__10445_10469,G__10446_10470){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return cljs.core.cst$kw$map;
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return cljs.core.cst$kw$set;
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return cljs.core.cst$kw$sequential;
} else {
return cljs.core.cst$kw$atom;

}
}
}
});})(G__10445_10469,G__10446_10470))
;
goog.object.set(G__10445_10469,G__10446_10470,G__10447_10471);
goog.object.set(clojure.data.Diff,"null",true);

var G__10472_10496 = clojure.data.diff_similar;
var G__10473_10497 = "null";
var G__10474_10498 = ((function (G__10472_10496,G__10473_10497){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__10472_10496,G__10473_10497))
;
goog.object.set(G__10472_10496,G__10473_10497,G__10474_10498);

goog.object.set(clojure.data.Diff,"string",true);

var G__10475_10499 = clojure.data.diff_similar;
var G__10476_10500 = "string";
var G__10477_10501 = ((function (G__10475_10499,G__10476_10500){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__10475_10499,G__10476_10500))
;
goog.object.set(G__10475_10499,G__10476_10500,G__10477_10501);

goog.object.set(clojure.data.Diff,"number",true);

var G__10478_10502 = clojure.data.diff_similar;
var G__10479_10503 = "number";
var G__10480_10504 = ((function (G__10478_10502,G__10479_10503){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__10478_10502,G__10479_10503))
;
goog.object.set(G__10478_10502,G__10479_10503,G__10480_10504);

goog.object.set(clojure.data.Diff,"array",true);

var G__10481_10505 = clojure.data.diff_similar;
var G__10482_10506 = "array";
var G__10483_10507 = ((function (G__10481_10505,G__10482_10506){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__10481_10505,G__10482_10506))
;
goog.object.set(G__10481_10505,G__10482_10506,G__10483_10507);

goog.object.set(clojure.data.Diff,"function",true);

var G__10484_10508 = clojure.data.diff_similar;
var G__10485_10509 = "function";
var G__10486_10510 = ((function (G__10484_10508,G__10485_10509){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__10484_10508,G__10485_10509))
;
goog.object.set(G__10484_10508,G__10485_10509,G__10486_10510);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__10487_10511 = clojure.data.diff_similar;
var G__10488_10512 = "boolean";
var G__10489_10513 = ((function (G__10487_10511,G__10488_10512){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__10487_10511,G__10488_10512))
;
goog.object.set(G__10487_10511,G__10488_10512,G__10489_10513);

goog.object.set(clojure.data.Diff,"_",true);

var G__10490_10514 = clojure.data.diff_similar;
var G__10491_10515 = "_";
var G__10492_10516 = ((function (G__10490_10514,G__10491_10515){
return (function (a,b){
var fexpr__10494 = (function (){var G__10495 = clojure.data.equality_partition(a);
var G__10495__$1 = (((G__10495 instanceof cljs.core.Keyword))?G__10495.fqn:null);
switch (G__10495__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10495__$1)].join('')));

}
})();
return (fexpr__10494.cljs$core$IFn$_invoke$arity$2 ? fexpr__10494.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__10494.call(null,a,b));
});})(G__10490_10514,G__10491_10515))
;
goog.object.set(G__10490_10514,G__10491_10515,G__10492_10516);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});
