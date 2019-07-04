// Compiled by ClojureScript 1.10.520 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if((((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID)))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error(["Cannot compare ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if((((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID)))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error(["Cannot compare ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode(this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode(this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,["#uuid \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid__$1.toString()),"\""].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
<<<<<<< HEAD:docs/js/compiled/worker-out/cognitect/transit.js
var seq__16422_16426 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__16423_16427 = null;
var count__16424_16428 = (0);
var i__16425_16429 = (0);
while(true){
if((i__16425_16429 < count__16424_16428)){
var k_16430 = cljs.core._nth.call(null,chunk__16423_16427,i__16425_16429);
var v_16431 = (b[k_16430]);
(a[k_16430] = v_16431);


var G__16432 = seq__16422_16426;
var G__16433 = chunk__16423_16427;
var G__16434 = count__16424_16428;
var G__16435 = (i__16425_16429 + (1));
seq__16422_16426 = G__16432;
chunk__16423_16427 = G__16433;
count__16424_16428 = G__16434;
i__16425_16429 = G__16435;
continue;
} else {
var temp__5720__auto___16436 = cljs.core.seq.call(null,seq__16422_16426);
if(temp__5720__auto___16436){
var seq__16422_16437__$1 = temp__5720__auto___16436;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16422_16437__$1)){
var c__4550__auto___16438 = cljs.core.chunk_first.call(null,seq__16422_16437__$1);
var G__16439 = cljs.core.chunk_rest.call(null,seq__16422_16437__$1);
var G__16440 = c__4550__auto___16438;
var G__16441 = cljs.core.count.call(null,c__4550__auto___16438);
var G__16442 = (0);
seq__16422_16426 = G__16439;
chunk__16423_16427 = G__16440;
count__16424_16428 = G__16441;
i__16425_16429 = G__16442;
continue;
} else {
var k_16443 = cljs.core.first.call(null,seq__16422_16437__$1);
var v_16444 = (b[k_16443]);
(a[k_16443] = v_16444);


var G__16445 = cljs.core.next.call(null,seq__16422_16437__$1);
var G__16446 = null;
var G__16447 = (0);
var G__16448 = (0);
seq__16422_16426 = G__16445;
chunk__16423_16427 = G__16446;
count__16424_16428 = G__16447;
i__16425_16429 = G__16448;
=======
var seq__19605_19609 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__19606_19610 = null;
var count__19607_19611 = (0);
var i__19608_19612 = (0);
while(true){
if((i__19608_19612 < count__19607_19611)){
var k_19613 = cljs.core._nth.call(null,chunk__19606_19610,i__19608_19612);
var v_19614 = (b[k_19613]);
(a[k_19613] = v_19614);


var G__19615 = seq__19605_19609;
var G__19616 = chunk__19606_19610;
var G__19617 = count__19607_19611;
var G__19618 = (i__19608_19612 + (1));
seq__19605_19609 = G__19615;
chunk__19606_19610 = G__19616;
count__19607_19611 = G__19617;
i__19608_19612 = G__19618;
continue;
} else {
var temp__5720__auto___19619 = cljs.core.seq.call(null,seq__19605_19609);
if(temp__5720__auto___19619){
var seq__19605_19620__$1 = temp__5720__auto___19619;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19605_19620__$1)){
var c__4550__auto___19621 = cljs.core.chunk_first.call(null,seq__19605_19620__$1);
var G__19622 = cljs.core.chunk_rest.call(null,seq__19605_19620__$1);
var G__19623 = c__4550__auto___19621;
var G__19624 = cljs.core.count.call(null,c__4550__auto___19621);
var G__19625 = (0);
seq__19605_19609 = G__19622;
chunk__19606_19610 = G__19623;
count__19607_19611 = G__19624;
i__19608_19612 = G__19625;
continue;
} else {
var k_19626 = cljs.core.first.call(null,seq__19605_19620__$1);
var v_19627 = (b[k_19626]);
(a[k_19626] = v_19627);


var G__19628 = cljs.core.next.call(null,seq__19605_19620__$1);
var G__19629 = null;
var G__19630 = (0);
var G__19631 = (0);
seq__19605_19609 = G__19628;
chunk__19606_19610 = G__19629;
count__19607_19611 = G__19630;
i__19608_19612 = G__19631;
>>>>>>> :simple optimizations:docs/js/compiled/out/cognitect/transit.js
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
});
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cognitect.transit/MapBuilder");
});

/**
 * Positional factory function for cognitect.transit/MapBuilder.
 */
cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
});
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cognitect.transit/VectorBuilder");
});

/**
 * Positional factory function for cognitect.transit/VectorBuilder.
 */
cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cognitect/transit.js
var G__16450 = arguments.length;
switch (G__16450) {
=======
var G__19633 = arguments.length;
switch (G__19633) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cognitect/transit.js
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader(cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
<<<<<<< HEAD:docs/js/compiled/worker-out/cognitect/transit.js
var G__16452 = (i + (2));
var G__16453 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__16452;
ret = G__16453;
=======
var G__19635 = (i + (2));
var G__19636 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__19635;
ret = G__19636;
>>>>>>> :simple optimizations:docs/js/compiled/out/cognitect/transit.js
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
}),"with-meta",(function (v){
return cljs.core.with_meta.call(null,(v[(0)]),(v[(1)]));
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
});
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cognitect.transit/KeywordHandler");
});

/**
 * Positional factory function for cognitect.transit/KeywordHandler.
 */
cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
});
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cognitect.transit/SymbolHandler");
});

/**
 * Positional factory function for cognitect.transit/SymbolHandler.
 */
cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
});
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
<<<<<<< HEAD:docs/js/compiled/worker-out/cognitect/transit.js
var seq__16454_16458 = cljs.core.seq.call(null,v);
var chunk__16455_16459 = null;
var count__16456_16460 = (0);
var i__16457_16461 = (0);
while(true){
if((i__16457_16461 < count__16456_16460)){
var x_16462 = cljs.core._nth.call(null,chunk__16455_16459,i__16457_16461);
ret.push(x_16462);


var G__16463 = seq__16454_16458;
var G__16464 = chunk__16455_16459;
var G__16465 = count__16456_16460;
var G__16466 = (i__16457_16461 + (1));
seq__16454_16458 = G__16463;
chunk__16455_16459 = G__16464;
count__16456_16460 = G__16465;
i__16457_16461 = G__16466;
continue;
} else {
var temp__5720__auto___16467 = cljs.core.seq.call(null,seq__16454_16458);
if(temp__5720__auto___16467){
var seq__16454_16468__$1 = temp__5720__auto___16467;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16454_16468__$1)){
var c__4550__auto___16469 = cljs.core.chunk_first.call(null,seq__16454_16468__$1);
var G__16470 = cljs.core.chunk_rest.call(null,seq__16454_16468__$1);
var G__16471 = c__4550__auto___16469;
var G__16472 = cljs.core.count.call(null,c__4550__auto___16469);
var G__16473 = (0);
seq__16454_16458 = G__16470;
chunk__16455_16459 = G__16471;
count__16456_16460 = G__16472;
i__16457_16461 = G__16473;
continue;
} else {
var x_16474 = cljs.core.first.call(null,seq__16454_16468__$1);
ret.push(x_16474);


var G__16475 = cljs.core.next.call(null,seq__16454_16468__$1);
var G__16476 = null;
var G__16477 = (0);
var G__16478 = (0);
seq__16454_16458 = G__16475;
chunk__16455_16459 = G__16476;
count__16456_16460 = G__16477;
i__16457_16461 = G__16478;
=======
var seq__19637_19641 = cljs.core.seq.call(null,v);
var chunk__19638_19642 = null;
var count__19639_19643 = (0);
var i__19640_19644 = (0);
while(true){
if((i__19640_19644 < count__19639_19643)){
var x_19645 = cljs.core._nth.call(null,chunk__19638_19642,i__19640_19644);
ret.push(x_19645);


var G__19646 = seq__19637_19641;
var G__19647 = chunk__19638_19642;
var G__19648 = count__19639_19643;
var G__19649 = (i__19640_19644 + (1));
seq__19637_19641 = G__19646;
chunk__19638_19642 = G__19647;
count__19639_19643 = G__19648;
i__19640_19644 = G__19649;
continue;
} else {
var temp__5720__auto___19650 = cljs.core.seq.call(null,seq__19637_19641);
if(temp__5720__auto___19650){
var seq__19637_19651__$1 = temp__5720__auto___19650;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19637_19651__$1)){
var c__4550__auto___19652 = cljs.core.chunk_first.call(null,seq__19637_19651__$1);
var G__19653 = cljs.core.chunk_rest.call(null,seq__19637_19651__$1);
var G__19654 = c__4550__auto___19652;
var G__19655 = cljs.core.count.call(null,c__4550__auto___19652);
var G__19656 = (0);
seq__19637_19641 = G__19653;
chunk__19638_19642 = G__19654;
count__19639_19643 = G__19655;
i__19640_19644 = G__19656;
continue;
} else {
var x_19657 = cljs.core.first.call(null,seq__19637_19651__$1);
ret.push(x_19657);


var G__19658 = cljs.core.next.call(null,seq__19637_19651__$1);
var G__19659 = null;
var G__19660 = (0);
var G__19661 = (0);
seq__19637_19641 = G__19658;
chunk__19638_19642 = G__19659;
count__19639_19643 = G__19660;
i__19640_19644 = G__19661;
>>>>>>> :simple optimizations:docs/js/compiled/out/cognitect/transit.js
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged("array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cognitect.transit/ListHandler");
});

/**
 * Positional factory function for cognitect.transit/ListHandler.
 */
cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
});
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cognitect.transit/MapHandler");
});

/**
 * Positional factory function for cognitect.transit/MapHandler.
 */
cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
});
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
<<<<<<< HEAD:docs/js/compiled/worker-out/cognitect/transit.js
var seq__16479_16483 = cljs.core.seq.call(null,v);
var chunk__16480_16484 = null;
var count__16481_16485 = (0);
var i__16482_16486 = (0);
while(true){
if((i__16482_16486 < count__16481_16485)){
var x_16487 = cljs.core._nth.call(null,chunk__16480_16484,i__16482_16486);
ret.push(x_16487);


var G__16488 = seq__16479_16483;
var G__16489 = chunk__16480_16484;
var G__16490 = count__16481_16485;
var G__16491 = (i__16482_16486 + (1));
seq__16479_16483 = G__16488;
chunk__16480_16484 = G__16489;
count__16481_16485 = G__16490;
i__16482_16486 = G__16491;
continue;
} else {
var temp__5720__auto___16492 = cljs.core.seq.call(null,seq__16479_16483);
if(temp__5720__auto___16492){
var seq__16479_16493__$1 = temp__5720__auto___16492;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16479_16493__$1)){
var c__4550__auto___16494 = cljs.core.chunk_first.call(null,seq__16479_16493__$1);
var G__16495 = cljs.core.chunk_rest.call(null,seq__16479_16493__$1);
var G__16496 = c__4550__auto___16494;
var G__16497 = cljs.core.count.call(null,c__4550__auto___16494);
var G__16498 = (0);
seq__16479_16483 = G__16495;
chunk__16480_16484 = G__16496;
count__16481_16485 = G__16497;
i__16482_16486 = G__16498;
continue;
} else {
var x_16499 = cljs.core.first.call(null,seq__16479_16493__$1);
ret.push(x_16499);


var G__16500 = cljs.core.next.call(null,seq__16479_16493__$1);
var G__16501 = null;
var G__16502 = (0);
var G__16503 = (0);
seq__16479_16483 = G__16500;
chunk__16480_16484 = G__16501;
count__16481_16485 = G__16502;
i__16482_16486 = G__16503;
=======
var seq__19662_19666 = cljs.core.seq.call(null,v);
var chunk__19663_19667 = null;
var count__19664_19668 = (0);
var i__19665_19669 = (0);
while(true){
if((i__19665_19669 < count__19664_19668)){
var x_19670 = cljs.core._nth.call(null,chunk__19663_19667,i__19665_19669);
ret.push(x_19670);


var G__19671 = seq__19662_19666;
var G__19672 = chunk__19663_19667;
var G__19673 = count__19664_19668;
var G__19674 = (i__19665_19669 + (1));
seq__19662_19666 = G__19671;
chunk__19663_19667 = G__19672;
count__19664_19668 = G__19673;
i__19665_19669 = G__19674;
continue;
} else {
var temp__5720__auto___19675 = cljs.core.seq.call(null,seq__19662_19666);
if(temp__5720__auto___19675){
var seq__19662_19676__$1 = temp__5720__auto___19675;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19662_19676__$1)){
var c__4550__auto___19677 = cljs.core.chunk_first.call(null,seq__19662_19676__$1);
var G__19678 = cljs.core.chunk_rest.call(null,seq__19662_19676__$1);
var G__19679 = c__4550__auto___19677;
var G__19680 = cljs.core.count.call(null,c__4550__auto___19677);
var G__19681 = (0);
seq__19662_19666 = G__19678;
chunk__19663_19667 = G__19679;
count__19664_19668 = G__19680;
i__19665_19669 = G__19681;
continue;
} else {
var x_19682 = cljs.core.first.call(null,seq__19662_19676__$1);
ret.push(x_19682);


var G__19683 = cljs.core.next.call(null,seq__19662_19676__$1);
var G__19684 = null;
var G__19685 = (0);
var G__19686 = (0);
seq__19662_19666 = G__19683;
chunk__19663_19667 = G__19684;
count__19664_19668 = G__19685;
i__19665_19669 = G__19686;
>>>>>>> :simple optimizations:docs/js/compiled/out/cognitect/transit.js
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged("array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cognitect.transit/SetHandler");
});

/**
 * Positional factory function for cognitect.transit/SetHandler.
 */
cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
<<<<<<< HEAD:docs/js/compiled/worker-out/cognitect/transit.js
var seq__16504_16508 = cljs.core.seq.call(null,v);
var chunk__16505_16509 = null;
var count__16506_16510 = (0);
var i__16507_16511 = (0);
while(true){
if((i__16507_16511 < count__16506_16510)){
var x_16512 = cljs.core._nth.call(null,chunk__16505_16509,i__16507_16511);
ret.push(x_16512);


var G__16513 = seq__16504_16508;
var G__16514 = chunk__16505_16509;
var G__16515 = count__16506_16510;
var G__16516 = (i__16507_16511 + (1));
seq__16504_16508 = G__16513;
chunk__16505_16509 = G__16514;
count__16506_16510 = G__16515;
i__16507_16511 = G__16516;
continue;
} else {
var temp__5720__auto___16517 = cljs.core.seq.call(null,seq__16504_16508);
if(temp__5720__auto___16517){
var seq__16504_16518__$1 = temp__5720__auto___16517;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16504_16518__$1)){
var c__4550__auto___16519 = cljs.core.chunk_first.call(null,seq__16504_16518__$1);
var G__16520 = cljs.core.chunk_rest.call(null,seq__16504_16518__$1);
var G__16521 = c__4550__auto___16519;
var G__16522 = cljs.core.count.call(null,c__4550__auto___16519);
var G__16523 = (0);
seq__16504_16508 = G__16520;
chunk__16505_16509 = G__16521;
count__16506_16510 = G__16522;
i__16507_16511 = G__16523;
continue;
} else {
var x_16524 = cljs.core.first.call(null,seq__16504_16518__$1);
ret.push(x_16524);


var G__16525 = cljs.core.next.call(null,seq__16504_16518__$1);
var G__16526 = null;
var G__16527 = (0);
var G__16528 = (0);
seq__16504_16508 = G__16525;
chunk__16505_16509 = G__16526;
count__16506_16510 = G__16527;
i__16507_16511 = G__16528;
=======
var seq__19687_19691 = cljs.core.seq.call(null,v);
var chunk__19688_19692 = null;
var count__19689_19693 = (0);
var i__19690_19694 = (0);
while(true){
if((i__19690_19694 < count__19689_19693)){
var x_19695 = cljs.core._nth.call(null,chunk__19688_19692,i__19690_19694);
ret.push(x_19695);


var G__19696 = seq__19687_19691;
var G__19697 = chunk__19688_19692;
var G__19698 = count__19689_19693;
var G__19699 = (i__19690_19694 + (1));
seq__19687_19691 = G__19696;
chunk__19688_19692 = G__19697;
count__19689_19693 = G__19698;
i__19690_19694 = G__19699;
continue;
} else {
var temp__5720__auto___19700 = cljs.core.seq.call(null,seq__19687_19691);
if(temp__5720__auto___19700){
var seq__19687_19701__$1 = temp__5720__auto___19700;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19687_19701__$1)){
var c__4550__auto___19702 = cljs.core.chunk_first.call(null,seq__19687_19701__$1);
var G__19703 = cljs.core.chunk_rest.call(null,seq__19687_19701__$1);
var G__19704 = c__4550__auto___19702;
var G__19705 = cljs.core.count.call(null,c__4550__auto___19702);
var G__19706 = (0);
seq__19687_19691 = G__19703;
chunk__19688_19692 = G__19704;
count__19689_19693 = G__19705;
i__19690_19694 = G__19706;
continue;
} else {
var x_19707 = cljs.core.first.call(null,seq__19687_19701__$1);
ret.push(x_19707);


var G__19708 = cljs.core.next.call(null,seq__19687_19701__$1);
var G__19709 = null;
var G__19710 = (0);
var G__19711 = (0);
seq__19687_19691 = G__19708;
chunk__19688_19692 = G__19709;
count__19689_19693 = G__19710;
i__19690_19694 = G__19711;
>>>>>>> :simple optimizations:docs/js/compiled/out/cognitect/transit.js
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cognitect.transit/VectorHandler");
});

/**
 * Positional factory function for cognitect.transit/VectorHandler.
 */
cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
});
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cognitect.transit/UUIDHandler");
});

/**
 * Positional factory function for cognitect.transit/UUIDHandler.
 */
cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});


/**
* @constructor
*/
cognitect.transit.WithMeta = (function (value,meta){
this.value = value;
this.meta = meta;
});

cognitect.transit.WithMeta.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null)], null);
});

cognitect.transit.WithMeta.cljs$lang$type = true;

cognitect.transit.WithMeta.cljs$lang$ctorStr = "cognitect.transit/WithMeta";

cognitect.transit.WithMeta.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cognitect.transit/WithMeta");
});

/**
 * Positional factory function for cognitect.transit/WithMeta.
 */
cognitect.transit.__GT_WithMeta = (function cognitect$transit$__GT_WithMeta(value,meta){
return (new cognitect.transit.WithMeta(value,meta));
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.WithMetaHandler = (function (){
});
cognitect.transit.WithMetaHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "with-meta";
});

cognitect.transit.WithMetaHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return com.cognitect.transit.tagged("array",[v.value,v.meta]);
});

cognitect.transit.WithMetaHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.WithMetaHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.WithMetaHandler.cljs$lang$type = true;

cognitect.transit.WithMetaHandler.cljs$lang$ctorStr = "cognitect.transit/WithMetaHandler";

cognitect.transit.WithMetaHandler.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cognitect.transit/WithMetaHandler");
});

/**
 * Positional factory function for cognitect.transit/WithMetaHandler.
 */
cognitect.transit.__GT_WithMetaHandler = (function cognitect$transit$__GT_WithMetaHandler(){
return (new cognitect.transit.WithMetaHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map with the following optional keys:
 * 
 *  :handlers  - a map of type constructors to handler instances.
 *  :transform - a function of one argument returning a transformed value. Will
 *               be invoked on a value before it is written.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cognitect/transit.js
var G__16530 = arguments.length;
switch (G__16530) {
=======
var G__19713 = arguments.length;
switch (G__19713) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cognitect/transit.js
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var meta_handler = (new cognitect.transit.WithMetaHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cognitect.transit.WithMeta,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,meta_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),(((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.Eduction !== 'undefined'))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.Eduction,list_handler]):null),(((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.Repeat !== 'undefined'))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.Repeat,list_handler]):null),(((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.MapEntry !== 'undefined'))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.MapEntry,vector_handler]):null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer(cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,meta_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,meta_handler,handlers){
return (function (obj,k,v){
<<<<<<< HEAD:docs/js/compiled/worker-out/cognitect/transit.js
var G__16531 = obj;
G__16531.push(kfn.call(null,k),vfn.call(null,v));

return G__16531;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,meta_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,meta_handler,handlers))
, "handlers": (function (){var x16532 = cljs.core.clone.call(null,handlers);
x16532.forEach = ((function (x16532,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,meta_handler,handlers){
return (function (f){
var coll = this;
var seq__16533 = cljs.core.seq.call(null,coll);
var chunk__16534 = null;
var count__16535 = (0);
var i__16536 = (0);
while(true){
if((i__16536 < count__16535)){
var vec__16543 = cljs.core._nth.call(null,chunk__16534,i__16536);
var k = cljs.core.nth.call(null,vec__16543,(0),null);
var v = cljs.core.nth.call(null,vec__16543,(1),null);
f.call(null,v,k);


var G__16550 = seq__16533;
var G__16551 = chunk__16534;
var G__16552 = count__16535;
var G__16553 = (i__16536 + (1));
seq__16533 = G__16550;
chunk__16534 = G__16551;
count__16535 = G__16552;
i__16536 = G__16553;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__16533);
if(temp__5720__auto__){
var seq__16533__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16533__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__16533__$1);
var G__16554 = cljs.core.chunk_rest.call(null,seq__16533__$1);
var G__16555 = c__4550__auto__;
var G__16556 = cljs.core.count.call(null,c__4550__auto__);
var G__16557 = (0);
seq__16533 = G__16554;
chunk__16534 = G__16555;
count__16535 = G__16556;
i__16536 = G__16557;
continue;
} else {
var vec__16546 = cljs.core.first.call(null,seq__16533__$1);
var k = cljs.core.nth.call(null,vec__16546,(0),null);
var v = cljs.core.nth.call(null,vec__16546,(1),null);
f.call(null,v,k);


var G__16558 = cljs.core.next.call(null,seq__16533__$1);
var G__16559 = null;
var G__16560 = (0);
var G__16561 = (0);
seq__16533 = G__16558;
chunk__16534 = G__16559;
count__16535 = G__16560;
i__16536 = G__16561;
=======
var G__19714 = obj;
G__19714.push(kfn.call(null,k),vfn.call(null,v));

return G__19714;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,meta_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,meta_handler,handlers))
, "handlers": (function (){var x19715 = cljs.core.clone.call(null,handlers);
x19715.forEach = ((function (x19715,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,meta_handler,handlers){
return (function (f){
var coll = this;
var seq__19716 = cljs.core.seq.call(null,coll);
var chunk__19717 = null;
var count__19718 = (0);
var i__19719 = (0);
while(true){
if((i__19719 < count__19718)){
var vec__19726 = cljs.core._nth.call(null,chunk__19717,i__19719);
var k = cljs.core.nth.call(null,vec__19726,(0),null);
var v = cljs.core.nth.call(null,vec__19726,(1),null);
f.call(null,v,k);


var G__19733 = seq__19716;
var G__19734 = chunk__19717;
var G__19735 = count__19718;
var G__19736 = (i__19719 + (1));
seq__19716 = G__19733;
chunk__19717 = G__19734;
count__19718 = G__19735;
i__19719 = G__19736;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__19716);
if(temp__5720__auto__){
var seq__19716__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19716__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__19716__$1);
var G__19737 = cljs.core.chunk_rest.call(null,seq__19716__$1);
var G__19738 = c__4550__auto__;
var G__19739 = cljs.core.count.call(null,c__4550__auto__);
var G__19740 = (0);
seq__19716 = G__19737;
chunk__19717 = G__19738;
count__19718 = G__19739;
i__19719 = G__19740;
continue;
} else {
var vec__19729 = cljs.core.first.call(null,seq__19716__$1);
var k = cljs.core.nth.call(null,vec__19729,(0),null);
var v = cljs.core.nth.call(null,vec__19729,(1),null);
f.call(null,v,k);


var G__19741 = cljs.core.next.call(null,seq__19716__$1);
var G__19742 = null;
var G__19743 = (0);
var G__19744 = (0);
seq__19716 = G__19741;
chunk__19717 = G__19742;
count__19718 = G__19743;
i__19719 = G__19744;
>>>>>>> :simple optimizations:docs/js/compiled/out/cognitect/transit.js
continue;
}
} else {
return null;
}
}
break;
}
<<<<<<< HEAD:docs/js/compiled/worker-out/cognitect/transit.js
});})(x16532,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,meta_handler,handlers))
;

return x16532;
=======
});})(x19715,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,meta_handler,handlers))
;

return x19715;
>>>>>>> :simple optimizations:docs/js/compiled/out/cognitect/transit.js
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,meta_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,meta_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cognitect/transit.js
var G__16563 = arguments.length;
switch (G__16563) {
=======
var G__19746 = arguments.length;
switch (G__19746) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cognitect/transit.js
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
<<<<<<< HEAD:docs/js/compiled/worker-out/cognitect/transit.js
if((typeof cognitect !== 'undefined') && (typeof cognitect.transit !== 'undefined') && (typeof cognitect.transit.t_cognitect$transit16564 !== 'undefined')){
=======
if((typeof cognitect !== 'undefined') && (typeof cognitect.transit !== 'undefined') && (typeof cognitect.transit.t_cognitect$transit19747 !== 'undefined')){
>>>>>>> :simple optimizations:docs/js/compiled/out/cognitect/transit.js
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD:docs/js/compiled/worker-out/cognitect/transit.js
cognitect.transit.t_cognitect$transit16564 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta16565){
=======
cognitect.transit.t_cognitect$transit19747 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta19748){
>>>>>>> :simple optimizations:docs/js/compiled/out/cognitect/transit.js
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
<<<<<<< HEAD:docs/js/compiled/worker-out/cognitect/transit.js
this.meta16565 = meta16565;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cognitect.transit.t_cognitect$transit16564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16566,meta16565__$1){
var self__ = this;
var _16566__$1 = this;
return (new cognitect.transit.t_cognitect$transit16564(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta16565__$1));
});

cognitect.transit.t_cognitect$transit16564.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16566){
var self__ = this;
var _16566__$1 = this;
return self__.meta16565;
});

cognitect.transit.t_cognitect$transit16564.prototype.tag = (function (o){
=======
this.meta19748 = meta19748;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cognitect.transit.t_cognitect$transit19747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19749,meta19748__$1){
var self__ = this;
var _19749__$1 = this;
return (new cognitect.transit.t_cognitect$transit19747(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta19748__$1));
});

cognitect.transit.t_cognitect$transit19747.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19749){
var self__ = this;
var _19749__$1 = this;
return self__.meta19748;
});

cognitect.transit.t_cognitect$transit19747.prototype.tag = (function (o){
>>>>>>> :simple optimizations:docs/js/compiled/out/cognitect/transit.js
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cognitect/transit.js
cognitect.transit.t_cognitect$transit16564.prototype.rep = (function (o){
=======
cognitect.transit.t_cognitect$transit19747.prototype.rep = (function (o){
>>>>>>> :simple optimizations:docs/js/compiled/out/cognitect/transit.js
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cognitect/transit.js
cognitect.transit.t_cognitect$transit16564.prototype.stringRep = (function (o){
=======
cognitect.transit.t_cognitect$transit19747.prototype.stringRep = (function (o){
>>>>>>> :simple optimizations:docs/js/compiled/out/cognitect/transit.js
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cognitect/transit.js
cognitect.transit.t_cognitect$transit16564.prototype.getVerboseHandler = (function (){
=======
cognitect.transit.t_cognitect$transit19747.prototype.getVerboseHandler = (function (){
>>>>>>> :simple optimizations:docs/js/compiled/out/cognitect/transit.js
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cognitect/transit.js
cognitect.transit.t_cognitect$transit16564.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta16565","meta16565",596841548,null)], null);
});

cognitect.transit.t_cognitect$transit16564.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit16564.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit16564";

cognitect.transit.t_cognitect$transit16564.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cognitect.transit/t_cognitect$transit16564");
});

/**
 * Positional factory function for cognitect.transit/t_cognitect$transit16564.
 */
cognitect.transit.__GT_t_cognitect$transit16564 = (function cognitect$transit$__GT_t_cognitect$transit16564(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta16565){
return (new cognitect.transit.t_cognitect$transit16564(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta16565));
=======
cognitect.transit.t_cognitect$transit19747.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta19748","meta19748",-1322196040,null)], null);
});

cognitect.transit.t_cognitect$transit19747.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit19747.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit19747";

cognitect.transit.t_cognitect$transit19747.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cognitect.transit/t_cognitect$transit19747");
});

/**
 * Positional factory function for cognitect.transit/t_cognitect$transit19747.
 */
cognitect.transit.__GT_t_cognitect$transit19747 = (function cognitect$transit$__GT_t_cognitect$transit19747(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta19748){
return (new cognitect.transit.t_cognitect$transit19747(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta19748));
>>>>>>> :simple optimizations:docs/js/compiled/out/cognitect/transit.js
});

}

<<<<<<< HEAD:docs/js/compiled/worker-out/cognitect/transit.js
return (new cognitect.transit.t_cognitect$transit16564(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new cognitect.transit.t_cognitect$transit19747(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> :simple optimizations:docs/js/compiled/out/cognitect/transit.js
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue(tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue(x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue(s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger(x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger(s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger(x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue(s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal(x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri(s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI(x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid(s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__4131__auto__ = com.cognitect.transit.types.isUUID(x);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary(s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary(x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted(x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted(x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link(x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink(x);
});
/**
 * For :transform. Will write any metadata present on the value.
 */
cognitect.transit.write_meta = (function cognitect$transit$write_meta(x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMeta$))))?true:false):false)){
var m = cljs.core._meta.call(null,x);
if((!((m == null)))){
return (new cognitect.transit.WithMeta(cljs.core._with_meta.call(null,x,null),m));
} else {
return x;
}
} else {
return x;
}
});

//# sourceMappingURL=transit.js.map
