// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.analyzer');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.env');
goog.require('cljs.tagged_literals');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.reader');
cljs.analyzer._STAR_cljs_ns_STAR_ = new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
cljs.analyzer._STAR_cljs_file_STAR_ = null;
cljs.analyzer._STAR_checked_arrays_STAR_ = false;
cljs.analyzer._STAR_check_alias_dupes_STAR_ = true;
cljs.analyzer._STAR_cljs_static_fns_STAR_ = false;
cljs.analyzer._STAR_fn_invoke_direct_STAR_ = false;
cljs.analyzer._STAR_cljs_macros_path_STAR_ = "/cljs/core";
cljs.analyzer._STAR_cljs_macros_is_classpath_STAR_ = true;
cljs.analyzer._STAR_cljs_dep_set_STAR_ = cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dep-path","dep-path",723826558),cljs.core.PersistentVector.EMPTY], null));
cljs.analyzer._STAR_analyze_deps_STAR_ = true;
cljs.analyzer._STAR_load_tests_STAR_ = true;
cljs.analyzer._STAR_load_macros_STAR_ = true;
cljs.analyzer._STAR_reload_macros_STAR_ = false;
cljs.analyzer._STAR_macro_infer_STAR_ = true;
cljs.analyzer._STAR_passes_STAR_ = null;
cljs.analyzer._STAR_file_defs_STAR_ = null;
cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = false;
/**
 * The namespace of the constants table as a symbol.
 */
cljs.analyzer.constants_ns_sym = new cljs.core.Symbol(null,"cljs.core.constants","cljs.core.constants",2057417066,null);
cljs.analyzer.identity_counter = cljs.core.atom.call(null,(0));
cljs.analyzer.add_identity = (function cljs$analyzer$add_identity(m){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"identity","identity",1647396035),cljs.core.swap_BANG_.call(null,cljs.analyzer.identity_counter,cljs.core.inc));
});
cljs.analyzer._STAR_verbose_STAR_ = false;
cljs.analyzer._cljs_macros_loaded = cljs.core.atom.call(null,false);
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"private-var-access","private-var-access",967536101),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"declared-arglists-mismatch","declared-arglists-mismatch",-496878383),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"non-dynamic-earmuffed-var","non-dynamic-earmuffed-var",-202005643),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[true,true,true,true,true,true,true,true,true,true,true,true,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true]);
cljs.analyzer.unchecked_arrays_QMARK_ = (function cljs$analyzer$unchecked_arrays_QMARK_(){
return cljs.core._STAR_unchecked_arrays_STAR_;
});
/**
 * Returns false-y, :warn, or :error based on configuration and the
 * current value of *unchecked-arrays*.
 */
cljs.analyzer.checked_arrays = (function cljs$analyzer$checked_arrays(){
if(((cljs.core.not.call(null,new cljs.core.Keyword(null,"advanced","advanced",-451287892).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))) && ((!(cljs.core._STAR_unchecked_arrays_STAR_))))){
return cljs.analyzer._STAR_checked_arrays_STAR_;
} else {
return null;
}
});
cljs.analyzer.js_reserved = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 63, ["typeof",null,"float",null,"implements",null,"else",null,"boolean",null,"abstract",null,"int",null,"static",null,"package",null,"this",null,"await",null,"yield",null,"interface",null,"void",null,"delete",null,"class",null,"export",null,"var",null,"try",null,"long",null,"null",null,"return",null,"methods",null,"native",null,"private",null,"new",null,"for",null,"catch",null,"extends",null,"short",null,"protected",null,"throws",null,"synchronized",null,"transient",null,"super",null,"if",null,"let",null,"import",null,"char",null,"switch",null,"const",null,"case",null,"break",null,"volatile",null,"function",null,"continue",null,"final",null,"do",null,"double",null,"while",null,"public",null,"arguments",null,"debugger",null,"with",null,"instanceof",null,"default",null,"throw",null,"goto",null,"finally",null,"byte",null,"constructor",null,"in",null,"enum",null], null), null);
cljs.analyzer.es5_allowed = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["default",null], null), null);
cljs.analyzer.SENTINEL = ({});
cljs.analyzer.gets = (function cljs$analyzer$gets(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__4419 = arguments.length;
switch (G__4419) {
=======
var G__12977 = arguments.length;
switch (G__12977) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
case 3:
return cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3 = (function (m,k0,k1){
var m__$1 = cljs.core.get.call(null,m,k0,cljs.analyzer.SENTINEL);
if((m__$1 === cljs.analyzer.SENTINEL)){
return null;
} else {
return cljs.core.get.call(null,m__$1,k1);
}
});

cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4 = (function (m,k0,k1,k2){
var m__$1 = cljs.core.get.call(null,m,k0,cljs.analyzer.SENTINEL);
if((m__$1 === cljs.analyzer.SENTINEL)){
return null;
} else {
var m__$2 = cljs.core.get.call(null,m__$1,k1,cljs.analyzer.SENTINEL);
if((m__$2 === cljs.analyzer.SENTINEL)){
return null;
} else {
return cljs.core.get.call(null,m__$2,k2);
}
}
});

cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5 = (function (m,k0,k1,k2,k3){
var m__$1 = cljs.core.get.call(null,m,k0,cljs.analyzer.SENTINEL);
if((m__$1 === cljs.analyzer.SENTINEL)){
return null;
} else {
var m__$2 = cljs.core.get.call(null,m__$1,k1,cljs.analyzer.SENTINEL);
if((m__$2 === cljs.analyzer.SENTINEL)){
return null;
} else {
var m__$3 = cljs.core.get.call(null,m__$2,k2,cljs.analyzer.SENTINEL);
if((m__$3 === cljs.analyzer.SENTINEL)){
return null;
} else {
return cljs.core.get.call(null,m__$3,k3);
}
}
}
});

cljs.analyzer.gets.cljs$lang$maxFixedArity = 5;

cljs.analyzer.CLJ_NIL_SYM = new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null);
cljs.analyzer.NUMBER_SYM = new cljs.core.Symbol(null,"number","number",-1084057331,null);
cljs.analyzer.STRING_SYM = new cljs.core.Symbol(null,"string","string",-349010059,null);
cljs.analyzer.BOOLEAN_SYM = new cljs.core.Symbol(null,"boolean","boolean",-278886877,null);
cljs.analyzer.JS_STAR_SYM = new cljs.core.Symbol(null,"js*","js*",-1134233646,null);
cljs.analyzer.DOT_SYM = new cljs.core.Symbol(null,".",".",1975675962,null);
cljs.analyzer.NEW_SYM = new cljs.core.Symbol(null,"new","new",-444906321,null);
cljs.analyzer.CLJS_CORE_SYM = new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null);
cljs.analyzer.CLJS_CORE_MACROS_SYM = new cljs.core.Symbol(null,"cljs.core$macros","cljs.core$macros",-2057787548,null);
cljs.analyzer.IGNORE_SYM = new cljs.core.Symbol(null,"ignore","ignore",8989494,null);
cljs.analyzer.ANY_SYM = new cljs.core.Symbol(null,"any","any",-948528346,null);
cljs.analyzer.cljs_seq_QMARK_ = (function cljs$analyzer$cljs_seq_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISeq$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.analyzer.cljs_map_QMARK_ = (function cljs$analyzer$cljs_map_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.analyzer.cljs_vector_QMARK_ = (function cljs$analyzer$cljs_vector_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IVector$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.analyzer.cljs_set_QMARK_ = (function cljs$analyzer$cljs_set_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.analyzer.munge_path = (function cljs$analyzer$munge_path(ss){
return cljs.core.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ss));
});
/**
 * Given a namespace as a symbol return the relative path. May optionally
 *   provide the file extension, defaults to :cljs.
 */
cljs.analyzer.ns__GT_relpath = (function cljs$analyzer$ns__GT_relpath(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__4426 = arguments.length;
switch (G__4426) {
=======
var G__12984 = arguments.length;
switch (G__12984) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
case 1:
return cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.ns__GT_relpath.call(null,ns,new cljs.core.Keyword(null,"cljs","cljs",1492417629));
});

cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2 = (function (ns,ext){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,cljs.analyzer.munge_path.call(null,ns),".","/")),".",cljs.core.name.call(null,ext)].join('');
});

cljs.analyzer.ns__GT_relpath.cljs$lang$maxFixedArity = 2;

cljs.analyzer.topo_sort = (function cljs$analyzer$topo_sort(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__4429 = arguments.length;
switch (G__4429) {
=======
var G__12987 = arguments.length;
switch (G__12987) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
case 2:
return cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$2 = (function (x,get_deps){
return cljs.analyzer.topo_sort.call(null,x,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)),cljs.core.memoize.call(null,get_deps));
});

cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4 = (function (x,depth,state,memo_get_deps){
var deps = memo_get_deps.call(null,x);
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var seq__4430_4451 = cljs.core.seq.call(null,deps);
var chunk__4431_4452 = null;
var count__4432_4453 = (0);
var i__4433_4454 = (0);
while(true){
if((i__4433_4454 < count__4432_4453)){
var dep_4455 = cljs.core._nth.call(null,chunk__4431_4452,i__4433_4454);
cljs.analyzer.topo_sort.call(null,dep_4455,(depth + (1)),state,memo_get_deps);


var G__4456 = seq__4430_4451;
var G__4457 = chunk__4431_4452;
var G__4458 = count__4432_4453;
var G__4459 = (i__4433_4454 + (1));
seq__4430_4451 = G__4456;
chunk__4431_4452 = G__4457;
count__4432_4453 = G__4458;
i__4433_4454 = G__4459;
continue;
} else {
var temp__5720__auto___4460 = cljs.core.seq.call(null,seq__4430_4451);
if(temp__5720__auto___4460){
var seq__4430_4461__$1 = temp__5720__auto___4460;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4430_4461__$1)){
var c__4550__auto___4462 = cljs.core.chunk_first.call(null,seq__4430_4461__$1);
var G__4463 = cljs.core.chunk_rest.call(null,seq__4430_4461__$1);
var G__4464 = c__4550__auto___4462;
var G__4465 = cljs.core.count.call(null,c__4550__auto___4462);
var G__4466 = (0);
seq__4430_4451 = G__4463;
chunk__4431_4452 = G__4464;
count__4432_4453 = G__4465;
i__4433_4454 = G__4466;
continue;
} else {
var dep_4467 = cljs.core.first.call(null,seq__4430_4461__$1);
cljs.analyzer.topo_sort.call(null,dep_4467,(depth + (1)),state,memo_get_deps);


var G__4468 = cljs.core.next.call(null,seq__4430_4461__$1);
var G__4469 = null;
var G__4470 = (0);
var G__4471 = (0);
seq__4430_4451 = G__4468;
chunk__4431_4452 = G__4469;
count__4432_4453 = G__4470;
i__4433_4454 = G__4471;
=======
var seq__12988_13009 = cljs.core.seq.call(null,deps);
var chunk__12989_13010 = null;
var count__12990_13011 = (0);
var i__12991_13012 = (0);
while(true){
if((i__12991_13012 < count__12990_13011)){
var dep_13013 = cljs.core._nth.call(null,chunk__12989_13010,i__12991_13012);
cljs.analyzer.topo_sort.call(null,dep_13013,(depth + (1)),state,memo_get_deps);


var G__13014 = seq__12988_13009;
var G__13015 = chunk__12989_13010;
var G__13016 = count__12990_13011;
var G__13017 = (i__12991_13012 + (1));
seq__12988_13009 = G__13014;
chunk__12989_13010 = G__13015;
count__12990_13011 = G__13016;
i__12991_13012 = G__13017;
continue;
} else {
var temp__5720__auto___13018 = cljs.core.seq.call(null,seq__12988_13009);
if(temp__5720__auto___13018){
var seq__12988_13019__$1 = temp__5720__auto___13018;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12988_13019__$1)){
var c__4550__auto___13020 = cljs.core.chunk_first.call(null,seq__12988_13019__$1);
var G__13021 = cljs.core.chunk_rest.call(null,seq__12988_13019__$1);
var G__13022 = c__4550__auto___13020;
var G__13023 = cljs.core.count.call(null,c__4550__auto___13020);
var G__13024 = (0);
seq__12988_13009 = G__13021;
chunk__12989_13010 = G__13022;
count__12990_13011 = G__13023;
i__12991_13012 = G__13024;
continue;
} else {
var dep_13025 = cljs.core.first.call(null,seq__12988_13019__$1);
cljs.analyzer.topo_sort.call(null,dep_13025,(depth + (1)),state,memo_get_deps);


var G__13026 = cljs.core.next.call(null,seq__12988_13019__$1);
var G__13027 = null;
var G__13028 = (0);
var G__13029 = (0);
seq__12988_13009 = G__13026;
chunk__12989_13010 = G__13027;
count__12990_13011 = G__13028;
i__12991_13012 = G__13029;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
continue;
}
} else {
}
}
break;
}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var seq__4434_4472 = cljs.core.seq.call(null,cljs.core.subseq.call(null,cljs.core.deref.call(null,state),cljs.core._LT_,depth));
var chunk__4435_4473 = null;
var count__4436_4474 = (0);
var i__4437_4475 = (0);
while(true){
if((i__4437_4475 < count__4436_4474)){
var vec__4444_4476 = cljs.core._nth.call(null,chunk__4435_4473,i__4437_4475);
var _LT_depth_4477 = cljs.core.nth.call(null,vec__4444_4476,(0),null);
var __4478 = cljs.core.nth.call(null,vec__4444_4476,(1),null);
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_LT_depth_4477], null),clojure.set.difference,deps);


var G__4479 = seq__4434_4472;
var G__4480 = chunk__4435_4473;
var G__4481 = count__4436_4474;
var G__4482 = (i__4437_4475 + (1));
seq__4434_4472 = G__4479;
chunk__4435_4473 = G__4480;
count__4436_4474 = G__4481;
i__4437_4475 = G__4482;
continue;
} else {
var temp__5720__auto___4483 = cljs.core.seq.call(null,seq__4434_4472);
if(temp__5720__auto___4483){
var seq__4434_4484__$1 = temp__5720__auto___4483;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4434_4484__$1)){
var c__4550__auto___4485 = cljs.core.chunk_first.call(null,seq__4434_4484__$1);
var G__4486 = cljs.core.chunk_rest.call(null,seq__4434_4484__$1);
var G__4487 = c__4550__auto___4485;
var G__4488 = cljs.core.count.call(null,c__4550__auto___4485);
var G__4489 = (0);
seq__4434_4472 = G__4486;
chunk__4435_4473 = G__4487;
count__4436_4474 = G__4488;
i__4437_4475 = G__4489;
continue;
} else {
var vec__4447_4490 = cljs.core.first.call(null,seq__4434_4484__$1);
var _LT_depth_4491 = cljs.core.nth.call(null,vec__4447_4490,(0),null);
var __4492 = cljs.core.nth.call(null,vec__4447_4490,(1),null);
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_LT_depth_4491], null),clojure.set.difference,deps);


var G__4493 = cljs.core.next.call(null,seq__4434_4484__$1);
var G__4494 = null;
var G__4495 = (0);
var G__4496 = (0);
seq__4434_4472 = G__4493;
chunk__4435_4473 = G__4494;
count__4436_4474 = G__4495;
i__4437_4475 = G__4496;
=======
var seq__12992_13030 = cljs.core.seq.call(null,cljs.core.subseq.call(null,cljs.core.deref.call(null,state),cljs.core._LT_,depth));
var chunk__12993_13031 = null;
var count__12994_13032 = (0);
var i__12995_13033 = (0);
while(true){
if((i__12995_13033 < count__12994_13032)){
var vec__13002_13034 = cljs.core._nth.call(null,chunk__12993_13031,i__12995_13033);
var _LT_depth_13035 = cljs.core.nth.call(null,vec__13002_13034,(0),null);
var __13036 = cljs.core.nth.call(null,vec__13002_13034,(1),null);
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_LT_depth_13035], null),clojure.set.difference,deps);


var G__13037 = seq__12992_13030;
var G__13038 = chunk__12993_13031;
var G__13039 = count__12994_13032;
var G__13040 = (i__12995_13033 + (1));
seq__12992_13030 = G__13037;
chunk__12993_13031 = G__13038;
count__12994_13032 = G__13039;
i__12995_13033 = G__13040;
continue;
} else {
var temp__5720__auto___13041 = cljs.core.seq.call(null,seq__12992_13030);
if(temp__5720__auto___13041){
var seq__12992_13042__$1 = temp__5720__auto___13041;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12992_13042__$1)){
var c__4550__auto___13043 = cljs.core.chunk_first.call(null,seq__12992_13042__$1);
var G__13044 = cljs.core.chunk_rest.call(null,seq__12992_13042__$1);
var G__13045 = c__4550__auto___13043;
var G__13046 = cljs.core.count.call(null,c__4550__auto___13043);
var G__13047 = (0);
seq__12992_13030 = G__13044;
chunk__12993_13031 = G__13045;
count__12994_13032 = G__13046;
i__12995_13033 = G__13047;
continue;
} else {
var vec__13005_13048 = cljs.core.first.call(null,seq__12992_13042__$1);
var _LT_depth_13049 = cljs.core.nth.call(null,vec__13005_13048,(0),null);
var __13050 = cljs.core.nth.call(null,vec__13005_13048,(1),null);
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_LT_depth_13049], null),clojure.set.difference,deps);


var G__13051 = cljs.core.next.call(null,seq__12992_13042__$1);
var G__13052 = null;
var G__13053 = (0);
var G__13054 = (0);
seq__12992_13030 = G__13051;
chunk__12993_13031 = G__13052;
count__12994_13032 = G__13053;
i__12995_13033 = G__13054;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return cljs.core.distinct.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});

cljs.analyzer.topo_sort.cljs$lang$maxFixedArity = 4;


cljs.analyzer.ast_QMARK_ = (function cljs$analyzer$ast_QMARK_(x){
return ((cljs.core.map_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,x,new cljs.core.Keyword(null,"op","op",-1882987955))));
});
if((typeof cljs !== 'undefined') && (typeof cljs.analyzer !== 'undefined') && (typeof cljs.analyzer.error_message !== 'undefined')){
} else {
cljs.analyzer.error_message = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.analyzer","error-message"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function() { 
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__4497__delegate = function (warning_type,_){
return warning_type;
};
var G__4497 = function (warning_type,var_args){
var _ = null;
if (arguments.length > 1) {
var G__4498__i = 0, G__4498__a = new Array(arguments.length -  1);
while (G__4498__i < G__4498__a.length) {G__4498__a[G__4498__i] = arguments[G__4498__i + 1]; ++G__4498__i;}
  _ = new cljs.core.IndexedSeq(G__4498__a,0,null);
} 
return G__4497__delegate.call(this,warning_type,_);};
G__4497.cljs$lang$maxFixedArity = 1;
G__4497.cljs$lang$applyTo = (function (arglist__4499){
var warning_type = cljs.core.first(arglist__4499);
var _ = cljs.core.rest(arglist__4499);
return G__4497__delegate(warning_type,_);
});
G__4497.cljs$core$IFn$_invoke$arity$variadic = G__4497__delegate;
return G__4497;
=======
var G__13055__delegate = function (warning_type,_){
return warning_type;
};
var G__13055 = function (warning_type,var_args){
var _ = null;
if (arguments.length > 1) {
var G__13056__i = 0, G__13056__a = new Array(arguments.length -  1);
while (G__13056__i < G__13056__a.length) {G__13056__a[G__13056__i] = arguments[G__13056__i + 1]; ++G__13056__i;}
  _ = new cljs.core.IndexedSeq(G__13056__a,0,null);
} 
return G__13055__delegate.call(this,warning_type,_);};
G__13055.cljs$lang$maxFixedArity = 1;
G__13055.cljs$lang$applyTo = (function (arglist__13057){
var warning_type = cljs.core.first(arglist__13057);
var _ = cljs.core.rest(arglist__13057);
return G__13055__delegate(warning_type,_);
});
G__13055.cljs$core$IFn$_invoke$arity$variadic = G__13055__delegate;
return G__13055;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
})()
;})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),(function (warning_type,info){
return ["Preamble resource file not found: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," ",new cljs.core.Keyword(null,"missing","missing",362507769).cljs$core$IFn$_invoke$arity$1(info)))].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),(function (warning_type,info){
return ["Required namespace not provided for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," ",new cljs.core.Keyword(null,"unprovided","unprovided",-652330764).cljs$core$IFn$_invoke$arity$1(info)))].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),(function (warning_type,info){
return [(cljs.core.truth_(new cljs.core.Keyword(null,"macro-present?","macro-present?",-1397713205).cljs$core$IFn$_invoke$arity$1(info))?"Can't take value of macro ":"Use of undeclared Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(info)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"private-var-access","private-var-access",967536101),(function (warning_type,info){
return ["var: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(info))," is not public"].join('');
}));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),(function (warning_type,p__4500){
var map__4501 = p__4500;
var map__4501__$1 = (((((!((map__4501 == null))))?(((((map__4501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4501):map__4501);
var info = map__4501__$1;
var ns_sym = cljs.core.get.call(null,map__4501__$1,new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605));
var js_provide = cljs.core.get.call(null,map__4501__$1,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493));
return ["No such namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_sym),", could not locate ",cljs.analyzer.ns__GT_relpath.call(null,ns_sym,new cljs.core.Keyword(null,"cljs","cljs",1492417629)),", ",cljs.analyzer.ns__GT_relpath.call(null,ns_sym,new cljs.core.Keyword(null,"cljc","cljc",-1728400583)),", or JavaScript source providing \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_provide),"\"",((clojure.string.includes_QMARK_.call(null,cljs.analyzer.ns__GT_relpath.call(null,ns_sym),"_"))?" (Please check that namespaces with dashes use underscores in the ClojureScript file name)":null)].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"undeclared-macros-ns","undeclared-macros-ns",-438029430),(function (warning_type,p__4503){
var map__4504 = p__4503;
var map__4504__$1 = (((((!((map__4504 == null))))?(((((map__4504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4504):map__4504);
var info = map__4504__$1;
var ns_sym = cljs.core.get.call(null,map__4504__$1,new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605));
var js_provide = cljs.core.get.call(null,map__4504__$1,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493));
=======
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),(function (warning_type,p__13058){
var map__13059 = p__13058;
var map__13059__$1 = (((((!((map__13059 == null))))?(((((map__13059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13059):map__13059);
var info = map__13059__$1;
var ns_sym = cljs.core.get.call(null,map__13059__$1,new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605));
var js_provide = cljs.core.get.call(null,map__13059__$1,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493));
return ["No such namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_sym),", could not locate ",cljs.analyzer.ns__GT_relpath.call(null,ns_sym,new cljs.core.Keyword(null,"cljs","cljs",1492417629)),", ",cljs.analyzer.ns__GT_relpath.call(null,ns_sym,new cljs.core.Keyword(null,"cljc","cljc",-1728400583)),", or JavaScript source providing \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_provide),"\"",((clojure.string.includes_QMARK_.call(null,cljs.analyzer.ns__GT_relpath.call(null,ns_sym),"_"))?" (Please check that namespaces with dashes use underscores in the ClojureScript file name)":null)].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"undeclared-macros-ns","undeclared-macros-ns",-438029430),(function (warning_type,p__13061){
var map__13062 = p__13061;
var map__13062__$1 = (((((!((map__13062 == null))))?(((((map__13062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13062):map__13062);
var info = map__13062__$1;
var ns_sym = cljs.core.get.call(null,map__13062__$1,new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605));
var js_provide = cljs.core.get.call(null,map__13062__$1,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
return ["No such macros namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_sym),", could not locate ",cljs.analyzer.ns__GT_relpath.call(null,ns_sym,new cljs.core.Keyword(null,"clj","clj",-660495428))," or ",cljs.analyzer.ns__GT_relpath.call(null,ns_sym,new cljs.core.Keyword(null,"cljc","cljc",-1728400583))].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info))," not declared ^:dynamic"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"redef","redef",1032704258),(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(info))," already refers to: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(info))))," being replaced by: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns-name","ns-name",-2077346323).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(info))))].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(info))," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(info))," is being replaced"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns-name","ns-name",-2077346323).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(info))))," no longer fn, references are stale"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),(function (warning_type,info){
return ["Wrong number of args (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"argc","argc",-1452839519).cljs$core$IFn$_invoke$arity$1(info)),") passed to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"ctor","ctor",1750864802).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
}
})())].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fexpr","fexpr",-122857150).cljs$core$IFn$_invoke$arity$1(info))))," is deprecated"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"declared-arglists-mismatch","declared-arglists-mismatch",-496878383),(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns-name","ns-name",-2077346323).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(info))))," declared arglists ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"declared","declared",92336021).cljs$core$IFn$_invoke$arity$1(info))," mismatch defined arglists ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"defined","defined",-1805032318).cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),(function (warning_type,info){
return ["Invalid :refer, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(info))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"lib","lib",191808726).cljs$core$IFn$_invoke$arity$1(info)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(info))," does not exist"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),(function (warning_type,info){
return ["Protocol ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info))," is deprecated"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),(function (warning_type,info){
return ["Can't resolve protocol symbol ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),(function (warning_type,info){
return ["Symbol ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info))," is not a protocol"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),(function (warning_type,info){
if(cljs.core.truth_(new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840).cljs$core$IFn$_invoke$arity$1(info))){
return ["Bad method signature in protocol implementation, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info))," does not declare method called ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fname","fname",1500291491).cljs$core$IFn$_invoke$arity$1(info))].join('');
} else {
return ["Bad method signature in protocol implementation, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fname","fname",1500291491).cljs$core$IFn$_invoke$arity$1(info))," does not declare arity ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"invalid-arity","invalid-arity",1335461949).cljs$core$IFn$_invoke$arity$1(info))].join('');
}
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),(function (warning_type,info){
return ["Duplicated methods in protocol implementation ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fname","fname",1500291491).cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),(function (warning_type,info){
return ["Protocol ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info))," implemented multiple times"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),(function (warning_type,info){
return ["Protocol ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info))," declares method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info))," with variadic signature (&)"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217),(function (warning_type,info){
return ["Protocol ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info))," implements method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info))," with variadic signature (&)"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),(function (warning_type,info){
return ["Ignoring target object \"",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(info)),"\" passed in recur to protocol method head"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)),": Can't have more than 1 variadic overload"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)),": Can't have fixed arity function with more params than variadic function"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)),": Can't have 2 overloads with same arity"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),(function (warning_type,info){
return ["Extending an existing JavaScript type - use a different symbol name ","instead of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-symbol","current-symbol",-932381075).cljs$core$IFn$_invoke$arity$1(info))," e.g ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"suggested-symbol","suggested-symbol",-1329631875).cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"js-op","js-op",-1046277897).cljs$core$IFn$_invoke$arity$1(info)),", all arguments must be numbers, got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"types","types",590030639).cljs$core$IFn$_invoke$arity$1(info))," instead"].join('');
}));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),(function (warning_type,p__4506){
var map__4507 = p__4506;
var map__4507__$1 = (((((!((map__4507 == null))))?(((((map__4507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4507):map__4507);
var name = cljs.core.get.call(null,map__4507__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var types = cljs.core.get.call(null,map__4507__$1,new cljs.core.Keyword(null,"types","types",590030639));
var G__4509 = name;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","checked-aget","cljs.core/checked-aget",24024561,null),G__4509)){
return ["cljs.core/aget, arguments must be an array followed by numeric indices, got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(types)," instead",((((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"object","object",-1179821820,null),cljs.core.first.call(null,types))) || (cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"string","string",-349010059,null),null], null), null),cljs.core.rest.call(null,types)))))?[" (consider ",((((2) === cljs.core.count.call(null,types)))?"goog.object/get":"goog.object/getValueByKeys")," for object access)"].join(''):null)].join('');
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","checked-aget'","cljs.core/checked-aget'",1960922245,null),G__4509)){
return ["cljs.core/aget, arguments must be an array followed by numeric indices, got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(types)," instead",((((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"object","object",-1179821820,null),cljs.core.first.call(null,types))) || (cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"string","string",-349010059,null),null], null), null),cljs.core.rest.call(null,types)))))?[" (consider ",((((2) === cljs.core.count.call(null,types)))?"goog.object/get":"goog.object/getValueByKeys")," for object access)"].join(''):null)].join('');
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","checked-aset","cljs.core/checked-aset",-2080232353,null),G__4509)){
return ["cljs.core/aset, arguments must be an array, followed by numeric indices, followed by a value, got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(types)," instead",((((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"object","object",-1179821820,null),cljs.core.first.call(null,types))) || (cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"string","string",-349010059,null),null], null), null),cljs.core.butlast.call(null,cljs.core.rest.call(null,types))))))?" (consider goog.object/set for object access)":null)].join('');
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","checked-aset'","cljs.core/checked-aset'",163859714,null),G__4509)){
return ["cljs.core/aset, arguments must be an array, followed by numeric indices, followed by a value, got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(types)," instead",((((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"object","object",-1179821820,null),cljs.core.first.call(null,types))) || (cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"string","string",-349010059,null),null], null), null),cljs.core.butlast.call(null,cljs.core.rest.call(null,types))))))?" (consider goog.object/set for object access)":null)].join('');
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4509)].join('')));
=======
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),(function (warning_type,p__13064){
var map__13065 = p__13064;
var map__13065__$1 = (((((!((map__13065 == null))))?(((((map__13065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13065):map__13065);
var name = cljs.core.get.call(null,map__13065__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var types = cljs.core.get.call(null,map__13065__$1,new cljs.core.Keyword(null,"types","types",590030639));
var G__13067 = name;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","checked-aget","cljs.core/checked-aget",24024561,null),G__13067)){
return ["cljs.core/aget, arguments must be an array followed by numeric indices, got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(types)," instead",((((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"object","object",-1179821820,null),cljs.core.first.call(null,types))) || (cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"string","string",-349010059,null),null], null), null),cljs.core.rest.call(null,types)))))?[" (consider ",((((2) === cljs.core.count.call(null,types)))?"goog.object/get":"goog.object/getValueByKeys")," for object access)"].join(''):null)].join('');
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","checked-aget'","cljs.core/checked-aget'",1960922245,null),G__13067)){
return ["cljs.core/aget, arguments must be an array followed by numeric indices, got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(types)," instead",((((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"object","object",-1179821820,null),cljs.core.first.call(null,types))) || (cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"string","string",-349010059,null),null], null), null),cljs.core.rest.call(null,types)))))?[" (consider ",((((2) === cljs.core.count.call(null,types)))?"goog.object/get":"goog.object/getValueByKeys")," for object access)"].join(''):null)].join('');
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","checked-aset","cljs.core/checked-aset",-2080232353,null),G__13067)){
return ["cljs.core/aset, arguments must be an array, followed by numeric indices, followed by a value, got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(types)," instead",((((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"object","object",-1179821820,null),cljs.core.first.call(null,types))) || (cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"string","string",-349010059,null),null], null), null),cljs.core.butlast.call(null,cljs.core.rest.call(null,types))))))?" (consider goog.object/set for object access)":null)].join('');
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","checked-aset'","cljs.core/checked-aset'",163859714,null),G__13067)){
return ["cljs.core/aset, arguments must be an array, followed by numeric indices, followed by a value, got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(types)," instead",((((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"object","object",-1179821820,null),cljs.core.first.call(null,types))) || (cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"string","string",-349010059,null),null], null), null),cljs.core.butlast.call(null,cljs.core.rest.call(null,types))))))?" (consider goog.object/set for object access)":null)].join('');
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13067)].join('')));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js

}
}
}
}
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),(function (warning_type,info){
return ["Cannot invoke type constructor ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fexpr","fexpr",-122857150).cljs$core$IFn$_invoke$arity$1(info))))," as function "].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info))," is a single segment namespace"].join('');
}));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),(function (warning_type,p__4511){
var map__4512 = p__4511;
var map__4512__$1 = (((((!((map__4512 == null))))?(((((map__4512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4512):map__4512);
var info = map__4512__$1;
var name = cljs.core.get.call(null,map__4512__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var munged = cljs.core.munge.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,((function (map__4512,map__4512__$1,info,name){
return (function (p1__4510_SHARP_){
if(cljs.core.truth_(cljs.analyzer.js_reserved.call(null,p1__4510_SHARP_))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__4510_SHARP_),"$"].join('');
} else {
return p1__4510_SHARP_;
}
});})(map__4512,map__4512__$1,info,name))
,clojure.string.split.call(null,cljs.core.name.call(null,name),/\./))));
return ["Namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," contains a reserved JavaScript keyword,"," the corresponding Google Closure namespace will be munged to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged)].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),(function (warning_type,p__4514){
var map__4515 = p__4514;
var map__4515__$1 = (((((!((map__4515 == null))))?(((((map__4515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4515):map__4515);
var info = map__4515__$1;
var ns = cljs.core.get.call(null,map__4515__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var var$ = cljs.core.get.call(null,map__4515__$1,new cljs.core.Keyword(null,"var","var",-769682797));
return ["Namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," clashes with var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(var$)].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"non-dynamic-earmuffed-var","non-dynamic-earmuffed-var",-202005643),(function (warning_type,p__4517){
var map__4518 = p__4517;
var map__4518__$1 = (((((!((map__4518 == null))))?(((((map__4518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4518):map__4518);
var info = map__4518__$1;
var var$ = cljs.core.get.call(null,map__4518__$1,new cljs.core.Keyword(null,"var","var",-769682797));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(var$)," not declared dynamic and thus is not dynamically rebindable, but its name ","suggests otherwise. Please either indicate ^:dynamic ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(var$)," or change the name"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),(function (warning_type,p__4520){
var map__4521 = p__4520;
var map__4521__$1 = (((((!((map__4521 == null))))?(((((map__4521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4521):map__4521);
var info = map__4521__$1;
var protocol = cljs.core.get.call(null,map__4521__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var method = cljs.core.get.call(null,map__4521__$1,new cljs.core.Keyword(null,"method","method",55703592));
return ["Bad extend-type method shape for protocol ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol)," method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method),", method arities must be grouped together"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),(function (warning_type,p__4523){
var map__4524 = p__4523;
var map__4524__$1 = (((((!((map__4524 == null))))?(((((map__4524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4524):map__4524);
var info = map__4524__$1;
var module_type = cljs.core.get.call(null,map__4524__$1,new cljs.core.Keyword(null,"module-type","module-type",1392760304));
var file = cljs.core.get.call(null,map__4524__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return ["Unsupported JavaScript module type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(module_type)," for foreign library ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"."].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),(function (warning_type,p__4526){
var map__4527 = p__4526;
var map__4527__$1 = (((((!((map__4527 == null))))?(((((map__4527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4527):map__4527);
var preprocess = cljs.core.get.call(null,map__4527__$1,new cljs.core.Keyword(null,"preprocess","preprocess",1208285012));
var file = cljs.core.get.call(null,map__4527__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return ["Unsupported preprocess value ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(preprocess)," for foreign library ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"."].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),(function (warning_type,p__4529){
var map__4530 = p__4529;
var map__4530__$1 = (((((!((map__4530 == null))))?(((((map__4530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4530):map__4530);
var name = cljs.core.get.call(null,map__4530__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," is shadowed by a local"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),(function (warning_type,p__4532){
var map__4533 = p__4532;
var map__4533__$1 = (((((!((map__4533 == null))))?(((((map__4533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4533):map__4533);
var warn_type = cljs.core.get.call(null,map__4533__$1,new cljs.core.Keyword(null,"warn-type","warn-type",-790105219));
var form = cljs.core.get.call(null,map__4533__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var type = cljs.core.get.call(null,map__4533__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var property = cljs.core.get.call(null,map__4533__$1,new cljs.core.Keyword(null,"property","property",-1114278232));
var G__4535 = warn_type;
var G__4535__$1 = (((G__4535 instanceof cljs.core.Keyword))?G__4535.fqn:null);
switch (G__4535__$1) {
=======
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),(function (warning_type,p__13069){
var map__13070 = p__13069;
var map__13070__$1 = (((((!((map__13070 == null))))?(((((map__13070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13070):map__13070);
var info = map__13070__$1;
var name = cljs.core.get.call(null,map__13070__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var munged = cljs.core.munge.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,((function (map__13070,map__13070__$1,info,name){
return (function (p1__13068_SHARP_){
if(cljs.core.truth_(cljs.analyzer.js_reserved.call(null,p1__13068_SHARP_))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__13068_SHARP_),"$"].join('');
} else {
return p1__13068_SHARP_;
}
});})(map__13070,map__13070__$1,info,name))
,clojure.string.split.call(null,cljs.core.name.call(null,name),/\./))));
return ["Namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," contains a reserved JavaScript keyword,"," the corresponding Google Closure namespace will be munged to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged)].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),(function (warning_type,p__13072){
var map__13073 = p__13072;
var map__13073__$1 = (((((!((map__13073 == null))))?(((((map__13073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13073):map__13073);
var info = map__13073__$1;
var ns = cljs.core.get.call(null,map__13073__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var var$ = cljs.core.get.call(null,map__13073__$1,new cljs.core.Keyword(null,"var","var",-769682797));
return ["Namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," clashes with var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(var$)].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"non-dynamic-earmuffed-var","non-dynamic-earmuffed-var",-202005643),(function (warning_type,p__13075){
var map__13076 = p__13075;
var map__13076__$1 = (((((!((map__13076 == null))))?(((((map__13076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13076):map__13076);
var info = map__13076__$1;
var var$ = cljs.core.get.call(null,map__13076__$1,new cljs.core.Keyword(null,"var","var",-769682797));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(var$)," not declared dynamic and thus is not dynamically rebindable, but its name ","suggests otherwise. Please either indicate ^:dynamic ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(var$)," or change the name"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),(function (warning_type,p__13078){
var map__13079 = p__13078;
var map__13079__$1 = (((((!((map__13079 == null))))?(((((map__13079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13079):map__13079);
var info = map__13079__$1;
var protocol = cljs.core.get.call(null,map__13079__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var method = cljs.core.get.call(null,map__13079__$1,new cljs.core.Keyword(null,"method","method",55703592));
return ["Bad extend-type method shape for protocol ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol)," method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method),", method arities must be grouped together"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),(function (warning_type,p__13081){
var map__13082 = p__13081;
var map__13082__$1 = (((((!((map__13082 == null))))?(((((map__13082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13082):map__13082);
var info = map__13082__$1;
var module_type = cljs.core.get.call(null,map__13082__$1,new cljs.core.Keyword(null,"module-type","module-type",1392760304));
var file = cljs.core.get.call(null,map__13082__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return ["Unsupported JavaScript module type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(module_type)," for foreign library ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"."].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),(function (warning_type,p__13084){
var map__13085 = p__13084;
var map__13085__$1 = (((((!((map__13085 == null))))?(((((map__13085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13085):map__13085);
var preprocess = cljs.core.get.call(null,map__13085__$1,new cljs.core.Keyword(null,"preprocess","preprocess",1208285012));
var file = cljs.core.get.call(null,map__13085__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return ["Unsupported preprocess value ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(preprocess)," for foreign library ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"."].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),(function (warning_type,p__13087){
var map__13088 = p__13087;
var map__13088__$1 = (((((!((map__13088 == null))))?(((((map__13088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13088):map__13088);
var name = cljs.core.get.call(null,map__13088__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," is shadowed by a local"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),(function (warning_type,p__13090){
var map__13091 = p__13090;
var map__13091__$1 = (((((!((map__13091 == null))))?(((((map__13091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13091):map__13091);
var warn_type = cljs.core.get.call(null,map__13091__$1,new cljs.core.Keyword(null,"warn-type","warn-type",-790105219));
var form = cljs.core.get.call(null,map__13091__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var type = cljs.core.get.call(null,map__13091__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var property = cljs.core.get.call(null,map__13091__$1,new cljs.core.Keyword(null,"property","property",-1114278232));
var G__13093 = warn_type;
var G__13093__$1 = (((G__13093 instanceof cljs.core.Keyword))?G__13093.fqn:null);
switch (G__13093__$1) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
case "target":
return ["Cannot infer target type in expression ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(form),""].join('');

break;
case "property":
return ["Cannot resolve property ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(property)," for inferred type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," in expression ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join('');

break;
case "object":
return ["Adding extern to Object for property ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(property)," due to ","ambiguous expression ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join('');

break;
default:
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4535__$1)].join('')));
=======
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13093__$1)].join('')));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js

}
}));
cljs.analyzer.default_warning_handler = (function cljs$analyzer$default_warning_handler(warning_type,env,extra){
if(cljs.core.truth_(warning_type.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_))){
var temp__5720__auto__ = cljs.analyzer.error_message.call(null,warning_type,extra);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var _STAR_print_fn_STAR__orig_val__4537 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__4538 = cljs.core._STAR_print_err_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__4538;

try{return cljs.core.println.call(null,cljs.analyzer.message.call(null,env,["WARNING: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__4537;
=======
var _STAR_print_fn_STAR__orig_val__13095 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__13096 = cljs.core._STAR_print_err_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__13096;

try{return cljs.core.println.call(null,cljs.analyzer.message.call(null,env,["WARNING: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__13095;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
}} else {
return null;
}
} else {
return null;
}
});
cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.default_warning_handler], null);
cljs.analyzer.repeat_char = (function cljs$analyzer$repeat_char(c,n){
var ret = c;
var n__$1 = n;
while(true){
if((n__$1 > (0))){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__4539 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
var G__4540 = (n__$1 - (1));
ret = G__4539;
n__$1 = G__4540;
=======
var G__13097 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
var G__13098 = (n__$1 - (1));
ret = G__13097;
n__$1 = G__13098;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
continue;
} else {
return ret;
}
break;
}
});
cljs.analyzer.hex_format = (function cljs$analyzer$hex_format(s,pad){
var hex = s.charCodeAt((0)).toString((16));
var len = hex.length;
var hex__$1 = (((len < pad))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.repeat_char.call(null,"0",(pad - len))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex)].join(''):hex);
return ["_u",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex__$1),"_"].join('');
});
cljs.analyzer.gen_constant_id = (function cljs$analyzer$gen_constant_id(value){
var prefix = (((value instanceof cljs.core.Keyword))?"cst$kw$":(((value instanceof cljs.core.Symbol))?"cst$sym$":(function(){throw (new Error(["constant type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,value))," not supported"].join('')))})()
));
var name = (((value instanceof cljs.core.Keyword))?cljs.core.subs.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),(1)):cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
var name__$1 = ((cljs.core._EQ_.call(null,".",name))?"_DOT_":clojure.string.replace.call(null,clojure.string.replace.call(null,cljs.core.munge.call(null,clojure.string.replace.call(null,name,"-","_DASH_")),".","$"),/[^a-z0-9$_]/i,((function (prefix,name){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
return (function (p1__4541_SHARP_){
return cljs.analyzer.hex_format.call(null,p1__4541_SHARP_,(4));
=======
return (function (p1__13099_SHARP_){
return cljs.analyzer.hex_format.call(null,p1__13099_SHARP_,(4));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
});})(prefix,name))
));
return cljs.core.symbol.call(null,[prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)].join(''));
});
cljs.analyzer.register_constant_BANG_ = (function cljs$analyzer$register_constant_BANG_(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__4543 = arguments.length;
switch (G__4543) {
=======
var G__13101 = arguments.length;
switch (G__13101) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
case 1:
return cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (val){
return cljs.analyzer.register_constant_BANG_.call(null,null,val);
});

cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (env,val){
return cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,(function (cenv){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__4544 = cljs.core.update_in.call(null,cenv,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889)], null),(function (table){
=======
var G__13102 = cljs.core.update_in.call(null,cenv,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889)], null),(function (table){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
if(cljs.core.truth_(cljs.core.get.call(null,table,val))){
return table;
} else {
return cljs.core.assoc.call(null,table,val,cljs.analyzer.gen_constant_id.call(null,val));
}
}));
if(cljs.core.truth_(env)){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
return cljs.core.update_in.call(null,G__4544,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword("cljs.analyzer","constants","cljs.analyzer/constants",1697083770)], null),((function (G__4544){
return (function (p__4545){
var map__4546 = p__4545;
var map__4546__$1 = (((((!((map__4546 == null))))?(((((map__4546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4546):map__4546);
var constants = map__4546__$1;
var seen = cljs.core.get.call(null,map__4546__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var order = cljs.core.get.call(null,map__4546__$1,new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.PersistentVector.EMPTY);
var G__4548 = constants;
if((!(cljs.core.contains_QMARK_.call(null,seen,val)))){
return cljs.core.assoc.call(null,G__4548,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.conj.call(null,seen,val),new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.conj.call(null,order,val));
} else {
return G__4548;
}
});})(G__4544))
);
} else {
return G__4544;
=======
return cljs.core.update_in.call(null,G__13102,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword("cljs.analyzer","constants","cljs.analyzer/constants",1697083770)], null),((function (G__13102){
return (function (p__13103){
var map__13104 = p__13103;
var map__13104__$1 = (((((!((map__13104 == null))))?(((((map__13104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13104):map__13104);
var constants = map__13104__$1;
var seen = cljs.core.get.call(null,map__13104__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var order = cljs.core.get.call(null,map__13104__$1,new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.PersistentVector.EMPTY);
var G__13106 = constants;
if((!(cljs.core.contains_QMARK_.call(null,seen,val)))){
return cljs.core.assoc.call(null,G__13106,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.conj.call(null,seen,val),new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.conj.call(null,order,val));
} else {
return G__13106;
}
});})(G__13102))
);
} else {
return G__13102;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
}
}));
});

cljs.analyzer.register_constant_BANG_.cljs$lang$maxFixedArity = 2;

cljs.analyzer.default_namespaces = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null)], null),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)], null)], null);
cljs.analyzer.namespaces = (function (){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
if((typeof cljs !== 'undefined') && (typeof cljs.analyzer !== 'undefined') && (typeof cljs.analyzer.t_cljs$analyzer4550 !== 'undefined')){
=======
if((typeof cljs !== 'undefined') && (typeof cljs.analyzer !== 'undefined') && (typeof cljs.analyzer.t_cljs$analyzer13108 !== 'undefined')){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
cljs.analyzer.t_cljs$analyzer4550 = (function (meta4551){
this.meta4551 = meta4551;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.analyzer.t_cljs$analyzer4550.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4552,meta4551__$1){
var self__ = this;
var _4552__$1 = this;
return (new cljs.analyzer.t_cljs$analyzer4550(meta4551__$1));
});

cljs.analyzer.t_cljs$analyzer4550.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4552){
var self__ = this;
var _4552__$1 = this;
return self__.meta4551;
});

cljs.analyzer.t_cljs$analyzer4550.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
=======
cljs.analyzer.t_cljs$analyzer13108 = (function (meta13109){
this.meta13109 = meta13109;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.analyzer.t_cljs$analyzer13108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13110,meta13109__$1){
var self__ = this;
var _13110__$1 = this;
return (new cljs.analyzer.t_cljs$analyzer13108(meta13109__$1));
});

cljs.analyzer.t_cljs$analyzer13108.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13110){
var self__ = this;
var _13110__$1 = this;
return self__.meta13109;
});

cljs.analyzer.t_cljs$analyzer13108.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
var self__ = this;
var ___$1 = this;
if((!((cljs.env._STAR_compiler_STAR_ == null)))){
return new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_));
} else {
return cljs.analyzer.default_namespaces;
}
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
cljs.analyzer.t_cljs$analyzer4550.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta4551","meta4551",654881923,null)], null);
});

cljs.analyzer.t_cljs$analyzer4550.cljs$lang$type = true;

cljs.analyzer.t_cljs$analyzer4550.cljs$lang$ctorStr = "cljs.analyzer/t_cljs$analyzer4550";

cljs.analyzer.t_cljs$analyzer4550.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.analyzer/t_cljs$analyzer4550");
});

/**
 * Positional factory function for cljs.analyzer/t_cljs$analyzer4550.
 */
cljs.analyzer.__GT_t_cljs$analyzer4550 = (function cljs$analyzer$__GT_t_cljs$analyzer4550(meta4551){
return (new cljs.analyzer.t_cljs$analyzer4550(meta4551));
=======
cljs.analyzer.t_cljs$analyzer13108.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta13109","meta13109",363952212,null)], null);
});

cljs.analyzer.t_cljs$analyzer13108.cljs$lang$type = true;

cljs.analyzer.t_cljs$analyzer13108.cljs$lang$ctorStr = "cljs.analyzer/t_cljs$analyzer13108";

cljs.analyzer.t_cljs$analyzer13108.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.analyzer/t_cljs$analyzer13108");
});

/**
 * Positional factory function for cljs.analyzer/t_cljs$analyzer13108.
 */
cljs.analyzer.__GT_t_cljs$analyzer13108 = (function cljs$analyzer$__GT_t_cljs$analyzer13108(meta13109){
return (new cljs.analyzer.t_cljs$analyzer13108(meta13109));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
});

}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
return (new cljs.analyzer.t_cljs$analyzer4550(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cljs.analyzer.get_namespace = (function cljs$analyzer$get_namespace(var_args){
var G__4554 = arguments.length;
switch (G__4554) {
=======
return (new cljs.analyzer.t_cljs$analyzer13108(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cljs.analyzer.get_namespace = (function cljs$analyzer$get_namespace(var_args){
var G__13112 = arguments.length;
switch (G__13112) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
case 1:
return cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1 = (function (key){
return cljs.analyzer.get_namespace.call(null,cljs.env._STAR_compiler_STAR_,key);
});

cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$2 = (function (cenv,key){
var temp__5722__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,cenv),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),key], null));
if((temp__5722__auto__ == null)){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null),key)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)], null);
} else {
return null;
}
} else {
var ns = temp__5722__auto__;
return ns;
}
});

cljs.analyzer.get_namespace.cljs$lang$maxFixedArity = 2;

cljs.analyzer.get_line = (function cljs$analyzer$get_line(x,env){
var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,x));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env);
}
});
cljs.analyzer.get_col = (function cljs$analyzer$get_col(x,env){
var or__4131__auto__ = new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,x));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(env);
}
});
/**
 * Given a Clojure namespace intern all macros into the ambient ClojureScript
 * analysis environment.
 */
cljs.analyzer.intern_macros = (function cljs$analyzer$intern_macros(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__4557 = arguments.length;
switch (G__4557) {
=======
var G__13115 = arguments.length;
switch (G__13115) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
case 1:
return cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.intern_macros.call(null,ns,false);
});

cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$2 = (function (ns,reload){
if(cljs.core.truth_((function (){var or__4131__auto__ = (cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"macros","macros",811339431)) == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return reload;
}
})())){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
return cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"macros","macros",811339431)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__4558){
var vec__4559 = p__4558;
var k = cljs.core.nth.call(null,vec__4559,(0),null);
var v = cljs.core.nth.call(null,vec__4559,(1),null);
=======
return cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"macros","macros",811339431)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__13116){
var vec__13117 = p__13116;
var k = cljs.core.nth.call(null,vec__13117,(0),null);
var v = cljs.core.nth.call(null,vec__13117,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var vm = cljs.core.meta.call(null,v);
var ns__$1 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(vm).getName();
return cljs.core.assoc.call(null,vm,new cljs.core.Keyword(null,"ns","ns",441598760),ns__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)),new cljs.core.Keyword(null,"macro","macro",-867863404),true);
})()], null);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
}),cljs.core.filter.call(null,(function (p__4562){
var vec__4563 = p__4562;
var _ = cljs.core.nth.call(null,vec__4563,(0),null);
var v = cljs.core.nth.call(null,vec__4563,(1),null);
=======
}),cljs.core.filter.call(null,(function (p__13120){
var vec__13121 = p__13120;
var _ = cljs.core.nth.call(null,vec__13121,(0),null);
var v = cljs.core.nth.call(null,vec__13121,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
return v.isMacro();
}),cljs.core.ns_interns_STAR_.call(null,ns)))));
} else {
return null;
}
});

cljs.analyzer.intern_macros.cljs$lang$maxFixedArity = 2;

/**
 * Construct an empty analysis environment. Required to analyze forms.
 */
cljs.analyzer.empty_env = (function cljs$analyzer$empty_env(){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var val__4357__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__4357__auto__ == null)){
=======
var val__12915__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__12915__auto__ == null)){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
try{return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"locals","locals",535295783),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"js-globals","js-globals",1670394727),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (val__4357__auto__){
return (function (p1__4567_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__4567_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"js-var","js-var",-1177899142),new cljs.core.Keyword(null,"name","name",1843675177),p1__4567_SHARP_,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"js","js",-886355190,null)], null)],null));
});})(val__4357__auto__))
,cljs.core.list(new cljs.core.Symbol(null,"alert","alert",1068580947,null),new cljs.core.Symbol(null,"window","window",-1929916235,null),new cljs.core.Symbol(null,"document","document",311342840,null),new cljs.core.Symbol(null,"console","console",-1426363712,null),new cljs.core.Symbol(null,"escape","escape",648929575,null),new cljs.core.Symbol(null,"unescape","unescape",-2037730561,null),new cljs.core.Symbol(null,"screen","screen",-664376021,null),new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Symbol(null,"navigator","navigator",-604431588,null),new cljs.core.Symbol(null,"history","history",1393136307,null),new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Symbol(null,"global","global",1734126574,null),new cljs.core.Symbol(null,"process","process",-1011242831,null),new cljs.core.Symbol(null,"require","require",1172530194,null),new cljs.core.Symbol(null,"module","module",-1229817578,null),new cljs.core.Symbol(null,"exports","exports",895523255,null))))], null);
}finally {if((val__4357__auto__ == null)){
=======
try{return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"locals","locals",535295783),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"js-globals","js-globals",1670394727),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (val__12915__auto__){
return (function (p1__13125_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__13125_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"js-var","js-var",-1177899142),new cljs.core.Keyword(null,"name","name",1843675177),p1__13125_SHARP_,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"js","js",-886355190,null)], null)],null));
});})(val__12915__auto__))
,cljs.core.list(new cljs.core.Symbol(null,"alert","alert",1068580947,null),new cljs.core.Symbol(null,"window","window",-1929916235,null),new cljs.core.Symbol(null,"document","document",311342840,null),new cljs.core.Symbol(null,"console","console",-1426363712,null),new cljs.core.Symbol(null,"escape","escape",648929575,null),new cljs.core.Symbol(null,"unescape","unescape",-2037730561,null),new cljs.core.Symbol(null,"screen","screen",-664376021,null),new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Symbol(null,"navigator","navigator",-604431588,null),new cljs.core.Symbol(null,"history","history",1393136307,null),new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Symbol(null,"global","global",1734126574,null),new cljs.core.Symbol(null,"process","process",-1011242831,null),new cljs.core.Symbol(null,"require","require",1172530194,null),new cljs.core.Symbol(null,"module","module",-1229817578,null),new cljs.core.Symbol(null,"exports","exports",895523255,null))))], null);
}finally {if((val__12915__auto__ == null)){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
cljs.analyzer.source_info__GT_error_data = (function cljs$analyzer$source_info__GT_error_data(p__4568){
var map__4569 = p__4568;
var map__4569__$1 = (((((!((map__4569 == null))))?(((((map__4569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4569):map__4569);
var file = cljs.core.get.call(null,map__4569__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__4569__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__4569__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553),column], null);
});
cljs.analyzer.source_info = (function cljs$analyzer$source_info(var_args){
var G__4572 = arguments.length;
switch (G__4572) {
=======
cljs.analyzer.source_info__GT_error_data = (function cljs$analyzer$source_info__GT_error_data(p__13126){
var map__13127 = p__13126;
var map__13127__$1 = (((((!((map__13127 == null))))?(((((map__13127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13127):map__13127);
var file = cljs.core.get.call(null,map__13127__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__13127__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__13127__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553),column], null);
});
cljs.analyzer.source_info = (function cljs$analyzer$source_info(var_args){
var G__13130 = arguments.length;
switch (G__13130) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
case 1:
return cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$1 = (function (env){
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.analyzer.source_info.call(null,null,env);
} else {
return null;
}
});

cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2 = (function (name,env){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__4573 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null)))?"cljs/core.cljs":cljs.analyzer._STAR_cljs_file_STAR_),new cljs.core.Keyword(null,"line","line",212345235),cljs.analyzer.get_line.call(null,name,env),new cljs.core.Keyword(null,"column","column",2078222095),cljs.analyzer.get_col.call(null,name,env)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"root-source-info","root-source-info",-1436144912).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.core.merge.call(null,G__4573,cljs.core.select_keys.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root-source-info","root-source-info",-1436144912)], null)));
} else {
return G__4573;
=======
var G__13131 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null)))?"cljs/core.cljs":cljs.analyzer._STAR_cljs_file_STAR_),new cljs.core.Keyword(null,"line","line",212345235),cljs.analyzer.get_line.call(null,name,env),new cljs.core.Keyword(null,"column","column",2078222095),cljs.analyzer.get_col.call(null,name,env)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"root-source-info","root-source-info",-1436144912).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.core.merge.call(null,G__13131,cljs.core.select_keys.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root-source-info","root-source-info",-1436144912)], null)));
} else {
return G__13131;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
}
});

cljs.analyzer.source_info.cljs$lang$maxFixedArity = 2;

cljs.analyzer.message = (function cljs$analyzer$message(env,s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))?[" at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))," ",cljs.analyzer._STAR_cljs_file_STAR_].join(''):(cljs.core.truth_(cljs.analyzer._STAR_cljs_file_STAR_)?[" in file ",cljs.analyzer._STAR_cljs_file_STAR_].join(''):null))].join('');
});
cljs.analyzer.warning = (function cljs$analyzer$warning(warning_type,env,extra){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var seq__4575 = cljs.core.seq.call(null,cljs.analyzer._STAR_cljs_warning_handlers_STAR_);
var chunk__4576 = null;
var count__4577 = (0);
var i__4578 = (0);
while(true){
if((i__4578 < count__4577)){
var handler = cljs.core._nth.call(null,chunk__4576,i__4578);
handler.call(null,warning_type,env,extra);


var G__4579 = seq__4575;
var G__4580 = chunk__4576;
var G__4581 = count__4577;
var G__4582 = (i__4578 + (1));
seq__4575 = G__4579;
chunk__4576 = G__4580;
count__4577 = G__4581;
i__4578 = G__4582;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__4575);
if(temp__5720__auto__){
var seq__4575__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4575__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__4575__$1);
var G__4583 = cljs.core.chunk_rest.call(null,seq__4575__$1);
var G__4584 = c__4550__auto__;
var G__4585 = cljs.core.count.call(null,c__4550__auto__);
var G__4586 = (0);
seq__4575 = G__4583;
chunk__4576 = G__4584;
count__4577 = G__4585;
i__4578 = G__4586;
continue;
} else {
var handler = cljs.core.first.call(null,seq__4575__$1);
handler.call(null,warning_type,env,extra);


var G__4587 = cljs.core.next.call(null,seq__4575__$1);
var G__4588 = null;
var G__4589 = (0);
var G__4590 = (0);
seq__4575 = G__4587;
chunk__4576 = G__4588;
count__4577 = G__4589;
i__4578 = G__4590;
=======
var seq__13133 = cljs.core.seq.call(null,cljs.analyzer._STAR_cljs_warning_handlers_STAR_);
var chunk__13134 = null;
var count__13135 = (0);
var i__13136 = (0);
while(true){
if((i__13136 < count__13135)){
var handler = cljs.core._nth.call(null,chunk__13134,i__13136);
handler.call(null,warning_type,env,extra);


var G__13137 = seq__13133;
var G__13138 = chunk__13134;
var G__13139 = count__13135;
var G__13140 = (i__13136 + (1));
seq__13133 = G__13137;
chunk__13134 = G__13138;
count__13135 = G__13139;
i__13136 = G__13140;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__13133);
if(temp__5720__auto__){
var seq__13133__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13133__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__13133__$1);
var G__13141 = cljs.core.chunk_rest.call(null,seq__13133__$1);
var G__13142 = c__4550__auto__;
var G__13143 = cljs.core.count.call(null,c__4550__auto__);
var G__13144 = (0);
seq__13133 = G__13141;
chunk__13134 = G__13142;
count__13135 = G__13143;
i__13136 = G__13144;
continue;
} else {
var handler = cljs.core.first.call(null,seq__13133__$1);
handler.call(null,warning_type,env,extra);


var G__13145 = cljs.core.next.call(null,seq__13133__$1);
var G__13146 = null;
var G__13147 = (0);
var G__13148 = (0);
seq__13133 = G__13145;
chunk__13134 = G__13146;
count__13135 = G__13147;
i__13136 = G__13148;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.analyzer.accumulating_warning_handler = (function cljs$analyzer$accumulating_warning_handler(warn_acc){
return (function (warning_type,env,extra){
if(cljs.core.truth_(warning_type.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_))){
return cljs.core.swap_BANG_.call(null,warn_acc,cljs.core.conj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [warning_type,env,extra], null));
} else {
return null;
}
});
});
cljs.analyzer.replay_accumulated_warnings = (function cljs$analyzer$replay_accumulated_warnings(warn_acc){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
return cljs.core.run_BANG_.call(null,(function (p1__4591_SHARP_){
return cljs.core.apply.call(null,cljs.analyzer.warning,p1__4591_SHARP_);
}),cljs.core.deref.call(null,warn_acc));
});
cljs.analyzer.error_data = (function cljs$analyzer$error_data(var_args){
var G__4593 = arguments.length;
switch (G__4593) {
=======
return cljs.core.run_BANG_.call(null,(function (p1__13149_SHARP_){
return cljs.core.apply.call(null,cljs.analyzer.warning,p1__13149_SHARP_);
}),cljs.core.deref.call(null,warn_acc));
});
cljs.analyzer.error_data = (function cljs$analyzer$error_data(var_args){
var G__13151 = arguments.length;
switch (G__13151) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
case 2:
return cljs.analyzer.error_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.error_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.error_data.cljs$core$IFn$_invoke$arity$2 = (function (env,phase){
return cljs.analyzer.error_data.call(null,env,phase,null);
});

cljs.analyzer.error_data.cljs$core$IFn$_invoke$arity$3 = (function (env,phase,symbol){
return cljs.core.merge.call(null,cljs.analyzer.source_info__GT_error_data.call(null,cljs.analyzer.source_info.call(null,env)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase], null),(cljs.core.truth_(symbol)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),symbol], null):null));
});

cljs.analyzer.error_data.cljs$lang$maxFixedArity = 3;

cljs.analyzer.compile_syntax_error = (function cljs$analyzer$compile_syntax_error(env,msg,symbol){
return cljs.core.ex_info.call(null,null,cljs.analyzer.error_data.call(null,env,new cljs.core.Keyword(null,"compile-syntax-check","compile-syntax-check",-1865080468),symbol),(new Error(msg)));
});
cljs.analyzer.error = (function cljs$analyzer$error(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__4596 = arguments.length;
switch (G__4596) {
=======
var G__13154 = arguments.length;
switch (G__13154) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
case 2:
return cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2 = (function (env,msg){
return cljs.analyzer.error.call(null,env,msg,null);
});

cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3 = (function (env,msg,cause){
return cljs.core.ex_info.call(null,cljs.analyzer.message.call(null,env,msg),cljs.core.assoc.call(null,cljs.analyzer.source_info.call(null,env),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword("cljs","analysis-error","cljs/analysis-error",-420526349)),cause);
});

cljs.analyzer.error.cljs$lang$maxFixedArity = 3;

cljs.analyzer.analysis_error_QMARK_ = (function cljs$analyzer$analysis_error_QMARK_(ex){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs","analysis-error","cljs/analysis-error",-420526349),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,ex)));
});
cljs.analyzer.has_error_data_QMARK_ = (function cljs$analyzer$has_error_data_QMARK_(ex){
return cljs.core.contains_QMARK_.call(null,cljs.core.ex_data.call(null,ex),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
});
cljs.analyzer.implicit_nses = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"String","String",-2070057435,null),"null",new cljs.core.Symbol(null,"goog.string","goog.string",-2055533048,null),"null",new cljs.core.Symbol(null,"goog","goog",-70603925,null),"null",new cljs.core.Symbol(null,"goog.object","goog.object",678593132,null),"null",new cljs.core.Symbol(null,"Math","Math",2033287572,null),"null",new cljs.core.Symbol(null,"goog.array","goog.array",-671977860,null),"null"], null), null);
cljs.analyzer.implicit_import_QMARK_ = (function cljs$analyzer$implicit_import_QMARK_(env,prefix,suffix){
return cljs.core.contains_QMARK_.call(null,cljs.analyzer.implicit_nses,prefix);
});
cljs.analyzer.confirm_var_exist_warning = (function cljs$analyzer$confirm_var_exist_warning(env,prefix,suffix){
return (function (env__$1,prefix__$1,suffix__$1){
return cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),env__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),prefix__$1,new cljs.core.Keyword(null,"suffix","suffix",367373057),suffix__$1,new cljs.core.Keyword(null,"macro-present?","macro-present?",-1397713205),(!((cljs.analyzer.get_expander.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix__$1)),env__$1) == null)))], null));
});
});
/**
 * Check if a JavaScript namespace has been loaded. JavaScript vars are
 *   not currently checked.
 */
cljs.analyzer.loaded_js_ns_QMARK_ = (function cljs$analyzer$loaded_js_ns_QMARK_(env,prefix){
if(cljs.core.truth_(cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),prefix))){
return null;
} else {
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env);
return (((!((cljs.core.get.call(null,new cljs.core.Keyword(null,"requires","requires",-1201390927).cljs$core$IFn$_invoke$arity$1(ns),prefix) == null)))) || ((!((cljs.core.get.call(null,new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(ns),prefix) == null)))));
}
});
cljs.analyzer.internal_js_module_exists_QMARK_ = (function cljs$analyzer$internal_js_module_exists_QMARK_(js_module_index,module){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
return cljs.core.contains_QMARK_.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.call(null,(function (p__4599){
var vec__4600 = p__4599;
var k = cljs.core.nth.call(null,vec__4600,(0),null);
var v = cljs.core.nth.call(null,vec__4600,(1),null);
=======
return cljs.core.contains_QMARK_.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.call(null,(function (p__13157){
var vec__13158 = p__13157;
var k = cljs.core.nth.call(null,vec__13158,(0),null);
var v = cljs.core.nth.call(null,vec__13158,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(v)], null);
})),js_module_index),cljs.core.str.cljs$core$IFn$_invoke$arity$1(module));
});
cljs.analyzer.js_module_exists_QMARK__STAR_ = cljs.core.memoize.call(null,cljs.analyzer.internal_js_module_exists_QMARK_);
cljs.analyzer.js_module_exists_QMARK_ = (function cljs$analyzer$js_module_exists_QMARK_(module){
return cljs.analyzer.js_module_exists_QMARK__STAR_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931)], null)),module);
});
cljs.analyzer.node_module_dep_QMARK_ = (function cljs$analyzer$node_module_dep_QMARK_(module){
try{return ((cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs")) && (cljs.core.boolean$.call(null,require.resolve(cljs.core.str.cljs$core$IFn$_invoke$arity$1(module)))));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
}catch (e4603){var _ = e4603;
=======
}catch (e13161){var _ = e13161;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
return false;
}});
cljs.analyzer.dep_has_global_exports_QMARK_ = (function cljs$analyzer$dep_has_global_exports_QMARK_(module){
var global_exports = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131),cljs.core.str.cljs$core$IFn$_invoke$arity$1(module),new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592)], null));
return ((cljs.core.contains_QMARK_.call(null,global_exports,cljs.core.symbol.call(null,module))) || (cljs.core.contains_QMARK_.call(null,global_exports,cljs.core.name.call(null,module))));
});
cljs.analyzer.confirm_var_exists = (function cljs$analyzer$confirm_var_exists(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__4605 = arguments.length;
switch (G__4605) {
=======
var G__13163 = arguments.length;
switch (G__13163) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
case 3:
return cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$3 = (function (env,prefix,suffix){
var warn = cljs.analyzer.confirm_var_exist_warning.call(null,env,prefix,suffix);
return cljs.analyzer.confirm_var_exists.call(null,env,prefix,suffix,warn);
});

cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$4 = (function (env,prefix,suffix,missing_fn){
var sufstr = cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix);
var suffix_str = (((((!((".." === sufstr)))) && (/\./.test(sufstr))))?cljs.core.first.call(null,clojure.string.split.call(null,sufstr,/\./)):suffix);
var suffix__$1 = cljs.core.symbol.call(null,suffix_str);
if((((!(cljs.analyzer.implicit_import_QMARK_.call(null,env,prefix,suffix__$1)))) && ((!(cljs.analyzer.loaded_js_ns_QMARK_.call(null,env,prefix)))) && ((!(((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),prefix)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"unquote","unquote",-1004694737,null),suffix__$1)))))) && ((cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),prefix,new cljs.core.Keyword(null,"defs","defs",1398449717),suffix__$1) == null)) && (cljs.core.not.call(null,cljs.analyzer.js_module_exists_QMARK_.call(null,prefix))))){
return missing_fn.call(null,env,prefix,suffix__$1);
} else {
return null;
}
});

cljs.analyzer.confirm_var_exists.cljs$lang$maxFixedArity = 4;

cljs.analyzer.confirm_var_exists_throw = (function cljs$analyzer$confirm_var_exists_throw(){
return (function (env,prefix,suffix){
return cljs.analyzer.confirm_var_exists.call(null,env,prefix,suffix,(function (env__$1,prefix__$1,suffix__$1){
throw cljs.analyzer.error.call(null,env__$1,["Unable to resolve var: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix__$1)," in this context"].join(''));
}));
});
});
cljs.analyzer.resolve_ns_alias = (function cljs$analyzer$resolve_ns_alias(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__4608 = arguments.length;
switch (G__4608) {
=======
var G__13166 = arguments.length;
switch (G__13166) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
case 2:
return cljs.analyzer.resolve_ns_alias.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.resolve_ns_alias.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.resolve_ns_alias.cljs$core$IFn$_invoke$arity$2 = (function (env,name){
return cljs.analyzer.resolve_ns_alias.call(null,env,name,cljs.core.symbol.call(null,name));
});

cljs.analyzer.resolve_ns_alias.cljs$core$IFn$_invoke$arity$3 = (function (env,name,not_found){
var sym = cljs.core.symbol.call(null,name);
return cljs.core.get.call(null,new cljs.core.Keyword(null,"requires","requires",-1201390927).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),sym,not_found);
});

cljs.analyzer.resolve_ns_alias.cljs$lang$maxFixedArity = 3;

cljs.analyzer.resolve_macro_ns_alias = (function cljs$analyzer$resolve_macro_ns_alias(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__4611 = arguments.length;
switch (G__4611) {
=======
var G__13169 = arguments.length;
switch (G__13169) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
case 2:
return cljs.analyzer.resolve_macro_ns_alias.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.resolve_macro_ns_alias.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.resolve_macro_ns_alias.cljs$core$IFn$_invoke$arity$2 = (function (env,name){
return cljs.analyzer.resolve_macro_ns_alias.call(null,env,name,cljs.core.symbol.call(null,name));
});

cljs.analyzer.resolve_macro_ns_alias.cljs$core$IFn$_invoke$arity$3 = (function (env,name,not_found){
var sym = cljs.core.symbol.call(null,name);
return cljs.core.get.call(null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),sym,not_found);
});

cljs.analyzer.resolve_macro_ns_alias.cljs$lang$maxFixedArity = 3;

/**
 * Given env, an analysis environment, and ns-sym, a symbol identifying a
 * namespace, confirm that the namespace exists. Warn if not found.
 */
cljs.analyzer.confirm_ns = (function cljs$analyzer$confirm_ns(env,ns_sym){
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),ns_sym)) && ((cljs.core.get.call(null,cljs.analyzer.implicit_nses,ns_sym) == null)) && ((cljs.core.get.call(null,new cljs.core.Keyword(null,"requires","requires",-1201390927).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),ns_sym) == null)) && ((cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_sym) == null)) && (cljs.core.not.call(null,cljs.analyzer.js_module_exists_QMARK_.call(null,ns_sym))))){
return cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605),ns_sym,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493),ns_sym], null));
} else {
return null;
}
});
/**
 * Is sym visible from core in the current compilation namespace?
 */
cljs.analyzer.core_name_QMARK_ = (function cljs$analyzer$core_name_QMARK_(env,sym){
var and__4120__auto__ = (function (){var or__4131__auto__ = (!((cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Keyword(null,"defs","defs",1398449717),sym) == null)));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var temp__5722__auto__ = cljs.analyzer.get_expander.call(null,sym,env);
if((temp__5722__auto__ == null)){
return false;
} else {
var mac = temp__5722__auto__;
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,mac));
return cljs.core._EQ_.call(null,ns.getName(),new cljs.core.Symbol(null,"cljs.core$macros","cljs.core$macros",-2057787548,null));
}
}
})();
if(and__4120__auto__){
return (!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"excludes","excludes",-1791725945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),sym)));
} else {
return and__4120__auto__;
}
});
/**
 * Is sym public?
 */
cljs.analyzer.public_name_QMARK_ = (function cljs$analyzer$public_name_QMARK_(ns,sym){
var var_ast = (function (){var or__4131__auto__ = cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717),sym);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs.core.symbol.call(null,[cljs.core.name.call(null,ns),"$macros"].join('')),new cljs.core.Keyword(null,"defs","defs",1398449717),sym);
}
})();
return (((!((var_ast == null)))) && (cljs.core.not.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"private","private",-558947994).cljs$core$IFn$_invoke$arity$1(var_ast);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"anonymous","anonymous",447897231).cljs$core$IFn$_invoke$arity$1(var_ast);
}
})())));
});
cljs.analyzer.js_tag_QMARK_ = (function cljs$analyzer$js_tag_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"js","js",-886355190,null),x)) || (cljs.core._EQ_.call(null,"js",cljs.core.namespace.call(null,x))))));
});
cljs.analyzer.normalize_js_tag = (function cljs$analyzer$normalize_js_tag(x){
if((!(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"js","js",-886355190,null),x)))){
return cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"js","js",-886355190,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.symbol,clojure.string.split.call(null,cljs.core.name.call(null,x),/\./))),new cljs.core.Symbol(null,"prototype","prototype",519166522,null))], null));
} else {
return x;
}
});
/**
 * Ensures that a type tag is a set.
 */
cljs.analyzer.__GT_type_set = (function cljs$analyzer$__GT_type_set(t){
if(cljs.analyzer.cljs_set_QMARK_.call(null,t)){
return t;
} else {
return cljs.core.PersistentHashSet.createAsIfByAssoc([t]);
}
});
cljs.analyzer.canonicalize_type = (function cljs$analyzer$canonicalize_type(t){

if((t instanceof cljs.core.Symbol)){
return t;
} else {
if(cljs.core.empty_QMARK_.call(null,t)){
return null;
} else {
if(((1) === cljs.core.count.call(null,t))){
return cljs.core.first.call(null,t);
} else {
if(cljs.core.contains_QMARK_.call(null,t,new cljs.core.Symbol(null,"any","any",-948528346,null))){
return new cljs.core.Symbol(null,"any","any",-948528346,null);
} else {
if(cljs.core.contains_QMARK_.call(null,t,new cljs.core.Symbol(null,"seq","seq",-177272256,null))){
var res = cljs.core.disj.call(null,t,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null));
if(((1) === cljs.core.count.call(null,res))){
return new cljs.core.Symbol(null,"seq","seq",-177272256,null);
} else {
return res;
}
} else {
return t;

}
}
}
}
}
});
/**
 * Produces a union of types.
 */
cljs.analyzer.add_types = (function cljs$analyzer$add_types(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__4617 = arguments.length;
switch (G__4617) {
=======
var G__13175 = arguments.length;
switch (G__13175) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
case 0:
return cljs.analyzer.add_types.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.analyzer.add_types.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.add_types.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var len__4730__auto___4619 = arguments.length;
var i__4731__auto___4620 = (0);
while(true){
if((i__4731__auto___4620 < len__4730__auto___4619)){
args_arr__4751__auto__.push((arguments[i__4731__auto___4620]));

var G__4621 = (i__4731__auto___4620 + (1));
i__4731__auto___4620 = G__4621;
=======
var len__4730__auto___13177 = arguments.length;
var i__4731__auto___13178 = (0);
while(true){
if((i__4731__auto___13178 < len__4730__auto___13177)){
args_arr__4751__auto__.push((arguments[i__4731__auto___13178]));

var G__13179 = (i__4731__auto___13178 + (1));
i__4731__auto___13178 = G__13179;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return cljs.analyzer.add_types.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

cljs.analyzer.add_types.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.Symbol(null,"any","any",-948528346,null);
});

cljs.analyzer.add_types.cljs$core$IFn$_invoke$arity$1 = (function (t1){
return t1;
});

cljs.analyzer.add_types.cljs$core$IFn$_invoke$arity$2 = (function (t1,t2){
if((((t1 == null)) || ((t2 == null)))){
return new cljs.core.Symbol(null,"any","any",-948528346,null);
} else {
return cljs.analyzer.canonicalize_type.call(null,clojure.set.union.call(null,cljs.analyzer.__GT_type_set.call(null,t1),cljs.analyzer.__GT_type_set.call(null,t2)));
}
});

cljs.analyzer.add_types.cljs$core$IFn$_invoke$arity$variadic = (function (t1,t2,ts){
return cljs.core.apply.call(null,cljs.analyzer.add_types,cljs.analyzer.add_types.call(null,t1,t2),ts);
});

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
cljs.analyzer.add_types.cljs$lang$applyTo = (function (seq4614){
var G__4615 = cljs.core.first.call(null,seq4614);
var seq4614__$1 = cljs.core.next.call(null,seq4614);
var G__4616 = cljs.core.first.call(null,seq4614__$1);
var seq4614__$2 = cljs.core.next.call(null,seq4614__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4615,G__4616,seq4614__$2);
=======
cljs.analyzer.add_types.cljs$lang$applyTo = (function (seq13172){
var G__13173 = cljs.core.first.call(null,seq13172);
var seq13172__$1 = cljs.core.next.call(null,seq13172);
var G__13174 = cljs.core.first.call(null,seq13172__$1);
var seq13172__$2 = cljs.core.next.call(null,seq13172__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13173,G__13174,seq13172__$2);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
});

cljs.analyzer.add_types.cljs$lang$maxFixedArity = (2);

cljs.analyzer.alias__GT_type = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"object","object",-1179821820,null),new cljs.core.Symbol(null,"Object","Object",61210754,null),new cljs.core.Symbol(null,"string","string",-349010059,null),new cljs.core.Symbol(null,"String","String",-2070057435,null),new cljs.core.Symbol(null,"number","number",-1084057331,null),new cljs.core.Symbol(null,"Number","Number",-508146185,null),new cljs.core.Symbol(null,"array","array",-440182315,null),new cljs.core.Symbol(null,"Array","Array",-423496279,null),new cljs.core.Symbol(null,"function","function",-486723946,null),new cljs.core.Symbol(null,"Function","Function",-749895448,null),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Symbol(null,"Boolean","Boolean",1661141587,null),new cljs.core.Symbol(null,"symbol","symbol",601958831,null),new cljs.core.Symbol(null,"Symbol","Symbol",716452869,null)], null);
cljs.analyzer.has_extern_QMARK__STAR_ = (function cljs$analyzer$has_extern_QMARK__STAR_(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__4623 = arguments.length;
switch (G__4623) {
=======
var G__13181 = arguments.length;
switch (G__13181) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
case 2:
return cljs.analyzer.has_extern_QMARK__STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.has_extern_QMARK__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.has_extern_QMARK__STAR_.cljs$core$IFn$_invoke$arity$2 = (function (pre,externs){
var pre__$1 = (function (){var temp__5722__auto__ = cljs.core.find.call(null,cljs.core.get_in.call(null,externs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Window","Window",-138860255,null),new cljs.core.Symbol(null,"prototype","prototype",519166522,null)], null)),cljs.core.first.call(null,pre));
if((temp__5722__auto__ == null)){
return pre;
} else {
var me = temp__5722__auto__;
var temp__5722__auto____$1 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,cljs.core.first.call(null,me)));
if((temp__5722__auto____$1 == null)){
return pre;
} else {
var tag = temp__5722__auto____$1;
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,new cljs.core.Symbol(null,"prototype","prototype",519166522,null)], null),cljs.core.next.call(null,pre));
}
}
})();
return cljs.analyzer.has_extern_QMARK__STAR_.call(null,pre__$1,externs,externs);
});

cljs.analyzer.has_extern_QMARK__STAR_.cljs$core$IFn$_invoke$arity$3 = (function (pre,externs,top){
while(true){
if(cljs.core.empty_QMARK_.call(null,pre)){
return true;
} else {
var x = cljs.core.first.call(null,pre);
var me = cljs.core.find.call(null,externs,x);
if(cljs.core.not.call(null,me)){
return false;
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var vec__4624 = me;
var x_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__4624,(0),null);
var externs_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__4624,(1),null);
=======
var vec__13182 = me;
var x_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__13182,(0),null);
var externs_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__13182,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
var xmeta = cljs.core.meta.call(null,x_SINGLEQUOTE_);
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"Function","Function",-749895448,null),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(xmeta));
if(and__4120__auto__){
return new cljs.core.Keyword(null,"ctor","ctor",1750864802).cljs$core$IFn$_invoke$arity$1(xmeta);
} else {
return and__4120__auto__;
}
})())){
var or__4131__auto__ = cljs.analyzer.has_extern_QMARK__STAR_.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prototype","prototype",519166522,null)], null),cljs.core.next.call(null,pre)),externs_SINGLEQUOTE_,top);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.analyzer.has_extern_QMARK__STAR_.call(null,cljs.core.next.call(null,pre),externs_SINGLEQUOTE_,top);
}
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__4628 = cljs.core.next.call(null,pre);
var G__4629 = externs_SINGLEQUOTE_;
var G__4630 = top;
pre = G__4628;
externs = G__4629;
top = G__4630;
=======
var G__13186 = cljs.core.next.call(null,pre);
var G__13187 = externs_SINGLEQUOTE_;
var G__13188 = top;
pre = G__13186;
externs = G__13187;
top = G__13188;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
continue;
}

}

}
break;
}
});

cljs.analyzer.has_extern_QMARK__STAR_.cljs$lang$maxFixedArity = 3;

cljs.analyzer.has_extern_QMARK_ = (function cljs$analyzer$has_extern_QMARK_(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__4632 = arguments.length;
switch (G__4632) {
=======
var G__13190 = arguments.length;
switch (G__13190) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
case 1:
return cljs.analyzer.has_extern_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.has_extern_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.has_extern_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (pre){
return cljs.analyzer.has_extern_QMARK_.call(null,pre,cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","externs","cljs.analyzer/externs",893359239)));
});

cljs.analyzer.has_extern_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (pre,externs){
var or__4131__auto__ = cljs.analyzer.has_extern_QMARK__STAR_.call(null,pre,externs);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,pre)))?(function (){var x = cljs.core.first.call(null,pre);
var or__4131__auto____$1 = cljs.core.get_in.call(null,externs,cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Window","Window",-138860255,null),new cljs.core.Symbol(null,"prototype","prototype",519166522,null)], null),x));
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return cljs.core.get_in.call(null,externs,cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Number","Number",-508146185,null)], null),x));
}
})():null);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return clojure.string.starts_with_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,pre)),"cljs$");
}
}
});

cljs.analyzer.has_extern_QMARK_.cljs$lang$maxFixedArity = 2;

cljs.analyzer.js_tag = (function cljs$analyzer$js_tag(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__4635 = arguments.length;
switch (G__4635) {
=======
var G__13193 = arguments.length;
switch (G__13193) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
case 1:
return cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$1 = (function (pre){
return cljs.analyzer.js_tag.call(null,pre,new cljs.core.Keyword(null,"tag","tag",-1290361223));
});

cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$2 = (function (pre,tag_type){
return cljs.analyzer.js_tag.call(null,pre,tag_type,cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","externs","cljs.analyzer/externs",893359239)));
});

cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$3 = (function (pre,tag_type,externs){
return cljs.analyzer.js_tag.call(null,pre,tag_type,externs,externs);
});

cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$4 = (function (pre,tag_type,externs,top){
var temp__5720__auto__ = cljs.core.find.call(null,externs,cljs.core.first.call(null,pre));
if(cljs.core.truth_(temp__5720__auto__)){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var vec__4636 = temp__5720__auto__;
var p = cljs.core.nth.call(null,vec__4636,(0),null);
var externs_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__4636,(1),null);
var me = vec__4636;
=======
var vec__13194 = temp__5720__auto__;
var p = cljs.core.nth.call(null,vec__13194,(0),null);
var externs_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__13194,(1),null);
var me = vec__13194;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
var tag = tag_type.call(null,cljs.core.meta.call(null,p));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,pre),(1))){
if(cljs.core.truth_(tag)){
return cljs.core.symbol.call(null,"js",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.alias__GT_type.call(null,tag,tag)));
} else {
return null;
}
} else {
var or__4131__auto__ = cljs.analyzer.js_tag.call(null,cljs.core.next.call(null,pre),tag_type,externs_SINGLEQUOTE_,top);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.analyzer.js_tag.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prototype","prototype",519166522,null)], null),cljs.core.next.call(null,pre)),tag_type,cljs.core.get.call(null,top,tag),top);
}
}
} else {
return null;
}
});

cljs.analyzer.js_tag.cljs$lang$maxFixedArity = 4;

cljs.analyzer.dotted_symbol_QMARK_ = (function cljs$analyzer$dotted_symbol_QMARK_(sym){
var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym);
return ((goog.string.contains(s,".")) && ((!(goog.string.contains(s,"..")))));
});
cljs.analyzer.munge_node_lib = (function cljs$analyzer$munge_node_lib(name){
return ["node$module$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),/[.\\/]/,"$$")))].join('');
});
cljs.analyzer.munge_global_export = (function cljs$analyzer$munge_global_export(name){
return ["global$module$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),/[.\\/]/,"$$")))].join('');
});
/**
 * Takes a namespace and an unqualified symbol and potentially returns a new
 *   symbol to be used in lieu of the original.
 */
cljs.analyzer.resolve_alias = (function cljs$analyzer$resolve_alias(ns,sym){
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),ns);
if(and__4120__auto__){
var and__4120__auto____$1 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"aget","aget",1491056546,null),"null",new cljs.core.Symbol(null,"aset","aset",900773178,null),"null"], null), null).call(null,sym);
if(cljs.core.truth_(and__4120__auto____$1)){
return cljs.analyzer.checked_arrays.call(null);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return cljs.core.get_in.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"aget","aget",1491056546,null),new cljs.core.Symbol(null,"checked-aget","checked-aget",950823006,null),new cljs.core.Symbol(null,"aset","aset",900773178,null),new cljs.core.Symbol(null,"checked-aset","checked-aset",1556136760,null)], null),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"aget","aget",1491056546,null),new cljs.core.Symbol(null,"checked-aget'","checked-aget'",212330530,null),new cljs.core.Symbol(null,"aset","aset",900773178,null),new cljs.core.Symbol(null,"checked-aset'","checked-aset'",-510930777,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.checked_arrays.call(null),sym], null));
} else {
return sym;
}
});
cljs.analyzer.ns__GT_module_type = (function cljs$analyzer$ns__GT_module_type(ns){
if(cljs.core.truth_(cljs.analyzer.js_module_exists_QMARK_.call(null,ns))){
return new cljs.core.Keyword(null,"js","js",1768080579);
} else {
if(cljs.analyzer.node_module_dep_QMARK_.call(null,ns)){
return new cljs.core.Keyword(null,"node","node",581201198);
} else {
if(cljs.analyzer.dep_has_global_exports_QMARK_.call(null,ns)){
return new cljs.core.Keyword(null,"global","global",93595047);
} else {
return null;
}
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.analyzer !== 'undefined') && (typeof cljs.analyzer.resolve_STAR_ !== 'undefined')){
} else {
cljs.analyzer.resolve_STAR_ = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.analyzer","resolve*"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (env,sym,full_ns,current_ns){
return cljs.analyzer.ns__GT_module_type.call(null,full_ns);
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,cljs.analyzer.resolve_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (env,sym,full_ns,current_ns){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_ns),cljs.core.name.call(null,sym)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"js-var","js-var",-1177899142),new cljs.core.Keyword(null,"ns","ns",441598760),full_ns], null);
}));
cljs.core._add_method.call(null,cljs.analyzer.resolve_STAR_,new cljs.core.Keyword(null,"node","node",581201198),(function (env,sym,full_ns,current_ns){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_ns),[cljs.analyzer.munge_node_lib.call(null,full_ns),".",cljs.core.name.call(null,sym)].join('')),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"js-var","js-var",-1177899142),new cljs.core.Keyword(null,"ns","ns",441598760),current_ns], null);
}));
cljs.core._add_method.call(null,cljs.analyzer.resolve_STAR_,new cljs.core.Keyword(null,"global","global",93595047),(function (env,sym,full_ns,current_ns){
var pre = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Object","Object",61210754,null)], null),cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.symbol,clojure.string.split.call(null,cljs.core.name.call(null,sym),/\./))));
if(cljs.core.truth_(cljs.analyzer.has_extern_QMARK_.call(null,pre))){
} else {
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),current_ns,new cljs.core.Keyword(null,"externs","externs",221720677)], null),pre),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY);
}

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_ns),[cljs.analyzer.munge_global_export.call(null,full_ns),".",cljs.core.name.call(null,sym)].join('')),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"js-var","js-var",-1177899142),new cljs.core.Keyword(null,"ns","ns",441598760),current_ns,new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"js","js",-886355190,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),pre], null))], null);
}));
/**
 * Specially-treated symbols for which we don't trigger :private-var-access warnings.
 */
cljs.analyzer.private_var_access_exceptions = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("cljs.core","checked-aset'","cljs.core/checked-aset'",163859714,null),"null",new cljs.core.Symbol("cljs.core","checked-aget'","cljs.core/checked-aget'",1960922245,null),"null",new cljs.core.Symbol("cljs.core","checked-aget","cljs.core/checked-aget",24024561,null),"null",new cljs.core.Symbol("cljs.core","checked-aset","cljs.core/checked-aset",-2080232353,null),"null"], null), null);
cljs.core._add_method.call(null,cljs.analyzer.resolve_STAR_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (env,sym,full_ns,current_ns){
var sym_ast = cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),full_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.call(null,cljs.core.name.call(null,sym)));
var sym_name = cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_ns),cljs.core.name.call(null,sym));
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not_EQ_.call(null,current_ns,full_ns);
if(and__4120__auto__){
var and__4120__auto____$1 = new cljs.core.Keyword(null,"private","private",-558947994).cljs$core$IFn$_invoke$arity$1(sym_ast);
if(cljs.core.truth_(and__4120__auto____$1)){
return (((!(cljs.analyzer._STAR_private_var_access_nowarn_STAR_))) && ((!(cljs.core.contains_QMARK_.call(null,cljs.analyzer.private_var_access_exceptions,sym_name)))));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"private-var-access","private-var-access",967536101),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym_name], null));
} else {
}

return cljs.core.merge.call(null,sym_ast,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sym_name,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"ns","ns",441598760),full_ns], null));
}));
cljs.analyzer.required_QMARK_ = (function cljs$analyzer$required_QMARK_(ns,env){
return ((cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,cljs.analyzer.gets.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"requires","requires",-1201390927)))),ns)) || (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,cljs.analyzer.gets.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"uses","uses",232664692)))),ns)));
});
/**
 * Returns true if ns is a required namespace and a JavaScript module that
 * might be invokeable as a function.
 */
cljs.analyzer.invokeable_ns_QMARK_ = (function cljs$analyzer$invokeable_ns_QMARK_(ns,env){
var ns__$1 = cljs.analyzer.resolve_ns_alias.call(null,env,ns);
var and__4120__auto__ = cljs.analyzer.required_QMARK_.call(null,ns__$1,env);
if(and__4120__auto__){
var or__4131__auto__ = cljs.analyzer.js_module_exists_QMARK_.call(null,ns__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((cljs.analyzer.node_module_dep_QMARK_.call(null,ns__$1)) || (cljs.analyzer.dep_has_global_exports_QMARK_.call(null,ns__$1)));
}
} else {
return and__4120__auto__;
}
});
cljs.analyzer.resolve_invokeable_ns = (function cljs$analyzer$resolve_invokeable_ns(ns,current_ns,env){
var ns__$1 = cljs.analyzer.resolve_ns_alias.call(null,env,ns);
var module_type = cljs.analyzer.ns__GT_module_type.call(null,ns__$1);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__4640 = module_type;
var G__4640__$1 = (((G__4640 instanceof cljs.core.Keyword))?G__4640.fqn:null);
switch (G__4640__$1) {
=======
var G__13198 = module_type;
var G__13198__$1 = (((G__13198 instanceof cljs.core.Keyword))?G__13198.fqn:null);
switch (G__13198__$1) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
case "js":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,(function (){var or__4131__auto__ = cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),ns__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.analyzer.resolve_ns_alias.call(null,env,ns__$1);
}
})()),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"js-var","js-var",-1177899142),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"js","js",-886355190,null)], null);

break;
case "node":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_ns),cljs.analyzer.munge_node_lib.call(null,cljs.analyzer.resolve_ns_alias.call(null,env,ns__$1))),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"js-var","js-var",-1177899142),new cljs.core.Keyword(null,"ns","ns",441598760),current_ns], null);

break;
case "global":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_ns),cljs.analyzer.munge_global_export.call(null,cljs.analyzer.resolve_ns_alias.call(null,env,ns__$1))),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"js-var","js-var",-1177899142),new cljs.core.Keyword(null,"ns","ns",441598760),current_ns], null);

break;
default:
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4640__$1)].join('')));
=======
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13198__$1)].join('')));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js

}
});
cljs.analyzer.handle_symbol_local = (function cljs$analyzer$handle_symbol_local(sym,lb){
if((lb instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),sym], null);
} else {
return lb;
}
});
/**
 * Resolve a var. Accepts a side-effecting confirm fn for producing
 * warnings about unresolved vars.
 */
cljs.analyzer.resolve_var = (function cljs$analyzer$resolve_var(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__4643 = arguments.length;
switch (G__4643) {
=======
var G__13201 = arguments.length;
switch (G__13201) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
case 2:
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2 = (function (env,sym){
return cljs.analyzer.resolve_var.call(null,env,sym,null);
});

cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3 = (function (env,sym,confirm){
while(true){
var locals = new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(env);
if(("js" === cljs.core.namespace.call(null,sym))){
var symn = cljs.core.symbol.call(null,cljs.core.name.call(null,sym));
var shadowed_by_local = cljs.analyzer.handle_symbol_local.call(null,symn,cljs.core.get.call(null,locals,symn));
if((!((shadowed_by_local == null)))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),sym], null));

return cljs.core.assoc.call(null,shadowed_by_local,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"local","local",-1497766724));
} else {
var pre = cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.symbol,clojure.string.split.call(null,cljs.core.name.call(null,sym),/\./)));
if(((cljs.core.not.call(null,cljs.analyzer.has_extern_QMARK_.call(null,pre))) && (cljs.core.not.call(null,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym)))))){
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword(null,"externs","externs",221720677)], null),pre),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),sym,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"js-var","js-var",-1177899142),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"js","js",-886355190,null),new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.with_meta.call(null,(function (){var or__4131__auto__ = cljs.analyzer.js_tag.call(null,pre);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym));
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return new cljs.core.Symbol(null,"js","js",-886355190,null);
}
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),pre], null))], null),(function (){var temp__5720__auto__ = cljs.analyzer.js_tag.call(null,pre,new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990));
if(cljs.core.truth_(temp__5720__auto__)){
var ret_tag = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"js-fn-var","js-fn-var",-565665358),true,new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990),ret_tag], null);
} else {
return null;
}
})());

}
} else {
var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym);
var lb = cljs.analyzer.handle_symbol_local.call(null,sym,cljs.core.get.call(null,locals,sym));
var current_ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
if((!((lb == null)))){
return cljs.core.assoc.call(null,lb,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"local","local",-1497766724));
} else {
if((!((cljs.core.namespace.call(null,sym) == null)))){
var ns = cljs.core.namespace.call(null,sym);
var ns__$1 = ((("clojure.core" === ns))?"cljs.core":ns);
var full_ns = cljs.analyzer.resolve_ns_alias.call(null,env,ns__$1,(function (){var or__4131__auto__ = (function (){var and__4120__auto__ = cljs.analyzer.js_module_exists_QMARK_.call(null,ns__$1);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),ns__$1,new cljs.core.Keyword(null,"name","name",1843675177));
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.symbol.call(null,ns__$1);
}
})());
if((!((confirm == null)))){
if(cljs.core.not_EQ_.call(null,current_ns,full_ns)){
cljs.analyzer.confirm_ns.call(null,env,full_ns);
} else {
}

confirm.call(null,env,full_ns,cljs.core.symbol.call(null,cljs.core.name.call(null,sym)));
} else {
}

return cljs.analyzer.resolve_STAR_.call(null,env,sym,full_ns,current_ns);
} else {
if(cljs.analyzer.dotted_symbol_QMARK_.call(null,sym)){
var idx = s.indexOf(".");
var prefix = cljs.core.symbol.call(null,cljs.core.subs.call(null,s,(0),idx));
var suffix = cljs.core.subs.call(null,s,(idx + (1)));
var temp__5722__auto__ = cljs.analyzer.handle_symbol_local.call(null,prefix,cljs.core.get.call(null,locals,prefix));
if((temp__5722__auto__ == null)){
var temp__5722__auto____$1 = cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),current_ns,new cljs.core.Keyword(null,"imports","imports",-1249933394),prefix);
if((temp__5722__auto____$1 == null)){
var temp__5722__auto____$2 = cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),current_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),prefix);
if((temp__5722__auto____$2 == null)){
return cljs.core.merge.call(null,cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),prefix,new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.call(null,suffix)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),((cljs.core._EQ_.call(null,"",prefix))?cljs.core.symbol.call(null,suffix):cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),suffix)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"ns","ns",441598760),prefix], null));
} else {
var info = temp__5722__auto____$2;
return cljs.core.merge.call(null,info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"ns","ns",441598760),current_ns], null));
}
} else {
var full_ns = temp__5722__auto____$1;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"js-var","js-var",-1177899142),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_ns),suffix)], null);
}
} else {
var lb__$1 = temp__5722__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"local","local",-1497766724),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(lb__$1)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''))], null);
}
} else {
if((!((cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),current_ns,new cljs.core.Keyword(null,"uses","uses",232664692),sym) == null)))){
var full_ns = cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),current_ns,new cljs.core.Keyword(null,"uses","uses",232664692),sym);
return cljs.analyzer.resolve_STAR_.call(null,env,sym,full_ns,current_ns);
} else {
if((!((cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),current_ns,new cljs.core.Keyword(null,"renames","renames",343278368),sym) == null)))){
var qualified_symbol = cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),current_ns,new cljs.core.Keyword(null,"renames","renames",343278368),sym);
var full_ns = cljs.core.symbol.call(null,cljs.core.namespace.call(null,qualified_symbol));
var sym__$1 = cljs.core.symbol.call(null,cljs.core.name.call(null,qualified_symbol));
return cljs.analyzer.resolve_STAR_.call(null,env,sym__$1,full_ns,current_ns);
} else {
if((!((cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),current_ns,new cljs.core.Keyword(null,"imports","imports",-1249933394),sym) == null)))){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__4645 = env;
var G__4646 = cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),current_ns,new cljs.core.Keyword(null,"imports","imports",-1249933394),sym);
var G__4647 = confirm;
env = G__4645;
sym = G__4646;
confirm = G__4647;
=======
var G__13203 = env;
var G__13204 = cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),current_ns,new cljs.core.Keyword(null,"imports","imports",-1249933394),sym);
var G__13205 = confirm;
env = G__13203;
sym = G__13204;
confirm = G__13205;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
continue;
} else {
if((!((cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),current_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),sym) == null)))){
if((!((confirm == null)))){
confirm.call(null,env,current_ns,sym);
} else {
}

return cljs.core.merge.call(null,cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),current_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),sym),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"ns","ns",441598760),current_ns], null));
} else {
if(cljs.analyzer.core_name_QMARK_.call(null,env,sym)){
if((!((confirm == null)))){
confirm.call(null,env,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),sym);
} else {
}

return cljs.core.merge.call(null,cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Keyword(null,"defs","defs",1398449717),sym),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,"cljs.core",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null)], null));
} else {
if(cljs.core.truth_(cljs.analyzer.invokeable_ns_QMARK_.call(null,s,env))){
return cljs.analyzer.resolve_invokeable_ns.call(null,s,current_ns,env);
} else {
if((!((confirm == null)))){
confirm.call(null,env,current_ns,sym);
} else {
}

return cljs.core.merge.call(null,cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),current_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),sym),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"ns","ns",441598760),current_ns], null));

}
}
}
}
}
}
}
}
}
}
break;
}
});

cljs.analyzer.resolve_var.cljs$lang$maxFixedArity = 3;

/**
 * Given env, an analysis environment, and sym, a symbol, resolve an existing var.
 * Emits a warning if no such var exists.
 */
cljs.analyzer.resolve_existing_var = (function cljs$analyzer$resolve_existing_var(env,sym){
if(cljs.core.not.call(null,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym)))){
return cljs.analyzer.resolve_var.call(null,env,sym,cljs.analyzer.confirm_var_exists);
} else {
return cljs.analyzer.resolve_var.call(null,env,sym);
}
});
/**
 * Given env, an analysis environment env, and names, a list of symbols, confirm
 * that all correspond to declared dynamic vars.
 */
cljs.analyzer.confirm_bindings = (function cljs$analyzer$confirm_bindings(env,names){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var seq__4648 = cljs.core.seq.call(null,names);
var chunk__4649 = null;
var count__4650 = (0);
var i__4651 = (0);
while(true){
if((i__4651 < count__4650)){
var name = cljs.core._nth.call(null,chunk__4649,i__4651);
var env_4652__$1 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_));
var ev_4653 = cljs.analyzer.resolve_existing_var.call(null,env_4652__$1,name);
if(cljs.core.truth_((function (){var and__4120__auto__ = ev_4653;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(ev_4653));
=======
var seq__13206 = cljs.core.seq.call(null,names);
var chunk__13207 = null;
var count__13208 = (0);
var i__13209 = (0);
while(true){
if((i__13209 < count__13208)){
var name = cljs.core._nth.call(null,chunk__13207,i__13209);
var env_13210__$1 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_));
var ev_13211 = cljs.analyzer.resolve_existing_var.call(null,env_13210__$1,name);
if(cljs.core.truth_((function (){var and__4120__auto__ = ev_13211;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(ev_13211));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
} else {
return and__4120__auto__;
}
})())){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),env_4652__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ev","ev",-406827324),ev_4653,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ev_4653)], null));
=======
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),env_13210__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ev","ev",-406827324),ev_13211,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ev_13211)], null));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
} else {
}


<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__4654 = seq__4648;
var G__4655 = chunk__4649;
var G__4656 = count__4650;
var G__4657 = (i__4651 + (1));
seq__4648 = G__4654;
chunk__4649 = G__4655;
count__4650 = G__4656;
i__4651 = G__4657;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__4648);
if(temp__5720__auto__){
var seq__4648__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4648__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__4648__$1);
var G__4658 = cljs.core.chunk_rest.call(null,seq__4648__$1);
var G__4659 = c__4550__auto__;
var G__4660 = cljs.core.count.call(null,c__4550__auto__);
var G__4661 = (0);
seq__4648 = G__4658;
chunk__4649 = G__4659;
count__4650 = G__4660;
i__4651 = G__4661;
continue;
} else {
var name = cljs.core.first.call(null,seq__4648__$1);
var env_4662__$1 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_));
var ev_4663 = cljs.analyzer.resolve_existing_var.call(null,env_4662__$1,name);
if(cljs.core.truth_((function (){var and__4120__auto__ = ev_4663;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(ev_4663));
=======
var G__13212 = seq__13206;
var G__13213 = chunk__13207;
var G__13214 = count__13208;
var G__13215 = (i__13209 + (1));
seq__13206 = G__13212;
chunk__13207 = G__13213;
count__13208 = G__13214;
i__13209 = G__13215;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__13206);
if(temp__5720__auto__){
var seq__13206__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13206__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__13206__$1);
var G__13216 = cljs.core.chunk_rest.call(null,seq__13206__$1);
var G__13217 = c__4550__auto__;
var G__13218 = cljs.core.count.call(null,c__4550__auto__);
var G__13219 = (0);
seq__13206 = G__13216;
chunk__13207 = G__13217;
count__13208 = G__13218;
i__13209 = G__13219;
continue;
} else {
var name = cljs.core.first.call(null,seq__13206__$1);
var env_13220__$1 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_));
var ev_13221 = cljs.analyzer.resolve_existing_var.call(null,env_13220__$1,name);
if(cljs.core.truth_((function (){var and__4120__auto__ = ev_13221;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(ev_13221));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
} else {
return and__4120__auto__;
}
})())){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),env_4662__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ev","ev",-406827324),ev_4663,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ev_4663)], null));
=======
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),env_13220__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ev","ev",-406827324),ev_13221,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ev_13221)], null));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
} else {
}


<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__4664 = cljs.core.next.call(null,seq__4648__$1);
var G__4665 = null;
var G__4666 = (0);
var G__4667 = (0);
seq__4648 = G__4664;
chunk__4649 = G__4665;
count__4650 = G__4666;
i__4651 = G__4667;
=======
var G__13222 = cljs.core.next.call(null,seq__13206__$1);
var G__13223 = null;
var G__13224 = (0);
var G__13225 = (0);
seq__13206 = G__13222;
chunk__13207 = G__13223;
count__13208 = G__13224;
i__13209 = G__13225;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given env, an analysis environment, and sym, a symbol, resolve a macro.
 */
cljs.analyzer.resolve_macro_var = (function cljs$analyzer$resolve_macro_var(env,sym){
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
var namespaces = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927));
if((!((cljs.core.namespace.call(null,sym) == null)))){
var ns__$1 = cljs.core.namespace.call(null,sym);
var ns__$2 = ((cljs.core._EQ_.call(null,"clojure.core",ns__$1))?"cljs.core":ns__$1);
var full_ns = cljs.analyzer.resolve_macro_ns_alias.call(null,env,ns__$2);
var full_ns__$1 = (((!(clojure.string.ends_with_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_ns),"$macros"))))?cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_ns),"$macros"].join('')):full_ns);
return cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [full_ns__$1,new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.call(null,cljs.core.name.call(null,sym))], null));
} else {
if((!((cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),sym], null)) == null)))){
var full_ns = cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),sym], null));
return cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [full_ns,new cljs.core.Keyword(null,"macros","macros",811339431),sym], null));
} else {
if((!((cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512),sym], null)) == null)))){
var qualified_symbol = cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512),sym], null));
var full_ns = cljs.core.symbol.call(null,cljs.core.namespace.call(null,qualified_symbol));
var sym__$1 = cljs.core.symbol.call(null,cljs.core.name.call(null,qualified_symbol));
return cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [full_ns,new cljs.core.Keyword(null,"macros","macros",811339431),sym__$1], null));
} else {
var ns__$1 = (((!((cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,new cljs.core.Keyword(null,"macros","macros",811339431),sym], null)) == null))))?ns:((cljs.analyzer.core_name_QMARK_.call(null,env,sym))?cljs.analyzer.CLJS_CORE_MACROS_SYM:null));
if((!((ns__$1 == null)))){
return cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns__$1,new cljs.core.Keyword(null,"defs","defs",1398449717),sym], null));
} else {
return null;
}

}
}
}
});


cljs.analyzer.specials = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 22, [new cljs.core.Symbol(null,"&","&",-2144855648,null),"null",new cljs.core.Symbol(null,"case*","case*",-1938255072,null),"null",new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null),"null",new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"ns*","ns*",1840949383,null),"null",new cljs.core.Symbol(null,"loop*","loop*",615029416,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null),"null",new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"new","new",-444906321,null),"null",new cljs.core.Symbol(null,"ns","ns",2082130287,null),"null",new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null),"null",new cljs.core.Symbol(null,"let*","let*",1920721458,null),"null",new cljs.core.Symbol(null,"js*","js*",-1134233646,null),"null",new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),"null",new cljs.core.Symbol(null,"recur","recur",1202958259,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"var","var",870848730,null),"null",new cljs.core.Symbol(null,"quote","quote",1377916282,null),"null",new cljs.core.Symbol(null,"throw","throw",595905694,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
cljs.analyzer._STAR_recur_frames_STAR_ = null;
cljs.analyzer._STAR_loop_lets_STAR_ = cljs.core.List.EMPTY;
cljs.analyzer._STAR_allow_redef_STAR_ = false;
cljs.analyzer._STAR_allow_ns_STAR_ = true;
cljs.analyzer.analyze_keyword = (function cljs$analyzer$analyze_keyword(env,sym){
cljs.analyzer.register_constant_BANG_.call(null,env,sym);

return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"val","val",128701612),sym,new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),sym,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null)], null);
});
cljs.analyzer.get_tag = (function cljs$analyzer$get_tag(e){
var temp__5722__auto__ = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(e)));
if((temp__5722__auto__ == null)){
var temp__5722__auto____$1 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(e);
if((temp__5722__auto____$1 == null)){
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(e));
} else {
var tag = temp__5722__auto____$1;
return tag;
}
} else {
var tag = temp__5722__auto__;
return tag;
}
});
cljs.analyzer.find_matching_method = (function cljs$analyzer$find_matching_method(f,params){
var methods$ = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(f);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f));
}
})();
var c = cljs.core.count.call(null,params);
return cljs.core.some.call(null,((function (methods$,c){
return (function (m){
var and__4120__auto__ = (function (){var or__4131__auto__ = (new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(m) === c);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m);
}
})();
if(cljs.core.truth_(and__4120__auto__)){
return m;
} else {
return and__4120__auto__;
}
});})(methods$,c))
,methods$);
});
cljs.analyzer.type_QMARK_ = (function cljs$analyzer$type_QMARK_(env,t){
if((((!((t == null)))) && ((t instanceof cljs.core.Symbol)))){
var var$ = cljs.analyzer.resolve_var.call(null,env,t);
var temp__5722__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(var$);
if((temp__5722__auto__ == null)){
var temp__5722__auto____$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$));
if((temp__5722__auto____$1 == null)){
var temp__5722__auto____$2 = new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$);
if((temp__5722__auto____$2 == null)){
return cljs.core.get.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null),"null",new cljs.core.Symbol("cljs.core","List","cljs.core/List",1708954352,null),"null"], null), null),t);
} else {
var proto = temp__5722__auto____$2;
return proto;
}
} else {
var type = temp__5722__auto____$1;
return type;
}
} else {
var type = temp__5722__auto__;
return type;
}
} else {
return null;
}
});
cljs.analyzer.NOT_NATIVE = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"not-native","not-native",-236392494,null),"null"], null), null);
cljs.analyzer.BOOLEAN_OR_SEQ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null"], null), null);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
cljs.analyzer.unwrap_quote = (function cljs$analyzer$unwrap_quote(p__4668){
var map__4669 = p__4668;
var map__4669__$1 = (((((!((map__4669 == null))))?(((((map__4669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4669):map__4669);
var expr = map__4669__$1;
var op = cljs.core.get.call(null,map__4669__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
=======
cljs.analyzer.unwrap_quote = (function cljs$analyzer$unwrap_quote(p__13226){
var map__13227 = p__13226;
var map__13227__$1 = (((((!((map__13227 == null))))?(((((map__13227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13227):map__13227);
var expr = map__13227__$1;
var op = cljs.core.get.call(null,map__13227__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
if(cljs.core.keyword_identical_QMARK_.call(null,op,new cljs.core.Keyword(null,"quote","quote",-262615245))){
return new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(expr);
} else {
return expr;
}
});
cljs.analyzer.infer_if = (function cljs$analyzer$infer_if(env,e){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var map__4671 = cljs.analyzer.unwrap_quote.call(null,new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(e));
var map__4671__$1 = (((((!((map__4671 == null))))?(((((map__4671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4671):map__4671);
var op = cljs.core.get.call(null,map__4671__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__4671__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
=======
var map__13229 = cljs.analyzer.unwrap_quote.call(null,new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(e));
var map__13229__$1 = (((((!((map__13229 == null))))?(((((map__13229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13229):map__13229);
var op = cljs.core.get.call(null,map__13229__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__13229__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
var then_tag = cljs.analyzer.infer_tag.call(null,env,new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(e));
if(((cljs.core.keyword_identical_QMARK_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842))) && ((!((form == null)))) && ((!(form === false))))){
return then_tag;
} else {
var else_tag = cljs.analyzer.infer_tag.call(null,env,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(e));
if(((cljs.core.symbol_identical_QMARK_.call(null,then_tag,else_tag)) || (cljs.core.symbol_identical_QMARK_.call(null,else_tag,cljs.analyzer.IGNORE_SYM)))){
return then_tag;
} else {
if(cljs.core.symbol_identical_QMARK_.call(null,then_tag,cljs.analyzer.IGNORE_SYM)){
return else_tag;
} else {
if((((((!((cljs.core.get.call(null,cljs.analyzer.NOT_NATIVE,then_tag) == null)))) || (cljs.analyzer.type_QMARK_.call(null,env,then_tag)))) && ((((!((cljs.core.get.call(null,cljs.analyzer.NOT_NATIVE,else_tag) == null)))) || (cljs.analyzer.type_QMARK_.call(null,env,else_tag)))))){
return new cljs.core.Symbol(null,"clj","clj",980036099,null);
} else {
if((((!((cljs.core.get.call(null,cljs.analyzer.BOOLEAN_OR_SEQ,then_tag) == null)))) && ((!((cljs.core.get.call(null,cljs.analyzer.BOOLEAN_OR_SEQ,else_tag) == null)))))){
return new cljs.core.Symbol(null,"seq","seq",-177272256,null);
} else {
var then_tag__$1 = ((cljs.analyzer.cljs_set_QMARK_.call(null,then_tag))?then_tag:cljs.core.PersistentHashSet.createAsIfByAssoc([then_tag]));
var else_tag__$1 = ((cljs.analyzer.cljs_set_QMARK_.call(null,else_tag))?else_tag:cljs.core.PersistentHashSet.createAsIfByAssoc([else_tag]));
return cljs.core.into.call(null,then_tag__$1,else_tag__$1);
}

}
}
}
}
});
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
cljs.analyzer.infer_invoke = (function cljs$analyzer$infer_invoke(env,p__4673){
var map__4674 = p__4673;
var map__4674__$1 = (((((!((map__4674 == null))))?(((((map__4674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4674):map__4674);
var e = map__4674__$1;
var f = cljs.core.get.call(null,map__4674__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__4674__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var me = cljs.core.assoc.call(null,cljs.analyzer.find_matching_method.call(null,f,args),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"fn-method","fn-method",236100839));
var temp__5722__auto__ = cljs.analyzer.infer_tag.call(null,env,me);
if((temp__5722__auto__ == null)){
var map__4676 = f;
var map__4676__$1 = (((((!((map__4676 == null))))?(((((map__4676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4676):map__4676);
var info = cljs.core.get.call(null,map__4676__$1,new cljs.core.Keyword(null,"info","info",-317069002));
=======
cljs.analyzer.infer_invoke = (function cljs$analyzer$infer_invoke(env,p__13231){
var map__13232 = p__13231;
var map__13232__$1 = (((((!((map__13232 == null))))?(((((map__13232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13232):map__13232);
var e = map__13232__$1;
var f = cljs.core.get.call(null,map__13232__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__13232__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var me = cljs.core.assoc.call(null,cljs.analyzer.find_matching_method.call(null,f,args),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"fn-method","fn-method",236100839));
var temp__5722__auto__ = cljs.analyzer.infer_tag.call(null,env,me);
if((temp__5722__auto__ == null)){
var map__13234 = f;
var map__13234__$1 = (((((!((map__13234 == null))))?(((((map__13234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13234):map__13234);
var info = cljs.core.get.call(null,map__13234__$1,new cljs.core.Keyword(null,"info","info",-317069002));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
var temp__5722__auto____$1 = ((((new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info) === true) || (new cljs.core.Keyword(null,"js-fn-var","js-fn-var",-565665358).cljs$core$IFn$_invoke$arity$1(info) === true)))?new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990).cljs$core$IFn$_invoke$arity$1(info):((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"js","js",-886355190,null),new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info)))?new cljs.core.Symbol(null,"js","js",-886355190,null):null));
if((temp__5722__auto____$1 == null)){
return cljs.analyzer.ANY_SYM;
} else {
var ret_tag = temp__5722__auto____$1;
return ret_tag;
}
} else {
var ret_tag = temp__5722__auto__;
return ret_tag;
}
});
/**
 * Given env, an analysis environment, and e, an AST node, return the inferred
 * type of the node
 */
cljs.analyzer.infer_tag = (function cljs$analyzer$infer_tag(env,e){
var temp__5722__auto__ = cljs.analyzer.get_tag.call(null,e);
if((temp__5722__auto__ == null)){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__4678 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(e);
var G__4678__$1 = (((G__4678 instanceof cljs.core.Keyword))?G__4678.fqn:null);
switch (G__4678__$1) {
=======
var G__13236 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(e);
var G__13236__$1 = (((G__13236 instanceof cljs.core.Keyword))?G__13236.fqn:null);
switch (G__13236__$1) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
case "recur":
return cljs.analyzer.IGNORE_SYM;

break;
case "throw":
return cljs.analyzer.IGNORE_SYM;

break;
case "let":
return cljs.analyzer.infer_tag.call(null,env,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(e));

break;
case "loop":
return cljs.analyzer.infer_tag.call(null,env,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(e));

break;
case "do":
return cljs.analyzer.infer_tag.call(null,env,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(e));

break;
case "fn-method":
return cljs.analyzer.infer_tag.call(null,env,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(e));

break;
case "def":
return cljs.analyzer.infer_tag.call(null,env,new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(e));

break;
case "invoke":
return cljs.analyzer.infer_invoke.call(null,env,e);

break;
case "if":
return cljs.analyzer.infer_if.call(null,env,e);

break;
case "const":
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__4679 = new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core._EQ_.call(null,true,G__4679)){
return cljs.analyzer.BOOLEAN_SYM;
} else {
if(cljs.core._EQ_.call(null,false,G__4679)){
=======
var G__13237 = new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core._EQ_.call(null,true,G__13237)){
return cljs.analyzer.BOOLEAN_SYM;
} else {
if(cljs.core._EQ_.call(null,false,G__13237)){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
return cljs.analyzer.BOOLEAN_SYM;
} else {
return cljs.analyzer.ANY_SYM;

}
}

break;
case "quote":
return cljs.analyzer.infer_tag.call(null,env,new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(e));

break;
case "var":
case "local":
case "js-var":
case "binding":
var temp__5722__auto____$1 = new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(e);
if((temp__5722__auto____$1 == null)){
return cljs.analyzer.infer_tag.call(null,env,new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(e));
} else {
var init = temp__5722__auto____$1;
return cljs.analyzer.infer_tag.call(null,env,init);
}

break;
case "host-field":
case "host-call":
return cljs.analyzer.ANY_SYM;

break;
case "js":
return cljs.analyzer.ANY_SYM;

break;
default:
return null;

}
} else {
var tag = temp__5722__auto__;
return tag;
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.analyzer !== 'undefined') && (typeof cljs.analyzer.parse !== 'undefined')){
} else {
cljs.analyzer.parse = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.analyzer","parse"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function() { 
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__4681__delegate = function (op,rest){
return op;
};
var G__4681 = function (op,var_args){
var rest = null;
if (arguments.length > 1) {
var G__4682__i = 0, G__4682__a = new Array(arguments.length -  1);
while (G__4682__i < G__4682__a.length) {G__4682__a[G__4682__i] = arguments[G__4682__i + 1]; ++G__4682__i;}
  rest = new cljs.core.IndexedSeq(G__4682__a,0,null);
} 
return G__4681__delegate.call(this,op,rest);};
G__4681.cljs$lang$maxFixedArity = 1;
G__4681.cljs$lang$applyTo = (function (arglist__4683){
var op = cljs.core.first(arglist__4683);
var rest = cljs.core.rest(arglist__4683);
return G__4681__delegate(op,rest);
});
G__4681.cljs$core$IFn$_invoke$arity$variadic = G__4681__delegate;
return G__4681;
=======
var G__13239__delegate = function (op,rest){
return op;
};
var G__13239 = function (op,var_args){
var rest = null;
if (arguments.length > 1) {
var G__13240__i = 0, G__13240__a = new Array(arguments.length -  1);
while (G__13240__i < G__13240__a.length) {G__13240__a[G__13240__i] = arguments[G__13240__i + 1]; ++G__13240__i;}
  rest = new cljs.core.IndexedSeq(G__13240__a,0,null);
} 
return G__13239__delegate.call(this,op,rest);};
G__13239.cljs$lang$maxFixedArity = 1;
G__13239.cljs$lang$applyTo = (function (arglist__13241){
var op = cljs.core.first(arglist__13241);
var rest = cljs.core.rest(arglist__13241);
return G__13239__delegate(op,rest);
});
G__13239.cljs$core$IFn$_invoke$arity$variadic = G__13239__delegate;
return G__13239;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
})()
;})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.analyzer.var_meta = (function cljs$analyzer$var_meta(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__4687 = arguments.length;
switch (G__4687) {
=======
var G__13245 = arguments.length;
switch (G__13245) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
case 1:
return cljs.analyzer.var_meta.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.var_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.var_meta.cljs$core$IFn$_invoke$arity$1 = (function (var$){
return cljs.analyzer.var_meta.call(null,var$,null);
});

cljs.analyzer.var_meta.cljs$core$IFn$_invoke$arity$2 = (function (var$,expr_env){
var sym = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$);
var ks = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null);
var m = cljs.core.merge.call(null,(function (){var user_meta = new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(var$);
var uks = cljs.core.keys.call(null,user_meta);
return cljs.core.zipmap.call(null,uks,cljs.core.map.call(null,((function (user_meta,uks,sym,ks){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
return (function (p1__4684_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,cljs.core.get.call(null,user_meta,p1__4684_SHARP_),null,(1),null)),(2),null));
});})(user_meta,uks,sym,ks))
,uks));
})(),cljs.core.assoc.call(null,cljs.core.zipmap.call(null,ks,cljs.core.map.call(null,((function (sym,ks){
return (function (p1__4685_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,cljs.core.get.call(null,var$,p1__4685_SHARP_),null,(1),null)),(2),null));
=======
return (function (p1__13242_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,cljs.core.get.call(null,user_meta,p1__13242_SHARP_),null,(1),null)),(2),null));
});})(user_meta,uks,sym,ks))
,uks));
})(),cljs.core.assoc.call(null,cljs.core.zipmap.call(null,ks,cljs.core.map.call(null,((function (sym,ks){
return (function (p1__13243_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,cljs.core.get.call(null,var$,p1__13243_SHARP_),null,(1),null)),(2),null));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
});})(sym,ks))
,ks)),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$))),null,(1),null))))),new cljs.core.Keyword(null,"test","test",577538877),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-cljs$lang$test",".-cljs$lang$test",718963148,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null))))),null,(1),null))))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (){var arglists = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(var$);
var arglists_SINGLEQUOTE_ = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists)))?cljs.core.second.call(null,arglists):arglists);
return (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.with_meta,arglists_SINGLEQUOTE_,new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838).cljs$core$IFn$_invoke$arity$1(var$))),null,(1),null)),(2),null));
})()));
if(cljs.core.truth_(expr_env)){
return cljs.analyzer.analyze.call(null,expr_env,m);
} else {
return m;
}
});

cljs.analyzer.var_meta.cljs$lang$maxFixedArity = 2;

cljs.analyzer.var_ast = (function cljs$analyzer$var_ast(env,sym){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var _STAR_private_var_access_nowarn_STAR__orig_val__4689 = cljs.analyzer._STAR_private_var_access_nowarn_STAR_;
var _STAR_private_var_access_nowarn_STAR__temp_val__4690 = true;
cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__temp_val__4690;
=======
var _STAR_private_var_access_nowarn_STAR__orig_val__13247 = cljs.analyzer._STAR_private_var_access_nowarn_STAR_;
var _STAR_private_var_access_nowarn_STAR__temp_val__13248 = true;
cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__temp_val__13248;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js

try{var env__$1 = cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783));
var var$ = cljs.analyzer.resolve_var.call(null,env__$1,sym,cljs.analyzer.confirm_var_exists_throw.call(null));
var expr_env = cljs.core.assoc.call(null,env__$1,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var temp__5724__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$);
if((temp__5724__auto__ == null)){
return null;
} else {
var var_ns = temp__5724__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),cljs.analyzer.analyze.call(null,expr_env,sym),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.analyzer.analyze.call(null,expr_env,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,cljs.core.name.call(null,var_ns),cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$))),null,(1),null)))))),new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.analyzer.var_meta.call(null,var$,expr_env)], null);
}
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
}finally {cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__orig_val__4689;
}});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"var","var",870848730,null),(function (op,env,p__4691,_,___$1){
var vec__4692 = p__4691;
var ___$2 = cljs.core.nth.call(null,vec__4692,(0),null);
var sym = cljs.core.nth.call(null,vec__4692,(1),null);
var form = vec__4692;
=======
}finally {cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__orig_val__13247;
}});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"var","var",870848730,null),(function (op,env,p__13249,_,___$1){
var vec__13250 = p__13249;
var ___$2 = cljs.core.nth.call(null,vec__13250,(0),null);
var sym = cljs.core.nth.call(null,vec__13250,(1),null);
var form = vec__13250;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
if(cljs.core.not_EQ_.call(null,(2),cljs.core.count.call(null,form))){
throw cljs.analyzer.error.call(null,env,"Wrong number of args to var");
} else {
}

if((sym instanceof cljs.core.Symbol)){
} else {
throw cljs.analyzer.error.call(null,env,"Argument to var must be symbol");
}

return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"the-var","the-var",1428415613),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"meta","meta",1499536964)], null),new cljs.core.Keyword(null,"form","form",-1624062471),form], null),cljs.analyzer.var_ast.call(null,env,sym));
}));
cljs.analyzer.predicate__GT_tag = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol("cljs.core","array?","cljs.core/array?",-1655912448,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),new cljs.core.Symbol("cljs.core","char?","cljs.core/char?",416405281,null),new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","var?","cljs.core/var?",1711182854,null),new cljs.core.Symbol("cljs.core","map-entry?","cljs.core/map-entry?",465406728,null),new cljs.core.Symbol("cljs.core","double?","cljs.core/double?",1757455529,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol("cljs.core","inst?","cljs.core/inst?",1216133710,null),new cljs.core.Symbol("cljs.core","float?","cljs.core/float?",-941017745,null),new cljs.core.Symbol("cljs.core","true?","cljs.core/true?",-77973136,null),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Symbol("cljs.core","volatile?","cljs.core/volatile?",-1122186415,null),new cljs.core.Symbol("cljs.core","integer?","cljs.core/integer?",1710697810,null),new cljs.core.Symbol("cljs.core","infinite?","cljs.core/infinite?",-1069503726,null),new cljs.core.Symbol("cljs.core","undefined?","cljs.core/undefined?",-1206515693,null),new cljs.core.Symbol("cljs.core","uuid?","cljs.core/uuid?",-15131116,null),new cljs.core.Symbol("cljs.core","record?","cljs.core/record?",1307655860,null),new cljs.core.Symbol("cljs.core","reduced?","cljs.core/reduced?",-1192491371,null),new cljs.core.Symbol("cljs.core","tagged-literal?","cljs.core/tagged-literal?",-1159666987,null),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Symbol("cljs.core","zero?","cljs.core/zero?",-341242858,null),new cljs.core.Symbol("cljs.core","false?","cljs.core/false?",-1660815306,null),new cljs.core.Symbol("cljs.core","list?","cljs.core/list?",-684796618,null),new cljs.core.Symbol("cljs.core","seqable?","cljs.core/seqable?",-745394886,null),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Symbol("cljs.core","delay?","cljs.core/delay?",2099859324,null),new cljs.core.Symbol("cljs.core","regexp?","cljs.core/regexp?",-348418979,null),new cljs.core.Symbol("cljs.core","ident?","cljs.core/ident?",1567441535,null),new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)],[new cljs.core.Symbol(null,"array","array",-440182315,null),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Symbol(null,"string","string",-349010059,null),new cljs.core.Symbol("cljs.core","ISequential","cljs.core/ISequential",-950981796,null),new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),new cljs.core.Symbol("cljs.core","Var","cljs.core/Var",2071014443,null),new cljs.core.Symbol("cljs.core","IMapEntry","cljs.core/IMapEntry",535941300,null),new cljs.core.Symbol(null,"number","number",-1084057331,null),new cljs.core.Symbol(null,"string","string",-349010059,null),new cljs.core.Symbol("cljs.core","Inst","cljs.core/Inst",959205835,null),new cljs.core.Symbol(null,"number","number",-1084057331,null),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Symbol(null,"number","number",-1084057331,null),new cljs.core.Symbol("cljs.core","Volatile","cljs.core/Volatile",-1098692185,null),new cljs.core.Symbol(null,"number","number",-1084057331,null),new cljs.core.Symbol(null,"number","number",-1084057331,null),new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),new cljs.core.Symbol("cljs.core","IUUID","cljs.core/IUUID",-1606521379,null),new cljs.core.Symbol("cljs.core","IRecord","cljs.core/IRecord",635852000,null),new cljs.core.Symbol("cljs.core","Reduced","cljs.core/Reduced",971663396,null),new cljs.core.Symbol("cljs.core","ITaggedLiteral","cljs.core/ITaggedLiteral",-1236965094,null),new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),new cljs.core.Symbol(null,"number","number",-1084057331,null),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Symbol("cljs.core","IList","cljs.core/IList",1015168964,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("cljs.core","ISeqable","cljs.core/ISeqable",137437203,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null),new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null),new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol("cljs.core","Delay","cljs.core/Delay",-21574999,null),new cljs.core.Symbol("js","RegExp","js/RegExp",1778210562,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),"null",new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null),"null"], null), null),new cljs.core.Symbol("cljs.core","IChunkedSeq","cljs.core/IChunkedSeq",-892943716,null)]);
/**
 * Look for a predicate-induced tag when the test expression is a simple
 * application of a predicate to a local, as in (string? x).
 */
cljs.analyzer.simple_predicate_induced_tag = (function cljs$analyzer$simple_predicate_induced_tag(env,test){
if(((cljs.core.list_QMARK_.call(null,test)) && (((2) === cljs.core.count.call(null,test))) && (cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,test)))){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var analyzed_fn = (function (){var _STAR_cljs_warnings_STAR__orig_val__4695 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__4696 = cljs.core.zipmap.call(null,cljs.core.keys.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.call(null,false));
cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__4696;

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),cljs.core.first.call(null,test));
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__4695;
=======
var analyzed_fn = (function (){var _STAR_cljs_warnings_STAR__orig_val__13253 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__13254 = cljs.core.zipmap.call(null,cljs.core.keys.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.call(null,false));
cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__13254;

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),cljs.core.first.call(null,test));
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__13253;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
}})();
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(analyzed_fn))){
var temp__5720__auto__ = cljs.analyzer.predicate__GT_tag.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(analyzed_fn));
if(cljs.core.truth_(temp__5720__auto__)){
var tag = temp__5720__auto__;
var sym = cljs.core.last.call(null,test);
if(cljs.core.truth_((function (){var and__4120__auto__ = (cljs.core.namespace.call(null,sym) == null);
if(and__4120__auto__){
return cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",535295783),sym], null));
} else {
return and__4120__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,tag], null);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Look for a type-check-induced tag when the test expression is the use of
 * instance? on a local, as in (instance? ICounted x).
 */
cljs.analyzer.type_check_induced_tag = (function cljs$analyzer$type_check_induced_tag(env,test){
if(((cljs.core.list_QMARK_.call(null,test)) && (((3) === cljs.core.count.call(null,test))) && (cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,test)))){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var analyzed_fn = (function (){var _STAR_cljs_warnings_STAR__orig_val__4697 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__4698 = cljs.core.zipmap.call(null,cljs.core.keys.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.call(null,false));
cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__4698;

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),cljs.core.first.call(null,test));
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__4697;
}})();
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(analyzed_fn))){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),"null"], null), null).call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(analyzed_fn)))){
var analyzed_type = (function (){var _STAR_cljs_warnings_STAR__orig_val__4699 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__4700 = cljs.core.zipmap.call(null,cljs.core.keys.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.call(null,false));
cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__4700;

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),cljs.core.second.call(null,test));
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__4699;
=======
var analyzed_fn = (function (){var _STAR_cljs_warnings_STAR__orig_val__13255 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__13256 = cljs.core.zipmap.call(null,cljs.core.keys.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.call(null,false));
cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__13256;

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),cljs.core.first.call(null,test));
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__13255;
}})();
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(analyzed_fn))){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),"null"], null), null).call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(analyzed_fn)))){
var analyzed_type = (function (){var _STAR_cljs_warnings_STAR__orig_val__13257 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__13258 = cljs.core.zipmap.call(null,cljs.core.keys.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.call(null,false));
cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__13258;

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),cljs.core.second.call(null,test));
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__13257;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
}})();
var tag = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(analyzed_type);
var sym = cljs.core.last.call(null,test);
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(analyzed_type));
if(and__4120__auto__){
var and__4120__auto____$1 = (cljs.core.namespace.call(null,sym) == null);
if(and__4120__auto____$1){
return cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",535295783),sym], null));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,tag], null);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Refine a tag to exclude clj-nil if the test is a simple symbol.
 */
cljs.analyzer.truth_induced_tag = (function cljs$analyzer$truth_induced_tag(env,test){
if((((test instanceof cljs.core.Symbol)) && ((cljs.core.namespace.call(null,test) == null)))){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var analyzed_symbol = (function (){var _STAR_cljs_warnings_STAR__orig_val__4701 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__4702 = cljs.core.zipmap.call(null,cljs.core.keys.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.call(null,false));
cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__4702;

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),test);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__4701;
=======
var analyzed_symbol = (function (){var _STAR_cljs_warnings_STAR__orig_val__13259 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__13260 = cljs.core.zipmap.call(null,cljs.core.keys.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.call(null,false));
cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__13260;

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),test);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__13259;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
}})();
var temp__5720__auto__ = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(analyzed_symbol);
if(cljs.core.truth_(temp__5720__auto__)){
var tag = temp__5720__auto__;
if(((cljs.core.set_QMARK_.call(null,tag)) && (cljs.core.contains_QMARK_.call(null,tag,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [test,cljs.analyzer.canonicalize_type.call(null,cljs.core.disj.call(null,tag,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null)))], null);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Looks at the test and sets any tags which are induced by virtue
 *   of the test being truthy. For example in (if (string? x) x :bar)
 *   the local x in the then branch must be of string type.
 */
cljs.analyzer.set_test_induced_tags = (function cljs$analyzer$set_test_induced_tags(env,test){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var vec__4703 = (function (){var or__4131__auto__ = cljs.analyzer.simple_predicate_induced_tag.call(null,env,test);
=======
var vec__13261 = (function (){var or__4131__auto__ = cljs.analyzer.simple_predicate_induced_tag.call(null,env,test);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = cljs.analyzer.type_check_induced_tag.call(null,env,test);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return cljs.analyzer.truth_induced_tag.call(null,env,test);
}
}
})();
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var local = cljs.core.nth.call(null,vec__4703,(0),null);
var tag = cljs.core.nth.call(null,vec__4703,(1),null);
var G__4706 = env;
if(cljs.core.truth_(local)){
return cljs.core.assoc_in.call(null,G__4706,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",535295783),local,new cljs.core.Keyword(null,"tag","tag",-1290361223)], null),tag);
} else {
return G__4706;
}
});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"if","if",1181717262,null),(function (op,env,p__4707,name,_){
var vec__4708 = p__4707;
var ___$1 = cljs.core.nth.call(null,vec__4708,(0),null);
var test = cljs.core.nth.call(null,vec__4708,(1),null);
var then = cljs.core.nth.call(null,vec__4708,(2),null);
var else$ = cljs.core.nth.call(null,vec__4708,(3),null);
var form = vec__4708;
=======
var local = cljs.core.nth.call(null,vec__13261,(0),null);
var tag = cljs.core.nth.call(null,vec__13261,(1),null);
var G__13264 = env;
if(cljs.core.truth_(local)){
return cljs.core.assoc_in.call(null,G__13264,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",535295783),local,new cljs.core.Keyword(null,"tag","tag",-1290361223)], null),tag);
} else {
return G__13264;
}
});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"if","if",1181717262,null),(function (op,env,p__13265,name,_){
var vec__13266 = p__13265;
var ___$1 = cljs.core.nth.call(null,vec__13266,(0),null);
var test = cljs.core.nth.call(null,vec__13266,(1),null);
var then = cljs.core.nth.call(null,vec__13266,(2),null);
var else$ = cljs.core.nth.call(null,vec__13266,(3),null);
var form = vec__13266;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
if((cljs.core.count.call(null,form) < (3))){
throw cljs.analyzer.compile_syntax_error.call(null,env,"Too few arguments to if",new cljs.core.Symbol(null,"if","if",1181717262,null));
} else {
}

if((cljs.core.count.call(null,form) > (4))){
throw cljs.analyzer.compile_syntax_error.call(null,env,"Too many arguments to if",new cljs.core.Symbol(null,"if","if",1181717262,null));
} else {
}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var test_expr = (function (){var _STAR_recur_frames_STAR__orig_val__4711 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__4712 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__4712;

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),test);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__4711;
}})();
var then_expr = (function (){var _STAR_allow_redef_STAR__orig_val__4713 = cljs.analyzer._STAR_allow_redef_STAR_;
var _STAR_allow_redef_STAR__temp_val__4714 = true;
cljs.analyzer._STAR_allow_redef_STAR_ = _STAR_allow_redef_STAR__temp_val__4714;

try{return cljs.analyzer.analyze.call(null,cljs.analyzer.set_test_induced_tags.call(null,env,test),then);
}finally {cljs.analyzer._STAR_allow_redef_STAR_ = _STAR_allow_redef_STAR__orig_val__4713;
}})();
var else_expr = (function (){var _STAR_allow_redef_STAR__orig_val__4715 = cljs.analyzer._STAR_allow_redef_STAR_;
var _STAR_allow_redef_STAR__temp_val__4716 = true;
cljs.analyzer._STAR_allow_redef_STAR_ = _STAR_allow_redef_STAR__temp_val__4716;

try{return cljs.analyzer.analyze.call(null,env,else$);
}finally {cljs.analyzer._STAR_allow_redef_STAR_ = _STAR_allow_redef_STAR__orig_val__4715;
}})();
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"if","if",-458814265),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"test","test",577538877),test_expr,new cljs.core.Keyword(null,"then","then",460598070),then_expr,new cljs.core.Keyword(null,"else","else",-1508377146),else_expr,new cljs.core.Keyword(null,"unchecked","unchecked",924418378),cljs.core._STAR_unchecked_if_STAR_,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test","test",577538877),new cljs.core.Keyword(null,"then","then",460598070),new cljs.core.Keyword(null,"else","else",-1508377146)], null)], null);
}));
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"case*","case*",-1938255072,null),(function (op,env,p__4719,name,_){
var vec__4720 = p__4719;
var ___$1 = cljs.core.nth.call(null,vec__4720,(0),null);
var sym = cljs.core.nth.call(null,vec__4720,(1),null);
var tests = cljs.core.nth.call(null,vec__4720,(2),null);
var thens = cljs.core.nth.call(null,vec__4720,(3),null);
var default$ = cljs.core.nth.call(null,vec__4720,(4),null);
var form = vec__4720;
=======
var test_expr = (function (){var _STAR_recur_frames_STAR__orig_val__13269 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__13270 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__13270;

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),test);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__13269;
}})();
var then_expr = (function (){var _STAR_allow_redef_STAR__orig_val__13271 = cljs.analyzer._STAR_allow_redef_STAR_;
var _STAR_allow_redef_STAR__temp_val__13272 = true;
cljs.analyzer._STAR_allow_redef_STAR_ = _STAR_allow_redef_STAR__temp_val__13272;

try{return cljs.analyzer.analyze.call(null,cljs.analyzer.set_test_induced_tags.call(null,env,test),then);
}finally {cljs.analyzer._STAR_allow_redef_STAR_ = _STAR_allow_redef_STAR__orig_val__13271;
}})();
var else_expr = (function (){var _STAR_allow_redef_STAR__orig_val__13273 = cljs.analyzer._STAR_allow_redef_STAR_;
var _STAR_allow_redef_STAR__temp_val__13274 = true;
cljs.analyzer._STAR_allow_redef_STAR_ = _STAR_allow_redef_STAR__temp_val__13274;

try{return cljs.analyzer.analyze.call(null,env,else$);
}finally {cljs.analyzer._STAR_allow_redef_STAR_ = _STAR_allow_redef_STAR__orig_val__13273;
}})();
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"if","if",-458814265),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"test","test",577538877),test_expr,new cljs.core.Keyword(null,"then","then",460598070),then_expr,new cljs.core.Keyword(null,"else","else",-1508377146),else_expr,new cljs.core.Keyword(null,"unchecked","unchecked",924418378),cljs.core._STAR_unchecked_if_STAR_,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test","test",577538877),new cljs.core.Keyword(null,"then","then",460598070),new cljs.core.Keyword(null,"else","else",-1508377146)], null)], null);
}));
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"case*","case*",-1938255072,null),(function (op,env,p__13277,name,_){
var vec__13278 = p__13277;
var ___$1 = cljs.core.nth.call(null,vec__13278,(0),null);
var sym = cljs.core.nth.call(null,vec__13278,(1),null);
var tests = cljs.core.nth.call(null,vec__13278,(2),null);
var thens = cljs.core.nth.call(null,vec__13278,(3),null);
var default$ = cljs.core.nth.call(null,vec__13278,(4),null);
var form = vec__13278;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","case* must switch on symbol","\n","(symbol? sym)"].join('')));
}

if(cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,tests)){
} else {
throw (new Error(["Assert failed: ","case* tests must be grouped in vectors","\n","(every? vector? tests)"].join('')));
}

var expr_env = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var v = (function (){var _STAR_recur_frames_STAR__orig_val__4723 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__4724 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__4724;

try{return cljs.analyzer.analyze.call(null,expr_env,sym);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__4723;
}})();
var tests__$1 = cljs.core.mapv.call(null,((function (expr_env,v,vec__4720,___$1,sym,tests,thens,default$,form){
return (function (p1__4717_SHARP_){
return cljs.core.mapv.call(null,((function (expr_env,v,vec__4720,___$1,sym,tests,thens,default$,form){
return (function (t){
return cljs.analyzer.analyze.call(null,expr_env,t);
});})(expr_env,v,vec__4720,___$1,sym,tests,thens,default$,form))
,p1__4717_SHARP_);
});})(expr_env,v,vec__4720,___$1,sym,tests,thens,default$,form))
,tests);
var thens__$1 = cljs.core.mapv.call(null,((function (expr_env,v,tests__$1,vec__4720,___$1,sym,tests,thens,default$,form){
return (function (p1__4718_SHARP_){
return cljs.analyzer.analyze.call(null,env,p1__4718_SHARP_);
});})(expr_env,v,tests__$1,vec__4720,___$1,sym,tests,thens,default$,form))
,thens);
var nodes = cljs.core.mapv.call(null,((function (expr_env,v,tests__$1,thens__$1,vec__4720,___$1,sym,tests,thens,default$,form){
return (function (tests__$2,then){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"case-node","case-node",1016946320),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"tests","tests",-1041085625),cljs.core.mapv.call(null,((function (expr_env,v,tests__$1,thens__$1,vec__4720,___$1,sym,tests,thens,default$,form){
return (function (test){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"case-test","case-test",-213512472),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(test),new cljs.core.Keyword(null,"env","env",-1815813235),expr_env,new cljs.core.Keyword(null,"test","test",577538877),test,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test","test",577538877)], null)], null);
});})(expr_env,v,tests__$1,thens__$1,vec__4720,___$1,sym,tests,thens,default$,form))
,tests__$2),new cljs.core.Keyword(null,"then","then",460598070),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"case-then","case-then",2107591745),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(then),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"then","then",460598070),then,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"then","then",460598070)], null)], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tests","tests",-1041085625),new cljs.core.Keyword(null,"then","then",460598070)], null)], null);
});})(expr_env,v,tests__$1,thens__$1,vec__4720,___$1,sym,tests,thens,default$,form))
,tests__$1,thens__$1);
var default$__$1 = cljs.analyzer.analyze.call(null,env,default$);
if(cljs.core.every_QMARK_.call(null,((function (expr_env,v,tests__$1,thens__$1,nodes,default$__$1,vec__4720,___$1,sym,tests,thens,default$,form){
=======
var v = (function (){var _STAR_recur_frames_STAR__orig_val__13281 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__13282 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__13282;

try{return cljs.analyzer.analyze.call(null,expr_env,sym);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__13281;
}})();
var tests__$1 = cljs.core.mapv.call(null,((function (expr_env,v,vec__13278,___$1,sym,tests,thens,default$,form){
return (function (p1__13275_SHARP_){
return cljs.core.mapv.call(null,((function (expr_env,v,vec__13278,___$1,sym,tests,thens,default$,form){
return (function (t){
return cljs.analyzer.analyze.call(null,expr_env,t);
});})(expr_env,v,vec__13278,___$1,sym,tests,thens,default$,form))
,p1__13275_SHARP_);
});})(expr_env,v,vec__13278,___$1,sym,tests,thens,default$,form))
,tests);
var thens__$1 = cljs.core.mapv.call(null,((function (expr_env,v,tests__$1,vec__13278,___$1,sym,tests,thens,default$,form){
return (function (p1__13276_SHARP_){
return cljs.analyzer.analyze.call(null,env,p1__13276_SHARP_);
});})(expr_env,v,tests__$1,vec__13278,___$1,sym,tests,thens,default$,form))
,thens);
var nodes = cljs.core.mapv.call(null,((function (expr_env,v,tests__$1,thens__$1,vec__13278,___$1,sym,tests,thens,default$,form){
return (function (tests__$2,then){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"case-node","case-node",1016946320),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"tests","tests",-1041085625),cljs.core.mapv.call(null,((function (expr_env,v,tests__$1,thens__$1,vec__13278,___$1,sym,tests,thens,default$,form){
return (function (test){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"case-test","case-test",-213512472),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(test),new cljs.core.Keyword(null,"env","env",-1815813235),expr_env,new cljs.core.Keyword(null,"test","test",577538877),test,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test","test",577538877)], null)], null);
});})(expr_env,v,tests__$1,thens__$1,vec__13278,___$1,sym,tests,thens,default$,form))
,tests__$2),new cljs.core.Keyword(null,"then","then",460598070),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"case-then","case-then",2107591745),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(then),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"then","then",460598070),then,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"then","then",460598070)], null)], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tests","tests",-1041085625),new cljs.core.Keyword(null,"then","then",460598070)], null)], null);
});})(expr_env,v,tests__$1,thens__$1,vec__13278,___$1,sym,tests,thens,default$,form))
,tests__$1,thens__$1);
var default$__$1 = cljs.analyzer.analyze.call(null,env,default$);
if(cljs.core.every_QMARK_.call(null,((function (expr_env,v,tests__$1,thens__$1,nodes,default$__$1,vec__13278,___$1,sym,tests,thens,default$,form){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
return (function (t){
var or__4131__auto__ = new cljs.core.Keyword(null,"const","const",1709929842).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(t));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(t));
if(and__4120__auto__){
return cljs.core.some_fn.call(null,cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.char_QMARK_).call(null,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(t));
} else {
return and__4120__auto__;
}
}
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
});})(expr_env,v,tests__$1,thens__$1,nodes,default$__$1,vec__4720,___$1,sym,tests,thens,default$,form))
=======
});})(expr_env,v,tests__$1,thens__$1,nodes,default$__$1,vec__13278,___$1,sym,tests,thens,default$,form))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
,cljs.core.apply.call(null,cljs.core.concat,tests__$1))){
} else {
throw (new Error(["Assert failed: ","case* tests must be numbers, strings, or constants","\n","(every? (fn [t] (or (-> t :info :const) (and (= :const (:op t)) ((some-fn number? string? char?) (:form t))))) (apply concat tests))"].join('')));
}

return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"case","case",1143702196),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"test","test",577538877),v,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nodes,new cljs.core.Keyword(null,"default","default",-1987822328),default$__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test","test",577538877),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"default","default",-1987822328)], null)], null);
}));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"throw","throw",595905694,null),(function (op,env,p__4725,name,_){
var vec__4726 = p__4725;
var ___$1 = cljs.core.nth.call(null,vec__4726,(0),null);
var throw_form = cljs.core.nth.call(null,vec__4726,(1),null);
var form = vec__4726;
=======
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"throw","throw",595905694,null),(function (op,env,p__13283,name,_){
var vec__13284 = p__13283;
var ___$1 = cljs.core.nth.call(null,vec__13284,(0),null);
var throw_form = cljs.core.nth.call(null,vec__13284,(1),null);
var form = vec__13284;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,form))){
throw cljs.analyzer.error.call(null,env,"Too few arguments to throw, throw expects a single Error instance");
} else {
if(((2) < cljs.core.count.call(null,form))){
throw cljs.analyzer.error.call(null,env,"Too many arguments to throw, throw expects a single Error instance");
} else {
}
}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var throw_expr = (function (){var _STAR_recur_frames_STAR__orig_val__4729 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__4730 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__4730;

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),throw_form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__4729;
}})();
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"throw","throw",-1044625833),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"exception","exception",-335277064),throw_expr,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exception","exception",-335277064)], null)], null);
}));
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"try","try",-1273693247,null),(function (op,env,p__4735,name,_){
var vec__4736 = p__4735;
var seq__4737 = cljs.core.seq.call(null,vec__4736);
var first__4738 = cljs.core.first.call(null,seq__4737);
var seq__4737__$1 = cljs.core.next.call(null,seq__4737);
var ___$1 = first__4738;
var body = seq__4737__$1;
var form = vec__4736;
var catchenv = cljs.core.update_in.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",-830191113)], null),((function (vec__4736,seq__4737,first__4738,seq__4737__$1,___$1,body,form){
return (function (p1__4731_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),p1__4731_SHARP_)){
return new cljs.core.Keyword(null,"return","return",-1891502105);
} else {
return p1__4731_SHARP_;
}
});})(vec__4736,seq__4737,first__4738,seq__4737__$1,___$1,body,form))
);
var catch_QMARK_ = cljs.core.every_pred.call(null,cljs.core.seq_QMARK_,((function (catchenv,vec__4736,seq__4737,first__4738,seq__4737__$1,___$1,body,form){
return (function (p1__4732_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__4732_SHARP_),new cljs.core.Symbol(null,"catch","catch",-1616370245,null));
});})(catchenv,vec__4736,seq__4737,first__4738,seq__4737__$1,___$1,body,form))
);
var default_QMARK_ = cljs.core.every_pred.call(null,catch_QMARK_,((function (catchenv,catch_QMARK_,vec__4736,seq__4737,first__4738,seq__4737__$1,___$1,body,form){
return (function (p1__4733_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,p1__4733_SHARP_),new cljs.core.Keyword(null,"default","default",-1987822328));
});})(catchenv,catch_QMARK_,vec__4736,seq__4737,first__4738,seq__4737__$1,___$1,body,form))
);
var finally_QMARK_ = cljs.core.every_pred.call(null,cljs.core.seq_QMARK_,((function (catchenv,catch_QMARK_,default_QMARK_,vec__4736,seq__4737,first__4738,seq__4737__$1,___$1,body,form){
return (function (p1__4734_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__4734_SHARP_),new cljs.core.Symbol(null,"finally","finally",-1065347064,null));
});})(catchenv,catch_QMARK_,default_QMARK_,vec__4736,seq__4737,first__4738,seq__4737__$1,___$1,body,form))
);
var map__4739 = (function (){var parser = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"forms","forms",2045992350),body,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"cblocks","cblocks",-1769978138),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"dblock","dblock",-1325623381),null,new cljs.core.Keyword(null,"fblock","fblock",-1236607426),null], null);
while(true){
if(cljs.core.seq_QMARK_.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(parser))){
var vec__4744 = new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(parser);
var seq__4745 = cljs.core.seq.call(null,vec__4744);
var first__4746 = cljs.core.first.call(null,seq__4745);
var seq__4745__$1 = cljs.core.next.call(null,seq__4745);
var form__$1 = first__4746;
var forms_STAR_ = seq__4745__$1;
var parser_STAR_ = cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"forms","forms",2045992350),forms_STAR_);
var G__4747 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(parser);
var G__4747__$1 = (((G__4747 instanceof cljs.core.Keyword))?G__4747.fqn:null);
switch (G__4747__$1) {
case "start":
if(cljs.core.truth_(catch_QMARK_.call(null,form__$1))){
var G__4763 = cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"catches","catches",-1478797617));
parser = G__4763;
continue;
} else {
if(cljs.core.truth_(finally_QMARK_.call(null,form__$1))){
var G__4764 = cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"finally","finally",1589088705));
parser = G__4764;
continue;
} else {
var G__4765 = cljs.core.update_in.call(null,parser_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),cljs.core.conj,form__$1);
parser = G__4765;
=======
var throw_expr = (function (){var _STAR_recur_frames_STAR__orig_val__13287 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__13288 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__13288;

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),throw_form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__13287;
}})();
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"throw","throw",-1044625833),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"exception","exception",-335277064),throw_expr,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exception","exception",-335277064)], null)], null);
}));
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"try","try",-1273693247,null),(function (op,env,p__13293,name,_){
var vec__13294 = p__13293;
var seq__13295 = cljs.core.seq.call(null,vec__13294);
var first__13296 = cljs.core.first.call(null,seq__13295);
var seq__13295__$1 = cljs.core.next.call(null,seq__13295);
var ___$1 = first__13296;
var body = seq__13295__$1;
var form = vec__13294;
var catchenv = cljs.core.update_in.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",-830191113)], null),((function (vec__13294,seq__13295,first__13296,seq__13295__$1,___$1,body,form){
return (function (p1__13289_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),p1__13289_SHARP_)){
return new cljs.core.Keyword(null,"return","return",-1891502105);
} else {
return p1__13289_SHARP_;
}
});})(vec__13294,seq__13295,first__13296,seq__13295__$1,___$1,body,form))
);
var catch_QMARK_ = cljs.core.every_pred.call(null,cljs.core.seq_QMARK_,((function (catchenv,vec__13294,seq__13295,first__13296,seq__13295__$1,___$1,body,form){
return (function (p1__13290_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__13290_SHARP_),new cljs.core.Symbol(null,"catch","catch",-1616370245,null));
});})(catchenv,vec__13294,seq__13295,first__13296,seq__13295__$1,___$1,body,form))
);
var default_QMARK_ = cljs.core.every_pred.call(null,catch_QMARK_,((function (catchenv,catch_QMARK_,vec__13294,seq__13295,first__13296,seq__13295__$1,___$1,body,form){
return (function (p1__13291_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,p1__13291_SHARP_),new cljs.core.Keyword(null,"default","default",-1987822328));
});})(catchenv,catch_QMARK_,vec__13294,seq__13295,first__13296,seq__13295__$1,___$1,body,form))
);
var finally_QMARK_ = cljs.core.every_pred.call(null,cljs.core.seq_QMARK_,((function (catchenv,catch_QMARK_,default_QMARK_,vec__13294,seq__13295,first__13296,seq__13295__$1,___$1,body,form){
return (function (p1__13292_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__13292_SHARP_),new cljs.core.Symbol(null,"finally","finally",-1065347064,null));
});})(catchenv,catch_QMARK_,default_QMARK_,vec__13294,seq__13295,first__13296,seq__13295__$1,___$1,body,form))
);
var map__13297 = (function (){var parser = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"forms","forms",2045992350),body,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"cblocks","cblocks",-1769978138),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"dblock","dblock",-1325623381),null,new cljs.core.Keyword(null,"fblock","fblock",-1236607426),null], null);
while(true){
if(cljs.core.seq_QMARK_.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(parser))){
var vec__13302 = new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(parser);
var seq__13303 = cljs.core.seq.call(null,vec__13302);
var first__13304 = cljs.core.first.call(null,seq__13303);
var seq__13303__$1 = cljs.core.next.call(null,seq__13303);
var form__$1 = first__13304;
var forms_STAR_ = seq__13303__$1;
var parser_STAR_ = cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"forms","forms",2045992350),forms_STAR_);
var G__13305 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(parser);
var G__13305__$1 = (((G__13305 instanceof cljs.core.Keyword))?G__13305.fqn:null);
switch (G__13305__$1) {
case "start":
if(cljs.core.truth_(catch_QMARK_.call(null,form__$1))){
var G__13321 = cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"catches","catches",-1478797617));
parser = G__13321;
continue;
} else {
if(cljs.core.truth_(finally_QMARK_.call(null,form__$1))){
var G__13322 = cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"finally","finally",1589088705));
parser = G__13322;
continue;
} else {
var G__13323 = cljs.core.update_in.call(null,parser_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),cljs.core.conj,form__$1);
parser = G__13323;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
continue;

}
}

break;
case "catches":
if(cljs.core.truth_(default_QMARK_.call(null,form__$1))){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__4766 = cljs.core.assoc.call(null,parser_STAR_,new cljs.core.Keyword(null,"dblock","dblock",-1325623381),form__$1,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"finally","finally",1589088705));
parser = G__4766;
continue;
} else {
if(cljs.core.truth_(catch_QMARK_.call(null,form__$1))){
var G__4767 = cljs.core.update_in.call(null,parser_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cblocks","cblocks",-1769978138)], null),cljs.core.conj,form__$1);
parser = G__4767;
continue;
} else {
if(cljs.core.truth_(finally_QMARK_.call(null,form__$1))){
var G__4768 = cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"finally","finally",1589088705));
parser = G__4768;
=======
var G__13324 = cljs.core.assoc.call(null,parser_STAR_,new cljs.core.Keyword(null,"dblock","dblock",-1325623381),form__$1,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"finally","finally",1589088705));
parser = G__13324;
continue;
} else {
if(cljs.core.truth_(catch_QMARK_.call(null,form__$1))){
var G__13325 = cljs.core.update_in.call(null,parser_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cblocks","cblocks",-1769978138)], null),cljs.core.conj,form__$1);
parser = G__13325;
continue;
} else {
if(cljs.core.truth_(finally_QMARK_.call(null,form__$1))){
var G__13326 = cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"finally","finally",1589088705));
parser = G__13326;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
continue;
} else {
throw cljs.analyzer.error.call(null,env,"Invalid try form");

}
}
}

break;
case "finally":
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__4769 = cljs.core.assoc.call(null,parser_STAR_,new cljs.core.Keyword(null,"fblock","fblock",-1236607426),form__$1,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"done","done",-889844188));
parser = G__4769;
=======
var G__13327 = cljs.core.assoc.call(null,parser_STAR_,new cljs.core.Keyword(null,"fblock","fblock",-1236607426),form__$1,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"done","done",-889844188));
parser = G__13327;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
continue;

break;
case "done":
throw cljs.analyzer.error.call(null,env,"Unexpected form after finally");

break;
default:
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4747__$1)].join('')));
=======
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13305__$1)].join('')));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js

}
} else {
return parser;
}
break;
}
})();
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var map__4739__$1 = (((((!((map__4739 == null))))?(((((map__4739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4739):map__4739);
var body__$1 = cljs.core.get.call(null,map__4739__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var cblocks = cljs.core.get.call(null,map__4739__$1,new cljs.core.Keyword(null,"cblocks","cblocks",-1769978138));
var dblock = cljs.core.get.call(null,map__4739__$1,new cljs.core.Keyword(null,"dblock","dblock",-1325623381));
var fblock = cljs.core.get.call(null,map__4739__$1,new cljs.core.Keyword(null,"fblock","fblock",-1236607426));
var finally$ = ((cljs.core.seq.call(null,fblock))?cljs.core.assoc.call(null,(function (){var _STAR_recur_frames_STAR__orig_val__4749 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__4750 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__4750;

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"statement","statement",-32780863)),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.rest.call(null,fblock)))));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__4749;
=======
var map__13297__$1 = (((((!((map__13297 == null))))?(((((map__13297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13297):map__13297);
var body__$1 = cljs.core.get.call(null,map__13297__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var cblocks = cljs.core.get.call(null,map__13297__$1,new cljs.core.Keyword(null,"cblocks","cblocks",-1769978138));
var dblock = cljs.core.get.call(null,map__13297__$1,new cljs.core.Keyword(null,"dblock","dblock",-1325623381));
var fblock = cljs.core.get.call(null,map__13297__$1,new cljs.core.Keyword(null,"fblock","fblock",-1236607426));
var finally$ = ((cljs.core.seq.call(null,fblock))?cljs.core.assoc.call(null,(function (){var _STAR_recur_frames_STAR__orig_val__13307 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__13308 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__13308;

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"statement","statement",-32780863)),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.rest.call(null,fblock)))));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__13307;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
}})(),new cljs.core.Keyword(null,"body?","body?",-1333761917),true):null);
var e = (cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.seq.call(null,cblocks);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return dblock;
}
})())?cljs.core.gensym.call(null,"e"):null);
var default$ = (function (){var temp__5718__auto__ = dblock;
if(cljs.core.truth_(temp__5718__auto__)){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var vec__4751 = temp__5718__auto__;
var seq__4752 = cljs.core.seq.call(null,vec__4751);
var first__4753 = cljs.core.first.call(null,seq__4752);
var seq__4752__$1 = cljs.core.next.call(null,seq__4752);
var ___$2 = first__4753;
var first__4753__$1 = cljs.core.first.call(null,seq__4752__$1);
var seq__4752__$2 = cljs.core.next.call(null,seq__4752__$1);
var ___$3 = first__4753__$1;
var first__4753__$2 = cljs.core.first.call(null,seq__4752__$2);
var seq__4752__$3 = cljs.core.next.call(null,seq__4752__$2);
var name__$1 = first__4753__$2;
var cb = seq__4752__$3;
=======
var vec__13309 = temp__5718__auto__;
var seq__13310 = cljs.core.seq.call(null,vec__13309);
var first__13311 = cljs.core.first.call(null,seq__13310);
var seq__13310__$1 = cljs.core.next.call(null,seq__13310);
var ___$2 = first__13311;
var first__13311__$1 = cljs.core.first.call(null,seq__13310__$1);
var seq__13310__$2 = cljs.core.next.call(null,seq__13310__$1);
var ___$3 = first__13311__$1;
var first__13311__$2 = cljs.core.first.call(null,seq__13310__$2);
var seq__13310__$3 = cljs.core.next.call(null,seq__13310__$2);
var name__$1 = first__13311__$2;
var cb = seq__13310__$3;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,name__$1,null,(1),null)),(new cljs.core.List(null,e,null,(1),null)))))),null,(1),null)),cb)));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,e,null,(1),null)))));
}
})();
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var cblock = ((cljs.core.seq.call(null,cblocks))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),cljs.core.mapcat.call(null,((function (catchenv,catch_QMARK_,default_QMARK_,finally_QMARK_,map__4739,map__4739__$1,body__$1,cblocks,dblock,fblock,finally$,e,default$,vec__4736,seq__4737,first__4738,seq__4737__$1,___$1,body,form){
return (function (p__4754){
var vec__4755 = p__4754;
var seq__4756 = cljs.core.seq.call(null,vec__4755);
var first__4757 = cljs.core.first.call(null,seq__4756);
var seq__4756__$1 = cljs.core.next.call(null,seq__4756);
var ___$2 = first__4757;
var first__4757__$1 = cljs.core.first.call(null,seq__4756__$1);
var seq__4756__$2 = cljs.core.next.call(null,seq__4756__$1);
var type = first__4757__$1;
var first__4757__$2 = cljs.core.first.call(null,seq__4756__$2);
var seq__4756__$3 = cljs.core.next.call(null,seq__4756__$2);
var name__$1 = first__4757__$2;
var cb = seq__4756__$3;
=======
var cblock = ((cljs.core.seq.call(null,cblocks))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),cljs.core.mapcat.call(null,((function (catchenv,catch_QMARK_,default_QMARK_,finally_QMARK_,map__13297,map__13297__$1,body__$1,cblocks,dblock,fblock,finally$,e,default$,vec__13294,seq__13295,first__13296,seq__13295__$1,___$1,body,form){
return (function (p__13312){
var vec__13313 = p__13312;
var seq__13314 = cljs.core.seq.call(null,vec__13313);
var first__13315 = cljs.core.first.call(null,seq__13314);
var seq__13314__$1 = cljs.core.next.call(null,seq__13314);
var ___$2 = first__13315;
var first__13315__$1 = cljs.core.first.call(null,seq__13314__$1);
var seq__13314__$2 = cljs.core.next.call(null,seq__13314__$1);
var type = first__13315__$1;
var first__13315__$2 = cljs.core.first.call(null,seq__13314__$2);
var seq__13314__$3 = cljs.core.next.call(null,seq__13314__$2);
var name__$1 = first__13315__$2;
var cb = seq__13314__$3;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
if(cljs.core.truth_(name__$1)){
if(cljs.core.not.call(null,cljs.core.namespace.call(null,name__$1))){
} else {
throw (new Error(["Assert failed: ","Can't qualify symbol in catch","\n","(not (namespace name))"].join('')));
}
} else {
}

return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),null,(1),null)),(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,e,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,name__$1,null,(1),null)),(new cljs.core.List(null,e,null,(1),null)))))),null,(1),null)),cb))),null,(1),null))))));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
});})(catchenv,catch_QMARK_,default_QMARK_,finally_QMARK_,map__4739,map__4739__$1,body__$1,cblocks,dblock,fblock,finally$,e,default$,vec__4736,seq__4737,first__4738,seq__4737__$1,___$1,body,form))
,cblocks),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,default$,null,(1),null))))):default$);
var locals = new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(catchenv);
var locals__$1 = (cljs.core.truth_(e)?cljs.core.assoc.call(null,locals,e,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),e,new cljs.core.Keyword(null,"line","line",212345235),cljs.analyzer.get_line.call(null,e,env),new cljs.core.Keyword(null,"column","column",2078222095),cljs.analyzer.get_col.call(null,e,env)], null)):locals);
var catch$ = (cljs.core.truth_(cblock)?(function (){var _STAR_recur_frames_STAR__orig_val__4758 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__4759 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__4759;

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,catchenv,new cljs.core.Keyword(null,"locals","locals",535295783),locals__$1),cblock);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__4758;
}})():null);
var try$ = (function (){var _STAR_recur_frames_STAR__orig_val__4760 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__4761 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__4761;
=======
});})(catchenv,catch_QMARK_,default_QMARK_,finally_QMARK_,map__13297,map__13297__$1,body__$1,cblocks,dblock,fblock,finally$,e,default$,vec__13294,seq__13295,first__13296,seq__13295__$1,___$1,body,form))
,cblocks),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,default$,null,(1),null))))):default$);
var locals = new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(catchenv);
var locals__$1 = (cljs.core.truth_(e)?cljs.core.assoc.call(null,locals,e,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),e,new cljs.core.Keyword(null,"line","line",212345235),cljs.analyzer.get_line.call(null,e,env),new cljs.core.Keyword(null,"column","column",2078222095),cljs.analyzer.get_col.call(null,e,env)], null)):locals);
var catch$ = (cljs.core.truth_(cblock)?(function (){var _STAR_recur_frames_STAR__orig_val__13316 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__13317 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__13317;

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,catchenv,new cljs.core.Keyword(null,"locals","locals",535295783),locals__$1),cblock);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__13316;
}})():null);
var try$ = (function (){var _STAR_recur_frames_STAR__orig_val__13318 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__13319 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__13319;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js

try{return cljs.analyzer.analyze.call(null,(cljs.core.truth_((function (){var or__4131__auto__ = e;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return finally$;
}
})())?catchenv:env),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body__$1))));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__4760;
=======
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__13318;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
}})();
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"try","try",1380742522),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.assoc.call(null,try$,new cljs.core.Keyword(null,"body?","body?",-1333761917),true),new cljs.core.Keyword(null,"finally","finally",1589088705),finally$,new cljs.core.Keyword(null,"name","name",1843675177),e,new cljs.core.Keyword(null,"catch","catch",1038065524),catch$,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),(cljs.core.truth_(catch$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catch","catch",1038065524)], null):null),(cljs.core.truth_(finally$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"finally","finally",1589088705)], null):null)))], null);
}));
cljs.analyzer.valid_proto = (function cljs$analyzer$valid_proto(x){
if((x instanceof cljs.core.Symbol)){
return x;
} else {
return null;
}
});
cljs.analyzer.elide_env = (function cljs$analyzer$elide_env(env,ast,opts){
return cljs.core.dissoc.call(null,ast,new cljs.core.Keyword(null,"env","env",-1815813235));
});
cljs.analyzer.replace_env_pass = (function cljs$analyzer$replace_env_pass(new_env){
return (function (env,ast,opts){
return cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"env","env",-1815813235),new_env);
});
});
cljs.analyzer.ast_children = (function cljs$analyzer$ast_children(ast){
return cljs.core.mapcat.call(null,(function (c){
var g = cljs.core.get.call(null,ast,c);
if(cljs.core.vector_QMARK_.call(null,g)){
return g;
} else {
if(cljs.core.truth_(g)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null);
} else {
return null;
}
}
}),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
});
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
cljs.analyzer.constant_value_QMARK_ = (function cljs$analyzer$constant_value_QMARK_(p__4770){
var map__4771 = p__4770;
var map__4771__$1 = (((((!((map__4771 == null))))?(((((map__4771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4771):map__4771);
var ast = map__4771__$1;
var op = cljs.core.get.call(null,map__4771__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
=======
cljs.analyzer.constant_value_QMARK_ = (function cljs$analyzer$constant_value_QMARK_(p__13328){
var map__13329 = p__13328;
var map__13329__$1 = (((((!((map__13329 == null))))?(((((map__13329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13329):map__13329);
var ast = map__13329__$1;
var op = cljs.core.get.call(null,map__13329__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"const","const",1709929842),null,new cljs.core.Keyword(null,"quote","quote",-262615245),null], null), null).call(null,op);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"vector","vector",1902966158),null,new cljs.core.Keyword(null,"set","set",304602554),null,new cljs.core.Keyword(null,"map","map",1371690461),null], null), null).call(null,op);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.every_QMARK_.call(null,cljs.analyzer.constant_value_QMARK_,cljs.analyzer.ast_children.call(null,ast));
} else {
return and__4120__auto__;
}
}
});
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
cljs.analyzer.const_expr__GT_constant_value = (function cljs$analyzer$const_expr__GT_constant_value(p__4773){
var map__4774 = p__4773;
var map__4774__$1 = (((((!((map__4774 == null))))?(((((map__4774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4774):map__4774);
var e = map__4774__$1;
var op = cljs.core.get.call(null,map__4774__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var G__4776 = op;
var G__4776__$1 = (((G__4776 instanceof cljs.core.Keyword))?G__4776.fqn:null);
switch (G__4776__$1) {
=======
cljs.analyzer.const_expr__GT_constant_value = (function cljs$analyzer$const_expr__GT_constant_value(p__13331){
var map__13332 = p__13331;
var map__13332__$1 = (((((!((map__13332 == null))))?(((((map__13332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13332):map__13332);
var e = map__13332__$1;
var op = cljs.core.get.call(null,map__13332__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var G__13334 = op;
var G__13334__$1 = (((G__13334 instanceof cljs.core.Keyword))?G__13334.fqn:null);
switch (G__13334__$1) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
case "quote":
return cljs.analyzer.const_expr__GT_constant_value.call(null,new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(e));

break;
case "const":
return new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(e);

break;
case "map":
return cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.analyzer.const_expr__GT_constant_value,new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(e)),cljs.core.map.call(null,cljs.analyzer.const_expr__GT_constant_value,new cljs.core.Keyword(null,"vals","vals",768058733).cljs$core$IFn$_invoke$arity$1(e)));

break;
case "set":
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.analyzer.const_expr__GT_constant_value,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(e)));

break;
case "vector":
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.analyzer.const_expr__GT_constant_value,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(e)));

break;
default:
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4776__$1)].join('')));
=======
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13334__$1)].join('')));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js

}
});
cljs.analyzer.earmuffed_QMARK_ = (function cljs$analyzer$earmuffed_QMARK_(sym){
var s = cljs.core.name.call(null,sym);
return (((cljs.core.count.call(null,s) > (2))) && (clojure.string.starts_with_QMARK_.call(null,s,"*")) && (clojure.string.ends_with_QMARK_.call(null,s,"*")));
});
cljs.analyzer.core_ns_QMARK_ = (function cljs$analyzer$core_ns_QMARK_(ns_sym){
var s = cljs.core.name.call(null,ns_sym);
return ((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null),ns_sym)) && (((clojure.string.starts_with_QMARK_.call(null,s,"cljs.")) || (clojure.string.starts_with_QMARK_.call(null,s,"clojure.")))));
});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"def","def",597100991,null),(function (op,env,form,_,___$1){
if((cljs.core.count.call(null,form) > (4))){
throw cljs.analyzer.error.call(null,env,"Too many arguments to def");
} else {
}

var pfn = (function() {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__4786 = null;
var G__4786__2 = (function (___$2,sym){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym], null);
});
var G__4786__3 = (function (___$2,sym,init){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"init","init",-1875481434),init], null);
});
var G__4786__4 = (function (___$2,sym,doc,init){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"init","init",-1875481434),init], null);
});
G__4786 = function(___$2,sym,doc,init){
switch(arguments.length){
case 2:
return G__4786__2.call(this,___$2,sym);
case 3:
return G__4786__3.call(this,___$2,sym,doc);
case 4:
return G__4786__4.call(this,___$2,sym,doc,init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__4786.cljs$core$IFn$_invoke$arity$2 = G__4786__2;
G__4786.cljs$core$IFn$_invoke$arity$3 = G__4786__3;
G__4786.cljs$core$IFn$_invoke$arity$4 = G__4786__4;
return G__4786;
=======
var G__13344 = null;
var G__13344__2 = (function (___$2,sym){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym], null);
});
var G__13344__3 = (function (___$2,sym,init){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"init","init",-1875481434),init], null);
});
var G__13344__4 = (function (___$2,sym,doc,init){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"init","init",-1875481434),init], null);
});
G__13344 = function(___$2,sym,doc,init){
switch(arguments.length){
case 2:
return G__13344__2.call(this,___$2,sym);
case 3:
return G__13344__3.call(this,___$2,sym,doc);
case 4:
return G__13344__4.call(this,___$2,sym,doc,init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13344.cljs$core$IFn$_invoke$arity$2 = G__13344__2;
G__13344.cljs$core$IFn$_invoke$arity$3 = G__13344__3;
G__13344.cljs$core$IFn$_invoke$arity$4 = G__13344__4;
return G__13344;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
})()
;
var args = cljs.core.apply.call(null,pfn,form);
var sym = new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(args);
var const_QMARK_ = new cljs.core.Keyword(null,"const","const",1709929842).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym));
var sym_meta = cljs.core.meta.call(null,sym);
var tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym));
var protocol = cljs.analyzer.valid_proto.call(null,new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym)));
var dynamic = new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym));
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
var locals = new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(env);
var clash_ns = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
var sym_ns = cljs.core.namespace.call(null,sym);
var sym__$1 = (cljs.core.truth_((function (){var and__4120__auto__ = sym_ns;
if(cljs.core.truth_(and__4120__auto__)){
return (!(cljs.core.symbol_identical_QMARK_.call(null,cljs.core.symbol.call(null,sym_ns),ns_name)));
} else {
return and__4120__auto__;
}
})())?(function(){throw cljs.analyzer.error.call(null,env,["Can't def ns-qualified name in namespace ",sym_ns].join(''))})():(((!((sym_ns == null))))?cljs.core.symbol.call(null,cljs.core.name.call(null,sym)):sym
));
if((!((cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),clash_ns], null)) == null)))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym__$1)].join('')),new cljs.core.Keyword(null,"var","var",-769682797),cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym__$1))], null));
} else {
}

if((!((new cljs.core.Keyword(null,"const","const",1709929842).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),sym__$1)) == null)))){
throw cljs.analyzer.error.call(null,env,"Can't redefine a constant");
} else {
}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var temp__5724__auto___4787 = new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(args);
if((temp__5724__auto___4787 == null)){
} else {
var doc_4788 = temp__5724__auto___4787;
if(typeof doc_4788 === 'string'){
=======
var temp__5724__auto___13345 = new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(args);
if((temp__5724__auto___13345 == null)){
} else {
var doc_13346 = temp__5724__auto___13345;
if(typeof doc_13346 === 'string'){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
} else {
throw cljs.analyzer.error.call(null,env,"Too many arguments to def");
}
}

if(((cljs.core.not.call(null,dynamic)) && (cljs.analyzer.earmuffed_QMARK_.call(null,sym__$1)) && ((!(cljs.analyzer.core_ns_QMARK_.call(null,ns_name)))))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"non-dynamic-earmuffed-var","non-dynamic-earmuffed-var",-202005643),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"var","var",-769682797),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym__$1)], null));
} else {
}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var temp__5724__auto___4789 = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"defs","defs",1398449717),sym__$1], null));
if((temp__5724__auto___4789 == null)){
} else {
var v_4790 = temp__5724__auto___4789;
if(cljs.core.truth_((function (){var and__4120__auto__ = (!(cljs.analyzer._STAR_allow_redef_STAR_));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"declared","declared",92336021).cljs$core$IFn$_invoke$arity$1(v_4790));
=======
var temp__5724__auto___13347 = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"defs","defs",1398449717),sym__$1], null));
if((temp__5724__auto___13347 == null)){
} else {
var v_13348 = temp__5724__auto___13347;
if(cljs.core.truth_((function (){var and__4120__auto__ = (!(cljs.analyzer._STAR_allow_redef_STAR_));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"declared","declared",92336021).cljs$core$IFn$_invoke$arity$1(v_13348));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
if(and__4120__auto____$1){
var and__4120__auto____$2 = cljs.core.not.call(null,new cljs.core.Keyword(null,"declared","declared",92336021).cljs$core$IFn$_invoke$arity$1(sym_meta));
if(and__4120__auto____$2){
var and__4120__auto____$3 = cljs.analyzer._STAR_file_defs_STAR_;
if(cljs.core.truth_(and__4120__auto____$3)){
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.analyzer._STAR_file_defs_STAR_),sym__$1);
} else {
return and__4120__auto____$3;
}
} else {
return and__4120__auto____$2;
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym__$1,new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(v_4790)], null));
} else {
}

if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"declared","declared",92336021).cljs$core$IFn$_invoke$arity$1(v_4790);
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(v_4790);
if(cljs.core.truth_(and__4120__auto____$1)){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(v_4790),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(sym_meta));
=======
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym__$1,new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(v_13348)], null));
} else {
}

if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"declared","declared",92336021).cljs$core$IFn$_invoke$arity$1(v_13348);
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(v_13348);
if(cljs.core.truth_(and__4120__auto____$1)){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(v_13348),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(sym_meta));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"declared-arglists-mismatch","declared-arglists-mismatch",-496878383),env,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns-name","ns-name",-2077346323),ns_name,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym__$1,new cljs.core.Keyword(null,"declared","declared",92336021),cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(v_4790)),new cljs.core.Keyword(null,"defined","defined",-1805032318),cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(sym_meta))], null));
=======
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"declared-arglists-mismatch","declared-arglists-mismatch",-496878383),env,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns-name","ns-name",-2077346323),ns_name,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym__$1,new cljs.core.Keyword(null,"declared","declared",92336021),cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(v_13348)),new cljs.core.Keyword(null,"defined","defined",-1805032318),cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(sym_meta))], null));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
} else {
}
}

var env__$1 = ((((((cljs.core.not_EQ_.call(null,ns_name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))) && (cljs.analyzer.core_name_QMARK_.call(null,env,sym__$1)))) || ((!((cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"uses","uses",232664692),sym__$1], null)) == null))))))?(function (){var ev = cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),cljs.core.with_meta.call(null,sym__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
var conj_to_set = cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY);
if(cljs.analyzer.public_name_QMARK_.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(ev),sym__$1)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"redef","redef",1032704258),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym__$1,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(ev),new cljs.core.Keyword(null,"ns-name","ns-name",-2077346323),ns_name], null));
} else {
}

cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"excludes","excludes",-1791725945)], null),conj_to_set,sym__$1);

return cljs.core.update_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"excludes","excludes",-1791725945)], null),conj_to_set,sym__$1);
})():env);
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env__$1,new cljs.core.Keyword(null,"locals","locals",535295783)),sym__$1));
var init_expr = ((cljs.core.contains_QMARK_.call(null,args,new cljs.core.Keyword(null,"init","init",-1875481434)))?(function (){
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"defs","defs",1398449717),sym__$1], null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),var_name], null),sym_meta,((dynamic === true)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true], null):null),cljs.analyzer.source_info.call(null,var_name,env__$1)));

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var _STAR_recur_frames_STAR__orig_val__4779 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__4780 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__4780;

try{var _STAR_allow_ns_STAR__orig_val__4781 = cljs.analyzer._STAR_allow_ns_STAR_;
var _STAR_allow_ns_STAR__temp_val__4782 = false;
cljs.analyzer._STAR_allow_ns_STAR_ = _STAR_allow_ns_STAR__temp_val__4782;

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env__$1,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(args),sym__$1);
}finally {cljs.analyzer._STAR_allow_ns_STAR_ = _STAR_allow_ns_STAR__orig_val__4781;
}}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__4779;
=======
var _STAR_recur_frames_STAR__orig_val__13337 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__13338 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__13338;

try{var _STAR_allow_ns_STAR__orig_val__13339 = cljs.analyzer._STAR_allow_ns_STAR_;
var _STAR_allow_ns_STAR__temp_val__13340 = false;
cljs.analyzer._STAR_allow_ns_STAR_ = _STAR_allow_ns_STAR__temp_val__13340;

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env__$1,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(args),sym__$1);
}finally {cljs.analyzer._STAR_allow_ns_STAR_ = _STAR_allow_ns_STAR__orig_val__13339;
}}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__13337;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
}})()
:null);
var fn_var_QMARK_ = (((!((init_expr == null)))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(init_expr),new cljs.core.Keyword(null,"fn","fn",-1175266204))));
var tag__$1 = ((fn_var_QMARK_)?(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990).cljs$core$IFn$_invoke$arity$1(init_expr);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = tag;
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return new cljs.core.Keyword(null,"inferred-ret-tag","inferred-ret-tag",798934347).cljs$core$IFn$_invoke$arity$1(init_expr);
}
}
})():(function (){var or__4131__auto__ = tag;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(init_expr);
}
})());
var export_as = (function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"export","export",214356590).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym__$1));
if(cljs.core.truth_(temp__5720__auto__)){
var export_val = temp__5720__auto__;
if(cljs.core._EQ_.call(null,true,export_val)){
return var_name;
} else {
return export_val;
}
} else {
return null;
}
})();
var doc = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym__$1));
}
})();
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var temp__5724__auto___4791 = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"defs","defs",1398449717),sym__$1], null));
if((temp__5724__auto___4791 == null)){
} else {
var v_4792 = temp__5724__auto___4791;
if(((cljs.core.not.call(null,new cljs.core.Keyword(null,"declared","declared",92336021).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym__$1)))) && (((new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(v_4792) === true) && ((!(fn_var_QMARK_))))))){
=======
var temp__5724__auto___13349 = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"defs","defs",1398449717),sym__$1], null));
if((temp__5724__auto___13349 == null)){
} else {
var v_13350 = temp__5724__auto___13349;
if(((cljs.core.not.call(null,new cljs.core.Keyword(null,"declared","declared",92336021).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym__$1)))) && (((new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(v_13350) === true) && ((!(fn_var_QMARK_))))))){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-name","ns-name",-2077346323),ns_name,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym__$1], null));
} else {
}
}

if((((cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"defs","defs",1398449717),sym__$1], null)) == null)) || (cljs.core.not.call(null,new cljs.core.Keyword(null,"declared","declared",92336021).cljs$core$IFn$_invoke$arity$1(sym_meta))))){
if(cljs.core.truth_(cljs.analyzer._STAR_file_defs_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.analyzer._STAR_file_defs_STAR_,cljs.core.conj,sym__$1);
} else {
}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"defs","defs",1398449717),sym__$1], null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),var_name], null),(function (){var G__4783 = sym_meta;
if(cljs.core.truth_(new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(sym_meta))){
return cljs.core.assoc.call(null,G__4783,new cljs.core.Keyword(null,"test","test",577538877),true);
} else {
return G__4783;
=======
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"defs","defs",1398449717),sym__$1], null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),var_name], null),(function (){var G__13341 = sym_meta;
if(cljs.core.truth_(new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(sym_meta))){
return cljs.core.assoc.call(null,G__13341,new cljs.core.Keyword(null,"test","test",577538877),true);
} else {
return G__13341;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.update_in.call(null,cljs.core.dissoc.call(null,sym_meta,new cljs.core.Keyword(null,"test","test",577538877)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878)], null),((function (env__$1,var_name,init_expr,fn_var_QMARK_,tag__$1,export_as,doc,pfn,args,sym,const_QMARK_,sym_meta,tag,protocol,dynamic,ns_name,locals,clash_ns,sym_ns,sym__$1){
return (function (f){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env__$1)),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
return "cljs/core.cljs";
} else {
return f;
}
});})(env__$1,var_name,init_expr,fn_var_QMARK_,tag__$1,export_as,doc,pfn,args,sym,const_QMARK_,sym_meta,tag,protocol,dynamic,ns_name,locals,clash_ns,sym_ns,sym__$1))
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
)], null),(cljs.core.truth_(doc)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),doc], null):null),(cljs.core.truth_(const_QMARK_)?(function (){var const_expr = (function (){var _STAR_passes_STAR__orig_val__4784 = cljs.analyzer._STAR_passes_STAR_;
var _STAR_passes_STAR__temp_val__4785 = cljs.core.conj.call(null,cljs.analyzer._STAR_passes_STAR_,cljs.analyzer.replace_env_pass.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)], null)));
cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__temp_val__4785;

try{return cljs.analyzer.analyze.call(null,env__$1,new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(args));
}finally {cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__orig_val__4784;
=======
)], null),(cljs.core.truth_(doc)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),doc], null):null),(cljs.core.truth_(const_QMARK_)?(function (){var const_expr = (function (){var _STAR_passes_STAR__orig_val__13342 = cljs.analyzer._STAR_passes_STAR_;
var _STAR_passes_STAR__temp_val__13343 = cljs.core.conj.call(null,cljs.analyzer._STAR_passes_STAR_,cljs.analyzer.replace_env_pass.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)], null)));
cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__temp_val__13343;

try{return cljs.analyzer.analyze.call(null,env__$1,new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(args));
}finally {cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__orig_val__13342;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
}})();
if(cljs.core.truth_(cljs.analyzer.constant_value_QMARK_.call(null,const_expr))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292),const_expr], null);
} else {
return null;
}
})():null),((dynamic === true)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true], null):null),cljs.analyzer.source_info.call(null,var_name,env__$1),(cljs.core.truth_(protocol)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),protocol], null):null),(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym__$1));
if(cljs.core.truth_(temp__5720__auto__)){
var protocol_symbol = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),protocol_symbol,new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,protocol_symbol)),new cljs.core.Keyword(null,"impls","impls",-1314014853),cljs.core.PersistentHashSet.EMPTY], null);
} else {
return null;
}
})(),((fn_var_QMARK_)?(function (){var params = cljs.core.map.call(null,((function (env__$1,var_name,init_expr,fn_var_QMARK_,tag__$1,export_as,doc,pfn,args,sym,const_QMARK_,sym_meta,tag,protocol,dynamic,ns_name,locals,clash_ns,sym_ns,sym__$1){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
return (function (p1__4778_SHARP_){
return cljs.core.vec.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(p1__4778_SHARP_)));
=======
return (function (p1__13336_SHARP_){
return cljs.core.vec.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(p1__13336_SHARP_)));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
});})(env__$1,var_name,init_expr,fn_var_QMARK_,tag__$1,export_as,doc,pfn,args,sym,const_QMARK_,sym_meta,tag,protocol,dynamic,ns_name,locals,clash_ns,sym_ns,sym__$1))
,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(init_expr));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),cljs.core.not.call(null,new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(sym_meta)),new cljs.core.Keyword(null,"protocol-impl","protocol-impl",2101328365),new cljs.core.Keyword(null,"protocol-impl","protocol-impl",2101328365).cljs$core$IFn$_invoke$arity$1(init_expr),new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556),new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(init_expr)], null),(function (){var temp__5722__auto__ = new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173).cljs$core$IFn$_invoke$arity$1(sym_meta);
if((temp__5722__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(init_expr),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(init_expr),new cljs.core.Keyword(null,"method-params","method-params",-980792179),params,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(sym_meta),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.meta,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(sym_meta)))], null);
} else {
var top_fn_meta = temp__5722__auto__;
return top_fn_meta;
}
})());
})():null),(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"declared","declared",92336021).cljs$core$IFn$_invoke$arity$1(sym_meta);
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(sym_meta);
} else {
return and__4120__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"declared","declared",92336021),true,new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),true,new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(sym_meta))], null):null),((((fn_var_QMARK_) && ((!((tag__$1 == null))))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990),tag__$1], null):(cljs.core.truth_(tag__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag__$1], null):null))));
} else {
}

return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"env","env",-1815813235),env__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"ns","ns",441598760),ns_name,new cljs.core.Keyword(null,"name","name",1843675177),var_name,new cljs.core.Keyword(null,"var","var",-769682797),cljs.core.assoc.call(null,cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,env__$1,new cljs.core.Keyword(null,"locals","locals",535295783)),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),new cljs.core.Keyword(null,"def-var","def-var",-698214377),true),sym__$1),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var","var",-769682797)),new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516),new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(sym_meta)], null),((new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env__$1) === true)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"var-ast","var-ast",1200379319),cljs.analyzer.var_ast.call(null,env__$1,sym__$1)], null):null),(function (){var temp__5724__auto__ = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(sym_meta);
if((temp__5724__auto__ == null)){
return null;
} else {
var test = temp__5724__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"test","test",577538877),cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env__$1,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),test)], null);
}
})(),(((!((tag__$1 == null))))?((fn_var_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990),tag__$1], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag__$1], null)):null),((dynamic === true)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true], null):null),(((!((export_as == null))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"export","export",214356590),export_as], null):null),(((!((init_expr == null))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),init_expr,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"init","init",-1875481434)], null)], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"var","var",-769682797)], null)], null)));
}));
cljs.analyzer.analyze_fn_method_param = (function cljs$analyzer$analyze_fn_method_param(env){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
return (function (p__4793,p__4794){
var vec__4795 = p__4793;
var locals = cljs.core.nth.call(null,vec__4795,(0),null);
var params = cljs.core.nth.call(null,vec__4795,(1),null);
var vec__4798 = p__4794;
var arg_id = cljs.core.nth.call(null,vec__4798,(0),null);
var name = cljs.core.nth.call(null,vec__4798,(1),null);
=======
return (function (p__13351,p__13352){
var vec__13353 = p__13351;
var locals = cljs.core.nth.call(null,vec__13353,(0),null);
var params = cljs.core.nth.call(null,vec__13353,(1),null);
var vec__13356 = p__13352;
var arg_id = cljs.core.nth.call(null,vec__13356,(0),null);
var name = cljs.core.nth.call(null,vec__13356,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
if(cljs.core.truth_(cljs.core.namespace.call(null,name))){
throw cljs.analyzer.error.call(null,env,["Can't use qualified name as parameter: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
} else {
}

var line = cljs.analyzer.get_line.call(null,name,env);
var column = cljs.analyzer.get_col.call(null,name,env);
var nmeta = cljs.core.meta.call(null,name);
var tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(nmeta);
var shadow = (((!((locals == null))))?cljs.analyzer.handle_symbol_local.call(null,name,locals.call(null,name)):null);
var env__$1 = cljs.core.merge.call(null,cljs.core.select_keys.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",-830191113)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null));
var param = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"arg-id","arg-id",-767177868),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"local","local",-1497766724)],[name,true,new cljs.core.Keyword(null,"binding","binding",539932593),env__$1,column,line,arg_id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"shadow","shadow",873231803),shadow], null),tag,shadow,new cljs.core.Keyword(null,"arg","arg",-1747261837)]);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,locals,name,param),cljs.core.conj.call(null,params,param)], null);
});
});
cljs.analyzer.analyze_fn_method_body = (function cljs$analyzer$analyze_fn_method_body(env,form,recur_frames){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var _STAR_recur_frames_STAR__orig_val__4801 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__4802 = recur_frames;
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__4802;

try{return cljs.analyzer.analyze.call(null,env,form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__4801;
=======
var _STAR_recur_frames_STAR__orig_val__13359 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__13360 = recur_frames;
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__13360;

try{return cljs.analyzer.analyze.call(null,env,form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__13359;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
}});
cljs.analyzer.analyze_fn_method = (function cljs$analyzer$analyze_fn_method(env,locals,form,type,analyze_body_QMARK_){
var param_names = cljs.core.first.call(null,form);
var variadic = cljs.core.boolean$.call(null,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),"null"], null), null),param_names));
var param_names__$1 = cljs.core.vec.call(null,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),"null"], null), null),param_names));
var body = cljs.core.next.call(null,form);
var step = cljs.analyzer.analyze_fn_method_param.call(null,env);
var step_init = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [locals,cljs.core.PersistentVector.EMPTY], null);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var vec__4803 = cljs.core.reduce.call(null,step,step_init,cljs.core.map_indexed.call(null,cljs.core.vector,param_names__$1));
var locals__$1 = cljs.core.nth.call(null,vec__4803,(0),null);
var params = cljs.core.nth.call(null,vec__4803,(1),null);
=======
var vec__13361 = cljs.core.reduce.call(null,step,step_init,cljs.core.map_indexed.call(null,cljs.core.vector,param_names__$1));
var locals__$1 = cljs.core.nth.call(null,vec__13361,(0),null);
var params = cljs.core.nth.call(null,vec__13361,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
var params_SINGLEQUOTE_ = ((variadic === true)?cljs.core.butlast.call(null,params):params);
var fixed_arity = cljs.core.count.call(null,params_SINGLEQUOTE_);
var recur_frame = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"protocol-impl","protocol-impl",2101328365),new cljs.core.Keyword(null,"protocol-impl","protocol-impl",2101328365).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"flag","flag",1088647881),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY)], null);
var recur_frames = cljs.core.cons.call(null,recur_frame,cljs.analyzer._STAR_recur_frames_STAR_);
var body_env = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"locals","locals",535295783),locals__$1);
var body_form = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body)));
var expr = (cljs.core.truth_(analyze_body_QMARK_)?cljs.analyzer.analyze_fn_method_body.call(null,body_env,body_form,recur_frames):null);
var recurs = cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(recur_frame));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"fn-method","fn-method",236100839),new cljs.core.Keyword(null,"variadic?","variadic?",584179762),variadic,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),fixed_arity,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"recurs","recurs",-1959309309),recurs], null),(((!((expr == null))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.assoc.call(null,expr,new cljs.core.Keyword(null,"body?","body?",-1333761917),true),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"body","body",-2049205669)], null)], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235)], null)], null)));
});
cljs.analyzer.fn_name_var = (function cljs$analyzer$fn_name_var(env,locals,name){
if((!((name == null)))){
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
var shadow = cljs.analyzer.handle_symbol_local.call(null,name,cljs.core.get.call(null,locals,name));
var shadow__$1 = (((shadow == null))?cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-globals","js-globals",1670394727),name], null)):null);
var fn_scope = new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859).cljs$core$IFn$_invoke$arity$1(env);
var name_var = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"local","local",-1497766724),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531),true,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859),fn_scope,new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"shadow","shadow",873231803),shadow__$1], null)], null);
var tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,name));
var ret_tag = (((!((tag == null))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990),tag], null):null);
return cljs.core.merge.call(null,name_var,ret_tag);
} else {
return null;
}
});
cljs.analyzer.analyze_fn_methods_pass2_STAR_ = (function cljs$analyzer$analyze_fn_methods_pass2_STAR_(menv,locals,type,meths){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
return cljs.core.mapv.call(null,(function (p1__4806_SHARP_){
return cljs.analyzer.analyze_fn_method.call(null,menv,locals,p1__4806_SHARP_,type,true);
=======
return cljs.core.mapv.call(null,(function (p1__13364_SHARP_){
return cljs.analyzer.analyze_fn_method.call(null,menv,locals,p1__13364_SHARP_,type,true);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
}),meths);
});
cljs.analyzer.analyze_fn_methods_pass2 = (function cljs$analyzer$analyze_fn_methods_pass2(menv,locals,type,meths){
return cljs.analyzer.analyze_fn_methods_pass2_STAR_.call(null,menv,locals,type,meths);
});
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),(function (op,env,p__4808,name,_){
var vec__4809 = p__4808;
var seq__4810 = cljs.core.seq.call(null,vec__4809);
var first__4811 = cljs.core.first.call(null,seq__4810);
var seq__4810__$1 = cljs.core.next.call(null,seq__4810);
var ___$1 = first__4811;
var args = seq__4810__$1;
var form = vec__4809;
var named_fn_QMARK_ = (cljs.core.first.call(null,args) instanceof cljs.core.Symbol);
var vec__4812 = ((named_fn_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args),cljs.core.next.call(null,args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,cljs.core.seq.call(null,args)], null));
var name__$1 = cljs.core.nth.call(null,vec__4812,(0),null);
var meths = cljs.core.nth.call(null,vec__4812,(1),null);
=======
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),(function (op,env,p__13366,name,_){
var vec__13367 = p__13366;
var seq__13368 = cljs.core.seq.call(null,vec__13367);
var first__13369 = cljs.core.first.call(null,seq__13368);
var seq__13368__$1 = cljs.core.next.call(null,seq__13368);
var ___$1 = first__13369;
var args = seq__13368__$1;
var form = vec__13367;
var named_fn_QMARK_ = (cljs.core.first.call(null,args) instanceof cljs.core.Symbol);
var vec__13370 = ((named_fn_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args),cljs.core.next.call(null,args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,cljs.core.seq.call(null,args)], null));
var name__$1 = cljs.core.nth.call(null,vec__13370,(0),null);
var meths = cljs.core.nth.call(null,vec__13370,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
var meths__$1 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths)))?(new cljs.core.List(null,meths,null,(1),null)):meths);
var locals = new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(env);
var name_var = cljs.analyzer.fn_name_var.call(null,env,locals,name__$1);
var env__$1 = (((!((name__$1 == null))))?cljs.core.update_in.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859)], null),cljs.core.conj,name_var):env);
var locals__$1 = (((((!((locals == null)))) && (named_fn_QMARK_)))?cljs.core.assoc.call(null,locals,name__$1,name_var):locals);
var form_meta = cljs.core.meta.call(null,form);
var type = new cljs.core.Keyword("cljs.analyzer","type","cljs.analyzer/type",478749742).cljs$core$IFn$_invoke$arity$1(form_meta);
var proto_impl = new cljs.core.Keyword("cljs.analyzer","protocol-impl","cljs.analyzer/protocol-impl",-1523935409).cljs$core$IFn$_invoke$arity$1(form_meta);
var proto_inline = new cljs.core.Keyword("cljs.analyzer","protocol-inline","cljs.analyzer/protocol-inline",-1611519026).cljs$core$IFn$_invoke$arity$1(form_meta);
var menv = (((cljs.core.count.call(null,meths__$1) > (1)))?cljs.core.assoc.call(null,env__$1,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)):env__$1);
var menv__$1 = cljs.core.merge.call(null,menv,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol-impl","protocol-impl",2101328365),proto_impl,new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556),proto_inline], null));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var methods$ = cljs.core.map.call(null,((function (named_fn_QMARK_,vec__4812,name__$1,meths,meths__$1,locals,name_var,env__$1,locals__$1,form_meta,type,proto_impl,proto_inline,menv,menv__$1,vec__4809,seq__4810,first__4811,seq__4810__$1,___$1,args,form){
return (function (p1__4807_SHARP_){
var _STAR_allow_ns_STAR__orig_val__4815 = cljs.analyzer._STAR_allow_ns_STAR_;
var _STAR_allow_ns_STAR__temp_val__4816 = false;
cljs.analyzer._STAR_allow_ns_STAR_ = _STAR_allow_ns_STAR__temp_val__4816;

try{return cljs.analyzer.analyze_fn_method.call(null,menv__$1,locals__$1,p1__4807_SHARP_,type,(name__$1 == null));
}finally {cljs.analyzer._STAR_allow_ns_STAR_ = _STAR_allow_ns_STAR__orig_val__4815;
}});})(named_fn_QMARK_,vec__4812,name__$1,meths,meths__$1,locals,name_var,env__$1,locals__$1,form_meta,type,proto_impl,proto_inline,menv,menv__$1,vec__4809,seq__4810,first__4811,seq__4810__$1,___$1,args,form))
=======
var methods$ = cljs.core.map.call(null,((function (named_fn_QMARK_,vec__13370,name__$1,meths,meths__$1,locals,name_var,env__$1,locals__$1,form_meta,type,proto_impl,proto_inline,menv,menv__$1,vec__13367,seq__13368,first__13369,seq__13368__$1,___$1,args,form){
return (function (p1__13365_SHARP_){
var _STAR_allow_ns_STAR__orig_val__13373 = cljs.analyzer._STAR_allow_ns_STAR_;
var _STAR_allow_ns_STAR__temp_val__13374 = false;
cljs.analyzer._STAR_allow_ns_STAR_ = _STAR_allow_ns_STAR__temp_val__13374;

try{return cljs.analyzer.analyze_fn_method.call(null,menv__$1,locals__$1,p1__13365_SHARP_,type,(name__$1 == null));
}finally {cljs.analyzer._STAR_allow_ns_STAR_ = _STAR_allow_ns_STAR__orig_val__13373;
}});})(named_fn_QMARK_,vec__13370,name__$1,meths,meths__$1,locals,name_var,env__$1,locals__$1,form_meta,type,proto_impl,proto_inline,menv,menv__$1,vec__13367,seq__13368,first__13369,seq__13368__$1,___$1,args,form))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
,meths__$1);
var mfa = cljs.core.transduce.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869)),cljs.core.max,(0),methods$);
var variadic = cljs.core.boolean$.call(null,cljs.core.some.call(null,new cljs.core.Keyword(null,"variadic?","variadic?",584179762),methods$));
var locals__$2 = ((named_fn_QMARK_)?cljs.core.update_in.call(null,locals__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null),cljs.core.assoc,new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),true,new cljs.core.Keyword(null,"variadic?","variadic?",584179762),variadic,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa,new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$)):locals__$1);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var methods$__$1 = (((!((name__$1 == null))))?(function (){var _STAR_allow_ns_STAR__orig_val__4817 = cljs.analyzer._STAR_allow_ns_STAR_;
var _STAR_allow_ns_STAR__temp_val__4818 = false;
cljs.analyzer._STAR_allow_ns_STAR_ = _STAR_allow_ns_STAR__temp_val__4818;

try{return cljs.analyzer.analyze_fn_methods_pass2.call(null,menv__$1,locals__$2,type,meths__$1);
}finally {cljs.analyzer._STAR_allow_ns_STAR_ = _STAR_allow_ns_STAR__orig_val__4817;
=======
var methods$__$1 = (((!((name__$1 == null))))?(function (){var _STAR_allow_ns_STAR__orig_val__13375 = cljs.analyzer._STAR_allow_ns_STAR_;
var _STAR_allow_ns_STAR__temp_val__13376 = false;
cljs.analyzer._STAR_allow_ns_STAR_ = _STAR_allow_ns_STAR__temp_val__13376;

try{return cljs.analyzer.analyze_fn_methods_pass2.call(null,menv__$1,locals__$2,type,meths__$1);
}finally {cljs.analyzer._STAR_allow_ns_STAR_ = _STAR_allow_ns_STAR__orig_val__13375;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
}})():cljs.core.vec.call(null,methods$));
var form__$1 = cljs.core.vary_meta.call(null,form,cljs.core.dissoc,new cljs.core.Keyword("cljs.analyzer","protocol-impl","cljs.analyzer/protocol-impl",-1523935409),new cljs.core.Keyword("cljs.analyzer","protocol-inline","cljs.analyzer/protocol-inline",-1611519026),new cljs.core.Keyword("cljs.analyzer","type","cljs.analyzer/type",478749742));
var js_doc = ((variadic === true)?"@param {...*} var_args":null);
var children = (((!((name_var == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"local","local",-1497766724),new cljs.core.Keyword(null,"methods","methods",453930866)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"methods","methods",453930866)], null));
var inferred_ret_tag = (function (){var inferred_tags = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.analyzer.infer_tag,env__$1),cljs.core.map.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),methods$__$1));
if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core._EQ_,inferred_tags))){
return cljs.core.first.call(null,inferred_tags);
} else {
return null;
}
})();
var ast = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185),new cljs.core.Keyword(null,"inferred-ret-tag","inferred-ret-tag",798934347),new cljs.core.Keyword(null,"protocol-impl","protocol-impl",2101328365),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"variadic?","variadic?",584179762),new cljs.core.Keyword(null,"methods","methods",453930866),new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)],[children,proto_inline,name_var,cljs.analyzer._STAR_loop_lets_STAR_,inferred_ret_tag,proto_impl,new cljs.core.Keyword(null,"fn","fn",-1175266204),env__$1,variadic,methods$__$1,cljs.analyzer._STAR_recur_frames_STAR_,mfa,form__$1,new cljs.core.Symbol(null,"function","function",-486723946,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [js_doc], null)]),(((!((name_var == null))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"local","local",-1497766724),name_var], null):null));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var variadic_methods_4819 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"variadic?","variadic?",584179762)),cljs.core.take.call(null,(1))),methods$__$1);
var variadic_params_4820 = (((cljs.core.count.call(null,variadic_methods_4819) > (0)))?cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,variadic_methods_4819,(0)))):(0));
var param_counts_4821 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.count,new cljs.core.Keyword(null,"params","params",710516235))),methods$__$1);
if(((1) < cljs.core.count.call(null,variadic_methods_4819))){
=======
var variadic_methods_13377 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"variadic?","variadic?",584179762)),cljs.core.take.call(null,(1))),methods$__$1);
var variadic_params_13378 = (((cljs.core.count.call(null,variadic_methods_13377) > (0)))?cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,variadic_methods_13377,(0)))):(0));
var param_counts_13379 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.count,new cljs.core.Keyword(null,"params","params",710516235))),methods$__$1);
if(((1) < cljs.core.count.call(null,variadic_methods_13377))){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),env__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name_var], null));
} else {
}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
if((!((((variadic_params_4820 === (0))) || ((variadic_params_4820 === ((1) + mfa))))))){
=======
if((!((((variadic_params_13378 === (0))) || ((variadic_params_13378 === ((1) + mfa))))))){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),env__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name_var], null));
} else {
}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
if(cljs.core.not_EQ_.call(null,cljs.core.distinct.call(null,param_counts_4821),param_counts_4821)){
=======
if(cljs.core.not_EQ_.call(null,cljs.core.distinct.call(null,param_counts_13379),param_counts_13379)){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),env__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name_var], null));
} else {
}

return cljs.analyzer.analyze_wrap_meta.call(null,ast);
}));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null),(function (op,env,p__4822,name,_){
var vec__4823 = p__4822;
var seq__4824 = cljs.core.seq.call(null,vec__4823);
var first__4825 = cljs.core.first.call(null,seq__4824);
var seq__4824__$1 = cljs.core.next.call(null,seq__4824);
var ___$1 = first__4825;
var first__4825__$1 = cljs.core.first.call(null,seq__4824__$1);
var seq__4824__$2 = cljs.core.next.call(null,seq__4824__$1);
var bindings = first__4825__$1;
var exprs = seq__4824__$2;
var form = vec__4823;
=======
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null),(function (op,env,p__13380,name,_){
var vec__13381 = p__13380;
var seq__13382 = cljs.core.seq.call(null,vec__13381);
var first__13383 = cljs.core.first.call(null,seq__13382);
var seq__13382__$1 = cljs.core.next.call(null,seq__13382);
var ___$1 = first__13383;
var first__13383__$1 = cljs.core.first.call(null,seq__13382__$1);
var seq__13382__$2 = cljs.core.next.call(null,seq__13382__$1);
var bindings = first__13383__$1;
var exprs = seq__13382__$2;
var form = vec__13381;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
if(((cljs.core.vector_QMARK_.call(null,bindings)) && (cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))))){
} else {
throw cljs.analyzer.error.call(null,env,"bindings must be vector of even number of elements");
}

var n__GT_fexpr = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.first,cljs.core.second),cljs.core.partition.call(null,(2),bindings)));
var names = cljs.core.keys.call(null,n__GT_fexpr);
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var vec__4826 = cljs.core.reduce.call(null,((function (n__GT_fexpr,names,context,vec__4823,seq__4824,first__4825,seq__4824__$1,___$1,first__4825__$1,seq__4824__$2,bindings,exprs,form){
return (function (p__4832,n){
var vec__4833 = p__4832;
var map__4836 = cljs.core.nth.call(null,vec__4833,(0),null);
var map__4836__$1 = (((((!((map__4836 == null))))?(((((map__4836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4836):map__4836);
var env__$1 = map__4836__$1;
var locals = cljs.core.get.call(null,map__4836__$1,new cljs.core.Keyword(null,"locals","locals",535295783));
var bes = cljs.core.nth.call(null,vec__4833,(1),null);
var ret_tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,n));
var fexpr = (function (){var _STAR_cljs_warnings_STAR__orig_val__4838 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__4839 = cljs.core.zipmap.call(null,cljs.core.keys.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.call(null,false));
cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__4839;

try{return cljs.analyzer.analyze.call(null,env__$1,n__GT_fexpr.call(null,n));
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__4838;
}})();
var be = (function (){var G__4840 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"variadic?","variadic?",584179762),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"local","local",-1497766724)],[n,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(fexpr)),new cljs.core.Keyword(null,"binding","binding",539932593),cljs.analyzer.get_col.call(null,n,env__$1),new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(fexpr),cljs.analyzer.get_line.call(null,n,env__$1),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(fexpr),true,cljs.analyzer.handle_symbol_local.call(null,n,locals.call(null,n)),new cljs.core.Keyword(null,"letfn","letfn",-2121022354)]);
if(cljs.core.truth_(ret_tag)){
return cljs.core.assoc.call(null,G__4840,new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990),ret_tag);
} else {
return G__4840;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_in.call(null,env__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",535295783),n], null),be),cljs.core.conj.call(null,bes,be)], null);
});})(n__GT_fexpr,names,context,vec__4823,seq__4824,first__4825,seq__4824__$1,___$1,first__4825__$1,seq__4824__$2,bindings,exprs,form))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,cljs.core.PersistentVector.EMPTY], null),names);
var meth_env = cljs.core.nth.call(null,vec__4826,(0),null);
var bes = cljs.core.nth.call(null,vec__4826,(1),null);
var meth_env__$1 = cljs.core.assoc.call(null,meth_env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var vec__4829 = cljs.core.reduce.call(null,((function (n__GT_fexpr,names,context,vec__4826,meth_env,bes,meth_env__$1,vec__4823,seq__4824,first__4825,seq__4824__$1,___$1,first__4825__$1,seq__4824__$2,bindings,exprs,form){
return (function (p__4841,p__4842){
var vec__4843 = p__4841;
var meth_env__$2 = cljs.core.nth.call(null,vec__4843,(0),null);
var bes__$1 = cljs.core.nth.call(null,vec__4843,(1),null);
var map__4846 = p__4842;
var map__4846__$1 = (((((!((map__4846 == null))))?(((((map__4846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4846):map__4846);
var be = map__4846__$1;
var name__$1 = cljs.core.get.call(null,map__4846__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var shadow = cljs.core.get.call(null,map__4846__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
=======
var vec__13384 = cljs.core.reduce.call(null,((function (n__GT_fexpr,names,context,vec__13381,seq__13382,first__13383,seq__13382__$1,___$1,first__13383__$1,seq__13382__$2,bindings,exprs,form){
return (function (p__13390,n){
var vec__13391 = p__13390;
var map__13394 = cljs.core.nth.call(null,vec__13391,(0),null);
var map__13394__$1 = (((((!((map__13394 == null))))?(((((map__13394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13394):map__13394);
var env__$1 = map__13394__$1;
var locals = cljs.core.get.call(null,map__13394__$1,new cljs.core.Keyword(null,"locals","locals",535295783));
var bes = cljs.core.nth.call(null,vec__13391,(1),null);
var ret_tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,n));
var fexpr = (function (){var _STAR_cljs_warnings_STAR__orig_val__13396 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__13397 = cljs.core.zipmap.call(null,cljs.core.keys.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.call(null,false));
cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__13397;

try{return cljs.analyzer.analyze.call(null,env__$1,n__GT_fexpr.call(null,n));
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__13396;
}})();
var be = (function (){var G__13398 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"variadic?","variadic?",584179762),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"local","local",-1497766724)],[n,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(fexpr)),new cljs.core.Keyword(null,"binding","binding",539932593),cljs.analyzer.get_col.call(null,n,env__$1),new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(fexpr),cljs.analyzer.get_line.call(null,n,env__$1),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(fexpr),true,cljs.analyzer.handle_symbol_local.call(null,n,locals.call(null,n)),new cljs.core.Keyword(null,"letfn","letfn",-2121022354)]);
if(cljs.core.truth_(ret_tag)){
return cljs.core.assoc.call(null,G__13398,new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990),ret_tag);
} else {
return G__13398;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_in.call(null,env__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",535295783),n], null),be),cljs.core.conj.call(null,bes,be)], null);
});})(n__GT_fexpr,names,context,vec__13381,seq__13382,first__13383,seq__13382__$1,___$1,first__13383__$1,seq__13382__$2,bindings,exprs,form))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,cljs.core.PersistentVector.EMPTY], null),names);
var meth_env = cljs.core.nth.call(null,vec__13384,(0),null);
var bes = cljs.core.nth.call(null,vec__13384,(1),null);
var meth_env__$1 = cljs.core.assoc.call(null,meth_env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var vec__13387 = cljs.core.reduce.call(null,((function (n__GT_fexpr,names,context,vec__13384,meth_env,bes,meth_env__$1,vec__13381,seq__13382,first__13383,seq__13382__$1,___$1,first__13383__$1,seq__13382__$2,bindings,exprs,form){
return (function (p__13399,p__13400){
var vec__13401 = p__13399;
var meth_env__$2 = cljs.core.nth.call(null,vec__13401,(0),null);
var bes__$1 = cljs.core.nth.call(null,vec__13401,(1),null);
var map__13404 = p__13400;
var map__13404__$1 = (((((!((map__13404 == null))))?(((((map__13404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13404):map__13404);
var be = map__13404__$1;
var name__$1 = cljs.core.get.call(null,map__13404__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var shadow = cljs.core.get.call(null,map__13404__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
var env__$1 = cljs.core.assoc_in.call(null,meth_env__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",535295783),name__$1], null),shadow);
var fexpr = cljs.analyzer.analyze.call(null,env__$1,n__GT_fexpr.call(null,name__$1));
var be_SINGLEQUOTE_ = cljs.core.assoc.call(null,be,new cljs.core.Keyword(null,"init","init",-1875481434),fexpr,new cljs.core.Keyword(null,"variadic?","variadic?",584179762),new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(fexpr),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(fexpr),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(fexpr)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_in.call(null,env__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",535295783),name__$1], null),be_SINGLEQUOTE_),cljs.core.conj.call(null,bes__$1,be_SINGLEQUOTE_)], null);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
});})(n__GT_fexpr,names,context,vec__4826,meth_env,bes,meth_env__$1,vec__4823,seq__4824,first__4825,seq__4824__$1,___$1,first__4825__$1,seq__4824__$2,bindings,exprs,form))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meth_env__$1,cljs.core.PersistentVector.EMPTY], null),bes);
var meth_env__$2 = cljs.core.nth.call(null,vec__4829,(0),null);
var bes__$1 = cljs.core.nth.call(null,vec__4829,(1),null);
=======
});})(n__GT_fexpr,names,context,vec__13384,meth_env,bes,meth_env__$1,vec__13381,seq__13382,first__13383,seq__13382__$1,___$1,first__13383__$1,seq__13382__$2,bindings,exprs,form))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meth_env__$1,cljs.core.PersistentVector.EMPTY], null),bes);
var meth_env__$2 = cljs.core.nth.call(null,vec__13387,(0),null);
var bes__$1 = cljs.core.nth.call(null,vec__13387,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
var expr = cljs.core.assoc.call(null,cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,meth_env__$2,new cljs.core.Keyword(null,"context","context",-830191113),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context))?new cljs.core.Keyword(null,"return","return",-1891502105):context)),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),exprs)))),new cljs.core.Keyword(null,"body?","body?",-1333761917),true);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"letfn","letfn",-2121022354),new cljs.core.Keyword(null,"bindings","bindings",1271397192),bes__$1,new cljs.core.Keyword(null,"body","body",-2049205669),expr,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"body","body",-2049205669)], null)], null);
}));
cljs.analyzer.analyze_do_statements_STAR_ = (function cljs$analyzer$analyze_do_statements_STAR_(env,exprs){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
return cljs.core.mapv.call(null,(function (p1__4848_SHARP_){
return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"statement","statement",-32780863)),p1__4848_SHARP_);
}),cljs.core.butlast.call(null,exprs));
});
cljs.analyzer.analyze_do_statements = (function cljs$analyzer$analyze_do_statements(env,exprs){
var _STAR_recur_frames_STAR__orig_val__4849 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__4850 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__4850;

try{return cljs.analyzer.analyze_do_statements_STAR_.call(null,env,exprs);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__4849;
}});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"do","do",1686842252,null),(function (op,env,p__4851,_,___$1){
var vec__4852 = p__4851;
var seq__4853 = cljs.core.seq.call(null,vec__4852);
var first__4854 = cljs.core.first.call(null,seq__4853);
var seq__4853__$1 = cljs.core.next.call(null,seq__4853);
var ___$2 = first__4854;
var exprs = seq__4853__$1;
var form = vec__4852;
=======
return cljs.core.mapv.call(null,(function (p1__13406_SHARP_){
return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"statement","statement",-32780863)),p1__13406_SHARP_);
}),cljs.core.butlast.call(null,exprs));
});
cljs.analyzer.analyze_do_statements = (function cljs$analyzer$analyze_do_statements(env,exprs){
var _STAR_recur_frames_STAR__orig_val__13407 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__13408 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__13408;

try{return cljs.analyzer.analyze_do_statements_STAR_.call(null,env,exprs);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__13407;
}});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"do","do",1686842252,null),(function (op,env,p__13409,_,___$1){
var vec__13410 = p__13409;
var seq__13411 = cljs.core.seq.call(null,vec__13410);
var first__13412 = cljs.core.first.call(null,seq__13411);
var seq__13411__$1 = cljs.core.next.call(null,seq__13411);
var ___$2 = first__13412;
var exprs = seq__13411__$1;
var form = vec__13410;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
var statements = cljs.analyzer.analyze_do_statements.call(null,env,exprs);
if((cljs.core.count.call(null,exprs) <= (1))){
var ret = cljs.analyzer.analyze.call(null,env,cljs.core.first.call(null,exprs));
var children = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"statements","statements",600349855),new cljs.core.Keyword(null,"ret","ret",-468222814)], null);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"do","do",46310725),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"statements","statements",600349855),statements,new cljs.core.Keyword(null,"ret","ret",-468222814),ret,new cljs.core.Keyword(null,"children","children",-940561982),children], null);
} else {
var ret_env = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env)))?cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"statement","statement",-32780863)):cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"return","return",-1891502105)));
var ret = cljs.analyzer.analyze.call(null,ret_env,cljs.core.last.call(null,exprs));
var children = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"statements","statements",600349855),new cljs.core.Keyword(null,"ret","ret",-468222814)], null);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"do","do",46310725),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"statements","statements",600349855),statements,new cljs.core.Keyword(null,"ret","ret",-468222814),ret,new cljs.core.Keyword(null,"children","children",-940561982),children], null);
}
}));
cljs.analyzer.analyze_let_binding_init = (function cljs$analyzer$analyze_let_binding_init(env,init,loop_lets){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var _STAR_loop_lets_STAR__orig_val__4855 = cljs.analyzer._STAR_loop_lets_STAR_;
var _STAR_loop_lets_STAR__temp_val__4856 = loop_lets;
cljs.analyzer._STAR_loop_lets_STAR_ = _STAR_loop_lets_STAR__temp_val__4856;

try{return cljs.analyzer.analyze.call(null,env,init);
}finally {cljs.analyzer._STAR_loop_lets_STAR_ = _STAR_loop_lets_STAR__orig_val__4855;
=======
var _STAR_loop_lets_STAR__orig_val__13413 = cljs.analyzer._STAR_loop_lets_STAR_;
var _STAR_loop_lets_STAR__temp_val__13414 = loop_lets;
cljs.analyzer._STAR_loop_lets_STAR_ = _STAR_loop_lets_STAR__temp_val__13414;

try{return cljs.analyzer.analyze.call(null,env,init);
}finally {cljs.analyzer._STAR_loop_lets_STAR_ = _STAR_loop_lets_STAR__orig_val__13413;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
}});
cljs.analyzer.get_let_tag = (function cljs$analyzer$get_let_tag(name,init_expr){
var temp__5722__auto__ = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,name));
if((temp__5722__auto__ == null)){
var temp__5722__auto____$1 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(init_expr);
if((temp__5722__auto____$1 == null)){
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(init_expr));
} else {
var tag = temp__5722__auto____$1;
return tag;
}
} else {
var tag = temp__5722__auto__;
return tag;
}
});
cljs.analyzer.analyze_let_bindings_STAR_ = (function cljs$analyzer$analyze_let_bindings_STAR_(encl_env,bindings,op){
var bes = cljs.core.PersistentVector.EMPTY;
var env = cljs.core.assoc.call(null,encl_env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var bindings__$1 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),bindings));
while(true){
var temp__5722__auto__ = cljs.core.first.call(null,bindings__$1);
if((temp__5722__auto__ == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bes,env], null);
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var vec__4861 = temp__5722__auto__;
var name = cljs.core.nth.call(null,vec__4861,(0),null);
var init = cljs.core.nth.call(null,vec__4861,(1),null);
=======
var vec__13419 = temp__5722__auto__;
var name = cljs.core.nth.call(null,vec__13419,(0),null);
var init = cljs.core.nth.call(null,vec__13419,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
if((((!((cljs.core.namespace.call(null,name) == null)))) || (goog.string.contains(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),".")))){
throw cljs.analyzer.error.call(null,encl_env,["Invalid local name: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
} else {
}

var init_expr = cljs.analyzer.analyze_let_binding_init.call(null,env,init,cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),bes], null),cljs.analyzer._STAR_loop_lets_STAR_));
var line = cljs.analyzer.get_line.call(null,name,env);
var col = cljs.analyzer.get_col.call(null,name,env);
var shadow = cljs.analyzer.handle_symbol_local.call(null,name,cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",535295783),name], null)));
var be = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"local","local",-1497766724)],[init_expr,name,true,new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null),col,line,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"shadow","shadow",873231803),shadow], null),cljs.analyzer.get_let_tag.call(null,name,init_expr),shadow,op]);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var be__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(init_expr)))?cljs.core.merge.call(null,be,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),true,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (bes,env,bindings__$1,init_expr,line,col,shadow,be,vec__4861,name,init,temp__5722__auto__){
return (function (p1__4857_SHARP_){
return cljs.core.select_keys.call(null,p1__4857_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),new cljs.core.Keyword(null,"variadic?","variadic?",584179762)], null));
});})(bes,env,bindings__$1,init_expr,line,col,shadow,be,vec__4861,name,init,temp__5722__auto__))
,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(init_expr))),new cljs.core.Keyword(null,"variadic?","variadic?",584179762),new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(init_expr),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(init_expr),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(init_expr))], null)):be);
var be__$2 = cljs.analyzer.add_identity.call(null,be__$1);
var G__4864 = cljs.core.conj.call(null,bes,be__$2);
var G__4865 = cljs.core.assoc_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",535295783),name], null),be__$2);
var G__4866 = cljs.core.next.call(null,bindings__$1);
bes = G__4864;
env = G__4865;
bindings__$1 = G__4866;
=======
var be__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(init_expr)))?cljs.core.merge.call(null,be,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),true,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (bes,env,bindings__$1,init_expr,line,col,shadow,be,vec__13419,name,init,temp__5722__auto__){
return (function (p1__13415_SHARP_){
return cljs.core.select_keys.call(null,p1__13415_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),new cljs.core.Keyword(null,"variadic?","variadic?",584179762)], null));
});})(bes,env,bindings__$1,init_expr,line,col,shadow,be,vec__13419,name,init,temp__5722__auto__))
,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(init_expr))),new cljs.core.Keyword(null,"variadic?","variadic?",584179762),new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(init_expr),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(init_expr),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(init_expr))], null)):be);
var be__$2 = cljs.analyzer.add_identity.call(null,be__$1);
var G__13422 = cljs.core.conj.call(null,bes,be__$2);
var G__13423 = cljs.core.assoc_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",535295783),name], null),be__$2);
var G__13424 = cljs.core.next.call(null,bindings__$1);
bes = G__13422;
env = G__13423;
bindings__$1 = G__13424;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
continue;
}
break;
}
});
cljs.analyzer.analyze_let_bindings = (function cljs$analyzer$analyze_let_bindings(encl_env,bindings,op){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var _STAR_recur_frames_STAR__orig_val__4867 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__4868 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__4868;

try{return cljs.analyzer.analyze_let_bindings_STAR_.call(null,encl_env,bindings,op);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__4867;
=======
var _STAR_recur_frames_STAR__orig_val__13425 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__13426 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__13426;

try{return cljs.analyzer.analyze_let_bindings_STAR_.call(null,encl_env,bindings,op);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__13425;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
}});
cljs.analyzer.analyze_let_body_STAR_ = (function cljs$analyzer$analyze_let_body_STAR_(env,context,exprs){
return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context))?new cljs.core.Keyword(null,"return","return",-1891502105):context)),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),exprs))));
});
cljs.analyzer.analyze_let_body = (function cljs$analyzer$analyze_let_body(env,context,exprs,recur_frames,loop_lets){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var _STAR_recur_frames_STAR__orig_val__4869 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_loop_lets_STAR__orig_val__4870 = cljs.analyzer._STAR_loop_lets_STAR_;
var _STAR_recur_frames_STAR__temp_val__4871 = recur_frames;
var _STAR_loop_lets_STAR__temp_val__4872 = loop_lets;
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__4871;

cljs.analyzer._STAR_loop_lets_STAR_ = _STAR_loop_lets_STAR__temp_val__4872;

try{return cljs.analyzer.analyze_let_body_STAR_.call(null,env,context,exprs);
}finally {cljs.analyzer._STAR_loop_lets_STAR_ = _STAR_loop_lets_STAR__orig_val__4870;

cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__4869;
}});
cljs.analyzer.analyze_let = (function cljs$analyzer$analyze_let(encl_env,p__4873,is_loop,widened_tags){
while(true){
var vec__4874 = p__4873;
var seq__4875 = cljs.core.seq.call(null,vec__4874);
var first__4876 = cljs.core.first.call(null,seq__4875);
var seq__4875__$1 = cljs.core.next.call(null,seq__4875);
var _ = first__4876;
var first__4876__$1 = cljs.core.first.call(null,seq__4875__$1);
var seq__4875__$2 = cljs.core.next.call(null,seq__4875__$1);
var bindings = first__4876__$1;
var exprs = seq__4875__$2;
var form = vec__4874;
=======
var _STAR_recur_frames_STAR__orig_val__13427 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_loop_lets_STAR__orig_val__13428 = cljs.analyzer._STAR_loop_lets_STAR_;
var _STAR_recur_frames_STAR__temp_val__13429 = recur_frames;
var _STAR_loop_lets_STAR__temp_val__13430 = loop_lets;
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__13429;

cljs.analyzer._STAR_loop_lets_STAR_ = _STAR_loop_lets_STAR__temp_val__13430;

try{return cljs.analyzer.analyze_let_body_STAR_.call(null,env,context,exprs);
}finally {cljs.analyzer._STAR_loop_lets_STAR_ = _STAR_loop_lets_STAR__orig_val__13428;

cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__13427;
}});
cljs.analyzer.analyze_let = (function cljs$analyzer$analyze_let(encl_env,p__13431,is_loop,widened_tags){
while(true){
var vec__13432 = p__13431;
var seq__13433 = cljs.core.seq.call(null,vec__13432);
var first__13434 = cljs.core.first.call(null,seq__13433);
var seq__13433__$1 = cljs.core.next.call(null,seq__13433);
var _ = first__13434;
var first__13434__$1 = cljs.core.first.call(null,seq__13433__$1);
var seq__13433__$2 = cljs.core.next.call(null,seq__13433__$1);
var bindings = first__13434__$1;
var exprs = seq__13433__$2;
var form = vec__13432;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
if(((cljs.core.vector_QMARK_.call(null,bindings)) && (cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))))){
} else {
throw cljs.analyzer.error.call(null,encl_env,"bindings must be vector of even number of elements");
}

var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(encl_env);
var op = ((is_loop === true)?new cljs.core.Keyword(null,"loop","loop",-395552849):new cljs.core.Keyword(null,"let","let",-1282412701));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var bindings__$1 = (cljs.core.truth_(widened_tags)?cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (encl_env,p__4873,is_loop,widened_tags,context,op,vec__4874,seq__4875,first__4876,seq__4875__$1,_,first__4876__$1,seq__4875__$2,bindings,exprs,form){
return (function (p__4880,widened_tag){
var vec__4881 = p__4880;
var name = cljs.core.nth.call(null,vec__4881,(0),null);
var init = cljs.core.nth.call(null,vec__4881,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.call(null,name,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),widened_tag),init], null);
});})(encl_env,p__4873,is_loop,widened_tags,context,op,vec__4874,seq__4875,first__4876,seq__4875__$1,_,first__4876__$1,seq__4875__$2,bindings,exprs,form))
,cljs.core.partition.call(null,(2),bindings),widened_tags)):bindings);
var vec__4877 = cljs.analyzer.analyze_let_bindings.call(null,encl_env,bindings__$1,op);
var bes = cljs.core.nth.call(null,vec__4877,(0),null);
var env = cljs.core.nth.call(null,vec__4877,(1),null);
=======
var bindings__$1 = (cljs.core.truth_(widened_tags)?cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (encl_env,p__13431,is_loop,widened_tags,context,op,vec__13432,seq__13433,first__13434,seq__13433__$1,_,first__13434__$1,seq__13433__$2,bindings,exprs,form){
return (function (p__13438,widened_tag){
var vec__13439 = p__13438;
var name = cljs.core.nth.call(null,vec__13439,(0),null);
var init = cljs.core.nth.call(null,vec__13439,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.call(null,name,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),widened_tag),init], null);
});})(encl_env,p__13431,is_loop,widened_tags,context,op,vec__13432,seq__13433,first__13434,seq__13433__$1,_,first__13434__$1,seq__13433__$2,bindings,exprs,form))
,cljs.core.partition.call(null,(2),bindings),widened_tags)):bindings);
var vec__13435 = cljs.analyzer.analyze_let_bindings.call(null,encl_env,bindings__$1,op);
var bes = cljs.core.nth.call(null,vec__13435,(0),null);
var env = cljs.core.nth.call(null,vec__13435,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
var recur_frame = ((is_loop === true)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),bes,new cljs.core.Keyword(null,"flag","flag",1088647881),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.atom.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),bes))], null):null);
var recur_frames = (cljs.core.truth_(recur_frame)?cljs.core.cons.call(null,recur_frame,cljs.analyzer._STAR_recur_frames_STAR_):cljs.analyzer._STAR_recur_frames_STAR_);
var loop_lets = ((is_loop === true)?cljs.analyzer._STAR_loop_lets_STAR_:(((!((cljs.analyzer._STAR_loop_lets_STAR_ == null))))?cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),bes], null),cljs.analyzer._STAR_loop_lets_STAR_):null));
var warn_acc = (cljs.core.truth_((function (){var and__4120__auto__ = is_loop;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,widened_tags);
} else {
return and__4120__auto__;
}
})())?cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY):null);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var expr = (cljs.core.truth_(warn_acc)?(function (){var _STAR_cljs_warning_handlers_STAR__orig_val__4884 = cljs.analyzer._STAR_cljs_warning_handlers_STAR_;
var _STAR_cljs_warning_handlers_STAR__temp_val__4885 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.accumulating_warning_handler.call(null,warn_acc)], null);
cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__temp_val__4885;

try{return cljs.analyzer.analyze_let_body.call(null,env,context,exprs,recur_frames,loop_lets);
}finally {cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__orig_val__4884;
=======
var expr = (cljs.core.truth_(warn_acc)?(function (){var _STAR_cljs_warning_handlers_STAR__orig_val__13442 = cljs.analyzer._STAR_cljs_warning_handlers_STAR_;
var _STAR_cljs_warning_handlers_STAR__temp_val__13443 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.accumulating_warning_handler.call(null,warn_acc)], null);
cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__temp_val__13443;

try{return cljs.analyzer.analyze_let_body.call(null,env,context,exprs,recur_frames,loop_lets);
}finally {cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__orig_val__13442;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
}})():cljs.analyzer.analyze_let_body.call(null,env,context,exprs,recur_frames,loop_lets));
var children = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"body","body",-2049205669)], null);
var nil__GT_any = cljs.core.fnil.call(null,cljs.core.identity,new cljs.core.Symbol(null,"any","any",-948528346,null));
if(cljs.core.truth_((function (){var and__4120__auto__ = is_loop;
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,widened_tags)) && (cljs.core.not_EQ_.call(null,cljs.core.mapv.call(null,nil__GT_any,cljs.core.deref.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(recur_frame))),cljs.core.mapv.call(null,cljs.core.comp.call(null,nil__GT_any,new cljs.core.Keyword(null,"tag","tag",-1290361223)),bes))));
} else {
return and__4120__auto__;
}
})())){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__4886 = encl_env;
var G__4887 = form;
var G__4888 = is_loop;
var G__4889 = cljs.core.deref.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(recur_frame));
encl_env = G__4886;
p__4873 = G__4887;
is_loop = G__4888;
widened_tags = G__4889;
=======
var G__13444 = encl_env;
var G__13445 = form;
var G__13446 = is_loop;
var G__13447 = cljs.core.deref.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(recur_frame));
encl_env = G__13444;
p__13431 = G__13445;
is_loop = G__13446;
widened_tags = G__13447;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
continue;
} else {
if(cljs.core.truth_(warn_acc)){
cljs.analyzer.replay_accumulated_warnings.call(null,warn_acc);
} else {
}

return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),op,new cljs.core.Keyword(null,"env","env",-1815813235),encl_env,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bes,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.assoc.call(null,expr,new cljs.core.Keyword(null,"body?","body?",-1333761917),true),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"children","children",-940561982),children], null);
}
break;
}
});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"let*","let*",1920721458,null),(function (op,encl_env,form,_,___$1){
return cljs.analyzer.analyze_let.call(null,encl_env,form,false,null);
}));
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"loop*","loop*",615029416,null),(function (op,encl_env,form,_,___$1){
return cljs.analyzer.analyze_let.call(null,encl_env,form,true,null);
}));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"recur","recur",1202958259,null),(function (op,env,p__4891,_,___$1){
var vec__4892 = p__4891;
var seq__4893 = cljs.core.seq.call(null,vec__4892);
var first__4894 = cljs.core.first.call(null,seq__4893);
var seq__4893__$1 = cljs.core.next.call(null,seq__4893);
var ___$2 = first__4894;
var exprs = seq__4893__$1;
var form = vec__4892;
=======
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"recur","recur",1202958259,null),(function (op,env,p__13449,_,___$1){
var vec__13450 = p__13449;
var seq__13451 = cljs.core.seq.call(null,vec__13450);
var first__13452 = cljs.core.first.call(null,seq__13451);
var seq__13451__$1 = cljs.core.next.call(null,seq__13451);
var ___$2 = first__13452;
var exprs = seq__13451__$1;
var form = vec__13450;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var frame = cljs.core.first.call(null,cljs.analyzer._STAR_recur_frames_STAR_);
var add_implicit_target_object_QMARK_ = (function (){var and__4120__auto__ = new cljs.core.Keyword(null,"protocol-impl","protocol-impl",2101328365).cljs$core$IFn$_invoke$arity$1(frame);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,exprs),(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame)) - (1)));
} else {
return and__4120__auto__;
}
})();
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var exprs__$1 = (function (){var G__4895 = exprs;
if(cljs.core.truth_(add_implicit_target_object_QMARK_)){
return cljs.core.cons.call(null,null,G__4895);
} else {
return G__4895;
}
})();
var exprs__$2 = (function (){var _STAR_recur_frames_STAR__orig_val__4896 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__4897 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__4897;

try{return cljs.core.vec.call(null,cljs.core.map.call(null,((function (_STAR_recur_frames_STAR__orig_val__4896,_STAR_recur_frames_STAR__temp_val__4897,context,frame,add_implicit_target_object_QMARK_,exprs__$1,vec__4892,seq__4893,first__4894,seq__4893__$1,___$2,exprs,form){
return (function (p1__4890_SHARP_){
return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),p1__4890_SHARP_);
});})(_STAR_recur_frames_STAR__orig_val__4896,_STAR_recur_frames_STAR__temp_val__4897,context,frame,add_implicit_target_object_QMARK_,exprs__$1,vec__4892,seq__4893,first__4894,seq__4893__$1,___$2,exprs,form))
,exprs__$1));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__4896;
=======
var exprs__$1 = (function (){var G__13453 = exprs;
if(cljs.core.truth_(add_implicit_target_object_QMARK_)){
return cljs.core.cons.call(null,null,G__13453);
} else {
return G__13453;
}
})();
var exprs__$2 = (function (){var _STAR_recur_frames_STAR__orig_val__13454 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__13455 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__13455;

try{return cljs.core.vec.call(null,cljs.core.map.call(null,((function (_STAR_recur_frames_STAR__orig_val__13454,_STAR_recur_frames_STAR__temp_val__13455,context,frame,add_implicit_target_object_QMARK_,exprs__$1,vec__13450,seq__13451,first__13452,seq__13451__$1,___$2,exprs,form){
return (function (p1__13448_SHARP_){
return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),p1__13448_SHARP_);
});})(_STAR_recur_frames_STAR__orig_val__13454,_STAR_recur_frames_STAR__temp_val__13455,context,frame,add_implicit_target_object_QMARK_,exprs__$1,vec__13450,seq__13451,first__13452,seq__13451__$1,___$2,exprs,form))
,exprs__$1));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__13454;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
}})();
if(cljs.core.truth_(frame)){
} else {
throw cljs.analyzer.error.call(null,env,"Can't recur here");
}

if(cljs.core._EQ_.call(null,cljs.core.count.call(null,exprs__$2),cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame)))){
} else {
throw cljs.analyzer.error.call(null,env,["recur argument count mismatch, expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame)))," args, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,exprs__$2))].join(''));
}

if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"protocol-impl","protocol-impl",2101328365).cljs$core$IFn$_invoke$arity$1(frame);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,add_implicit_target_object_QMARK_);
} else {
return and__4120__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,exprs__$2))], null));
} else {
}

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(frame),true);

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(frame),((function (context,frame,add_implicit_target_object_QMARK_,exprs__$1,exprs__$2,vec__4892,seq__4893,first__4894,seq__4893__$1,___$2,exprs,form){
return (function (tags){
return cljs.core.mapv.call(null,((function (context,frame,add_implicit_target_object_QMARK_,exprs__$1,exprs__$2,vec__4892,seq__4893,first__4894,seq__4893__$1,___$2,exprs,form){
return (function (tag,expr){
return cljs.analyzer.add_types.call(null,tag,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(expr));
});})(context,frame,add_implicit_target_object_QMARK_,exprs__$1,exprs__$2,vec__4892,seq__4893,first__4894,seq__4893__$1,___$2,exprs,form))
,tags,exprs__$2);
});})(context,frame,add_implicit_target_object_QMARK_,exprs__$1,exprs__$2,vec__4892,seq__4893,first__4894,seq__4893__$1,___$2,exprs,form))
=======
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(frame),((function (context,frame,add_implicit_target_object_QMARK_,exprs__$1,exprs__$2,vec__13450,seq__13451,first__13452,seq__13451__$1,___$2,exprs,form){
return (function (tags){
return cljs.core.mapv.call(null,((function (context,frame,add_implicit_target_object_QMARK_,exprs__$1,exprs__$2,vec__13450,seq__13451,first__13452,seq__13451__$1,___$2,exprs,form){
return (function (tag,expr){
return cljs.analyzer.add_types.call(null,tag,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(expr));
});})(context,frame,add_implicit_target_object_QMARK_,exprs__$1,exprs__$2,vec__13450,seq__13451,first__13452,seq__13451__$1,___$2,exprs,form))
,tags,exprs__$2);
});})(context,frame,add_implicit_target_object_QMARK_,exprs__$1,exprs__$2,vec__13450,seq__13451,first__13452,seq__13451__$1,___$2,exprs,form))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
);

return cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"recur","recur",-437573268),new cljs.core.Keyword(null,"form","form",-1624062471),form], null),new cljs.core.Keyword(null,"frame","frame",-1711082588),frame,new cljs.core.Keyword(null,"exprs","exprs",1795829094),exprs__$2,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exprs","exprs",1795829094)], null));
}));
cljs.analyzer.analyze_const = (function cljs$analyzer$analyze_const(env,form){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var map__4898 = cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"quoted?","quoted?",1464649621),true),form);
var map__4898__$1 = (((((!((map__4898 == null))))?(((((map__4898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4898):map__4898);
var tag = cljs.core.get.call(null,map__4898__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"literal?","literal?",352485871),true,new cljs.core.Keyword(null,"val","val",128701612),form,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"form","form",-1624062471),form], null);
});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(function (_,env,p__4900,___$1,___$2){
var vec__4901 = p__4900;
var ___$3 = cljs.core.nth.call(null,vec__4901,(0),null);
var x = cljs.core.nth.call(null,vec__4901,(1),null);
var form = vec__4901;
=======
var map__13456 = cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"quoted?","quoted?",1464649621),true),form);
var map__13456__$1 = (((((!((map__13456 == null))))?(((((map__13456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13456):map__13456);
var tag = cljs.core.get.call(null,map__13456__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"literal?","literal?",352485871),true,new cljs.core.Keyword(null,"val","val",128701612),form,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"form","form",-1624062471),form], null);
});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(function (_,env,p__13458,___$1,___$2){
var vec__13459 = p__13458;
var ___$3 = cljs.core.nth.call(null,vec__13459,(0),null);
var x = cljs.core.nth.call(null,vec__13459,(1),null);
var form = vec__13459;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
if(cljs.core.not_EQ_.call(null,(2),cljs.core.count.call(null,form))){
throw cljs.analyzer.error.call(null,env,"Wrong number of args to quote");
} else {
}

var expr = cljs.analyzer.analyze_const.call(null,env,x);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"expr","expr",745722291),expr,new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(expr),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expr","expr",745722291)], null)], null);
}));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"new","new",-444906321,null),(function (_,env,p__4905,___$1,___$2){
var vec__4906 = p__4905;
var seq__4907 = cljs.core.seq.call(null,vec__4906);
var first__4908 = cljs.core.first.call(null,seq__4907);
var seq__4907__$1 = cljs.core.next.call(null,seq__4907);
var ___$3 = first__4908;
var first__4908__$1 = cljs.core.first.call(null,seq__4907__$1);
var seq__4907__$2 = cljs.core.next.call(null,seq__4907__$1);
var ctor = first__4908__$1;
var args = seq__4907__$2;
var form = vec__4906;
var _STAR_recur_frames_STAR__orig_val__4909 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__4910 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__4910;
=======
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"new","new",-444906321,null),(function (_,env,p__13463,___$1,___$2){
var vec__13464 = p__13463;
var seq__13465 = cljs.core.seq.call(null,vec__13464);
var first__13466 = cljs.core.first.call(null,seq__13465);
var seq__13465__$1 = cljs.core.next.call(null,seq__13465);
var ___$3 = first__13466;
var first__13466__$1 = cljs.core.first.call(null,seq__13465__$1);
var seq__13465__$2 = cljs.core.next.call(null,seq__13465__$1);
var ctor = first__13466__$1;
var args = seq__13465__$2;
var form = vec__13464;
var _STAR_recur_frames_STAR__orig_val__13467 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__13468 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__13468;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js

try{var enve = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var ctorexpr = cljs.analyzer.analyze.call(null,enve,ctor);
var ctor_var = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ctorexpr)))?cljs.analyzer.resolve_existing_var.call(null,env,ctor):null);
var record_args = (cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"record","record",-779106859).cljs$core$IFn$_invoke$arity$1(ctor_var);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ctor)));
} else {
return and__4120__auto__;
}
})())?cljs.core.repeat.call(null,(3),cljs.analyzer.analyze.call(null,enve,null)):null);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var argexprs = cljs.core.into.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,((function (enve,ctorexpr,ctor_var,record_args,_STAR_recur_frames_STAR__orig_val__4909,_STAR_recur_frames_STAR__temp_val__4910,vec__4906,seq__4907,first__4908,seq__4907__$1,___$3,first__4908__$1,seq__4907__$2,ctor,args,form){
return (function (p1__4904_SHARP_){
return cljs.analyzer.analyze.call(null,enve,p1__4904_SHARP_);
});})(enve,ctorexpr,ctor_var,record_args,_STAR_recur_frames_STAR__orig_val__4909,_STAR_recur_frames_STAR__temp_val__4910,vec__4906,seq__4907,first__4908,seq__4907__$1,___$3,first__4908__$1,seq__4907__$2,ctor,args,form))
=======
var argexprs = cljs.core.into.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,((function (enve,ctorexpr,ctor_var,record_args,_STAR_recur_frames_STAR__orig_val__13467,_STAR_recur_frames_STAR__temp_val__13468,vec__13464,seq__13465,first__13466,seq__13465__$1,___$3,first__13466__$1,seq__13465__$2,ctor,args,form){
return (function (p1__13462_SHARP_){
return cljs.analyzer.analyze.call(null,enve,p1__13462_SHARP_);
});})(enve,ctorexpr,ctor_var,record_args,_STAR_recur_frames_STAR__orig_val__13467,_STAR_recur_frames_STAR__temp_val__13468,vec__13464,seq__13465,first__13466,seq__13465__$1,___$3,first__13466__$1,seq__13465__$2,ctor,args,form))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
,args)),record_args);
var known_num_fields = new cljs.core.Keyword(null,"num-fields","num-fields",1529154024).cljs$core$IFn$_invoke$arity$1(ctor_var);
var argc = cljs.core.count.call(null,args);
if(((cljs.core.not.call(null,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ctor)))) && ((!((known_num_fields == null)))) && (cljs.core.not_EQ_.call(null,known_num_fields,argc)))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"argc","argc",-1452839519),argc,new cljs.core.Keyword(null,"ctor","ctor",1750864802),ctor], null));
} else {
}

return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"new","new",-2085437848),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"class","class",-2030961996),ctorexpr,new cljs.core.Keyword(null,"args","args",1315556576),argexprs,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"args","args",1315556576)], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),(function (){var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ctorexpr));
var or__4131__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("js","Object","js/Object",61215323,null),new cljs.core.Symbol(null,"object","object",-1179821820,null),new cljs.core.Symbol("js","String","js/String",-2070054036,null),new cljs.core.Symbol(null,"string","string",-349010059,null),new cljs.core.Symbol("js","Array","js/Array",-423508366,null),new cljs.core.Symbol(null,"array","array",-440182315,null),new cljs.core.Symbol("js","Number","js/Number",-508133572,null),new cljs.core.Symbol(null,"number","number",-1084057331,null),new cljs.core.Symbol("js","Function","js/Function",-749892063,null),new cljs.core.Symbol(null,"function","function",-486723946,null),new cljs.core.Symbol("js","Boolean","js/Boolean",1661145260,null),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return name;
}
})()], null);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__4909;
}}));
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"set!","set!",250714521,null),(function (_,env,p__4911,___$1,___$2){
var vec__4912 = p__4911;
var ___$3 = cljs.core.nth.call(null,vec__4912,(0),null);
var target = cljs.core.nth.call(null,vec__4912,(1),null);
var val = cljs.core.nth.call(null,vec__4912,(2),null);
var alt = cljs.core.nth.call(null,vec__4912,(3),null);
var form = vec__4912;
var vec__4915 = (cljs.core.truth_(alt)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,target,null,(1),null)),(new cljs.core.List(null,val,null,(1),null))))),alt], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,val], null));
var target__$1 = cljs.core.nth.call(null,vec__4915,(0),null);
var val__$1 = cljs.core.nth.call(null,vec__4915,(1),null);
var _STAR_recur_frames_STAR__orig_val__4918 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__4919 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__4919;

try{var _STAR_private_var_access_nowarn_STAR__orig_val__4920 = cljs.analyzer._STAR_private_var_access_nowarn_STAR_;
var _STAR_private_var_access_nowarn_STAR__temp_val__4921 = true;
cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__temp_val__4921;
=======
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__13467;
}}));
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"set!","set!",250714521,null),(function (_,env,p__13469,___$1,___$2){
var vec__13470 = p__13469;
var ___$3 = cljs.core.nth.call(null,vec__13470,(0),null);
var target = cljs.core.nth.call(null,vec__13470,(1),null);
var val = cljs.core.nth.call(null,vec__13470,(2),null);
var alt = cljs.core.nth.call(null,vec__13470,(3),null);
var form = vec__13470;
var vec__13473 = (cljs.core.truth_(alt)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,target,null,(1),null)),(new cljs.core.List(null,val,null,(1),null))))),alt], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,val], null));
var target__$1 = cljs.core.nth.call(null,vec__13473,(0),null);
var val__$1 = cljs.core.nth.call(null,vec__13473,(1),null);
var _STAR_recur_frames_STAR__orig_val__13476 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__13477 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__13477;

try{var _STAR_private_var_access_nowarn_STAR__orig_val__13478 = cljs.analyzer._STAR_private_var_access_nowarn_STAR_;
var _STAR_private_var_access_nowarn_STAR__temp_val__13479 = true;
cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__temp_val__13479;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js

try{var enve = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var texpr = (((target__$1 instanceof cljs.core.Symbol))?(function (){
if(((cljs.core._EQ_.call(null,target__$1,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null))) && (((val__$1 === true) || (val__$1 === false))))){
} else {
if(((cljs.core._EQ_.call(null,target__$1,new cljs.core.Symbol(null,"*unchecked-arrays*","*unchecked-arrays*",-381849911,null))) && (((val__$1 === true) || (val__$1 === false))))){
} else {
if(((cljs.core._EQ_.call(null,target__$1,new cljs.core.Symbol(null,"*warn-on-infer*","*warn-on-infer*",1890277318,null))) && (((val__$1 === true) || (val__$1 === false))))){
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.assoc.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_,new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),val__$1);
} else {
}
}
}

if((!((new cljs.core.Keyword(null,"const","const",1709929842).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),target__$1)) == null)))){
throw cljs.analyzer.error.call(null,env,"Can't set! a constant");
} else {
}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var local_4923 = cljs.analyzer.handle_symbol_local.call(null,target__$1,target__$1.call(null,new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(env)));
if(cljs.core.truth_((function (){var or__4131__auto__ = (local_4923 == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var and__4120__auto__ = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(local_4923);
if(cljs.core.truth_(and__4120__auto__)){
var or__4131__auto____$1 = new cljs.core.Keyword(null,"mutable","mutable",875778266).cljs$core$IFn$_invoke$arity$1(local_4923);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950).cljs$core$IFn$_invoke$arity$1(local_4923);
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411).cljs$core$IFn$_invoke$arity$1(local_4923);
=======
var local_13481 = cljs.analyzer.handle_symbol_local.call(null,target__$1,target__$1.call(null,new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(env)));
if(cljs.core.truth_((function (){var or__4131__auto__ = (local_13481 == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var and__4120__auto__ = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(local_13481);
if(cljs.core.truth_(and__4120__auto__)){
var or__4131__auto____$1 = new cljs.core.Keyword(null,"mutable","mutable",875778266).cljs$core$IFn$_invoke$arity$1(local_13481);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950).cljs$core$IFn$_invoke$arity$1(local_13481);
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411).cljs$core$IFn$_invoke$arity$1(local_13481);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
}
}
} else {
return and__4120__auto__;
}
}
})())){
} else {
throw cljs.analyzer.error.call(null,env,"Can't set! local var or non-mutable field");
}

return cljs.analyzer.analyze_symbol.call(null,enve,target__$1);
})()
:((cljs.core.seq_QMARK_.call(null,target__$1))?(function (){var texpr = cljs.analyzer.analyze_seq.call(null,enve,target__$1,null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(texpr))){
return texpr;
} else {
return null;
}
})():null)
);
var vexpr = cljs.analyzer.analyze.call(null,enve,val__$1);
if(cljs.core.seq_QMARK_.call(null,target__$1)){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var sym_4924 = (function (){var G__4922 = target__$1;
if((G__4922 == null)){
return null;
} else {
return cljs.core.second.call(null,G__4922);
}
})();
var meta_4925 = cljs.core.meta.call(null,sym_4924);
var temp__5720__auto___4926 = (function (){var and__4120__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(vexpr));
if(and__4120__auto__){
return new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173).cljs$core$IFn$_invoke$arity$1(meta_4925);
=======
var sym_13482 = (function (){var G__13480 = target__$1;
if((G__13480 == null)){
return null;
} else {
return cljs.core.second.call(null,G__13480);
}
})();
var meta_13483 = cljs.core.meta.call(null,sym_13482);
var temp__5720__auto___13484 = (function (){var and__4120__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(vexpr));
if(and__4120__auto__){
return new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173).cljs$core$IFn$_invoke$arity$1(meta_13483);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
} else {
return and__4120__auto__;
}
})();
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
if(cljs.core.truth_(temp__5720__auto___4926)){
var info_4927 = temp__5720__auto___4926;
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword(null,"defs","defs",1398449717),sym_4924,new cljs.core.Keyword(null,"methods","methods",453930866)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.merge.call(null,cljs.core.select_keys.call(null,info_4927,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),new cljs.core.Keyword(null,"variadic?","variadic?",584179762)], null)),cljs.core.select_keys.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(vexpr)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223)], null))));
=======
if(cljs.core.truth_(temp__5720__auto___13484)){
var info_13485 = temp__5720__auto___13484;
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword(null,"defs","defs",1398449717),sym_13482,new cljs.core.Keyword(null,"methods","methods",453930866)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.merge.call(null,cljs.core.select_keys.call(null,info_13485,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),new cljs.core.Keyword(null,"variadic?","variadic?",584179762)], null)),cljs.core.select_keys.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(vexpr)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223)], null))));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
} else {
}
} else {
}

if(cljs.core.truth_(texpr)){
} else {
throw cljs.analyzer.error.call(null,env,"set! target must be a field or a symbol naming a var");
}

if(((cljs.core.not.call(null,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))) && ((!((new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"*warn-on-infer*","*warn-on-infer*",1890277318,null),"null",new cljs.core.Symbol(null,"*unchecked-arrays*","*unchecked-arrays*",-381849911,null),"null",new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null),"null"], null), null).call(null,target__$1) == null)))))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"no-op","no-op",-93046065)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"set!","set!",-1389817006),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"target","target",253001721),texpr,new cljs.core.Keyword(null,"val","val",128701612),vexpr,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"val","val",128701612)], null)], null);

}
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
}finally {cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__orig_val__4920;
}}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__4918;
=======
}finally {cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__orig_val__13478;
}}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__13476;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
}}));
cljs.analyzer.foreign_dep_QMARK_ = (function cljs$analyzer$foreign_dep_QMARK_(dep){
var js_index = new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_));
var temp__5722__auto__ = cljs.core.find.call(null,js_index,cljs.core.name.call(null,dep));
if((temp__5722__auto__ == null)){
return false;
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var vec__4928 = temp__5722__auto__;
var _ = cljs.core.nth.call(null,vec__4928,(0),null);
var map__4931 = cljs.core.nth.call(null,vec__4928,(1),null);
var map__4931__$1 = (((((!((map__4931 == null))))?(((((map__4931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4931):map__4931);
var foreign = cljs.core.get.call(null,map__4931__$1,new cljs.core.Keyword(null,"foreign","foreign",990521149));
=======
var vec__13486 = temp__5722__auto__;
var _ = cljs.core.nth.call(null,vec__13486,(0),null);
var map__13489 = cljs.core.nth.call(null,vec__13486,(1),null);
var map__13489__$1 = (((((!((map__13489 == null))))?(((((map__13489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13489):map__13489);
var foreign = cljs.core.get.call(null,map__13489__$1,new cljs.core.Keyword(null,"foreign","foreign",990521149));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
return foreign;
}
});
/**
 * Given a lib, a namespace, deps, its dependencies, env, an analysis environment
 * and opts, compiler options - analyze all of the dependencies. Required to
 * correctly analyze usage of other namespaces.
 */
cljs.analyzer.analyze_deps = (function cljs$analyzer$analyze_deps(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__4935 = arguments.length;
switch (G__4935) {
=======
var G__13493 = arguments.length;
switch (G__13493) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
case 3:
return cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$3 = (function (lib,deps,env){
return cljs.analyzer.analyze_deps.call(null,lib,deps,env,(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)):null));
});

cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$4 = (function (lib,deps,env,opts){
var compiler = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var _STAR_cljs_dep_set_STAR__orig_val__4936 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
var _STAR_cljs_dep_set_STAR__temp_val__4937 = cljs.core.vary_meta.call(null,cljs.core.conj.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_,lib),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dep-path","dep-path",723826558)], null),cljs.core.conj,lib);
cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__temp_val__4937;

try{if(cljs.core.every_QMARK_.call(null,((function (_STAR_cljs_dep_set_STAR__orig_val__4936,_STAR_cljs_dep_set_STAR__temp_val__4937,compiler){
return (function (p1__4933_SHARP_){
return (!(cljs.core.contains_QMARK_.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_,p1__4933_SHARP_)));
});})(_STAR_cljs_dep_set_STAR__orig_val__4936,_STAR_cljs_dep_set_STAR__temp_val__4937,compiler))
,deps)){
} else {
throw (new Error(["Assert failed: ",["Circular dependency detected, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," -> ",cljs.core.conj.call(null,new cljs.core.Keyword(null,"dep-path","dep-path",723826558).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_)),cljs.core.some.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_,deps)))))].join(''),"\n","(every? (fn* [p1__4933#] (not (contains? *cljs-dep-set* p1__4933#))) deps)"].join('')));
}

var seq__4938 = cljs.core.seq.call(null,deps);
var chunk__4939 = null;
var count__4940 = (0);
var i__4941 = (0);
while(true){
if((i__4941 < count__4940)){
var dep = cljs.core._nth.call(null,chunk__4939,i__4941);
=======
var _STAR_cljs_dep_set_STAR__orig_val__13494 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
var _STAR_cljs_dep_set_STAR__temp_val__13495 = cljs.core.vary_meta.call(null,cljs.core.conj.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_,lib),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dep-path","dep-path",723826558)], null),cljs.core.conj,lib);
cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__temp_val__13495;

try{if(cljs.core.every_QMARK_.call(null,((function (_STAR_cljs_dep_set_STAR__orig_val__13494,_STAR_cljs_dep_set_STAR__temp_val__13495,compiler){
return (function (p1__13491_SHARP_){
return (!(cljs.core.contains_QMARK_.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_,p1__13491_SHARP_)));
});})(_STAR_cljs_dep_set_STAR__orig_val__13494,_STAR_cljs_dep_set_STAR__temp_val__13495,compiler))
,deps)){
} else {
throw (new Error(["Assert failed: ",["Circular dependency detected, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," -> ",cljs.core.conj.call(null,new cljs.core.Keyword(null,"dep-path","dep-path",723826558).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_)),cljs.core.some.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_,deps)))))].join(''),"\n","(every? (fn* [p1__13491#] (not (contains? *cljs-dep-set* p1__13491#))) deps)"].join('')));
}

var seq__13496 = cljs.core.seq.call(null,deps);
var chunk__13497 = null;
var count__13498 = (0);
var i__13499 = (0);
while(true){
if((i__13499 < count__13498)){
var dep = cljs.core._nth.call(null,chunk__13497,i__13499);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
if(cljs.core.truth_((function (){var or__4131__auto__ = (!((cljs.core.get_in.call(null,compiler,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),dep,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)) == null)));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131).cljs$core$IFn$_invoke$arity$1(compiler),cljs.core.name.call(null,dep));
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = cljs.analyzer.node_module_dep_QMARK_.call(null,dep);
if(or__4131__auto____$2){
return or__4131__auto____$2;
} else {
return cljs.analyzer.js_module_exists_QMARK_.call(null,cljs.core.name.call(null,dep));
}
}
}
})())){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.error_message.call(null,new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605),dep,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493),cljs.core.name.call(null,dep)], null)));
}


<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__4943 = seq__4938;
var G__4944 = chunk__4939;
var G__4945 = count__4940;
var G__4946 = (i__4941 + (1));
seq__4938 = G__4943;
chunk__4939 = G__4944;
count__4940 = G__4945;
i__4941 = G__4946;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__4938);
if(temp__5720__auto__){
var seq__4938__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4938__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__4938__$1);
var G__4947 = cljs.core.chunk_rest.call(null,seq__4938__$1);
var G__4948 = c__4550__auto__;
var G__4949 = cljs.core.count.call(null,c__4550__auto__);
var G__4950 = (0);
seq__4938 = G__4947;
chunk__4939 = G__4948;
count__4940 = G__4949;
i__4941 = G__4950;
continue;
} else {
var dep = cljs.core.first.call(null,seq__4938__$1);
=======
var G__13501 = seq__13496;
var G__13502 = chunk__13497;
var G__13503 = count__13498;
var G__13504 = (i__13499 + (1));
seq__13496 = G__13501;
chunk__13497 = G__13502;
count__13498 = G__13503;
i__13499 = G__13504;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__13496);
if(temp__5720__auto__){
var seq__13496__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13496__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__13496__$1);
var G__13505 = cljs.core.chunk_rest.call(null,seq__13496__$1);
var G__13506 = c__4550__auto__;
var G__13507 = cljs.core.count.call(null,c__4550__auto__);
var G__13508 = (0);
seq__13496 = G__13505;
chunk__13497 = G__13506;
count__13498 = G__13507;
i__13499 = G__13508;
continue;
} else {
var dep = cljs.core.first.call(null,seq__13496__$1);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
if(cljs.core.truth_((function (){var or__4131__auto__ = (!((cljs.core.get_in.call(null,compiler,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),dep,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)) == null)));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131).cljs$core$IFn$_invoke$arity$1(compiler),cljs.core.name.call(null,dep));
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = cljs.analyzer.node_module_dep_QMARK_.call(null,dep);
if(or__4131__auto____$2){
return or__4131__auto____$2;
} else {
return cljs.analyzer.js_module_exists_QMARK_.call(null,cljs.core.name.call(null,dep));
}
}
}
})())){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.error_message.call(null,new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605),dep,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493),cljs.core.name.call(null,dep)], null)));
}


<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__4951 = cljs.core.next.call(null,seq__4938__$1);
var G__4952 = null;
var G__4953 = (0);
var G__4954 = (0);
seq__4938 = G__4951;
chunk__4939 = G__4952;
count__4940 = G__4953;
i__4941 = G__4954;
=======
var G__13509 = cljs.core.next.call(null,seq__13496__$1);
var G__13510 = null;
var G__13511 = (0);
var G__13512 = (0);
seq__13496 = G__13509;
chunk__13497 = G__13510;
count__13498 = G__13511;
i__13499 = G__13512;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
continue;
}
} else {
return null;
}
}
break;
}
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__orig_val__4936;
=======
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__orig_val__13494;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
}});

cljs.analyzer.analyze_deps.cljs$lang$maxFixedArity = 4;

cljs.analyzer.missing_use_QMARK_ = (function cljs$analyzer$missing_use_QMARK_(lib,sym,cenv){
var js_lib = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131),cljs.core.name.call(null,lib)], null));
return ((cljs.core._EQ_.call(null,cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),lib,new cljs.core.Keyword(null,"defs","defs",1398449717),sym], null),new cljs.core.Keyword("cljs.analyzer","not-found","cljs.analyzer/not-found",427220150)),new cljs.core.Keyword("cljs.analyzer","not-found","cljs.analyzer/not-found",427220150))) && ((!(cljs.core._EQ_.call(null,cljs.core.get.call(null,js_lib,new cljs.core.Keyword(null,"group","group",582596132)),new cljs.core.Keyword(null,"goog","goog",-1711135452))))) && (cljs.core.not.call(null,cljs.core.get.call(null,js_lib,new cljs.core.Keyword(null,"closure-lib","closure-lib",2105917916)))) && ((!(cljs.analyzer.node_module_dep_QMARK_.call(null,lib)))) && ((!(cljs.analyzer.dep_has_global_exports_QMARK_.call(null,lib)))));
});
cljs.analyzer.missing_rename_QMARK_ = (function cljs$analyzer$missing_rename_QMARK_(sym,cenv){
var lib = cljs.core.symbol.call(null,cljs.core.namespace.call(null,sym));
var sym__$1 = cljs.core.symbol.call(null,cljs.core.name.call(null,sym));
return cljs.analyzer.missing_use_QMARK_.call(null,lib,sym__$1,cenv);
});
cljs.analyzer.missing_use_macro_QMARK_ = (function cljs$analyzer$missing_use_macro_QMARK_(lib,sym){
if((lib instanceof cljs.core.Symbol)){
var the_ns = cljs.core.find_macros_ns.call(null,lib);
return (((the_ns == null)) || ((the_ns.findInternedVar(sym) == null)));
} else {
return null;
}
});
cljs.analyzer.missing_rename_macro_QMARK_ = (function cljs$analyzer$missing_rename_macro_QMARK_(sym){
var lib = cljs.core.symbol.call(null,cljs.core.namespace.call(null,sym));
var sym__$1 = cljs.core.symbol.call(null,cljs.core.name.call(null,sym));
var the_ns = cljs.core.find_macros_ns.call(null,lib);
return (((the_ns == null)) || ((the_ns.findInternedVar(sym__$1) == null)));
});
cljs.analyzer.missing_uses = (function cljs$analyzer$missing_uses(uses,env){
var cenv = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (cenv){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
return (function (p__4955){
var vec__4956 = p__4955;
var sym = cljs.core.nth.call(null,vec__4956,(0),null);
var lib = cljs.core.nth.call(null,vec__4956,(1),null);
=======
return (function (p__13513){
var vec__13514 = p__13513;
var sym = cljs.core.nth.call(null,vec__13514,(0),null);
var lib = cljs.core.nth.call(null,vec__13514,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
return cljs.analyzer.missing_use_QMARK_.call(null,lib,sym,cenv);
});})(cenv))
,uses));
});
cljs.analyzer.missing_renames = (function cljs$analyzer$missing_renames(renames,env){
var cenv = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (cenv){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
return (function (p__4959){
var vec__4960 = p__4959;
var _ = cljs.core.nth.call(null,vec__4960,(0),null);
var qualified_sym = cljs.core.nth.call(null,vec__4960,(1),null);
=======
return (function (p__13517){
var vec__13518 = p__13517;
var _ = cljs.core.nth.call(null,vec__13518,(0),null);
var qualified_sym = cljs.core.nth.call(null,vec__13518,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
return cljs.analyzer.missing_rename_QMARK_.call(null,qualified_sym,cenv);
});})(cenv))
,renames));
});
cljs.analyzer.missing_use_macros = (function cljs$analyzer$missing_use_macros(use_macros,env){
var cenv = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (cenv){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
return (function (p__4963){
var vec__4964 = p__4963;
var sym = cljs.core.nth.call(null,vec__4964,(0),null);
var lib = cljs.core.nth.call(null,vec__4964,(1),null);
=======
return (function (p__13521){
var vec__13522 = p__13521;
var sym = cljs.core.nth.call(null,vec__13522,(0),null);
var lib = cljs.core.nth.call(null,vec__13522,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
return cljs.analyzer.missing_use_macro_QMARK_.call(null,lib,sym);
});})(cenv))
,use_macros));
});
cljs.analyzer.inferred_use_macros = (function cljs$analyzer$inferred_use_macros(use_macros,env){
var cenv = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (cenv){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
return (function (p__4967){
var vec__4968 = p__4967;
var sym = cljs.core.nth.call(null,vec__4968,(0),null);
var lib = cljs.core.nth.call(null,vec__4968,(1),null);
=======
return (function (p__13525){
var vec__13526 = p__13525;
var sym = cljs.core.nth.call(null,vec__13526,(0),null);
var lib = cljs.core.nth.call(null,vec__13526,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
return cljs.core.not.call(null,cljs.analyzer.missing_use_macro_QMARK_.call(null,lib,sym));
});})(cenv))
,use_macros));
});
cljs.analyzer.inferred_rename_macros = (function cljs$analyzer$inferred_rename_macros(rename_macros,env){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__4971){
var vec__4972 = p__4971;
var _ = cljs.core.nth.call(null,vec__4972,(0),null);
var qualified_sym = cljs.core.nth.call(null,vec__4972,(1),null);
=======
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__13529){
var vec__13530 = p__13529;
var _ = cljs.core.nth.call(null,vec__13530,(0),null);
var qualified_sym = cljs.core.nth.call(null,vec__13530,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
return (!(cljs.analyzer.missing_rename_macro_QMARK_.call(null,qualified_sym)));
}),rename_macros));
});
cljs.analyzer.check_uses = (function cljs$analyzer$check_uses(uses,env){
var cenv = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var seq__4975 = cljs.core.seq.call(null,uses);
var chunk__4976 = null;
var count__4977 = (0);
var i__4978 = (0);
while(true){
if((i__4978 < count__4977)){
var vec__4985 = cljs.core._nth.call(null,chunk__4976,i__4978);
var sym = cljs.core.nth.call(null,vec__4985,(0),null);
var lib = cljs.core.nth.call(null,vec__4985,(1),null);
=======
var seq__13533 = cljs.core.seq.call(null,uses);
var chunk__13534 = null;
var count__13535 = (0);
var i__13536 = (0);
while(true){
if((i__13536 < count__13535)){
var vec__13543 = cljs.core._nth.call(null,chunk__13534,i__13536);
var sym = cljs.core.nth.call(null,vec__13543,(0),null);
var lib = cljs.core.nth.call(null,vec__13543,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
if(cljs.analyzer.missing_use_QMARK_.call(null,lib,sym,cenv)){
throw cljs.analyzer.error.call(null,env,cljs.analyzer.error_message.call(null,new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"var",new cljs.core.Keyword(null,"lib","lib",191808726),lib,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym], null)));
} else {
}


<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__4991 = seq__4975;
var G__4992 = chunk__4976;
var G__4993 = count__4977;
var G__4994 = (i__4978 + (1));
seq__4975 = G__4991;
chunk__4976 = G__4992;
count__4977 = G__4993;
i__4978 = G__4994;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__4975);
if(temp__5720__auto__){
var seq__4975__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4975__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__4975__$1);
var G__4995 = cljs.core.chunk_rest.call(null,seq__4975__$1);
var G__4996 = c__4550__auto__;
var G__4997 = cljs.core.count.call(null,c__4550__auto__);
var G__4998 = (0);
seq__4975 = G__4995;
chunk__4976 = G__4996;
count__4977 = G__4997;
i__4978 = G__4998;
continue;
} else {
var vec__4988 = cljs.core.first.call(null,seq__4975__$1);
var sym = cljs.core.nth.call(null,vec__4988,(0),null);
var lib = cljs.core.nth.call(null,vec__4988,(1),null);
=======
var G__13549 = seq__13533;
var G__13550 = chunk__13534;
var G__13551 = count__13535;
var G__13552 = (i__13536 + (1));
seq__13533 = G__13549;
chunk__13534 = G__13550;
count__13535 = G__13551;
i__13536 = G__13552;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__13533);
if(temp__5720__auto__){
var seq__13533__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13533__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__13533__$1);
var G__13553 = cljs.core.chunk_rest.call(null,seq__13533__$1);
var G__13554 = c__4550__auto__;
var G__13555 = cljs.core.count.call(null,c__4550__auto__);
var G__13556 = (0);
seq__13533 = G__13553;
chunk__13534 = G__13554;
count__13535 = G__13555;
i__13536 = G__13556;
continue;
} else {
var vec__13546 = cljs.core.first.call(null,seq__13533__$1);
var sym = cljs.core.nth.call(null,vec__13546,(0),null);
var lib = cljs.core.nth.call(null,vec__13546,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
if(cljs.analyzer.missing_use_QMARK_.call(null,lib,sym,cenv)){
throw cljs.analyzer.error.call(null,env,cljs.analyzer.error_message.call(null,new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"var",new cljs.core.Keyword(null,"lib","lib",191808726),lib,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym], null)));
} else {
}


<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__4999 = cljs.core.next.call(null,seq__4975__$1);
var G__5000 = null;
var G__5001 = (0);
var G__5002 = (0);
seq__4975 = G__4999;
chunk__4976 = G__5000;
count__4977 = G__5001;
i__4978 = G__5002;
=======
var G__13557 = cljs.core.next.call(null,seq__13533__$1);
var G__13558 = null;
var G__13559 = (0);
var G__13560 = (0);
seq__13533 = G__13557;
chunk__13534 = G__13558;
count__13535 = G__13559;
i__13536 = G__13560;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.analyzer.check_use_macros = (function cljs$analyzer$check_use_macros(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__5004 = arguments.length;
switch (G__5004) {
=======
var G__13562 = arguments.length;
switch (G__13562) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
case 2:
return cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$2 = (function (use_macros,env){
return cljs.analyzer.check_use_macros.call(null,use_macros,null,env);
});

cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$3 = (function (use_macros,missing_uses,env){
var cenv = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var seq__5005_5022 = cljs.core.seq.call(null,use_macros);
var chunk__5006_5023 = null;
var count__5007_5024 = (0);
var i__5008_5025 = (0);
while(true){
if((i__5008_5025 < count__5007_5024)){
var vec__5015_5026 = cljs.core._nth.call(null,chunk__5006_5023,i__5008_5025);
var sym_5027 = cljs.core.nth.call(null,vec__5015_5026,(0),null);
var lib_5028 = cljs.core.nth.call(null,vec__5015_5026,(1),null);
if(cljs.core.truth_(cljs.analyzer.missing_use_macro_QMARK_.call(null,lib_5028,sym_5027))){
throw cljs.analyzer.error.call(null,env,cljs.analyzer.error_message.call(null,new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"macro",new cljs.core.Keyword(null,"lib","lib",191808726),lib_5028,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym_5027], null)));
=======
var seq__13563_13580 = cljs.core.seq.call(null,use_macros);
var chunk__13564_13581 = null;
var count__13565_13582 = (0);
var i__13566_13583 = (0);
while(true){
if((i__13566_13583 < count__13565_13582)){
var vec__13573_13584 = cljs.core._nth.call(null,chunk__13564_13581,i__13566_13583);
var sym_13585 = cljs.core.nth.call(null,vec__13573_13584,(0),null);
var lib_13586 = cljs.core.nth.call(null,vec__13573_13584,(1),null);
if(cljs.core.truth_(cljs.analyzer.missing_use_macro_QMARK_.call(null,lib_13586,sym_13585))){
throw cljs.analyzer.error.call(null,env,cljs.analyzer.error_message.call(null,new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"macro",new cljs.core.Keyword(null,"lib","lib",191808726),lib_13586,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym_13585], null)));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
} else {
}


<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__5029 = seq__5005_5022;
var G__5030 = chunk__5006_5023;
var G__5031 = count__5007_5024;
var G__5032 = (i__5008_5025 + (1));
seq__5005_5022 = G__5029;
chunk__5006_5023 = G__5030;
count__5007_5024 = G__5031;
i__5008_5025 = G__5032;
continue;
} else {
var temp__5720__auto___5033 = cljs.core.seq.call(null,seq__5005_5022);
if(temp__5720__auto___5033){
var seq__5005_5034__$1 = temp__5720__auto___5033;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5005_5034__$1)){
var c__4550__auto___5035 = cljs.core.chunk_first.call(null,seq__5005_5034__$1);
var G__5036 = cljs.core.chunk_rest.call(null,seq__5005_5034__$1);
var G__5037 = c__4550__auto___5035;
var G__5038 = cljs.core.count.call(null,c__4550__auto___5035);
var G__5039 = (0);
seq__5005_5022 = G__5036;
chunk__5006_5023 = G__5037;
count__5007_5024 = G__5038;
i__5008_5025 = G__5039;
continue;
} else {
var vec__5018_5040 = cljs.core.first.call(null,seq__5005_5034__$1);
var sym_5041 = cljs.core.nth.call(null,vec__5018_5040,(0),null);
var lib_5042 = cljs.core.nth.call(null,vec__5018_5040,(1),null);
if(cljs.core.truth_(cljs.analyzer.missing_use_macro_QMARK_.call(null,lib_5042,sym_5041))){
throw cljs.analyzer.error.call(null,env,cljs.analyzer.error_message.call(null,new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"macro",new cljs.core.Keyword(null,"lib","lib",191808726),lib_5042,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym_5041], null)));
=======
var G__13587 = seq__13563_13580;
var G__13588 = chunk__13564_13581;
var G__13589 = count__13565_13582;
var G__13590 = (i__13566_13583 + (1));
seq__13563_13580 = G__13587;
chunk__13564_13581 = G__13588;
count__13565_13582 = G__13589;
i__13566_13583 = G__13590;
continue;
} else {
var temp__5720__auto___13591 = cljs.core.seq.call(null,seq__13563_13580);
if(temp__5720__auto___13591){
var seq__13563_13592__$1 = temp__5720__auto___13591;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13563_13592__$1)){
var c__4550__auto___13593 = cljs.core.chunk_first.call(null,seq__13563_13592__$1);
var G__13594 = cljs.core.chunk_rest.call(null,seq__13563_13592__$1);
var G__13595 = c__4550__auto___13593;
var G__13596 = cljs.core.count.call(null,c__4550__auto___13593);
var G__13597 = (0);
seq__13563_13580 = G__13594;
chunk__13564_13581 = G__13595;
count__13565_13582 = G__13596;
i__13566_13583 = G__13597;
continue;
} else {
var vec__13576_13598 = cljs.core.first.call(null,seq__13563_13592__$1);
var sym_13599 = cljs.core.nth.call(null,vec__13576_13598,(0),null);
var lib_13600 = cljs.core.nth.call(null,vec__13576_13598,(1),null);
if(cljs.core.truth_(cljs.analyzer.missing_use_macro_QMARK_.call(null,lib_13600,sym_13599))){
throw cljs.analyzer.error.call(null,env,cljs.analyzer.error_message.call(null,new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"macro",new cljs.core.Keyword(null,"lib","lib",191808726),lib_13600,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym_13599], null)));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
} else {
}


<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__5043 = cljs.core.next.call(null,seq__5005_5034__$1);
var G__5044 = null;
var G__5045 = (0);
var G__5046 = (0);
seq__5005_5022 = G__5043;
chunk__5006_5023 = G__5044;
count__5007_5024 = G__5045;
i__5008_5025 = G__5046;
=======
var G__13601 = cljs.core.next.call(null,seq__13563_13592__$1);
var G__13602 = null;
var G__13603 = (0);
var G__13604 = (0);
seq__13563_13580 = G__13601;
chunk__13564_13581 = G__13602;
count__13565_13582 = G__13603;
i__13566_13583 = G__13604;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
continue;
}
} else {
}
}
break;
}

cljs.analyzer.check_uses.call(null,cljs.analyzer.missing_use_macros.call(null,missing_uses,env),env);

return cljs.analyzer.inferred_use_macros.call(null,missing_uses,env);
});

cljs.analyzer.check_use_macros.cljs$lang$maxFixedArity = 3;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
cljs.analyzer.check_use_macros_inferring_missing = (function cljs$analyzer$check_use_macros_inferring_missing(p__5050,env){
var map__5051 = p__5050;
var map__5051__$1 = (((((!((map__5051 == null))))?(((((map__5051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5051):map__5051);
var ast = map__5051__$1;
var name = cljs.core.get.call(null,map__5051__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var uses = cljs.core.get.call(null,map__5051__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var use_macros = cljs.core.get.call(null,map__5051__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var missing_uses = ((((cljs.analyzer._STAR_analyze_deps_STAR_) && (cljs.core.seq.call(null,uses))))?cljs.analyzer.missing_uses.call(null,uses,env):null);
var maybe_macros = cljs.core.apply.call(null,cljs.core.dissoc,uses,cljs.core.keys.call(null,missing_uses));
var remove_missing_uses = ((function (missing_uses,maybe_macros,map__5051,map__5051__$1,ast,name,uses,use_macros){
return (function (p1__5047_SHARP_){
return cljs.core.apply.call(null,cljs.core.dissoc,p1__5047_SHARP_,cljs.core.keys.call(null,missing_uses));
});})(missing_uses,maybe_macros,map__5051,map__5051__$1,ast,name,uses,use_macros))
;
var ast_SINGLEQUOTE_ = cljs.core.update_in.call(null,cljs.core.update_in.call(null,ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use-macros","use-macros",-905638393)], null),((function (missing_uses,maybe_macros,remove_missing_uses,map__5051,map__5051__$1,ast,name,uses,use_macros){
return (function (p1__5048_SHARP_){
return cljs.core.merge.call(null,cljs.core.merge.call(null,p1__5048_SHARP_,cljs.analyzer.check_use_macros.call(null,use_macros,missing_uses,env)),cljs.analyzer.inferred_use_macros.call(null,maybe_macros,env));
});})(missing_uses,maybe_macros,remove_missing_uses,map__5051,map__5051__$1,ast,name,uses,use_macros))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uses","uses",232664692)], null),remove_missing_uses);
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,((function (missing_uses,maybe_macros,remove_missing_uses,ast_SINGLEQUOTE_,map__5051,map__5051__$1,ast,name,uses,use_macros){
return (function (p1__5049_SHARP_){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,p1__5049_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393)], null),cljs.core.merge,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393).cljs$core$IFn$_invoke$arity$1(ast_SINGLEQUOTE_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name,new cljs.core.Keyword(null,"uses","uses",232664692)], null),remove_missing_uses);
});})(missing_uses,maybe_macros,remove_missing_uses,ast_SINGLEQUOTE_,map__5051,map__5051__$1,ast,name,uses,use_macros))
=======
cljs.analyzer.check_use_macros_inferring_missing = (function cljs$analyzer$check_use_macros_inferring_missing(p__13608,env){
var map__13609 = p__13608;
var map__13609__$1 = (((((!((map__13609 == null))))?(((((map__13609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13609):map__13609);
var ast = map__13609__$1;
var name = cljs.core.get.call(null,map__13609__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var uses = cljs.core.get.call(null,map__13609__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var use_macros = cljs.core.get.call(null,map__13609__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var missing_uses = ((((cljs.analyzer._STAR_analyze_deps_STAR_) && (cljs.core.seq.call(null,uses))))?cljs.analyzer.missing_uses.call(null,uses,env):null);
var maybe_macros = cljs.core.apply.call(null,cljs.core.dissoc,uses,cljs.core.keys.call(null,missing_uses));
var remove_missing_uses = ((function (missing_uses,maybe_macros,map__13609,map__13609__$1,ast,name,uses,use_macros){
return (function (p1__13605_SHARP_){
return cljs.core.apply.call(null,cljs.core.dissoc,p1__13605_SHARP_,cljs.core.keys.call(null,missing_uses));
});})(missing_uses,maybe_macros,map__13609,map__13609__$1,ast,name,uses,use_macros))
;
var ast_SINGLEQUOTE_ = cljs.core.update_in.call(null,cljs.core.update_in.call(null,ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use-macros","use-macros",-905638393)], null),((function (missing_uses,maybe_macros,remove_missing_uses,map__13609,map__13609__$1,ast,name,uses,use_macros){
return (function (p1__13606_SHARP_){
return cljs.core.merge.call(null,cljs.core.merge.call(null,p1__13606_SHARP_,cljs.analyzer.check_use_macros.call(null,use_macros,missing_uses,env)),cljs.analyzer.inferred_use_macros.call(null,maybe_macros,env));
});})(missing_uses,maybe_macros,remove_missing_uses,map__13609,map__13609__$1,ast,name,uses,use_macros))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uses","uses",232664692)], null),remove_missing_uses);
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,((function (missing_uses,maybe_macros,remove_missing_uses,ast_SINGLEQUOTE_,map__13609,map__13609__$1,ast,name,uses,use_macros){
return (function (p1__13607_SHARP_){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,p1__13607_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393)], null),cljs.core.merge,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393).cljs$core$IFn$_invoke$arity$1(ast_SINGLEQUOTE_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name,new cljs.core.Keyword(null,"uses","uses",232664692)], null),remove_missing_uses);
});})(missing_uses,maybe_macros,remove_missing_uses,ast_SINGLEQUOTE_,map__13609,map__13609__$1,ast,name,uses,use_macros))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
);

return ast_SINGLEQUOTE_;
});
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
cljs.analyzer.check_rename_macros_inferring_missing = (function cljs$analyzer$check_rename_macros_inferring_missing(p__5056,env){
var map__5057 = p__5056;
var map__5057__$1 = (((((!((map__5057 == null))))?(((((map__5057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5057):map__5057);
var ast = map__5057__$1;
var name = cljs.core.get.call(null,map__5057__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var renames = cljs.core.get.call(null,map__5057__$1,new cljs.core.Keyword(null,"renames","renames",343278368));
var missing_renames = ((((cljs.analyzer._STAR_analyze_deps_STAR_) && (cljs.core.seq.call(null,renames))))?cljs.analyzer.missing_renames.call(null,renames,env):null);
var maybe_macros = cljs.core.apply.call(null,cljs.core.dissoc,renames,cljs.core.keys.call(null,missing_renames));
var missing_rename_macros = cljs.analyzer.inferred_rename_macros.call(null,missing_renames,env);
var remove_missing_renames = ((function (missing_renames,maybe_macros,missing_rename_macros,map__5057,map__5057__$1,ast,name,renames){
return (function (p1__5053_SHARP_){
return cljs.core.apply.call(null,cljs.core.dissoc,p1__5053_SHARP_,cljs.core.keys.call(null,missing_renames));
});})(missing_renames,maybe_macros,missing_rename_macros,map__5057,map__5057__$1,ast,name,renames))
;
var ast_SINGLEQUOTE_ = cljs.core.update_in.call(null,cljs.core.update_in.call(null,ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512)], null),((function (missing_renames,maybe_macros,missing_rename_macros,remove_missing_renames,map__5057,map__5057__$1,ast,name,renames){
return (function (p1__5054_SHARP_){
return cljs.core.merge.call(null,cljs.core.merge.call(null,p1__5054_SHARP_,missing_rename_macros),cljs.analyzer.inferred_rename_macros.call(null,maybe_macros,env));
});})(missing_renames,maybe_macros,missing_rename_macros,remove_missing_renames,map__5057,map__5057__$1,ast,name,renames))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"renames","renames",343278368)], null),remove_missing_renames);
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,((function (missing_renames,maybe_macros,missing_rename_macros,remove_missing_renames,ast_SINGLEQUOTE_,map__5057,map__5057__$1,ast,name,renames){
return (function (p1__5055_SHARP_){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,p1__5055_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name,new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512)], null),cljs.core.merge,new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512).cljs$core$IFn$_invoke$arity$1(ast_SINGLEQUOTE_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name,new cljs.core.Keyword(null,"renames","renames",343278368)], null),remove_missing_renames);
});})(missing_renames,maybe_macros,missing_rename_macros,remove_missing_renames,ast_SINGLEQUOTE_,map__5057,map__5057__$1,ast,name,renames))
=======
cljs.analyzer.check_rename_macros_inferring_missing = (function cljs$analyzer$check_rename_macros_inferring_missing(p__13614,env){
var map__13615 = p__13614;
var map__13615__$1 = (((((!((map__13615 == null))))?(((((map__13615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13615):map__13615);
var ast = map__13615__$1;
var name = cljs.core.get.call(null,map__13615__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var renames = cljs.core.get.call(null,map__13615__$1,new cljs.core.Keyword(null,"renames","renames",343278368));
var missing_renames = ((((cljs.analyzer._STAR_analyze_deps_STAR_) && (cljs.core.seq.call(null,renames))))?cljs.analyzer.missing_renames.call(null,renames,env):null);
var maybe_macros = cljs.core.apply.call(null,cljs.core.dissoc,renames,cljs.core.keys.call(null,missing_renames));
var missing_rename_macros = cljs.analyzer.inferred_rename_macros.call(null,missing_renames,env);
var remove_missing_renames = ((function (missing_renames,maybe_macros,missing_rename_macros,map__13615,map__13615__$1,ast,name,renames){
return (function (p1__13611_SHARP_){
return cljs.core.apply.call(null,cljs.core.dissoc,p1__13611_SHARP_,cljs.core.keys.call(null,missing_renames));
});})(missing_renames,maybe_macros,missing_rename_macros,map__13615,map__13615__$1,ast,name,renames))
;
var ast_SINGLEQUOTE_ = cljs.core.update_in.call(null,cljs.core.update_in.call(null,ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512)], null),((function (missing_renames,maybe_macros,missing_rename_macros,remove_missing_renames,map__13615,map__13615__$1,ast,name,renames){
return (function (p1__13612_SHARP_){
return cljs.core.merge.call(null,cljs.core.merge.call(null,p1__13612_SHARP_,missing_rename_macros),cljs.analyzer.inferred_rename_macros.call(null,maybe_macros,env));
});})(missing_renames,maybe_macros,missing_rename_macros,remove_missing_renames,map__13615,map__13615__$1,ast,name,renames))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"renames","renames",343278368)], null),remove_missing_renames);
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,((function (missing_renames,maybe_macros,missing_rename_macros,remove_missing_renames,ast_SINGLEQUOTE_,map__13615,map__13615__$1,ast,name,renames){
return (function (p1__13613_SHARP_){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,p1__13613_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name,new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512)], null),cljs.core.merge,new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512).cljs$core$IFn$_invoke$arity$1(ast_SINGLEQUOTE_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name,new cljs.core.Keyword(null,"renames","renames",343278368)], null),remove_missing_renames);
});})(missing_renames,maybe_macros,missing_rename_macros,remove_missing_renames,ast_SINGLEQUOTE_,map__13615,map__13615__$1,ast,name,renames))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
);

return ast_SINGLEQUOTE_;
});
cljs.analyzer.parse_ns_error_msg = (function cljs$analyzer$parse_ns_error_msg(spec,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"; offending spec: ",cljs.core.pr_str.call(null,spec)].join('');
});
cljs.analyzer.basic_validate_ns_spec = (function cljs$analyzer$basic_validate_ns_spec(env,macros_QMARK_,spec){
if((((spec instanceof cljs.core.Symbol)) || (typeof spec === 'string') || (cljs.core.sequential_QMARK_.call(null,spec)))){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Only [lib.ns & options] and lib.ns specs supported in :require / :require-macros"));
}

if(cljs.core.sequential_QMARK_.call(null,spec)){
if((((cljs.core.first.call(null,spec) instanceof cljs.core.Symbol)) || (typeof cljs.core.first.call(null,spec) === 'string'))){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Library name must be specified as a symbol in :require / :require-macros"));
}

if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,spec))){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Only :as alias, :refer (names) and :rename {from to} options supported in :require"));
}

if(cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"as","as",1148689641),null,new cljs.core.Keyword(null,"rename","rename",1508157613),null,new cljs.core.Keyword(null,"refer","refer",-964295553),null], null), null),cljs.core.map.call(null,cljs.core.first,cljs.core.partition.call(null,(2),cljs.core.next.call(null,spec))))){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Only :as, :refer and :rename options supported in :require / :require-macros"));
}

if((function (){var fs = cljs.core.frequencies.call(null,cljs.core.next.call(null,spec));
return (((fs.call(null,new cljs.core.Keyword(null,"as","as",1148689641),(0)) <= (1))) && ((fs.call(null,new cljs.core.Keyword(null,"refer","refer",-964295553),(0)) <= (1))));
})()){
return null;
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Each of :as and :refer options may only be specified once in :require / :require-macros"));
}
} else {
return null;
}
});
cljs.analyzer.parse_ns_excludes = (function cljs$analyzer$parse_ns_excludes(env,args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
return cljs.core.reduce.call(null,(function (s,p__5060){
var vec__5061 = p__5060;
var seq__5062 = cljs.core.seq.call(null,vec__5061);
var first__5063 = cljs.core.first.call(null,seq__5062);
var seq__5062__$1 = cljs.core.next.call(null,seq__5062);
var k = first__5063;
var filters = seq__5062__$1;
=======
return cljs.core.reduce.call(null,(function (s,p__13618){
var vec__13619 = p__13618;
var seq__13620 = cljs.core.seq.call(null,vec__13619);
var first__13621 = cljs.core.first.call(null,seq__13620);
var seq__13620__$1 = cljs.core.next.call(null,seq__13620);
var k = first__13621;
var filters = seq__13620__$1;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440))){
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"excludes","excludes",-1791725945).cljs$core$IFn$_invoke$arity$1(s))){
throw cljs.analyzer.error.call(null,env,"Only one :refer-clojure form is allowed per namespace definition");
} else {
}

var valid_kws = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exclude","exclude",-1230250334),null,new cljs.core.Keyword(null,"rename","rename",1508157613),null], null), null);
var xs = (function (){var fs = cljs.core.seq.call(null,filters);
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"excludes","excludes",-1791725945),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"renames","renames",343278368),cljs.core.PersistentArrayMap.EMPTY], null);
var err = (!(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,filters))));
while(true){
if(err === true){
throw cljs.analyzer.error.call(null,env,"Only [:refer-clojure :exclude (names)] and optionally `:rename {from to}` specs supported");
} else {
if((!((fs == null)))){
var kw = cljs.core.first.call(null,fs);
if(cljs.core.truth_(valid_kws.call(null,kw))){
var refs = cljs.core.second.call(null,fs);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
if((!(((((cljs.core._EQ_.call(null,kw,new cljs.core.Keyword(null,"exclude","exclude",-1230250334))) && (cljs.core.sequential_QMARK_.call(null,refs)) && (cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,refs)))) || (((cljs.core._EQ_.call(null,kw,new cljs.core.Keyword(null,"rename","rename",1508157613))) && (cljs.core.map_QMARK_.call(null,refs)) && (cljs.core.every_QMARK_.call(null,((function (fs,ret,err,refs,kw,valid_kws,vec__5061,seq__5062,first__5063,seq__5062__$1,k,filters){
return (function (p1__5059_SHARP_){
return cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,p1__5059_SHARP_);
});})(fs,ret,err,refs,kw,valid_kws,vec__5061,seq__5062,first__5063,seq__5062__$1,k,filters))
,refs)))))))){
var G__5064 = fs;
var G__5065 = ret;
var G__5066 = true;
fs = G__5064;
ret = G__5065;
err = G__5066;
continue;
} else {
if(cljs.core._EQ_.call(null,kw,new cljs.core.Keyword(null,"exclude","exclude",-1230250334))){
var G__5067 = cljs.core.nnext.call(null,fs);
var G__5068 = cljs.core.update_in.call(null,ret,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"excludes","excludes",-1791725945)], null),cljs.core.into,refs);
var G__5069 = false;
fs = G__5067;
ret = G__5068;
err = G__5069;
continue;
} else {
if(cljs.core._EQ_.call(null,kw,new cljs.core.Keyword(null,"rename","rename",1508157613))){
var G__5070 = cljs.core.nnext.call(null,fs);
var G__5071 = cljs.core.update_in.call(null,ret,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"renames","renames",343278368)], null),cljs.core.merge,refs);
var G__5072 = false;
fs = G__5070;
ret = G__5071;
err = G__5072;
=======
if((!(((((cljs.core._EQ_.call(null,kw,new cljs.core.Keyword(null,"exclude","exclude",-1230250334))) && (cljs.core.sequential_QMARK_.call(null,refs)) && (cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,refs)))) || (((cljs.core._EQ_.call(null,kw,new cljs.core.Keyword(null,"rename","rename",1508157613))) && (cljs.core.map_QMARK_.call(null,refs)) && (cljs.core.every_QMARK_.call(null,((function (fs,ret,err,refs,kw,valid_kws,vec__13619,seq__13620,first__13621,seq__13620__$1,k,filters){
return (function (p1__13617_SHARP_){
return cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,p1__13617_SHARP_);
});})(fs,ret,err,refs,kw,valid_kws,vec__13619,seq__13620,first__13621,seq__13620__$1,k,filters))
,refs)))))))){
var G__13622 = fs;
var G__13623 = ret;
var G__13624 = true;
fs = G__13622;
ret = G__13623;
err = G__13624;
continue;
} else {
if(cljs.core._EQ_.call(null,kw,new cljs.core.Keyword(null,"exclude","exclude",-1230250334))){
var G__13625 = cljs.core.nnext.call(null,fs);
var G__13626 = cljs.core.update_in.call(null,ret,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"excludes","excludes",-1791725945)], null),cljs.core.into,refs);
var G__13627 = false;
fs = G__13625;
ret = G__13626;
err = G__13627;
continue;
} else {
if(cljs.core._EQ_.call(null,kw,new cljs.core.Keyword(null,"rename","rename",1508157613))){
var G__13628 = cljs.core.nnext.call(null,fs);
var G__13629 = cljs.core.update_in.call(null,ret,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"renames","renames",343278368)], null),cljs.core.merge,refs);
var G__13630 = false;
fs = G__13628;
ret = G__13629;
err = G__13630;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
continue;
} else {
return null;
}
}
}
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__5073 = fs;
var G__5074 = ret;
var G__5075 = true;
fs = G__5073;
ret = G__5074;
err = G__5075;
=======
var G__13631 = fs;
var G__13632 = ret;
var G__13633 = true;
fs = G__13631;
ret = G__13632;
err = G__13633;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
continue;
}
} else {
return ret;

}
}
break;
}
})();
return cljs.core.merge_with.call(null,cljs.core.into,s,xs);
} else {
return s;
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"excludes","excludes",-1791725945),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"renames","renames",343278368),cljs.core.PersistentArrayMap.EMPTY], null),args);
});
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
cljs.analyzer.use__GT_require = (function cljs$analyzer$use__GT_require(env,p__5077){
var vec__5078 = p__5077;
var seq__5079 = cljs.core.seq.call(null,vec__5078);
var first__5080 = cljs.core.first.call(null,seq__5079);
var seq__5079__$1 = cljs.core.next.call(null,seq__5079);
var lib = first__5080;
var filters = seq__5079__$1;
var spec = vec__5078;
=======
cljs.analyzer.use__GT_require = (function cljs$analyzer$use__GT_require(env,p__13635){
var vec__13636 = p__13635;
var seq__13637 = cljs.core.seq.call(null,vec__13636);
var first__13638 = cljs.core.first.call(null,seq__13637);
var seq__13637__$1 = cljs.core.next.call(null,seq__13637);
var lib = first__13638;
var filters = seq__13637__$1;
var spec = vec__13636;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
if((((lib instanceof cljs.core.Symbol)) && (cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,spec))))){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Only [lib.ns :only (names)] and optionally `:rename {from to}` specs supported in :use / :use-macros"));
}

var fs = cljs.core.seq.call(null,filters);
var ret = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null);
var err = false;
while(true){
if(err === true){
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Only [lib.ns :only (names)] and optionally `:rename {from to}` specs supported in :use / :use-macros"));
} else {
if((!((fs == null)))){
var kw = cljs.core.first.call(null,fs);
var only_QMARK_ = cljs.core._EQ_.call(null,kw,new cljs.core.Keyword(null,"only","only",1907811652));
if(((only_QMARK_) || (cljs.core._EQ_.call(null,kw,new cljs.core.Keyword(null,"rename","rename",1508157613))))){
if((!((cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([((only_QMARK_)?new cljs.core.Keyword(null,"refer","refer",-964295553):kw)]),ret) == null)))){
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Each of :only and :rename options may only be specified once in :use / :use-macros"));
} else {
var refs = cljs.core.second.call(null,fs);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
if((!(((((only_QMARK_) && (cljs.core.sequential_QMARK_.call(null,refs)) && (cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,refs)))) || (((cljs.core._EQ_.call(null,kw,new cljs.core.Keyword(null,"rename","rename",1508157613))) && (cljs.core.map_QMARK_.call(null,refs)) && (cljs.core.every_QMARK_.call(null,((function (fs,ret,err,refs,kw,only_QMARK_,vec__5078,seq__5079,first__5080,seq__5079__$1,lib,filters,spec){
return (function (p1__5076_SHARP_){
return cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,p1__5076_SHARP_);
});})(fs,ret,err,refs,kw,only_QMARK_,vec__5078,seq__5079,first__5080,seq__5079__$1,lib,filters,spec))
,refs)))))))){
var G__5081 = fs;
var G__5082 = ret;
var G__5083 = true;
fs = G__5081;
ret = G__5082;
err = G__5083;
continue;
} else {
var G__5084 = cljs.core.nnext.call(null,fs);
var G__5085 = cljs.core.into.call(null,ret,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((only_QMARK_)?new cljs.core.Keyword(null,"refer","refer",-964295553):kw),refs], null));
var G__5086 = false;
fs = G__5084;
ret = G__5085;
err = G__5086;
=======
if((!(((((only_QMARK_) && (cljs.core.sequential_QMARK_.call(null,refs)) && (cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,refs)))) || (((cljs.core._EQ_.call(null,kw,new cljs.core.Keyword(null,"rename","rename",1508157613))) && (cljs.core.map_QMARK_.call(null,refs)) && (cljs.core.every_QMARK_.call(null,((function (fs,ret,err,refs,kw,only_QMARK_,vec__13636,seq__13637,first__13638,seq__13637__$1,lib,filters,spec){
return (function (p1__13634_SHARP_){
return cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,p1__13634_SHARP_);
});})(fs,ret,err,refs,kw,only_QMARK_,vec__13636,seq__13637,first__13638,seq__13637__$1,lib,filters,spec))
,refs)))))))){
var G__13639 = fs;
var G__13640 = ret;
var G__13641 = true;
fs = G__13639;
ret = G__13640;
err = G__13641;
continue;
} else {
var G__13642 = cljs.core.nnext.call(null,fs);
var G__13643 = cljs.core.into.call(null,ret,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((only_QMARK_)?new cljs.core.Keyword(null,"refer","refer",-964295553):kw),refs], null));
var G__13644 = false;
fs = G__13642;
ret = G__13643;
err = G__13644;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
continue;
}
}
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__5087 = fs;
var G__5088 = ret;
var G__5089 = true;
fs = G__5087;
ret = G__5088;
err = G__5089;
=======
var G__13645 = fs;
var G__13646 = ret;
var G__13647 = true;
fs = G__13645;
ret = G__13646;
err = G__13647;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
continue;
}
} else {
if((!((cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refer","refer",-964295553),null], null), null),ret) == null)))){
return ret;
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__5090 = fs;
var G__5091 = ret;
var G__5092 = true;
fs = G__5090;
ret = G__5091;
err = G__5092;
=======
var G__13648 = fs;
var G__13649 = ret;
var G__13650 = true;
fs = G__13648;
ret = G__13649;
err = G__13650;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
continue;
}

}
}
break;
}
});
cljs.analyzer.parse_require_spec = (function cljs$analyzer$parse_require_spec(env,macros_QMARK_,deps,aliases,spec){
while(true){
if((((spec instanceof cljs.core.Symbol)) || (typeof spec === 'string'))){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__5108 = env;
var G__5109 = macros_QMARK_;
var G__5110 = deps;
var G__5111 = aliases;
var G__5112 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null);
env = G__5108;
macros_QMARK_ = G__5109;
deps = G__5110;
aliases = G__5111;
spec = G__5112;
=======
var G__13666 = env;
var G__13667 = macros_QMARK_;
var G__13668 = deps;
var G__13669 = aliases;
var G__13670 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null);
env = G__13666;
macros_QMARK_ = G__13667;
deps = G__13668;
aliases = G__13669;
spec = G__13670;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
continue;
} else {
cljs.analyzer.basic_validate_ns_spec.call(null,env,macros_QMARK_,spec);

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var vec__5093 = spec;
var seq__5094 = cljs.core.seq.call(null,vec__5093);
var first__5095 = cljs.core.first.call(null,seq__5094);
var seq__5094__$1 = cljs.core.next.call(null,seq__5094);
var lib = first__5095;
var opts = seq__5094__$1;
var vec__5096 = (function (){var temp__5722__auto__ = cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),new cljs.core.Keyword(null,"name","name",1843675177));
=======
var vec__13651 = spec;
var seq__13652 = cljs.core.seq.call(null,vec__13651);
var first__13653 = cljs.core.first.call(null,seq__13652);
var seq__13652__$1 = cljs.core.next.call(null,seq__13652);
var lib = first__13653;
var opts = seq__13652__$1;
var vec__13654 = (function (){var temp__5722__auto__ = cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),new cljs.core.Keyword(null,"name","name",1843675177));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
if((temp__5722__auto__ == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib,null], null);
} else {
var js_module_name = temp__5722__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,js_module_name),lib], null);
}
})();
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var lib__$1 = cljs.core.nth.call(null,vec__5096,(0),null);
var js_module_provides = cljs.core.nth.call(null,vec__5096,(1),null);
var map__5099 = cljs.core.apply.call(null,cljs.core.hash_map,opts);
var map__5099__$1 = (((((!((map__5099 == null))))?(((((map__5099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5099):map__5099);
var alias = cljs.core.get.call(null,map__5099__$1,new cljs.core.Keyword(null,"as","as",1148689641),((typeof lib__$1 === 'string')?cljs.core.symbol.call(null,cljs.core.munge.call(null,lib__$1)):lib__$1));
var referred = cljs.core.get.call(null,map__5099__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var renamed = cljs.core.get.call(null,map__5099__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var referred_without_renamed = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,renamed)),referred));
var vec__5100 = (cljs.core.truth_(macros_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"require-macros","require-macros",707947416),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"require","require",-468001333),new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.Keyword(null,"rename","rename",1508157613)], null));
var rk = cljs.core.nth.call(null,vec__5100,(0),null);
var uk = cljs.core.nth.call(null,vec__5100,(1),null);
var renk = cljs.core.nth.call(null,vec__5100,(2),null);
=======
var lib__$1 = cljs.core.nth.call(null,vec__13654,(0),null);
var js_module_provides = cljs.core.nth.call(null,vec__13654,(1),null);
var map__13657 = cljs.core.apply.call(null,cljs.core.hash_map,opts);
var map__13657__$1 = (((((!((map__13657 == null))))?(((((map__13657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13657):map__13657);
var alias = cljs.core.get.call(null,map__13657__$1,new cljs.core.Keyword(null,"as","as",1148689641),((typeof lib__$1 === 'string')?cljs.core.symbol.call(null,cljs.core.munge.call(null,lib__$1)):lib__$1));
var referred = cljs.core.get.call(null,map__13657__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var renamed = cljs.core.get.call(null,map__13657__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var referred_without_renamed = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,renamed)),referred));
var vec__13658 = (cljs.core.truth_(macros_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"require-macros","require-macros",707947416),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"require","require",-468001333),new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.Keyword(null,"rename","rename",1508157613)], null));
var rk = cljs.core.nth.call(null,vec__13658,(0),null);
var uk = cljs.core.nth.call(null,vec__13658,(1),null);
var renk = cljs.core.nth.call(null,vec__13658,(2),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
if((((alias instanceof cljs.core.Symbol)) || ((alias == null)))){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,":as must be followed by a symbol in :require / :require-macros"));
}

if((!((alias == null)))){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var alias_type_5113 = (cljs.core.truth_(macros_QMARK_)?new cljs.core.Keyword(null,"macros","macros",811339431):new cljs.core.Keyword(null,"fns","fns",1185138786));
var lib_SINGLEQUOTE__5114 = alias_type_5113.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,aliases)).call(null,alias);
if((((!((lib_SINGLEQUOTE__5114 == null)))) && (cljs.core.not_EQ_.call(null,lib__$1,lib_SINGLEQUOTE__5114)))){
=======
var alias_type_13671 = (cljs.core.truth_(macros_QMARK_)?new cljs.core.Keyword(null,"macros","macros",811339431):new cljs.core.Keyword(null,"fns","fns",1185138786));
var lib_SINGLEQUOTE__13672 = alias_type_13671.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,aliases)).call(null,alias);
if((((!((lib_SINGLEQUOTE__13672 == null)))) && (cljs.core.not_EQ_.call(null,lib__$1,lib_SINGLEQUOTE__13672)))){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,":as alias must be unique"));
} else {
}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
cljs.core.swap_BANG_.call(null,aliases,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [alias_type_5113], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [alias,lib__$1], null),(cljs.core.truth_(js_module_provides)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [js_module_provides,lib__$1], null):null));
=======
cljs.core.swap_BANG_.call(null,aliases,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [alias_type_13671], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [alias,lib__$1], null),(cljs.core.truth_(js_module_provides)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [js_module_provides,lib__$1], null):null));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
} else {
}

if(((((cljs.core.sequential_QMARK_.call(null,referred)) && (cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,referred)))) || ((referred == null)))){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,":refer must be followed by a sequence of symbols in :require / :require-macros"));
}

if(cljs.core.truth_(macros_QMARK_)){
} else {
cljs.core.swap_BANG_.call(null,deps,cljs.core.conj,lib__$1);
}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
return cljs.core.merge.call(null,(((!((alias == null))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([rk,cljs.core.merge.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib__$1]),cljs.core.PersistentArrayMap.createAsIfByAssoc([lib__$1,lib__$1]),(cljs.core.truth_(js_module_provides)?cljs.core.PersistentArrayMap.createAsIfByAssoc([js_module_provides,lib__$1]):null))]):null),(((!((referred_without_renamed == null))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([uk,cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.interleave.call(null,referred_without_renamed,cljs.core.repeat.call(null,lib__$1)))]):null),(((!((renamed == null))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([renk,cljs.core.reduce.call(null,((function (env,macros_QMARK_,deps,aliases,spec,vec__5093,seq__5094,first__5095,seq__5094__$1,lib,opts,vec__5096,lib__$1,js_module_provides,map__5099,map__5099__$1,alias,referred,renamed,referred_without_renamed,vec__5100,rk,uk,renk){
return (function (m,p__5104){
var vec__5105 = p__5104;
var original = cljs.core.nth.call(null,vec__5105,(0),null);
var renamed__$1 = cljs.core.nth.call(null,vec__5105,(1),null);
=======
return cljs.core.merge.call(null,(((!((alias == null))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([rk,cljs.core.merge.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib__$1]),cljs.core.PersistentArrayMap.createAsIfByAssoc([lib__$1,lib__$1]),(cljs.core.truth_(js_module_provides)?cljs.core.PersistentArrayMap.createAsIfByAssoc([js_module_provides,lib__$1]):null))]):null),(((!((referred_without_renamed == null))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([uk,cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.interleave.call(null,referred_without_renamed,cljs.core.repeat.call(null,lib__$1)))]):null),(((!((renamed == null))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([renk,cljs.core.reduce.call(null,((function (env,macros_QMARK_,deps,aliases,spec,vec__13651,seq__13652,first__13653,seq__13652__$1,lib,opts,vec__13654,lib__$1,js_module_provides,map__13657,map__13657__$1,alias,referred,renamed,referred_without_renamed,vec__13658,rk,uk,renk){
return (function (m,p__13662){
var vec__13663 = p__13662;
var original = cljs.core.nth.call(null,vec__13663,(0),null);
var renamed__$1 = cljs.core.nth.call(null,vec__13663,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([original]),referred))){
} else {
throw cljs.analyzer.error.call(null,env,["Renamed symbol ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(original)," not referred"].join(''));
}

return cljs.core.assoc.call(null,m,renamed__$1,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(original)));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
});})(env,macros_QMARK_,deps,aliases,spec,vec__5093,seq__5094,first__5095,seq__5094__$1,lib,opts,vec__5096,lib__$1,js_module_provides,map__5099,map__5099__$1,alias,referred,renamed,referred_without_renamed,vec__5100,rk,uk,renk))
=======
});})(env,macros_QMARK_,deps,aliases,spec,vec__13651,seq__13652,first__13653,seq__13652__$1,lib,opts,vec__13654,lib__$1,js_module_provides,map__13657,map__13657__$1,alias,referred,renamed,referred_without_renamed,vec__13658,rk,uk,renk))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
,cljs.core.PersistentArrayMap.EMPTY,renamed)]):null));
}
break;
}
});
cljs.analyzer.parse_import_spec = (function cljs$analyzer$parse_import_spec(env,deps,spec){
if(((((cljs.core.sequential_QMARK_.call(null,spec)) && (cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,spec)))) || ((((spec instanceof cljs.core.Symbol)) && ((cljs.core.namespace.call(null,spec) == null)))))){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Only lib.ns.Ctor or [lib.ns Ctor*] spec supported in :import"));
}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var import_map = ((cljs.core.sequential_QMARK_.call(null,spec))?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__5115_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__5115_SHARP_,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,spec)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5115_SHARP_)].join(''))],null));
}),cljs.core.rest.call(null,spec))):cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.symbol.call(null,cljs.core.last.call(null,clojure.string.split.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec),/\./))),spec]));
var seq__5116_5132 = cljs.core.seq.call(null,import_map);
var chunk__5117_5133 = null;
var count__5118_5134 = (0);
var i__5119_5135 = (0);
while(true){
if((i__5119_5135 < count__5118_5134)){
var vec__5126_5136 = cljs.core._nth.call(null,chunk__5117_5133,i__5119_5135);
var __5137 = cljs.core.nth.call(null,vec__5126_5136,(0),null);
var spec_5138__$1 = cljs.core.nth.call(null,vec__5126_5136,(1),null);
cljs.core.swap_BANG_.call(null,deps,cljs.core.conj,spec_5138__$1);


var G__5139 = seq__5116_5132;
var G__5140 = chunk__5117_5133;
var G__5141 = count__5118_5134;
var G__5142 = (i__5119_5135 + (1));
seq__5116_5132 = G__5139;
chunk__5117_5133 = G__5140;
count__5118_5134 = G__5141;
i__5119_5135 = G__5142;
continue;
} else {
var temp__5720__auto___5143 = cljs.core.seq.call(null,seq__5116_5132);
if(temp__5720__auto___5143){
var seq__5116_5144__$1 = temp__5720__auto___5143;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5116_5144__$1)){
var c__4550__auto___5145 = cljs.core.chunk_first.call(null,seq__5116_5144__$1);
var G__5146 = cljs.core.chunk_rest.call(null,seq__5116_5144__$1);
var G__5147 = c__4550__auto___5145;
var G__5148 = cljs.core.count.call(null,c__4550__auto___5145);
var G__5149 = (0);
seq__5116_5132 = G__5146;
chunk__5117_5133 = G__5147;
count__5118_5134 = G__5148;
i__5119_5135 = G__5149;
continue;
} else {
var vec__5129_5150 = cljs.core.first.call(null,seq__5116_5144__$1);
var __5151 = cljs.core.nth.call(null,vec__5129_5150,(0),null);
var spec_5152__$1 = cljs.core.nth.call(null,vec__5129_5150,(1),null);
cljs.core.swap_BANG_.call(null,deps,cljs.core.conj,spec_5152__$1);


var G__5153 = cljs.core.next.call(null,seq__5116_5144__$1);
var G__5154 = null;
var G__5155 = (0);
var G__5156 = (0);
seq__5116_5132 = G__5153;
chunk__5117_5133 = G__5154;
count__5118_5134 = G__5155;
i__5119_5135 = G__5156;
=======
var import_map = ((cljs.core.sequential_QMARK_.call(null,spec))?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__13673_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__13673_SHARP_,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,spec)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__13673_SHARP_)].join(''))],null));
}),cljs.core.rest.call(null,spec))):cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.symbol.call(null,cljs.core.last.call(null,clojure.string.split.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec),/\./))),spec]));
var seq__13674_13690 = cljs.core.seq.call(null,import_map);
var chunk__13675_13691 = null;
var count__13676_13692 = (0);
var i__13677_13693 = (0);
while(true){
if((i__13677_13693 < count__13676_13692)){
var vec__13684_13694 = cljs.core._nth.call(null,chunk__13675_13691,i__13677_13693);
var __13695 = cljs.core.nth.call(null,vec__13684_13694,(0),null);
var spec_13696__$1 = cljs.core.nth.call(null,vec__13684_13694,(1),null);
cljs.core.swap_BANG_.call(null,deps,cljs.core.conj,spec_13696__$1);


var G__13697 = seq__13674_13690;
var G__13698 = chunk__13675_13691;
var G__13699 = count__13676_13692;
var G__13700 = (i__13677_13693 + (1));
seq__13674_13690 = G__13697;
chunk__13675_13691 = G__13698;
count__13676_13692 = G__13699;
i__13677_13693 = G__13700;
continue;
} else {
var temp__5720__auto___13701 = cljs.core.seq.call(null,seq__13674_13690);
if(temp__5720__auto___13701){
var seq__13674_13702__$1 = temp__5720__auto___13701;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13674_13702__$1)){
var c__4550__auto___13703 = cljs.core.chunk_first.call(null,seq__13674_13702__$1);
var G__13704 = cljs.core.chunk_rest.call(null,seq__13674_13702__$1);
var G__13705 = c__4550__auto___13703;
var G__13706 = cljs.core.count.call(null,c__4550__auto___13703);
var G__13707 = (0);
seq__13674_13690 = G__13704;
chunk__13675_13691 = G__13705;
count__13676_13692 = G__13706;
i__13677_13693 = G__13707;
continue;
} else {
var vec__13687_13708 = cljs.core.first.call(null,seq__13674_13702__$1);
var __13709 = cljs.core.nth.call(null,vec__13687_13708,(0),null);
var spec_13710__$1 = cljs.core.nth.call(null,vec__13687_13708,(1),null);
cljs.core.swap_BANG_.call(null,deps,cljs.core.conj,spec_13710__$1);


var G__13711 = cljs.core.next.call(null,seq__13674_13702__$1);
var G__13712 = null;
var G__13713 = (0);
var G__13714 = (0);
seq__13674_13690 = G__13711;
chunk__13675_13691 = G__13712;
count__13676_13692 = G__13713;
i__13677_13693 = G__13714;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"import","import",-1399500709),import_map,new cljs.core.Keyword(null,"require","require",-468001333),import_map], null);
});
/**
 * Given a spec form check whether the spec namespace requires a macro file
 * of the same name. If so return true.
 */
cljs.analyzer.macro_autoload_ns_QMARK_ = (function cljs$analyzer$macro_autoload_ns_QMARK_(form){
if(cljs.analyzer._STAR_macro_infer_STAR_){
var ns = ((cljs.core.sequential_QMARK_.call(null,form))?cljs.core.first.call(null,form):form);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var map__5157 = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns], null));
var map__5157__$1 = (((((!((map__5157 == null))))?(((((map__5157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5157):map__5157);
var use_macros = cljs.core.get.call(null,map__5157__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var require_macros = cljs.core.get.call(null,map__5157__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
=======
var map__13715 = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns], null));
var map__13715__$1 = (((((!((map__13715 == null))))?(((((map__13715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13715):map__13715);
var use_macros = cljs.core.get.call(null,map__13715__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var require_macros = cljs.core.get.call(null,map__13715__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
var or__4131__auto__ = cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([ns]),cljs.core.vals.call(null,use_macros));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([ns]),cljs.core.vals.call(null,require_macros));
}
} else {
return null;
}
});
/**
 * Given a symbol that starts with clojure as the first segment return the
 * same symbol with the first segment replaced with cljs
 */
cljs.analyzer.clj_ns__GT_cljs_ns = (function cljs$analyzer$clj_ns__GT_cljs_ns(sym){
var segs = clojure.string.split.call(null,cljs.core.name.call(null,sym),/\./);
if(cljs.core._EQ_.call(null,"clojure",cljs.core.first.call(null,segs))){
return cljs.core.symbol.call(null,clojure.string.join.call(null,".",cljs.core.cons.call(null,"cljs",cljs.core.next.call(null,segs))));
} else {
return sym;
}
});
cljs.analyzer.canonicalize_specs = (function cljs$analyzer$canonicalize_specs(specs){
var canonicalize = (function cljs$analyzer$canonicalize_specs_$_canonicalize(quoted_spec_or_kw){
if((quoted_spec_or_kw instanceof cljs.core.Keyword)){
return quoted_spec_or_kw;
} else {
var spec = cljs.core.second.call(null,quoted_spec_or_kw);
if(((cljs.core.vector_QMARK_.call(null,spec)) || (cljs.core.map_QMARK_.call(null,spec)))){
return spec;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null);
}
}
});
return cljs.core.map.call(null,canonicalize,specs);
});
cljs.analyzer.canonicalize_import_specs = (function cljs$analyzer$canonicalize_import_specs(specs){
var canonicalize = (function cljs$analyzer$canonicalize_import_specs_$_canonicalize(quoted_spec_or_kw){
if((quoted_spec_or_kw instanceof cljs.core.Keyword)){
return quoted_spec_or_kw;
} else {
return cljs.core.second.call(null,quoted_spec_or_kw);
}
});
return cljs.core.map.call(null,canonicalize,specs);
});
/**
 * Given an original set of ns specs desugar :include-macros and :refer-macros
 * usage into only primitive spec forms - :use, :require, :use-macros,
 * :require-macros. If a library includes a macro file of with the same name
 * as the namespace will also be desugared.
 */
cljs.analyzer.desugar_ns_specs = (function cljs$analyzer$desugar_ns_specs(args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var map__5160 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__5161){
var vec__5162 = p__5161;
var seq__5163 = cljs.core.seq.call(null,vec__5162);
var first__5164 = cljs.core.first.call(null,seq__5163);
var seq__5163__$1 = cljs.core.next.call(null,seq__5163);
var k = first__5164;
var specs = seq__5163__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,specs)], null);
}),args));
var map__5160__$1 = (((((!((map__5160 == null))))?(((((map__5160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5160):map__5160);
var indexed = map__5160__$1;
var require = cljs.core.get.call(null,map__5160__$1,new cljs.core.Keyword(null,"require","require",-468001333));
var sugar_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"include-macros","include-macros",1228110289),null,new cljs.core.Keyword(null,"refer-macros","refer-macros",-1906841953),null], null), null);
var remove_from_spec = ((function (map__5160,map__5160__$1,indexed,require,sugar_keys){
=======
var map__13718 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__13719){
var vec__13720 = p__13719;
var seq__13721 = cljs.core.seq.call(null,vec__13720);
var first__13722 = cljs.core.first.call(null,seq__13721);
var seq__13721__$1 = cljs.core.next.call(null,seq__13721);
var k = first__13722;
var specs = seq__13721__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,specs)], null);
}),args));
var map__13718__$1 = (((((!((map__13718 == null))))?(((((map__13718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13718):map__13718);
var indexed = map__13718__$1;
var require = cljs.core.get.call(null,map__13718__$1,new cljs.core.Keyword(null,"require","require",-468001333));
var sugar_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"include-macros","include-macros",1228110289),null,new cljs.core.Keyword(null,"refer-macros","refer-macros",-1906841953),null], null), null);
var remove_from_spec = ((function (map__13718,map__13718__$1,indexed,require,sugar_keys){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
return (function (pred,spec){
while(true){
if(cljs.core.not.call(null,(function (){var and__4120__auto__ = cljs.core.sequential_QMARK_.call(null,spec);
if(and__4120__auto__){
return cljs.core.some.call(null,pred,spec);
} else {
return and__4120__auto__;
}
})())){
return spec;
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var vec__5166 = cljs.core.split_with.call(null,cljs.core.complement.call(null,pred),spec);
var l = cljs.core.nth.call(null,vec__5166,(0),null);
var r = cljs.core.nth.call(null,vec__5166,(1),null);
var G__5172 = pred;
var G__5173 = cljs.core.concat.call(null,l,cljs.core.drop.call(null,(2),r));
pred = G__5172;
spec = G__5173;
=======
var vec__13724 = cljs.core.split_with.call(null,cljs.core.complement.call(null,pred),spec);
var l = cljs.core.nth.call(null,vec__13724,(0),null);
var r = cljs.core.nth.call(null,vec__13724,(1),null);
var G__13730 = pred;
var G__13731 = cljs.core.concat.call(null,l,cljs.core.drop.call(null,(2),r));
pred = G__13730;
spec = G__13731;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
continue;
}
break;
}
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
});})(map__5160,map__5160__$1,indexed,require,sugar_keys))
;
var replace_refer_macros = ((function (map__5160,map__5160__$1,indexed,require,sugar_keys,remove_from_spec){
=======
});})(map__13718,map__13718__$1,indexed,require,sugar_keys))
;
var replace_refer_macros = ((function (map__13718,map__13718__$1,indexed,require,sugar_keys,remove_from_spec){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
return (function (spec){
if((!(cljs.core.sequential_QMARK_.call(null,spec)))){
return spec;
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
return cljs.core.map.call(null,((function (map__5160,map__5160__$1,indexed,require,sugar_keys,remove_from_spec){
=======
return cljs.core.map.call(null,((function (map__13718,map__13718__$1,indexed,require,sugar_keys,remove_from_spec){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
return (function (x){
if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"refer-macros","refer-macros",-1906841953))){
return new cljs.core.Keyword(null,"refer","refer",-964295553);
} else {
return x;
}
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
});})(map__5160,map__5160__$1,indexed,require,sugar_keys,remove_from_spec))
,spec);
}
});})(map__5160,map__5160__$1,indexed,require,sugar_keys,remove_from_spec))
;
var reload_spec_QMARK_ = ((function (map__5160,map__5160__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros){
return (function (p1__5159_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reload","reload",863702807),null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null], null), null).call(null,p1__5159_SHARP_);
});})(map__5160,map__5160__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros))
;
var to_macro_specs = ((function (map__5160,map__5160__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_){
return (function (specs){
return cljs.core.map.call(null,((function (map__5160,map__5160__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_){
=======
});})(map__13718,map__13718__$1,indexed,require,sugar_keys,remove_from_spec))
,spec);
}
});})(map__13718,map__13718__$1,indexed,require,sugar_keys,remove_from_spec))
;
var reload_spec_QMARK_ = ((function (map__13718,map__13718__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros){
return (function (p1__13717_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reload","reload",863702807),null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null], null), null).call(null,p1__13717_SHARP_);
});})(map__13718,map__13718__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros))
;
var to_macro_specs = ((function (map__13718,map__13718__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_){
return (function (specs){
return cljs.core.map.call(null,((function (map__13718,map__13718__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
return (function (x){
if(cljs.core.not.call(null,reload_spec_QMARK_.call(null,x))){
return replace_refer_macros.call(null,remove_from_spec.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rename","rename",1508157613),null], null), null),remove_from_spec.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refer","refer",-964295553),null], null), null),remove_from_spec.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-macros","include-macros",1228110289),null], null), null),x))));
} else {
return x;
}
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
});})(map__5160,map__5160__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_))
,cljs.core.filter.call(null,((function (map__5160,map__5160__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_){
=======
});})(map__13718,map__13718__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_))
,cljs.core.filter.call(null,((function (map__13718,map__13718__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
return (function (x){
var or__4131__auto__ = (function (){var and__4120__auto__ = cljs.core.sequential_QMARK_.call(null,x);
if(and__4120__auto__){
return cljs.core.some.call(null,sugar_keys,x);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = reload_spec_QMARK_.call(null,x);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return cljs.analyzer.macro_autoload_ns_QMARK_.call(null,x);
}
}
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
});})(map__5160,map__5160__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_))
,specs));
});})(map__5160,map__5160__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_))
=======
});})(map__13718,map__13718__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_))
,specs));
});})(map__13718,map__13718__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
;
var remove_sugar = cljs.core.partial.call(null,remove_from_spec,sugar_keys);
var temp__5722__auto__ = cljs.core.seq.call(null,to_macro_specs.call(null,require));
if((temp__5722__auto__ == null)){
return args;
} else {
var require_specs = temp__5722__auto__;
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
return cljs.core.map.call(null,((function (require_specs,temp__5722__auto__,map__5160,map__5160__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_,to_macro_specs,remove_sugar){
return (function (x){
if(cljs.core.not.call(null,reload_spec_QMARK_.call(null,x))){
var vec__5169 = x;
var k = cljs.core.nth.call(null,vec__5169,(0),null);
var v = cljs.core.nth.call(null,vec__5169,(1),null);
=======
return cljs.core.map.call(null,((function (require_specs,temp__5722__auto__,map__13718,map__13718__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_,to_macro_specs,remove_sugar){
return (function (x){
if(cljs.core.not.call(null,reload_spec_QMARK_.call(null,x))){
var vec__13727 = x;
var k = cljs.core.nth.call(null,vec__13727,(0),null);
var v = cljs.core.nth.call(null,vec__13727,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
return cljs.core.cons.call(null,k,cljs.core.map.call(null,remove_sugar,v));
} else {
return x;
}
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
});})(require_specs,temp__5722__auto__,map__5160,map__5160__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_,to_macro_specs,remove_sugar))
=======
});})(require_specs,temp__5722__auto__,map__13718,map__13718__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_,to_macro_specs,remove_sugar))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
,cljs.core.update_in.call(null,indexed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),require_specs));
}
});
cljs.analyzer.find_def_clash = (function cljs$analyzer$find_def_clash(env,ns,segments){
var to_check = cljs.core.map.call(null,(function (xs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,clojure.string.join.call(null,".",cljs.core.butlast.call(null,xs))),cljs.core.symbol.call(null,cljs.core.last.call(null,xs))], null);
}),cljs.core.drop.call(null,(2),cljs.core.reductions.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY,segments)));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var seq__5174 = cljs.core.seq.call(null,to_check);
var chunk__5175 = null;
var count__5176 = (0);
var i__5177 = (0);
while(true){
if((i__5177 < count__5176)){
var vec__5184 = cljs.core._nth.call(null,chunk__5175,i__5177);
var clash_ns = cljs.core.nth.call(null,vec__5184,(0),null);
var name = cljs.core.nth.call(null,vec__5184,(1),null);
=======
var seq__13732 = cljs.core.seq.call(null,to_check);
var chunk__13733 = null;
var count__13734 = (0);
var i__13735 = (0);
while(true){
if((i__13735 < count__13734)){
var vec__13742 = cljs.core._nth.call(null,chunk__13733,i__13735);
var clash_ns = cljs.core.nth.call(null,vec__13742,(0),null);
var name = cljs.core.nth.call(null,vec__13742,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
if(cljs.core.truth_(cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),clash_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),name], null)))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"var","var",-769682797),cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(clash_ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name))], null));
} else {
}


<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__5190 = seq__5174;
var G__5191 = chunk__5175;
var G__5192 = count__5176;
var G__5193 = (i__5177 + (1));
seq__5174 = G__5190;
chunk__5175 = G__5191;
count__5176 = G__5192;
i__5177 = G__5193;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__5174);
if(temp__5720__auto__){
var seq__5174__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5174__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__5174__$1);
var G__5194 = cljs.core.chunk_rest.call(null,seq__5174__$1);
var G__5195 = c__4550__auto__;
var G__5196 = cljs.core.count.call(null,c__4550__auto__);
var G__5197 = (0);
seq__5174 = G__5194;
chunk__5175 = G__5195;
count__5176 = G__5196;
i__5177 = G__5197;
continue;
} else {
var vec__5187 = cljs.core.first.call(null,seq__5174__$1);
var clash_ns = cljs.core.nth.call(null,vec__5187,(0),null);
var name = cljs.core.nth.call(null,vec__5187,(1),null);
=======
var G__13748 = seq__13732;
var G__13749 = chunk__13733;
var G__13750 = count__13734;
var G__13751 = (i__13735 + (1));
seq__13732 = G__13748;
chunk__13733 = G__13749;
count__13734 = G__13750;
i__13735 = G__13751;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__13732);
if(temp__5720__auto__){
var seq__13732__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13732__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__13732__$1);
var G__13752 = cljs.core.chunk_rest.call(null,seq__13732__$1);
var G__13753 = c__4550__auto__;
var G__13754 = cljs.core.count.call(null,c__4550__auto__);
var G__13755 = (0);
seq__13732 = G__13752;
chunk__13733 = G__13753;
count__13734 = G__13754;
i__13735 = G__13755;
continue;
} else {
var vec__13745 = cljs.core.first.call(null,seq__13732__$1);
var clash_ns = cljs.core.nth.call(null,vec__13745,(0),null);
var name = cljs.core.nth.call(null,vec__13745,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
if(cljs.core.truth_(cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),clash_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),name], null)))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"var","var",-769682797),cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(clash_ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name))], null));
} else {
}


<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__5198 = cljs.core.next.call(null,seq__5174__$1);
var G__5199 = null;
var G__5200 = (0);
var G__5201 = (0);
seq__5174 = G__5198;
chunk__5175 = G__5199;
count__5176 = G__5200;
i__5177 = G__5201;
=======
var G__13756 = cljs.core.next.call(null,seq__13732__$1);
var G__13757 = null;
var G__13758 = (0);
var G__13759 = (0);
seq__13732 = G__13756;
chunk__13733 = G__13757;
count__13734 = G__13758;
i__13735 = G__13759;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.analyzer.macro_ns_name = (function cljs$analyzer$macro_ns_name(name){
var name_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(name);
if(cljs.core.not.call(null,goog.string.endsWith(name_str,"$macros"))){
return cljs.core.symbol.call(null,[name_str,"$macros"].join(''));
} else {
return name;
}
});
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"ns","ns",2082130287,null),(function (_,env,p__5204,___$1,opts){
var vec__5205 = p__5204;
var seq__5206 = cljs.core.seq.call(null,vec__5205);
var first__5207 = cljs.core.first.call(null,seq__5206);
var seq__5206__$1 = cljs.core.next.call(null,seq__5206);
var ___$2 = first__5207;
var first__5207__$1 = cljs.core.first.call(null,seq__5206__$1);
var seq__5206__$2 = cljs.core.next.call(null,seq__5206__$1);
var name = first__5207__$1;
var args = seq__5206__$2;
var form = vec__5205;
=======
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"ns","ns",2082130287,null),(function (_,env,p__13762,___$1,opts){
var vec__13763 = p__13762;
var seq__13764 = cljs.core.seq.call(null,vec__13763);
var first__13765 = cljs.core.first.call(null,seq__13764);
var seq__13764__$1 = cljs.core.next.call(null,seq__13764);
var ___$2 = first__13765;
var first__13765__$1 = cljs.core.first.call(null,seq__13764__$1);
var seq__13764__$2 = cljs.core.next.call(null,seq__13764__$1);
var name = first__13765__$1;
var args = seq__13764__$2;
var form = vec__13763;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
if(cljs.analyzer._STAR_allow_ns_STAR_){
} else {
throw cljs.analyzer.error.call(null,env,"Namespace declarations must appear at the top-level.");
}

if((name instanceof cljs.core.Symbol)){
} else {
throw cljs.analyzer.error.call(null,env,"Namespaces must be named by a symbol.");
}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var name__$1 = (function (){var G__5208 = name;
if(cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name.call(null,G__5208);
} else {
return G__5208;
}
})();
var segments_5234 = clojure.string.split.call(null,cljs.core.name.call(null,name__$1),/\./);
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,segments_5234))){
=======
var name__$1 = (function (){var G__13766 = name;
if(cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name.call(null,G__13766);
} else {
return G__13766;
}
})();
var segments_13792 = clojure.string.split.call(null,cljs.core.name.call(null,name__$1),/\./);
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,segments_13792))){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name__$1], null));
} else {
}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var segment_5235 = cljs.core.some.call(null,cljs.analyzer.js_reserved,segments_5234);
if((!((segment_5235 == null)))){
=======
var segment_13793 = cljs.core.some.call(null,cljs.analyzer.js_reserved,segments_13792);
if((!((segment_13793 == null)))){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name__$1], null));
} else {
}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
cljs.analyzer.find_def_clash.call(null,env,name__$1,segments_5234);
=======
cljs.analyzer.find_def_clash.call(null,env,name__$1,segments_13792);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js

var docstring = ((typeof cljs.core.first.call(null,args) === 'string')?cljs.core.first.call(null,args):null);
var mdocstr = new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,name__$1));
var args__$1 = (((!((docstring == null))))?cljs.core.next.call(null,args):args);
var metadata = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__$1)))?cljs.core.first.call(null,args__$1):null);
var args__$2 = cljs.analyzer.desugar_ns_specs.call(null,(((!((metadata == null))))?cljs.core.next.call(null,args__$1):args__$1));
var name__$2 = cljs.core.vary_meta.call(null,name__$1,cljs.core.merge,metadata);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var map__5209 = cljs.analyzer.parse_ns_excludes.call(null,env,args__$2);
var map__5209__$1 = (((((!((map__5209 == null))))?(((((map__5209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5209):map__5209);
var excludes = cljs.core.get.call(null,map__5209__$1,new cljs.core.Keyword(null,"excludes","excludes",-1791725945));
var core_renames = cljs.core.get.call(null,map__5209__$1,new cljs.core.Keyword(null,"renames","renames",343278368));
var core_renames__$1 = cljs.core.reduce.call(null,((function (docstring,mdocstr,args__$1,metadata,args__$2,name__$2,map__5209,map__5209__$1,excludes,core_renames,name__$1,vec__5205,seq__5206,first__5207,seq__5206__$1,___$2,first__5207__$1,seq__5206__$2,name,args,form){
return (function (m,p__5215){
var vec__5216 = p__5215;
var original = cljs.core.nth.call(null,vec__5216,(0),null);
var renamed = cljs.core.nth.call(null,vec__5216,(1),null);
return cljs.core.assoc.call(null,m,renamed,cljs.core.symbol.call(null,"cljs.core",cljs.core.str.cljs$core$IFn$_invoke$arity$1(original)));
});})(docstring,mdocstr,args__$1,metadata,args__$2,name__$2,map__5209,map__5209__$1,excludes,core_renames,name__$1,vec__5205,seq__5206,first__5207,seq__5206__$1,___$2,first__5207__$1,seq__5206__$2,name,args,form))
=======
var map__13767 = cljs.analyzer.parse_ns_excludes.call(null,env,args__$2);
var map__13767__$1 = (((((!((map__13767 == null))))?(((((map__13767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13767):map__13767);
var excludes = cljs.core.get.call(null,map__13767__$1,new cljs.core.Keyword(null,"excludes","excludes",-1791725945));
var core_renames = cljs.core.get.call(null,map__13767__$1,new cljs.core.Keyword(null,"renames","renames",343278368));
var core_renames__$1 = cljs.core.reduce.call(null,((function (docstring,mdocstr,args__$1,metadata,args__$2,name__$2,map__13767,map__13767__$1,excludes,core_renames,name__$1,vec__13763,seq__13764,first__13765,seq__13764__$1,___$2,first__13765__$1,seq__13764__$2,name,args,form){
return (function (m,p__13773){
var vec__13774 = p__13773;
var original = cljs.core.nth.call(null,vec__13774,(0),null);
var renamed = cljs.core.nth.call(null,vec__13774,(1),null);
return cljs.core.assoc.call(null,m,renamed,cljs.core.symbol.call(null,"cljs.core",cljs.core.str.cljs$core$IFn$_invoke$arity$1(original)));
});})(docstring,mdocstr,args__$1,metadata,args__$2,name__$2,map__13767,map__13767__$1,excludes,core_renames,name__$1,vec__13763,seq__13764,first__13765,seq__13764__$1,___$2,first__13765__$1,seq__13764__$2,name,args,form))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
,cljs.core.PersistentArrayMap.EMPTY,core_renames);
var deps = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var aliases = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fns","fns",1185138786),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"macros","macros",811339431),cljs.core.PersistentArrayMap.EMPTY], null));
var spec_parsers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"require","require",-468001333),cljs.core.partial.call(null,cljs.analyzer.parse_require_spec,env,false,deps,aliases),new cljs.core.Keyword(null,"require-macros","require-macros",707947416),cljs.core.partial.call(null,cljs.analyzer.parse_require_spec,env,true,deps,aliases),new cljs.core.Keyword(null,"use","use",-1846382424),cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.analyzer.parse_require_spec,env,false,deps,aliases),cljs.core.partial.call(null,cljs.analyzer.use__GT_require,env)),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.analyzer.parse_require_spec,env,true,deps,aliases),cljs.core.partial.call(null,cljs.analyzer.use__GT_require,env)),new cljs.core.Keyword(null,"import","import",-1399500709),cljs.core.partial.call(null,cljs.analyzer.parse_import_spec,env,deps)], null);
var valid_forms = cljs.core.atom.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),null,new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),null,new cljs.core.Keyword(null,"import","import",-1399500709),null], null), null));
var reload = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),null], null));
var reloads = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var map__5210 = cljs.core.reduce.call(null,((function (docstring,mdocstr,args__$1,metadata,args__$2,name__$2,map__5209,map__5209__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__5205,seq__5206,first__5207,seq__5206__$1,___$2,first__5207__$1,seq__5206__$2,name,args,form){
return (function (m,p__5219){
var vec__5220 = p__5219;
var seq__5221 = cljs.core.seq.call(null,vec__5220);
var first__5222 = cljs.core.first.call(null,seq__5221);
var seq__5221__$1 = cljs.core.next.call(null,seq__5221);
var k = first__5222;
var libs = seq__5221__$1;
var libspec = vec__5220;
=======
var map__13768 = cljs.core.reduce.call(null,((function (docstring,mdocstr,args__$1,metadata,args__$2,name__$2,map__13767,map__13767__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__13763,seq__13764,first__13765,seq__13764__$1,___$2,first__13765__$1,seq__13764__$2,name,args,form){
return (function (m,p__13777){
var vec__13778 = p__13777;
var seq__13779 = cljs.core.seq.call(null,vec__13778);
var first__13780 = cljs.core.first.call(null,seq__13779);
var seq__13779__$1 = cljs.core.next.call(null,seq__13779);
var k = first__13780;
var libs = seq__13779__$1;
var libspec = vec__13778;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),null,new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),null,new cljs.core.Keyword(null,"import","import",-1399500709),null], null), null).call(null,k))){
} else {
throw cljs.analyzer.error.call(null,env,["Only :refer-clojure, :require, :require-macros, :use, :use-macros, and :import libspecs supported. Got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(libspec)," instead."].join(''));
}

if(cljs.core.truth_(cljs.core.deref.call(null,valid_forms).call(null,k))){
} else {
throw cljs.analyzer.error.call(null,env,["Only one ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," form is allowed per namespace definition"].join(''));
}

cljs.core.swap_BANG_.call(null,valid_forms,cljs.core.disj,k);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),k)){
} else {
if((!((cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reload","reload",863702807),null], null), null),libs) == null)))){
cljs.core.swap_BANG_.call(null,reload,cljs.core.assoc,k,new cljs.core.Keyword(null,"reload","reload",863702807));
} else {
}

if((!((cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null], null), null),libs) == null)))){
cljs.core.swap_BANG_.call(null,reload,cljs.core.assoc,k,new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
} else {
}
}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var temp__5720__auto___5236 = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (vec__5220,seq__5221,first__5222,seq__5221__$1,k,libs,libspec,docstring,mdocstr,args__$1,metadata,args__$2,name__$2,map__5209,map__5209__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__5205,seq__5206,first__5207,seq__5206__$1,___$2,first__5207__$1,seq__5206__$2,name,args,form){
return (function (p1__5202_SHARP_){
return new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__5202_SHARP_));
});})(vec__5220,seq__5221,first__5222,seq__5221__$1,k,libs,libspec,docstring,mdocstr,args__$1,metadata,args__$2,name__$2,map__5209,map__5209__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__5205,seq__5206,first__5207,seq__5206__$1,___$2,first__5207__$1,seq__5206__$2,name,args,form))
,libs));
if(temp__5720__auto___5236){
var xs_5237 = temp__5720__auto___5236;
cljs.core.swap_BANG_.call(null,reloads,cljs.core.assoc,k,cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.first,xs_5237),cljs.core.map.call(null,((function (xs_5237,temp__5720__auto___5236,vec__5220,seq__5221,first__5222,seq__5221__$1,k,libs,libspec,docstring,mdocstr,args__$1,metadata,args__$2,name__$2,map__5209,map__5209__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__5205,seq__5206,first__5207,seq__5206__$1,___$2,first__5207__$1,seq__5206__$2,name,args,form){
return (function (p1__5203_SHARP_){
return new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__5203_SHARP_));
});})(xs_5237,temp__5720__auto___5236,vec__5220,seq__5221,first__5222,seq__5221__$1,k,libs,libspec,docstring,mdocstr,args__$1,metadata,args__$2,name__$2,map__5209,map__5209__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__5205,seq__5206,first__5207,seq__5206__$1,___$2,first__5207__$1,seq__5206__$2,name,args,form))
,xs_5237)));
=======
var temp__5720__auto___13794 = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (vec__13778,seq__13779,first__13780,seq__13779__$1,k,libs,libspec,docstring,mdocstr,args__$1,metadata,args__$2,name__$2,map__13767,map__13767__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__13763,seq__13764,first__13765,seq__13764__$1,___$2,first__13765__$1,seq__13764__$2,name,args,form){
return (function (p1__13760_SHARP_){
return new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__13760_SHARP_));
});})(vec__13778,seq__13779,first__13780,seq__13779__$1,k,libs,libspec,docstring,mdocstr,args__$1,metadata,args__$2,name__$2,map__13767,map__13767__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__13763,seq__13764,first__13765,seq__13764__$1,___$2,first__13765__$1,seq__13764__$2,name,args,form))
,libs));
if(temp__5720__auto___13794){
var xs_13795 = temp__5720__auto___13794;
cljs.core.swap_BANG_.call(null,reloads,cljs.core.assoc,k,cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.first,xs_13795),cljs.core.map.call(null,((function (xs_13795,temp__5720__auto___13794,vec__13778,seq__13779,first__13780,seq__13779__$1,k,libs,libspec,docstring,mdocstr,args__$1,metadata,args__$2,name__$2,map__13767,map__13767__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__13763,seq__13764,first__13765,seq__13764__$1,___$2,first__13765__$1,seq__13764__$2,name,args,form){
return (function (p1__13761_SHARP_){
return new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__13761_SHARP_));
});})(xs_13795,temp__5720__auto___13794,vec__13778,seq__13779,first__13780,seq__13779__$1,k,libs,libspec,docstring,mdocstr,args__$1,metadata,args__$2,name__$2,map__13767,map__13767__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__13763,seq__13764,first__13765,seq__13764__$1,___$2,first__13765__$1,seq__13764__$2,name,args,form))
,xs_13795)));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
} else {
}

return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.merge,m,cljs.core.map.call(null,spec_parsers.call(null,k),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reload","reload",863702807),null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null], null), null),libs)));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
});})(docstring,mdocstr,args__$1,metadata,args__$2,name__$2,map__5209,map__5209__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__5205,seq__5206,first__5207,seq__5206__$1,___$2,first__5207__$1,seq__5206__$2,name,args,form))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,((function (docstring,mdocstr,args__$1,metadata,args__$2,name__$2,map__5209,map__5209__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__5205,seq__5206,first__5207,seq__5206__$1,___$2,first__5207__$1,seq__5206__$2,name,args,form){
return (function (p__5223){
var vec__5224 = p__5223;
var r = cljs.core.nth.call(null,vec__5224,(0),null);
return cljs.core._EQ_.call(null,r,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440));
});})(docstring,mdocstr,args__$1,metadata,args__$2,name__$2,map__5209,map__5209__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__5205,seq__5206,first__5207,seq__5206__$1,___$2,first__5207__$1,seq__5206__$2,name,args,form))
,args__$2));
var map__5210__$1 = (((((!((map__5210 == null))))?(((((map__5210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5210):map__5210);
var params = map__5210__$1;
var uses = cljs.core.get.call(null,map__5210__$1,new cljs.core.Keyword(null,"use","use",-1846382424));
var requires = cljs.core.get.call(null,map__5210__$1,new cljs.core.Keyword(null,"require","require",-468001333));
var renames = cljs.core.get.call(null,map__5210__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var use_macros = cljs.core.get.call(null,map__5210__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var require_macros = cljs.core.get.call(null,map__5210__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var rename_macros = cljs.core.get.call(null,map__5210__$1,new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512));
var imports = cljs.core.get.call(null,map__5210__$1,new cljs.core.Keyword(null,"import","import",-1399500709));
var vec__5211 = cljs.core.map.call(null,((function (docstring,mdocstr,args__$1,metadata,args__$2,name__$2,map__5209,map__5209__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__5210,map__5210__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,name__$1,vec__5205,seq__5206,first__5207,seq__5206__$1,___$2,first__5207__$1,seq__5206__$2,name,args,form){
return (function (spec_map){
if(cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))){
var ns = cljs.core.symbol.call(null,cljs.core.subs.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$2),(0),(cljs.core.count.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$2)) - (7))));
return cljs.core.reduce.call(null,((function (ns,docstring,mdocstr,args__$1,metadata,args__$2,name__$2,map__5209,map__5209__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__5210,map__5210__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,name__$1,vec__5205,seq__5206,first__5207,seq__5206__$1,___$2,first__5207__$1,seq__5206__$2,name,args,form){
return (function (m,p__5228){
var vec__5229 = p__5228;
var k = cljs.core.nth.call(null,vec__5229,(0),null);
var v = cljs.core.nth.call(null,vec__5229,(1),null);
var G__5232 = m;
if((!(cljs.core.symbol_identical_QMARK_.call(null,v,ns)))){
return cljs.core.assoc.call(null,G__5232,k,v);
} else {
return G__5232;
}
});})(ns,docstring,mdocstr,args__$1,metadata,args__$2,name__$2,map__5209,map__5209__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__5210,map__5210__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,name__$1,vec__5205,seq__5206,first__5207,seq__5206__$1,___$2,first__5207__$1,seq__5206__$2,name,args,form))
=======
});})(docstring,mdocstr,args__$1,metadata,args__$2,name__$2,map__13767,map__13767__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__13763,seq__13764,first__13765,seq__13764__$1,___$2,first__13765__$1,seq__13764__$2,name,args,form))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,((function (docstring,mdocstr,args__$1,metadata,args__$2,name__$2,map__13767,map__13767__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__13763,seq__13764,first__13765,seq__13764__$1,___$2,first__13765__$1,seq__13764__$2,name,args,form){
return (function (p__13781){
var vec__13782 = p__13781;
var r = cljs.core.nth.call(null,vec__13782,(0),null);
return cljs.core._EQ_.call(null,r,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440));
});})(docstring,mdocstr,args__$1,metadata,args__$2,name__$2,map__13767,map__13767__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__13763,seq__13764,first__13765,seq__13764__$1,___$2,first__13765__$1,seq__13764__$2,name,args,form))
,args__$2));
var map__13768__$1 = (((((!((map__13768 == null))))?(((((map__13768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13768):map__13768);
var params = map__13768__$1;
var uses = cljs.core.get.call(null,map__13768__$1,new cljs.core.Keyword(null,"use","use",-1846382424));
var requires = cljs.core.get.call(null,map__13768__$1,new cljs.core.Keyword(null,"require","require",-468001333));
var renames = cljs.core.get.call(null,map__13768__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var use_macros = cljs.core.get.call(null,map__13768__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var require_macros = cljs.core.get.call(null,map__13768__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var rename_macros = cljs.core.get.call(null,map__13768__$1,new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512));
var imports = cljs.core.get.call(null,map__13768__$1,new cljs.core.Keyword(null,"import","import",-1399500709));
var vec__13769 = cljs.core.map.call(null,((function (docstring,mdocstr,args__$1,metadata,args__$2,name__$2,map__13767,map__13767__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__13768,map__13768__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,name__$1,vec__13763,seq__13764,first__13765,seq__13764__$1,___$2,first__13765__$1,seq__13764__$2,name,args,form){
return (function (spec_map){
if(cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))){
var ns = cljs.core.symbol.call(null,cljs.core.subs.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$2),(0),(cljs.core.count.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$2)) - (7))));
return cljs.core.reduce.call(null,((function (ns,docstring,mdocstr,args__$1,metadata,args__$2,name__$2,map__13767,map__13767__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__13768,map__13768__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,name__$1,vec__13763,seq__13764,first__13765,seq__13764__$1,___$2,first__13765__$1,seq__13764__$2,name,args,form){
return (function (m,p__13786){
var vec__13787 = p__13786;
var k = cljs.core.nth.call(null,vec__13787,(0),null);
var v = cljs.core.nth.call(null,vec__13787,(1),null);
var G__13790 = m;
if((!(cljs.core.symbol_identical_QMARK_.call(null,v,ns)))){
return cljs.core.assoc.call(null,G__13790,k,v);
} else {
return G__13790;
}
});})(ns,docstring,mdocstr,args__$1,metadata,args__$2,name__$2,map__13767,map__13767__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__13768,map__13768__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,name__$1,vec__13763,seq__13764,first__13765,seq__13764__$1,___$2,first__13765__$1,seq__13764__$2,name,args,form))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
,cljs.core.PersistentArrayMap.EMPTY,spec_map);
} else {
return spec_map;
}
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
});})(docstring,mdocstr,args__$1,metadata,args__$2,name__$2,map__5209,map__5209__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__5210,map__5210__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,name__$1,vec__5205,seq__5206,first__5207,seq__5206__$1,___$2,first__5207__$1,seq__5206__$2,name,args,form))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [require_macros,use_macros], null));
var require_macros__$1 = cljs.core.nth.call(null,vec__5211,(0),null);
var use_macros__$1 = cljs.core.nth.call(null,vec__5211,(1),null);
=======
});})(docstring,mdocstr,args__$1,metadata,args__$2,name__$2,map__13767,map__13767__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__13768,map__13768__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,name__$1,vec__13763,seq__13764,first__13765,seq__13764__$1,___$2,first__13765__$1,seq__13764__$2,name,args,form))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [require_macros,use_macros], null));
var require_macros__$1 = cljs.core.nth.call(null,vec__13769,(0),null);
var use_macros__$1 = cljs.core.nth.call(null,vec__13769,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
cljs.analyzer._STAR_cljs_ns_STAR_ = name__$2;

var ns_info = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512),new cljs.core.Keyword(null,"renames","renames",343278368),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),new cljs.core.Keyword(null,"excludes","excludes",-1791725945),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"imports","imports",-1249933394),new cljs.core.Keyword(null,"requires","requires",-1201390927),new cljs.core.Keyword(null,"uses","uses",232664692),new cljs.core.Keyword(null,"require-macros","require-macros",707947416),new cljs.core.Keyword(null,"doc","doc",1913296891)],[rename_macros,cljs.core.merge.call(null,renames,core_renames__$1),use_macros__$1,excludes,name__$2,imports,requires,uses,require_macros__$1,(function (){var or__4131__auto__ = docstring;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return mdocstr;
}
})()]);
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name__$2], null),cljs.core.merge,ns_info);

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"deps","deps",1883360319),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.distinct.call(null,cljs.core.deref.call(null,deps))),new cljs.core.Keyword(null,"reload","reload",863702807),cljs.core.deref.call(null,reload),new cljs.core.Keyword(null,"reloads","reloads",610698522),cljs.core.deref.call(null,reloads)], null),(function (){var G__5233 = ns_info;
var G__5233__$1 = (cljs.core.truth_(cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"use","use",-1846382424)))?cljs.core.update_in.call(null,G__5233,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uses","uses",232664692)], null),((function (G__5233,ns_info,docstring,mdocstr,args__$1,metadata,args__$2,name__$2,map__5209,map__5209__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__5210,map__5210__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,vec__5211,require_macros__$1,use_macros__$1,name__$1,vec__5205,seq__5206,first__5207,seq__5206__$1,___$2,first__5207__$1,seq__5206__$2,name,args,form){
return (function (m){
return cljs.core.with_meta.call(null,m,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"use","use",-1846382424)),true]));
});})(G__5233,ns_info,docstring,mdocstr,args__$1,metadata,args__$2,name__$2,map__5209,map__5209__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__5210,map__5210__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,vec__5211,require_macros__$1,use_macros__$1,name__$1,vec__5205,seq__5206,first__5207,seq__5206__$1,___$2,first__5207__$1,seq__5206__$2,name,args,form))
):G__5233);
if(cljs.core.truth_(cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"require","require",-468001333)))){
return cljs.core.update_in.call(null,G__5233__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"requires","requires",-1201390927)], null),((function (G__5233,G__5233__$1,ns_info,docstring,mdocstr,args__$1,metadata,args__$2,name__$2,map__5209,map__5209__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__5210,map__5210__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,vec__5211,require_macros__$1,use_macros__$1,name__$1,vec__5205,seq__5206,first__5207,seq__5206__$1,___$2,first__5207__$1,seq__5206__$2,name,args,form){
return (function (m){
return cljs.core.with_meta.call(null,m,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"require","require",-468001333)),true]));
});})(G__5233,G__5233__$1,ns_info,docstring,mdocstr,args__$1,metadata,args__$2,name__$2,map__5209,map__5209__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__5210,map__5210__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,vec__5211,require_macros__$1,use_macros__$1,name__$1,vec__5205,seq__5206,first__5207,seq__5206__$1,___$2,first__5207__$1,seq__5206__$2,name,args,form))
);
} else {
return G__5233__$1;
=======
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"deps","deps",1883360319),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.distinct.call(null,cljs.core.deref.call(null,deps))),new cljs.core.Keyword(null,"reload","reload",863702807),cljs.core.deref.call(null,reload),new cljs.core.Keyword(null,"reloads","reloads",610698522),cljs.core.deref.call(null,reloads)], null),(function (){var G__13791 = ns_info;
var G__13791__$1 = (cljs.core.truth_(cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"use","use",-1846382424)))?cljs.core.update_in.call(null,G__13791,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uses","uses",232664692)], null),((function (G__13791,ns_info,docstring,mdocstr,args__$1,metadata,args__$2,name__$2,map__13767,map__13767__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__13768,map__13768__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,vec__13769,require_macros__$1,use_macros__$1,name__$1,vec__13763,seq__13764,first__13765,seq__13764__$1,___$2,first__13765__$1,seq__13764__$2,name,args,form){
return (function (m){
return cljs.core.with_meta.call(null,m,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"use","use",-1846382424)),true]));
});})(G__13791,ns_info,docstring,mdocstr,args__$1,metadata,args__$2,name__$2,map__13767,map__13767__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__13768,map__13768__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,vec__13769,require_macros__$1,use_macros__$1,name__$1,vec__13763,seq__13764,first__13765,seq__13764__$1,___$2,first__13765__$1,seq__13764__$2,name,args,form))
):G__13791);
if(cljs.core.truth_(cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"require","require",-468001333)))){
return cljs.core.update_in.call(null,G__13791__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"requires","requires",-1201390927)], null),((function (G__13791,G__13791__$1,ns_info,docstring,mdocstr,args__$1,metadata,args__$2,name__$2,map__13767,map__13767__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__13768,map__13768__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,vec__13769,require_macros__$1,use_macros__$1,name__$1,vec__13763,seq__13764,first__13765,seq__13764__$1,___$2,first__13765__$1,seq__13764__$2,name,args,form){
return (function (m){
return cljs.core.with_meta.call(null,m,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"require","require",-468001333)),true]));
});})(G__13791,G__13791__$1,ns_info,docstring,mdocstr,args__$1,metadata,args__$2,name__$2,map__13767,map__13767__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__13768,map__13768__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,vec__13769,require_macros__$1,use_macros__$1,name__$1,vec__13763,seq__13764,first__13765,seq__13764__$1,___$2,first__13765__$1,seq__13764__$2,name,args,form))
);
} else {
return G__13791__$1;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
}
})());
}));
cljs.analyzer.check_duplicate_aliases = (function cljs$analyzer$check_duplicate_aliases(env,old,new$){
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(old);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var seq__5238 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"requires","requires",-1201390927),new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null));
var chunk__5239 = null;
var count__5240 = (0);
var i__5241 = (0);
while(true){
if((i__5241 < count__5240)){
var k = cljs.core._nth.call(null,chunk__5239,i__5241);
var old_aliases_5258 = cljs.core.get.call(null,old,k);
var new_aliases_5259 = cljs.core.get.call(null,new$,k);
var temp__5724__auto___5260 = cljs.core.some.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,new_aliases_5259)),cljs.core.keys.call(null,cljs.core.remove.call(null,((function (seq__5238,chunk__5239,count__5240,i__5241,old_aliases_5258,new_aliases_5259,k,ns_name){
return (function (p__5250){
var vec__5251 = p__5250;
var k__$1 = cljs.core.nth.call(null,vec__5251,(0),null);
var v = cljs.core.nth.call(null,vec__5251,(1),null);
var entry = vec__5251;
return ((cljs.core._EQ_.call(null,k__$1,v)) || (cljs.core._EQ_.call(null,entry,cljs.core.find.call(null,new_aliases_5259,k__$1))));
});})(seq__5238,chunk__5239,count__5240,i__5241,old_aliases_5258,new_aliases_5259,k,ns_name))
,old_aliases_5258)));
if((temp__5724__auto___5260 == null)){
} else {
var alias_5261 = temp__5724__auto___5260;
throw cljs.analyzer.error.call(null,env,["Alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias_5261)," already exists in namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),", aliasing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,old_aliases_5258,alias_5261))].join(''));
}


var G__5262 = seq__5238;
var G__5263 = chunk__5239;
var G__5264 = count__5240;
var G__5265 = (i__5241 + (1));
seq__5238 = G__5262;
chunk__5239 = G__5263;
count__5240 = G__5264;
i__5241 = G__5265;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__5238);
if(temp__5720__auto__){
var seq__5238__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5238__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__5238__$1);
var G__5266 = cljs.core.chunk_rest.call(null,seq__5238__$1);
var G__5267 = c__4550__auto__;
var G__5268 = cljs.core.count.call(null,c__4550__auto__);
var G__5269 = (0);
seq__5238 = G__5266;
chunk__5239 = G__5267;
count__5240 = G__5268;
i__5241 = G__5269;
continue;
} else {
var k = cljs.core.first.call(null,seq__5238__$1);
var old_aliases_5270 = cljs.core.get.call(null,old,k);
var new_aliases_5271 = cljs.core.get.call(null,new$,k);
var temp__5724__auto___5272 = cljs.core.some.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,new_aliases_5271)),cljs.core.keys.call(null,cljs.core.remove.call(null,((function (seq__5238,chunk__5239,count__5240,i__5241,old_aliases_5270,new_aliases_5271,k,seq__5238__$1,temp__5720__auto__,ns_name){
return (function (p__5254){
var vec__5255 = p__5254;
var k__$1 = cljs.core.nth.call(null,vec__5255,(0),null);
var v = cljs.core.nth.call(null,vec__5255,(1),null);
var entry = vec__5255;
return ((cljs.core._EQ_.call(null,k__$1,v)) || (cljs.core._EQ_.call(null,entry,cljs.core.find.call(null,new_aliases_5271,k__$1))));
});})(seq__5238,chunk__5239,count__5240,i__5241,old_aliases_5270,new_aliases_5271,k,seq__5238__$1,temp__5720__auto__,ns_name))
,old_aliases_5270)));
if((temp__5724__auto___5272 == null)){
} else {
var alias_5273 = temp__5724__auto___5272;
throw cljs.analyzer.error.call(null,env,["Alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias_5273)," already exists in namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),", aliasing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,old_aliases_5270,alias_5273))].join(''));
}


var G__5274 = cljs.core.next.call(null,seq__5238__$1);
var G__5275 = null;
var G__5276 = (0);
var G__5277 = (0);
seq__5238 = G__5274;
chunk__5239 = G__5275;
count__5240 = G__5276;
i__5241 = G__5277;
=======
var seq__13796 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"requires","requires",-1201390927),new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null));
var chunk__13797 = null;
var count__13798 = (0);
var i__13799 = (0);
while(true){
if((i__13799 < count__13798)){
var k = cljs.core._nth.call(null,chunk__13797,i__13799);
var old_aliases_13816 = cljs.core.get.call(null,old,k);
var new_aliases_13817 = cljs.core.get.call(null,new$,k);
var temp__5724__auto___13818 = cljs.core.some.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,new_aliases_13817)),cljs.core.keys.call(null,cljs.core.remove.call(null,((function (seq__13796,chunk__13797,count__13798,i__13799,old_aliases_13816,new_aliases_13817,k,ns_name){
return (function (p__13808){
var vec__13809 = p__13808;
var k__$1 = cljs.core.nth.call(null,vec__13809,(0),null);
var v = cljs.core.nth.call(null,vec__13809,(1),null);
var entry = vec__13809;
return ((cljs.core._EQ_.call(null,k__$1,v)) || (cljs.core._EQ_.call(null,entry,cljs.core.find.call(null,new_aliases_13817,k__$1))));
});})(seq__13796,chunk__13797,count__13798,i__13799,old_aliases_13816,new_aliases_13817,k,ns_name))
,old_aliases_13816)));
if((temp__5724__auto___13818 == null)){
} else {
var alias_13819 = temp__5724__auto___13818;
throw cljs.analyzer.error.call(null,env,["Alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias_13819)," already exists in namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),", aliasing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,old_aliases_13816,alias_13819))].join(''));
}


var G__13820 = seq__13796;
var G__13821 = chunk__13797;
var G__13822 = count__13798;
var G__13823 = (i__13799 + (1));
seq__13796 = G__13820;
chunk__13797 = G__13821;
count__13798 = G__13822;
i__13799 = G__13823;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__13796);
if(temp__5720__auto__){
var seq__13796__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13796__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__13796__$1);
var G__13824 = cljs.core.chunk_rest.call(null,seq__13796__$1);
var G__13825 = c__4550__auto__;
var G__13826 = cljs.core.count.call(null,c__4550__auto__);
var G__13827 = (0);
seq__13796 = G__13824;
chunk__13797 = G__13825;
count__13798 = G__13826;
i__13799 = G__13827;
continue;
} else {
var k = cljs.core.first.call(null,seq__13796__$1);
var old_aliases_13828 = cljs.core.get.call(null,old,k);
var new_aliases_13829 = cljs.core.get.call(null,new$,k);
var temp__5724__auto___13830 = cljs.core.some.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,new_aliases_13829)),cljs.core.keys.call(null,cljs.core.remove.call(null,((function (seq__13796,chunk__13797,count__13798,i__13799,old_aliases_13828,new_aliases_13829,k,seq__13796__$1,temp__5720__auto__,ns_name){
return (function (p__13812){
var vec__13813 = p__13812;
var k__$1 = cljs.core.nth.call(null,vec__13813,(0),null);
var v = cljs.core.nth.call(null,vec__13813,(1),null);
var entry = vec__13813;
return ((cljs.core._EQ_.call(null,k__$1,v)) || (cljs.core._EQ_.call(null,entry,cljs.core.find.call(null,new_aliases_13829,k__$1))));
});})(seq__13796,chunk__13797,count__13798,i__13799,old_aliases_13828,new_aliases_13829,k,seq__13796__$1,temp__5720__auto__,ns_name))
,old_aliases_13828)));
if((temp__5724__auto___13830 == null)){
} else {
var alias_13831 = temp__5724__auto___13830;
throw cljs.analyzer.error.call(null,env,["Alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias_13831)," already exists in namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),", aliasing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,old_aliases_13828,alias_13831))].join(''));
}


var G__13832 = cljs.core.next.call(null,seq__13796__$1);
var G__13833 = null;
var G__13834 = (0);
var G__13835 = (0);
seq__13796 = G__13832;
chunk__13797 = G__13833;
count__13798 = G__13834;
i__13799 = G__13835;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
continue;
}
} else {
return null;
}
}
break;
}
});
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null),(function (_,env,p__5281,___$1,opts){
var vec__5282 = p__5281;
var ___$2 = cljs.core.nth.call(null,vec__5282,(0),null);
var quoted_specs = cljs.core.nth.call(null,vec__5282,(1),null);
var form = vec__5282;
var temp__5720__auto___5302 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__5282,___$2,quoted_specs,form){
return (function (p1__5278_SHARP_){
return ((cljs.core.seq_QMARK_.call(null,p1__5278_SHARP_)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,p1__5278_SHARP_))));
});})(vec__5282,___$2,quoted_specs,form))
,cljs.core.remove.call(null,cljs.core.keyword_QMARK_,quoted_specs)));
if(cljs.core.truth_(temp__5720__auto___5302)){
var not_quoted_5303 = temp__5720__auto___5302;
throw cljs.analyzer.error.call(null,env,["Arguments to ",cljs.core.name.call(null,cljs.core.first.call(null,quoted_specs))," must be quoted. Offending spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(not_quoted_5303)].join(''));
=======
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null),(function (_,env,p__13839,___$1,opts){
var vec__13840 = p__13839;
var ___$2 = cljs.core.nth.call(null,vec__13840,(0),null);
var quoted_specs = cljs.core.nth.call(null,vec__13840,(1),null);
var form = vec__13840;
var temp__5720__auto___13860 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__13840,___$2,quoted_specs,form){
return (function (p1__13836_SHARP_){
return ((cljs.core.seq_QMARK_.call(null,p1__13836_SHARP_)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,p1__13836_SHARP_))));
});})(vec__13840,___$2,quoted_specs,form))
,cljs.core.remove.call(null,cljs.core.keyword_QMARK_,quoted_specs)));
if(cljs.core.truth_(temp__5720__auto___13860)){
var not_quoted_13861 = temp__5720__auto___13860;
throw cljs.analyzer.error.call(null,env,["Arguments to ",cljs.core.name.call(null,cljs.core.first.call(null,quoted_specs))," must be quoted. Offending spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(not_quoted_13861)].join(''));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
} else {
}

if(cljs.analyzer._STAR_allow_ns_STAR_){
} else {
throw cljs.analyzer.error.call(null,env,["Calls to `",cljs.core.name.call(null,cljs.core.first.call(null,quoted_specs)),"` must appear at the top-level."].join(''));
}

var specs = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),cljs.core.first.call(null,quoted_specs)))?cljs.analyzer.canonicalize_import_specs.call(null,quoted_specs):cljs.analyzer.canonicalize_specs.call(null,quoted_specs));
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
var args = cljs.analyzer.desugar_ns_specs.call(null,(new cljs.core.List(null,specs,null,(1),null)));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var map__5285 = cljs.analyzer.parse_ns_excludes.call(null,env,args);
var map__5285__$1 = (((((!((map__5285 == null))))?(((((map__5285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5285):map__5285);
var excludes = cljs.core.get.call(null,map__5285__$1,new cljs.core.Keyword(null,"excludes","excludes",-1791725945));
var core_renames = cljs.core.get.call(null,map__5285__$1,new cljs.core.Keyword(null,"renames","renames",343278368));
var core_renames__$1 = cljs.core.reduce.call(null,((function (specs,name,args,map__5285,map__5285__$1,excludes,core_renames,vec__5282,___$2,quoted_specs,form){
return (function (m,p__5288){
var vec__5289 = p__5288;
var original = cljs.core.nth.call(null,vec__5289,(0),null);
var renamed = cljs.core.nth.call(null,vec__5289,(1),null);
return cljs.core.assoc.call(null,m,renamed,cljs.core.symbol.call(null,"cljs.core",cljs.core.str.cljs$core$IFn$_invoke$arity$1(original)));
});})(specs,name,args,map__5285,map__5285__$1,excludes,core_renames,vec__5282,___$2,quoted_specs,form))
=======
var map__13843 = cljs.analyzer.parse_ns_excludes.call(null,env,args);
var map__13843__$1 = (((((!((map__13843 == null))))?(((((map__13843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13843):map__13843);
var excludes = cljs.core.get.call(null,map__13843__$1,new cljs.core.Keyword(null,"excludes","excludes",-1791725945));
var core_renames = cljs.core.get.call(null,map__13843__$1,new cljs.core.Keyword(null,"renames","renames",343278368));
var core_renames__$1 = cljs.core.reduce.call(null,((function (specs,name,args,map__13843,map__13843__$1,excludes,core_renames,vec__13840,___$2,quoted_specs,form){
return (function (m,p__13846){
var vec__13847 = p__13846;
var original = cljs.core.nth.call(null,vec__13847,(0),null);
var renamed = cljs.core.nth.call(null,vec__13847,(1),null);
return cljs.core.assoc.call(null,m,renamed,cljs.core.symbol.call(null,"cljs.core",cljs.core.str.cljs$core$IFn$_invoke$arity$1(original)));
});})(specs,name,args,map__13843,map__13843__$1,excludes,core_renames,vec__13840,___$2,quoted_specs,form))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
,cljs.core.PersistentArrayMap.EMPTY,core_renames);
var deps = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var aliases = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fns","fns",1185138786),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"macros","macros",811339431),cljs.core.PersistentArrayMap.EMPTY], null));
var spec_parsers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"require","require",-468001333),cljs.core.partial.call(null,cljs.analyzer.parse_require_spec,env,false,deps,aliases),new cljs.core.Keyword(null,"require-macros","require-macros",707947416),cljs.core.partial.call(null,cljs.analyzer.parse_require_spec,env,true,deps,aliases),new cljs.core.Keyword(null,"use","use",-1846382424),cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.analyzer.parse_require_spec,env,false,deps,aliases),cljs.core.partial.call(null,cljs.analyzer.use__GT_require,env)),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.analyzer.parse_require_spec,env,true,deps,aliases),cljs.core.partial.call(null,cljs.analyzer.use__GT_require,env)),new cljs.core.Keyword(null,"import","import",-1399500709),cljs.core.partial.call(null,cljs.analyzer.parse_import_spec,env,deps)], null);
var reload = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),null], null));
var reloads = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var map__5286 = cljs.core.reduce.call(null,((function (specs,name,args,map__5285,map__5285__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,vec__5282,___$2,quoted_specs,form){
return (function (m,p__5292){
var vec__5293 = p__5292;
var seq__5294 = cljs.core.seq.call(null,vec__5293);
var first__5295 = cljs.core.first.call(null,seq__5294);
var seq__5294__$1 = cljs.core.next.call(null,seq__5294);
var k = first__5295;
var libs = seq__5294__$1;
=======
var map__13844 = cljs.core.reduce.call(null,((function (specs,name,args,map__13843,map__13843__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,vec__13840,___$2,quoted_specs,form){
return (function (m,p__13850){
var vec__13851 = p__13850;
var seq__13852 = cljs.core.seq.call(null,vec__13851);
var first__13853 = cljs.core.first.call(null,seq__13852);
var seq__13852__$1 = cljs.core.next.call(null,seq__13852);
var k = first__13853;
var libs = seq__13852__$1;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),k)){
} else {
if((!((cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reload","reload",863702807),null], null), null),libs) == null)))){
cljs.core.swap_BANG_.call(null,reload,cljs.core.assoc,k,new cljs.core.Keyword(null,"reload","reload",863702807));
} else {
}

if((!((cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null], null), null),libs) == null)))){
cljs.core.swap_BANG_.call(null,reload,cljs.core.assoc,k,new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
} else {
}
}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var temp__5724__auto___5304 = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (vec__5293,seq__5294,first__5295,seq__5294__$1,k,libs,specs,name,args,map__5285,map__5285__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,vec__5282,___$2,quoted_specs,form){
return (function (p1__5279_SHARP_){
return new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__5279_SHARP_));
});})(vec__5293,seq__5294,first__5295,seq__5294__$1,k,libs,specs,name,args,map__5285,map__5285__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,vec__5282,___$2,quoted_specs,form))
,libs));
if((temp__5724__auto___5304 == null)){
} else {
var xs_5305 = temp__5724__auto___5304;
cljs.core.swap_BANG_.call(null,reloads,cljs.core.assoc,k,cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.first,xs_5305),cljs.core.map.call(null,((function (xs_5305,temp__5724__auto___5304,vec__5293,seq__5294,first__5295,seq__5294__$1,k,libs,specs,name,args,map__5285,map__5285__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,vec__5282,___$2,quoted_specs,form){
return (function (p1__5280_SHARP_){
return new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__5280_SHARP_));
});})(xs_5305,temp__5724__auto___5304,vec__5293,seq__5294,first__5295,seq__5294__$1,k,libs,specs,name,args,map__5285,map__5285__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,vec__5282,___$2,quoted_specs,form))
,xs_5305)));
}

return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.merge,m,cljs.core.map.call(null,spec_parsers.call(null,k),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reload","reload",863702807),null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null], null), null),libs)));
});})(specs,name,args,map__5285,map__5285__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,vec__5282,___$2,quoted_specs,form))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,((function (specs,name,args,map__5285,map__5285__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,vec__5282,___$2,quoted_specs,form){
return (function (p__5296){
var vec__5297 = p__5296;
var r = cljs.core.nth.call(null,vec__5297,(0),null);
return cljs.core._EQ_.call(null,r,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440));
});})(specs,name,args,map__5285,map__5285__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,vec__5282,___$2,quoted_specs,form))
,args));
var map__5286__$1 = (((((!((map__5286 == null))))?(((((map__5286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5286):map__5286);
var params = map__5286__$1;
var uses = cljs.core.get.call(null,map__5286__$1,new cljs.core.Keyword(null,"use","use",-1846382424));
var requires = cljs.core.get.call(null,map__5286__$1,new cljs.core.Keyword(null,"require","require",-468001333));
var renames = cljs.core.get.call(null,map__5286__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var use_macros = cljs.core.get.call(null,map__5286__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var require_macros = cljs.core.get.call(null,map__5286__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var rename_macros = cljs.core.get.call(null,map__5286__$1,new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512));
var imports = cljs.core.get.call(null,map__5286__$1,new cljs.core.Keyword(null,"import","import",-1399500709));
=======
var temp__5724__auto___13862 = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (vec__13851,seq__13852,first__13853,seq__13852__$1,k,libs,specs,name,args,map__13843,map__13843__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,vec__13840,___$2,quoted_specs,form){
return (function (p1__13837_SHARP_){
return new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__13837_SHARP_));
});})(vec__13851,seq__13852,first__13853,seq__13852__$1,k,libs,specs,name,args,map__13843,map__13843__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,vec__13840,___$2,quoted_specs,form))
,libs));
if((temp__5724__auto___13862 == null)){
} else {
var xs_13863 = temp__5724__auto___13862;
cljs.core.swap_BANG_.call(null,reloads,cljs.core.assoc,k,cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.first,xs_13863),cljs.core.map.call(null,((function (xs_13863,temp__5724__auto___13862,vec__13851,seq__13852,first__13853,seq__13852__$1,k,libs,specs,name,args,map__13843,map__13843__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,vec__13840,___$2,quoted_specs,form){
return (function (p1__13838_SHARP_){
return new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__13838_SHARP_));
});})(xs_13863,temp__5724__auto___13862,vec__13851,seq__13852,first__13853,seq__13852__$1,k,libs,specs,name,args,map__13843,map__13843__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,vec__13840,___$2,quoted_specs,form))
,xs_13863)));
}

return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.merge,m,cljs.core.map.call(null,spec_parsers.call(null,k),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reload","reload",863702807),null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null], null), null),libs)));
});})(specs,name,args,map__13843,map__13843__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,vec__13840,___$2,quoted_specs,form))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,((function (specs,name,args,map__13843,map__13843__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,vec__13840,___$2,quoted_specs,form){
return (function (p__13854){
var vec__13855 = p__13854;
var r = cljs.core.nth.call(null,vec__13855,(0),null);
return cljs.core._EQ_.call(null,r,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440));
});})(specs,name,args,map__13843,map__13843__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,vec__13840,___$2,quoted_specs,form))
,args));
var map__13844__$1 = (((((!((map__13844 == null))))?(((((map__13844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13844):map__13844);
var params = map__13844__$1;
var uses = cljs.core.get.call(null,map__13844__$1,new cljs.core.Keyword(null,"use","use",-1846382424));
var requires = cljs.core.get.call(null,map__13844__$1,new cljs.core.Keyword(null,"require","require",-468001333));
var renames = cljs.core.get.call(null,map__13844__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var use_macros = cljs.core.get.call(null,map__13844__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var require_macros = cljs.core.get.call(null,map__13844__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var rename_macros = cljs.core.get.call(null,map__13844__$1,new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512));
var imports = cljs.core.get.call(null,map__13844__$1,new cljs.core.Keyword(null,"import","import",-1399500709));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
cljs.analyzer._STAR_cljs_ns_STAR_ = name;

var require_info = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512),new cljs.core.Keyword(null,"renames","renames",343278368),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),new cljs.core.Keyword(null,"excludes","excludes",-1791725945),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"imports","imports",-1249933394),new cljs.core.Keyword(null,"requires","requires",-1201390927),new cljs.core.Keyword(null,"uses","uses",232664692),new cljs.core.Keyword(null,"require-macros","require-macros",707947416)],[rename_macros,cljs.core.merge.call(null,renames,core_renames__$1),use_macros,excludes,name,imports,requires,uses,require_macros]);
var ns_info = (function (){var ns_info_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name], null));
if((cljs.core.count.call(null,ns_info_SINGLEQUOTE_) > (0))){
var merge_keys = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),new cljs.core.Keyword(null,"require-macros","require-macros",707947416),new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512),new cljs.core.Keyword(null,"uses","uses",232664692),new cljs.core.Keyword(null,"requires","requires",-1201390927),new cljs.core.Keyword(null,"renames","renames",343278368),new cljs.core.Keyword(null,"imports","imports",-1249933394)], null);
return cljs.core.merge.call(null,ns_info_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"excludes","excludes",-1791725945),excludes], null),cljs.core.merge_with.call(null,cljs.core.merge,cljs.core.select_keys.call(null,ns_info_SINGLEQUOTE_,merge_keys),cljs.core.select_keys.call(null,require_info,merge_keys)));
} else {
return require_info;
}
})();
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name], null),cljs.core.merge,ns_info);

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"ns*","ns*",200417856),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"deps","deps",1883360319),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.distinct.call(null,cljs.core.deref.call(null,deps))),new cljs.core.Keyword(null,"reload","reload",863702807),cljs.core.deref.call(null,reload),new cljs.core.Keyword(null,"reloads","reloads",610698522),cljs.core.deref.call(null,reloads)], null),(function (){var G__5301 = require_info;
var G__5301__$1 = (cljs.core.truth_(cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"use","use",-1846382424)))?cljs.core.update_in.call(null,G__5301,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uses","uses",232664692)], null),((function (G__5301,require_info,ns_info,specs,name,args,map__5285,map__5285__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,map__5286,map__5286__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,vec__5282,___$2,quoted_specs,form){
return (function (m){
return cljs.core.with_meta.call(null,m,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"use","use",-1846382424)),true]));
});})(G__5301,require_info,ns_info,specs,name,args,map__5285,map__5285__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,map__5286,map__5286__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,vec__5282,___$2,quoted_specs,form))
):G__5301);
if(cljs.core.truth_(cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"require","require",-468001333)))){
return cljs.core.update_in.call(null,G__5301__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"requires","requires",-1201390927)], null),((function (G__5301,G__5301__$1,require_info,ns_info,specs,name,args,map__5285,map__5285__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,map__5286,map__5286__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,vec__5282,___$2,quoted_specs,form){
return (function (m){
return cljs.core.with_meta.call(null,m,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"require","require",-468001333)),true]));
});})(G__5301,G__5301__$1,require_info,ns_info,specs,name,args,map__5285,map__5285__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,map__5286,map__5286__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,vec__5282,___$2,quoted_specs,form))
);
} else {
return G__5301__$1;
}
})());
}));
cljs.analyzer.parse_type = (function cljs$analyzer$parse_type(op,env,p__5306){
var vec__5307 = p__5306;
var _ = cljs.core.nth.call(null,vec__5307,(0),null);
var tsym = cljs.core.nth.call(null,vec__5307,(1),null);
var fields = cljs.core.nth.call(null,vec__5307,(2),null);
var pmasks = cljs.core.nth.call(null,vec__5307,(3),null);
var body = cljs.core.nth.call(null,vec__5307,(4),null);
var form = vec__5307;
var t = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),tsym));
var locals = cljs.core.reduce.call(null,((function (t,vec__5307,_,tsym,fields,pmasks,body,form){
return (function (m,fld){
return cljs.core.assoc.call(null,m,fld,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"mutable","mutable",875778266),new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"local","local",-1497766724)],[fld,true,cljs.analyzer.get_col.call(null,fld,env),new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,fld)),cljs.analyzer.get_line.call(null,fld,env),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,fld)),new cljs.core.Keyword(null,"mutable","mutable",875778266).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,fld)),new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,fld)),m.call(null,fld),new cljs.core.Keyword(null,"field","field",-1302436500)]));
});})(t,vec__5307,_,tsym,fields,pmasks,body,form))
,cljs.core.PersistentArrayMap.EMPTY,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),op))?cljs.core.concat.call(null,fields,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null)):fields));
var protocols = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tsym));
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword(null,"defs","defs",1398449717),tsym], null),((function (t,locals,protocols,vec__5307,_,tsym,fields,pmasks,body,form){
=======
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"ns*","ns*",200417856),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"deps","deps",1883360319),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.distinct.call(null,cljs.core.deref.call(null,deps))),new cljs.core.Keyword(null,"reload","reload",863702807),cljs.core.deref.call(null,reload),new cljs.core.Keyword(null,"reloads","reloads",610698522),cljs.core.deref.call(null,reloads)], null),(function (){var G__13859 = require_info;
var G__13859__$1 = (cljs.core.truth_(cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"use","use",-1846382424)))?cljs.core.update_in.call(null,G__13859,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uses","uses",232664692)], null),((function (G__13859,require_info,ns_info,specs,name,args,map__13843,map__13843__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,map__13844,map__13844__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,vec__13840,___$2,quoted_specs,form){
return (function (m){
return cljs.core.with_meta.call(null,m,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"use","use",-1846382424)),true]));
});})(G__13859,require_info,ns_info,specs,name,args,map__13843,map__13843__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,map__13844,map__13844__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,vec__13840,___$2,quoted_specs,form))
):G__13859);
if(cljs.core.truth_(cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"require","require",-468001333)))){
return cljs.core.update_in.call(null,G__13859__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"requires","requires",-1201390927)], null),((function (G__13859,G__13859__$1,require_info,ns_info,specs,name,args,map__13843,map__13843__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,map__13844,map__13844__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,vec__13840,___$2,quoted_specs,form){
return (function (m){
return cljs.core.with_meta.call(null,m,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"require","require",-468001333)),true]));
});})(G__13859,G__13859__$1,require_info,ns_info,specs,name,args,map__13843,map__13843__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,map__13844,map__13844__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,vec__13840,___$2,quoted_specs,form))
);
} else {
return G__13859__$1;
}
})());
}));
cljs.analyzer.parse_type = (function cljs$analyzer$parse_type(op,env,p__13864){
var vec__13865 = p__13864;
var _ = cljs.core.nth.call(null,vec__13865,(0),null);
var tsym = cljs.core.nth.call(null,vec__13865,(1),null);
var fields = cljs.core.nth.call(null,vec__13865,(2),null);
var pmasks = cljs.core.nth.call(null,vec__13865,(3),null);
var body = cljs.core.nth.call(null,vec__13865,(4),null);
var form = vec__13865;
var t = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),tsym));
var locals = cljs.core.reduce.call(null,((function (t,vec__13865,_,tsym,fields,pmasks,body,form){
return (function (m,fld){
return cljs.core.assoc.call(null,m,fld,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"mutable","mutable",875778266),new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"local","local",-1497766724)],[fld,true,cljs.analyzer.get_col.call(null,fld,env),new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,fld)),cljs.analyzer.get_line.call(null,fld,env),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,fld)),new cljs.core.Keyword(null,"mutable","mutable",875778266).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,fld)),new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,fld)),m.call(null,fld),new cljs.core.Keyword(null,"field","field",-1302436500)]));
});})(t,vec__13865,_,tsym,fields,pmasks,body,form))
,cljs.core.PersistentArrayMap.EMPTY,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),op))?cljs.core.concat.call(null,fields,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null)):fields));
var protocols = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tsym));
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword(null,"defs","defs",1398449717),tsym], null),((function (t,locals,protocols,vec__13865,_,tsym,fields,pmasks,body,form){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
return (function (m){
var m__$1 = cljs.core.assoc.call(null,(function (){var or__4131__auto__ = m;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword(null,"name","name",1843675177),t,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"function","function",-486723946,null),new cljs.core.Keyword(null,"type","type",1174270348),true,new cljs.core.Keyword(null,"num-fields","num-fields",1529154024),cljs.core.count.call(null,fields),new cljs.core.Keyword(null,"record","record",-779106859),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),op));
return cljs.core.merge.call(null,m__$1,cljs.core.dissoc.call(null,cljs.core.meta.call(null,tsym),new cljs.core.Keyword(null,"protocols","protocols",-5615896)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols], null),cljs.analyzer.source_info.call(null,tsym,env));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
});})(t,locals,protocols,vec__5307,_,tsym,fields,pmasks,body,form))
=======
});})(t,locals,protocols,vec__13865,_,tsym,fields,pmasks,body,form))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
);

return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"pmasks","pmasks",-871416698),new cljs.core.Keyword(null,"protocols","protocols",-5615896),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"body","body",-2049205669)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),pmasks,cljs.core.disj.call(null,protocols,new cljs.core.Symbol("cljs.core","Object","cljs.core/Object",-345545431,null)),fields,op,env,t,form,new cljs.core.Symbol(null,"function","function",-486723946,null),cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783),locals),body)]);
});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null),(function (_,env,form,___$1,___$2){
return cljs.analyzer.parse_type.call(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),env,form);
}));
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null),(function (_,env,form,___$1,___$2){
return cljs.analyzer.parse_type.call(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),env,form);
}));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
cljs.analyzer.property_symbol_QMARK_ = (function cljs$analyzer$property_symbol_QMARK_(p1__5310_SHARP_){
return cljs.core.boolean$.call(null,(function (){var and__4120__auto__ = (p1__5310_SHARP_ instanceof cljs.core.Symbol);
if(and__4120__auto__){
return cljs.core.re_matches.call(null,/^-.*/,cljs.core.name.call(null,p1__5310_SHARP_));
=======
cljs.analyzer.property_symbol_QMARK_ = (function cljs$analyzer$property_symbol_QMARK_(p1__13868_SHARP_){
return cljs.core.boolean$.call(null,(function (){var and__4120__auto__ = (p1__13868_SHARP_ instanceof cljs.core.Symbol);
if(and__4120__auto__){
return cljs.core.re_matches.call(null,/^-.*/,cljs.core.name.call(null,p1__13868_SHARP_));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
} else {
return and__4120__auto__;
}
})());
});
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
cljs.analyzer.classify_dot_form = (function cljs$analyzer$classify_dot_form(p__5311){
var vec__5312 = p__5311;
var target = cljs.core.nth.call(null,vec__5312,(0),null);
var member = cljs.core.nth.call(null,vec__5312,(1),null);
var args = cljs.core.nth.call(null,vec__5312,(2),null);
=======
cljs.analyzer.classify_dot_form = (function cljs$analyzer$classify_dot_form(p__13869){
var vec__13870 = p__13869;
var target = cljs.core.nth.call(null,vec__13870,(0),null);
var member = cljs.core.nth.call(null,vec__13870,(1),null);
var args = cljs.core.nth.call(null,vec__13870,(2),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((target == null))?new cljs.core.Keyword("cljs.analyzer","error","cljs.analyzer/error",-65289642):new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889)
),((cljs.analyzer.property_symbol_QMARK_.call(null,member))?new cljs.core.Keyword("cljs.analyzer","property","cljs.analyzer/property",1113330886):(((member instanceof cljs.core.Symbol))?new cljs.core.Keyword("cljs.analyzer","symbol","cljs.analyzer/symbol",933248902):((cljs.core.seq_QMARK_.call(null,member))?new cljs.core.Keyword("cljs.analyzer","list","cljs.analyzer/list",-539585923):new cljs.core.Keyword("cljs.analyzer","error","cljs.analyzer/error",-65289642)
))),(((args == null))?cljs.core.List.EMPTY:new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889)
)], null);
});
if((typeof cljs !== 'undefined') && (typeof cljs.analyzer !== 'undefined') && (typeof cljs.analyzer.build_dot_form !== 'undefined')){
} else {
cljs.analyzer.build_dot_form = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.analyzer","build-dot-form"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
return (function (p1__5315_SHARP_){
return cljs.analyzer.classify_dot_form.call(null,p1__5315_SHARP_);
=======
return (function (p1__13873_SHARP_){
return cljs.analyzer.classify_dot_form.call(null,p1__13873_SHARP_);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
cljs.core._add_method.call(null,cljs.analyzer.build_dot_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889),new cljs.core.Keyword("cljs.analyzer","property","cljs.analyzer/property",1113330886),cljs.core.List.EMPTY], null),(function (p__5316){
var vec__5317 = p__5316;
var target = cljs.core.nth.call(null,vec__5317,(0),null);
var prop = cljs.core.nth.call(null,vec__5317,(1),null);
var _ = cljs.core.nth.call(null,vec__5317,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dot-action","dot-action",-1460119601),new cljs.core.Keyword("cljs.analyzer","access","cljs.analyzer/access",-1639036494),new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"field","field",-1302436500),cljs.core.symbol.call(null,cljs.core.name.call(null,prop).substring((1)))], null);
}));
cljs.core._add_method.call(null,cljs.analyzer.build_dot_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889),new cljs.core.Keyword("cljs.analyzer","property","cljs.analyzer/property",1113330886),new cljs.core.Keyword("cljs.analyzer","list","cljs.analyzer/list",-539585923)], null),(function (p__5320){
var vec__5321 = p__5320;
var target = cljs.core.nth.call(null,vec__5321,(0),null);
var prop = cljs.core.nth.call(null,vec__5321,(1),null);
var args = cljs.core.nth.call(null,vec__5321,(2),null);
=======
cljs.core._add_method.call(null,cljs.analyzer.build_dot_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889),new cljs.core.Keyword("cljs.analyzer","property","cljs.analyzer/property",1113330886),cljs.core.List.EMPTY], null),(function (p__13874){
var vec__13875 = p__13874;
var target = cljs.core.nth.call(null,vec__13875,(0),null);
var prop = cljs.core.nth.call(null,vec__13875,(1),null);
var _ = cljs.core.nth.call(null,vec__13875,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dot-action","dot-action",-1460119601),new cljs.core.Keyword("cljs.analyzer","access","cljs.analyzer/access",-1639036494),new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"field","field",-1302436500),cljs.core.symbol.call(null,cljs.core.name.call(null,prop).substring((1)))], null);
}));
cljs.core._add_method.call(null,cljs.analyzer.build_dot_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889),new cljs.core.Keyword("cljs.analyzer","property","cljs.analyzer/property",1113330886),new cljs.core.Keyword("cljs.analyzer","list","cljs.analyzer/list",-539585923)], null),(function (p__13878){
var vec__13879 = p__13878;
var target = cljs.core.nth.call(null,vec__13879,(0),null);
var prop = cljs.core.nth.call(null,vec__13879,(1),null);
var args = cljs.core.nth.call(null,vec__13879,(2),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
throw (new Error(["Cannot provide arguments ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(args)," on property access ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop)].join('')));
}));
/**
 * Builds the intermediate method call map used to reason about the parsed form during
 *   compilation.
 */
cljs.analyzer.build_method_call = (function cljs$analyzer$build_method_call(target,meth,args){
if((meth instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dot-action","dot-action",-1460119601),new cljs.core.Keyword("cljs.analyzer","call","cljs.analyzer/call",964149800),new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"method","method",55703592),meth,new cljs.core.Keyword(null,"args","args",1315556576),args], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dot-action","dot-action",-1460119601),new cljs.core.Keyword("cljs.analyzer","call","cljs.analyzer/call",964149800),new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"method","method",55703592),cljs.core.first.call(null,meth),new cljs.core.Keyword(null,"args","args",1315556576),args], null);
}
});
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
cljs.core._add_method.call(null,cljs.analyzer.build_dot_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889),new cljs.core.Keyword("cljs.analyzer","symbol","cljs.analyzer/symbol",933248902),new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889)], null),(function (p__5324){
var vec__5325 = p__5324;
var target = cljs.core.nth.call(null,vec__5325,(0),null);
var meth = cljs.core.nth.call(null,vec__5325,(1),null);
var args = cljs.core.nth.call(null,vec__5325,(2),null);
return cljs.analyzer.build_method_call.call(null,target,meth,args);
}));
cljs.core._add_method.call(null,cljs.analyzer.build_dot_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889),new cljs.core.Keyword("cljs.analyzer","symbol","cljs.analyzer/symbol",933248902),cljs.core.List.EMPTY], null),(function (p__5328){
var vec__5329 = p__5328;
var target = cljs.core.nth.call(null,vec__5329,(0),null);
var meth = cljs.core.nth.call(null,vec__5329,(1),null);
var args = cljs.core.nth.call(null,vec__5329,(2),null);
return cljs.analyzer.build_method_call.call(null,target,meth,args);
}));
cljs.core._add_method.call(null,cljs.analyzer.build_dot_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889),new cljs.core.Keyword("cljs.analyzer","list","cljs.analyzer/list",-539585923),cljs.core.List.EMPTY], null),(function (p__5332){
var vec__5333 = p__5332;
var target = cljs.core.nth.call(null,vec__5333,(0),null);
var meth_expr = cljs.core.nth.call(null,vec__5333,(1),null);
var _ = cljs.core.nth.call(null,vec__5333,(2),null);
=======
cljs.core._add_method.call(null,cljs.analyzer.build_dot_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889),new cljs.core.Keyword("cljs.analyzer","symbol","cljs.analyzer/symbol",933248902),new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889)], null),(function (p__13882){
var vec__13883 = p__13882;
var target = cljs.core.nth.call(null,vec__13883,(0),null);
var meth = cljs.core.nth.call(null,vec__13883,(1),null);
var args = cljs.core.nth.call(null,vec__13883,(2),null);
return cljs.analyzer.build_method_call.call(null,target,meth,args);
}));
cljs.core._add_method.call(null,cljs.analyzer.build_dot_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889),new cljs.core.Keyword("cljs.analyzer","symbol","cljs.analyzer/symbol",933248902),cljs.core.List.EMPTY], null),(function (p__13886){
var vec__13887 = p__13886;
var target = cljs.core.nth.call(null,vec__13887,(0),null);
var meth = cljs.core.nth.call(null,vec__13887,(1),null);
var args = cljs.core.nth.call(null,vec__13887,(2),null);
return cljs.analyzer.build_method_call.call(null,target,meth,args);
}));
cljs.core._add_method.call(null,cljs.analyzer.build_dot_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889),new cljs.core.Keyword("cljs.analyzer","list","cljs.analyzer/list",-539585923),cljs.core.List.EMPTY], null),(function (p__13890){
var vec__13891 = p__13890;
var target = cljs.core.nth.call(null,vec__13891,(0),null);
var meth_expr = cljs.core.nth.call(null,vec__13891,(1),null);
var _ = cljs.core.nth.call(null,vec__13891,(2),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
return cljs.analyzer.build_method_call.call(null,target,cljs.core.first.call(null,meth_expr),cljs.core.rest.call(null,meth_expr));
}));
cljs.core._add_method.call(null,cljs.analyzer.build_dot_form,new cljs.core.Keyword(null,"default","default",-1987822328),(function (dot_form){
throw (new Error(["Unknown dot form of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,".",".",1975675962,null),dot_form))," with classification ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.classify_dot_form.call(null,dot_form))].join('')));
}));
cljs.analyzer.analyze_dot = (function cljs$analyzer$analyze_dot(env,target,field,member_PLUS_,form){
var v = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,field,member_PLUS_], null);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var map__5337 = cljs.analyzer.build_dot_form.call(null,v);
var map__5337__$1 = (((((!((map__5337 == null))))?(((((map__5337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5337):map__5337);
var dot_action = cljs.core.get.call(null,map__5337__$1,new cljs.core.Keyword(null,"dot-action","dot-action",-1460119601));
var target__$1 = cljs.core.get.call(null,map__5337__$1,new cljs.core.Keyword(null,"target","target",253001721));
var method = cljs.core.get.call(null,map__5337__$1,new cljs.core.Keyword(null,"method","method",55703592));
var field__$1 = cljs.core.get.call(null,map__5337__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var args = cljs.core.get.call(null,map__5337__$1,new cljs.core.Keyword(null,"args","args",1315556576));
=======
var map__13895 = cljs.analyzer.build_dot_form.call(null,v);
var map__13895__$1 = (((((!((map__13895 == null))))?(((((map__13895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13895):map__13895);
var dot_action = cljs.core.get.call(null,map__13895__$1,new cljs.core.Keyword(null,"dot-action","dot-action",-1460119601));
var target__$1 = cljs.core.get.call(null,map__13895__$1,new cljs.core.Keyword(null,"target","target",253001721));
var method = cljs.core.get.call(null,map__13895__$1,new cljs.core.Keyword(null,"method","method",55703592));
var field__$1 = cljs.core.get.call(null,map__13895__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var args = cljs.core.get.call(null,map__13895__$1,new cljs.core.Keyword(null,"args","args",1315556576));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
var enve = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var targetexpr = cljs.analyzer.analyze.call(null,enve,target__$1);
var form_meta = cljs.core.meta.call(null,form);
var target_tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(targetexpr);
var prop = (function (){var or__4131__auto__ = field__$1;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return method;
}
})();
var tag = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(form_meta);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (function (){var and__4120__auto__ = cljs.analyzer.js_tag_QMARK_.call(null,target_tag);
if(and__4120__auto__){
return cljs.core.vary_meta.call(null,cljs.analyzer.normalize_js_tag.call(null,target_tag),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prefix","prefix",-265908465)], null),cljs.core.fnil.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Object","Object",61210754,null)], null)),prop);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return null;
}
}
})();
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"constructor","constructor",-313397284,null),prop)) && ((!(clojure.string.starts_with_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"cljs$")))))){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"Object","Object",61210754,null),cljs.core.first.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tag))))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"warn-type","warn-type",-790105219),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"property","property",-1114278232),prop], null));
} else {
}

if(cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"js","js",-886355190,null),target_tag)){
if(cljs.core.truth_((function (){var or__4131__auto__ = (target_tag == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"any","any",-948528346,null),"null"], null), null).call(null,target_tag);
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warn-type","warn-type",-790105219),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var vec__5339_5344 = cljs.core.juxt.call(null,cljs.core.butlast,cljs.core.identity).call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tag)));
var pre_SINGLEQUOTE__5345 = cljs.core.nth.call(null,vec__5339_5344,(0),null);
var pre_5346 = cljs.core.nth.call(null,vec__5339_5344,(1),null);
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.analyzer.has_extern_QMARK_.call(null,pre_SINGLEQUOTE__5345);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,cljs.analyzer.has_extern_QMARK_.call(null,pre_5346));
=======
var vec__13897_13902 = cljs.core.juxt.call(null,cljs.core.butlast,cljs.core.identity).call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tag)));
var pre_SINGLEQUOTE__13903 = cljs.core.nth.call(null,vec__13897_13902,(0),null);
var pre_13904 = cljs.core.nth.call(null,vec__13897_13902,(1),null);
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.analyzer.has_extern_QMARK_.call(null,pre_SINGLEQUOTE__13903);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,cljs.analyzer.has_extern_QMARK_.call(null,pre_13904));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
} else {
return and__4120__auto__;
}
})())){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),env,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"warn-type","warn-type",-790105219),new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.symbol.call(null,"js",clojure.string.join.call(null,".",(function (){var G__5342 = pre_SINGLEQUOTE__5345;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),cljs.core.last.call(null,pre_SINGLEQUOTE__5345))){
return cljs.core.butlast.call(null,G__5342);
} else {
return G__5342;
=======
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),env,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"warn-type","warn-type",-790105219),new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.symbol.call(null,"js",clojure.string.join.call(null,".",(function (){var G__13900 = pre_SINGLEQUOTE__13903;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),cljs.core.last.call(null,pre_SINGLEQUOTE__13903))){
return cljs.core.butlast.call(null,G__13900);
} else {
return G__13900;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
}
})())),new cljs.core.Keyword(null,"property","property",-1114278232),prop], null));
} else {
}
} else {
}
} else {
}

if(cljs.analyzer.js_tag_QMARK_.call(null,tag)){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var pre_5347 = new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tag));
if(cljs.core.truth_(cljs.analyzer.has_extern_QMARK_.call(null,pre_5347))){
} else {
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword(null,"externs","externs",221720677)], null),pre_5347),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY);
=======
var pre_13905 = new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tag));
if(cljs.core.truth_(cljs.analyzer.has_extern_QMARK_.call(null,pre_13905))){
} else {
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword(null,"externs","externs",221720677)], null),pre_13905),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
}
} else {
}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__5343 = dot_action;
var G__5343__$1 = (((G__5343 instanceof cljs.core.Keyword))?G__5343.fqn:null);
switch (G__5343__$1) {
=======
var G__13901 = dot_action;
var G__13901__$1 = (((G__13901 instanceof cljs.core.Keyword))?G__13901.fqn:null);
switch (G__13901__$1) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
case "cljs.analyzer/access":
var children = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721)], null);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"host-field","host-field",-72662140),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"target","target",253001721),targetexpr,new cljs.core.Keyword(null,"field","field",-1302436500),field__$1,new cljs.core.Keyword(null,"children","children",-940561982),children,new cljs.core.Keyword(null,"tag","tag",-1290361223),((cljs.analyzer.js_tag_QMARK_.call(null,tag))?(function (){var or__4131__auto__ = cljs.analyzer.js_tag.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tag)),new cljs.core.Keyword(null,"tag","tag",-1290361223));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return tag;
}
})():tag)], null);

break;
case "cljs.analyzer/call":
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var argexprs = cljs.core.mapv.call(null,((function (G__5343,G__5343__$1,v,map__5337,map__5337__$1,dot_action,target__$1,method,field__$1,args,enve,targetexpr,form_meta,target_tag,prop,tag){
return (function (p1__5336_SHARP_){
return cljs.analyzer.analyze.call(null,enve,p1__5336_SHARP_);
});})(G__5343,G__5343__$1,v,map__5337,map__5337__$1,dot_action,target__$1,method,field__$1,args,enve,targetexpr,form_meta,target_tag,prop,tag))
=======
var argexprs = cljs.core.mapv.call(null,((function (G__13901,G__13901__$1,v,map__13895,map__13895__$1,dot_action,target__$1,method,field__$1,args,enve,targetexpr,form_meta,target_tag,prop,tag){
return (function (p1__13894_SHARP_){
return cljs.analyzer.analyze.call(null,enve,p1__13894_SHARP_);
});})(G__13901,G__13901__$1,v,map__13895,map__13895__$1,dot_action,target__$1,method,field__$1,args,enve,targetexpr,form_meta,target_tag,prop,tag))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
,args);
var children = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"args","args",1315556576)], null);
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"host-call","host-call",1059629755),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"target","target",253001721),targetexpr,new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"args","args",1315556576),argexprs,new cljs.core.Keyword(null,"children","children",-940561982),children,new cljs.core.Keyword(null,"tag","tag",-1290361223),((cljs.analyzer.js_tag_QMARK_.call(null,tag))?(function (){var or__4131__auto__ = cljs.analyzer.js_tag.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tag)),new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Symbol(null,"js","js",-886355190,null);
}
})():tag)], null);

break;
default:
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__5343__$1)].join('')));

}
});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,".",".",1975675962,null),(function (_,env,p__5349,___$1,___$2){
var vec__5350 = p__5349;
var seq__5351 = cljs.core.seq.call(null,vec__5350);
var first__5352 = cljs.core.first.call(null,seq__5351);
var seq__5351__$1 = cljs.core.next.call(null,seq__5351);
var ___$3 = first__5352;
var first__5352__$1 = cljs.core.first.call(null,seq__5351__$1);
var seq__5351__$2 = cljs.core.next.call(null,seq__5351__$1);
var target = first__5352__$1;
var vec__5353 = seq__5351__$2;
var seq__5354 = cljs.core.seq.call(null,vec__5353);
var first__5355 = cljs.core.first.call(null,seq__5354);
var seq__5354__$1 = cljs.core.next.call(null,seq__5354);
var field = first__5355;
var member_PLUS_ = seq__5354__$1;
var form = vec__5350;
var _STAR_recur_frames_STAR__orig_val__5356 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__5357 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__5357;

try{return cljs.analyzer.analyze_dot.call(null,env,target,field,member_PLUS_,form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__5356;
=======
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13901__$1)].join('')));

}
});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,".",".",1975675962,null),(function (_,env,p__13907,___$1,___$2){
var vec__13908 = p__13907;
var seq__13909 = cljs.core.seq.call(null,vec__13908);
var first__13910 = cljs.core.first.call(null,seq__13909);
var seq__13909__$1 = cljs.core.next.call(null,seq__13909);
var ___$3 = first__13910;
var first__13910__$1 = cljs.core.first.call(null,seq__13909__$1);
var seq__13909__$2 = cljs.core.next.call(null,seq__13909__$1);
var target = first__13910__$1;
var vec__13911 = seq__13909__$2;
var seq__13912 = cljs.core.seq.call(null,vec__13911);
var first__13913 = cljs.core.first.call(null,seq__13912);
var seq__13912__$1 = cljs.core.next.call(null,seq__13912);
var field = first__13913;
var member_PLUS_ = seq__13912__$1;
var form = vec__13908;
var _STAR_recur_frames_STAR__orig_val__13914 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__13915 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__13915;

try{return cljs.analyzer.analyze_dot.call(null,env,target,field,member_PLUS_,form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__13914;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
}}));
cljs.analyzer.get_js_tag = (function cljs$analyzer$get_js_tag(form){
var form_meta = cljs.core.meta.call(null,form);
var temp__5722__auto__ = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(form_meta);
if((temp__5722__auto__ == null)){
if(new cljs.core.Keyword(null,"numeric","numeric",-1495594714).cljs$core$IFn$_invoke$arity$1(form_meta) === true){
return new cljs.core.Symbol(null,"number","number",-1084057331,null);
} else {
return null;
}
} else {
var tag = temp__5722__auto__;
return tag;
}
});
cljs.analyzer.js_star_interp = (function cljs$analyzer$js_star_interp(env,s){
var idx = s.indexOf("~{");
if(((-1) === idx)){
return (new cljs.core.List(null,s,null,(1),null));
} else {
var end = s.indexOf("}",idx);
var inner = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,cljs.core.symbol.call(null,cljs.core.subs.call(null,s,((2) + idx),end))));
return (new cljs.core.LazySeq(null,((function (end,inner,idx){
return (function (){
return cljs.core.cons.call(null,cljs.core.subs.call(null,s,(0),idx),cljs.core.cons.call(null,inner,cljs.analyzer.js_star_interp.call(null,env,cljs.core.subs.call(null,s,(end + (1))))));
});})(end,inner,idx))
,null,null));
}
});
cljs.analyzer.js_star_seg = (function cljs$analyzer$js_star_seg(s){
var idx = s.indexOf("~{");
if(((-1) === idx)){
return (new cljs.core.List(null,s,null,(1),null));
} else {
var end = s.indexOf("}",idx);
return (new cljs.core.LazySeq(null,((function (end,idx){
return (function (){
return cljs.core.cons.call(null,cljs.core.subs.call(null,s,(0),idx),cljs.analyzer.js_star_seg.call(null,cljs.core.subs.call(null,s,(end + (1)))));
});})(end,idx))
,null,null));
}
});
cljs.analyzer.NUMERIC_SET = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"long","long",1469079434,null),"null",new cljs.core.Symbol(null,"double","double",-1769548886,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null"], null), null);
cljs.analyzer.numeric_type_QMARK_ = (function cljs$analyzer$numeric_type_QMARK_(t){
if((t == null)){
return true;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),t)){
return true;
} else {
if(cljs.analyzer.js_tag_QMARK_.call(null,t)){
return true;
} else {
if((((t instanceof cljs.core.Symbol)) && ((!((cljs.core.get.call(null,cljs.analyzer.NUMERIC_SET,t) == null)))))){
return true;
} else {
if(cljs.analyzer.cljs_set_QMARK_.call(null,t)){
return ((cljs.core.contains_QMARK_.call(null,t,new cljs.core.Symbol(null,"number","number",-1084057331,null))) || (cljs.core.contains_QMARK_.call(null,t,new cljs.core.Symbol(null,"long","long",1469079434,null))) || (cljs.core.contains_QMARK_.call(null,t,new cljs.core.Symbol(null,"double","double",-1769548886,null))) || (cljs.core.contains_QMARK_.call(null,t,new cljs.core.Symbol(null,"any","any",-948528346,null))) || (cljs.core.contains_QMARK_.call(null,t,new cljs.core.Symbol(null,"js","js",-886355190,null))));
} else {
return null;
}
}

}
}
}
});
cljs.analyzer.array_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"floats","floats",513591110,null),"null",new cljs.core.Symbol(null,"longs","longs",-1017696020,null),"null",new cljs.core.Symbol(null,"objects","objects",-554722035,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"doubles","doubles",-1517872169,null),"null",new cljs.core.Symbol(null,"chars","chars",545901210,null),"null",new cljs.core.Symbol(null,"ints","ints",-1761239845,null),"null",new cljs.core.Symbol(null,"shorts","shorts",107738238,null),"null",new cljs.core.Symbol(null,"bytes","bytes",-1478569089,null),"null"], null), null);
cljs.analyzer.array_type_QMARK_ = (function cljs$analyzer$array_type_QMARK_(t){
if((t == null)){
return true;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),t)){
return true;
} else {
if(cljs.analyzer.js_tag_QMARK_.call(null,t)){
return true;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"any","any",-948528346,null),t)){
return true;
} else {
if(cljs.core.contains_QMARK_.call(null,cljs.analyzer.array_types,t)){
return true;
} else {
return cljs.core.boolean$.call(null,((cljs.analyzer.cljs_set_QMARK_.call(null,t))?(function (){var or__4131__auto__ = cljs.core.contains_QMARK_.call(null,t,new cljs.core.Symbol(null,"any","any",-948528346,null));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = cljs.core.contains_QMARK_.call(null,t,new cljs.core.Symbol(null,"js","js",-886355190,null));
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
return cljs.core.some.call(null,cljs.analyzer.array_types,t);
}
}
})():null));

}
}
}
}
}
});
cljs.analyzer.analyze_js_star_STAR_ = (function cljs$analyzer$analyze_js_star_STAR_(env,jsform,args,form){
var enve = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var argexprs = cljs.core.vec.call(null,cljs.core.map.call(null,((function (enve){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
return (function (p1__5358_SHARP_){
return cljs.analyzer.analyze.call(null,enve,p1__5358_SHARP_);
=======
return (function (p1__13916_SHARP_){
return cljs.analyzer.analyze.call(null,enve,p1__13916_SHARP_);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
});})(enve))
,args));
var form_meta = cljs.core.meta.call(null,form);
var segs = cljs.analyzer.js_star_seg.call(null,jsform);
var tag = cljs.analyzer.get_js_tag.call(null,form);
var js_op = new cljs.core.Keyword(null,"js-op","js-op",-1046277897).cljs$core$IFn$_invoke$arity$1(form_meta);
var numeric = new cljs.core.Keyword(null,"numeric","numeric",-1495594714).cljs$core$IFn$_invoke$arity$1(form_meta);
var validate = ((function (enve,argexprs,form_meta,segs,tag,js_op,numeric){
return (function (warning_type,valid_types_QMARK_){
var types = cljs.core.map.call(null,((function (enve,argexprs,form_meta,segs,tag,js_op,numeric){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
return (function (p1__5359_SHARP_){
return cljs.analyzer.infer_tag.call(null,env,p1__5359_SHARP_);
=======
return (function (p1__13917_SHARP_){
return cljs.analyzer.infer_tag.call(null,env,p1__13917_SHARP_);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
});})(enve,argexprs,form_meta,segs,tag,js_op,numeric))
,argexprs);
if(cljs.core.truth_(valid_types_QMARK_.call(null,types))){
return null;
} else {
return cljs.analyzer.warning.call(null,warning_type,env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"js-op","js-op",-1046277897),js_op,new cljs.core.Keyword(null,"types","types",590030639),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,types)], null));
}
});})(enve,argexprs,form_meta,segs,tag,js_op,numeric))
;
var op_match_QMARK_ = ((function (enve,argexprs,form_meta,segs,tag,js_op,numeric,validate){
return (function (sym){
return cljs.core.symbol_identical_QMARK_.call(null,sym,new cljs.core.Keyword(null,"js-op","js-op",-1046277897).cljs$core$IFn$_invoke$arity$1(form_meta));
});})(enve,argexprs,form_meta,segs,tag,js_op,numeric,validate))
;
if(numeric === true){
validate.call(null,new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),((function (enve,argexprs,form_meta,segs,tag,js_op,numeric,validate,op_match_QMARK_){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
return (function (p1__5360_SHARP_){
return cljs.core.every_QMARK_.call(null,cljs.analyzer.numeric_type_QMARK_,p1__5360_SHARP_);
=======
return (function (p1__13918_SHARP_){
return cljs.core.every_QMARK_.call(null,cljs.analyzer.numeric_type_QMARK_,p1__13918_SHARP_);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
});})(enve,argexprs,form_meta,segs,tag,js_op,numeric,validate,op_match_QMARK_))
);
} else {
}

return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"segs","segs",-1940299576),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"js-op","js-op",-1046277897),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"tag","tag",-1290361223)],[argexprs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576)], null),numeric,segs,new cljs.core.Keyword(null,"js","js",1768080579),env,js_op,form,tag]);
});
cljs.analyzer.analyze_js_star = (function cljs$analyzer$analyze_js_star(env,jsform,args,form){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var _STAR_recur_frames_STAR__orig_val__5361 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__5362 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__5362;

try{return cljs.analyzer.analyze_js_star_STAR_.call(null,env,jsform,args,form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__5361;
}});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(function (op,env,p__5363,_,___$1){
var vec__5364 = p__5363;
var seq__5365 = cljs.core.seq.call(null,vec__5364);
var first__5366 = cljs.core.first.call(null,seq__5365);
var seq__5365__$1 = cljs.core.next.call(null,seq__5365);
var ___$2 = first__5366;
var first__5366__$1 = cljs.core.first.call(null,seq__5365__$1);
var seq__5365__$2 = cljs.core.next.call(null,seq__5365__$1);
var jsform = first__5366__$1;
var args = seq__5365__$2;
var form = vec__5364;
=======
var _STAR_recur_frames_STAR__orig_val__13919 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__13920 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__13920;

try{return cljs.analyzer.analyze_js_star_STAR_.call(null,env,jsform,args,form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__13919;
}});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(function (op,env,p__13921,_,___$1){
var vec__13922 = p__13921;
var seq__13923 = cljs.core.seq.call(null,vec__13922);
var first__13924 = cljs.core.first.call(null,seq__13923);
var seq__13923__$1 = cljs.core.next.call(null,seq__13923);
var ___$2 = first__13924;
var first__13924__$1 = cljs.core.first.call(null,seq__13923__$1);
var seq__13923__$2 = cljs.core.next.call(null,seq__13923__$1);
var jsform = first__13924__$1;
var args = seq__13923__$2;
var form = vec__13922;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
if(typeof jsform === 'string'){
} else {
throw cljs.analyzer.error.call(null,env,"Invalid js* form");
}

if((!((args == null)))){
return cljs.analyzer.analyze_js_star.call(null,env,jsform,args,form);
} else {
var code = cljs.core.apply.call(null,cljs.core.str,cljs.analyzer.js_star_interp.call(null,env,jsform));
var tag = cljs.analyzer.get_js_tag.call(null,form);
var form_meta = cljs.core.meta.call(null,form);
var js_op = new cljs.core.Keyword(null,"js-op","js-op",-1046277897).cljs$core$IFn$_invoke$arity$1(form_meta);
var numeric = new cljs.core.Keyword(null,"numeric","numeric",-1495594714).cljs$core$IFn$_invoke$arity$1(form_meta);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"js-op","js-op",-1046277897),js_op,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),numeric], null);
}
}));
cljs.analyzer.unsorted_map_QMARK_ = (function cljs$analyzer$unsorted_map_QMARK_(x){
return ((cljs.core.map_QMARK_.call(null,x)) && ((!(cljs.core.sorted_QMARK_.call(null,x)))));
});
/**
 * Mark a form as being analyzed. Assumes x satisfies IMeta. Useful to suppress
 *   warnings that will have been caught by a first compiler pass.
 */
cljs.analyzer.analyzed = (function cljs$analyzer$analyzed(x){
if(cljs.analyzer.unsorted_map_QMARK_.call(null,x)){
return cljs.core.assoc.call(null,x,new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162),true);
} else {
return cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162),true);

}
});
/**
 * Returns boolean if the form has already been marked as analyzed.
 */
cljs.analyzer.analyzed_QMARK_ = (function cljs$analyzer$analyzed_QMARK_(x){
return cljs.core.boolean$.call(null,((cljs.analyzer.unsorted_map_QMARK_.call(null,x))?new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162).cljs$core$IFn$_invoke$arity$1(x):new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,x))
));
});
cljs.analyzer.all_values_QMARK_ = (function cljs$analyzer$all_values_QMARK_(exprs){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
return cljs.core.every_QMARK_.call(null,(function (p1__5367_SHARP_){
return (((p1__5367_SHARP_ == null)) || ((p1__5367_SHARP_ instanceof cljs.core.Symbol)) || (typeof p1__5367_SHARP_ === 'string') || (typeof p1__5367_SHARP_ === 'number') || (p1__5367_SHARP_ === true) || (p1__5367_SHARP_ === false));
=======
return cljs.core.every_QMARK_.call(null,(function (p1__13925_SHARP_){
return (((p1__13925_SHARP_ == null)) || ((p1__13925_SHARP_ instanceof cljs.core.Symbol)) || (typeof p1__13925_SHARP_ === 'string') || (typeof p1__13925_SHARP_ === 'number') || (p1__13925_SHARP_ === true) || (p1__13925_SHARP_ === false));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
}),exprs);
});
cljs.analyzer.valid_arity_QMARK_ = (function cljs$analyzer$valid_arity_QMARK_(argc,method_params){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([argc]),cljs.core.map.call(null,cljs.core.count,method_params)));
});
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
cljs.analyzer.parse_invoke_STAR_ = (function cljs$analyzer$parse_invoke_STAR_(env,p__5369){
var vec__5370 = p__5369;
var seq__5371 = cljs.core.seq.call(null,vec__5370);
var first__5372 = cljs.core.first.call(null,seq__5371);
var seq__5371__$1 = cljs.core.next.call(null,seq__5371);
var f = first__5372;
var args = seq__5371__$1;
var form = vec__5370;
=======
cljs.analyzer.parse_invoke_STAR_ = (function cljs$analyzer$parse_invoke_STAR_(env,p__13927){
var vec__13928 = p__13927;
var seq__13929 = cljs.core.seq.call(null,vec__13928);
var first__13930 = cljs.core.first.call(null,seq__13929);
var seq__13929__$1 = cljs.core.next.call(null,seq__13929);
var f = first__13930;
var args = seq__13929__$1;
var form = vec__13928;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
var enve = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var fexpr = cljs.analyzer.analyze.call(null,enve,f);
var argc = cljs.core.count.call(null,args);
var fn_var_QMARK_ = new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(fexpr));
var kw_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(fexpr));
var cur_ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
var HO_invoke_QMARK_ = ((cljs.core.boolean$.call(null,cljs.analyzer._STAR_cljs_static_fns_STAR_)) && (cljs.core.not.call(null,fn_var_QMARK_)) && ((!(cljs.analyzer.js_tag_QMARK_.call(null,f)))) && ((!(kw_QMARK_))) && ((!(cljs.analyzer.analyzed_QMARK_.call(null,f)))));
var bind_f_expr_QMARK_ = ((HO_invoke_QMARK_) && ((!((f instanceof cljs.core.Symbol)))));
var bind_args_QMARK_ = ((HO_invoke_QMARK_) && ((!(cljs.analyzer.all_values_QMARK_.call(null,args)))));
if(fn_var_QMARK_){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var map__5373_5376 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(fexpr);
var map__5373_5377__$1 = (((((!((map__5373_5376 == null))))?(((((map__5373_5376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5373_5376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5373_5376):map__5373_5376);
var variadic_5378 = cljs.core.get.call(null,map__5373_5377__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var max_fixed_arity_5379 = cljs.core.get.call(null,map__5373_5377__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var method_params_5380 = cljs.core.get.call(null,map__5373_5377__$1,new cljs.core.Keyword(null,"method-params","method-params",-980792179));
var name_5381 = cljs.core.get.call(null,map__5373_5377__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var ns_5382 = cljs.core.get.call(null,map__5373_5377__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var macro_5383 = cljs.core.get.call(null,map__5373_5377__$1,new cljs.core.Keyword(null,"macro","macro",-867863404));
if(((cljs.core.not.call(null,(function (){var and__4120__auto__ = goog.string.endsWith(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cur_ns),"$macros");
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.symbol_identical_QMARK_.call(null,cur_ns,ns_5382)) && (macro_5383 === true));
} else {
return and__4120__auto__;
}
})())) && ((!(cljs.analyzer.valid_arity_QMARK_.call(null,argc,method_params_5380)))) && ((((!(variadic_5378))) || (((variadic_5378) && ((argc < max_fixed_arity_5379)))))))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name_5381,new cljs.core.Keyword(null,"argc","argc",-1452839519),argc], null));
=======
var map__13931_13934 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(fexpr);
var map__13931_13935__$1 = (((((!((map__13931_13934 == null))))?(((((map__13931_13934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13931_13934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13931_13934):map__13931_13934);
var variadic_13936 = cljs.core.get.call(null,map__13931_13935__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var max_fixed_arity_13937 = cljs.core.get.call(null,map__13931_13935__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var method_params_13938 = cljs.core.get.call(null,map__13931_13935__$1,new cljs.core.Keyword(null,"method-params","method-params",-980792179));
var name_13939 = cljs.core.get.call(null,map__13931_13935__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var ns_13940 = cljs.core.get.call(null,map__13931_13935__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var macro_13941 = cljs.core.get.call(null,map__13931_13935__$1,new cljs.core.Keyword(null,"macro","macro",-867863404));
if(((cljs.core.not.call(null,(function (){var and__4120__auto__ = goog.string.endsWith(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cur_ns),"$macros");
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.symbol_identical_QMARK_.call(null,cur_ns,ns_13940)) && (macro_13941 === true));
} else {
return and__4120__auto__;
}
})())) && ((!(cljs.analyzer.valid_arity_QMARK_.call(null,argc,method_params_13938)))) && ((((!(variadic_13936))) || (((variadic_13936) && ((argc < max_fixed_arity_13937)))))))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name_13939,new cljs.core.Keyword(null,"argc","argc",-1452839519),argc], null));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
} else {
}
} else {
}

if(((kw_QMARK_) && ((!(((((1) === argc)) || (((2) === argc)))))))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.first.call(null,form),new cljs.core.Keyword(null,"argc","argc",-1452839519),argc], null));
} else {
}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var deprecated_QMARK__5384 = new cljs.core.Keyword(null,"deprecated","deprecated",1498275348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(fexpr));
var no_warn_QMARK__5385 = new cljs.core.Keyword(null,"deprecation-nowarn","deprecation-nowarn",-1762828044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,form));
if(((cljs.core.boolean$.call(null,deprecated_QMARK__5384)) && ((!(cljs.core.boolean$.call(null,no_warn_QMARK__5385)))))){
=======
var deprecated_QMARK__13942 = new cljs.core.Keyword(null,"deprecated","deprecated",1498275348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(fexpr));
var no_warn_QMARK__13943 = new cljs.core.Keyword(null,"deprecation-nowarn","deprecation-nowarn",-1762828044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,form));
if(((cljs.core.boolean$.call(null,deprecated_QMARK__13942)) && ((!(cljs.core.boolean$.call(null,no_warn_QMARK__13943)))))){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fexpr","fexpr",-122857150),fexpr], null));
} else {
}

if((!((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(fexpr)) == null)))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fexpr","fexpr",-122857150),fexpr], null));
} else {
}

if(((bind_args_QMARK_) || (bind_f_expr_QMARK_))){
var arg_syms = ((bind_args_QMARK_)?cljs.core.take.call(null,argc,cljs.core.repeatedly.call(null,cljs.core.gensym)):null);
var f_sym = ((bind_f_expr_QMARK_)?cljs.core.gensym.call(null,"fexpr__"):null);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var bindings = (function (){var G__5375 = cljs.core.PersistentVector.EMPTY;
var G__5375__$1 = ((bind_args_QMARK_)?cljs.core.into.call(null,G__5375,cljs.core.interleave.call(null,arg_syms,args)):G__5375);
if(bind_f_expr_QMARK_){
return cljs.core.conj.call(null,G__5375__$1,f_sym,cljs.analyzer.analyzed.call(null,f));
} else {
return G__5375__$1;
=======
var bindings = (function (){var G__13933 = cljs.core.PersistentVector.EMPTY;
var G__13933__$1 = ((bind_args_QMARK_)?cljs.core.into.call(null,G__13933,cljs.core.interleave.call(null,arg_syms,args)):G__13933);
if(bind_f_expr_QMARK_){
return cljs.core.conj.call(null,G__13933__$1,f_sym,cljs.analyzer.analyzed.call(null,f));
} else {
return G__13933__$1;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
}
})();
return cljs.analyzer.analyze.call(null,env,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,bindings)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.analyzer.analyzed.call(null,((bind_f_expr_QMARK_)?f_sym:f)),null,(1),null)),((bind_args_QMARK_)?arg_syms:args)))),null,(1),null))))));
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var ana_expr = ((function (enve,fexpr,argc,fn_var_QMARK_,kw_QMARK_,cur_ns,HO_invoke_QMARK_,bind_f_expr_QMARK_,bind_args_QMARK_,vec__5370,seq__5371,first__5372,seq__5371__$1,f,args,form){
return (function (p1__5368_SHARP_){
return cljs.analyzer.analyze.call(null,enve,p1__5368_SHARP_);
});})(enve,fexpr,argc,fn_var_QMARK_,kw_QMARK_,cur_ns,HO_invoke_QMARK_,bind_f_expr_QMARK_,bind_args_QMARK_,vec__5370,seq__5371,first__5372,seq__5371__$1,f,args,form))
=======
var ana_expr = ((function (enve,fexpr,argc,fn_var_QMARK_,kw_QMARK_,cur_ns,HO_invoke_QMARK_,bind_f_expr_QMARK_,bind_args_QMARK_,vec__13928,seq__13929,first__13930,seq__13929__$1,f,args,form){
return (function (p1__13926_SHARP_){
return cljs.analyzer.analyze.call(null,enve,p1__13926_SHARP_);
});})(enve,fexpr,argc,fn_var_QMARK_,kw_QMARK_,cur_ns,HO_invoke_QMARK_,bind_f_expr_QMARK_,bind_args_QMARK_,vec__13928,seq__13929,first__13930,seq__13929__$1,f,args,form))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
;
var argexprs = cljs.core.mapv.call(null,ana_expr,args);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"invoke","invoke",1145927159),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"fn","fn",-1175266204),fexpr,new cljs.core.Keyword(null,"args","args",1315556576),argexprs,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null)], null);
}
});
cljs.analyzer.parse_invoke = (function cljs$analyzer$parse_invoke(env,form){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var _STAR_recur_frames_STAR__orig_val__5386 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__5387 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__5387;

try{return cljs.analyzer.parse_invoke_STAR_.call(null,env,form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__5386;
}});
cljs.analyzer.desugar_dotted_expr = (function cljs$analyzer$desugar_dotted_expr(p__5388){
var map__5389 = p__5388;
var map__5389__$1 = (((((!((map__5389 == null))))?(((((map__5389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5389):map__5389);
var expr = map__5389__$1;
var op = cljs.core.get.call(null,map__5389__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var G__5391 = op;
var G__5391__$1 = (((G__5391 instanceof cljs.core.Keyword))?G__5391.fqn:null);
switch (G__5391__$1) {
=======
var _STAR_recur_frames_STAR__orig_val__13944 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__13945 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__13945;

try{return cljs.analyzer.parse_invoke_STAR_.call(null,env,form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__13944;
}});
cljs.analyzer.desugar_dotted_expr = (function cljs$analyzer$desugar_dotted_expr(p__13946){
var map__13947 = p__13946;
var map__13947__$1 = (((((!((map__13947 == null))))?(((((map__13947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13947):map__13947);
var expr = map__13947__$1;
var op = cljs.core.get.call(null,map__13947__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var G__13949 = op;
var G__13949__$1 = (((G__13949 instanceof cljs.core.Keyword))?G__13949.fqn:null);
switch (G__13949__$1) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
case "var":
case "local":
if(cljs.analyzer.dotted_symbol_QMARK_.call(null,cljs.core.symbol.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(expr))))){
var s = cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(expr));
var idx = s.lastIndexOf(".");
var _ = ((cljs.core.not_EQ_.call(null,(idx + (1)),cljs.core.count.call(null,s)))?null:(function(){throw (new Error("Assert failed: (not= (inc idx) (count s))"))})());
var prefix = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,cljs.core.namespace.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(expr)),cljs.core.subs.call(null,s,(0),idx)),cljs.core.meta.call(null,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(expr)));
var field = cljs.core.symbol.call(null,cljs.core.subs.call(null,s,(idx + (1))));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(expr))){
} else {
throw (new Error("Assert failed: (not (:const-expr expr))"));
}

return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"host-field","host-field",-72662140),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(expr),new cljs.core.Keyword(null,"form","form",-1624062471),(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),(new cljs.core.List(null,prefix,(new cljs.core.List(null,field,null,(1),null)),(2),null)),(3),null)),new cljs.core.Keyword(null,"target","target",253001721),cljs.analyzer.desugar_dotted_expr.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,expr,new cljs.core.Keyword(null,"name","name",1843675177),prefix,new cljs.core.Keyword(null,"form","form",-1624062471),prefix),new cljs.core.Keyword(null,"tag","tag",-1290361223)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"name","name",1843675177)], null),prefix),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"context","context",-830191113)], null),new cljs.core.Keyword(null,"expr","expr",745722291))),new cljs.core.Keyword(null,"field","field",-1302436500),field,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(expr),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721)], null)], null);
} else {
return expr;
}

break;
default:
return expr;

}
});
/**
 * Finds the var associated with sym
 */
cljs.analyzer.analyze_symbol = (function cljs$analyzer$analyze_symbol(env,sym){
if(new cljs.core.Keyword(null,"quoted?","quoted?",1464649621).cljs$core$IFn$_invoke$arity$1(env)){
cljs.analyzer.register_constant_BANG_.call(null,env,sym);

return cljs.analyzer.analyze_wrap_meta.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"val","val",128701612),sym,new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),sym,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null)], null));
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var map__5393 = cljs.core.meta.call(null,sym);
var map__5393__$1 = (((((!((map__5393 == null))))?(((((map__5393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5393):map__5393);
var line = cljs.core.get.call(null,map__5393__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__5393__$1,new cljs.core.Keyword(null,"column","column",2078222095));
=======
var map__13951 = cljs.core.meta.call(null,sym);
var map__13951__$1 = (((((!((map__13951 == null))))?(((((map__13951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13951):map__13951);
var line = cljs.core.get.call(null,map__13951__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__13951__$1,new cljs.core.Keyword(null,"column","column",2078222095));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
var env__$1 = (((!((line == null))))?cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"line","line",212345235),line):env);
var env__$2 = (((!((column == null))))?cljs.core.assoc.call(null,env__$1,new cljs.core.Keyword(null,"column","column",2078222095),column):env__$1);
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),env__$2,new cljs.core.Keyword(null,"form","form",-1624062471),sym], null);
var lcls = new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(env__$2);
var temp__5722__auto__ = cljs.analyzer.handle_symbol_local.call(null,sym,cljs.core.get.call(null,lcls,sym));
if((temp__5722__auto__ == null)){
var sym_meta = cljs.core.meta.call(null,sym);
var sym_ns = cljs.core.namespace.call(null,sym);
var cur_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env__$2)));
var sym__$1 = (cljs.core.truth_((function (){var and__4120__auto__ = sym_ns;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = cljs.core.not_EQ_.call(null,sym_ns,"cljs.core");
if(and__4120__auto____$1){
var and__4120__auto____$2 = goog.string.endsWith(cur_ns,"$macros");
if(cljs.core.truth_(and__4120__auto____$2)){
return ((cljs.core.not.call(null,goog.string.endsWith(sym_ns,"$macros"))) && (cljs.core._EQ_.call(null,sym_ns,cljs.core.subs.call(null,cur_ns,(0),(cljs.core.count.call(null,cur_ns) - (7))))));
} else {
return and__4120__auto____$2;
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())?cljs.core.symbol.call(null,[sym_ns,"$macros"].join(''),cljs.core.name.call(null,sym)):sym);
var info = (((!(cljs.core.contains_QMARK_.call(null,sym_meta,new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162)))))?cljs.analyzer.resolve_existing_var.call(null,env__$2,sym__$1):cljs.analyzer.resolve_var.call(null,env__$2,sym__$1));
if(cljs.core.truth_(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(info))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(info)),"\n","(:op info)"].join('')));
}

return cljs.analyzer.desugar_dotted_expr.call(null,(((!(new cljs.core.Keyword(null,"def-var","def-var",-698214377).cljs$core$IFn$_invoke$arity$1(env__$2) === true)))?cljs.core.merge.call(null,cljs.core.assoc.call(null,ret,new cljs.core.Keyword(null,"info","info",-317069002),info),cljs.core.select_keys.call(null,info,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"tag","tag",-1290361223)], null)),(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5720__auto__)){
var const_expr = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292),const_expr], null);
} else {
return null;
}
})()):(function (){var info__$1 = cljs.analyzer.resolve_var.call(null,env__$2,sym__$1);
return cljs.core.merge.call(null,cljs.core.assoc.call(null,ret,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"info","info",-317069002),info__$1),cljs.core.select_keys.call(null,info__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"tag","tag",-1290361223)], null)));
})()));
} else {
var lb = temp__5722__auto__;
return cljs.core.merge.call(null,cljs.core.assoc.call(null,ret,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"local","local",-1497766724),new cljs.core.Keyword(null,"info","info",-317069002),lb),((cljs.core.map_QMARK_.call(null,lb))?cljs.core.select_keys.call(null,lb,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"local","local",-1497766724),new cljs.core.Keyword(null,"arg-id","arg-id",-767177868),new cljs.core.Keyword(null,"variadic?","variadic?",584179762),new cljs.core.Keyword(null,"init","init",-1875481434)], null)):null));
}
}
});
cljs.analyzer.excluded_QMARK_ = (function cljs$analyzer$excluded_QMARK_(env,sym){
return (((!((cljs.analyzer.gets.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"excludes","excludes",-1791725945),sym) == null)))) || ((!((cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs.analyzer.gets.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177)),new cljs.core.Keyword(null,"excludes","excludes",-1791725945),sym) == null)))));
});
cljs.analyzer.used_QMARK_ = (function cljs$analyzer$used_QMARK_(env,sym){
return (((!((cljs.analyzer.gets.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),sym) == null)))) || ((!((cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs.analyzer.gets.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177)),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),sym) == null)))));
});
cljs.analyzer.get_expander_ns = (function cljs$analyzer$get_expander_ns(env,nstr){
var res = (function (){var or__4131__auto__ = cljs.analyzer.resolve_macro_ns_alias.call(null,env,nstr,null);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.analyzer.resolve_ns_alias.call(null,env,nstr,null);
}
})();
var nstr__$1 = (((!((res == null))))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(res):nstr);
if(("clojure.core" === nstr__$1)){
return cljs.core.find_macros_ns.call(null,cljs.analyzer.CLJS_CORE_MACROS_SYM);
} else {
if(("clojure.repl" === nstr__$1)){
return cljs.core.find_macros_ns.call(null,new cljs.core.Symbol(null,"cljs.repl","cljs.repl",1767065658,null));
} else {
if(cljs.core.truth_(goog.string.contains(nstr__$1,"."))){
return cljs.core.find_macros_ns.call(null,cljs.core.symbol.call(null,nstr__$1));
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__5395 = env;
var G__5395__$1 = (((G__5395 == null))?null:new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(G__5395));
var G__5395__$2 = (((G__5395__$1 == null))?null:new cljs.core.Keyword(null,"require-macros","require-macros",707947416).cljs$core$IFn$_invoke$arity$1(G__5395__$1));
var G__5395__$3 = (((G__5395__$2 == null))?null:cljs.core.get.call(null,G__5395__$2,cljs.core.symbol.call(null,nstr__$1)));
if((G__5395__$3 == null)){
return null;
} else {
return cljs.core.find_macros_ns.call(null,G__5395__$3);
=======
var G__13953 = env;
var G__13953__$1 = (((G__13953 == null))?null:new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(G__13953));
var G__13953__$2 = (((G__13953__$1 == null))?null:new cljs.core.Keyword(null,"require-macros","require-macros",707947416).cljs$core$IFn$_invoke$arity$1(G__13953__$1));
var G__13953__$3 = (((G__13953__$2 == null))?null:cljs.core.get.call(null,G__13953__$2,cljs.core.symbol.call(null,nstr__$1)));
if((G__13953__$3 == null)){
return null;
} else {
return cljs.core.find_macros_ns.call(null,G__13953__$3);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
}

}
}
}
});
cljs.analyzer.get_expander_STAR_ = (function cljs$analyzer$get_expander_STAR_(sym,env){
if((((!((cljs.analyzer.gets.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783),sym) == null)))) || (((cljs.analyzer.excluded_QMARK_.call(null,env,sym)) && ((!(cljs.analyzer.used_QMARK_.call(null,env,sym)))))))){
return null;
} else {
var nstr = cljs.core.namespace.call(null,sym);
if((!((nstr == null)))){
var ns = cljs.analyzer.get_expander_ns.call(null,env,nstr);
if((!((ns == null)))){
return ns.findInternedVar(cljs.core.symbol.call(null,cljs.core.name.call(null,sym)));
} else {
return null;
}
} else {
if((!((cljs.analyzer.gets.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512),sym) == null)))){
var qualified_symbol = cljs.analyzer.gets.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512),sym);
var nsym = cljs.core.symbol.call(null,cljs.core.namespace.call(null,qualified_symbol));
var sym__$1 = cljs.core.symbol.call(null,cljs.core.name.call(null,qualified_symbol));
return cljs.core.find_macros_ns.call(null,nsym).findInternedVar(sym__$1);
} else {
var nsym = cljs.analyzer.gets.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),sym);
if((((!((nsym == null)))) && ((nsym instanceof cljs.core.Symbol)))){
return cljs.core.find_macros_ns.call(null,nsym).findInternedVar(sym);
} else {
return cljs.core.find_macros_ns.call(null,cljs.analyzer.CLJS_CORE_MACROS_SYM).findInternedVar(sym);
}

}
}
}
});
/**
 * Given a sym, a symbol identifying a macro, and env, an analysis environment
 * return the corresponding Clojure macroexpander.
 */
cljs.analyzer.get_expander = (function cljs$analyzer$get_expander(sym,env){
var mvar = cljs.analyzer.get_expander_STAR_.call(null,sym,env);
if((((!((mvar == null)))) && (mvar.isMacro()))){
return mvar;
} else {
return null;
}
});
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var cached_var_5396 = (new cljs.core.Delay((function (){
return cljs.core.get.call(null,cljs.core.ns_interns_STAR_.call(null,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null)),new cljs.core.Symbol(null,"macroexpand-check","macroexpand-check",699092091,null));
}),null));
cljs.analyzer.get_macroexpand_check_var = ((function (cached_var_5396){
return (function cljs$analyzer$get_macroexpand_check_var(){
if((!((cljs.core.find_ns_obj.call(null,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null)) == null)))){
return cljs.core.deref.call(null,cached_var_5396);
} else {
return null;
}
});})(cached_var_5396))
=======
var cached_var_13954 = (new cljs.core.Delay((function (){
return cljs.core.get.call(null,cljs.core.ns_interns_STAR_.call(null,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null)),new cljs.core.Symbol(null,"macroexpand-check","macroexpand-check",699092091,null));
}),null));
cljs.analyzer.get_macroexpand_check_var = ((function (cached_var_13954){
return (function cljs$analyzer$get_macroexpand_check_var(){
if((!((cljs.core.find_ns_obj.call(null,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null)) == null)))){
return cljs.core.deref.call(null,cached_var_13954);
} else {
return null;
}
});})(cached_var_13954))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
;
cljs.analyzer.var__GT_sym = (function cljs$analyzer$var__GT_sym(var$){
return var$.sym;
});
cljs.analyzer.do_macroexpand_check = (function cljs$analyzer$do_macroexpand_check(env,form,mac_var){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"spec-skip-macros","spec-skip-macros",-645015958).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var mchk = cljs.analyzer.get_macroexpand_check_var.call(null);
if((!((mchk == null)))){
try{return mchk.call(null,mac_var,cljs.core.next.call(null,form));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
}catch (e5397){var e = e5397;
=======
}catch (e13955){var e = e13955;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
throw cljs.core.ex_info.call(null,null,cljs.analyzer.error_data.call(null,env,new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373),cljs.analyzer.var__GT_sym.call(null,mac_var)),e);
}} else {
return null;
}
} else {
return null;
}
});
cljs.analyzer.macroexpand_1_STAR_ = (function cljs$analyzer$macroexpand_1_STAR_(env,form){
var op = cljs.core.first.call(null,form);
if(cljs.core.contains_QMARK_.call(null,cljs.analyzer.specials,op)){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"ns","ns",2082130287,null),op)){
cljs.analyzer.do_macroexpand_check.call(null,env,form,cljs.analyzer.get_expander.call(null,new cljs.core.Symbol("cljs.core","ns-special-form","cljs.core/ns-special-form",1585185745,null),env));
} else {
}

return form;
} else {
var temp__5722__auto__ = (((op instanceof cljs.core.Symbol))?cljs.analyzer.get_expander.call(null,op,env):null);
if((temp__5722__auto__ == null)){
if((op instanceof cljs.core.Symbol)){
var opname = cljs.core.str.cljs$core$IFn$_invoke$arity$1(op);
if(("." === opname.charAt((0)))){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var vec__5398 = cljs.core.next.call(null,form);
var seq__5399 = cljs.core.seq.call(null,vec__5398);
var first__5400 = cljs.core.first.call(null,seq__5399);
var seq__5399__$1 = cljs.core.next.call(null,seq__5399);
var target = first__5400;
var args = seq__5399__$1;
=======
var vec__13956 = cljs.core.next.call(null,form);
var seq__13957 = cljs.core.seq.call(null,vec__13956);
var first__13958 = cljs.core.first.call(null,seq__13957);
var seq__13957__$1 = cljs.core.next.call(null,seq__13957);
var target = first__13958;
var args = seq__13957__$1;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
return cljs.core.with_meta.call(null,cljs.core.list_STAR_.call(null,cljs.analyzer.DOT_SYM,target,cljs.core.symbol.call(null,cljs.core.subs.call(null,opname,(1))),args),cljs.core.meta.call(null,form));
} else {
if(("." === opname.charAt((opname.length - (1))))){
return cljs.core.with_meta.call(null,cljs.core.list_STAR_.call(null,cljs.analyzer.NEW_SYM,cljs.core.symbol.call(null,cljs.core.subs.call(null,opname,(0),(cljs.core.count.call(null,opname) - (1)))),cljs.core.next.call(null,form)),cljs.core.meta.call(null,form));
} else {
return form;

}
}
} else {
return form;
}
} else {
var mac_var = temp__5722__auto__;
cljs.analyzer.do_macroexpand_check.call(null,env,form,mac_var);

var form_SINGLEQUOTE_ = (function (){try{return cljs.core.apply.call(null,cljs.core.deref.call(null,mac_var),form,env,cljs.core.rest.call(null,form));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
}catch (e5401){var e = e5401;
=======
}catch (e13959){var e = e13959;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
throw cljs.core.ex_info.call(null,null,cljs.analyzer.error_data.call(null,env,new cljs.core.Keyword(null,"macroexpansion","macroexpansion",706274075),cljs.analyzer.var__GT_sym.call(null,mac_var)),e);
}})();
if(cljs.analyzer.cljs_seq_QMARK_.call(null,form_SINGLEQUOTE_)){
var sym_SINGLEQUOTE_ = cljs.core.first.call(null,form_SINGLEQUOTE_);
var sym = cljs.core.first.call(null,form);
if(cljs.core.symbol_identical_QMARK_.call(null,sym_SINGLEQUOTE_,cljs.analyzer.JS_STAR_SYM)){
var sym__$1 = (((!((cljs.core.namespace.call(null,sym) == null))))?sym:cljs.core.symbol.call(null,"cljs.core",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)));
var js_op = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"js-op","js-op",-1046277897),sym__$1], null);
var numeric = (function (){var mac_var_ns = cljs.core.symbol.call(null,cljs.core.namespace.call(null,mac_var.sym));
var mac_var_name = cljs.core.symbol.call(null,cljs.core.name.call(null,mac_var.sym));
return cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),mac_var_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),mac_var_name,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword("cljs.analyzer","numeric","cljs.analyzer/numeric",1415704188)], null));
})();
var js_op__$1 = ((numeric === true)?cljs.core.assoc.call(null,js_op,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),true):js_op);
return cljs.core.vary_meta.call(null,form_SINGLEQUOTE_,cljs.core.merge,js_op__$1);
} else {
return form_SINGLEQUOTE_;
}
} else {
return form_SINGLEQUOTE_;
}
}
}
});
/**
 * Given a env, an analysis environment, and form, a ClojureScript form,
 * macroexpand the form once.
 */
cljs.analyzer.macroexpand_1 = (function cljs$analyzer$macroexpand_1(env,form){
try{return cljs.analyzer.macroexpand_1_STAR_.call(null,env,form);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
}catch (e5402){var err__4393__auto__ = e5402;
if(cljs.analyzer.has_error_data_QMARK_.call(null,err__4393__auto__)){
throw err__4393__auto__;
} else {
if(cljs.analyzer.analysis_error_QMARK_.call(null,err__4393__auto__)){
throw cljs.core.ex_info.call(null,null,cljs.analyzer.error_data.call(null,env,new cljs.core.Keyword(null,"compilation","compilation",-1328774561)),err__4393__auto__);
} else {
throw cljs.core.ex_info.call(null,null,cljs.analyzer.error_data.call(null,env,new cljs.core.Keyword(null,"compilation","compilation",-1328774561)),cljs.analyzer.error.call(null,env,err__4393__auto__.message,err__4393__auto__));
=======
}catch (e13960){var err__12951__auto__ = e13960;
if(cljs.analyzer.has_error_data_QMARK_.call(null,err__12951__auto__)){
throw err__12951__auto__;
} else {
if(cljs.analyzer.analysis_error_QMARK_.call(null,err__12951__auto__)){
throw cljs.core.ex_info.call(null,null,cljs.analyzer.error_data.call(null,env,new cljs.core.Keyword(null,"compilation","compilation",-1328774561)),err__12951__auto__);
} else {
throw cljs.core.ex_info.call(null,null,cljs.analyzer.error_data.call(null,env,new cljs.core.Keyword(null,"compilation","compilation",-1328774561)),cljs.analyzer.error.call(null,env,err__12951__auto__.message,err__12951__auto__));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js

}
}
}});
cljs.analyzer.analyze_seq_STAR_ = (function cljs$analyzer$analyze_seq_STAR_(op,env,form,name,opts){
if(cljs.core.contains_QMARK_.call(null,cljs.analyzer.specials,op)){
return cljs.analyzer.parse.call(null,op,env,form,name,opts);
} else {
return cljs.analyzer.parse_invoke.call(null,env,form);
}
});
cljs.analyzer.analyze_seq_STAR__wrap = (function cljs$analyzer$analyze_seq_STAR__wrap(op,env,form,name,opts){
try{return cljs.analyzer.analyze_seq_STAR_.call(null,op,env,form,name,opts);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
}catch (e5403){var err__4393__auto__ = e5403;
if(cljs.analyzer.has_error_data_QMARK_.call(null,err__4393__auto__)){
throw err__4393__auto__;
} else {
if(cljs.analyzer.analysis_error_QMARK_.call(null,err__4393__auto__)){
throw cljs.core.ex_info.call(null,null,cljs.analyzer.error_data.call(null,env,new cljs.core.Keyword(null,"compilation","compilation",-1328774561)),err__4393__auto__);
} else {
throw cljs.core.ex_info.call(null,null,cljs.analyzer.error_data.call(null,env,new cljs.core.Keyword(null,"compilation","compilation",-1328774561)),cljs.analyzer.error.call(null,env,err__4393__auto__.message,err__4393__auto__));
=======
}catch (e13961){var err__12951__auto__ = e13961;
if(cljs.analyzer.has_error_data_QMARK_.call(null,err__12951__auto__)){
throw err__12951__auto__;
} else {
if(cljs.analyzer.analysis_error_QMARK_.call(null,err__12951__auto__)){
throw cljs.core.ex_info.call(null,null,cljs.analyzer.error_data.call(null,env,new cljs.core.Keyword(null,"compilation","compilation",-1328774561)),err__12951__auto__);
} else {
throw cljs.core.ex_info.call(null,null,cljs.analyzer.error_data.call(null,env,new cljs.core.Keyword(null,"compilation","compilation",-1328774561)),cljs.analyzer.error.call(null,env,err__12951__auto__.message,err__12951__auto__));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js

}
}
}});
cljs.analyzer.analyze_seq = (function cljs$analyzer$analyze_seq(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__5405 = arguments.length;
switch (G__5405) {
=======
var G__13963 = arguments.length;
switch (G__13963) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
case 3:
return cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$3 = (function (env,form,name){
return cljs.analyzer.analyze_seq.call(null,env,form,name,(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)):null));
});

cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$4 = (function (env,form,name,opts){
if(new cljs.core.Keyword(null,"quoted?","quoted?",1464649621).cljs$core$IFn$_invoke$arity$1(env)){
return cljs.analyzer.analyze_list.call(null,env,form);
} else {
var line = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,form));
var line__$1 = (((line == null))?new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env):line);
var col = new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,form));
var col__$1 = (((col == null))?new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(env):col);
var env__$1 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"line","line",212345235),line__$1,new cljs.core.Keyword(null,"column","column",2078222095),col__$1);
var op = cljs.core.first.call(null,form);
if((op == null)){
throw cljs.analyzer.error.call(null,env__$1,"Can't call nil");
} else {
}

var mform = cljs.analyzer.macroexpand_1.call(null,env__$1,form);
if((form === mform)){
return cljs.analyzer.analyze_seq_STAR__wrap.call(null,op,env__$1,form,name,opts);
} else {
return cljs.analyzer.analyze.call(null,env__$1,mform,name,opts);
}
}
});

cljs.analyzer.analyze_seq.cljs$lang$maxFixedArity = 4;

cljs.analyzer.analyze_map = (function cljs$analyzer$analyze_map(env,form){
var expr_env = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var ks = (function (){var _STAR_recur_frames_STAR__orig_val__5409 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__5410 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__5410;

try{return cljs.core.mapv.call(null,((function (_STAR_recur_frames_STAR__orig_val__5409,_STAR_recur_frames_STAR__temp_val__5410,expr_env){
return (function (p1__5407_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__5407_SHARP_);
});})(_STAR_recur_frames_STAR__orig_val__5409,_STAR_recur_frames_STAR__temp_val__5410,expr_env))
,cljs.core.keys.call(null,form));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__5409;
}})();
var vs = (function (){var _STAR_recur_frames_STAR__orig_val__5411 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__5412 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__5412;

try{return cljs.core.mapv.call(null,((function (_STAR_recur_frames_STAR__orig_val__5411,_STAR_recur_frames_STAR__temp_val__5412,expr_env,ks){
return (function (p1__5408_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__5408_SHARP_);
});})(_STAR_recur_frames_STAR__orig_val__5411,_STAR_recur_frames_STAR__temp_val__5412,expr_env,ks))
,cljs.core.vals.call(null,form));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__5411;
=======
var ks = (function (){var _STAR_recur_frames_STAR__orig_val__13967 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__13968 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__13968;

try{return cljs.core.mapv.call(null,((function (_STAR_recur_frames_STAR__orig_val__13967,_STAR_recur_frames_STAR__temp_val__13968,expr_env){
return (function (p1__13965_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__13965_SHARP_);
});})(_STAR_recur_frames_STAR__orig_val__13967,_STAR_recur_frames_STAR__temp_val__13968,expr_env))
,cljs.core.keys.call(null,form));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__13967;
}})();
var vs = (function (){var _STAR_recur_frames_STAR__orig_val__13969 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__13970 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__13970;

try{return cljs.core.mapv.call(null,((function (_STAR_recur_frames_STAR__orig_val__13969,_STAR_recur_frames_STAR__temp_val__13970,expr_env,ks){
return (function (p1__13966_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__13966_SHARP_);
});})(_STAR_recur_frames_STAR__orig_val__13969,_STAR_recur_frames_STAR__temp_val__13970,expr_env,ks))
,cljs.core.vals.call(null,form));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__13969;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
}})();
return cljs.analyzer.analyze_wrap_meta.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"keys","keys",1068423698),ks,new cljs.core.Keyword(null,"vals","vals",768058733),vs,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Keyword(null,"vals","vals",768058733)], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","IMap","cljs.core/IMap",1407777598,null)], null));
});
cljs.analyzer.analyze_list = (function cljs$analyzer$analyze_list(env,form){
var expr_env = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var items = (function (){var _STAR_recur_frames_STAR__orig_val__5414 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__5415 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__5415;

try{return cljs.core.mapv.call(null,((function (_STAR_recur_frames_STAR__orig_val__5414,_STAR_recur_frames_STAR__temp_val__5415,expr_env){
return (function (p1__5413_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__5413_SHARP_);
});})(_STAR_recur_frames_STAR__orig_val__5414,_STAR_recur_frames_STAR__temp_val__5415,expr_env))
,form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__5414;
=======
var items = (function (){var _STAR_recur_frames_STAR__orig_val__13972 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__13973 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__13973;

try{return cljs.core.mapv.call(null,((function (_STAR_recur_frames_STAR__orig_val__13972,_STAR_recur_frames_STAR__temp_val__13973,expr_env){
return (function (p1__13971_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__13971_SHARP_);
});})(_STAR_recur_frames_STAR__orig_val__13972,_STAR_recur_frames_STAR__temp_val__13973,expr_env))
,form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__13972;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
}})();
return cljs.analyzer.analyze_wrap_meta.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938)], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","IList","cljs.core/IList",1015168964,null)], null));
});
cljs.analyzer.analyze_vector = (function cljs$analyzer$analyze_vector(env,form){
var expr_env = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var items = (function (){var _STAR_recur_frames_STAR__orig_val__5417 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__5418 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__5418;

try{return cljs.core.mapv.call(null,((function (_STAR_recur_frames_STAR__orig_val__5417,_STAR_recur_frames_STAR__temp_val__5418,expr_env){
return (function (p1__5416_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__5416_SHARP_);
});})(_STAR_recur_frames_STAR__orig_val__5417,_STAR_recur_frames_STAR__temp_val__5418,expr_env))
,form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__5417;
=======
var items = (function (){var _STAR_recur_frames_STAR__orig_val__13975 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__13976 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__13976;

try{return cljs.core.mapv.call(null,((function (_STAR_recur_frames_STAR__orig_val__13975,_STAR_recur_frames_STAR__temp_val__13976,expr_env){
return (function (p1__13974_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__13974_SHARP_);
});})(_STAR_recur_frames_STAR__orig_val__13975,_STAR_recur_frames_STAR__temp_val__13976,expr_env))
,form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__13975;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
}})();
return cljs.analyzer.analyze_wrap_meta.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938)], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","IVector","cljs.core/IVector",1711112835,null)], null));
});
cljs.analyzer.analyze_set = (function cljs$analyzer$analyze_set(env,form){
var expr_env = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var items = (function (){var _STAR_recur_frames_STAR__orig_val__5420 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__5421 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__5421;

try{return cljs.core.mapv.call(null,((function (_STAR_recur_frames_STAR__orig_val__5420,_STAR_recur_frames_STAR__temp_val__5421,expr_env){
return (function (p1__5419_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__5419_SHARP_);
});})(_STAR_recur_frames_STAR__orig_val__5420,_STAR_recur_frames_STAR__temp_val__5421,expr_env))
,form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__5420;
=======
var items = (function (){var _STAR_recur_frames_STAR__orig_val__13978 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__13979 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__13979;

try{return cljs.core.mapv.call(null,((function (_STAR_recur_frames_STAR__orig_val__13978,_STAR_recur_frames_STAR__temp_val__13979,expr_env){
return (function (p1__13977_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__13977_SHARP_);
});})(_STAR_recur_frames_STAR__orig_val__13978,_STAR_recur_frames_STAR__temp_val__13979,expr_env))
,form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__13978;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
}})();
return cljs.analyzer.analyze_wrap_meta.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938)], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","ISet","cljs.core/ISet",2003412810,null)], null));
});
cljs.analyzer.analyze_js_value = (function cljs$analyzer$analyze_js_value(env,form){
var val = form.val;
var expr_env = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
if(cljs.core.map_QMARK_.call(null,val)){
var keys = cljs.core.vec.call(null,cljs.core.keys.call(null,val));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var vals = (function (){var _STAR_recur_frames_STAR__orig_val__5424 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__5425 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__5425;

try{return cljs.core.mapv.call(null,((function (_STAR_recur_frames_STAR__orig_val__5424,_STAR_recur_frames_STAR__temp_val__5425,keys,val,expr_env){
return (function (p1__5422_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__5422_SHARP_);
});})(_STAR_recur_frames_STAR__orig_val__5424,_STAR_recur_frames_STAR__temp_val__5425,keys,val,expr_env))
,cljs.core.vals.call(null,val));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__5424;
}})();
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"js-object","js-object",1830199158),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"keys","keys",1068423698),keys,new cljs.core.Keyword(null,"vals","vals",768058733),vals,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vals","vals",768058733)], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"object","object",-1179821820,null)], null);
} else {
var items = (function (){var _STAR_recur_frames_STAR__orig_val__5426 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__5427 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__5427;

try{return cljs.core.mapv.call(null,((function (_STAR_recur_frames_STAR__orig_val__5426,_STAR_recur_frames_STAR__temp_val__5427,val,expr_env){
return (function (p1__5423_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__5423_SHARP_);
});})(_STAR_recur_frames_STAR__orig_val__5426,_STAR_recur_frames_STAR__temp_val__5427,val,expr_env))
,val);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__5426;
=======
var vals = (function (){var _STAR_recur_frames_STAR__orig_val__13982 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__13983 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__13983;

try{return cljs.core.mapv.call(null,((function (_STAR_recur_frames_STAR__orig_val__13982,_STAR_recur_frames_STAR__temp_val__13983,keys,val,expr_env){
return (function (p1__13980_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__13980_SHARP_);
});})(_STAR_recur_frames_STAR__orig_val__13982,_STAR_recur_frames_STAR__temp_val__13983,keys,val,expr_env))
,cljs.core.vals.call(null,val));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__13982;
}})();
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"js-object","js-object",1830199158),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"keys","keys",1068423698),keys,new cljs.core.Keyword(null,"vals","vals",768058733),vals,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vals","vals",768058733)], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"object","object",-1179821820,null)], null);
} else {
var items = (function (){var _STAR_recur_frames_STAR__orig_val__13984 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__13985 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__13985;

try{return cljs.core.mapv.call(null,((function (_STAR_recur_frames_STAR__orig_val__13984,_STAR_recur_frames_STAR__temp_val__13985,val,expr_env){
return (function (p1__13981_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__13981_SHARP_);
});})(_STAR_recur_frames_STAR__orig_val__13984,_STAR_recur_frames_STAR__temp_val__13985,val,expr_env))
,val);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__13984;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
}})();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"js-array","js-array",-1210185421),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938)], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null)], null);
}
});
cljs.analyzer.record_ns_PLUS_name = (function cljs$analyzer$record_ns_PLUS_name(x){
return cljs.core.map.call(null,cljs.core.symbol,clojure.string.split.call(null,cljs.core.pr_str.call(null,cljs.core.type.call(null,x)),/\//));
});
cljs.analyzer.analyze_record = (function cljs$analyzer$analyze_record(env,x){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var _items_ = (function (){var _STAR_recur_frames_STAR__orig_val__5432 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__5433 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__5433;

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__5432;
}})();
var vec__5429 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__5429,(0),null);
var name = cljs.core.nth.call(null,vec__5429,(1),null);
=======
var _items_ = (function (){var _STAR_recur_frames_STAR__orig_val__13990 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__13991 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__13991;

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__13990;
}})();
var vec__13987 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__13987,(0),null);
var name = cljs.core.nth.call(null,vec__13987,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),x,new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name))], null);
});
cljs.analyzer.elide_reader_meta = (function cljs$analyzer$elide_reader_meta(m){
return cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"source","source",-433931539));
});
cljs.analyzer.elide_analyzer_meta = (function cljs$analyzer$elide_analyzer_meta(m){
return cljs.core.dissoc.call(null,m,new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162));
});
cljs.analyzer.elide_irrelevant_meta = (function cljs$analyzer$elide_irrelevant_meta(m){
return cljs.analyzer.elide_analyzer_meta.call(null,cljs.analyzer.elide_reader_meta.call(null,m));
});
cljs.analyzer.analyze_wrap_meta = (function cljs$analyzer$analyze_wrap_meta(expr){
var form = new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(expr);
var m = cljs.analyzer.elide_irrelevant_meta.call(null,cljs.core.meta.call(null,form));
if((!((cljs.core.seq.call(null,m) == null)))){
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(expr);
var expr__$1 = cljs.core.assoc_in.call(null,expr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"context","context",-830191113)], null),new cljs.core.Keyword(null,"expr","expr",745722291));
var meta_expr = cljs.analyzer.analyze_map.call(null,new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(expr__$1),m);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"meta","meta",1499536964),meta_expr,new cljs.core.Keyword(null,"expr","expr",745722291),expr__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"expr","expr",745722291)], null)], null);
} else {
return expr;
}
});
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
cljs.analyzer.infer_type = (function cljs$analyzer$infer_type(env,p__5435,_){
var map__5436 = p__5435;
var map__5436__$1 = (((((!((map__5436 == null))))?(((((map__5436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5436):map__5436);
var ast = map__5436__$1;
var tag = cljs.core.get.call(null,map__5436__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
if((((tag == null)) || (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"function","function",-486723946,null),tag)))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.core.update.call(null,ast,new cljs.core.Keyword(null,"methods","methods",453930866),((function (map__5436,map__5436__$1,ast,tag){
return (function (ms){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (map__5436,map__5436__$1,ast,tag){
return (function (p1__5434_SHARP_){
return cljs.analyzer.infer_type.call(null,env,p1__5434_SHARP_,_);
});})(map__5436,map__5436__$1,ast,tag))
),ms);
});})(map__5436,map__5436__$1,ast,tag))
=======
cljs.analyzer.infer_type = (function cljs$analyzer$infer_type(env,p__13993,_){
var map__13994 = p__13993;
var map__13994__$1 = (((((!((map__13994 == null))))?(((((map__13994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13994):map__13994);
var ast = map__13994__$1;
var tag = cljs.core.get.call(null,map__13994__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
if((((tag == null)) || (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"function","function",-486723946,null),tag)))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.core.update.call(null,ast,new cljs.core.Keyword(null,"methods","methods",453930866),((function (map__13994,map__13994__$1,ast,tag){
return (function (ms){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (map__13994,map__13994__$1,ast,tag){
return (function (p1__13992_SHARP_){
return cljs.analyzer.infer_type.call(null,env,p1__13992_SHARP_,_);
});})(map__13994,map__13994__$1,ast,tag))
),ms);
});})(map__13994,map__13994__$1,ast,tag))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
);
} else {
var temp__5722__auto__ = cljs.analyzer.infer_tag.call(null,env,ast);
if((temp__5722__auto__ == null)){
return ast;
} else {
var tag__$1 = temp__5722__auto__;
return cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag__$1);
}
}
} else {
return ast;
}
});
cljs.analyzer.repl_self_require_QMARK_ = (function cljs$analyzer$repl_self_require_QMARK_(env,deps){
var and__4120__auto__ = new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.analyzer._STAR_cljs_ns_STAR_]),deps);
} else {
return and__4120__auto__;
}
});
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
cljs.analyzer.invoke_arg_type_validators = (function (){var aget_validator = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"valid?","valid?",-212412379),(function (p1__5438_SHARP_){
return ((cljs.analyzer.array_type_QMARK_.call(null,cljs.core.first.call(null,p1__5438_SHARP_))) && (cljs.core.every_QMARK_.call(null,cljs.analyzer.numeric_type_QMARK_,cljs.core.rest.call(null,p1__5438_SHARP_))));
}),new cljs.core.Keyword(null,"warning-type","warning-type",1711103595),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236)], null);
var aset_validator = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"valid?","valid?",-212412379),((function (aget_validator){
return (function (p1__5439_SHARP_){
return ((cljs.analyzer.array_type_QMARK_.call(null,cljs.core.first.call(null,p1__5439_SHARP_))) && (cljs.core.every_QMARK_.call(null,cljs.analyzer.numeric_type_QMARK_,cljs.core.butlast.call(null,cljs.core.rest.call(null,p1__5439_SHARP_)))));
=======
cljs.analyzer.invoke_arg_type_validators = (function (){var aget_validator = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"valid?","valid?",-212412379),(function (p1__13996_SHARP_){
return ((cljs.analyzer.array_type_QMARK_.call(null,cljs.core.first.call(null,p1__13996_SHARP_))) && (cljs.core.every_QMARK_.call(null,cljs.analyzer.numeric_type_QMARK_,cljs.core.rest.call(null,p1__13996_SHARP_))));
}),new cljs.core.Keyword(null,"warning-type","warning-type",1711103595),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236)], null);
var aset_validator = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"valid?","valid?",-212412379),((function (aget_validator){
return (function (p1__13997_SHARP_){
return ((cljs.analyzer.array_type_QMARK_.call(null,cljs.core.first.call(null,p1__13997_SHARP_))) && (cljs.core.every_QMARK_.call(null,cljs.analyzer.numeric_type_QMARK_,cljs.core.butlast.call(null,cljs.core.rest.call(null,p1__13997_SHARP_)))));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
});})(aget_validator))
,new cljs.core.Keyword(null,"warning-type","warning-type",1711103595),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236)], null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("cljs.core","checked-aget","cljs.core/checked-aget",24024561,null),aget_validator,new cljs.core.Symbol("cljs.core","checked-aset","cljs.core/checked-aset",-2080232353,null),aset_validator,new cljs.core.Symbol("cljs.core","checked-aget'","cljs.core/checked-aget'",1960922245,null),aget_validator,new cljs.core.Symbol("cljs.core","checked-aset'","cljs.core/checked-aset'",163859714,null),aset_validator], null);
})();
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
cljs.analyzer.check_invoke_arg_types = (function cljs$analyzer$check_invoke_arg_types(env,p__5440,opts){
var map__5441 = p__5440;
var map__5441__$1 = (((((!((map__5441 == null))))?(((((map__5441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5441):map__5441);
var ast = map__5441__$1;
var op = cljs.core.get.call(null,map__5441__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
if((((!(cljs.analyzer.analyzed_QMARK_.call(null,ast)))) && (cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),op)))){
var temp__5724__auto___5448 = cljs.core.find.call(null,cljs.analyzer.invoke_arg_type_validators,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(ast))));
if((temp__5724__auto___5448 == null)){
} else {
var vec__5443_5449 = temp__5724__auto___5448;
var name_5450 = cljs.core.nth.call(null,vec__5443_5449,(0),null);
var map__5446_5451 = cljs.core.nth.call(null,vec__5443_5449,(1),null);
var map__5446_5452__$1 = (((((!((map__5446_5451 == null))))?(((((map__5446_5451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5446_5451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5446_5451):map__5446_5451);
var valid_QMARK__5453 = cljs.core.get.call(null,map__5446_5452__$1,new cljs.core.Keyword(null,"valid?","valid?",-212412379));
var warning_type_5454 = cljs.core.get.call(null,map__5446_5452__$1,new cljs.core.Keyword(null,"warning-type","warning-type",1711103595));
var types_5455 = cljs.core.mapv.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(valid_QMARK__5453.call(null,types_5455))){
} else {
cljs.analyzer.warning.call(null,warning_type_5454,env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name_5450,new cljs.core.Keyword(null,"types","types",590030639),types_5455], null));
=======
cljs.analyzer.check_invoke_arg_types = (function cljs$analyzer$check_invoke_arg_types(env,p__13998,opts){
var map__13999 = p__13998;
var map__13999__$1 = (((((!((map__13999 == null))))?(((((map__13999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13999):map__13999);
var ast = map__13999__$1;
var op = cljs.core.get.call(null,map__13999__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
if((((!(cljs.analyzer.analyzed_QMARK_.call(null,ast)))) && (cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),op)))){
var temp__5724__auto___14006 = cljs.core.find.call(null,cljs.analyzer.invoke_arg_type_validators,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(ast))));
if((temp__5724__auto___14006 == null)){
} else {
var vec__14001_14007 = temp__5724__auto___14006;
var name_14008 = cljs.core.nth.call(null,vec__14001_14007,(0),null);
var map__14004_14009 = cljs.core.nth.call(null,vec__14001_14007,(1),null);
var map__14004_14010__$1 = (((((!((map__14004_14009 == null))))?(((((map__14004_14009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14004_14009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14004_14009):map__14004_14009);
var valid_QMARK__14011 = cljs.core.get.call(null,map__14004_14010__$1,new cljs.core.Keyword(null,"valid?","valid?",-212412379));
var warning_type_14012 = cljs.core.get.call(null,map__14004_14010__$1,new cljs.core.Keyword(null,"warning-type","warning-type",1711103595));
var types_14013 = cljs.core.mapv.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(valid_QMARK__14011.call(null,types_14013))){
} else {
cljs.analyzer.warning.call(null,warning_type_14012,env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name_14008,new cljs.core.Keyword(null,"types","types",590030639),types_14013], null));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
}
}
} else {
}

return cljs.analyzer.analyzed.call(null,ast);
});
cljs.analyzer.analyze_form = (function cljs$analyzer$analyze_form(env,form,name,opts){
if((form instanceof cljs.core.Symbol)){
return cljs.analyzer.analyze_symbol.call(null,env,form);
} else {
if(((cljs.analyzer.cljs_seq_QMARK_.call(null,form)) && ((!((cljs.core.seq.call(null,form) == null)))))){
return cljs.analyzer.analyze_seq.call(null,env,form,name,opts);
} else {
if(cljs.core.record_QMARK_.call(null,form)){
return cljs.analyzer.analyze_record.call(null,env,form);
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,form)){
return cljs.analyzer.analyze_map.call(null,env,form);
} else {
if(cljs.analyzer.cljs_vector_QMARK_.call(null,form)){
return cljs.analyzer.analyze_vector.call(null,env,form);
} else {
if(cljs.analyzer.cljs_set_QMARK_.call(null,form)){
return cljs.analyzer.analyze_set.call(null,env,form);
} else {
if((form instanceof cljs.core.Keyword)){
return cljs.analyzer.analyze_keyword.call(null,env,form);
} else {
if((form instanceof cljs.tagged_literals.JSValue)){
return cljs.analyzer.analyze_js_value.call(null,env,form);
} else {
var tag = (((form == null))?cljs.analyzer.CLJ_NIL_SYM:((typeof form === 'number')?cljs.analyzer.NUMBER_SYM:((typeof form === 'string')?cljs.analyzer.STRING_SYM:((form === true)?cljs.analyzer.BOOLEAN_SYM:((form === false)?cljs.analyzer.BOOLEAN_SYM:((cljs.core._EQ_.call(null,cljs.core.List.EMPTY,form))?new cljs.core.Symbol("cljs.core","IList","cljs.core/IList",1015168964,null):null))))));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__5456 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"val","val",128701612),form,new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form], null);
if(cljs.core.truth_(tag)){
return cljs.core.assoc.call(null,G__5456,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag);
} else {
return G__5456;
=======
var G__14014 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"val","val",128701612),form,new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form], null);
if(cljs.core.truth_(tag)){
return cljs.core.assoc.call(null,G__14014,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag);
} else {
return G__14014;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
}

}
}
}
}
}
}
}
}
});
cljs.analyzer.analyze_STAR_ = (function cljs$analyzer$analyze_STAR_(env,form,name,opts){
var passes = cljs.analyzer._STAR_passes_STAR_;
var passes__$1 = (((passes == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.infer_type,cljs.analyzer.check_invoke_arg_types], null):passes);
var form__$1 = (((form instanceof cljs.core.LazySeq))?((cljs.core.seq.call(null,form))?form:cljs.core.List.EMPTY):form);
var ast = cljs.analyzer.analyze_form.call(null,env,form__$1,name,opts);
return cljs.core.reduce.call(null,((function (passes,passes__$1,form__$1,ast){
return (function (ast__$1,pass){
return pass.call(null,env,ast__$1,opts);
});})(passes,passes__$1,form__$1,ast))
,ast,passes__$1);
});
/**
 * Given an environment, a map containing {:locals (mapping of names to bindings), :context
 *   (one of :statement, :expr, :return), :ns (a symbol naming the
 *   compilation ns)}, and form, returns an expression object (a map
 *   containing at least :form, :op and :env keys). If expr has any (immediately)
 *   nested exprs, must have a :children entry. This must be a vector of keywords naming
 *   the immediately nested fields mapped to an expr or vector of exprs. This will
 *   facilitate code walking without knowing the details of the op set.
 */
cljs.analyzer.analyze = (function cljs$analyzer$analyze(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__5458 = arguments.length;
switch (G__5458) {
=======
var G__14016 = arguments.length;
switch (G__14016) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
case 2:
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 = (function (env,form){
return cljs.analyzer.analyze.call(null,env,form,null);
});

cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3 = (function (env,form,name){
return cljs.analyzer.analyze.call(null,env,form,name,(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)):null));
});

cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4 = (function (env,form,name,opts){
try{if(cljs.analyzer.analyzed_QMARK_.call(null,form)){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var _STAR_cljs_warnings_STAR__orig_val__5460 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__5461 = cljs.core.zipmap.call(null,cljs.core.keys.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.call(null,false));
cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__5461;

try{return cljs.analyzer.analyze_STAR_.call(null,env,form,name,opts);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__5460;
}} else {
return cljs.analyzer.analyze_STAR_.call(null,env,form,name,opts);
}
}catch (e5459){var err__4393__auto__ = e5459;
if(cljs.analyzer.has_error_data_QMARK_.call(null,err__4393__auto__)){
throw err__4393__auto__;
} else {
if(cljs.analyzer.analysis_error_QMARK_.call(null,err__4393__auto__)){
throw cljs.core.ex_info.call(null,null,cljs.analyzer.error_data.call(null,env,new cljs.core.Keyword(null,"compilation","compilation",-1328774561)),err__4393__auto__);
} else {
throw cljs.core.ex_info.call(null,null,cljs.analyzer.error_data.call(null,env,new cljs.core.Keyword(null,"compilation","compilation",-1328774561)),cljs.analyzer.error.call(null,env,err__4393__auto__.message,err__4393__auto__));
=======
var _STAR_cljs_warnings_STAR__orig_val__14018 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__14019 = cljs.core.zipmap.call(null,cljs.core.keys.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.call(null,false));
cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__14019;

try{return cljs.analyzer.analyze_STAR_.call(null,env,form,name,opts);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__14018;
}} else {
return cljs.analyzer.analyze_STAR_.call(null,env,form,name,opts);
}
}catch (e14017){var err__12951__auto__ = e14017;
if(cljs.analyzer.has_error_data_QMARK_.call(null,err__12951__auto__)){
throw err__12951__auto__;
} else {
if(cljs.analyzer.analysis_error_QMARK_.call(null,err__12951__auto__)){
throw cljs.core.ex_info.call(null,null,cljs.analyzer.error_data.call(null,env,new cljs.core.Keyword(null,"compilation","compilation",-1328774561)),err__12951__auto__);
} else {
throw cljs.core.ex_info.call(null,null,cljs.analyzer.error_data.call(null,env,new cljs.core.Keyword(null,"compilation","compilation",-1328774561)),cljs.analyzer.error.call(null,env,err__12951__auto__.message,err__12951__auto__));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js

}
}
}});

cljs.analyzer.analyze.cljs$lang$maxFixedArity = 4;

/**
 * Given a compiler state and a map from fully qualified symbols to constant
 *   EDN values, update the compiler state marking these vars as const to support
 *   direct substitution of these vars in source.
 */
cljs.analyzer.add_consts = (function cljs$analyzer$add_consts(compiler_state,constants_map){
return cljs.core.reduce_kv.call(null,(function (compiler_state__$1,sym,value){
var ns = cljs.core.symbol.call(null,cljs.core.namespace.call(null,sym));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
return cljs.core.update_in.call(null,compiler_state__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.call(null,cljs.core.name.call(null,sym))], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292),(function (){var _STAR_passes_STAR__orig_val__5463 = cljs.analyzer._STAR_passes_STAR_;
var _STAR_passes_STAR__temp_val__5464 = cljs.core.conj.call(null,cljs.analyzer._STAR_passes_STAR_,cljs.analyzer.replace_env_pass.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)], null)));
cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__temp_val__5464;

try{return cljs.analyzer.analyze.call(null,cljs.analyzer.empty_env.call(null),value);
}finally {cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__orig_val__5463;
=======
return cljs.core.update_in.call(null,compiler_state__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.call(null,cljs.core.name.call(null,sym))], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292),(function (){var _STAR_passes_STAR__orig_val__14021 = cljs.analyzer._STAR_passes_STAR_;
var _STAR_passes_STAR__temp_val__14022 = cljs.core.conj.call(null,cljs.analyzer._STAR_passes_STAR_,cljs.analyzer.replace_env_pass.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)], null)));
cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__temp_val__14022;

try{return cljs.analyzer.analyze.call(null,cljs.analyzer.empty_env.call(null),value);
}finally {cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__orig_val__14021;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
}})()], null));
}),compiler_state,constants_map);
});
cljs.analyzer.resolve_symbol = (function cljs$analyzer$resolve_symbol(sym){
if(((cljs.core.not.call(null,cljs.core.namespace.call(null,sym))) && (cljs.analyzer.dotted_symbol_QMARK_.call(null,sym)))){
return sym;
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1((function (){var _STAR_private_var_access_nowarn_STAR__orig_val__5465 = cljs.analyzer._STAR_private_var_access_nowarn_STAR_;
var _STAR_private_var_access_nowarn_STAR__temp_val__5466 = true;
cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__temp_val__5466;

try{return cljs.analyzer.resolve_var.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_)),sym);
}finally {cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__orig_val__5465;
}})());
}
});
var registry_ref_5467 = (new cljs.core.Delay((function (){
return cljs.core.get.call(null,cljs.core.ns_interns_STAR_.call(null,new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",-896343615,null)),new cljs.core.Symbol(null,"registry-ref","registry-ref",1975823941,null));
}),null));
var speced_vars_5468 = (new cljs.core.Delay(((function (registry_ref_5467){
return (function (){
return cljs.core.get.call(null,cljs.core.ns_interns_STAR_.call(null,new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",-896343615,null)),new cljs.core.Symbol(null,"-speced-vars","-speced-vars",1758723085,null));
});})(registry_ref_5467))
,null));
cljs.analyzer.get_spec_vars = ((function (registry_ref_5467,speced_vars_5468){
return (function cljs$analyzer$get_spec_vars(){
if((!((cljs.core.find_ns_obj.call(null,new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",-896343615,null)) == null)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"registry-ref","registry-ref",335292414),cljs.core.deref.call(null,registry_ref_5467),new cljs.core.Keyword(null,"speced-vars","speced-vars",-1813125988),cljs.core.deref.call(null,speced_vars_5468)], null);
} else {
return null;
}
});})(registry_ref_5467,speced_vars_5468))
=======
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1((function (){var _STAR_private_var_access_nowarn_STAR__orig_val__14023 = cljs.analyzer._STAR_private_var_access_nowarn_STAR_;
var _STAR_private_var_access_nowarn_STAR__temp_val__14024 = true;
cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__temp_val__14024;

try{return cljs.analyzer.resolve_var.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_)),sym);
}finally {cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__orig_val__14023;
}})());
}
});
var registry_ref_14025 = (new cljs.core.Delay((function (){
return cljs.core.get.call(null,cljs.core.ns_interns_STAR_.call(null,new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",-896343615,null)),new cljs.core.Symbol(null,"registry-ref","registry-ref",1975823941,null));
}),null));
var speced_vars_14026 = (new cljs.core.Delay(((function (registry_ref_14025){
return (function (){
return cljs.core.get.call(null,cljs.core.ns_interns_STAR_.call(null,new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",-896343615,null)),new cljs.core.Symbol(null,"-speced-vars","-speced-vars",1758723085,null));
});})(registry_ref_14025))
,null));
cljs.analyzer.get_spec_vars = ((function (registry_ref_14025,speced_vars_14026){
return (function cljs$analyzer$get_spec_vars(){
if((!((cljs.core.find_ns_obj.call(null,new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",-896343615,null)) == null)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"registry-ref","registry-ref",335292414),cljs.core.deref.call(null,registry_ref_14025),new cljs.core.Keyword(null,"speced-vars","speced-vars",-1813125988),cljs.core.deref.call(null,speced_vars_14026)], null);
} else {
return null;
}
});})(registry_ref_14025,speced_vars_14026))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
;
/**
 * Dumps registered speced vars for a given namespace into the compiler
 *   environment.
 */
cljs.analyzer.dump_specs = (function cljs$analyzer$dump_specs(ns){
var spec_vars = cljs.analyzer.get_spec_vars.call(null);
var ns_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
return cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns], null),cljs.core.merge,(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"registry-ref","registry-ref",335292414).cljs$core$IFn$_invoke$arity$1(spec_vars);
if(cljs.core.truth_(temp__5720__auto__)){
var registry_ref = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","registry-ref","cljs.spec/registry-ref",-71711915),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,((function (registry_ref,temp__5720__auto__,spec_vars,ns_str){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
return (function (p__5469){
var vec__5470 = p__5469;
var k = cljs.core.nth.call(null,vec__5470,(0),null);
var _ = cljs.core.nth.call(null,vec__5470,(1),null);
=======
return (function (p__14027){
var vec__14028 = p__14027;
var k = cljs.core.nth.call(null,vec__14028,(0),null);
var _ = cljs.core.nth.call(null,vec__14028,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
return cljs.core._EQ_.call(null,ns_str,cljs.core.namespace.call(null,k));
});})(registry_ref,temp__5720__auto__,spec_vars,ns_str))
),cljs.core.deref.call(null,cljs.core.deref.call(null,registry_ref)))], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"speced-vars","speced-vars",-1813125988).cljs$core$IFn$_invoke$arity$1(spec_vars);
if(cljs.core.truth_(temp__5720__auto__)){
var speced_vars = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","speced-vars","cljs.spec/speced-vars",1010010387),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,((function (speced_vars,temp__5720__auto__,spec_vars,ns_str){
return (function (v){
return ((cljs.core._EQ_.call(null,ns_str,cljs.core.namespace.call(null,v))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Keyword(null,"fdef-ns","fdef-ns",-1602124254).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))));
});})(speced_vars,temp__5720__auto__,spec_vars,ns_str))
),cljs.core.deref.call(null,cljs.core.deref.call(null,speced_vars)))], null);
} else {
return null;
}
})());
});
/**
 * Registers speced vars found in a namespace analysis cache.
 */
cljs.analyzer.register_specs = (function cljs$analyzer$register_specs(cached_ns){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var map__5473 = cljs.analyzer.get_spec_vars.call(null);
var map__5473__$1 = (((((!((map__5473 == null))))?(((((map__5473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5473):map__5473);
var registry_ref = cljs.core.get.call(null,map__5473__$1,new cljs.core.Keyword(null,"registry-ref","registry-ref",335292414));
var speced_vars = cljs.core.get.call(null,map__5473__$1,new cljs.core.Keyword(null,"speced-vars","speced-vars",-1813125988));
var temp__5720__auto___5475 = cljs.core.seq.call(null,new cljs.core.Keyword("cljs.spec","registry-ref","cljs.spec/registry-ref",-71711915).cljs$core$IFn$_invoke$arity$1(cached_ns));
if(temp__5720__auto___5475){
var registry_5476 = temp__5720__auto___5475;
if(cljs.core.truth_(registry_ref)){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,registry_ref),cljs.core.into,registry_5476);
=======
var map__14031 = cljs.analyzer.get_spec_vars.call(null);
var map__14031__$1 = (((((!((map__14031 == null))))?(((((map__14031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14031):map__14031);
var registry_ref = cljs.core.get.call(null,map__14031__$1,new cljs.core.Keyword(null,"registry-ref","registry-ref",335292414));
var speced_vars = cljs.core.get.call(null,map__14031__$1,new cljs.core.Keyword(null,"speced-vars","speced-vars",-1813125988));
var temp__5720__auto___14033 = cljs.core.seq.call(null,new cljs.core.Keyword("cljs.spec","registry-ref","cljs.spec/registry-ref",-71711915).cljs$core$IFn$_invoke$arity$1(cached_ns));
if(temp__5720__auto___14033){
var registry_14034 = temp__5720__auto___14033;
if(cljs.core.truth_(registry_ref)){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,registry_ref),cljs.core.into,registry_14034);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
} else {
}
} else {
}

var temp__5720__auto__ = cljs.core.seq.call(null,new cljs.core.Keyword("cljs.spec","speced-vars","cljs.spec/speced-vars",1010010387).cljs$core$IFn$_invoke$arity$1(cached_ns));
if(temp__5720__auto__){
var vars = temp__5720__auto__;
if(cljs.core.truth_(speced_vars)){
return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,speced_vars),cljs.core.into,vars);
} else {
return null;
}
} else {
return null;
}
});
cljs.analyzer.analyze_form_seq = (function cljs$analyzer$analyze_form_seq(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__5478 = arguments.length;
switch (G__5478) {
=======
var G__14036 = arguments.length;
switch (G__14036) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
case 1:
return cljs.analyzer.analyze_form_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.analyze_form_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.analyze_form_seq.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.analyze_form_seq.cljs$core$IFn$_invoke$arity$1 = (function (forms){
return cljs.analyzer.analyze_form_seq.call(null,forms,(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)):null));
});

cljs.analyzer.analyze_form_seq.cljs$core$IFn$_invoke$arity$2 = (function (forms,opts){
return cljs.analyzer.analyze_form_seq.call(null,forms,opts,false);
});

cljs.analyzer.analyze_form_seq.cljs$core$IFn$_invoke$arity$3 = (function (forms,opts,return_last_QMARK_){
var env = cljs.core.assoc.call(null,cljs.analyzer.empty_env.call(null),new cljs.core.Keyword(null,"build-options","build-options",1183685779),opts);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var _STAR_file_defs_STAR__orig_val__5479 = cljs.analyzer._STAR_file_defs_STAR_;
var _STAR_cljs_ns_STAR__orig_val__5480 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_cljs_file_STAR__orig_val__5481 = cljs.analyzer._STAR_cljs_file_STAR_;
var _STAR_alias_map_STAR__orig_val__5482 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_file_defs_STAR__temp_val__5483 = null;
var _STAR_cljs_ns_STAR__temp_val__5484 = new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
var _STAR_cljs_file_STAR__temp_val__5485 = null;
var _STAR_alias_map_STAR__temp_val__5486 = (function (){var or__4131__auto__ = cljs.tools.reader._STAR_alias_map_STAR_;
=======
var _STAR_file_defs_STAR__orig_val__14037 = cljs.analyzer._STAR_file_defs_STAR_;
var _STAR_cljs_ns_STAR__orig_val__14038 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_cljs_file_STAR__orig_val__14039 = cljs.analyzer._STAR_cljs_file_STAR_;
var _STAR_alias_map_STAR__orig_val__14040 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_file_defs_STAR__temp_val__14041 = null;
var _STAR_cljs_ns_STAR__temp_val__14042 = new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
var _STAR_cljs_file_STAR__temp_val__14043 = null;
var _STAR_alias_map_STAR__temp_val__14044 = (function (){var or__4131__auto__ = cljs.tools.reader._STAR_alias_map_STAR_;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
cljs.analyzer._STAR_file_defs_STAR_ = _STAR_file_defs_STAR__temp_val__5483;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__5484;

cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__temp_val__5485;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__5486;
=======
cljs.analyzer._STAR_file_defs_STAR_ = _STAR_file_defs_STAR__temp_val__14041;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__14042;

cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__temp_val__14043;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__14044;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js

try{var ns = null;
var forms__$1 = forms;
var last_ast = null;
while(true){
if((!((forms__$1 == null)))){
var form = cljs.core.first.call(null,forms__$1);
var env__$1 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_));
var ast = cljs.analyzer.analyze.call(null,env__$1,form,null,opts);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"ns","ns",441598760))){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
var G__5488 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast);
var G__5489 = cljs.core.next.call(null,forms__$1);
var G__5490 = ast;
ns = G__5488;
forms__$1 = G__5489;
last_ast = G__5490;
continue;
} else {
var G__5491 = ns;
var G__5492 = cljs.core.next.call(null,forms__$1);
var G__5493 = ast;
ns = G__5491;
forms__$1 = G__5492;
last_ast = G__5493;
=======
var G__14046 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast);
var G__14047 = cljs.core.next.call(null,forms__$1);
var G__14048 = ast;
ns = G__14046;
forms__$1 = G__14047;
last_ast = G__14048;
continue;
} else {
var G__14049 = ns;
var G__14050 = cljs.core.next.call(null,forms__$1);
var G__14051 = ast;
ns = G__14049;
forms__$1 = G__14050;
last_ast = G__14051;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
continue;
}
} else {
if(cljs.core.truth_(return_last_QMARK_)){
return last_ast;
} else {
return ns;
}
}
break;
}
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
}finally {cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__5482;

cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__orig_val__5481;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__5480;

cljs.analyzer._STAR_file_defs_STAR_ = _STAR_file_defs_STAR__orig_val__5479;
=======
}finally {cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__14040;

cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__orig_val__14039;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__14038;

cljs.analyzer._STAR_file_defs_STAR_ = _STAR_file_defs_STAR__orig_val__14037;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
}});

cljs.analyzer.analyze_form_seq.cljs$lang$maxFixedArity = 3;

/**
 * Ensures that a non-nil defs map exists in the compiler state for a given
 *   ns. (A non-nil defs map signifies that the namespace has been analyzed.)
 */
cljs.analyzer.ensure_defs = (function cljs$analyzer$ensure_defs(ns){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/analyzer.js
return cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null),(function (p1__5494_SHARP_){
var or__4131__auto__ = p1__5494_SHARP_;
=======
return cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null),(function (p1__14052_SHARP_){
var or__4131__auto__ = p1__14052_SHARP_;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/analyzer.js
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}));
});

//# sourceMappingURL=analyzer.js.map