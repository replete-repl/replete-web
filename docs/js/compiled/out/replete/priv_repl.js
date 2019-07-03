// Compiled by ClojureScript 1.10.520 {:target :webworker}
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
}catch (e18470){var e = e18470;
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
var G__18471 = cljs.core.subs.call(null,text,(x + (1)));
var G__18472 = (pos - (x + (1)));
var G__18473 = (line + (1));
text = G__18471;
pos = G__18472;
line = G__18473;
continue;
}
break;
}
});
replete.priv_repl.first_non_space_pos_after = (function replete$priv_repl$first_non_space_pos_after(text,pos){
while(true){
if(cljs.core._EQ_.call(null," ",cljs.core.subs.call(null,text,pos,(pos + (1))))){
var G__18474 = text;
var G__18475 = (pos + (1));
text = G__18474;
pos = G__18475;
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
return cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.mapcat.call(null,(function (p1__18476_SHARP_){
return cljs.core.map.call(null,cljs.core.first,cljs.core.get_in.call(null,cljs.core.deref.call(null,replete.priv_repl.st),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),p1__18476_SHARP_,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)));
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
var G__18478 = arguments.length;
switch (G__18478) {
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

return replete.priv_repl.ns_syms.call(null,ns,(function (p__18480){
var vec__18481 = p__18480;
var _ = cljs.core.nth.call(null,vec__18481,(0),null);
var attrs = cljs.core.nth.call(null,vec__18481,(1),null);
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

var G__18484_18485 = ns_sym;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"replete.http","replete.http",346062762,null),G__18484_18485)){
goog.require("replete.http");
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"replete.io","replete.io",1992297597,null),G__18484_18485)){
goog.require("replete.io");
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18484_18485)].join('')));

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
var paths_to_provides = cljs.core.map.call(null,(function (p__18486){
var vec__18487 = p__18486;
var _ = cljs.core.nth.call(null,vec__18487,(0),null);
var path = cljs.core.nth.call(null,vec__18487,(1),null);
var provides = cljs.core.nth.call(null,vec__18487,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,cljs.core.map.call(null,cljs.core.second,cljs.core.re_seq.call(null,/'(.*?)'/,provides))], null);
}),cljs.core.re_seq.call(null,/\ngoog\.addDependency\('(.*)', \[(.*?)\].*/,REPLETE_LOAD("goog/deps.js")));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = ((function (paths_to_provides){
return (function replete$priv_repl$closure_index_$_iter__18490(s__18491){
return (new cljs.core.LazySeq(null,((function (paths_to_provides){
return (function (){
var s__18491__$1 = s__18491;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__18491__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__18496 = cljs.core.first.call(null,xs__6277__auto__);
var path = cljs.core.nth.call(null,vec__18496,(0),null);
var provides = cljs.core.nth.call(null,vec__18496,(1),null);
var iterys__4519__auto__ = ((function (s__18491__$1,vec__18496,path,provides,xs__6277__auto__,temp__5720__auto__,paths_to_provides){
return (function replete$priv_repl$closure_index_$_iter__18490_$_iter__18492(s__18493){
return (new cljs.core.LazySeq(null,((function (s__18491__$1,vec__18496,path,provides,xs__6277__auto__,temp__5720__auto__,paths_to_provides){
return (function (){
var s__18493__$1 = s__18493;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__18493__$1);
if(temp__5720__auto____$1){
var s__18493__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18493__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__18493__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__18495 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__18494 = (0);
while(true){
if((i__18494 < size__4522__auto__)){
var provide = cljs.core._nth.call(null,c__4521__auto__,i__18494);
cljs.core.chunk_append.call(null,b__18495,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,provide),["goog/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,/(.*)\.js$/,path)))].join('')], null));

var G__18499 = (i__18494 + (1));
i__18494 = G__18499;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18495),replete$priv_repl$closure_index_$_iter__18490_$_iter__18492.call(null,cljs.core.chunk_rest.call(null,s__18493__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18495),null);
}
} else {
var provide = cljs.core.first.call(null,s__18493__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,provide),["goog/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,/(.*)\.js$/,path)))].join('')], null),replete$priv_repl$closure_index_$_iter__18490_$_iter__18492.call(null,cljs.core.rest.call(null,s__18493__$2)));
}
} else {
return null;
}
break;
}
});})(s__18491__$1,vec__18496,path,provides,xs__6277__auto__,temp__5720__auto__,paths_to_provides))
,null,null));
});})(s__18491__$1,vec__18496,path,provides,xs__6277__auto__,temp__5720__auto__,paths_to_provides))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,provides));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,replete$priv_repl$closure_index_$_iter__18490.call(null,cljs.core.rest.call(null,s__18491__$1)));
} else {
var G__18500 = cljs.core.rest.call(null,s__18491__$1);
s__18491__$1 = G__18500;
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
replete.priv_repl.skip_load_QMARK_ = (function replete$priv_repl$skip_load_QMARK_(p__18501){
var map__18502 = p__18501;
var map__18502__$1 = (((((!((map__18502 == null))))?(((((map__18502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18502):map__18502);
var name = cljs.core.get.call(null,map__18502__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__18502__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
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
replete.priv_repl.load = (function replete$priv_repl$load(p__18504,cb){
var map__18505 = p__18504;
var map__18505__$1 = (((((!((map__18505 == null))))?(((((map__18505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18505):map__18505);
var full = map__18505__$1;
var name = cljs.core.get.call(null,map__18505__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__18505__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var path = cljs.core.get.call(null,map__18505__$1,new cljs.core.Keyword(null,"path","path",-188191168));
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
var G__18507 = cljs.core.next.call(null,extensions);
extensions = G__18507;
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
}catch (e18508){var _ = e18508;
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
var G__18510 = arguments.length;
switch (G__18510) {
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
var _STAR_print_newline_STAR__orig_val__18511_18528 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18512_18529 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18513_18530 = true;
var _STAR_print_fn_STAR__temp_val__18514_18531 = ((function (_STAR_print_newline_STAR__orig_val__18511_18528,_STAR_print_fn_STAR__orig_val__18512_18529,_STAR_print_newline_STAR__temp_val__18513_18530,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__18511_18528,_STAR_print_fn_STAR__orig_val__18512_18529,_STAR_print_newline_STAR__temp_val__18513_18530,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18513_18530;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18514_18531;

try{var seq__18515_18532 = cljs.core.seq.call(null,cljs.stacktrace.mapped_stacktrace.call(null,stacktrace,sms,opts));
var chunk__18516_18533 = null;
var count__18517_18534 = (0);
var i__18518_18535 = (0);
while(true){
if((i__18518_18535 < count__18517_18534)){
var map__18523_18536 = cljs.core._nth.call(null,chunk__18516_18533,i__18518_18535);
var map__18523_18537__$1 = (((((!((map__18523_18536 == null))))?(((((map__18523_18536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18523_18536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18523_18536):map__18523_18536);
var function_18538 = cljs.core.get.call(null,map__18523_18537__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_18539 = cljs.core.get.call(null,map__18523_18537__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_18540 = cljs.core.get.call(null,map__18523_18537__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_18541 = cljs.core.get.call(null,map__18523_18537__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.call(null,[(cljs.core.truth_(function_18538)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(replete.priv_repl.unmunge_core_fn.call(null,function_18538))," "].join(''):null),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_18539),(cljs.core.truth_(line_18540)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_18540)].join(''):null),(cljs.core.truth_(column_18541)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_18541)].join(''):null),")"].join(''));


var G__18542 = seq__18515_18532;
var G__18543 = chunk__18516_18533;
var G__18544 = count__18517_18534;
var G__18545 = (i__18518_18535 + (1));
seq__18515_18532 = G__18542;
chunk__18516_18533 = G__18543;
count__18517_18534 = G__18544;
i__18518_18535 = G__18545;
continue;
} else {
var temp__5720__auto___18546 = cljs.core.seq.call(null,seq__18515_18532);
if(temp__5720__auto___18546){
var seq__18515_18547__$1 = temp__5720__auto___18546;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18515_18547__$1)){
var c__4550__auto___18548 = cljs.core.chunk_first.call(null,seq__18515_18547__$1);
var G__18549 = cljs.core.chunk_rest.call(null,seq__18515_18547__$1);
var G__18550 = c__4550__auto___18548;
var G__18551 = cljs.core.count.call(null,c__4550__auto___18548);
var G__18552 = (0);
seq__18515_18532 = G__18549;
chunk__18516_18533 = G__18550;
count__18517_18534 = G__18551;
i__18518_18535 = G__18552;
continue;
} else {
var map__18525_18553 = cljs.core.first.call(null,seq__18515_18547__$1);
var map__18525_18554__$1 = (((((!((map__18525_18553 == null))))?(((((map__18525_18553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18525_18553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18525_18553):map__18525_18553);
var function_18555 = cljs.core.get.call(null,map__18525_18554__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_18556 = cljs.core.get.call(null,map__18525_18554__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_18557 = cljs.core.get.call(null,map__18525_18554__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_18558 = cljs.core.get.call(null,map__18525_18554__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.call(null,[(cljs.core.truth_(function_18555)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(replete.priv_repl.unmunge_core_fn.call(null,function_18555))," "].join(''):null),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_18556),(cljs.core.truth_(line_18557)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_18557)].join(''):null),(cljs.core.truth_(column_18558)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_18558)].join(''):null),")"].join(''));


var G__18559 = cljs.core.next.call(null,seq__18515_18547__$1);
var G__18560 = null;
var G__18561 = (0);
var G__18562 = (0);
seq__18515_18532 = G__18559;
chunk__18516_18533 = G__18560;
count__18517_18534 = G__18561;
i__18518_18535 = G__18562;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18512_18529;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18511_18528;
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
var G__18564 = arguments.length;
switch (G__18564) {
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
var error__$1 = (function (){var G__18565 = error;
if(cljs.core.contains_QMARK_.call(null,cljs.core.ex_data.call(null,cljs.core.ex_cause.call(null,error)),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358))){
return cljs.core.ex_cause.call(null,G__18565);
} else {
return G__18565;
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
var temp__5718__auto__ = (function (){var env__9093__auto__ = replete.priv_repl.st;
var env__9093__auto____$1 = ((cljs.core.map_QMARK_.call(null,env__9093__auto__))?cljs.core.atom.call(null,env__9093__auto__):(((((env__9093__auto__ instanceof cljs.core.Atom)) && (cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,env__9093__auto__)))))?env__9093__auto__:(function(){throw (new Error(["Compiler environment must be a map or atom containing a map, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,env__9093__auto__))].join('')))})()
));
var _STAR_compiler_STAR__orig_val__18568 = cljs.env._STAR_compiler_STAR_;
var _STAR_compiler_STAR__temp_val__18569 = env__9093__auto____$1;
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__18569;

try{return replete.priv_repl.resolve_var.call(null,env,cljs.core.symbol.call(null,macros_ns_str,cljs.core.name.call(null,sym)));
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__18568;
}})();
if(cljs.core.truth_(temp__5718__auto__)){
var macro_var = temp__5718__auto__;
return cljs.core.update.call(null,cljs.core.assoc.call(null,macro_var,new cljs.core.Keyword(null,"ns","ns",441598760),base_ns),new cljs.core.Keyword(null,"name","name",1843675177),((function (macro_var,temp__5718__auto__,macros_ns_str,base_ns_str,base_ns){
return (function (p1__18567_SHARP_){
return cljs.core.symbol.call(null,base_ns_str,cljs.core.name.call(null,p1__18567_SHARP_));
});})(macro_var,temp__5718__auto__,macros_ns_str,base_ns_str,base_ns))
);
} else {
return null;
}
});
replete.priv_repl.all_macros_ns = (function replete$priv_repl$all_macros_ns(){
return cljs.core.filter.call(null,(function (p1__18570_SHARP_){
return clojure.string.ends_with_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18570_SHARP_),"$macros");
}),replete.priv_repl.all_ns.call(null));
});
replete.priv_repl.get_var = (function replete$priv_repl$get_var(env,sym){
var var$ = (function (){var or__4131__auto__ = (function (){var env__9093__auto__ = replete.priv_repl.st;
var env__9093__auto____$1 = ((cljs.core.map_QMARK_.call(null,env__9093__auto__))?cljs.core.atom.call(null,env__9093__auto__):(((((env__9093__auto__ instanceof cljs.core.Atom)) && (cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,env__9093__auto__)))))?env__9093__auto__:(function(){throw (new Error(["Compiler environment must be a map or atom containing a map, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,env__9093__auto__))].join('')))})()
));
var _STAR_compiler_STAR__orig_val__18575 = cljs.env._STAR_compiler_STAR_;
var _STAR_compiler_STAR__temp_val__18576 = env__9093__auto____$1;
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__18576;

try{return replete.priv_repl.resolve_var.call(null,env,sym);
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__18575;
}})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.some.call(null,((function (or__4131__auto__){
return (function (p1__18571_SHARP_){
return replete.priv_repl.get_macro_var.call(null,env,sym,p1__18571_SHARP_);
});})(or__4131__auto__))
,replete.priv_repl.all_macros_ns.call(null));
}
})();
if(cljs.core.truth_(var$)){
if(cljs.core._EQ_.call(null,cljs.core.namespace.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$)))){
return cljs.core.update.call(null,var$,new cljs.core.Keyword(null,"name","name",1843675177),((function (var$){
return (function (p1__18572_SHARP_){
return cljs.core.symbol.call(null,cljs.core.name.call(null,p1__18572_SHARP_));
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
var n__4607__auto___18582 = (new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(var$) - (1));
var __18583 = (0);
while(true){
if((__18583 < n__4607__auto___18582)){
cljs.tools.reader.reader_types.read_line.call(null,rdr);

var G__18584 = (__18583 + (1));
__18583 = G__18584;
continue;
} else {
}
break;
}

var _STAR_alias_map_STAR__orig_val__18577 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_alias_map_STAR__temp_val__18578 = (function (){
if((typeof replete !== 'undefined') && (typeof replete.priv_repl !== 'undefined') && (typeof replete.priv_repl.t_replete$priv_repl18579 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
replete.priv_repl.t_replete$priv_repl18579 = (function (var$,or__4131__auto__,temp__5720__auto__,filepath,file_source,rdr,_STAR_alias_map_STAR__orig_val__18577,meta18580){
this.var$ = var$;
this.or__4131__auto__ = or__4131__auto__;
this.temp__5720__auto__ = temp__5720__auto__;
this.filepath = filepath;
this.file_source = file_source;
this.rdr = rdr;
this._STAR_alias_map_STAR__orig_val__18577 = _STAR_alias_map_STAR__orig_val__18577;
this.meta18580 = meta18580;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
replete.priv_repl.t_replete$priv_repl18579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (_STAR_alias_map_STAR__orig_val__18577,rdr,file_source,temp__5720__auto____$1,filepath,temp__5720__auto__,or__4131__auto__){
return (function (_18581,meta18580__$1){
var self__ = this;
var _18581__$1 = this;
return (new replete.priv_repl.t_replete$priv_repl18579(self__.var$,self__.or__4131__auto__,self__.temp__5720__auto__,self__.filepath,self__.file_source,self__.rdr,self__._STAR_alias_map_STAR__orig_val__18577,meta18580__$1));
});})(_STAR_alias_map_STAR__orig_val__18577,rdr,file_source,temp__5720__auto____$1,filepath,temp__5720__auto__,or__4131__auto__))
;

replete.priv_repl.t_replete$priv_repl18579.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (_STAR_alias_map_STAR__orig_val__18577,rdr,file_source,temp__5720__auto____$1,filepath,temp__5720__auto__,or__4131__auto__){
return (function (_18581){
var self__ = this;
var _18581__$1 = this;
return self__.meta18580;
});})(_STAR_alias_map_STAR__orig_val__18577,rdr,file_source,temp__5720__auto____$1,filepath,temp__5720__auto__,or__4131__auto__))
;

replete.priv_repl.t_replete$priv_repl18579.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (_STAR_alias_map_STAR__orig_val__18577,rdr,file_source,temp__5720__auto____$1,filepath,temp__5720__auto__,or__4131__auto__){
return (function (_,k){
var self__ = this;
var ___$1 = this;
return k;
});})(_STAR_alias_map_STAR__orig_val__18577,rdr,file_source,temp__5720__auto____$1,filepath,temp__5720__auto__,or__4131__auto__))
;

replete.priv_repl.t_replete$priv_repl18579.getBasis = ((function (_STAR_alias_map_STAR__orig_val__18577,rdr,file_source,temp__5720__auto____$1,filepath,temp__5720__auto__,or__4131__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var","var",870848730,null),new cljs.core.Symbol(null,"or__4131__auto__","or__4131__auto__",941665662,null),new cljs.core.Symbol(null,"temp__5720__auto__","temp__5720__auto__",-1339709213,null),new cljs.core.Symbol(null,"filepath","filepath",-1556947284,null),new cljs.core.Symbol(null,"file-source","file-source",-1043850180,null),new cljs.core.Symbol(null,"rdr","rdr",190007785,null),new cljs.core.Symbol(null,"*alias-map*-orig-val__18577","*alias-map*-orig-val__18577",1347660334,null),new cljs.core.Symbol(null,"meta18580","meta18580",-347324369,null)], null);
});})(_STAR_alias_map_STAR__orig_val__18577,rdr,file_source,temp__5720__auto____$1,filepath,temp__5720__auto__,or__4131__auto__))
;

replete.priv_repl.t_replete$priv_repl18579.cljs$lang$type = true;

replete.priv_repl.t_replete$priv_repl18579.cljs$lang$ctorStr = "replete.priv-repl/t_replete$priv_repl18579";

replete.priv_repl.t_replete$priv_repl18579.cljs$lang$ctorPrWriter = ((function (_STAR_alias_map_STAR__orig_val__18577,rdr,file_source,temp__5720__auto____$1,filepath,temp__5720__auto__,or__4131__auto__){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"replete.priv-repl/t_replete$priv_repl18579");
});})(_STAR_alias_map_STAR__orig_val__18577,rdr,file_source,temp__5720__auto____$1,filepath,temp__5720__auto__,or__4131__auto__))
;

/**
 * Positional factory function for replete.priv-repl/t_replete$priv_repl18579.
 */
replete.priv_repl.__GT_t_replete$priv_repl18579 = ((function (_STAR_alias_map_STAR__orig_val__18577,rdr,file_source,temp__5720__auto____$1,filepath,temp__5720__auto__,or__4131__auto__){
return (function replete$priv_repl$fetch_source_$___GT_t_replete$priv_repl18579(var$__$1,or__4131__auto____$1,temp__5720__auto____$2,filepath__$1,file_source__$1,rdr__$1,_STAR_alias_map_STAR__orig_val__18577__$1,meta18580){
return (new replete.priv_repl.t_replete$priv_repl18579(var$__$1,or__4131__auto____$1,temp__5720__auto____$2,filepath__$1,file_source__$1,rdr__$1,_STAR_alias_map_STAR__orig_val__18577__$1,meta18580));
});})(_STAR_alias_map_STAR__orig_val__18577,rdr,file_source,temp__5720__auto____$1,filepath,temp__5720__auto__,or__4131__auto__))
;

}

return (new replete.priv_repl.t_replete$priv_repl18579(var$,or__4131__auto__,temp__5720__auto____$1,filepath,file_source,rdr,_STAR_alias_map_STAR__orig_val__18577,cljs.core.PersistentArrayMap.EMPTY));
})()
;
cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__18578;

try{return new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,cljs.tools.reader.read.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-cond","read-cond",1056899244),new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs","cljs",1492417629),null], null), null)], null),rdr)));
}finally {cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__18577;
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
return (function (p__18585){
var map__18586 = p__18585;
var map__18586__$1 = (((((!((map__18586 == null))))?(((((map__18586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18586):map__18586);
var e = cljs.core.get.call(null,map__18586__$1,new cljs.core.Keyword(null,"error","error",-978969032));
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
var matches_QMARK_ = (((str_or_pattern instanceof RegExp))?(function (p1__18588_SHARP_){
return cljs.core.re_find.call(null,str_or_pattern,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18588_SHARP_));
}):(function (p1__18589_SHARP_){
return clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18589_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(str_or_pattern));
}));
return cljs.core.distinct.call(null,cljs.core.sort.call(null,cljs.core.mapcat.call(null,((function (matches_QMARK_){
return (function (ns){
var ns_name = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
var ns_name__$1 = ((clojure.string.ends_with_QMARK_.call(null,ns_name,"$macros"))?cljs.core.apply.call(null,cljs.core.str,cljs.core.drop_last.call(null,(7),ns_name)):ns_name);
return cljs.core.map.call(null,((function (ns_name,ns_name__$1,matches_QMARK_){
return (function (p1__18590_SHARP_){
return cljs.core.symbol.call(null,ns_name__$1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18590_SHARP_));
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
var warning_string = (function (){var sb__18461__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18591_18597 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_err_fn_STAR__orig_val__18592_18598 = cljs.core._STAR_print_err_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18593_18599 = true;
var _STAR_print_err_fn_STAR__temp_val__18594_18600 = ((function (_STAR_print_newline_STAR__orig_val__18591_18597,_STAR_print_err_fn_STAR__orig_val__18592_18598,_STAR_print_newline_STAR__temp_val__18593_18599,sb__18461__auto__){
return (function (x__18462__auto__){
return sb__18461__auto__.append(x__18462__auto__);
});})(_STAR_print_newline_STAR__orig_val__18591_18597,_STAR_print_err_fn_STAR__orig_val__18592_18598,_STAR_print_newline_STAR__temp_val__18593_18599,sb__18461__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18593_18599;

cljs.core._STAR_print_err_fn_STAR_ = _STAR_print_err_fn_STAR__temp_val__18594_18600;

try{cljs.analyzer.default_warning_handler.call(null,warning_type,env,cljs.core.update.call(null,extra,new cljs.core.Keyword(null,"js-op","js-op",-1046277897),replete.priv_repl.eliminate_macros_suffix));
}finally {cljs.core._STAR_print_err_fn_STAR_ = _STAR_print_err_fn_STAR__orig_val__18592_18598;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18591_18597;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__18461__auto__);
})();
var _STAR_print_fn_STAR__orig_val__18595 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__18596 = cljs.core._STAR_print_err_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18596;

try{if(cljs.core.empty_QMARK_.call(null,warning_string)){
return null;
} else {
var temp__5720__auto___18601 = new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5720__auto___18601)){
var column_18602 = temp__5720__auto___18601;
if(cljs.core.truth_(replete.priv_repl.show_indicator_QMARK_.call(null))){
cljs.core.println.call(null,replete.priv_repl.form_indicator.call(null,column_18602));
} else {
}
} else {
}

return cljs.core.print.call(null,warning_string);
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18595;
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
var _STAR_print_newline_STAR__orig_val__18603_18607 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18604_18608 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18605_18609 = true;
var _STAR_print_fn_STAR__temp_val__18606_18610 = ((function (_STAR_print_newline_STAR__orig_val__18603_18607,_STAR_print_fn_STAR__orig_val__18604_18608,_STAR_print_newline_STAR__temp_val__18605_18609,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__18603_18607,_STAR_print_fn_STAR__orig_val__18604_18608,_STAR_print_newline_STAR__temp_val__18605_18609,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18605_18609;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18606_18610;

try{cljs.repl.print_doc.call(null,cljs.core.update.call(null,m,new cljs.core.Keyword(null,"doc","doc",1913296891),((replete.priv_repl.user_interface_idiom_ipad_QMARK_.call(null))?cljs.core.identity:replete.priv_repl.reflow)));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18604_18608;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18603_18607;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
});
replete.priv_repl.print_doc = (function replete$priv_repl$print_doc(m){
return cljs.core.print.call(null,replete.priv_repl.string_doc.call(null,m));
});
replete.priv_repl.doc_STAR_ = (function replete$priv_repl$doc_STAR_(var_args){
var G__18612 = arguments.length;
switch (G__18612) {
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
var G__18613 = cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null),cljs.core.name);
if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$__$1))){
return cljs.core.assoc.call(null,G__18613,new cljs.core.Keyword(null,"protocol","protocol",652470118),true,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (G__18613,var$,var$__$1,m,m__$1,temp__5718__auto__){
return (function (p__18614){
var vec__18615 = p__18614;
var fname = cljs.core.nth.call(null,vec__18615,(0),null);
var sigs = cljs.core.nth.call(null,vec__18615,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fname,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(replete.priv_repl.get_var.call(null,replete.priv_repl.get_aenv.call(null),cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname)))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.seq.call(null,sigs)], null)], null);
});})(G__18613,var$,var$__$1,m,m__$1,temp__5718__auto__))
,cljs.core.get_in.call(null,var$__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null)))));
} else {
return G__18613;
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
var _STAR_print_newline_STAR__orig_val__18619_18623 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18620_18624 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18621_18625 = true;
var _STAR_print_fn_STAR__temp_val__18622_18626 = ((function (_STAR_print_newline_STAR__orig_val__18619_18623,_STAR_print_fn_STAR__orig_val__18620_18624,_STAR_print_newline_STAR__temp_val__18621_18625,sb__4661__auto__,ns){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__18619_18623,_STAR_print_fn_STAR__orig_val__18620_18624,_STAR_print_newline_STAR__temp_val__18621_18625,sb__4661__auto__,ns))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18621_18625;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18622_18626;

try{cljs.core.run_BANG_.call(null,cljs.core.prn,cljs.core.distinct.call(null,cljs.core.sort.call(null,cljs.core.concat.call(null,replete.priv_repl.public_syms.call(null,ns),replete.priv_repl.public_syms.call(null,replete.priv_repl.add_macros_suffix.call(null,ns))))));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18620_18624;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18619_18623;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
});
replete.priv_repl.dir_STAR_ = (function replete$priv_repl$dir_STAR_(nsname){
return cljs.core.print.call(null,replete.priv_repl.string_dir.call(null,nsname));
});
replete.priv_repl.string_find_doc = (function replete$priv_repl$string_find_doc(re_string_or_pattern){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18627_18649 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18628_18650 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18629_18651 = true;
var _STAR_print_fn_STAR__temp_val__18630_18652 = ((function (_STAR_print_newline_STAR__orig_val__18627_18649,_STAR_print_fn_STAR__orig_val__18628_18650,_STAR_print_newline_STAR__temp_val__18629_18651,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__18627_18649,_STAR_print_fn_STAR__orig_val__18628_18650,_STAR_print_newline_STAR__temp_val__18629_18651,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18629_18651;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18630_18652;

try{var re_18653 = cljs.core.re_pattern.call(null,re_string_or_pattern);
var sym_docs_18654 = cljs.core.sort_by.call(null,cljs.core.first,cljs.core.mapcat.call(null,((function (re_18653,_STAR_print_newline_STAR__orig_val__18627_18649,_STAR_print_fn_STAR__orig_val__18628_18650,_STAR_print_newline_STAR__temp_val__18629_18651,_STAR_print_fn_STAR__temp_val__18630_18652,sb__4661__auto__){
return (function (ns){
return cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.first,cljs.core.comp.call(null,new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.second)),cljs.core.get_in.call(null,cljs.core.deref.call(null,replete.priv_repl.st),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)));
});})(re_18653,_STAR_print_newline_STAR__orig_val__18627_18649,_STAR_print_fn_STAR__orig_val__18628_18650,_STAR_print_newline_STAR__temp_val__18629_18651,_STAR_print_fn_STAR__temp_val__18630_18652,sb__4661__auto__))
,replete.priv_repl.all_ns.call(null)));
var seq__18631_18655 = cljs.core.seq.call(null,sym_docs_18654);
var chunk__18633_18656 = null;
var count__18634_18657 = (0);
var i__18635_18658 = (0);
while(true){
if((i__18635_18658 < count__18634_18657)){
var vec__18643_18659 = cljs.core._nth.call(null,chunk__18633_18656,i__18635_18658);
var sym_18660 = cljs.core.nth.call(null,vec__18643_18659,(0),null);
var doc_18661 = cljs.core.nth.call(null,vec__18643_18659,(1),null);
if(cljs.core.truth_((function (){var and__4120__auto__ = doc_18661;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = cljs.core.name.call(null,sym_18660);
if(cljs.core.truth_(and__4120__auto____$1)){
var or__4131__auto__ = cljs.core.re_find.call(null,re_18653,doc_18661);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.re_find.call(null,re_18653,cljs.core.name.call(null,sym_18660));
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
replete.priv_repl.doc_STAR_.call(null,sym_18660);


var G__18662 = seq__18631_18655;
var G__18663 = chunk__18633_18656;
var G__18664 = count__18634_18657;
var G__18665 = (i__18635_18658 + (1));
seq__18631_18655 = G__18662;
chunk__18633_18656 = G__18663;
count__18634_18657 = G__18664;
i__18635_18658 = G__18665;
continue;
} else {
var G__18666 = seq__18631_18655;
var G__18667 = chunk__18633_18656;
var G__18668 = count__18634_18657;
var G__18669 = (i__18635_18658 + (1));
seq__18631_18655 = G__18666;
chunk__18633_18656 = G__18667;
count__18634_18657 = G__18668;
i__18635_18658 = G__18669;
continue;
}
} else {
var temp__5720__auto___18670 = cljs.core.seq.call(null,seq__18631_18655);
if(temp__5720__auto___18670){
var seq__18631_18671__$1 = temp__5720__auto___18670;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18631_18671__$1)){
var c__4550__auto___18672 = cljs.core.chunk_first.call(null,seq__18631_18671__$1);
var G__18673 = cljs.core.chunk_rest.call(null,seq__18631_18671__$1);
var G__18674 = c__4550__auto___18672;
var G__18675 = cljs.core.count.call(null,c__4550__auto___18672);
var G__18676 = (0);
seq__18631_18655 = G__18673;
chunk__18633_18656 = G__18674;
count__18634_18657 = G__18675;
i__18635_18658 = G__18676;
continue;
} else {
var vec__18646_18677 = cljs.core.first.call(null,seq__18631_18671__$1);
var sym_18678 = cljs.core.nth.call(null,vec__18646_18677,(0),null);
var doc_18679 = cljs.core.nth.call(null,vec__18646_18677,(1),null);
if(cljs.core.truth_((function (){var and__4120__auto__ = doc_18679;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = cljs.core.name.call(null,sym_18678);
if(cljs.core.truth_(and__4120__auto____$1)){
var or__4131__auto__ = cljs.core.re_find.call(null,re_18653,doc_18679);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.re_find.call(null,re_18653,cljs.core.name.call(null,sym_18678));
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
replete.priv_repl.doc_STAR_.call(null,sym_18678);


var G__18680 = cljs.core.next.call(null,seq__18631_18671__$1);
var G__18681 = null;
var G__18682 = (0);
var G__18683 = (0);
seq__18631_18655 = G__18680;
chunk__18633_18656 = G__18681;
count__18634_18657 = G__18682;
i__18635_18658 = G__18683;
continue;
} else {
var G__18684 = cljs.core.next.call(null,seq__18631_18671__$1);
var G__18685 = null;
var G__18686 = (0);
var G__18687 = (0);
seq__18631_18655 = G__18684;
chunk__18633_18656 = G__18685;
count__18634_18657 = G__18686;
i__18635_18658 = G__18687;
continue;
}
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18628_18650;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18627_18649;
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
var G__18689 = arguments.length;
switch (G__18689) {
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
return (function (p__18690){
var map__18691 = p__18690;
var map__18691__$1 = (((((!((map__18691 == null))))?(((((map__18691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18691):map__18691);
var value = cljs.core.get.call(null,map__18691__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__18691__$1,new cljs.core.Keyword(null,"error","error",-978969032));
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
var G__18695 = arguments.length;
switch (G__18695) {
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
var temp__5720__auto__ = cljs.core.find_ns.call(null,(function (){var G__18696 = ns;
if((ns instanceof cljs.core.Namespace)){
return cljs.core.ns_name.call(null,G__18696);
} else {
return G__18696;
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
var temp__5720__auto__ = cljs.core.find_ns.call(null,(function (){var G__18697 = ns;
if((ns instanceof cljs.core.Namespace)){
return cljs.core.ns_name.call(null,G__18697);
} else {
return G__18697;
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
