// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__6406__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__6406 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6407__i = 0, G__6407__a = new Array(arguments.length -  0);
while (G__6407__i < G__6407__a.length) {G__6407__a[G__6407__i] = arguments[G__6407__i + 0]; ++G__6407__i;}
  args = new cljs.core.IndexedSeq(G__6407__a,0,null);
} 
return G__6406__delegate.call(this,args);};
G__6406.cljs$lang$maxFixedArity = 0;
G__6406.cljs$lang$applyTo = (function (arglist__6408){
var args = cljs.core.seq(arglist__6408);
return G__6406__delegate(args);
});
G__6406.cljs$core$IFn$_invoke$arity$variadic = G__6406__delegate;
return G__6406;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__6409__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__6409 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6410__i = 0, G__6410__a = new Array(arguments.length -  0);
while (G__6410__i < G__6410__a.length) {G__6410__a[G__6410__i] = arguments[G__6410__i + 0]; ++G__6410__i;}
  args = new cljs.core.IndexedSeq(G__6410__a,0,null);
} 
return G__6409__delegate.call(this,args);};
G__6409.cljs$lang$maxFixedArity = 0;
G__6409.cljs$lang$applyTo = (function (arglist__6411){
var args = cljs.core.seq(arglist__6411);
return G__6409__delegate(args);
});
G__6409.cljs$core$IFn$_invoke$arity$variadic = G__6409__delegate;
return G__6409;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
