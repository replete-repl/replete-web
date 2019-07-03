// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_com.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('reagent.ratom');
goog.require('goog.date.DateTime');
goog.require('goog.date.UtcDateTime');
/**
 * Takes a function 'f' amd a map 'm'.  Applies 'f' to each value in 'm' and returns.
 * (fmap  inc  {:a 4  :b 2})   =>   {:a 5  :b 3}
 */
re_com.util.fmap = (function re_com$util$fmap(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function re_com$util$fmap_$_iter__11091(s__11092){
return (new cljs.core.LazySeq(null,(function (){
var s__11092__$1 = s__11092;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__11092__$1);
if(temp__5720__auto__){
var s__11092__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11092__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__11092__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__11094 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__11093 = (0);
while(true){
if((i__11093 < size__4522__auto__)){
var vec__11095 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__11093);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11095,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11095,(1),null);
cljs.core.chunk_append(b__11094,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(val) : f.call(null,val))], null));

var G__11101 = (i__11093 + (1));
i__11093 = G__11101;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11094),re_com$util$fmap_$_iter__11091(cljs.core.chunk_rest(s__11092__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11094),null);
}
} else {
var vec__11098 = cljs.core.first(s__11092__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11098,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11098,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(val) : f.call(null,val))], null),re_com$util$fmap_$_iter__11091(cljs.core.rest(s__11092__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(m);
})());
});
/**
 * Recursively merges maps. If vals are not maps, the last value wins.
 */
re_com.util.deep_merge = (function re_com$util$deep_merge(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11103 = arguments.length;
var i__4731__auto___11104 = (0);
while(true){
if((i__4731__auto___11104 < len__4730__auto___11103)){
args__4736__auto__.push((arguments[i__4731__auto___11104]));

var G__11105 = (i__4731__auto___11104 + (1));
i__4731__auto___11104 = G__11105;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (vals){
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,vals)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,re_com.util.deep_merge,vals);
} else {
return cljs.core.last(vals);
}
});

re_com.util.deep_merge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.util.deep_merge.cljs$lang$applyTo = (function (seq11102){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11102));
});

/**
 * Takes a value or an atom
 *   If it's a value, returns it
 *   If it's a Reagent object that supports IDeref, returns the value inside it by derefing
 *   
 */
re_com.util.deref_or_value = (function re_com$util$deref_or_value(val_or_atom){
if((((!((val_or_atom == null))))?(((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$))))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,val_or_atom))){
return cljs.core.deref(val_or_atom);
} else {
return val_or_atom;
}
});
/**
 * Takes a value or an atom
 *   If it's a value, returns it
 *   If it's a Reagent object that supports IDeref, returns the value inside it, but WITHOUT derefing
 * 
 *   The arg validation code uses this, since calling deref-or-value adds this arg to the watched ratom list for the component
 *   in question, which in turn can cause different rendering behaviour between dev (where we validate) and prod (where we don't).
 * 
 *   This was experienced in popover-content-wrapper with the position-injected atom which was not derefed there, however
 *   the dev-only validation caused it to be derefed, modifying its render behaviour and causing mayhem and madness for the developer.
 * 
 *   See below that different Reagent types have different ways of retrieving the value without causing capture, although in the case of
 *   Track, we just deref it as there is no peek or state, so hopefully this won't cause issues (surely this is used very rarely).
 *   
 */
re_com.util.deref_or_value_peek = (function re_com$util$deref_or_value_peek(val_or_atom){
if((((!((val_or_atom == null))))?(((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$))))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,val_or_atom))){
if((val_or_atom instanceof reagent.ratom.RAtom)){
return val_or_atom.state;
} else {
if((val_or_atom instanceof reagent.ratom.Reaction)){
return val_or_atom._peek_at();
} else {
if((val_or_atom instanceof reagent.ratom.RCursor)){
return val_or_atom._peek();
} else {
if((val_or_atom instanceof reagent.ratom.Track)){
return cljs.core.deref(val_or_atom);
} else {
if((val_or_atom instanceof reagent.ratom.Wrapper)){
return val_or_atom.state;
} else {
throw (new Error("Unknown reactive data type"));

}
}
}
}
}
} else {
return val_or_atom;
}
});
re_com.util.get_element_by_id = (function re_com$util$get_element_by_id(id){
return document.getElementById(id);
});
/**
 * Left pad a string 's' with '0', until 's' has length 'len'. Return 's' unchanged, if it is already len or greater
 */
re_com.util.pad_zero = (function re_com$util$pad_zero(s,len){
if((cljs.core.count(s) < len)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_last(len,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(len,"0"),s)));
} else {
return s;
}
});
/**
 * return 'num' as a string of 'len' characters, left padding with '0' as necessary
 */
re_com.util.pad_zero_number = (function re_com$util$pad_zero_number(num,len){
return re_com.util.pad_zero(cljs.core.str.cljs$core$IFn$_invoke$arity$1(num),len);
});
/**
 * takes a number (and optional :negative keyword to indicate a negative value) and returns that number as a string with 'px' at the end
 */
re_com.util.px = (function re_com$util$px(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11110 = arguments.length;
var i__4731__auto___11111 = (0);
while(true){
if((i__4731__auto___11111 < len__4730__auto___11110)){
args__4736__auto__.push((arguments[i__4731__auto___11111]));

var G__11112 = (i__4731__auto___11111 + (1));
i__4731__auto___11111 = G__11112;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

re_com.util.px.cljs$core$IFn$_invoke$arity$variadic = (function (val,negative){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(negative)?(- val):val)),"px"].join('');
});

re_com.util.px.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
re_com.util.px.cljs$lang$applyTo = (function (seq11108){
var G__11109 = cljs.core.first(seq11108);
var seq11108__$1 = cljs.core.next(seq11108);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11109,seq11108__$1);
});

/**
 * Removes the item at position n from a vector v, returning a shrunk vector
 */
re_com.util.remove_nth = (function re_com$util$remove_nth(v,n){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),n),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(n + (1)),cljs.core.count(v))));
});
re_com.util.insert_nth = (function re_com$util$insert_nth(vect,index,item){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge,cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(vect,(0),index),item,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(vect,index));
});
/**
 * Takes a vector of maps 'v'. Returns the position of the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.position_for_id = (function re_com$util$position_for_id(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11119 = arguments.length;
var i__4731__auto___11120 = (0);
while(true){
if((i__4731__auto___11120 < len__4730__auto___11119)){
args__4736__auto__.push((arguments[i__4731__auto___11120]));

var G__11121 = (i__4731__auto___11120 + (1));
i__4731__auto___11120 = G__11121;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__11116){
var map__11117 = p__11116;
var map__11117__$1 = (((((!((map__11117 == null))))?(((((map__11117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11117):map__11117);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11117__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
var index_fn = ((function (map__11117,map__11117__$1,id_fn){
return (function (index,item){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(item) : id_fn.call(null,item)),id)){
return index;
} else {
return null;
}
});})(map__11117,map__11117__$1,id_fn))
;
return cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(index_fn,v));
});

re_com.util.position_for_id.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
re_com.util.position_for_id.cljs$lang$applyTo = (function (seq11113){
var G__11114 = cljs.core.first(seq11113);
var seq11113__$1 = cljs.core.next(seq11113);
var G__11115 = cljs.core.first(seq11113__$1);
var seq11113__$2 = cljs.core.next(seq11113__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11114,G__11115,seq11113__$2);
});

/**
 * Takes a vector of maps 'v'. Returns the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.item_for_id = (function re_com$util$item_for_id(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11129 = arguments.length;
var i__4731__auto___11130 = (0);
while(true){
if((i__4731__auto___11130 < len__4730__auto___11129)){
args__4736__auto__.push((arguments[i__4731__auto___11130]));

var G__11131 = (i__4731__auto___11130 + (1));
i__4731__auto___11130 = G__11131;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__11126){
var map__11127 = p__11126;
var map__11127__$1 = (((((!((map__11127 == null))))?(((((map__11127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11127):map__11127);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11127__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__11127,map__11127__$1,id_fn){
return (function (p1__11122_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__11122_SHARP_) : id_fn.call(null,p1__11122_SHARP_)),id);
});})(map__11127,map__11127__$1,id_fn))
,v));
});

re_com.util.item_for_id.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
re_com.util.item_for_id.cljs$lang$applyTo = (function (seq11123){
var G__11124 = cljs.core.first(seq11123);
var seq11123__$1 = cljs.core.next(seq11123);
var G__11125 = cljs.core.first(seq11123__$1);
var seq11123__$2 = cljs.core.next(seq11123__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11124,G__11125,seq11123__$2);
});

/**
 * Takes a vector of maps 'v', each of which has an id-fn (default :id) key.
 *   Return v where item matching 'id' is excluded
 */
re_com.util.remove_id_item = (function re_com$util$remove_id_item(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11139 = arguments.length;
var i__4731__auto___11140 = (0);
while(true){
if((i__4731__auto___11140 < len__4730__auto___11139)){
args__4736__auto__.push((arguments[i__4731__auto___11140]));

var G__11141 = (i__4731__auto___11140 + (1));
i__4731__auto___11140 = G__11141;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__11136){
var map__11137 = p__11136;
var map__11137__$1 = (((((!((map__11137 == null))))?(((((map__11137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11137):map__11137);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11137__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
return cljs.core.filterv(((function (map__11137,map__11137__$1,id_fn){
return (function (p1__11132_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__11132_SHARP_) : id_fn.call(null,p1__11132_SHARP_)),id);
});})(map__11137,map__11137__$1,id_fn))
,v);
});

re_com.util.remove_id_item.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
re_com.util.remove_id_item.cljs$lang$applyTo = (function (seq11133){
var G__11134 = cljs.core.first(seq11133);
var seq11133__$1 = cljs.core.next(seq11133);
var G__11135 = cljs.core.first(seq11133__$1);
var seq11133__$2 = cljs.core.next(seq11133__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11134,G__11135,seq11133__$2);
});

/**
 * (for [[index item first? last?] (enumerate coll)] ...)
 */
re_com.util.enumerate = (function re_com$util$enumerate(coll){
var c = (cljs.core.count(coll) - (1));
var f = ((function (c){
return (function (index,item){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,item,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),index),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,index)], null);
});})(c))
;
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(f,coll);
});
/**
 * Given a DOM node, I traverse through all ascendant nodes (until I reach body), summing any scrollLeft and scrollTop values
 * and return these sums in a map
 */
re_com.util.sum_scroll_offsets = (function re_com$util$sum_scroll_offsets(node){
var current_node = node.parentNode;
var sum_scroll_left = (0);
var sum_scroll_top = (0);
while(true){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_node.tagName,"BODY")){
var G__11142 = current_node.parentNode;
var G__11143 = (sum_scroll_left + current_node.scrollLeft);
var G__11144 = (sum_scroll_top + current_node.scrollTop);
current_node = G__11142;
sum_scroll_left = G__11143;
sum_scroll_top = G__11144;
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$left,sum_scroll_left,cljs.core.cst$kw$top,sum_scroll_top], null);
}
break;
}
});
/**
 * Return a goog.date.UtcDateTime based on local date/time.
 */
re_com.util.now__GT_utc = (function re_com$util$now__GT_utc(){
var local_date_time = (new goog.date.DateTime());
return (new goog.date.UtcDateTime(local_date_time.getYear(),local_date_time.getMonth(),local_date_time.getDate(),(0),(0),(0),(0)));
});
