// Compiled by ClojureScript 1.10.520 {}
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
var map__15177 = s;
var map__15177__$1 = (((((!((map__15177 == null))))?(((((map__15177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15177):map__15177);
var name = cljs.core.get.call(null,map__15177__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__15177__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__15180 = info;
var map__15181 = G__15180;
var map__15181__$1 = (((((!((map__15181 == null))))?(((((map__15181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15181):map__15181);
var shadow = cljs.core.get.call(null,map__15181__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__15180__$1 = G__15180;
while(true){
var d__$2 = d__$1;
var map__15185 = G__15180__$1;
var map__15185__$1 = (((((!((map__15185 == null))))?(((((map__15185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15185):map__15185);
var shadow__$1 = cljs.core.get.call(null,map__15185__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__15187 = (d__$2 + (1));
var G__15188 = shadow__$1;
d__$1 = G__15187;
G__15180__$1 = G__15188;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__15189){
var map__15190 = p__15189;
var map__15190__$1 = (((((!((map__15190 == null))))?(((((map__15190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15190):map__15190);
var name_var = map__15190__$1;
var name = cljs.core.get.call(null,map__15190__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__15190__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__15192 = info;
var map__15192__$1 = (((((!((map__15192 == null))))?(((((map__15192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15192):map__15192);
var ns = cljs.core.get.call(null,map__15192__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__15192__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__15195 = arguments.length;
switch (G__15195) {
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
var G__15197 = cp;
switch (G__15197) {
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
var seq__15199_15203 = cljs.core.seq.call(null,s);
var chunk__15200_15204 = null;
var count__15201_15205 = (0);
var i__15202_15206 = (0);
while(true){
if((i__15202_15206 < count__15201_15205)){
var c_15207 = cljs.core._nth.call(null,chunk__15200_15204,i__15202_15206);
sb.append(cljs.compiler.escape_char.call(null,c_15207));


var G__15208 = seq__15199_15203;
var G__15209 = chunk__15200_15204;
var G__15210 = count__15201_15205;
var G__15211 = (i__15202_15206 + (1));
seq__15199_15203 = G__15208;
chunk__15200_15204 = G__15209;
count__15201_15205 = G__15210;
i__15202_15206 = G__15211;
continue;
} else {
var temp__5720__auto___15212 = cljs.core.seq.call(null,seq__15199_15203);
if(temp__5720__auto___15212){
var seq__15199_15213__$1 = temp__5720__auto___15212;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15199_15213__$1)){
var c__4550__auto___15214 = cljs.core.chunk_first.call(null,seq__15199_15213__$1);
var G__15215 = cljs.core.chunk_rest.call(null,seq__15199_15213__$1);
var G__15216 = c__4550__auto___15214;
var G__15217 = cljs.core.count.call(null,c__4550__auto___15214);
var G__15218 = (0);
seq__15199_15203 = G__15215;
chunk__15200_15204 = G__15216;
count__15201_15205 = G__15217;
i__15202_15206 = G__15218;
continue;
} else {
var c_15219 = cljs.core.first.call(null,seq__15199_15213__$1);
sb.append(cljs.compiler.escape_char.call(null,c_15219));


var G__15220 = cljs.core.next.call(null,seq__15199_15213__$1);
var G__15221 = null;
var G__15222 = (0);
var G__15223 = (0);
seq__15199_15203 = G__15220;
chunk__15200_15204 = G__15221;
count__15201_15205 = G__15222;
i__15202_15206 = G__15223;
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
var map__15224_15229 = ast;
var map__15224_15230__$1 = (((((!((map__15224_15229 == null))))?(((((map__15224_15229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15224_15229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15224_15229):map__15224_15229);
var env_15231 = cljs.core.get.call(null,map__15224_15230__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_15231))){
var map__15226_15232 = env_15231;
var map__15226_15233__$1 = (((((!((map__15226_15232 == null))))?(((((map__15226_15232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15226_15232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15226_15232):map__15226_15232);
var line_15234 = cljs.core.get.call(null,map__15226_15233__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_15235 = cljs.core.get.call(null,map__15226_15233__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__15226_15232,map__15226_15233__$1,line_15234,column_15235,map__15224_15229,map__15224_15230__$1,env_15231){
return (function (m){
var minfo = (function (){var G__15228 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__15228,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__15228;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_15234 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__15226_15232,map__15226_15233__$1,line_15234,column_15235,map__15224_15229,map__15224_15230__$1,env_15231){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_15235)?(column_15235 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__15226_15232,map__15226_15233__$1,line_15234,column_15235,map__15224_15229,map__15224_15230__$1,env_15231){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__15226_15232,map__15226_15233__$1,line_15234,column_15235,map__15224_15229,map__15224_15230__$1,env_15231))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__15226_15232,map__15226_15233__$1,line_15234,column_15235,map__15224_15229,map__15224_15230__$1,env_15231))
,cljs.core.sorted_map.call(null)));
});})(map__15226_15232,map__15226_15233__$1,line_15234,column_15235,map__15224_15229,map__15224_15230__$1,env_15231))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__15244 = arguments.length;
switch (G__15244) {
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
var len__4730__auto___15251 = arguments.length;
var i__4731__auto___15252 = (0);
while(true){
if((i__4731__auto___15252 < len__4730__auto___15251)){
args_arr__4751__auto__.push((arguments[i__4731__auto___15252]));

var G__15253 = (i__4731__auto___15252 + (1));
i__4731__auto___15252 = G__15253;
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
var s_15254 = (function (){var G__15245 = a;
if((!(typeof a === 'string'))){
return G__15245.toString();
} else {
return G__15245;
}
})();
var temp__5724__auto___15255 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5724__auto___15255 == null)){
} else {
var sm_data_15256 = temp__5724__auto___15255;
cljs.core.swap_BANG_.call(null,sm_data_15256,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_15256,temp__5724__auto___15255,s_15254){
return (function (p1__15236_SHARP_){
return (p1__15236_SHARP_ + s_15254.length);
});})(sm_data_15256,temp__5724__auto___15255,s_15254))
);
}

cljs.core.print.call(null,s_15254);

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

var seq__15246 = cljs.core.seq.call(null,xs);
var chunk__15247 = null;
var count__15248 = (0);
var i__15249 = (0);
while(true){
if((i__15249 < count__15248)){
var x = cljs.core._nth.call(null,chunk__15247,i__15249);
cljs.compiler.emits.call(null,x);


var G__15257 = seq__15246;
var G__15258 = chunk__15247;
var G__15259 = count__15248;
var G__15260 = (i__15249 + (1));
seq__15246 = G__15257;
chunk__15247 = G__15258;
count__15248 = G__15259;
i__15249 = G__15260;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__15246);
if(temp__5720__auto__){
var seq__15246__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15246__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__15246__$1);
var G__15261 = cljs.core.chunk_rest.call(null,seq__15246__$1);
var G__15262 = c__4550__auto__;
var G__15263 = cljs.core.count.call(null,c__4550__auto__);
var G__15264 = (0);
seq__15246 = G__15261;
chunk__15247 = G__15262;
count__15248 = G__15263;
i__15249 = G__15264;
continue;
} else {
var x = cljs.core.first.call(null,seq__15246__$1);
cljs.compiler.emits.call(null,x);


var G__15265 = cljs.core.next.call(null,seq__15246__$1);
var G__15266 = null;
var G__15267 = (0);
var G__15268 = (0);
seq__15246 = G__15265;
chunk__15247 = G__15266;
count__15248 = G__15267;
i__15249 = G__15268;
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
cljs.compiler.emits.cljs$lang$applyTo = (function (seq15238){
var G__15239 = cljs.core.first.call(null,seq15238);
var seq15238__$1 = cljs.core.next.call(null,seq15238);
var G__15240 = cljs.core.first.call(null,seq15238__$1);
var seq15238__$2 = cljs.core.next.call(null,seq15238__$1);
var G__15241 = cljs.core.first.call(null,seq15238__$2);
var seq15238__$3 = cljs.core.next.call(null,seq15238__$2);
var G__15242 = cljs.core.first.call(null,seq15238__$3);
var seq15238__$4 = cljs.core.next.call(null,seq15238__$3);
var G__15243 = cljs.core.first.call(null,seq15238__$4);
var seq15238__$5 = cljs.core.next.call(null,seq15238__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15239,G__15240,G__15241,G__15242,G__15243,seq15238__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__15269){
var map__15270 = p__15269;
var map__15270__$1 = (((((!((map__15270 == null))))?(((((map__15270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15270):map__15270);
var m = map__15270__$1;
var gen_line = cljs.core.get.call(null,map__15270__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__15279 = arguments.length;
switch (G__15279) {
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
var len__4730__auto___15285 = arguments.length;
var i__4731__auto___15286 = (0);
while(true){
if((i__4731__auto___15286 < len__4730__auto___15285)){
args_arr__4751__auto__.push((arguments[i__4731__auto___15286]));

var G__15287 = (i__4731__auto___15286 + (1));
i__4731__auto___15286 = G__15287;
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

var seq__15280_15288 = cljs.core.seq.call(null,xs);
var chunk__15281_15289 = null;
var count__15282_15290 = (0);
var i__15283_15291 = (0);
while(true){
if((i__15283_15291 < count__15282_15290)){
var x_15292 = cljs.core._nth.call(null,chunk__15281_15289,i__15283_15291);
cljs.compiler.emits.call(null,x_15292);


var G__15293 = seq__15280_15288;
var G__15294 = chunk__15281_15289;
var G__15295 = count__15282_15290;
var G__15296 = (i__15283_15291 + (1));
seq__15280_15288 = G__15293;
chunk__15281_15289 = G__15294;
count__15282_15290 = G__15295;
i__15283_15291 = G__15296;
continue;
} else {
var temp__5720__auto___15297 = cljs.core.seq.call(null,seq__15280_15288);
if(temp__5720__auto___15297){
var seq__15280_15298__$1 = temp__5720__auto___15297;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15280_15298__$1)){
var c__4550__auto___15299 = cljs.core.chunk_first.call(null,seq__15280_15298__$1);
var G__15300 = cljs.core.chunk_rest.call(null,seq__15280_15298__$1);
var G__15301 = c__4550__auto___15299;
var G__15302 = cljs.core.count.call(null,c__4550__auto___15299);
var G__15303 = (0);
seq__15280_15288 = G__15300;
chunk__15281_15289 = G__15301;
count__15282_15290 = G__15302;
i__15283_15291 = G__15303;
continue;
} else {
var x_15304 = cljs.core.first.call(null,seq__15280_15298__$1);
cljs.compiler.emits.call(null,x_15304);


var G__15305 = cljs.core.next.call(null,seq__15280_15298__$1);
var G__15306 = null;
var G__15307 = (0);
var G__15308 = (0);
seq__15280_15288 = G__15305;
chunk__15281_15289 = G__15306;
count__15282_15290 = G__15307;
i__15283_15291 = G__15308;
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
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq15273){
var G__15274 = cljs.core.first.call(null,seq15273);
var seq15273__$1 = cljs.core.next.call(null,seq15273);
var G__15275 = cljs.core.first.call(null,seq15273__$1);
var seq15273__$2 = cljs.core.next.call(null,seq15273__$1);
var G__15276 = cljs.core.first.call(null,seq15273__$2);
var seq15273__$3 = cljs.core.next.call(null,seq15273__$2);
var G__15277 = cljs.core.first.call(null,seq15273__$3);
var seq15273__$4 = cljs.core.next.call(null,seq15273__$3);
var G__15278 = cljs.core.first.call(null,seq15273__$4);
var seq15273__$5 = cljs.core.next.call(null,seq15273__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15274,G__15275,G__15276,G__15277,G__15278,seq15273__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__15309_15313 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15310_15314 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15311_15315 = true;
var _STAR_print_fn_STAR__temp_val__15312_15316 = ((function (_STAR_print_newline_STAR__orig_val__15309_15313,_STAR_print_fn_STAR__orig_val__15310_15314,_STAR_print_newline_STAR__temp_val__15311_15315,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__15309_15313,_STAR_print_fn_STAR__orig_val__15310_15314,_STAR_print_newline_STAR__temp_val__15311_15315,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15311_15315;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15312_15316;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15310_15314;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15309_15313;
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
var vec__15317 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__15317,(0),null);
var name = cljs.core.nth.call(null,vec__15317,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,((function (vec__15317,ns,name){
return (function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
});})(vec__15317,ns,name))
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
var vec__15320 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__15320,(0),null);
var flags = cljs.core.nth.call(null,vec__15320,(1),null);
var pattern = cljs.core.nth.call(null,vec__15320,(2),null);
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
return (function (p1__15323_SHARP_){
return ((function (items){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__15323_SHARP_);
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
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__15325){
var map__15326 = p__15325;
var map__15326__$1 = (((((!((map__15326 == null))))?(((((map__15326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15326):map__15326);
var ast = map__15326__$1;
var info = cljs.core.get.call(null,map__15326__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__15326__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__15326__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5718__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5718__auto__)){
var const_expr = temp__5718__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__15328 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__15328__$1 = (((((!((map__15328 == null))))?(((((map__15328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15328):map__15328);
var cenv = map__15328__$1;
var options = cljs.core.get.call(null,map__15328__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__15330 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4120__auto__;
}
})())){
return clojure.set.difference.call(null,G__15330,cljs.analyzer.es5_allowed);
} else {
return G__15330;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4131__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__15331 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__15331,reserved);
} else {
return G__15331;
}
})();
var env__15169__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15169__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__15332_15333 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__15332_15334__$1 = (((G__15332_15333 instanceof cljs.core.Keyword))?G__15332_15333.fqn:null);
switch (G__15332_15334__$1) {
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15169__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__15336){
var map__15337 = p__15336;
var map__15337__$1 = (((((!((map__15337 == null))))?(((((map__15337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15337):map__15337);
var arg = map__15337__$1;
var env = cljs.core.get.call(null,map__15337__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__15337__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__15337__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__15337__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__15339 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__15339__$1 = (((((!((map__15339 == null))))?(((((map__15339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15339):map__15339);
var name = cljs.core.get.call(null,map__15339__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__15169__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15169__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15169__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__15341){
var map__15342 = p__15341;
var map__15342__$1 = (((((!((map__15342 == null))))?(((((map__15342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15342):map__15342);
var expr = cljs.core.get.call(null,map__15342__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__15342__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__15342__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15169__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15169__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15169__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,((function (keys__$1){
return (function (p1__15344_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__15344_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__15345){
var map__15346 = p__15345;
var map__15346__$1 = (((((!((map__15346 == null))))?(((((map__15346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15346):map__15346);
var env = cljs.core.get.call(null,map__15346__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__15346__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__15346__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__15169__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15169__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15169__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__15348){
var map__15349 = p__15348;
var map__15349__$1 = (((((!((map__15349 == null))))?(((((map__15349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15349):map__15349);
var items = cljs.core.get.call(null,map__15349__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__15349__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15169__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15169__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15169__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,((function (items__$1){
return (function (p1__15351_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__15351_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__15352){
var map__15353 = p__15352;
var map__15353__$1 = (((((!((map__15353 == null))))?(((((map__15353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15353):map__15353);
var items = cljs.core.get.call(null,map__15353__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__15353__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15169__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15169__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15169__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5720__auto___15377 = cljs.core.seq.call(null,items);
if(temp__5720__auto___15377){
var items_15378__$1 = temp__5720__auto___15377;
var vec__15355_15379 = items_15378__$1;
var seq__15356_15380 = cljs.core.seq.call(null,vec__15355_15379);
var first__15357_15381 = cljs.core.first.call(null,seq__15356_15380);
var seq__15356_15382__$1 = cljs.core.next.call(null,seq__15356_15380);
var vec__15358_15383 = first__15357_15381;
var k_15384 = cljs.core.nth.call(null,vec__15358_15383,(0),null);
var v_15385 = cljs.core.nth.call(null,vec__15358_15383,(1),null);
var r_15386 = seq__15356_15382__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_15384),"\": ",emit_js_object_val.call(null,v_15385));

var seq__15361_15387 = cljs.core.seq.call(null,r_15386);
var chunk__15362_15388 = null;
var count__15363_15389 = (0);
var i__15364_15390 = (0);
while(true){
if((i__15364_15390 < count__15363_15389)){
var vec__15371_15391 = cljs.core._nth.call(null,chunk__15362_15388,i__15364_15390);
var k_15392__$1 = cljs.core.nth.call(null,vec__15371_15391,(0),null);
var v_15393__$1 = cljs.core.nth.call(null,vec__15371_15391,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_15392__$1),"\": ",emit_js_object_val.call(null,v_15393__$1));


var G__15394 = seq__15361_15387;
var G__15395 = chunk__15362_15388;
var G__15396 = count__15363_15389;
var G__15397 = (i__15364_15390 + (1));
seq__15361_15387 = G__15394;
chunk__15362_15388 = G__15395;
count__15363_15389 = G__15396;
i__15364_15390 = G__15397;
continue;
} else {
var temp__5720__auto___15398__$1 = cljs.core.seq.call(null,seq__15361_15387);
if(temp__5720__auto___15398__$1){
var seq__15361_15399__$1 = temp__5720__auto___15398__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15361_15399__$1)){
var c__4550__auto___15400 = cljs.core.chunk_first.call(null,seq__15361_15399__$1);
var G__15401 = cljs.core.chunk_rest.call(null,seq__15361_15399__$1);
var G__15402 = c__4550__auto___15400;
var G__15403 = cljs.core.count.call(null,c__4550__auto___15400);
var G__15404 = (0);
seq__15361_15387 = G__15401;
chunk__15362_15388 = G__15402;
count__15363_15389 = G__15403;
i__15364_15390 = G__15404;
continue;
} else {
var vec__15374_15405 = cljs.core.first.call(null,seq__15361_15399__$1);
var k_15406__$1 = cljs.core.nth.call(null,vec__15374_15405,(0),null);
var v_15407__$1 = cljs.core.nth.call(null,vec__15374_15405,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_15406__$1),"\": ",emit_js_object_val.call(null,v_15407__$1));


var G__15408 = cljs.core.next.call(null,seq__15361_15399__$1);
var G__15409 = null;
var G__15410 = (0);
var G__15411 = (0);
seq__15361_15387 = G__15408;
chunk__15362_15388 = G__15409;
count__15363_15389 = G__15410;
i__15364_15390 = G__15411;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__15412){
var map__15413 = p__15412;
var map__15413__$1 = (((((!((map__15413 == null))))?(((((map__15413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15413):map__15413);
var keys = cljs.core.get.call(null,map__15413__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__15413__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__15413__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15169__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15169__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15169__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__15415){
var map__15416 = p__15415;
var map__15416__$1 = (((((!((map__15416 == null))))?(((((map__15416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15416):map__15416);
var items = cljs.core.get.call(null,map__15416__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__15416__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15169__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15169__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15169__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__15418){
var map__15419 = p__15418;
var map__15419__$1 = (((((!((map__15419 == null))))?(((((map__15419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15419):map__15419);
var expr = cljs.core.get.call(null,map__15419__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__15421){
var map__15422 = p__15421;
var map__15422__$1 = (((((!((map__15422 == null))))?(((((map__15422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15422):map__15422);
var form = cljs.core.get.call(null,map__15422__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__15422__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__15169__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15169__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15169__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__15424 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__15424__$1 = (((((!((map__15424 == null))))?(((((map__15424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15424):map__15424);
var op = cljs.core.get.call(null,map__15424__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__15424__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__15424__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__15426 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__15426__$1 = (((((!((map__15426 == null))))?(((((map__15426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15426):map__15426);
var op = cljs.core.get.call(null,map__15426__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__15426__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__15426__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__15428){
var map__15429 = p__15428;
var map__15429__$1 = (((((!((map__15429 == null))))?(((((map__15429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15429):map__15429);
var test = cljs.core.get.call(null,map__15429__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__15429__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__15429__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__15429__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__15429__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__15431){
var map__15432 = p__15431;
var map__15432__$1 = (((((!((map__15432 == null))))?(((((map__15432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15432):map__15432);
var v = cljs.core.get.call(null,map__15432__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__15432__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__15432__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__15432__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__15434_15470 = cljs.core.seq.call(null,nodes);
var chunk__15435_15471 = null;
var count__15436_15472 = (0);
var i__15437_15473 = (0);
while(true){
if((i__15437_15473 < count__15436_15472)){
var map__15454_15474 = cljs.core._nth.call(null,chunk__15435_15471,i__15437_15473);
var map__15454_15475__$1 = (((((!((map__15454_15474 == null))))?(((((map__15454_15474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15454_15474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15454_15474):map__15454_15474);
var ts_15476 = cljs.core.get.call(null,map__15454_15475__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__15455_15477 = cljs.core.get.call(null,map__15454_15475__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__15455_15478__$1 = (((((!((map__15455_15477 == null))))?(((((map__15455_15477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15455_15477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15455_15477):map__15455_15477);
var then_15479 = cljs.core.get.call(null,map__15455_15478__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__15458_15480 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_15476));
var chunk__15459_15481 = null;
var count__15460_15482 = (0);
var i__15461_15483 = (0);
while(true){
if((i__15461_15483 < count__15460_15482)){
var test_15484 = cljs.core._nth.call(null,chunk__15459_15481,i__15461_15483);
cljs.compiler.emitln.call(null,"case ",test_15484,":");


var G__15485 = seq__15458_15480;
var G__15486 = chunk__15459_15481;
var G__15487 = count__15460_15482;
var G__15488 = (i__15461_15483 + (1));
seq__15458_15480 = G__15485;
chunk__15459_15481 = G__15486;
count__15460_15482 = G__15487;
i__15461_15483 = G__15488;
continue;
} else {
var temp__5720__auto___15489 = cljs.core.seq.call(null,seq__15458_15480);
if(temp__5720__auto___15489){
var seq__15458_15490__$1 = temp__5720__auto___15489;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15458_15490__$1)){
var c__4550__auto___15491 = cljs.core.chunk_first.call(null,seq__15458_15490__$1);
var G__15492 = cljs.core.chunk_rest.call(null,seq__15458_15490__$1);
var G__15493 = c__4550__auto___15491;
var G__15494 = cljs.core.count.call(null,c__4550__auto___15491);
var G__15495 = (0);
seq__15458_15480 = G__15492;
chunk__15459_15481 = G__15493;
count__15460_15482 = G__15494;
i__15461_15483 = G__15495;
continue;
} else {
var test_15496 = cljs.core.first.call(null,seq__15458_15490__$1);
cljs.compiler.emitln.call(null,"case ",test_15496,":");


var G__15497 = cljs.core.next.call(null,seq__15458_15490__$1);
var G__15498 = null;
var G__15499 = (0);
var G__15500 = (0);
seq__15458_15480 = G__15497;
chunk__15459_15481 = G__15498;
count__15460_15482 = G__15499;
i__15461_15483 = G__15500;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_15479);
} else {
cljs.compiler.emitln.call(null,then_15479);
}

cljs.compiler.emitln.call(null,"break;");


var G__15501 = seq__15434_15470;
var G__15502 = chunk__15435_15471;
var G__15503 = count__15436_15472;
var G__15504 = (i__15437_15473 + (1));
seq__15434_15470 = G__15501;
chunk__15435_15471 = G__15502;
count__15436_15472 = G__15503;
i__15437_15473 = G__15504;
continue;
} else {
var temp__5720__auto___15505 = cljs.core.seq.call(null,seq__15434_15470);
if(temp__5720__auto___15505){
var seq__15434_15506__$1 = temp__5720__auto___15505;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15434_15506__$1)){
var c__4550__auto___15507 = cljs.core.chunk_first.call(null,seq__15434_15506__$1);
var G__15508 = cljs.core.chunk_rest.call(null,seq__15434_15506__$1);
var G__15509 = c__4550__auto___15507;
var G__15510 = cljs.core.count.call(null,c__4550__auto___15507);
var G__15511 = (0);
seq__15434_15470 = G__15508;
chunk__15435_15471 = G__15509;
count__15436_15472 = G__15510;
i__15437_15473 = G__15511;
continue;
} else {
var map__15462_15512 = cljs.core.first.call(null,seq__15434_15506__$1);
var map__15462_15513__$1 = (((((!((map__15462_15512 == null))))?(((((map__15462_15512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15462_15512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15462_15512):map__15462_15512);
var ts_15514 = cljs.core.get.call(null,map__15462_15513__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__15463_15515 = cljs.core.get.call(null,map__15462_15513__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__15463_15516__$1 = (((((!((map__15463_15515 == null))))?(((((map__15463_15515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15463_15515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15463_15515):map__15463_15515);
var then_15517 = cljs.core.get.call(null,map__15463_15516__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__15466_15518 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_15514));
var chunk__15467_15519 = null;
var count__15468_15520 = (0);
var i__15469_15521 = (0);
while(true){
if((i__15469_15521 < count__15468_15520)){
var test_15522 = cljs.core._nth.call(null,chunk__15467_15519,i__15469_15521);
cljs.compiler.emitln.call(null,"case ",test_15522,":");


var G__15523 = seq__15466_15518;
var G__15524 = chunk__15467_15519;
var G__15525 = count__15468_15520;
var G__15526 = (i__15469_15521 + (1));
seq__15466_15518 = G__15523;
chunk__15467_15519 = G__15524;
count__15468_15520 = G__15525;
i__15469_15521 = G__15526;
continue;
} else {
var temp__5720__auto___15527__$1 = cljs.core.seq.call(null,seq__15466_15518);
if(temp__5720__auto___15527__$1){
var seq__15466_15528__$1 = temp__5720__auto___15527__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15466_15528__$1)){
var c__4550__auto___15529 = cljs.core.chunk_first.call(null,seq__15466_15528__$1);
var G__15530 = cljs.core.chunk_rest.call(null,seq__15466_15528__$1);
var G__15531 = c__4550__auto___15529;
var G__15532 = cljs.core.count.call(null,c__4550__auto___15529);
var G__15533 = (0);
seq__15466_15518 = G__15530;
chunk__15467_15519 = G__15531;
count__15468_15520 = G__15532;
i__15469_15521 = G__15533;
continue;
} else {
var test_15534 = cljs.core.first.call(null,seq__15466_15528__$1);
cljs.compiler.emitln.call(null,"case ",test_15534,":");


var G__15535 = cljs.core.next.call(null,seq__15466_15528__$1);
var G__15536 = null;
var G__15537 = (0);
var G__15538 = (0);
seq__15466_15518 = G__15535;
chunk__15467_15519 = G__15536;
count__15468_15520 = G__15537;
i__15469_15521 = G__15538;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_15517);
} else {
cljs.compiler.emitln.call(null,then_15517);
}

cljs.compiler.emitln.call(null,"break;");


var G__15539 = cljs.core.next.call(null,seq__15434_15506__$1);
var G__15540 = null;
var G__15541 = (0);
var G__15542 = (0);
seq__15434_15470 = G__15539;
chunk__15435_15471 = G__15540;
count__15436_15472 = G__15541;
i__15437_15473 = G__15542;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__15543){
var map__15544 = p__15543;
var map__15544__$1 = (((((!((map__15544 == null))))?(((((map__15544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15544):map__15544);
var throw$ = cljs.core.get.call(null,map__15544__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__15544__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__15547 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__15547,(0),null);
var rstr = cljs.core.nth.call(null,vec__15547,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__15547,fstr,rstr,ret_t,axstr){
return (function (p1__15546_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__15546_SHARP_);
});})(idx,vec__15547,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__15550 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__15550,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__15550;
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
return (function (p1__15551_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__15551_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__15552 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__15553 = cljs.core.seq.call(null,vec__15552);
var first__15554 = cljs.core.first.call(null,seq__15553);
var seq__15553__$1 = cljs.core.next.call(null,seq__15553);
var p = first__15554;
var first__15554__$1 = cljs.core.first.call(null,seq__15553__$1);
var seq__15553__$2 = cljs.core.next.call(null,seq__15553__$1);
var ts = first__15554__$1;
var first__15554__$2 = cljs.core.first.call(null,seq__15553__$2);
var seq__15553__$3 = cljs.core.next.call(null,seq__15553__$2);
var n = first__15554__$2;
var xs = seq__15553__$3;
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
var vec__15555 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__15556 = cljs.core.seq.call(null,vec__15555);
var first__15557 = cljs.core.first.call(null,seq__15556);
var seq__15556__$1 = cljs.core.next.call(null,seq__15556);
var p = first__15557;
var first__15557__$1 = cljs.core.first.call(null,seq__15556__$1);
var seq__15556__$2 = cljs.core.next.call(null,seq__15556__$1);
var ts = first__15557__$1;
var xs = seq__15556__$2;
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
var G__15560 = arguments.length;
switch (G__15560) {
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
var vec__15568 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__15558_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__15558_SHARP_);
} else {
return p1__15558_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__15569 = cljs.core.seq.call(null,vec__15568);
var first__15570 = cljs.core.first.call(null,seq__15569);
var seq__15569__$1 = cljs.core.next.call(null,seq__15569);
var x = first__15570;
var ys = seq__15569__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__15571 = cljs.core.seq.call(null,ys);
var chunk__15572 = null;
var count__15573 = (0);
var i__15574 = (0);
while(true){
if((i__15574 < count__15573)){
var next_line = cljs.core._nth.call(null,chunk__15572,i__15574);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__15580 = seq__15571;
var G__15581 = chunk__15572;
var G__15582 = count__15573;
var G__15583 = (i__15574 + (1));
seq__15571 = G__15580;
chunk__15572 = G__15581;
count__15573 = G__15582;
i__15574 = G__15583;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__15571);
if(temp__5720__auto__){
var seq__15571__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15571__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__15571__$1);
var G__15584 = cljs.core.chunk_rest.call(null,seq__15571__$1);
var G__15585 = c__4550__auto__;
var G__15586 = cljs.core.count.call(null,c__4550__auto__);
var G__15587 = (0);
seq__15571 = G__15584;
chunk__15572 = G__15585;
count__15573 = G__15586;
i__15574 = G__15587;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__15571__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__15588 = cljs.core.next.call(null,seq__15571__$1);
var G__15589 = null;
var G__15590 = (0);
var G__15591 = (0);
seq__15571 = G__15588;
chunk__15572 = G__15589;
count__15573 = G__15590;
i__15574 = G__15591;
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

var seq__15575_15592 = cljs.core.seq.call(null,docs__$2);
var chunk__15576_15593 = null;
var count__15577_15594 = (0);
var i__15578_15595 = (0);
while(true){
if((i__15578_15595 < count__15577_15594)){
var e_15596 = cljs.core._nth.call(null,chunk__15576_15593,i__15578_15595);
if(cljs.core.truth_(e_15596)){
print_comment_lines.call(null,e_15596);
} else {
}


var G__15597 = seq__15575_15592;
var G__15598 = chunk__15576_15593;
var G__15599 = count__15577_15594;
var G__15600 = (i__15578_15595 + (1));
seq__15575_15592 = G__15597;
chunk__15576_15593 = G__15598;
count__15577_15594 = G__15599;
i__15578_15595 = G__15600;
continue;
} else {
var temp__5720__auto___15601 = cljs.core.seq.call(null,seq__15575_15592);
if(temp__5720__auto___15601){
var seq__15575_15602__$1 = temp__5720__auto___15601;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15575_15602__$1)){
var c__4550__auto___15603 = cljs.core.chunk_first.call(null,seq__15575_15602__$1);
var G__15604 = cljs.core.chunk_rest.call(null,seq__15575_15602__$1);
var G__15605 = c__4550__auto___15603;
var G__15606 = cljs.core.count.call(null,c__4550__auto___15603);
var G__15607 = (0);
seq__15575_15592 = G__15604;
chunk__15576_15593 = G__15605;
count__15577_15594 = G__15606;
i__15578_15595 = G__15607;
continue;
} else {
var e_15608 = cljs.core.first.call(null,seq__15575_15602__$1);
if(cljs.core.truth_(e_15608)){
print_comment_lines.call(null,e_15608);
} else {
}


var G__15609 = cljs.core.next.call(null,seq__15575_15602__$1);
var G__15610 = null;
var G__15611 = (0);
var G__15612 = (0);
seq__15575_15592 = G__15609;
chunk__15576_15593 = G__15610;
count__15577_15594 = G__15611;
i__15578_15595 = G__15612;
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
return (function (p1__15614_SHARP_){
return goog.string.startsWith(p1__15614_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__15615){
var map__15616 = p__15615;
var map__15616__$1 = (((((!((map__15616 == null))))?(((((map__15616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15616):map__15616);
var doc = cljs.core.get.call(null,map__15616__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__15616__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__15616__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.call(null,map__15616__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__15616__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__15616__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__15616__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__15616__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__15616__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__15618){
var map__15619 = p__15618;
var map__15619__$1 = (((((!((map__15619 == null))))?(((((map__15619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15619):map__15619);
var name = cljs.core.get.call(null,map__15619__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__15619__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__15619__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__15621_15645 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__15622_15646 = null;
var count__15623_15647 = (0);
var i__15624_15648 = (0);
while(true){
if((i__15624_15648 < count__15623_15647)){
var vec__15631_15649 = cljs.core._nth.call(null,chunk__15622_15646,i__15624_15648);
var i_15650 = cljs.core.nth.call(null,vec__15631_15649,(0),null);
var param_15651 = cljs.core.nth.call(null,vec__15631_15649,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_15651);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__15652 = seq__15621_15645;
var G__15653 = chunk__15622_15646;
var G__15654 = count__15623_15647;
var G__15655 = (i__15624_15648 + (1));
seq__15621_15645 = G__15652;
chunk__15622_15646 = G__15653;
count__15623_15647 = G__15654;
i__15624_15648 = G__15655;
continue;
} else {
var temp__5720__auto___15656 = cljs.core.seq.call(null,seq__15621_15645);
if(temp__5720__auto___15656){
var seq__15621_15657__$1 = temp__5720__auto___15656;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15621_15657__$1)){
var c__4550__auto___15658 = cljs.core.chunk_first.call(null,seq__15621_15657__$1);
var G__15659 = cljs.core.chunk_rest.call(null,seq__15621_15657__$1);
var G__15660 = c__4550__auto___15658;
var G__15661 = cljs.core.count.call(null,c__4550__auto___15658);
var G__15662 = (0);
seq__15621_15645 = G__15659;
chunk__15622_15646 = G__15660;
count__15623_15647 = G__15661;
i__15624_15648 = G__15662;
continue;
} else {
var vec__15634_15663 = cljs.core.first.call(null,seq__15621_15657__$1);
var i_15664 = cljs.core.nth.call(null,vec__15634_15663,(0),null);
var param_15665 = cljs.core.nth.call(null,vec__15634_15663,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_15665);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__15666 = cljs.core.next.call(null,seq__15621_15657__$1);
var G__15667 = null;
var G__15668 = (0);
var G__15669 = (0);
seq__15621_15645 = G__15666;
chunk__15622_15646 = G__15667;
count__15623_15647 = G__15668;
i__15624_15648 = G__15669;
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

var seq__15637_15670 = cljs.core.seq.call(null,params);
var chunk__15638_15671 = null;
var count__15639_15672 = (0);
var i__15640_15673 = (0);
while(true){
if((i__15640_15673 < count__15639_15672)){
var param_15674 = cljs.core._nth.call(null,chunk__15638_15671,i__15640_15673);
cljs.compiler.emit.call(null,param_15674);

if(cljs.core._EQ_.call(null,param_15674,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15675 = seq__15637_15670;
var G__15676 = chunk__15638_15671;
var G__15677 = count__15639_15672;
var G__15678 = (i__15640_15673 + (1));
seq__15637_15670 = G__15675;
chunk__15638_15671 = G__15676;
count__15639_15672 = G__15677;
i__15640_15673 = G__15678;
continue;
} else {
var temp__5720__auto___15679 = cljs.core.seq.call(null,seq__15637_15670);
if(temp__5720__auto___15679){
var seq__15637_15680__$1 = temp__5720__auto___15679;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15637_15680__$1)){
var c__4550__auto___15681 = cljs.core.chunk_first.call(null,seq__15637_15680__$1);
var G__15682 = cljs.core.chunk_rest.call(null,seq__15637_15680__$1);
var G__15683 = c__4550__auto___15681;
var G__15684 = cljs.core.count.call(null,c__4550__auto___15681);
var G__15685 = (0);
seq__15637_15670 = G__15682;
chunk__15638_15671 = G__15683;
count__15639_15672 = G__15684;
i__15640_15673 = G__15685;
continue;
} else {
var param_15686 = cljs.core.first.call(null,seq__15637_15680__$1);
cljs.compiler.emit.call(null,param_15686);

if(cljs.core._EQ_.call(null,param_15686,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15687 = cljs.core.next.call(null,seq__15637_15680__$1);
var G__15688 = null;
var G__15689 = (0);
var G__15690 = (0);
seq__15637_15670 = G__15687;
chunk__15638_15671 = G__15688;
count__15639_15672 = G__15689;
i__15640_15673 = G__15690;
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

var seq__15641_15691 = cljs.core.seq.call(null,params);
var chunk__15642_15692 = null;
var count__15643_15693 = (0);
var i__15644_15694 = (0);
while(true){
if((i__15644_15694 < count__15643_15693)){
var param_15695 = cljs.core._nth.call(null,chunk__15642_15692,i__15644_15694);
cljs.compiler.emit.call(null,param_15695);

if(cljs.core._EQ_.call(null,param_15695,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15696 = seq__15641_15691;
var G__15697 = chunk__15642_15692;
var G__15698 = count__15643_15693;
var G__15699 = (i__15644_15694 + (1));
seq__15641_15691 = G__15696;
chunk__15642_15692 = G__15697;
count__15643_15693 = G__15698;
i__15644_15694 = G__15699;
continue;
} else {
var temp__5720__auto___15700 = cljs.core.seq.call(null,seq__15641_15691);
if(temp__5720__auto___15700){
var seq__15641_15701__$1 = temp__5720__auto___15700;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15641_15701__$1)){
var c__4550__auto___15702 = cljs.core.chunk_first.call(null,seq__15641_15701__$1);
var G__15703 = cljs.core.chunk_rest.call(null,seq__15641_15701__$1);
var G__15704 = c__4550__auto___15702;
var G__15705 = cljs.core.count.call(null,c__4550__auto___15702);
var G__15706 = (0);
seq__15641_15691 = G__15703;
chunk__15642_15692 = G__15704;
count__15643_15693 = G__15705;
i__15644_15694 = G__15706;
continue;
} else {
var param_15707 = cljs.core.first.call(null,seq__15641_15701__$1);
cljs.compiler.emit.call(null,param_15707);

if(cljs.core._EQ_.call(null,param_15707,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15708 = cljs.core.next.call(null,seq__15641_15701__$1);
var G__15709 = null;
var G__15710 = (0);
var G__15711 = (0);
seq__15641_15691 = G__15708;
chunk__15642_15692 = G__15709;
count__15643_15693 = G__15710;
i__15644_15694 = G__15711;
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
var seq__15712 = cljs.core.seq.call(null,params);
var chunk__15713 = null;
var count__15714 = (0);
var i__15715 = (0);
while(true){
if((i__15715 < count__15714)){
var param = cljs.core._nth.call(null,chunk__15713,i__15715);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15716 = seq__15712;
var G__15717 = chunk__15713;
var G__15718 = count__15714;
var G__15719 = (i__15715 + (1));
seq__15712 = G__15716;
chunk__15713 = G__15717;
count__15714 = G__15718;
i__15715 = G__15719;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__15712);
if(temp__5720__auto__){
var seq__15712__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15712__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__15712__$1);
var G__15720 = cljs.core.chunk_rest.call(null,seq__15712__$1);
var G__15721 = c__4550__auto__;
var G__15722 = cljs.core.count.call(null,c__4550__auto__);
var G__15723 = (0);
seq__15712 = G__15720;
chunk__15713 = G__15721;
count__15714 = G__15722;
i__15715 = G__15723;
continue;
} else {
var param = cljs.core.first.call(null,seq__15712__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15724 = cljs.core.next.call(null,seq__15712__$1);
var G__15725 = null;
var G__15726 = (0);
var G__15727 = (0);
seq__15712 = G__15724;
chunk__15713 = G__15725;
count__15714 = G__15726;
i__15715 = G__15727;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__15728){
var map__15729 = p__15728;
var map__15729__$1 = (((((!((map__15729 == null))))?(((((map__15729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15729):map__15729);
var expr = cljs.core.get.call(null,map__15729__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__15729__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__15729__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__15729__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__15729__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__15729__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__15169__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15169__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15169__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__15731){
var map__15732 = p__15731;
var map__15732__$1 = (((((!((map__15732 == null))))?(((((map__15732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15732):map__15732);
var f = map__15732__$1;
var expr = cljs.core.get.call(null,map__15732__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__15732__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__15732__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__15732__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__15732__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__15732__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__15732__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__15732__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__15169__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15169__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_15742__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_15743 = cljs.compiler.munge.call(null,name_15742__$1);
var delegate_name_15744 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_15743),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_15744," = function (");

var seq__15734_15745 = cljs.core.seq.call(null,params);
var chunk__15735_15746 = null;
var count__15736_15747 = (0);
var i__15737_15748 = (0);
while(true){
if((i__15737_15748 < count__15736_15747)){
var param_15749 = cljs.core._nth.call(null,chunk__15735_15746,i__15737_15748);
cljs.compiler.emit.call(null,param_15749);

if(cljs.core._EQ_.call(null,param_15749,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15750 = seq__15734_15745;
var G__15751 = chunk__15735_15746;
var G__15752 = count__15736_15747;
var G__15753 = (i__15737_15748 + (1));
seq__15734_15745 = G__15750;
chunk__15735_15746 = G__15751;
count__15736_15747 = G__15752;
i__15737_15748 = G__15753;
continue;
} else {
var temp__5720__auto___15754 = cljs.core.seq.call(null,seq__15734_15745);
if(temp__5720__auto___15754){
var seq__15734_15755__$1 = temp__5720__auto___15754;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15734_15755__$1)){
var c__4550__auto___15756 = cljs.core.chunk_first.call(null,seq__15734_15755__$1);
var G__15757 = cljs.core.chunk_rest.call(null,seq__15734_15755__$1);
var G__15758 = c__4550__auto___15756;
var G__15759 = cljs.core.count.call(null,c__4550__auto___15756);
var G__15760 = (0);
seq__15734_15745 = G__15757;
chunk__15735_15746 = G__15758;
count__15736_15747 = G__15759;
i__15737_15748 = G__15760;
continue;
} else {
var param_15761 = cljs.core.first.call(null,seq__15734_15755__$1);
cljs.compiler.emit.call(null,param_15761);

if(cljs.core._EQ_.call(null,param_15761,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15762 = cljs.core.next.call(null,seq__15734_15755__$1);
var G__15763 = null;
var G__15764 = (0);
var G__15765 = (0);
seq__15734_15745 = G__15762;
chunk__15735_15746 = G__15763;
count__15736_15747 = G__15764;
i__15737_15748 = G__15765;
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

cljs.compiler.emitln.call(null,"var ",mname_15743," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_15766 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_15766,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_15744,".call(this,");

var seq__15738_15767 = cljs.core.seq.call(null,params);
var chunk__15739_15768 = null;
var count__15740_15769 = (0);
var i__15741_15770 = (0);
while(true){
if((i__15741_15770 < count__15740_15769)){
var param_15771 = cljs.core._nth.call(null,chunk__15739_15768,i__15741_15770);
cljs.compiler.emit.call(null,param_15771);

if(cljs.core._EQ_.call(null,param_15771,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15772 = seq__15738_15767;
var G__15773 = chunk__15739_15768;
var G__15774 = count__15740_15769;
var G__15775 = (i__15741_15770 + (1));
seq__15738_15767 = G__15772;
chunk__15739_15768 = G__15773;
count__15740_15769 = G__15774;
i__15741_15770 = G__15775;
continue;
} else {
var temp__5720__auto___15776 = cljs.core.seq.call(null,seq__15738_15767);
if(temp__5720__auto___15776){
var seq__15738_15777__$1 = temp__5720__auto___15776;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15738_15777__$1)){
var c__4550__auto___15778 = cljs.core.chunk_first.call(null,seq__15738_15777__$1);
var G__15779 = cljs.core.chunk_rest.call(null,seq__15738_15777__$1);
var G__15780 = c__4550__auto___15778;
var G__15781 = cljs.core.count.call(null,c__4550__auto___15778);
var G__15782 = (0);
seq__15738_15767 = G__15779;
chunk__15739_15768 = G__15780;
count__15740_15769 = G__15781;
i__15741_15770 = G__15782;
continue;
} else {
var param_15783 = cljs.core.first.call(null,seq__15738_15777__$1);
cljs.compiler.emit.call(null,param_15783);

if(cljs.core._EQ_.call(null,param_15783,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15784 = cljs.core.next.call(null,seq__15738_15777__$1);
var G__15785 = null;
var G__15786 = (0);
var G__15787 = (0);
seq__15738_15767 = G__15784;
chunk__15739_15768 = G__15785;
count__15740_15769 = G__15786;
i__15741_15770 = G__15787;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_15743,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_15743,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_15742__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_15743,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_15744,";");

cljs.compiler.emitln.call(null,"return ",mname_15743,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15169__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__15791){
var map__15792 = p__15791;
var map__15792__$1 = (((((!((map__15792 == null))))?(((((map__15792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15792):map__15792);
var variadic = cljs.core.get.call(null,map__15792__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__15792__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__15792__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__15792__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__15792__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__15792__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__15792__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__15792,map__15792__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__15788_SHARP_){
var and__4120__auto__ = p1__15788_SHARP_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__15788_SHARP_));
} else {
return and__4120__auto__;
}
});})(map__15792,map__15792__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
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
var name_15845__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_15846 = cljs.compiler.munge.call(null,name_15845__$1);
var maxparams_15847 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_15848 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_15845__$1,mname_15846,maxparams_15847,loop_locals,map__15792,map__15792__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_15846),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_15845__$1,mname_15846,maxparams_15847,loop_locals,map__15792,map__15792__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_15849 = cljs.core.sort_by.call(null,((function (name_15845__$1,mname_15846,maxparams_15847,mmap_15848,loop_locals,map__15792,map__15792__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__15789_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__15789_SHARP_)));
});})(name_15845__$1,mname_15846,maxparams_15847,mmap_15848,loop_locals,map__15792,map__15792__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_15848));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_15846," = null;");

var seq__15794_15850 = cljs.core.seq.call(null,ms_15849);
var chunk__15795_15851 = null;
var count__15796_15852 = (0);
var i__15797_15853 = (0);
while(true){
if((i__15797_15853 < count__15796_15852)){
var vec__15804_15854 = cljs.core._nth.call(null,chunk__15795_15851,i__15797_15853);
var n_15855 = cljs.core.nth.call(null,vec__15804_15854,(0),null);
var meth_15856 = cljs.core.nth.call(null,vec__15804_15854,(1),null);
cljs.compiler.emits.call(null,"var ",n_15855," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_15856))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_15856);
} else {
cljs.compiler.emit_fn_method.call(null,meth_15856);
}

cljs.compiler.emitln.call(null,";");


var G__15857 = seq__15794_15850;
var G__15858 = chunk__15795_15851;
var G__15859 = count__15796_15852;
var G__15860 = (i__15797_15853 + (1));
seq__15794_15850 = G__15857;
chunk__15795_15851 = G__15858;
count__15796_15852 = G__15859;
i__15797_15853 = G__15860;
continue;
} else {
var temp__5720__auto___15861 = cljs.core.seq.call(null,seq__15794_15850);
if(temp__5720__auto___15861){
var seq__15794_15862__$1 = temp__5720__auto___15861;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15794_15862__$1)){
var c__4550__auto___15863 = cljs.core.chunk_first.call(null,seq__15794_15862__$1);
var G__15864 = cljs.core.chunk_rest.call(null,seq__15794_15862__$1);
var G__15865 = c__4550__auto___15863;
var G__15866 = cljs.core.count.call(null,c__4550__auto___15863);
var G__15867 = (0);
seq__15794_15850 = G__15864;
chunk__15795_15851 = G__15865;
count__15796_15852 = G__15866;
i__15797_15853 = G__15867;
continue;
} else {
var vec__15807_15868 = cljs.core.first.call(null,seq__15794_15862__$1);
var n_15869 = cljs.core.nth.call(null,vec__15807_15868,(0),null);
var meth_15870 = cljs.core.nth.call(null,vec__15807_15868,(1),null);
cljs.compiler.emits.call(null,"var ",n_15869," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_15870))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_15870);
} else {
cljs.compiler.emit_fn_method.call(null,meth_15870);
}

cljs.compiler.emitln.call(null,";");


var G__15871 = cljs.core.next.call(null,seq__15794_15862__$1);
var G__15872 = null;
var G__15873 = (0);
var G__15874 = (0);
seq__15794_15850 = G__15871;
chunk__15795_15851 = G__15872;
count__15796_15852 = G__15873;
i__15797_15853 = G__15874;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_15846," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_15847),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_15847)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_15847));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__15810_15875 = cljs.core.seq.call(null,ms_15849);
var chunk__15811_15876 = null;
var count__15812_15877 = (0);
var i__15813_15878 = (0);
while(true){
if((i__15813_15878 < count__15812_15877)){
var vec__15820_15879 = cljs.core._nth.call(null,chunk__15811_15876,i__15813_15878);
var n_15880 = cljs.core.nth.call(null,vec__15820_15879,(0),null);
var meth_15881 = cljs.core.nth.call(null,vec__15820_15879,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_15881))){
cljs.compiler.emitln.call(null,"default:");

var restarg_15882 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_15882," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_15883 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_15882," = new cljs.core.IndexedSeq(",a_15883,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_15880,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_15847)),(((cljs.core.count.call(null,maxparams_15847) > (1)))?", ":null),restarg_15882,");");
} else {
var pcnt_15884 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_15881));
cljs.compiler.emitln.call(null,"case ",pcnt_15884,":");

cljs.compiler.emitln.call(null,"return ",n_15880,".call(this",(((pcnt_15884 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_15884,maxparams_15847)),null,(1),null)),(2),null))),");");
}


var G__15885 = seq__15810_15875;
var G__15886 = chunk__15811_15876;
var G__15887 = count__15812_15877;
var G__15888 = (i__15813_15878 + (1));
seq__15810_15875 = G__15885;
chunk__15811_15876 = G__15886;
count__15812_15877 = G__15887;
i__15813_15878 = G__15888;
continue;
} else {
var temp__5720__auto___15889 = cljs.core.seq.call(null,seq__15810_15875);
if(temp__5720__auto___15889){
var seq__15810_15890__$1 = temp__5720__auto___15889;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15810_15890__$1)){
var c__4550__auto___15891 = cljs.core.chunk_first.call(null,seq__15810_15890__$1);
var G__15892 = cljs.core.chunk_rest.call(null,seq__15810_15890__$1);
var G__15893 = c__4550__auto___15891;
var G__15894 = cljs.core.count.call(null,c__4550__auto___15891);
var G__15895 = (0);
seq__15810_15875 = G__15892;
chunk__15811_15876 = G__15893;
count__15812_15877 = G__15894;
i__15813_15878 = G__15895;
continue;
} else {
var vec__15823_15896 = cljs.core.first.call(null,seq__15810_15890__$1);
var n_15897 = cljs.core.nth.call(null,vec__15823_15896,(0),null);
var meth_15898 = cljs.core.nth.call(null,vec__15823_15896,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_15898))){
cljs.compiler.emitln.call(null,"default:");

var restarg_15899 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_15899," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_15900 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_15899," = new cljs.core.IndexedSeq(",a_15900,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_15897,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_15847)),(((cljs.core.count.call(null,maxparams_15847) > (1)))?", ":null),restarg_15899,");");
} else {
var pcnt_15901 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_15898));
cljs.compiler.emitln.call(null,"case ",pcnt_15901,":");

cljs.compiler.emitln.call(null,"return ",n_15897,".call(this",(((pcnt_15901 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_15901,maxparams_15847)),null,(1),null)),(2),null))),");");
}


var G__15902 = cljs.core.next.call(null,seq__15810_15890__$1);
var G__15903 = null;
var G__15904 = (0);
var G__15905 = (0);
seq__15810_15875 = G__15902;
chunk__15811_15876 = G__15903;
count__15812_15877 = G__15904;
i__15813_15878 = G__15905;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_15906 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_15849)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_15906,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_15846,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_15846,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_15845__$1,mname_15846,maxparams_15847,mmap_15848,ms_15849,loop_locals,map__15792,map__15792__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__15790_SHARP_){
var vec__15826 = p1__15790_SHARP_;
var n = cljs.core.nth.call(null,vec__15826,(0),null);
var m = cljs.core.nth.call(null,vec__15826,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_15845__$1,mname_15846,maxparams_15847,mmap_15848,ms_15849,loop_locals,map__15792,map__15792__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_15849),".cljs$lang$applyTo;");
} else {
}

var seq__15829_15907 = cljs.core.seq.call(null,ms_15849);
var chunk__15830_15908 = null;
var count__15831_15909 = (0);
var i__15832_15910 = (0);
while(true){
if((i__15832_15910 < count__15831_15909)){
var vec__15839_15911 = cljs.core._nth.call(null,chunk__15830_15908,i__15832_15910);
var n_15912 = cljs.core.nth.call(null,vec__15839_15911,(0),null);
var meth_15913 = cljs.core.nth.call(null,vec__15839_15911,(1),null);
var c_15914 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_15913));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_15913))){
cljs.compiler.emitln.call(null,mname_15846,".cljs$core$IFn$_invoke$arity$variadic = ",n_15912,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_15846,".cljs$core$IFn$_invoke$arity$",c_15914," = ",n_15912,";");
}


var G__15915 = seq__15829_15907;
var G__15916 = chunk__15830_15908;
var G__15917 = count__15831_15909;
var G__15918 = (i__15832_15910 + (1));
seq__15829_15907 = G__15915;
chunk__15830_15908 = G__15916;
count__15831_15909 = G__15917;
i__15832_15910 = G__15918;
continue;
} else {
var temp__5720__auto___15919 = cljs.core.seq.call(null,seq__15829_15907);
if(temp__5720__auto___15919){
var seq__15829_15920__$1 = temp__5720__auto___15919;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15829_15920__$1)){
var c__4550__auto___15921 = cljs.core.chunk_first.call(null,seq__15829_15920__$1);
var G__15922 = cljs.core.chunk_rest.call(null,seq__15829_15920__$1);
var G__15923 = c__4550__auto___15921;
var G__15924 = cljs.core.count.call(null,c__4550__auto___15921);
var G__15925 = (0);
seq__15829_15907 = G__15922;
chunk__15830_15908 = G__15923;
count__15831_15909 = G__15924;
i__15832_15910 = G__15925;
continue;
} else {
var vec__15842_15926 = cljs.core.first.call(null,seq__15829_15920__$1);
var n_15927 = cljs.core.nth.call(null,vec__15842_15926,(0),null);
var meth_15928 = cljs.core.nth.call(null,vec__15842_15926,(1),null);
var c_15929 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_15928));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_15928))){
cljs.compiler.emitln.call(null,mname_15846,".cljs$core$IFn$_invoke$arity$variadic = ",n_15927,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_15846,".cljs$core$IFn$_invoke$arity$",c_15929," = ",n_15927,";");
}


var G__15930 = cljs.core.next.call(null,seq__15829_15920__$1);
var G__15931 = null;
var G__15932 = (0);
var G__15933 = (0);
seq__15829_15907 = G__15930;
chunk__15830_15908 = G__15931;
count__15831_15909 = G__15932;
i__15832_15910 = G__15933;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_15846,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__15934){
var map__15935 = p__15934;
var map__15935__$1 = (((((!((map__15935 == null))))?(((((map__15935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15935):map__15935);
var statements = cljs.core.get.call(null,map__15935__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__15935__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__15935__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__15937_15941 = cljs.core.seq.call(null,statements);
var chunk__15938_15942 = null;
var count__15939_15943 = (0);
var i__15940_15944 = (0);
while(true){
if((i__15940_15944 < count__15939_15943)){
var s_15945 = cljs.core._nth.call(null,chunk__15938_15942,i__15940_15944);
cljs.compiler.emitln.call(null,s_15945);


var G__15946 = seq__15937_15941;
var G__15947 = chunk__15938_15942;
var G__15948 = count__15939_15943;
var G__15949 = (i__15940_15944 + (1));
seq__15937_15941 = G__15946;
chunk__15938_15942 = G__15947;
count__15939_15943 = G__15948;
i__15940_15944 = G__15949;
continue;
} else {
var temp__5720__auto___15950 = cljs.core.seq.call(null,seq__15937_15941);
if(temp__5720__auto___15950){
var seq__15937_15951__$1 = temp__5720__auto___15950;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15937_15951__$1)){
var c__4550__auto___15952 = cljs.core.chunk_first.call(null,seq__15937_15951__$1);
var G__15953 = cljs.core.chunk_rest.call(null,seq__15937_15951__$1);
var G__15954 = c__4550__auto___15952;
var G__15955 = cljs.core.count.call(null,c__4550__auto___15952);
var G__15956 = (0);
seq__15937_15941 = G__15953;
chunk__15938_15942 = G__15954;
count__15939_15943 = G__15955;
i__15940_15944 = G__15956;
continue;
} else {
var s_15957 = cljs.core.first.call(null,seq__15937_15951__$1);
cljs.compiler.emitln.call(null,s_15957);


var G__15958 = cljs.core.next.call(null,seq__15937_15951__$1);
var G__15959 = null;
var G__15960 = (0);
var G__15961 = (0);
seq__15937_15941 = G__15958;
chunk__15938_15942 = G__15959;
count__15939_15943 = G__15960;
i__15940_15944 = G__15961;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__15962){
var map__15963 = p__15962;
var map__15963__$1 = (((((!((map__15963 == null))))?(((((map__15963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15963):map__15963);
var try$ = cljs.core.get.call(null,map__15963__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__15963__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__15963__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__15963__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__15963__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__15965,is_loop){
var map__15966 = p__15965;
var map__15966__$1 = (((((!((map__15966 == null))))?(((((map__15966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15966):map__15966);
var expr = cljs.core.get.call(null,map__15966__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__15966__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__15966__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__15968_15982 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__15969_15983 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR__orig_val__15968_15982,context,map__15966,map__15966__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__15968_15982,context,map__15966,map__15966__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__15969_15983;

try{var seq__15970_15984 = cljs.core.seq.call(null,bindings);
var chunk__15971_15985 = null;
var count__15972_15986 = (0);
var i__15973_15987 = (0);
while(true){
if((i__15973_15987 < count__15972_15986)){
var map__15978_15988 = cljs.core._nth.call(null,chunk__15971_15985,i__15973_15987);
var map__15978_15989__$1 = (((((!((map__15978_15988 == null))))?(((((map__15978_15988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15978_15988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15978_15988):map__15978_15988);
var binding_15990 = map__15978_15989__$1;
var init_15991 = cljs.core.get.call(null,map__15978_15989__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_15990);

cljs.compiler.emitln.call(null," = ",init_15991,";");


var G__15992 = seq__15970_15984;
var G__15993 = chunk__15971_15985;
var G__15994 = count__15972_15986;
var G__15995 = (i__15973_15987 + (1));
seq__15970_15984 = G__15992;
chunk__15971_15985 = G__15993;
count__15972_15986 = G__15994;
i__15973_15987 = G__15995;
continue;
} else {
var temp__5720__auto___15996 = cljs.core.seq.call(null,seq__15970_15984);
if(temp__5720__auto___15996){
var seq__15970_15997__$1 = temp__5720__auto___15996;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15970_15997__$1)){
var c__4550__auto___15998 = cljs.core.chunk_first.call(null,seq__15970_15997__$1);
var G__15999 = cljs.core.chunk_rest.call(null,seq__15970_15997__$1);
var G__16000 = c__4550__auto___15998;
var G__16001 = cljs.core.count.call(null,c__4550__auto___15998);
var G__16002 = (0);
seq__15970_15984 = G__15999;
chunk__15971_15985 = G__16000;
count__15972_15986 = G__16001;
i__15973_15987 = G__16002;
continue;
} else {
var map__15980_16003 = cljs.core.first.call(null,seq__15970_15997__$1);
var map__15980_16004__$1 = (((((!((map__15980_16003 == null))))?(((((map__15980_16003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15980_16003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15980_16003):map__15980_16003);
var binding_16005 = map__15980_16004__$1;
var init_16006 = cljs.core.get.call(null,map__15980_16004__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_16005);

cljs.compiler.emitln.call(null," = ",init_16006,";");


var G__16007 = cljs.core.next.call(null,seq__15970_15997__$1);
var G__16008 = null;
var G__16009 = (0);
var G__16010 = (0);
seq__15970_15984 = G__16007;
chunk__15971_15985 = G__16008;
count__15972_15986 = G__16009;
i__15973_15987 = G__16010;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__15968_15982;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__16011){
var map__16012 = p__16011;
var map__16012__$1 = (((((!((map__16012 == null))))?(((((map__16012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16012):map__16012);
var frame = cljs.core.get.call(null,map__16012__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__16012__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__16012__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4607__auto___16014 = cljs.core.count.call(null,exprs);
var i_16015 = (0);
while(true){
if((i_16015 < n__4607__auto___16014)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_16015)," = ",exprs.call(null,i_16015),";");

var G__16016 = (i_16015 + (1));
i_16015 = G__16016;
continue;
} else {
}
break;
}

var n__4607__auto___16017 = cljs.core.count.call(null,exprs);
var i_16018 = (0);
while(true){
if((i_16018 < n__4607__auto___16017)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_16018))," = ",temps.call(null,i_16018),";");

var G__16019 = (i_16018 + (1));
i_16018 = G__16019;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__16020){
var map__16021 = p__16020;
var map__16021__$1 = (((((!((map__16021 == null))))?(((((map__16021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16021):map__16021);
var expr = cljs.core.get.call(null,map__16021__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__16021__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__16021__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__16023_16035 = cljs.core.seq.call(null,bindings);
var chunk__16024_16036 = null;
var count__16025_16037 = (0);
var i__16026_16038 = (0);
while(true){
if((i__16026_16038 < count__16025_16037)){
var map__16031_16039 = cljs.core._nth.call(null,chunk__16024_16036,i__16026_16038);
var map__16031_16040__$1 = (((((!((map__16031_16039 == null))))?(((((map__16031_16039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16031_16039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16031_16039):map__16031_16039);
var binding_16041 = map__16031_16040__$1;
var init_16042 = cljs.core.get.call(null,map__16031_16040__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_16041)," = ",init_16042,";");


var G__16043 = seq__16023_16035;
var G__16044 = chunk__16024_16036;
var G__16045 = count__16025_16037;
var G__16046 = (i__16026_16038 + (1));
seq__16023_16035 = G__16043;
chunk__16024_16036 = G__16044;
count__16025_16037 = G__16045;
i__16026_16038 = G__16046;
continue;
} else {
var temp__5720__auto___16047 = cljs.core.seq.call(null,seq__16023_16035);
if(temp__5720__auto___16047){
var seq__16023_16048__$1 = temp__5720__auto___16047;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16023_16048__$1)){
var c__4550__auto___16049 = cljs.core.chunk_first.call(null,seq__16023_16048__$1);
var G__16050 = cljs.core.chunk_rest.call(null,seq__16023_16048__$1);
var G__16051 = c__4550__auto___16049;
var G__16052 = cljs.core.count.call(null,c__4550__auto___16049);
var G__16053 = (0);
seq__16023_16035 = G__16050;
chunk__16024_16036 = G__16051;
count__16025_16037 = G__16052;
i__16026_16038 = G__16053;
continue;
} else {
var map__16033_16054 = cljs.core.first.call(null,seq__16023_16048__$1);
var map__16033_16055__$1 = (((((!((map__16033_16054 == null))))?(((((map__16033_16054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16033_16054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16033_16054):map__16033_16054);
var binding_16056 = map__16033_16055__$1;
var init_16057 = cljs.core.get.call(null,map__16033_16055__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_16056)," = ",init_16057,";");


var G__16058 = cljs.core.next.call(null,seq__16023_16048__$1);
var G__16059 = null;
var G__16060 = (0);
var G__16061 = (0);
seq__16023_16035 = G__16058;
chunk__16024_16036 = G__16059;
count__16025_16037 = G__16060;
i__16026_16038 = G__16061;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__16064){
var map__16065 = p__16064;
var map__16065__$1 = (((((!((map__16065 == null))))?(((((map__16065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16065):map__16065);
var expr = map__16065__$1;
var f = cljs.core.get.call(null,map__16065__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__16065__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__16065__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__16067 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16065,map__16065__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16065,map__16065__$1,expr,f,args,env){
return (function (p1__16062_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__16062_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16065,map__16065__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16065,map__16065__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16065,map__16065__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16065,map__16065__$1,expr,f,args,env){
return (function (p1__16063_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__16063_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16065,map__16065__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__16065,map__16065__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__16067,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__16067,(1),null);
var env__15169__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15169__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_16070 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_16070,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_16071 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_16071,args)),(((mfa_16071 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_16071,args)),"], 0))");
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
var fprop_16072 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_16072," ? ",f__$1,fprop_16072,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_16072," ? ",f__$1,fprop_16072,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15169__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__16073){
var map__16074 = p__16073;
var map__16074__$1 = (((((!((map__16074 == null))))?(((((map__16074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16074):map__16074);
var ctor = cljs.core.get.call(null,map__16074__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__16074__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__16074__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15169__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15169__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15169__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__16076){
var map__16077 = p__16076;
var map__16077__$1 = (((((!((map__16077 == null))))?(((((map__16077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16077):map__16077);
var target = cljs.core.get.call(null,map__16077__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__16077__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__16077__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15169__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15169__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15169__auto__))){
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
var map__16079 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__16079__$1 = (((((!((map__16079 == null))))?(((((map__16079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16079):map__16079);
var options = cljs.core.get.call(null,map__16079__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__16079__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__16080 = options;
var map__16080__$1 = (((((!((map__16080 == null))))?(((((map__16080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16080):map__16080);
var target = cljs.core.get.call(null,map__16080__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__16080__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__16081 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__16086 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__16086__$1 = (((((!((map__16086 == null))))?(((((map__16086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16086):map__16086);
var node_libs = cljs.core.get.call(null,map__16086__$1,true);
var libs_to_load = cljs.core.get.call(null,map__16086__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__16081,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__16081,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__16088_16108 = cljs.core.seq.call(null,libs_to_load);
var chunk__16089_16109 = null;
var count__16090_16110 = (0);
var i__16091_16111 = (0);
while(true){
if((i__16091_16111 < count__16090_16110)){
var lib_16112 = cljs.core._nth.call(null,chunk__16089_16109,i__16091_16111);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_16112)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_16112),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_16112),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_16112),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_16112),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_16112,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_16112),"');");
}

}
}
}


var G__16113 = seq__16088_16108;
var G__16114 = chunk__16089_16109;
var G__16115 = count__16090_16110;
var G__16116 = (i__16091_16111 + (1));
seq__16088_16108 = G__16113;
chunk__16089_16109 = G__16114;
count__16090_16110 = G__16115;
i__16091_16111 = G__16116;
continue;
} else {
var temp__5720__auto___16117 = cljs.core.seq.call(null,seq__16088_16108);
if(temp__5720__auto___16117){
var seq__16088_16118__$1 = temp__5720__auto___16117;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16088_16118__$1)){
var c__4550__auto___16119 = cljs.core.chunk_first.call(null,seq__16088_16118__$1);
var G__16120 = cljs.core.chunk_rest.call(null,seq__16088_16118__$1);
var G__16121 = c__4550__auto___16119;
var G__16122 = cljs.core.count.call(null,c__4550__auto___16119);
var G__16123 = (0);
seq__16088_16108 = G__16120;
chunk__16089_16109 = G__16121;
count__16090_16110 = G__16122;
i__16091_16111 = G__16123;
continue;
} else {
var lib_16124 = cljs.core.first.call(null,seq__16088_16118__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_16124)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_16124),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_16124),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_16124),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_16124),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_16124,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_16124),"');");
}

}
}
}


var G__16125 = cljs.core.next.call(null,seq__16088_16118__$1);
var G__16126 = null;
var G__16127 = (0);
var G__16128 = (0);
seq__16088_16108 = G__16125;
chunk__16089_16109 = G__16126;
count__16090_16110 = G__16127;
i__16091_16111 = G__16128;
continue;
}
} else {
}
}
break;
}

var seq__16092_16129 = cljs.core.seq.call(null,node_libs);
var chunk__16093_16130 = null;
var count__16094_16131 = (0);
var i__16095_16132 = (0);
while(true){
if((i__16095_16132 < count__16094_16131)){
var lib_16133 = cljs.core._nth.call(null,chunk__16093_16130,i__16095_16132);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_16133)," = require('",lib_16133,"');");


var G__16134 = seq__16092_16129;
var G__16135 = chunk__16093_16130;
var G__16136 = count__16094_16131;
var G__16137 = (i__16095_16132 + (1));
seq__16092_16129 = G__16134;
chunk__16093_16130 = G__16135;
count__16094_16131 = G__16136;
i__16095_16132 = G__16137;
continue;
} else {
var temp__5720__auto___16138 = cljs.core.seq.call(null,seq__16092_16129);
if(temp__5720__auto___16138){
var seq__16092_16139__$1 = temp__5720__auto___16138;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16092_16139__$1)){
var c__4550__auto___16140 = cljs.core.chunk_first.call(null,seq__16092_16139__$1);
var G__16141 = cljs.core.chunk_rest.call(null,seq__16092_16139__$1);
var G__16142 = c__4550__auto___16140;
var G__16143 = cljs.core.count.call(null,c__4550__auto___16140);
var G__16144 = (0);
seq__16092_16129 = G__16141;
chunk__16093_16130 = G__16142;
count__16094_16131 = G__16143;
i__16095_16132 = G__16144;
continue;
} else {
var lib_16145 = cljs.core.first.call(null,seq__16092_16139__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_16145)," = require('",lib_16145,"');");


var G__16146 = cljs.core.next.call(null,seq__16092_16139__$1);
var G__16147 = null;
var G__16148 = (0);
var G__16149 = (0);
seq__16092_16129 = G__16146;
chunk__16093_16130 = G__16147;
count__16094_16131 = G__16148;
i__16095_16132 = G__16149;
continue;
}
} else {
}
}
break;
}

var seq__16096_16150 = cljs.core.seq.call(null,global_exports_libs);
var chunk__16097_16151 = null;
var count__16098_16152 = (0);
var i__16099_16153 = (0);
while(true){
if((i__16099_16153 < count__16098_16152)){
var lib_16154 = cljs.core._nth.call(null,chunk__16097_16151,i__16099_16153);
var map__16104_16155 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_16154));
var map__16104_16156__$1 = (((((!((map__16104_16155 == null))))?(((((map__16104_16155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16104_16155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16104_16155):map__16104_16155);
var global_exports_16157 = cljs.core.get.call(null,map__16104_16156__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_16157,lib_16154);


var G__16158 = seq__16096_16150;
var G__16159 = chunk__16097_16151;
var G__16160 = count__16098_16152;
var G__16161 = (i__16099_16153 + (1));
seq__16096_16150 = G__16158;
chunk__16097_16151 = G__16159;
count__16098_16152 = G__16160;
i__16099_16153 = G__16161;
continue;
} else {
var temp__5720__auto___16162 = cljs.core.seq.call(null,seq__16096_16150);
if(temp__5720__auto___16162){
var seq__16096_16163__$1 = temp__5720__auto___16162;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16096_16163__$1)){
var c__4550__auto___16164 = cljs.core.chunk_first.call(null,seq__16096_16163__$1);
var G__16165 = cljs.core.chunk_rest.call(null,seq__16096_16163__$1);
var G__16166 = c__4550__auto___16164;
var G__16167 = cljs.core.count.call(null,c__4550__auto___16164);
var G__16168 = (0);
seq__16096_16150 = G__16165;
chunk__16097_16151 = G__16166;
count__16098_16152 = G__16167;
i__16099_16153 = G__16168;
continue;
} else {
var lib_16169 = cljs.core.first.call(null,seq__16096_16163__$1);
var map__16106_16170 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_16169));
var map__16106_16171__$1 = (((((!((map__16106_16170 == null))))?(((((map__16106_16170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16106_16170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16106_16170):map__16106_16170);
var global_exports_16172 = cljs.core.get.call(null,map__16106_16171__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_16172,lib_16169);


var G__16173 = cljs.core.next.call(null,seq__16096_16163__$1);
var G__16174 = null;
var G__16175 = (0);
var G__16176 = (0);
seq__16096_16150 = G__16173;
chunk__16097_16151 = G__16174;
count__16098_16152 = G__16175;
i__16099_16153 = G__16176;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__16177){
var map__16178 = p__16177;
var map__16178__$1 = (((((!((map__16178 == null))))?(((((map__16178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16178):map__16178);
var name = cljs.core.get.call(null,map__16178__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__16178__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__16178__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__16178__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__16178__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__16178__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__16178__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__16180){
var map__16181 = p__16180;
var map__16181__$1 = (((((!((map__16181 == null))))?(((((map__16181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16181):map__16181);
var name = cljs.core.get.call(null,map__16181__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__16181__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__16181__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__16181__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__16181__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__16181__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__16181__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__16183){
var map__16184 = p__16183;
var map__16184__$1 = (((((!((map__16184 == null))))?(((((map__16184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16184):map__16184);
var t = cljs.core.get.call(null,map__16184__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__16184__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__16184__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__16184__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__16184__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__16186_16210 = cljs.core.seq.call(null,protocols);
var chunk__16187_16211 = null;
var count__16188_16212 = (0);
var i__16189_16213 = (0);
while(true){
if((i__16189_16213 < count__16188_16212)){
var protocol_16214 = cljs.core._nth.call(null,chunk__16187_16211,i__16189_16213);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_16214)),"}");


var G__16215 = seq__16186_16210;
var G__16216 = chunk__16187_16211;
var G__16217 = count__16188_16212;
var G__16218 = (i__16189_16213 + (1));
seq__16186_16210 = G__16215;
chunk__16187_16211 = G__16216;
count__16188_16212 = G__16217;
i__16189_16213 = G__16218;
continue;
} else {
var temp__5720__auto___16219 = cljs.core.seq.call(null,seq__16186_16210);
if(temp__5720__auto___16219){
var seq__16186_16220__$1 = temp__5720__auto___16219;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16186_16220__$1)){
var c__4550__auto___16221 = cljs.core.chunk_first.call(null,seq__16186_16220__$1);
var G__16222 = cljs.core.chunk_rest.call(null,seq__16186_16220__$1);
var G__16223 = c__4550__auto___16221;
var G__16224 = cljs.core.count.call(null,c__4550__auto___16221);
var G__16225 = (0);
seq__16186_16210 = G__16222;
chunk__16187_16211 = G__16223;
count__16188_16212 = G__16224;
i__16189_16213 = G__16225;
continue;
} else {
var protocol_16226 = cljs.core.first.call(null,seq__16186_16220__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_16226)),"}");


var G__16227 = cljs.core.next.call(null,seq__16186_16220__$1);
var G__16228 = null;
var G__16229 = (0);
var G__16230 = (0);
seq__16186_16210 = G__16227;
chunk__16187_16211 = G__16228;
count__16188_16212 = G__16229;
i__16189_16213 = G__16230;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__16190_16231 = cljs.core.seq.call(null,fields__$1);
var chunk__16191_16232 = null;
var count__16192_16233 = (0);
var i__16193_16234 = (0);
while(true){
if((i__16193_16234 < count__16192_16233)){
var fld_16235 = cljs.core._nth.call(null,chunk__16191_16232,i__16193_16234);
cljs.compiler.emitln.call(null,"this.",fld_16235," = ",fld_16235,";");


var G__16236 = seq__16190_16231;
var G__16237 = chunk__16191_16232;
var G__16238 = count__16192_16233;
var G__16239 = (i__16193_16234 + (1));
seq__16190_16231 = G__16236;
chunk__16191_16232 = G__16237;
count__16192_16233 = G__16238;
i__16193_16234 = G__16239;
continue;
} else {
var temp__5720__auto___16240 = cljs.core.seq.call(null,seq__16190_16231);
if(temp__5720__auto___16240){
var seq__16190_16241__$1 = temp__5720__auto___16240;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16190_16241__$1)){
var c__4550__auto___16242 = cljs.core.chunk_first.call(null,seq__16190_16241__$1);
var G__16243 = cljs.core.chunk_rest.call(null,seq__16190_16241__$1);
var G__16244 = c__4550__auto___16242;
var G__16245 = cljs.core.count.call(null,c__4550__auto___16242);
var G__16246 = (0);
seq__16190_16231 = G__16243;
chunk__16191_16232 = G__16244;
count__16192_16233 = G__16245;
i__16193_16234 = G__16246;
continue;
} else {
var fld_16247 = cljs.core.first.call(null,seq__16190_16241__$1);
cljs.compiler.emitln.call(null,"this.",fld_16247," = ",fld_16247,";");


var G__16248 = cljs.core.next.call(null,seq__16190_16241__$1);
var G__16249 = null;
var G__16250 = (0);
var G__16251 = (0);
seq__16190_16231 = G__16248;
chunk__16191_16232 = G__16249;
count__16192_16233 = G__16250;
i__16193_16234 = G__16251;
continue;
}
} else {
}
}
break;
}

var seq__16194_16252 = cljs.core.seq.call(null,pmasks);
var chunk__16195_16253 = null;
var count__16196_16254 = (0);
var i__16197_16255 = (0);
while(true){
if((i__16197_16255 < count__16196_16254)){
var vec__16204_16256 = cljs.core._nth.call(null,chunk__16195_16253,i__16197_16255);
var pno_16257 = cljs.core.nth.call(null,vec__16204_16256,(0),null);
var pmask_16258 = cljs.core.nth.call(null,vec__16204_16256,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_16257,"$ = ",pmask_16258,";");


var G__16259 = seq__16194_16252;
var G__16260 = chunk__16195_16253;
var G__16261 = count__16196_16254;
var G__16262 = (i__16197_16255 + (1));
seq__16194_16252 = G__16259;
chunk__16195_16253 = G__16260;
count__16196_16254 = G__16261;
i__16197_16255 = G__16262;
continue;
} else {
var temp__5720__auto___16263 = cljs.core.seq.call(null,seq__16194_16252);
if(temp__5720__auto___16263){
var seq__16194_16264__$1 = temp__5720__auto___16263;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16194_16264__$1)){
var c__4550__auto___16265 = cljs.core.chunk_first.call(null,seq__16194_16264__$1);
var G__16266 = cljs.core.chunk_rest.call(null,seq__16194_16264__$1);
var G__16267 = c__4550__auto___16265;
var G__16268 = cljs.core.count.call(null,c__4550__auto___16265);
var G__16269 = (0);
seq__16194_16252 = G__16266;
chunk__16195_16253 = G__16267;
count__16196_16254 = G__16268;
i__16197_16255 = G__16269;
continue;
} else {
var vec__16207_16270 = cljs.core.first.call(null,seq__16194_16264__$1);
var pno_16271 = cljs.core.nth.call(null,vec__16207_16270,(0),null);
var pmask_16272 = cljs.core.nth.call(null,vec__16207_16270,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_16271,"$ = ",pmask_16272,";");


var G__16273 = cljs.core.next.call(null,seq__16194_16264__$1);
var G__16274 = null;
var G__16275 = (0);
var G__16276 = (0);
seq__16194_16252 = G__16273;
chunk__16195_16253 = G__16274;
count__16196_16254 = G__16275;
i__16197_16255 = G__16276;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__16277){
var map__16278 = p__16277;
var map__16278__$1 = (((((!((map__16278 == null))))?(((((map__16278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16278):map__16278);
var t = cljs.core.get.call(null,map__16278__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__16278__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__16278__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__16278__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__16278__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__16280_16304 = cljs.core.seq.call(null,protocols);
var chunk__16281_16305 = null;
var count__16282_16306 = (0);
var i__16283_16307 = (0);
while(true){
if((i__16283_16307 < count__16282_16306)){
var protocol_16308 = cljs.core._nth.call(null,chunk__16281_16305,i__16283_16307);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_16308)),"}");


var G__16309 = seq__16280_16304;
var G__16310 = chunk__16281_16305;
var G__16311 = count__16282_16306;
var G__16312 = (i__16283_16307 + (1));
seq__16280_16304 = G__16309;
chunk__16281_16305 = G__16310;
count__16282_16306 = G__16311;
i__16283_16307 = G__16312;
continue;
} else {
var temp__5720__auto___16313 = cljs.core.seq.call(null,seq__16280_16304);
if(temp__5720__auto___16313){
var seq__16280_16314__$1 = temp__5720__auto___16313;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16280_16314__$1)){
var c__4550__auto___16315 = cljs.core.chunk_first.call(null,seq__16280_16314__$1);
var G__16316 = cljs.core.chunk_rest.call(null,seq__16280_16314__$1);
var G__16317 = c__4550__auto___16315;
var G__16318 = cljs.core.count.call(null,c__4550__auto___16315);
var G__16319 = (0);
seq__16280_16304 = G__16316;
chunk__16281_16305 = G__16317;
count__16282_16306 = G__16318;
i__16283_16307 = G__16319;
continue;
} else {
var protocol_16320 = cljs.core.first.call(null,seq__16280_16314__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_16320)),"}");


var G__16321 = cljs.core.next.call(null,seq__16280_16314__$1);
var G__16322 = null;
var G__16323 = (0);
var G__16324 = (0);
seq__16280_16304 = G__16321;
chunk__16281_16305 = G__16322;
count__16282_16306 = G__16323;
i__16283_16307 = G__16324;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__16284_16325 = cljs.core.seq.call(null,fields__$1);
var chunk__16285_16326 = null;
var count__16286_16327 = (0);
var i__16287_16328 = (0);
while(true){
if((i__16287_16328 < count__16286_16327)){
var fld_16329 = cljs.core._nth.call(null,chunk__16285_16326,i__16287_16328);
cljs.compiler.emitln.call(null,"this.",fld_16329," = ",fld_16329,";");


var G__16330 = seq__16284_16325;
var G__16331 = chunk__16285_16326;
var G__16332 = count__16286_16327;
var G__16333 = (i__16287_16328 + (1));
seq__16284_16325 = G__16330;
chunk__16285_16326 = G__16331;
count__16286_16327 = G__16332;
i__16287_16328 = G__16333;
continue;
} else {
var temp__5720__auto___16334 = cljs.core.seq.call(null,seq__16284_16325);
if(temp__5720__auto___16334){
var seq__16284_16335__$1 = temp__5720__auto___16334;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16284_16335__$1)){
var c__4550__auto___16336 = cljs.core.chunk_first.call(null,seq__16284_16335__$1);
var G__16337 = cljs.core.chunk_rest.call(null,seq__16284_16335__$1);
var G__16338 = c__4550__auto___16336;
var G__16339 = cljs.core.count.call(null,c__4550__auto___16336);
var G__16340 = (0);
seq__16284_16325 = G__16337;
chunk__16285_16326 = G__16338;
count__16286_16327 = G__16339;
i__16287_16328 = G__16340;
continue;
} else {
var fld_16341 = cljs.core.first.call(null,seq__16284_16335__$1);
cljs.compiler.emitln.call(null,"this.",fld_16341," = ",fld_16341,";");


var G__16342 = cljs.core.next.call(null,seq__16284_16335__$1);
var G__16343 = null;
var G__16344 = (0);
var G__16345 = (0);
seq__16284_16325 = G__16342;
chunk__16285_16326 = G__16343;
count__16286_16327 = G__16344;
i__16287_16328 = G__16345;
continue;
}
} else {
}
}
break;
}

var seq__16288_16346 = cljs.core.seq.call(null,pmasks);
var chunk__16289_16347 = null;
var count__16290_16348 = (0);
var i__16291_16349 = (0);
while(true){
if((i__16291_16349 < count__16290_16348)){
var vec__16298_16350 = cljs.core._nth.call(null,chunk__16289_16347,i__16291_16349);
var pno_16351 = cljs.core.nth.call(null,vec__16298_16350,(0),null);
var pmask_16352 = cljs.core.nth.call(null,vec__16298_16350,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_16351,"$ = ",pmask_16352,";");


var G__16353 = seq__16288_16346;
var G__16354 = chunk__16289_16347;
var G__16355 = count__16290_16348;
var G__16356 = (i__16291_16349 + (1));
seq__16288_16346 = G__16353;
chunk__16289_16347 = G__16354;
count__16290_16348 = G__16355;
i__16291_16349 = G__16356;
continue;
} else {
var temp__5720__auto___16357 = cljs.core.seq.call(null,seq__16288_16346);
if(temp__5720__auto___16357){
var seq__16288_16358__$1 = temp__5720__auto___16357;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16288_16358__$1)){
var c__4550__auto___16359 = cljs.core.chunk_first.call(null,seq__16288_16358__$1);
var G__16360 = cljs.core.chunk_rest.call(null,seq__16288_16358__$1);
var G__16361 = c__4550__auto___16359;
var G__16362 = cljs.core.count.call(null,c__4550__auto___16359);
var G__16363 = (0);
seq__16288_16346 = G__16360;
chunk__16289_16347 = G__16361;
count__16290_16348 = G__16362;
i__16291_16349 = G__16363;
continue;
} else {
var vec__16301_16364 = cljs.core.first.call(null,seq__16288_16358__$1);
var pno_16365 = cljs.core.nth.call(null,vec__16301_16364,(0),null);
var pmask_16366 = cljs.core.nth.call(null,vec__16301_16364,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_16365,"$ = ",pmask_16366,";");


var G__16367 = cljs.core.next.call(null,seq__16288_16358__$1);
var G__16368 = null;
var G__16369 = (0);
var G__16370 = (0);
seq__16288_16346 = G__16367;
chunk__16289_16347 = G__16368;
count__16290_16348 = G__16369;
i__16291_16349 = G__16370;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__16371){
var map__16372 = p__16371;
var map__16372__$1 = (((((!((map__16372 == null))))?(((((map__16372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16372):map__16372);
var target = cljs.core.get.call(null,map__16372__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__16372__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__16372__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__16372__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__16372__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15169__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15169__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15169__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__16374){
var map__16375 = p__16374;
var map__16375__$1 = (((((!((map__16375 == null))))?(((((map__16375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16375):map__16375);
var op = cljs.core.get.call(null,map__16375__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__16375__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__16375__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__16375__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__16375__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4120__auto__ = code;
if(cljs.core.truth_(and__4120__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4120__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__15169__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15169__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15169__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__16381 = cljs.core.seq.call(null,table);
var chunk__16382 = null;
var count__16383 = (0);
var i__16384 = (0);
while(true){
if((i__16384 < count__16383)){
var vec__16391 = cljs.core._nth.call(null,chunk__16382,i__16384);
var sym = cljs.core.nth.call(null,vec__16391,(0),null);
var value = cljs.core.nth.call(null,vec__16391,(1),null);
var ns_16397 = cljs.core.namespace.call(null,sym);
var name_16398 = cljs.core.name.call(null,sym);
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


var G__16399 = seq__16381;
var G__16400 = chunk__16382;
var G__16401 = count__16383;
var G__16402 = (i__16384 + (1));
seq__16381 = G__16399;
chunk__16382 = G__16400;
count__16383 = G__16401;
i__16384 = G__16402;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__16381);
if(temp__5720__auto__){
var seq__16381__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16381__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__16381__$1);
var G__16403 = cljs.core.chunk_rest.call(null,seq__16381__$1);
var G__16404 = c__4550__auto__;
var G__16405 = cljs.core.count.call(null,c__4550__auto__);
var G__16406 = (0);
seq__16381 = G__16403;
chunk__16382 = G__16404;
count__16383 = G__16405;
i__16384 = G__16406;
continue;
} else {
var vec__16394 = cljs.core.first.call(null,seq__16381__$1);
var sym = cljs.core.nth.call(null,vec__16394,(0),null);
var value = cljs.core.nth.call(null,vec__16394,(1),null);
var ns_16407 = cljs.core.namespace.call(null,sym);
var name_16408 = cljs.core.name.call(null,sym);
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


var G__16409 = cljs.core.next.call(null,seq__16381__$1);
var G__16410 = null;
var G__16411 = (0);
var G__16412 = (0);
seq__16381 = G__16409;
chunk__16382 = G__16410;
count__16383 = G__16411;
i__16384 = G__16412;
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
var G__16414 = arguments.length;
switch (G__16414) {
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
var k_16419 = cljs.core.first.call(null,ks);
var vec__16415_16420 = cljs.core.conj.call(null,prefix,k_16419);
var top_16421 = cljs.core.nth.call(null,vec__16415_16420,(0),null);
var prefix_SINGLEQUOTE__16422 = vec__16415_16420;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_16419)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__16422) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_16421)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_16421)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__16422)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_16421);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__16422)),";");
}
} else {
}

var m_16423 = cljs.core.get.call(null,externs,k_16419);
if(cljs.core.empty_QMARK_.call(null,m_16423)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__16422,m_16423,top_level,known_externs);
}

var G__16424 = cljs.core.next.call(null,ks);
ks = G__16424;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
