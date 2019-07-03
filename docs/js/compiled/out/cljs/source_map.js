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
return cljs.core.reduce.call(null,(function (m,p__10251){
var vec__10252 = p__10251;
var i = cljs.core.nth.call(null,vec__10252,(0),null);
var v = cljs.core.nth.call(null,vec__10252,(1),null);
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
var vec__10255 = seg;
var gcol = cljs.core.nth.call(null,vec__10255,(0),null);
var source = cljs.core.nth.call(null,vec__10255,(1),null);
var line = cljs.core.nth.call(null,vec__10255,(2),null);
var col = cljs.core.nth.call(null,vec__10255,(3),null);
var name = cljs.core.nth.call(null,vec__10255,(4),null);
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
var vec__10258 = seg;
var gcol = cljs.core.nth.call(null,vec__10258,(0),null);
var source = cljs.core.nth.call(null,vec__10258,(1),null);
var line = cljs.core.nth.call(null,vec__10258,(2),null);
var col = cljs.core.nth.call(null,vec__10258,(3),null);
var name = cljs.core.nth.call(null,vec__10258,(4),null);
var vec__10261 = relseg;
var rgcol = cljs.core.nth.call(null,vec__10261,(0),null);
var rsource = cljs.core.nth.call(null,vec__10261,(1),null);
var rline = cljs.core.nth.call(null,vec__10261,(2),null);
var rcol = cljs.core.nth.call(null,vec__10261,(3),null);
var rname = cljs.core.nth.call(null,vec__10261,(4),null);
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
var map__10264 = segmap;
var map__10264__$1 = (((((!((map__10264 == null))))?(((((map__10264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10264):map__10264);
var gcol = cljs.core.get.call(null,map__10264__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__10264__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__10264__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__10264__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__10264__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__10264,map__10264__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__10264,map__10264__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__10264,map__10264__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__10264,map__10264__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__10264,map__10264__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__10264,map__10264__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__10267 = arguments.length;
switch (G__10267) {
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
var vec__10271 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__10275 = cljs.core.next.call(null,segs__$1);
var G__10276 = nrelseg;
var G__10277 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__10275;
relseg__$1 = G__10276;
result__$1 = G__10277;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__10271,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__10271,(1),null);
var G__10278 = (gline + (1));
var G__10279 = cljs.core.next.call(null,lines__$1);
var G__10280 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__10281 = result__$1;
gline = G__10278;
lines__$1 = G__10279;
relseg = G__10280;
result = G__10281;
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
var map__10283 = segmap;
var map__10283__$1 = (((((!((map__10283 == null))))?(((((map__10283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10283):map__10283);
var gcol = cljs.core.get.call(null,map__10283__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__10283__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__10283__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__10283__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__10283__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__10283,map__10283__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__10283,map__10283__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__10282_SHARP_){
return cljs.core.conj.call(null,p1__10282_SHARP_,d__$1);
});})(map__10283,map__10283__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__10283,map__10283__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__10286 = arguments.length;
switch (G__10286) {
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
var vec__10290 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__10294 = cljs.core.next.call(null,segs__$1);
var G__10295 = nrelseg;
var G__10296 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__10294;
relseg__$1 = G__10295;
result__$1 = G__10296;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__10290,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__10290,(1),null);
var G__10297 = (gline + (1));
var G__10298 = cljs.core.next.call(null,lines__$1);
var G__10299 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__10300 = result__$1;
gline = G__10297;
lines__$1 = G__10298;
relseg = G__10299;
result = G__10300;
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
return (function (p__10301){
var vec__10302 = p__10301;
var _ = cljs.core.nth.call(null,vec__10302,(0),null);
var source = cljs.core.nth.call(null,vec__10302,(1),null);
var line = cljs.core.nth.call(null,vec__10302,(2),null);
var col = cljs.core.nth.call(null,vec__10302,(3),null);
var name = cljs.core.nth.call(null,vec__10302,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__10305){
var vec__10306 = p__10305;
var gcol = cljs.core.nth.call(null,vec__10306,(0),null);
var sidx = cljs.core.nth.call(null,vec__10306,(1),null);
var line = cljs.core.nth.call(null,vec__10306,(2),null);
var col = cljs.core.nth.call(null,vec__10306,(3),null);
var name = cljs.core.nth.call(null,vec__10306,(4),null);
var seg = vec__10306;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__10306,gcol,sidx,line,col,name,seg,relseg){
return (function (p__10309){
var vec__10310 = p__10309;
var _ = cljs.core.nth.call(null,vec__10310,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__10310,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__10310,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__10310,(3),null);
var lname = cljs.core.nth.call(null,vec__10310,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__10306,gcol,sidx,line,col,name,seg,relseg))
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
var seq__10316 = cljs.core.seq.call(null,infos);
var chunk__10317 = null;
var count__10318 = (0);
var i__10319 = (0);
while(true){
if((i__10319 < count__10318)){
var info = cljs.core._nth.call(null,chunk__10317,i__10319);
var segv_10670 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_10671 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_10672 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_10671 > (lc_10672 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__10316,chunk__10317,count__10318,i__10319,segv_10670,gline_10671,lc_10672,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_10671 - (lc_10672 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_10670], null));
});})(seq__10316,chunk__10317,count__10318,i__10319,segv_10670,gline_10671,lc_10672,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__10316,chunk__10317,count__10318,i__10319,segv_10670,gline_10671,lc_10672,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10671], null),cljs.core.conj,segv_10670);
});})(seq__10316,chunk__10317,count__10318,i__10319,segv_10670,gline_10671,lc_10672,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__10673 = seq__10316;
var G__10674 = chunk__10317;
var G__10675 = count__10318;
var G__10676 = (i__10319 + (1));
seq__10316 = G__10673;
chunk__10317 = G__10674;
count__10318 = G__10675;
i__10319 = G__10676;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__10316);
if(temp__5720__auto__){
var seq__10316__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10316__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__10316__$1);
var G__10677 = cljs.core.chunk_rest.call(null,seq__10316__$1);
var G__10678 = c__4550__auto__;
var G__10679 = cljs.core.count.call(null,c__4550__auto__);
var G__10680 = (0);
seq__10316 = G__10677;
chunk__10317 = G__10678;
count__10318 = G__10679;
i__10319 = G__10680;
continue;
} else {
var info = cljs.core.first.call(null,seq__10316__$1);
var segv_10681 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_10682 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_10683 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_10682 > (lc_10683 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__10316,chunk__10317,count__10318,i__10319,segv_10681,gline_10682,lc_10683,info,seq__10316__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_10682 - (lc_10683 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_10681], null));
});})(seq__10316,chunk__10317,count__10318,i__10319,segv_10681,gline_10682,lc_10683,info,seq__10316__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__10316,chunk__10317,count__10318,i__10319,segv_10681,gline_10682,lc_10683,info,seq__10316__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10682], null),cljs.core.conj,segv_10681);
});})(seq__10316,chunk__10317,count__10318,i__10319,segv_10681,gline_10682,lc_10683,info,seq__10316__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__10684 = cljs.core.next.call(null,seq__10316__$1);
var G__10685 = null;
var G__10686 = (0);
var G__10687 = (0);
seq__10316 = G__10684;
chunk__10317 = G__10685;
count__10318 = G__10686;
i__10319 = G__10687;
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
var seq__10320_10688 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__10321_10689 = null;
var count__10322_10690 = (0);
var i__10323_10691 = (0);
while(true){
if((i__10323_10691 < count__10322_10690)){
var vec__10496_10692 = cljs.core._nth.call(null,chunk__10321_10689,i__10323_10691);
var source_idx_10693 = cljs.core.nth.call(null,vec__10496_10692,(0),null);
var vec__10499_10694 = cljs.core.nth.call(null,vec__10496_10692,(1),null);
var __10695 = cljs.core.nth.call(null,vec__10499_10694,(0),null);
var lines_10696__$1 = cljs.core.nth.call(null,vec__10499_10694,(1),null);
var seq__10502_10697 = cljs.core.seq.call(null,lines_10696__$1);
var chunk__10503_10698 = null;
var count__10504_10699 = (0);
var i__10505_10700 = (0);
while(true){
if((i__10505_10700 < count__10504_10699)){
var vec__10544_10701 = cljs.core._nth.call(null,chunk__10503_10698,i__10505_10700);
var line_10702 = cljs.core.nth.call(null,vec__10544_10701,(0),null);
var cols_10703 = cljs.core.nth.call(null,vec__10544_10701,(1),null);
var seq__10547_10704 = cljs.core.seq.call(null,cols_10703);
var chunk__10548_10705 = null;
var count__10549_10706 = (0);
var i__10550_10707 = (0);
while(true){
if((i__10550_10707 < count__10549_10706)){
var vec__10557_10708 = cljs.core._nth.call(null,chunk__10548_10705,i__10550_10707);
var col_10709 = cljs.core.nth.call(null,vec__10557_10708,(0),null);
var infos_10710 = cljs.core.nth.call(null,vec__10557_10708,(1),null);
encode_cols.call(null,infos_10710,source_idx_10693,line_10702,col_10709);


var G__10711 = seq__10547_10704;
var G__10712 = chunk__10548_10705;
var G__10713 = count__10549_10706;
var G__10714 = (i__10550_10707 + (1));
seq__10547_10704 = G__10711;
chunk__10548_10705 = G__10712;
count__10549_10706 = G__10713;
i__10550_10707 = G__10714;
continue;
} else {
var temp__5720__auto___10715 = cljs.core.seq.call(null,seq__10547_10704);
if(temp__5720__auto___10715){
var seq__10547_10716__$1 = temp__5720__auto___10715;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10547_10716__$1)){
var c__4550__auto___10717 = cljs.core.chunk_first.call(null,seq__10547_10716__$1);
var G__10718 = cljs.core.chunk_rest.call(null,seq__10547_10716__$1);
var G__10719 = c__4550__auto___10717;
var G__10720 = cljs.core.count.call(null,c__4550__auto___10717);
var G__10721 = (0);
seq__10547_10704 = G__10718;
chunk__10548_10705 = G__10719;
count__10549_10706 = G__10720;
i__10550_10707 = G__10721;
continue;
} else {
var vec__10560_10722 = cljs.core.first.call(null,seq__10547_10716__$1);
var col_10723 = cljs.core.nth.call(null,vec__10560_10722,(0),null);
var infos_10724 = cljs.core.nth.call(null,vec__10560_10722,(1),null);
encode_cols.call(null,infos_10724,source_idx_10693,line_10702,col_10723);


var G__10725 = cljs.core.next.call(null,seq__10547_10716__$1);
var G__10726 = null;
var G__10727 = (0);
var G__10728 = (0);
seq__10547_10704 = G__10725;
chunk__10548_10705 = G__10726;
count__10549_10706 = G__10727;
i__10550_10707 = G__10728;
continue;
}
} else {
}
}
break;
}


var G__10729 = seq__10502_10697;
var G__10730 = chunk__10503_10698;
var G__10731 = count__10504_10699;
var G__10732 = (i__10505_10700 + (1));
seq__10502_10697 = G__10729;
chunk__10503_10698 = G__10730;
count__10504_10699 = G__10731;
i__10505_10700 = G__10732;
continue;
} else {
var temp__5720__auto___10733 = cljs.core.seq.call(null,seq__10502_10697);
if(temp__5720__auto___10733){
var seq__10502_10734__$1 = temp__5720__auto___10733;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10502_10734__$1)){
var c__4550__auto___10735 = cljs.core.chunk_first.call(null,seq__10502_10734__$1);
var G__10736 = cljs.core.chunk_rest.call(null,seq__10502_10734__$1);
var G__10737 = c__4550__auto___10735;
var G__10738 = cljs.core.count.call(null,c__4550__auto___10735);
var G__10739 = (0);
seq__10502_10697 = G__10736;
chunk__10503_10698 = G__10737;
count__10504_10699 = G__10738;
i__10505_10700 = G__10739;
continue;
} else {
var vec__10563_10740 = cljs.core.first.call(null,seq__10502_10734__$1);
var line_10741 = cljs.core.nth.call(null,vec__10563_10740,(0),null);
var cols_10742 = cljs.core.nth.call(null,vec__10563_10740,(1),null);
var seq__10566_10743 = cljs.core.seq.call(null,cols_10742);
var chunk__10567_10744 = null;
var count__10568_10745 = (0);
var i__10569_10746 = (0);
while(true){
if((i__10569_10746 < count__10568_10745)){
var vec__10576_10747 = cljs.core._nth.call(null,chunk__10567_10744,i__10569_10746);
var col_10748 = cljs.core.nth.call(null,vec__10576_10747,(0),null);
var infos_10749 = cljs.core.nth.call(null,vec__10576_10747,(1),null);
encode_cols.call(null,infos_10749,source_idx_10693,line_10741,col_10748);


var G__10750 = seq__10566_10743;
var G__10751 = chunk__10567_10744;
var G__10752 = count__10568_10745;
var G__10753 = (i__10569_10746 + (1));
seq__10566_10743 = G__10750;
chunk__10567_10744 = G__10751;
count__10568_10745 = G__10752;
i__10569_10746 = G__10753;
continue;
} else {
var temp__5720__auto___10754__$1 = cljs.core.seq.call(null,seq__10566_10743);
if(temp__5720__auto___10754__$1){
var seq__10566_10755__$1 = temp__5720__auto___10754__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10566_10755__$1)){
var c__4550__auto___10756 = cljs.core.chunk_first.call(null,seq__10566_10755__$1);
var G__10757 = cljs.core.chunk_rest.call(null,seq__10566_10755__$1);
var G__10758 = c__4550__auto___10756;
var G__10759 = cljs.core.count.call(null,c__4550__auto___10756);
var G__10760 = (0);
seq__10566_10743 = G__10757;
chunk__10567_10744 = G__10758;
count__10568_10745 = G__10759;
i__10569_10746 = G__10760;
continue;
} else {
var vec__10579_10761 = cljs.core.first.call(null,seq__10566_10755__$1);
var col_10762 = cljs.core.nth.call(null,vec__10579_10761,(0),null);
var infos_10763 = cljs.core.nth.call(null,vec__10579_10761,(1),null);
encode_cols.call(null,infos_10763,source_idx_10693,line_10741,col_10762);


var G__10764 = cljs.core.next.call(null,seq__10566_10755__$1);
var G__10765 = null;
var G__10766 = (0);
var G__10767 = (0);
seq__10566_10743 = G__10764;
chunk__10567_10744 = G__10765;
count__10568_10745 = G__10766;
i__10569_10746 = G__10767;
continue;
}
} else {
}
}
break;
}


var G__10768 = cljs.core.next.call(null,seq__10502_10734__$1);
var G__10769 = null;
var G__10770 = (0);
var G__10771 = (0);
seq__10502_10697 = G__10768;
chunk__10503_10698 = G__10769;
count__10504_10699 = G__10770;
i__10505_10700 = G__10771;
continue;
}
} else {
}
}
break;
}


var G__10772 = seq__10320_10688;
var G__10773 = chunk__10321_10689;
var G__10774 = count__10322_10690;
var G__10775 = (i__10323_10691 + (1));
seq__10320_10688 = G__10772;
chunk__10321_10689 = G__10773;
count__10322_10690 = G__10774;
i__10323_10691 = G__10775;
continue;
} else {
var temp__5720__auto___10776 = cljs.core.seq.call(null,seq__10320_10688);
if(temp__5720__auto___10776){
var seq__10320_10777__$1 = temp__5720__auto___10776;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10320_10777__$1)){
var c__4550__auto___10778 = cljs.core.chunk_first.call(null,seq__10320_10777__$1);
var G__10779 = cljs.core.chunk_rest.call(null,seq__10320_10777__$1);
var G__10780 = c__4550__auto___10778;
var G__10781 = cljs.core.count.call(null,c__4550__auto___10778);
var G__10782 = (0);
seq__10320_10688 = G__10779;
chunk__10321_10689 = G__10780;
count__10322_10690 = G__10781;
i__10323_10691 = G__10782;
continue;
} else {
var vec__10582_10783 = cljs.core.first.call(null,seq__10320_10777__$1);
var source_idx_10784 = cljs.core.nth.call(null,vec__10582_10783,(0),null);
var vec__10585_10785 = cljs.core.nth.call(null,vec__10582_10783,(1),null);
var __10786 = cljs.core.nth.call(null,vec__10585_10785,(0),null);
var lines_10787__$1 = cljs.core.nth.call(null,vec__10585_10785,(1),null);
var seq__10588_10788 = cljs.core.seq.call(null,lines_10787__$1);
var chunk__10589_10789 = null;
var count__10590_10790 = (0);
var i__10591_10791 = (0);
while(true){
if((i__10591_10791 < count__10590_10790)){
var vec__10630_10792 = cljs.core._nth.call(null,chunk__10589_10789,i__10591_10791);
var line_10793 = cljs.core.nth.call(null,vec__10630_10792,(0),null);
var cols_10794 = cljs.core.nth.call(null,vec__10630_10792,(1),null);
var seq__10633_10795 = cljs.core.seq.call(null,cols_10794);
var chunk__10634_10796 = null;
var count__10635_10797 = (0);
var i__10636_10798 = (0);
while(true){
if((i__10636_10798 < count__10635_10797)){
var vec__10643_10799 = cljs.core._nth.call(null,chunk__10634_10796,i__10636_10798);
var col_10800 = cljs.core.nth.call(null,vec__10643_10799,(0),null);
var infos_10801 = cljs.core.nth.call(null,vec__10643_10799,(1),null);
encode_cols.call(null,infos_10801,source_idx_10784,line_10793,col_10800);


var G__10802 = seq__10633_10795;
var G__10803 = chunk__10634_10796;
var G__10804 = count__10635_10797;
var G__10805 = (i__10636_10798 + (1));
seq__10633_10795 = G__10802;
chunk__10634_10796 = G__10803;
count__10635_10797 = G__10804;
i__10636_10798 = G__10805;
continue;
} else {
var temp__5720__auto___10806__$1 = cljs.core.seq.call(null,seq__10633_10795);
if(temp__5720__auto___10806__$1){
var seq__10633_10807__$1 = temp__5720__auto___10806__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10633_10807__$1)){
var c__4550__auto___10808 = cljs.core.chunk_first.call(null,seq__10633_10807__$1);
var G__10809 = cljs.core.chunk_rest.call(null,seq__10633_10807__$1);
var G__10810 = c__4550__auto___10808;
var G__10811 = cljs.core.count.call(null,c__4550__auto___10808);
var G__10812 = (0);
seq__10633_10795 = G__10809;
chunk__10634_10796 = G__10810;
count__10635_10797 = G__10811;
i__10636_10798 = G__10812;
continue;
} else {
var vec__10646_10813 = cljs.core.first.call(null,seq__10633_10807__$1);
var col_10814 = cljs.core.nth.call(null,vec__10646_10813,(0),null);
var infos_10815 = cljs.core.nth.call(null,vec__10646_10813,(1),null);
encode_cols.call(null,infos_10815,source_idx_10784,line_10793,col_10814);


var G__10816 = cljs.core.next.call(null,seq__10633_10807__$1);
var G__10817 = null;
var G__10818 = (0);
var G__10819 = (0);
seq__10633_10795 = G__10816;
chunk__10634_10796 = G__10817;
count__10635_10797 = G__10818;
i__10636_10798 = G__10819;
continue;
}
} else {
}
}
break;
}


var G__10820 = seq__10588_10788;
var G__10821 = chunk__10589_10789;
var G__10822 = count__10590_10790;
var G__10823 = (i__10591_10791 + (1));
seq__10588_10788 = G__10820;
chunk__10589_10789 = G__10821;
count__10590_10790 = G__10822;
i__10591_10791 = G__10823;
continue;
} else {
var temp__5720__auto___10824__$1 = cljs.core.seq.call(null,seq__10588_10788);
if(temp__5720__auto___10824__$1){
var seq__10588_10825__$1 = temp__5720__auto___10824__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10588_10825__$1)){
var c__4550__auto___10826 = cljs.core.chunk_first.call(null,seq__10588_10825__$1);
var G__10827 = cljs.core.chunk_rest.call(null,seq__10588_10825__$1);
var G__10828 = c__4550__auto___10826;
var G__10829 = cljs.core.count.call(null,c__4550__auto___10826);
var G__10830 = (0);
seq__10588_10788 = G__10827;
chunk__10589_10789 = G__10828;
count__10590_10790 = G__10829;
i__10591_10791 = G__10830;
continue;
} else {
var vec__10649_10831 = cljs.core.first.call(null,seq__10588_10825__$1);
var line_10832 = cljs.core.nth.call(null,vec__10649_10831,(0),null);
var cols_10833 = cljs.core.nth.call(null,vec__10649_10831,(1),null);
var seq__10652_10834 = cljs.core.seq.call(null,cols_10833);
var chunk__10653_10835 = null;
var count__10654_10836 = (0);
var i__10655_10837 = (0);
while(true){
if((i__10655_10837 < count__10654_10836)){
var vec__10662_10838 = cljs.core._nth.call(null,chunk__10653_10835,i__10655_10837);
var col_10839 = cljs.core.nth.call(null,vec__10662_10838,(0),null);
var infos_10840 = cljs.core.nth.call(null,vec__10662_10838,(1),null);
encode_cols.call(null,infos_10840,source_idx_10784,line_10832,col_10839);


var G__10841 = seq__10652_10834;
var G__10842 = chunk__10653_10835;
var G__10843 = count__10654_10836;
var G__10844 = (i__10655_10837 + (1));
seq__10652_10834 = G__10841;
chunk__10653_10835 = G__10842;
count__10654_10836 = G__10843;
i__10655_10837 = G__10844;
continue;
} else {
var temp__5720__auto___10845__$2 = cljs.core.seq.call(null,seq__10652_10834);
if(temp__5720__auto___10845__$2){
var seq__10652_10846__$1 = temp__5720__auto___10845__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10652_10846__$1)){
var c__4550__auto___10847 = cljs.core.chunk_first.call(null,seq__10652_10846__$1);
var G__10848 = cljs.core.chunk_rest.call(null,seq__10652_10846__$1);
var G__10849 = c__4550__auto___10847;
var G__10850 = cljs.core.count.call(null,c__4550__auto___10847);
var G__10851 = (0);
seq__10652_10834 = G__10848;
chunk__10653_10835 = G__10849;
count__10654_10836 = G__10850;
i__10655_10837 = G__10851;
continue;
} else {
var vec__10665_10852 = cljs.core.first.call(null,seq__10652_10846__$1);
var col_10853 = cljs.core.nth.call(null,vec__10665_10852,(0),null);
var infos_10854 = cljs.core.nth.call(null,vec__10665_10852,(1),null);
encode_cols.call(null,infos_10854,source_idx_10784,line_10832,col_10853);


var G__10855 = cljs.core.next.call(null,seq__10652_10846__$1);
var G__10856 = null;
var G__10857 = (0);
var G__10858 = (0);
seq__10652_10834 = G__10855;
chunk__10653_10835 = G__10856;
count__10654_10836 = G__10857;
i__10655_10837 = G__10858;
continue;
}
} else {
}
}
break;
}


var G__10859 = cljs.core.next.call(null,seq__10588_10825__$1);
var G__10860 = null;
var G__10861 = (0);
var G__10862 = (0);
seq__10588_10788 = G__10859;
chunk__10589_10789 = G__10860;
count__10590_10790 = G__10861;
i__10591_10791 = G__10862;
continue;
}
} else {
}
}
break;
}


var G__10863 = cljs.core.next.call(null,seq__10320_10777__$1);
var G__10864 = null;
var G__10865 = (0);
var G__10866 = (0);
seq__10320_10688 = G__10863;
chunk__10321_10689 = G__10864;
count__10322_10690 = G__10865;
i__10323_10691 = G__10866;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__10668 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__10313_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__10313_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__10314_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__10314_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__10315_SHARP_){
return clojure.string.join.call(null,",",p1__10315_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__10669 = G__10668;
goog.object.set(G__10669,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__10669;
} else {
return G__10668;
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
var vec__10867 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__10867,(0),null);
var col_map = cljs.core.nth.call(null,vec__10867,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__10870 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__10870,(0),null);
var infos = cljs.core.nth.call(null,vec__10870,(1),null);
var G__10876 = cljs.core.next.call(null,col_map_seq);
var G__10877 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__10870,col,infos,vec__10867,line,col_map){
return (function (v,p__10873){
var map__10874 = p__10873;
var map__10874__$1 = (((((!((map__10874 == null))))?(((((map__10874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10874):map__10874);
var gline = cljs.core.get.call(null,map__10874__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__10874__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__10870,col,infos,vec__10867,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__10876;
new_cols = G__10877;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__10878 = cljs.core.next.call(null,line_map_seq);
var G__10879 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__10878;
new_lines = G__10879;
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
var seq__10880_11152 = cljs.core.seq.call(null,reverse_map);
var chunk__10881_11153 = null;
var count__10882_11154 = (0);
var i__10883_11155 = (0);
while(true){
if((i__10883_11155 < count__10882_11154)){
var vec__11018_11156 = cljs.core._nth.call(null,chunk__10881_11153,i__10883_11155);
var line_11157 = cljs.core.nth.call(null,vec__11018_11156,(0),null);
var columns_11158 = cljs.core.nth.call(null,vec__11018_11156,(1),null);
var seq__11021_11159 = cljs.core.seq.call(null,columns_11158);
var chunk__11022_11160 = null;
var count__11023_11161 = (0);
var i__11024_11162 = (0);
while(true){
if((i__11024_11162 < count__11023_11161)){
var vec__11055_11163 = cljs.core._nth.call(null,chunk__11022_11160,i__11024_11162);
var column_11164 = cljs.core.nth.call(null,vec__11055_11163,(0),null);
var column_info_11165 = cljs.core.nth.call(null,vec__11055_11163,(1),null);
var seq__11058_11166 = cljs.core.seq.call(null,column_info_11165);
var chunk__11059_11167 = null;
var count__11060_11168 = (0);
var i__11061_11169 = (0);
while(true){
if((i__11061_11169 < count__11060_11168)){
var map__11066_11170 = cljs.core._nth.call(null,chunk__11059_11167,i__11061_11169);
var map__11066_11171__$1 = (((((!((map__11066_11170 == null))))?(((((map__11066_11170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11066_11170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11066_11170):map__11066_11170);
var gline_11172 = cljs.core.get.call(null,map__11066_11171__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11173 = cljs.core.get.call(null,map__11066_11171__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11174 = cljs.core.get.call(null,map__11066_11171__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11172], null),cljs.core.fnil.call(null,((function (seq__11058_11166,chunk__11059_11167,count__11060_11168,i__11061_11169,seq__11021_11159,chunk__11022_11160,count__11023_11161,i__11024_11162,seq__10880_11152,chunk__10881_11153,count__10882_11154,i__10883_11155,map__11066_11170,map__11066_11171__$1,gline_11172,gcol_11173,name_11174,vec__11055_11163,column_11164,column_info_11165,vec__11018_11156,line_11157,columns_11158,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11173], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11157,new cljs.core.Keyword(null,"col","col",-1959363084),column_11164,new cljs.core.Keyword(null,"name","name",1843675177),name_11174], null));
});})(seq__11058_11166,chunk__11059_11167,count__11060_11168,i__11061_11169,seq__11021_11159,chunk__11022_11160,count__11023_11161,i__11024_11162,seq__10880_11152,chunk__10881_11153,count__10882_11154,i__10883_11155,map__11066_11170,map__11066_11171__$1,gline_11172,gcol_11173,name_11174,vec__11055_11163,column_11164,column_info_11165,vec__11018_11156,line_11157,columns_11158,inverted))
,cljs.core.sorted_map.call(null)));


var G__11175 = seq__11058_11166;
var G__11176 = chunk__11059_11167;
var G__11177 = count__11060_11168;
var G__11178 = (i__11061_11169 + (1));
seq__11058_11166 = G__11175;
chunk__11059_11167 = G__11176;
count__11060_11168 = G__11177;
i__11061_11169 = G__11178;
continue;
} else {
var temp__5720__auto___11179 = cljs.core.seq.call(null,seq__11058_11166);
if(temp__5720__auto___11179){
var seq__11058_11180__$1 = temp__5720__auto___11179;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11058_11180__$1)){
var c__4550__auto___11181 = cljs.core.chunk_first.call(null,seq__11058_11180__$1);
var G__11182 = cljs.core.chunk_rest.call(null,seq__11058_11180__$1);
var G__11183 = c__4550__auto___11181;
var G__11184 = cljs.core.count.call(null,c__4550__auto___11181);
var G__11185 = (0);
seq__11058_11166 = G__11182;
chunk__11059_11167 = G__11183;
count__11060_11168 = G__11184;
i__11061_11169 = G__11185;
continue;
} else {
var map__11068_11186 = cljs.core.first.call(null,seq__11058_11180__$1);
var map__11068_11187__$1 = (((((!((map__11068_11186 == null))))?(((((map__11068_11186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11068_11186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11068_11186):map__11068_11186);
var gline_11188 = cljs.core.get.call(null,map__11068_11187__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11189 = cljs.core.get.call(null,map__11068_11187__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11190 = cljs.core.get.call(null,map__11068_11187__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11188], null),cljs.core.fnil.call(null,((function (seq__11058_11166,chunk__11059_11167,count__11060_11168,i__11061_11169,seq__11021_11159,chunk__11022_11160,count__11023_11161,i__11024_11162,seq__10880_11152,chunk__10881_11153,count__10882_11154,i__10883_11155,map__11068_11186,map__11068_11187__$1,gline_11188,gcol_11189,name_11190,seq__11058_11180__$1,temp__5720__auto___11179,vec__11055_11163,column_11164,column_info_11165,vec__11018_11156,line_11157,columns_11158,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11189], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11157,new cljs.core.Keyword(null,"col","col",-1959363084),column_11164,new cljs.core.Keyword(null,"name","name",1843675177),name_11190], null));
});})(seq__11058_11166,chunk__11059_11167,count__11060_11168,i__11061_11169,seq__11021_11159,chunk__11022_11160,count__11023_11161,i__11024_11162,seq__10880_11152,chunk__10881_11153,count__10882_11154,i__10883_11155,map__11068_11186,map__11068_11187__$1,gline_11188,gcol_11189,name_11190,seq__11058_11180__$1,temp__5720__auto___11179,vec__11055_11163,column_11164,column_info_11165,vec__11018_11156,line_11157,columns_11158,inverted))
,cljs.core.sorted_map.call(null)));


var G__11191 = cljs.core.next.call(null,seq__11058_11180__$1);
var G__11192 = null;
var G__11193 = (0);
var G__11194 = (0);
seq__11058_11166 = G__11191;
chunk__11059_11167 = G__11192;
count__11060_11168 = G__11193;
i__11061_11169 = G__11194;
continue;
}
} else {
}
}
break;
}


var G__11195 = seq__11021_11159;
var G__11196 = chunk__11022_11160;
var G__11197 = count__11023_11161;
var G__11198 = (i__11024_11162 + (1));
seq__11021_11159 = G__11195;
chunk__11022_11160 = G__11196;
count__11023_11161 = G__11197;
i__11024_11162 = G__11198;
continue;
} else {
var temp__5720__auto___11199 = cljs.core.seq.call(null,seq__11021_11159);
if(temp__5720__auto___11199){
var seq__11021_11200__$1 = temp__5720__auto___11199;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11021_11200__$1)){
var c__4550__auto___11201 = cljs.core.chunk_first.call(null,seq__11021_11200__$1);
var G__11202 = cljs.core.chunk_rest.call(null,seq__11021_11200__$1);
var G__11203 = c__4550__auto___11201;
var G__11204 = cljs.core.count.call(null,c__4550__auto___11201);
var G__11205 = (0);
seq__11021_11159 = G__11202;
chunk__11022_11160 = G__11203;
count__11023_11161 = G__11204;
i__11024_11162 = G__11205;
continue;
} else {
var vec__11070_11206 = cljs.core.first.call(null,seq__11021_11200__$1);
var column_11207 = cljs.core.nth.call(null,vec__11070_11206,(0),null);
var column_info_11208 = cljs.core.nth.call(null,vec__11070_11206,(1),null);
var seq__11073_11209 = cljs.core.seq.call(null,column_info_11208);
var chunk__11074_11210 = null;
var count__11075_11211 = (0);
var i__11076_11212 = (0);
while(true){
if((i__11076_11212 < count__11075_11211)){
var map__11081_11213 = cljs.core._nth.call(null,chunk__11074_11210,i__11076_11212);
var map__11081_11214__$1 = (((((!((map__11081_11213 == null))))?(((((map__11081_11213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11081_11213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11081_11213):map__11081_11213);
var gline_11215 = cljs.core.get.call(null,map__11081_11214__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11216 = cljs.core.get.call(null,map__11081_11214__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11217 = cljs.core.get.call(null,map__11081_11214__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11215], null),cljs.core.fnil.call(null,((function (seq__11073_11209,chunk__11074_11210,count__11075_11211,i__11076_11212,seq__11021_11159,chunk__11022_11160,count__11023_11161,i__11024_11162,seq__10880_11152,chunk__10881_11153,count__10882_11154,i__10883_11155,map__11081_11213,map__11081_11214__$1,gline_11215,gcol_11216,name_11217,vec__11070_11206,column_11207,column_info_11208,seq__11021_11200__$1,temp__5720__auto___11199,vec__11018_11156,line_11157,columns_11158,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11216], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11157,new cljs.core.Keyword(null,"col","col",-1959363084),column_11207,new cljs.core.Keyword(null,"name","name",1843675177),name_11217], null));
});})(seq__11073_11209,chunk__11074_11210,count__11075_11211,i__11076_11212,seq__11021_11159,chunk__11022_11160,count__11023_11161,i__11024_11162,seq__10880_11152,chunk__10881_11153,count__10882_11154,i__10883_11155,map__11081_11213,map__11081_11214__$1,gline_11215,gcol_11216,name_11217,vec__11070_11206,column_11207,column_info_11208,seq__11021_11200__$1,temp__5720__auto___11199,vec__11018_11156,line_11157,columns_11158,inverted))
,cljs.core.sorted_map.call(null)));


var G__11218 = seq__11073_11209;
var G__11219 = chunk__11074_11210;
var G__11220 = count__11075_11211;
var G__11221 = (i__11076_11212 + (1));
seq__11073_11209 = G__11218;
chunk__11074_11210 = G__11219;
count__11075_11211 = G__11220;
i__11076_11212 = G__11221;
continue;
} else {
var temp__5720__auto___11222__$1 = cljs.core.seq.call(null,seq__11073_11209);
if(temp__5720__auto___11222__$1){
var seq__11073_11223__$1 = temp__5720__auto___11222__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11073_11223__$1)){
var c__4550__auto___11224 = cljs.core.chunk_first.call(null,seq__11073_11223__$1);
var G__11225 = cljs.core.chunk_rest.call(null,seq__11073_11223__$1);
var G__11226 = c__4550__auto___11224;
var G__11227 = cljs.core.count.call(null,c__4550__auto___11224);
var G__11228 = (0);
seq__11073_11209 = G__11225;
chunk__11074_11210 = G__11226;
count__11075_11211 = G__11227;
i__11076_11212 = G__11228;
continue;
} else {
var map__11083_11229 = cljs.core.first.call(null,seq__11073_11223__$1);
var map__11083_11230__$1 = (((((!((map__11083_11229 == null))))?(((((map__11083_11229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11083_11229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11083_11229):map__11083_11229);
var gline_11231 = cljs.core.get.call(null,map__11083_11230__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11232 = cljs.core.get.call(null,map__11083_11230__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11233 = cljs.core.get.call(null,map__11083_11230__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11231], null),cljs.core.fnil.call(null,((function (seq__11073_11209,chunk__11074_11210,count__11075_11211,i__11076_11212,seq__11021_11159,chunk__11022_11160,count__11023_11161,i__11024_11162,seq__10880_11152,chunk__10881_11153,count__10882_11154,i__10883_11155,map__11083_11229,map__11083_11230__$1,gline_11231,gcol_11232,name_11233,seq__11073_11223__$1,temp__5720__auto___11222__$1,vec__11070_11206,column_11207,column_info_11208,seq__11021_11200__$1,temp__5720__auto___11199,vec__11018_11156,line_11157,columns_11158,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11232], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11157,new cljs.core.Keyword(null,"col","col",-1959363084),column_11207,new cljs.core.Keyword(null,"name","name",1843675177),name_11233], null));
});})(seq__11073_11209,chunk__11074_11210,count__11075_11211,i__11076_11212,seq__11021_11159,chunk__11022_11160,count__11023_11161,i__11024_11162,seq__10880_11152,chunk__10881_11153,count__10882_11154,i__10883_11155,map__11083_11229,map__11083_11230__$1,gline_11231,gcol_11232,name_11233,seq__11073_11223__$1,temp__5720__auto___11222__$1,vec__11070_11206,column_11207,column_info_11208,seq__11021_11200__$1,temp__5720__auto___11199,vec__11018_11156,line_11157,columns_11158,inverted))
,cljs.core.sorted_map.call(null)));


var G__11234 = cljs.core.next.call(null,seq__11073_11223__$1);
var G__11235 = null;
var G__11236 = (0);
var G__11237 = (0);
seq__11073_11209 = G__11234;
chunk__11074_11210 = G__11235;
count__11075_11211 = G__11236;
i__11076_11212 = G__11237;
continue;
}
} else {
}
}
break;
}


var G__11238 = cljs.core.next.call(null,seq__11021_11200__$1);
var G__11239 = null;
var G__11240 = (0);
var G__11241 = (0);
seq__11021_11159 = G__11238;
chunk__11022_11160 = G__11239;
count__11023_11161 = G__11240;
i__11024_11162 = G__11241;
continue;
}
} else {
}
}
break;
}


var G__11242 = seq__10880_11152;
var G__11243 = chunk__10881_11153;
var G__11244 = count__10882_11154;
var G__11245 = (i__10883_11155 + (1));
seq__10880_11152 = G__11242;
chunk__10881_11153 = G__11243;
count__10882_11154 = G__11244;
i__10883_11155 = G__11245;
continue;
} else {
var temp__5720__auto___11246 = cljs.core.seq.call(null,seq__10880_11152);
if(temp__5720__auto___11246){
var seq__10880_11247__$1 = temp__5720__auto___11246;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10880_11247__$1)){
var c__4550__auto___11248 = cljs.core.chunk_first.call(null,seq__10880_11247__$1);
var G__11249 = cljs.core.chunk_rest.call(null,seq__10880_11247__$1);
var G__11250 = c__4550__auto___11248;
var G__11251 = cljs.core.count.call(null,c__4550__auto___11248);
var G__11252 = (0);
seq__10880_11152 = G__11249;
chunk__10881_11153 = G__11250;
count__10882_11154 = G__11251;
i__10883_11155 = G__11252;
continue;
} else {
var vec__11085_11253 = cljs.core.first.call(null,seq__10880_11247__$1);
var line_11254 = cljs.core.nth.call(null,vec__11085_11253,(0),null);
var columns_11255 = cljs.core.nth.call(null,vec__11085_11253,(1),null);
var seq__11088_11256 = cljs.core.seq.call(null,columns_11255);
var chunk__11089_11257 = null;
var count__11090_11258 = (0);
var i__11091_11259 = (0);
while(true){
if((i__11091_11259 < count__11090_11258)){
var vec__11122_11260 = cljs.core._nth.call(null,chunk__11089_11257,i__11091_11259);
var column_11261 = cljs.core.nth.call(null,vec__11122_11260,(0),null);
var column_info_11262 = cljs.core.nth.call(null,vec__11122_11260,(1),null);
var seq__11125_11263 = cljs.core.seq.call(null,column_info_11262);
var chunk__11126_11264 = null;
var count__11127_11265 = (0);
var i__11128_11266 = (0);
while(true){
if((i__11128_11266 < count__11127_11265)){
var map__11133_11267 = cljs.core._nth.call(null,chunk__11126_11264,i__11128_11266);
var map__11133_11268__$1 = (((((!((map__11133_11267 == null))))?(((((map__11133_11267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11133_11267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11133_11267):map__11133_11267);
var gline_11269 = cljs.core.get.call(null,map__11133_11268__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11270 = cljs.core.get.call(null,map__11133_11268__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11271 = cljs.core.get.call(null,map__11133_11268__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11269], null),cljs.core.fnil.call(null,((function (seq__11125_11263,chunk__11126_11264,count__11127_11265,i__11128_11266,seq__11088_11256,chunk__11089_11257,count__11090_11258,i__11091_11259,seq__10880_11152,chunk__10881_11153,count__10882_11154,i__10883_11155,map__11133_11267,map__11133_11268__$1,gline_11269,gcol_11270,name_11271,vec__11122_11260,column_11261,column_info_11262,vec__11085_11253,line_11254,columns_11255,seq__10880_11247__$1,temp__5720__auto___11246,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11270], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11254,new cljs.core.Keyword(null,"col","col",-1959363084),column_11261,new cljs.core.Keyword(null,"name","name",1843675177),name_11271], null));
});})(seq__11125_11263,chunk__11126_11264,count__11127_11265,i__11128_11266,seq__11088_11256,chunk__11089_11257,count__11090_11258,i__11091_11259,seq__10880_11152,chunk__10881_11153,count__10882_11154,i__10883_11155,map__11133_11267,map__11133_11268__$1,gline_11269,gcol_11270,name_11271,vec__11122_11260,column_11261,column_info_11262,vec__11085_11253,line_11254,columns_11255,seq__10880_11247__$1,temp__5720__auto___11246,inverted))
,cljs.core.sorted_map.call(null)));


var G__11272 = seq__11125_11263;
var G__11273 = chunk__11126_11264;
var G__11274 = count__11127_11265;
var G__11275 = (i__11128_11266 + (1));
seq__11125_11263 = G__11272;
chunk__11126_11264 = G__11273;
count__11127_11265 = G__11274;
i__11128_11266 = G__11275;
continue;
} else {
var temp__5720__auto___11276__$1 = cljs.core.seq.call(null,seq__11125_11263);
if(temp__5720__auto___11276__$1){
var seq__11125_11277__$1 = temp__5720__auto___11276__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11125_11277__$1)){
var c__4550__auto___11278 = cljs.core.chunk_first.call(null,seq__11125_11277__$1);
var G__11279 = cljs.core.chunk_rest.call(null,seq__11125_11277__$1);
var G__11280 = c__4550__auto___11278;
var G__11281 = cljs.core.count.call(null,c__4550__auto___11278);
var G__11282 = (0);
seq__11125_11263 = G__11279;
chunk__11126_11264 = G__11280;
count__11127_11265 = G__11281;
i__11128_11266 = G__11282;
continue;
} else {
var map__11135_11283 = cljs.core.first.call(null,seq__11125_11277__$1);
var map__11135_11284__$1 = (((((!((map__11135_11283 == null))))?(((((map__11135_11283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11135_11283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11135_11283):map__11135_11283);
var gline_11285 = cljs.core.get.call(null,map__11135_11284__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11286 = cljs.core.get.call(null,map__11135_11284__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11287 = cljs.core.get.call(null,map__11135_11284__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11285], null),cljs.core.fnil.call(null,((function (seq__11125_11263,chunk__11126_11264,count__11127_11265,i__11128_11266,seq__11088_11256,chunk__11089_11257,count__11090_11258,i__11091_11259,seq__10880_11152,chunk__10881_11153,count__10882_11154,i__10883_11155,map__11135_11283,map__11135_11284__$1,gline_11285,gcol_11286,name_11287,seq__11125_11277__$1,temp__5720__auto___11276__$1,vec__11122_11260,column_11261,column_info_11262,vec__11085_11253,line_11254,columns_11255,seq__10880_11247__$1,temp__5720__auto___11246,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11286], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11254,new cljs.core.Keyword(null,"col","col",-1959363084),column_11261,new cljs.core.Keyword(null,"name","name",1843675177),name_11287], null));
});})(seq__11125_11263,chunk__11126_11264,count__11127_11265,i__11128_11266,seq__11088_11256,chunk__11089_11257,count__11090_11258,i__11091_11259,seq__10880_11152,chunk__10881_11153,count__10882_11154,i__10883_11155,map__11135_11283,map__11135_11284__$1,gline_11285,gcol_11286,name_11287,seq__11125_11277__$1,temp__5720__auto___11276__$1,vec__11122_11260,column_11261,column_info_11262,vec__11085_11253,line_11254,columns_11255,seq__10880_11247__$1,temp__5720__auto___11246,inverted))
,cljs.core.sorted_map.call(null)));


var G__11288 = cljs.core.next.call(null,seq__11125_11277__$1);
var G__11289 = null;
var G__11290 = (0);
var G__11291 = (0);
seq__11125_11263 = G__11288;
chunk__11126_11264 = G__11289;
count__11127_11265 = G__11290;
i__11128_11266 = G__11291;
continue;
}
} else {
}
}
break;
}


var G__11292 = seq__11088_11256;
var G__11293 = chunk__11089_11257;
var G__11294 = count__11090_11258;
var G__11295 = (i__11091_11259 + (1));
seq__11088_11256 = G__11292;
chunk__11089_11257 = G__11293;
count__11090_11258 = G__11294;
i__11091_11259 = G__11295;
continue;
} else {
var temp__5720__auto___11296__$1 = cljs.core.seq.call(null,seq__11088_11256);
if(temp__5720__auto___11296__$1){
var seq__11088_11297__$1 = temp__5720__auto___11296__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11088_11297__$1)){
var c__4550__auto___11298 = cljs.core.chunk_first.call(null,seq__11088_11297__$1);
var G__11299 = cljs.core.chunk_rest.call(null,seq__11088_11297__$1);
var G__11300 = c__4550__auto___11298;
var G__11301 = cljs.core.count.call(null,c__4550__auto___11298);
var G__11302 = (0);
seq__11088_11256 = G__11299;
chunk__11089_11257 = G__11300;
count__11090_11258 = G__11301;
i__11091_11259 = G__11302;
continue;
} else {
var vec__11137_11303 = cljs.core.first.call(null,seq__11088_11297__$1);
var column_11304 = cljs.core.nth.call(null,vec__11137_11303,(0),null);
var column_info_11305 = cljs.core.nth.call(null,vec__11137_11303,(1),null);
var seq__11140_11306 = cljs.core.seq.call(null,column_info_11305);
var chunk__11141_11307 = null;
var count__11142_11308 = (0);
var i__11143_11309 = (0);
while(true){
if((i__11143_11309 < count__11142_11308)){
var map__11148_11310 = cljs.core._nth.call(null,chunk__11141_11307,i__11143_11309);
var map__11148_11311__$1 = (((((!((map__11148_11310 == null))))?(((((map__11148_11310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11148_11310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11148_11310):map__11148_11310);
var gline_11312 = cljs.core.get.call(null,map__11148_11311__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11313 = cljs.core.get.call(null,map__11148_11311__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11314 = cljs.core.get.call(null,map__11148_11311__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11312], null),cljs.core.fnil.call(null,((function (seq__11140_11306,chunk__11141_11307,count__11142_11308,i__11143_11309,seq__11088_11256,chunk__11089_11257,count__11090_11258,i__11091_11259,seq__10880_11152,chunk__10881_11153,count__10882_11154,i__10883_11155,map__11148_11310,map__11148_11311__$1,gline_11312,gcol_11313,name_11314,vec__11137_11303,column_11304,column_info_11305,seq__11088_11297__$1,temp__5720__auto___11296__$1,vec__11085_11253,line_11254,columns_11255,seq__10880_11247__$1,temp__5720__auto___11246,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11313], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11254,new cljs.core.Keyword(null,"col","col",-1959363084),column_11304,new cljs.core.Keyword(null,"name","name",1843675177),name_11314], null));
});})(seq__11140_11306,chunk__11141_11307,count__11142_11308,i__11143_11309,seq__11088_11256,chunk__11089_11257,count__11090_11258,i__11091_11259,seq__10880_11152,chunk__10881_11153,count__10882_11154,i__10883_11155,map__11148_11310,map__11148_11311__$1,gline_11312,gcol_11313,name_11314,vec__11137_11303,column_11304,column_info_11305,seq__11088_11297__$1,temp__5720__auto___11296__$1,vec__11085_11253,line_11254,columns_11255,seq__10880_11247__$1,temp__5720__auto___11246,inverted))
,cljs.core.sorted_map.call(null)));


var G__11315 = seq__11140_11306;
var G__11316 = chunk__11141_11307;
var G__11317 = count__11142_11308;
var G__11318 = (i__11143_11309 + (1));
seq__11140_11306 = G__11315;
chunk__11141_11307 = G__11316;
count__11142_11308 = G__11317;
i__11143_11309 = G__11318;
continue;
} else {
var temp__5720__auto___11319__$2 = cljs.core.seq.call(null,seq__11140_11306);
if(temp__5720__auto___11319__$2){
var seq__11140_11320__$1 = temp__5720__auto___11319__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11140_11320__$1)){
var c__4550__auto___11321 = cljs.core.chunk_first.call(null,seq__11140_11320__$1);
var G__11322 = cljs.core.chunk_rest.call(null,seq__11140_11320__$1);
var G__11323 = c__4550__auto___11321;
var G__11324 = cljs.core.count.call(null,c__4550__auto___11321);
var G__11325 = (0);
seq__11140_11306 = G__11322;
chunk__11141_11307 = G__11323;
count__11142_11308 = G__11324;
i__11143_11309 = G__11325;
continue;
} else {
var map__11150_11326 = cljs.core.first.call(null,seq__11140_11320__$1);
var map__11150_11327__$1 = (((((!((map__11150_11326 == null))))?(((((map__11150_11326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11150_11326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11150_11326):map__11150_11326);
var gline_11328 = cljs.core.get.call(null,map__11150_11327__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11329 = cljs.core.get.call(null,map__11150_11327__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11330 = cljs.core.get.call(null,map__11150_11327__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11328], null),cljs.core.fnil.call(null,((function (seq__11140_11306,chunk__11141_11307,count__11142_11308,i__11143_11309,seq__11088_11256,chunk__11089_11257,count__11090_11258,i__11091_11259,seq__10880_11152,chunk__10881_11153,count__10882_11154,i__10883_11155,map__11150_11326,map__11150_11327__$1,gline_11328,gcol_11329,name_11330,seq__11140_11320__$1,temp__5720__auto___11319__$2,vec__11137_11303,column_11304,column_info_11305,seq__11088_11297__$1,temp__5720__auto___11296__$1,vec__11085_11253,line_11254,columns_11255,seq__10880_11247__$1,temp__5720__auto___11246,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11329], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11254,new cljs.core.Keyword(null,"col","col",-1959363084),column_11304,new cljs.core.Keyword(null,"name","name",1843675177),name_11330], null));
});})(seq__11140_11306,chunk__11141_11307,count__11142_11308,i__11143_11309,seq__11088_11256,chunk__11089_11257,count__11090_11258,i__11091_11259,seq__10880_11152,chunk__10881_11153,count__10882_11154,i__10883_11155,map__11150_11326,map__11150_11327__$1,gline_11328,gcol_11329,name_11330,seq__11140_11320__$1,temp__5720__auto___11319__$2,vec__11137_11303,column_11304,column_info_11305,seq__11088_11297__$1,temp__5720__auto___11296__$1,vec__11085_11253,line_11254,columns_11255,seq__10880_11247__$1,temp__5720__auto___11246,inverted))
,cljs.core.sorted_map.call(null)));


var G__11331 = cljs.core.next.call(null,seq__11140_11320__$1);
var G__11332 = null;
var G__11333 = (0);
var G__11334 = (0);
seq__11140_11306 = G__11331;
chunk__11141_11307 = G__11332;
count__11142_11308 = G__11333;
i__11143_11309 = G__11334;
continue;
}
} else {
}
}
break;
}


var G__11335 = cljs.core.next.call(null,seq__11088_11297__$1);
var G__11336 = null;
var G__11337 = (0);
var G__11338 = (0);
seq__11088_11256 = G__11335;
chunk__11089_11257 = G__11336;
count__11090_11258 = G__11337;
i__11091_11259 = G__11338;
continue;
}
} else {
}
}
break;
}


var G__11339 = cljs.core.next.call(null,seq__10880_11247__$1);
var G__11340 = null;
var G__11341 = (0);
var G__11342 = (0);
seq__10880_11152 = G__11339;
chunk__10881_11153 = G__11340;
count__10882_11154 = G__11341;
i__10883_11155 = G__11342;
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
