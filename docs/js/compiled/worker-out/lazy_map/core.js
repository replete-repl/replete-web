// Compiled by ClojureScript 1.10.520 {}
goog.provide('lazy_map.core');
goog.require('cljs.core');
goog.require('cljs.core');

/**
 * Hold a value.
 * @interface
 */
lazy_map.core.Holder = function(){};

/**
 * Return object, resolving it if delayed.
 */
lazy_map.core.getv = (function lazy_map$core$getv(a){
if((((!((a == null)))) && ((!((a.lazy_map$core$Holder$getv$arity$1 == null)))))){
return a.lazy_map$core$Holder$getv$arity$1(a);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (lazy_map.core.getv[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,a);
} else {
var m__4431__auto__ = (lazy_map.core.getv["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,a);
} else {
throw cljs.core.missing_protocol.call(null,"Holder.getv",a);
}
}
}
});

goog.object.set(lazy_map.core.Holder,"object",true);

goog.object.set(lazy_map.core.getv,"object",(function (a){
return a;
}));

goog.object.set(lazy_map.core.Holder,"number",true);

goog.object.set(lazy_map.core.getv,"number",(function (a){
return a;
}));

goog.object.set(lazy_map.core.Holder,"boolean",true);

goog.object.set(lazy_map.core.getv,"boolean",(function (a){
return a;
}));

goog.object.set(lazy_map.core.Holder,"string",true);

goog.object.set(lazy_map.core.getv,"string",(function (a){
return a;
}));

goog.object.set(lazy_map.core.Holder,"null",true);

goog.object.set(lazy_map.core.getv,"null",(function (a){
return a;
}));

cljs.core.Delay.prototype.lazy_map$core$Holder$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Delay.prototype.lazy_map$core$Holder$getv$arity$1 = (function (a){
var a__$1 = this;
return cljs.core.force.call(null,a__$1);
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
lazy_map.core.LazyMap = (function (contents){
this.contents = contents;
this.cljs$lang$protocol_mask$partition0$ = 2157971214;
this.cljs$lang$protocol_mask$partition1$ = 131072;
});
lazy_map.core.LazyMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return lazy_map.core.getv.call(null,cljs.core._lookup.call(null,self__.contents,k));
});

lazy_map.core.LazyMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return lazy_map.core.getv.call(null,cljs.core._lookup.call(null,self__.contents,k,not_found));
});

lazy_map.core.LazyMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.contents,writer,opts);
});

lazy_map.core.LazyMap.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._iterator.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (this$__$1){
<<<<<<< HEAD:docs/js/compiled/worker-out/lazy_map/core.js
return (function (p__17914){
var vec__17915 = p__17914;
var k = cljs.core.nth.call(null,vec__17915,(0),null);
var v = cljs.core.nth.call(null,vec__17915,(1),null);
=======
return (function (p__19829){
var vec__19830 = p__19829;
var k = cljs.core.nth.call(null,vec__19830,(0),null);
var v = cljs.core.nth.call(null,vec__19830,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/lazy_map/core.js
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,lazy_map.core.getv.call(null,v)], null);
});})(this$__$1))
,self__.contents)));
});

lazy_map.core.LazyMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.contents);
});

lazy_map.core.LazyMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return cljs.core._equiv.call(null,self__.contents,other);
});

lazy_map.core.LazyMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._empty.call(null,self__.contents);
});

lazy_map.core.LazyMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new lazy_map.core.LazyMap(cljs.core._dissoc.call(null,self__.contents,k)));
});

lazy_map.core.LazyMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new lazy_map.core.LazyMap(cljs.core.assoc.call(null,self__.contents,k,v)));
});

lazy_map.core.LazyMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.contents,k);
});

lazy_map.core.LazyMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._seq.call(null,self__.contents);
});

lazy_map.core.LazyMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return cljs.core._conj.call(null,self__.contents,o);
});

lazy_map.core.LazyMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"contents","contents",73357504,null)], null);
});

lazy_map.core.LazyMap.cljs$lang$type = true;

lazy_map.core.LazyMap.cljs$lang$ctorStr = "lazy-map.core/LazyMap";

lazy_map.core.LazyMap.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"lazy-map.core/LazyMap");
});

/**
 * Positional factory function for lazy-map.core/LazyMap.
 */
lazy_map.core.__GT_LazyMap = (function lazy_map$core$__GT_LazyMap(contents){
return (new lazy_map.core.LazyMap(contents));
});


//# sourceMappingURL=core.js.map
