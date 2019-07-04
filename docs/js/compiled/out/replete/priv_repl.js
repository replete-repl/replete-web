// Compiled by ClojureScript 1.10.520 {}
goog.provide('replete.priv_repl');
goog.require('cljs.core');
goog.require('cljs.js');
goog.require('cljs.pprint');
goog.require('cljs.tagged_literals');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.analyzer');
goog.require('cljs.compiler');
goog.require('cljs.env');
goog.require('cljs.repl');
goog.require('clojure.string');
goog.require('cljs.stacktrace');
goog.require('cljs.source_map');
goog.require('cognitect.transit');
goog.require('tailrecursion.cljson');
goog.require('cljsjs.parinfer');
goog.require('lazy_map.core');
goog.require('replete.pprint');
goog.require('replete.repl_resources');
cljs.core.integer_QMARK_ = (function (){var or__4131__auto__ = Number.isInteger;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.integer_QMARK_;
}
})();
cljs.core.array_QMARK_ = (function (x){
return (x instanceof Array);
});
cljs.core.find_ns_obj = (function (ns){
var munged_ns = cljs.core.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns));
var segs = munged_ns.split(".");
return cljs.core.find_ns_obj_STAR_.call(null,goog.global,segs);
});
replete.priv_repl.DEBUG = false;
if((typeof replete !== 'undefined') && (typeof replete.priv_repl !== 'undefined') && (typeof replete.priv_repl.st !== 'undefined')){
} else {
replete.priv_repl.st = cljs.js.empty_state.call(null);
}
replete.priv_repl.known_namespaces = (function replete$priv_repl$known_namespaces(){
return cljs.core.keys.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replete.priv_repl.st)));
});
replete.priv_repl.setup_cljs_user = (function replete$priv_repl$setup_cljs_user(){
eval("goog.provide('cljs.user')");

return eval("goog.require('cljs.core')");
});
goog.exportSymbol('replete.priv_repl.setup_cljs_user', replete.priv_repl.setup_cljs_user);
replete.priv_repl.app_env = cljs.core.atom.call(null,null);
replete.priv_repl.map_keys = (function replete$priv_repl$map_keys(f,m){
return cljs.core.reduce_kv.call(null,(function (r,k,v){
return cljs.core.assoc.call(null,r,f.call(null,k),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
replete.priv_repl.init_app_env = (function replete$priv_repl$init_app_env(app_env){
cljs.core._STAR_print_namespace_maps_STAR_ = true;

replete.priv_repl.load_core_analysis_caches.call(null,true);

return cljs.core.reset_BANG_.call(null,replete.priv_repl.app_env,cljs.core.assoc.call(null,replete.priv_repl.map_keys.call(null,cljs.core.keyword,cljs.core.js__GT_clj.call(null,app_env)),new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445),new cljs.core.Keyword(null,"warn","warn",-436710552)));
});
goog.exportSymbol('replete.priv_repl.init_app_env', replete.priv_repl.init_app_env);
/**
 * Returns true iff the interface idiom is iPad.
 */
replete.priv_repl.user_interface_idiom_ipad_QMARK_ = (function replete$priv_repl$user_interface_idiom_ipad_QMARK_(){
return cljs.core._EQ_.call(null,"iPad",new cljs.core.Keyword(null,"user-interface-idiom","user-interface-idiom",135724408).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replete.priv_repl.app_env)));
});
replete.priv_repl.repl_read_string = (function replete$priv_repl$repl_read_string(line){
try{return cljs.tools.reader.read_string.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-cond","read-cond",1056899244),new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs","cljs",1492417629),null], null), null)], null),line);
}catch (e1648){var e = e1648;
throw cljs.core.ex_info.call(null,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"read-source","read-source",1962118796)], null),e);
}});
replete.priv_repl.expression_name = "Expression";
replete.priv_repl.could_not_eval_expr = ["Could not eval ",replete.priv_repl.expression_name].join('');
replete.priv_repl.calc_x_line = (function replete$priv_repl$calc_x_line(text,pos,line){
while(true){
var x = clojure.string.index_of.call(null,text,"\n");
if((((x == null)) || ((pos < (x + (1)))))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursorX","cursorX",-1052742228),pos,new cljs.core.Keyword(null,"cursorLine","cursorLine",2118197640),line], null);
} else {
var G__1649 = cljs.core.subs.call(null,text,(x + (1)));
var G__1650 = (pos - (x + (1)));
var G__1651 = (line + (1));
text = G__1649;
pos = G__1650;
line = G__1651;
continue;
}
break;
}
});
replete.priv_repl.first_non_space_pos_after = (function replete$priv_repl$first_non_space_pos_after(text,pos){
while(true){
if(cljs.core._EQ_.call(null," ",cljs.core.subs.call(null,text,pos,(pos + (1))))){
var G__1652 = text;
var G__1653 = (pos + (1));
text = G__1652;
pos = G__1653;
continue;
} else {
return pos;
}
break;
}
});
replete.priv_repl.format = (function replete$priv_repl$format(text,pos,enter_pressed_QMARK_){
var formatted_text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,(cljs.core.truth_(enter_pressed_QMARK_)?parinfer.parenMode:parinfer.indentMode).call(null,text,cljs.core.clj__GT_js.call(null,replete.priv_repl.calc_x_line.call(null,text,pos,(0)))),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var formatted_pos = (cljs.core.truth_(enter_pressed_QMARK_)?replete.priv_repl.first_non_space_pos_after.call(null,formatted_text,pos):pos);
return [formatted_text,formatted_pos];
});
goog.exportSymbol('replete.priv_repl.format', replete.priv_repl.format);
replete.priv_repl.set_width = (function replete$priv_repl$set_width(width){
return cljs.core.swap_BANG_.call(null,replete.priv_repl.app_env,cljs.core.assoc,new cljs.core.Keyword(null,"width","width",-384071477),width);
});
goog.exportSymbol('replete.priv_repl.set_width', replete.priv_repl.set_width);
replete.priv_repl.current_ns = cljs.core.atom.call(null,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null));
replete.priv_repl.current_alias_map = (function replete$priv_repl$current_alias_map(){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,replete.priv_repl.st),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs.core.deref.call(null,replete.priv_repl.current_ns),new cljs.core.Keyword(null,"requires","requires",-1201390927)], null));
});
/**
 * Returns a sequence of all namespaces.
 */
replete.priv_repl.all_ns = (function replete$priv_repl$all_ns(){
return cljs.core.keys.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replete.priv_repl.st)));
});
replete.priv_repl.all_vars = (function replete$priv_repl$all_vars(){
return cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.mapcat.call(null,(function (p1__1654_SHARP_){
return cljs.core.map.call(null,cljs.core.first,cljs.core.get_in.call(null,cljs.core.deref.call(null,replete.priv_repl.st),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),p1__1654_SHARP_,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)));
}),replete.priv_repl.all_ns.call(null))));
});
goog.exportSymbol('replete.priv_repl.all_vars', replete.priv_repl.all_vars);
replete.priv_repl.drop_macros_suffix = (function replete$priv_repl$drop_macros_suffix(ns_name){
if(clojure.string.ends_with_QMARK_.call(null,ns_name,"$macros")){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop_last.call(null,(7),ns_name));
} else {
return ns_name;
}
});
replete.priv_repl.add_macros_suffix = (function replete$priv_repl$add_macros_suffix(sym){
return cljs.core.symbol.call(null,[cljs.core.name.call(null,sym),"$macros"].join(''));
});
replete.priv_repl.eliminate_macros_suffix = (function replete$priv_repl$eliminate_macros_suffix(x){
if((x instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,replete.priv_repl.drop_macros_suffix.call(null,cljs.core.namespace.call(null,x)),cljs.core.name.call(null,x));
} else {
return x;
}
});
/**
 * Gets the AST for a given namespace.
 */
replete.priv_repl.get_namespace = (function replete$priv_repl$get_namespace(ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.get_in.call(null,cljs.core.deref.call(null,replete.priv_repl.st),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns], null));
});
/**
 * Returns a sequence of the symbols in a namespace.
 */
replete.priv_repl.ns_syms = (function replete$priv_repl$ns_syms(var_args){
var G__1656 = arguments.length;
switch (G__1656) {
case 1:
return replete.priv_repl.ns_syms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replete.priv_repl.ns_syms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

replete.priv_repl.ns_syms.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return replete.priv_repl.ns_syms.call(null,ns,cljs.core.constantly.call(null,true));
});

replete.priv_repl.ns_syms.cljs$core$IFn$_invoke$arity$2 = (function (ns,pred){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.map.call(null,cljs.core.key,cljs.core.filter.call(null,pred,new cljs.core.Keyword(null,"defs","defs",1398449717).cljs$core$IFn$_invoke$arity$1(replete.priv_repl.get_namespace.call(null,ns))));
});

replete.priv_repl.ns_syms.cljs$lang$maxFixedArity = 2;

/**
 * Returns a sequence of the public symbols in a namespace.
 */
replete.priv_repl.public_syms = (function replete$priv_repl$public_syms(ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return replete.priv_repl.ns_syms.call(null,ns,(function (p__1658){
var vec__1659 = p__1658;
var _ = cljs.core.nth.call(null,vec__1659,(0),null);
var attrs = cljs.core.nth.call(null,vec__1659,(1),null);
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"private","private",-558947994).cljs$core$IFn$_invoke$arity$1(attrs))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"anonymous","anonymous",447897231).cljs$core$IFn$_invoke$arity$1(attrs))));
}));
});
replete.priv_repl.get_aenv = (function replete$priv_repl$get_aenv(){
return cljs.core.assoc.call(null,cljs.analyzer.empty_env.call(null),new cljs.core.Keyword(null,"ns","ns",441598760),replete.priv_repl.get_namespace.call(null,cljs.core.deref.call(null,replete.priv_repl.current_ns)),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
});
replete.priv_repl.transit_json__GT_cljs = (function replete$priv_repl$transit_json__GT_cljs(json){
var rdr = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
return cognitect.transit.read.call(null,rdr,json);
});
replete.priv_repl.cljs__GT_transit_json = (function replete$priv_repl$cljs__GT_transit_json(x){
var wtr = cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
return cognitect.transit.write.call(null,wtr,x);
});
replete.priv_repl.load_core_analysis_cache = (function replete$priv_repl$load_core_analysis_cache(eager,ns_sym,file_prefix){
var keys = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512),new cljs.core.Keyword(null,"renames","renames",343278368),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),new cljs.core.Keyword(null,"excludes","excludes",-1791725945),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"imports","imports",-1249933394),new cljs.core.Keyword(null,"requires","requires",-1201390927),new cljs.core.Keyword(null,"uses","uses",232664692),new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.Keyword(null,"require-macros","require-macros",707947416),new cljs.core.Keyword("cljs.analyzer","constants","cljs.analyzer/constants",1697083770),new cljs.core.Keyword(null,"doc","doc",1913296891)], null);
var load = ((function (keys){
return (function (key){
return replete.priv_repl.transit_json__GT_cljs.call(null,REPLETE_LOAD([cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,key)),".json"].join('')));
});})(keys))
;
return cljs.js.load_analysis_cache_BANG_.call(null,replete.priv_repl.st,ns_sym,(cljs.core.truth_(eager)?cljs.core.zipmap.call(null,keys,cljs.core.map.call(null,load,keys)):(new lazy_map.core.LazyMap(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512),new cljs.core.Keyword(null,"renames","renames",343278368),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),new cljs.core.Keyword(null,"excludes","excludes",-1791725945),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"imports","imports",-1249933394),new cljs.core.Keyword(null,"requires","requires",-1201390927),new cljs.core.Keyword(null,"uses","uses",232664692),new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.Keyword(null,"require-macros","require-macros",707947416),new cljs.core.Keyword("cljs.analyzer","constants","cljs.analyzer/constants",1697083770),new cljs.core.Keyword(null,"doc","doc",1913296891)],[(new cljs.core.Delay(((function (keys,load){
return (function (){
return load.call(null,new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512));
});})(keys,load))
,null)),(new cljs.core.Delay(((function (keys,load){
return (function (){
return load.call(null,new cljs.core.Keyword(null,"renames","renames",343278368));
});})(keys,load))
,null)),(new cljs.core.Delay(((function (keys,load){
return (function (){
return load.call(null,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
});})(keys,load))
,null)),(new cljs.core.Delay(((function (keys,load){
return (function (){
return load.call(null,new cljs.core.Keyword(null,"excludes","excludes",-1791725945));
});})(keys,load))
,null)),(new cljs.core.Delay(((function (keys,load){
return (function (){
return load.call(null,new cljs.core.Keyword(null,"name","name",1843675177));
});})(keys,load))
,null)),(new cljs.core.Delay(((function (keys,load){
return (function (){
return load.call(null,new cljs.core.Keyword(null,"imports","imports",-1249933394));
});})(keys,load))
,null)),(new cljs.core.Delay(((function (keys,load){
return (function (){
return load.call(null,new cljs.core.Keyword(null,"requires","requires",-1201390927));
});})(keys,load))
,null)),(new cljs.core.Delay(((function (keys,load){
return (function (){
return load.call(null,new cljs.core.Keyword(null,"uses","uses",232664692));
});})(keys,load))
,null)),(new cljs.core.Delay(((function (keys,load){
return (function (){
return load.call(null,new cljs.core.Keyword(null,"defs","defs",1398449717));
});})(keys,load))
,null)),(new cljs.core.Delay(((function (keys,load){
return (function (){
return load.call(null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
});})(keys,load))
,null)),(new cljs.core.Delay(((function (keys,load){
return (function (){
return load.call(null,new cljs.core.Keyword("cljs.analyzer","constants","cljs.analyzer/constants",1697083770));
});})(keys,load))
,null)),(new cljs.core.Delay(((function (keys,load){
return (function (){
return load.call(null,new cljs.core.Keyword(null,"doc","doc",1913296891));
});})(keys,load))
,null))])))));
});
replete.priv_repl.load_core_analysis_caches = (function replete$priv_repl$load_core_analysis_caches(eager){
replete.priv_repl.load_core_analysis_cache.call(null,eager,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),"cljs/core.cljs.cache.aot.");

return replete.priv_repl.load_core_analysis_cache.call(null,eager,new cljs.core.Symbol(null,"cljs.core$macros","cljs.core$macros",-2057787548,null),"cljs/core$macros.cljc.cache.");
});
replete.priv_repl.read_transit = (function replete$priv_repl$read_transit(json_file){
return replete.priv_repl.transit_json__GT_cljs.call(null,REPLETE_LOAD(json_file));
});
replete.priv_repl.load_analysis_cache = (function replete$priv_repl$load_analysis_cache(ns_sym,cache){
return cljs.js.load_analysis_cache_BANG_.call(null,replete.priv_repl.st,ns_sym,cache);
});
replete.priv_repl.read_and_load_analysis_cache = (function replete$priv_repl$read_and_load_analysis_cache(ns_sym,cache_json_file){
return replete.priv_repl.load_analysis_cache.call(null,ns_sym,replete.priv_repl.read_transit.call(null,cache_json_file));
});
replete.priv_repl.side_load_ns = (function replete$priv_repl$side_load_ns(ns_sym){
if((cljs.core.get_in.call(null,cljs.core.deref.call(null,replete.priv_repl.st),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_sym], null)) == null)){
var ns_sym_str = cljs.core.name.call(null,ns_sym);
var analysis_cache_file = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,ns_sym_str,".","/")),".cljs.cache.json"].join('');
replete.priv_repl.read_and_load_analysis_cache.call(null,ns_sym,analysis_cache_file);

var G__1662_1663 = ns_sym;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"replete.http","replete.http",346062762,null),G__1662_1663)){
goog.require("replete.http");
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"replete.io","replete.io",1992297597,null),G__1662_1663)){
goog.require("replete.io");
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1662_1663)].join('')));

}
}

return cljs.core.swap_BANG_.call(null,cljs.js._STAR_loaded_STAR_,cljs.core.conj,ns_sym);
} else {
return null;
}
});
replete.priv_repl.ns_form_QMARK_ = (function replete$priv_repl$ns_form_QMARK_(form){
return ((cljs.core.seq_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"ns","ns",2082130287,null),cljs.core.first.call(null,form))));
});
replete.priv_repl.repl_special_QMARK_ = (function replete$priv_repl$repl_special_QMARK_(form){
var and__4120__auto__ = cljs.core.seq_QMARK_.call(null,form);
if(and__4120__auto__){
return replete.repl_resources.repl_special_doc_map.call(null,cljs.core.first.call(null,form));
} else {
return and__4120__auto__;
}
});
replete.priv_repl.special_doc = (function replete$priv_repl$special_doc(name_symbol){
return cljs.core.assoc.call(null,replete.repl_resources.special_doc_map.call(null,name_symbol),new cljs.core.Keyword(null,"name","name",1843675177),name_symbol,new cljs.core.Keyword(null,"special-form","special-form",-1326536374),true);
});
replete.priv_repl.repl_special_doc = (function replete$priv_repl$repl_special_doc(name_symbol){
return cljs.core.assoc.call(null,replete.repl_resources.repl_special_doc_map.call(null,name_symbol),new cljs.core.Keyword(null,"name","name",1843675177),name_symbol,new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725),true);
});
replete.priv_repl.reflow = (function replete$priv_repl$reflow(text){
var and__4120__auto__ = text;
if(cljs.core.truth_(and__4120__auto__)){
return clojure.string.replace.call(null,clojure.string.replace.call(null,text,/ \n  /,""),/\n  /," ");
} else {
return and__4120__auto__;
}
});
replete.priv_repl.extension__GT_lang = (function replete$priv_repl$extension__GT_lang(extension){
if(cljs.core._EQ_.call(null,".js",extension)){
return new cljs.core.Keyword(null,"js","js",1768080579);
} else {
return new cljs.core.Keyword(null,"clj","clj",-660495428);
}
});
replete.priv_repl.pre_compiled_callaback_data = (function replete$priv_repl$pre_compiled_callaback_data(path,extension){
var temp__5720__auto__ = REPLETE_LOAD([cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),".js"].join(''));
if(cljs.core.truth_(temp__5720__auto__)){
var js_source = temp__5720__auto__;
var temp__5720__auto____$1 = REPLETE_LOAD([cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(extension),".cache.json"].join(''));
if(cljs.core.truth_(temp__5720__auto____$1)){
var cache_json = temp__5720__auto____$1;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),js_source,new cljs.core.Keyword(null,"cache","cache",-1237023054),replete.priv_repl.transit_json__GT_cljs.call(null,cache_json)], null);
} else {
return null;
}
} else {
return null;
}
});
replete.priv_repl.source_callback_data = (function replete$priv_repl$source_callback_data(path,extension){
var temp__5720__auto__ = REPLETE_LOAD([cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(extension)].join(''));
if(cljs.core.truth_(temp__5720__auto__)){
var source = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),replete.priv_repl.extension__GT_lang.call(null,extension),new cljs.core.Keyword(null,"source","source",-433931539),source], null);
} else {
return null;
}
});
replete.priv_repl.load_and_callback_BANG_ = (function replete$priv_repl$load_and_callback_BANG_(name,path,extension,macros,cb){
var temp__5720__auto__ = (function (){var or__4131__auto__ = replete.priv_repl.pre_compiled_callaback_data.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),(cljs.core.truth_(macros)?"$macros":null)].join(''),extension);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return replete.priv_repl.source_callback_data.call(null,path,extension);
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var cb_data = temp__5720__auto__;
cb.call(null,cb_data);

return new cljs.core.Keyword(null,"loaded","loaded",-1246482293);
} else {
return null;
}
});
replete.priv_repl.closure_index = (function replete$priv_repl$closure_index(){
var paths_to_provides = cljs.core.map.call(null,(function (p__1664){
var vec__1665 = p__1664;
var _ = cljs.core.nth.call(null,vec__1665,(0),null);
var path = cljs.core.nth.call(null,vec__1665,(1),null);
var provides = cljs.core.nth.call(null,vec__1665,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,cljs.core.map.call(null,cljs.core.second,cljs.core.re_seq.call(null,/'(.*?)'/,provides))], null);
}),cljs.core.re_seq.call(null,/\ngoog\.addDependency\('(.*)', \[(.*?)\].*/,REPLETE_LOAD("goog/deps.js")));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = ((function (paths_to_provides){
return (function replete$priv_repl$closure_index_$_iter__1668(s__1669){
return (new cljs.core.LazySeq(null,((function (paths_to_provides){
return (function (){
var s__1669__$1 = s__1669;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__1669__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__1674 = cljs.core.first.call(null,xs__6277__auto__);
var path = cljs.core.nth.call(null,vec__1674,(0),null);
var provides = cljs.core.nth.call(null,vec__1674,(1),null);
var iterys__4519__auto__ = ((function (s__1669__$1,vec__1674,path,provides,xs__6277__auto__,temp__5720__auto__,paths_to_provides){
return (function replete$priv_repl$closure_index_$_iter__1668_$_iter__1670(s__1671){
return (new cljs.core.LazySeq(null,((function (s__1669__$1,vec__1674,path,provides,xs__6277__auto__,temp__5720__auto__,paths_to_provides){
return (function (){
var s__1671__$1 = s__1671;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__1671__$1);
if(temp__5720__auto____$1){
var s__1671__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1671__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__1671__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__1673 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__1672 = (0);
while(true){
if((i__1672 < size__4522__auto__)){
var provide = cljs.core._nth.call(null,c__4521__auto__,i__1672);
cljs.core.chunk_append.call(null,b__1673,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,provide),["goog/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,/(.*)\.js$/,path)))].join('')], null));

var G__1677 = (i__1672 + (1));
i__1672 = G__1677;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1673),replete$priv_repl$closure_index_$_iter__1668_$_iter__1670.call(null,cljs.core.chunk_rest.call(null,s__1671__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1673),null);
}
} else {
var provide = cljs.core.first.call(null,s__1671__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,provide),["goog/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,/(.*)\.js$/,path)))].join('')], null),replete$priv_repl$closure_index_$_iter__1668_$_iter__1670.call(null,cljs.core.rest.call(null,s__1671__$2)));
}
} else {
return null;
}
break;
}
});})(s__1669__$1,vec__1674,path,provides,xs__6277__auto__,temp__5720__auto__,paths_to_provides))
,null,null));
});})(s__1669__$1,vec__1674,path,provides,xs__6277__auto__,temp__5720__auto__,paths_to_provides))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,provides));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,replete$priv_repl$closure_index_$_iter__1668.call(null,cljs.core.rest.call(null,s__1669__$1)));
} else {
var G__1678 = cljs.core.rest.call(null,s__1669__$1);
s__1669__$1 = G__1678;
continue;
}
} else {
return null;
}
break;
}
});})(paths_to_provides))
,null,null));
});})(paths_to_provides))
;
return iter__4523__auto__.call(null,paths_to_provides);
})());
});
replete.priv_repl.closure_index_mem = cljs.core.memoize.call(null,replete.priv_repl.closure_index);
replete.priv_repl.skip_load_QMARK_ = (function replete$priv_repl$skip_load_QMARK_(p__1679){
var map__1680 = p__1679;
var map__1680__$1 = (((((!((map__1680 == null))))?(((((map__1680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1680):map__1680);
var name = cljs.core.get.call(null,map__1680__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__1680__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var or__4131__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljsjs.parinfer","cljsjs.parinfer",-84735096,null));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null));
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.env","cljs.env",-1810013139,null));
if(or__4131__auto____$2){
return or__4131__auto____$2;
} else {
var or__4131__auto____$3 = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"replete.repl","replete.repl",2010228815,null));
if(or__4131__auto____$3){
return or__4131__auto____$3;
} else {
var or__4131__auto____$4 = (function (){var and__4120__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.env.macros","cljs.env.macros",1542748640,null));
if(and__4120__auto__){
return macros;
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto____$4)){
return or__4131__auto____$4;
} else {
var or__4131__auto____$5 = (function (){var and__4120__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.analyzer.macros","cljs.analyzer.macros",298494182,null));
if(and__4120__auto__){
return macros;
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto____$5)){
return or__4131__auto____$5;
} else {
var or__4131__auto____$6 = (function (){var and__4120__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.compiler.macros","cljs.compiler.macros",750996207,null));
if(and__4120__auto__){
return macros;
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto____$6)){
return or__4131__auto____$6;
} else {
var or__4131__auto____$7 = (function (){var and__4120__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.repl","cljs.repl",1767065658,null));
if(and__4120__auto__){
return macros;
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto____$7)){
return or__4131__auto____$7;
} else {
var or__4131__auto____$8 = (function (){var and__4120__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.tools.reader.reader-types","cljs.tools.reader.reader-types",-346100821,null));
if(and__4120__auto__){
return macros;
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto____$8)){
return or__4131__auto____$8;
} else {
var or__4131__auto____$9 = (function (){var and__4120__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.js","cljs.js",474485962,null));
if(and__4120__auto__){
return macros;
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto____$9)){
return or__4131__auto____$9;
} else {
var or__4131__auto____$10 = (function (){var and__4120__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null));
if(and__4120__auto__){
return macros;
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto____$10)){
return or__4131__auto____$10;
} else {
var or__4131__auto____$11 = (function (){var and__4120__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.reader","cljs.reader",1327473948,null));
if(and__4120__auto__){
return macros;
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto____$11)){
return or__4131__auto____$11;
} else {
var or__4131__auto____$12 = (function (){var and__4120__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"clojure.template","clojure.template",-1162325089,null));
if(and__4120__auto__){
return macros;
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto____$12)){
return or__4131__auto____$12;
} else {
var or__4131__auto____$13 = (function (){var and__4120__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"tailrecursion.cljson","tailrecursion.cljson",-1010429243,null));
if(and__4120__auto__){
return macros;
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto____$13)){
return or__4131__auto____$13;
} else {
var and__4120__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"lazy-map.core","lazy-map.core",462322712,null));
if(and__4120__auto__){
return macros;
} else {
return and__4120__auto__;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
replete.priv_repl.skip_load_goog_js_QMARK_ = (function replete$priv_repl$skip_load_goog_js_QMARK_(name){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"goog.string","goog.string",-2055533048,null),"null",new cljs.core.Symbol(null,"goog.object","goog.object",678593132,null),"null",new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),"null",new cljs.core.Symbol(null,"goog.math.Long","goog.math.Long",25335006,null),"null"], null), null).call(null,name);
});
replete.priv_repl.do_load_goog = (function replete$priv_repl$do_load_goog(name,cb){
if(cljs.core.truth_(replete.priv_repl.skip_load_goog_js_QMARK_.call(null,name))){
return cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
var temp__5718__auto__ = cljs.core.get.call(null,replete.priv_repl.closure_index_mem.call(null),name);
if(cljs.core.truth_(temp__5718__auto__)){
var goog_path = temp__5718__auto__;
if(cljs.core.truth_(replete.priv_repl.load_and_callback_BANG_.call(null,name,goog_path,".js",false,cb))){
return null;
} else {
return cb.call(null,null);
}
} else {
return cb.call(null,null);
}
}
});
replete.priv_repl.load = (function replete$priv_repl$load(p__1682,cb){
var map__1683 = p__1682;
var map__1683__$1 = (((((!((map__1683 == null))))?(((((map__1683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1683):map__1683);
var full = map__1683__$1;
var name = cljs.core.get.call(null,map__1683__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__1683__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var path = cljs.core.get.call(null,map__1683__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_(replete.priv_repl.skip_load_QMARK_.call(null,full))){
return cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
if(cljs.core.truth_(cljs.core.re_matches.call(null,/^goog\/.*/,path))){
return replete.priv_repl.do_load_goog.call(null,name,cb);
} else {
var extensions = (cljs.core.truth_(macros)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".clj",".cljc"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".cljs",".cljc",".js"], null));
while(true){
if(cljs.core.truth_(extensions)){
if(cljs.core.truth_(replete.priv_repl.load_and_callback_BANG_.call(null,name,path,cljs.core.first.call(null,extensions),macros,cb))){
return null;
} else {
var G__1685 = cljs.core.next.call(null,extensions);
extensions = G__1685;
continue;
}
} else {
return cb.call(null,null);
}
break;
}

}
}
});
/**
 * Given an analysis environment resolve a var. Analogous to
 * clojure.core/resolve
 */
replete.priv_repl.resolve_var = (function replete$priv_repl$resolve_var(env,sym){
if(cljs.core.map_QMARK_.call(null,env)){
} else {
throw (new Error("Assert failed: (map? env)"));
}

if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? sym)"));
}

try{return cljs.analyzer.resolve_var.call(null,env,sym,cljs.analyzer.confirm_var_exists_throw.call(null));
}catch (e1686){var _ = e1686;
return cljs.analyzer.resolve_macro_var.call(null,env,sym);
}});
replete.priv_repl.load_core_source_maps_BANG_ = (function replete$priv_repl$load_core_source_maps_BANG_(){
if(cljs.core.truth_(cljs.core.get.call(null,new cljs.core.Keyword(null,"source-maps","source-maps",-552851697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replete.priv_repl.st)),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null)))){
return null;
} else {
return cljs.core.swap_BANG_.call(null,replete.priv_repl.st,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-maps","source-maps",-552851697)], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),cljs.source_map.decode.call(null,tailrecursion.cljson.cljson__GT_clj.call(null,REPLETE_LOAD("cljs/core.js.map")))], null));
}
});
replete.priv_repl.unmunge_core_fn = (function replete$priv_repl$unmunge_core_fn(munged_name){
return clojure.string.replace.call(null,munged_name,/^cljs\$core\$/,"cljs.core/");
});
/**
 * Given a vector representing the canonicalized JavaScript stacktrace and a map
 *   of library names to decoded source maps, print the ClojureScript stacktrace .
 *   See mapped-stacktrace.
 */
replete.priv_repl.mapped_stacktrace_str = (function replete$priv_repl$mapped_stacktrace_str(var_args){
var G__1688 = arguments.length;
switch (G__1688) {
case 2:
return replete.priv_repl.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return replete.priv_repl.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

replete.priv_repl.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return replete.priv_repl.mapped_stacktrace_str.call(null,stacktrace,sms,null);
});

replete.priv_repl.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1689_1706 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1690_1707 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1691_1708 = true;
var _STAR_print_fn_STAR__temp_val__1692_1709 = ((function (_STAR_print_newline_STAR__orig_val__1689_1706,_STAR_print_fn_STAR__orig_val__1690_1707,_STAR_print_newline_STAR__temp_val__1691_1708,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__1689_1706,_STAR_print_fn_STAR__orig_val__1690_1707,_STAR_print_newline_STAR__temp_val__1691_1708,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1691_1708;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1692_1709;

try{var seq__1693_1710 = cljs.core.seq.call(null,cljs.stacktrace.mapped_stacktrace.call(null,stacktrace,sms,opts));
var chunk__1694_1711 = null;
var count__1695_1712 = (0);
var i__1696_1713 = (0);
while(true){
if((i__1696_1713 < count__1695_1712)){
var map__1701_1714 = cljs.core._nth.call(null,chunk__1694_1711,i__1696_1713);
var map__1701_1715__$1 = (((((!((map__1701_1714 == null))))?(((((map__1701_1714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1701_1714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1701_1714):map__1701_1714);
var function_1716 = cljs.core.get.call(null,map__1701_1715__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_1717 = cljs.core.get.call(null,map__1701_1715__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_1718 = cljs.core.get.call(null,map__1701_1715__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_1719 = cljs.core.get.call(null,map__1701_1715__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.call(null,[(cljs.core.truth_(function_1716)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(replete.priv_repl.unmunge_core_fn.call(null,function_1716))," "].join(''):null),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_1717),(cljs.core.truth_(line_1718)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_1718)].join(''):null),(cljs.core.truth_(column_1719)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_1719)].join(''):null),")"].join(''));


var G__1720 = seq__1693_1710;
var G__1721 = chunk__1694_1711;
var G__1722 = count__1695_1712;
var G__1723 = (i__1696_1713 + (1));
seq__1693_1710 = G__1720;
chunk__1694_1711 = G__1721;
count__1695_1712 = G__1722;
i__1696_1713 = G__1723;
continue;
} else {
var temp__5720__auto___1724 = cljs.core.seq.call(null,seq__1693_1710);
if(temp__5720__auto___1724){
var seq__1693_1725__$1 = temp__5720__auto___1724;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1693_1725__$1)){
var c__4550__auto___1726 = cljs.core.chunk_first.call(null,seq__1693_1725__$1);
var G__1727 = cljs.core.chunk_rest.call(null,seq__1693_1725__$1);
var G__1728 = c__4550__auto___1726;
var G__1729 = cljs.core.count.call(null,c__4550__auto___1726);
var G__1730 = (0);
seq__1693_1710 = G__1727;
chunk__1694_1711 = G__1728;
count__1695_1712 = G__1729;
i__1696_1713 = G__1730;
continue;
} else {
var map__1703_1731 = cljs.core.first.call(null,seq__1693_1725__$1);
var map__1703_1732__$1 = (((((!((map__1703_1731 == null))))?(((((map__1703_1731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1703_1731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1703_1731):map__1703_1731);
var function_1733 = cljs.core.get.call(null,map__1703_1732__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_1734 = cljs.core.get.call(null,map__1703_1732__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_1735 = cljs.core.get.call(null,map__1703_1732__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_1736 = cljs.core.get.call(null,map__1703_1732__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.call(null,[(cljs.core.truth_(function_1733)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(replete.priv_repl.unmunge_core_fn.call(null,function_1733))," "].join(''):null),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_1734),(cljs.core.truth_(line_1735)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_1735)].join(''):null),(cljs.core.truth_(column_1736)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_1736)].join(''):null),")"].join(''));


var G__1737 = cljs.core.next.call(null,seq__1693_1725__$1);
var G__1738 = null;
var G__1739 = (0);
var G__1740 = (0);
seq__1693_1710 = G__1737;
chunk__1694_1711 = G__1738;
count__1695_1712 = G__1739;
i__1696_1713 = G__1740;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1690_1707;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1689_1706;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
});

replete.priv_repl.mapped_stacktrace_str.cljs$lang$maxFixedArity = 3;

if((typeof replete !== 'undefined') && (typeof replete.priv_repl !== 'undefined') && (typeof replete.priv_repl.can_show_indicator !== 'undefined')){
} else {
replete.priv_repl.can_show_indicator = cljs.core.atom.call(null,false);
}
replete.priv_repl.reset_show_indicator_BANG_ = (function replete$priv_repl$reset_show_indicator_BANG_(){
return cljs.core.reset_BANG_.call(null,replete.priv_repl.can_show_indicator,true);
});
replete.priv_repl.show_indicator_QMARK_ = (function replete$priv_repl$show_indicator_QMARK_(){
var rv = cljs.core.deref.call(null,replete.priv_repl.can_show_indicator);
cljs.core.reset_BANG_.call(null,replete.priv_repl.can_show_indicator,false);

return rv;
});
replete.priv_repl.form_indicator = (function replete$priv_repl$form_indicator(column){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,(column - (1)),cljs.core.repeat.call(null," ")))),"^"].join('');
});
replete.priv_repl.print_error = (function replete$priv_repl$print_error(var_args){
var G__1742 = arguments.length;
switch (G__1742) {
case 1:
return replete.priv_repl.print_error.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replete.priv_repl.print_error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

replete.priv_repl.print_error.cljs$core$IFn$_invoke$arity$1 = (function (error){
return replete.priv_repl.print_error.call(null,error,false);
});

replete.priv_repl.print_error.cljs$core$IFn$_invoke$arity$2 = (function (error,include_stacktrace_QMARK_){
if(cljs.core.truth_(include_stacktrace_QMARK_)){
var error__$1 = (function (){var or__4131__auto__ = error.cause;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return error;
}
})();
return cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(error__$1.message),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error__$1.stack)].join(''));
} else {
var error__$1 = (function (){var G__1743 = error;
if(cljs.core.contains_QMARK_.call(null,cljs.core.ex_data.call(null,cljs.core.ex_cause.call(null,error)),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358))){
return cljs.core.ex_cause.call(null,G__1743);
} else {
return G__1743;
}
})();
return cljs.core.print.call(null,cljs.repl.error__GT_str.call(null,error__$1));
}
});

replete.priv_repl.print_error.cljs$lang$maxFixedArity = 2;

replete.priv_repl.get_macro_var = (function replete$priv_repl$get_macro_var(env,sym,macros_ns){
if((macros_ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? macros-ns)"));
}

var macros_ns_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(macros_ns);
var base_ns_str = cljs.core.subs.call(null,macros_ns_str,(0),(cljs.core.count.call(null,macros_ns_str) - (7)));
var base_ns = cljs.core.symbol.call(null,base_ns_str);
var temp__5718__auto__ = (function (){var env__814__auto__ = replete.priv_repl.st;
var env__814__auto____$1 = ((cljs.core.map_QMARK_.call(null,env__814__auto__))?cljs.core.atom.call(null,env__814__auto__):(((((env__814__auto__ instanceof cljs.core.Atom)) && (cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,env__814__auto__)))))?env__814__auto__:(function(){throw (new Error(["Compiler environment must be a map or atom containing a map, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,env__814__auto__))].join('')))})()
));
var _STAR_compiler_STAR__orig_val__1746 = cljs.env._STAR_compiler_STAR_;
var _STAR_compiler_STAR__temp_val__1747 = env__814__auto____$1;
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__1747;

try{return replete.priv_repl.resolve_var.call(null,env,cljs.core.symbol.call(null,macros_ns_str,cljs.core.name.call(null,sym)));
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__1746;
}})();
if(cljs.core.truth_(temp__5718__auto__)){
var macro_var = temp__5718__auto__;
return cljs.core.update.call(null,cljs.core.assoc.call(null,macro_var,new cljs.core.Keyword(null,"ns","ns",441598760),base_ns),new cljs.core.Keyword(null,"name","name",1843675177),((function (macro_var,temp__5718__auto__,macros_ns_str,base_ns_str,base_ns){
return (function (p1__1745_SHARP_){
return cljs.core.symbol.call(null,base_ns_str,cljs.core.name.call(null,p1__1745_SHARP_));
});})(macro_var,temp__5718__auto__,macros_ns_str,base_ns_str,base_ns))
);
} else {
return null;
}
});
replete.priv_repl.all_macros_ns = (function replete$priv_repl$all_macros_ns(){
return cljs.core.filter.call(null,(function (p1__1748_SHARP_){
return clojure.string.ends_with_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__1748_SHARP_),"$macros");
}),replete.priv_repl.all_ns.call(null));
});
replete.priv_repl.get_var = (function replete$priv_repl$get_var(env,sym){
var var$ = (function (){var or__4131__auto__ = (function (){var env__814__auto__ = replete.priv_repl.st;
var env__814__auto____$1 = ((cljs.core.map_QMARK_.call(null,env__814__auto__))?cljs.core.atom.call(null,env__814__auto__):(((((env__814__auto__ instanceof cljs.core.Atom)) && (cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,env__814__auto__)))))?env__814__auto__:(function(){throw (new Error(["Compiler environment must be a map or atom containing a map, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,env__814__auto__))].join('')))})()
));
var _STAR_compiler_STAR__orig_val__1753 = cljs.env._STAR_compiler_STAR_;
var _STAR_compiler_STAR__temp_val__1754 = env__814__auto____$1;
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__1754;

try{return replete.priv_repl.resolve_var.call(null,env,sym);
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__1753;
}})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.some.call(null,((function (or__4131__auto__){
return (function (p1__1749_SHARP_){
return replete.priv_repl.get_macro_var.call(null,env,sym,p1__1749_SHARP_);
});})(or__4131__auto__))
,replete.priv_repl.all_macros_ns.call(null));
}
})();
if(cljs.core.truth_(var$)){
if(cljs.core._EQ_.call(null,cljs.core.namespace.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$)))){
return cljs.core.update.call(null,var$,new cljs.core.Keyword(null,"name","name",1843675177),((function (var$){
return (function (p1__1750_SHARP_){
return cljs.core.symbol.call(null,cljs.core.name.call(null,p1__1750_SHARP_));
});})(var$))
);
} else {
return var$;
}
} else {
return null;
}
});
replete.priv_repl.get_file_source = (function replete$priv_repl$get_file_source(filepath){
if((filepath instanceof cljs.core.Symbol)){
var without_extension = clojure.string.replace.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,filepath),/\./,"/"),/-/,"_");
var or__4131__auto__ = REPLETE_LOAD([cljs.core.str.cljs$core$IFn$_invoke$arity$1(without_extension),".clj"].join(''));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = REPLETE_LOAD([cljs.core.str.cljs$core$IFn$_invoke$arity$1(without_extension),".cljc"].join(''));
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return REPLETE_LOAD([cljs.core.str.cljs$core$IFn$_invoke$arity$1(without_extension),".cljs"].join(''));
}
}
} else {
var file_source = REPLETE_LOAD(filepath);
var or__4131__auto__ = file_source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = REPLETE_LOAD(clojure.string.replace.call(null,filepath,/^out\//,""));
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return REPLETE_LOAD(clojure.string.replace.call(null,filepath,/^src\//,""));
}
}
}
});
replete.priv_repl.fetch_source = (function replete$priv_repl$fetch_source(var$){
var or__4131__auto__ = new cljs.core.Keyword("replete.priv-repl","repl-entered-source","replete.priv-repl/repl-entered-source",-1436634104).cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var temp__5720__auto__ = (function (){var or__4131__auto____$1 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(var$));
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var filepath = temp__5720__auto__;
var temp__5720__auto____$1 = replete.priv_repl.get_file_source.call(null,filepath);
if(cljs.core.truth_(temp__5720__auto____$1)){
var file_source = temp__5720__auto____$1;
var rdr = cljs.tools.reader.reader_types.source_logging_push_back_reader.call(null,file_source);
var n__4607__auto___1760 = (new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(var$) - (1));
var __1761 = (0);
while(true){
if((__1761 < n__4607__auto___1760)){
cljs.tools.reader.reader_types.read_line.call(null,rdr);

var G__1762 = (__1761 + (1));
__1761 = G__1762;
continue;
} else {
}
break;
}

var _STAR_alias_map_STAR__orig_val__1755 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_alias_map_STAR__temp_val__1756 = (function (){
if((typeof replete !== 'undefined') && (typeof replete.priv_repl !== 'undefined') && (typeof replete.priv_repl.t_replete$priv_repl1757 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
replete.priv_repl.t_replete$priv_repl1757 = (function (var$,or__4131__auto__,temp__5720__auto__,filepath,file_source,rdr,_STAR_alias_map_STAR__orig_val__1755,meta1758){
this.var$ = var$;
this.or__4131__auto__ = or__4131__auto__;
this.temp__5720__auto__ = temp__5720__auto__;
this.filepath = filepath;
this.file_source = file_source;
this.rdr = rdr;
this._STAR_alias_map_STAR__orig_val__1755 = _STAR_alias_map_STAR__orig_val__1755;
this.meta1758 = meta1758;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
replete.priv_repl.t_replete$priv_repl1757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (_STAR_alias_map_STAR__orig_val__1755,rdr,file_source,temp__5720__auto____$1,filepath,temp__5720__auto__,or__4131__auto__){
return (function (_1759,meta1758__$1){
var self__ = this;
var _1759__$1 = this;
return (new replete.priv_repl.t_replete$priv_repl1757(self__.var$,self__.or__4131__auto__,self__.temp__5720__auto__,self__.filepath,self__.file_source,self__.rdr,self__._STAR_alias_map_STAR__orig_val__1755,meta1758__$1));
});})(_STAR_alias_map_STAR__orig_val__1755,rdr,file_source,temp__5720__auto____$1,filepath,temp__5720__auto__,or__4131__auto__))
;

replete.priv_repl.t_replete$priv_repl1757.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (_STAR_alias_map_STAR__orig_val__1755,rdr,file_source,temp__5720__auto____$1,filepath,temp__5720__auto__,or__4131__auto__){
return (function (_1759){
var self__ = this;
var _1759__$1 = this;
return self__.meta1758;
});})(_STAR_alias_map_STAR__orig_val__1755,rdr,file_source,temp__5720__auto____$1,filepath,temp__5720__auto__,or__4131__auto__))
;

replete.priv_repl.t_replete$priv_repl1757.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (_STAR_alias_map_STAR__orig_val__1755,rdr,file_source,temp__5720__auto____$1,filepath,temp__5720__auto__,or__4131__auto__){
return (function (_,k){
var self__ = this;
var ___$1 = this;
return k;
});})(_STAR_alias_map_STAR__orig_val__1755,rdr,file_source,temp__5720__auto____$1,filepath,temp__5720__auto__,or__4131__auto__))
;

replete.priv_repl.t_replete$priv_repl1757.getBasis = ((function (_STAR_alias_map_STAR__orig_val__1755,rdr,file_source,temp__5720__auto____$1,filepath,temp__5720__auto__,or__4131__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var","var",870848730,null),new cljs.core.Symbol(null,"or__4131__auto__","or__4131__auto__",941665662,null),new cljs.core.Symbol(null,"temp__5720__auto__","temp__5720__auto__",-1339709213,null),new cljs.core.Symbol(null,"filepath","filepath",-1556947284,null),new cljs.core.Symbol(null,"file-source","file-source",-1043850180,null),new cljs.core.Symbol(null,"rdr","rdr",190007785,null),new cljs.core.Symbol(null,"*alias-map*-orig-val__1755","*alias-map*-orig-val__1755",1939325336,null),new cljs.core.Symbol(null,"meta1758","meta1758",1774449772,null)], null);
});})(_STAR_alias_map_STAR__orig_val__1755,rdr,file_source,temp__5720__auto____$1,filepath,temp__5720__auto__,or__4131__auto__))
;

replete.priv_repl.t_replete$priv_repl1757.cljs$lang$type = true;

replete.priv_repl.t_replete$priv_repl1757.cljs$lang$ctorStr = "replete.priv-repl/t_replete$priv_repl1757";

replete.priv_repl.t_replete$priv_repl1757.cljs$lang$ctorPrWriter = ((function (_STAR_alias_map_STAR__orig_val__1755,rdr,file_source,temp__5720__auto____$1,filepath,temp__5720__auto__,or__4131__auto__){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"replete.priv-repl/t_replete$priv_repl1757");
});})(_STAR_alias_map_STAR__orig_val__1755,rdr,file_source,temp__5720__auto____$1,filepath,temp__5720__auto__,or__4131__auto__))
;

/**
 * Positional factory function for replete.priv-repl/t_replete$priv_repl1757.
 */
replete.priv_repl.__GT_t_replete$priv_repl1757 = ((function (_STAR_alias_map_STAR__orig_val__1755,rdr,file_source,temp__5720__auto____$1,filepath,temp__5720__auto__,or__4131__auto__){
return (function replete$priv_repl$fetch_source_$___GT_t_replete$priv_repl1757(var$__$1,or__4131__auto____$1,temp__5720__auto____$2,filepath__$1,file_source__$1,rdr__$1,_STAR_alias_map_STAR__orig_val__1755__$1,meta1758){
return (new replete.priv_repl.t_replete$priv_repl1757(var$__$1,or__4131__auto____$1,temp__5720__auto____$2,filepath__$1,file_source__$1,rdr__$1,_STAR_alias_map_STAR__orig_val__1755__$1,meta1758));
});})(_STAR_alias_map_STAR__orig_val__1755,rdr,file_source,temp__5720__auto____$1,filepath,temp__5720__auto__,or__4131__auto__))
;

}

return (new replete.priv_repl.t_replete$priv_repl1757(var$,or__4131__auto__,temp__5720__auto____$1,filepath,file_source,rdr,_STAR_alias_map_STAR__orig_val__1755,cljs.core.PersistentArrayMap.EMPTY));
})()
;
cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__1756;

try{return new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,cljs.tools.reader.read.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-cond","read-cond",1056899244),new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs","cljs",1492417629),null], null), null)], null),rdr)));
}finally {cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__1755;
}} else {
return null;
}
} else {
return null;
}
}
});
replete.priv_repl.make_base_eval_opts = (function replete$priv_repl$make_base_eval_opts(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,replete.priv_repl.current_ns),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval], null);
});
replete.priv_repl.process_in_ns = (function replete$priv_repl$process_in_ns(argument){
return cljs.js.eval.call(null,replete.priv_repl.st,argument,replete.priv_repl.make_base_eval_opts.call(null),(function (result){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result))){
return replete.priv_repl.print_error.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result));
} else {
var ns_name = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(result);
if((!((ns_name instanceof cljs.core.Symbol)))){
return cljs.core.println.call(null,"Argument to in-ns must be a symbol.");
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,ns_name),replete.priv_repl.known_namespaces.call(null)))){
return cljs.core.reset_BANG_.call(null,replete.priv_repl.current_ns,ns_name);
} else {
var ns_form = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"ns","ns",2082130287,null),null,(1),null)),(new cljs.core.List(null,ns_name,null,(1),null)))));
return cljs.js.eval.call(null,replete.priv_repl.st,ns_form,replete.priv_repl.make_base_eval_opts.call(null),((function (ns_form,ns_name){
return (function (p__1763){
var map__1764 = p__1763;
var map__1764__$1 = (((((!((map__1764 == null))))?(((((map__1764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1764):map__1764);
var e = cljs.core.get.call(null,map__1764__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(e)){
return replete.priv_repl.print_error.call(null,e);
} else {
return cljs.core.reset_BANG_.call(null,replete.priv_repl.current_ns,ns_name);
}
});})(ns_form,ns_name))
);
}
}
}
}));
});
/**
 * Resolves a namespace symbol to a namespace by first checking to see if it
 *   is a namespace alias.
 */
replete.priv_repl.resolve_ns = (function replete$priv_repl$resolve_ns(ns_sym){
var or__4131__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,replete.priv_repl.st),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs.analyzer._STAR_cljs_ns_STAR_,new cljs.core.Keyword(null,"requires","requires",-1201390927),ns_sym], null));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = cljs.core.get_in.call(null,cljs.core.deref.call(null,replete.priv_repl.st),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs.analyzer._STAR_cljs_ns_STAR_,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),ns_sym], null));
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return ns_sym;
}
}
});
replete.priv_repl.apropos_STAR_ = (function replete$priv_repl$apropos_STAR_(str_or_pattern){
var matches_QMARK_ = (((str_or_pattern instanceof RegExp))?(function (p1__1766_SHARP_){
return cljs.core.re_find.call(null,str_or_pattern,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__1766_SHARP_));
}):(function (p1__1767_SHARP_){
return clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__1767_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(str_or_pattern));
}));
return cljs.core.distinct.call(null,cljs.core.sort.call(null,cljs.core.mapcat.call(null,((function (matches_QMARK_){
return (function (ns){
var ns_name = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
var ns_name__$1 = ((clojure.string.ends_with_QMARK_.call(null,ns_name,"$macros"))?cljs.core.apply.call(null,cljs.core.str,cljs.core.drop_last.call(null,(7),ns_name)):ns_name);
return cljs.core.map.call(null,((function (ns_name,ns_name__$1,matches_QMARK_){
return (function (p1__1768_SHARP_){
return cljs.core.symbol.call(null,ns_name__$1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__1768_SHARP_));
});})(ns_name,ns_name__$1,matches_QMARK_))
,cljs.core.filter.call(null,matches_QMARK_,replete.priv_repl.public_syms.call(null,ns)));
});})(matches_QMARK_))
,replete.priv_repl.all_ns.call(null))));
});
/**
 * Undoes the effect that wrapping a reader conditional around
 *   a defn has on a docstring.
 */
replete.priv_repl.undo_reader_conditional_whitespace_docstring = (function replete$priv_repl$undo_reader_conditional_whitespace_docstring(s){
if((s == null)){
return null;
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/[^\n]*\n\n?      ?\S.*/,s))){
return clojure.string.replace.call(null,s,/\n      ?/,"\n  ");
} else {
return s;
}
}
});
replete.priv_repl.process_1_2_3 = (function replete$priv_repl$process_1_2_3(expression_form,value){
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"*2","*2",1728229926,null),"null",new cljs.core.Symbol(null,"*1","*1",2110258092,null),"null",new cljs.core.Symbol(null,"*e","*e",329170866,null),"null",new cljs.core.Symbol(null,"*3","*3",105062009,null),"null"], null), null).call(null,expression_form);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return replete.priv_repl.ns_form_QMARK_.call(null,expression_form);
}
})())){
return null;
} else {
cljs.core._STAR_3 = cljs.core._STAR_2;

cljs.core._STAR_2 = cljs.core._STAR_1;

return cljs.core._STAR_1 = value;
}
});
replete.priv_repl.warning_handler = (function replete$priv_repl$warning_handler(warning_type,env,extra){
var warning_string = (function (){var sb__1639__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1769_1775 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_err_fn_STAR__orig_val__1770_1776 = cljs.core._STAR_print_err_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1771_1777 = true;
var _STAR_print_err_fn_STAR__temp_val__1772_1778 = ((function (_STAR_print_newline_STAR__orig_val__1769_1775,_STAR_print_err_fn_STAR__orig_val__1770_1776,_STAR_print_newline_STAR__temp_val__1771_1777,sb__1639__auto__){
return (function (x__1640__auto__){
return sb__1639__auto__.append(x__1640__auto__);
});})(_STAR_print_newline_STAR__orig_val__1769_1775,_STAR_print_err_fn_STAR__orig_val__1770_1776,_STAR_print_newline_STAR__temp_val__1771_1777,sb__1639__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1771_1777;

cljs.core._STAR_print_err_fn_STAR_ = _STAR_print_err_fn_STAR__temp_val__1772_1778;

try{cljs.analyzer.default_warning_handler.call(null,warning_type,env,cljs.core.update.call(null,extra,new cljs.core.Keyword(null,"js-op","js-op",-1046277897),replete.priv_repl.eliminate_macros_suffix));
}finally {cljs.core._STAR_print_err_fn_STAR_ = _STAR_print_err_fn_STAR__orig_val__1770_1776;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1769_1775;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__1639__auto__);
})();
var _STAR_print_fn_STAR__orig_val__1773 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__1774 = cljs.core._STAR_print_err_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1774;

try{if(cljs.core.empty_QMARK_.call(null,warning_string)){
return null;
} else {
var temp__5720__auto___1779 = new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5720__auto___1779)){
var column_1780 = temp__5720__auto___1779;
if(cljs.core.truth_(replete.priv_repl.show_indicator_QMARK_.call(null))){
cljs.core.println.call(null,replete.priv_repl.form_indicator.call(null,column_1780));
} else {
}
} else {
}

return cljs.core.print.call(null,warning_string);
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1773;
}});
replete.priv_repl.call_form_QMARK_ = (function replete$priv_repl$call_form_QMARK_(expression_form,allowed_operators){
return cljs.core.contains_QMARK_.call(null,allowed_operators,(function (){var and__4120__auto__ = cljs.core.list_QMARK_.call(null,expression_form);
if(and__4120__auto__){
return cljs.core.first.call(null,expression_form);
} else {
return and__4120__auto__;
}
})());
});
/**
 * Determines if the expression is a def expression which returns a Var.
 */
replete.priv_repl.def_form_QMARK_ = (function replete$priv_repl$def_form_QMARK_(expression_form){
return replete.priv_repl.call_form_QMARK_.call(null,expression_form,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"defonce","defonce",-1681484013,null),"null",new cljs.core.Symbol(null,"defn-","defn-",1097765044,null),"null",new cljs.core.Symbol(null,"defmulti","defmulti",1936112154,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null));
});
replete.priv_repl.string_doc = (function replete$priv_repl$string_doc(m){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1781_1785 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1782_1786 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1783_1787 = true;
var _STAR_print_fn_STAR__temp_val__1784_1788 = ((function (_STAR_print_newline_STAR__orig_val__1781_1785,_STAR_print_fn_STAR__orig_val__1782_1786,_STAR_print_newline_STAR__temp_val__1783_1787,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__1781_1785,_STAR_print_fn_STAR__orig_val__1782_1786,_STAR_print_newline_STAR__temp_val__1783_1787,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1783_1787;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1784_1788;

try{cljs.repl.print_doc.call(null,cljs.core.update.call(null,m,new cljs.core.Keyword(null,"doc","doc",1913296891),((replete.priv_repl.user_interface_idiom_ipad_QMARK_.call(null))?cljs.core.identity:replete.priv_repl.reflow)));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1782_1786;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1781_1785;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
});
replete.priv_repl.print_doc = (function replete$priv_repl$print_doc(m){
return cljs.core.print.call(null,replete.priv_repl.string_doc.call(null,m));
});
replete.priv_repl.doc_STAR_ = (function replete$priv_repl$doc_STAR_(var_args){
var G__1790 = arguments.length;
switch (G__1790) {
case 1:
return replete.priv_repl.doc_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replete.priv_repl.doc_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

replete.priv_repl.doc_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (sym){
return replete.priv_repl.doc_STAR_.call(null,sym,replete.priv_repl.print_doc);
});

replete.priv_repl.doc_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (sym,print_doc_fn){
var temp__5718__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"catch","catch",-1616370245,null),new cljs.core.Symbol(null,"try","try",-1273693247,null),new cljs.core.Symbol(null,"finally","finally",-1065347064,null),new cljs.core.Symbol(null,"try","try",-1273693247,null)], null).call(null,sym);
if(cljs.core.truth_(temp__5718__auto__)){
var special_sym = temp__5718__auto__;
return replete.priv_repl.doc_STAR_.call(null,special_sym);
} else {
if(cljs.core.truth_(replete.repl_resources.special_doc_map.call(null,sym))){
return print_doc_fn.call(null,replete.priv_repl.special_doc.call(null,sym));
} else {
if(cljs.core.truth_(replete.repl_resources.repl_special_doc_map.call(null,sym))){
return print_doc_fn.call(null,replete.priv_repl.repl_special_doc.call(null,sym));
} else {
if(cljs.core.truth_(replete.priv_repl.get_namespace.call(null,sym))){
return print_doc_fn.call(null,cljs.core.select_keys.call(null,replete.priv_repl.get_namespace.call(null,sym),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"doc","doc",1913296891)], null)));
} else {
if(cljs.core.truth_(replete.priv_repl.get_var.call(null,replete.priv_repl.get_aenv.call(null),sym))){
return print_doc_fn.call(null,(function (){var var$ = replete.priv_repl.get_var.call(null,replete.priv_repl.get_aenv.call(null),sym);
var var$__$1 = cljs.core.assoc.call(null,var$,new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.second.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(var$))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(var$))));
var m = cljs.core.select_keys.call(null,var$__$1,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"url","url",276297046)], null));
var m__$1 = cljs.core.update.call(null,m,new cljs.core.Keyword(null,"doc","doc",1913296891),replete.priv_repl.undo_reader_conditional_whitespace_docstring);
var G__1791 = cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null),cljs.core.name);
if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$__$1))){
return cljs.core.assoc.call(null,G__1791,new cljs.core.Keyword(null,"protocol","protocol",652470118),true,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (G__1791,var$,var$__$1,m,m__$1,temp__5718__auto__){
return (function (p__1792){
var vec__1793 = p__1792;
var fname = cljs.core.nth.call(null,vec__1793,(0),null);
var sigs = cljs.core.nth.call(null,vec__1793,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fname,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(replete.priv_repl.get_var.call(null,replete.priv_repl.get_aenv.call(null),cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname)))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.seq.call(null,sigs)], null)], null);
});})(G__1791,var$,var$__$1,m,m__$1,temp__5718__auto__))
,cljs.core.get_in.call(null,var$__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null)))));
} else {
return G__1791;
}
})());
} else {
return null;
}
}
}
}
}
});

replete.priv_repl.doc_STAR_.cljs$lang$maxFixedArity = 2;

replete.priv_repl.string_dir = (function replete$priv_repl$string_dir(nsname){
var ns = replete.priv_repl.resolve_ns.call(null,nsname);
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1797_1801 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1798_1802 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1799_1803 = true;
var _STAR_print_fn_STAR__temp_val__1800_1804 = ((function (_STAR_print_newline_STAR__orig_val__1797_1801,_STAR_print_fn_STAR__orig_val__1798_1802,_STAR_print_newline_STAR__temp_val__1799_1803,sb__4661__auto__,ns){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__1797_1801,_STAR_print_fn_STAR__orig_val__1798_1802,_STAR_print_newline_STAR__temp_val__1799_1803,sb__4661__auto__,ns))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1799_1803;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1800_1804;

try{cljs.core.run_BANG_.call(null,cljs.core.prn,cljs.core.distinct.call(null,cljs.core.sort.call(null,cljs.core.concat.call(null,replete.priv_repl.public_syms.call(null,ns),replete.priv_repl.public_syms.call(null,replete.priv_repl.add_macros_suffix.call(null,ns))))));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1798_1802;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1797_1801;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
});
replete.priv_repl.dir_STAR_ = (function replete$priv_repl$dir_STAR_(nsname){
return cljs.core.print.call(null,replete.priv_repl.string_dir.call(null,nsname));
});
replete.priv_repl.string_find_doc = (function replete$priv_repl$string_find_doc(re_string_or_pattern){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1805_1827 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1806_1828 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1807_1829 = true;
var _STAR_print_fn_STAR__temp_val__1808_1830 = ((function (_STAR_print_newline_STAR__orig_val__1805_1827,_STAR_print_fn_STAR__orig_val__1806_1828,_STAR_print_newline_STAR__temp_val__1807_1829,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__1805_1827,_STAR_print_fn_STAR__orig_val__1806_1828,_STAR_print_newline_STAR__temp_val__1807_1829,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1807_1829;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1808_1830;

try{var re_1831 = cljs.core.re_pattern.call(null,re_string_or_pattern);
var sym_docs_1832 = cljs.core.sort_by.call(null,cljs.core.first,cljs.core.mapcat.call(null,((function (re_1831,_STAR_print_newline_STAR__orig_val__1805_1827,_STAR_print_fn_STAR__orig_val__1806_1828,_STAR_print_newline_STAR__temp_val__1807_1829,_STAR_print_fn_STAR__temp_val__1808_1830,sb__4661__auto__){
return (function (ns){
return cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.first,cljs.core.comp.call(null,new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.second)),cljs.core.get_in.call(null,cljs.core.deref.call(null,replete.priv_repl.st),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)));
});})(re_1831,_STAR_print_newline_STAR__orig_val__1805_1827,_STAR_print_fn_STAR__orig_val__1806_1828,_STAR_print_newline_STAR__temp_val__1807_1829,_STAR_print_fn_STAR__temp_val__1808_1830,sb__4661__auto__))
,replete.priv_repl.all_ns.call(null)));
var seq__1809_1833 = cljs.core.seq.call(null,sym_docs_1832);
var chunk__1811_1834 = null;
var count__1812_1835 = (0);
var i__1813_1836 = (0);
while(true){
if((i__1813_1836 < count__1812_1835)){
var vec__1821_1837 = cljs.core._nth.call(null,chunk__1811_1834,i__1813_1836);
var sym_1838 = cljs.core.nth.call(null,vec__1821_1837,(0),null);
var doc_1839 = cljs.core.nth.call(null,vec__1821_1837,(1),null);
if(cljs.core.truth_((function (){var and__4120__auto__ = doc_1839;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = cljs.core.name.call(null,sym_1838);
if(cljs.core.truth_(and__4120__auto____$1)){
var or__4131__auto__ = cljs.core.re_find.call(null,re_1831,doc_1839);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.re_find.call(null,re_1831,cljs.core.name.call(null,sym_1838));
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
replete.priv_repl.doc_STAR_.call(null,sym_1838);


var G__1840 = seq__1809_1833;
var G__1841 = chunk__1811_1834;
var G__1842 = count__1812_1835;
var G__1843 = (i__1813_1836 + (1));
seq__1809_1833 = G__1840;
chunk__1811_1834 = G__1841;
count__1812_1835 = G__1842;
i__1813_1836 = G__1843;
continue;
} else {
var G__1844 = seq__1809_1833;
var G__1845 = chunk__1811_1834;
var G__1846 = count__1812_1835;
var G__1847 = (i__1813_1836 + (1));
seq__1809_1833 = G__1844;
chunk__1811_1834 = G__1845;
count__1812_1835 = G__1846;
i__1813_1836 = G__1847;
continue;
}
} else {
var temp__5720__auto___1848 = cljs.core.seq.call(null,seq__1809_1833);
if(temp__5720__auto___1848){
var seq__1809_1849__$1 = temp__5720__auto___1848;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1809_1849__$1)){
var c__4550__auto___1850 = cljs.core.chunk_first.call(null,seq__1809_1849__$1);
var G__1851 = cljs.core.chunk_rest.call(null,seq__1809_1849__$1);
var G__1852 = c__4550__auto___1850;
var G__1853 = cljs.core.count.call(null,c__4550__auto___1850);
var G__1854 = (0);
seq__1809_1833 = G__1851;
chunk__1811_1834 = G__1852;
count__1812_1835 = G__1853;
i__1813_1836 = G__1854;
continue;
} else {
var vec__1824_1855 = cljs.core.first.call(null,seq__1809_1849__$1);
var sym_1856 = cljs.core.nth.call(null,vec__1824_1855,(0),null);
var doc_1857 = cljs.core.nth.call(null,vec__1824_1855,(1),null);
if(cljs.core.truth_((function (){var and__4120__auto__ = doc_1857;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = cljs.core.name.call(null,sym_1856);
if(cljs.core.truth_(and__4120__auto____$1)){
var or__4131__auto__ = cljs.core.re_find.call(null,re_1831,doc_1857);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.re_find.call(null,re_1831,cljs.core.name.call(null,sym_1856));
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
replete.priv_repl.doc_STAR_.call(null,sym_1856);


var G__1858 = cljs.core.next.call(null,seq__1809_1849__$1);
var G__1859 = null;
var G__1860 = (0);
var G__1861 = (0);
seq__1809_1833 = G__1858;
chunk__1811_1834 = G__1859;
count__1812_1835 = G__1860;
i__1813_1836 = G__1861;
continue;
} else {
var G__1862 = cljs.core.next.call(null,seq__1809_1849__$1);
var G__1863 = null;
var G__1864 = (0);
var G__1865 = (0);
seq__1809_1833 = G__1862;
chunk__1811_1834 = G__1863;
count__1812_1835 = G__1864;
i__1813_1836 = G__1865;
continue;
}
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1806_1828;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1805_1827;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
});
replete.priv_repl.find_doc_STAR_ = (function replete$priv_repl$find_doc_STAR_(re_string_or_pattern){
return cljs.core.print.call(null,replete.priv_repl.string_find_doc.call(null,re_string_or_pattern));
});
replete.priv_repl.string_source = (function replete$priv_repl$string_source(sym){
var or__4131__auto__ = replete.priv_repl.fetch_source.call(null,replete.priv_repl.get_var.call(null,replete.priv_repl.get_aenv.call(null),sym));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Source not found";
}
});
replete.priv_repl.source_STAR_ = (function replete$priv_repl$source_STAR_(sym){
return cljs.core.println.call(null,replete.priv_repl.string_source.call(null,sym));
});
replete.priv_repl.eval = (function replete$priv_repl$eval(var_args){
var G__1867 = arguments.length;
switch (G__1867) {
case 1:
return replete.priv_repl.eval.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replete.priv_repl.eval.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

replete.priv_repl.eval.cljs$core$IFn$_invoke$arity$1 = (function (form){
return replete.priv_repl.eval.call(null,form,cljs.core.deref.call(null,replete.priv_repl.current_ns));
});

replete.priv_repl.eval.cljs$core$IFn$_invoke$arity$2 = (function (form,ns){
var result = cljs.core.atom.call(null,null);
cljs.js.eval.call(null,replete.priv_repl.st,form,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true], null),((function (result){
return (function (p__1868){
var map__1869 = p__1868;
var map__1869__$1 = (((((!((map__1869 == null))))?(((((map__1869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1869):map__1869);
var value = cljs.core.get.call(null,map__1869__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__1869__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(error)){
return replete.priv_repl.print_error.call(null,error);
} else {
return cljs.core.reset_BANG_.call(null,result,value);
}
});})(result))
);

return cljs.core.deref.call(null,result);
});

replete.priv_repl.eval.cljs$lang$maxFixedArity = 2;

replete.priv_repl.ns_resolve = (function replete$priv_repl$ns_resolve(ns,sym){
return replete.priv_repl.eval.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null))))),ns);
});
replete.priv_repl.resolve = (function replete$priv_repl$resolve(sym){
return replete.priv_repl.ns_resolve.call(null,cljs.core.deref.call(null,replete.priv_repl.current_ns),sym);
});
replete.priv_repl.intern = (function replete$priv_repl$intern(var_args){
var G__1873 = arguments.length;
switch (G__1873) {
case 2:
return replete.priv_repl.intern.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return replete.priv_repl.intern.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

replete.priv_repl.intern.cljs$core$IFn$_invoke$arity$2 = (function (ns,name){
var temp__5720__auto__ = cljs.core.find_ns.call(null,(function (){var G__1874 = ns;
if((ns instanceof cljs.core.Namespace)){
return cljs.core.ns_name.call(null,G__1874);
} else {
return G__1874;
}
})());
if(cljs.core.truth_(temp__5720__auto__)){
var the_ns = temp__5720__auto__;
return replete.priv_repl.eval.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null))))),cljs.core.ns_name.call(null,the_ns));
} else {
return null;
}
});

replete.priv_repl.intern.cljs$core$IFn$_invoke$arity$3 = (function (ns,name,val){
var temp__5720__auto__ = cljs.core.find_ns.call(null,(function (){var G__1875 = ns;
if((ns instanceof cljs.core.Namespace)){
return cljs.core.ns_name.call(null,G__1875);
} else {
return G__1875;
}
})());
if(cljs.core.truth_(temp__5720__auto__)){
var the_ns = temp__5720__auto__;
return replete.priv_repl.eval.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,val,null,(1),null))))),cljs.core.ns_name.call(null,the_ns));
} else {
return null;
}
});

replete.priv_repl.intern.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=priv_repl.js.map
