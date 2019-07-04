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
var map__6619 = s;
var map__6619__$1 = (((((!((map__6619 == null))))?(((((map__6619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6619):map__6619);
var name = cljs.core.get.call(null,map__6619__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__6619__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__6622 = info;
var map__6623 = G__6622;
var map__6623__$1 = (((((!((map__6623 == null))))?(((((map__6623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6623):map__6623);
var shadow = cljs.core.get.call(null,map__6623__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__6622__$1 = G__6622;
while(true){
var d__$2 = d__$1;
var map__6627 = G__6622__$1;
var map__6627__$1 = (((((!((map__6627 == null))))?(((((map__6627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6627):map__6627);
var shadow__$1 = cljs.core.get.call(null,map__6627__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__6629 = (d__$2 + (1));
var G__6630 = shadow__$1;
d__$1 = G__6629;
G__6622__$1 = G__6630;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__6631){
var map__6632 = p__6631;
var map__6632__$1 = (((((!((map__6632 == null))))?(((((map__6632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6632):map__6632);
var name_var = map__6632__$1;
var name = cljs.core.get.call(null,map__6632__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__6632__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__6634 = info;
var map__6634__$1 = (((((!((map__6634 == null))))?(((((map__6634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6634):map__6634);
var ns = cljs.core.get.call(null,map__6634__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__6634__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__6637 = arguments.length;
switch (G__6637) {
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
var G__6639 = cp;
switch (G__6639) {
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
var seq__6641_6645 = cljs.core.seq.call(null,s);
var chunk__6642_6646 = null;
var count__6643_6647 = (0);
var i__6644_6648 = (0);
while(true){
if((i__6644_6648 < count__6643_6647)){
var c_6649 = cljs.core._nth.call(null,chunk__6642_6646,i__6644_6648);
sb.append(cljs.compiler.escape_char.call(null,c_6649));


var G__6650 = seq__6641_6645;
var G__6651 = chunk__6642_6646;
var G__6652 = count__6643_6647;
var G__6653 = (i__6644_6648 + (1));
seq__6641_6645 = G__6650;
chunk__6642_6646 = G__6651;
count__6643_6647 = G__6652;
i__6644_6648 = G__6653;
continue;
} else {
var temp__5720__auto___6654 = cljs.core.seq.call(null,seq__6641_6645);
if(temp__5720__auto___6654){
var seq__6641_6655__$1 = temp__5720__auto___6654;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6641_6655__$1)){
var c__4550__auto___6656 = cljs.core.chunk_first.call(null,seq__6641_6655__$1);
var G__6657 = cljs.core.chunk_rest.call(null,seq__6641_6655__$1);
var G__6658 = c__4550__auto___6656;
var G__6659 = cljs.core.count.call(null,c__4550__auto___6656);
var G__6660 = (0);
seq__6641_6645 = G__6657;
chunk__6642_6646 = G__6658;
count__6643_6647 = G__6659;
i__6644_6648 = G__6660;
continue;
} else {
var c_6661 = cljs.core.first.call(null,seq__6641_6655__$1);
sb.append(cljs.compiler.escape_char.call(null,c_6661));


var G__6662 = cljs.core.next.call(null,seq__6641_6655__$1);
var G__6663 = null;
var G__6664 = (0);
var G__6665 = (0);
seq__6641_6645 = G__6662;
chunk__6642_6646 = G__6663;
count__6643_6647 = G__6664;
i__6644_6648 = G__6665;
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
var map__6666_6671 = ast;
var map__6666_6672__$1 = (((((!((map__6666_6671 == null))))?(((((map__6666_6671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6666_6671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6666_6671):map__6666_6671);
var env_6673 = cljs.core.get.call(null,map__6666_6672__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_6673))){
var map__6668_6674 = env_6673;
var map__6668_6675__$1 = (((((!((map__6668_6674 == null))))?(((((map__6668_6674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6668_6674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6668_6674):map__6668_6674);
var line_6676 = cljs.core.get.call(null,map__6668_6675__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_6677 = cljs.core.get.call(null,map__6668_6675__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__6668_6674,map__6668_6675__$1,line_6676,column_6677,map__6666_6671,map__6666_6672__$1,env_6673){
return (function (m){
var minfo = (function (){var G__6670 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__6670,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__6670;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_6676 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__6668_6674,map__6668_6675__$1,line_6676,column_6677,map__6666_6671,map__6666_6672__$1,env_6673){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_6677)?(column_6677 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__6668_6674,map__6668_6675__$1,line_6676,column_6677,map__6666_6671,map__6666_6672__$1,env_6673){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__6668_6674,map__6668_6675__$1,line_6676,column_6677,map__6666_6671,map__6666_6672__$1,env_6673))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__6668_6674,map__6668_6675__$1,line_6676,column_6677,map__6666_6671,map__6666_6672__$1,env_6673))
,cljs.core.sorted_map.call(null)));
});})(map__6668_6674,map__6668_6675__$1,line_6676,column_6677,map__6666_6671,map__6666_6672__$1,env_6673))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__6686 = arguments.length;
switch (G__6686) {
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
var len__4730__auto___6693 = arguments.length;
var i__4731__auto___6694 = (0);
while(true){
if((i__4731__auto___6694 < len__4730__auto___6693)){
args_arr__4751__auto__.push((arguments[i__4731__auto___6694]));

var G__6695 = (i__4731__auto___6694 + (1));
i__4731__auto___6694 = G__6695;
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
var s_6696 = (function (){var G__6687 = a;
if((!(typeof a === 'string'))){
return G__6687.toString();
} else {
return G__6687;
}
})();
var temp__5724__auto___6697 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5724__auto___6697 == null)){
} else {
var sm_data_6698 = temp__5724__auto___6697;
cljs.core.swap_BANG_.call(null,sm_data_6698,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_6698,temp__5724__auto___6697,s_6696){
return (function (p1__6678_SHARP_){
return (p1__6678_SHARP_ + s_6696.length);
});})(sm_data_6698,temp__5724__auto___6697,s_6696))
);
}

cljs.core.print.call(null,s_6696);

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

var seq__6688 = cljs.core.seq.call(null,xs);
var chunk__6689 = null;
var count__6690 = (0);
var i__6691 = (0);
while(true){
if((i__6691 < count__6690)){
var x = cljs.core._nth.call(null,chunk__6689,i__6691);
cljs.compiler.emits.call(null,x);


var G__6699 = seq__6688;
var G__6700 = chunk__6689;
var G__6701 = count__6690;
var G__6702 = (i__6691 + (1));
seq__6688 = G__6699;
chunk__6689 = G__6700;
count__6690 = G__6701;
i__6691 = G__6702;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__6688);
if(temp__5720__auto__){
var seq__6688__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6688__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__6688__$1);
var G__6703 = cljs.core.chunk_rest.call(null,seq__6688__$1);
var G__6704 = c__4550__auto__;
var G__6705 = cljs.core.count.call(null,c__4550__auto__);
var G__6706 = (0);
seq__6688 = G__6703;
chunk__6689 = G__6704;
count__6690 = G__6705;
i__6691 = G__6706;
continue;
} else {
var x = cljs.core.first.call(null,seq__6688__$1);
cljs.compiler.emits.call(null,x);


var G__6707 = cljs.core.next.call(null,seq__6688__$1);
var G__6708 = null;
var G__6709 = (0);
var G__6710 = (0);
seq__6688 = G__6707;
chunk__6689 = G__6708;
count__6690 = G__6709;
i__6691 = G__6710;
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
cljs.compiler.emits.cljs$lang$applyTo = (function (seq6680){
var G__6681 = cljs.core.first.call(null,seq6680);
var seq6680__$1 = cljs.core.next.call(null,seq6680);
var G__6682 = cljs.core.first.call(null,seq6680__$1);
var seq6680__$2 = cljs.core.next.call(null,seq6680__$1);
var G__6683 = cljs.core.first.call(null,seq6680__$2);
var seq6680__$3 = cljs.core.next.call(null,seq6680__$2);
var G__6684 = cljs.core.first.call(null,seq6680__$3);
var seq6680__$4 = cljs.core.next.call(null,seq6680__$3);
var G__6685 = cljs.core.first.call(null,seq6680__$4);
var seq6680__$5 = cljs.core.next.call(null,seq6680__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6681,G__6682,G__6683,G__6684,G__6685,seq6680__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__6711){
var map__6712 = p__6711;
var map__6712__$1 = (((((!((map__6712 == null))))?(((((map__6712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6712):map__6712);
var m = map__6712__$1;
var gen_line = cljs.core.get.call(null,map__6712__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__6721 = arguments.length;
switch (G__6721) {
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
var len__4730__auto___6727 = arguments.length;
var i__4731__auto___6728 = (0);
while(true){
if((i__4731__auto___6728 < len__4730__auto___6727)){
args_arr__4751__auto__.push((arguments[i__4731__auto___6728]));

var G__6729 = (i__4731__auto___6728 + (1));
i__4731__auto___6728 = G__6729;
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

var seq__6722_6730 = cljs.core.seq.call(null,xs);
var chunk__6723_6731 = null;
var count__6724_6732 = (0);
var i__6725_6733 = (0);
while(true){
if((i__6725_6733 < count__6724_6732)){
var x_6734 = cljs.core._nth.call(null,chunk__6723_6731,i__6725_6733);
cljs.compiler.emits.call(null,x_6734);


var G__6735 = seq__6722_6730;
var G__6736 = chunk__6723_6731;
var G__6737 = count__6724_6732;
var G__6738 = (i__6725_6733 + (1));
seq__6722_6730 = G__6735;
chunk__6723_6731 = G__6736;
count__6724_6732 = G__6737;
i__6725_6733 = G__6738;
continue;
} else {
var temp__5720__auto___6739 = cljs.core.seq.call(null,seq__6722_6730);
if(temp__5720__auto___6739){
var seq__6722_6740__$1 = temp__5720__auto___6739;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6722_6740__$1)){
var c__4550__auto___6741 = cljs.core.chunk_first.call(null,seq__6722_6740__$1);
var G__6742 = cljs.core.chunk_rest.call(null,seq__6722_6740__$1);
var G__6743 = c__4550__auto___6741;
var G__6744 = cljs.core.count.call(null,c__4550__auto___6741);
var G__6745 = (0);
seq__6722_6730 = G__6742;
chunk__6723_6731 = G__6743;
count__6724_6732 = G__6744;
i__6725_6733 = G__6745;
continue;
} else {
var x_6746 = cljs.core.first.call(null,seq__6722_6740__$1);
cljs.compiler.emits.call(null,x_6746);


var G__6747 = cljs.core.next.call(null,seq__6722_6740__$1);
var G__6748 = null;
var G__6749 = (0);
var G__6750 = (0);
seq__6722_6730 = G__6747;
chunk__6723_6731 = G__6748;
count__6724_6732 = G__6749;
i__6725_6733 = G__6750;
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
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq6715){
var G__6716 = cljs.core.first.call(null,seq6715);
var seq6715__$1 = cljs.core.next.call(null,seq6715);
var G__6717 = cljs.core.first.call(null,seq6715__$1);
var seq6715__$2 = cljs.core.next.call(null,seq6715__$1);
var G__6718 = cljs.core.first.call(null,seq6715__$2);
var seq6715__$3 = cljs.core.next.call(null,seq6715__$2);
var G__6719 = cljs.core.first.call(null,seq6715__$3);
var seq6715__$4 = cljs.core.next.call(null,seq6715__$3);
var G__6720 = cljs.core.first.call(null,seq6715__$4);
var seq6715__$5 = cljs.core.next.call(null,seq6715__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6716,G__6717,G__6718,G__6719,G__6720,seq6715__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__6751_6755 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__6752_6756 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__6753_6757 = true;
var _STAR_print_fn_STAR__temp_val__6754_6758 = ((function (_STAR_print_newline_STAR__orig_val__6751_6755,_STAR_print_fn_STAR__orig_val__6752_6756,_STAR_print_newline_STAR__temp_val__6753_6757,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__6751_6755,_STAR_print_fn_STAR__orig_val__6752_6756,_STAR_print_newline_STAR__temp_val__6753_6757,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__6753_6757;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__6754_6758;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__6752_6756;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__6751_6755;
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
var vec__6759 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__6759,(0),null);
var name = cljs.core.nth.call(null,vec__6759,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,((function (vec__6759,ns,name){
return (function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
});})(vec__6759,ns,name))
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
var vec__6762 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__6762,(0),null);
var flags = cljs.core.nth.call(null,vec__6762,(1),null);
var pattern = cljs.core.nth.call(null,vec__6762,(2),null);
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
return (function (p1__6765_SHARP_){
return ((function (items){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__6765_SHARP_);
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
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__6767){
var map__6768 = p__6767;
var map__6768__$1 = (((((!((map__6768 == null))))?(((((map__6768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6768):map__6768);
var ast = map__6768__$1;
var info = cljs.core.get.call(null,map__6768__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__6768__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__6768__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5718__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5718__auto__)){
var const_expr = temp__5718__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__6770 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__6770__$1 = (((((!((map__6770 == null))))?(((((map__6770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6770):map__6770);
var cenv = map__6770__$1;
var options = cljs.core.get.call(null,map__6770__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__6772 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4120__auto__;
}
})())){
return clojure.set.difference.call(null,G__6772,cljs.analyzer.es5_allowed);
} else {
return G__6772;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4131__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__6773 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__6773,reserved);
} else {
return G__6773;
}
})();
var env__6611__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6611__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__6774_6775 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__6774_6776__$1 = (((G__6774_6775 instanceof cljs.core.Keyword))?G__6774_6775.fqn:null);
switch (G__6774_6776__$1) {
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6611__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__6778){
var map__6779 = p__6778;
var map__6779__$1 = (((((!((map__6779 == null))))?(((((map__6779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6779):map__6779);
var arg = map__6779__$1;
var env = cljs.core.get.call(null,map__6779__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__6779__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__6779__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__6779__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__6781 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__6781__$1 = (((((!((map__6781 == null))))?(((((map__6781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6781):map__6781);
var name = cljs.core.get.call(null,map__6781__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__6611__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6611__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6611__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__6783){
var map__6784 = p__6783;
var map__6784__$1 = (((((!((map__6784 == null))))?(((((map__6784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6784):map__6784);
var expr = cljs.core.get.call(null,map__6784__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__6784__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__6784__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6611__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6611__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6611__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,((function (keys__$1){
return (function (p1__6786_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__6786_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__6787){
var map__6788 = p__6787;
var map__6788__$1 = (((((!((map__6788 == null))))?(((((map__6788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6788):map__6788);
var env = cljs.core.get.call(null,map__6788__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__6788__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__6788__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__6611__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6611__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6611__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__6790){
var map__6791 = p__6790;
var map__6791__$1 = (((((!((map__6791 == null))))?(((((map__6791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6791):map__6791);
var items = cljs.core.get.call(null,map__6791__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__6791__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6611__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6611__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6611__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,((function (items__$1){
return (function (p1__6793_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__6793_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__6794){
var map__6795 = p__6794;
var map__6795__$1 = (((((!((map__6795 == null))))?(((((map__6795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6795):map__6795);
var items = cljs.core.get.call(null,map__6795__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__6795__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6611__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6611__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6611__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5720__auto___6819 = cljs.core.seq.call(null,items);
if(temp__5720__auto___6819){
var items_6820__$1 = temp__5720__auto___6819;
var vec__6797_6821 = items_6820__$1;
var seq__6798_6822 = cljs.core.seq.call(null,vec__6797_6821);
var first__6799_6823 = cljs.core.first.call(null,seq__6798_6822);
var seq__6798_6824__$1 = cljs.core.next.call(null,seq__6798_6822);
var vec__6800_6825 = first__6799_6823;
var k_6826 = cljs.core.nth.call(null,vec__6800_6825,(0),null);
var v_6827 = cljs.core.nth.call(null,vec__6800_6825,(1),null);
var r_6828 = seq__6798_6824__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_6826),"\": ",emit_js_object_val.call(null,v_6827));

var seq__6803_6829 = cljs.core.seq.call(null,r_6828);
var chunk__6804_6830 = null;
var count__6805_6831 = (0);
var i__6806_6832 = (0);
while(true){
if((i__6806_6832 < count__6805_6831)){
var vec__6813_6833 = cljs.core._nth.call(null,chunk__6804_6830,i__6806_6832);
var k_6834__$1 = cljs.core.nth.call(null,vec__6813_6833,(0),null);
var v_6835__$1 = cljs.core.nth.call(null,vec__6813_6833,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_6834__$1),"\": ",emit_js_object_val.call(null,v_6835__$1));


var G__6836 = seq__6803_6829;
var G__6837 = chunk__6804_6830;
var G__6838 = count__6805_6831;
var G__6839 = (i__6806_6832 + (1));
seq__6803_6829 = G__6836;
chunk__6804_6830 = G__6837;
count__6805_6831 = G__6838;
i__6806_6832 = G__6839;
continue;
} else {
var temp__5720__auto___6840__$1 = cljs.core.seq.call(null,seq__6803_6829);
if(temp__5720__auto___6840__$1){
var seq__6803_6841__$1 = temp__5720__auto___6840__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6803_6841__$1)){
var c__4550__auto___6842 = cljs.core.chunk_first.call(null,seq__6803_6841__$1);
var G__6843 = cljs.core.chunk_rest.call(null,seq__6803_6841__$1);
var G__6844 = c__4550__auto___6842;
var G__6845 = cljs.core.count.call(null,c__4550__auto___6842);
var G__6846 = (0);
seq__6803_6829 = G__6843;
chunk__6804_6830 = G__6844;
count__6805_6831 = G__6845;
i__6806_6832 = G__6846;
continue;
} else {
var vec__6816_6847 = cljs.core.first.call(null,seq__6803_6841__$1);
var k_6848__$1 = cljs.core.nth.call(null,vec__6816_6847,(0),null);
var v_6849__$1 = cljs.core.nth.call(null,vec__6816_6847,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_6848__$1),"\": ",emit_js_object_val.call(null,v_6849__$1));


var G__6850 = cljs.core.next.call(null,seq__6803_6841__$1);
var G__6851 = null;
var G__6852 = (0);
var G__6853 = (0);
seq__6803_6829 = G__6850;
chunk__6804_6830 = G__6851;
count__6805_6831 = G__6852;
i__6806_6832 = G__6853;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__6854){
var map__6855 = p__6854;
var map__6855__$1 = (((((!((map__6855 == null))))?(((((map__6855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6855):map__6855);
var keys = cljs.core.get.call(null,map__6855__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__6855__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__6855__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6611__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6611__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6611__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__6857){
var map__6858 = p__6857;
var map__6858__$1 = (((((!((map__6858 == null))))?(((((map__6858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6858):map__6858);
var items = cljs.core.get.call(null,map__6858__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__6858__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6611__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6611__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6611__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__6860){
var map__6861 = p__6860;
var map__6861__$1 = (((((!((map__6861 == null))))?(((((map__6861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6861):map__6861);
var expr = cljs.core.get.call(null,map__6861__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__6863){
var map__6864 = p__6863;
var map__6864__$1 = (((((!((map__6864 == null))))?(((((map__6864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6864):map__6864);
var form = cljs.core.get.call(null,map__6864__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__6864__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__6611__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6611__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6611__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__6866 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__6866__$1 = (((((!((map__6866 == null))))?(((((map__6866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6866):map__6866);
var op = cljs.core.get.call(null,map__6866__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__6866__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__6866__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__6868 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__6868__$1 = (((((!((map__6868 == null))))?(((((map__6868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6868):map__6868);
var op = cljs.core.get.call(null,map__6868__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__6868__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__6868__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__6870){
var map__6871 = p__6870;
var map__6871__$1 = (((((!((map__6871 == null))))?(((((map__6871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6871):map__6871);
var test = cljs.core.get.call(null,map__6871__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__6871__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__6871__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__6871__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__6871__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__6873){
var map__6874 = p__6873;
var map__6874__$1 = (((((!((map__6874 == null))))?(((((map__6874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6874):map__6874);
var v = cljs.core.get.call(null,map__6874__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__6874__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__6874__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__6874__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__6876_6912 = cljs.core.seq.call(null,nodes);
var chunk__6877_6913 = null;
var count__6878_6914 = (0);
var i__6879_6915 = (0);
while(true){
if((i__6879_6915 < count__6878_6914)){
var map__6896_6916 = cljs.core._nth.call(null,chunk__6877_6913,i__6879_6915);
var map__6896_6917__$1 = (((((!((map__6896_6916 == null))))?(((((map__6896_6916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6896_6916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6896_6916):map__6896_6916);
var ts_6918 = cljs.core.get.call(null,map__6896_6917__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__6897_6919 = cljs.core.get.call(null,map__6896_6917__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__6897_6920__$1 = (((((!((map__6897_6919 == null))))?(((((map__6897_6919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6897_6919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6897_6919):map__6897_6919);
var then_6921 = cljs.core.get.call(null,map__6897_6920__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__6900_6922 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_6918));
var chunk__6901_6923 = null;
var count__6902_6924 = (0);
var i__6903_6925 = (0);
while(true){
if((i__6903_6925 < count__6902_6924)){
var test_6926 = cljs.core._nth.call(null,chunk__6901_6923,i__6903_6925);
cljs.compiler.emitln.call(null,"case ",test_6926,":");


var G__6927 = seq__6900_6922;
var G__6928 = chunk__6901_6923;
var G__6929 = count__6902_6924;
var G__6930 = (i__6903_6925 + (1));
seq__6900_6922 = G__6927;
chunk__6901_6923 = G__6928;
count__6902_6924 = G__6929;
i__6903_6925 = G__6930;
continue;
} else {
var temp__5720__auto___6931 = cljs.core.seq.call(null,seq__6900_6922);
if(temp__5720__auto___6931){
var seq__6900_6932__$1 = temp__5720__auto___6931;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6900_6932__$1)){
var c__4550__auto___6933 = cljs.core.chunk_first.call(null,seq__6900_6932__$1);
var G__6934 = cljs.core.chunk_rest.call(null,seq__6900_6932__$1);
var G__6935 = c__4550__auto___6933;
var G__6936 = cljs.core.count.call(null,c__4550__auto___6933);
var G__6937 = (0);
seq__6900_6922 = G__6934;
chunk__6901_6923 = G__6935;
count__6902_6924 = G__6936;
i__6903_6925 = G__6937;
continue;
} else {
var test_6938 = cljs.core.first.call(null,seq__6900_6932__$1);
cljs.compiler.emitln.call(null,"case ",test_6938,":");


var G__6939 = cljs.core.next.call(null,seq__6900_6932__$1);
var G__6940 = null;
var G__6941 = (0);
var G__6942 = (0);
seq__6900_6922 = G__6939;
chunk__6901_6923 = G__6940;
count__6902_6924 = G__6941;
i__6903_6925 = G__6942;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_6921);
} else {
cljs.compiler.emitln.call(null,then_6921);
}

cljs.compiler.emitln.call(null,"break;");


var G__6943 = seq__6876_6912;
var G__6944 = chunk__6877_6913;
var G__6945 = count__6878_6914;
var G__6946 = (i__6879_6915 + (1));
seq__6876_6912 = G__6943;
chunk__6877_6913 = G__6944;
count__6878_6914 = G__6945;
i__6879_6915 = G__6946;
continue;
} else {
var temp__5720__auto___6947 = cljs.core.seq.call(null,seq__6876_6912);
if(temp__5720__auto___6947){
var seq__6876_6948__$1 = temp__5720__auto___6947;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6876_6948__$1)){
var c__4550__auto___6949 = cljs.core.chunk_first.call(null,seq__6876_6948__$1);
var G__6950 = cljs.core.chunk_rest.call(null,seq__6876_6948__$1);
var G__6951 = c__4550__auto___6949;
var G__6952 = cljs.core.count.call(null,c__4550__auto___6949);
var G__6953 = (0);
seq__6876_6912 = G__6950;
chunk__6877_6913 = G__6951;
count__6878_6914 = G__6952;
i__6879_6915 = G__6953;
continue;
} else {
var map__6904_6954 = cljs.core.first.call(null,seq__6876_6948__$1);
var map__6904_6955__$1 = (((((!((map__6904_6954 == null))))?(((((map__6904_6954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6904_6954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6904_6954):map__6904_6954);
var ts_6956 = cljs.core.get.call(null,map__6904_6955__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__6905_6957 = cljs.core.get.call(null,map__6904_6955__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__6905_6958__$1 = (((((!((map__6905_6957 == null))))?(((((map__6905_6957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6905_6957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6905_6957):map__6905_6957);
var then_6959 = cljs.core.get.call(null,map__6905_6958__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__6908_6960 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_6956));
var chunk__6909_6961 = null;
var count__6910_6962 = (0);
var i__6911_6963 = (0);
while(true){
if((i__6911_6963 < count__6910_6962)){
var test_6964 = cljs.core._nth.call(null,chunk__6909_6961,i__6911_6963);
cljs.compiler.emitln.call(null,"case ",test_6964,":");


var G__6965 = seq__6908_6960;
var G__6966 = chunk__6909_6961;
var G__6967 = count__6910_6962;
var G__6968 = (i__6911_6963 + (1));
seq__6908_6960 = G__6965;
chunk__6909_6961 = G__6966;
count__6910_6962 = G__6967;
i__6911_6963 = G__6968;
continue;
} else {
var temp__5720__auto___6969__$1 = cljs.core.seq.call(null,seq__6908_6960);
if(temp__5720__auto___6969__$1){
var seq__6908_6970__$1 = temp__5720__auto___6969__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6908_6970__$1)){
var c__4550__auto___6971 = cljs.core.chunk_first.call(null,seq__6908_6970__$1);
var G__6972 = cljs.core.chunk_rest.call(null,seq__6908_6970__$1);
var G__6973 = c__4550__auto___6971;
var G__6974 = cljs.core.count.call(null,c__4550__auto___6971);
var G__6975 = (0);
seq__6908_6960 = G__6972;
chunk__6909_6961 = G__6973;
count__6910_6962 = G__6974;
i__6911_6963 = G__6975;
continue;
} else {
var test_6976 = cljs.core.first.call(null,seq__6908_6970__$1);
cljs.compiler.emitln.call(null,"case ",test_6976,":");


var G__6977 = cljs.core.next.call(null,seq__6908_6970__$1);
var G__6978 = null;
var G__6979 = (0);
var G__6980 = (0);
seq__6908_6960 = G__6977;
chunk__6909_6961 = G__6978;
count__6910_6962 = G__6979;
i__6911_6963 = G__6980;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_6959);
} else {
cljs.compiler.emitln.call(null,then_6959);
}

cljs.compiler.emitln.call(null,"break;");


var G__6981 = cljs.core.next.call(null,seq__6876_6948__$1);
var G__6982 = null;
var G__6983 = (0);
var G__6984 = (0);
seq__6876_6912 = G__6981;
chunk__6877_6913 = G__6982;
count__6878_6914 = G__6983;
i__6879_6915 = G__6984;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__6985){
var map__6986 = p__6985;
var map__6986__$1 = (((((!((map__6986 == null))))?(((((map__6986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6986):map__6986);
var throw$ = cljs.core.get.call(null,map__6986__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__6986__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__6989 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__6989,(0),null);
var rstr = cljs.core.nth.call(null,vec__6989,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__6989,fstr,rstr,ret_t,axstr){
return (function (p1__6988_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__6988_SHARP_);
});})(idx,vec__6989,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__6992 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__6992,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__6992;
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
return (function (p1__6993_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__6993_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__6994 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__6995 = cljs.core.seq.call(null,vec__6994);
var first__6996 = cljs.core.first.call(null,seq__6995);
var seq__6995__$1 = cljs.core.next.call(null,seq__6995);
var p = first__6996;
var first__6996__$1 = cljs.core.first.call(null,seq__6995__$1);
var seq__6995__$2 = cljs.core.next.call(null,seq__6995__$1);
var ts = first__6996__$1;
var first__6996__$2 = cljs.core.first.call(null,seq__6995__$2);
var seq__6995__$3 = cljs.core.next.call(null,seq__6995__$2);
var n = first__6996__$2;
var xs = seq__6995__$3;
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
var vec__6997 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__6998 = cljs.core.seq.call(null,vec__6997);
var first__6999 = cljs.core.first.call(null,seq__6998);
var seq__6998__$1 = cljs.core.next.call(null,seq__6998);
var p = first__6999;
var first__6999__$1 = cljs.core.first.call(null,seq__6998__$1);
var seq__6998__$2 = cljs.core.next.call(null,seq__6998__$1);
var ts = first__6999__$1;
var xs = seq__6998__$2;
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
var G__7002 = arguments.length;
switch (G__7002) {
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
var vec__7010 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__7000_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__7000_SHARP_);
} else {
return p1__7000_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__7011 = cljs.core.seq.call(null,vec__7010);
var first__7012 = cljs.core.first.call(null,seq__7011);
var seq__7011__$1 = cljs.core.next.call(null,seq__7011);
var x = first__7012;
var ys = seq__7011__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__7013 = cljs.core.seq.call(null,ys);
var chunk__7014 = null;
var count__7015 = (0);
var i__7016 = (0);
while(true){
if((i__7016 < count__7015)){
var next_line = cljs.core._nth.call(null,chunk__7014,i__7016);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__7022 = seq__7013;
var G__7023 = chunk__7014;
var G__7024 = count__7015;
var G__7025 = (i__7016 + (1));
seq__7013 = G__7022;
chunk__7014 = G__7023;
count__7015 = G__7024;
i__7016 = G__7025;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__7013);
if(temp__5720__auto__){
var seq__7013__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7013__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__7013__$1);
var G__7026 = cljs.core.chunk_rest.call(null,seq__7013__$1);
var G__7027 = c__4550__auto__;
var G__7028 = cljs.core.count.call(null,c__4550__auto__);
var G__7029 = (0);
seq__7013 = G__7026;
chunk__7014 = G__7027;
count__7015 = G__7028;
i__7016 = G__7029;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__7013__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__7030 = cljs.core.next.call(null,seq__7013__$1);
var G__7031 = null;
var G__7032 = (0);
var G__7033 = (0);
seq__7013 = G__7030;
chunk__7014 = G__7031;
count__7015 = G__7032;
i__7016 = G__7033;
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

var seq__7017_7034 = cljs.core.seq.call(null,docs__$2);
var chunk__7018_7035 = null;
var count__7019_7036 = (0);
var i__7020_7037 = (0);
while(true){
if((i__7020_7037 < count__7019_7036)){
var e_7038 = cljs.core._nth.call(null,chunk__7018_7035,i__7020_7037);
if(cljs.core.truth_(e_7038)){
print_comment_lines.call(null,e_7038);
} else {
}


var G__7039 = seq__7017_7034;
var G__7040 = chunk__7018_7035;
var G__7041 = count__7019_7036;
var G__7042 = (i__7020_7037 + (1));
seq__7017_7034 = G__7039;
chunk__7018_7035 = G__7040;
count__7019_7036 = G__7041;
i__7020_7037 = G__7042;
continue;
} else {
var temp__5720__auto___7043 = cljs.core.seq.call(null,seq__7017_7034);
if(temp__5720__auto___7043){
var seq__7017_7044__$1 = temp__5720__auto___7043;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7017_7044__$1)){
var c__4550__auto___7045 = cljs.core.chunk_first.call(null,seq__7017_7044__$1);
var G__7046 = cljs.core.chunk_rest.call(null,seq__7017_7044__$1);
var G__7047 = c__4550__auto___7045;
var G__7048 = cljs.core.count.call(null,c__4550__auto___7045);
var G__7049 = (0);
seq__7017_7034 = G__7046;
chunk__7018_7035 = G__7047;
count__7019_7036 = G__7048;
i__7020_7037 = G__7049;
continue;
} else {
var e_7050 = cljs.core.first.call(null,seq__7017_7044__$1);
if(cljs.core.truth_(e_7050)){
print_comment_lines.call(null,e_7050);
} else {
}


var G__7051 = cljs.core.next.call(null,seq__7017_7044__$1);
var G__7052 = null;
var G__7053 = (0);
var G__7054 = (0);
seq__7017_7034 = G__7051;
chunk__7018_7035 = G__7052;
count__7019_7036 = G__7053;
i__7020_7037 = G__7054;
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
return (function (p1__7056_SHARP_){
return goog.string.startsWith(p1__7056_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__7057){
var map__7058 = p__7057;
var map__7058__$1 = (((((!((map__7058 == null))))?(((((map__7058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7058):map__7058);
var doc = cljs.core.get.call(null,map__7058__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__7058__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__7058__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.call(null,map__7058__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__7058__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__7058__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__7058__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__7058__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__7058__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__7060){
var map__7061 = p__7060;
var map__7061__$1 = (((((!((map__7061 == null))))?(((((map__7061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7061):map__7061);
var name = cljs.core.get.call(null,map__7061__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__7061__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__7061__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__7063_7087 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__7064_7088 = null;
var count__7065_7089 = (0);
var i__7066_7090 = (0);
while(true){
if((i__7066_7090 < count__7065_7089)){
var vec__7073_7091 = cljs.core._nth.call(null,chunk__7064_7088,i__7066_7090);
var i_7092 = cljs.core.nth.call(null,vec__7073_7091,(0),null);
var param_7093 = cljs.core.nth.call(null,vec__7073_7091,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_7093);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__7094 = seq__7063_7087;
var G__7095 = chunk__7064_7088;
var G__7096 = count__7065_7089;
var G__7097 = (i__7066_7090 + (1));
seq__7063_7087 = G__7094;
chunk__7064_7088 = G__7095;
count__7065_7089 = G__7096;
i__7066_7090 = G__7097;
continue;
} else {
var temp__5720__auto___7098 = cljs.core.seq.call(null,seq__7063_7087);
if(temp__5720__auto___7098){
var seq__7063_7099__$1 = temp__5720__auto___7098;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7063_7099__$1)){
var c__4550__auto___7100 = cljs.core.chunk_first.call(null,seq__7063_7099__$1);
var G__7101 = cljs.core.chunk_rest.call(null,seq__7063_7099__$1);
var G__7102 = c__4550__auto___7100;
var G__7103 = cljs.core.count.call(null,c__4550__auto___7100);
var G__7104 = (0);
seq__7063_7087 = G__7101;
chunk__7064_7088 = G__7102;
count__7065_7089 = G__7103;
i__7066_7090 = G__7104;
continue;
} else {
var vec__7076_7105 = cljs.core.first.call(null,seq__7063_7099__$1);
var i_7106 = cljs.core.nth.call(null,vec__7076_7105,(0),null);
var param_7107 = cljs.core.nth.call(null,vec__7076_7105,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_7107);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__7108 = cljs.core.next.call(null,seq__7063_7099__$1);
var G__7109 = null;
var G__7110 = (0);
var G__7111 = (0);
seq__7063_7087 = G__7108;
chunk__7064_7088 = G__7109;
count__7065_7089 = G__7110;
i__7066_7090 = G__7111;
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

var seq__7079_7112 = cljs.core.seq.call(null,params);
var chunk__7080_7113 = null;
var count__7081_7114 = (0);
var i__7082_7115 = (0);
while(true){
if((i__7082_7115 < count__7081_7114)){
var param_7116 = cljs.core._nth.call(null,chunk__7080_7113,i__7082_7115);
cljs.compiler.emit.call(null,param_7116);

if(cljs.core._EQ_.call(null,param_7116,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7117 = seq__7079_7112;
var G__7118 = chunk__7080_7113;
var G__7119 = count__7081_7114;
var G__7120 = (i__7082_7115 + (1));
seq__7079_7112 = G__7117;
chunk__7080_7113 = G__7118;
count__7081_7114 = G__7119;
i__7082_7115 = G__7120;
continue;
} else {
var temp__5720__auto___7121 = cljs.core.seq.call(null,seq__7079_7112);
if(temp__5720__auto___7121){
var seq__7079_7122__$1 = temp__5720__auto___7121;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7079_7122__$1)){
var c__4550__auto___7123 = cljs.core.chunk_first.call(null,seq__7079_7122__$1);
var G__7124 = cljs.core.chunk_rest.call(null,seq__7079_7122__$1);
var G__7125 = c__4550__auto___7123;
var G__7126 = cljs.core.count.call(null,c__4550__auto___7123);
var G__7127 = (0);
seq__7079_7112 = G__7124;
chunk__7080_7113 = G__7125;
count__7081_7114 = G__7126;
i__7082_7115 = G__7127;
continue;
} else {
var param_7128 = cljs.core.first.call(null,seq__7079_7122__$1);
cljs.compiler.emit.call(null,param_7128);

if(cljs.core._EQ_.call(null,param_7128,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7129 = cljs.core.next.call(null,seq__7079_7122__$1);
var G__7130 = null;
var G__7131 = (0);
var G__7132 = (0);
seq__7079_7112 = G__7129;
chunk__7080_7113 = G__7130;
count__7081_7114 = G__7131;
i__7082_7115 = G__7132;
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

var seq__7083_7133 = cljs.core.seq.call(null,params);
var chunk__7084_7134 = null;
var count__7085_7135 = (0);
var i__7086_7136 = (0);
while(true){
if((i__7086_7136 < count__7085_7135)){
var param_7137 = cljs.core._nth.call(null,chunk__7084_7134,i__7086_7136);
cljs.compiler.emit.call(null,param_7137);

if(cljs.core._EQ_.call(null,param_7137,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7138 = seq__7083_7133;
var G__7139 = chunk__7084_7134;
var G__7140 = count__7085_7135;
var G__7141 = (i__7086_7136 + (1));
seq__7083_7133 = G__7138;
chunk__7084_7134 = G__7139;
count__7085_7135 = G__7140;
i__7086_7136 = G__7141;
continue;
} else {
var temp__5720__auto___7142 = cljs.core.seq.call(null,seq__7083_7133);
if(temp__5720__auto___7142){
var seq__7083_7143__$1 = temp__5720__auto___7142;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7083_7143__$1)){
var c__4550__auto___7144 = cljs.core.chunk_first.call(null,seq__7083_7143__$1);
var G__7145 = cljs.core.chunk_rest.call(null,seq__7083_7143__$1);
var G__7146 = c__4550__auto___7144;
var G__7147 = cljs.core.count.call(null,c__4550__auto___7144);
var G__7148 = (0);
seq__7083_7133 = G__7145;
chunk__7084_7134 = G__7146;
count__7085_7135 = G__7147;
i__7086_7136 = G__7148;
continue;
} else {
var param_7149 = cljs.core.first.call(null,seq__7083_7143__$1);
cljs.compiler.emit.call(null,param_7149);

if(cljs.core._EQ_.call(null,param_7149,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7150 = cljs.core.next.call(null,seq__7083_7143__$1);
var G__7151 = null;
var G__7152 = (0);
var G__7153 = (0);
seq__7083_7133 = G__7150;
chunk__7084_7134 = G__7151;
count__7085_7135 = G__7152;
i__7086_7136 = G__7153;
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
var seq__7154 = cljs.core.seq.call(null,params);
var chunk__7155 = null;
var count__7156 = (0);
var i__7157 = (0);
while(true){
if((i__7157 < count__7156)){
var param = cljs.core._nth.call(null,chunk__7155,i__7157);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7158 = seq__7154;
var G__7159 = chunk__7155;
var G__7160 = count__7156;
var G__7161 = (i__7157 + (1));
seq__7154 = G__7158;
chunk__7155 = G__7159;
count__7156 = G__7160;
i__7157 = G__7161;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__7154);
if(temp__5720__auto__){
var seq__7154__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7154__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__7154__$1);
var G__7162 = cljs.core.chunk_rest.call(null,seq__7154__$1);
var G__7163 = c__4550__auto__;
var G__7164 = cljs.core.count.call(null,c__4550__auto__);
var G__7165 = (0);
seq__7154 = G__7162;
chunk__7155 = G__7163;
count__7156 = G__7164;
i__7157 = G__7165;
continue;
} else {
var param = cljs.core.first.call(null,seq__7154__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7166 = cljs.core.next.call(null,seq__7154__$1);
var G__7167 = null;
var G__7168 = (0);
var G__7169 = (0);
seq__7154 = G__7166;
chunk__7155 = G__7167;
count__7156 = G__7168;
i__7157 = G__7169;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__7170){
var map__7171 = p__7170;
var map__7171__$1 = (((((!((map__7171 == null))))?(((((map__7171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7171):map__7171);
var expr = cljs.core.get.call(null,map__7171__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__7171__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__7171__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__7171__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__7171__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__7171__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__6611__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6611__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6611__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__7173){
var map__7174 = p__7173;
var map__7174__$1 = (((((!((map__7174 == null))))?(((((map__7174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7174):map__7174);
var f = map__7174__$1;
var expr = cljs.core.get.call(null,map__7174__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__7174__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__7174__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__7174__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__7174__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__7174__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__7174__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__7174__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__6611__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6611__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_7184__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_7185 = cljs.compiler.munge.call(null,name_7184__$1);
var delegate_name_7186 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_7185),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_7186," = function (");

var seq__7176_7187 = cljs.core.seq.call(null,params);
var chunk__7177_7188 = null;
var count__7178_7189 = (0);
var i__7179_7190 = (0);
while(true){
if((i__7179_7190 < count__7178_7189)){
var param_7191 = cljs.core._nth.call(null,chunk__7177_7188,i__7179_7190);
cljs.compiler.emit.call(null,param_7191);

if(cljs.core._EQ_.call(null,param_7191,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7192 = seq__7176_7187;
var G__7193 = chunk__7177_7188;
var G__7194 = count__7178_7189;
var G__7195 = (i__7179_7190 + (1));
seq__7176_7187 = G__7192;
chunk__7177_7188 = G__7193;
count__7178_7189 = G__7194;
i__7179_7190 = G__7195;
continue;
} else {
var temp__5720__auto___7196 = cljs.core.seq.call(null,seq__7176_7187);
if(temp__5720__auto___7196){
var seq__7176_7197__$1 = temp__5720__auto___7196;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7176_7197__$1)){
var c__4550__auto___7198 = cljs.core.chunk_first.call(null,seq__7176_7197__$1);
var G__7199 = cljs.core.chunk_rest.call(null,seq__7176_7197__$1);
var G__7200 = c__4550__auto___7198;
var G__7201 = cljs.core.count.call(null,c__4550__auto___7198);
var G__7202 = (0);
seq__7176_7187 = G__7199;
chunk__7177_7188 = G__7200;
count__7178_7189 = G__7201;
i__7179_7190 = G__7202;
continue;
} else {
var param_7203 = cljs.core.first.call(null,seq__7176_7197__$1);
cljs.compiler.emit.call(null,param_7203);

if(cljs.core._EQ_.call(null,param_7203,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7204 = cljs.core.next.call(null,seq__7176_7197__$1);
var G__7205 = null;
var G__7206 = (0);
var G__7207 = (0);
seq__7176_7187 = G__7204;
chunk__7177_7188 = G__7205;
count__7178_7189 = G__7206;
i__7179_7190 = G__7207;
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

cljs.compiler.emitln.call(null,"var ",mname_7185," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_7208 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_7208,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_7186,".call(this,");

var seq__7180_7209 = cljs.core.seq.call(null,params);
var chunk__7181_7210 = null;
var count__7182_7211 = (0);
var i__7183_7212 = (0);
while(true){
if((i__7183_7212 < count__7182_7211)){
var param_7213 = cljs.core._nth.call(null,chunk__7181_7210,i__7183_7212);
cljs.compiler.emit.call(null,param_7213);

if(cljs.core._EQ_.call(null,param_7213,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7214 = seq__7180_7209;
var G__7215 = chunk__7181_7210;
var G__7216 = count__7182_7211;
var G__7217 = (i__7183_7212 + (1));
seq__7180_7209 = G__7214;
chunk__7181_7210 = G__7215;
count__7182_7211 = G__7216;
i__7183_7212 = G__7217;
continue;
} else {
var temp__5720__auto___7218 = cljs.core.seq.call(null,seq__7180_7209);
if(temp__5720__auto___7218){
var seq__7180_7219__$1 = temp__5720__auto___7218;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7180_7219__$1)){
var c__4550__auto___7220 = cljs.core.chunk_first.call(null,seq__7180_7219__$1);
var G__7221 = cljs.core.chunk_rest.call(null,seq__7180_7219__$1);
var G__7222 = c__4550__auto___7220;
var G__7223 = cljs.core.count.call(null,c__4550__auto___7220);
var G__7224 = (0);
seq__7180_7209 = G__7221;
chunk__7181_7210 = G__7222;
count__7182_7211 = G__7223;
i__7183_7212 = G__7224;
continue;
} else {
var param_7225 = cljs.core.first.call(null,seq__7180_7219__$1);
cljs.compiler.emit.call(null,param_7225);

if(cljs.core._EQ_.call(null,param_7225,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__7226 = cljs.core.next.call(null,seq__7180_7219__$1);
var G__7227 = null;
var G__7228 = (0);
var G__7229 = (0);
seq__7180_7209 = G__7226;
chunk__7181_7210 = G__7227;
count__7182_7211 = G__7228;
i__7183_7212 = G__7229;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_7185,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_7185,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_7184__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_7185,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_7186,";");

cljs.compiler.emitln.call(null,"return ",mname_7185,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6611__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__7233){
var map__7234 = p__7233;
var map__7234__$1 = (((((!((map__7234 == null))))?(((((map__7234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7234):map__7234);
var variadic = cljs.core.get.call(null,map__7234__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__7234__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__7234__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__7234__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__7234__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__7234__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__7234__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__7234,map__7234__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__7230_SHARP_){
var and__4120__auto__ = p1__7230_SHARP_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__7230_SHARP_));
} else {
return and__4120__auto__;
}
});})(map__7234,map__7234__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
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
var name_7287__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_7288 = cljs.compiler.munge.call(null,name_7287__$1);
var maxparams_7289 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_7290 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_7287__$1,mname_7288,maxparams_7289,loop_locals,map__7234,map__7234__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_7288),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_7287__$1,mname_7288,maxparams_7289,loop_locals,map__7234,map__7234__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_7291 = cljs.core.sort_by.call(null,((function (name_7287__$1,mname_7288,maxparams_7289,mmap_7290,loop_locals,map__7234,map__7234__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__7231_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__7231_SHARP_)));
});})(name_7287__$1,mname_7288,maxparams_7289,mmap_7290,loop_locals,map__7234,map__7234__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_7290));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_7288," = null;");

var seq__7236_7292 = cljs.core.seq.call(null,ms_7291);
var chunk__7237_7293 = null;
var count__7238_7294 = (0);
var i__7239_7295 = (0);
while(true){
if((i__7239_7295 < count__7238_7294)){
var vec__7246_7296 = cljs.core._nth.call(null,chunk__7237_7293,i__7239_7295);
var n_7297 = cljs.core.nth.call(null,vec__7246_7296,(0),null);
var meth_7298 = cljs.core.nth.call(null,vec__7246_7296,(1),null);
cljs.compiler.emits.call(null,"var ",n_7297," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_7298))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_7298);
} else {
cljs.compiler.emit_fn_method.call(null,meth_7298);
}

cljs.compiler.emitln.call(null,";");


var G__7299 = seq__7236_7292;
var G__7300 = chunk__7237_7293;
var G__7301 = count__7238_7294;
var G__7302 = (i__7239_7295 + (1));
seq__7236_7292 = G__7299;
chunk__7237_7293 = G__7300;
count__7238_7294 = G__7301;
i__7239_7295 = G__7302;
continue;
} else {
var temp__5720__auto___7303 = cljs.core.seq.call(null,seq__7236_7292);
if(temp__5720__auto___7303){
var seq__7236_7304__$1 = temp__5720__auto___7303;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7236_7304__$1)){
var c__4550__auto___7305 = cljs.core.chunk_first.call(null,seq__7236_7304__$1);
var G__7306 = cljs.core.chunk_rest.call(null,seq__7236_7304__$1);
var G__7307 = c__4550__auto___7305;
var G__7308 = cljs.core.count.call(null,c__4550__auto___7305);
var G__7309 = (0);
seq__7236_7292 = G__7306;
chunk__7237_7293 = G__7307;
count__7238_7294 = G__7308;
i__7239_7295 = G__7309;
continue;
} else {
var vec__7249_7310 = cljs.core.first.call(null,seq__7236_7304__$1);
var n_7311 = cljs.core.nth.call(null,vec__7249_7310,(0),null);
var meth_7312 = cljs.core.nth.call(null,vec__7249_7310,(1),null);
cljs.compiler.emits.call(null,"var ",n_7311," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_7312))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_7312);
} else {
cljs.compiler.emit_fn_method.call(null,meth_7312);
}

cljs.compiler.emitln.call(null,";");


var G__7313 = cljs.core.next.call(null,seq__7236_7304__$1);
var G__7314 = null;
var G__7315 = (0);
var G__7316 = (0);
seq__7236_7292 = G__7313;
chunk__7237_7293 = G__7314;
count__7238_7294 = G__7315;
i__7239_7295 = G__7316;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_7288," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_7289),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_7289)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_7289));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__7252_7317 = cljs.core.seq.call(null,ms_7291);
var chunk__7253_7318 = null;
var count__7254_7319 = (0);
var i__7255_7320 = (0);
while(true){
if((i__7255_7320 < count__7254_7319)){
var vec__7262_7321 = cljs.core._nth.call(null,chunk__7253_7318,i__7255_7320);
var n_7322 = cljs.core.nth.call(null,vec__7262_7321,(0),null);
var meth_7323 = cljs.core.nth.call(null,vec__7262_7321,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_7323))){
cljs.compiler.emitln.call(null,"default:");

var restarg_7324 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_7324," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_7325 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_7324," = new cljs.core.IndexedSeq(",a_7325,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_7322,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_7289)),(((cljs.core.count.call(null,maxparams_7289) > (1)))?", ":null),restarg_7324,");");
} else {
var pcnt_7326 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_7323));
cljs.compiler.emitln.call(null,"case ",pcnt_7326,":");

cljs.compiler.emitln.call(null,"return ",n_7322,".call(this",(((pcnt_7326 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_7326,maxparams_7289)),null,(1),null)),(2),null))),");");
}


var G__7327 = seq__7252_7317;
var G__7328 = chunk__7253_7318;
var G__7329 = count__7254_7319;
var G__7330 = (i__7255_7320 + (1));
seq__7252_7317 = G__7327;
chunk__7253_7318 = G__7328;
count__7254_7319 = G__7329;
i__7255_7320 = G__7330;
continue;
} else {
var temp__5720__auto___7331 = cljs.core.seq.call(null,seq__7252_7317);
if(temp__5720__auto___7331){
var seq__7252_7332__$1 = temp__5720__auto___7331;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7252_7332__$1)){
var c__4550__auto___7333 = cljs.core.chunk_first.call(null,seq__7252_7332__$1);
var G__7334 = cljs.core.chunk_rest.call(null,seq__7252_7332__$1);
var G__7335 = c__4550__auto___7333;
var G__7336 = cljs.core.count.call(null,c__4550__auto___7333);
var G__7337 = (0);
seq__7252_7317 = G__7334;
chunk__7253_7318 = G__7335;
count__7254_7319 = G__7336;
i__7255_7320 = G__7337;
continue;
} else {
var vec__7265_7338 = cljs.core.first.call(null,seq__7252_7332__$1);
var n_7339 = cljs.core.nth.call(null,vec__7265_7338,(0),null);
var meth_7340 = cljs.core.nth.call(null,vec__7265_7338,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_7340))){
cljs.compiler.emitln.call(null,"default:");

var restarg_7341 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_7341," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_7342 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_7341," = new cljs.core.IndexedSeq(",a_7342,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_7339,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_7289)),(((cljs.core.count.call(null,maxparams_7289) > (1)))?", ":null),restarg_7341,");");
} else {
var pcnt_7343 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_7340));
cljs.compiler.emitln.call(null,"case ",pcnt_7343,":");

cljs.compiler.emitln.call(null,"return ",n_7339,".call(this",(((pcnt_7343 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_7343,maxparams_7289)),null,(1),null)),(2),null))),");");
}


var G__7344 = cljs.core.next.call(null,seq__7252_7332__$1);
var G__7345 = null;
var G__7346 = (0);
var G__7347 = (0);
seq__7252_7317 = G__7344;
chunk__7253_7318 = G__7345;
count__7254_7319 = G__7346;
i__7255_7320 = G__7347;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_7348 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_7291)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_7348,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_7288,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_7288,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_7287__$1,mname_7288,maxparams_7289,mmap_7290,ms_7291,loop_locals,map__7234,map__7234__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__7232_SHARP_){
var vec__7268 = p1__7232_SHARP_;
var n = cljs.core.nth.call(null,vec__7268,(0),null);
var m = cljs.core.nth.call(null,vec__7268,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_7287__$1,mname_7288,maxparams_7289,mmap_7290,ms_7291,loop_locals,map__7234,map__7234__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_7291),".cljs$lang$applyTo;");
} else {
}

var seq__7271_7349 = cljs.core.seq.call(null,ms_7291);
var chunk__7272_7350 = null;
var count__7273_7351 = (0);
var i__7274_7352 = (0);
while(true){
if((i__7274_7352 < count__7273_7351)){
var vec__7281_7353 = cljs.core._nth.call(null,chunk__7272_7350,i__7274_7352);
var n_7354 = cljs.core.nth.call(null,vec__7281_7353,(0),null);
var meth_7355 = cljs.core.nth.call(null,vec__7281_7353,(1),null);
var c_7356 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_7355));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_7355))){
cljs.compiler.emitln.call(null,mname_7288,".cljs$core$IFn$_invoke$arity$variadic = ",n_7354,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_7288,".cljs$core$IFn$_invoke$arity$",c_7356," = ",n_7354,";");
}


var G__7357 = seq__7271_7349;
var G__7358 = chunk__7272_7350;
var G__7359 = count__7273_7351;
var G__7360 = (i__7274_7352 + (1));
seq__7271_7349 = G__7357;
chunk__7272_7350 = G__7358;
count__7273_7351 = G__7359;
i__7274_7352 = G__7360;
continue;
} else {
var temp__5720__auto___7361 = cljs.core.seq.call(null,seq__7271_7349);
if(temp__5720__auto___7361){
var seq__7271_7362__$1 = temp__5720__auto___7361;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7271_7362__$1)){
var c__4550__auto___7363 = cljs.core.chunk_first.call(null,seq__7271_7362__$1);
var G__7364 = cljs.core.chunk_rest.call(null,seq__7271_7362__$1);
var G__7365 = c__4550__auto___7363;
var G__7366 = cljs.core.count.call(null,c__4550__auto___7363);
var G__7367 = (0);
seq__7271_7349 = G__7364;
chunk__7272_7350 = G__7365;
count__7273_7351 = G__7366;
i__7274_7352 = G__7367;
continue;
} else {
var vec__7284_7368 = cljs.core.first.call(null,seq__7271_7362__$1);
var n_7369 = cljs.core.nth.call(null,vec__7284_7368,(0),null);
var meth_7370 = cljs.core.nth.call(null,vec__7284_7368,(1),null);
var c_7371 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_7370));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_7370))){
cljs.compiler.emitln.call(null,mname_7288,".cljs$core$IFn$_invoke$arity$variadic = ",n_7369,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_7288,".cljs$core$IFn$_invoke$arity$",c_7371," = ",n_7369,";");
}


var G__7372 = cljs.core.next.call(null,seq__7271_7362__$1);
var G__7373 = null;
var G__7374 = (0);
var G__7375 = (0);
seq__7271_7349 = G__7372;
chunk__7272_7350 = G__7373;
count__7273_7351 = G__7374;
i__7274_7352 = G__7375;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_7288,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__7376){
var map__7377 = p__7376;
var map__7377__$1 = (((((!((map__7377 == null))))?(((((map__7377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7377):map__7377);
var statements = cljs.core.get.call(null,map__7377__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__7377__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__7377__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__7379_7383 = cljs.core.seq.call(null,statements);
var chunk__7380_7384 = null;
var count__7381_7385 = (0);
var i__7382_7386 = (0);
while(true){
if((i__7382_7386 < count__7381_7385)){
var s_7387 = cljs.core._nth.call(null,chunk__7380_7384,i__7382_7386);
cljs.compiler.emitln.call(null,s_7387);


var G__7388 = seq__7379_7383;
var G__7389 = chunk__7380_7384;
var G__7390 = count__7381_7385;
var G__7391 = (i__7382_7386 + (1));
seq__7379_7383 = G__7388;
chunk__7380_7384 = G__7389;
count__7381_7385 = G__7390;
i__7382_7386 = G__7391;
continue;
} else {
var temp__5720__auto___7392 = cljs.core.seq.call(null,seq__7379_7383);
if(temp__5720__auto___7392){
var seq__7379_7393__$1 = temp__5720__auto___7392;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7379_7393__$1)){
var c__4550__auto___7394 = cljs.core.chunk_first.call(null,seq__7379_7393__$1);
var G__7395 = cljs.core.chunk_rest.call(null,seq__7379_7393__$1);
var G__7396 = c__4550__auto___7394;
var G__7397 = cljs.core.count.call(null,c__4550__auto___7394);
var G__7398 = (0);
seq__7379_7383 = G__7395;
chunk__7380_7384 = G__7396;
count__7381_7385 = G__7397;
i__7382_7386 = G__7398;
continue;
} else {
var s_7399 = cljs.core.first.call(null,seq__7379_7393__$1);
cljs.compiler.emitln.call(null,s_7399);


var G__7400 = cljs.core.next.call(null,seq__7379_7393__$1);
var G__7401 = null;
var G__7402 = (0);
var G__7403 = (0);
seq__7379_7383 = G__7400;
chunk__7380_7384 = G__7401;
count__7381_7385 = G__7402;
i__7382_7386 = G__7403;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__7404){
var map__7405 = p__7404;
var map__7405__$1 = (((((!((map__7405 == null))))?(((((map__7405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7405):map__7405);
var try$ = cljs.core.get.call(null,map__7405__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__7405__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__7405__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__7405__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__7405__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__7407,is_loop){
var map__7408 = p__7407;
var map__7408__$1 = (((((!((map__7408 == null))))?(((((map__7408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7408):map__7408);
var expr = cljs.core.get.call(null,map__7408__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__7408__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__7408__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__7410_7424 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__7411_7425 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR__orig_val__7410_7424,context,map__7408,map__7408__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__7410_7424,context,map__7408,map__7408__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__7411_7425;

try{var seq__7412_7426 = cljs.core.seq.call(null,bindings);
var chunk__7413_7427 = null;
var count__7414_7428 = (0);
var i__7415_7429 = (0);
while(true){
if((i__7415_7429 < count__7414_7428)){
var map__7420_7430 = cljs.core._nth.call(null,chunk__7413_7427,i__7415_7429);
var map__7420_7431__$1 = (((((!((map__7420_7430 == null))))?(((((map__7420_7430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7420_7430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7420_7430):map__7420_7430);
var binding_7432 = map__7420_7431__$1;
var init_7433 = cljs.core.get.call(null,map__7420_7431__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_7432);

cljs.compiler.emitln.call(null," = ",init_7433,";");


var G__7434 = seq__7412_7426;
var G__7435 = chunk__7413_7427;
var G__7436 = count__7414_7428;
var G__7437 = (i__7415_7429 + (1));
seq__7412_7426 = G__7434;
chunk__7413_7427 = G__7435;
count__7414_7428 = G__7436;
i__7415_7429 = G__7437;
continue;
} else {
var temp__5720__auto___7438 = cljs.core.seq.call(null,seq__7412_7426);
if(temp__5720__auto___7438){
var seq__7412_7439__$1 = temp__5720__auto___7438;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7412_7439__$1)){
var c__4550__auto___7440 = cljs.core.chunk_first.call(null,seq__7412_7439__$1);
var G__7441 = cljs.core.chunk_rest.call(null,seq__7412_7439__$1);
var G__7442 = c__4550__auto___7440;
var G__7443 = cljs.core.count.call(null,c__4550__auto___7440);
var G__7444 = (0);
seq__7412_7426 = G__7441;
chunk__7413_7427 = G__7442;
count__7414_7428 = G__7443;
i__7415_7429 = G__7444;
continue;
} else {
var map__7422_7445 = cljs.core.first.call(null,seq__7412_7439__$1);
var map__7422_7446__$1 = (((((!((map__7422_7445 == null))))?(((((map__7422_7445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7422_7445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7422_7445):map__7422_7445);
var binding_7447 = map__7422_7446__$1;
var init_7448 = cljs.core.get.call(null,map__7422_7446__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_7447);

cljs.compiler.emitln.call(null," = ",init_7448,";");


var G__7449 = cljs.core.next.call(null,seq__7412_7439__$1);
var G__7450 = null;
var G__7451 = (0);
var G__7452 = (0);
seq__7412_7426 = G__7449;
chunk__7413_7427 = G__7450;
count__7414_7428 = G__7451;
i__7415_7429 = G__7452;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__7410_7424;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__7453){
var map__7454 = p__7453;
var map__7454__$1 = (((((!((map__7454 == null))))?(((((map__7454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7454):map__7454);
var frame = cljs.core.get.call(null,map__7454__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__7454__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__7454__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4607__auto___7456 = cljs.core.count.call(null,exprs);
var i_7457 = (0);
while(true){
if((i_7457 < n__4607__auto___7456)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_7457)," = ",exprs.call(null,i_7457),";");

var G__7458 = (i_7457 + (1));
i_7457 = G__7458;
continue;
} else {
}
break;
}

var n__4607__auto___7459 = cljs.core.count.call(null,exprs);
var i_7460 = (0);
while(true){
if((i_7460 < n__4607__auto___7459)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_7460))," = ",temps.call(null,i_7460),";");

var G__7461 = (i_7460 + (1));
i_7460 = G__7461;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__7462){
var map__7463 = p__7462;
var map__7463__$1 = (((((!((map__7463 == null))))?(((((map__7463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7463):map__7463);
var expr = cljs.core.get.call(null,map__7463__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__7463__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__7463__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__7465_7477 = cljs.core.seq.call(null,bindings);
var chunk__7466_7478 = null;
var count__7467_7479 = (0);
var i__7468_7480 = (0);
while(true){
if((i__7468_7480 < count__7467_7479)){
var map__7473_7481 = cljs.core._nth.call(null,chunk__7466_7478,i__7468_7480);
var map__7473_7482__$1 = (((((!((map__7473_7481 == null))))?(((((map__7473_7481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7473_7481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7473_7481):map__7473_7481);
var binding_7483 = map__7473_7482__$1;
var init_7484 = cljs.core.get.call(null,map__7473_7482__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_7483)," = ",init_7484,";");


var G__7485 = seq__7465_7477;
var G__7486 = chunk__7466_7478;
var G__7487 = count__7467_7479;
var G__7488 = (i__7468_7480 + (1));
seq__7465_7477 = G__7485;
chunk__7466_7478 = G__7486;
count__7467_7479 = G__7487;
i__7468_7480 = G__7488;
continue;
} else {
var temp__5720__auto___7489 = cljs.core.seq.call(null,seq__7465_7477);
if(temp__5720__auto___7489){
var seq__7465_7490__$1 = temp__5720__auto___7489;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7465_7490__$1)){
var c__4550__auto___7491 = cljs.core.chunk_first.call(null,seq__7465_7490__$1);
var G__7492 = cljs.core.chunk_rest.call(null,seq__7465_7490__$1);
var G__7493 = c__4550__auto___7491;
var G__7494 = cljs.core.count.call(null,c__4550__auto___7491);
var G__7495 = (0);
seq__7465_7477 = G__7492;
chunk__7466_7478 = G__7493;
count__7467_7479 = G__7494;
i__7468_7480 = G__7495;
continue;
} else {
var map__7475_7496 = cljs.core.first.call(null,seq__7465_7490__$1);
var map__7475_7497__$1 = (((((!((map__7475_7496 == null))))?(((((map__7475_7496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7475_7496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7475_7496):map__7475_7496);
var binding_7498 = map__7475_7497__$1;
var init_7499 = cljs.core.get.call(null,map__7475_7497__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_7498)," = ",init_7499,";");


var G__7500 = cljs.core.next.call(null,seq__7465_7490__$1);
var G__7501 = null;
var G__7502 = (0);
var G__7503 = (0);
seq__7465_7477 = G__7500;
chunk__7466_7478 = G__7501;
count__7467_7479 = G__7502;
i__7468_7480 = G__7503;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__7506){
var map__7507 = p__7506;
var map__7507__$1 = (((((!((map__7507 == null))))?(((((map__7507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7507):map__7507);
var expr = map__7507__$1;
var f = cljs.core.get.call(null,map__7507__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__7507__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__7507__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__7509 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7507,map__7507__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7507,map__7507__$1,expr,f,args,env){
return (function (p1__7504_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__7504_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7507,map__7507__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7507,map__7507__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7507,map__7507__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7507,map__7507__$1,expr,f,args,env){
return (function (p1__7505_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__7505_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7507,map__7507__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7507,map__7507__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__7509,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__7509,(1),null);
var env__6611__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6611__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_7512 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_7512,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_7513 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_7513,args)),(((mfa_7513 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_7513,args)),"], 0))");
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
var fprop_7514 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_7514," ? ",f__$1,fprop_7514,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_7514," ? ",f__$1,fprop_7514,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6611__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__7515){
var map__7516 = p__7515;
var map__7516__$1 = (((((!((map__7516 == null))))?(((((map__7516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7516):map__7516);
var ctor = cljs.core.get.call(null,map__7516__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__7516__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__7516__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6611__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6611__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6611__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__7518){
var map__7519 = p__7518;
var map__7519__$1 = (((((!((map__7519 == null))))?(((((map__7519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7519):map__7519);
var target = cljs.core.get.call(null,map__7519__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__7519__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__7519__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6611__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6611__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6611__auto__))){
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
var map__7521 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__7521__$1 = (((((!((map__7521 == null))))?(((((map__7521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7521):map__7521);
var options = cljs.core.get.call(null,map__7521__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__7521__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__7522 = options;
var map__7522__$1 = (((((!((map__7522 == null))))?(((((map__7522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7522):map__7522);
var target = cljs.core.get.call(null,map__7522__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__7522__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__7523 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__7528 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__7528__$1 = (((((!((map__7528 == null))))?(((((map__7528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7528):map__7528);
var node_libs = cljs.core.get.call(null,map__7528__$1,true);
var libs_to_load = cljs.core.get.call(null,map__7528__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__7523,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__7523,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__7530_7550 = cljs.core.seq.call(null,libs_to_load);
var chunk__7531_7551 = null;
var count__7532_7552 = (0);
var i__7533_7553 = (0);
while(true){
if((i__7533_7553 < count__7532_7552)){
var lib_7554 = cljs.core._nth.call(null,chunk__7531_7551,i__7533_7553);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_7554)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_7554),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7554),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_7554),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7554),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_7554,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7554),"');");
}

}
}
}


var G__7555 = seq__7530_7550;
var G__7556 = chunk__7531_7551;
var G__7557 = count__7532_7552;
var G__7558 = (i__7533_7553 + (1));
seq__7530_7550 = G__7555;
chunk__7531_7551 = G__7556;
count__7532_7552 = G__7557;
i__7533_7553 = G__7558;
continue;
} else {
var temp__5720__auto___7559 = cljs.core.seq.call(null,seq__7530_7550);
if(temp__5720__auto___7559){
var seq__7530_7560__$1 = temp__5720__auto___7559;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7530_7560__$1)){
var c__4550__auto___7561 = cljs.core.chunk_first.call(null,seq__7530_7560__$1);
var G__7562 = cljs.core.chunk_rest.call(null,seq__7530_7560__$1);
var G__7563 = c__4550__auto___7561;
var G__7564 = cljs.core.count.call(null,c__4550__auto___7561);
var G__7565 = (0);
seq__7530_7550 = G__7562;
chunk__7531_7551 = G__7563;
count__7532_7552 = G__7564;
i__7533_7553 = G__7565;
continue;
} else {
var lib_7566 = cljs.core.first.call(null,seq__7530_7560__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_7566)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_7566),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7566),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_7566),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7566),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_7566,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7566),"');");
}

}
}
}


var G__7567 = cljs.core.next.call(null,seq__7530_7560__$1);
var G__7568 = null;
var G__7569 = (0);
var G__7570 = (0);
seq__7530_7550 = G__7567;
chunk__7531_7551 = G__7568;
count__7532_7552 = G__7569;
i__7533_7553 = G__7570;
continue;
}
} else {
}
}
break;
}

var seq__7534_7571 = cljs.core.seq.call(null,node_libs);
var chunk__7535_7572 = null;
var count__7536_7573 = (0);
var i__7537_7574 = (0);
while(true){
if((i__7537_7574 < count__7536_7573)){
var lib_7575 = cljs.core._nth.call(null,chunk__7535_7572,i__7537_7574);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_7575)," = require('",lib_7575,"');");


var G__7576 = seq__7534_7571;
var G__7577 = chunk__7535_7572;
var G__7578 = count__7536_7573;
var G__7579 = (i__7537_7574 + (1));
seq__7534_7571 = G__7576;
chunk__7535_7572 = G__7577;
count__7536_7573 = G__7578;
i__7537_7574 = G__7579;
continue;
} else {
var temp__5720__auto___7580 = cljs.core.seq.call(null,seq__7534_7571);
if(temp__5720__auto___7580){
var seq__7534_7581__$1 = temp__5720__auto___7580;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7534_7581__$1)){
var c__4550__auto___7582 = cljs.core.chunk_first.call(null,seq__7534_7581__$1);
var G__7583 = cljs.core.chunk_rest.call(null,seq__7534_7581__$1);
var G__7584 = c__4550__auto___7582;
var G__7585 = cljs.core.count.call(null,c__4550__auto___7582);
var G__7586 = (0);
seq__7534_7571 = G__7583;
chunk__7535_7572 = G__7584;
count__7536_7573 = G__7585;
i__7537_7574 = G__7586;
continue;
} else {
var lib_7587 = cljs.core.first.call(null,seq__7534_7581__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_7587)," = require('",lib_7587,"');");


var G__7588 = cljs.core.next.call(null,seq__7534_7581__$1);
var G__7589 = null;
var G__7590 = (0);
var G__7591 = (0);
seq__7534_7571 = G__7588;
chunk__7535_7572 = G__7589;
count__7536_7573 = G__7590;
i__7537_7574 = G__7591;
continue;
}
} else {
}
}
break;
}

var seq__7538_7592 = cljs.core.seq.call(null,global_exports_libs);
var chunk__7539_7593 = null;
var count__7540_7594 = (0);
var i__7541_7595 = (0);
while(true){
if((i__7541_7595 < count__7540_7594)){
var lib_7596 = cljs.core._nth.call(null,chunk__7539_7593,i__7541_7595);
var map__7546_7597 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_7596));
var map__7546_7598__$1 = (((((!((map__7546_7597 == null))))?(((((map__7546_7597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7546_7597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7546_7597):map__7546_7597);
var global_exports_7599 = cljs.core.get.call(null,map__7546_7598__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_7599,lib_7596);


var G__7600 = seq__7538_7592;
var G__7601 = chunk__7539_7593;
var G__7602 = count__7540_7594;
var G__7603 = (i__7541_7595 + (1));
seq__7538_7592 = G__7600;
chunk__7539_7593 = G__7601;
count__7540_7594 = G__7602;
i__7541_7595 = G__7603;
continue;
} else {
var temp__5720__auto___7604 = cljs.core.seq.call(null,seq__7538_7592);
if(temp__5720__auto___7604){
var seq__7538_7605__$1 = temp__5720__auto___7604;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7538_7605__$1)){
var c__4550__auto___7606 = cljs.core.chunk_first.call(null,seq__7538_7605__$1);
var G__7607 = cljs.core.chunk_rest.call(null,seq__7538_7605__$1);
var G__7608 = c__4550__auto___7606;
var G__7609 = cljs.core.count.call(null,c__4550__auto___7606);
var G__7610 = (0);
seq__7538_7592 = G__7607;
chunk__7539_7593 = G__7608;
count__7540_7594 = G__7609;
i__7541_7595 = G__7610;
continue;
} else {
var lib_7611 = cljs.core.first.call(null,seq__7538_7605__$1);
var map__7548_7612 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_7611));
var map__7548_7613__$1 = (((((!((map__7548_7612 == null))))?(((((map__7548_7612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7548_7612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7548_7612):map__7548_7612);
var global_exports_7614 = cljs.core.get.call(null,map__7548_7613__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_7614,lib_7611);


var G__7615 = cljs.core.next.call(null,seq__7538_7605__$1);
var G__7616 = null;
var G__7617 = (0);
var G__7618 = (0);
seq__7538_7592 = G__7615;
chunk__7539_7593 = G__7616;
count__7540_7594 = G__7617;
i__7541_7595 = G__7618;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__7619){
var map__7620 = p__7619;
var map__7620__$1 = (((((!((map__7620 == null))))?(((((map__7620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7620):map__7620);
var name = cljs.core.get.call(null,map__7620__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__7620__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__7620__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__7620__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__7620__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__7620__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__7620__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__7622){
var map__7623 = p__7622;
var map__7623__$1 = (((((!((map__7623 == null))))?(((((map__7623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7623):map__7623);
var name = cljs.core.get.call(null,map__7623__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__7623__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__7623__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__7623__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__7623__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__7623__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__7623__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__7625){
var map__7626 = p__7625;
var map__7626__$1 = (((((!((map__7626 == null))))?(((((map__7626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7626):map__7626);
var t = cljs.core.get.call(null,map__7626__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__7626__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__7626__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__7626__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__7626__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__7628_7652 = cljs.core.seq.call(null,protocols);
var chunk__7629_7653 = null;
var count__7630_7654 = (0);
var i__7631_7655 = (0);
while(true){
if((i__7631_7655 < count__7630_7654)){
var protocol_7656 = cljs.core._nth.call(null,chunk__7629_7653,i__7631_7655);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_7656)),"}");


var G__7657 = seq__7628_7652;
var G__7658 = chunk__7629_7653;
var G__7659 = count__7630_7654;
var G__7660 = (i__7631_7655 + (1));
seq__7628_7652 = G__7657;
chunk__7629_7653 = G__7658;
count__7630_7654 = G__7659;
i__7631_7655 = G__7660;
continue;
} else {
var temp__5720__auto___7661 = cljs.core.seq.call(null,seq__7628_7652);
if(temp__5720__auto___7661){
var seq__7628_7662__$1 = temp__5720__auto___7661;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7628_7662__$1)){
var c__4550__auto___7663 = cljs.core.chunk_first.call(null,seq__7628_7662__$1);
var G__7664 = cljs.core.chunk_rest.call(null,seq__7628_7662__$1);
var G__7665 = c__4550__auto___7663;
var G__7666 = cljs.core.count.call(null,c__4550__auto___7663);
var G__7667 = (0);
seq__7628_7652 = G__7664;
chunk__7629_7653 = G__7665;
count__7630_7654 = G__7666;
i__7631_7655 = G__7667;
continue;
} else {
var protocol_7668 = cljs.core.first.call(null,seq__7628_7662__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_7668)),"}");


var G__7669 = cljs.core.next.call(null,seq__7628_7662__$1);
var G__7670 = null;
var G__7671 = (0);
var G__7672 = (0);
seq__7628_7652 = G__7669;
chunk__7629_7653 = G__7670;
count__7630_7654 = G__7671;
i__7631_7655 = G__7672;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__7632_7673 = cljs.core.seq.call(null,fields__$1);
var chunk__7633_7674 = null;
var count__7634_7675 = (0);
var i__7635_7676 = (0);
while(true){
if((i__7635_7676 < count__7634_7675)){
var fld_7677 = cljs.core._nth.call(null,chunk__7633_7674,i__7635_7676);
cljs.compiler.emitln.call(null,"this.",fld_7677," = ",fld_7677,";");


var G__7678 = seq__7632_7673;
var G__7679 = chunk__7633_7674;
var G__7680 = count__7634_7675;
var G__7681 = (i__7635_7676 + (1));
seq__7632_7673 = G__7678;
chunk__7633_7674 = G__7679;
count__7634_7675 = G__7680;
i__7635_7676 = G__7681;
continue;
} else {
var temp__5720__auto___7682 = cljs.core.seq.call(null,seq__7632_7673);
if(temp__5720__auto___7682){
var seq__7632_7683__$1 = temp__5720__auto___7682;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7632_7683__$1)){
var c__4550__auto___7684 = cljs.core.chunk_first.call(null,seq__7632_7683__$1);
var G__7685 = cljs.core.chunk_rest.call(null,seq__7632_7683__$1);
var G__7686 = c__4550__auto___7684;
var G__7687 = cljs.core.count.call(null,c__4550__auto___7684);
var G__7688 = (0);
seq__7632_7673 = G__7685;
chunk__7633_7674 = G__7686;
count__7634_7675 = G__7687;
i__7635_7676 = G__7688;
continue;
} else {
var fld_7689 = cljs.core.first.call(null,seq__7632_7683__$1);
cljs.compiler.emitln.call(null,"this.",fld_7689," = ",fld_7689,";");


var G__7690 = cljs.core.next.call(null,seq__7632_7683__$1);
var G__7691 = null;
var G__7692 = (0);
var G__7693 = (0);
seq__7632_7673 = G__7690;
chunk__7633_7674 = G__7691;
count__7634_7675 = G__7692;
i__7635_7676 = G__7693;
continue;
}
} else {
}
}
break;
}

var seq__7636_7694 = cljs.core.seq.call(null,pmasks);
var chunk__7637_7695 = null;
var count__7638_7696 = (0);
var i__7639_7697 = (0);
while(true){
if((i__7639_7697 < count__7638_7696)){
var vec__7646_7698 = cljs.core._nth.call(null,chunk__7637_7695,i__7639_7697);
var pno_7699 = cljs.core.nth.call(null,vec__7646_7698,(0),null);
var pmask_7700 = cljs.core.nth.call(null,vec__7646_7698,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_7699,"$ = ",pmask_7700,";");


var G__7701 = seq__7636_7694;
var G__7702 = chunk__7637_7695;
var G__7703 = count__7638_7696;
var G__7704 = (i__7639_7697 + (1));
seq__7636_7694 = G__7701;
chunk__7637_7695 = G__7702;
count__7638_7696 = G__7703;
i__7639_7697 = G__7704;
continue;
} else {
var temp__5720__auto___7705 = cljs.core.seq.call(null,seq__7636_7694);
if(temp__5720__auto___7705){
var seq__7636_7706__$1 = temp__5720__auto___7705;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7636_7706__$1)){
var c__4550__auto___7707 = cljs.core.chunk_first.call(null,seq__7636_7706__$1);
var G__7708 = cljs.core.chunk_rest.call(null,seq__7636_7706__$1);
var G__7709 = c__4550__auto___7707;
var G__7710 = cljs.core.count.call(null,c__4550__auto___7707);
var G__7711 = (0);
seq__7636_7694 = G__7708;
chunk__7637_7695 = G__7709;
count__7638_7696 = G__7710;
i__7639_7697 = G__7711;
continue;
} else {
var vec__7649_7712 = cljs.core.first.call(null,seq__7636_7706__$1);
var pno_7713 = cljs.core.nth.call(null,vec__7649_7712,(0),null);
var pmask_7714 = cljs.core.nth.call(null,vec__7649_7712,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_7713,"$ = ",pmask_7714,";");


var G__7715 = cljs.core.next.call(null,seq__7636_7706__$1);
var G__7716 = null;
var G__7717 = (0);
var G__7718 = (0);
seq__7636_7694 = G__7715;
chunk__7637_7695 = G__7716;
count__7638_7696 = G__7717;
i__7639_7697 = G__7718;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__7719){
var map__7720 = p__7719;
var map__7720__$1 = (((((!((map__7720 == null))))?(((((map__7720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7720):map__7720);
var t = cljs.core.get.call(null,map__7720__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__7720__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__7720__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__7720__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__7720__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__7722_7746 = cljs.core.seq.call(null,protocols);
var chunk__7723_7747 = null;
var count__7724_7748 = (0);
var i__7725_7749 = (0);
while(true){
if((i__7725_7749 < count__7724_7748)){
var protocol_7750 = cljs.core._nth.call(null,chunk__7723_7747,i__7725_7749);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_7750)),"}");


var G__7751 = seq__7722_7746;
var G__7752 = chunk__7723_7747;
var G__7753 = count__7724_7748;
var G__7754 = (i__7725_7749 + (1));
seq__7722_7746 = G__7751;
chunk__7723_7747 = G__7752;
count__7724_7748 = G__7753;
i__7725_7749 = G__7754;
continue;
} else {
var temp__5720__auto___7755 = cljs.core.seq.call(null,seq__7722_7746);
if(temp__5720__auto___7755){
var seq__7722_7756__$1 = temp__5720__auto___7755;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7722_7756__$1)){
var c__4550__auto___7757 = cljs.core.chunk_first.call(null,seq__7722_7756__$1);
var G__7758 = cljs.core.chunk_rest.call(null,seq__7722_7756__$1);
var G__7759 = c__4550__auto___7757;
var G__7760 = cljs.core.count.call(null,c__4550__auto___7757);
var G__7761 = (0);
seq__7722_7746 = G__7758;
chunk__7723_7747 = G__7759;
count__7724_7748 = G__7760;
i__7725_7749 = G__7761;
continue;
} else {
var protocol_7762 = cljs.core.first.call(null,seq__7722_7756__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_7762)),"}");


var G__7763 = cljs.core.next.call(null,seq__7722_7756__$1);
var G__7764 = null;
var G__7765 = (0);
var G__7766 = (0);
seq__7722_7746 = G__7763;
chunk__7723_7747 = G__7764;
count__7724_7748 = G__7765;
i__7725_7749 = G__7766;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__7726_7767 = cljs.core.seq.call(null,fields__$1);
var chunk__7727_7768 = null;
var count__7728_7769 = (0);
var i__7729_7770 = (0);
while(true){
if((i__7729_7770 < count__7728_7769)){
var fld_7771 = cljs.core._nth.call(null,chunk__7727_7768,i__7729_7770);
cljs.compiler.emitln.call(null,"this.",fld_7771," = ",fld_7771,";");


var G__7772 = seq__7726_7767;
var G__7773 = chunk__7727_7768;
var G__7774 = count__7728_7769;
var G__7775 = (i__7729_7770 + (1));
seq__7726_7767 = G__7772;
chunk__7727_7768 = G__7773;
count__7728_7769 = G__7774;
i__7729_7770 = G__7775;
continue;
} else {
var temp__5720__auto___7776 = cljs.core.seq.call(null,seq__7726_7767);
if(temp__5720__auto___7776){
var seq__7726_7777__$1 = temp__5720__auto___7776;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7726_7777__$1)){
var c__4550__auto___7778 = cljs.core.chunk_first.call(null,seq__7726_7777__$1);
var G__7779 = cljs.core.chunk_rest.call(null,seq__7726_7777__$1);
var G__7780 = c__4550__auto___7778;
var G__7781 = cljs.core.count.call(null,c__4550__auto___7778);
var G__7782 = (0);
seq__7726_7767 = G__7779;
chunk__7727_7768 = G__7780;
count__7728_7769 = G__7781;
i__7729_7770 = G__7782;
continue;
} else {
var fld_7783 = cljs.core.first.call(null,seq__7726_7777__$1);
cljs.compiler.emitln.call(null,"this.",fld_7783," = ",fld_7783,";");


var G__7784 = cljs.core.next.call(null,seq__7726_7777__$1);
var G__7785 = null;
var G__7786 = (0);
var G__7787 = (0);
seq__7726_7767 = G__7784;
chunk__7727_7768 = G__7785;
count__7728_7769 = G__7786;
i__7729_7770 = G__7787;
continue;
}
} else {
}
}
break;
}

var seq__7730_7788 = cljs.core.seq.call(null,pmasks);
var chunk__7731_7789 = null;
var count__7732_7790 = (0);
var i__7733_7791 = (0);
while(true){
if((i__7733_7791 < count__7732_7790)){
var vec__7740_7792 = cljs.core._nth.call(null,chunk__7731_7789,i__7733_7791);
var pno_7793 = cljs.core.nth.call(null,vec__7740_7792,(0),null);
var pmask_7794 = cljs.core.nth.call(null,vec__7740_7792,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_7793,"$ = ",pmask_7794,";");


var G__7795 = seq__7730_7788;
var G__7796 = chunk__7731_7789;
var G__7797 = count__7732_7790;
var G__7798 = (i__7733_7791 + (1));
seq__7730_7788 = G__7795;
chunk__7731_7789 = G__7796;
count__7732_7790 = G__7797;
i__7733_7791 = G__7798;
continue;
} else {
var temp__5720__auto___7799 = cljs.core.seq.call(null,seq__7730_7788);
if(temp__5720__auto___7799){
var seq__7730_7800__$1 = temp__5720__auto___7799;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7730_7800__$1)){
var c__4550__auto___7801 = cljs.core.chunk_first.call(null,seq__7730_7800__$1);
var G__7802 = cljs.core.chunk_rest.call(null,seq__7730_7800__$1);
var G__7803 = c__4550__auto___7801;
var G__7804 = cljs.core.count.call(null,c__4550__auto___7801);
var G__7805 = (0);
seq__7730_7788 = G__7802;
chunk__7731_7789 = G__7803;
count__7732_7790 = G__7804;
i__7733_7791 = G__7805;
continue;
} else {
var vec__7743_7806 = cljs.core.first.call(null,seq__7730_7800__$1);
var pno_7807 = cljs.core.nth.call(null,vec__7743_7806,(0),null);
var pmask_7808 = cljs.core.nth.call(null,vec__7743_7806,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_7807,"$ = ",pmask_7808,";");


var G__7809 = cljs.core.next.call(null,seq__7730_7800__$1);
var G__7810 = null;
var G__7811 = (0);
var G__7812 = (0);
seq__7730_7788 = G__7809;
chunk__7731_7789 = G__7810;
count__7732_7790 = G__7811;
i__7733_7791 = G__7812;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__7813){
var map__7814 = p__7813;
var map__7814__$1 = (((((!((map__7814 == null))))?(((((map__7814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7814):map__7814);
var target = cljs.core.get.call(null,map__7814__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__7814__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__7814__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__7814__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__7814__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6611__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6611__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6611__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__7816){
var map__7817 = p__7816;
var map__7817__$1 = (((((!((map__7817 == null))))?(((((map__7817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7817):map__7817);
var op = cljs.core.get.call(null,map__7817__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__7817__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__7817__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__7817__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__7817__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4120__auto__ = code;
if(cljs.core.truth_(and__4120__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4120__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__6611__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6611__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6611__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__7823 = cljs.core.seq.call(null,table);
var chunk__7824 = null;
var count__7825 = (0);
var i__7826 = (0);
while(true){
if((i__7826 < count__7825)){
var vec__7833 = cljs.core._nth.call(null,chunk__7824,i__7826);
var sym = cljs.core.nth.call(null,vec__7833,(0),null);
var value = cljs.core.nth.call(null,vec__7833,(1),null);
var ns_7839 = cljs.core.namespace.call(null,sym);
var name_7840 = cljs.core.name.call(null,sym);
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


var G__7841 = seq__7823;
var G__7842 = chunk__7824;
var G__7843 = count__7825;
var G__7844 = (i__7826 + (1));
seq__7823 = G__7841;
chunk__7824 = G__7842;
count__7825 = G__7843;
i__7826 = G__7844;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__7823);
if(temp__5720__auto__){
var seq__7823__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7823__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__7823__$1);
var G__7845 = cljs.core.chunk_rest.call(null,seq__7823__$1);
var G__7846 = c__4550__auto__;
var G__7847 = cljs.core.count.call(null,c__4550__auto__);
var G__7848 = (0);
seq__7823 = G__7845;
chunk__7824 = G__7846;
count__7825 = G__7847;
i__7826 = G__7848;
continue;
} else {
var vec__7836 = cljs.core.first.call(null,seq__7823__$1);
var sym = cljs.core.nth.call(null,vec__7836,(0),null);
var value = cljs.core.nth.call(null,vec__7836,(1),null);
var ns_7849 = cljs.core.namespace.call(null,sym);
var name_7850 = cljs.core.name.call(null,sym);
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


var G__7851 = cljs.core.next.call(null,seq__7823__$1);
var G__7852 = null;
var G__7853 = (0);
var G__7854 = (0);
seq__7823 = G__7851;
chunk__7824 = G__7852;
count__7825 = G__7853;
i__7826 = G__7854;
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
var G__7856 = arguments.length;
switch (G__7856) {
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
var k_7861 = cljs.core.first.call(null,ks);
var vec__7857_7862 = cljs.core.conj.call(null,prefix,k_7861);
var top_7863 = cljs.core.nth.call(null,vec__7857_7862,(0),null);
var prefix_SINGLEQUOTE__7864 = vec__7857_7862;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_7861)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__7864) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_7863)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_7863)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__7864)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_7863);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__7864)),";");
}
} else {
}

var m_7865 = cljs.core.get.call(null,externs,k_7861);
if(cljs.core.empty_QMARK_.call(null,m_7865)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__7864,m_7865,top_level,known_externs);
}

var G__7866 = cljs.core.next.call(null,ks);
ks = G__7866;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
