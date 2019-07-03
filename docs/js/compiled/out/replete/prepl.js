// Compiled by ClojureScript 1.10.520 {:target :webworker}
goog.provide('replete.prepl');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.repl');
goog.require('cljs.js');
goog.require('cljs.analyzer');
goog.require('cljs.env');
goog.require('cljs.tools.reader');
goog.require('cljs.tagged_literals');
goog.require('replete.priv_repl');
goog.require('replete.repl_resources');
goog.require('replete.pprint');
replete.prepl.skip_load_QMARK_ = (function replete$prepl$skip_load_QMARK_(p__18701){
var map__18702 = p__18701;
var map__18702__$1 = (((((!((map__18702 == null))))?(((((map__18702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18702):map__18702);
var name = cljs.core.get.call(null,map__18702__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__18702__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
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
var or__4131__auto____$3 = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.test.check","cljs.test.check",1889134569,null));
if(or__4131__auto____$3){
return or__4131__auto____$3;
} else {
var or__4131__auto____$4 = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.test.check.clojure-test","cljs.test.check.clojure-test",905425002,null));
if(or__4131__auto____$4){
return or__4131__auto____$4;
} else {
var or__4131__auto____$5 = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.test.check.generators","cljs.test.check.generators",-1276562865,null));
if(or__4131__auto____$5){
return or__4131__auto____$5;
} else {
var or__4131__auto____$6 = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.test.check.properties","cljs.test.check.properties",-1095263566,null));
if(or__4131__auto____$6){
return or__4131__auto____$6;
} else {
var or__4131__auto____$7 = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"replete.repl","replete.repl",2010228815,null));
if(or__4131__auto____$7){
return or__4131__auto____$7;
} else {
var or__4131__auto____$8 = (function (){var and__4120__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.compiler.macros","cljs.compiler.macros",750996207,null));
if(and__4120__auto__){
return macros;
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto____$8)){
return or__4131__auto____$8;
} else {
var or__4131__auto____$9 = (function (){var and__4120__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.repl","cljs.repl",1767065658,null));
if(and__4120__auto__){
return macros;
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto____$9)){
return or__4131__auto____$9;
} else {
var or__4131__auto____$10 = (function (){var and__4120__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.js","cljs.js",474485962,null));
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
var or__4131__auto____$12 = (function (){var and__4120__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.spec.alpha.macros","cljs.spec.alpha.macros",-1322534707,null));
if(and__4120__auto__){
return macros;
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto____$12)){
return or__4131__auto____$12;
} else {
var or__4131__auto____$13 = (function (){var and__4120__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"clojure.template","clojure.template",-1162325089,null));
if(and__4120__auto__){
return macros;
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto____$13)){
return or__4131__auto____$13;
} else {
var or__4131__auto____$14 = (function (){var and__4120__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"tailrecursion.cljson","tailrecursion.cljson",-1010429243,null));
if(and__4120__auto__){
return macros;
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto____$14)){
return or__4131__auto____$14;
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
}
});
replete.prepl.hack_macros = (function replete$prepl$hack_macros(p__18704){
var map__18705 = p__18704;
var map__18705__$1 = (((((!((map__18705 == null))))?(((((map__18705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18705):map__18705);
var full = map__18705__$1;
var name = cljs.core.get.call(null,map__18705__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__18705__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.tools.reader.reader-types","cljs.tools.reader.reader-types",-346100821,null))){
return cljs.core.merge.call(null,full,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".cljs",".js"], null)], null));
} else {
if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.stacktrace","cljs.stacktrace",880035689,null))){
return cljs.core.merge.call(null,full,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".js",".cljc"], null)], null));
} else {
if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.analyzer.macros","cljs.analyzer.macros",298494182,null))){
return cljs.core.merge.call(null,full,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".clj",".cljc"], null)], null));
} else {
if(((cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.tools.reader.reader-types","cljs.tools.reader.reader-types",-346100821,null))) || (cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null))) || (cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null))) || (cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.spec.gen.alpha","cljs.spec.gen.alpha",1337138527,null))) || (cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null))) || (cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.test","cljs.test",884805483,null))))){
return cljs.core.merge.call(null,full,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),(cljs.core.truth_(macros)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".cljc"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".cljs",".cljc",".js"], null))], null));
} else {
if(((cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"clojure.test.check","clojure.test.check",-2057571184,null))) || (cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",445023851,null))) || (cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"clojure.test.check.properties","clojure.test.check.properties",-1352974441,null))) || (cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"clojure.test.check.clojure-test","clojure.test.check.clojure-test",-1989044715,null))) || (cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.analyzer","cljs.analyzer",1897881911,null))) || (cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.analyzer.api","cljs.analyzer.api",1016020812,null))) || (cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.tagged-literals","cljs.tagged-literals",387033363,null))))){
return cljs.core.merge.call(null,full,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".cljc"], null)], null));
} else {
return cljs.core.merge.call(null,full,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),(cljs.core.truth_(macros)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".clj",".cljc"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".cljs",".cljc",".js"], null))], null));

}
}
}
}
}
});
replete.prepl.load = (function replete$prepl$load(p__18707,cb){
var map__18708 = p__18707;
var map__18708__$1 = (((((!((map__18708 == null))))?(((((map__18708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18708):map__18708);
var full = map__18708__$1;
var name = cljs.core.get.call(null,map__18708__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__18708__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_(replete.prepl.skip_load_QMARK_.call(null,full))){
return cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
if(cljs.core.truth_(cljs.core.re_matches.call(null,/^goog\/.*/,path))){
return replete.priv_repl.do_load_goog.call(null,name,cb);
} else {
var G__18711 = replete.prepl.hack_macros.call(null,full);
var map__18712 = G__18711;
var map__18712__$1 = (((((!((map__18712 == null))))?(((((map__18712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18712):map__18712);
var name__$1 = cljs.core.get.call(null,map__18712__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__18712__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var path__$1 = cljs.core.get.call(null,map__18712__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var extensions = cljs.core.get.call(null,map__18712__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var G__18711__$1 = G__18711;
while(true){
var map__18716 = G__18711__$1;
var map__18716__$1 = (((((!((map__18716 == null))))?(((((map__18716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18716):map__18716);
var name__$2 = cljs.core.get.call(null,map__18716__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros__$1 = cljs.core.get.call(null,map__18716__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var path__$2 = cljs.core.get.call(null,map__18716__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var extensions__$1 = cljs.core.get.call(null,map__18716__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
if(cljs.core.truth_(extensions__$1)){
if(cljs.core.truth_(replete.priv_repl.load_and_callback_BANG_.call(null,name__$2,path__$2,cljs.core.first.call(null,extensions__$1),macros__$1,cb))){
return null;
} else {
var G__18718 = cljs.core.next.call(null,extensions__$1);
G__18711__$1 = G__18718;
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
replete.prepl.process_in_ns = (function replete$prepl$process_in_ns(argument){
var result_data = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs.js.eval.call(null,replete.priv_repl.st,argument,replete.priv_repl.make_base_eval_opts.call(null),((function (result_data){
return (function (result){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result))){
return cljs.core.reset_BANG_.call(null,result_data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result)], null));
} else {
var ns_name = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(result);
if((!((ns_name instanceof cljs.core.Symbol)))){
return cljs.core.reset_BANG_.call(null,result_data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword(null,"val","val",128701612),"Argument to in-ns must be a symbol."], null));
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,ns_name),replete.priv_repl.known_namespaces.call(null)))){
cljs.core.reset_BANG_.call(null,replete.priv_repl.current_ns,ns_name);

return cljs.core.reset_BANG_.call(null,result_data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"val","val",128701612),ns_name], null));
} else {
var ns_form = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"ns","ns",2082130287,null),null,(1),null)),(new cljs.core.List(null,ns_name,null,(1),null)))));
return cljs.js.eval.call(null,replete.priv_repl.st,ns_form,replete.priv_repl.make_base_eval_opts.call(null),((function (ns_form,ns_name,result_data){
return (function (p__18719){
var map__18720 = p__18719;
var map__18720__$1 = (((((!((map__18720 == null))))?(((((map__18720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18720):map__18720);
var e = cljs.core.get.call(null,map__18720__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(e)){
return cljs.core.reset_BANG_.call(null,result_data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword(null,"val","val",128701612),e], null));
} else {
cljs.core.reset_BANG_.call(null,replete.priv_repl.current_ns,ns_name);

return cljs.core.reset_BANG_.call(null,result_data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"val","val",128701612),ns_name], null));
}
});})(ns_form,ns_name,result_data))
);
}
}
}
});})(result_data))
);

return cljs.core.merge.call(null,cljs.core.deref.call(null,result_data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,replete.priv_repl.current_ns)], null));
});
replete.prepl.string_find_doc_STAR_ = (function replete$prepl$string_find_doc_STAR_(re_string_or_pattern){
var re = cljs.core.re_pattern.call(null,re_string_or_pattern);
var sym_docs = cljs.core.sort_by.call(null,cljs.core.first,cljs.core.mapcat.call(null,((function (re){
return (function (ns){
return cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.first,cljs.core.comp.call(null,new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.second)),cljs.core.get_in.call(null,cljs.core.deref.call(null,replete.priv_repl.st),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)));
});})(re))
,replete.priv_repl.all_ns.call(null)));
return clojure.string.join.call(null,(function (){var iter__4523__auto__ = ((function (re,sym_docs){
return (function replete$prepl$string_find_doc_STAR__$_iter__18722(s__18723){
return (new cljs.core.LazySeq(null,((function (re,sym_docs){
return (function (){
var s__18723__$1 = s__18723;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__18723__$1);
if(temp__5720__auto__){
var s__18723__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18723__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__18723__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__18725 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__18724 = (0);
while(true){
if((i__18724 < size__4522__auto__)){
var vec__18726 = cljs.core._nth.call(null,c__4521__auto__,i__18724);
var sym = cljs.core.nth.call(null,vec__18726,(0),null);
var doc = cljs.core.nth.call(null,vec__18726,(1),null);
if(cljs.core.truth_((function (){var and__4120__auto__ = doc;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = cljs.core.name.call(null,sym);
if(cljs.core.truth_(and__4120__auto____$1)){
var or__4131__auto__ = cljs.core.re_find.call(null,re,doc);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.re_find.call(null,re,cljs.core.name.call(null,sym));
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__18725,replete.priv_repl.doc_STAR_.call(null,sym,replete.priv_repl.string_doc));

var G__18732 = (i__18724 + (1));
i__18724 = G__18732;
continue;
} else {
var G__18733 = (i__18724 + (1));
i__18724 = G__18733;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18725),replete$prepl$string_find_doc_STAR__$_iter__18722.call(null,cljs.core.chunk_rest.call(null,s__18723__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18725),null);
}
} else {
var vec__18729 = cljs.core.first.call(null,s__18723__$2);
var sym = cljs.core.nth.call(null,vec__18729,(0),null);
var doc = cljs.core.nth.call(null,vec__18729,(1),null);
if(cljs.core.truth_((function (){var and__4120__auto__ = doc;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = cljs.core.name.call(null,sym);
if(cljs.core.truth_(and__4120__auto____$1)){
var or__4131__auto__ = cljs.core.re_find.call(null,re,doc);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.re_find.call(null,re,cljs.core.name.call(null,sym));
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return cljs.core.cons.call(null,replete.priv_repl.doc_STAR_.call(null,sym,replete.priv_repl.string_doc),replete$prepl$string_find_doc_STAR__$_iter__18722.call(null,cljs.core.rest.call(null,s__18723__$2)));
} else {
var G__18734 = cljs.core.rest.call(null,s__18723__$2);
s__18723__$1 = G__18734;
continue;
}
}
} else {
return null;
}
break;
}
});})(re,sym_docs))
,null,null));
});})(re,sym_docs))
;
return iter__4523__auto__.call(null,sym_docs);
})());
});
replete.prepl.string_error = (function replete$prepl$string_error(var_args){
var G__18736 = arguments.length;
switch (G__18736) {
case 1:
return replete.prepl.string_error.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replete.prepl.string_error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

replete.prepl.string_error.cljs$core$IFn$_invoke$arity$1 = (function (error){
return replete.prepl.string_error.call(null,error,false);
});

replete.prepl.string_error.cljs$core$IFn$_invoke$arity$2 = (function (error,include_stacktrace_QMARK_){
if(cljs.core.truth_(include_stacktrace_QMARK_)){
var error__$1 = (function (){var or__4131__auto__ = error.cause;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return error;
}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(error__$1.message),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error__$1.stack)].join('');
} else {
var error__$1 = (function (){var G__18737 = error;
if(cljs.core.contains_QMARK_.call(null,cljs.core.ex_data.call(null,cljs.core.ex_cause.call(null,error)),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358))){
return cljs.core.ex_cause.call(null,G__18737);
} else {
return G__18737;
}
})();
return cljs.repl.error__GT_str.call(null,error__$1);
}
});

replete.prepl.string_error.cljs$lang$maxFixedArity = 2;

replete.prepl.string_pst_STAR_ = (function replete$prepl$string_pst_STAR_(var_args){
var G__18740 = arguments.length;
switch (G__18740) {
case 0:
return replete.prepl.string_pst_STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return replete.prepl.string_pst_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

replete.prepl.string_pst_STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return replete.prepl.string_pst_STAR_.call(null,new cljs.core.Symbol(null,"*e","*e",329170866,null));
});

replete.prepl.string_pst_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (expr){
try{return cljs.js.eval.call(null,replete.priv_repl.st,expr,replete.priv_repl.make_base_eval_opts.call(null),(function (p__18742){
var map__18743 = p__18742;
var map__18743__$1 = (((((!((map__18743 == null))))?(((((map__18743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18743):map__18743);
var value = cljs.core.get.call(null,map__18743__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_(value)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword(null,"val","val",128701612),replete.prepl.string_error.call(null,value,true)], null);
} else {
return null;
}
}));
}catch (e18741){if((e18741 instanceof Error)){
var e = e18741;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"execution","execution",253283524),new cljs.core.Keyword(null,"val","val",128701612),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"caught","caught",443476795)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')], null);
} else {
throw e18741;

}
}});

replete.prepl.string_pst_STAR_.cljs$lang$maxFixedArity = 1;

replete.prepl.read_eval = (function replete$prepl$read_eval(var_args){
var G__18747 = arguments.length;
switch (G__18747) {
case 1:
return replete.prepl.read_eval.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replete.prepl.read_eval.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('replete.prepl.read_eval', replete.prepl.read_eval);

replete.prepl.read_eval.cljs$core$IFn$_invoke$arity$1 = (function (source){
return replete.prepl.read_eval.call(null,source,true);
});

replete.prepl.read_eval.cljs$core$IFn$_invoke$arity$2 = (function (source,expression_QMARK_){
var result = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"form","form",-1624062471),source,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,replete.priv_repl.current_ns)], null);
var _STAR_cljs_warning_handlers_STAR__orig_val__18748 = cljs.analyzer._STAR_cljs_warning_handlers_STAR_;
var _STAR_cljs_ns_STAR__orig_val__18749 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__18750 = cljs.env._STAR_compiler_STAR_;
var _STAR_ns_STAR__orig_val__18751 = cljs.core._STAR_ns_STAR_;
var _STAR_data_readers_STAR__orig_val__18752 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__18753 = cljs.tools.reader.resolve_symbol;
var _STAR_alias_map_STAR__orig_val__18754 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_cljs_warning_handlers_STAR__temp_val__18755 = (cljs.core.truth_(expression_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [replete.priv_repl.warning_handler], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.default_warning_handler], null));
var _STAR_cljs_ns_STAR__temp_val__18756 = cljs.core.deref.call(null,replete.priv_repl.current_ns);
var _STAR_compiler_STAR__temp_val__18757 = replete.priv_repl.st;
var _STAR_ns_STAR__temp_val__18758 = cljs.core.create_ns.call(null,cljs.core.deref.call(null,replete.priv_repl.current_ns));
var _STAR_data_readers_STAR__temp_val__18759 = cljs.tagged_literals._STAR_cljs_data_readers_STAR_;
var resolve_symbol_temp_val__18760 = cljs.analyzer.resolve_symbol;
var _STAR_alias_map_STAR__temp_val__18761 = replete.priv_repl.current_alias_map.call(null);
cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__temp_val__18755;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__18756;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__18757;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__18758;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__18759;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__18760;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__18761;

try{try{var expression_form = (function (){var and__4120__auto__ = expression_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return replete.priv_repl.repl_read_string.call(null,source);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(replete.priv_repl.repl_special_QMARK_.call(null,expression_form))){
var special_form = cljs.core.first.call(null,expression_form);
var argument = cljs.core.second.call(null,expression_form);
var result__$1 = cljs.core.merge.call(null,result,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"out","out",-910545517)], null));
var G__18763 = special_form;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__18763)){
return cljs.core.merge.call(null,result__$1,replete.prepl.process_in_ns.call(null,argument));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"dir","dir",-919681108,null),G__18763)){
return cljs.core.merge.call(null,result__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),replete.priv_repl.string_dir.call(null,argument)], null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"apropos","apropos",-1511857537,null),G__18763)){
var value = replete.priv_repl.apropos_STAR_.call(null,argument);
replete.priv_repl.process_1_2_3.call(null,expression_form,value);

return cljs.core.merge.call(null,result__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),value], null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"doc","doc",-741138878,null),G__18763)){
return cljs.core.merge.call(null,result__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),replete.priv_repl.doc_STAR_.call(null,argument,replete.priv_repl.string_doc)], null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"find-doc","find-doc",-1096800949,null),G__18763)){
return cljs.core.merge.call(null,result__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),replete.priv_repl.string_find_doc.call(null,argument)], null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"source","source",1206599988,null),G__18763)){
return cljs.core.merge.call(null,result__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),replete.priv_repl.string_source.call(null,argument)], null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"pst","pst",-1996688947,null),G__18763)){
return cljs.core.merge.call(null,result__$1,(cljs.core.truth_(argument)?replete.prepl.string_pst_STAR_.call(null,argument):replete.prepl.string_pst_STAR_.call(null)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18763)].join('')));

}
}
}
}
}
}
}
} else {
var eval_result = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var prepl_print_fn = ((function (eval_result,expression_form,_STAR_cljs_warning_handlers_STAR__orig_val__18748,_STAR_cljs_ns_STAR__orig_val__18749,_STAR_compiler_STAR__orig_val__18750,_STAR_ns_STAR__orig_val__18751,_STAR_data_readers_STAR__orig_val__18752,resolve_symbol_orig_val__18753,_STAR_alias_map_STAR__orig_val__18754,_STAR_cljs_warning_handlers_STAR__temp_val__18755,_STAR_cljs_ns_STAR__temp_val__18756,_STAR_compiler_STAR__temp_val__18757,_STAR_ns_STAR__temp_val__18758,_STAR_data_readers_STAR__temp_val__18759,resolve_symbol_temp_val__18760,_STAR_alias_map_STAR__temp_val__18761,result){
return (function (x){
return cljs.core.swap_BANG_.call(null,eval_result,cljs.core.conj,cljs.core.assoc.call(null,result,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"val","val",128701612),x));
});})(eval_result,expression_form,_STAR_cljs_warning_handlers_STAR__orig_val__18748,_STAR_cljs_ns_STAR__orig_val__18749,_STAR_compiler_STAR__orig_val__18750,_STAR_ns_STAR__orig_val__18751,_STAR_data_readers_STAR__orig_val__18752,resolve_symbol_orig_val__18753,_STAR_alias_map_STAR__orig_val__18754,_STAR_cljs_warning_handlers_STAR__temp_val__18755,_STAR_cljs_ns_STAR__temp_val__18756,_STAR_compiler_STAR__temp_val__18757,_STAR_ns_STAR__temp_val__18758,_STAR_data_readers_STAR__temp_val__18759,resolve_symbol_temp_val__18760,_STAR_alias_map_STAR__temp_val__18761,result))
;
var _STAR_print_newline_STAR__orig_val__18764_18780 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18765_18781 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_err_fn_STAR__orig_val__18766_18782 = cljs.core._STAR_print_err_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18767_18783 = true;
var _STAR_print_fn_STAR__temp_val__18768_18784 = prepl_print_fn;
var _STAR_print_err_fn_STAR__temp_val__18769_18785 = prepl_print_fn;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18767_18783;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18768_18784;

cljs.core._STAR_print_err_fn_STAR_ = _STAR_print_err_fn_STAR__temp_val__18769_18785;

try{cljs.js.eval_str.call(null,replete.priv_repl.st,source,(cljs.core.truth_(expression_QMARK_)?source:"File"),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,replete.priv_repl.current_ns),new cljs.core.Keyword(null,"load","load",-1318641184),replete.prepl.load,new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"source-map","source-map",1706252311),false,new cljs.core.Keyword(null,"verbose","verbose",1694226060),new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replete.priv_repl.app_env))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replete.priv_repl.app_env)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445),new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replete.priv_repl.app_env))], null):null),(cljs.core.truth_(expression_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true], null):null)),((function (_STAR_print_newline_STAR__orig_val__18764_18780,_STAR_print_fn_STAR__orig_val__18765_18781,_STAR_print_err_fn_STAR__orig_val__18766_18782,_STAR_print_newline_STAR__temp_val__18767_18783,_STAR_print_fn_STAR__temp_val__18768_18784,_STAR_print_err_fn_STAR__temp_val__18769_18785,eval_result,prepl_print_fn,expression_form,_STAR_cljs_warning_handlers_STAR__orig_val__18748,_STAR_cljs_ns_STAR__orig_val__18749,_STAR_compiler_STAR__orig_val__18750,_STAR_ns_STAR__orig_val__18751,_STAR_data_readers_STAR__orig_val__18752,resolve_symbol_orig_val__18753,_STAR_alias_map_STAR__orig_val__18754,_STAR_cljs_warning_handlers_STAR__temp_val__18755,_STAR_cljs_ns_STAR__temp_val__18756,_STAR_compiler_STAR__temp_val__18757,_STAR_ns_STAR__temp_val__18758,_STAR_data_readers_STAR__temp_val__18759,resolve_symbol_temp_val__18760,_STAR_alias_map_STAR__temp_val__18761,result){
return (function (p__18770){
var map__18771 = p__18770;
var map__18771__$1 = (((((!((map__18771 == null))))?(((((map__18771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18771):map__18771);
var ns = cljs.core.get.call(null,map__18771__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var value = cljs.core.get.call(null,map__18771__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__18771__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(expression_QMARK_)){
if(cljs.core.truth_(error)){
} else {
replete.priv_repl.process_1_2_3.call(null,expression_form,value);

if(replete.priv_repl.def_form_QMARK_.call(null,expression_form)){
var map__18773_18786 = cljs.core.meta.call(null,value);
var map__18773_18787__$1 = (((((!((map__18773_18786 == null))))?(((((map__18773_18786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18773_18786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18773_18786):map__18773_18786);
var ns_18788__$1 = cljs.core.get.call(null,map__18773_18787__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name_18789 = cljs.core.get.call(null,map__18773_18787__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,replete.priv_repl.st,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_18788__$1,new cljs.core.Keyword(null,"defs","defs",1398449717),name_18789,new cljs.core.Keyword("replete.prepl","repl-entered-source","replete.prepl/repl-entered-source",-952644682)], null),source);
} else {
}

cljs.core.reset_BANG_.call(null,replete.priv_repl.current_ns,ns);

var out_str_18790 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18775_18792 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18776_18793 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18777_18794 = true;
var _STAR_print_fn_STAR__temp_val__18778_18795 = ((function (_STAR_print_newline_STAR__orig_val__18775_18792,_STAR_print_fn_STAR__orig_val__18776_18793,_STAR_print_newline_STAR__temp_val__18777_18794,sb__4661__auto__,map__18771,map__18771__$1,ns,value,error,_STAR_print_newline_STAR__orig_val__18764_18780,_STAR_print_fn_STAR__orig_val__18765_18781,_STAR_print_err_fn_STAR__orig_val__18766_18782,_STAR_print_newline_STAR__temp_val__18767_18783,_STAR_print_fn_STAR__temp_val__18768_18784,_STAR_print_err_fn_STAR__temp_val__18769_18785,eval_result,prepl_print_fn,expression_form,_STAR_cljs_warning_handlers_STAR__orig_val__18748,_STAR_cljs_ns_STAR__orig_val__18749,_STAR_compiler_STAR__orig_val__18750,_STAR_ns_STAR__orig_val__18751,_STAR_data_readers_STAR__orig_val__18752,resolve_symbol_orig_val__18753,_STAR_alias_map_STAR__orig_val__18754,_STAR_cljs_warning_handlers_STAR__temp_val__18755,_STAR_cljs_ns_STAR__temp_val__18756,_STAR_compiler_STAR__temp_val__18757,_STAR_ns_STAR__temp_val__18758,_STAR_data_readers_STAR__temp_val__18759,resolve_symbol_temp_val__18760,_STAR_alias_map_STAR__temp_val__18761,result){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__18775_18792,_STAR_print_fn_STAR__orig_val__18776_18793,_STAR_print_newline_STAR__temp_val__18777_18794,sb__4661__auto__,map__18771,map__18771__$1,ns,value,error,_STAR_print_newline_STAR__orig_val__18764_18780,_STAR_print_fn_STAR__orig_val__18765_18781,_STAR_print_err_fn_STAR__orig_val__18766_18782,_STAR_print_newline_STAR__temp_val__18767_18783,_STAR_print_fn_STAR__temp_val__18768_18784,_STAR_print_err_fn_STAR__temp_val__18769_18785,eval_result,prepl_print_fn,expression_form,_STAR_cljs_warning_handlers_STAR__orig_val__18748,_STAR_cljs_ns_STAR__orig_val__18749,_STAR_compiler_STAR__orig_val__18750,_STAR_ns_STAR__orig_val__18751,_STAR_data_readers_STAR__orig_val__18752,resolve_symbol_orig_val__18753,_STAR_alias_map_STAR__orig_val__18754,_STAR_cljs_warning_handlers_STAR__temp_val__18755,_STAR_cljs_ns_STAR__temp_val__18756,_STAR_compiler_STAR__temp_val__18757,_STAR_ns_STAR__temp_val__18758,_STAR_data_readers_STAR__temp_val__18759,resolve_symbol_temp_val__18760,_STAR_alias_map_STAR__temp_val__18761,result))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18777_18794;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18778_18795;

try{replete.pprint.pprint.call(null,value,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replete.priv_repl.app_env));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (35);
}
})(),new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"theme","theme",-1247880880),"plain"], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18776_18793;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18775_18792;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
var out_str_18791__$1 = cljs.core.subs.call(null,out_str_18790,(0),(cljs.core.count.call(null,out_str_18790) - (1)));
cljs.core.swap_BANG_.call(null,eval_result,cljs.core.conj,cljs.core.assoc.call(null,result,new cljs.core.Keyword(null,"val","val",128701612),out_str_18791__$1));
}
} else {
}

if(cljs.core.truth_(error)){
cljs.core._STAR_e = error;

return cljs.core.swap_BANG_.call(null,eval_result,cljs.core.conj,cljs.core.merge.call(null,result,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"execution","execution",253283524),new cljs.core.Keyword(null,"val","val",128701612),replete.prepl.string_error.call(null,error)], null)));
} else {
return null;
}
});})(_STAR_print_newline_STAR__orig_val__18764_18780,_STAR_print_fn_STAR__orig_val__18765_18781,_STAR_print_err_fn_STAR__orig_val__18766_18782,_STAR_print_newline_STAR__temp_val__18767_18783,_STAR_print_fn_STAR__temp_val__18768_18784,_STAR_print_err_fn_STAR__temp_val__18769_18785,eval_result,prepl_print_fn,expression_form,_STAR_cljs_warning_handlers_STAR__orig_val__18748,_STAR_cljs_ns_STAR__orig_val__18749,_STAR_compiler_STAR__orig_val__18750,_STAR_ns_STAR__orig_val__18751,_STAR_data_readers_STAR__orig_val__18752,resolve_symbol_orig_val__18753,_STAR_alias_map_STAR__orig_val__18754,_STAR_cljs_warning_handlers_STAR__temp_val__18755,_STAR_cljs_ns_STAR__temp_val__18756,_STAR_compiler_STAR__temp_val__18757,_STAR_ns_STAR__temp_val__18758,_STAR_data_readers_STAR__temp_val__18759,resolve_symbol_temp_val__18760,_STAR_alias_map_STAR__temp_val__18761,result))
);
}finally {cljs.core._STAR_print_err_fn_STAR_ = _STAR_print_err_fn_STAR__orig_val__18766_18782;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18765_18781;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18764_18780;
}
return cljs.core.deref.call(null,eval_result);
}
}catch (e18762){var e = e18762;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,result,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"read-source","read-source",1962118796),new cljs.core.Keyword(null,"val","val",128701612),replete.prepl.string_error.call(null,e)], null))], null);
}}finally {cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__18754;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__18753;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__18752;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__18751;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__18750;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__18749;

cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__orig_val__18748;
}});

replete.prepl.read_eval.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=prepl.js.map
