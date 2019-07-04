// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('goog.Uri');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((!((self__.cached == null)))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.spec.gen.alpha/LazyVar");
});

/**
 * Positional factory function for cljs.spec.gen.alpha/LazyVar.
 */
cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__4736__auto__ = [];
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
var len__4730__auto___15016 = arguments.length;
var i__4731__auto___15017 = (0);
while(true){
if((i__4731__auto___15017 < len__4730__auto___15016)){
args__4736__auto__.push((arguments[i__4731__auto___15017]));

var G__15018 = (i__4731__auto___15017 + (1));
i__4731__auto___15017 = G__15018;
=======
var len__4730__auto___11598 = arguments.length;
var i__4731__auto___11599 = (0);
while(true){
if((i__4731__auto___11599 < len__4730__auto___11598)){
args__4736__auto__.push((arguments[i__4731__auto___11599]));

var G__11600 = (i__4731__auto___11599 + (1));
i__4731__auto___11599 = G__11600;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq15015){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15015));
=======
cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq11597){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11597));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__4736__auto__ = [];
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
var len__4730__auto___15020 = arguments.length;
var i__4731__auto___15021 = (0);
while(true){
if((i__4731__auto___15021 < len__4730__auto___15020)){
args__4736__auto__.push((arguments[i__4731__auto___15021]));

var G__15022 = (i__4731__auto___15021 + (1));
i__4731__auto___15021 = G__15022;
=======
var len__4730__auto___11602 = arguments.length;
var i__4731__auto___11603 = (0);
while(true){
if((i__4731__auto___11603 < len__4730__auto___11602)){
args__4736__auto__.push((arguments[i__4731__auto___11603]));

var G__11604 = (i__4731__auto___11603 + (1));
i__4731__auto___11603 = G__11604;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq15019){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15019));
});

var g_QMARK__15023 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq11601){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11601));
});

var g_QMARK__11605 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," never required"].join('')));
}
}),null));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
var g_15024 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__15023){
=======
var g_11606 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__11605){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
return (function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," never required"].join('')));
}
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
});})(g_QMARK__15023))
,null));
var mkg_15025 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__15023,g_15024){
=======
});})(g_QMARK__11605))
,null));
var mkg_11607 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__11605,g_11606){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
return (function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," never required"].join('')));
}
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
});})(g_QMARK__15023,g_15024))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__15023,g_15024,mkg_15025){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__15023).call(null,x);
});})(g_QMARK__15023,g_15024,mkg_15025))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__15023,g_15024,mkg_15025){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_15025).call(null,gfn);
});})(g_QMARK__15023,g_15024,mkg_15025))
=======
});})(g_QMARK__11605,g_11606))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__11605,g_11606,mkg_11607){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__11605).call(null,x);
});})(g_QMARK__11605,g_11606,mkg_11607))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__11605,g_11606,mkg_11607){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_11607).call(null,gfn);
});})(g_QMARK__11605,g_11606,mkg_11607))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;

/**
 * Generate a single value using generator.
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.generate = ((function (g_QMARK__15023,g_15024,mkg_15025){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_15024).call(null,generator);
});})(g_QMARK__15023,g_15024,mkg_15025))
=======
cljs.spec.gen.alpha.generate = ((function (g_QMARK__11605,g_11606,mkg_11607){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_11606).call(null,generator);
});})(g_QMARK__11605,g_11606,mkg_11607))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
var g__235__auto___15046 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
var g__235__auto___11628 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.hash_map = ((function (g__235__auto___15046){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15047 = arguments.length;
var i__4731__auto___15048 = (0);
while(true){
if((i__4731__auto___15048 < len__4730__auto___15047)){
args__4736__auto__.push((arguments[i__4731__auto___15048]));

var G__15049 = (i__4731__auto___15048 + (1));
i__4731__auto___15048 = G__15049;
=======
cljs.spec.gen.alpha.hash_map = ((function (g__235__auto___11628){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11629 = arguments.length;
var i__4731__auto___11630 = (0);
while(true){
if((i__4731__auto___11630 < len__4730__auto___11629)){
args__4736__auto__.push((arguments[i__4731__auto___11630]));

var G__11631 = (i__4731__auto___11630 + (1));
i__4731__auto___11630 = G__11631;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
});})(g__235__auto___15046))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__235__auto___15046){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__235__auto___15046),args);
});})(g__235__auto___15046))
=======
});})(g__235__auto___11628))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__235__auto___11628){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__235__auto___11628),args);
});})(g__235__auto___11628))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__235__auto___15046){
return (function (seq15026){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15026));
});})(g__235__auto___15046))
;


var g__235__auto___15050 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__235__auto___11628){
return (function (seq11608){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11608));
});})(g__235__auto___11628))
;


var g__235__auto___11632 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.list = ((function (g__235__auto___15050){
return (function cljs$spec$gen$alpha$list(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15051 = arguments.length;
var i__4731__auto___15052 = (0);
while(true){
if((i__4731__auto___15052 < len__4730__auto___15051)){
args__4736__auto__.push((arguments[i__4731__auto___15052]));

var G__15053 = (i__4731__auto___15052 + (1));
i__4731__auto___15052 = G__15053;
=======
cljs.spec.gen.alpha.list = ((function (g__235__auto___11632){
return (function cljs$spec$gen$alpha$list(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11633 = arguments.length;
var i__4731__auto___11634 = (0);
while(true){
if((i__4731__auto___11634 < len__4730__auto___11633)){
args__4736__auto__.push((arguments[i__4731__auto___11634]));

var G__11635 = (i__4731__auto___11634 + (1));
i__4731__auto___11634 = G__11635;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
});})(g__235__auto___15050))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__235__auto___15050){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__235__auto___15050),args);
});})(g__235__auto___15050))
=======
});})(g__235__auto___11632))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__235__auto___11632){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__235__auto___11632),args);
});})(g__235__auto___11632))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__235__auto___15050){
return (function (seq15027){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15027));
});})(g__235__auto___15050))
;


var g__235__auto___15054 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__235__auto___11632){
return (function (seq11609){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11609));
});})(g__235__auto___11632))
;


var g__235__auto___11636 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.map = ((function (g__235__auto___15054){
return (function cljs$spec$gen$alpha$map(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15055 = arguments.length;
var i__4731__auto___15056 = (0);
while(true){
if((i__4731__auto___15056 < len__4730__auto___15055)){
args__4736__auto__.push((arguments[i__4731__auto___15056]));

var G__15057 = (i__4731__auto___15056 + (1));
i__4731__auto___15056 = G__15057;
=======
cljs.spec.gen.alpha.map = ((function (g__235__auto___11636){
return (function cljs$spec$gen$alpha$map(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11637 = arguments.length;
var i__4731__auto___11638 = (0);
while(true){
if((i__4731__auto___11638 < len__4730__auto___11637)){
args__4736__auto__.push((arguments[i__4731__auto___11638]));

var G__11639 = (i__4731__auto___11638 + (1));
i__4731__auto___11638 = G__11639;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
});})(g__235__auto___15054))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__235__auto___15054){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__235__auto___15054),args);
});})(g__235__auto___15054))
=======
});})(g__235__auto___11636))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__235__auto___11636){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__235__auto___11636),args);
});})(g__235__auto___11636))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__235__auto___15054){
return (function (seq15028){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15028));
});})(g__235__auto___15054))
;


var g__235__auto___15058 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__235__auto___11636){
return (function (seq11610){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11610));
});})(g__235__auto___11636))
;


var g__235__auto___11640 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.not_empty = ((function (g__235__auto___15058){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15059 = arguments.length;
var i__4731__auto___15060 = (0);
while(true){
if((i__4731__auto___15060 < len__4730__auto___15059)){
args__4736__auto__.push((arguments[i__4731__auto___15060]));

var G__15061 = (i__4731__auto___15060 + (1));
i__4731__auto___15060 = G__15061;
=======
cljs.spec.gen.alpha.not_empty = ((function (g__235__auto___11640){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11641 = arguments.length;
var i__4731__auto___11642 = (0);
while(true){
if((i__4731__auto___11642 < len__4730__auto___11641)){
args__4736__auto__.push((arguments[i__4731__auto___11642]));

var G__11643 = (i__4731__auto___11642 + (1));
i__4731__auto___11642 = G__11643;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
});})(g__235__auto___15058))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__235__auto___15058){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__235__auto___15058),args);
});})(g__235__auto___15058))
=======
});})(g__235__auto___11640))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__235__auto___11640){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__235__auto___11640),args);
});})(g__235__auto___11640))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__235__auto___15058){
return (function (seq15029){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15029));
});})(g__235__auto___15058))
;


var g__235__auto___15062 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__235__auto___11640){
return (function (seq11611){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11611));
});})(g__235__auto___11640))
;


var g__235__auto___11644 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.set = ((function (g__235__auto___15062){
return (function cljs$spec$gen$alpha$set(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15063 = arguments.length;
var i__4731__auto___15064 = (0);
while(true){
if((i__4731__auto___15064 < len__4730__auto___15063)){
args__4736__auto__.push((arguments[i__4731__auto___15064]));

var G__15065 = (i__4731__auto___15064 + (1));
i__4731__auto___15064 = G__15065;
=======
cljs.spec.gen.alpha.set = ((function (g__235__auto___11644){
return (function cljs$spec$gen$alpha$set(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11645 = arguments.length;
var i__4731__auto___11646 = (0);
while(true){
if((i__4731__auto___11646 < len__4730__auto___11645)){
args__4736__auto__.push((arguments[i__4731__auto___11646]));

var G__11647 = (i__4731__auto___11646 + (1));
i__4731__auto___11646 = G__11647;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
});})(g__235__auto___15062))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__235__auto___15062){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__235__auto___15062),args);
});})(g__235__auto___15062))
=======
});})(g__235__auto___11644))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__235__auto___11644){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__235__auto___11644),args);
});})(g__235__auto___11644))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__235__auto___15062){
return (function (seq15030){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15030));
});})(g__235__auto___15062))
;


var g__235__auto___15066 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__235__auto___11644){
return (function (seq11612){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11612));
});})(g__235__auto___11644))
;


var g__235__auto___11648 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.vector = ((function (g__235__auto___15066){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15067 = arguments.length;
var i__4731__auto___15068 = (0);
while(true){
if((i__4731__auto___15068 < len__4730__auto___15067)){
args__4736__auto__.push((arguments[i__4731__auto___15068]));

var G__15069 = (i__4731__auto___15068 + (1));
i__4731__auto___15068 = G__15069;
=======
cljs.spec.gen.alpha.vector = ((function (g__235__auto___11648){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11649 = arguments.length;
var i__4731__auto___11650 = (0);
while(true){
if((i__4731__auto___11650 < len__4730__auto___11649)){
args__4736__auto__.push((arguments[i__4731__auto___11650]));

var G__11651 = (i__4731__auto___11650 + (1));
i__4731__auto___11650 = G__11651;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
});})(g__235__auto___15066))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__235__auto___15066){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__235__auto___15066),args);
});})(g__235__auto___15066))
=======
});})(g__235__auto___11648))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__235__auto___11648){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__235__auto___11648),args);
});})(g__235__auto___11648))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__235__auto___15066){
return (function (seq15031){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15031));
});})(g__235__auto___15066))
;


var g__235__auto___15070 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__235__auto___11648){
return (function (seq11613){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11613));
});})(g__235__auto___11648))
;


var g__235__auto___11652 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.vector_distinct = ((function (g__235__auto___15070){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15071 = arguments.length;
var i__4731__auto___15072 = (0);
while(true){
if((i__4731__auto___15072 < len__4730__auto___15071)){
args__4736__auto__.push((arguments[i__4731__auto___15072]));

var G__15073 = (i__4731__auto___15072 + (1));
i__4731__auto___15072 = G__15073;
=======
cljs.spec.gen.alpha.vector_distinct = ((function (g__235__auto___11652){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11653 = arguments.length;
var i__4731__auto___11654 = (0);
while(true){
if((i__4731__auto___11654 < len__4730__auto___11653)){
args__4736__auto__.push((arguments[i__4731__auto___11654]));

var G__11655 = (i__4731__auto___11654 + (1));
i__4731__auto___11654 = G__11655;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
});})(g__235__auto___15070))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__235__auto___15070){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__235__auto___15070),args);
});})(g__235__auto___15070))
=======
});})(g__235__auto___11652))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__235__auto___11652){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__235__auto___11652),args);
});})(g__235__auto___11652))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__235__auto___15070){
return (function (seq15032){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15032));
});})(g__235__auto___15070))
;


var g__235__auto___15074 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__235__auto___11652){
return (function (seq11614){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11614));
});})(g__235__auto___11652))
;


var g__235__auto___11656 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.fmap = ((function (g__235__auto___15074){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15075 = arguments.length;
var i__4731__auto___15076 = (0);
while(true){
if((i__4731__auto___15076 < len__4730__auto___15075)){
args__4736__auto__.push((arguments[i__4731__auto___15076]));

var G__15077 = (i__4731__auto___15076 + (1));
i__4731__auto___15076 = G__15077;
=======
cljs.spec.gen.alpha.fmap = ((function (g__235__auto___11656){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11657 = arguments.length;
var i__4731__auto___11658 = (0);
while(true){
if((i__4731__auto___11658 < len__4730__auto___11657)){
args__4736__auto__.push((arguments[i__4731__auto___11658]));

var G__11659 = (i__4731__auto___11658 + (1));
i__4731__auto___11658 = G__11659;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
});})(g__235__auto___15074))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__235__auto___15074){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__235__auto___15074),args);
});})(g__235__auto___15074))
=======
});})(g__235__auto___11656))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__235__auto___11656){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__235__auto___11656),args);
});})(g__235__auto___11656))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__235__auto___15074){
return (function (seq15033){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15033));
});})(g__235__auto___15074))
;


var g__235__auto___15078 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__235__auto___11656){
return (function (seq11615){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11615));
});})(g__235__auto___11656))
;


var g__235__auto___11660 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.elements = ((function (g__235__auto___15078){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15079 = arguments.length;
var i__4731__auto___15080 = (0);
while(true){
if((i__4731__auto___15080 < len__4730__auto___15079)){
args__4736__auto__.push((arguments[i__4731__auto___15080]));

var G__15081 = (i__4731__auto___15080 + (1));
i__4731__auto___15080 = G__15081;
=======
cljs.spec.gen.alpha.elements = ((function (g__235__auto___11660){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11661 = arguments.length;
var i__4731__auto___11662 = (0);
while(true){
if((i__4731__auto___11662 < len__4730__auto___11661)){
args__4736__auto__.push((arguments[i__4731__auto___11662]));

var G__11663 = (i__4731__auto___11662 + (1));
i__4731__auto___11662 = G__11663;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
});})(g__235__auto___15078))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__235__auto___15078){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__235__auto___15078),args);
});})(g__235__auto___15078))
=======
});})(g__235__auto___11660))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__235__auto___11660){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__235__auto___11660),args);
});})(g__235__auto___11660))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__235__auto___15078){
return (function (seq15034){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15034));
});})(g__235__auto___15078))
;


var g__235__auto___15082 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__235__auto___11660){
return (function (seq11616){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11616));
});})(g__235__auto___11660))
;


var g__235__auto___11664 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.bind = ((function (g__235__auto___15082){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15083 = arguments.length;
var i__4731__auto___15084 = (0);
while(true){
if((i__4731__auto___15084 < len__4730__auto___15083)){
args__4736__auto__.push((arguments[i__4731__auto___15084]));

var G__15085 = (i__4731__auto___15084 + (1));
i__4731__auto___15084 = G__15085;
=======
cljs.spec.gen.alpha.bind = ((function (g__235__auto___11664){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11665 = arguments.length;
var i__4731__auto___11666 = (0);
while(true){
if((i__4731__auto___11666 < len__4730__auto___11665)){
args__4736__auto__.push((arguments[i__4731__auto___11666]));

var G__11667 = (i__4731__auto___11666 + (1));
i__4731__auto___11666 = G__11667;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
});})(g__235__auto___15082))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__235__auto___15082){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__235__auto___15082),args);
});})(g__235__auto___15082))
=======
});})(g__235__auto___11664))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__235__auto___11664){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__235__auto___11664),args);
});})(g__235__auto___11664))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__235__auto___15082){
return (function (seq15035){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15035));
});})(g__235__auto___15082))
;


var g__235__auto___15086 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__235__auto___11664){
return (function (seq11617){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11617));
});})(g__235__auto___11664))
;


var g__235__auto___11668 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.choose = ((function (g__235__auto___15086){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15087 = arguments.length;
var i__4731__auto___15088 = (0);
while(true){
if((i__4731__auto___15088 < len__4730__auto___15087)){
args__4736__auto__.push((arguments[i__4731__auto___15088]));

var G__15089 = (i__4731__auto___15088 + (1));
i__4731__auto___15088 = G__15089;
=======
cljs.spec.gen.alpha.choose = ((function (g__235__auto___11668){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11669 = arguments.length;
var i__4731__auto___11670 = (0);
while(true){
if((i__4731__auto___11670 < len__4730__auto___11669)){
args__4736__auto__.push((arguments[i__4731__auto___11670]));

var G__11671 = (i__4731__auto___11670 + (1));
i__4731__auto___11670 = G__11671;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
});})(g__235__auto___15086))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__235__auto___15086){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__235__auto___15086),args);
});})(g__235__auto___15086))
=======
});})(g__235__auto___11668))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__235__auto___11668){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__235__auto___11668),args);
});})(g__235__auto___11668))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__235__auto___15086){
return (function (seq15036){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15036));
});})(g__235__auto___15086))
;


var g__235__auto___15090 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__235__auto___11668){
return (function (seq11618){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11618));
});})(g__235__auto___11668))
;


var g__235__auto___11672 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.one_of = ((function (g__235__auto___15090){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15091 = arguments.length;
var i__4731__auto___15092 = (0);
while(true){
if((i__4731__auto___15092 < len__4730__auto___15091)){
args__4736__auto__.push((arguments[i__4731__auto___15092]));

var G__15093 = (i__4731__auto___15092 + (1));
i__4731__auto___15092 = G__15093;
=======
cljs.spec.gen.alpha.one_of = ((function (g__235__auto___11672){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11673 = arguments.length;
var i__4731__auto___11674 = (0);
while(true){
if((i__4731__auto___11674 < len__4730__auto___11673)){
args__4736__auto__.push((arguments[i__4731__auto___11674]));

var G__11675 = (i__4731__auto___11674 + (1));
i__4731__auto___11674 = G__11675;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
});})(g__235__auto___15090))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__235__auto___15090){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__235__auto___15090),args);
});})(g__235__auto___15090))
=======
});})(g__235__auto___11672))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__235__auto___11672){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__235__auto___11672),args);
});})(g__235__auto___11672))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__235__auto___15090){
return (function (seq15037){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15037));
});})(g__235__auto___15090))
;


var g__235__auto___15094 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__235__auto___11672){
return (function (seq11619){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11619));
});})(g__235__auto___11672))
;


var g__235__auto___11676 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.such_that = ((function (g__235__auto___15094){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15095 = arguments.length;
var i__4731__auto___15096 = (0);
while(true){
if((i__4731__auto___15096 < len__4730__auto___15095)){
args__4736__auto__.push((arguments[i__4731__auto___15096]));

var G__15097 = (i__4731__auto___15096 + (1));
i__4731__auto___15096 = G__15097;
=======
cljs.spec.gen.alpha.such_that = ((function (g__235__auto___11676){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11677 = arguments.length;
var i__4731__auto___11678 = (0);
while(true){
if((i__4731__auto___11678 < len__4730__auto___11677)){
args__4736__auto__.push((arguments[i__4731__auto___11678]));

var G__11679 = (i__4731__auto___11678 + (1));
i__4731__auto___11678 = G__11679;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
});})(g__235__auto___15094))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__235__auto___15094){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__235__auto___15094),args);
});})(g__235__auto___15094))
=======
});})(g__235__auto___11676))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__235__auto___11676){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__235__auto___11676),args);
});})(g__235__auto___11676))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__235__auto___15094){
return (function (seq15038){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15038));
});})(g__235__auto___15094))
;


var g__235__auto___15098 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__235__auto___11676){
return (function (seq11620){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11620));
});})(g__235__auto___11676))
;


var g__235__auto___11680 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.tuple = ((function (g__235__auto___15098){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15099 = arguments.length;
var i__4731__auto___15100 = (0);
while(true){
if((i__4731__auto___15100 < len__4730__auto___15099)){
args__4736__auto__.push((arguments[i__4731__auto___15100]));

var G__15101 = (i__4731__auto___15100 + (1));
i__4731__auto___15100 = G__15101;
=======
cljs.spec.gen.alpha.tuple = ((function (g__235__auto___11680){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11681 = arguments.length;
var i__4731__auto___11682 = (0);
while(true){
if((i__4731__auto___11682 < len__4730__auto___11681)){
args__4736__auto__.push((arguments[i__4731__auto___11682]));

var G__11683 = (i__4731__auto___11682 + (1));
i__4731__auto___11682 = G__11683;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
});})(g__235__auto___15098))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__235__auto___15098){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__235__auto___15098),args);
});})(g__235__auto___15098))
=======
});})(g__235__auto___11680))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__235__auto___11680){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__235__auto___11680),args);
});})(g__235__auto___11680))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__235__auto___15098){
return (function (seq15039){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15039));
});})(g__235__auto___15098))
;


var g__235__auto___15102 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__235__auto___11680){
return (function (seq11621){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11621));
});})(g__235__auto___11680))
;


var g__235__auto___11684 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.sample = ((function (g__235__auto___15102){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15103 = arguments.length;
var i__4731__auto___15104 = (0);
while(true){
if((i__4731__auto___15104 < len__4730__auto___15103)){
args__4736__auto__.push((arguments[i__4731__auto___15104]));

var G__15105 = (i__4731__auto___15104 + (1));
i__4731__auto___15104 = G__15105;
=======
cljs.spec.gen.alpha.sample = ((function (g__235__auto___11684){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11685 = arguments.length;
var i__4731__auto___11686 = (0);
while(true){
if((i__4731__auto___11686 < len__4730__auto___11685)){
args__4736__auto__.push((arguments[i__4731__auto___11686]));

var G__11687 = (i__4731__auto___11686 + (1));
i__4731__auto___11686 = G__11687;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
});})(g__235__auto___15102))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__235__auto___15102){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__235__auto___15102),args);
});})(g__235__auto___15102))
=======
});})(g__235__auto___11684))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__235__auto___11684){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__235__auto___11684),args);
});})(g__235__auto___11684))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__235__auto___15102){
return (function (seq15040){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15040));
});})(g__235__auto___15102))
;


var g__235__auto___15106 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__235__auto___11684){
return (function (seq11622){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11622));
});})(g__235__auto___11684))
;


var g__235__auto___11688 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.return$ = ((function (g__235__auto___15106){
return (function cljs$spec$gen$alpha$return(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15107 = arguments.length;
var i__4731__auto___15108 = (0);
while(true){
if((i__4731__auto___15108 < len__4730__auto___15107)){
args__4736__auto__.push((arguments[i__4731__auto___15108]));

var G__15109 = (i__4731__auto___15108 + (1));
i__4731__auto___15108 = G__15109;
=======
cljs.spec.gen.alpha.return$ = ((function (g__235__auto___11688){
return (function cljs$spec$gen$alpha$return(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11689 = arguments.length;
var i__4731__auto___11690 = (0);
while(true){
if((i__4731__auto___11690 < len__4730__auto___11689)){
args__4736__auto__.push((arguments[i__4731__auto___11690]));

var G__11691 = (i__4731__auto___11690 + (1));
i__4731__auto___11690 = G__11691;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
});})(g__235__auto___15106))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__235__auto___15106){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__235__auto___15106),args);
});})(g__235__auto___15106))
=======
});})(g__235__auto___11688))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__235__auto___11688){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__235__auto___11688),args);
});})(g__235__auto___11688))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__235__auto___15106){
return (function (seq15041){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15041));
});})(g__235__auto___15106))
;


var g__235__auto___15110 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__235__auto___11688){
return (function (seq11623){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11623));
});})(g__235__auto___11688))
;


var g__235__auto___11692 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__235__auto___15110){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15111 = arguments.length;
var i__4731__auto___15112 = (0);
while(true){
if((i__4731__auto___15112 < len__4730__auto___15111)){
args__4736__auto__.push((arguments[i__4731__auto___15112]));

var G__15113 = (i__4731__auto___15112 + (1));
i__4731__auto___15112 = G__15113;
=======
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__235__auto___11692){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11693 = arguments.length;
var i__4731__auto___11694 = (0);
while(true){
if((i__4731__auto___11694 < len__4730__auto___11693)){
args__4736__auto__.push((arguments[i__4731__auto___11694]));

var G__11695 = (i__4731__auto___11694 + (1));
i__4731__auto___11694 = G__11695;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
});})(g__235__auto___15110))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__235__auto___15110){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__235__auto___15110),args);
});})(g__235__auto___15110))
=======
});})(g__235__auto___11692))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__235__auto___11692){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__235__auto___11692),args);
});})(g__235__auto___11692))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__235__auto___15110){
return (function (seq15042){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15042));
});})(g__235__auto___15110))
;


var g__235__auto___15114 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__235__auto___11692){
return (function (seq11624){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11624));
});})(g__235__auto___11692))
;


var g__235__auto___11696 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.double_STAR_ = ((function (g__235__auto___15114){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15115 = arguments.length;
var i__4731__auto___15116 = (0);
while(true){
if((i__4731__auto___15116 < len__4730__auto___15115)){
args__4736__auto__.push((arguments[i__4731__auto___15116]));

var G__15117 = (i__4731__auto___15116 + (1));
i__4731__auto___15116 = G__15117;
=======
cljs.spec.gen.alpha.double_STAR_ = ((function (g__235__auto___11696){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11697 = arguments.length;
var i__4731__auto___11698 = (0);
while(true){
if((i__4731__auto___11698 < len__4730__auto___11697)){
args__4736__auto__.push((arguments[i__4731__auto___11698]));

var G__11699 = (i__4731__auto___11698 + (1));
i__4731__auto___11698 = G__11699;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
});})(g__235__auto___15114))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__235__auto___15114){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__235__auto___15114),args);
});})(g__235__auto___15114))
=======
});})(g__235__auto___11696))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__235__auto___11696){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__235__auto___11696),args);
});})(g__235__auto___11696))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__235__auto___15114){
return (function (seq15043){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15043));
});})(g__235__auto___15114))
;


var g__235__auto___15118 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__235__auto___11696){
return (function (seq11625){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11625));
});})(g__235__auto___11696))
;


var g__235__auto___11700 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.frequency = ((function (g__235__auto___15118){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15119 = arguments.length;
var i__4731__auto___15120 = (0);
while(true){
if((i__4731__auto___15120 < len__4730__auto___15119)){
args__4736__auto__.push((arguments[i__4731__auto___15120]));

var G__15121 = (i__4731__auto___15120 + (1));
i__4731__auto___15120 = G__15121;
=======
cljs.spec.gen.alpha.frequency = ((function (g__235__auto___11700){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11701 = arguments.length;
var i__4731__auto___11702 = (0);
while(true){
if((i__4731__auto___11702 < len__4730__auto___11701)){
args__4736__auto__.push((arguments[i__4731__auto___11702]));

var G__11703 = (i__4731__auto___11702 + (1));
i__4731__auto___11702 = G__11703;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
});})(g__235__auto___15118))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__235__auto___15118){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__235__auto___15118),args);
});})(g__235__auto___15118))
=======
});})(g__235__auto___11700))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__235__auto___11700){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__235__auto___11700),args);
});})(g__235__auto___11700))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__235__auto___15118){
return (function (seq15044){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15044));
});})(g__235__auto___15118))
;


var g__235__auto___15122 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__235__auto___11700){
return (function (seq11626){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11626));
});})(g__235__auto___11700))
;


var g__235__auto___11704 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.shuffle !== 'undefined')){
return clojure.test.check.generators.shuffle;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","shuffle","clojure.test.check.generators/shuffle",1032401055,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","shuffle","clojure.test.check.generators/shuffle",1032401055,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/shuffle
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.shuffle = ((function (g__235__auto___15122){
return (function cljs$spec$gen$alpha$shuffle(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15123 = arguments.length;
var i__4731__auto___15124 = (0);
while(true){
if((i__4731__auto___15124 < len__4730__auto___15123)){
args__4736__auto__.push((arguments[i__4731__auto___15124]));

var G__15125 = (i__4731__auto___15124 + (1));
i__4731__auto___15124 = G__15125;
=======
cljs.spec.gen.alpha.shuffle = ((function (g__235__auto___11704){
return (function cljs$spec$gen$alpha$shuffle(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11705 = arguments.length;
var i__4731__auto___11706 = (0);
while(true){
if((i__4731__auto___11706 < len__4730__auto___11705)){
args__4736__auto__.push((arguments[i__4731__auto___11706]));

var G__11707 = (i__4731__auto___11706 + (1));
i__4731__auto___11706 = G__11707;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.shuffle.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
});})(g__235__auto___15122))
;

cljs.spec.gen.alpha.shuffle.cljs$core$IFn$_invoke$arity$variadic = ((function (g__235__auto___15122){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__235__auto___15122),args);
});})(g__235__auto___15122))
=======
});})(g__235__auto___11704))
;

cljs.spec.gen.alpha.shuffle.cljs$core$IFn$_invoke$arity$variadic = ((function (g__235__auto___11704){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__235__auto___11704),args);
});})(g__235__auto___11704))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;

cljs.spec.gen.alpha.shuffle.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.shuffle.cljs$lang$applyTo = ((function (g__235__auto___15122){
return (function (seq15045){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15045));
});})(g__235__auto___15122))
;

var g__248__auto___15147 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.shuffle.cljs$lang$applyTo = ((function (g__235__auto___11704){
return (function (seq11627){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11627));
});})(g__235__auto___11704))
;

var g__248__auto___11729 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.any = ((function (g__248__auto___15147){
return (function cljs$spec$gen$alpha$any(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15148 = arguments.length;
var i__4731__auto___15149 = (0);
while(true){
if((i__4731__auto___15149 < len__4730__auto___15148)){
args__4736__auto__.push((arguments[i__4731__auto___15149]));

var G__15150 = (i__4731__auto___15149 + (1));
i__4731__auto___15149 = G__15150;
=======
cljs.spec.gen.alpha.any = ((function (g__248__auto___11729){
return (function cljs$spec$gen$alpha$any(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11730 = arguments.length;
var i__4731__auto___11731 = (0);
while(true){
if((i__4731__auto___11731 < len__4730__auto___11730)){
args__4736__auto__.push((arguments[i__4731__auto___11731]));

var G__11732 = (i__4731__auto___11731 + (1));
i__4731__auto___11731 = G__11732;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
});})(g__248__auto___15147))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__248__auto___15147){
return (function (args){
return cljs.core.deref.call(null,g__248__auto___15147);
});})(g__248__auto___15147))
=======
});})(g__248__auto___11729))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__248__auto___11729){
return (function (args){
return cljs.core.deref.call(null,g__248__auto___11729);
});})(g__248__auto___11729))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__248__auto___15147){
return (function (seq15126){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15126));
});})(g__248__auto___15147))
;


var g__248__auto___15151 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__248__auto___11729){
return (function (seq11708){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11708));
});})(g__248__auto___11729))
;


var g__248__auto___11733 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.any_printable = ((function (g__248__auto___15151){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15152 = arguments.length;
var i__4731__auto___15153 = (0);
while(true){
if((i__4731__auto___15153 < len__4730__auto___15152)){
args__4736__auto__.push((arguments[i__4731__auto___15153]));

var G__15154 = (i__4731__auto___15153 + (1));
i__4731__auto___15153 = G__15154;
=======
cljs.spec.gen.alpha.any_printable = ((function (g__248__auto___11733){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11734 = arguments.length;
var i__4731__auto___11735 = (0);
while(true){
if((i__4731__auto___11735 < len__4730__auto___11734)){
args__4736__auto__.push((arguments[i__4731__auto___11735]));

var G__11736 = (i__4731__auto___11735 + (1));
i__4731__auto___11735 = G__11736;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
});})(g__248__auto___15151))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__248__auto___15151){
return (function (args){
return cljs.core.deref.call(null,g__248__auto___15151);
});})(g__248__auto___15151))
=======
});})(g__248__auto___11733))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__248__auto___11733){
return (function (args){
return cljs.core.deref.call(null,g__248__auto___11733);
});})(g__248__auto___11733))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__248__auto___15151){
return (function (seq15127){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15127));
});})(g__248__auto___15151))
;


var g__248__auto___15155 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__248__auto___11733){
return (function (seq11709){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11709));
});})(g__248__auto___11733))
;


var g__248__auto___11737 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.boolean$ = ((function (g__248__auto___15155){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15156 = arguments.length;
var i__4731__auto___15157 = (0);
while(true){
if((i__4731__auto___15157 < len__4730__auto___15156)){
args__4736__auto__.push((arguments[i__4731__auto___15157]));

var G__15158 = (i__4731__auto___15157 + (1));
i__4731__auto___15157 = G__15158;
=======
cljs.spec.gen.alpha.boolean$ = ((function (g__248__auto___11737){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11738 = arguments.length;
var i__4731__auto___11739 = (0);
while(true){
if((i__4731__auto___11739 < len__4730__auto___11738)){
args__4736__auto__.push((arguments[i__4731__auto___11739]));

var G__11740 = (i__4731__auto___11739 + (1));
i__4731__auto___11739 = G__11740;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
});})(g__248__auto___15155))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__248__auto___15155){
return (function (args){
return cljs.core.deref.call(null,g__248__auto___15155);
});})(g__248__auto___15155))
=======
});})(g__248__auto___11737))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__248__auto___11737){
return (function (args){
return cljs.core.deref.call(null,g__248__auto___11737);
});})(g__248__auto___11737))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__248__auto___15155){
return (function (seq15128){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15128));
});})(g__248__auto___15155))
;


var g__248__auto___15159 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__248__auto___11737){
return (function (seq11710){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11710));
});})(g__248__auto___11737))
;


var g__248__auto___11741 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.char$ = ((function (g__248__auto___15159){
return (function cljs$spec$gen$alpha$char(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15160 = arguments.length;
var i__4731__auto___15161 = (0);
while(true){
if((i__4731__auto___15161 < len__4730__auto___15160)){
args__4736__auto__.push((arguments[i__4731__auto___15161]));

var G__15162 = (i__4731__auto___15161 + (1));
i__4731__auto___15161 = G__15162;
=======
cljs.spec.gen.alpha.char$ = ((function (g__248__auto___11741){
return (function cljs$spec$gen$alpha$char(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11742 = arguments.length;
var i__4731__auto___11743 = (0);
while(true){
if((i__4731__auto___11743 < len__4730__auto___11742)){
args__4736__auto__.push((arguments[i__4731__auto___11743]));

var G__11744 = (i__4731__auto___11743 + (1));
i__4731__auto___11743 = G__11744;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
});})(g__248__auto___15159))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__248__auto___15159){
return (function (args){
return cljs.core.deref.call(null,g__248__auto___15159);
});})(g__248__auto___15159))
=======
});})(g__248__auto___11741))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__248__auto___11741){
return (function (args){
return cljs.core.deref.call(null,g__248__auto___11741);
});})(g__248__auto___11741))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__248__auto___15159){
return (function (seq15129){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15129));
});})(g__248__auto___15159))
;


var g__248__auto___15163 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__248__auto___11741){
return (function (seq11711){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11711));
});})(g__248__auto___11741))
;


var g__248__auto___11745 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.char_alpha = ((function (g__248__auto___15163){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15164 = arguments.length;
var i__4731__auto___15165 = (0);
while(true){
if((i__4731__auto___15165 < len__4730__auto___15164)){
args__4736__auto__.push((arguments[i__4731__auto___15165]));

var G__15166 = (i__4731__auto___15165 + (1));
i__4731__auto___15165 = G__15166;
=======
cljs.spec.gen.alpha.char_alpha = ((function (g__248__auto___11745){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11746 = arguments.length;
var i__4731__auto___11747 = (0);
while(true){
if((i__4731__auto___11747 < len__4730__auto___11746)){
args__4736__auto__.push((arguments[i__4731__auto___11747]));

var G__11748 = (i__4731__auto___11747 + (1));
i__4731__auto___11747 = G__11748;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
});})(g__248__auto___15163))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__248__auto___15163){
return (function (args){
return cljs.core.deref.call(null,g__248__auto___15163);
});})(g__248__auto___15163))
=======
});})(g__248__auto___11745))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__248__auto___11745){
return (function (args){
return cljs.core.deref.call(null,g__248__auto___11745);
});})(g__248__auto___11745))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__248__auto___15163){
return (function (seq15130){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15130));
});})(g__248__auto___15163))
;


var g__248__auto___15167 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__248__auto___11745){
return (function (seq11712){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11712));
});})(g__248__auto___11745))
;


var g__248__auto___11749 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__248__auto___15167){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15168 = arguments.length;
var i__4731__auto___15169 = (0);
while(true){
if((i__4731__auto___15169 < len__4730__auto___15168)){
args__4736__auto__.push((arguments[i__4731__auto___15169]));

var G__15170 = (i__4731__auto___15169 + (1));
i__4731__auto___15169 = G__15170;
=======
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__248__auto___11749){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11750 = arguments.length;
var i__4731__auto___11751 = (0);
while(true){
if((i__4731__auto___11751 < len__4730__auto___11750)){
args__4736__auto__.push((arguments[i__4731__auto___11751]));

var G__11752 = (i__4731__auto___11751 + (1));
i__4731__auto___11751 = G__11752;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
});})(g__248__auto___15167))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__248__auto___15167){
return (function (args){
return cljs.core.deref.call(null,g__248__auto___15167);
});})(g__248__auto___15167))
=======
});})(g__248__auto___11749))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__248__auto___11749){
return (function (args){
return cljs.core.deref.call(null,g__248__auto___11749);
});})(g__248__auto___11749))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__248__auto___15167){
return (function (seq15131){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15131));
});})(g__248__auto___15167))
;


var g__248__auto___15171 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__248__auto___11749){
return (function (seq11713){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11713));
});})(g__248__auto___11749))
;


var g__248__auto___11753 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.char_ascii = ((function (g__248__auto___15171){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15172 = arguments.length;
var i__4731__auto___15173 = (0);
while(true){
if((i__4731__auto___15173 < len__4730__auto___15172)){
args__4736__auto__.push((arguments[i__4731__auto___15173]));

var G__15174 = (i__4731__auto___15173 + (1));
i__4731__auto___15173 = G__15174;
=======
cljs.spec.gen.alpha.char_ascii = ((function (g__248__auto___11753){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11754 = arguments.length;
var i__4731__auto___11755 = (0);
while(true){
if((i__4731__auto___11755 < len__4730__auto___11754)){
args__4736__auto__.push((arguments[i__4731__auto___11755]));

var G__11756 = (i__4731__auto___11755 + (1));
i__4731__auto___11755 = G__11756;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
});})(g__248__auto___15171))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__248__auto___15171){
return (function (args){
return cljs.core.deref.call(null,g__248__auto___15171);
});})(g__248__auto___15171))
=======
});})(g__248__auto___11753))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__248__auto___11753){
return (function (args){
return cljs.core.deref.call(null,g__248__auto___11753);
});})(g__248__auto___11753))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__248__auto___15171){
return (function (seq15132){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15132));
});})(g__248__auto___15171))
;


var g__248__auto___15175 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__248__auto___11753){
return (function (seq11714){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11714));
});})(g__248__auto___11753))
;


var g__248__auto___11757 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.double$ = ((function (g__248__auto___15175){
return (function cljs$spec$gen$alpha$double(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15176 = arguments.length;
var i__4731__auto___15177 = (0);
while(true){
if((i__4731__auto___15177 < len__4730__auto___15176)){
args__4736__auto__.push((arguments[i__4731__auto___15177]));

var G__15178 = (i__4731__auto___15177 + (1));
i__4731__auto___15177 = G__15178;
=======
cljs.spec.gen.alpha.double$ = ((function (g__248__auto___11757){
return (function cljs$spec$gen$alpha$double(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11758 = arguments.length;
var i__4731__auto___11759 = (0);
while(true){
if((i__4731__auto___11759 < len__4730__auto___11758)){
args__4736__auto__.push((arguments[i__4731__auto___11759]));

var G__11760 = (i__4731__auto___11759 + (1));
i__4731__auto___11759 = G__11760;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
});})(g__248__auto___15175))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__248__auto___15175){
return (function (args){
return cljs.core.deref.call(null,g__248__auto___15175);
});})(g__248__auto___15175))
=======
});})(g__248__auto___11757))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__248__auto___11757){
return (function (args){
return cljs.core.deref.call(null,g__248__auto___11757);
});})(g__248__auto___11757))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__248__auto___15175){
return (function (seq15133){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15133));
});})(g__248__auto___15175))
;


var g__248__auto___15179 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__248__auto___11757){
return (function (seq11715){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11715));
});})(g__248__auto___11757))
;


var g__248__auto___11761 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.int$ = ((function (g__248__auto___15179){
return (function cljs$spec$gen$alpha$int(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15180 = arguments.length;
var i__4731__auto___15181 = (0);
while(true){
if((i__4731__auto___15181 < len__4730__auto___15180)){
args__4736__auto__.push((arguments[i__4731__auto___15181]));

var G__15182 = (i__4731__auto___15181 + (1));
i__4731__auto___15181 = G__15182;
=======
cljs.spec.gen.alpha.int$ = ((function (g__248__auto___11761){
return (function cljs$spec$gen$alpha$int(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11762 = arguments.length;
var i__4731__auto___11763 = (0);
while(true){
if((i__4731__auto___11763 < len__4730__auto___11762)){
args__4736__auto__.push((arguments[i__4731__auto___11763]));

var G__11764 = (i__4731__auto___11763 + (1));
i__4731__auto___11763 = G__11764;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
});})(g__248__auto___15179))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__248__auto___15179){
return (function (args){
return cljs.core.deref.call(null,g__248__auto___15179);
});})(g__248__auto___15179))
=======
});})(g__248__auto___11761))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__248__auto___11761){
return (function (args){
return cljs.core.deref.call(null,g__248__auto___11761);
});})(g__248__auto___11761))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__248__auto___15179){
return (function (seq15134){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15134));
});})(g__248__auto___15179))
;


var g__248__auto___15183 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__248__auto___11761){
return (function (seq11716){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11716));
});})(g__248__auto___11761))
;


var g__248__auto___11765 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.keyword = ((function (g__248__auto___15183){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15184 = arguments.length;
var i__4731__auto___15185 = (0);
while(true){
if((i__4731__auto___15185 < len__4730__auto___15184)){
args__4736__auto__.push((arguments[i__4731__auto___15185]));

var G__15186 = (i__4731__auto___15185 + (1));
i__4731__auto___15185 = G__15186;
=======
cljs.spec.gen.alpha.keyword = ((function (g__248__auto___11765){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11766 = arguments.length;
var i__4731__auto___11767 = (0);
while(true){
if((i__4731__auto___11767 < len__4730__auto___11766)){
args__4736__auto__.push((arguments[i__4731__auto___11767]));

var G__11768 = (i__4731__auto___11767 + (1));
i__4731__auto___11767 = G__11768;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
});})(g__248__auto___15183))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__248__auto___15183){
return (function (args){
return cljs.core.deref.call(null,g__248__auto___15183);
});})(g__248__auto___15183))
=======
});})(g__248__auto___11765))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__248__auto___11765){
return (function (args){
return cljs.core.deref.call(null,g__248__auto___11765);
});})(g__248__auto___11765))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__248__auto___15183){
return (function (seq15135){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15135));
});})(g__248__auto___15183))
;


var g__248__auto___15187 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__248__auto___11765){
return (function (seq11717){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11717));
});})(g__248__auto___11765))
;


var g__248__auto___11769 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.keyword_ns = ((function (g__248__auto___15187){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15188 = arguments.length;
var i__4731__auto___15189 = (0);
while(true){
if((i__4731__auto___15189 < len__4730__auto___15188)){
args__4736__auto__.push((arguments[i__4731__auto___15189]));

var G__15190 = (i__4731__auto___15189 + (1));
i__4731__auto___15189 = G__15190;
=======
cljs.spec.gen.alpha.keyword_ns = ((function (g__248__auto___11769){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11770 = arguments.length;
var i__4731__auto___11771 = (0);
while(true){
if((i__4731__auto___11771 < len__4730__auto___11770)){
args__4736__auto__.push((arguments[i__4731__auto___11771]));

var G__11772 = (i__4731__auto___11771 + (1));
i__4731__auto___11771 = G__11772;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
});})(g__248__auto___15187))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__248__auto___15187){
return (function (args){
return cljs.core.deref.call(null,g__248__auto___15187);
});})(g__248__auto___15187))
=======
});})(g__248__auto___11769))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__248__auto___11769){
return (function (args){
return cljs.core.deref.call(null,g__248__auto___11769);
});})(g__248__auto___11769))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__248__auto___15187){
return (function (seq15136){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15136));
});})(g__248__auto___15187))
;


var g__248__auto___15191 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__248__auto___11769){
return (function (seq11718){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11718));
});})(g__248__auto___11769))
;


var g__248__auto___11773 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.large_integer = ((function (g__248__auto___15191){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15192 = arguments.length;
var i__4731__auto___15193 = (0);
while(true){
if((i__4731__auto___15193 < len__4730__auto___15192)){
args__4736__auto__.push((arguments[i__4731__auto___15193]));

var G__15194 = (i__4731__auto___15193 + (1));
i__4731__auto___15193 = G__15194;
=======
cljs.spec.gen.alpha.large_integer = ((function (g__248__auto___11773){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11774 = arguments.length;
var i__4731__auto___11775 = (0);
while(true){
if((i__4731__auto___11775 < len__4730__auto___11774)){
args__4736__auto__.push((arguments[i__4731__auto___11775]));

var G__11776 = (i__4731__auto___11775 + (1));
i__4731__auto___11775 = G__11776;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
});})(g__248__auto___15191))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__248__auto___15191){
return (function (args){
return cljs.core.deref.call(null,g__248__auto___15191);
});})(g__248__auto___15191))
=======
});})(g__248__auto___11773))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__248__auto___11773){
return (function (args){
return cljs.core.deref.call(null,g__248__auto___11773);
});})(g__248__auto___11773))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__248__auto___15191){
return (function (seq15137){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15137));
});})(g__248__auto___15191))
;


var g__248__auto___15195 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__248__auto___11773){
return (function (seq11719){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11719));
});})(g__248__auto___11773))
;


var g__248__auto___11777 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.ratio = ((function (g__248__auto___15195){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15196 = arguments.length;
var i__4731__auto___15197 = (0);
while(true){
if((i__4731__auto___15197 < len__4730__auto___15196)){
args__4736__auto__.push((arguments[i__4731__auto___15197]));

var G__15198 = (i__4731__auto___15197 + (1));
i__4731__auto___15197 = G__15198;
=======
cljs.spec.gen.alpha.ratio = ((function (g__248__auto___11777){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11778 = arguments.length;
var i__4731__auto___11779 = (0);
while(true){
if((i__4731__auto___11779 < len__4730__auto___11778)){
args__4736__auto__.push((arguments[i__4731__auto___11779]));

var G__11780 = (i__4731__auto___11779 + (1));
i__4731__auto___11779 = G__11780;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
});})(g__248__auto___15195))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__248__auto___15195){
return (function (args){
return cljs.core.deref.call(null,g__248__auto___15195);
});})(g__248__auto___15195))
=======
});})(g__248__auto___11777))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__248__auto___11777){
return (function (args){
return cljs.core.deref.call(null,g__248__auto___11777);
});})(g__248__auto___11777))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__248__auto___15195){
return (function (seq15138){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15138));
});})(g__248__auto___15195))
;


var g__248__auto___15199 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__248__auto___11777){
return (function (seq11720){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11720));
});})(g__248__auto___11777))
;


var g__248__auto___11781 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.simple_type = ((function (g__248__auto___15199){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15200 = arguments.length;
var i__4731__auto___15201 = (0);
while(true){
if((i__4731__auto___15201 < len__4730__auto___15200)){
args__4736__auto__.push((arguments[i__4731__auto___15201]));

var G__15202 = (i__4731__auto___15201 + (1));
i__4731__auto___15201 = G__15202;
=======
cljs.spec.gen.alpha.simple_type = ((function (g__248__auto___11781){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11782 = arguments.length;
var i__4731__auto___11783 = (0);
while(true){
if((i__4731__auto___11783 < len__4730__auto___11782)){
args__4736__auto__.push((arguments[i__4731__auto___11783]));

var G__11784 = (i__4731__auto___11783 + (1));
i__4731__auto___11783 = G__11784;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
});})(g__248__auto___15199))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__248__auto___15199){
return (function (args){
return cljs.core.deref.call(null,g__248__auto___15199);
});})(g__248__auto___15199))
=======
});})(g__248__auto___11781))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__248__auto___11781){
return (function (args){
return cljs.core.deref.call(null,g__248__auto___11781);
});})(g__248__auto___11781))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__248__auto___15199){
return (function (seq15139){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15139));
});})(g__248__auto___15199))
;


var g__248__auto___15203 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__248__auto___11781){
return (function (seq11721){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11721));
});})(g__248__auto___11781))
;


var g__248__auto___11785 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.simple_type_printable = ((function (g__248__auto___15203){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15204 = arguments.length;
var i__4731__auto___15205 = (0);
while(true){
if((i__4731__auto___15205 < len__4730__auto___15204)){
args__4736__auto__.push((arguments[i__4731__auto___15205]));

var G__15206 = (i__4731__auto___15205 + (1));
i__4731__auto___15205 = G__15206;
=======
cljs.spec.gen.alpha.simple_type_printable = ((function (g__248__auto___11785){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11786 = arguments.length;
var i__4731__auto___11787 = (0);
while(true){
if((i__4731__auto___11787 < len__4730__auto___11786)){
args__4736__auto__.push((arguments[i__4731__auto___11787]));

var G__11788 = (i__4731__auto___11787 + (1));
i__4731__auto___11787 = G__11788;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
});})(g__248__auto___15203))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__248__auto___15203){
return (function (args){
return cljs.core.deref.call(null,g__248__auto___15203);
});})(g__248__auto___15203))
=======
});})(g__248__auto___11785))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__248__auto___11785){
return (function (args){
return cljs.core.deref.call(null,g__248__auto___11785);
});})(g__248__auto___11785))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__248__auto___15203){
return (function (seq15140){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15140));
});})(g__248__auto___15203))
;


var g__248__auto___15207 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__248__auto___11785){
return (function (seq11722){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11722));
});})(g__248__auto___11785))
;


var g__248__auto___11789 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.string = ((function (g__248__auto___15207){
return (function cljs$spec$gen$alpha$string(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15208 = arguments.length;
var i__4731__auto___15209 = (0);
while(true){
if((i__4731__auto___15209 < len__4730__auto___15208)){
args__4736__auto__.push((arguments[i__4731__auto___15209]));

var G__15210 = (i__4731__auto___15209 + (1));
i__4731__auto___15209 = G__15210;
=======
cljs.spec.gen.alpha.string = ((function (g__248__auto___11789){
return (function cljs$spec$gen$alpha$string(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11790 = arguments.length;
var i__4731__auto___11791 = (0);
while(true){
if((i__4731__auto___11791 < len__4730__auto___11790)){
args__4736__auto__.push((arguments[i__4731__auto___11791]));

var G__11792 = (i__4731__auto___11791 + (1));
i__4731__auto___11791 = G__11792;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
});})(g__248__auto___15207))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__248__auto___15207){
return (function (args){
return cljs.core.deref.call(null,g__248__auto___15207);
});})(g__248__auto___15207))
=======
});})(g__248__auto___11789))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__248__auto___11789){
return (function (args){
return cljs.core.deref.call(null,g__248__auto___11789);
});})(g__248__auto___11789))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__248__auto___15207){
return (function (seq15141){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15141));
});})(g__248__auto___15207))
;


var g__248__auto___15211 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__248__auto___11789){
return (function (seq11723){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11723));
});})(g__248__auto___11789))
;


var g__248__auto___11793 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.string_ascii = ((function (g__248__auto___15211){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15212 = arguments.length;
var i__4731__auto___15213 = (0);
while(true){
if((i__4731__auto___15213 < len__4730__auto___15212)){
args__4736__auto__.push((arguments[i__4731__auto___15213]));

var G__15214 = (i__4731__auto___15213 + (1));
i__4731__auto___15213 = G__15214;
=======
cljs.spec.gen.alpha.string_ascii = ((function (g__248__auto___11793){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11794 = arguments.length;
var i__4731__auto___11795 = (0);
while(true){
if((i__4731__auto___11795 < len__4730__auto___11794)){
args__4736__auto__.push((arguments[i__4731__auto___11795]));

var G__11796 = (i__4731__auto___11795 + (1));
i__4731__auto___11795 = G__11796;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
});})(g__248__auto___15211))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__248__auto___15211){
return (function (args){
return cljs.core.deref.call(null,g__248__auto___15211);
});})(g__248__auto___15211))
=======
});})(g__248__auto___11793))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__248__auto___11793){
return (function (args){
return cljs.core.deref.call(null,g__248__auto___11793);
});})(g__248__auto___11793))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__248__auto___15211){
return (function (seq15142){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15142));
});})(g__248__auto___15211))
;


var g__248__auto___15215 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__248__auto___11793){
return (function (seq11724){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11724));
});})(g__248__auto___11793))
;


var g__248__auto___11797 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__248__auto___15215){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15216 = arguments.length;
var i__4731__auto___15217 = (0);
while(true){
if((i__4731__auto___15217 < len__4730__auto___15216)){
args__4736__auto__.push((arguments[i__4731__auto___15217]));

var G__15218 = (i__4731__auto___15217 + (1));
i__4731__auto___15217 = G__15218;
=======
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__248__auto___11797){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11798 = arguments.length;
var i__4731__auto___11799 = (0);
while(true){
if((i__4731__auto___11799 < len__4730__auto___11798)){
args__4736__auto__.push((arguments[i__4731__auto___11799]));

var G__11800 = (i__4731__auto___11799 + (1));
i__4731__auto___11799 = G__11800;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
});})(g__248__auto___15215))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__248__auto___15215){
return (function (args){
return cljs.core.deref.call(null,g__248__auto___15215);
});})(g__248__auto___15215))
=======
});})(g__248__auto___11797))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__248__auto___11797){
return (function (args){
return cljs.core.deref.call(null,g__248__auto___11797);
});})(g__248__auto___11797))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__248__auto___15215){
return (function (seq15143){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15143));
});})(g__248__auto___15215))
;


var g__248__auto___15219 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__248__auto___11797){
return (function (seq11725){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11725));
});})(g__248__auto___11797))
;


var g__248__auto___11801 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.symbol = ((function (g__248__auto___15219){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15220 = arguments.length;
var i__4731__auto___15221 = (0);
while(true){
if((i__4731__auto___15221 < len__4730__auto___15220)){
args__4736__auto__.push((arguments[i__4731__auto___15221]));

var G__15222 = (i__4731__auto___15221 + (1));
i__4731__auto___15221 = G__15222;
=======
cljs.spec.gen.alpha.symbol = ((function (g__248__auto___11801){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11802 = arguments.length;
var i__4731__auto___11803 = (0);
while(true){
if((i__4731__auto___11803 < len__4730__auto___11802)){
args__4736__auto__.push((arguments[i__4731__auto___11803]));

var G__11804 = (i__4731__auto___11803 + (1));
i__4731__auto___11803 = G__11804;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
});})(g__248__auto___15219))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__248__auto___15219){
return (function (args){
return cljs.core.deref.call(null,g__248__auto___15219);
});})(g__248__auto___15219))
=======
});})(g__248__auto___11801))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__248__auto___11801){
return (function (args){
return cljs.core.deref.call(null,g__248__auto___11801);
});})(g__248__auto___11801))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__248__auto___15219){
return (function (seq15144){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15144));
});})(g__248__auto___15219))
;


var g__248__auto___15223 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__248__auto___11801){
return (function (seq11726){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11726));
});})(g__248__auto___11801))
;


var g__248__auto___11805 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.symbol_ns = ((function (g__248__auto___15223){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15224 = arguments.length;
var i__4731__auto___15225 = (0);
while(true){
if((i__4731__auto___15225 < len__4730__auto___15224)){
args__4736__auto__.push((arguments[i__4731__auto___15225]));

var G__15226 = (i__4731__auto___15225 + (1));
i__4731__auto___15225 = G__15226;
=======
cljs.spec.gen.alpha.symbol_ns = ((function (g__248__auto___11805){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11806 = arguments.length;
var i__4731__auto___11807 = (0);
while(true){
if((i__4731__auto___11807 < len__4730__auto___11806)){
args__4736__auto__.push((arguments[i__4731__auto___11807]));

var G__11808 = (i__4731__auto___11807 + (1));
i__4731__auto___11807 = G__11808;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
});})(g__248__auto___15223))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__248__auto___15223){
return (function (args){
return cljs.core.deref.call(null,g__248__auto___15223);
});})(g__248__auto___15223))
=======
});})(g__248__auto___11805))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__248__auto___11805){
return (function (args){
return cljs.core.deref.call(null,g__248__auto___11805);
});})(g__248__auto___11805))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__248__auto___15223){
return (function (seq15145){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15145));
});})(g__248__auto___15223))
;


var g__248__auto___15227 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__248__auto___11805){
return (function (seq11727){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11727));
});})(g__248__auto___11805))
;


var g__248__auto___11809 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.uuid = ((function (g__248__auto___15227){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15228 = arguments.length;
var i__4731__auto___15229 = (0);
while(true){
if((i__4731__auto___15229 < len__4730__auto___15228)){
args__4736__auto__.push((arguments[i__4731__auto___15229]));

var G__15230 = (i__4731__auto___15229 + (1));
i__4731__auto___15229 = G__15230;
=======
cljs.spec.gen.alpha.uuid = ((function (g__248__auto___11809){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11810 = arguments.length;
var i__4731__auto___11811 = (0);
while(true){
if((i__4731__auto___11811 < len__4730__auto___11810)){
args__4736__auto__.push((arguments[i__4731__auto___11811]));

var G__11812 = (i__4731__auto___11811 + (1));
i__4731__auto___11811 = G__11812;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
});})(g__248__auto___15227))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__248__auto___15227){
return (function (args){
return cljs.core.deref.call(null,g__248__auto___15227);
});})(g__248__auto___15227))
=======
});})(g__248__auto___11809))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__248__auto___11809){
return (function (args){
return cljs.core.deref.call(null,g__248__auto___11809);
});})(g__248__auto___11809))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__248__auto___15227){
return (function (seq15146){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15146));
});})(g__248__auto___15227))
=======
cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__248__auto___11809){
return (function (seq11728){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11728));
});})(g__248__auto___11809))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__4736__auto__ = [];
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
var len__4730__auto___15233 = arguments.length;
var i__4731__auto___15234 = (0);
while(true){
if((i__4731__auto___15234 < len__4730__auto___15233)){
args__4736__auto__.push((arguments[i__4731__auto___15234]));

var G__15235 = (i__4731__auto___15234 + (1));
i__4731__auto___15234 = G__15235;
=======
var len__4730__auto___11815 = arguments.length;
var i__4731__auto___11816 = (0);
while(true){
if((i__4731__auto___11816 < len__4730__auto___11815)){
args__4736__auto__.push((arguments[i__4731__auto___11816]));

var G__11817 = (i__4731__auto___11816 + (1));
i__4731__auto___11816 = G__11817;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__15231_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__15231_SHARP_);
=======
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__11813_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__11813_SHARP_);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq15232){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15232));
=======
cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq11814){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11814));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return (!((cljs.core.namespace.call(null,ident) == null)));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.some_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.uri_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.such_that.call(null,cljs.core.some_QMARK_,cljs.spec.gen.alpha.any_printable.call(null)),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/gen/alpha.js
return (function (p1__15237_SHARP_){
return (new Date(p1__15237_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__15236_SHARP_){
return (new goog.Uri(["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__15236_SHARP_),".com"].join('')));
=======
return (function (p1__11819_SHARP_){
return (new Date(p1__11819_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__11818_SHARP_){
return (new goog.Uri(["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11818_SHARP_),".com"].join('')));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/gen/alpha.js
});})(simple))
,cljs.spec.gen.alpha.uuid.call(null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map
