// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('replete.cm_eval');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('re_frame.core');
goog.require('replete.cm');
goog.require('replete.events');
goog.require('replete.helpers');
replete.cm_eval.replete_dim_css = "color: #282828";
replete.cm_eval.parse_prepl_response = (function replete$cm_eval$parse_prepl_response(prepl_response){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$form,cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(cljs.core.first(prepl_response)),cljs.core.cst$kw$form_DASH_gap,"\n",cljs.core.cst$kw$output,clojure.string.trim_newline(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$val,prepl_response))),cljs.core.cst$kw$result_DASH_gap,"\n\n"], null);
});
replete.cm_eval.dim_text = (function replete$cm_eval$dim_text(cm,p__21054){
var map__21055 = p__21054;
var map__21055__$1 = (((((!((map__21055 == null))))?(((((map__21055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21055):map__21055);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21055__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21055__$1,cljs.core.cst$kw$end);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21055__$1,cljs.core.cst$kw$width);
return cm.markText(({"line": start, "ch": (0)}),({"line": end, "ch": width}),({"css": replete.cm_eval.replete_dim_css}));
});
replete.cm_eval.mark_up_results = (function replete$cm_eval$mark_up_results(cm,mark_up_directions){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(replete.cm_eval.dim_text,cm),mark_up_directions));
});
/**
 * Render the PREPL results and return markup data for forms
 */
replete.cm_eval.render_prepl_response_BANG_ = (function replete$cm_eval$render_prepl_response_BANG_(cm,prepl_response){
var cm_value = cm.getValue();
var form_start = cm.lastLine();
var map__21057 = replete.cm_eval.parse_prepl_response(prepl_response);
var map__21057__$1 = (((((!((map__21057 == null))))?(((((map__21057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21057):map__21057);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21057__$1,cljs.core.cst$kw$form);
var form_gap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21057__$1,cljs.core.cst$kw$form_DASH_gap);
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21057__$1,cljs.core.cst$kw$output);
var result_gap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21057__$1,cljs.core.cst$kw$result_DASH_gap);
cm.setValue([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cm_value),cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join(''));

var form_end = cm.lastLine();
var form_width = replete.helpers.max_line_width(form);
var response = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(form_gap),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(result_gap)].join('');
cm.setValue([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cm.getValue()),response].join(''));

return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$start,form_start,cljs.core.cst$kw$end,form_end,cljs.core.cst$kw$width,form_width], null);
});
replete.cm_eval.update_component = (function replete$cm_eval$update_component(cm_ref,mark_up_ref,preamble_markup,compnt){
var temp__5720__auto__ = cljs.core.cst$kw$changes.cljs$core$IFn$_invoke$arity$1(reagent.core.props(compnt));
if(cljs.core.truth_(temp__5720__auto__)){
var changes = temp__5720__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mark_up_ref,cljs.core.conj,replete.cm_eval.render_prepl_response_BANG_(cljs.core.deref(cm_ref),changes));

var G__21059_21060 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$replete$events_SLASH_mark_DASH_up_DASH_history,cljs.core.deref(mark_up_ref)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21059_21060) : re_frame.core.dispatch.call(null,G__21059_21060));

replete.cm_eval.dim_text(cljs.core.deref(cm_ref),preamble_markup);

replete.cm_eval.mark_up_results(cljs.core.deref(cm_ref),cljs.core.deref(mark_up_ref));

return cljs.core.deref(cm_ref).scrollIntoView(({"line": cljs.core.deref(cm_ref).lastLine()}));
} else {
return null;
}
});
replete.cm_eval.cmirror_eval_comp = (function replete$cm_eval$cmirror_eval_comp(opts){
var cmirror = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var mark_up = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var map__21061 = opts;
var map__21061__$1 = (((((!((map__21061 == null))))?(((((map__21061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21061):map__21061);
var node_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21061__$1,cljs.core.cst$kw$node_DASH_id);
var preamble_markup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21061__$1,cljs.core.cst$kw$preamble_DASH_markup);
var preamble_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21061__$1,cljs.core.cst$kw$preamble_DASH_text);
var cm_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21061__$1,cljs.core.cst$kw$cm_DASH_options);
var cm_update = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(replete.cm_eval.update_component,cmirror,mark_up,preamble_markup);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$reagent_DASH_render,((function (cmirror,mark_up,map__21061,map__21061__$1,node_id,preamble_markup,preamble_text,cm_options,cm_update){
return (function replete$cm_eval$cmirror_eval_comp_$_cm_render(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,node_id,cljs.core.cst$kw$auto_DASH_complete,cljs.core.cst$kw$off], null)], null);
});})(cmirror,mark_up,map__21061,map__21061__$1,node_id,preamble_markup,preamble_text,cm_options,cm_update))
,cljs.core.cst$kw$component_DASH_did_DASH_mount,((function (cmirror,mark_up,map__21061,map__21061__$1,node_id,preamble_markup,preamble_text,cm_options,cm_update){
return (function replete$cm_eval$cmirror_eval_comp_$_cm_did_mount(compnt){
var node_21064 = reagent.dom.dom_node(compnt);
var cm_21065 = replete.cm.cm_parinfer(node_21064,cm_options);
cm_21065.setValue(preamble_text);

replete.cm_eval.dim_text(cm_21065,preamble_markup);

cljs.core.reset_BANG_(cmirror,cm_21065);

var G__21063_21066 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$replete$events_SLASH_eval_DASH_codemirror,cm_21065], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21063_21066) : re_frame.core.dispatch.call(null,G__21063_21066));

return (cm_update.cljs$core$IFn$_invoke$arity$1 ? cm_update.cljs$core$IFn$_invoke$arity$1(compnt) : cm_update.call(null,compnt));
});})(cmirror,mark_up,map__21061,map__21061__$1,node_id,preamble_markup,preamble_text,cm_options,cm_update))
,cljs.core.cst$kw$component_DASH_will_DASH_unmount,((function (cmirror,mark_up,map__21061,map__21061__$1,node_id,preamble_markup,preamble_text,cm_options,cm_update){
return (function replete$cm_eval$cmirror_eval_comp_$_cm_will_unmount(){
cljs.core.deref(cmirror).toTextArea();

return cljs.core.reset_BANG_(cmirror,null);
});})(cmirror,mark_up,map__21061,map__21061__$1,node_id,preamble_markup,preamble_text,cm_options,cm_update))
,cljs.core.cst$kw$component_DASH_did_DASH_update,cm_update,cljs.core.cst$kw$display_DASH_name,node_id], null));
});
