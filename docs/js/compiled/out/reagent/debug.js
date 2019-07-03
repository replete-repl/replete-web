// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__6416__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__6416 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6417__i = 0, G__6417__a = new Array(arguments.length -  0);
while (G__6417__i < G__6417__a.length) {G__6417__a[G__6417__i] = arguments[G__6417__i + 0]; ++G__6417__i;}
  args = new cljs.core.IndexedSeq(G__6417__a,0,null);
} 
return G__6416__delegate.call(this,args);};
G__6416.cljs$lang$maxFixedArity = 0;
G__6416.cljs$lang$applyTo = (function (arglist__6418){
var args = cljs.core.seq(arglist__6418);
return G__6416__delegate(args);
});
G__6416.cljs$core$IFn$_invoke$arity$variadic = G__6416__delegate;
return G__6416;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__6419__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__6419 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6420__i = 0, G__6420__a = new Array(arguments.length -  0);
while (G__6420__i < G__6420__a.length) {G__6420__a[G__6420__i] = arguments[G__6420__i + 0]; ++G__6420__i;}
  args = new cljs.core.IndexedSeq(G__6420__a,0,null);
} 
return G__6419__delegate.call(this,args);};
G__6419.cljs$lang$maxFixedArity = 0;
G__6419.cljs$lang$applyTo = (function (arglist__6421){
var args = cljs.core.seq(arglist__6421);
return G__6419__delegate(args);
});
G__6419.cljs$core$IFn$_invoke$arity$variadic = G__6419__delegate;
return G__6419;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
