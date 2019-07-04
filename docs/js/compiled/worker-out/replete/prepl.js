// Compiled by ClojureScript 1.10.520 {}
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
<<<<<<< HEAD:docs/js/compiled/worker-out/replete/prepl.js
replete.prepl.skip_load_QMARK_ = (function replete$prepl$skip_load_QMARK_(p__1842){
var map__1843 = p__1842;
var map__1843__$1 = (((((!((map__1843 == null))))?(((((map__1843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1843):map__1843);
var name = cljs.core.get.call(null,map__1843__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__1843__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
=======
replete.prepl.skip_load_QMARK_ = (function replete$prepl$skip_load_QMARK_(p__1879){
var map__1880 = p__1879;
var map__1880__$1 = (((((!((map__1880 == null))))?(((((map__1880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1880):map__1880);
var name = cljs.core.get.call(null,map__1880__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__1880__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
>>>>>>> :simple optimizations:docs/js/compiled/out/replete/prepl.js
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
<<<<<<< HEAD:docs/js/compiled/worker-out/replete/prepl.js
replete.prepl.hack_macros = (function replete$prepl$hack_macros(p__1845){
var map__1846 = p__1845;
var map__1846__$1 = (((((!((map__1846 == null))))?(((((map__1846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1846):map__1846);
var full = map__1846__$1;
var name = cljs.core.get.call(null,map__1846__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__1846__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
=======
replete.prepl.hack_macros = (function replete$prepl$hack_macros(p__1882){
var map__1883 = p__1882;
var map__1883__$1 = (((((!((map__1883 == null))))?(((((map__1883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1883):map__1883);
var full = map__1883__$1;
var name = cljs.core.get.call(null,map__1883__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__1883__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
>>>>>>> :simple optimizations:docs/js/compiled/out/replete/prepl.js
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
<<<<<<< HEAD:docs/js/compiled/worker-out/replete/prepl.js
replete.prepl.load = (function replete$prepl$load(p__1848,cb){
var map__1849 = p__1848;
var map__1849__$1 = (((((!((map__1849 == null))))?(((((map__1849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1849):map__1849);
var full = map__1849__$1;
var name = cljs.core.get.call(null,map__1849__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__1849__$1,new cljs.core.Keyword(null,"path","path",-188191168));
=======
replete.prepl.load = (function replete$prepl$load(p__1885,cb){
var map__1886 = p__1885;
var map__1886__$1 = (((((!((map__1886 == null))))?(((((map__1886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1886):map__1886);
var full = map__1886__$1;
var name = cljs.core.get.call(null,map__1886__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__1886__$1,new cljs.core.Keyword(null,"path","path",-188191168));
>>>>>>> :simple optimizations:docs/js/compiled/out/replete/prepl.js
if(cljs.core.truth_(replete.prepl.skip_load_QMARK_.call(null,full))){
return cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
if(cljs.core.truth_(cljs.core.re_matches.call(null,/^goog\/.*/,path))){
return replete.priv_repl.do_load_goog.call(null,name,cb);
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/replete/prepl.js
var G__1852 = replete.prepl.hack_macros.call(null,full);
var map__1853 = G__1852;
var map__1853__$1 = (((((!((map__1853 == null))))?(((((map__1853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1853):map__1853);
var name__$1 = cljs.core.get.call(null,map__1853__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__1853__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var path__$1 = cljs.core.get.call(null,map__1853__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var extensions = cljs.core.get.call(null,map__1853__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var G__1852__$1 = G__1852;
while(true){
var map__1857 = G__1852__$1;
var map__1857__$1 = (((((!((map__1857 == null))))?(((((map__1857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1857):map__1857);
var name__$2 = cljs.core.get.call(null,map__1857__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros__$1 = cljs.core.get.call(null,map__1857__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var path__$2 = cljs.core.get.call(null,map__1857__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var extensions__$1 = cljs.core.get.call(null,map__1857__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
=======
var G__1889 = replete.prepl.hack_macros.call(null,full);
var map__1890 = G__1889;
var map__1890__$1 = (((((!((map__1890 == null))))?(((((map__1890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890):map__1890);
var name__$1 = cljs.core.get.call(null,map__1890__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__1890__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var path__$1 = cljs.core.get.call(null,map__1890__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var extensions = cljs.core.get.call(null,map__1890__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var G__1889__$1 = G__1889;
while(true){
var map__1894 = G__1889__$1;
var map__1894__$1 = (((((!((map__1894 == null))))?(((((map__1894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1894):map__1894);
var name__$2 = cljs.core.get.call(null,map__1894__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros__$1 = cljs.core.get.call(null,map__1894__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var path__$2 = cljs.core.get.call(null,map__1894__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var extensions__$1 = cljs.core.get.call(null,map__1894__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
>>>>>>> :simple optimizations:docs/js/compiled/out/replete/prepl.js
if(cljs.core.truth_(extensions__$1)){
if(cljs.core.truth_(replete.priv_repl.load_and_callback_BANG_.call(null,name__$2,path__$2,cljs.core.first.call(null,extensions__$1),macros__$1,cb))){
return null;
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/replete/prepl.js
var G__1859 = cljs.core.next.call(null,extensions__$1);
G__1852__$1 = G__1859;
=======
var G__1896 = cljs.core.next.call(null,extensions__$1);
G__1889__$1 = G__1896;
>>>>>>> :simple optimizations:docs/js/compiled/out/replete/prepl.js
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
<<<<<<< HEAD:docs/js/compiled/worker-out/replete/prepl.js
return (function (p__1860){
var map__1861 = p__1860;
var map__1861__$1 = (((((!((map__1861 == null))))?(((((map__1861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1861):map__1861);
var e = cljs.core.get.call(null,map__1861__$1,new cljs.core.Keyword(null,"error","error",-978969032));
=======
return (function (p__1897){
var map__1898 = p__1897;
var map__1898__$1 = (((((!((map__1898 == null))))?(((((map__1898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1898):map__1898);
var e = cljs.core.get.call(null,map__1898__$1,new cljs.core.Keyword(null,"error","error",-978969032));
>>>>>>> :simple optimizations:docs/js/compiled/out/replete/prepl.js
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
<<<<<<< HEAD:docs/js/compiled/worker-out/replete/prepl.js
return (function replete$prepl$string_find_doc_STAR__$_iter__1863(s__1864){
return (new cljs.core.LazySeq(null,((function (re,sym_docs){
return (function (){
var s__1864__$1 = s__1864;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__1864__$1);
if(temp__5720__auto__){
var s__1864__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1864__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__1864__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__1866 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__1865 = (0);
while(true){
if((i__1865 < size__4522__auto__)){
var vec__1867 = cljs.core._nth.call(null,c__4521__auto__,i__1865);
var sym = cljs.core.nth.call(null,vec__1867,(0),null);
var doc = cljs.core.nth.call(null,vec__1867,(1),null);
=======
return (function replete$prepl$string_find_doc_STAR__$_iter__1900(s__1901){
return (new cljs.core.LazySeq(null,((function (re,sym_docs){
return (function (){
var s__1901__$1 = s__1901;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__1901__$1);
if(temp__5720__auto__){
var s__1901__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1901__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__1901__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__1903 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__1902 = (0);
while(true){
if((i__1902 < size__4522__auto__)){
var vec__1904 = cljs.core._nth.call(null,c__4521__auto__,i__1902);
var sym = cljs.core.nth.call(null,vec__1904,(0),null);
var doc = cljs.core.nth.call(null,vec__1904,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/replete/prepl.js
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
<<<<<<< HEAD:docs/js/compiled/worker-out/replete/prepl.js
cljs.core.chunk_append.call(null,b__1866,replete.priv_repl.doc_STAR_.call(null,sym,replete.priv_repl.string_doc));

var G__1873 = (i__1865 + (1));
i__1865 = G__1873;
continue;
} else {
var G__1874 = (i__1865 + (1));
i__1865 = G__1874;
=======
cljs.core.chunk_append.call(null,b__1903,replete.priv_repl.doc_STAR_.call(null,sym,replete.priv_repl.string_doc));

var G__1910 = (i__1902 + (1));
i__1902 = G__1910;
continue;
} else {
var G__1911 = (i__1902 + (1));
i__1902 = G__1911;
>>>>>>> :simple optimizations:docs/js/compiled/out/replete/prepl.js
continue;
}
} else {
return true;
}
break;
}
})()){
<<<<<<< HEAD:docs/js/compiled/worker-out/replete/prepl.js
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1866),replete$prepl$string_find_doc_STAR__$_iter__1863.call(null,cljs.core.chunk_rest.call(null,s__1864__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1866),null);
}
} else {
var vec__1870 = cljs.core.first.call(null,s__1864__$2);
var sym = cljs.core.nth.call(null,vec__1870,(0),null);
var doc = cljs.core.nth.call(null,vec__1870,(1),null);
=======
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1903),replete$prepl$string_find_doc_STAR__$_iter__1900.call(null,cljs.core.chunk_rest.call(null,s__1901__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1903),null);
}
} else {
var vec__1907 = cljs.core.first.call(null,s__1901__$2);
var sym = cljs.core.nth.call(null,vec__1907,(0),null);
var doc = cljs.core.nth.call(null,vec__1907,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/replete/prepl.js
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
<<<<<<< HEAD:docs/js/compiled/worker-out/replete/prepl.js
return cljs.core.cons.call(null,replete.priv_repl.doc_STAR_.call(null,sym,replete.priv_repl.string_doc),replete$prepl$string_find_doc_STAR__$_iter__1863.call(null,cljs.core.rest.call(null,s__1864__$2)));
} else {
var G__1875 = cljs.core.rest.call(null,s__1864__$2);
s__1864__$1 = G__1875;
=======
return cljs.core.cons.call(null,replete.priv_repl.doc_STAR_.call(null,sym,replete.priv_repl.string_doc),replete$prepl$string_find_doc_STAR__$_iter__1900.call(null,cljs.core.rest.call(null,s__1901__$2)));
} else {
var G__1912 = cljs.core.rest.call(null,s__1901__$2);
s__1901__$1 = G__1912;
>>>>>>> :simple optimizations:docs/js/compiled/out/replete/prepl.js
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
<<<<<<< HEAD:docs/js/compiled/worker-out/replete/prepl.js
var G__1877 = arguments.length;
switch (G__1877) {
=======
var G__1914 = arguments.length;
switch (G__1914) {
>>>>>>> :simple optimizations:docs/js/compiled/out/replete/prepl.js
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
<<<<<<< HEAD:docs/js/compiled/worker-out/replete/prepl.js
var error__$1 = (function (){var G__1878 = error;
if(cljs.core.contains_QMARK_.call(null,cljs.core.ex_data.call(null,cljs.core.ex_cause.call(null,error)),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358))){
return cljs.core.ex_cause.call(null,G__1878);
} else {
return G__1878;
=======
var error__$1 = (function (){var G__1915 = error;
if(cljs.core.contains_QMARK_.call(null,cljs.core.ex_data.call(null,cljs.core.ex_cause.call(null,error)),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358))){
return cljs.core.ex_cause.call(null,G__1915);
} else {
return G__1915;
>>>>>>> :simple optimizations:docs/js/compiled/out/replete/prepl.js
}
})();
return cljs.repl.error__GT_str.call(null,error__$1);
}
});

replete.prepl.string_error.cljs$lang$maxFixedArity = 2;

replete.prepl.string_pst_STAR_ = (function replete$prepl$string_pst_STAR_(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/replete/prepl.js
var G__1881 = arguments.length;
switch (G__1881) {
=======
var G__1918 = arguments.length;
switch (G__1918) {
>>>>>>> :simple optimizations:docs/js/compiled/out/replete/prepl.js
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
<<<<<<< HEAD:docs/js/compiled/worker-out/replete/prepl.js
try{return cljs.js.eval.call(null,replete.priv_repl.st,expr,replete.priv_repl.make_base_eval_opts.call(null),(function (p__1883){
var map__1884 = p__1883;
var map__1884__$1 = (((((!((map__1884 == null))))?(((((map__1884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1884):map__1884);
var value = cljs.core.get.call(null,map__1884__$1,new cljs.core.Keyword(null,"value","value",305978217));
=======
try{return cljs.js.eval.call(null,replete.priv_repl.st,expr,replete.priv_repl.make_base_eval_opts.call(null),(function (p__1920){
var map__1921 = p__1920;
var map__1921__$1 = (((((!((map__1921 == null))))?(((((map__1921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1921):map__1921);
var value = cljs.core.get.call(null,map__1921__$1,new cljs.core.Keyword(null,"value","value",305978217));
>>>>>>> :simple optimizations:docs/js/compiled/out/replete/prepl.js
if(cljs.core.truth_(value)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword(null,"val","val",128701612),replete.prepl.string_error.call(null,value,true)], null);
} else {
return null;
}
}));
<<<<<<< HEAD:docs/js/compiled/worker-out/replete/prepl.js
}catch (e1882){if((e1882 instanceof Error)){
var e = e1882;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"execution","execution",253283524),new cljs.core.Keyword(null,"val","val",128701612),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"caught","caught",443476795)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')], null);
} else {
throw e1882;
=======
}catch (e1919){if((e1919 instanceof Error)){
var e = e1919;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"execution","execution",253283524),new cljs.core.Keyword(null,"val","val",128701612),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"caught","caught",443476795)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')], null);
} else {
throw e1919;
>>>>>>> :simple optimizations:docs/js/compiled/out/replete/prepl.js

}
}});

replete.prepl.string_pst_STAR_.cljs$lang$maxFixedArity = 1;

replete.prepl.read_eval = (function replete$prepl$read_eval(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/replete/prepl.js
var G__1888 = arguments.length;
switch (G__1888) {
=======
var G__1925 = arguments.length;
switch (G__1925) {
>>>>>>> :simple optimizations:docs/js/compiled/out/replete/prepl.js
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
<<<<<<< HEAD:docs/js/compiled/worker-out/replete/prepl.js
var _STAR_cljs_warning_handlers_STAR__orig_val__1889 = cljs.analyzer._STAR_cljs_warning_handlers_STAR_;
var _STAR_cljs_ns_STAR__orig_val__1890 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__1891 = cljs.env._STAR_compiler_STAR_;
var _STAR_ns_STAR__orig_val__1892 = cljs.core._STAR_ns_STAR_;
var _STAR_data_readers_STAR__orig_val__1893 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__1894 = cljs.tools.reader.resolve_symbol;
var _STAR_alias_map_STAR__orig_val__1895 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_cljs_warning_handlers_STAR__temp_val__1896 = (cljs.core.truth_(expression_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [replete.priv_repl.warning_handler], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.default_warning_handler], null));
var _STAR_cljs_ns_STAR__temp_val__1897 = cljs.core.deref.call(null,replete.priv_repl.current_ns);
var _STAR_compiler_STAR__temp_val__1898 = replete.priv_repl.st;
var _STAR_ns_STAR__temp_val__1899 = cljs.core.create_ns.call(null,cljs.core.deref.call(null,replete.priv_repl.current_ns));
var _STAR_data_readers_STAR__temp_val__1900 = cljs.tagged_literals._STAR_cljs_data_readers_STAR_;
var resolve_symbol_temp_val__1901 = cljs.analyzer.resolve_symbol;
var _STAR_alias_map_STAR__temp_val__1902 = replete.priv_repl.current_alias_map.call(null);
cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__temp_val__1896;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__1897;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__1898;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__1899;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__1900;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__1901;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__1902;
=======
var _STAR_cljs_warning_handlers_STAR__orig_val__1926 = cljs.analyzer._STAR_cljs_warning_handlers_STAR_;
var _STAR_cljs_ns_STAR__orig_val__1927 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__1928 = cljs.env._STAR_compiler_STAR_;
var _STAR_ns_STAR__orig_val__1929 = cljs.core._STAR_ns_STAR_;
var _STAR_data_readers_STAR__orig_val__1930 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__1931 = cljs.tools.reader.resolve_symbol;
var _STAR_alias_map_STAR__orig_val__1932 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_cljs_warning_handlers_STAR__temp_val__1933 = (cljs.core.truth_(expression_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [replete.priv_repl.warning_handler], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.default_warning_handler], null));
var _STAR_cljs_ns_STAR__temp_val__1934 = cljs.core.deref.call(null,replete.priv_repl.current_ns);
var _STAR_compiler_STAR__temp_val__1935 = replete.priv_repl.st;
var _STAR_ns_STAR__temp_val__1936 = cljs.core.create_ns.call(null,cljs.core.deref.call(null,replete.priv_repl.current_ns));
var _STAR_data_readers_STAR__temp_val__1937 = cljs.tagged_literals._STAR_cljs_data_readers_STAR_;
var resolve_symbol_temp_val__1938 = cljs.analyzer.resolve_symbol;
var _STAR_alias_map_STAR__temp_val__1939 = replete.priv_repl.current_alias_map.call(null);
cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__temp_val__1933;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__1934;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__1935;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__1936;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__1937;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__1938;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__1939;
>>>>>>> :simple optimizations:docs/js/compiled/out/replete/prepl.js

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
<<<<<<< HEAD:docs/js/compiled/worker-out/replete/prepl.js
var G__1904 = special_form;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__1904)){
return cljs.core.merge.call(null,result__$1,replete.prepl.process_in_ns.call(null,argument));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"dir","dir",-919681108,null),G__1904)){
return cljs.core.merge.call(null,result__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),replete.priv_repl.string_dir.call(null,argument)], null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"apropos","apropos",-1511857537,null),G__1904)){
=======
var G__1941 = special_form;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__1941)){
return cljs.core.merge.call(null,result__$1,replete.prepl.process_in_ns.call(null,argument));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"dir","dir",-919681108,null),G__1941)){
return cljs.core.merge.call(null,result__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),replete.priv_repl.string_dir.call(null,argument)], null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"apropos","apropos",-1511857537,null),G__1941)){
>>>>>>> :simple optimizations:docs/js/compiled/out/replete/prepl.js
var value = replete.priv_repl.apropos_STAR_.call(null,argument);
replete.priv_repl.process_1_2_3.call(null,expression_form,value);

return cljs.core.merge.call(null,result__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),value], null));
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/replete/prepl.js
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"doc","doc",-741138878,null),G__1904)){
return cljs.core.merge.call(null,result__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),replete.priv_repl.doc_STAR_.call(null,argument,replete.priv_repl.string_doc)], null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"find-doc","find-doc",-1096800949,null),G__1904)){
return cljs.core.merge.call(null,result__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),replete.priv_repl.string_find_doc.call(null,argument)], null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"source","source",1206599988,null),G__1904)){
return cljs.core.merge.call(null,result__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),replete.priv_repl.string_source.call(null,argument)], null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"pst","pst",-1996688947,null),G__1904)){
return cljs.core.merge.call(null,result__$1,(cljs.core.truth_(argument)?replete.prepl.string_pst_STAR_.call(null,argument):replete.prepl.string_pst_STAR_.call(null)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1904)].join('')));
=======
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"doc","doc",-741138878,null),G__1941)){
return cljs.core.merge.call(null,result__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),replete.priv_repl.doc_STAR_.call(null,argument,replete.priv_repl.string_doc)], null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"find-doc","find-doc",-1096800949,null),G__1941)){
return cljs.core.merge.call(null,result__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),replete.priv_repl.string_find_doc.call(null,argument)], null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"source","source",1206599988,null),G__1941)){
return cljs.core.merge.call(null,result__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),replete.priv_repl.string_source.call(null,argument)], null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"pst","pst",-1996688947,null),G__1941)){
return cljs.core.merge.call(null,result__$1,(cljs.core.truth_(argument)?replete.prepl.string_pst_STAR_.call(null,argument):replete.prepl.string_pst_STAR_.call(null)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1941)].join('')));
>>>>>>> :simple optimizations:docs/js/compiled/out/replete/prepl.js

}
}
}
}
}
}
}
} else {
var eval_result = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
<<<<<<< HEAD:docs/js/compiled/worker-out/replete/prepl.js
var prepl_print_fn = ((function (eval_result,expression_form,_STAR_cljs_warning_handlers_STAR__orig_val__1889,_STAR_cljs_ns_STAR__orig_val__1890,_STAR_compiler_STAR__orig_val__1891,_STAR_ns_STAR__orig_val__1892,_STAR_data_readers_STAR__orig_val__1893,resolve_symbol_orig_val__1894,_STAR_alias_map_STAR__orig_val__1895,_STAR_cljs_warning_handlers_STAR__temp_val__1896,_STAR_cljs_ns_STAR__temp_val__1897,_STAR_compiler_STAR__temp_val__1898,_STAR_ns_STAR__temp_val__1899,_STAR_data_readers_STAR__temp_val__1900,resolve_symbol_temp_val__1901,_STAR_alias_map_STAR__temp_val__1902,result){
return (function (x){
return cljs.core.swap_BANG_.call(null,eval_result,cljs.core.conj,cljs.core.assoc.call(null,result,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"val","val",128701612),x));
});})(eval_result,expression_form,_STAR_cljs_warning_handlers_STAR__orig_val__1889,_STAR_cljs_ns_STAR__orig_val__1890,_STAR_compiler_STAR__orig_val__1891,_STAR_ns_STAR__orig_val__1892,_STAR_data_readers_STAR__orig_val__1893,resolve_symbol_orig_val__1894,_STAR_alias_map_STAR__orig_val__1895,_STAR_cljs_warning_handlers_STAR__temp_val__1896,_STAR_cljs_ns_STAR__temp_val__1897,_STAR_compiler_STAR__temp_val__1898,_STAR_ns_STAR__temp_val__1899,_STAR_data_readers_STAR__temp_val__1900,resolve_symbol_temp_val__1901,_STAR_alias_map_STAR__temp_val__1902,result))
;
var _STAR_print_newline_STAR__orig_val__1905_1921 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1906_1922 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_err_fn_STAR__orig_val__1907_1923 = cljs.core._STAR_print_err_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1908_1924 = true;
var _STAR_print_fn_STAR__temp_val__1909_1925 = prepl_print_fn;
var _STAR_print_err_fn_STAR__temp_val__1910_1926 = prepl_print_fn;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1908_1924;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1909_1925;

cljs.core._STAR_print_err_fn_STAR_ = _STAR_print_err_fn_STAR__temp_val__1910_1926;

try{cljs.js.eval_str.call(null,replete.priv_repl.st,source,(cljs.core.truth_(expression_QMARK_)?source:"File"),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,replete.priv_repl.current_ns),new cljs.core.Keyword(null,"load","load",-1318641184),replete.prepl.load,new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"source-map","source-map",1706252311),false,new cljs.core.Keyword(null,"verbose","verbose",1694226060),new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replete.priv_repl.app_env))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replete.priv_repl.app_env)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445),new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replete.priv_repl.app_env))], null):null),(cljs.core.truth_(expression_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true], null):null)),((function (_STAR_print_newline_STAR__orig_val__1905_1921,_STAR_print_fn_STAR__orig_val__1906_1922,_STAR_print_err_fn_STAR__orig_val__1907_1923,_STAR_print_newline_STAR__temp_val__1908_1924,_STAR_print_fn_STAR__temp_val__1909_1925,_STAR_print_err_fn_STAR__temp_val__1910_1926,eval_result,prepl_print_fn,expression_form,_STAR_cljs_warning_handlers_STAR__orig_val__1889,_STAR_cljs_ns_STAR__orig_val__1890,_STAR_compiler_STAR__orig_val__1891,_STAR_ns_STAR__orig_val__1892,_STAR_data_readers_STAR__orig_val__1893,resolve_symbol_orig_val__1894,_STAR_alias_map_STAR__orig_val__1895,_STAR_cljs_warning_handlers_STAR__temp_val__1896,_STAR_cljs_ns_STAR__temp_val__1897,_STAR_compiler_STAR__temp_val__1898,_STAR_ns_STAR__temp_val__1899,_STAR_data_readers_STAR__temp_val__1900,resolve_symbol_temp_val__1901,_STAR_alias_map_STAR__temp_val__1902,result){
return (function (p__1911){
var map__1912 = p__1911;
var map__1912__$1 = (((((!((map__1912 == null))))?(((((map__1912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1912):map__1912);
var ns = cljs.core.get.call(null,map__1912__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var value = cljs.core.get.call(null,map__1912__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__1912__$1,new cljs.core.Keyword(null,"error","error",-978969032));
=======
var prepl_print_fn = ((function (eval_result,expression_form,_STAR_cljs_warning_handlers_STAR__orig_val__1926,_STAR_cljs_ns_STAR__orig_val__1927,_STAR_compiler_STAR__orig_val__1928,_STAR_ns_STAR__orig_val__1929,_STAR_data_readers_STAR__orig_val__1930,resolve_symbol_orig_val__1931,_STAR_alias_map_STAR__orig_val__1932,_STAR_cljs_warning_handlers_STAR__temp_val__1933,_STAR_cljs_ns_STAR__temp_val__1934,_STAR_compiler_STAR__temp_val__1935,_STAR_ns_STAR__temp_val__1936,_STAR_data_readers_STAR__temp_val__1937,resolve_symbol_temp_val__1938,_STAR_alias_map_STAR__temp_val__1939,result){
return (function (x){
return cljs.core.swap_BANG_.call(null,eval_result,cljs.core.conj,cljs.core.assoc.call(null,result,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"val","val",128701612),x));
});})(eval_result,expression_form,_STAR_cljs_warning_handlers_STAR__orig_val__1926,_STAR_cljs_ns_STAR__orig_val__1927,_STAR_compiler_STAR__orig_val__1928,_STAR_ns_STAR__orig_val__1929,_STAR_data_readers_STAR__orig_val__1930,resolve_symbol_orig_val__1931,_STAR_alias_map_STAR__orig_val__1932,_STAR_cljs_warning_handlers_STAR__temp_val__1933,_STAR_cljs_ns_STAR__temp_val__1934,_STAR_compiler_STAR__temp_val__1935,_STAR_ns_STAR__temp_val__1936,_STAR_data_readers_STAR__temp_val__1937,resolve_symbol_temp_val__1938,_STAR_alias_map_STAR__temp_val__1939,result))
;
var _STAR_print_newline_STAR__orig_val__1942_1958 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1943_1959 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_err_fn_STAR__orig_val__1944_1960 = cljs.core._STAR_print_err_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1945_1961 = true;
var _STAR_print_fn_STAR__temp_val__1946_1962 = prepl_print_fn;
var _STAR_print_err_fn_STAR__temp_val__1947_1963 = prepl_print_fn;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1945_1961;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1946_1962;

cljs.core._STAR_print_err_fn_STAR_ = _STAR_print_err_fn_STAR__temp_val__1947_1963;

try{cljs.js.eval_str.call(null,replete.priv_repl.st,source,(cljs.core.truth_(expression_QMARK_)?source:"File"),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,replete.priv_repl.current_ns),new cljs.core.Keyword(null,"load","load",-1318641184),replete.prepl.load,new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"source-map","source-map",1706252311),false,new cljs.core.Keyword(null,"verbose","verbose",1694226060),new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replete.priv_repl.app_env))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replete.priv_repl.app_env)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445),new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replete.priv_repl.app_env))], null):null),(cljs.core.truth_(expression_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true], null):null)),((function (_STAR_print_newline_STAR__orig_val__1942_1958,_STAR_print_fn_STAR__orig_val__1943_1959,_STAR_print_err_fn_STAR__orig_val__1944_1960,_STAR_print_newline_STAR__temp_val__1945_1961,_STAR_print_fn_STAR__temp_val__1946_1962,_STAR_print_err_fn_STAR__temp_val__1947_1963,eval_result,prepl_print_fn,expression_form,_STAR_cljs_warning_handlers_STAR__orig_val__1926,_STAR_cljs_ns_STAR__orig_val__1927,_STAR_compiler_STAR__orig_val__1928,_STAR_ns_STAR__orig_val__1929,_STAR_data_readers_STAR__orig_val__1930,resolve_symbol_orig_val__1931,_STAR_alias_map_STAR__orig_val__1932,_STAR_cljs_warning_handlers_STAR__temp_val__1933,_STAR_cljs_ns_STAR__temp_val__1934,_STAR_compiler_STAR__temp_val__1935,_STAR_ns_STAR__temp_val__1936,_STAR_data_readers_STAR__temp_val__1937,resolve_symbol_temp_val__1938,_STAR_alias_map_STAR__temp_val__1939,result){
return (function (p__1948){
var map__1949 = p__1948;
var map__1949__$1 = (((((!((map__1949 == null))))?(((((map__1949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1949):map__1949);
var ns = cljs.core.get.call(null,map__1949__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var value = cljs.core.get.call(null,map__1949__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__1949__$1,new cljs.core.Keyword(null,"error","error",-978969032));
>>>>>>> :simple optimizations:docs/js/compiled/out/replete/prepl.js
if(cljs.core.truth_(expression_QMARK_)){
if(cljs.core.truth_(error)){
} else {
replete.priv_repl.process_1_2_3.call(null,expression_form,value);

if(replete.priv_repl.def_form_QMARK_.call(null,expression_form)){
<<<<<<< HEAD:docs/js/compiled/worker-out/replete/prepl.js
var map__1914_1927 = cljs.core.meta.call(null,value);
var map__1914_1928__$1 = (((((!((map__1914_1927 == null))))?(((((map__1914_1927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1914_1927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1914_1927):map__1914_1927);
var ns_1929__$1 = cljs.core.get.call(null,map__1914_1928__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name_1930 = cljs.core.get.call(null,map__1914_1928__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,replete.priv_repl.st,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_1929__$1,new cljs.core.Keyword(null,"defs","defs",1398449717),name_1930,new cljs.core.Keyword("replete.prepl","repl-entered-source","replete.prepl/repl-entered-source",-952644682)], null),source);
=======
var map__1951_1964 = cljs.core.meta.call(null,value);
var map__1951_1965__$1 = (((((!((map__1951_1964 == null))))?(((((map__1951_1964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1951_1964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1951_1964):map__1951_1964);
var ns_1966__$1 = cljs.core.get.call(null,map__1951_1965__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name_1967 = cljs.core.get.call(null,map__1951_1965__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,replete.priv_repl.st,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_1966__$1,new cljs.core.Keyword(null,"defs","defs",1398449717),name_1967,new cljs.core.Keyword("replete.prepl","repl-entered-source","replete.prepl/repl-entered-source",-952644682)], null),source);
>>>>>>> :simple optimizations:docs/js/compiled/out/replete/prepl.js
} else {
}

cljs.core.reset_BANG_.call(null,replete.priv_repl.current_ns,ns);

<<<<<<< HEAD:docs/js/compiled/worker-out/replete/prepl.js
var out_str_1931 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1916_1933 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1917_1934 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1918_1935 = true;
var _STAR_print_fn_STAR__temp_val__1919_1936 = ((function (_STAR_print_newline_STAR__orig_val__1916_1933,_STAR_print_fn_STAR__orig_val__1917_1934,_STAR_print_newline_STAR__temp_val__1918_1935,sb__4661__auto__,map__1912,map__1912__$1,ns,value,error,_STAR_print_newline_STAR__orig_val__1905_1921,_STAR_print_fn_STAR__orig_val__1906_1922,_STAR_print_err_fn_STAR__orig_val__1907_1923,_STAR_print_newline_STAR__temp_val__1908_1924,_STAR_print_fn_STAR__temp_val__1909_1925,_STAR_print_err_fn_STAR__temp_val__1910_1926,eval_result,prepl_print_fn,expression_form,_STAR_cljs_warning_handlers_STAR__orig_val__1889,_STAR_cljs_ns_STAR__orig_val__1890,_STAR_compiler_STAR__orig_val__1891,_STAR_ns_STAR__orig_val__1892,_STAR_data_readers_STAR__orig_val__1893,resolve_symbol_orig_val__1894,_STAR_alias_map_STAR__orig_val__1895,_STAR_cljs_warning_handlers_STAR__temp_val__1896,_STAR_cljs_ns_STAR__temp_val__1897,_STAR_compiler_STAR__temp_val__1898,_STAR_ns_STAR__temp_val__1899,_STAR_data_readers_STAR__temp_val__1900,resolve_symbol_temp_val__1901,_STAR_alias_map_STAR__temp_val__1902,result){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__1916_1933,_STAR_print_fn_STAR__orig_val__1917_1934,_STAR_print_newline_STAR__temp_val__1918_1935,sb__4661__auto__,map__1912,map__1912__$1,ns,value,error,_STAR_print_newline_STAR__orig_val__1905_1921,_STAR_print_fn_STAR__orig_val__1906_1922,_STAR_print_err_fn_STAR__orig_val__1907_1923,_STAR_print_newline_STAR__temp_val__1908_1924,_STAR_print_fn_STAR__temp_val__1909_1925,_STAR_print_err_fn_STAR__temp_val__1910_1926,eval_result,prepl_print_fn,expression_form,_STAR_cljs_warning_handlers_STAR__orig_val__1889,_STAR_cljs_ns_STAR__orig_val__1890,_STAR_compiler_STAR__orig_val__1891,_STAR_ns_STAR__orig_val__1892,_STAR_data_readers_STAR__orig_val__1893,resolve_symbol_orig_val__1894,_STAR_alias_map_STAR__orig_val__1895,_STAR_cljs_warning_handlers_STAR__temp_val__1896,_STAR_cljs_ns_STAR__temp_val__1897,_STAR_compiler_STAR__temp_val__1898,_STAR_ns_STAR__temp_val__1899,_STAR_data_readers_STAR__temp_val__1900,resolve_symbol_temp_val__1901,_STAR_alias_map_STAR__temp_val__1902,result))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1918_1935;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1919_1936;
=======
var out_str_1968 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1953_1970 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1954_1971 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1955_1972 = true;
var _STAR_print_fn_STAR__temp_val__1956_1973 = ((function (_STAR_print_newline_STAR__orig_val__1953_1970,_STAR_print_fn_STAR__orig_val__1954_1971,_STAR_print_newline_STAR__temp_val__1955_1972,sb__4661__auto__,map__1949,map__1949__$1,ns,value,error,_STAR_print_newline_STAR__orig_val__1942_1958,_STAR_print_fn_STAR__orig_val__1943_1959,_STAR_print_err_fn_STAR__orig_val__1944_1960,_STAR_print_newline_STAR__temp_val__1945_1961,_STAR_print_fn_STAR__temp_val__1946_1962,_STAR_print_err_fn_STAR__temp_val__1947_1963,eval_result,prepl_print_fn,expression_form,_STAR_cljs_warning_handlers_STAR__orig_val__1926,_STAR_cljs_ns_STAR__orig_val__1927,_STAR_compiler_STAR__orig_val__1928,_STAR_ns_STAR__orig_val__1929,_STAR_data_readers_STAR__orig_val__1930,resolve_symbol_orig_val__1931,_STAR_alias_map_STAR__orig_val__1932,_STAR_cljs_warning_handlers_STAR__temp_val__1933,_STAR_cljs_ns_STAR__temp_val__1934,_STAR_compiler_STAR__temp_val__1935,_STAR_ns_STAR__temp_val__1936,_STAR_data_readers_STAR__temp_val__1937,resolve_symbol_temp_val__1938,_STAR_alias_map_STAR__temp_val__1939,result){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__1953_1970,_STAR_print_fn_STAR__orig_val__1954_1971,_STAR_print_newline_STAR__temp_val__1955_1972,sb__4661__auto__,map__1949,map__1949__$1,ns,value,error,_STAR_print_newline_STAR__orig_val__1942_1958,_STAR_print_fn_STAR__orig_val__1943_1959,_STAR_print_err_fn_STAR__orig_val__1944_1960,_STAR_print_newline_STAR__temp_val__1945_1961,_STAR_print_fn_STAR__temp_val__1946_1962,_STAR_print_err_fn_STAR__temp_val__1947_1963,eval_result,prepl_print_fn,expression_form,_STAR_cljs_warning_handlers_STAR__orig_val__1926,_STAR_cljs_ns_STAR__orig_val__1927,_STAR_compiler_STAR__orig_val__1928,_STAR_ns_STAR__orig_val__1929,_STAR_data_readers_STAR__orig_val__1930,resolve_symbol_orig_val__1931,_STAR_alias_map_STAR__orig_val__1932,_STAR_cljs_warning_handlers_STAR__temp_val__1933,_STAR_cljs_ns_STAR__temp_val__1934,_STAR_compiler_STAR__temp_val__1935,_STAR_ns_STAR__temp_val__1936,_STAR_data_readers_STAR__temp_val__1937,resolve_symbol_temp_val__1938,_STAR_alias_map_STAR__temp_val__1939,result))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1955_1972;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1956_1973;
>>>>>>> :simple optimizations:docs/js/compiled/out/replete/prepl.js

try{replete.pprint.pprint.call(null,value,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replete.priv_repl.app_env));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (35);
}
})(),new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"theme","theme",-1247880880),"plain"], null));
<<<<<<< HEAD:docs/js/compiled/worker-out/replete/prepl.js
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1917_1934;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1916_1933;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
var out_str_1932__$1 = cljs.core.subs.call(null,out_str_1931,(0),(cljs.core.count.call(null,out_str_1931) - (1)));
cljs.core.swap_BANG_.call(null,eval_result,cljs.core.conj,cljs.core.assoc.call(null,result,new cljs.core.Keyword(null,"val","val",128701612),out_str_1932__$1));
=======
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1954_1971;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1953_1970;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
var out_str_1969__$1 = cljs.core.subs.call(null,out_str_1968,(0),(cljs.core.count.call(null,out_str_1968) - (1)));
cljs.core.swap_BANG_.call(null,eval_result,cljs.core.conj,cljs.core.assoc.call(null,result,new cljs.core.Keyword(null,"val","val",128701612),out_str_1969__$1));
>>>>>>> :simple optimizations:docs/js/compiled/out/replete/prepl.js
}
} else {
}

if(cljs.core.truth_(error)){
cljs.core._STAR_e = error;

return cljs.core.swap_BANG_.call(null,eval_result,cljs.core.conj,cljs.core.merge.call(null,result,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"execution","execution",253283524),new cljs.core.Keyword(null,"val","val",128701612),replete.prepl.string_error.call(null,error)], null)));
} else {
return null;
}
<<<<<<< HEAD:docs/js/compiled/worker-out/replete/prepl.js
});})(_STAR_print_newline_STAR__orig_val__1905_1921,_STAR_print_fn_STAR__orig_val__1906_1922,_STAR_print_err_fn_STAR__orig_val__1907_1923,_STAR_print_newline_STAR__temp_val__1908_1924,_STAR_print_fn_STAR__temp_val__1909_1925,_STAR_print_err_fn_STAR__temp_val__1910_1926,eval_result,prepl_print_fn,expression_form,_STAR_cljs_warning_handlers_STAR__orig_val__1889,_STAR_cljs_ns_STAR__orig_val__1890,_STAR_compiler_STAR__orig_val__1891,_STAR_ns_STAR__orig_val__1892,_STAR_data_readers_STAR__orig_val__1893,resolve_symbol_orig_val__1894,_STAR_alias_map_STAR__orig_val__1895,_STAR_cljs_warning_handlers_STAR__temp_val__1896,_STAR_cljs_ns_STAR__temp_val__1897,_STAR_compiler_STAR__temp_val__1898,_STAR_ns_STAR__temp_val__1899,_STAR_data_readers_STAR__temp_val__1900,resolve_symbol_temp_val__1901,_STAR_alias_map_STAR__temp_val__1902,result))
);
}finally {cljs.core._STAR_print_err_fn_STAR_ = _STAR_print_err_fn_STAR__orig_val__1907_1923;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1906_1922;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1905_1921;
}
return cljs.core.deref.call(null,eval_result);
}
}catch (e1903){var e = e1903;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,result,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"read-source","read-source",1962118796),new cljs.core.Keyword(null,"val","val",128701612),replete.prepl.string_error.call(null,e)], null))], null);
}}finally {cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__1895;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__1894;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__1893;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__1892;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__1891;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__1890;

cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__orig_val__1889;
=======
});})(_STAR_print_newline_STAR__orig_val__1942_1958,_STAR_print_fn_STAR__orig_val__1943_1959,_STAR_print_err_fn_STAR__orig_val__1944_1960,_STAR_print_newline_STAR__temp_val__1945_1961,_STAR_print_fn_STAR__temp_val__1946_1962,_STAR_print_err_fn_STAR__temp_val__1947_1963,eval_result,prepl_print_fn,expression_form,_STAR_cljs_warning_handlers_STAR__orig_val__1926,_STAR_cljs_ns_STAR__orig_val__1927,_STAR_compiler_STAR__orig_val__1928,_STAR_ns_STAR__orig_val__1929,_STAR_data_readers_STAR__orig_val__1930,resolve_symbol_orig_val__1931,_STAR_alias_map_STAR__orig_val__1932,_STAR_cljs_warning_handlers_STAR__temp_val__1933,_STAR_cljs_ns_STAR__temp_val__1934,_STAR_compiler_STAR__temp_val__1935,_STAR_ns_STAR__temp_val__1936,_STAR_data_readers_STAR__temp_val__1937,resolve_symbol_temp_val__1938,_STAR_alias_map_STAR__temp_val__1939,result))
);
}finally {cljs.core._STAR_print_err_fn_STAR_ = _STAR_print_err_fn_STAR__orig_val__1944_1960;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1943_1959;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1942_1958;
}
return cljs.core.deref.call(null,eval_result);
}
}catch (e1940){var e = e1940;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,result,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"read-source","read-source",1962118796),new cljs.core.Keyword(null,"val","val",128701612),replete.prepl.string_error.call(null,e)], null))], null);
}}finally {cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__1932;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__1931;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__1930;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__1929;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__1928;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__1927;

cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__orig_val__1926;
>>>>>>> :simple optimizations:docs/js/compiled/out/replete/prepl.js
}});

replete.prepl.read_eval.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=prepl.js.map
