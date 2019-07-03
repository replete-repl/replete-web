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
var G__12285__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12285 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12286__i = 0, G__12286__a = new Array(arguments.length -  0);
while (G__12286__i < G__12286__a.length) {G__12286__a[G__12286__i] = arguments[G__12286__i + 0]; ++G__12286__i;}
  args = new cljs.core.IndexedSeq(G__12286__a,0,null);
} 
return G__12285__delegate.call(this,args);};
G__12285.cljs$lang$maxFixedArity = 0;
G__12285.cljs$lang$applyTo = (function (arglist__12287){
var args = cljs.core.seq(arglist__12287);
return G__12285__delegate(args);
});
G__12285.cljs$core$IFn$_invoke$arity$variadic = G__12285__delegate;
return G__12285;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__12288__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12288 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12289__i = 0, G__12289__a = new Array(arguments.length -  0);
while (G__12289__i < G__12289__a.length) {G__12289__a[G__12289__i] = arguments[G__12289__i + 0]; ++G__12289__i;}
  args = new cljs.core.IndexedSeq(G__12289__a,0,null);
} 
return G__12288__delegate.call(this,args);};
G__12288.cljs$lang$maxFixedArity = 0;
G__12288.cljs$lang$applyTo = (function (arglist__12290){
var args = cljs.core.seq(arglist__12290);
return G__12288__delegate(args);
});
G__12288.cljs$core$IFn$_invoke$arity$variadic = G__12288__delegate;
return G__12288;
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
