// Compiled by ClojureScript 1.10.520 {}
goog.provide('replete.cm_edit');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('re_frame.core');
goog.require('replete.cm');
goog.require('replete.events');
replete.cm_edit.save_changes = (function replete$cm_edit$save_changes(cm,_){
var val = clojure.string.trim.call(null,cm.getValue());
if(cljs.core.seq.call(null,val)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replete.events","save-form","replete.events/save-form",322041842),val], null));
} else {
return null;
}
});
replete.cm_edit.update_codemirror = (function replete$cm_edit$update_codemirror(cm_ref,compnt){
var temp__5720__auto__ = new cljs.core.Keyword(null,"changes","changes",1492088).cljs$core$IFn$_invoke$arity$1(reagent.core.props.call(null,compnt));
if(cljs.core.truth_(temp__5720__auto__)){
var changes = temp__5720__auto__;
return cljs.core.deref.call(null,cm_ref).setValue((cljs.core.truth_(new cljs.core.Keyword(null,"clear-input-form","clear-input-form",-2047880566).cljs$core$IFn$_invoke$arity$1(changes))?"":changes));
} else {
return null;
}
});
replete.cm_edit.cmirror_edit_comp = (function replete$cm_edit$cmirror_edit_comp(opts){
var cmirror = cljs.core.atom.call(null,null);
var map__2008 = opts;
var map__2008__$1 = (((((!((map__2008 == null))))?(((((map__2008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2008):map__2008);
var node_id = cljs.core.get.call(null,map__2008__$1,new cljs.core.Keyword(null,"node-id","node-id",779482292));
var update_fn = cljs.core.get.call(null,map__2008__$1,new cljs.core.Keyword(null,"update-fn","update-fn",711087313));
var change_fn = cljs.core.get.call(null,map__2008__$1,new cljs.core.Keyword(null,"change-fn","change-fn",1566440825));
var cm_options = cljs.core.get.call(null,map__2008__$1,new cljs.core.Keyword(null,"cm-options","cm-options",-1418884096));
var cm_update = cljs.core.partial.call(null,(function (){var or__4131__auto__ = update_fn;
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
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (cmirror,map__2008,map__2008__$1,node_id,update_fn,change_fn,cm_options,cm_update,cm_save){
return (function replete$cm_edit$cmirror_edit_comp_$_cm_render(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),node_id,new cljs.core.Keyword(null,"auto-complete","auto-complete",244958848),new cljs.core.Keyword(null,"off","off",606440789)], null)], null);
});})(cmirror,map__2008,map__2008__$1,node_id,update_fn,change_fn,cm_options,cm_update,cm_save))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (cmirror,map__2008,map__2008__$1,node_id,update_fn,change_fn,cm_options,cm_update,cm_save){
return (function replete$cm_edit$cmirror_edit_comp_$_cm_did_mount(compnt){
var node_2010 = reagent.dom.dom_node.call(null,compnt);
var cm_2011 = replete.cm.cm_parinfer.call(null,node_2010,cm_options);
cm_2011.on("change",cm_save);

cljs.core.reset_BANG_.call(null,cmirror,cm_2011);

return cm_update.call(null,compnt);
});})(cmirror,map__2008,map__2008__$1,node_id,update_fn,change_fn,cm_options,cm_update,cm_save))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (cmirror,map__2008,map__2008__$1,node_id,update_fn,change_fn,cm_options,cm_update,cm_save){
return (function replete$cm_edit$cmirror_edit_comp_$_cm_will_unmount(){
cljs.core.deref.call(null,cmirror).toTextArea();

return cljs.core.reset_BANG_.call(null,cmirror,null);
});})(cmirror,map__2008,map__2008__$1,node_id,update_fn,change_fn,cm_options,cm_update,cm_save))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),cm_update,new cljs.core.Keyword(null,"display-name","display-name",694513143),node_id], null));
});
