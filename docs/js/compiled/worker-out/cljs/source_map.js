// Compiled by ClojureScript 1.10.520 {:target :webworker}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__5509){
var vec__5510 = p__5509;
var i = cljs.core.nth.call(null,vec__5510,(0),null);
var v = cljs.core.nth.call(null,vec__5510,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__5513 = seg;
var gcol = cljs.core.nth.call(null,vec__5513,(0),null);
var source = cljs.core.nth.call(null,vec__5513,(1),null);
var line = cljs.core.nth.call(null,vec__5513,(2),null);
var col = cljs.core.nth.call(null,vec__5513,(3),null);
var name = cljs.core.nth.call(null,vec__5513,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__5720__auto__)){
var name__$1 = temp__5720__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__5516 = seg;
var gcol = cljs.core.nth.call(null,vec__5516,(0),null);
var source = cljs.core.nth.call(null,vec__5516,(1),null);
var line = cljs.core.nth.call(null,vec__5516,(2),null);
var col = cljs.core.nth.call(null,vec__5516,(3),null);
var name = cljs.core.nth.call(null,vec__5516,(4),null);
var vec__5519 = relseg;
var rgcol = cljs.core.nth.call(null,vec__5519,(0),null);
var rsource = cljs.core.nth.call(null,vec__5519,(1),null);
var rline = cljs.core.nth.call(null,vec__5519,(2),null);
var rcol = cljs.core.nth.call(null,vec__5519,(3),null);
var rname = cljs.core.nth.call(null,vec__5519,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__4131__auto__ = col;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__5522 = segmap;
var map__5522__$1 = (((((!((map__5522 == null))))?(((((map__5522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5522):map__5522);
var gcol = cljs.core.get.call(null,map__5522__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__5522__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__5522__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__5522__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__5522__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__5522,map__5522__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__5522,map__5522__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__5522,map__5522__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__5522,map__5522__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__5522,map__5522__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__5522,map__5522__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__5525 = arguments.length;
switch (G__5525) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__5529 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__5533 = cljs.core.next.call(null,segs__$1);
var G__5534 = nrelseg;
var G__5535 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__5533;
relseg__$1 = G__5534;
result__$1 = G__5535;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__5529,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__5529,(1),null);
var G__5536 = (gline + (1));
var G__5537 = cljs.core.next.call(null,lines__$1);
var G__5538 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__5539 = result__$1;
gline = G__5536;
lines__$1 = G__5537;
relseg = G__5538;
result = G__5539;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__5541 = segmap;
var map__5541__$1 = (((((!((map__5541 == null))))?(((((map__5541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5541):map__5541);
var gcol = cljs.core.get.call(null,map__5541__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__5541__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__5541__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__5541__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__5541__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__5541,map__5541__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__5541,map__5541__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__5540_SHARP_){
return cljs.core.conj.call(null,p1__5540_SHARP_,d__$1);
});})(map__5541,map__5541__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__5541,map__5541__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__5544 = arguments.length;
switch (G__5544) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__5548 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__5552 = cljs.core.next.call(null,segs__$1);
var G__5553 = nrelseg;
var G__5554 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__5552;
relseg__$1 = G__5553;
result__$1 = G__5554;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__5548,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__5548,(1),null);
var G__5555 = (gline + (1));
var G__5556 = cljs.core.next.call(null,lines__$1);
var G__5557 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__5558 = result__$1;
gline = G__5555;
lines__$1 = G__5556;
relseg = G__5557;
result = G__5558;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__5559){
var vec__5560 = p__5559;
var _ = cljs.core.nth.call(null,vec__5560,(0),null);
var source = cljs.core.nth.call(null,vec__5560,(1),null);
var line = cljs.core.nth.call(null,vec__5560,(2),null);
var col = cljs.core.nth.call(null,vec__5560,(3),null);
var name = cljs.core.nth.call(null,vec__5560,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__5563){
var vec__5564 = p__5563;
var gcol = cljs.core.nth.call(null,vec__5564,(0),null);
var sidx = cljs.core.nth.call(null,vec__5564,(1),null);
var line = cljs.core.nth.call(null,vec__5564,(2),null);
var col = cljs.core.nth.call(null,vec__5564,(3),null);
var name = cljs.core.nth.call(null,vec__5564,(4),null);
var seg = vec__5564;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__5564,gcol,sidx,line,col,name,seg,relseg){
return (function (p__5567){
var vec__5568 = p__5567;
var _ = cljs.core.nth.call(null,vec__5568,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__5568,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__5568,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__5568,(3),null);
var lname = cljs.core.nth.call(null,vec__5568,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__5564,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5718__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5718__auto__)){
var name = temp__5718__auto__;
var idx = (function (){var temp__5718__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__5718__auto____$1)){
var idx = temp__5718__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__5574 = cljs.core.seq.call(null,infos);
var chunk__5575 = null;
var count__5576 = (0);
var i__5577 = (0);
while(true){
if((i__5577 < count__5576)){
var info = cljs.core._nth.call(null,chunk__5575,i__5577);
var segv_5928 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_5929 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_5930 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_5929 > (lc_5930 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__5574,chunk__5575,count__5576,i__5577,segv_5928,gline_5929,lc_5930,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_5929 - (lc_5930 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_5928], null));
});})(seq__5574,chunk__5575,count__5576,i__5577,segv_5928,gline_5929,lc_5930,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__5574,chunk__5575,count__5576,i__5577,segv_5928,gline_5929,lc_5930,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5929], null),cljs.core.conj,segv_5928);
});})(seq__5574,chunk__5575,count__5576,i__5577,segv_5928,gline_5929,lc_5930,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__5931 = seq__5574;
var G__5932 = chunk__5575;
var G__5933 = count__5576;
var G__5934 = (i__5577 + (1));
seq__5574 = G__5931;
chunk__5575 = G__5932;
count__5576 = G__5933;
i__5577 = G__5934;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__5574);
if(temp__5720__auto__){
var seq__5574__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5574__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__5574__$1);
var G__5935 = cljs.core.chunk_rest.call(null,seq__5574__$1);
var G__5936 = c__4550__auto__;
var G__5937 = cljs.core.count.call(null,c__4550__auto__);
var G__5938 = (0);
seq__5574 = G__5935;
chunk__5575 = G__5936;
count__5576 = G__5937;
i__5577 = G__5938;
continue;
} else {
var info = cljs.core.first.call(null,seq__5574__$1);
var segv_5939 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_5940 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_5941 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_5940 > (lc_5941 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__5574,chunk__5575,count__5576,i__5577,segv_5939,gline_5940,lc_5941,info,seq__5574__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_5940 - (lc_5941 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_5939], null));
});})(seq__5574,chunk__5575,count__5576,i__5577,segv_5939,gline_5940,lc_5941,info,seq__5574__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__5574,chunk__5575,count__5576,i__5577,segv_5939,gline_5940,lc_5941,info,seq__5574__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5940], null),cljs.core.conj,segv_5939);
});})(seq__5574,chunk__5575,count__5576,i__5577,segv_5939,gline_5940,lc_5941,info,seq__5574__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__5942 = cljs.core.next.call(null,seq__5574__$1);
var G__5943 = null;
var G__5944 = (0);
var G__5945 = (0);
seq__5574 = G__5942;
chunk__5575 = G__5943;
count__5576 = G__5944;
i__5577 = G__5945;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__5578_5946 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__5579_5947 = null;
var count__5580_5948 = (0);
var i__5581_5949 = (0);
while(true){
if((i__5581_5949 < count__5580_5948)){
var vec__5754_5950 = cljs.core._nth.call(null,chunk__5579_5947,i__5581_5949);
var source_idx_5951 = cljs.core.nth.call(null,vec__5754_5950,(0),null);
var vec__5757_5952 = cljs.core.nth.call(null,vec__5754_5950,(1),null);
var __5953 = cljs.core.nth.call(null,vec__5757_5952,(0),null);
var lines_5954__$1 = cljs.core.nth.call(null,vec__5757_5952,(1),null);
var seq__5760_5955 = cljs.core.seq.call(null,lines_5954__$1);
var chunk__5761_5956 = null;
var count__5762_5957 = (0);
var i__5763_5958 = (0);
while(true){
if((i__5763_5958 < count__5762_5957)){
var vec__5802_5959 = cljs.core._nth.call(null,chunk__5761_5956,i__5763_5958);
var line_5960 = cljs.core.nth.call(null,vec__5802_5959,(0),null);
var cols_5961 = cljs.core.nth.call(null,vec__5802_5959,(1),null);
var seq__5805_5962 = cljs.core.seq.call(null,cols_5961);
var chunk__5806_5963 = null;
var count__5807_5964 = (0);
var i__5808_5965 = (0);
while(true){
if((i__5808_5965 < count__5807_5964)){
var vec__5815_5966 = cljs.core._nth.call(null,chunk__5806_5963,i__5808_5965);
var col_5967 = cljs.core.nth.call(null,vec__5815_5966,(0),null);
var infos_5968 = cljs.core.nth.call(null,vec__5815_5966,(1),null);
encode_cols.call(null,infos_5968,source_idx_5951,line_5960,col_5967);


var G__5969 = seq__5805_5962;
var G__5970 = chunk__5806_5963;
var G__5971 = count__5807_5964;
var G__5972 = (i__5808_5965 + (1));
seq__5805_5962 = G__5969;
chunk__5806_5963 = G__5970;
count__5807_5964 = G__5971;
i__5808_5965 = G__5972;
continue;
} else {
var temp__5720__auto___5973 = cljs.core.seq.call(null,seq__5805_5962);
if(temp__5720__auto___5973){
var seq__5805_5974__$1 = temp__5720__auto___5973;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5805_5974__$1)){
var c__4550__auto___5975 = cljs.core.chunk_first.call(null,seq__5805_5974__$1);
var G__5976 = cljs.core.chunk_rest.call(null,seq__5805_5974__$1);
var G__5977 = c__4550__auto___5975;
var G__5978 = cljs.core.count.call(null,c__4550__auto___5975);
var G__5979 = (0);
seq__5805_5962 = G__5976;
chunk__5806_5963 = G__5977;
count__5807_5964 = G__5978;
i__5808_5965 = G__5979;
continue;
} else {
var vec__5818_5980 = cljs.core.first.call(null,seq__5805_5974__$1);
var col_5981 = cljs.core.nth.call(null,vec__5818_5980,(0),null);
var infos_5982 = cljs.core.nth.call(null,vec__5818_5980,(1),null);
encode_cols.call(null,infos_5982,source_idx_5951,line_5960,col_5981);


var G__5983 = cljs.core.next.call(null,seq__5805_5974__$1);
var G__5984 = null;
var G__5985 = (0);
var G__5986 = (0);
seq__5805_5962 = G__5983;
chunk__5806_5963 = G__5984;
count__5807_5964 = G__5985;
i__5808_5965 = G__5986;
continue;
}
} else {
}
}
break;
}


var G__5987 = seq__5760_5955;
var G__5988 = chunk__5761_5956;
var G__5989 = count__5762_5957;
var G__5990 = (i__5763_5958 + (1));
seq__5760_5955 = G__5987;
chunk__5761_5956 = G__5988;
count__5762_5957 = G__5989;
i__5763_5958 = G__5990;
continue;
} else {
var temp__5720__auto___5991 = cljs.core.seq.call(null,seq__5760_5955);
if(temp__5720__auto___5991){
var seq__5760_5992__$1 = temp__5720__auto___5991;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5760_5992__$1)){
var c__4550__auto___5993 = cljs.core.chunk_first.call(null,seq__5760_5992__$1);
var G__5994 = cljs.core.chunk_rest.call(null,seq__5760_5992__$1);
var G__5995 = c__4550__auto___5993;
var G__5996 = cljs.core.count.call(null,c__4550__auto___5993);
var G__5997 = (0);
seq__5760_5955 = G__5994;
chunk__5761_5956 = G__5995;
count__5762_5957 = G__5996;
i__5763_5958 = G__5997;
continue;
} else {
var vec__5821_5998 = cljs.core.first.call(null,seq__5760_5992__$1);
var line_5999 = cljs.core.nth.call(null,vec__5821_5998,(0),null);
var cols_6000 = cljs.core.nth.call(null,vec__5821_5998,(1),null);
var seq__5824_6001 = cljs.core.seq.call(null,cols_6000);
var chunk__5825_6002 = null;
var count__5826_6003 = (0);
var i__5827_6004 = (0);
while(true){
if((i__5827_6004 < count__5826_6003)){
var vec__5834_6005 = cljs.core._nth.call(null,chunk__5825_6002,i__5827_6004);
var col_6006 = cljs.core.nth.call(null,vec__5834_6005,(0),null);
var infos_6007 = cljs.core.nth.call(null,vec__5834_6005,(1),null);
encode_cols.call(null,infos_6007,source_idx_5951,line_5999,col_6006);


var G__6008 = seq__5824_6001;
var G__6009 = chunk__5825_6002;
var G__6010 = count__5826_6003;
var G__6011 = (i__5827_6004 + (1));
seq__5824_6001 = G__6008;
chunk__5825_6002 = G__6009;
count__5826_6003 = G__6010;
i__5827_6004 = G__6011;
continue;
} else {
var temp__5720__auto___6012__$1 = cljs.core.seq.call(null,seq__5824_6001);
if(temp__5720__auto___6012__$1){
var seq__5824_6013__$1 = temp__5720__auto___6012__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5824_6013__$1)){
var c__4550__auto___6014 = cljs.core.chunk_first.call(null,seq__5824_6013__$1);
var G__6015 = cljs.core.chunk_rest.call(null,seq__5824_6013__$1);
var G__6016 = c__4550__auto___6014;
var G__6017 = cljs.core.count.call(null,c__4550__auto___6014);
var G__6018 = (0);
seq__5824_6001 = G__6015;
chunk__5825_6002 = G__6016;
count__5826_6003 = G__6017;
i__5827_6004 = G__6018;
continue;
} else {
var vec__5837_6019 = cljs.core.first.call(null,seq__5824_6013__$1);
var col_6020 = cljs.core.nth.call(null,vec__5837_6019,(0),null);
var infos_6021 = cljs.core.nth.call(null,vec__5837_6019,(1),null);
encode_cols.call(null,infos_6021,source_idx_5951,line_5999,col_6020);


var G__6022 = cljs.core.next.call(null,seq__5824_6013__$1);
var G__6023 = null;
var G__6024 = (0);
var G__6025 = (0);
seq__5824_6001 = G__6022;
chunk__5825_6002 = G__6023;
count__5826_6003 = G__6024;
i__5827_6004 = G__6025;
continue;
}
} else {
}
}
break;
}


var G__6026 = cljs.core.next.call(null,seq__5760_5992__$1);
var G__6027 = null;
var G__6028 = (0);
var G__6029 = (0);
seq__5760_5955 = G__6026;
chunk__5761_5956 = G__6027;
count__5762_5957 = G__6028;
i__5763_5958 = G__6029;
continue;
}
} else {
}
}
break;
}


var G__6030 = seq__5578_5946;
var G__6031 = chunk__5579_5947;
var G__6032 = count__5580_5948;
var G__6033 = (i__5581_5949 + (1));
seq__5578_5946 = G__6030;
chunk__5579_5947 = G__6031;
count__5580_5948 = G__6032;
i__5581_5949 = G__6033;
continue;
} else {
var temp__5720__auto___6034 = cljs.core.seq.call(null,seq__5578_5946);
if(temp__5720__auto___6034){
var seq__5578_6035__$1 = temp__5720__auto___6034;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5578_6035__$1)){
var c__4550__auto___6036 = cljs.core.chunk_first.call(null,seq__5578_6035__$1);
var G__6037 = cljs.core.chunk_rest.call(null,seq__5578_6035__$1);
var G__6038 = c__4550__auto___6036;
var G__6039 = cljs.core.count.call(null,c__4550__auto___6036);
var G__6040 = (0);
seq__5578_5946 = G__6037;
chunk__5579_5947 = G__6038;
count__5580_5948 = G__6039;
i__5581_5949 = G__6040;
continue;
} else {
var vec__5840_6041 = cljs.core.first.call(null,seq__5578_6035__$1);
var source_idx_6042 = cljs.core.nth.call(null,vec__5840_6041,(0),null);
var vec__5843_6043 = cljs.core.nth.call(null,vec__5840_6041,(1),null);
var __6044 = cljs.core.nth.call(null,vec__5843_6043,(0),null);
var lines_6045__$1 = cljs.core.nth.call(null,vec__5843_6043,(1),null);
var seq__5846_6046 = cljs.core.seq.call(null,lines_6045__$1);
var chunk__5847_6047 = null;
var count__5848_6048 = (0);
var i__5849_6049 = (0);
while(true){
if((i__5849_6049 < count__5848_6048)){
var vec__5888_6050 = cljs.core._nth.call(null,chunk__5847_6047,i__5849_6049);
var line_6051 = cljs.core.nth.call(null,vec__5888_6050,(0),null);
var cols_6052 = cljs.core.nth.call(null,vec__5888_6050,(1),null);
var seq__5891_6053 = cljs.core.seq.call(null,cols_6052);
var chunk__5892_6054 = null;
var count__5893_6055 = (0);
var i__5894_6056 = (0);
while(true){
if((i__5894_6056 < count__5893_6055)){
var vec__5901_6057 = cljs.core._nth.call(null,chunk__5892_6054,i__5894_6056);
var col_6058 = cljs.core.nth.call(null,vec__5901_6057,(0),null);
var infos_6059 = cljs.core.nth.call(null,vec__5901_6057,(1),null);
encode_cols.call(null,infos_6059,source_idx_6042,line_6051,col_6058);


var G__6060 = seq__5891_6053;
var G__6061 = chunk__5892_6054;
var G__6062 = count__5893_6055;
var G__6063 = (i__5894_6056 + (1));
seq__5891_6053 = G__6060;
chunk__5892_6054 = G__6061;
count__5893_6055 = G__6062;
i__5894_6056 = G__6063;
continue;
} else {
var temp__5720__auto___6064__$1 = cljs.core.seq.call(null,seq__5891_6053);
if(temp__5720__auto___6064__$1){
var seq__5891_6065__$1 = temp__5720__auto___6064__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5891_6065__$1)){
var c__4550__auto___6066 = cljs.core.chunk_first.call(null,seq__5891_6065__$1);
var G__6067 = cljs.core.chunk_rest.call(null,seq__5891_6065__$1);
var G__6068 = c__4550__auto___6066;
var G__6069 = cljs.core.count.call(null,c__4550__auto___6066);
var G__6070 = (0);
seq__5891_6053 = G__6067;
chunk__5892_6054 = G__6068;
count__5893_6055 = G__6069;
i__5894_6056 = G__6070;
continue;
} else {
var vec__5904_6071 = cljs.core.first.call(null,seq__5891_6065__$1);
var col_6072 = cljs.core.nth.call(null,vec__5904_6071,(0),null);
var infos_6073 = cljs.core.nth.call(null,vec__5904_6071,(1),null);
encode_cols.call(null,infos_6073,source_idx_6042,line_6051,col_6072);


var G__6074 = cljs.core.next.call(null,seq__5891_6065__$1);
var G__6075 = null;
var G__6076 = (0);
var G__6077 = (0);
seq__5891_6053 = G__6074;
chunk__5892_6054 = G__6075;
count__5893_6055 = G__6076;
i__5894_6056 = G__6077;
continue;
}
} else {
}
}
break;
}


var G__6078 = seq__5846_6046;
var G__6079 = chunk__5847_6047;
var G__6080 = count__5848_6048;
var G__6081 = (i__5849_6049 + (1));
seq__5846_6046 = G__6078;
chunk__5847_6047 = G__6079;
count__5848_6048 = G__6080;
i__5849_6049 = G__6081;
continue;
} else {
var temp__5720__auto___6082__$1 = cljs.core.seq.call(null,seq__5846_6046);
if(temp__5720__auto___6082__$1){
var seq__5846_6083__$1 = temp__5720__auto___6082__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5846_6083__$1)){
var c__4550__auto___6084 = cljs.core.chunk_first.call(null,seq__5846_6083__$1);
var G__6085 = cljs.core.chunk_rest.call(null,seq__5846_6083__$1);
var G__6086 = c__4550__auto___6084;
var G__6087 = cljs.core.count.call(null,c__4550__auto___6084);
var G__6088 = (0);
seq__5846_6046 = G__6085;
chunk__5847_6047 = G__6086;
count__5848_6048 = G__6087;
i__5849_6049 = G__6088;
continue;
} else {
var vec__5907_6089 = cljs.core.first.call(null,seq__5846_6083__$1);
var line_6090 = cljs.core.nth.call(null,vec__5907_6089,(0),null);
var cols_6091 = cljs.core.nth.call(null,vec__5907_6089,(1),null);
var seq__5910_6092 = cljs.core.seq.call(null,cols_6091);
var chunk__5911_6093 = null;
var count__5912_6094 = (0);
var i__5913_6095 = (0);
while(true){
if((i__5913_6095 < count__5912_6094)){
var vec__5920_6096 = cljs.core._nth.call(null,chunk__5911_6093,i__5913_6095);
var col_6097 = cljs.core.nth.call(null,vec__5920_6096,(0),null);
var infos_6098 = cljs.core.nth.call(null,vec__5920_6096,(1),null);
encode_cols.call(null,infos_6098,source_idx_6042,line_6090,col_6097);


var G__6099 = seq__5910_6092;
var G__6100 = chunk__5911_6093;
var G__6101 = count__5912_6094;
var G__6102 = (i__5913_6095 + (1));
seq__5910_6092 = G__6099;
chunk__5911_6093 = G__6100;
count__5912_6094 = G__6101;
i__5913_6095 = G__6102;
continue;
} else {
var temp__5720__auto___6103__$2 = cljs.core.seq.call(null,seq__5910_6092);
if(temp__5720__auto___6103__$2){
var seq__5910_6104__$1 = temp__5720__auto___6103__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5910_6104__$1)){
var c__4550__auto___6105 = cljs.core.chunk_first.call(null,seq__5910_6104__$1);
var G__6106 = cljs.core.chunk_rest.call(null,seq__5910_6104__$1);
var G__6107 = c__4550__auto___6105;
var G__6108 = cljs.core.count.call(null,c__4550__auto___6105);
var G__6109 = (0);
seq__5910_6092 = G__6106;
chunk__5911_6093 = G__6107;
count__5912_6094 = G__6108;
i__5913_6095 = G__6109;
continue;
} else {
var vec__5923_6110 = cljs.core.first.call(null,seq__5910_6104__$1);
var col_6111 = cljs.core.nth.call(null,vec__5923_6110,(0),null);
var infos_6112 = cljs.core.nth.call(null,vec__5923_6110,(1),null);
encode_cols.call(null,infos_6112,source_idx_6042,line_6090,col_6111);


var G__6113 = cljs.core.next.call(null,seq__5910_6104__$1);
var G__6114 = null;
var G__6115 = (0);
var G__6116 = (0);
seq__5910_6092 = G__6113;
chunk__5911_6093 = G__6114;
count__5912_6094 = G__6115;
i__5913_6095 = G__6116;
continue;
}
} else {
}
}
break;
}


var G__6117 = cljs.core.next.call(null,seq__5846_6083__$1);
var G__6118 = null;
var G__6119 = (0);
var G__6120 = (0);
seq__5846_6046 = G__6117;
chunk__5847_6047 = G__6118;
count__5848_6048 = G__6119;
i__5849_6049 = G__6120;
continue;
}
} else {
}
}
break;
}


var G__6121 = cljs.core.next.call(null,seq__5578_6035__$1);
var G__6122 = null;
var G__6123 = (0);
var G__6124 = (0);
seq__5578_5946 = G__6121;
chunk__5579_5947 = G__6122;
count__5580_5948 = G__6123;
i__5581_5949 = G__6124;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__5926 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__5571_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5571_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__5572_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__5572_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__5573_SHARP_){
return clojure.string.join.call(null,",",p1__5573_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__5927 = G__5926;
goog.object.set(G__5927,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__5927;
} else {
return G__5926;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__6125 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__6125,(0),null);
var col_map = cljs.core.nth.call(null,vec__6125,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__6128 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__6128,(0),null);
var infos = cljs.core.nth.call(null,vec__6128,(1),null);
var G__6134 = cljs.core.next.call(null,col_map_seq);
var G__6135 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__6128,col,infos,vec__6125,line,col_map){
return (function (v,p__6131){
var map__6132 = p__6131;
var map__6132__$1 = (((((!((map__6132 == null))))?(((((map__6132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6132):map__6132);
var gline = cljs.core.get.call(null,map__6132__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__6132__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__6128,col,infos,vec__6125,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__6134;
new_cols = G__6135;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__6136 = cljs.core.next.call(null,line_map_seq);
var G__6137 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__6136;
new_lines = G__6137;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__6138_6410 = cljs.core.seq.call(null,reverse_map);
var chunk__6139_6411 = null;
var count__6140_6412 = (0);
var i__6141_6413 = (0);
while(true){
if((i__6141_6413 < count__6140_6412)){
var vec__6276_6414 = cljs.core._nth.call(null,chunk__6139_6411,i__6141_6413);
var line_6415 = cljs.core.nth.call(null,vec__6276_6414,(0),null);
var columns_6416 = cljs.core.nth.call(null,vec__6276_6414,(1),null);
var seq__6279_6417 = cljs.core.seq.call(null,columns_6416);
var chunk__6280_6418 = null;
var count__6281_6419 = (0);
var i__6282_6420 = (0);
while(true){
if((i__6282_6420 < count__6281_6419)){
var vec__6313_6421 = cljs.core._nth.call(null,chunk__6280_6418,i__6282_6420);
var column_6422 = cljs.core.nth.call(null,vec__6313_6421,(0),null);
var column_info_6423 = cljs.core.nth.call(null,vec__6313_6421,(1),null);
var seq__6316_6424 = cljs.core.seq.call(null,column_info_6423);
var chunk__6317_6425 = null;
var count__6318_6426 = (0);
var i__6319_6427 = (0);
while(true){
if((i__6319_6427 < count__6318_6426)){
var map__6324_6428 = cljs.core._nth.call(null,chunk__6317_6425,i__6319_6427);
var map__6324_6429__$1 = (((((!((map__6324_6428 == null))))?(((((map__6324_6428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6324_6428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6324_6428):map__6324_6428);
var gline_6430 = cljs.core.get.call(null,map__6324_6429__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_6431 = cljs.core.get.call(null,map__6324_6429__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_6432 = cljs.core.get.call(null,map__6324_6429__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6430], null),cljs.core.fnil.call(null,((function (seq__6316_6424,chunk__6317_6425,count__6318_6426,i__6319_6427,seq__6279_6417,chunk__6280_6418,count__6281_6419,i__6282_6420,seq__6138_6410,chunk__6139_6411,count__6140_6412,i__6141_6413,map__6324_6428,map__6324_6429__$1,gline_6430,gcol_6431,name_6432,vec__6313_6421,column_6422,column_info_6423,vec__6276_6414,line_6415,columns_6416,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_6431], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_6415,new cljs.core.Keyword(null,"col","col",-1959363084),column_6422,new cljs.core.Keyword(null,"name","name",1843675177),name_6432], null));
});})(seq__6316_6424,chunk__6317_6425,count__6318_6426,i__6319_6427,seq__6279_6417,chunk__6280_6418,count__6281_6419,i__6282_6420,seq__6138_6410,chunk__6139_6411,count__6140_6412,i__6141_6413,map__6324_6428,map__6324_6429__$1,gline_6430,gcol_6431,name_6432,vec__6313_6421,column_6422,column_info_6423,vec__6276_6414,line_6415,columns_6416,inverted))
,cljs.core.sorted_map.call(null)));


var G__6433 = seq__6316_6424;
var G__6434 = chunk__6317_6425;
var G__6435 = count__6318_6426;
var G__6436 = (i__6319_6427 + (1));
seq__6316_6424 = G__6433;
chunk__6317_6425 = G__6434;
count__6318_6426 = G__6435;
i__6319_6427 = G__6436;
continue;
} else {
var temp__5720__auto___6437 = cljs.core.seq.call(null,seq__6316_6424);
if(temp__5720__auto___6437){
var seq__6316_6438__$1 = temp__5720__auto___6437;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6316_6438__$1)){
var c__4550__auto___6439 = cljs.core.chunk_first.call(null,seq__6316_6438__$1);
var G__6440 = cljs.core.chunk_rest.call(null,seq__6316_6438__$1);
var G__6441 = c__4550__auto___6439;
var G__6442 = cljs.core.count.call(null,c__4550__auto___6439);
var G__6443 = (0);
seq__6316_6424 = G__6440;
chunk__6317_6425 = G__6441;
count__6318_6426 = G__6442;
i__6319_6427 = G__6443;
continue;
} else {
var map__6326_6444 = cljs.core.first.call(null,seq__6316_6438__$1);
var map__6326_6445__$1 = (((((!((map__6326_6444 == null))))?(((((map__6326_6444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6326_6444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6326_6444):map__6326_6444);
var gline_6446 = cljs.core.get.call(null,map__6326_6445__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_6447 = cljs.core.get.call(null,map__6326_6445__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_6448 = cljs.core.get.call(null,map__6326_6445__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6446], null),cljs.core.fnil.call(null,((function (seq__6316_6424,chunk__6317_6425,count__6318_6426,i__6319_6427,seq__6279_6417,chunk__6280_6418,count__6281_6419,i__6282_6420,seq__6138_6410,chunk__6139_6411,count__6140_6412,i__6141_6413,map__6326_6444,map__6326_6445__$1,gline_6446,gcol_6447,name_6448,seq__6316_6438__$1,temp__5720__auto___6437,vec__6313_6421,column_6422,column_info_6423,vec__6276_6414,line_6415,columns_6416,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_6447], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_6415,new cljs.core.Keyword(null,"col","col",-1959363084),column_6422,new cljs.core.Keyword(null,"name","name",1843675177),name_6448], null));
});})(seq__6316_6424,chunk__6317_6425,count__6318_6426,i__6319_6427,seq__6279_6417,chunk__6280_6418,count__6281_6419,i__6282_6420,seq__6138_6410,chunk__6139_6411,count__6140_6412,i__6141_6413,map__6326_6444,map__6326_6445__$1,gline_6446,gcol_6447,name_6448,seq__6316_6438__$1,temp__5720__auto___6437,vec__6313_6421,column_6422,column_info_6423,vec__6276_6414,line_6415,columns_6416,inverted))
,cljs.core.sorted_map.call(null)));


var G__6449 = cljs.core.next.call(null,seq__6316_6438__$1);
var G__6450 = null;
var G__6451 = (0);
var G__6452 = (0);
seq__6316_6424 = G__6449;
chunk__6317_6425 = G__6450;
count__6318_6426 = G__6451;
i__6319_6427 = G__6452;
continue;
}
} else {
}
}
break;
}


var G__6453 = seq__6279_6417;
var G__6454 = chunk__6280_6418;
var G__6455 = count__6281_6419;
var G__6456 = (i__6282_6420 + (1));
seq__6279_6417 = G__6453;
chunk__6280_6418 = G__6454;
count__6281_6419 = G__6455;
i__6282_6420 = G__6456;
continue;
} else {
var temp__5720__auto___6457 = cljs.core.seq.call(null,seq__6279_6417);
if(temp__5720__auto___6457){
var seq__6279_6458__$1 = temp__5720__auto___6457;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6279_6458__$1)){
var c__4550__auto___6459 = cljs.core.chunk_first.call(null,seq__6279_6458__$1);
var G__6460 = cljs.core.chunk_rest.call(null,seq__6279_6458__$1);
var G__6461 = c__4550__auto___6459;
var G__6462 = cljs.core.count.call(null,c__4550__auto___6459);
var G__6463 = (0);
seq__6279_6417 = G__6460;
chunk__6280_6418 = G__6461;
count__6281_6419 = G__6462;
i__6282_6420 = G__6463;
continue;
} else {
var vec__6328_6464 = cljs.core.first.call(null,seq__6279_6458__$1);
var column_6465 = cljs.core.nth.call(null,vec__6328_6464,(0),null);
var column_info_6466 = cljs.core.nth.call(null,vec__6328_6464,(1),null);
var seq__6331_6467 = cljs.core.seq.call(null,column_info_6466);
var chunk__6332_6468 = null;
var count__6333_6469 = (0);
var i__6334_6470 = (0);
while(true){
if((i__6334_6470 < count__6333_6469)){
var map__6339_6471 = cljs.core._nth.call(null,chunk__6332_6468,i__6334_6470);
var map__6339_6472__$1 = (((((!((map__6339_6471 == null))))?(((((map__6339_6471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6339_6471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6339_6471):map__6339_6471);
var gline_6473 = cljs.core.get.call(null,map__6339_6472__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_6474 = cljs.core.get.call(null,map__6339_6472__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_6475 = cljs.core.get.call(null,map__6339_6472__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6473], null),cljs.core.fnil.call(null,((function (seq__6331_6467,chunk__6332_6468,count__6333_6469,i__6334_6470,seq__6279_6417,chunk__6280_6418,count__6281_6419,i__6282_6420,seq__6138_6410,chunk__6139_6411,count__6140_6412,i__6141_6413,map__6339_6471,map__6339_6472__$1,gline_6473,gcol_6474,name_6475,vec__6328_6464,column_6465,column_info_6466,seq__6279_6458__$1,temp__5720__auto___6457,vec__6276_6414,line_6415,columns_6416,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_6474], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_6415,new cljs.core.Keyword(null,"col","col",-1959363084),column_6465,new cljs.core.Keyword(null,"name","name",1843675177),name_6475], null));
});})(seq__6331_6467,chunk__6332_6468,count__6333_6469,i__6334_6470,seq__6279_6417,chunk__6280_6418,count__6281_6419,i__6282_6420,seq__6138_6410,chunk__6139_6411,count__6140_6412,i__6141_6413,map__6339_6471,map__6339_6472__$1,gline_6473,gcol_6474,name_6475,vec__6328_6464,column_6465,column_info_6466,seq__6279_6458__$1,temp__5720__auto___6457,vec__6276_6414,line_6415,columns_6416,inverted))
,cljs.core.sorted_map.call(null)));


var G__6476 = seq__6331_6467;
var G__6477 = chunk__6332_6468;
var G__6478 = count__6333_6469;
var G__6479 = (i__6334_6470 + (1));
seq__6331_6467 = G__6476;
chunk__6332_6468 = G__6477;
count__6333_6469 = G__6478;
i__6334_6470 = G__6479;
continue;
} else {
var temp__5720__auto___6480__$1 = cljs.core.seq.call(null,seq__6331_6467);
if(temp__5720__auto___6480__$1){
var seq__6331_6481__$1 = temp__5720__auto___6480__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6331_6481__$1)){
var c__4550__auto___6482 = cljs.core.chunk_first.call(null,seq__6331_6481__$1);
var G__6483 = cljs.core.chunk_rest.call(null,seq__6331_6481__$1);
var G__6484 = c__4550__auto___6482;
var G__6485 = cljs.core.count.call(null,c__4550__auto___6482);
var G__6486 = (0);
seq__6331_6467 = G__6483;
chunk__6332_6468 = G__6484;
count__6333_6469 = G__6485;
i__6334_6470 = G__6486;
continue;
} else {
var map__6341_6487 = cljs.core.first.call(null,seq__6331_6481__$1);
var map__6341_6488__$1 = (((((!((map__6341_6487 == null))))?(((((map__6341_6487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6341_6487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6341_6487):map__6341_6487);
var gline_6489 = cljs.core.get.call(null,map__6341_6488__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_6490 = cljs.core.get.call(null,map__6341_6488__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_6491 = cljs.core.get.call(null,map__6341_6488__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6489], null),cljs.core.fnil.call(null,((function (seq__6331_6467,chunk__6332_6468,count__6333_6469,i__6334_6470,seq__6279_6417,chunk__6280_6418,count__6281_6419,i__6282_6420,seq__6138_6410,chunk__6139_6411,count__6140_6412,i__6141_6413,map__6341_6487,map__6341_6488__$1,gline_6489,gcol_6490,name_6491,seq__6331_6481__$1,temp__5720__auto___6480__$1,vec__6328_6464,column_6465,column_info_6466,seq__6279_6458__$1,temp__5720__auto___6457,vec__6276_6414,line_6415,columns_6416,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_6490], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_6415,new cljs.core.Keyword(null,"col","col",-1959363084),column_6465,new cljs.core.Keyword(null,"name","name",1843675177),name_6491], null));
});})(seq__6331_6467,chunk__6332_6468,count__6333_6469,i__6334_6470,seq__6279_6417,chunk__6280_6418,count__6281_6419,i__6282_6420,seq__6138_6410,chunk__6139_6411,count__6140_6412,i__6141_6413,map__6341_6487,map__6341_6488__$1,gline_6489,gcol_6490,name_6491,seq__6331_6481__$1,temp__5720__auto___6480__$1,vec__6328_6464,column_6465,column_info_6466,seq__6279_6458__$1,temp__5720__auto___6457,vec__6276_6414,line_6415,columns_6416,inverted))
,cljs.core.sorted_map.call(null)));


var G__6492 = cljs.core.next.call(null,seq__6331_6481__$1);
var G__6493 = null;
var G__6494 = (0);
var G__6495 = (0);
seq__6331_6467 = G__6492;
chunk__6332_6468 = G__6493;
count__6333_6469 = G__6494;
i__6334_6470 = G__6495;
continue;
}
} else {
}
}
break;
}


var G__6496 = cljs.core.next.call(null,seq__6279_6458__$1);
var G__6497 = null;
var G__6498 = (0);
var G__6499 = (0);
seq__6279_6417 = G__6496;
chunk__6280_6418 = G__6497;
count__6281_6419 = G__6498;
i__6282_6420 = G__6499;
continue;
}
} else {
}
}
break;
}


var G__6500 = seq__6138_6410;
var G__6501 = chunk__6139_6411;
var G__6502 = count__6140_6412;
var G__6503 = (i__6141_6413 + (1));
seq__6138_6410 = G__6500;
chunk__6139_6411 = G__6501;
count__6140_6412 = G__6502;
i__6141_6413 = G__6503;
continue;
} else {
var temp__5720__auto___6504 = cljs.core.seq.call(null,seq__6138_6410);
if(temp__5720__auto___6504){
var seq__6138_6505__$1 = temp__5720__auto___6504;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6138_6505__$1)){
var c__4550__auto___6506 = cljs.core.chunk_first.call(null,seq__6138_6505__$1);
var G__6507 = cljs.core.chunk_rest.call(null,seq__6138_6505__$1);
var G__6508 = c__4550__auto___6506;
var G__6509 = cljs.core.count.call(null,c__4550__auto___6506);
var G__6510 = (0);
seq__6138_6410 = G__6507;
chunk__6139_6411 = G__6508;
count__6140_6412 = G__6509;
i__6141_6413 = G__6510;
continue;
} else {
var vec__6343_6511 = cljs.core.first.call(null,seq__6138_6505__$1);
var line_6512 = cljs.core.nth.call(null,vec__6343_6511,(0),null);
var columns_6513 = cljs.core.nth.call(null,vec__6343_6511,(1),null);
var seq__6346_6514 = cljs.core.seq.call(null,columns_6513);
var chunk__6347_6515 = null;
var count__6348_6516 = (0);
var i__6349_6517 = (0);
while(true){
if((i__6349_6517 < count__6348_6516)){
var vec__6380_6518 = cljs.core._nth.call(null,chunk__6347_6515,i__6349_6517);
var column_6519 = cljs.core.nth.call(null,vec__6380_6518,(0),null);
var column_info_6520 = cljs.core.nth.call(null,vec__6380_6518,(1),null);
var seq__6383_6521 = cljs.core.seq.call(null,column_info_6520);
var chunk__6384_6522 = null;
var count__6385_6523 = (0);
var i__6386_6524 = (0);
while(true){
if((i__6386_6524 < count__6385_6523)){
var map__6391_6525 = cljs.core._nth.call(null,chunk__6384_6522,i__6386_6524);
var map__6391_6526__$1 = (((((!((map__6391_6525 == null))))?(((((map__6391_6525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6391_6525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6391_6525):map__6391_6525);
var gline_6527 = cljs.core.get.call(null,map__6391_6526__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_6528 = cljs.core.get.call(null,map__6391_6526__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_6529 = cljs.core.get.call(null,map__6391_6526__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6527], null),cljs.core.fnil.call(null,((function (seq__6383_6521,chunk__6384_6522,count__6385_6523,i__6386_6524,seq__6346_6514,chunk__6347_6515,count__6348_6516,i__6349_6517,seq__6138_6410,chunk__6139_6411,count__6140_6412,i__6141_6413,map__6391_6525,map__6391_6526__$1,gline_6527,gcol_6528,name_6529,vec__6380_6518,column_6519,column_info_6520,vec__6343_6511,line_6512,columns_6513,seq__6138_6505__$1,temp__5720__auto___6504,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_6528], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_6512,new cljs.core.Keyword(null,"col","col",-1959363084),column_6519,new cljs.core.Keyword(null,"name","name",1843675177),name_6529], null));
});})(seq__6383_6521,chunk__6384_6522,count__6385_6523,i__6386_6524,seq__6346_6514,chunk__6347_6515,count__6348_6516,i__6349_6517,seq__6138_6410,chunk__6139_6411,count__6140_6412,i__6141_6413,map__6391_6525,map__6391_6526__$1,gline_6527,gcol_6528,name_6529,vec__6380_6518,column_6519,column_info_6520,vec__6343_6511,line_6512,columns_6513,seq__6138_6505__$1,temp__5720__auto___6504,inverted))
,cljs.core.sorted_map.call(null)));


var G__6530 = seq__6383_6521;
var G__6531 = chunk__6384_6522;
var G__6532 = count__6385_6523;
var G__6533 = (i__6386_6524 + (1));
seq__6383_6521 = G__6530;
chunk__6384_6522 = G__6531;
count__6385_6523 = G__6532;
i__6386_6524 = G__6533;
continue;
} else {
var temp__5720__auto___6534__$1 = cljs.core.seq.call(null,seq__6383_6521);
if(temp__5720__auto___6534__$1){
var seq__6383_6535__$1 = temp__5720__auto___6534__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6383_6535__$1)){
var c__4550__auto___6536 = cljs.core.chunk_first.call(null,seq__6383_6535__$1);
var G__6537 = cljs.core.chunk_rest.call(null,seq__6383_6535__$1);
var G__6538 = c__4550__auto___6536;
var G__6539 = cljs.core.count.call(null,c__4550__auto___6536);
var G__6540 = (0);
seq__6383_6521 = G__6537;
chunk__6384_6522 = G__6538;
count__6385_6523 = G__6539;
i__6386_6524 = G__6540;
continue;
} else {
var map__6393_6541 = cljs.core.first.call(null,seq__6383_6535__$1);
var map__6393_6542__$1 = (((((!((map__6393_6541 == null))))?(((((map__6393_6541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6393_6541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6393_6541):map__6393_6541);
var gline_6543 = cljs.core.get.call(null,map__6393_6542__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_6544 = cljs.core.get.call(null,map__6393_6542__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_6545 = cljs.core.get.call(null,map__6393_6542__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6543], null),cljs.core.fnil.call(null,((function (seq__6383_6521,chunk__6384_6522,count__6385_6523,i__6386_6524,seq__6346_6514,chunk__6347_6515,count__6348_6516,i__6349_6517,seq__6138_6410,chunk__6139_6411,count__6140_6412,i__6141_6413,map__6393_6541,map__6393_6542__$1,gline_6543,gcol_6544,name_6545,seq__6383_6535__$1,temp__5720__auto___6534__$1,vec__6380_6518,column_6519,column_info_6520,vec__6343_6511,line_6512,columns_6513,seq__6138_6505__$1,temp__5720__auto___6504,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_6544], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_6512,new cljs.core.Keyword(null,"col","col",-1959363084),column_6519,new cljs.core.Keyword(null,"name","name",1843675177),name_6545], null));
});})(seq__6383_6521,chunk__6384_6522,count__6385_6523,i__6386_6524,seq__6346_6514,chunk__6347_6515,count__6348_6516,i__6349_6517,seq__6138_6410,chunk__6139_6411,count__6140_6412,i__6141_6413,map__6393_6541,map__6393_6542__$1,gline_6543,gcol_6544,name_6545,seq__6383_6535__$1,temp__5720__auto___6534__$1,vec__6380_6518,column_6519,column_info_6520,vec__6343_6511,line_6512,columns_6513,seq__6138_6505__$1,temp__5720__auto___6504,inverted))
,cljs.core.sorted_map.call(null)));


var G__6546 = cljs.core.next.call(null,seq__6383_6535__$1);
var G__6547 = null;
var G__6548 = (0);
var G__6549 = (0);
seq__6383_6521 = G__6546;
chunk__6384_6522 = G__6547;
count__6385_6523 = G__6548;
i__6386_6524 = G__6549;
continue;
}
} else {
}
}
break;
}


var G__6550 = seq__6346_6514;
var G__6551 = chunk__6347_6515;
var G__6552 = count__6348_6516;
var G__6553 = (i__6349_6517 + (1));
seq__6346_6514 = G__6550;
chunk__6347_6515 = G__6551;
count__6348_6516 = G__6552;
i__6349_6517 = G__6553;
continue;
} else {
var temp__5720__auto___6554__$1 = cljs.core.seq.call(null,seq__6346_6514);
if(temp__5720__auto___6554__$1){
var seq__6346_6555__$1 = temp__5720__auto___6554__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6346_6555__$1)){
var c__4550__auto___6556 = cljs.core.chunk_first.call(null,seq__6346_6555__$1);
var G__6557 = cljs.core.chunk_rest.call(null,seq__6346_6555__$1);
var G__6558 = c__4550__auto___6556;
var G__6559 = cljs.core.count.call(null,c__4550__auto___6556);
var G__6560 = (0);
seq__6346_6514 = G__6557;
chunk__6347_6515 = G__6558;
count__6348_6516 = G__6559;
i__6349_6517 = G__6560;
continue;
} else {
var vec__6395_6561 = cljs.core.first.call(null,seq__6346_6555__$1);
var column_6562 = cljs.core.nth.call(null,vec__6395_6561,(0),null);
var column_info_6563 = cljs.core.nth.call(null,vec__6395_6561,(1),null);
var seq__6398_6564 = cljs.core.seq.call(null,column_info_6563);
var chunk__6399_6565 = null;
var count__6400_6566 = (0);
var i__6401_6567 = (0);
while(true){
if((i__6401_6567 < count__6400_6566)){
var map__6406_6568 = cljs.core._nth.call(null,chunk__6399_6565,i__6401_6567);
var map__6406_6569__$1 = (((((!((map__6406_6568 == null))))?(((((map__6406_6568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6406_6568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6406_6568):map__6406_6568);
var gline_6570 = cljs.core.get.call(null,map__6406_6569__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_6571 = cljs.core.get.call(null,map__6406_6569__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_6572 = cljs.core.get.call(null,map__6406_6569__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6570], null),cljs.core.fnil.call(null,((function (seq__6398_6564,chunk__6399_6565,count__6400_6566,i__6401_6567,seq__6346_6514,chunk__6347_6515,count__6348_6516,i__6349_6517,seq__6138_6410,chunk__6139_6411,count__6140_6412,i__6141_6413,map__6406_6568,map__6406_6569__$1,gline_6570,gcol_6571,name_6572,vec__6395_6561,column_6562,column_info_6563,seq__6346_6555__$1,temp__5720__auto___6554__$1,vec__6343_6511,line_6512,columns_6513,seq__6138_6505__$1,temp__5720__auto___6504,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_6571], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_6512,new cljs.core.Keyword(null,"col","col",-1959363084),column_6562,new cljs.core.Keyword(null,"name","name",1843675177),name_6572], null));
});})(seq__6398_6564,chunk__6399_6565,count__6400_6566,i__6401_6567,seq__6346_6514,chunk__6347_6515,count__6348_6516,i__6349_6517,seq__6138_6410,chunk__6139_6411,count__6140_6412,i__6141_6413,map__6406_6568,map__6406_6569__$1,gline_6570,gcol_6571,name_6572,vec__6395_6561,column_6562,column_info_6563,seq__6346_6555__$1,temp__5720__auto___6554__$1,vec__6343_6511,line_6512,columns_6513,seq__6138_6505__$1,temp__5720__auto___6504,inverted))
,cljs.core.sorted_map.call(null)));


var G__6573 = seq__6398_6564;
var G__6574 = chunk__6399_6565;
var G__6575 = count__6400_6566;
var G__6576 = (i__6401_6567 + (1));
seq__6398_6564 = G__6573;
chunk__6399_6565 = G__6574;
count__6400_6566 = G__6575;
i__6401_6567 = G__6576;
continue;
} else {
var temp__5720__auto___6577__$2 = cljs.core.seq.call(null,seq__6398_6564);
if(temp__5720__auto___6577__$2){
var seq__6398_6578__$1 = temp__5720__auto___6577__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6398_6578__$1)){
var c__4550__auto___6579 = cljs.core.chunk_first.call(null,seq__6398_6578__$1);
var G__6580 = cljs.core.chunk_rest.call(null,seq__6398_6578__$1);
var G__6581 = c__4550__auto___6579;
var G__6582 = cljs.core.count.call(null,c__4550__auto___6579);
var G__6583 = (0);
seq__6398_6564 = G__6580;
chunk__6399_6565 = G__6581;
count__6400_6566 = G__6582;
i__6401_6567 = G__6583;
continue;
} else {
var map__6408_6584 = cljs.core.first.call(null,seq__6398_6578__$1);
var map__6408_6585__$1 = (((((!((map__6408_6584 == null))))?(((((map__6408_6584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6408_6584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6408_6584):map__6408_6584);
var gline_6586 = cljs.core.get.call(null,map__6408_6585__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_6587 = cljs.core.get.call(null,map__6408_6585__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_6588 = cljs.core.get.call(null,map__6408_6585__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6586], null),cljs.core.fnil.call(null,((function (seq__6398_6564,chunk__6399_6565,count__6400_6566,i__6401_6567,seq__6346_6514,chunk__6347_6515,count__6348_6516,i__6349_6517,seq__6138_6410,chunk__6139_6411,count__6140_6412,i__6141_6413,map__6408_6584,map__6408_6585__$1,gline_6586,gcol_6587,name_6588,seq__6398_6578__$1,temp__5720__auto___6577__$2,vec__6395_6561,column_6562,column_info_6563,seq__6346_6555__$1,temp__5720__auto___6554__$1,vec__6343_6511,line_6512,columns_6513,seq__6138_6505__$1,temp__5720__auto___6504,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_6587], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_6512,new cljs.core.Keyword(null,"col","col",-1959363084),column_6562,new cljs.core.Keyword(null,"name","name",1843675177),name_6588], null));
});})(seq__6398_6564,chunk__6399_6565,count__6400_6566,i__6401_6567,seq__6346_6514,chunk__6347_6515,count__6348_6516,i__6349_6517,seq__6138_6410,chunk__6139_6411,count__6140_6412,i__6141_6413,map__6408_6584,map__6408_6585__$1,gline_6586,gcol_6587,name_6588,seq__6398_6578__$1,temp__5720__auto___6577__$2,vec__6395_6561,column_6562,column_info_6563,seq__6346_6555__$1,temp__5720__auto___6554__$1,vec__6343_6511,line_6512,columns_6513,seq__6138_6505__$1,temp__5720__auto___6504,inverted))
,cljs.core.sorted_map.call(null)));


var G__6589 = cljs.core.next.call(null,seq__6398_6578__$1);
var G__6590 = null;
var G__6591 = (0);
var G__6592 = (0);
seq__6398_6564 = G__6589;
chunk__6399_6565 = G__6590;
count__6400_6566 = G__6591;
i__6401_6567 = G__6592;
continue;
}
} else {
}
}
break;
}


var G__6593 = cljs.core.next.call(null,seq__6346_6555__$1);
var G__6594 = null;
var G__6595 = (0);
var G__6596 = (0);
seq__6346_6514 = G__6593;
chunk__6347_6515 = G__6594;
count__6348_6516 = G__6595;
i__6349_6517 = G__6596;
continue;
}
} else {
}
}
break;
}


var G__6597 = cljs.core.next.call(null,seq__6138_6505__$1);
var G__6598 = null;
var G__6599 = (0);
var G__6600 = (0);
seq__6138_6410 = G__6597;
chunk__6139_6411 = G__6598;
count__6140_6412 = G__6599;
i__6141_6413 = G__6600;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map
