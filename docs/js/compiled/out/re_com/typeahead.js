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
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__17831){
var map__17832 = p__17831;
var map__17832__$1 = (((((!((map__17832 == null))))?(((((map__17832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17832):map__17832);
var args = map__17832__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17832__$1,cljs.core.cst$kw$on_DASH_change);
var rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17832__$1,cljs.core.cst$kw$rigid_QMARK_);
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17832__$1,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_);
var immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17832__$1,cljs.core.cst$kw$immediate_DASH_model_DASH_update_QMARK_);
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17832__$1,cljs.core.cst$kw$data_DASH_source);
var suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17832__$1,cljs.core.cst$kw$suggestion_DASH_to_DASH_string);
var debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17832__$1,cljs.core.cst$kw$debounce_DASH_delay);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17832__$1,cljs.core.cst$kw$model);
var external_model_value = re_com.util.deref_or_value(model);
var G__17834 = (function (){var c_input = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$waiting_QMARK_,cljs.core.cst$kw$suggestion_DASH_to_DASH_string,cljs.core.cst$kw$displaying_DASH_suggestion_QMARK_,cljs.core.cst$kw$input_DASH_text,cljs.core.cst$kw$rigid_QMARK_,cljs.core.cst$kw$data_DASH_source,cljs.core.cst$kw$immediate_DASH_model_DASH_update_QMARK_,cljs.core.cst$kw$c_DASH_search,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_,cljs.core.cst$kw$suggestions,cljs.core.cst$kw$c_DASH_input,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$external_DASH_model,cljs.core.cst$kw$model],[false,(function (){var or__4131__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,immediate_model_update_QMARK_,(re_com.typeahead.debounce.cljs$core$IFn$_invoke$arity$2 ? re_com.typeahead.debounce.cljs$core$IFn$_invoke$arity$2(c_input,debounce_delay) : re_com.typeahead.debounce.call(null,c_input,debounce_delay)),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value(model),re_com.util.deref_or_value(model)]);
})();
if(cljs.core.truth_(external_model_value)){
return (re_com.typeahead.display_suggestion.cljs$core$IFn$_invoke$arity$2 ? re_com.typeahead.display_suggestion.cljs$core$IFn$_invoke$arity$2(G__17834,external_model_value) : re_com.typeahead.display_suggestion.call(null,G__17834,external_model_value));
} else {
return G__17834;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__17835,event){
var map__17836 = p__17835;
var map__17836__$1 = (((((!((map__17836 == null))))?(((((map__17836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17836):map__17836);
var state = map__17836__$1;
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17836__$1,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_);
var rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17836__$1,cljs.core.cst$kw$rigid_QMARK_);
var immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17836__$1,cljs.core.cst$kw$immediate_DASH_model_DASH_update_QMARK_);
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var immediate_model_update_QMARK___$1 = re_com.util.deref_or_value(immediate_model_update_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value(rigid_QMARK_);
var G__17838 = event;
var G__17838__$1 = (((G__17838 instanceof cljs.core.Keyword))?G__17838.fqn:null);
switch (G__17838__$1) {
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
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__17840,event){
var map__17841 = p__17840;
var map__17841__$1 = (((((!((map__17841 == null))))?(((((map__17841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17841):map__17841);
var state = map__17841__$1;
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17841__$1,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_);
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var G__17843 = event;
var G__17843__$1 = (((G__17843 instanceof cljs.core.Keyword))?G__17843.fqn:null);
switch (G__17843__$1) {
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
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__17845,new_value){
var map__17846 = p__17845;
var map__17846__$1 = (((((!((map__17846 == null))))?(((((map__17846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17846):map__17846);
var state = map__17846__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17846__$1,cljs.core.cst$kw$on_DASH_change);
if(cljs.core.truth_(on_change)){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(new_value) : on_change.call(null,new_value));
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$model,new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__17848,suggestion){
var map__17849 = p__17848;
var map__17849__$1 = (((((!((map__17849 == null))))?(((((map__17849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17849):map__17849);
var state = map__17849__$1;
var suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17849__$1,cljs.core.cst$kw$suggestion_DASH_to_DASH_string);
var suggestion_string = (suggestion_to_string.cljs$core$IFn$_invoke$arity$1 ? suggestion_to_string.cljs$core$IFn$_invoke$arity$1(suggestion) : suggestion_to_string.call(null,suggestion));
var G__17851 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__17851,cljs.core.cst$kw$input_DASH_text,suggestion_string,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$displaying_DASH_suggestion_QMARK_,true], 0));
} else {
return G__17851;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$suggestions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$suggestion_DASH_active_DASH_index], 0));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__17852,index){
var map__17853 = p__17852;
var map__17853__$1 = (((((!((map__17853 == null))))?(((((map__17853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17853):map__17853);
var state = map__17853__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17853__$1,cljs.core.cst$kw$suggestions);
var suggestion = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(suggestions,index);
var G__17855 = state;
var G__17855__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17855,cljs.core.cst$kw$suggestion_DASH_active_DASH_index,index)
;
var G__17855__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,cljs.core.cst$kw$suggestion_DASH_activated))?re_com.typeahead.update_model(G__17855__$1,suggestion):G__17855__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_(state,cljs.core.cst$kw$suggestion_DASH_activated))){
return re_com.typeahead.display_suggestion(G__17855__$2,suggestion);
} else {
return G__17855__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__17856,index){
var map__17857 = p__17856;
var map__17857__$1 = (((((!((map__17857 == null))))?(((((map__17857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17857):map__17857);
var state = map__17857__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17857__$1,cljs.core.cst$kw$suggestions);
var suggestion = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(suggestions,index);
return re_com.typeahead.clear_suggestions(re_com.typeahead.display_suggestion(re_com.typeahead.update_model(re_com.typeahead.activate_suggestion_by_index(state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__17859){
var map__17860 = p__17859;
var map__17860__$1 = (((((!((map__17860 == null))))?(((((map__17860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17860):map__17860);
var state = map__17860__$1;
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17860__$1,cljs.core.cst$kw$suggestion_DASH_active_DASH_index);
var G__17862 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index(G__17862,suggestion_active_index);
} else {
return G__17862;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod((count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__17863){
var map__17864 = p__17863;
var map__17864__$1 = (((((!((map__17864 == null))))?(((((map__17864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17864):map__17864);
var state = map__17864__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17864__$1,cljs.core.cst$kw$suggestions);
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17864__$1,cljs.core.cst$kw$suggestion_DASH_active_DASH_index);
var G__17866 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index(G__17866,re_com.typeahead.wrap(((function (){var or__4131__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count(suggestions)));
} else {
return G__17866;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__17867){
var map__17868 = p__17867;
var map__17868__$1 = (((((!((map__17868 == null))))?(((((map__17868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17868):map__17868);
var state = map__17868__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17868__$1,cljs.core.cst$kw$suggestions);
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17868__$1,cljs.core.cst$kw$suggestion_DASH_active_DASH_index);
var G__17870 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index(G__17870,re_com.typeahead.wrap(((function (){var or__4131__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count(suggestions)));
} else {
return G__17870;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__17871 = state;
var G__17871__$1 = re_com.typeahead.clear_suggestions(G__17871)
;
var G__17871__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__17871__$1,cljs.core.cst$kw$waiting_QMARK_,false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$input_DASH_text,"",cljs.core.cst$kw$displaying_DASH_suggestion_QMARK_,false], 0))
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,cljs.core.cst$kw$input_DASH_text_DASH_changed))){
return re_com.typeahead.update_model(G__17871__$2,null);
} else {
return G__17871__$2;
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
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__17872){
var map__17873 = p__17872;
var map__17873__$1 = (((((!((map__17873 == null))))?(((((map__17873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17873):map__17873);
var state = map__17873__$1;
var input_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17873__$1,cljs.core.cst$kw$input_DASH_text);
var displaying_suggestion_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17873__$1,cljs.core.cst$kw$displaying_DASH_suggestion_QMARK_);
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
var temp__5718__auto__ = (function (){var G__17876 = text;
var G__17877 = ((function (G__17876){
return (function (p1__17875_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,p1__17875_SHARP_);
});})(G__17876))
;
return (data_source.cljs$core$IFn$_invoke$arity$2 ? data_source.cljs$core$IFn$_invoke$arity$2(G__17876,G__17877) : data_source.call(null,G__17876,G__17877));
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
var c__13621__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13621__auto__){
return (function (){
var f__13622__auto__ = (function (){var switch__13604__auto__ = ((function (c__13621__auto__){
return (function (state_17895){
var state_val_17896 = (state_17895[(1)]);
if((state_val_17896 === (1))){
var state_17895__$1 = state_17895;
var statearr_17897_17910 = state_17895__$1;
(statearr_17897_17910[(2)] = null);

(statearr_17897_17910[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17896 === (2))){
var state_17895__$1 = state_17895;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17895__$1,(4),c_search);
} else {
if((state_val_17896 === (3))){
var inst_17893 = (state_17895[(2)]);
var state_17895__$1 = state_17895;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17895__$1,inst_17893);
} else {
if((state_val_17896 === (4))){
var inst_17880 = (state_17895[(7)]);
var inst_17880__$1 = (state_17895[(2)]);
var inst_17881 = cljs.core.deref(state_atom);
var inst_17882 = cljs.core.cst$kw$data_DASH_source.cljs$core$IFn$_invoke$arity$1(inst_17881);
var inst_17883 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",inst_17880__$1);
var state_17895__$1 = (function (){var statearr_17898 = state_17895;
(statearr_17898[(8)] = inst_17882);

(statearr_17898[(7)] = inst_17880__$1);

return statearr_17898;
})();
if(inst_17883){
var statearr_17899_17911 = state_17895__$1;
(statearr_17899_17911[(1)] = (5));

} else {
var statearr_17900_17912 = state_17895__$1;
(statearr_17900_17912[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17896 === (5))){
var inst_17882 = (state_17895[(8)]);
var inst_17885 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.reset_typeahead);
var inst_17886 = re_com.typeahead.search_data_source_BANG_(inst_17882,state_atom,"");
var state_17895__$1 = (function (){var statearr_17901 = state_17895;
(statearr_17901[(9)] = inst_17885);

return statearr_17901;
})();
var statearr_17902_17913 = state_17895__$1;
(statearr_17902_17913[(2)] = inst_17886);

(statearr_17902_17913[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17896 === (6))){
var inst_17882 = (state_17895[(8)]);
var inst_17880 = (state_17895[(7)]);
var inst_17888 = re_com.typeahead.search_data_source_BANG_(inst_17882,state_atom,inst_17880);
var state_17895__$1 = state_17895;
var statearr_17903_17914 = state_17895__$1;
(statearr_17903_17914[(2)] = inst_17888);

(statearr_17903_17914[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17896 === (7))){
var inst_17890 = (state_17895[(2)]);
var state_17895__$1 = (function (){var statearr_17904 = state_17895;
(statearr_17904[(10)] = inst_17890);

return statearr_17904;
})();
var statearr_17905_17915 = state_17895__$1;
(statearr_17905_17915[(2)] = null);

(statearr_17905_17915[(1)] = (2));


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
});})(c__13621__auto__))
;
return ((function (switch__13604__auto__,c__13621__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__13605__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__13605__auto____0 = (function (){
var statearr_17906 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17906[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__13605__auto__);

(statearr_17906[(1)] = (1));

return statearr_17906;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__13605__auto____1 = (function (state_17895){
while(true){
var ret_value__13606__auto__ = (function (){try{while(true){
var result__13607__auto__ = switch__13604__auto__(state_17895);
if(cljs.core.keyword_identical_QMARK_(result__13607__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13607__auto__;
}
break;
}
}catch (e17907){if((e17907 instanceof Object)){
var ex__13608__auto__ = e17907;
var statearr_17908_17916 = state_17895;
(statearr_17908_17916[(5)] = ex__13608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17895);

return cljs.core.cst$kw$recur;
} else {
throw e17907;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13606__auto__,cljs.core.cst$kw$recur)){
var G__17917 = state_17895;
state_17895 = G__17917;
continue;
} else {
return ret_value__13606__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__13605__auto__ = function(state_17895){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__13605__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__13605__auto____1.call(this,state_17895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__13605__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__13605__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__13605__auto__;
})()
;})(switch__13604__auto__,c__13621__auto__))
})();
var state__13623__auto__ = (function (){var statearr_17909 = (f__13622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13622__auto__.cljs$core$IFn$_invoke$arity$0() : f__13622__auto__.call(null));
(statearr_17909[(6)] = c__13621__auto__);

return statearr_17909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13623__auto__);
});})(c__13621__auto__))
);

return c__13621__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__17919 = cljs.core.deref(state_atom);
var map__17919__$1 = (((((!((map__17919 == null))))?(((((map__17919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17919):map__17919);
var state = map__17919__$1;
var input_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17919__$1,cljs.core.cst$kw$input_DASH_text);
var c_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17919__$1,cljs.core.cst$kw$c_DASH_input);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_text,input_text)){
return state;
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c_input,new_text);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,((function (map__17919,map__17919__$1,state,input_text,c_input){
return (function (p1__17918_SHARP_){
var G__17921 = p1__17918_SHARP_;
var G__17921__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__17921,cljs.core.cst$kw$input_DASH_text,new_text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$displaying_DASH_suggestion_QMARK_,false], 0))
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,cljs.core.cst$kw$input_DASH_text_DASH_changed))){
return re_com.typeahead.update_model(G__17921__$1,new_text);
} else {
return G__17921__$1;
}
});})(map__17919,map__17919__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__17922 = cljs.core._EQ_;
var expr__17923 = event.which;
if(cljs.core.truth_((pred__17922.cljs$core$IFn$_invoke$arity$2 ? pred__17922.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.UP,expr__17923) : pred__17922.call(null,goog.events.KeyCodes.UP,expr__17923)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_((pred__17922.cljs$core$IFn$_invoke$arity$2 ? pred__17922.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.DOWN,expr__17923) : pred__17922.call(null,goog.events.KeyCodes.DOWN,expr__17923)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_((pred__17922.cljs$core$IFn$_invoke$arity$2 ? pred__17922.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.ENTER,expr__17923) : pred__17922.call(null,goog.events.KeyCodes.ENTER,expr__17923)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_((pred__17922.cljs$core$IFn$_invoke$arity$2 ? pred__17922.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.ESC,expr__17923) : pred__17922.call(null,goog.events.KeyCodes.ESC,expr__17923)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,cljs.core.PersistentVector.EMPTY);
} else {
if(cljs.core.truth_((pred__17922.cljs$core$IFn$_invoke$arity$2 ? pred__17922.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.TAB,expr__17923) : pred__17922.call(null,goog.events.KeyCodes.TAB,expr__17923)))){
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
var len__4730__auto___17947 = arguments.length;
var i__4731__auto___17948 = (0);
while(true){
if((i__4731__auto___17948 < len__4730__auto___17947)){
args__4736__auto__.push((arguments[i__4731__auto___17948]));

var G__17949 = (i__4731__auto___17948 + (1));
i__4731__auto___17948 = G__17949;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__17927){
var map__17928 = p__17927;
var map__17928__$1 = (((((!((map__17928 == null))))?(((((map__17928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17928):map__17928);
var args = map__17928__$1;
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.typeahead.typeahead_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["typeahead"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__17930 = re_com.typeahead.make_typeahead_state(args);
var map__17930__$1 = (((((!((map__17930 == null))))?(((((map__17930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17930):map__17930);
var state = map__17930__$1;
var c_search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17930__$1,cljs.core.cst$kw$c_DASH_search);
var c_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17930__$1,cljs.core.cst$kw$c_DASH_input);
var state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(state);
var input_text_model = reagent.core.cursor(state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_DASH_text], null));
re_com.typeahead.search_data_source_loop_BANG_(state_atom,c_search);

return ((function (map__17930,map__17930__$1,state,c_search,c_input,state_atom,input_text_model,map__17928,map__17928__$1,args){
return (function() { 
var G__17950__delegate = function (p__17932){
var map__17933 = p__17932;
var map__17933__$1 = (((((!((map__17933 == null))))?(((((map__17933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17933):map__17933);
var args__$1 = map__17933__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17933__$1,cljs.core.cst$kw$disabled_QMARK_);
var status_icon_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17933__$1,cljs.core.cst$kw$status_DASH_icon_QMARK_);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17933__$1,cljs.core.cst$kw$height);
var status_tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17933__$1,cljs.core.cst$kw$status_DASH_tooltip);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17933__$1,cljs.core.cst$kw$model);
var _debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17933__$1,cljs.core.cst$kw$_debounce_DASH_delay);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17933__$1,cljs.core.cst$kw$attr);
var _on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17933__$1,cljs.core.cst$kw$_on_DASH_change);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17933__$1,cljs.core.cst$kw$placeholder);
var render_suggestion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17933__$1,cljs.core.cst$kw$render_DASH_suggestion);
var _suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17933__$1,cljs.core.cst$kw$_suggestion_DASH_to_DASH_string);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17933__$1,cljs.core.cst$kw$width);
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17933__$1,cljs.core.cst$kw$data_DASH_source);
var _rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17933__$1,cljs.core.cst$kw$_rigid_QMARK_);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17933__$1,cljs.core.cst$kw$style);
var _change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17933__$1,cljs.core.cst$kw$_change_DASH_on_DASH_blur_QMARK_);
var _immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17933__$1,cljs.core.cst$kw$_immediate_DASH_model_DASH_update_QMARK_);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17933__$1,cljs.core.cst$kw$status);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17933__$1,cljs.core.cst$kw$class);
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.typeahead.typeahead_args_desc),args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["typeahead"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__17935 = cljs.core.deref(state_atom);
var map__17935__$1 = (((((!((map__17935 == null))))?(((((map__17935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17935):map__17935);
var state__$1 = map__17935__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17935__$1,cljs.core.cst$kw$suggestions);
var waiting_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17935__$1,cljs.core.cst$kw$waiting_QMARK_);
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17935__$1,cljs.core.cst$kw$suggestion_DASH_active_DASH_index);
var external_model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17935__$1,cljs.core.cst$kw$external_DASH_model);
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

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,cljs.core.cst$kw$class,"rc-typeahead",cljs.core.cst$kw$attr,attr,cljs.core.cst$kw$width,width__$1,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,cljs.core.cst$kw$model,input_text_model,cljs.core.cst$kw$class,class$,cljs.core.cst$kw$style,style,cljs.core.cst$kw$disabled_QMARK_,disabled_QMARK_,cljs.core.cst$kw$status_DASH_icon_QMARK_,status_icon_QMARK_,cljs.core.cst$kw$status,status,cljs.core.cst$kw$status_DASH_tooltip,status_tooltip,cljs.core.cst$kw$width,width__$1,cljs.core.cst$kw$height,height,cljs.core.cst$kw$placeholder,placeholder,cljs.core.cst$kw$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.typeahead.input_text_on_change_BANG_,state_atom),cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_,false,cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_key_DASH_down,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.typeahead.input_text_on_key_down_BANG_,state_atom),cljs.core.cst$kw$on_DASH_focus,((function (map__17935,map__17935__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17933,map__17933__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__17930,map__17930__$1,state,c_search,c_input,state_atom,input_text_model,map__17928,map__17928__$1,args){
return (function (){
return cljs.core.List.EMPTY;
});})(map__17935,map__17935__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17933,map__17933__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__17930,map__17930__$1,state,c_search,c_input,state_atom,input_text_model,map__17928,map__17928__$1,args))
,cljs.core.cst$kw$on_DASH_blur,((function (map__17935,map__17935__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17933,map__17933__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__17930,map__17930__$1,state,c_search,c_input,state_atom,input_text_model,map__17928,map__17928__$1,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,cljs.core.PersistentVector.EMPTY);
});})(map__17935,map__17935__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17933,map__17933__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__17930,map__17930__$1,state,c_search,c_input,state_atom,input_text_model,map__17928,map__17928__$1,args))
], null)], null),(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.not_empty(suggestions);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,"relative"], null),cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,cljs.core.cst$kw$class,"rc-typeahead-suggestions-container",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,cljs.core.cst$kw$size,cljs.core.cst$kw$small,cljs.core.cst$kw$class,"rc-typeahead-throbber"], null)], null):null),(function (){var iter__4523__auto__ = ((function (map__17935,map__17935__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17933,map__17933__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__17930,map__17930__$1,state,c_search,c_input,state_atom,input_text_model,map__17928,map__17928__$1,args){
return (function re_com$typeahead$iter__17937(s__17938){
return (new cljs.core.LazySeq(null,((function (map__17935,map__17935__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17933,map__17933__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__17930,map__17930__$1,state,c_search,c_input,state_atom,input_text_model,map__17928,map__17928__$1,args){
return (function (){
var s__17938__$1 = s__17938;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__17938__$1);
if(temp__5720__auto__){
var s__17938__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17938__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__17938__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__17940 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__17939 = (0);
while(true){
if((i__17939 < size__4522__auto__)){
var vec__17941 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__17939);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17941,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17941,(1),null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_active_index,i);
cljs.core.chunk_append(b__17940,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$child,(cljs.core.truth_(render_suggestion)?(render_suggestion.cljs$core$IFn$_invoke$arity$1 ? render_suggestion.cljs$core$IFn$_invoke$arity$1(s) : render_suggestion.call(null,s)):s),cljs.core.cst$kw$class,["rc-typeahead-suggestion",((selected_QMARK_)?" active":null)].join(''),cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (i__17939,selected_QMARK_,vec__17941,i,s,c__4521__auto__,size__4522__auto__,b__17940,s__17938__$2,temp__5720__auto__,map__17935,map__17935__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17933,map__17933__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__17930,map__17930__$1,state,c_search,c_input,state_atom,input_text_model,map__17928,map__17928__$1,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__17939,selected_QMARK_,vec__17941,i,s,c__4521__auto__,size__4522__auto__,b__17940,s__17938__$2,temp__5720__auto__,map__17935,map__17935__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17933,map__17933__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__17930,map__17930__$1,state,c_search,c_input,state_atom,input_text_model,map__17928,map__17928__$1,args))
,cljs.core.cst$kw$on_DASH_mouse_DASH_down,((function (i__17939,selected_QMARK_,vec__17941,i,s,c__4521__auto__,size__4522__auto__,b__17940,s__17938__$2,temp__5720__auto__,map__17935,map__17935__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17933,map__17933__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__17930,map__17930__$1,state,c_search,c_input,state_atom,input_text_model,map__17928,map__17928__$1,args){
return (function (p1__17925_SHARP_){
p1__17925_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__17939,selected_QMARK_,vec__17941,i,s,c__4521__auto__,size__4522__auto__,b__17940,s__17938__$2,temp__5720__auto__,map__17935,map__17935__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17933,map__17933__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__17930,map__17930__$1,state,c_search,c_input,state_atom,input_text_model,map__17928,map__17928__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null)));

var G__17951 = (i__17939 + (1));
i__17939 = G__17951;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17940),re_com$typeahead$iter__17937(cljs.core.chunk_rest(s__17938__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17940),null);
}
} else {
var vec__17944 = cljs.core.first(s__17938__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17944,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17944,(1),null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_active_index,i);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$child,(cljs.core.truth_(render_suggestion)?(render_suggestion.cljs$core$IFn$_invoke$arity$1 ? render_suggestion.cljs$core$IFn$_invoke$arity$1(s) : render_suggestion.call(null,s)):s),cljs.core.cst$kw$class,["rc-typeahead-suggestion",((selected_QMARK_)?" active":null)].join(''),cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (selected_QMARK_,vec__17944,i,s,s__17938__$2,temp__5720__auto__,map__17935,map__17935__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17933,map__17933__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__17930,map__17930__$1,state,c_search,c_input,state_atom,input_text_model,map__17928,map__17928__$1,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__17944,i,s,s__17938__$2,temp__5720__auto__,map__17935,map__17935__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17933,map__17933__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__17930,map__17930__$1,state,c_search,c_input,state_atom,input_text_model,map__17928,map__17928__$1,args))
,cljs.core.cst$kw$on_DASH_mouse_DASH_down,((function (selected_QMARK_,vec__17944,i,s,s__17938__$2,temp__5720__auto__,map__17935,map__17935__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17933,map__17933__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__17930,map__17930__$1,state,c_search,c_input,state_atom,input_text_model,map__17928,map__17928__$1,args){
return (function (p1__17925_SHARP_){
p1__17925_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__17944,i,s,s__17938__$2,temp__5720__auto__,map__17935,map__17935__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17933,map__17933__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__17930,map__17930__$1,state,c_search,c_input,state_atom,input_text_model,map__17928,map__17928__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null)),re_com$typeahead$iter__17937(cljs.core.rest(s__17938__$2)));
}
} else {
return null;
}
break;
}
});})(map__17935,map__17935__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17933,map__17933__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__17930,map__17930__$1,state,c_search,c_input,state_atom,input_text_model,map__17928,map__17928__$1,args))
,null,null));
});})(map__17935,map__17935__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17933,map__17933__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__17930,map__17930__$1,state,c_search,c_input,state_atom,input_text_model,map__17928,map__17928__$1,args))
;
return iter__4523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__17950 = function (var_args){
var p__17932 = null;
if (arguments.length > 0) {
var G__17952__i = 0, G__17952__a = new Array(arguments.length -  0);
while (G__17952__i < G__17952__a.length) {G__17952__a[G__17952__i] = arguments[G__17952__i + 0]; ++G__17952__i;}
  p__17932 = new cljs.core.IndexedSeq(G__17952__a,0,null);
} 
return G__17950__delegate.call(this,p__17932);};
G__17950.cljs$lang$maxFixedArity = 0;
G__17950.cljs$lang$applyTo = (function (arglist__17953){
var p__17932 = cljs.core.seq(arglist__17953);
return G__17950__delegate(p__17932);
});
G__17950.cljs$core$IFn$_invoke$arity$variadic = G__17950__delegate;
return G__17950;
})()
;
;})(map__17930,map__17930__$1,state,c_search,c_input,state_atom,input_text_model,map__17928,map__17928__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq17926){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17926));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__13621__auto___18034 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13621__auto___18034,out){
return (function (){
var f__13622__auto__ = (function (){var switch__13604__auto__ = ((function (c__13621__auto___18034,out){
return (function (state_18004){
var state_val_18005 = (state_18004[(1)]);
if((state_val_18005 === (7))){
var inst_17959 = (state_18004[(2)]);
var state_18004__$1 = state_18004;
var statearr_18006_18035 = state_18004__$1;
(statearr_18006_18035[(2)] = inst_17959);

(statearr_18006_18035[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18005 === (1))){
var inst_17954 = null;
var state_18004__$1 = (function (){var statearr_18007 = state_18004;
(statearr_18007[(7)] = inst_17954);

return statearr_18007;
})();
var statearr_18008_18036 = state_18004__$1;
(statearr_18008_18036[(2)] = null);

(statearr_18008_18036[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18005 === (4))){
var state_18004__$1 = state_18004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18004__$1,(7),in$);
} else {
if((state_val_18005 === (15))){
var inst_17989 = (state_18004[(2)]);
var state_18004__$1 = (function (){var statearr_18009 = state_18004;
(statearr_18009[(8)] = inst_17989);

return statearr_18009;
})();
var statearr_18010_18037 = state_18004__$1;
(statearr_18010_18037[(2)] = null);

(statearr_18010_18037[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18005 === (13))){
var inst_17977 = (state_18004[(9)]);
var inst_17991 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17977,cljs.core.cst$kw$default);
var state_18004__$1 = state_18004;
if(inst_17991){
var statearr_18011_18038 = state_18004__$1;
(statearr_18011_18038[(1)] = (16));

} else {
var statearr_18012_18039 = state_18004__$1;
(statearr_18012_18039[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18005 === (6))){
var inst_17963 = (state_18004[(10)]);
var inst_17962 = (state_18004[(2)]);
var inst_17963__$1 = cljs.core.async.timeout(ms);
var inst_17971 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17972 = [in$,inst_17963__$1];
var inst_17973 = (new cljs.core.PersistentVector(null,2,(5),inst_17971,inst_17972,null));
var state_18004__$1 = (function (){var statearr_18013 = state_18004;
(statearr_18013[(10)] = inst_17963__$1);

(statearr_18013[(11)] = inst_17962);

return statearr_18013;
})();
return cljs.core.async.ioc_alts_BANG_(state_18004__$1,(8),inst_17973);
} else {
if((state_val_18005 === (17))){
var state_18004__$1 = state_18004;
var statearr_18014_18040 = state_18004__$1;
(statearr_18014_18040[(2)] = null);

(statearr_18014_18040[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18005 === (3))){
var inst_18002 = (state_18004[(2)]);
var state_18004__$1 = state_18004;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18004__$1,inst_18002);
} else {
if((state_val_18005 === (12))){
var inst_17962 = (state_18004[(11)]);
var state_18004__$1 = state_18004;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18004__$1,(15),out,inst_17962);
} else {
if((state_val_18005 === (2))){
var inst_17954 = (state_18004[(7)]);
var inst_17956 = (inst_17954 == null);
var state_18004__$1 = state_18004;
if(cljs.core.truth_(inst_17956)){
var statearr_18015_18041 = state_18004__$1;
(statearr_18015_18041[(1)] = (4));

} else {
var statearr_18016_18042 = state_18004__$1;
(statearr_18016_18042[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18005 === (11))){
var inst_17999 = (state_18004[(2)]);
var inst_17954 = inst_17999;
var state_18004__$1 = (function (){var statearr_18017 = state_18004;
(statearr_18017[(7)] = inst_17954);

return statearr_18017;
})();
var statearr_18018_18043 = state_18004__$1;
(statearr_18018_18043[(2)] = null);

(statearr_18018_18043[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18005 === (9))){
var inst_17975 = (state_18004[(12)]);
var inst_17983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17975,(0),null);
var inst_17984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17975,(1),null);
var state_18004__$1 = (function (){var statearr_18019 = state_18004;
(statearr_18019[(13)] = inst_17984);

return statearr_18019;
})();
var statearr_18020_18044 = state_18004__$1;
(statearr_18020_18044[(2)] = inst_17983);

(statearr_18020_18044[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18005 === (5))){
var inst_17954 = (state_18004[(7)]);
var state_18004__$1 = state_18004;
var statearr_18021_18045 = state_18004__$1;
(statearr_18021_18045[(2)] = inst_17954);

(statearr_18021_18045[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18005 === (14))){
var inst_17997 = (state_18004[(2)]);
var state_18004__$1 = state_18004;
var statearr_18022_18046 = state_18004__$1;
(statearr_18022_18046[(2)] = inst_17997);

(statearr_18022_18046[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18005 === (16))){
var inst_17976 = (state_18004[(14)]);
var state_18004__$1 = state_18004;
var statearr_18023_18047 = state_18004__$1;
(statearr_18023_18047[(2)] = inst_17976);

(statearr_18023_18047[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18005 === (10))){
var inst_17963 = (state_18004[(10)]);
var inst_17977 = (state_18004[(9)]);
var inst_17986 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17977,inst_17963);
var state_18004__$1 = state_18004;
if(inst_17986){
var statearr_18024_18048 = state_18004__$1;
(statearr_18024_18048[(1)] = (12));

} else {
var statearr_18025_18049 = state_18004__$1;
(statearr_18025_18049[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18005 === (18))){
var inst_17995 = (state_18004[(2)]);
var state_18004__$1 = state_18004;
var statearr_18026_18050 = state_18004__$1;
(statearr_18026_18050[(2)] = inst_17995);

(statearr_18026_18050[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18005 === (8))){
var inst_17977 = (state_18004[(9)]);
var inst_17975 = (state_18004[(12)]);
var inst_17975__$1 = (state_18004[(2)]);
var inst_17976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17975__$1,(0),null);
var inst_17977__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17975__$1,(1),null);
var inst_17978 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17977__$1,in$);
var state_18004__$1 = (function (){var statearr_18027 = state_18004;
(statearr_18027[(9)] = inst_17977__$1);

(statearr_18027[(12)] = inst_17975__$1);

(statearr_18027[(14)] = inst_17976);

return statearr_18027;
})();
if(inst_17978){
var statearr_18028_18051 = state_18004__$1;
(statearr_18028_18051[(1)] = (9));

} else {
var statearr_18029_18052 = state_18004__$1;
(statearr_18029_18052[(1)] = (10));

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
});})(c__13621__auto___18034,out))
;
return ((function (switch__13604__auto__,c__13621__auto___18034,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__13605__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__13605__auto____0 = (function (){
var statearr_18030 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18030[(0)] = re_com$typeahead$debounce_$_state_machine__13605__auto__);

(statearr_18030[(1)] = (1));

return statearr_18030;
});
var re_com$typeahead$debounce_$_state_machine__13605__auto____1 = (function (state_18004){
while(true){
var ret_value__13606__auto__ = (function (){try{while(true){
var result__13607__auto__ = switch__13604__auto__(state_18004);
if(cljs.core.keyword_identical_QMARK_(result__13607__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13607__auto__;
}
break;
}
}catch (e18031){if((e18031 instanceof Object)){
var ex__13608__auto__ = e18031;
var statearr_18032_18053 = state_18004;
(statearr_18032_18053[(5)] = ex__13608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18004);

return cljs.core.cst$kw$recur;
} else {
throw e18031;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13606__auto__,cljs.core.cst$kw$recur)){
var G__18054 = state_18004;
state_18004 = G__18054;
continue;
} else {
return ret_value__13606__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__13605__auto__ = function(state_18004){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__13605__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__13605__auto____1.call(this,state_18004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$debounce_$_state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__13605__auto____0;
re_com$typeahead$debounce_$_state_machine__13605__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__13605__auto____1;
return re_com$typeahead$debounce_$_state_machine__13605__auto__;
})()
;})(switch__13604__auto__,c__13621__auto___18034,out))
})();
var state__13623__auto__ = (function (){var statearr_18033 = (f__13622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13622__auto__.cljs$core$IFn$_invoke$arity$0() : f__13622__auto__.call(null));
(statearr_18033[(6)] = c__13621__auto___18034);

return statearr_18033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13623__auto__);
});})(c__13621__auto___18034,out))
);


return out;
});
