// Compiled by ClojureScript 1.10.520 {:target :webworker}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.mapcat.call(null,(function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_source_map_data_gen_col_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.call(null,ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv.call(null,(function (xs,ns,_){
if(cljs.core._EQ_.call(null,needle,cljs.compiler.get_first_ns_segment.call(null,ns))){
return cljs.core.reduced.call(null,needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__11361 = s;
var map__11361__$1 = (((((!((map__11361 == null))))?(((((map__11361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11361):map__11361);
var name = cljs.core.get.call(null,map__11361__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__11361__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__11364 = info;
var map__11365 = G__11364;
var map__11365__$1 = (((((!((map__11365 == null))))?(((((map__11365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11365):map__11365);
var shadow = cljs.core.get.call(null,map__11365__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__11364__$1 = G__11364;
while(true){
var d__$2 = d__$1;
var map__11369 = G__11364__$1;
var map__11369__$1 = (((((!((map__11369 == null))))?(((((map__11369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11369):map__11369);
var shadow__$1 = cljs.core.get.call(null,map__11369__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__11371 = (d__$2 + (1));
var G__11372 = shadow__$1;
d__$1 = G__11371;
G__11364__$1 = G__11372;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__11373){
var map__11374 = p__11373;
var map__11374__$1 = (((((!((map__11374 == null))))?(((((map__11374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11374):map__11374);
var name_var = map__11374__$1;
var name = cljs.core.get.call(null,map__11374__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__11374__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__11376 = info;
var map__11376__$1 = (((((!((map__11376 == null))))?(((((map__11376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11376):map__11376);
var ns = cljs.core.get.call(null,map__11376__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__11376__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$")),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if((!((cljs.core.get.call(null,reserved,s) == null)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__11379 = arguments.length;
switch (G__11379) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if((!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null)))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):(((!((renamed == null))))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",(17),(1),(11478),(11478),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)])).call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__11381 = cp;
switch (G__11381) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if(((((31) < cp)) && ((cp < (127))))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.call(null,"0000",unpadded.length);
return ["\\u",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad),cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__11383_11387 = cljs.core.seq.call(null,s);
var chunk__11384_11388 = null;
var count__11385_11389 = (0);
var i__11386_11390 = (0);
while(true){
if((i__11386_11390 < count__11385_11389)){
var c_11391 = cljs.core._nth.call(null,chunk__11384_11388,i__11386_11390);
sb.append(cljs.compiler.escape_char.call(null,c_11391));


var G__11392 = seq__11383_11387;
var G__11393 = chunk__11384_11388;
var G__11394 = count__11385_11389;
var G__11395 = (i__11386_11390 + (1));
seq__11383_11387 = G__11392;
chunk__11384_11388 = G__11393;
count__11385_11389 = G__11394;
i__11386_11390 = G__11395;
continue;
} else {
var temp__5720__auto___11396 = cljs.core.seq.call(null,seq__11383_11387);
if(temp__5720__auto___11396){
var seq__11383_11397__$1 = temp__5720__auto___11396;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11383_11397__$1)){
var c__4550__auto___11398 = cljs.core.chunk_first.call(null,seq__11383_11397__$1);
var G__11399 = cljs.core.chunk_rest.call(null,seq__11383_11397__$1);
var G__11400 = c__4550__auto___11398;
var G__11401 = cljs.core.count.call(null,c__4550__auto___11398);
var G__11402 = (0);
seq__11383_11387 = G__11399;
chunk__11384_11388 = G__11400;
count__11385_11389 = G__11401;
i__11386_11390 = G__11402;
continue;
} else {
var c_11403 = cljs.core.first.call(null,seq__11383_11397__$1);
sb.append(cljs.compiler.escape_char.call(null,c_11403));


var G__11404 = cljs.core.next.call(null,seq__11383_11397__$1);
var G__11405 = null;
var G__11406 = (0);
var G__11407 = (0);
seq__11383_11387 = G__11404;
chunk__11384_11388 = G__11405;
count__11385_11389 = G__11406;
i__11386_11390 = G__11407;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\""].join('');
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__11408_11413 = ast;
var map__11408_11414__$1 = (((((!((map__11408_11413 == null))))?(((((map__11408_11413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11408_11413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11408_11413):map__11408_11413);
var env_11415 = cljs.core.get.call(null,map__11408_11414__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_11415))){
var map__11410_11416 = env_11415;
var map__11410_11417__$1 = (((((!((map__11410_11416 == null))))?(((((map__11410_11416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11410_11416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11410_11416):map__11410_11416);
var line_11418 = cljs.core.get.call(null,map__11410_11417__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_11419 = cljs.core.get.call(null,map__11410_11417__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__11410_11416,map__11410_11417__$1,line_11418,column_11419,map__11408_11413,map__11408_11414__$1,env_11415){
return (function (m){
var minfo = (function (){var G__11412 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__11412,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__11412;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_11418 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__11410_11416,map__11410_11417__$1,line_11418,column_11419,map__11408_11413,map__11408_11414__$1,env_11415){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_11419)?(column_11419 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__11410_11416,map__11410_11417__$1,line_11418,column_11419,map__11408_11413,map__11408_11414__$1,env_11415){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__11410_11416,map__11410_11417__$1,line_11418,column_11419,map__11408_11413,map__11408_11414__$1,env_11415))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__11410_11416,map__11410_11417__$1,line_11418,column_11419,map__11408_11413,map__11408_11414__$1,env_11415))
,cljs.core.sorted_map.call(null)));
});})(map__11410_11416,map__11410_11417__$1,line_11418,column_11419,map__11408_11413,map__11408_11414__$1,env_11415))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__11428 = arguments.length;
switch (G__11428) {
case 0:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___11435 = arguments.length;
var i__4731__auto___11436 = (0);
while(true){
if((i__4731__auto___11436 < len__4730__auto___11435)){
args_arr__4751__auto__.push((arguments[i__4731__auto___11436]));

var G__11437 = (i__4731__auto___11436 + (1));
i__4731__auto___11436 = G__11437;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((5)),(0),null));
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4752__auto__);

}
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1 = (function (a){
if((a == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,a)){
cljs.compiler.emit.call(null,a);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,a)){
cljs.core.apply.call(null,cljs.compiler.emits,a);
} else {
if(goog.isFunction(a)){
a.call(null);
} else {
var s_11438 = (function (){var G__11429 = a;
if((!(typeof a === 'string'))){
return G__11429.toString();
} else {
return G__11429;
}
})();
var temp__5724__auto___11439 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5724__auto___11439 == null)){
} else {
var sm_data_11440 = temp__5724__auto___11439;
cljs.core.swap_BANG_.call(null,sm_data_11440,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_11440,temp__5724__auto___11439,s_11438){
return (function (p1__11420_SHARP_){
return (p1__11420_SHARP_ + s_11438.length);
});})(sm_data_11440,temp__5724__auto___11439,s_11438))
);
}

cljs.core.print.call(null,s_11438);

}
}
}
}

return null;
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.call(null,a);

return cljs.compiler.emits.call(null,b);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

return cljs.compiler.emits.call(null,c);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

return cljs.compiler.emits.call(null,d);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

return cljs.compiler.emits.call(null,e);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

var seq__11430 = cljs.core.seq.call(null,xs);
var chunk__11431 = null;
var count__11432 = (0);
var i__11433 = (0);
while(true){
if((i__11433 < count__11432)){
var x = cljs.core._nth.call(null,chunk__11431,i__11433);
cljs.compiler.emits.call(null,x);


var G__11441 = seq__11430;
var G__11442 = chunk__11431;
var G__11443 = count__11432;
var G__11444 = (i__11433 + (1));
seq__11430 = G__11441;
chunk__11431 = G__11442;
count__11432 = G__11443;
i__11433 = G__11444;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__11430);
if(temp__5720__auto__){
var seq__11430__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11430__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__11430__$1);
var G__11445 = cljs.core.chunk_rest.call(null,seq__11430__$1);
var G__11446 = c__4550__auto__;
var G__11447 = cljs.core.count.call(null,c__4550__auto__);
var G__11448 = (0);
seq__11430 = G__11445;
chunk__11431 = G__11446;
count__11432 = G__11447;
i__11433 = G__11448;
continue;
} else {
var x = cljs.core.first.call(null,seq__11430__$1);
cljs.compiler.emits.call(null,x);


var G__11449 = cljs.core.next.call(null,seq__11430__$1);
var G__11450 = null;
var G__11451 = (0);
var G__11452 = (0);
seq__11430 = G__11449;
chunk__11431 = G__11450;
count__11432 = G__11451;
i__11433 = G__11452;
continue;
}
} else {
return null;
}
}
break;
}
});

/** @this {Function} */
cljs.compiler.emits.cljs$lang$applyTo = (function (seq11422){
var G__11423 = cljs.core.first.call(null,seq11422);
var seq11422__$1 = cljs.core.next.call(null,seq11422);
var G__11424 = cljs.core.first.call(null,seq11422__$1);
var seq11422__$2 = cljs.core.next.call(null,seq11422__$1);
var G__11425 = cljs.core.first.call(null,seq11422__$2);
var seq11422__$3 = cljs.core.next.call(null,seq11422__$2);
var G__11426 = cljs.core.first.call(null,seq11422__$3);
var seq11422__$4 = cljs.core.next.call(null,seq11422__$3);
var G__11427 = cljs.core.first.call(null,seq11422__$4);
var seq11422__$5 = cljs.core.next.call(null,seq11422__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11423,G__11424,G__11425,G__11426,G__11427,seq11422__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__11453){
var map__11454 = p__11453;
var map__11454__$1 = (((((!((map__11454 == null))))?(((((map__11454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11454):map__11454);
var m = map__11454__$1;
var gen_line = cljs.core.get.call(null,map__11454__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__11463 = arguments.length;
switch (G__11463) {
case 0:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___11469 = arguments.length;
var i__4731__auto___11470 = (0);
while(true){
if((i__4731__auto___11470 < len__4730__auto___11469)){
args_arr__4751__auto__.push((arguments[i__4731__auto___11470]));

var G__11471 = (i__4731__auto___11470 + (1));
i__4731__auto___11470 = G__11471;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((5)),(0),null));
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4752__auto__);

}
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1 = (function (a){
cljs.compiler.emits.call(null,a);

return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

var seq__11464_11472 = cljs.core.seq.call(null,xs);
var chunk__11465_11473 = null;
var count__11466_11474 = (0);
var i__11467_11475 = (0);
while(true){
if((i__11467_11475 < count__11466_11474)){
var x_11476 = cljs.core._nth.call(null,chunk__11465_11473,i__11467_11475);
cljs.compiler.emits.call(null,x_11476);


var G__11477 = seq__11464_11472;
var G__11478 = chunk__11465_11473;
var G__11479 = count__11466_11474;
var G__11480 = (i__11467_11475 + (1));
seq__11464_11472 = G__11477;
chunk__11465_11473 = G__11478;
count__11466_11474 = G__11479;
i__11467_11475 = G__11480;
continue;
} else {
var temp__5720__auto___11481 = cljs.core.seq.call(null,seq__11464_11472);
if(temp__5720__auto___11481){
var seq__11464_11482__$1 = temp__5720__auto___11481;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11464_11482__$1)){
var c__4550__auto___11483 = cljs.core.chunk_first.call(null,seq__11464_11482__$1);
var G__11484 = cljs.core.chunk_rest.call(null,seq__11464_11482__$1);
var G__11485 = c__4550__auto___11483;
var G__11486 = cljs.core.count.call(null,c__4550__auto___11483);
var G__11487 = (0);
seq__11464_11472 = G__11484;
chunk__11465_11473 = G__11485;
count__11466_11474 = G__11486;
i__11467_11475 = G__11487;
continue;
} else {
var x_11488 = cljs.core.first.call(null,seq__11464_11482__$1);
cljs.compiler.emits.call(null,x_11488);


var G__11489 = cljs.core.next.call(null,seq__11464_11482__$1);
var G__11490 = null;
var G__11491 = (0);
var G__11492 = (0);
seq__11464_11472 = G__11489;
chunk__11465_11473 = G__11490;
count__11466_11474 = G__11491;
i__11467_11475 = G__11492;
continue;
}
} else {
}
}
break;
}

return cljs.compiler._emitln.call(null);
});

/** @this {Function} */
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq11457){
var G__11458 = cljs.core.first.call(null,seq11457);
var seq11457__$1 = cljs.core.next.call(null,seq11457);
var G__11459 = cljs.core.first.call(null,seq11457__$1);
var seq11457__$2 = cljs.core.next.call(null,seq11457__$1);
var G__11460 = cljs.core.first.call(null,seq11457__$2);
var seq11457__$3 = cljs.core.next.call(null,seq11457__$2);
var G__11461 = cljs.core.first.call(null,seq11457__$3);
var seq11457__$4 = cljs.core.next.call(null,seq11457__$3);
var G__11462 = cljs.core.first.call(null,seq11457__$4);
var seq11457__$5 = cljs.core.next.call(null,seq11457__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11458,G__11459,G__11460,G__11461,G__11462,seq11457__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11493_11497 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11494_11498 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11495_11499 = true;
var _STAR_print_fn_STAR__temp_val__11496_11500 = ((function (_STAR_print_newline_STAR__orig_val__11493_11497,_STAR_print_fn_STAR__orig_val__11494_11498,_STAR_print_newline_STAR__temp_val__11495_11499,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__11493_11497,_STAR_print_fn_STAR__orig_val__11494_11498,_STAR_print_newline_STAR__temp_val__11495_11499,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11495_11499;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11496_11500;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11494_11498;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11493_11497;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}









cljs.compiler.all_distinct_QMARK_ = (function cljs$compiler$all_distinct_QMARK_(xs){
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,xs);
});
cljs.compiler.emit_constant_no_meta = (function cljs$compiler$emit_constant_no_meta(x){
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x)){
return cljs.compiler.emit_list.call(null,x,cljs.compiler.emit_constants_comma_sep);
} else {
if(cljs.core.record_QMARK_.call(null,x)){
var vec__11501 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__11501,(0),null);
var name = cljs.core.nth.call(null,vec__11501,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,((function (vec__11501,ns,name){
return (function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
});})(vec__11501,ns,name))
);
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x)){
return cljs.compiler.emit_map.call(null,cljs.core.keys.call(null,x),cljs.core.vals.call(null,x),cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_);
} else {
if(cljs.analyzer.cljs_vector_QMARK_.call(null,x)){
return cljs.compiler.emit_vector.call(null,x,cljs.compiler.emit_constants_comma_sep);
} else {
if(cljs.analyzer.cljs_set_QMARK_.call(null,x)){
return cljs.compiler.emit_set.call(null,x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_);
} else {
return cljs.compiler.emit_constant_STAR_.call(null,x);

}
}
}
}
}
});
cljs.compiler.emit_constant = (function cljs$compiler$emit_constant(v){
var m = cljs.analyzer.elide_irrelevant_meta.call(null,cljs.core.meta.call(null,v));
if((!((cljs.core.seq.call(null,m) == null)))){
return cljs.compiler.emit_with_meta.call(null,((function (m){
return (function (){
return cljs.compiler.emit_constant_no_meta.call(null,v);
});})(m))
,((function (m){
return (function (){
return cljs.compiler.emit_constant_no_meta.call(null,m);
});})(m))
);
} else {
return cljs.compiler.emit_constant_no_meta.call(null,v);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.call(null,["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.pr_str.call(null,cljs.core.type.call(null,x))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.call(null,"NaN");
} else {
if(cljs.core.not.call(null,isFinite(x))){
return cljs.compiler.emits.call(null,(((x > (0)))?"Infinity":"-Infinity"));
} else {
return cljs.compiler.emits.call(null,"(",x,")");

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__11504 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__11504,(0),null);
var flags = cljs.core.nth.call(null,vec__11504,(1),null);
var pattern = cljs.core.nth.call(null,vec__11504,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[ns,"/",name].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = (((!((ns == null))))?[ns,"/",name].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.Keyword,(function (x){
var temp__5718__auto__ = (function (){var and__4120__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4120__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var value = temp__5718__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.Symbol,(function (x){
var temp__5718__auto__ = (function (){var and__4120__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4120__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var value = temp__5718__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.compiler.emit_constants_comma_sep = (function cljs$compiler$emit_constants_comma_sep(cs){
return (function (){
return cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (i,m){
if(cljs.core.even_QMARK_.call(null,i)){
return cljs.compiler.emit_constant.call(null,m);
} else {
return cljs.compiler.emits.call(null,m);
}
}),cljs.compiler.comma_sep.call(null,cs)));
});
});
cljs.compiler.array_map_threshold = (8);
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.tagged_literals.JSValue,(function (v){
var items = v.val;
if(cljs.core.map_QMARK_.call(null,items)){
return cljs.compiler.emit_js_object.call(null,items,((function (items){
return (function (p1__11507_SHARP_){
return ((function (items){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__11507_SHARP_);
});
;})(items))
});})(items))
);
} else {
return cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__11509){
var map__11510 = p__11509;
var map__11510__$1 = (((((!((map__11510 == null))))?(((((map__11510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11510):map__11510);
var ast = map__11510__$1;
var info = cljs.core.get.call(null,map__11510__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__11510__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__11510__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5718__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5718__auto__)){
var const_expr = temp__5718__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__11512 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__11512__$1 = (((((!((map__11512 == null))))?(((((map__11512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11512):map__11512);
var cenv = map__11512__$1;
var options = cljs.core.get.call(null,map__11512__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__4131__auto__ = js_module_name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,ast));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__11514 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4120__auto__;
}
})())){
return clojure.set.difference.call(null,G__11514,cljs.analyzer.es5_allowed);
} else {
return G__11514;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4131__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__11515 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__11515,reserved);
} else {
return G__11515;
}
})();
var env__11353__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11353__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__11516_11517 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__11516_11518__$1 = (((G__11516_11517 instanceof cljs.core.Keyword))?G__11516_11517.fqn:null);
switch (G__11516_11518__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace.call(null,var_name))){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"].",cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved));
} else {
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.call(null,"default",cljs.core.name.call(null,var_name));
} else {
return and__4120__auto__;
}
})())){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"]");
} else {
cljs.compiler.emits.call(null,info__$2);
}

break;
default:
cljs.compiler.emits.call(null,info__$2);

}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11353__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"binding","binding",539932593),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"local","local",-1497766724),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__11520){
var map__11521 = p__11520;
var map__11521__$1 = (((((!((map__11521 == null))))?(((((map__11521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11521):map__11521);
var arg = map__11521__$1;
var env = cljs.core.get.call(null,map__11521__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__11521__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__11521__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__11521__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__11523 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__11523__$1 = (((((!((map__11523 == null))))?(((((map__11523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11523):map__11523);
var name = cljs.core.get.call(null,map__11523__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__11353__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11353__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11353__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__11525){
var map__11526 = p__11525;
var map__11526__$1 = (((((!((map__11526 == null))))?(((((map__11526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11526):map__11526);
var expr = cljs.core.get.call(null,map__11526__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__11526__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__11526__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11353__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11353__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11353__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,((function (keys__$1){
return (function (p1__11528_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__11528_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
});})(keys__$1))
,keys__$1)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count.call(null,keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count.call(null,keys) === (0))){
return cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(distinct_keys_QMARK_.call(null,keys))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.createAsIfByAssoc([",comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"])");
}
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",comma_sep.call(null,keys),"],[",comma_sep.call(null,vals),"])");

}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__11529){
var map__11530 = p__11529;
var map__11530__$1 = (((((!((map__11530 == null))))?(((((map__11530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11530):map__11530);
var env = cljs.core.get.call(null,map__11530__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__11530__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__11530__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__11353__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11353__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11353__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_list = (function cljs$compiler$emit_list(items,comma_sep){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
return cljs.compiler.emits.call(null,"cljs.core.list(",comma_sep.call(null,items),")");
}
});
cljs.compiler.emit_vector = (function cljs$compiler$emit_vector(items,comma_sep){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt = cljs.core.count.call(null,items);
if((cnt < (32))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",comma_sep.call(null,items),"], null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",comma_sep.call(null,items),"], true)");
}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__11532){
var map__11533 = p__11532;
var map__11533__$1 = (((((!((map__11533 == null))))?(((((map__11533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11533):map__11533);
var items = cljs.core.get.call(null,map__11533__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__11533__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11353__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11353__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11353__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,((function (items__$1){
return (function (p1__11535_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__11535_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
});})(items__$1))
,items__$1)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count.call(null,items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(distinct_constants_QMARK_.call(null,items))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.createAsIfByAssoc([",comma_sep.call(null,items),"])");

}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__11536){
var map__11537 = p__11536;
var map__11537__$1 = (((((!((map__11537 == null))))?(((((map__11537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11537):map__11537);
var items = cljs.core.get.call(null,map__11537__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__11537__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11353__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11353__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11353__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5720__auto___11561 = cljs.core.seq.call(null,items);
if(temp__5720__auto___11561){
var items_11562__$1 = temp__5720__auto___11561;
var vec__11539_11563 = items_11562__$1;
var seq__11540_11564 = cljs.core.seq.call(null,vec__11539_11563);
var first__11541_11565 = cljs.core.first.call(null,seq__11540_11564);
var seq__11540_11566__$1 = cljs.core.next.call(null,seq__11540_11564);
var vec__11542_11567 = first__11541_11565;
var k_11568 = cljs.core.nth.call(null,vec__11542_11567,(0),null);
var v_11569 = cljs.core.nth.call(null,vec__11542_11567,(1),null);
var r_11570 = seq__11540_11566__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_11568),"\": ",emit_js_object_val.call(null,v_11569));

var seq__11545_11571 = cljs.core.seq.call(null,r_11570);
var chunk__11546_11572 = null;
var count__11547_11573 = (0);
var i__11548_11574 = (0);
while(true){
if((i__11548_11574 < count__11547_11573)){
var vec__11555_11575 = cljs.core._nth.call(null,chunk__11546_11572,i__11548_11574);
var k_11576__$1 = cljs.core.nth.call(null,vec__11555_11575,(0),null);
var v_11577__$1 = cljs.core.nth.call(null,vec__11555_11575,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_11576__$1),"\": ",emit_js_object_val.call(null,v_11577__$1));


var G__11578 = seq__11545_11571;
var G__11579 = chunk__11546_11572;
var G__11580 = count__11547_11573;
var G__11581 = (i__11548_11574 + (1));
seq__11545_11571 = G__11578;
chunk__11546_11572 = G__11579;
count__11547_11573 = G__11580;
i__11548_11574 = G__11581;
continue;
} else {
var temp__5720__auto___11582__$1 = cljs.core.seq.call(null,seq__11545_11571);
if(temp__5720__auto___11582__$1){
var seq__11545_11583__$1 = temp__5720__auto___11582__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11545_11583__$1)){
var c__4550__auto___11584 = cljs.core.chunk_first.call(null,seq__11545_11583__$1);
var G__11585 = cljs.core.chunk_rest.call(null,seq__11545_11583__$1);
var G__11586 = c__4550__auto___11584;
var G__11587 = cljs.core.count.call(null,c__4550__auto___11584);
var G__11588 = (0);
seq__11545_11571 = G__11585;
chunk__11546_11572 = G__11586;
count__11547_11573 = G__11587;
i__11548_11574 = G__11588;
continue;
} else {
var vec__11558_11589 = cljs.core.first.call(null,seq__11545_11583__$1);
var k_11590__$1 = cljs.core.nth.call(null,vec__11558_11589,(0),null);
var v_11591__$1 = cljs.core.nth.call(null,vec__11558_11589,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_11590__$1),"\": ",emit_js_object_val.call(null,v_11591__$1));


var G__11592 = cljs.core.next.call(null,seq__11545_11583__$1);
var G__11593 = null;
var G__11594 = (0);
var G__11595 = (0);
seq__11545_11571 = G__11592;
chunk__11546_11572 = G__11593;
count__11547_11573 = G__11594;
i__11548_11574 = G__11595;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_js_array = (function cljs$compiler$emit_js_array(items,comma_sep){
return cljs.compiler.emits.call(null,"[",comma_sep.call(null,items),"]");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__11596){
var map__11597 = p__11596;
var map__11597__$1 = (((((!((map__11597 == null))))?(((((map__11597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11597):map__11597);
var keys = cljs.core.get.call(null,map__11597__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__11597__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__11597__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11353__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11353__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11353__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__11599){
var map__11600 = p__11599;
var map__11600__$1 = (((((!((map__11600 == null))))?(((((map__11600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11600):map__11600);
var items = cljs.core.get.call(null,map__11600__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__11600__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11353__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11353__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11353__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__11602){
var map__11603 = p__11602;
var map__11603__$1 = (((((!((map__11603 == null))))?(((((map__11603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11603):map__11603);
var expr = cljs.core.get.call(null,map__11603__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__11605){
var map__11606 = p__11605;
var map__11606__$1 = (((((!((map__11606 == null))))?(((((map__11606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11606):map__11606);
var form = cljs.core.get.call(null,map__11606__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__11606__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__11353__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11353__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11353__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__11608 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__11608__$1 = (((((!((map__11608 == null))))?(((((map__11608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11608):map__11608);
var op = cljs.core.get.call(null,map__11608__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__11608__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__11608__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4131__auto__ = (function (){var and__4120__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842));
if(and__4120__auto__){
var and__4120__auto____$1 = form;
if(cljs.core.truth_(and__4120__auto____$1)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.call(null,form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = (!((const_expr == null)));
if(and__4120__auto__){
return cljs.compiler.truthy_constant_QMARK_.call(null,const_expr);
} else {
return and__4120__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__11610 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__11610__$1 = (((((!((map__11610 == null))))?(((((map__11610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11610):map__11610);
var op = cljs.core.get.call(null,map__11610__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__11610__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__11610__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4131__auto__ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var and__4120__auto__ = (!((const_expr == null)));
if(and__4120__auto__){
return cljs.compiler.falsey_constant_QMARK_.call(null,const_expr);
} else {
return and__4120__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__11612){
var map__11613 = p__11612;
var map__11613__$1 = (((((!((map__11613 == null))))?(((((map__11613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11613):map__11613);
var test = cljs.core.get.call(null,map__11613__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__11613__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__11613__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__11613__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__11613__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__4131__auto__ = unchecked;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__11615){
var map__11616 = p__11615;
var map__11616__$1 = (((((!((map__11616 == null))))?(((((map__11616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11616):map__11616);
var v = cljs.core.get.call(null,map__11616__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__11616__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__11616__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__11616__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__11618_11654 = cljs.core.seq.call(null,nodes);
var chunk__11619_11655 = null;
var count__11620_11656 = (0);
var i__11621_11657 = (0);
while(true){
if((i__11621_11657 < count__11620_11656)){
var map__11638_11658 = cljs.core._nth.call(null,chunk__11619_11655,i__11621_11657);
var map__11638_11659__$1 = (((((!((map__11638_11658 == null))))?(((((map__11638_11658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11638_11658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11638_11658):map__11638_11658);
var ts_11660 = cljs.core.get.call(null,map__11638_11659__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__11639_11661 = cljs.core.get.call(null,map__11638_11659__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__11639_11662__$1 = (((((!((map__11639_11661 == null))))?(((((map__11639_11661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11639_11661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11639_11661):map__11639_11661);
var then_11663 = cljs.core.get.call(null,map__11639_11662__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__11642_11664 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_11660));
var chunk__11643_11665 = null;
var count__11644_11666 = (0);
var i__11645_11667 = (0);
while(true){
if((i__11645_11667 < count__11644_11666)){
var test_11668 = cljs.core._nth.call(null,chunk__11643_11665,i__11645_11667);
cljs.compiler.emitln.call(null,"case ",test_11668,":");


var G__11669 = seq__11642_11664;
var G__11670 = chunk__11643_11665;
var G__11671 = count__11644_11666;
var G__11672 = (i__11645_11667 + (1));
seq__11642_11664 = G__11669;
chunk__11643_11665 = G__11670;
count__11644_11666 = G__11671;
i__11645_11667 = G__11672;
continue;
} else {
var temp__5720__auto___11673 = cljs.core.seq.call(null,seq__11642_11664);
if(temp__5720__auto___11673){
var seq__11642_11674__$1 = temp__5720__auto___11673;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11642_11674__$1)){
var c__4550__auto___11675 = cljs.core.chunk_first.call(null,seq__11642_11674__$1);
var G__11676 = cljs.core.chunk_rest.call(null,seq__11642_11674__$1);
var G__11677 = c__4550__auto___11675;
var G__11678 = cljs.core.count.call(null,c__4550__auto___11675);
var G__11679 = (0);
seq__11642_11664 = G__11676;
chunk__11643_11665 = G__11677;
count__11644_11666 = G__11678;
i__11645_11667 = G__11679;
continue;
} else {
var test_11680 = cljs.core.first.call(null,seq__11642_11674__$1);
cljs.compiler.emitln.call(null,"case ",test_11680,":");


var G__11681 = cljs.core.next.call(null,seq__11642_11674__$1);
var G__11682 = null;
var G__11683 = (0);
var G__11684 = (0);
seq__11642_11664 = G__11681;
chunk__11643_11665 = G__11682;
count__11644_11666 = G__11683;
i__11645_11667 = G__11684;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_11663);
} else {
cljs.compiler.emitln.call(null,then_11663);
}

cljs.compiler.emitln.call(null,"break;");


var G__11685 = seq__11618_11654;
var G__11686 = chunk__11619_11655;
var G__11687 = count__11620_11656;
var G__11688 = (i__11621_11657 + (1));
seq__11618_11654 = G__11685;
chunk__11619_11655 = G__11686;
count__11620_11656 = G__11687;
i__11621_11657 = G__11688;
continue;
} else {
var temp__5720__auto___11689 = cljs.core.seq.call(null,seq__11618_11654);
if(temp__5720__auto___11689){
var seq__11618_11690__$1 = temp__5720__auto___11689;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11618_11690__$1)){
var c__4550__auto___11691 = cljs.core.chunk_first.call(null,seq__11618_11690__$1);
var G__11692 = cljs.core.chunk_rest.call(null,seq__11618_11690__$1);
var G__11693 = c__4550__auto___11691;
var G__11694 = cljs.core.count.call(null,c__4550__auto___11691);
var G__11695 = (0);
seq__11618_11654 = G__11692;
chunk__11619_11655 = G__11693;
count__11620_11656 = G__11694;
i__11621_11657 = G__11695;
continue;
} else {
var map__11646_11696 = cljs.core.first.call(null,seq__11618_11690__$1);
var map__11646_11697__$1 = (((((!((map__11646_11696 == null))))?(((((map__11646_11696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11646_11696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11646_11696):map__11646_11696);
var ts_11698 = cljs.core.get.call(null,map__11646_11697__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__11647_11699 = cljs.core.get.call(null,map__11646_11697__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__11647_11700__$1 = (((((!((map__11647_11699 == null))))?(((((map__11647_11699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11647_11699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11647_11699):map__11647_11699);
var then_11701 = cljs.core.get.call(null,map__11647_11700__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__11650_11702 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_11698));
var chunk__11651_11703 = null;
var count__11652_11704 = (0);
var i__11653_11705 = (0);
while(true){
if((i__11653_11705 < count__11652_11704)){
var test_11706 = cljs.core._nth.call(null,chunk__11651_11703,i__11653_11705);
cljs.compiler.emitln.call(null,"case ",test_11706,":");


var G__11707 = seq__11650_11702;
var G__11708 = chunk__11651_11703;
var G__11709 = count__11652_11704;
var G__11710 = (i__11653_11705 + (1));
seq__11650_11702 = G__11707;
chunk__11651_11703 = G__11708;
count__11652_11704 = G__11709;
i__11653_11705 = G__11710;
continue;
} else {
var temp__5720__auto___11711__$1 = cljs.core.seq.call(null,seq__11650_11702);
if(temp__5720__auto___11711__$1){
var seq__11650_11712__$1 = temp__5720__auto___11711__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11650_11712__$1)){
var c__4550__auto___11713 = cljs.core.chunk_first.call(null,seq__11650_11712__$1);
var G__11714 = cljs.core.chunk_rest.call(null,seq__11650_11712__$1);
var G__11715 = c__4550__auto___11713;
var G__11716 = cljs.core.count.call(null,c__4550__auto___11713);
var G__11717 = (0);
seq__11650_11702 = G__11714;
chunk__11651_11703 = G__11715;
count__11652_11704 = G__11716;
i__11653_11705 = G__11717;
continue;
} else {
var test_11718 = cljs.core.first.call(null,seq__11650_11712__$1);
cljs.compiler.emitln.call(null,"case ",test_11718,":");


var G__11719 = cljs.core.next.call(null,seq__11650_11712__$1);
var G__11720 = null;
var G__11721 = (0);
var G__11722 = (0);
seq__11650_11702 = G__11719;
chunk__11651_11703 = G__11720;
count__11652_11704 = G__11721;
i__11653_11705 = G__11722;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_11701);
} else {
cljs.compiler.emitln.call(null,then_11701);
}

cljs.compiler.emitln.call(null,"break;");


var G__11723 = cljs.core.next.call(null,seq__11618_11690__$1);
var G__11724 = null;
var G__11725 = (0);
var G__11726 = (0);
seq__11618_11654 = G__11723;
chunk__11619_11655 = G__11724;
count__11620_11656 = G__11725;
i__11621_11657 = G__11726;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__11727){
var map__11728 = p__11727;
var map__11728__$1 = (((((!((map__11728 == null))))?(((((map__11728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11728):map__11728);
var throw$ = cljs.core.get.call(null,map__11728__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__11728__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__11731 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__11731,(0),null);
var rstr = cljs.core.nth.call(null,vec__11731,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__11731,fstr,rstr,ret_t,axstr){
return (function (p1__11730_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__11730_SHARP_);
});})(idx,vec__11731,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__11734 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__11734,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__11734;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),"="].join('');
} else {
return cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t)))));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__11735_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__11735_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__11736 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__11737 = cljs.core.seq.call(null,vec__11736);
var first__11738 = cljs.core.first.call(null,seq__11737);
var seq__11737__$1 = cljs.core.next.call(null,seq__11737);
var p = first__11738;
var first__11738__$1 = cljs.core.first.call(null,seq__11737__$1);
var seq__11737__$2 = cljs.core.next.call(null,seq__11737__$1);
var ts = first__11738__$1;
var first__11738__$2 = cljs.core.first.call(null,seq__11737__$2);
var seq__11737__$3 = cljs.core.next.call(null,seq__11737__$2);
var n = first__11738__$2;
var xs = seq__11737__$3;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__4120__auto__){
var and__4120__auto____$1 = ts;
if(cljs.core.truth_(and__4120__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__11739 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__11740 = cljs.core.seq.call(null,vec__11739);
var first__11741 = cljs.core.first.call(null,seq__11740);
var seq__11740__$1 = cljs.core.next.call(null,seq__11740);
var p = first__11741;
var first__11741__$1 = cljs.core.first.call(null,seq__11740__$1);
var seq__11740__$2 = cljs.core.next.call(null,seq__11740__$1);
var ts = first__11741__$1;
var xs = seq__11740__$2;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__4120__auto__){
var and__4120__auto____$1 = ts;
if(cljs.core.truth_(and__4120__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__11744 = arguments.length;
switch (G__11744) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__11752 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__11742_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__11742_SHARP_);
} else {
return p1__11742_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__11753 = cljs.core.seq.call(null,vec__11752);
var first__11754 = cljs.core.first.call(null,seq__11753);
var seq__11753__$1 = cljs.core.next.call(null,seq__11753);
var x = first__11754;
var ys = seq__11753__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__11755 = cljs.core.seq.call(null,ys);
var chunk__11756 = null;
var count__11757 = (0);
var i__11758 = (0);
while(true){
if((i__11758 < count__11757)){
var next_line = cljs.core._nth.call(null,chunk__11756,i__11758);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__11764 = seq__11755;
var G__11765 = chunk__11756;
var G__11766 = count__11757;
var G__11767 = (i__11758 + (1));
seq__11755 = G__11764;
chunk__11756 = G__11765;
count__11757 = G__11766;
i__11758 = G__11767;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__11755);
if(temp__5720__auto__){
var seq__11755__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11755__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__11755__$1);
var G__11768 = cljs.core.chunk_rest.call(null,seq__11755__$1);
var G__11769 = c__4550__auto__;
var G__11770 = cljs.core.count.call(null,c__4550__auto__);
var G__11771 = (0);
seq__11755 = G__11768;
chunk__11756 = G__11769;
count__11757 = G__11770;
i__11758 = G__11771;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__11755__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__11772 = cljs.core.next.call(null,seq__11755__$1);
var G__11773 = null;
var G__11774 = (0);
var G__11775 = (0);
seq__11755 = G__11772;
chunk__11756 = G__11773;
count__11757 = G__11774;
i__11758 = G__11775;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__11759_11776 = cljs.core.seq.call(null,docs__$2);
var chunk__11760_11777 = null;
var count__11761_11778 = (0);
var i__11762_11779 = (0);
while(true){
if((i__11762_11779 < count__11761_11778)){
var e_11780 = cljs.core._nth.call(null,chunk__11760_11777,i__11762_11779);
if(cljs.core.truth_(e_11780)){
print_comment_lines.call(null,e_11780);
} else {
}


var G__11781 = seq__11759_11776;
var G__11782 = chunk__11760_11777;
var G__11783 = count__11761_11778;
var G__11784 = (i__11762_11779 + (1));
seq__11759_11776 = G__11781;
chunk__11760_11777 = G__11782;
count__11761_11778 = G__11783;
i__11762_11779 = G__11784;
continue;
} else {
var temp__5720__auto___11785 = cljs.core.seq.call(null,seq__11759_11776);
if(temp__5720__auto___11785){
var seq__11759_11786__$1 = temp__5720__auto___11785;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11759_11786__$1)){
var c__4550__auto___11787 = cljs.core.chunk_first.call(null,seq__11759_11786__$1);
var G__11788 = cljs.core.chunk_rest.call(null,seq__11759_11786__$1);
var G__11789 = c__4550__auto___11787;
var G__11790 = cljs.core.count.call(null,c__4550__auto___11787);
var G__11791 = (0);
seq__11759_11776 = G__11788;
chunk__11760_11777 = G__11789;
count__11761_11778 = G__11790;
i__11762_11779 = G__11791;
continue;
} else {
var e_11792 = cljs.core.first.call(null,seq__11759_11786__$1);
if(cljs.core.truth_(e_11792)){
print_comment_lines.call(null,e_11792);
} else {
}


var G__11793 = cljs.core.next.call(null,seq__11759_11786__$1);
var G__11794 = null;
var G__11795 = (0);
var G__11796 = (0);
seq__11759_11776 = G__11793;
chunk__11760_11777 = G__11794;
count__11761_11778 = G__11795;
i__11762_11779 = G__11796;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number'));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__4120__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__11798_SHARP_){
return goog.string.startsWith(p1__11798_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = opts;
if(cljs.core.truth_(and__4120__auto____$1)){
var and__4120__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__4120__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)], null));
if(cljs.compiler.valid_define_value_QMARK_.call(null,define)){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__4120__auto____$2;
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__11799){
var map__11800 = p__11799;
var map__11800__$1 = (((((!((map__11800 == null))))?(((((map__11800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11800):map__11800);
var doc = cljs.core.get.call(null,map__11800__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__11800__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__11800__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.call(null,map__11800__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__11800__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__11800__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__11800__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__11800__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__11800__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__4131__auto__ = init;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__5718__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__5718__auto__)){
var define = temp__5718__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"the-var","the-var",1428415613),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__4120__auto__){
return test;
} else {
return and__4120__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__11802){
var map__11803 = p__11802;
var map__11803__$1 = (((((!((map__11803 == null))))?(((((map__11803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11803):map__11803);
var name = cljs.core.get.call(null,map__11803__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__11803__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__11803__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__11805_11829 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__11806_11830 = null;
var count__11807_11831 = (0);
var i__11808_11832 = (0);
while(true){
if((i__11808_11832 < count__11807_11831)){
var vec__11815_11833 = cljs.core._nth.call(null,chunk__11806_11830,i__11808_11832);
var i_11834 = cljs.core.nth.call(null,vec__11815_11833,(0),null);
var param_11835 = cljs.core.nth.call(null,vec__11815_11833,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_11835);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__11836 = seq__11805_11829;
var G__11837 = chunk__11806_11830;
var G__11838 = count__11807_11831;
var G__11839 = (i__11808_11832 + (1));
seq__11805_11829 = G__11836;
chunk__11806_11830 = G__11837;
count__11807_11831 = G__11838;
i__11808_11832 = G__11839;
continue;
} else {
var temp__5720__auto___11840 = cljs.core.seq.call(null,seq__11805_11829);
if(temp__5720__auto___11840){
var seq__11805_11841__$1 = temp__5720__auto___11840;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11805_11841__$1)){
var c__4550__auto___11842 = cljs.core.chunk_first.call(null,seq__11805_11841__$1);
var G__11843 = cljs.core.chunk_rest.call(null,seq__11805_11841__$1);
var G__11844 = c__4550__auto___11842;
var G__11845 = cljs.core.count.call(null,c__4550__auto___11842);
var G__11846 = (0);
seq__11805_11829 = G__11843;
chunk__11806_11830 = G__11844;
count__11807_11831 = G__11845;
i__11808_11832 = G__11846;
continue;
} else {
var vec__11818_11847 = cljs.core.first.call(null,seq__11805_11841__$1);
var i_11848 = cljs.core.nth.call(null,vec__11818_11847,(0),null);
var param_11849 = cljs.core.nth.call(null,vec__11818_11847,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_11849);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__11850 = cljs.core.next.call(null,seq__11805_11841__$1);
var G__11851 = null;
var G__11852 = (0);
var G__11853 = (0);
seq__11805_11829 = G__11850;
chunk__11806_11830 = G__11851;
count__11807_11831 = G__11852;
i__11808_11832 = G__11853;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__11821_11854 = cljs.core.seq.call(null,params);
var chunk__11822_11855 = null;
var count__11823_11856 = (0);
var i__11824_11857 = (0);
while(true){
if((i__11824_11857 < count__11823_11856)){
var param_11858 = cljs.core._nth.call(null,chunk__11822_11855,i__11824_11857);
cljs.compiler.emit.call(null,param_11858);

if(cljs.core._EQ_.call(null,param_11858,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11859 = seq__11821_11854;
var G__11860 = chunk__11822_11855;
var G__11861 = count__11823_11856;
var G__11862 = (i__11824_11857 + (1));
seq__11821_11854 = G__11859;
chunk__11822_11855 = G__11860;
count__11823_11856 = G__11861;
i__11824_11857 = G__11862;
continue;
} else {
var temp__5720__auto___11863 = cljs.core.seq.call(null,seq__11821_11854);
if(temp__5720__auto___11863){
var seq__11821_11864__$1 = temp__5720__auto___11863;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11821_11864__$1)){
var c__4550__auto___11865 = cljs.core.chunk_first.call(null,seq__11821_11864__$1);
var G__11866 = cljs.core.chunk_rest.call(null,seq__11821_11864__$1);
var G__11867 = c__4550__auto___11865;
var G__11868 = cljs.core.count.call(null,c__4550__auto___11865);
var G__11869 = (0);
seq__11821_11854 = G__11866;
chunk__11822_11855 = G__11867;
count__11823_11856 = G__11868;
i__11824_11857 = G__11869;
continue;
} else {
var param_11870 = cljs.core.first.call(null,seq__11821_11864__$1);
cljs.compiler.emit.call(null,param_11870);

if(cljs.core._EQ_.call(null,param_11870,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11871 = cljs.core.next.call(null,seq__11821_11864__$1);
var G__11872 = null;
var G__11873 = (0);
var G__11874 = (0);
seq__11821_11854 = G__11871;
chunk__11822_11855 = G__11872;
count__11823_11856 = G__11873;
i__11824_11857 = G__11874;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__11825_11875 = cljs.core.seq.call(null,params);
var chunk__11826_11876 = null;
var count__11827_11877 = (0);
var i__11828_11878 = (0);
while(true){
if((i__11828_11878 < count__11827_11877)){
var param_11879 = cljs.core._nth.call(null,chunk__11826_11876,i__11828_11878);
cljs.compiler.emit.call(null,param_11879);

if(cljs.core._EQ_.call(null,param_11879,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11880 = seq__11825_11875;
var G__11881 = chunk__11826_11876;
var G__11882 = count__11827_11877;
var G__11883 = (i__11828_11878 + (1));
seq__11825_11875 = G__11880;
chunk__11826_11876 = G__11881;
count__11827_11877 = G__11882;
i__11828_11878 = G__11883;
continue;
} else {
var temp__5720__auto___11884 = cljs.core.seq.call(null,seq__11825_11875);
if(temp__5720__auto___11884){
var seq__11825_11885__$1 = temp__5720__auto___11884;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11825_11885__$1)){
var c__4550__auto___11886 = cljs.core.chunk_first.call(null,seq__11825_11885__$1);
var G__11887 = cljs.core.chunk_rest.call(null,seq__11825_11885__$1);
var G__11888 = c__4550__auto___11886;
var G__11889 = cljs.core.count.call(null,c__4550__auto___11886);
var G__11890 = (0);
seq__11825_11875 = G__11887;
chunk__11826_11876 = G__11888;
count__11827_11877 = G__11889;
i__11828_11878 = G__11890;
continue;
} else {
var param_11891 = cljs.core.first.call(null,seq__11825_11885__$1);
cljs.compiler.emit.call(null,param_11891);

if(cljs.core._EQ_.call(null,param_11891,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11892 = cljs.core.next.call(null,seq__11825_11885__$1);
var G__11893 = null;
var G__11894 = (0);
var G__11895 = (0);
seq__11825_11875 = G__11892;
chunk__11826_11876 = G__11893;
count__11827_11877 = G__11894;
i__11828_11878 = G__11895;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__11896 = cljs.core.seq.call(null,params);
var chunk__11897 = null;
var count__11898 = (0);
var i__11899 = (0);
while(true){
if((i__11899 < count__11898)){
var param = cljs.core._nth.call(null,chunk__11897,i__11899);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11900 = seq__11896;
var G__11901 = chunk__11897;
var G__11902 = count__11898;
var G__11903 = (i__11899 + (1));
seq__11896 = G__11900;
chunk__11897 = G__11901;
count__11898 = G__11902;
i__11899 = G__11903;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__11896);
if(temp__5720__auto__){
var seq__11896__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11896__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__11896__$1);
var G__11904 = cljs.core.chunk_rest.call(null,seq__11896__$1);
var G__11905 = c__4550__auto__;
var G__11906 = cljs.core.count.call(null,c__4550__auto__);
var G__11907 = (0);
seq__11896 = G__11904;
chunk__11897 = G__11905;
count__11898 = G__11906;
i__11899 = G__11907;
continue;
} else {
var param = cljs.core.first.call(null,seq__11896__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11908 = cljs.core.next.call(null,seq__11896__$1);
var G__11909 = null;
var G__11910 = (0);
var G__11911 = (0);
seq__11896 = G__11908;
chunk__11897 = G__11909;
count__11898 = G__11910;
i__11899 = G__11911;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__11912){
var map__11913 = p__11912;
var map__11913__$1 = (((((!((map__11913 == null))))?(((((map__11913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11913):map__11913);
var expr = cljs.core.get.call(null,map__11913__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__11913__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__11913__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__11913__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__11913__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__11913__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__11353__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11353__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11353__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if((((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice)))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__11915){
var map__11916 = p__11915;
var map__11916__$1 = (((((!((map__11916 == null))))?(((((map__11916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11916):map__11916);
var f = map__11916__$1;
var expr = cljs.core.get.call(null,map__11916__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__11916__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__11916__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__11916__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__11916__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__11916__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__11916__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__11916__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__11353__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11353__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_11926__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_11927 = cljs.compiler.munge.call(null,name_11926__$1);
var delegate_name_11928 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_11927),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_11928," = function (");

var seq__11918_11929 = cljs.core.seq.call(null,params);
var chunk__11919_11930 = null;
var count__11920_11931 = (0);
var i__11921_11932 = (0);
while(true){
if((i__11921_11932 < count__11920_11931)){
var param_11933 = cljs.core._nth.call(null,chunk__11919_11930,i__11921_11932);
cljs.compiler.emit.call(null,param_11933);

if(cljs.core._EQ_.call(null,param_11933,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11934 = seq__11918_11929;
var G__11935 = chunk__11919_11930;
var G__11936 = count__11920_11931;
var G__11937 = (i__11921_11932 + (1));
seq__11918_11929 = G__11934;
chunk__11919_11930 = G__11935;
count__11920_11931 = G__11936;
i__11921_11932 = G__11937;
continue;
} else {
var temp__5720__auto___11938 = cljs.core.seq.call(null,seq__11918_11929);
if(temp__5720__auto___11938){
var seq__11918_11939__$1 = temp__5720__auto___11938;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11918_11939__$1)){
var c__4550__auto___11940 = cljs.core.chunk_first.call(null,seq__11918_11939__$1);
var G__11941 = cljs.core.chunk_rest.call(null,seq__11918_11939__$1);
var G__11942 = c__4550__auto___11940;
var G__11943 = cljs.core.count.call(null,c__4550__auto___11940);
var G__11944 = (0);
seq__11918_11929 = G__11941;
chunk__11919_11930 = G__11942;
count__11920_11931 = G__11943;
i__11921_11932 = G__11944;
continue;
} else {
var param_11945 = cljs.core.first.call(null,seq__11918_11939__$1);
cljs.compiler.emit.call(null,param_11945);

if(cljs.core._EQ_.call(null,param_11945,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11946 = cljs.core.next.call(null,seq__11918_11939__$1);
var G__11947 = null;
var G__11948 = (0);
var G__11949 = (0);
seq__11918_11929 = G__11946;
chunk__11919_11930 = G__11947;
count__11920_11931 = G__11948;
i__11921_11932 = G__11949;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_11927," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_11950 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_11950,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_11928,".call(this,");

var seq__11922_11951 = cljs.core.seq.call(null,params);
var chunk__11923_11952 = null;
var count__11924_11953 = (0);
var i__11925_11954 = (0);
while(true){
if((i__11925_11954 < count__11924_11953)){
var param_11955 = cljs.core._nth.call(null,chunk__11923_11952,i__11925_11954);
cljs.compiler.emit.call(null,param_11955);

if(cljs.core._EQ_.call(null,param_11955,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11956 = seq__11922_11951;
var G__11957 = chunk__11923_11952;
var G__11958 = count__11924_11953;
var G__11959 = (i__11925_11954 + (1));
seq__11922_11951 = G__11956;
chunk__11923_11952 = G__11957;
count__11924_11953 = G__11958;
i__11925_11954 = G__11959;
continue;
} else {
var temp__5720__auto___11960 = cljs.core.seq.call(null,seq__11922_11951);
if(temp__5720__auto___11960){
var seq__11922_11961__$1 = temp__5720__auto___11960;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11922_11961__$1)){
var c__4550__auto___11962 = cljs.core.chunk_first.call(null,seq__11922_11961__$1);
var G__11963 = cljs.core.chunk_rest.call(null,seq__11922_11961__$1);
var G__11964 = c__4550__auto___11962;
var G__11965 = cljs.core.count.call(null,c__4550__auto___11962);
var G__11966 = (0);
seq__11922_11951 = G__11963;
chunk__11923_11952 = G__11964;
count__11924_11953 = G__11965;
i__11925_11954 = G__11966;
continue;
} else {
var param_11967 = cljs.core.first.call(null,seq__11922_11961__$1);
cljs.compiler.emit.call(null,param_11967);

if(cljs.core._EQ_.call(null,param_11967,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11968 = cljs.core.next.call(null,seq__11922_11961__$1);
var G__11969 = null;
var G__11970 = (0);
var G__11971 = (0);
seq__11922_11951 = G__11968;
chunk__11923_11952 = G__11969;
count__11924_11953 = G__11970;
i__11925_11954 = G__11971;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_11927,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_11927,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_11926__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_11927,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_11928,";");

cljs.compiler.emitln.call(null,"return ",mname_11927,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11353__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__11975){
var map__11976 = p__11975;
var map__11976__$1 = (((((!((map__11976 == null))))?(((((map__11976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11976):map__11976);
var variadic = cljs.core.get.call(null,map__11976__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__11976__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__11976__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__11976__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__11976__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__11976__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__11976__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__11976,map__11976__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__11972_SHARP_){
var and__4120__auto__ = p1__11972_SHARP_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__11972_SHARP_));
} else {
return and__4120__auto__;
}
});})(map__11976,map__11976__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_12029__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_12030 = cljs.compiler.munge.call(null,name_12029__$1);
var maxparams_12031 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_12032 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_12029__$1,mname_12030,maxparams_12031,loop_locals,map__11976,map__11976__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_12030),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_12029__$1,mname_12030,maxparams_12031,loop_locals,map__11976,map__11976__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_12033 = cljs.core.sort_by.call(null,((function (name_12029__$1,mname_12030,maxparams_12031,mmap_12032,loop_locals,map__11976,map__11976__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__11973_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__11973_SHARP_)));
});})(name_12029__$1,mname_12030,maxparams_12031,mmap_12032,loop_locals,map__11976,map__11976__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_12032));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_12030," = null;");

var seq__11978_12034 = cljs.core.seq.call(null,ms_12033);
var chunk__11979_12035 = null;
var count__11980_12036 = (0);
var i__11981_12037 = (0);
while(true){
if((i__11981_12037 < count__11980_12036)){
var vec__11988_12038 = cljs.core._nth.call(null,chunk__11979_12035,i__11981_12037);
var n_12039 = cljs.core.nth.call(null,vec__11988_12038,(0),null);
var meth_12040 = cljs.core.nth.call(null,vec__11988_12038,(1),null);
cljs.compiler.emits.call(null,"var ",n_12039," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_12040))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_12040);
} else {
cljs.compiler.emit_fn_method.call(null,meth_12040);
}

cljs.compiler.emitln.call(null,";");


var G__12041 = seq__11978_12034;
var G__12042 = chunk__11979_12035;
var G__12043 = count__11980_12036;
var G__12044 = (i__11981_12037 + (1));
seq__11978_12034 = G__12041;
chunk__11979_12035 = G__12042;
count__11980_12036 = G__12043;
i__11981_12037 = G__12044;
continue;
} else {
var temp__5720__auto___12045 = cljs.core.seq.call(null,seq__11978_12034);
if(temp__5720__auto___12045){
var seq__11978_12046__$1 = temp__5720__auto___12045;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11978_12046__$1)){
var c__4550__auto___12047 = cljs.core.chunk_first.call(null,seq__11978_12046__$1);
var G__12048 = cljs.core.chunk_rest.call(null,seq__11978_12046__$1);
var G__12049 = c__4550__auto___12047;
var G__12050 = cljs.core.count.call(null,c__4550__auto___12047);
var G__12051 = (0);
seq__11978_12034 = G__12048;
chunk__11979_12035 = G__12049;
count__11980_12036 = G__12050;
i__11981_12037 = G__12051;
continue;
} else {
var vec__11991_12052 = cljs.core.first.call(null,seq__11978_12046__$1);
var n_12053 = cljs.core.nth.call(null,vec__11991_12052,(0),null);
var meth_12054 = cljs.core.nth.call(null,vec__11991_12052,(1),null);
cljs.compiler.emits.call(null,"var ",n_12053," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_12054))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_12054);
} else {
cljs.compiler.emit_fn_method.call(null,meth_12054);
}

cljs.compiler.emitln.call(null,";");


var G__12055 = cljs.core.next.call(null,seq__11978_12046__$1);
var G__12056 = null;
var G__12057 = (0);
var G__12058 = (0);
seq__11978_12034 = G__12055;
chunk__11979_12035 = G__12056;
count__11980_12036 = G__12057;
i__11981_12037 = G__12058;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_12030," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_12031),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_12031)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_12031));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__11994_12059 = cljs.core.seq.call(null,ms_12033);
var chunk__11995_12060 = null;
var count__11996_12061 = (0);
var i__11997_12062 = (0);
while(true){
if((i__11997_12062 < count__11996_12061)){
var vec__12004_12063 = cljs.core._nth.call(null,chunk__11995_12060,i__11997_12062);
var n_12064 = cljs.core.nth.call(null,vec__12004_12063,(0),null);
var meth_12065 = cljs.core.nth.call(null,vec__12004_12063,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_12065))){
cljs.compiler.emitln.call(null,"default:");

var restarg_12066 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_12066," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_12067 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_12066," = new cljs.core.IndexedSeq(",a_12067,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_12064,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_12031)),(((cljs.core.count.call(null,maxparams_12031) > (1)))?", ":null),restarg_12066,");");
} else {
var pcnt_12068 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_12065));
cljs.compiler.emitln.call(null,"case ",pcnt_12068,":");

cljs.compiler.emitln.call(null,"return ",n_12064,".call(this",(((pcnt_12068 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_12068,maxparams_12031)),null,(1),null)),(2),null))),");");
}


var G__12069 = seq__11994_12059;
var G__12070 = chunk__11995_12060;
var G__12071 = count__11996_12061;
var G__12072 = (i__11997_12062 + (1));
seq__11994_12059 = G__12069;
chunk__11995_12060 = G__12070;
count__11996_12061 = G__12071;
i__11997_12062 = G__12072;
continue;
} else {
var temp__5720__auto___12073 = cljs.core.seq.call(null,seq__11994_12059);
if(temp__5720__auto___12073){
var seq__11994_12074__$1 = temp__5720__auto___12073;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11994_12074__$1)){
var c__4550__auto___12075 = cljs.core.chunk_first.call(null,seq__11994_12074__$1);
var G__12076 = cljs.core.chunk_rest.call(null,seq__11994_12074__$1);
var G__12077 = c__4550__auto___12075;
var G__12078 = cljs.core.count.call(null,c__4550__auto___12075);
var G__12079 = (0);
seq__11994_12059 = G__12076;
chunk__11995_12060 = G__12077;
count__11996_12061 = G__12078;
i__11997_12062 = G__12079;
continue;
} else {
var vec__12007_12080 = cljs.core.first.call(null,seq__11994_12074__$1);
var n_12081 = cljs.core.nth.call(null,vec__12007_12080,(0),null);
var meth_12082 = cljs.core.nth.call(null,vec__12007_12080,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_12082))){
cljs.compiler.emitln.call(null,"default:");

var restarg_12083 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_12083," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_12084 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_12083," = new cljs.core.IndexedSeq(",a_12084,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_12081,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_12031)),(((cljs.core.count.call(null,maxparams_12031) > (1)))?", ":null),restarg_12083,");");
} else {
var pcnt_12085 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_12082));
cljs.compiler.emitln.call(null,"case ",pcnt_12085,":");

cljs.compiler.emitln.call(null,"return ",n_12081,".call(this",(((pcnt_12085 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_12085,maxparams_12031)),null,(1),null)),(2),null))),");");
}


var G__12086 = cljs.core.next.call(null,seq__11994_12074__$1);
var G__12087 = null;
var G__12088 = (0);
var G__12089 = (0);
seq__11994_12059 = G__12086;
chunk__11995_12060 = G__12087;
count__11996_12061 = G__12088;
i__11997_12062 = G__12089;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_12090 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_12033)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_12090,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_12030,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_12030,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_12029__$1,mname_12030,maxparams_12031,mmap_12032,ms_12033,loop_locals,map__11976,map__11976__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__11974_SHARP_){
var vec__12010 = p1__11974_SHARP_;
var n = cljs.core.nth.call(null,vec__12010,(0),null);
var m = cljs.core.nth.call(null,vec__12010,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_12029__$1,mname_12030,maxparams_12031,mmap_12032,ms_12033,loop_locals,map__11976,map__11976__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_12033),".cljs$lang$applyTo;");
} else {
}

var seq__12013_12091 = cljs.core.seq.call(null,ms_12033);
var chunk__12014_12092 = null;
var count__12015_12093 = (0);
var i__12016_12094 = (0);
while(true){
if((i__12016_12094 < count__12015_12093)){
var vec__12023_12095 = cljs.core._nth.call(null,chunk__12014_12092,i__12016_12094);
var n_12096 = cljs.core.nth.call(null,vec__12023_12095,(0),null);
var meth_12097 = cljs.core.nth.call(null,vec__12023_12095,(1),null);
var c_12098 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_12097));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_12097))){
cljs.compiler.emitln.call(null,mname_12030,".cljs$core$IFn$_invoke$arity$variadic = ",n_12096,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_12030,".cljs$core$IFn$_invoke$arity$",c_12098," = ",n_12096,";");
}


var G__12099 = seq__12013_12091;
var G__12100 = chunk__12014_12092;
var G__12101 = count__12015_12093;
var G__12102 = (i__12016_12094 + (1));
seq__12013_12091 = G__12099;
chunk__12014_12092 = G__12100;
count__12015_12093 = G__12101;
i__12016_12094 = G__12102;
continue;
} else {
var temp__5720__auto___12103 = cljs.core.seq.call(null,seq__12013_12091);
if(temp__5720__auto___12103){
var seq__12013_12104__$1 = temp__5720__auto___12103;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12013_12104__$1)){
var c__4550__auto___12105 = cljs.core.chunk_first.call(null,seq__12013_12104__$1);
var G__12106 = cljs.core.chunk_rest.call(null,seq__12013_12104__$1);
var G__12107 = c__4550__auto___12105;
var G__12108 = cljs.core.count.call(null,c__4550__auto___12105);
var G__12109 = (0);
seq__12013_12091 = G__12106;
chunk__12014_12092 = G__12107;
count__12015_12093 = G__12108;
i__12016_12094 = G__12109;
continue;
} else {
var vec__12026_12110 = cljs.core.first.call(null,seq__12013_12104__$1);
var n_12111 = cljs.core.nth.call(null,vec__12026_12110,(0),null);
var meth_12112 = cljs.core.nth.call(null,vec__12026_12110,(1),null);
var c_12113 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_12112));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_12112))){
cljs.compiler.emitln.call(null,mname_12030,".cljs$core$IFn$_invoke$arity$variadic = ",n_12111,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_12030,".cljs$core$IFn$_invoke$arity$",c_12113," = ",n_12111,";");
}


var G__12114 = cljs.core.next.call(null,seq__12013_12104__$1);
var G__12115 = null;
var G__12116 = (0);
var G__12117 = (0);
seq__12013_12091 = G__12114;
chunk__12014_12092 = G__12115;
count__12015_12093 = G__12116;
i__12016_12094 = G__12117;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_12030,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__12118){
var map__12119 = p__12118;
var map__12119__$1 = (((((!((map__12119 == null))))?(((((map__12119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12119):map__12119);
var statements = cljs.core.get.call(null,map__12119__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__12119__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__12119__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__12121_12125 = cljs.core.seq.call(null,statements);
var chunk__12122_12126 = null;
var count__12123_12127 = (0);
var i__12124_12128 = (0);
while(true){
if((i__12124_12128 < count__12123_12127)){
var s_12129 = cljs.core._nth.call(null,chunk__12122_12126,i__12124_12128);
cljs.compiler.emitln.call(null,s_12129);


var G__12130 = seq__12121_12125;
var G__12131 = chunk__12122_12126;
var G__12132 = count__12123_12127;
var G__12133 = (i__12124_12128 + (1));
seq__12121_12125 = G__12130;
chunk__12122_12126 = G__12131;
count__12123_12127 = G__12132;
i__12124_12128 = G__12133;
continue;
} else {
var temp__5720__auto___12134 = cljs.core.seq.call(null,seq__12121_12125);
if(temp__5720__auto___12134){
var seq__12121_12135__$1 = temp__5720__auto___12134;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12121_12135__$1)){
var c__4550__auto___12136 = cljs.core.chunk_first.call(null,seq__12121_12135__$1);
var G__12137 = cljs.core.chunk_rest.call(null,seq__12121_12135__$1);
var G__12138 = c__4550__auto___12136;
var G__12139 = cljs.core.count.call(null,c__4550__auto___12136);
var G__12140 = (0);
seq__12121_12125 = G__12137;
chunk__12122_12126 = G__12138;
count__12123_12127 = G__12139;
i__12124_12128 = G__12140;
continue;
} else {
var s_12141 = cljs.core.first.call(null,seq__12121_12135__$1);
cljs.compiler.emitln.call(null,s_12141);


var G__12142 = cljs.core.next.call(null,seq__12121_12135__$1);
var G__12143 = null;
var G__12144 = (0);
var G__12145 = (0);
seq__12121_12125 = G__12142;
chunk__12122_12126 = G__12143;
count__12123_12127 = G__12144;
i__12124_12128 = G__12145;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__12146){
var map__12147 = p__12146;
var map__12147__$1 = (((((!((map__12147 == null))))?(((((map__12147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12147):map__12147);
var try$ = cljs.core.get.call(null,map__12147__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__12147__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__12147__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__12147__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__12147__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.unwrap_quote.call(null,finally$)))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :const (:op (ana/unwrap-quote finally)))"].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__12149,is_loop){
var map__12150 = p__12149;
var map__12150__$1 = (((((!((map__12150 == null))))?(((((map__12150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12150):map__12150);
var expr = cljs.core.get.call(null,map__12150__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__12150__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__12150__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__12152_12166 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__12153_12167 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR__orig_val__12152_12166,context,map__12150,map__12150__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__12152_12166,context,map__12150,map__12150__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__12153_12167;

try{var seq__12154_12168 = cljs.core.seq.call(null,bindings);
var chunk__12155_12169 = null;
var count__12156_12170 = (0);
var i__12157_12171 = (0);
while(true){
if((i__12157_12171 < count__12156_12170)){
var map__12162_12172 = cljs.core._nth.call(null,chunk__12155_12169,i__12157_12171);
var map__12162_12173__$1 = (((((!((map__12162_12172 == null))))?(((((map__12162_12172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12162_12172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12162_12172):map__12162_12172);
var binding_12174 = map__12162_12173__$1;
var init_12175 = cljs.core.get.call(null,map__12162_12173__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_12174);

cljs.compiler.emitln.call(null," = ",init_12175,";");


var G__12176 = seq__12154_12168;
var G__12177 = chunk__12155_12169;
var G__12178 = count__12156_12170;
var G__12179 = (i__12157_12171 + (1));
seq__12154_12168 = G__12176;
chunk__12155_12169 = G__12177;
count__12156_12170 = G__12178;
i__12157_12171 = G__12179;
continue;
} else {
var temp__5720__auto___12180 = cljs.core.seq.call(null,seq__12154_12168);
if(temp__5720__auto___12180){
var seq__12154_12181__$1 = temp__5720__auto___12180;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12154_12181__$1)){
var c__4550__auto___12182 = cljs.core.chunk_first.call(null,seq__12154_12181__$1);
var G__12183 = cljs.core.chunk_rest.call(null,seq__12154_12181__$1);
var G__12184 = c__4550__auto___12182;
var G__12185 = cljs.core.count.call(null,c__4550__auto___12182);
var G__12186 = (0);
seq__12154_12168 = G__12183;
chunk__12155_12169 = G__12184;
count__12156_12170 = G__12185;
i__12157_12171 = G__12186;
continue;
} else {
var map__12164_12187 = cljs.core.first.call(null,seq__12154_12181__$1);
var map__12164_12188__$1 = (((((!((map__12164_12187 == null))))?(((((map__12164_12187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12164_12187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12164_12187):map__12164_12187);
var binding_12189 = map__12164_12188__$1;
var init_12190 = cljs.core.get.call(null,map__12164_12188__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_12189);

cljs.compiler.emitln.call(null," = ",init_12190,";");


var G__12191 = cljs.core.next.call(null,seq__12154_12181__$1);
var G__12192 = null;
var G__12193 = (0);
var G__12194 = (0);
seq__12154_12168 = G__12191;
chunk__12155_12169 = G__12192;
count__12156_12170 = G__12193;
i__12157_12171 = G__12194;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__12152_12166;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__12195){
var map__12196 = p__12195;
var map__12196__$1 = (((((!((map__12196 == null))))?(((((map__12196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12196):map__12196);
var frame = cljs.core.get.call(null,map__12196__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__12196__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__12196__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4607__auto___12198 = cljs.core.count.call(null,exprs);
var i_12199 = (0);
while(true){
if((i_12199 < n__4607__auto___12198)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_12199)," = ",exprs.call(null,i_12199),";");

var G__12200 = (i_12199 + (1));
i_12199 = G__12200;
continue;
} else {
}
break;
}

var n__4607__auto___12201 = cljs.core.count.call(null,exprs);
var i_12202 = (0);
while(true){
if((i_12202 < n__4607__auto___12201)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_12202))," = ",temps.call(null,i_12202),";");

var G__12203 = (i_12202 + (1));
i_12202 = G__12203;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__12204){
var map__12205 = p__12204;
var map__12205__$1 = (((((!((map__12205 == null))))?(((((map__12205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12205):map__12205);
var expr = cljs.core.get.call(null,map__12205__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__12205__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__12205__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__12207_12219 = cljs.core.seq.call(null,bindings);
var chunk__12208_12220 = null;
var count__12209_12221 = (0);
var i__12210_12222 = (0);
while(true){
if((i__12210_12222 < count__12209_12221)){
var map__12215_12223 = cljs.core._nth.call(null,chunk__12208_12220,i__12210_12222);
var map__12215_12224__$1 = (((((!((map__12215_12223 == null))))?(((((map__12215_12223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12215_12223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12215_12223):map__12215_12223);
var binding_12225 = map__12215_12224__$1;
var init_12226 = cljs.core.get.call(null,map__12215_12224__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_12225)," = ",init_12226,";");


var G__12227 = seq__12207_12219;
var G__12228 = chunk__12208_12220;
var G__12229 = count__12209_12221;
var G__12230 = (i__12210_12222 + (1));
seq__12207_12219 = G__12227;
chunk__12208_12220 = G__12228;
count__12209_12221 = G__12229;
i__12210_12222 = G__12230;
continue;
} else {
var temp__5720__auto___12231 = cljs.core.seq.call(null,seq__12207_12219);
if(temp__5720__auto___12231){
var seq__12207_12232__$1 = temp__5720__auto___12231;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12207_12232__$1)){
var c__4550__auto___12233 = cljs.core.chunk_first.call(null,seq__12207_12232__$1);
var G__12234 = cljs.core.chunk_rest.call(null,seq__12207_12232__$1);
var G__12235 = c__4550__auto___12233;
var G__12236 = cljs.core.count.call(null,c__4550__auto___12233);
var G__12237 = (0);
seq__12207_12219 = G__12234;
chunk__12208_12220 = G__12235;
count__12209_12221 = G__12236;
i__12210_12222 = G__12237;
continue;
} else {
var map__12217_12238 = cljs.core.first.call(null,seq__12207_12232__$1);
var map__12217_12239__$1 = (((((!((map__12217_12238 == null))))?(((((map__12217_12238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12217_12238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12217_12238):map__12217_12238);
var binding_12240 = map__12217_12239__$1;
var init_12241 = cljs.core.get.call(null,map__12217_12239__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_12240)," = ",init_12241,";");


var G__12242 = cljs.core.next.call(null,seq__12207_12232__$1);
var G__12243 = null;
var G__12244 = (0);
var G__12245 = (0);
seq__12207_12219 = G__12242;
chunk__12208_12220 = G__12243;
count__12209_12221 = G__12244;
i__12210_12222 = G__12245;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym).replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__12248){
var map__12249 = p__12248;
var map__12249__$1 = (((((!((map__12249 == null))))?(((((map__12249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12249):map__12249);
var expr = map__12249__$1;
var f = cljs.core.get.call(null,map__12249__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__12249__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__12249__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__4120__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__4120__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__4120__auto__ = protocol;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = tag;
if(cljs.core.truth_(and__4120__auto____$1)){
var or__4131__auto__ = (function (){var and__4120__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__4120__auto____$2){
var and__4120__auto____$3 = protocol;
if(cljs.core.truth_(and__4120__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__4120__auto____$3;
}
} else {
return and__4120__auto____$2;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto____$2 = (function (){var or__4131__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__4120__auto____$2)){
var or__4131__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
var and__4120__auto____$3 = (!(cljs.core.set_QMARK_.call(null,tag)));
if(and__4120__auto____$3){
var and__4120__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null).call(null,tag));
if(and__4120__auto____$4){
var temp__5720__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,tag));
if(cljs.core.truth_(temp__5720__auto__)){
var ps = temp__5720__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__4120__auto____$4;
}
} else {
return and__4120__auto____$3;
}
}
} else {
return and__4120__auto____$2;
}
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
var opt_not_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = ((cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null))));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__4131__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (function (){var temp__5720__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5720__auto__)){
var ns_str = temp__5720__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__4131__auto__ = cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),cljs.analyzer.infer_tag.call(null,env,f));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote.call(null,f);
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__12251 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return (arity > mfa);
} else {
return and__4120__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12249,map__12249__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12249,map__12249__$1,expr,f,args,env){
return (function (p1__12246_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__12246_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12249,map__12249__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12249,map__12249__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12249,map__12249__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12249,map__12249__$1,expr,f,args,env){
return (function (p1__12247_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__12247_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12249,map__12249__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12249,map__12249__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__12251,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__12251,(1),null);
var env__11353__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11353__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_12254 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_12254,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_12255 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_12255,args)),(((mfa_12255 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_12255,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = js_QMARK_;
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__4120__auto__){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1));
} else {
return and__4120__auto__;
}
})())){
var fprop_12256 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_12256," ? ",f__$1,fprop_12256,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_12256," ? ",f__$1,fprop_12256,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11353__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__12257){
var map__12258 = p__12257;
var map__12258__$1 = (((((!((map__12258 == null))))?(((((map__12258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12258):map__12258);
var ctor = cljs.core.get.call(null,map__12258__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__12258__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__12258__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11353__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11353__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11353__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__12260){
var map__12261 = p__12260;
var map__12261__$1 = (((((!((map__12261 == null))))?(((((map__12261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12261):map__12261);
var target = cljs.core.get.call(null,map__12261__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__12261__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__12261__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11353__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11353__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11353__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
return cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib)," = goog.global",cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.call(null,cljs.core.name.call(null,(function (){var or__4131__auto__ = cljs.core.get.call(null,global_exports,cljs.core.symbol.call(null,lib));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,global_exports,cljs.core.name.call(null,lib));
}
})()),/\./))),";");
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__12263 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__12263__$1 = (((((!((map__12263 == null))))?(((((map__12263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12263):map__12263);
var options = cljs.core.get.call(null,map__12263__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__12263__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__12264 = options;
var map__12264__$1 = (((((!((map__12264 == null))))?(((((map__12264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12264):map__12264);
var target = cljs.core.get.call(null,map__12264__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__12264__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__12265 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__12270 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__12270__$1 = (((((!((map__12270 == null))))?(((((map__12270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12270):map__12270);
var node_libs = cljs.core.get.call(null,map__12270__$1,true);
var libs_to_load = cljs.core.get.call(null,map__12270__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__12265,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__12265,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__12272_12292 = cljs.core.seq.call(null,libs_to_load);
var chunk__12273_12293 = null;
var count__12274_12294 = (0);
var i__12275_12295 = (0);
while(true){
if((i__12275_12295 < count__12274_12294)){
var lib_12296 = cljs.core._nth.call(null,chunk__12273_12293,i__12275_12295);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_12296)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_12296),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12296),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_12296),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12296),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_12296,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12296),"');");
}

}
}
}


var G__12297 = seq__12272_12292;
var G__12298 = chunk__12273_12293;
var G__12299 = count__12274_12294;
var G__12300 = (i__12275_12295 + (1));
seq__12272_12292 = G__12297;
chunk__12273_12293 = G__12298;
count__12274_12294 = G__12299;
i__12275_12295 = G__12300;
continue;
} else {
var temp__5720__auto___12301 = cljs.core.seq.call(null,seq__12272_12292);
if(temp__5720__auto___12301){
var seq__12272_12302__$1 = temp__5720__auto___12301;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12272_12302__$1)){
var c__4550__auto___12303 = cljs.core.chunk_first.call(null,seq__12272_12302__$1);
var G__12304 = cljs.core.chunk_rest.call(null,seq__12272_12302__$1);
var G__12305 = c__4550__auto___12303;
var G__12306 = cljs.core.count.call(null,c__4550__auto___12303);
var G__12307 = (0);
seq__12272_12292 = G__12304;
chunk__12273_12293 = G__12305;
count__12274_12294 = G__12306;
i__12275_12295 = G__12307;
continue;
} else {
var lib_12308 = cljs.core.first.call(null,seq__12272_12302__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_12308)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_12308),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12308),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_12308),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12308),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_12308,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12308),"');");
}

}
}
}


var G__12309 = cljs.core.next.call(null,seq__12272_12302__$1);
var G__12310 = null;
var G__12311 = (0);
var G__12312 = (0);
seq__12272_12292 = G__12309;
chunk__12273_12293 = G__12310;
count__12274_12294 = G__12311;
i__12275_12295 = G__12312;
continue;
}
} else {
}
}
break;
}

var seq__12276_12313 = cljs.core.seq.call(null,node_libs);
var chunk__12277_12314 = null;
var count__12278_12315 = (0);
var i__12279_12316 = (0);
while(true){
if((i__12279_12316 < count__12278_12315)){
var lib_12317 = cljs.core._nth.call(null,chunk__12277_12314,i__12279_12316);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_12317)," = require('",lib_12317,"');");


var G__12318 = seq__12276_12313;
var G__12319 = chunk__12277_12314;
var G__12320 = count__12278_12315;
var G__12321 = (i__12279_12316 + (1));
seq__12276_12313 = G__12318;
chunk__12277_12314 = G__12319;
count__12278_12315 = G__12320;
i__12279_12316 = G__12321;
continue;
} else {
var temp__5720__auto___12322 = cljs.core.seq.call(null,seq__12276_12313);
if(temp__5720__auto___12322){
var seq__12276_12323__$1 = temp__5720__auto___12322;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12276_12323__$1)){
var c__4550__auto___12324 = cljs.core.chunk_first.call(null,seq__12276_12323__$1);
var G__12325 = cljs.core.chunk_rest.call(null,seq__12276_12323__$1);
var G__12326 = c__4550__auto___12324;
var G__12327 = cljs.core.count.call(null,c__4550__auto___12324);
var G__12328 = (0);
seq__12276_12313 = G__12325;
chunk__12277_12314 = G__12326;
count__12278_12315 = G__12327;
i__12279_12316 = G__12328;
continue;
} else {
var lib_12329 = cljs.core.first.call(null,seq__12276_12323__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_12329)," = require('",lib_12329,"');");


var G__12330 = cljs.core.next.call(null,seq__12276_12323__$1);
var G__12331 = null;
var G__12332 = (0);
var G__12333 = (0);
seq__12276_12313 = G__12330;
chunk__12277_12314 = G__12331;
count__12278_12315 = G__12332;
i__12279_12316 = G__12333;
continue;
}
} else {
}
}
break;
}

var seq__12280_12334 = cljs.core.seq.call(null,global_exports_libs);
var chunk__12281_12335 = null;
var count__12282_12336 = (0);
var i__12283_12337 = (0);
while(true){
if((i__12283_12337 < count__12282_12336)){
var lib_12338 = cljs.core._nth.call(null,chunk__12281_12335,i__12283_12337);
var map__12288_12339 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_12338));
var map__12288_12340__$1 = (((((!((map__12288_12339 == null))))?(((((map__12288_12339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12288_12339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12288_12339):map__12288_12339);
var global_exports_12341 = cljs.core.get.call(null,map__12288_12340__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_12341,lib_12338);


var G__12342 = seq__12280_12334;
var G__12343 = chunk__12281_12335;
var G__12344 = count__12282_12336;
var G__12345 = (i__12283_12337 + (1));
seq__12280_12334 = G__12342;
chunk__12281_12335 = G__12343;
count__12282_12336 = G__12344;
i__12283_12337 = G__12345;
continue;
} else {
var temp__5720__auto___12346 = cljs.core.seq.call(null,seq__12280_12334);
if(temp__5720__auto___12346){
var seq__12280_12347__$1 = temp__5720__auto___12346;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12280_12347__$1)){
var c__4550__auto___12348 = cljs.core.chunk_first.call(null,seq__12280_12347__$1);
var G__12349 = cljs.core.chunk_rest.call(null,seq__12280_12347__$1);
var G__12350 = c__4550__auto___12348;
var G__12351 = cljs.core.count.call(null,c__4550__auto___12348);
var G__12352 = (0);
seq__12280_12334 = G__12349;
chunk__12281_12335 = G__12350;
count__12282_12336 = G__12351;
i__12283_12337 = G__12352;
continue;
} else {
var lib_12353 = cljs.core.first.call(null,seq__12280_12347__$1);
var map__12290_12354 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_12353));
var map__12290_12355__$1 = (((((!((map__12290_12354 == null))))?(((((map__12290_12354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12290_12354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12290_12354):map__12290_12354);
var global_exports_12356 = cljs.core.get.call(null,map__12290_12355__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_12356,lib_12353);


var G__12357 = cljs.core.next.call(null,seq__12280_12347__$1);
var G__12358 = null;
var G__12359 = (0);
var G__12360 = (0);
seq__12280_12334 = G__12357;
chunk__12281_12335 = G__12358;
count__12282_12336 = G__12359;
i__12283_12337 = G__12360;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__12361){
var map__12362 = p__12361;
var map__12362__$1 = (((((!((map__12362 == null))))?(((((map__12362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12362):map__12362);
var name = cljs.core.get.call(null,map__12362__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__12362__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__12362__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__12362__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__12362__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__12362__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__12362__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__12364){
var map__12365 = p__12364;
var map__12365__$1 = (((((!((map__12365 == null))))?(((((map__12365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12365):map__12365);
var name = cljs.core.get.call(null,map__12365__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__12365__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__12365__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__12365__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__12365__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__12365__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__12365__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__12367){
var map__12368 = p__12367;
var map__12368__$1 = (((((!((map__12368 == null))))?(((((map__12368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12368):map__12368);
var t = cljs.core.get.call(null,map__12368__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__12368__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__12368__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__12368__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__12368__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__12370_12394 = cljs.core.seq.call(null,protocols);
var chunk__12371_12395 = null;
var count__12372_12396 = (0);
var i__12373_12397 = (0);
while(true){
if((i__12373_12397 < count__12372_12396)){
var protocol_12398 = cljs.core._nth.call(null,chunk__12371_12395,i__12373_12397);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_12398)),"}");


var G__12399 = seq__12370_12394;
var G__12400 = chunk__12371_12395;
var G__12401 = count__12372_12396;
var G__12402 = (i__12373_12397 + (1));
seq__12370_12394 = G__12399;
chunk__12371_12395 = G__12400;
count__12372_12396 = G__12401;
i__12373_12397 = G__12402;
continue;
} else {
var temp__5720__auto___12403 = cljs.core.seq.call(null,seq__12370_12394);
if(temp__5720__auto___12403){
var seq__12370_12404__$1 = temp__5720__auto___12403;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12370_12404__$1)){
var c__4550__auto___12405 = cljs.core.chunk_first.call(null,seq__12370_12404__$1);
var G__12406 = cljs.core.chunk_rest.call(null,seq__12370_12404__$1);
var G__12407 = c__4550__auto___12405;
var G__12408 = cljs.core.count.call(null,c__4550__auto___12405);
var G__12409 = (0);
seq__12370_12394 = G__12406;
chunk__12371_12395 = G__12407;
count__12372_12396 = G__12408;
i__12373_12397 = G__12409;
continue;
} else {
var protocol_12410 = cljs.core.first.call(null,seq__12370_12404__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_12410)),"}");


var G__12411 = cljs.core.next.call(null,seq__12370_12404__$1);
var G__12412 = null;
var G__12413 = (0);
var G__12414 = (0);
seq__12370_12394 = G__12411;
chunk__12371_12395 = G__12412;
count__12372_12396 = G__12413;
i__12373_12397 = G__12414;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__12374_12415 = cljs.core.seq.call(null,fields__$1);
var chunk__12375_12416 = null;
var count__12376_12417 = (0);
var i__12377_12418 = (0);
while(true){
if((i__12377_12418 < count__12376_12417)){
var fld_12419 = cljs.core._nth.call(null,chunk__12375_12416,i__12377_12418);
cljs.compiler.emitln.call(null,"this.",fld_12419," = ",fld_12419,";");


var G__12420 = seq__12374_12415;
var G__12421 = chunk__12375_12416;
var G__12422 = count__12376_12417;
var G__12423 = (i__12377_12418 + (1));
seq__12374_12415 = G__12420;
chunk__12375_12416 = G__12421;
count__12376_12417 = G__12422;
i__12377_12418 = G__12423;
continue;
} else {
var temp__5720__auto___12424 = cljs.core.seq.call(null,seq__12374_12415);
if(temp__5720__auto___12424){
var seq__12374_12425__$1 = temp__5720__auto___12424;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12374_12425__$1)){
var c__4550__auto___12426 = cljs.core.chunk_first.call(null,seq__12374_12425__$1);
var G__12427 = cljs.core.chunk_rest.call(null,seq__12374_12425__$1);
var G__12428 = c__4550__auto___12426;
var G__12429 = cljs.core.count.call(null,c__4550__auto___12426);
var G__12430 = (0);
seq__12374_12415 = G__12427;
chunk__12375_12416 = G__12428;
count__12376_12417 = G__12429;
i__12377_12418 = G__12430;
continue;
} else {
var fld_12431 = cljs.core.first.call(null,seq__12374_12425__$1);
cljs.compiler.emitln.call(null,"this.",fld_12431," = ",fld_12431,";");


var G__12432 = cljs.core.next.call(null,seq__12374_12425__$1);
var G__12433 = null;
var G__12434 = (0);
var G__12435 = (0);
seq__12374_12415 = G__12432;
chunk__12375_12416 = G__12433;
count__12376_12417 = G__12434;
i__12377_12418 = G__12435;
continue;
}
} else {
}
}
break;
}

var seq__12378_12436 = cljs.core.seq.call(null,pmasks);
var chunk__12379_12437 = null;
var count__12380_12438 = (0);
var i__12381_12439 = (0);
while(true){
if((i__12381_12439 < count__12380_12438)){
var vec__12388_12440 = cljs.core._nth.call(null,chunk__12379_12437,i__12381_12439);
var pno_12441 = cljs.core.nth.call(null,vec__12388_12440,(0),null);
var pmask_12442 = cljs.core.nth.call(null,vec__12388_12440,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_12441,"$ = ",pmask_12442,";");


var G__12443 = seq__12378_12436;
var G__12444 = chunk__12379_12437;
var G__12445 = count__12380_12438;
var G__12446 = (i__12381_12439 + (1));
seq__12378_12436 = G__12443;
chunk__12379_12437 = G__12444;
count__12380_12438 = G__12445;
i__12381_12439 = G__12446;
continue;
} else {
var temp__5720__auto___12447 = cljs.core.seq.call(null,seq__12378_12436);
if(temp__5720__auto___12447){
var seq__12378_12448__$1 = temp__5720__auto___12447;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12378_12448__$1)){
var c__4550__auto___12449 = cljs.core.chunk_first.call(null,seq__12378_12448__$1);
var G__12450 = cljs.core.chunk_rest.call(null,seq__12378_12448__$1);
var G__12451 = c__4550__auto___12449;
var G__12452 = cljs.core.count.call(null,c__4550__auto___12449);
var G__12453 = (0);
seq__12378_12436 = G__12450;
chunk__12379_12437 = G__12451;
count__12380_12438 = G__12452;
i__12381_12439 = G__12453;
continue;
} else {
var vec__12391_12454 = cljs.core.first.call(null,seq__12378_12448__$1);
var pno_12455 = cljs.core.nth.call(null,vec__12391_12454,(0),null);
var pmask_12456 = cljs.core.nth.call(null,vec__12391_12454,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_12455,"$ = ",pmask_12456,";");


var G__12457 = cljs.core.next.call(null,seq__12378_12448__$1);
var G__12458 = null;
var G__12459 = (0);
var G__12460 = (0);
seq__12378_12436 = G__12457;
chunk__12379_12437 = G__12458;
count__12380_12438 = G__12459;
i__12381_12439 = G__12460;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__12461){
var map__12462 = p__12461;
var map__12462__$1 = (((((!((map__12462 == null))))?(((((map__12462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12462):map__12462);
var t = cljs.core.get.call(null,map__12462__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__12462__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__12462__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__12462__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__12462__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__12464_12488 = cljs.core.seq.call(null,protocols);
var chunk__12465_12489 = null;
var count__12466_12490 = (0);
var i__12467_12491 = (0);
while(true){
if((i__12467_12491 < count__12466_12490)){
var protocol_12492 = cljs.core._nth.call(null,chunk__12465_12489,i__12467_12491);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_12492)),"}");


var G__12493 = seq__12464_12488;
var G__12494 = chunk__12465_12489;
var G__12495 = count__12466_12490;
var G__12496 = (i__12467_12491 + (1));
seq__12464_12488 = G__12493;
chunk__12465_12489 = G__12494;
count__12466_12490 = G__12495;
i__12467_12491 = G__12496;
continue;
} else {
var temp__5720__auto___12497 = cljs.core.seq.call(null,seq__12464_12488);
if(temp__5720__auto___12497){
var seq__12464_12498__$1 = temp__5720__auto___12497;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12464_12498__$1)){
var c__4550__auto___12499 = cljs.core.chunk_first.call(null,seq__12464_12498__$1);
var G__12500 = cljs.core.chunk_rest.call(null,seq__12464_12498__$1);
var G__12501 = c__4550__auto___12499;
var G__12502 = cljs.core.count.call(null,c__4550__auto___12499);
var G__12503 = (0);
seq__12464_12488 = G__12500;
chunk__12465_12489 = G__12501;
count__12466_12490 = G__12502;
i__12467_12491 = G__12503;
continue;
} else {
var protocol_12504 = cljs.core.first.call(null,seq__12464_12498__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_12504)),"}");


var G__12505 = cljs.core.next.call(null,seq__12464_12498__$1);
var G__12506 = null;
var G__12507 = (0);
var G__12508 = (0);
seq__12464_12488 = G__12505;
chunk__12465_12489 = G__12506;
count__12466_12490 = G__12507;
i__12467_12491 = G__12508;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__12468_12509 = cljs.core.seq.call(null,fields__$1);
var chunk__12469_12510 = null;
var count__12470_12511 = (0);
var i__12471_12512 = (0);
while(true){
if((i__12471_12512 < count__12470_12511)){
var fld_12513 = cljs.core._nth.call(null,chunk__12469_12510,i__12471_12512);
cljs.compiler.emitln.call(null,"this.",fld_12513," = ",fld_12513,";");


var G__12514 = seq__12468_12509;
var G__12515 = chunk__12469_12510;
var G__12516 = count__12470_12511;
var G__12517 = (i__12471_12512 + (1));
seq__12468_12509 = G__12514;
chunk__12469_12510 = G__12515;
count__12470_12511 = G__12516;
i__12471_12512 = G__12517;
continue;
} else {
var temp__5720__auto___12518 = cljs.core.seq.call(null,seq__12468_12509);
if(temp__5720__auto___12518){
var seq__12468_12519__$1 = temp__5720__auto___12518;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12468_12519__$1)){
var c__4550__auto___12520 = cljs.core.chunk_first.call(null,seq__12468_12519__$1);
var G__12521 = cljs.core.chunk_rest.call(null,seq__12468_12519__$1);
var G__12522 = c__4550__auto___12520;
var G__12523 = cljs.core.count.call(null,c__4550__auto___12520);
var G__12524 = (0);
seq__12468_12509 = G__12521;
chunk__12469_12510 = G__12522;
count__12470_12511 = G__12523;
i__12471_12512 = G__12524;
continue;
} else {
var fld_12525 = cljs.core.first.call(null,seq__12468_12519__$1);
cljs.compiler.emitln.call(null,"this.",fld_12525," = ",fld_12525,";");


var G__12526 = cljs.core.next.call(null,seq__12468_12519__$1);
var G__12527 = null;
var G__12528 = (0);
var G__12529 = (0);
seq__12468_12509 = G__12526;
chunk__12469_12510 = G__12527;
count__12470_12511 = G__12528;
i__12471_12512 = G__12529;
continue;
}
} else {
}
}
break;
}

var seq__12472_12530 = cljs.core.seq.call(null,pmasks);
var chunk__12473_12531 = null;
var count__12474_12532 = (0);
var i__12475_12533 = (0);
while(true){
if((i__12475_12533 < count__12474_12532)){
var vec__12482_12534 = cljs.core._nth.call(null,chunk__12473_12531,i__12475_12533);
var pno_12535 = cljs.core.nth.call(null,vec__12482_12534,(0),null);
var pmask_12536 = cljs.core.nth.call(null,vec__12482_12534,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_12535,"$ = ",pmask_12536,";");


var G__12537 = seq__12472_12530;
var G__12538 = chunk__12473_12531;
var G__12539 = count__12474_12532;
var G__12540 = (i__12475_12533 + (1));
seq__12472_12530 = G__12537;
chunk__12473_12531 = G__12538;
count__12474_12532 = G__12539;
i__12475_12533 = G__12540;
continue;
} else {
var temp__5720__auto___12541 = cljs.core.seq.call(null,seq__12472_12530);
if(temp__5720__auto___12541){
var seq__12472_12542__$1 = temp__5720__auto___12541;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12472_12542__$1)){
var c__4550__auto___12543 = cljs.core.chunk_first.call(null,seq__12472_12542__$1);
var G__12544 = cljs.core.chunk_rest.call(null,seq__12472_12542__$1);
var G__12545 = c__4550__auto___12543;
var G__12546 = cljs.core.count.call(null,c__4550__auto___12543);
var G__12547 = (0);
seq__12472_12530 = G__12544;
chunk__12473_12531 = G__12545;
count__12474_12532 = G__12546;
i__12475_12533 = G__12547;
continue;
} else {
var vec__12485_12548 = cljs.core.first.call(null,seq__12472_12542__$1);
var pno_12549 = cljs.core.nth.call(null,vec__12485_12548,(0),null);
var pmask_12550 = cljs.core.nth.call(null,vec__12485_12548,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_12549,"$ = ",pmask_12550,";");


var G__12551 = cljs.core.next.call(null,seq__12472_12542__$1);
var G__12552 = null;
var G__12553 = (0);
var G__12554 = (0);
seq__12472_12530 = G__12551;
chunk__12473_12531 = G__12552;
count__12474_12532 = G__12553;
i__12475_12533 = G__12554;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__12555){
var map__12556 = p__12555;
var map__12556__$1 = (((((!((map__12556 == null))))?(((((map__12556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12556):map__12556);
var target = cljs.core.get.call(null,map__12556__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__12556__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__12556__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__12556__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__12556__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11353__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11353__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11353__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"host-field","host-field",-72662140),(function (ast){
return cljs.compiler.emit_dot.call(null,ast);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"host-call","host-call",1059629755),(function (ast){
return cljs.compiler.emit_dot.call(null,ast);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__12558){
var map__12559 = p__12558;
var map__12559__$1 = (((((!((map__12559 == null))))?(((((map__12559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12559):map__12559);
var op = cljs.core.get.call(null,map__12559__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__12559__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__12559__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__12559__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__12559__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4120__auto__ = code;
if(cljs.core.truth_(and__4120__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4120__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__11353__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11353__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11353__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__12565 = cljs.core.seq.call(null,table);
var chunk__12566 = null;
var count__12567 = (0);
var i__12568 = (0);
while(true){
if((i__12568 < count__12567)){
var vec__12575 = cljs.core._nth.call(null,chunk__12566,i__12568);
var sym = cljs.core.nth.call(null,vec__12575,(0),null);
var value = cljs.core.nth.call(null,vec__12575,(1),null);
var ns_12581 = cljs.core.namespace.call(null,sym);
var name_12582 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__12583 = seq__12565;
var G__12584 = chunk__12566;
var G__12585 = count__12567;
var G__12586 = (i__12568 + (1));
seq__12565 = G__12583;
chunk__12566 = G__12584;
count__12567 = G__12585;
i__12568 = G__12586;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__12565);
if(temp__5720__auto__){
var seq__12565__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12565__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__12565__$1);
var G__12587 = cljs.core.chunk_rest.call(null,seq__12565__$1);
var G__12588 = c__4550__auto__;
var G__12589 = cljs.core.count.call(null,c__4550__auto__);
var G__12590 = (0);
seq__12565 = G__12587;
chunk__12566 = G__12588;
count__12567 = G__12589;
i__12568 = G__12590;
continue;
} else {
var vec__12578 = cljs.core.first.call(null,seq__12565__$1);
var sym = cljs.core.nth.call(null,vec__12578,(0),null);
var value = cljs.core.nth.call(null,vec__12578,(1),null);
var ns_12591 = cljs.core.namespace.call(null,sym);
var name_12592 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__12593 = cljs.core.next.call(null,seq__12565__$1);
var G__12594 = null;
var G__12595 = (0);
var G__12596 = (0);
seq__12565 = G__12593;
chunk__12566 = G__12594;
count__12567 = G__12595;
i__12568 = G__12596;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__12598 = arguments.length;
switch (G__12598) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.call(null,cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword("cljs.analyzer","externs","cljs.analyzer/externs",893359239).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)):null));
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq.call(null,cljs.core.keys.call(null,externs));
while(true){
if(ks){
var k_12603 = cljs.core.first.call(null,ks);
var vec__12599_12604 = cljs.core.conj.call(null,prefix,k_12603);
var top_12605 = cljs.core.nth.call(null,vec__12599_12604,(0),null);
var prefix_SINGLEQUOTE__12606 = vec__12599_12604;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_12603)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__12606) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_12605)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_12605)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__12606)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_12605);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__12606)),";");
}
} else {
}

var m_12607 = cljs.core.get.call(null,externs,k_12603);
if(cljs.core.empty_QMARK_.call(null,m_12607)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__12606,m_12607,top_level,known_externs);
}

var G__12608 = cljs.core.next.call(null,ks);
ks = G__12608;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
