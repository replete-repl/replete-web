// Compiled by ClojureScript 1.10.520 {}
goog.provide('replete.events');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('replete.io_impl');
goog.require('replete.worker_client');
goog.require('re_frame.core');
replete.events.key_bindings = (function replete$events$key_bindings(os){
var ckey = ((cljs.core._EQ_.call(null,os,new cljs.core.Keyword(null,"macosx","macosx",-1369181402)))?"cmd":"ctrl");
var keys = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["enter","up","down","left","right"], null);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (ckey,keys){
return (function (c_key,the_key){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,the_key),cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.capitalize.call(null,c_key)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.capitalize.call(null,the_key))].join(''))], null);
});})(ckey,keys))
,cljs.core.repeat.call(null,ckey),keys));
});
if((typeof replete !== 'undefined') && (typeof replete.events !== 'undefined') && (typeof replete.events.os_data !== 'undefined')){
} else {
replete.events.os_data = (function (){var app_version = navigator.appVersion;
var os = (cljs.core.truth_(cljs.core.re_find.call(null,/Win/,app_version))?new cljs.core.Keyword(null,"windows","windows",2068861701):(cljs.core.truth_(cljs.core.re_find.call(null,/X11/,app_version))?new cljs.core.Keyword(null,"unix","unix",1361815212):(cljs.core.truth_(cljs.core.re_find.call(null,/Linux/,app_version))?new cljs.core.Keyword(null,"linux","linux",-238042662):(cljs.core.truth_(cljs.core.re_find.call(null,/Mac/,app_version))?new cljs.core.Keyword(null,"macosx","macosx",-1369181402):new cljs.core.Keyword(null,"unknown-os","unknown-os",-2005955628)
))));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"os","os",795021913),os,new cljs.core.Keyword(null,"key-bindings","key-bindings",-1464217982),replete.events.key_bindings.call(null,os)], null);
})();
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("replete.events","initialize-db","replete.events/initialize-db",697826432),(function (_,___$1){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app-name","app-name",-268811251),"replete-web"], null),replete.events.os_data);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("replete.events","save-form","replete.events/save-form",322041842),(function (db,p__1973){
var vec__1974 = p__1973;
var _ = cljs.core.nth.call(null,vec__1974,(0),null);
var clojure_form = cljs.core.nth.call(null,vec__1974,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-form","current-form",1889534560),clojure_form,new cljs.core.Keyword(null,"clear-input","clear-input",-561724207),null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("replete.events","clear-input","replete.events/clear-input",-844727375),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"clear-input","clear-input",-561724207),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear-input-form","clear-input-form",-2047880566),true], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("replete.events","input-history","replete.events/input-history",-313529166),(function (db,p__1977){
var vec__1978 = p__1977;
var _ = cljs.core.nth.call(null,vec__1978,(0),null);
var clojure_form = cljs.core.nth.call(null,vec__1978,(1),null);
var history = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"input-history","input-history",-2110310510).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"input-history","input-history",-2110310510),cljs.core.conj.call(null,history,clojure_form),new cljs.core.Keyword(null,"history-index","history-index",-394704427),(cljs.core.count.call(null,history) + (1)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("replete.events","eval-result","replete.events/eval-result",-1560562202),(function (db,p__1981){
var vec__1982 = p__1981;
var _ = cljs.core.nth.call(null,vec__1982,(0),null);
var eval_result = cljs.core.nth.call(null,vec__1982,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"eval-result","eval-result",937286342),eval_result);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("replete.events","async-eval","replete.events/async-eval",1939234518),(function (clojure_form){
replete.worker_client.send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("eval","form","eval/form",-1627220315),clojure_form], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replete.events","input-history","replete.events/input-history",-313529166),clojure_form], null));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("eval","result","eval/result",1420716095),(function (_,p__1985){
var vec__1986 = p__1985;
var ___$1 = cljs.core.nth.call(null,vec__1986,(0),null);
var result = cljs.core.nth.call(null,vec__1986,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replete.events","eval-result","replete.events/eval-result",-1560562202),result], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replete.events","clear-input","replete.events/clear-input",-844727375)], null),null,(1),null)),(2),null))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("replete.events","eval","replete.events/eval",999958207),(function (p__1989,_){
var map__1990 = p__1989;
var map__1990__$1 = (((((!((map__1990 == null))))?(((((map__1990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1990):map__1990);
var db = cljs.core.get.call(null,map__1990__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"restore-item","restore-item",-522170560),null),new cljs.core.Keyword("replete.events","async-eval","replete.events/async-eval",1939234518),new cljs.core.Keyword(null,"current-form","current-form",1889534560).cljs$core$IFn$_invoke$arity$1(db)], null);
}));
/**
 * Direct codemirror to create a highlight bar over the form.
 * 
 *   Hack #1 Note: `inc` is needed on the `end` line to force codemirror
 *   to highlight the full width of the last line of the form. Otherwise
 *   it stops at the end of the text. Let me know if you have a less
 *   hacky option.
 * 
 *   Hack #2 Note: `.extendSelection` scrolls to `start` but this does
 *   not always show whole multi-line forms. To make it wholly visible
 *   a further scroll is attempted with a simple heuristic as an attempt
 *   to avoid this problem.
 */
replete.events.highlight_form = (function replete$events$highlight_form(cm,p__1992){
var map__1993 = p__1992;
var map__1993__$1 = (((((!((map__1993 == null))))?(((((map__1993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1993):map__1993);
var start = cljs.core.get.call(null,map__1993__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__1993__$1,new cljs.core.Keyword(null,"end","end",-268185958));
cm.extendSelection(({"line": start, "ch": (0)}),({"line": (end + (1)), "ch": (0)}));

return cm.scrollIntoView(({"line": (((start < (15)))?(0):((2) + end))}));
});
replete.events.highlight_history = (function replete$events$highlight_history(index,p__1995){
var map__1996 = p__1995;
var map__1996__$1 = (((((!((map__1996 == null))))?(((((map__1996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1996):map__1996);
var eval_codemirror = cljs.core.get.call(null,map__1996__$1,new cljs.core.Keyword(null,"eval-codemirror","eval-codemirror",-34079130));
var mark_up_history = cljs.core.get.call(null,map__1996__$1,new cljs.core.Keyword(null,"mark-up-history","mark-up-history",-1272569067));
var next_mark_up = cljs.core.nth.call(null,mark_up_history,index,new cljs.core.Keyword(null,"not-found","not-found",-629079980));
if(cljs.core._EQ_.call(null,next_mark_up,new cljs.core.Keyword(null,"not-found","not-found",-629079980))){
return null;
} else {
return replete.events.highlight_form.call(null,eval_codemirror,next_mark_up);
}
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("replete.events","eval-codemirror","replete.events/eval-codemirror",1530280838),(function (db,p__1998){
var vec__1999 = p__1998;
var _ = cljs.core.nth.call(null,vec__1999,(0),null);
var codemirror = cljs.core.nth.call(null,vec__1999,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"eval-codemirror","eval-codemirror",-34079130),codemirror);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("replete.events","mark-up-history","replete.events/mark-up-history",1325591605),(function (db,p__2002){
var vec__2003 = p__2002;
var _ = cljs.core.nth.call(null,vec__2003,(0),null);
var mark_up_history = cljs.core.nth.call(null,vec__2003,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"mark-up-history","mark-up-history",-1272569067),mark_up_history);
}));
replete.events.next_prev = (function replete$events$next_prev(db,direction_fn){
var index = direction_fn.call(null,new cljs.core.Keyword(null,"history-index","history-index",-394704427).cljs$core$IFn$_invoke$arity$1(db));
var history = new cljs.core.Keyword(null,"input-history","input-history",-2110310510).cljs$core$IFn$_invoke$arity$1(db);
var item = cljs.core.nth.call(null,history,index,new cljs.core.Keyword(null,"not-found","not-found",-629079980));
if(cljs.core._EQ_.call(null,item,new cljs.core.Keyword(null,"not-found","not-found",-629079980))){
return db;
} else {
var options = cljs.core.select_keys.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eval-codemirror","eval-codemirror",-34079130),new cljs.core.Keyword(null,"mark-up-history","mark-up-history",-1272569067)], null));
replete.events.highlight_history.call(null,index,options);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"history-index","history-index",-394704427),index,new cljs.core.Keyword(null,"restore-item","restore-item",-522170560),item,new cljs.core.Keyword(null,"current-form","current-form",1889534560),item);
}
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("replete.events","history-prev","replete.events/history-prev",76925801),(function (db,_){
return replete.events.next_prev.call(null,db,cljs.core.dec);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("replete.events","history-next","replete.events/history-next",-1773984442),(function (db,_){
return replete.events.next_prev.call(null,db,cljs.core.inc);
}));

//# sourceMappingURL=events.js.map
