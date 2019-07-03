// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_com.typeahead');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('re_com.misc');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
goog.require('goog.events.KeyCodes');

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__18720){
var map__18721 = p__18720;
var map__18721__$1 = (((((!((map__18721 == null))))?(((((map__18721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18721):map__18721);
var args = map__18721__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18721__$1,cljs.core.cst$kw$on_DASH_change);
var rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18721__$1,cljs.core.cst$kw$rigid_QMARK_);
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18721__$1,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_);
var immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18721__$1,cljs.core.cst$kw$immediate_DASH_model_DASH_update_QMARK_);
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18721__$1,cljs.core.cst$kw$data_DASH_source);
var suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18721__$1,cljs.core.cst$kw$suggestion_DASH_to_DASH_string);
var debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18721__$1,cljs.core.cst$kw$debounce_DASH_delay);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18721__$1,cljs.core.cst$kw$model);
var external_model_value = re_com.util.deref_or_value(model);
var G__18723 = (function (){var c_input = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$waiting_QMARK_,cljs.core.cst$kw$suggestion_DASH_to_DASH_string,cljs.core.cst$kw$displaying_DASH_suggestion_QMARK_,cljs.core.cst$kw$input_DASH_text,cljs.core.cst$kw$rigid_QMARK_,cljs.core.cst$kw$data_DASH_source,cljs.core.cst$kw$immediate_DASH_model_DASH_update_QMARK_,cljs.core.cst$kw$c_DASH_search,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_,cljs.core.cst$kw$suggestions,cljs.core.cst$kw$c_DASH_input,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$external_DASH_model,cljs.core.cst$kw$model],[false,(function (){var or__4131__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,immediate_model_update_QMARK_,(re_com.typeahead.debounce.cljs$core$IFn$_invoke$arity$2 ? re_com.typeahead.debounce.cljs$core$IFn$_invoke$arity$2(c_input,debounce_delay) : re_com.typeahead.debounce.call(null,c_input,debounce_delay)),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value(model),re_com.util.deref_or_value(model)]);
})();
if(cljs.core.truth_(external_model_value)){
return (re_com.typeahead.display_suggestion.cljs$core$IFn$_invoke$arity$2 ? re_com.typeahead.display_suggestion.cljs$core$IFn$_invoke$arity$2(G__18723,external_model_value) : re_com.typeahead.display_suggestion.call(null,G__18723,external_model_value));
} else {
return G__18723;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__18724,event){
var map__18725 = p__18724;
var map__18725__$1 = (((((!((map__18725 == null))))?(((((map__18725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18725):map__18725);
var state = map__18725__$1;
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18725__$1,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_);
var rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18725__$1,cljs.core.cst$kw$rigid_QMARK_);
var immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18725__$1,cljs.core.cst$kw$immediate_DASH_model_DASH_update_QMARK_);
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var immediate_model_update_QMARK___$1 = re_com.util.deref_or_value(immediate_model_update_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value(rigid_QMARK_);
var G__18727 = event;
var G__18727__$1 = (((G__18727 instanceof cljs.core.Keyword))?G__18727.fqn:null);
switch (G__18727__$1) {
case "input-text-blurred":
var and__4120__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(rigid_QMARK___$1);
} else {
return and__4120__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not(change_on_blur_QMARK___$1);

break;
case "input-text-changed":
var and__4120__auto__ = cljs.core.not(rigid_QMARK___$1);
if(and__4120__auto__){
var or__4131__auto__ = cljs.core.not(change_on_blur_QMARK___$1);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return immediate_model_update_QMARK___$1;
}
} else {
return and__4120__auto__;
}

break;
default:
return false;

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__18729,event){
var map__18730 = p__18729;
var map__18730__$1 = (((((!((map__18730 == null))))?(((((map__18730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18730):map__18730);
var state = map__18730__$1;
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18730__$1,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_);
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var G__18732 = event;
var G__18732__$1 = (((G__18732 instanceof cljs.core.Keyword))?G__18732.fqn:null);
switch (G__18732__$1) {
case "suggestion-activated":
return cljs.core.not(change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__18734,new_value){
var map__18735 = p__18734;
var map__18735__$1 = (((((!((map__18735 == null))))?(((((map__18735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18735):map__18735);
var state = map__18735__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18735__$1,cljs.core.cst$kw$on_DASH_change);
if(cljs.core.truth_(on_change)){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(new_value) : on_change.call(null,new_value));
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$model,new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__18737,suggestion){
var map__18738 = p__18737;
var map__18738__$1 = (((((!((map__18738 == null))))?(((((map__18738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18738):map__18738);
var state = map__18738__$1;
var suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18738__$1,cljs.core.cst$kw$suggestion_DASH_to_DASH_string);
var suggestion_string = (suggestion_to_string.cljs$core$IFn$_invoke$arity$1 ? suggestion_to_string.cljs$core$IFn$_invoke$arity$1(suggestion) : suggestion_to_string.call(null,suggestion));
var G__18740 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__18740,cljs.core.cst$kw$input_DASH_text,suggestion_string,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$displaying_DASH_suggestion_QMARK_,true], 0));
} else {
return G__18740;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$suggestions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$suggestion_DASH_active_DASH_index], 0));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__18741,index){
var map__18742 = p__18741;
var map__18742__$1 = (((((!((map__18742 == null))))?(((((map__18742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18742):map__18742);
var state = map__18742__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18742__$1,cljs.core.cst$kw$suggestions);
var suggestion = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(suggestions,index);
var G__18744 = state;
var G__18744__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18744,cljs.core.cst$kw$suggestion_DASH_active_DASH_index,index)
;
var G__18744__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,cljs.core.cst$kw$suggestion_DASH_activated))?re_com.typeahead.update_model(G__18744__$1,suggestion):G__18744__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_(state,cljs.core.cst$kw$suggestion_DASH_activated))){
return re_com.typeahead.display_suggestion(G__18744__$2,suggestion);
} else {
return G__18744__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__18745,index){
var map__18746 = p__18745;
var map__18746__$1 = (((((!((map__18746 == null))))?(((((map__18746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18746):map__18746);
var state = map__18746__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18746__$1,cljs.core.cst$kw$suggestions);
var suggestion = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(suggestions,index);
return re_com.typeahead.clear_suggestions(re_com.typeahead.display_suggestion(re_com.typeahead.update_model(re_com.typeahead.activate_suggestion_by_index(state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__18748){
var map__18749 = p__18748;
var map__18749__$1 = (((((!((map__18749 == null))))?(((((map__18749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18749):map__18749);
var state = map__18749__$1;
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18749__$1,cljs.core.cst$kw$suggestion_DASH_active_DASH_index);
var G__18751 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index(G__18751,suggestion_active_index);
} else {
return G__18751;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod((count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__18752){
var map__18753 = p__18752;
var map__18753__$1 = (((((!((map__18753 == null))))?(((((map__18753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18753):map__18753);
var state = map__18753__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18753__$1,cljs.core.cst$kw$suggestions);
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18753__$1,cljs.core.cst$kw$suggestion_DASH_active_DASH_index);
var G__18755 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index(G__18755,re_com.typeahead.wrap(((function (){var or__4131__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count(suggestions)));
} else {
return G__18755;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__18756){
var map__18757 = p__18756;
var map__18757__$1 = (((((!((map__18757 == null))))?(((((map__18757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18757):map__18757);
var state = map__18757__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18757__$1,cljs.core.cst$kw$suggestions);
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18757__$1,cljs.core.cst$kw$suggestion_DASH_active_DASH_index);
var G__18759 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index(G__18759,re_com.typeahead.wrap(((function (){var or__4131__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count(suggestions)));
} else {
return G__18759;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__18760 = state;
var G__18760__$1 = re_com.typeahead.clear_suggestions(G__18760)
;
var G__18760__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__18760__$1,cljs.core.cst$kw$waiting_QMARK_,false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$input_DASH_text,"",cljs.core.cst$kw$displaying_DASH_suggestion_QMARK_,false], 0))
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,cljs.core.cst$kw$input_DASH_text_DASH_changed))){
return re_com.typeahead.update_model(G__18760__$2,null);
} else {
return G__18760__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$suggestions,suggestions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$waiting_QMARK_,false,cljs.core.cst$kw$suggestion_DASH_active_DASH_index,null], 0));
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__18761){
var map__18762 = p__18761;
var map__18762__$1 = (((((!((map__18762 == null))))?(((((map__18762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18762):map__18762);
var state = map__18762__$1;
var input_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18762__$1,cljs.core.cst$kw$input_DASH_text);
var displaying_suggestion_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18762__$1,cljs.core.cst$kw$displaying_DASH_suggestion_QMARK_);
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not(displaying_suggestion_QMARK_);
if(and__4120__auto__){
return re_com.typeahead.event_updates_model_QMARK_(state,cljs.core.cst$kw$input_DASH_text_DASH_blurred);
} else {
return and__4120__auto__;
}
})())){
return re_com.typeahead.update_model(input_text,state);
} else {
return null;
}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(re_com.typeahead.reset_typeahead(state),cljs.core.cst$kw$data_DASH_source,data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions(re_com.typeahead.display_suggestion(re_com.typeahead.update_model(state,new_value),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__5718__auto__ = (function (){var G__18765 = text;
var G__18766 = ((function (G__18765){
return (function (p1__18764_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,p1__18764_SHARP_);
});})(G__18765))
;
return (data_source.cljs$core$IFn$_invoke$arity$2 ? data_source.cljs$core$IFn$_invoke$arity$2(G__18765,G__18766) : data_source.call(null,G__18765,G__18766));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var return_value = temp__5718__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc,cljs.core.cst$kw$waiting_QMARK_,true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__16809__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16809__auto__){
return (function (){
var f__16810__auto__ = (function (){var switch__16792__auto__ = ((function (c__16809__auto__){
return (function (state_18784){
var state_val_18785 = (state_18784[(1)]);
if((state_val_18785 === (1))){
var state_18784__$1 = state_18784;
var statearr_18786_18799 = state_18784__$1;
(statearr_18786_18799[(2)] = null);

(statearr_18786_18799[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18785 === (2))){
var state_18784__$1 = state_18784;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18784__$1,(4),c_search);
} else {
if((state_val_18785 === (3))){
var inst_18782 = (state_18784[(2)]);
var state_18784__$1 = state_18784;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18784__$1,inst_18782);
} else {
if((state_val_18785 === (4))){
var inst_18769 = (state_18784[(7)]);
var inst_18769__$1 = (state_18784[(2)]);
var inst_18770 = cljs.core.deref(state_atom);
var inst_18771 = cljs.core.cst$kw$data_DASH_source.cljs$core$IFn$_invoke$arity$1(inst_18770);
var inst_18772 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",inst_18769__$1);
var state_18784__$1 = (function (){var statearr_18787 = state_18784;
(statearr_18787[(8)] = inst_18771);

(statearr_18787[(7)] = inst_18769__$1);

return statearr_18787;
})();
if(inst_18772){
var statearr_18788_18800 = state_18784__$1;
(statearr_18788_18800[(1)] = (5));

} else {
var statearr_18789_18801 = state_18784__$1;
(statearr_18789_18801[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18785 === (5))){
var inst_18771 = (state_18784[(8)]);
var inst_18774 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.reset_typeahead);
var inst_18775 = re_com.typeahead.search_data_source_BANG_(inst_18771,state_atom,"");
var state_18784__$1 = (function (){var statearr_18790 = state_18784;
(statearr_18790[(9)] = inst_18774);

return statearr_18790;
})();
var statearr_18791_18802 = state_18784__$1;
(statearr_18791_18802[(2)] = inst_18775);

(statearr_18791_18802[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18785 === (6))){
var inst_18771 = (state_18784[(8)]);
var inst_18769 = (state_18784[(7)]);
var inst_18777 = re_com.typeahead.search_data_source_BANG_(inst_18771,state_atom,inst_18769);
var state_18784__$1 = state_18784;
var statearr_18792_18803 = state_18784__$1;
(statearr_18792_18803[(2)] = inst_18777);

(statearr_18792_18803[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18785 === (7))){
var inst_18779 = (state_18784[(2)]);
var state_18784__$1 = (function (){var statearr_18793 = state_18784;
(statearr_18793[(10)] = inst_18779);

return statearr_18793;
})();
var statearr_18794_18804 = state_18784__$1;
(statearr_18794_18804[(2)] = null);

(statearr_18794_18804[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__16809__auto__))
;
return ((function (switch__16792__auto__,c__16809__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__16793__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__16793__auto____0 = (function (){
var statearr_18795 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18795[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__16793__auto__);

(statearr_18795[(1)] = (1));

return statearr_18795;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__16793__auto____1 = (function (state_18784){
while(true){
var ret_value__16794__auto__ = (function (){try{while(true){
var result__16795__auto__ = switch__16792__auto__(state_18784);
if(cljs.core.keyword_identical_QMARK_(result__16795__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16795__auto__;
}
break;
}
}catch (e18796){if((e18796 instanceof Object)){
var ex__16796__auto__ = e18796;
var statearr_18797_18805 = state_18784;
(statearr_18797_18805[(5)] = ex__16796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18784);

return cljs.core.cst$kw$recur;
} else {
throw e18796;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16794__auto__,cljs.core.cst$kw$recur)){
var G__18806 = state_18784;
state_18784 = G__18806;
continue;
} else {
return ret_value__16794__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__16793__auto__ = function(state_18784){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__16793__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__16793__auto____1.call(this,state_18784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__16793__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__16793__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__16793__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__16793__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__16793__auto__;
})()
;})(switch__16792__auto__,c__16809__auto__))
})();
var state__16811__auto__ = (function (){var statearr_18798 = (f__16810__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16810__auto__.cljs$core$IFn$_invoke$arity$0() : f__16810__auto__.call(null));
(statearr_18798[(6)] = c__16809__auto__);

return statearr_18798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16811__auto__);
});})(c__16809__auto__))
);

return c__16809__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__18808 = cljs.core.deref(state_atom);
var map__18808__$1 = (((((!((map__18808 == null))))?(((((map__18808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18808):map__18808);
var state = map__18808__$1;
var input_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18808__$1,cljs.core.cst$kw$input_DASH_text);
var c_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18808__$1,cljs.core.cst$kw$c_DASH_input);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_text,input_text)){
return state;
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c_input,new_text);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,((function (map__18808,map__18808__$1,state,input_text,c_input){
return (function (p1__18807_SHARP_){
var G__18810 = p1__18807_SHARP_;
var G__18810__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__18810,cljs.core.cst$kw$input_DASH_text,new_text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$displaying_DASH_suggestion_QMARK_,false], 0))
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,cljs.core.cst$kw$input_DASH_text_DASH_changed))){
return re_com.typeahead.update_model(G__18810__$1,new_text);
} else {
return G__18810__$1;
}
});})(map__18808,map__18808__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__18811 = cljs.core._EQ_;
var expr__18812 = event.which;
if(cljs.core.truth_((pred__18811.cljs$core$IFn$_invoke$arity$2 ? pred__18811.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.UP,expr__18812) : pred__18811.call(null,goog.events.KeyCodes.UP,expr__18812)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_((pred__18811.cljs$core$IFn$_invoke$arity$2 ? pred__18811.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.DOWN,expr__18812) : pred__18811.call(null,goog.events.KeyCodes.DOWN,expr__18812)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_((pred__18811.cljs$core$IFn$_invoke$arity$2 ? pred__18811.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.ENTER,expr__18812) : pred__18811.call(null,goog.events.KeyCodes.ENTER,expr__18812)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_((pred__18811.cljs$core$IFn$_invoke$arity$2 ? pred__18811.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.ESC,expr__18812) : pred__18811.call(null,goog.events.KeyCodes.ESC,expr__18812)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,cljs.core.PersistentVector.EMPTY);
} else {
if(cljs.core.truth_((pred__18811.cljs$core$IFn$_invoke$arity$2 ? pred__18811.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.TAB,expr__18812) : pred__18811.call(null,goog.events.KeyCodes.TAB,expr__18812)))){
if(cljs.core.truth_(cljs.core.not_empty(cljs.core.cst$kw$suggestions.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_atom))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$data_DASH_source,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"fn",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,null,cljs.core.cst$kw$type,"string -> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,true,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"false"], null),", invoke it on every character typed.)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$immediate_DASH_model_DASH_update_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"update model with currently entered text on every keystroke (similar to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":change-on-blur?"], null)," but no changes to model if mouse is over suggestions)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$name,cljs.core.cst$kw$model,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,null,cljs.core.cst$kw$type,"object | atom",cljs.core.cst$kw$description,"the initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$debounce_DASH_delay,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(250),cljs.core.cst$kw$type,"integer",cljs.core.cst$kw$validate_DASH_fn,cljs.core.integer_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"after receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$render_DASH_suggestion,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"render fn",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$suggestion_DASH_to_DASH_string,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"suggestion -> string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"when a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$rigid_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,true,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$status,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.input_status_type_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$status_DASH_icon_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$status_DASH_tooltip,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$placeholder,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"250px",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$disabled_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the textbox)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override (applies to the textbox)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$bold,"the outer container"], null),", rather than the textbox)"], null)], null)], null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__4736__auto__ = [];
var len__4730__auto___18836 = arguments.length;
var i__4731__auto___18837 = (0);
while(true){
if((i__4731__auto___18837 < len__4730__auto___18836)){
args__4736__auto__.push((arguments[i__4731__auto___18837]));

var G__18838 = (i__4731__auto___18837 + (1));
i__4731__auto___18837 = G__18838;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__18816){
var map__18817 = p__18816;
var map__18817__$1 = (((((!((map__18817 == null))))?(((((map__18817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18817):map__18817);
var args = map__18817__$1;
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.typeahead.typeahead_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["typeahead"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__18819 = re_com.typeahead.make_typeahead_state(args);
var map__18819__$1 = (((((!((map__18819 == null))))?(((((map__18819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18819):map__18819);
var state = map__18819__$1;
var c_search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18819__$1,cljs.core.cst$kw$c_DASH_search);
var c_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18819__$1,cljs.core.cst$kw$c_DASH_input);
var state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(state);
var input_text_model = reagent.core.cursor(state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_DASH_text], null));
re_com.typeahead.search_data_source_loop_BANG_(state_atom,c_search);

return ((function (map__18819,map__18819__$1,state,c_search,c_input,state_atom,input_text_model,map__18817,map__18817__$1,args){
return (function() { 
var G__18839__delegate = function (p__18821){
var map__18822 = p__18821;
var map__18822__$1 = (((((!((map__18822 == null))))?(((((map__18822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18822):map__18822);
var args__$1 = map__18822__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18822__$1,cljs.core.cst$kw$disabled_QMARK_);
var status_icon_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18822__$1,cljs.core.cst$kw$status_DASH_icon_QMARK_);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18822__$1,cljs.core.cst$kw$height);
var status_tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18822__$1,cljs.core.cst$kw$status_DASH_tooltip);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18822__$1,cljs.core.cst$kw$model);
var _debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18822__$1,cljs.core.cst$kw$_debounce_DASH_delay);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18822__$1,cljs.core.cst$kw$attr);
var _on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18822__$1,cljs.core.cst$kw$_on_DASH_change);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18822__$1,cljs.core.cst$kw$placeholder);
var render_suggestion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18822__$1,cljs.core.cst$kw$render_DASH_suggestion);
var _suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18822__$1,cljs.core.cst$kw$_suggestion_DASH_to_DASH_string);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18822__$1,cljs.core.cst$kw$width);
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18822__$1,cljs.core.cst$kw$data_DASH_source);
var _rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18822__$1,cljs.core.cst$kw$_rigid_QMARK_);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18822__$1,cljs.core.cst$kw$style);
var _change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18822__$1,cljs.core.cst$kw$_change_DASH_on_DASH_blur_QMARK_);
var _immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18822__$1,cljs.core.cst$kw$_immediate_DASH_model_DASH_update_QMARK_);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18822__$1,cljs.core.cst$kw$status);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18822__$1,cljs.core.cst$kw$class);
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.typeahead.typeahead_args_desc),args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["typeahead"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__18824 = cljs.core.deref(state_atom);
var map__18824__$1 = (((((!((map__18824 == null))))?(((((map__18824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18824):map__18824);
var state__$1 = map__18824__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18824__$1,cljs.core.cst$kw$suggestions);
var waiting_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18824__$1,cljs.core.cst$kw$waiting_QMARK_);
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18824__$1,cljs.core.cst$kw$suggestion_DASH_active_DASH_index);
var external_model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18824__$1,cljs.core.cst$kw$external_DASH_model);
var last_data_source = cljs.core.cst$kw$data_DASH_source.cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value(model);
var width__$1 = (function (){var or__4131__auto__ = width;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(last_data_source,data_source)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(latest_external_model,external_model)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,cljs.core.cst$kw$class,"rc-typeahead",cljs.core.cst$kw$attr,attr,cljs.core.cst$kw$width,width__$1,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,cljs.core.cst$kw$model,input_text_model,cljs.core.cst$kw$class,class$,cljs.core.cst$kw$style,style,cljs.core.cst$kw$disabled_QMARK_,disabled_QMARK_,cljs.core.cst$kw$status_DASH_icon_QMARK_,status_icon_QMARK_,cljs.core.cst$kw$status,status,cljs.core.cst$kw$status_DASH_tooltip,status_tooltip,cljs.core.cst$kw$width,width__$1,cljs.core.cst$kw$height,height,cljs.core.cst$kw$placeholder,placeholder,cljs.core.cst$kw$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.typeahead.input_text_on_change_BANG_,state_atom),cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_,false,cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_key_DASH_down,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.typeahead.input_text_on_key_down_BANG_,state_atom),cljs.core.cst$kw$on_DASH_focus,((function (map__18824,map__18824__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18822,map__18822__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__18819,map__18819__$1,state,c_search,c_input,state_atom,input_text_model,map__18817,map__18817__$1,args){
return (function (){
return cljs.core.List.EMPTY;
});})(map__18824,map__18824__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18822,map__18822__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__18819,map__18819__$1,state,c_search,c_input,state_atom,input_text_model,map__18817,map__18817__$1,args))
,cljs.core.cst$kw$on_DASH_blur,((function (map__18824,map__18824__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18822,map__18822__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__18819,map__18819__$1,state,c_search,c_input,state_atom,input_text_model,map__18817,map__18817__$1,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,cljs.core.PersistentVector.EMPTY);
});})(map__18824,map__18824__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18822,map__18822__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__18819,map__18819__$1,state,c_search,c_input,state_atom,input_text_model,map__18817,map__18817__$1,args))
], null)], null),(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.not_empty(suggestions);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,"relative"], null),cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,cljs.core.cst$kw$class,"rc-typeahead-suggestions-container",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,cljs.core.cst$kw$size,cljs.core.cst$kw$small,cljs.core.cst$kw$class,"rc-typeahead-throbber"], null)], null):null),(function (){var iter__4523__auto__ = ((function (map__18824,map__18824__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18822,map__18822__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__18819,map__18819__$1,state,c_search,c_input,state_atom,input_text_model,map__18817,map__18817__$1,args){
return (function re_com$typeahead$iter__18826(s__18827){
return (new cljs.core.LazySeq(null,((function (map__18824,map__18824__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18822,map__18822__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__18819,map__18819__$1,state,c_search,c_input,state_atom,input_text_model,map__18817,map__18817__$1,args){
return (function (){
var s__18827__$1 = s__18827;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__18827__$1);
if(temp__5720__auto__){
var s__18827__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18827__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__18827__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__18829 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__18828 = (0);
while(true){
if((i__18828 < size__4522__auto__)){
var vec__18830 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__18828);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18830,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18830,(1),null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_active_index,i);
cljs.core.chunk_append(b__18829,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$child,(cljs.core.truth_(render_suggestion)?(render_suggestion.cljs$core$IFn$_invoke$arity$1 ? render_suggestion.cljs$core$IFn$_invoke$arity$1(s) : render_suggestion.call(null,s)):s),cljs.core.cst$kw$class,["rc-typeahead-suggestion",((selected_QMARK_)?" active":null)].join(''),cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (i__18828,selected_QMARK_,vec__18830,i,s,c__4521__auto__,size__4522__auto__,b__18829,s__18827__$2,temp__5720__auto__,map__18824,map__18824__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18822,map__18822__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__18819,map__18819__$1,state,c_search,c_input,state_atom,input_text_model,map__18817,map__18817__$1,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__18828,selected_QMARK_,vec__18830,i,s,c__4521__auto__,size__4522__auto__,b__18829,s__18827__$2,temp__5720__auto__,map__18824,map__18824__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18822,map__18822__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__18819,map__18819__$1,state,c_search,c_input,state_atom,input_text_model,map__18817,map__18817__$1,args))
,cljs.core.cst$kw$on_DASH_mouse_DASH_down,((function (i__18828,selected_QMARK_,vec__18830,i,s,c__4521__auto__,size__4522__auto__,b__18829,s__18827__$2,temp__5720__auto__,map__18824,map__18824__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18822,map__18822__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__18819,map__18819__$1,state,c_search,c_input,state_atom,input_text_model,map__18817,map__18817__$1,args){
return (function (p1__18814_SHARP_){
p1__18814_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__18828,selected_QMARK_,vec__18830,i,s,c__4521__auto__,size__4522__auto__,b__18829,s__18827__$2,temp__5720__auto__,map__18824,map__18824__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18822,map__18822__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__18819,map__18819__$1,state,c_search,c_input,state_atom,input_text_model,map__18817,map__18817__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null)));

var G__18840 = (i__18828 + (1));
i__18828 = G__18840;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18829),re_com$typeahead$iter__18826(cljs.core.chunk_rest(s__18827__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18829),null);
}
} else {
var vec__18833 = cljs.core.first(s__18827__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18833,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18833,(1),null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_active_index,i);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$child,(cljs.core.truth_(render_suggestion)?(render_suggestion.cljs$core$IFn$_invoke$arity$1 ? render_suggestion.cljs$core$IFn$_invoke$arity$1(s) : render_suggestion.call(null,s)):s),cljs.core.cst$kw$class,["rc-typeahead-suggestion",((selected_QMARK_)?" active":null)].join(''),cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (selected_QMARK_,vec__18833,i,s,s__18827__$2,temp__5720__auto__,map__18824,map__18824__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18822,map__18822__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__18819,map__18819__$1,state,c_search,c_input,state_atom,input_text_model,map__18817,map__18817__$1,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__18833,i,s,s__18827__$2,temp__5720__auto__,map__18824,map__18824__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18822,map__18822__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__18819,map__18819__$1,state,c_search,c_input,state_atom,input_text_model,map__18817,map__18817__$1,args))
,cljs.core.cst$kw$on_DASH_mouse_DASH_down,((function (selected_QMARK_,vec__18833,i,s,s__18827__$2,temp__5720__auto__,map__18824,map__18824__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18822,map__18822__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__18819,map__18819__$1,state,c_search,c_input,state_atom,input_text_model,map__18817,map__18817__$1,args){
return (function (p1__18814_SHARP_){
p1__18814_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__18833,i,s,s__18827__$2,temp__5720__auto__,map__18824,map__18824__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18822,map__18822__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__18819,map__18819__$1,state,c_search,c_input,state_atom,input_text_model,map__18817,map__18817__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null)),re_com$typeahead$iter__18826(cljs.core.rest(s__18827__$2)));
}
} else {
return null;
}
break;
}
});})(map__18824,map__18824__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18822,map__18822__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__18819,map__18819__$1,state,c_search,c_input,state_atom,input_text_model,map__18817,map__18817__$1,args))
,null,null));
});})(map__18824,map__18824__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18822,map__18822__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__18819,map__18819__$1,state,c_search,c_input,state_atom,input_text_model,map__18817,map__18817__$1,args))
;
return iter__4523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__18839 = function (var_args){
var p__18821 = null;
if (arguments.length > 0) {
var G__18841__i = 0, G__18841__a = new Array(arguments.length -  0);
while (G__18841__i < G__18841__a.length) {G__18841__a[G__18841__i] = arguments[G__18841__i + 0]; ++G__18841__i;}
  p__18821 = new cljs.core.IndexedSeq(G__18841__a,0,null);
} 
return G__18839__delegate.call(this,p__18821);};
G__18839.cljs$lang$maxFixedArity = 0;
G__18839.cljs$lang$applyTo = (function (arglist__18842){
var p__18821 = cljs.core.seq(arglist__18842);
return G__18839__delegate(p__18821);
});
G__18839.cljs$core$IFn$_invoke$arity$variadic = G__18839__delegate;
return G__18839;
})()
;
;})(map__18819,map__18819__$1,state,c_search,c_input,state_atom,input_text_model,map__18817,map__18817__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq18815){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18815));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__16809__auto___18923 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16809__auto___18923,out){
return (function (){
var f__16810__auto__ = (function (){var switch__16792__auto__ = ((function (c__16809__auto___18923,out){
return (function (state_18893){
var state_val_18894 = (state_18893[(1)]);
if((state_val_18894 === (7))){
var inst_18848 = (state_18893[(2)]);
var state_18893__$1 = state_18893;
var statearr_18895_18924 = state_18893__$1;
(statearr_18895_18924[(2)] = inst_18848);

(statearr_18895_18924[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18894 === (1))){
var inst_18843 = null;
var state_18893__$1 = (function (){var statearr_18896 = state_18893;
(statearr_18896[(7)] = inst_18843);

return statearr_18896;
})();
var statearr_18897_18925 = state_18893__$1;
(statearr_18897_18925[(2)] = null);

(statearr_18897_18925[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18894 === (4))){
var state_18893__$1 = state_18893;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18893__$1,(7),in$);
} else {
if((state_val_18894 === (15))){
var inst_18878 = (state_18893[(2)]);
var state_18893__$1 = (function (){var statearr_18898 = state_18893;
(statearr_18898[(8)] = inst_18878);

return statearr_18898;
})();
var statearr_18899_18926 = state_18893__$1;
(statearr_18899_18926[(2)] = null);

(statearr_18899_18926[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18894 === (13))){
var inst_18866 = (state_18893[(9)]);
var inst_18880 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18866,cljs.core.cst$kw$default);
var state_18893__$1 = state_18893;
if(inst_18880){
var statearr_18900_18927 = state_18893__$1;
(statearr_18900_18927[(1)] = (16));

} else {
var statearr_18901_18928 = state_18893__$1;
(statearr_18901_18928[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18894 === (6))){
var inst_18852 = (state_18893[(10)]);
var inst_18851 = (state_18893[(2)]);
var inst_18852__$1 = cljs.core.async.timeout(ms);
var inst_18860 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18861 = [in$,inst_18852__$1];
var inst_18862 = (new cljs.core.PersistentVector(null,2,(5),inst_18860,inst_18861,null));
var state_18893__$1 = (function (){var statearr_18902 = state_18893;
(statearr_18902[(11)] = inst_18851);

(statearr_18902[(10)] = inst_18852__$1);

return statearr_18902;
})();
return cljs.core.async.ioc_alts_BANG_(state_18893__$1,(8),inst_18862);
} else {
if((state_val_18894 === (17))){
var state_18893__$1 = state_18893;
var statearr_18903_18929 = state_18893__$1;
(statearr_18903_18929[(2)] = null);

(statearr_18903_18929[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18894 === (3))){
var inst_18891 = (state_18893[(2)]);
var state_18893__$1 = state_18893;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18893__$1,inst_18891);
} else {
if((state_val_18894 === (12))){
var inst_18851 = (state_18893[(11)]);
var state_18893__$1 = state_18893;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18893__$1,(15),out,inst_18851);
} else {
if((state_val_18894 === (2))){
var inst_18843 = (state_18893[(7)]);
var inst_18845 = (inst_18843 == null);
var state_18893__$1 = state_18893;
if(cljs.core.truth_(inst_18845)){
var statearr_18904_18930 = state_18893__$1;
(statearr_18904_18930[(1)] = (4));

} else {
var statearr_18905_18931 = state_18893__$1;
(statearr_18905_18931[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18894 === (11))){
var inst_18888 = (state_18893[(2)]);
var inst_18843 = inst_18888;
var state_18893__$1 = (function (){var statearr_18906 = state_18893;
(statearr_18906[(7)] = inst_18843);

return statearr_18906;
})();
var statearr_18907_18932 = state_18893__$1;
(statearr_18907_18932[(2)] = null);

(statearr_18907_18932[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18894 === (9))){
var inst_18864 = (state_18893[(12)]);
var inst_18872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18864,(0),null);
var inst_18873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18864,(1),null);
var state_18893__$1 = (function (){var statearr_18908 = state_18893;
(statearr_18908[(13)] = inst_18873);

return statearr_18908;
})();
var statearr_18909_18933 = state_18893__$1;
(statearr_18909_18933[(2)] = inst_18872);

(statearr_18909_18933[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18894 === (5))){
var inst_18843 = (state_18893[(7)]);
var state_18893__$1 = state_18893;
var statearr_18910_18934 = state_18893__$1;
(statearr_18910_18934[(2)] = inst_18843);

(statearr_18910_18934[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18894 === (14))){
var inst_18886 = (state_18893[(2)]);
var state_18893__$1 = state_18893;
var statearr_18911_18935 = state_18893__$1;
(statearr_18911_18935[(2)] = inst_18886);

(statearr_18911_18935[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18894 === (16))){
var inst_18865 = (state_18893[(14)]);
var state_18893__$1 = state_18893;
var statearr_18912_18936 = state_18893__$1;
(statearr_18912_18936[(2)] = inst_18865);

(statearr_18912_18936[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18894 === (10))){
var inst_18852 = (state_18893[(10)]);
var inst_18866 = (state_18893[(9)]);
var inst_18875 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18866,inst_18852);
var state_18893__$1 = state_18893;
if(inst_18875){
var statearr_18913_18937 = state_18893__$1;
(statearr_18913_18937[(1)] = (12));

} else {
var statearr_18914_18938 = state_18893__$1;
(statearr_18914_18938[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18894 === (18))){
var inst_18884 = (state_18893[(2)]);
var state_18893__$1 = state_18893;
var statearr_18915_18939 = state_18893__$1;
(statearr_18915_18939[(2)] = inst_18884);

(statearr_18915_18939[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18894 === (8))){
var inst_18864 = (state_18893[(12)]);
var inst_18866 = (state_18893[(9)]);
var inst_18864__$1 = (state_18893[(2)]);
var inst_18865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18864__$1,(0),null);
var inst_18866__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18864__$1,(1),null);
var inst_18867 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18866__$1,in$);
var state_18893__$1 = (function (){var statearr_18916 = state_18893;
(statearr_18916[(12)] = inst_18864__$1);

(statearr_18916[(14)] = inst_18865);

(statearr_18916[(9)] = inst_18866__$1);

return statearr_18916;
})();
if(inst_18867){
var statearr_18917_18940 = state_18893__$1;
(statearr_18917_18940[(1)] = (9));

} else {
var statearr_18918_18941 = state_18893__$1;
(statearr_18918_18941[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16809__auto___18923,out))
;
return ((function (switch__16792__auto__,c__16809__auto___18923,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__16793__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__16793__auto____0 = (function (){
var statearr_18919 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18919[(0)] = re_com$typeahead$debounce_$_state_machine__16793__auto__);

(statearr_18919[(1)] = (1));

return statearr_18919;
});
var re_com$typeahead$debounce_$_state_machine__16793__auto____1 = (function (state_18893){
while(true){
var ret_value__16794__auto__ = (function (){try{while(true){
var result__16795__auto__ = switch__16792__auto__(state_18893);
if(cljs.core.keyword_identical_QMARK_(result__16795__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16795__auto__;
}
break;
}
}catch (e18920){if((e18920 instanceof Object)){
var ex__16796__auto__ = e18920;
var statearr_18921_18942 = state_18893;
(statearr_18921_18942[(5)] = ex__16796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18893);

return cljs.core.cst$kw$recur;
} else {
throw e18920;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16794__auto__,cljs.core.cst$kw$recur)){
var G__18943 = state_18893;
state_18893 = G__18943;
continue;
} else {
return ret_value__16794__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__16793__auto__ = function(state_18893){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__16793__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__16793__auto____1.call(this,state_18893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$debounce_$_state_machine__16793__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__16793__auto____0;
re_com$typeahead$debounce_$_state_machine__16793__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__16793__auto____1;
return re_com$typeahead$debounce_$_state_machine__16793__auto__;
})()
;})(switch__16792__auto__,c__16809__auto___18923,out))
})();
var state__16811__auto__ = (function (){var statearr_18922 = (f__16810__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16810__auto__.cljs$core$IFn$_invoke$arity$0() : f__16810__auto__.call(null));
(statearr_18922[(6)] = c__16809__auto___18923);

return statearr_18922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16811__auto__);
});})(c__16809__auto___18923,out))
);


return out;
});
