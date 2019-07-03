// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('replete.editor');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('replete.cm_edit');
goog.require('replete.cm_eval');
goog.require('replete.events');
goog.require('replete.helpers');
goog.require('replete.subs');
/**
 * Show results of eval
 */
replete.editor.cmirror_eval_box = (function replete$editor$cmirror_eval_box(p__20210){
var map__20211 = p__20210;
var map__20211__$1 = (((((!((map__20211 == null))))?(((((map__20211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20211):map__20211);
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20211__$1,cljs.core.cst$kw$opts);
var cm_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20211__$1,cljs.core.cst$kw$cm_DASH_opts);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20211__$1,cljs.core.cst$kw$style);
var result = (function (){var G__20213 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$replete$subs_SLASH_eval_DASH_result], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20213) : re_frame.core.subscribe.call(null,G__20213));
})();
return ((function (result,map__20211,map__20211__$1,opts,cm_opts,style){
return (function (){
var cm_options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$readOnly,true], null),cm_opts], 0));
var opts0 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$node_DASH_id,"output",cljs.core.cst$kw$changes,cljs.core.deref(result)], null),opts], 0));
var eval_opts = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts0,cljs.core.cst$kw$cm_DASH_options,cm_options);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$style,style,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replete.cm_eval.cmirror_eval_comp,eval_opts], null)], null);
});
;})(result,map__20211,map__20211__$1,opts,cm_opts,style))
});
/**
 * Edit forms with parinfer support
 */
replete.editor.cmirror_edit_box = (function replete$editor$cmirror_edit_box(edit_opts,cm_opts,edit_EQ_style){
var clear_form = (function (){var G__20214 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$replete$subs_SLASH_clear_DASH_input_DASH_form], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20214) : re_frame.core.subscribe.call(null,G__20214));
})();
var restore_item = (function (){var G__20215 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$replete$subs_SLASH_restore_DASH_item], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20215) : re_frame.core.subscribe.call(null,G__20215));
})();
return ((function (clear_form,restore_item){
return (function (){
var opts0 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$node_DASH_id,"input",cljs.core.cst$kw$changes,(function (){var or__4131__auto__ = cljs.core.deref(restore_item);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.deref(clear_form);
}
})()], null),edit_opts], 0));
var opts = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts0,cljs.core.cst$kw$cm_DASH_options,cm_opts);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$style,edit_EQ_style,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replete.cm_edit.cmirror_edit_comp,opts], null)], null);
});
;})(clear_form,restore_item))
});
replete.editor.edit_box = (function replete$editor$edit_box(p__20216){
var map__20217 = p__20216;
var map__20217__$1 = (((((!((map__20217 == null))))?(((((map__20217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20217):map__20217);
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20217__$1,cljs.core.cst$kw$opts);
var cm_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20217__$1,cljs.core.cst$kw$cm_DASH_opts);
var key_bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20217__$1,cljs.core.cst$kw$key_DASH_bindings);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20217__$1,cljs.core.cst$kw$style);
var ed_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$node_DASH_id,"input"], null),opts], 0));
var cmirror_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$autofocus,true], null),cm_opts], 0));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$size,"100%",cljs.core.cst$kw$gap,"5px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [replete.editor.cmirror_edit_box,ed_opts,cmirror_opts,style], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,cljs.core.cst$kw$class,"btn-primary",cljs.core.cst$kw$label,"aEval",cljs.core.cst$kw$tooltip,["Shortcut: ",(function (){var G__20220 = cljs.core.cst$kw$enter.cljs$core$IFn$_invoke$arity$1(key_bindings);
if((G__20220 == null)){
return null;
} else {
return cljs.core.name(G__20220);
}
})()].join(''),cljs.core.cst$kw$on_DASH_click,((function (ed_opts,cmirror_opts,map__20217,map__20217__$1,opts,cm_opts,key_bindings,style){
return (function (){
var G__20221 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$replete$events_SLASH_eval], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20221) : re_frame.core.dispatch.call(null,G__20221));
});})(ed_opts,cmirror_opts,map__20217,map__20217__$1,opts,cm_opts,key_bindings,style))
], null)], null)], null);
});
replete.editor.replete_preamble_text = ["ClojureScript ",cljs.core._STAR_clojurescript_version_STAR_,"\n    Docs : (doc function-name)","\n           (find-doc \"part-of-name\")","\n  Source : (source function-name)","\n Results : Stored in *1, *2, *3,","\n           an exception in *e\n\n"].join('');
replete.editor.preamble_markup = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$start,(0),cljs.core.cst$kw$end,replete.helpers.lines_count(replete.editor.replete_preamble_text),cljs.core.cst$kw$width,replete.helpers.max_line_width(replete.editor.replete_preamble_text)], null);
replete.editor.main_style = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$padding,"5px",cljs.core.cst$kw$top,"0px",cljs.core.cst$kw$bottom,"0px",cljs.core.cst$kw$width,"100%"], null);
replete.editor.box_style = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(re_com.core.flex_child_style.cljs$core$IFn$_invoke$arity$1 ? re_com.core.flex_child_style.cljs$core$IFn$_invoke$arity$1("1") : re_com.core.flex_child_style.call(null,"1")),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$border,"1px solid lightgrey",cljs.core.cst$kw$border_DASH_radius,"4px"], null)], 0));
replete.editor.key_binding = (function replete$editor$key_binding(key_map,p__20222){
var vec__20223 = p__20222;
var button = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20223,(0),null);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20223,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(key_map,button),((function (vec__20223,button,event){
return (function (){
var G__20226 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20226) : re_frame.core.dispatch.call(null,G__20226));
});})(vec__20223,button,event))
);
});
replete.editor.extra_key_bindings = (function replete$editor$extra_key_bindings(key_map,event_map){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(replete.editor.key_binding,key_map),event_map));
});
replete.editor.event_bindings = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$enter,cljs.core.cst$kw$replete$events_SLASH_eval,cljs.core.cst$kw$right,cljs.core.cst$kw$replete$events_SLASH_history_DASH_next,cljs.core.cst$kw$down,cljs.core.cst$kw$replete$events_SLASH_history_DASH_next,cljs.core.cst$kw$left,cljs.core.cst$kw$replete$events_SLASH_history_DASH_prev,cljs.core.cst$kw$up,cljs.core.cst$kw$replete$events_SLASH_history_DASH_prev], null);
replete.editor.replete_editor = (function replete$editor$replete_editor(){
var key_bindings = (function (){var G__20227 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$replete$subs_SLASH_key_DASH_bindings], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20227) : re_frame.core.subscribe.call(null,G__20227));
})();
return ((function (key_bindings){
return (function (){
var eval_opts = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$node_DASH_id,"replete-output",cljs.core.cst$kw$preamble_DASH_text,replete.editor.replete_preamble_text,cljs.core.cst$kw$preamble_DASH_markup,replete.editor.preamble_markup], null);
var eval_cm_opts = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$theme,"replete-eval-light"], null);
var eval_box_opts = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$opts,eval_opts,cljs.core.cst$kw$cm_DASH_opts,eval_cm_opts,cljs.core.cst$kw$style,replete.editor.box_style], null);
var extra_keys = replete.editor.extra_key_bindings(cljs.core.deref(key_bindings),replete.editor.event_bindings);
var edit_cm_opts = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$theme,"replete-edit-light",cljs.core.cst$kw$extraKeys,extra_keys], null);
var edit_box_opts = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$node_DASH_id,"replete-input"], null),cljs.core.cst$kw$cm_DASH_opts,edit_cm_opts,cljs.core.cst$kw$key_DASH_bindings,cljs.core.deref(key_bindings),cljs.core.cst$kw$style,replete.editor.box_style], null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$style,replete.editor.main_style,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_split,cljs.core.cst$kw$initial_DASH_split,(70),cljs.core.cst$kw$panel_DASH_1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replete.editor.cmirror_eval_box,eval_box_opts], null),cljs.core.cst$kw$panel_DASH_2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replete.editor.edit_box,edit_box_opts], null)], null)], null);
});
;})(key_bindings))
});
