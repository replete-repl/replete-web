// Compiled by ClojureScript 1.10.520 {}
goog.provide('replete.cm_eval');
goog.require('cljs.core');
goog.require('cljsjs.codemirror');
goog.require('cljsjs.codemirror.addon.edit.matchbrackets');
goog.require('cljsjs.codemirror.addon.hint.show_hint');
goog.require('cljsjs.codemirror.mode.clojure');
goog.require('cljsjs.parinfer');
goog.require('cljsjs.parinfer_codemirror');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('re_frame.core');
goog.require('replete.cm');
goog.require('replete.events');
goog.require('replete.helpers');
replete.cm_eval.replete_dim_css = "color: #282828";
replete.cm_eval.parse_prepl_response = (function replete$cm_eval$parse_prepl_response(prepl_response){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,prepl_response)),new cljs.core.Keyword(null,"form-gap","form-gap",514237880),"\n",new cljs.core.Keyword(null,"output","output",-1105869043),clojure.string.trim_newline.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,new cljs.core.Keyword(null,"val","val",128701612),prepl_response))),new cljs.core.Keyword(null,"result-gap","result-gap",1343464295),"\n\n"], null);
});
replete.cm_eval.dim_text = (function replete$cm_eval$dim_text(cm,p__2020){
var map__2021 = p__2020;
var map__2021__$1 = (((((!((map__2021 == null))))?(((((map__2021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2021):map__2021);
var start = cljs.core.get.call(null,map__2021__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__2021__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var width = cljs.core.get.call(null,map__2021__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return cm.markText(({"line": start, "ch": (0)}),({"line": end, "ch": width}),({"css": replete.cm_eval.replete_dim_css}));
});
replete.cm_eval.mark_up_results = (function replete$cm_eval$mark_up_results(cm,mark_up_directions){
return cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,replete.cm_eval.dim_text,cm),mark_up_directions));
});
/**
 * Render the PREPL results and return markup data for forms
 */
replete.cm_eval.render_prepl_response_BANG_ = (function replete$cm_eval$render_prepl_response_BANG_(cm,prepl_response){
var cm_value = cm.getValue();
var form_start = cm.lastLine();
var map__2023 = replete.cm_eval.parse_prepl_response.call(null,prepl_response);
var map__2023__$1 = (((((!((map__2023 == null))))?(((((map__2023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2023):map__2023);
var form = cljs.core.get.call(null,map__2023__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var form_gap = cljs.core.get.call(null,map__2023__$1,new cljs.core.Keyword(null,"form-gap","form-gap",514237880));
var output = cljs.core.get.call(null,map__2023__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var result_gap = cljs.core.get.call(null,map__2023__$1,new cljs.core.Keyword(null,"result-gap","result-gap",1343464295));
cm.setValue([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cm_value),cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join(''));

var form_end = cm.lastLine();
var form_width = replete.helpers.max_line_width.call(null,form);
var response = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(form_gap),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(result_gap)].join('');
cm.setValue([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cm.getValue()),response].join(''));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),form_start,new cljs.core.Keyword(null,"end","end",-268185958),form_end,new cljs.core.Keyword(null,"width","width",-384071477),form_width], null);
});
replete.cm_eval.update_component = (function replete$cm_eval$update_component(cm_ref,mark_up_ref,preamble_markup,compnt){
var temp__5720__auto__ = new cljs.core.Keyword(null,"changes","changes",1492088).cljs$core$IFn$_invoke$arity$1(reagent.core.props.call(null,compnt));
if(cljs.core.truth_(temp__5720__auto__)){
var changes = temp__5720__auto__;
cljs.core.swap_BANG_.call(null,mark_up_ref,cljs.core.conj,replete.cm_eval.render_prepl_response_BANG_.call(null,cljs.core.deref.call(null,cm_ref),changes));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replete.events","mark-up-history","replete.events/mark-up-history",1325591605),cljs.core.deref.call(null,mark_up_ref)], null));

replete.cm_eval.dim_text.call(null,cljs.core.deref.call(null,cm_ref),preamble_markup);

replete.cm_eval.mark_up_results.call(null,cljs.core.deref.call(null,cm_ref),cljs.core.deref.call(null,mark_up_ref));

return cljs.core.deref.call(null,cm_ref).scrollIntoView(({"line": cljs.core.deref.call(null,cm_ref).lastLine()}));
} else {
return null;
}
});
replete.cm_eval.cmirror_eval_comp = (function replete$cm_eval$cmirror_eval_comp(opts){
var cmirror = cljs.core.atom.call(null,null);
var mark_up = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var map__2025 = opts;
var map__2025__$1 = (((((!((map__2025 == null))))?(((((map__2025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2025):map__2025);
var node_id = cljs.core.get.call(null,map__2025__$1,new cljs.core.Keyword(null,"node-id","node-id",779482292));
var preamble_markup = cljs.core.get.call(null,map__2025__$1,new cljs.core.Keyword(null,"preamble-markup","preamble-markup",1557120511));
var preamble_text = cljs.core.get.call(null,map__2025__$1,new cljs.core.Keyword(null,"preamble-text","preamble-text",-1480702866));
var cm_options = cljs.core.get.call(null,map__2025__$1,new cljs.core.Keyword(null,"cm-options","cm-options",-1418884096));
var cm_update = cljs.core.partial.call(null,replete.cm_eval.update_component,cmirror,mark_up,preamble_markup);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (cmirror,mark_up,map__2025,map__2025__$1,node_id,preamble_markup,preamble_text,cm_options,cm_update){
return (function replete$cm_eval$cmirror_eval_comp_$_cm_render(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),node_id,new cljs.core.Keyword(null,"auto-complete","auto-complete",244958848),new cljs.core.Keyword(null,"off","off",606440789)], null)], null);
});})(cmirror,mark_up,map__2025,map__2025__$1,node_id,preamble_markup,preamble_text,cm_options,cm_update))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (cmirror,mark_up,map__2025,map__2025__$1,node_id,preamble_markup,preamble_text,cm_options,cm_update){
return (function replete$cm_eval$cmirror_eval_comp_$_cm_did_mount(compnt){
var node_2027 = reagent.dom.dom_node.call(null,compnt);
var cm_2028 = replete.cm.cm_parinfer.call(null,node_2027,cm_options);
cm_2028.setValue(preamble_text);

replete.cm_eval.dim_text.call(null,cm_2028,preamble_markup);

cljs.core.reset_BANG_.call(null,cmirror,cm_2028);

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replete.events","eval-codemirror","replete.events/eval-codemirror",1530280838),cm_2028], null));

return cm_update.call(null,compnt);
});})(cmirror,mark_up,map__2025,map__2025__$1,node_id,preamble_markup,preamble_text,cm_options,cm_update))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (cmirror,mark_up,map__2025,map__2025__$1,node_id,preamble_markup,preamble_text,cm_options,cm_update){
return (function replete$cm_eval$cmirror_eval_comp_$_cm_will_unmount(){
cljs.core.deref.call(null,cmirror).toTextArea();

return cljs.core.reset_BANG_.call(null,cmirror,null);
});})(cmirror,mark_up,map__2025,map__2025__$1,node_id,preamble_markup,preamble_text,cm_options,cm_update))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),cm_update,new cljs.core.Keyword(null,"display-name","display-name",694513143),node_id], null));
});

//# sourceMappingURL=cm_eval.js.map
