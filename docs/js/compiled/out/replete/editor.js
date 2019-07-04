// Compiled by ClojureScript 1.10.520 {}
goog.provide('replete.editor');
goog.require('cljs.core');
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
replete.editor.cmirror_eval_box = (function replete$editor$cmirror_eval_box(p__3755){
var map__3756 = p__3755;
var map__3756__$1 = (((((!((map__3756 == null))))?(((((map__3756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3756):map__3756);
var opts = cljs.core.get.call(null,map__3756__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var cm_opts = cljs.core.get.call(null,map__3756__$1,new cljs.core.Keyword(null,"cm-opts","cm-opts",-794223420));
var style = cljs.core.get.call(null,map__3756__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var result = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replete.subs","eval-result","replete.subs/eval-result",1129723600)], null));
return ((function (result,map__3756,map__3756__$1,opts,cm_opts,style){
return (function (){
var cm_options = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),true], null),cm_opts);
var opts0 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node-id","node-id",779482292),"output",new cljs.core.Keyword(null,"changes","changes",1492088),cljs.core.deref.call(null,result)], null),opts);
var eval_opts = cljs.core.assoc.call(null,opts0,new cljs.core.Keyword(null,"cm-options","cm-options",-1418884096),cm_options);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replete.cm_eval.cmirror_eval_comp,eval_opts], null)], null);
});
;})(result,map__3756,map__3756__$1,opts,cm_opts,style))
});
/**
 * Edit forms with parinfer support
 */
replete.editor.cmirror_edit_box = (function replete$editor$cmirror_edit_box(edit_opts,cm_opts,edit_EQ_style){
var clear_form = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replete.subs","clear-input-form","replete.subs/clear-input-form",-1064857980)], null));
var restore_item = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replete.subs","restore-item","replete.subs/restore-item",1022890810)], null));
return ((function (clear_form,restore_item){
return (function (){
var opts0 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node-id","node-id",779482292),"input",new cljs.core.Keyword(null,"changes","changes",1492088),(function (){var or__4131__auto__ = cljs.core.deref.call(null,restore_item);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.deref.call(null,clear_form);
}
})()], null),edit_opts);
var opts = cljs.core.assoc.call(null,opts0,new cljs.core.Keyword(null,"cm-options","cm-options",-1418884096),cm_opts);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"style","style",-496642736),edit_EQ_style,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replete.cm_edit.cmirror_edit_comp,opts], null)], null);
});
;})(clear_form,restore_item))
});
replete.editor.edit_box = (function replete$editor$edit_box(p__3758){
var map__3759 = p__3758;
var map__3759__$1 = (((((!((map__3759 == null))))?(((((map__3759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3759):map__3759);
var opts = cljs.core.get.call(null,map__3759__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var cm_opts = cljs.core.get.call(null,map__3759__$1,new cljs.core.Keyword(null,"cm-opts","cm-opts",-794223420));
var key_bindings = cljs.core.get.call(null,map__3759__$1,new cljs.core.Keyword(null,"key-bindings","key-bindings",-1464217982));
var style = cljs.core.get.call(null,map__3759__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var ed_opts = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node-id","node-id",779482292),"input"], null),opts);
var cmirror_opts = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autofocus","autofocus",-712814732),true], null),cm_opts);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"100%",new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [replete.editor.cmirror_edit_box,ed_opts,cmirror_opts,style], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),"btn-primary",new cljs.core.Keyword(null,"label","label",1718410804),"Eval",new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),["Shortcut: ",(function (){var G__3762 = new cljs.core.Keyword(null,"enter","enter",1792452624).cljs$core$IFn$_invoke$arity$1(key_bindings);
if((G__3762 == null)){
return null;
} else {
return cljs.core.name.call(null,G__3762);
}
})()].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (ed_opts,cmirror_opts,map__3759,map__3759__$1,opts,cm_opts,key_bindings,style){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replete.events","eval","replete.events/eval",999958207)], null));
});})(ed_opts,cmirror_opts,map__3759,map__3759__$1,opts,cm_opts,key_bindings,style))
], null)], null)], null);
});
replete.editor.replete_preamble_text = ["ClojureScript ",cljs.core._STAR_clojurescript_version_STAR_,"\n    Docs : (doc function-name)","\n           (find-doc \"part-of-name\")","\n  Source : (source function-name)","\n Results : Stored in *1, *2, *3,","\n           an exception in *e\n\n"].join('');
replete.editor.preamble_markup = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"end","end",-268185958),replete.helpers.lines_count.call(null,replete.editor.replete_preamble_text),new cljs.core.Keyword(null,"width","width",-384071477),replete.helpers.max_line_width.call(null,replete.editor.replete_preamble_text)], null);
replete.editor.main_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px",new cljs.core.Keyword(null,"top","top",-1856271961),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"0px",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null);
replete.editor.box_style = cljs.core.merge.call(null,re_com.core.flex_child_style.call(null,"1"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid lightgrey",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px"], null));
replete.editor.key_binding = (function replete$editor$key_binding(key_map,p__3763){
var vec__3764 = p__3763;
var button = cljs.core.nth.call(null,vec__3764,(0),null);
var event = cljs.core.nth.call(null,vec__3764,(1),null);
return cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.get.call(null,key_map,button),((function (vec__3764,button,event){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event], null));
});})(vec__3764,button,event))
);
});
replete.editor.extra_key_bindings = (function replete$editor$extra_key_bindings(key_map,event_map){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,cljs.core.partial.call(null,replete.editor.key_binding,key_map),event_map));
});
replete.editor.event_bindings = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enter","enter",1792452624),new cljs.core.Keyword("replete.events","eval","replete.events/eval",999958207),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword("replete.events","history-next","replete.events/history-next",-1773984442),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword("replete.events","history-next","replete.events/history-next",-1773984442),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword("replete.events","history-prev","replete.events/history-prev",76925801),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword("replete.events","history-prev","replete.events/history-prev",76925801)], null);
replete.editor.replete_editor = (function replete$editor$replete_editor(){
var key_bindings = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replete.subs","key-bindings","replete.subs/key-bindings",-447606100)], null));
return ((function (key_bindings){
return (function (){
var eval_opts = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"node-id","node-id",779482292),"replete-output",new cljs.core.Keyword(null,"preamble-text","preamble-text",-1480702866),replete.editor.replete_preamble_text,new cljs.core.Keyword(null,"preamble-markup","preamble-markup",1557120511),replete.editor.preamble_markup], null);
var eval_cm_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"theme","theme",-1247880880),"replete-eval-light"], null);
var eval_box_opts = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),eval_opts,new cljs.core.Keyword(null,"cm-opts","cm-opts",-794223420),eval_cm_opts,new cljs.core.Keyword(null,"style","style",-496642736),replete.editor.box_style], null);
var extra_keys = replete.editor.extra_key_bindings.call(null,cljs.core.deref.call(null,key_bindings),replete.editor.event_bindings);
var edit_cm_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),"replete-edit-light",new cljs.core.Keyword(null,"extraKeys","extraKeys",1380834830),extra_keys], null);
var edit_box_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node-id","node-id",779482292),"replete-input"], null),new cljs.core.Keyword(null,"cm-opts","cm-opts",-794223420),edit_cm_opts,new cljs.core.Keyword(null,"key-bindings","key-bindings",-1464217982),cljs.core.deref.call(null,key_bindings),new cljs.core.Keyword(null,"style","style",-496642736),replete.editor.box_style], null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"style","style",-496642736),replete.editor.main_style,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_split,new cljs.core.Keyword(null,"initial-split","initial-split",2072601727),(70),new cljs.core.Keyword(null,"panel-1","panel-1",998274139),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replete.editor.cmirror_eval_box,eval_box_opts], null),new cljs.core.Keyword(null,"panel-2","panel-2",244198907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replete.editor.edit_box,edit_box_opts], null)], null)], null);
});
;})(key_bindings))
});
