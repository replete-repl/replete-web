// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('replete.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('replete.io_impl');
goog.require('replete.worker_client');
goog.require('re_frame.core');
replete.events.key_bindings = (function replete$events$key_bindings(os){
var ckey = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(os,cljs.core.cst$kw$macosx))?"cmd":"ctrl");
var keys = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["enter","up","down","left","right"], null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (ckey,keys){
return (function (c_key,the_key){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(the_key),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.capitalize(c_key)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.capitalize(the_key))].join(''))], null);
});})(ckey,keys))
,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(ckey),keys));
});
if((typeof replete !== 'undefined') && (typeof replete.events !== 'undefined') && (typeof replete.events.os_data !== 'undefined')){
} else {
replete.events.os_data = (function (){var app_version = navigator.appVersion;
var os = (cljs.core.truth_(cljs.core.re_find(/Win/,app_version))?cljs.core.cst$kw$windows:(cljs.core.truth_(cljs.core.re_find(/X11/,app_version))?cljs.core.cst$kw$unix:(cljs.core.truth_(cljs.core.re_find(/Linux/,app_version))?cljs.core.cst$kw$linux:(cljs.core.truth_(cljs.core.re_find(/Mac/,app_version))?cljs.core.cst$kw$macosx:cljs.core.cst$kw$unknown_DASH_os
))));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$os,os,cljs.core.cst$kw$key_DASH_bindings,replete.events.key_bindings(os)], null);
})();
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$replete$events_SLASH_initialize_DASH_db,(function (_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$app_DASH_name,"replete-web"], null),replete.events.os_data], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$replete$events_SLASH_save_DASH_form,(function (db,p__10981){
var vec__10982 = p__10981;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10982,(0),null);
var clojure_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10982,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$current_DASH_form,clojure_form,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$clear_DASH_input,null], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$replete$events_SLASH_clear_DASH_input,(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$clear_DASH_input,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clear_DASH_input_DASH_form,true], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$replete$events_SLASH_input_DASH_history,(function (db,p__10985){
var vec__10986 = p__10985;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10986,(0),null);
var clojure_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10986,(1),null);
var history = (function (){var or__4131__auto__ = cljs.core.cst$kw$input_DASH_history.cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$input_DASH_history,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(history,clojure_form),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$history_DASH_index,(cljs.core.count(history) + (1))], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$replete$events_SLASH_eval_DASH_result,(function (db,p__10989){
var vec__10990 = p__10989;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10990,(0),null);
var eval_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10990,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$eval_DASH_result,eval_result);
}));
var G__10993_10996 = cljs.core.cst$kw$replete$events_SLASH_async_DASH_eval;
var G__10994_10997 = ((function (G__10993_10996){
return (function (clojure_form){
replete.worker_client.send_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$eval_SLASH_form,clojure_form], null));

var G__10995 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$replete$events_SLASH_input_DASH_history,clojure_form], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__10995) : re_frame.core.dispatch.call(null,G__10995));
});})(G__10993_10996))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__10993_10996,G__10994_10997) : re_frame.core.reg_fx.call(null,G__10993_10996,G__10994_10997));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$eval_SLASH_result,(function (_,p__10998){
var vec__10999 = p__10998;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10999,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10999,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch_DASH_n,(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$replete$events_SLASH_eval_DASH_result,result], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$replete$events_SLASH_clear_DASH_input], null),null,(1),null)),(2),null))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$replete$events_SLASH_eval,(function (p__11002,_){
var map__11003 = p__11002;
var map__11003__$1 = (((((!((map__11003 == null))))?(((((map__11003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11003):map__11003);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11003__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$restore_DASH_item,null),cljs.core.cst$kw$replete$events_SLASH_async_DASH_eval,cljs.core.cst$kw$current_DASH_form.cljs$core$IFn$_invoke$arity$1(db)], null);
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
replete.events.highlight_form = (function replete$events$highlight_form(cm,p__11005){
var map__11006 = p__11005;
var map__11006__$1 = (((((!((map__11006 == null))))?(((((map__11006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11006):map__11006);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11006__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11006__$1,cljs.core.cst$kw$end);
cm.extendSelection(({"line": start, "ch": (0)}),({"line": (end + (1)), "ch": (0)}));

return cm.scrollIntoView(({"line": (((start < (15)))?(0):((2) + end))}));
});
replete.events.highlight_history = (function replete$events$highlight_history(index,p__11008){
var map__11009 = p__11008;
var map__11009__$1 = (((((!((map__11009 == null))))?(((((map__11009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11009):map__11009);
var eval_codemirror = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11009__$1,cljs.core.cst$kw$eval_DASH_codemirror);
var mark_up_history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11009__$1,cljs.core.cst$kw$mark_DASH_up_DASH_history);
var next_mark_up = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(mark_up_history,index,cljs.core.cst$kw$not_DASH_found);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_mark_up,cljs.core.cst$kw$not_DASH_found)){
return null;
} else {
return replete.events.highlight_form(eval_codemirror,next_mark_up);
}
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$replete$events_SLASH_eval_DASH_codemirror,(function (db,p__11011){
var vec__11012 = p__11011;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11012,(0),null);
var codemirror = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11012,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$eval_DASH_codemirror,codemirror);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$replete$events_SLASH_mark_DASH_up_DASH_history,(function (db,p__11015){
var vec__11016 = p__11015;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11016,(0),null);
var mark_up_history = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11016,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mark_DASH_up_DASH_history,mark_up_history);
}));
replete.events.next_prev = (function replete$events$next_prev(db,direction_fn){
var index = (function (){var G__11019 = cljs.core.cst$kw$history_DASH_index.cljs$core$IFn$_invoke$arity$1(db);
return (direction_fn.cljs$core$IFn$_invoke$arity$1 ? direction_fn.cljs$core$IFn$_invoke$arity$1(G__11019) : direction_fn.call(null,G__11019));
})();
var history = cljs.core.cst$kw$input_DASH_history.cljs$core$IFn$_invoke$arity$1(db);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(history,index,cljs.core.cst$kw$not_DASH_found);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item,cljs.core.cst$kw$not_DASH_found)){
return db;
} else {
var options = cljs.core.select_keys(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$eval_DASH_codemirror,cljs.core.cst$kw$mark_DASH_up_DASH_history], null));
replete.events.highlight_history(index,options);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$history_DASH_index,index,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$restore_DASH_item,item,cljs.core.cst$kw$current_DASH_form,item], 0));
}
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$replete$events_SLASH_history_DASH_prev,(function (db,_){
return replete.events.next_prev(db,cljs.core.dec);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$replete$events_SLASH_history_DASH_next,(function (db,_){
return replete.events.next_prev(db,cljs.core.inc);
}));
