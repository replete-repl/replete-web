// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/repl.js
cljs.repl.print_doc = (function cljs$repl$print_doc(p__17920){
var map__17921 = p__17920;
var map__17921__$1 = (((((!((map__17921 == null))))?(((((map__17921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17921):map__17921);
var m = map__17921__$1;
var n = cljs.core.get.call(null,map__17921__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__17921__$1,new cljs.core.Keyword(null,"name","name",1843675177));
=======
cljs.repl.print_doc = (function cljs$repl$print_doc(p__12451){
var map__12452 = p__12451;
var map__12452__$1 = (((((!((map__12452 == null))))?(((((map__12452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12452):map__12452);
var m = map__12452__$1;
var n = cljs.core.get.call(null,map__12452__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__12452__$1,new cljs.core.Keyword(null,"name","name",1843675177));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/repl.js
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
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/repl.js
var seq__17923_17955 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17924_17956 = null;
var count__17925_17957 = (0);
var i__17926_17958 = (0);
while(true){
if((i__17926_17958 < count__17925_17957)){
var f_17959 = cljs.core._nth.call(null,chunk__17924_17956,i__17926_17958);
cljs.core.println.call(null,"  ",f_17959);


var G__17960 = seq__17923_17955;
var G__17961 = chunk__17924_17956;
var G__17962 = count__17925_17957;
var G__17963 = (i__17926_17958 + (1));
seq__17923_17955 = G__17960;
chunk__17924_17956 = G__17961;
count__17925_17957 = G__17962;
i__17926_17958 = G__17963;
continue;
} else {
var temp__5720__auto___17964 = cljs.core.seq.call(null,seq__17923_17955);
if(temp__5720__auto___17964){
var seq__17923_17965__$1 = temp__5720__auto___17964;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17923_17965__$1)){
var c__4550__auto___17966 = cljs.core.chunk_first.call(null,seq__17923_17965__$1);
var G__17967 = cljs.core.chunk_rest.call(null,seq__17923_17965__$1);
var G__17968 = c__4550__auto___17966;
var G__17969 = cljs.core.count.call(null,c__4550__auto___17966);
var G__17970 = (0);
seq__17923_17955 = G__17967;
chunk__17924_17956 = G__17968;
count__17925_17957 = G__17969;
i__17926_17958 = G__17970;
continue;
} else {
var f_17971 = cljs.core.first.call(null,seq__17923_17965__$1);
cljs.core.println.call(null,"  ",f_17971);


var G__17972 = cljs.core.next.call(null,seq__17923_17965__$1);
var G__17973 = null;
var G__17974 = (0);
var G__17975 = (0);
seq__17923_17955 = G__17972;
chunk__17924_17956 = G__17973;
count__17925_17957 = G__17974;
i__17926_17958 = G__17975;
=======
var seq__12454_12486 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12455_12487 = null;
var count__12456_12488 = (0);
var i__12457_12489 = (0);
while(true){
if((i__12457_12489 < count__12456_12488)){
var f_12490 = cljs.core._nth.call(null,chunk__12455_12487,i__12457_12489);
cljs.core.println.call(null,"  ",f_12490);


var G__12491 = seq__12454_12486;
var G__12492 = chunk__12455_12487;
var G__12493 = count__12456_12488;
var G__12494 = (i__12457_12489 + (1));
seq__12454_12486 = G__12491;
chunk__12455_12487 = G__12492;
count__12456_12488 = G__12493;
i__12457_12489 = G__12494;
continue;
} else {
var temp__5720__auto___12495 = cljs.core.seq.call(null,seq__12454_12486);
if(temp__5720__auto___12495){
var seq__12454_12496__$1 = temp__5720__auto___12495;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12454_12496__$1)){
var c__4550__auto___12497 = cljs.core.chunk_first.call(null,seq__12454_12496__$1);
var G__12498 = cljs.core.chunk_rest.call(null,seq__12454_12496__$1);
var G__12499 = c__4550__auto___12497;
var G__12500 = cljs.core.count.call(null,c__4550__auto___12497);
var G__12501 = (0);
seq__12454_12486 = G__12498;
chunk__12455_12487 = G__12499;
count__12456_12488 = G__12500;
i__12457_12489 = G__12501;
continue;
} else {
var f_12502 = cljs.core.first.call(null,seq__12454_12496__$1);
cljs.core.println.call(null,"  ",f_12502);


var G__12503 = cljs.core.next.call(null,seq__12454_12496__$1);
var G__12504 = null;
var G__12505 = (0);
var G__12506 = (0);
seq__12454_12486 = G__12503;
chunk__12455_12487 = G__12504;
count__12456_12488 = G__12505;
i__12457_12489 = G__12506;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/repl.js
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/repl.js
var arglists_17976 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
=======
var arglists_12507 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/repl.js
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/repl.js
cljs.core.prn.call(null,arglists_17976);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_17976)))?cljs.core.second.call(null,arglists_17976):arglists_17976));
=======
cljs.core.prn.call(null,arglists_12507);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_12507)))?cljs.core.second.call(null,arglists_12507):arglists_12507));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/repl.js
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
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/repl.js
var seq__17927_17977 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17928_17978 = null;
var count__17929_17979 = (0);
var i__17930_17980 = (0);
while(true){
if((i__17930_17980 < count__17929_17979)){
var vec__17941_17981 = cljs.core._nth.call(null,chunk__17928_17978,i__17930_17980);
var name_17982 = cljs.core.nth.call(null,vec__17941_17981,(0),null);
var map__17944_17983 = cljs.core.nth.call(null,vec__17941_17981,(1),null);
var map__17944_17984__$1 = (((((!((map__17944_17983 == null))))?(((((map__17944_17983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17944_17983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17944_17983):map__17944_17983);
var doc_17985 = cljs.core.get.call(null,map__17944_17984__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17986 = cljs.core.get.call(null,map__17944_17984__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_17982);

cljs.core.println.call(null," ",arglists_17986);

if(cljs.core.truth_(doc_17985)){
cljs.core.println.call(null," ",doc_17985);
=======
var seq__12458_12508 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12459_12509 = null;
var count__12460_12510 = (0);
var i__12461_12511 = (0);
while(true){
if((i__12461_12511 < count__12460_12510)){
var vec__12472_12512 = cljs.core._nth.call(null,chunk__12459_12509,i__12461_12511);
var name_12513 = cljs.core.nth.call(null,vec__12472_12512,(0),null);
var map__12475_12514 = cljs.core.nth.call(null,vec__12472_12512,(1),null);
var map__12475_12515__$1 = (((((!((map__12475_12514 == null))))?(((((map__12475_12514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12475_12514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12475_12514):map__12475_12514);
var doc_12516 = cljs.core.get.call(null,map__12475_12515__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12517 = cljs.core.get.call(null,map__12475_12515__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12513);

cljs.core.println.call(null," ",arglists_12517);

if(cljs.core.truth_(doc_12516)){
cljs.core.println.call(null," ",doc_12516);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/repl.js
} else {
}


<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/repl.js
var G__17987 = seq__17927_17977;
var G__17988 = chunk__17928_17978;
var G__17989 = count__17929_17979;
var G__17990 = (i__17930_17980 + (1));
seq__17927_17977 = G__17987;
chunk__17928_17978 = G__17988;
count__17929_17979 = G__17989;
i__17930_17980 = G__17990;
continue;
} else {
var temp__5720__auto___17991 = cljs.core.seq.call(null,seq__17927_17977);
if(temp__5720__auto___17991){
var seq__17927_17992__$1 = temp__5720__auto___17991;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17927_17992__$1)){
var c__4550__auto___17993 = cljs.core.chunk_first.call(null,seq__17927_17992__$1);
var G__17994 = cljs.core.chunk_rest.call(null,seq__17927_17992__$1);
var G__17995 = c__4550__auto___17993;
var G__17996 = cljs.core.count.call(null,c__4550__auto___17993);
var G__17997 = (0);
seq__17927_17977 = G__17994;
chunk__17928_17978 = G__17995;
count__17929_17979 = G__17996;
i__17930_17980 = G__17997;
continue;
} else {
var vec__17946_17998 = cljs.core.first.call(null,seq__17927_17992__$1);
var name_17999 = cljs.core.nth.call(null,vec__17946_17998,(0),null);
var map__17949_18000 = cljs.core.nth.call(null,vec__17946_17998,(1),null);
var map__17949_18001__$1 = (((((!((map__17949_18000 == null))))?(((((map__17949_18000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17949_18000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17949_18000):map__17949_18000);
var doc_18002 = cljs.core.get.call(null,map__17949_18001__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18003 = cljs.core.get.call(null,map__17949_18001__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_17999);

cljs.core.println.call(null," ",arglists_18003);

if(cljs.core.truth_(doc_18002)){
cljs.core.println.call(null," ",doc_18002);
=======
var G__12518 = seq__12458_12508;
var G__12519 = chunk__12459_12509;
var G__12520 = count__12460_12510;
var G__12521 = (i__12461_12511 + (1));
seq__12458_12508 = G__12518;
chunk__12459_12509 = G__12519;
count__12460_12510 = G__12520;
i__12461_12511 = G__12521;
continue;
} else {
var temp__5720__auto___12522 = cljs.core.seq.call(null,seq__12458_12508);
if(temp__5720__auto___12522){
var seq__12458_12523__$1 = temp__5720__auto___12522;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12458_12523__$1)){
var c__4550__auto___12524 = cljs.core.chunk_first.call(null,seq__12458_12523__$1);
var G__12525 = cljs.core.chunk_rest.call(null,seq__12458_12523__$1);
var G__12526 = c__4550__auto___12524;
var G__12527 = cljs.core.count.call(null,c__4550__auto___12524);
var G__12528 = (0);
seq__12458_12508 = G__12525;
chunk__12459_12509 = G__12526;
count__12460_12510 = G__12527;
i__12461_12511 = G__12528;
continue;
} else {
var vec__12477_12529 = cljs.core.first.call(null,seq__12458_12523__$1);
var name_12530 = cljs.core.nth.call(null,vec__12477_12529,(0),null);
var map__12480_12531 = cljs.core.nth.call(null,vec__12477_12529,(1),null);
var map__12480_12532__$1 = (((((!((map__12480_12531 == null))))?(((((map__12480_12531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12480_12531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12480_12531):map__12480_12531);
var doc_12533 = cljs.core.get.call(null,map__12480_12532__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12534 = cljs.core.get.call(null,map__12480_12532__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12530);

cljs.core.println.call(null," ",arglists_12534);

if(cljs.core.truth_(doc_12533)){
cljs.core.println.call(null," ",doc_12533);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/repl.js
} else {
}


<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/repl.js
var G__18004 = cljs.core.next.call(null,seq__17927_17992__$1);
var G__18005 = null;
var G__18006 = (0);
var G__18007 = (0);
seq__17927_17977 = G__18004;
chunk__17928_17978 = G__18005;
count__17929_17979 = G__18006;
i__17930_17980 = G__18007;
=======
var G__12535 = cljs.core.next.call(null,seq__12458_12523__$1);
var G__12536 = null;
var G__12537 = (0);
var G__12538 = (0);
seq__12458_12508 = G__12535;
chunk__12459_12509 = G__12536;
count__12460_12510 = G__12537;
i__12461_12511 = G__12538;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/repl.js
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

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/repl.js
var seq__17951 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__17952 = null;
var count__17953 = (0);
var i__17954 = (0);
while(true){
if((i__17954 < count__17953)){
var role = cljs.core._nth.call(null,chunk__17952,i__17954);
var temp__5720__auto___18008__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___18008__$1)){
var spec_18009 = temp__5720__auto___18008__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_18009));
=======
var seq__12482 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__12483 = null;
var count__12484 = (0);
var i__12485 = (0);
while(true){
if((i__12485 < count__12484)){
var role = cljs.core._nth.call(null,chunk__12483,i__12485);
var temp__5720__auto___12539__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___12539__$1)){
var spec_12540 = temp__5720__auto___12539__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_12540));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/repl.js
} else {
}


<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/repl.js
var G__18010 = seq__17951;
var G__18011 = chunk__17952;
var G__18012 = count__17953;
var G__18013 = (i__17954 + (1));
seq__17951 = G__18010;
chunk__17952 = G__18011;
count__17953 = G__18012;
i__17954 = G__18013;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__17951);
if(temp__5720__auto____$1){
var seq__17951__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17951__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__17951__$1);
var G__18014 = cljs.core.chunk_rest.call(null,seq__17951__$1);
var G__18015 = c__4550__auto__;
var G__18016 = cljs.core.count.call(null,c__4550__auto__);
var G__18017 = (0);
seq__17951 = G__18014;
chunk__17952 = G__18015;
count__17953 = G__18016;
i__17954 = G__18017;
continue;
} else {
var role = cljs.core.first.call(null,seq__17951__$1);
var temp__5720__auto___18018__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___18018__$2)){
var spec_18019 = temp__5720__auto___18018__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_18019));
=======
var G__12541 = seq__12482;
var G__12542 = chunk__12483;
var G__12543 = count__12484;
var G__12544 = (i__12485 + (1));
seq__12482 = G__12541;
chunk__12483 = G__12542;
count__12484 = G__12543;
i__12485 = G__12544;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__12482);
if(temp__5720__auto____$1){
var seq__12482__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12482__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__12482__$1);
var G__12545 = cljs.core.chunk_rest.call(null,seq__12482__$1);
var G__12546 = c__4550__auto__;
var G__12547 = cljs.core.count.call(null,c__4550__auto__);
var G__12548 = (0);
seq__12482 = G__12545;
chunk__12483 = G__12546;
count__12484 = G__12547;
i__12485 = G__12548;
continue;
} else {
var role = cljs.core.first.call(null,seq__12482__$1);
var temp__5720__auto___12549__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___12549__$2)){
var spec_12550 = temp__5720__auto___12549__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_12550));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/repl.js
} else {
}


<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/repl.js
var G__18020 = cljs.core.next.call(null,seq__17951__$1);
var G__18021 = null;
var G__18022 = (0);
var G__18023 = (0);
seq__17951 = G__18020;
chunk__17952 = G__18021;
count__17953 = G__18022;
i__17954 = G__18023;
=======
var G__12551 = cljs.core.next.call(null,seq__12482__$1);
var G__12552 = null;
var G__12553 = (0);
var G__12554 = (0);
seq__12482 = G__12551;
chunk__12483 = G__12552;
count__12484 = G__12553;
i__12485 = G__12554;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/repl.js
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
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/repl.js
var G__18024 = cljs.core.conj.call(null,via,t);
var G__18025 = cljs.core.ex_cause.call(null,t);
via = G__18024;
t = G__18025;
=======
var G__12555 = cljs.core.conj.call(null,via,t);
var G__12556 = cljs.core.ex_cause.call(null,t);
via = G__12555;
t = G__12556;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/repl.js
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
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/repl.js
var map__18028 = datafied_throwable;
var map__18028__$1 = (((((!((map__18028 == null))))?(((((map__18028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18028):map__18028);
var via = cljs.core.get.call(null,map__18028__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__18028__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__18028__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18029 = cljs.core.last.call(null,via);
var map__18029__$1 = (((((!((map__18029 == null))))?(((((map__18029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18029):map__18029);
var type = cljs.core.get.call(null,map__18029__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__18029__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__18029__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18030 = data;
var map__18030__$1 = (((((!((map__18030 == null))))?(((((map__18030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18030):map__18030);
var problems = cljs.core.get.call(null,map__18030__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__18030__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__18030__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18031 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__18031__$1 = (((((!((map__18031 == null))))?(((((map__18031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18031):map__18031);
var top_data = map__18031__$1;
var source = cljs.core.get.call(null,map__18031__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__18036 = phase;
var G__18036__$1 = (((G__18036 instanceof cljs.core.Keyword))?G__18036.fqn:null);
switch (G__18036__$1) {
case "read-source":
var map__18037 = data;
var map__18037__$1 = (((((!((map__18037 == null))))?(((((map__18037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18037):map__18037);
var line = cljs.core.get.call(null,map__18037__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__18037__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__18039 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__18039__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__18039,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18039);
var G__18039__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__18039__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18039__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__18039__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18039__$2;
=======
var map__12559 = datafied_throwable;
var map__12559__$1 = (((((!((map__12559 == null))))?(((((map__12559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12559):map__12559);
var via = cljs.core.get.call(null,map__12559__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__12559__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__12559__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__12560 = cljs.core.last.call(null,via);
var map__12560__$1 = (((((!((map__12560 == null))))?(((((map__12560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12560):map__12560);
var type = cljs.core.get.call(null,map__12560__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__12560__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__12560__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__12561 = data;
var map__12561__$1 = (((((!((map__12561 == null))))?(((((map__12561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12561):map__12561);
var problems = cljs.core.get.call(null,map__12561__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__12561__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__12561__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__12562 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__12562__$1 = (((((!((map__12562 == null))))?(((((map__12562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12562):map__12562);
var top_data = map__12562__$1;
var source = cljs.core.get.call(null,map__12562__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__12567 = phase;
var G__12567__$1 = (((G__12567 instanceof cljs.core.Keyword))?G__12567.fqn:null);
switch (G__12567__$1) {
case "read-source":
var map__12568 = data;
var map__12568__$1 = (((((!((map__12568 == null))))?(((((map__12568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12568):map__12568);
var line = cljs.core.get.call(null,map__12568__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__12568__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__12570 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__12570__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__12570,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__12570);
var G__12570__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__12570__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__12570__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__12570__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__12570__$2;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/repl.js
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/repl.js
var G__18040 = top_data;
var G__18040__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__18040,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18040);
var G__18040__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__18040__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18040__$1);
var G__18040__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__18040__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18040__$2);
var G__18040__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__18040__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18040__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__18040__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18040__$4;
=======
var G__12571 = top_data;
var G__12571__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__12571,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__12571);
var G__12571__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__12571__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__12571__$1);
var G__12571__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__12571__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__12571__$2);
var G__12571__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__12571__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__12571__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__12571__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__12571__$4;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/repl.js
}

break;
case "read-eval-result":
case "print-eval-result":
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/repl.js
var vec__18041 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__18041,(0),null);
var method = cljs.core.nth.call(null,vec__18041,(1),null);
var file = cljs.core.nth.call(null,vec__18041,(2),null);
var line = cljs.core.nth.call(null,vec__18041,(3),null);
var G__18044 = top_data;
var G__18044__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__18044,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__18044);
var G__18044__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__18044__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__18044__$1);
var G__18044__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
=======
var vec__12572 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__12572,(0),null);
var method = cljs.core.nth.call(null,vec__12572,(1),null);
var file = cljs.core.nth.call(null,vec__12572,(2),null);
var line = cljs.core.nth.call(null,vec__12572,(3),null);
var G__12575 = top_data;
var G__12575__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__12575,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__12575);
var G__12575__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__12575__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__12575__$1);
var G__12575__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/repl.js
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/repl.js
})())?cljs.core.assoc.call(null,G__18044__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__18044__$2);
var G__18044__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__18044__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18044__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__18044__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18044__$4;
=======
})())?cljs.core.assoc.call(null,G__12575__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__12575__$2);
var G__12575__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__12575__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__12575__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__12575__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__12575__$4;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/repl.js
}

break;
case "execution":
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/repl.js
var vec__18045 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__18045,(0),null);
var method = cljs.core.nth.call(null,vec__18045,(1),null);
var file = cljs.core.nth.call(null,vec__18045,(2),null);
var line = cljs.core.nth.call(null,vec__18045,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__18045,source__$1,method,file,line,G__18036,G__18036__$1,map__18028,map__18028__$1,via,trace,phase,map__18029,map__18029__$1,type,message,data,map__18030,map__18030__$1,problems,fn,caller,map__18031,map__18031__$1,top_data,source){
return (function (p1__18027_SHARP_){
var or__4131__auto__ = (p1__18027_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__18027_SHARP_);
}
});})(vec__18045,source__$1,method,file,line,G__18036,G__18036__$1,map__18028,map__18028__$1,via,trace,phase,map__18029,map__18029__$1,type,message,data,map__18030,map__18030__$1,problems,fn,caller,map__18031,map__18031__$1,top_data,source))
=======
var vec__12576 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__12576,(0),null);
var method = cljs.core.nth.call(null,vec__12576,(1),null);
var file = cljs.core.nth.call(null,vec__12576,(2),null);
var line = cljs.core.nth.call(null,vec__12576,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__12576,source__$1,method,file,line,G__12567,G__12567__$1,map__12559,map__12559__$1,via,trace,phase,map__12560,map__12560__$1,type,message,data,map__12561,map__12561__$1,problems,fn,caller,map__12562,map__12562__$1,top_data,source){
return (function (p1__12558_SHARP_){
var or__4131__auto__ = (p1__12558_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__12558_SHARP_);
}
});})(vec__12576,source__$1,method,file,line,G__12567,G__12567__$1,map__12559,map__12559__$1,via,trace,phase,map__12560,map__12560__$1,type,message,data,map__12561,map__12561__$1,problems,fn,caller,map__12562,map__12562__$1,top_data,source))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/repl.js
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/repl.js
var G__18048 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__18048__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__18048,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__18048);
var G__18048__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__18048__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18048__$1);
var G__18048__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
=======
var G__12579 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__12579__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__12579,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__12579);
var G__12579__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__12579__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__12579__$1);
var G__12579__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/repl.js
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
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/repl.js
})())?cljs.core.assoc.call(null,G__18048__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
=======
})())?cljs.core.assoc.call(null,G__12579__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/repl.js
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/repl.js
})()):G__18048__$2);
var G__18048__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__18048__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__18048__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__18048__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18048__$4;
=======
})()):G__12579__$2);
var G__12579__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__12579__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__12579__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__12579__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__12579__$4;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/repl.js
}

break;
default:
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/repl.js
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18036__$1)].join('')));
=======
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12567__$1)].join('')));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/repl.js

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/repl.js
cljs.repl.ex_str = (function cljs$repl$ex_str(p__18052){
var map__18053 = p__18052;
var map__18053__$1 = (((((!((map__18053 == null))))?(((((map__18053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18053):map__18053);
var triage_data = map__18053__$1;
var phase = cljs.core.get.call(null,map__18053__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__18053__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__18053__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__18053__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__18053__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__18053__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__18053__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__18053__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
=======
cljs.repl.ex_str = (function cljs$repl$ex_str(p__12583){
var map__12584 = p__12583;
var map__12584__$1 = (((((!((map__12584 == null))))?(((((map__12584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12584):map__12584);
var triage_data = map__12584__$1;
var phase = cljs.core.get.call(null,map__12584__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__12584__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__12584__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__12584__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__12584__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__12584__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__12584__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__12584__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/repl.js
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
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/repl.js
var G__18055 = phase;
var G__18055__$1 = (((G__18055 instanceof cljs.core.Keyword))?G__18055.fqn:null);
switch (G__18055__$1) {
=======
var G__12586 = phase;
var G__12586__$1 = (((G__12586 instanceof cljs.core.Keyword))?G__12586.fqn:null);
switch (G__12586__$1) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/repl.js
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/repl.js
var _STAR_print_newline_STAR__orig_val__18056_18065 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18057_18066 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18058_18067 = true;
var _STAR_print_fn_STAR__temp_val__18059_18068 = ((function (_STAR_print_newline_STAR__orig_val__18056_18065,_STAR_print_fn_STAR__orig_val__18057_18066,_STAR_print_newline_STAR__temp_val__18058_18067,sb__4661__auto__,G__18055,G__18055__$1,loc,class_name,simple_class,cause_type,format,map__18053,map__18053__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__18056_18065,_STAR_print_fn_STAR__orig_val__18057_18066,_STAR_print_newline_STAR__temp_val__18058_18067,sb__4661__auto__,G__18055,G__18055__$1,loc,class_name,simple_class,cause_type,format,map__18053,map__18053__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18058_18067;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18059_18068;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__18056_18065,_STAR_print_fn_STAR__orig_val__18057_18066,_STAR_print_newline_STAR__temp_val__18058_18067,_STAR_print_fn_STAR__temp_val__18059_18068,sb__4661__auto__,G__18055,G__18055__$1,loc,class_name,simple_class,cause_type,format,map__18053,map__18053__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__18056_18065,_STAR_print_fn_STAR__orig_val__18057_18066,_STAR_print_newline_STAR__temp_val__18058_18067,_STAR_print_fn_STAR__temp_val__18059_18068,sb__4661__auto__,G__18055,G__18055__$1,loc,class_name,simple_class,cause_type,format,map__18053,map__18053__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__18050_SHARP_){
return cljs.core.dissoc.call(null,p1__18050_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__18056_18065,_STAR_print_fn_STAR__orig_val__18057_18066,_STAR_print_newline_STAR__temp_val__18058_18067,_STAR_print_fn_STAR__temp_val__18059_18068,sb__4661__auto__,G__18055,G__18055__$1,loc,class_name,simple_class,cause_type,format,map__18053,map__18053__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__18056_18065,_STAR_print_fn_STAR__orig_val__18057_18066,_STAR_print_newline_STAR__temp_val__18058_18067,_STAR_print_fn_STAR__temp_val__18059_18068,sb__4661__auto__,G__18055,G__18055__$1,loc,class_name,simple_class,cause_type,format,map__18053,map__18053__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18057_18066;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18056_18065;
=======
var _STAR_print_newline_STAR__orig_val__12587_12596 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12588_12597 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12589_12598 = true;
var _STAR_print_fn_STAR__temp_val__12590_12599 = ((function (_STAR_print_newline_STAR__orig_val__12587_12596,_STAR_print_fn_STAR__orig_val__12588_12597,_STAR_print_newline_STAR__temp_val__12589_12598,sb__4661__auto__,G__12586,G__12586__$1,loc,class_name,simple_class,cause_type,format,map__12584,map__12584__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__12587_12596,_STAR_print_fn_STAR__orig_val__12588_12597,_STAR_print_newline_STAR__temp_val__12589_12598,sb__4661__auto__,G__12586,G__12586__$1,loc,class_name,simple_class,cause_type,format,map__12584,map__12584__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12589_12598;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12590_12599;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__12587_12596,_STAR_print_fn_STAR__orig_val__12588_12597,_STAR_print_newline_STAR__temp_val__12589_12598,_STAR_print_fn_STAR__temp_val__12590_12599,sb__4661__auto__,G__12586,G__12586__$1,loc,class_name,simple_class,cause_type,format,map__12584,map__12584__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__12587_12596,_STAR_print_fn_STAR__orig_val__12588_12597,_STAR_print_newline_STAR__temp_val__12589_12598,_STAR_print_fn_STAR__temp_val__12590_12599,sb__4661__auto__,G__12586,G__12586__$1,loc,class_name,simple_class,cause_type,format,map__12584,map__12584__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__12581_SHARP_){
return cljs.core.dissoc.call(null,p1__12581_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__12587_12596,_STAR_print_fn_STAR__orig_val__12588_12597,_STAR_print_newline_STAR__temp_val__12589_12598,_STAR_print_fn_STAR__temp_val__12590_12599,sb__4661__auto__,G__12586,G__12586__$1,loc,class_name,simple_class,cause_type,format,map__12584,map__12584__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__12587_12596,_STAR_print_fn_STAR__orig_val__12588_12597,_STAR_print_newline_STAR__temp_val__12589_12598,_STAR_print_fn_STAR__temp_val__12590_12599,sb__4661__auto__,G__12586,G__12586__$1,loc,class_name,simple_class,cause_type,format,map__12584,map__12584__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12588_12597;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12587_12596;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/repl.js
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
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/repl.js
var _STAR_print_newline_STAR__orig_val__18060_18069 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18061_18070 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18062_18071 = true;
var _STAR_print_fn_STAR__temp_val__18063_18072 = ((function (_STAR_print_newline_STAR__orig_val__18060_18069,_STAR_print_fn_STAR__orig_val__18061_18070,_STAR_print_newline_STAR__temp_val__18062_18071,sb__4661__auto__,G__18055,G__18055__$1,loc,class_name,simple_class,cause_type,format,map__18053,map__18053__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__18060_18069,_STAR_print_fn_STAR__orig_val__18061_18070,_STAR_print_newline_STAR__temp_val__18062_18071,sb__4661__auto__,G__18055,G__18055__$1,loc,class_name,simple_class,cause_type,format,map__18053,map__18053__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18062_18071;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18063_18072;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__18060_18069,_STAR_print_fn_STAR__orig_val__18061_18070,_STAR_print_newline_STAR__temp_val__18062_18071,_STAR_print_fn_STAR__temp_val__18063_18072,sb__4661__auto__,G__18055,G__18055__$1,loc,class_name,simple_class,cause_type,format,map__18053,map__18053__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__18060_18069,_STAR_print_fn_STAR__orig_val__18061_18070,_STAR_print_newline_STAR__temp_val__18062_18071,_STAR_print_fn_STAR__temp_val__18063_18072,sb__4661__auto__,G__18055,G__18055__$1,loc,class_name,simple_class,cause_type,format,map__18053,map__18053__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__18051_SHARP_){
return cljs.core.dissoc.call(null,p1__18051_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__18060_18069,_STAR_print_fn_STAR__orig_val__18061_18070,_STAR_print_newline_STAR__temp_val__18062_18071,_STAR_print_fn_STAR__temp_val__18063_18072,sb__4661__auto__,G__18055,G__18055__$1,loc,class_name,simple_class,cause_type,format,map__18053,map__18053__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__18060_18069,_STAR_print_fn_STAR__orig_val__18061_18070,_STAR_print_newline_STAR__temp_val__18062_18071,_STAR_print_fn_STAR__temp_val__18063_18072,sb__4661__auto__,G__18055,G__18055__$1,loc,class_name,simple_class,cause_type,format,map__18053,map__18053__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18061_18070;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18060_18069;
=======
var _STAR_print_newline_STAR__orig_val__12591_12600 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12592_12601 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12593_12602 = true;
var _STAR_print_fn_STAR__temp_val__12594_12603 = ((function (_STAR_print_newline_STAR__orig_val__12591_12600,_STAR_print_fn_STAR__orig_val__12592_12601,_STAR_print_newline_STAR__temp_val__12593_12602,sb__4661__auto__,G__12586,G__12586__$1,loc,class_name,simple_class,cause_type,format,map__12584,map__12584__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__12591_12600,_STAR_print_fn_STAR__orig_val__12592_12601,_STAR_print_newline_STAR__temp_val__12593_12602,sb__4661__auto__,G__12586,G__12586__$1,loc,class_name,simple_class,cause_type,format,map__12584,map__12584__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12593_12602;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12594_12603;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__12591_12600,_STAR_print_fn_STAR__orig_val__12592_12601,_STAR_print_newline_STAR__temp_val__12593_12602,_STAR_print_fn_STAR__temp_val__12594_12603,sb__4661__auto__,G__12586,G__12586__$1,loc,class_name,simple_class,cause_type,format,map__12584,map__12584__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__12591_12600,_STAR_print_fn_STAR__orig_val__12592_12601,_STAR_print_newline_STAR__temp_val__12593_12602,_STAR_print_fn_STAR__temp_val__12594_12603,sb__4661__auto__,G__12586,G__12586__$1,loc,class_name,simple_class,cause_type,format,map__12584,map__12584__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__12582_SHARP_){
return cljs.core.dissoc.call(null,p1__12582_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__12591_12600,_STAR_print_fn_STAR__orig_val__12592_12601,_STAR_print_newline_STAR__temp_val__12593_12602,_STAR_print_fn_STAR__temp_val__12594_12603,sb__4661__auto__,G__12586,G__12586__$1,loc,class_name,simple_class,cause_type,format,map__12584,map__12584__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__12591_12600,_STAR_print_fn_STAR__orig_val__12592_12601,_STAR_print_newline_STAR__temp_val__12593_12602,_STAR_print_fn_STAR__temp_val__12594_12603,sb__4661__auto__,G__12586,G__12586__$1,loc,class_name,simple_class,cause_type,format,map__12584,map__12584__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12592_12601;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12591_12600;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/repl.js
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/repl.js
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18055__$1)].join('')));
=======
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12586__$1)].join('')));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/repl.js

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
