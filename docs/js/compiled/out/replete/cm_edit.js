// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('replete.cm_edit');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('re_frame.core');
goog.require('replete.cm');
goog.require('replete.events');
replete.cm_edit.save_changes = (function replete$cm_edit$save_changes(cm,_){
var val = clojure.string.trim(cm.getValue());
if(cljs.core.seq(val)){
var G__11022 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$replete$events_SLASH_save_DASH_form,val], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__11022) : re_frame.core.dispatch.call(null,G__11022));
} else {
return null;
}
});
replete.cm_edit.update_codemirror = (function replete$cm_edit$update_codemirror(cm_ref,compnt){
var temp__5720__auto__ = cljs.core.cst$kw$changes.cljs$core$IFn$_invoke$arity$1(reagent.core.props(compnt));
if(cljs.core.truth_(temp__5720__auto__)){
var changes = temp__5720__auto__;
return cljs.core.deref(cm_ref).setValue((cljs.core.truth_(cljs.core.cst$kw$clear_DASH_input_DASH_form.cljs$core$IFn$_invoke$arity$1(changes))?"":changes));
} else {
return null;
}
});
replete.cm_edit.cmirror_edit_comp = (function replete$cm_edit$cmirror_edit_comp(opts){
var cmirror = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var map__11023 = opts;
var map__11023__$1 = (((((!((map__11023 == null))))?(((((map__11023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11023):map__11023);
var node_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11023__$1,cljs.core.cst$kw$node_DASH_id);
var update_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11023__$1,cljs.core.cst$kw$update_DASH_fn);
var change_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11023__$1,cljs.core.cst$kw$change_DASH_fn);
var cm_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11023__$1,cljs.core.cst$kw$cm_DASH_options);
var cm_update = cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var or__4131__auto__ = update_fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return replete.cm_edit.update_codemirror;
}
})(),cmirror);
var cm_save = (function (){var or__4131__auto__ = change_fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return replete.cm_edit.save_changes;
}
})();
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$reagent_DASH_render,((function (cmirror,map__11023,map__11023__$1,node_id,update_fn,change_fn,cm_options,cm_update,cm_save){
return (function replete$cm_edit$cmirror_edit_comp_$_cm_render(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,node_id,cljs.core.cst$kw$auto_DASH_complete,cljs.core.cst$kw$off], null)], null);
});})(cmirror,map__11023,map__11023__$1,node_id,update_fn,change_fn,cm_options,cm_update,cm_save))
,cljs.core.cst$kw$component_DASH_did_DASH_mount,((function (cmirror,map__11023,map__11023__$1,node_id,update_fn,change_fn,cm_options,cm_update,cm_save){
return (function replete$cm_edit$cmirror_edit_comp_$_cm_did_mount(compnt){
var node_11025 = reagent.dom.dom_node(compnt);
var cm_11026 = replete.cm.cm_parinfer(node_11025,cm_options);
cm_11026.on("change",cm_save);

cljs.core.reset_BANG_(cmirror,cm_11026);

return (cm_update.cljs$core$IFn$_invoke$arity$1 ? cm_update.cljs$core$IFn$_invoke$arity$1(compnt) : cm_update.call(null,compnt));
});})(cmirror,map__11023,map__11023__$1,node_id,update_fn,change_fn,cm_options,cm_update,cm_save))
,cljs.core.cst$kw$component_DASH_will_DASH_unmount,((function (cmirror,map__11023,map__11023__$1,node_id,update_fn,change_fn,cm_options,cm_update,cm_save){
return (function replete$cm_edit$cmirror_edit_comp_$_cm_will_unmount(){
cljs.core.deref(cmirror).toTextArea();

return cljs.core.reset_BANG_(cmirror,null);
});})(cmirror,map__11023,map__11023__$1,node_id,update_fn,change_fn,cm_options,cm_update,cm_save))
,cljs.core.cst$kw$component_DASH_did_DASH_update,cm_update,cljs.core.cst$kw$display_DASH_name,node_id], null));
});
