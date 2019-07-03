// Compiled by ClojureScript 1.10.520 {:target :webworker}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18298){
var map__18299 = p__18298;
var map__18299__$1 = (((((!((map__18299 == null))))?(((((map__18299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18299):map__18299);
var m = map__18299__$1;
var n = cljs.core.get.call(null,map__18299__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__18299__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18301_18333 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18302_18334 = null;
var count__18303_18335 = (0);
var i__18304_18336 = (0);
while(true){
if((i__18304_18336 < count__18303_18335)){
var f_18337 = cljs.core._nth.call(null,chunk__18302_18334,i__18304_18336);
cljs.core.println.call(null,"  ",f_18337);


var G__18338 = seq__18301_18333;
var G__18339 = chunk__18302_18334;
var G__18340 = count__18303_18335;
var G__18341 = (i__18304_18336 + (1));
seq__18301_18333 = G__18338;
chunk__18302_18334 = G__18339;
count__18303_18335 = G__18340;
i__18304_18336 = G__18341;
continue;
} else {
var temp__5720__auto___18342 = cljs.core.seq.call(null,seq__18301_18333);
if(temp__5720__auto___18342){
var seq__18301_18343__$1 = temp__5720__auto___18342;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18301_18343__$1)){
var c__4550__auto___18344 = cljs.core.chunk_first.call(null,seq__18301_18343__$1);
var G__18345 = cljs.core.chunk_rest.call(null,seq__18301_18343__$1);
var G__18346 = c__4550__auto___18344;
var G__18347 = cljs.core.count.call(null,c__4550__auto___18344);
var G__18348 = (0);
seq__18301_18333 = G__18345;
chunk__18302_18334 = G__18346;
count__18303_18335 = G__18347;
i__18304_18336 = G__18348;
continue;
} else {
var f_18349 = cljs.core.first.call(null,seq__18301_18343__$1);
cljs.core.println.call(null,"  ",f_18349);


var G__18350 = cljs.core.next.call(null,seq__18301_18343__$1);
var G__18351 = null;
var G__18352 = (0);
var G__18353 = (0);
seq__18301_18333 = G__18350;
chunk__18302_18334 = G__18351;
count__18303_18335 = G__18352;
i__18304_18336 = G__18353;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18354 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_18354);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_18354)))?cljs.core.second.call(null,arglists_18354):arglists_18354));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18305_18355 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18306_18356 = null;
var count__18307_18357 = (0);
var i__18308_18358 = (0);
while(true){
if((i__18308_18358 < count__18307_18357)){
var vec__18319_18359 = cljs.core._nth.call(null,chunk__18306_18356,i__18308_18358);
var name_18360 = cljs.core.nth.call(null,vec__18319_18359,(0),null);
var map__18322_18361 = cljs.core.nth.call(null,vec__18319_18359,(1),null);
var map__18322_18362__$1 = (((((!((map__18322_18361 == null))))?(((((map__18322_18361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18322_18361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18322_18361):map__18322_18361);
var doc_18363 = cljs.core.get.call(null,map__18322_18362__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18364 = cljs.core.get.call(null,map__18322_18362__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18360);

cljs.core.println.call(null," ",arglists_18364);

if(cljs.core.truth_(doc_18363)){
cljs.core.println.call(null," ",doc_18363);
} else {
}


var G__18365 = seq__18305_18355;
var G__18366 = chunk__18306_18356;
var G__18367 = count__18307_18357;
var G__18368 = (i__18308_18358 + (1));
seq__18305_18355 = G__18365;
chunk__18306_18356 = G__18366;
count__18307_18357 = G__18367;
i__18308_18358 = G__18368;
continue;
} else {
var temp__5720__auto___18369 = cljs.core.seq.call(null,seq__18305_18355);
if(temp__5720__auto___18369){
var seq__18305_18370__$1 = temp__5720__auto___18369;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18305_18370__$1)){
var c__4550__auto___18371 = cljs.core.chunk_first.call(null,seq__18305_18370__$1);
var G__18372 = cljs.core.chunk_rest.call(null,seq__18305_18370__$1);
var G__18373 = c__4550__auto___18371;
var G__18374 = cljs.core.count.call(null,c__4550__auto___18371);
var G__18375 = (0);
seq__18305_18355 = G__18372;
chunk__18306_18356 = G__18373;
count__18307_18357 = G__18374;
i__18308_18358 = G__18375;
continue;
} else {
var vec__18324_18376 = cljs.core.first.call(null,seq__18305_18370__$1);
var name_18377 = cljs.core.nth.call(null,vec__18324_18376,(0),null);
var map__18327_18378 = cljs.core.nth.call(null,vec__18324_18376,(1),null);
var map__18327_18379__$1 = (((((!((map__18327_18378 == null))))?(((((map__18327_18378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18327_18378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18327_18378):map__18327_18378);
var doc_18380 = cljs.core.get.call(null,map__18327_18379__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18381 = cljs.core.get.call(null,map__18327_18379__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18377);

cljs.core.println.call(null," ",arglists_18381);

if(cljs.core.truth_(doc_18380)){
cljs.core.println.call(null," ",doc_18380);
} else {
}


var G__18382 = cljs.core.next.call(null,seq__18305_18370__$1);
var G__18383 = null;
var G__18384 = (0);
var G__18385 = (0);
seq__18305_18355 = G__18382;
chunk__18306_18356 = G__18383;
count__18307_18357 = G__18384;
i__18308_18358 = G__18385;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__18329 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18330 = null;
var count__18331 = (0);
var i__18332 = (0);
while(true){
if((i__18332 < count__18331)){
var role = cljs.core._nth.call(null,chunk__18330,i__18332);
var temp__5720__auto___18386__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___18386__$1)){
var spec_18387 = temp__5720__auto___18386__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_18387));
} else {
}


var G__18388 = seq__18329;
var G__18389 = chunk__18330;
var G__18390 = count__18331;
var G__18391 = (i__18332 + (1));
seq__18329 = G__18388;
chunk__18330 = G__18389;
count__18331 = G__18390;
i__18332 = G__18391;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__18329);
if(temp__5720__auto____$1){
var seq__18329__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18329__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__18329__$1);
var G__18392 = cljs.core.chunk_rest.call(null,seq__18329__$1);
var G__18393 = c__4550__auto__;
var G__18394 = cljs.core.count.call(null,c__4550__auto__);
var G__18395 = (0);
seq__18329 = G__18392;
chunk__18330 = G__18393;
count__18331 = G__18394;
i__18332 = G__18395;
continue;
} else {
var role = cljs.core.first.call(null,seq__18329__$1);
var temp__5720__auto___18396__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___18396__$2)){
var spec_18397 = temp__5720__auto___18396__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_18397));
} else {
}


var G__18398 = cljs.core.next.call(null,seq__18329__$1);
var G__18399 = null;
var G__18400 = (0);
var G__18401 = (0);
seq__18329 = G__18398;
chunk__18330 = G__18399;
count__18331 = G__18400;
i__18332 = G__18401;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__18402 = cljs.core.conj.call(null,via,t);
var G__18403 = cljs.core.ex_cause.call(null,t);
via = G__18402;
t = G__18403;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__18406 = datafied_throwable;
var map__18406__$1 = (((((!((map__18406 == null))))?(((((map__18406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18406):map__18406);
var via = cljs.core.get.call(null,map__18406__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__18406__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__18406__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18407 = cljs.core.last.call(null,via);
var map__18407__$1 = (((((!((map__18407 == null))))?(((((map__18407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18407):map__18407);
var type = cljs.core.get.call(null,map__18407__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__18407__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__18407__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18408 = data;
var map__18408__$1 = (((((!((map__18408 == null))))?(((((map__18408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18408):map__18408);
var problems = cljs.core.get.call(null,map__18408__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__18408__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__18408__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18409 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__18409__$1 = (((((!((map__18409 == null))))?(((((map__18409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18409):map__18409);
var top_data = map__18409__$1;
var source = cljs.core.get.call(null,map__18409__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__18414 = phase;
var G__18414__$1 = (((G__18414 instanceof cljs.core.Keyword))?G__18414.fqn:null);
switch (G__18414__$1) {
case "read-source":
var map__18415 = data;
var map__18415__$1 = (((((!((map__18415 == null))))?(((((map__18415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18415):map__18415);
var line = cljs.core.get.call(null,map__18415__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__18415__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__18417 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__18417__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__18417,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18417);
var G__18417__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__18417__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18417__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__18417__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18417__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__18418 = top_data;
var G__18418__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__18418,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18418);
var G__18418__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__18418__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18418__$1);
var G__18418__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__18418__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18418__$2);
var G__18418__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__18418__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18418__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__18418__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18418__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__18419 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__18419,(0),null);
var method = cljs.core.nth.call(null,vec__18419,(1),null);
var file = cljs.core.nth.call(null,vec__18419,(2),null);
var line = cljs.core.nth.call(null,vec__18419,(3),null);
var G__18422 = top_data;
var G__18422__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__18422,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__18422);
var G__18422__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__18422__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__18422__$1);
var G__18422__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__18422__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__18422__$2);
var G__18422__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__18422__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18422__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__18422__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18422__$4;
}

break;
case "execution":
var vec__18423 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__18423,(0),null);
var method = cljs.core.nth.call(null,vec__18423,(1),null);
var file = cljs.core.nth.call(null,vec__18423,(2),null);
var line = cljs.core.nth.call(null,vec__18423,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__18423,source__$1,method,file,line,G__18414,G__18414__$1,map__18406,map__18406__$1,via,trace,phase,map__18407,map__18407__$1,type,message,data,map__18408,map__18408__$1,problems,fn,caller,map__18409,map__18409__$1,top_data,source){
return (function (p1__18405_SHARP_){
var or__4131__auto__ = (p1__18405_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__18405_SHARP_);
}
});})(vec__18423,source__$1,method,file,line,G__18414,G__18414__$1,map__18406,map__18406__$1,via,trace,phase,map__18407,map__18407__$1,type,message,data,map__18408,map__18408__$1,problems,fn,caller,map__18409,map__18409__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__18426 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__18426__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__18426,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__18426);
var G__18426__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__18426__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18426__$1);
var G__18426__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__18426__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__18426__$2);
var G__18426__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__18426__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__18426__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__18426__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18426__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18414__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__18430){
var map__18431 = p__18430;
var map__18431__$1 = (((((!((map__18431 == null))))?(((((map__18431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18431):map__18431);
var triage_data = map__18431__$1;
var phase = cljs.core.get.call(null,map__18431__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__18431__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__18431__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__18431__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__18431__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__18431__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__18431__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__18431__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__18433 = phase;
var G__18433__$1 = (((G__18433 instanceof cljs.core.Keyword))?G__18433.fqn:null);
switch (G__18433__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18434_18443 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18435_18444 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18436_18445 = true;
var _STAR_print_fn_STAR__temp_val__18437_18446 = ((function (_STAR_print_newline_STAR__orig_val__18434_18443,_STAR_print_fn_STAR__orig_val__18435_18444,_STAR_print_newline_STAR__temp_val__18436_18445,sb__4661__auto__,G__18433,G__18433__$1,loc,class_name,simple_class,cause_type,format,map__18431,map__18431__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__18434_18443,_STAR_print_fn_STAR__orig_val__18435_18444,_STAR_print_newline_STAR__temp_val__18436_18445,sb__4661__auto__,G__18433,G__18433__$1,loc,class_name,simple_class,cause_type,format,map__18431,map__18431__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18436_18445;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18437_18446;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__18434_18443,_STAR_print_fn_STAR__orig_val__18435_18444,_STAR_print_newline_STAR__temp_val__18436_18445,_STAR_print_fn_STAR__temp_val__18437_18446,sb__4661__auto__,G__18433,G__18433__$1,loc,class_name,simple_class,cause_type,format,map__18431,map__18431__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__18434_18443,_STAR_print_fn_STAR__orig_val__18435_18444,_STAR_print_newline_STAR__temp_val__18436_18445,_STAR_print_fn_STAR__temp_val__18437_18446,sb__4661__auto__,G__18433,G__18433__$1,loc,class_name,simple_class,cause_type,format,map__18431,map__18431__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__18428_SHARP_){
return cljs.core.dissoc.call(null,p1__18428_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__18434_18443,_STAR_print_fn_STAR__orig_val__18435_18444,_STAR_print_newline_STAR__temp_val__18436_18445,_STAR_print_fn_STAR__temp_val__18437_18446,sb__4661__auto__,G__18433,G__18433__$1,loc,class_name,simple_class,cause_type,format,map__18431,map__18431__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__18434_18443,_STAR_print_fn_STAR__orig_val__18435_18444,_STAR_print_newline_STAR__temp_val__18436_18445,_STAR_print_fn_STAR__temp_val__18437_18446,sb__4661__auto__,G__18433,G__18433__$1,loc,class_name,simple_class,cause_type,format,map__18431,map__18431__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18435_18444;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18434_18443;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18438_18447 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18439_18448 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18440_18449 = true;
var _STAR_print_fn_STAR__temp_val__18441_18450 = ((function (_STAR_print_newline_STAR__orig_val__18438_18447,_STAR_print_fn_STAR__orig_val__18439_18448,_STAR_print_newline_STAR__temp_val__18440_18449,sb__4661__auto__,G__18433,G__18433__$1,loc,class_name,simple_class,cause_type,format,map__18431,map__18431__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__18438_18447,_STAR_print_fn_STAR__orig_val__18439_18448,_STAR_print_newline_STAR__temp_val__18440_18449,sb__4661__auto__,G__18433,G__18433__$1,loc,class_name,simple_class,cause_type,format,map__18431,map__18431__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18440_18449;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18441_18450;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__18438_18447,_STAR_print_fn_STAR__orig_val__18439_18448,_STAR_print_newline_STAR__temp_val__18440_18449,_STAR_print_fn_STAR__temp_val__18441_18450,sb__4661__auto__,G__18433,G__18433__$1,loc,class_name,simple_class,cause_type,format,map__18431,map__18431__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__18438_18447,_STAR_print_fn_STAR__orig_val__18439_18448,_STAR_print_newline_STAR__temp_val__18440_18449,_STAR_print_fn_STAR__temp_val__18441_18450,sb__4661__auto__,G__18433,G__18433__$1,loc,class_name,simple_class,cause_type,format,map__18431,map__18431__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__18429_SHARP_){
return cljs.core.dissoc.call(null,p1__18429_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__18438_18447,_STAR_print_fn_STAR__orig_val__18439_18448,_STAR_print_newline_STAR__temp_val__18440_18449,_STAR_print_fn_STAR__temp_val__18441_18450,sb__4661__auto__,G__18433,G__18433__$1,loc,class_name,simple_class,cause_type,format,map__18431,map__18431__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__18438_18447,_STAR_print_fn_STAR__orig_val__18439_18448,_STAR_print_newline_STAR__temp_val__18440_18449,_STAR_print_fn_STAR__temp_val__18441_18450,sb__4661__auto__,G__18433,G__18433__$1,loc,class_name,simple_class,cause_type,format,map__18431,map__18431__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18439_18448;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18438_18447;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18433__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
