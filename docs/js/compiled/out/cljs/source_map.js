// Compiled by ClojureScript 1.10.520 {}
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
return cljs.core.reduce.call(null,(function (m,p__14067){
var vec__14068 = p__14067;
var i = cljs.core.nth.call(null,vec__14068,(0),null);
var v = cljs.core.nth.call(null,vec__14068,(1),null);
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
var vec__14071 = seg;
var gcol = cljs.core.nth.call(null,vec__14071,(0),null);
var source = cljs.core.nth.call(null,vec__14071,(1),null);
var line = cljs.core.nth.call(null,vec__14071,(2),null);
var col = cljs.core.nth.call(null,vec__14071,(3),null);
var name = cljs.core.nth.call(null,vec__14071,(4),null);
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
var vec__14074 = seg;
var gcol = cljs.core.nth.call(null,vec__14074,(0),null);
var source = cljs.core.nth.call(null,vec__14074,(1),null);
var line = cljs.core.nth.call(null,vec__14074,(2),null);
var col = cljs.core.nth.call(null,vec__14074,(3),null);
var name = cljs.core.nth.call(null,vec__14074,(4),null);
var vec__14077 = relseg;
var rgcol = cljs.core.nth.call(null,vec__14077,(0),null);
var rsource = cljs.core.nth.call(null,vec__14077,(1),null);
var rline = cljs.core.nth.call(null,vec__14077,(2),null);
var rcol = cljs.core.nth.call(null,vec__14077,(3),null);
var rname = cljs.core.nth.call(null,vec__14077,(4),null);
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
var map__14080 = segmap;
var map__14080__$1 = (((((!((map__14080 == null))))?(((((map__14080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14080):map__14080);
var gcol = cljs.core.get.call(null,map__14080__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__14080__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__14080__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__14080__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__14080__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__14080,map__14080__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__14080,map__14080__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__14080,map__14080__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__14080,map__14080__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__14080,map__14080__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__14080,map__14080__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__14083 = arguments.length;
switch (G__14083) {
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
var vec__14087 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__14091 = cljs.core.next.call(null,segs__$1);
var G__14092 = nrelseg;
var G__14093 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__14091;
relseg__$1 = G__14092;
result__$1 = G__14093;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__14087,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__14087,(1),null);
var G__14094 = (gline + (1));
var G__14095 = cljs.core.next.call(null,lines__$1);
var G__14096 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__14097 = result__$1;
gline = G__14094;
lines__$1 = G__14095;
relseg = G__14096;
result = G__14097;
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
var map__14099 = segmap;
var map__14099__$1 = (((((!((map__14099 == null))))?(((((map__14099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14099):map__14099);
var gcol = cljs.core.get.call(null,map__14099__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__14099__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__14099__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__14099__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__14099__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__14099,map__14099__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__14099,map__14099__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__14098_SHARP_){
return cljs.core.conj.call(null,p1__14098_SHARP_,d__$1);
});})(map__14099,map__14099__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__14099,map__14099__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__14102 = arguments.length;
switch (G__14102) {
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
var vec__14106 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__14110 = cljs.core.next.call(null,segs__$1);
var G__14111 = nrelseg;
var G__14112 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__14110;
relseg__$1 = G__14111;
result__$1 = G__14112;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__14106,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__14106,(1),null);
var G__14113 = (gline + (1));
var G__14114 = cljs.core.next.call(null,lines__$1);
var G__14115 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__14116 = result__$1;
gline = G__14113;
lines__$1 = G__14114;
relseg = G__14115;
result = G__14116;
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
return (function (p__14117){
var vec__14118 = p__14117;
var _ = cljs.core.nth.call(null,vec__14118,(0),null);
var source = cljs.core.nth.call(null,vec__14118,(1),null);
var line = cljs.core.nth.call(null,vec__14118,(2),null);
var col = cljs.core.nth.call(null,vec__14118,(3),null);
var name = cljs.core.nth.call(null,vec__14118,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__14121){
var vec__14122 = p__14121;
var gcol = cljs.core.nth.call(null,vec__14122,(0),null);
var sidx = cljs.core.nth.call(null,vec__14122,(1),null);
var line = cljs.core.nth.call(null,vec__14122,(2),null);
var col = cljs.core.nth.call(null,vec__14122,(3),null);
var name = cljs.core.nth.call(null,vec__14122,(4),null);
var seg = vec__14122;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__14122,gcol,sidx,line,col,name,seg,relseg){
return (function (p__14125){
var vec__14126 = p__14125;
var _ = cljs.core.nth.call(null,vec__14126,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__14126,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__14126,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__14126,(3),null);
var lname = cljs.core.nth.call(null,vec__14126,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__14122,gcol,sidx,line,col,name,seg,relseg))
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
var seq__14132 = cljs.core.seq.call(null,infos);
var chunk__14133 = null;
var count__14134 = (0);
var i__14135 = (0);
while(true){
if((i__14135 < count__14134)){
var info = cljs.core._nth.call(null,chunk__14133,i__14135);
var segv_14486 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_14487 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_14488 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_14487 > (lc_14488 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__14132,chunk__14133,count__14134,i__14135,segv_14486,gline_14487,lc_14488,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_14487 - (lc_14488 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_14486], null));
});})(seq__14132,chunk__14133,count__14134,i__14135,segv_14486,gline_14487,lc_14488,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__14132,chunk__14133,count__14134,i__14135,segv_14486,gline_14487,lc_14488,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14487], null),cljs.core.conj,segv_14486);
});})(seq__14132,chunk__14133,count__14134,i__14135,segv_14486,gline_14487,lc_14488,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__14489 = seq__14132;
var G__14490 = chunk__14133;
var G__14491 = count__14134;
var G__14492 = (i__14135 + (1));
seq__14132 = G__14489;
chunk__14133 = G__14490;
count__14134 = G__14491;
i__14135 = G__14492;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__14132);
if(temp__5720__auto__){
var seq__14132__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14132__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__14132__$1);
var G__14493 = cljs.core.chunk_rest.call(null,seq__14132__$1);
var G__14494 = c__4550__auto__;
var G__14495 = cljs.core.count.call(null,c__4550__auto__);
var G__14496 = (0);
seq__14132 = G__14493;
chunk__14133 = G__14494;
count__14134 = G__14495;
i__14135 = G__14496;
continue;
} else {
var info = cljs.core.first.call(null,seq__14132__$1);
var segv_14497 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_14498 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_14499 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_14498 > (lc_14499 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__14132,chunk__14133,count__14134,i__14135,segv_14497,gline_14498,lc_14499,info,seq__14132__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_14498 - (lc_14499 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_14497], null));
});})(seq__14132,chunk__14133,count__14134,i__14135,segv_14497,gline_14498,lc_14499,info,seq__14132__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__14132,chunk__14133,count__14134,i__14135,segv_14497,gline_14498,lc_14499,info,seq__14132__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14498], null),cljs.core.conj,segv_14497);
});})(seq__14132,chunk__14133,count__14134,i__14135,segv_14497,gline_14498,lc_14499,info,seq__14132__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__14500 = cljs.core.next.call(null,seq__14132__$1);
var G__14501 = null;
var G__14502 = (0);
var G__14503 = (0);
seq__14132 = G__14500;
chunk__14133 = G__14501;
count__14134 = G__14502;
i__14135 = G__14503;
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
var seq__14136_14504 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__14137_14505 = null;
var count__14138_14506 = (0);
var i__14139_14507 = (0);
while(true){
if((i__14139_14507 < count__14138_14506)){
var vec__14312_14508 = cljs.core._nth.call(null,chunk__14137_14505,i__14139_14507);
var source_idx_14509 = cljs.core.nth.call(null,vec__14312_14508,(0),null);
var vec__14315_14510 = cljs.core.nth.call(null,vec__14312_14508,(1),null);
var __14511 = cljs.core.nth.call(null,vec__14315_14510,(0),null);
var lines_14512__$1 = cljs.core.nth.call(null,vec__14315_14510,(1),null);
var seq__14318_14513 = cljs.core.seq.call(null,lines_14512__$1);
var chunk__14319_14514 = null;
var count__14320_14515 = (0);
var i__14321_14516 = (0);
while(true){
if((i__14321_14516 < count__14320_14515)){
var vec__14360_14517 = cljs.core._nth.call(null,chunk__14319_14514,i__14321_14516);
var line_14518 = cljs.core.nth.call(null,vec__14360_14517,(0),null);
var cols_14519 = cljs.core.nth.call(null,vec__14360_14517,(1),null);
var seq__14363_14520 = cljs.core.seq.call(null,cols_14519);
var chunk__14364_14521 = null;
var count__14365_14522 = (0);
var i__14366_14523 = (0);
while(true){
if((i__14366_14523 < count__14365_14522)){
var vec__14373_14524 = cljs.core._nth.call(null,chunk__14364_14521,i__14366_14523);
var col_14525 = cljs.core.nth.call(null,vec__14373_14524,(0),null);
var infos_14526 = cljs.core.nth.call(null,vec__14373_14524,(1),null);
encode_cols.call(null,infos_14526,source_idx_14509,line_14518,col_14525);


var G__14527 = seq__14363_14520;
var G__14528 = chunk__14364_14521;
var G__14529 = count__14365_14522;
var G__14530 = (i__14366_14523 + (1));
seq__14363_14520 = G__14527;
chunk__14364_14521 = G__14528;
count__14365_14522 = G__14529;
i__14366_14523 = G__14530;
continue;
} else {
var temp__5720__auto___14531 = cljs.core.seq.call(null,seq__14363_14520);
if(temp__5720__auto___14531){
var seq__14363_14532__$1 = temp__5720__auto___14531;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14363_14532__$1)){
var c__4550__auto___14533 = cljs.core.chunk_first.call(null,seq__14363_14532__$1);
var G__14534 = cljs.core.chunk_rest.call(null,seq__14363_14532__$1);
var G__14535 = c__4550__auto___14533;
var G__14536 = cljs.core.count.call(null,c__4550__auto___14533);
var G__14537 = (0);
seq__14363_14520 = G__14534;
chunk__14364_14521 = G__14535;
count__14365_14522 = G__14536;
i__14366_14523 = G__14537;
continue;
} else {
var vec__14376_14538 = cljs.core.first.call(null,seq__14363_14532__$1);
var col_14539 = cljs.core.nth.call(null,vec__14376_14538,(0),null);
var infos_14540 = cljs.core.nth.call(null,vec__14376_14538,(1),null);
encode_cols.call(null,infos_14540,source_idx_14509,line_14518,col_14539);


var G__14541 = cljs.core.next.call(null,seq__14363_14532__$1);
var G__14542 = null;
var G__14543 = (0);
var G__14544 = (0);
seq__14363_14520 = G__14541;
chunk__14364_14521 = G__14542;
count__14365_14522 = G__14543;
i__14366_14523 = G__14544;
continue;
}
} else {
}
}
break;
}


var G__14545 = seq__14318_14513;
var G__14546 = chunk__14319_14514;
var G__14547 = count__14320_14515;
var G__14548 = (i__14321_14516 + (1));
seq__14318_14513 = G__14545;
chunk__14319_14514 = G__14546;
count__14320_14515 = G__14547;
i__14321_14516 = G__14548;
continue;
} else {
var temp__5720__auto___14549 = cljs.core.seq.call(null,seq__14318_14513);
if(temp__5720__auto___14549){
var seq__14318_14550__$1 = temp__5720__auto___14549;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14318_14550__$1)){
var c__4550__auto___14551 = cljs.core.chunk_first.call(null,seq__14318_14550__$1);
var G__14552 = cljs.core.chunk_rest.call(null,seq__14318_14550__$1);
var G__14553 = c__4550__auto___14551;
var G__14554 = cljs.core.count.call(null,c__4550__auto___14551);
var G__14555 = (0);
seq__14318_14513 = G__14552;
chunk__14319_14514 = G__14553;
count__14320_14515 = G__14554;
i__14321_14516 = G__14555;
continue;
} else {
var vec__14379_14556 = cljs.core.first.call(null,seq__14318_14550__$1);
var line_14557 = cljs.core.nth.call(null,vec__14379_14556,(0),null);
var cols_14558 = cljs.core.nth.call(null,vec__14379_14556,(1),null);
var seq__14382_14559 = cljs.core.seq.call(null,cols_14558);
var chunk__14383_14560 = null;
var count__14384_14561 = (0);
var i__14385_14562 = (0);
while(true){
if((i__14385_14562 < count__14384_14561)){
var vec__14392_14563 = cljs.core._nth.call(null,chunk__14383_14560,i__14385_14562);
var col_14564 = cljs.core.nth.call(null,vec__14392_14563,(0),null);
var infos_14565 = cljs.core.nth.call(null,vec__14392_14563,(1),null);
encode_cols.call(null,infos_14565,source_idx_14509,line_14557,col_14564);


var G__14566 = seq__14382_14559;
var G__14567 = chunk__14383_14560;
var G__14568 = count__14384_14561;
var G__14569 = (i__14385_14562 + (1));
seq__14382_14559 = G__14566;
chunk__14383_14560 = G__14567;
count__14384_14561 = G__14568;
i__14385_14562 = G__14569;
continue;
} else {
var temp__5720__auto___14570__$1 = cljs.core.seq.call(null,seq__14382_14559);
if(temp__5720__auto___14570__$1){
var seq__14382_14571__$1 = temp__5720__auto___14570__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14382_14571__$1)){
var c__4550__auto___14572 = cljs.core.chunk_first.call(null,seq__14382_14571__$1);
var G__14573 = cljs.core.chunk_rest.call(null,seq__14382_14571__$1);
var G__14574 = c__4550__auto___14572;
var G__14575 = cljs.core.count.call(null,c__4550__auto___14572);
var G__14576 = (0);
seq__14382_14559 = G__14573;
chunk__14383_14560 = G__14574;
count__14384_14561 = G__14575;
i__14385_14562 = G__14576;
continue;
} else {
var vec__14395_14577 = cljs.core.first.call(null,seq__14382_14571__$1);
var col_14578 = cljs.core.nth.call(null,vec__14395_14577,(0),null);
var infos_14579 = cljs.core.nth.call(null,vec__14395_14577,(1),null);
encode_cols.call(null,infos_14579,source_idx_14509,line_14557,col_14578);


var G__14580 = cljs.core.next.call(null,seq__14382_14571__$1);
var G__14581 = null;
var G__14582 = (0);
var G__14583 = (0);
seq__14382_14559 = G__14580;
chunk__14383_14560 = G__14581;
count__14384_14561 = G__14582;
i__14385_14562 = G__14583;
continue;
}
} else {
}
}
break;
}


var G__14584 = cljs.core.next.call(null,seq__14318_14550__$1);
var G__14585 = null;
var G__14586 = (0);
var G__14587 = (0);
seq__14318_14513 = G__14584;
chunk__14319_14514 = G__14585;
count__14320_14515 = G__14586;
i__14321_14516 = G__14587;
continue;
}
} else {
}
}
break;
}


var G__14588 = seq__14136_14504;
var G__14589 = chunk__14137_14505;
var G__14590 = count__14138_14506;
var G__14591 = (i__14139_14507 + (1));
seq__14136_14504 = G__14588;
chunk__14137_14505 = G__14589;
count__14138_14506 = G__14590;
i__14139_14507 = G__14591;
continue;
} else {
var temp__5720__auto___14592 = cljs.core.seq.call(null,seq__14136_14504);
if(temp__5720__auto___14592){
var seq__14136_14593__$1 = temp__5720__auto___14592;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14136_14593__$1)){
var c__4550__auto___14594 = cljs.core.chunk_first.call(null,seq__14136_14593__$1);
var G__14595 = cljs.core.chunk_rest.call(null,seq__14136_14593__$1);
var G__14596 = c__4550__auto___14594;
var G__14597 = cljs.core.count.call(null,c__4550__auto___14594);
var G__14598 = (0);
seq__14136_14504 = G__14595;
chunk__14137_14505 = G__14596;
count__14138_14506 = G__14597;
i__14139_14507 = G__14598;
continue;
} else {
var vec__14398_14599 = cljs.core.first.call(null,seq__14136_14593__$1);
var source_idx_14600 = cljs.core.nth.call(null,vec__14398_14599,(0),null);
var vec__14401_14601 = cljs.core.nth.call(null,vec__14398_14599,(1),null);
var __14602 = cljs.core.nth.call(null,vec__14401_14601,(0),null);
var lines_14603__$1 = cljs.core.nth.call(null,vec__14401_14601,(1),null);
var seq__14404_14604 = cljs.core.seq.call(null,lines_14603__$1);
var chunk__14405_14605 = null;
var count__14406_14606 = (0);
var i__14407_14607 = (0);
while(true){
if((i__14407_14607 < count__14406_14606)){
var vec__14446_14608 = cljs.core._nth.call(null,chunk__14405_14605,i__14407_14607);
var line_14609 = cljs.core.nth.call(null,vec__14446_14608,(0),null);
var cols_14610 = cljs.core.nth.call(null,vec__14446_14608,(1),null);
var seq__14449_14611 = cljs.core.seq.call(null,cols_14610);
var chunk__14450_14612 = null;
var count__14451_14613 = (0);
var i__14452_14614 = (0);
while(true){
if((i__14452_14614 < count__14451_14613)){
var vec__14459_14615 = cljs.core._nth.call(null,chunk__14450_14612,i__14452_14614);
var col_14616 = cljs.core.nth.call(null,vec__14459_14615,(0),null);
var infos_14617 = cljs.core.nth.call(null,vec__14459_14615,(1),null);
encode_cols.call(null,infos_14617,source_idx_14600,line_14609,col_14616);


var G__14618 = seq__14449_14611;
var G__14619 = chunk__14450_14612;
var G__14620 = count__14451_14613;
var G__14621 = (i__14452_14614 + (1));
seq__14449_14611 = G__14618;
chunk__14450_14612 = G__14619;
count__14451_14613 = G__14620;
i__14452_14614 = G__14621;
continue;
} else {
var temp__5720__auto___14622__$1 = cljs.core.seq.call(null,seq__14449_14611);
if(temp__5720__auto___14622__$1){
var seq__14449_14623__$1 = temp__5720__auto___14622__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14449_14623__$1)){
var c__4550__auto___14624 = cljs.core.chunk_first.call(null,seq__14449_14623__$1);
var G__14625 = cljs.core.chunk_rest.call(null,seq__14449_14623__$1);
var G__14626 = c__4550__auto___14624;
var G__14627 = cljs.core.count.call(null,c__4550__auto___14624);
var G__14628 = (0);
seq__14449_14611 = G__14625;
chunk__14450_14612 = G__14626;
count__14451_14613 = G__14627;
i__14452_14614 = G__14628;
continue;
} else {
var vec__14462_14629 = cljs.core.first.call(null,seq__14449_14623__$1);
var col_14630 = cljs.core.nth.call(null,vec__14462_14629,(0),null);
var infos_14631 = cljs.core.nth.call(null,vec__14462_14629,(1),null);
encode_cols.call(null,infos_14631,source_idx_14600,line_14609,col_14630);


var G__14632 = cljs.core.next.call(null,seq__14449_14623__$1);
var G__14633 = null;
var G__14634 = (0);
var G__14635 = (0);
seq__14449_14611 = G__14632;
chunk__14450_14612 = G__14633;
count__14451_14613 = G__14634;
i__14452_14614 = G__14635;
continue;
}
} else {
}
}
break;
}


var G__14636 = seq__14404_14604;
var G__14637 = chunk__14405_14605;
var G__14638 = count__14406_14606;
var G__14639 = (i__14407_14607 + (1));
seq__14404_14604 = G__14636;
chunk__14405_14605 = G__14637;
count__14406_14606 = G__14638;
i__14407_14607 = G__14639;
continue;
} else {
var temp__5720__auto___14640__$1 = cljs.core.seq.call(null,seq__14404_14604);
if(temp__5720__auto___14640__$1){
var seq__14404_14641__$1 = temp__5720__auto___14640__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14404_14641__$1)){
var c__4550__auto___14642 = cljs.core.chunk_first.call(null,seq__14404_14641__$1);
var G__14643 = cljs.core.chunk_rest.call(null,seq__14404_14641__$1);
var G__14644 = c__4550__auto___14642;
var G__14645 = cljs.core.count.call(null,c__4550__auto___14642);
var G__14646 = (0);
seq__14404_14604 = G__14643;
chunk__14405_14605 = G__14644;
count__14406_14606 = G__14645;
i__14407_14607 = G__14646;
continue;
} else {
var vec__14465_14647 = cljs.core.first.call(null,seq__14404_14641__$1);
var line_14648 = cljs.core.nth.call(null,vec__14465_14647,(0),null);
var cols_14649 = cljs.core.nth.call(null,vec__14465_14647,(1),null);
var seq__14468_14650 = cljs.core.seq.call(null,cols_14649);
var chunk__14469_14651 = null;
var count__14470_14652 = (0);
var i__14471_14653 = (0);
while(true){
if((i__14471_14653 < count__14470_14652)){
var vec__14478_14654 = cljs.core._nth.call(null,chunk__14469_14651,i__14471_14653);
var col_14655 = cljs.core.nth.call(null,vec__14478_14654,(0),null);
var infos_14656 = cljs.core.nth.call(null,vec__14478_14654,(1),null);
encode_cols.call(null,infos_14656,source_idx_14600,line_14648,col_14655);


var G__14657 = seq__14468_14650;
var G__14658 = chunk__14469_14651;
var G__14659 = count__14470_14652;
var G__14660 = (i__14471_14653 + (1));
seq__14468_14650 = G__14657;
chunk__14469_14651 = G__14658;
count__14470_14652 = G__14659;
i__14471_14653 = G__14660;
continue;
} else {
var temp__5720__auto___14661__$2 = cljs.core.seq.call(null,seq__14468_14650);
if(temp__5720__auto___14661__$2){
var seq__14468_14662__$1 = temp__5720__auto___14661__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14468_14662__$1)){
var c__4550__auto___14663 = cljs.core.chunk_first.call(null,seq__14468_14662__$1);
var G__14664 = cljs.core.chunk_rest.call(null,seq__14468_14662__$1);
var G__14665 = c__4550__auto___14663;
var G__14666 = cljs.core.count.call(null,c__4550__auto___14663);
var G__14667 = (0);
seq__14468_14650 = G__14664;
chunk__14469_14651 = G__14665;
count__14470_14652 = G__14666;
i__14471_14653 = G__14667;
continue;
} else {
var vec__14481_14668 = cljs.core.first.call(null,seq__14468_14662__$1);
var col_14669 = cljs.core.nth.call(null,vec__14481_14668,(0),null);
var infos_14670 = cljs.core.nth.call(null,vec__14481_14668,(1),null);
encode_cols.call(null,infos_14670,source_idx_14600,line_14648,col_14669);


var G__14671 = cljs.core.next.call(null,seq__14468_14662__$1);
var G__14672 = null;
var G__14673 = (0);
var G__14674 = (0);
seq__14468_14650 = G__14671;
chunk__14469_14651 = G__14672;
count__14470_14652 = G__14673;
i__14471_14653 = G__14674;
continue;
}
} else {
}
}
break;
}


var G__14675 = cljs.core.next.call(null,seq__14404_14641__$1);
var G__14676 = null;
var G__14677 = (0);
var G__14678 = (0);
seq__14404_14604 = G__14675;
chunk__14405_14605 = G__14676;
count__14406_14606 = G__14677;
i__14407_14607 = G__14678;
continue;
}
} else {
}
}
break;
}


var G__14679 = cljs.core.next.call(null,seq__14136_14593__$1);
var G__14680 = null;
var G__14681 = (0);
var G__14682 = (0);
seq__14136_14504 = G__14679;
chunk__14137_14505 = G__14680;
count__14138_14506 = G__14681;
i__14139_14507 = G__14682;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__14484 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__14129_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14129_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__14130_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__14130_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__14131_SHARP_){
return clojure.string.join.call(null,",",p1__14131_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__14485 = G__14484;
goog.object.set(G__14485,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__14485;
} else {
return G__14484;
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
var vec__14683 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__14683,(0),null);
var col_map = cljs.core.nth.call(null,vec__14683,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__14686 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__14686,(0),null);
var infos = cljs.core.nth.call(null,vec__14686,(1),null);
var G__14692 = cljs.core.next.call(null,col_map_seq);
var G__14693 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__14686,col,infos,vec__14683,line,col_map){
return (function (v,p__14689){
var map__14690 = p__14689;
var map__14690__$1 = (((((!((map__14690 == null))))?(((((map__14690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14690):map__14690);
var gline = cljs.core.get.call(null,map__14690__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__14690__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__14686,col,infos,vec__14683,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__14692;
new_cols = G__14693;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__14694 = cljs.core.next.call(null,line_map_seq);
var G__14695 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__14694;
new_lines = G__14695;
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
var seq__14696_14968 = cljs.core.seq.call(null,reverse_map);
var chunk__14697_14969 = null;
var count__14698_14970 = (0);
var i__14699_14971 = (0);
while(true){
if((i__14699_14971 < count__14698_14970)){
var vec__14834_14972 = cljs.core._nth.call(null,chunk__14697_14969,i__14699_14971);
var line_14973 = cljs.core.nth.call(null,vec__14834_14972,(0),null);
var columns_14974 = cljs.core.nth.call(null,vec__14834_14972,(1),null);
var seq__14837_14975 = cljs.core.seq.call(null,columns_14974);
var chunk__14838_14976 = null;
var count__14839_14977 = (0);
var i__14840_14978 = (0);
while(true){
if((i__14840_14978 < count__14839_14977)){
var vec__14871_14979 = cljs.core._nth.call(null,chunk__14838_14976,i__14840_14978);
var column_14980 = cljs.core.nth.call(null,vec__14871_14979,(0),null);
var column_info_14981 = cljs.core.nth.call(null,vec__14871_14979,(1),null);
var seq__14874_14982 = cljs.core.seq.call(null,column_info_14981);
var chunk__14875_14983 = null;
var count__14876_14984 = (0);
var i__14877_14985 = (0);
while(true){
if((i__14877_14985 < count__14876_14984)){
var map__14882_14986 = cljs.core._nth.call(null,chunk__14875_14983,i__14877_14985);
var map__14882_14987__$1 = (((((!((map__14882_14986 == null))))?(((((map__14882_14986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14882_14986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14882_14986):map__14882_14986);
var gline_14988 = cljs.core.get.call(null,map__14882_14987__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14989 = cljs.core.get.call(null,map__14882_14987__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14990 = cljs.core.get.call(null,map__14882_14987__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14988], null),cljs.core.fnil.call(null,((function (seq__14874_14982,chunk__14875_14983,count__14876_14984,i__14877_14985,seq__14837_14975,chunk__14838_14976,count__14839_14977,i__14840_14978,seq__14696_14968,chunk__14697_14969,count__14698_14970,i__14699_14971,map__14882_14986,map__14882_14987__$1,gline_14988,gcol_14989,name_14990,vec__14871_14979,column_14980,column_info_14981,vec__14834_14972,line_14973,columns_14974,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_14989], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14973,new cljs.core.Keyword(null,"col","col",-1959363084),column_14980,new cljs.core.Keyword(null,"name","name",1843675177),name_14990], null));
});})(seq__14874_14982,chunk__14875_14983,count__14876_14984,i__14877_14985,seq__14837_14975,chunk__14838_14976,count__14839_14977,i__14840_14978,seq__14696_14968,chunk__14697_14969,count__14698_14970,i__14699_14971,map__14882_14986,map__14882_14987__$1,gline_14988,gcol_14989,name_14990,vec__14871_14979,column_14980,column_info_14981,vec__14834_14972,line_14973,columns_14974,inverted))
,cljs.core.sorted_map.call(null)));


var G__14991 = seq__14874_14982;
var G__14992 = chunk__14875_14983;
var G__14993 = count__14876_14984;
var G__14994 = (i__14877_14985 + (1));
seq__14874_14982 = G__14991;
chunk__14875_14983 = G__14992;
count__14876_14984 = G__14993;
i__14877_14985 = G__14994;
continue;
} else {
var temp__5720__auto___14995 = cljs.core.seq.call(null,seq__14874_14982);
if(temp__5720__auto___14995){
var seq__14874_14996__$1 = temp__5720__auto___14995;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14874_14996__$1)){
var c__4550__auto___14997 = cljs.core.chunk_first.call(null,seq__14874_14996__$1);
var G__14998 = cljs.core.chunk_rest.call(null,seq__14874_14996__$1);
var G__14999 = c__4550__auto___14997;
var G__15000 = cljs.core.count.call(null,c__4550__auto___14997);
var G__15001 = (0);
seq__14874_14982 = G__14998;
chunk__14875_14983 = G__14999;
count__14876_14984 = G__15000;
i__14877_14985 = G__15001;
continue;
} else {
var map__14884_15002 = cljs.core.first.call(null,seq__14874_14996__$1);
var map__14884_15003__$1 = (((((!((map__14884_15002 == null))))?(((((map__14884_15002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14884_15002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14884_15002):map__14884_15002);
var gline_15004 = cljs.core.get.call(null,map__14884_15003__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15005 = cljs.core.get.call(null,map__14884_15003__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15006 = cljs.core.get.call(null,map__14884_15003__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15004], null),cljs.core.fnil.call(null,((function (seq__14874_14982,chunk__14875_14983,count__14876_14984,i__14877_14985,seq__14837_14975,chunk__14838_14976,count__14839_14977,i__14840_14978,seq__14696_14968,chunk__14697_14969,count__14698_14970,i__14699_14971,map__14884_15002,map__14884_15003__$1,gline_15004,gcol_15005,name_15006,seq__14874_14996__$1,temp__5720__auto___14995,vec__14871_14979,column_14980,column_info_14981,vec__14834_14972,line_14973,columns_14974,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15005], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14973,new cljs.core.Keyword(null,"col","col",-1959363084),column_14980,new cljs.core.Keyword(null,"name","name",1843675177),name_15006], null));
});})(seq__14874_14982,chunk__14875_14983,count__14876_14984,i__14877_14985,seq__14837_14975,chunk__14838_14976,count__14839_14977,i__14840_14978,seq__14696_14968,chunk__14697_14969,count__14698_14970,i__14699_14971,map__14884_15002,map__14884_15003__$1,gline_15004,gcol_15005,name_15006,seq__14874_14996__$1,temp__5720__auto___14995,vec__14871_14979,column_14980,column_info_14981,vec__14834_14972,line_14973,columns_14974,inverted))
,cljs.core.sorted_map.call(null)));


var G__15007 = cljs.core.next.call(null,seq__14874_14996__$1);
var G__15008 = null;
var G__15009 = (0);
var G__15010 = (0);
seq__14874_14982 = G__15007;
chunk__14875_14983 = G__15008;
count__14876_14984 = G__15009;
i__14877_14985 = G__15010;
continue;
}
} else {
}
}
break;
}


var G__15011 = seq__14837_14975;
var G__15012 = chunk__14838_14976;
var G__15013 = count__14839_14977;
var G__15014 = (i__14840_14978 + (1));
seq__14837_14975 = G__15011;
chunk__14838_14976 = G__15012;
count__14839_14977 = G__15013;
i__14840_14978 = G__15014;
continue;
} else {
var temp__5720__auto___15015 = cljs.core.seq.call(null,seq__14837_14975);
if(temp__5720__auto___15015){
var seq__14837_15016__$1 = temp__5720__auto___15015;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14837_15016__$1)){
var c__4550__auto___15017 = cljs.core.chunk_first.call(null,seq__14837_15016__$1);
var G__15018 = cljs.core.chunk_rest.call(null,seq__14837_15016__$1);
var G__15019 = c__4550__auto___15017;
var G__15020 = cljs.core.count.call(null,c__4550__auto___15017);
var G__15021 = (0);
seq__14837_14975 = G__15018;
chunk__14838_14976 = G__15019;
count__14839_14977 = G__15020;
i__14840_14978 = G__15021;
continue;
} else {
var vec__14886_15022 = cljs.core.first.call(null,seq__14837_15016__$1);
var column_15023 = cljs.core.nth.call(null,vec__14886_15022,(0),null);
var column_info_15024 = cljs.core.nth.call(null,vec__14886_15022,(1),null);
var seq__14889_15025 = cljs.core.seq.call(null,column_info_15024);
var chunk__14890_15026 = null;
var count__14891_15027 = (0);
var i__14892_15028 = (0);
while(true){
if((i__14892_15028 < count__14891_15027)){
var map__14897_15029 = cljs.core._nth.call(null,chunk__14890_15026,i__14892_15028);
var map__14897_15030__$1 = (((((!((map__14897_15029 == null))))?(((((map__14897_15029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14897_15029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14897_15029):map__14897_15029);
var gline_15031 = cljs.core.get.call(null,map__14897_15030__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15032 = cljs.core.get.call(null,map__14897_15030__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15033 = cljs.core.get.call(null,map__14897_15030__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15031], null),cljs.core.fnil.call(null,((function (seq__14889_15025,chunk__14890_15026,count__14891_15027,i__14892_15028,seq__14837_14975,chunk__14838_14976,count__14839_14977,i__14840_14978,seq__14696_14968,chunk__14697_14969,count__14698_14970,i__14699_14971,map__14897_15029,map__14897_15030__$1,gline_15031,gcol_15032,name_15033,vec__14886_15022,column_15023,column_info_15024,seq__14837_15016__$1,temp__5720__auto___15015,vec__14834_14972,line_14973,columns_14974,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15032], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14973,new cljs.core.Keyword(null,"col","col",-1959363084),column_15023,new cljs.core.Keyword(null,"name","name",1843675177),name_15033], null));
});})(seq__14889_15025,chunk__14890_15026,count__14891_15027,i__14892_15028,seq__14837_14975,chunk__14838_14976,count__14839_14977,i__14840_14978,seq__14696_14968,chunk__14697_14969,count__14698_14970,i__14699_14971,map__14897_15029,map__14897_15030__$1,gline_15031,gcol_15032,name_15033,vec__14886_15022,column_15023,column_info_15024,seq__14837_15016__$1,temp__5720__auto___15015,vec__14834_14972,line_14973,columns_14974,inverted))
,cljs.core.sorted_map.call(null)));


var G__15034 = seq__14889_15025;
var G__15035 = chunk__14890_15026;
var G__15036 = count__14891_15027;
var G__15037 = (i__14892_15028 + (1));
seq__14889_15025 = G__15034;
chunk__14890_15026 = G__15035;
count__14891_15027 = G__15036;
i__14892_15028 = G__15037;
continue;
} else {
var temp__5720__auto___15038__$1 = cljs.core.seq.call(null,seq__14889_15025);
if(temp__5720__auto___15038__$1){
var seq__14889_15039__$1 = temp__5720__auto___15038__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14889_15039__$1)){
var c__4550__auto___15040 = cljs.core.chunk_first.call(null,seq__14889_15039__$1);
var G__15041 = cljs.core.chunk_rest.call(null,seq__14889_15039__$1);
var G__15042 = c__4550__auto___15040;
var G__15043 = cljs.core.count.call(null,c__4550__auto___15040);
var G__15044 = (0);
seq__14889_15025 = G__15041;
chunk__14890_15026 = G__15042;
count__14891_15027 = G__15043;
i__14892_15028 = G__15044;
continue;
} else {
var map__14899_15045 = cljs.core.first.call(null,seq__14889_15039__$1);
var map__14899_15046__$1 = (((((!((map__14899_15045 == null))))?(((((map__14899_15045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14899_15045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14899_15045):map__14899_15045);
var gline_15047 = cljs.core.get.call(null,map__14899_15046__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15048 = cljs.core.get.call(null,map__14899_15046__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15049 = cljs.core.get.call(null,map__14899_15046__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15047], null),cljs.core.fnil.call(null,((function (seq__14889_15025,chunk__14890_15026,count__14891_15027,i__14892_15028,seq__14837_14975,chunk__14838_14976,count__14839_14977,i__14840_14978,seq__14696_14968,chunk__14697_14969,count__14698_14970,i__14699_14971,map__14899_15045,map__14899_15046__$1,gline_15047,gcol_15048,name_15049,seq__14889_15039__$1,temp__5720__auto___15038__$1,vec__14886_15022,column_15023,column_info_15024,seq__14837_15016__$1,temp__5720__auto___15015,vec__14834_14972,line_14973,columns_14974,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15048], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14973,new cljs.core.Keyword(null,"col","col",-1959363084),column_15023,new cljs.core.Keyword(null,"name","name",1843675177),name_15049], null));
});})(seq__14889_15025,chunk__14890_15026,count__14891_15027,i__14892_15028,seq__14837_14975,chunk__14838_14976,count__14839_14977,i__14840_14978,seq__14696_14968,chunk__14697_14969,count__14698_14970,i__14699_14971,map__14899_15045,map__14899_15046__$1,gline_15047,gcol_15048,name_15049,seq__14889_15039__$1,temp__5720__auto___15038__$1,vec__14886_15022,column_15023,column_info_15024,seq__14837_15016__$1,temp__5720__auto___15015,vec__14834_14972,line_14973,columns_14974,inverted))
,cljs.core.sorted_map.call(null)));


var G__15050 = cljs.core.next.call(null,seq__14889_15039__$1);
var G__15051 = null;
var G__15052 = (0);
var G__15053 = (0);
seq__14889_15025 = G__15050;
chunk__14890_15026 = G__15051;
count__14891_15027 = G__15052;
i__14892_15028 = G__15053;
continue;
}
} else {
}
}
break;
}


var G__15054 = cljs.core.next.call(null,seq__14837_15016__$1);
var G__15055 = null;
var G__15056 = (0);
var G__15057 = (0);
seq__14837_14975 = G__15054;
chunk__14838_14976 = G__15055;
count__14839_14977 = G__15056;
i__14840_14978 = G__15057;
continue;
}
} else {
}
}
break;
}


var G__15058 = seq__14696_14968;
var G__15059 = chunk__14697_14969;
var G__15060 = count__14698_14970;
var G__15061 = (i__14699_14971 + (1));
seq__14696_14968 = G__15058;
chunk__14697_14969 = G__15059;
count__14698_14970 = G__15060;
i__14699_14971 = G__15061;
continue;
} else {
var temp__5720__auto___15062 = cljs.core.seq.call(null,seq__14696_14968);
if(temp__5720__auto___15062){
var seq__14696_15063__$1 = temp__5720__auto___15062;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14696_15063__$1)){
var c__4550__auto___15064 = cljs.core.chunk_first.call(null,seq__14696_15063__$1);
var G__15065 = cljs.core.chunk_rest.call(null,seq__14696_15063__$1);
var G__15066 = c__4550__auto___15064;
var G__15067 = cljs.core.count.call(null,c__4550__auto___15064);
var G__15068 = (0);
seq__14696_14968 = G__15065;
chunk__14697_14969 = G__15066;
count__14698_14970 = G__15067;
i__14699_14971 = G__15068;
continue;
} else {
var vec__14901_15069 = cljs.core.first.call(null,seq__14696_15063__$1);
var line_15070 = cljs.core.nth.call(null,vec__14901_15069,(0),null);
var columns_15071 = cljs.core.nth.call(null,vec__14901_15069,(1),null);
var seq__14904_15072 = cljs.core.seq.call(null,columns_15071);
var chunk__14905_15073 = null;
var count__14906_15074 = (0);
var i__14907_15075 = (0);
while(true){
if((i__14907_15075 < count__14906_15074)){
var vec__14938_15076 = cljs.core._nth.call(null,chunk__14905_15073,i__14907_15075);
var column_15077 = cljs.core.nth.call(null,vec__14938_15076,(0),null);
var column_info_15078 = cljs.core.nth.call(null,vec__14938_15076,(1),null);
var seq__14941_15079 = cljs.core.seq.call(null,column_info_15078);
var chunk__14942_15080 = null;
var count__14943_15081 = (0);
var i__14944_15082 = (0);
while(true){
if((i__14944_15082 < count__14943_15081)){
var map__14949_15083 = cljs.core._nth.call(null,chunk__14942_15080,i__14944_15082);
var map__14949_15084__$1 = (((((!((map__14949_15083 == null))))?(((((map__14949_15083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14949_15083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14949_15083):map__14949_15083);
var gline_15085 = cljs.core.get.call(null,map__14949_15084__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15086 = cljs.core.get.call(null,map__14949_15084__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15087 = cljs.core.get.call(null,map__14949_15084__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15085], null),cljs.core.fnil.call(null,((function (seq__14941_15079,chunk__14942_15080,count__14943_15081,i__14944_15082,seq__14904_15072,chunk__14905_15073,count__14906_15074,i__14907_15075,seq__14696_14968,chunk__14697_14969,count__14698_14970,i__14699_14971,map__14949_15083,map__14949_15084__$1,gline_15085,gcol_15086,name_15087,vec__14938_15076,column_15077,column_info_15078,vec__14901_15069,line_15070,columns_15071,seq__14696_15063__$1,temp__5720__auto___15062,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15086], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15070,new cljs.core.Keyword(null,"col","col",-1959363084),column_15077,new cljs.core.Keyword(null,"name","name",1843675177),name_15087], null));
});})(seq__14941_15079,chunk__14942_15080,count__14943_15081,i__14944_15082,seq__14904_15072,chunk__14905_15073,count__14906_15074,i__14907_15075,seq__14696_14968,chunk__14697_14969,count__14698_14970,i__14699_14971,map__14949_15083,map__14949_15084__$1,gline_15085,gcol_15086,name_15087,vec__14938_15076,column_15077,column_info_15078,vec__14901_15069,line_15070,columns_15071,seq__14696_15063__$1,temp__5720__auto___15062,inverted))
,cljs.core.sorted_map.call(null)));


var G__15088 = seq__14941_15079;
var G__15089 = chunk__14942_15080;
var G__15090 = count__14943_15081;
var G__15091 = (i__14944_15082 + (1));
seq__14941_15079 = G__15088;
chunk__14942_15080 = G__15089;
count__14943_15081 = G__15090;
i__14944_15082 = G__15091;
continue;
} else {
var temp__5720__auto___15092__$1 = cljs.core.seq.call(null,seq__14941_15079);
if(temp__5720__auto___15092__$1){
var seq__14941_15093__$1 = temp__5720__auto___15092__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14941_15093__$1)){
var c__4550__auto___15094 = cljs.core.chunk_first.call(null,seq__14941_15093__$1);
var G__15095 = cljs.core.chunk_rest.call(null,seq__14941_15093__$1);
var G__15096 = c__4550__auto___15094;
var G__15097 = cljs.core.count.call(null,c__4550__auto___15094);
var G__15098 = (0);
seq__14941_15079 = G__15095;
chunk__14942_15080 = G__15096;
count__14943_15081 = G__15097;
i__14944_15082 = G__15098;
continue;
} else {
var map__14951_15099 = cljs.core.first.call(null,seq__14941_15093__$1);
var map__14951_15100__$1 = (((((!((map__14951_15099 == null))))?(((((map__14951_15099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14951_15099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14951_15099):map__14951_15099);
var gline_15101 = cljs.core.get.call(null,map__14951_15100__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15102 = cljs.core.get.call(null,map__14951_15100__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15103 = cljs.core.get.call(null,map__14951_15100__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15101], null),cljs.core.fnil.call(null,((function (seq__14941_15079,chunk__14942_15080,count__14943_15081,i__14944_15082,seq__14904_15072,chunk__14905_15073,count__14906_15074,i__14907_15075,seq__14696_14968,chunk__14697_14969,count__14698_14970,i__14699_14971,map__14951_15099,map__14951_15100__$1,gline_15101,gcol_15102,name_15103,seq__14941_15093__$1,temp__5720__auto___15092__$1,vec__14938_15076,column_15077,column_info_15078,vec__14901_15069,line_15070,columns_15071,seq__14696_15063__$1,temp__5720__auto___15062,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15102], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15070,new cljs.core.Keyword(null,"col","col",-1959363084),column_15077,new cljs.core.Keyword(null,"name","name",1843675177),name_15103], null));
});})(seq__14941_15079,chunk__14942_15080,count__14943_15081,i__14944_15082,seq__14904_15072,chunk__14905_15073,count__14906_15074,i__14907_15075,seq__14696_14968,chunk__14697_14969,count__14698_14970,i__14699_14971,map__14951_15099,map__14951_15100__$1,gline_15101,gcol_15102,name_15103,seq__14941_15093__$1,temp__5720__auto___15092__$1,vec__14938_15076,column_15077,column_info_15078,vec__14901_15069,line_15070,columns_15071,seq__14696_15063__$1,temp__5720__auto___15062,inverted))
,cljs.core.sorted_map.call(null)));


var G__15104 = cljs.core.next.call(null,seq__14941_15093__$1);
var G__15105 = null;
var G__15106 = (0);
var G__15107 = (0);
seq__14941_15079 = G__15104;
chunk__14942_15080 = G__15105;
count__14943_15081 = G__15106;
i__14944_15082 = G__15107;
continue;
}
} else {
}
}
break;
}


var G__15108 = seq__14904_15072;
var G__15109 = chunk__14905_15073;
var G__15110 = count__14906_15074;
var G__15111 = (i__14907_15075 + (1));
seq__14904_15072 = G__15108;
chunk__14905_15073 = G__15109;
count__14906_15074 = G__15110;
i__14907_15075 = G__15111;
continue;
} else {
var temp__5720__auto___15112__$1 = cljs.core.seq.call(null,seq__14904_15072);
if(temp__5720__auto___15112__$1){
var seq__14904_15113__$1 = temp__5720__auto___15112__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14904_15113__$1)){
var c__4550__auto___15114 = cljs.core.chunk_first.call(null,seq__14904_15113__$1);
var G__15115 = cljs.core.chunk_rest.call(null,seq__14904_15113__$1);
var G__15116 = c__4550__auto___15114;
var G__15117 = cljs.core.count.call(null,c__4550__auto___15114);
var G__15118 = (0);
seq__14904_15072 = G__15115;
chunk__14905_15073 = G__15116;
count__14906_15074 = G__15117;
i__14907_15075 = G__15118;
continue;
} else {
var vec__14953_15119 = cljs.core.first.call(null,seq__14904_15113__$1);
var column_15120 = cljs.core.nth.call(null,vec__14953_15119,(0),null);
var column_info_15121 = cljs.core.nth.call(null,vec__14953_15119,(1),null);
var seq__14956_15122 = cljs.core.seq.call(null,column_info_15121);
var chunk__14957_15123 = null;
var count__14958_15124 = (0);
var i__14959_15125 = (0);
while(true){
if((i__14959_15125 < count__14958_15124)){
var map__14964_15126 = cljs.core._nth.call(null,chunk__14957_15123,i__14959_15125);
var map__14964_15127__$1 = (((((!((map__14964_15126 == null))))?(((((map__14964_15126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14964_15126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14964_15126):map__14964_15126);
var gline_15128 = cljs.core.get.call(null,map__14964_15127__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15129 = cljs.core.get.call(null,map__14964_15127__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15130 = cljs.core.get.call(null,map__14964_15127__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15128], null),cljs.core.fnil.call(null,((function (seq__14956_15122,chunk__14957_15123,count__14958_15124,i__14959_15125,seq__14904_15072,chunk__14905_15073,count__14906_15074,i__14907_15075,seq__14696_14968,chunk__14697_14969,count__14698_14970,i__14699_14971,map__14964_15126,map__14964_15127__$1,gline_15128,gcol_15129,name_15130,vec__14953_15119,column_15120,column_info_15121,seq__14904_15113__$1,temp__5720__auto___15112__$1,vec__14901_15069,line_15070,columns_15071,seq__14696_15063__$1,temp__5720__auto___15062,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15129], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15070,new cljs.core.Keyword(null,"col","col",-1959363084),column_15120,new cljs.core.Keyword(null,"name","name",1843675177),name_15130], null));
});})(seq__14956_15122,chunk__14957_15123,count__14958_15124,i__14959_15125,seq__14904_15072,chunk__14905_15073,count__14906_15074,i__14907_15075,seq__14696_14968,chunk__14697_14969,count__14698_14970,i__14699_14971,map__14964_15126,map__14964_15127__$1,gline_15128,gcol_15129,name_15130,vec__14953_15119,column_15120,column_info_15121,seq__14904_15113__$1,temp__5720__auto___15112__$1,vec__14901_15069,line_15070,columns_15071,seq__14696_15063__$1,temp__5720__auto___15062,inverted))
,cljs.core.sorted_map.call(null)));


var G__15131 = seq__14956_15122;
var G__15132 = chunk__14957_15123;
var G__15133 = count__14958_15124;
var G__15134 = (i__14959_15125 + (1));
seq__14956_15122 = G__15131;
chunk__14957_15123 = G__15132;
count__14958_15124 = G__15133;
i__14959_15125 = G__15134;
continue;
} else {
var temp__5720__auto___15135__$2 = cljs.core.seq.call(null,seq__14956_15122);
if(temp__5720__auto___15135__$2){
var seq__14956_15136__$1 = temp__5720__auto___15135__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14956_15136__$1)){
var c__4550__auto___15137 = cljs.core.chunk_first.call(null,seq__14956_15136__$1);
var G__15138 = cljs.core.chunk_rest.call(null,seq__14956_15136__$1);
var G__15139 = c__4550__auto___15137;
var G__15140 = cljs.core.count.call(null,c__4550__auto___15137);
var G__15141 = (0);
seq__14956_15122 = G__15138;
chunk__14957_15123 = G__15139;
count__14958_15124 = G__15140;
i__14959_15125 = G__15141;
continue;
} else {
var map__14966_15142 = cljs.core.first.call(null,seq__14956_15136__$1);
var map__14966_15143__$1 = (((((!((map__14966_15142 == null))))?(((((map__14966_15142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14966_15142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14966_15142):map__14966_15142);
var gline_15144 = cljs.core.get.call(null,map__14966_15143__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15145 = cljs.core.get.call(null,map__14966_15143__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15146 = cljs.core.get.call(null,map__14966_15143__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15144], null),cljs.core.fnil.call(null,((function (seq__14956_15122,chunk__14957_15123,count__14958_15124,i__14959_15125,seq__14904_15072,chunk__14905_15073,count__14906_15074,i__14907_15075,seq__14696_14968,chunk__14697_14969,count__14698_14970,i__14699_14971,map__14966_15142,map__14966_15143__$1,gline_15144,gcol_15145,name_15146,seq__14956_15136__$1,temp__5720__auto___15135__$2,vec__14953_15119,column_15120,column_info_15121,seq__14904_15113__$1,temp__5720__auto___15112__$1,vec__14901_15069,line_15070,columns_15071,seq__14696_15063__$1,temp__5720__auto___15062,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15145], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15070,new cljs.core.Keyword(null,"col","col",-1959363084),column_15120,new cljs.core.Keyword(null,"name","name",1843675177),name_15146], null));
});})(seq__14956_15122,chunk__14957_15123,count__14958_15124,i__14959_15125,seq__14904_15072,chunk__14905_15073,count__14906_15074,i__14907_15075,seq__14696_14968,chunk__14697_14969,count__14698_14970,i__14699_14971,map__14966_15142,map__14966_15143__$1,gline_15144,gcol_15145,name_15146,seq__14956_15136__$1,temp__5720__auto___15135__$2,vec__14953_15119,column_15120,column_info_15121,seq__14904_15113__$1,temp__5720__auto___15112__$1,vec__14901_15069,line_15070,columns_15071,seq__14696_15063__$1,temp__5720__auto___15062,inverted))
,cljs.core.sorted_map.call(null)));


var G__15147 = cljs.core.next.call(null,seq__14956_15136__$1);
var G__15148 = null;
var G__15149 = (0);
var G__15150 = (0);
seq__14956_15122 = G__15147;
chunk__14957_15123 = G__15148;
count__14958_15124 = G__15149;
i__14959_15125 = G__15150;
continue;
}
} else {
}
}
break;
}


var G__15151 = cljs.core.next.call(null,seq__14904_15113__$1);
var G__15152 = null;
var G__15153 = (0);
var G__15154 = (0);
seq__14904_15072 = G__15151;
chunk__14905_15073 = G__15152;
count__14906_15074 = G__15153;
i__14907_15075 = G__15154;
continue;
}
} else {
}
}
break;
}


var G__15155 = cljs.core.next.call(null,seq__14696_15063__$1);
var G__15156 = null;
var G__15157 = (0);
var G__15158 = (0);
seq__14696_14968 = G__15155;
chunk__14697_14969 = G__15156;
count__14698_14970 = G__15157;
i__14699_14971 = G__15158;
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
