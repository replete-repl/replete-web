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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__13886){
var vec__13887 = p__13886;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13887,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13887,(1),null);
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
var vec__13890 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13890,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13890,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13890,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__13894 = arguments.length;
switch (G__13894) {
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

var G__13896_13920 = clojure.data.equality_partition;
var G__13897_13921 = "null";
var G__13898_13922 = ((function (G__13896_13920,G__13897_13921){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__13896_13920,G__13897_13921))
;
goog.object.set(G__13896_13920,G__13897_13921,G__13898_13922);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__13899_13923 = clojure.data.equality_partition;
var G__13900_13924 = "string";
var G__13901_13925 = ((function (G__13899_13923,G__13900_13924){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__13899_13923,G__13900_13924))
;
goog.object.set(G__13899_13923,G__13900_13924,G__13901_13925);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__13902_13926 = clojure.data.equality_partition;
var G__13903_13927 = "number";
var G__13904_13928 = ((function (G__13902_13926,G__13903_13927){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__13902_13926,G__13903_13927))
;
goog.object.set(G__13902_13926,G__13903_13927,G__13904_13928);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__13905_13929 = clojure.data.equality_partition;
var G__13906_13930 = "array";
var G__13907_13931 = ((function (G__13905_13929,G__13906_13930){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__13905_13929,G__13906_13930))
;
goog.object.set(G__13905_13929,G__13906_13930,G__13907_13931);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__13908_13932 = clojure.data.equality_partition;
var G__13909_13933 = "function";
var G__13910_13934 = ((function (G__13908_13932,G__13909_13933){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__13908_13932,G__13909_13933))
;
goog.object.set(G__13908_13932,G__13909_13933,G__13910_13934);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__13911_13935 = clojure.data.equality_partition;
var G__13912_13936 = "boolean";
var G__13913_13937 = ((function (G__13911_13935,G__13912_13936){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__13911_13935,G__13912_13936))
;
goog.object.set(G__13911_13935,G__13912_13936,G__13913_13937);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__13914_13938 = clojure.data.equality_partition;
var G__13915_13939 = "_";
var G__13916_13940 = ((function (G__13914_13938,G__13915_13939){
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
});})(G__13914_13938,G__13915_13939))
;
goog.object.set(G__13914_13938,G__13915_13939,G__13916_13940);
goog.object.set(clojure.data.Diff,"null",true);

var G__13941_13965 = clojure.data.diff_similar;
var G__13942_13966 = "null";
var G__13943_13967 = ((function (G__13941_13965,G__13942_13966){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__13941_13965,G__13942_13966))
;
goog.object.set(G__13941_13965,G__13942_13966,G__13943_13967);

goog.object.set(clojure.data.Diff,"string",true);

var G__13944_13968 = clojure.data.diff_similar;
var G__13945_13969 = "string";
var G__13946_13970 = ((function (G__13944_13968,G__13945_13969){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__13944_13968,G__13945_13969))
;
goog.object.set(G__13944_13968,G__13945_13969,G__13946_13970);

goog.object.set(clojure.data.Diff,"number",true);

var G__13947_13971 = clojure.data.diff_similar;
var G__13948_13972 = "number";
var G__13949_13973 = ((function (G__13947_13971,G__13948_13972){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__13947_13971,G__13948_13972))
;
goog.object.set(G__13947_13971,G__13948_13972,G__13949_13973);

goog.object.set(clojure.data.Diff,"array",true);

var G__13950_13974 = clojure.data.diff_similar;
var G__13951_13975 = "array";
var G__13952_13976 = ((function (G__13950_13974,G__13951_13975){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__13950_13974,G__13951_13975))
;
goog.object.set(G__13950_13974,G__13951_13975,G__13952_13976);

goog.object.set(clojure.data.Diff,"function",true);

var G__13953_13977 = clojure.data.diff_similar;
var G__13954_13978 = "function";
var G__13955_13979 = ((function (G__13953_13977,G__13954_13978){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__13953_13977,G__13954_13978))
;
goog.object.set(G__13953_13977,G__13954_13978,G__13955_13979);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__13956_13980 = clojure.data.diff_similar;
var G__13957_13981 = "boolean";
var G__13958_13982 = ((function (G__13956_13980,G__13957_13981){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__13956_13980,G__13957_13981))
;
goog.object.set(G__13956_13980,G__13957_13981,G__13958_13982);

goog.object.set(clojure.data.Diff,"_",true);

var G__13959_13983 = clojure.data.diff_similar;
var G__13960_13984 = "_";
var G__13961_13985 = ((function (G__13959_13983,G__13960_13984){
return (function (a,b){
var fexpr__13963 = (function (){var G__13964 = clojure.data.equality_partition(a);
var G__13964__$1 = (((G__13964 instanceof cljs.core.Keyword))?G__13964.fqn:null);
switch (G__13964__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13964__$1)].join('')));

}
})();
return (fexpr__13963.cljs$core$IFn$_invoke$arity$2 ? fexpr__13963.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__13963.call(null,a,b));
});})(G__13959_13983,G__13960_13984))
;
goog.object.set(G__13959_13983,G__13960_13984,G__13961_13985);
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
