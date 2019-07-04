// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_com.typeahead');
goog.require('cljs.core');
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
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__18343){
var map__18344 = p__18343;
var map__18344__$1 = (((((!((map__18344 == null))))?(((((map__18344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18344):map__18344);
var args = map__18344__$1;
var on_change = cljs.core.get.call(null,map__18344__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__18344__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__18344__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var immediate_model_update_QMARK_ = cljs.core.get.call(null,map__18344__$1,new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618));
var data_source = cljs.core.get.call(null,map__18344__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__18344__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__18344__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__18344__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__18346 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__4131__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,immediate_model_update_QMARK_,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__18346,external_model_value);
} else {
return G__18346;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__18347,event){
var map__18348 = p__18347;
var map__18348__$1 = (((((!((map__18348 == null))))?(((((map__18348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18348):map__18348);
var state = map__18348__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__18348__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__18348__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var immediate_model_update_QMARK_ = cljs.core.get.call(null,map__18348__$1,new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var immediate_model_update_QMARK___$1 = re_com.util.deref_or_value.call(null,immediate_model_update_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__18350 = event;
var G__18350__$1 = (((G__18350 instanceof cljs.core.Keyword))?G__18350.fqn:null);
switch (G__18350__$1) {
case "input-text-blurred":
var and__4120__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__4120__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
var and__4120__auto__ = cljs.core.not.call(null,rigid_QMARK___$1);
if(and__4120__auto__){
var or__4131__auto__ = cljs.core.not.call(null,change_on_blur_QMARK___$1);
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
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__18352,event){
var map__18353 = p__18352;
var map__18353__$1 = (((((!((map__18353 == null))))?(((((map__18353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18353):map__18353);
var state = map__18353__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__18353__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__18355 = event;
var G__18355__$1 = (((G__18355 instanceof cljs.core.Keyword))?G__18355.fqn:null);
switch (G__18355__$1) {
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__18357,new_value){
var map__18358 = p__18357;
var map__18358__$1 = (((((!((map__18358 == null))))?(((((map__18358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18358):map__18358);
var state = map__18358__$1;
var on_change = cljs.core.get.call(null,map__18358__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__18360,suggestion){
var map__18361 = p__18360;
var map__18361__$1 = (((((!((map__18361 == null))))?(((((map__18361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18361):map__18361);
var state = map__18361__$1;
var suggestion_to_string = cljs.core.get.call(null,map__18361__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__18363 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__18363,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__18363;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__18364,index){
var map__18365 = p__18364;
var map__18365__$1 = (((((!((map__18365 == null))))?(((((map__18365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18365):map__18365);
var state = map__18365__$1;
var suggestions = cljs.core.get.call(null,map__18365__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__18367 = state;
var G__18367__$1 = cljs.core.assoc.call(null,G__18367,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__18367__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__18367__$1,suggestion):G__18367__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__18367__$2,suggestion);
} else {
return G__18367__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__18368,index){
var map__18369 = p__18368;
var map__18369__$1 = (((((!((map__18369 == null))))?(((((map__18369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18369):map__18369);
var state = map__18369__$1;
var suggestions = cljs.core.get.call(null,map__18369__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__18371){
var map__18372 = p__18371;
var map__18372__$1 = (((((!((map__18372 == null))))?(((((map__18372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18372):map__18372);
var state = map__18372__$1;
var suggestion_active_index = cljs.core.get.call(null,map__18372__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__18374 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__18374,suggestion_active_index);
} else {
return G__18374;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__18375){
var map__18376 = p__18375;
var map__18376__$1 = (((((!((map__18376 == null))))?(((((map__18376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18376):map__18376);
var state = map__18376__$1;
var suggestions = cljs.core.get.call(null,map__18376__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__18376__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__18378 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__18378,re_com.typeahead.wrap.call(null,((function (){var or__4131__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__18378;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__18379){
var map__18380 = p__18379;
var map__18380__$1 = (((((!((map__18380 == null))))?(((((map__18380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18380):map__18380);
var state = map__18380__$1;
var suggestions = cljs.core.get.call(null,map__18380__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__18380__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__18382 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__18382,re_com.typeahead.wrap.call(null,((function (){var or__4131__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__18382;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__18383 = state;
var G__18383__$1 = re_com.typeahead.clear_suggestions.call(null,G__18383)
;
var G__18383__$2 = cljs.core.assoc.call(null,G__18383__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__18383__$2,null);
} else {
return G__18383__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null);
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__18384){
var map__18385 = p__18384;
var map__18385__$1 = (((((!((map__18385 == null))))?(((((map__18385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18385):map__18385);
var state = map__18385__$1;
var input_text = cljs.core.get.call(null,map__18385__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__18385__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__4120__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__4120__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,input_text,state);
} else {
return null;
}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.call(null,re_com.typeahead.reset_typeahead.call(null,state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,state,new_value),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__5718__auto__ = data_source.call(null,text,(function (p1__18387_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__18387_SHARP_);
}));
if(cljs.core.truth_(temp__5718__auto__)){
var return_value = temp__5718__auto__;
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__14385__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14385__auto__){
return (function (){
var f__14386__auto__ = (function (){var switch__14368__auto__ = ((function (c__14385__auto__){
return (function (state_18405){
var state_val_18406 = (state_18405[(1)]);
if((state_val_18406 === (1))){
var state_18405__$1 = state_18405;
var statearr_18407_18420 = state_18405__$1;
(statearr_18407_18420[(2)] = null);

(statearr_18407_18420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18406 === (2))){
var state_18405__$1 = state_18405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18405__$1,(4),c_search);
} else {
if((state_val_18406 === (3))){
var inst_18403 = (state_18405[(2)]);
var state_18405__$1 = state_18405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18405__$1,inst_18403);
} else {
if((state_val_18406 === (4))){
var inst_18390 = (state_18405[(7)]);
var inst_18390__$1 = (state_18405[(2)]);
var inst_18391 = cljs.core.deref.call(null,state_atom);
var inst_18392 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_18391);
var inst_18393 = cljs.core._EQ_.call(null,"",inst_18390__$1);
var state_18405__$1 = (function (){var statearr_18408 = state_18405;
(statearr_18408[(8)] = inst_18392);

(statearr_18408[(7)] = inst_18390__$1);

return statearr_18408;
})();
if(inst_18393){
var statearr_18409_18421 = state_18405__$1;
(statearr_18409_18421[(1)] = (5));

} else {
var statearr_18410_18422 = state_18405__$1;
(statearr_18410_18422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18406 === (5))){
var inst_18392 = (state_18405[(8)]);
var inst_18395 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var inst_18396 = re_com.typeahead.search_data_source_BANG_.call(null,inst_18392,state_atom,"");
var state_18405__$1 = (function (){var statearr_18411 = state_18405;
(statearr_18411[(9)] = inst_18395);

return statearr_18411;
})();
var statearr_18412_18423 = state_18405__$1;
(statearr_18412_18423[(2)] = inst_18396);

(statearr_18412_18423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18406 === (6))){
var inst_18392 = (state_18405[(8)]);
var inst_18390 = (state_18405[(7)]);
var inst_18398 = re_com.typeahead.search_data_source_BANG_.call(null,inst_18392,state_atom,inst_18390);
var state_18405__$1 = state_18405;
var statearr_18413_18424 = state_18405__$1;
(statearr_18413_18424[(2)] = inst_18398);

(statearr_18413_18424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18406 === (7))){
var inst_18400 = (state_18405[(2)]);
var state_18405__$1 = (function (){var statearr_18414 = state_18405;
(statearr_18414[(10)] = inst_18400);

return statearr_18414;
})();
var statearr_18415_18425 = state_18405__$1;
(statearr_18415_18425[(2)] = null);

(statearr_18415_18425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__14385__auto__))
;
return ((function (switch__14368__auto__,c__14385__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__14369__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__14369__auto____0 = (function (){
var statearr_18416 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18416[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__14369__auto__);

(statearr_18416[(1)] = (1));

return statearr_18416;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__14369__auto____1 = (function (state_18405){
while(true){
var ret_value__14370__auto__ = (function (){try{while(true){
var result__14371__auto__ = switch__14368__auto__.call(null,state_18405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14371__auto__;
}
break;
}
}catch (e18417){if((e18417 instanceof Object)){
var ex__14372__auto__ = e18417;
var statearr_18418_18426 = state_18405;
(statearr_18418_18426[(5)] = ex__14372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18427 = state_18405;
state_18405 = G__18427;
continue;
} else {
return ret_value__14370__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__14369__auto__ = function(state_18405){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__14369__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__14369__auto____1.call(this,state_18405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__14369__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__14369__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__14369__auto__;
})()
;})(switch__14368__auto__,c__14385__auto__))
})();
var state__14387__auto__ = (function (){var statearr_18419 = f__14386__auto__.call(null);
(statearr_18419[(6)] = c__14385__auto__);

return statearr_18419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14387__auto__);
});})(c__14385__auto__))
);

return c__14385__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__18429 = cljs.core.deref.call(null,state_atom);
var map__18429__$1 = (((((!((map__18429 == null))))?(((((map__18429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18429):map__18429);
var state = map__18429__$1;
var input_text = cljs.core.get.call(null,map__18429__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__18429__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__18429,map__18429__$1,state,input_text,c_input){
return (function (p1__18428_SHARP_){
var G__18431 = p1__18428_SHARP_;
var G__18431__$1 = cljs.core.assoc.call(null,G__18431,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__18431__$1,new_text);
} else {
return G__18431__$1;
}
});})(map__18429,map__18429__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__18432 = cljs.core._EQ_;
var expr__18433 = event.which;
if(cljs.core.truth_(pred__18432.call(null,goog.events.KeyCodes.UP,expr__18433))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__18432.call(null,goog.events.KeyCodes.DOWN,expr__18433))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__18432.call(null,goog.events.KeyCodes.ENTER,expr__18433))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__18432.call(null,goog.events.KeyCodes.ESC,expr__18433))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,cljs.core.PersistentVector.EMPTY);
} else {
if(cljs.core.truth_(pred__18432.call(null,goog.events.KeyCodes.TAB,expr__18433))){
if(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom))))){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"update model with currently entered text on every keystroke (similar to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," but no changes to model if mouse is over suggestions)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"the initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"after receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"when a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the textbox)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (applies to the textbox)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bold","span.bold",636457745),"the outer container"], null),", rather than the textbox)"], null)], null)], null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__4736__auto__ = [];
var len__4730__auto___18457 = arguments.length;
var i__4731__auto___18458 = (0);
while(true){
if((i__4731__auto___18458 < len__4730__auto___18457)){
args__4736__auto__.push((arguments[i__4731__auto___18458]));

var G__18459 = (i__4731__auto___18458 + (1));
i__4731__auto___18458 = G__18459;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__18437){
var map__18438 = p__18437;
var map__18438__$1 = (((((!((map__18438 == null))))?(((((map__18438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18438):map__18438);
var args = map__18438__$1;
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead"))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__18440 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__18440__$1 = (((((!((map__18440 == null))))?(((((map__18440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18440):map__18440);
var state = map__18440__$1;
var c_search = cljs.core.get.call(null,map__18440__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__18440__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__18440,map__18440__$1,state,c_search,c_input,state_atom,input_text_model,map__18438,map__18438__$1,args){
return (function() { 
var G__18460__delegate = function (p__18442){
var map__18443 = p__18442;
var map__18443__$1 = (((((!((map__18443 == null))))?(((((map__18443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18443):map__18443);
var args__$1 = map__18443__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__18443__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__18443__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__18443__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__18443__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__18443__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.call(null,map__18443__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var attr = cljs.core.get.call(null,map__18443__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var _on_change = cljs.core.get.call(null,map__18443__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.call(null,map__18443__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__18443__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.call(null,map__18443__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.call(null,map__18443__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.call(null,map__18443__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.call(null,map__18443__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.call(null,map__18443__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.call(null,map__18443__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var _immediate_model_update_QMARK_ = cljs.core.get.call(null,map__18443__$1,new cljs.core.Keyword(null,"_immediate-model-update?","_immediate-model-update?",1035374450));
var status = cljs.core.get.call(null,map__18443__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__18443__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead"))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__18445 = cljs.core.deref.call(null,state_atom);
var map__18445__$1 = (((((!((map__18445 == null))))?(((((map__18445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18445):map__18445);
var state__$1 = map__18445__$1;
var suggestions = cljs.core.get.call(null,map__18445__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__18445__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__18445__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__18445__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__4131__auto__ = width;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.call(null,last_data_source,data_source)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

if(cljs.core.not_EQ_.call(null,latest_external_model,external_model)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead",new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),((function (map__18445,map__18445__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18443,map__18443__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__18440,map__18440__$1,state,c_search,c_input,state_atom,input_text_model,map__18438,map__18438__$1,args){
return (function (){
return cljs.core.List.EMPTY;
});})(map__18445,map__18445__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18443,map__18443__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__18440,map__18440__$1,state,c_search,c_input,state_atom,input_text_model,map__18438,map__18438__$1,args))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (map__18445,map__18445__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18443,map__18443__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__18440,map__18440__$1,state,c_search,c_input,state_atom,input_text_model,map__18438,map__18438__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,cljs.core.PersistentVector.EMPTY);
});})(map__18445,map__18445__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18443,map__18443__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__18440,map__18440__$1,state,c_search,c_input,state_atom,input_text_model,map__18438,map__18438__$1,args))
], null)], null),(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__4523__auto__ = ((function (map__18445,map__18445__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18443,map__18443__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__18440,map__18440__$1,state,c_search,c_input,state_atom,input_text_model,map__18438,map__18438__$1,args){
return (function re_com$typeahead$iter__18447(s__18448){
return (new cljs.core.LazySeq(null,((function (map__18445,map__18445__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18443,map__18443__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__18440,map__18440__$1,state,c_search,c_input,state_atom,input_text_model,map__18438,map__18438__$1,args){
return (function (){
var s__18448__$1 = s__18448;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__18448__$1);
if(temp__5720__auto__){
var s__18448__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18448__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__18448__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__18450 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__18449 = (0);
while(true){
if((i__18449 < size__4522__auto__)){
var vec__18451 = cljs.core._nth.call(null,c__4521__auto__,i__18449);
var i = cljs.core.nth.call(null,vec__18451,(0),null);
var s = cljs.core.nth.call(null,vec__18451,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__18450,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",((selected_QMARK_)?" active":null)].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__18449,selected_QMARK_,vec__18451,i,s,c__4521__auto__,size__4522__auto__,b__18450,s__18448__$2,temp__5720__auto__,map__18445,map__18445__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18443,map__18443__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__18440,map__18440__$1,state,c_search,c_input,state_atom,input_text_model,map__18438,map__18438__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__18449,selected_QMARK_,vec__18451,i,s,c__4521__auto__,size__4522__auto__,b__18450,s__18448__$2,temp__5720__auto__,map__18445,map__18445__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18443,map__18443__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__18440,map__18440__$1,state,c_search,c_input,state_atom,input_text_model,map__18438,map__18438__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__18449,selected_QMARK_,vec__18451,i,s,c__4521__auto__,size__4522__auto__,b__18450,s__18448__$2,temp__5720__auto__,map__18445,map__18445__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18443,map__18443__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__18440,map__18440__$1,state,c_search,c_input,state_atom,input_text_model,map__18438,map__18438__$1,args){
return (function (p1__18435_SHARP_){
p1__18435_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__18449,selected_QMARK_,vec__18451,i,s,c__4521__auto__,size__4522__auto__,b__18450,s__18448__$2,temp__5720__auto__,map__18445,map__18445__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18443,map__18443__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__18440,map__18440__$1,state,c_search,c_input,state_atom,input_text_model,map__18438,map__18438__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__18461 = (i__18449 + (1));
i__18449 = G__18461;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18450),re_com$typeahead$iter__18447.call(null,cljs.core.chunk_rest.call(null,s__18448__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18450),null);
}
} else {
var vec__18454 = cljs.core.first.call(null,s__18448__$2);
var i = cljs.core.nth.call(null,vec__18454,(0),null);
var s = cljs.core.nth.call(null,vec__18454,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",((selected_QMARK_)?" active":null)].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__18454,i,s,s__18448__$2,temp__5720__auto__,map__18445,map__18445__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18443,map__18443__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__18440,map__18440__$1,state,c_search,c_input,state_atom,input_text_model,map__18438,map__18438__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__18454,i,s,s__18448__$2,temp__5720__auto__,map__18445,map__18445__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18443,map__18443__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__18440,map__18440__$1,state,c_search,c_input,state_atom,input_text_model,map__18438,map__18438__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__18454,i,s,s__18448__$2,temp__5720__auto__,map__18445,map__18445__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18443,map__18443__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__18440,map__18440__$1,state,c_search,c_input,state_atom,input_text_model,map__18438,map__18438__$1,args){
return (function (p1__18435_SHARP_){
p1__18435_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__18454,i,s,s__18448__$2,temp__5720__auto__,map__18445,map__18445__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18443,map__18443__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__18440,map__18440__$1,state,c_search,c_input,state_atom,input_text_model,map__18438,map__18438__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__18447.call(null,cljs.core.rest.call(null,s__18448__$2)));
}
} else {
return null;
}
break;
}
});})(map__18445,map__18445__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18443,map__18443__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__18440,map__18440__$1,state,c_search,c_input,state_atom,input_text_model,map__18438,map__18438__$1,args))
,null,null));
});})(map__18445,map__18445__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18443,map__18443__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__18440,map__18440__$1,state,c_search,c_input,state_atom,input_text_model,map__18438,map__18438__$1,args))
;
return iter__4523__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__18460 = function (var_args){
var p__18442 = null;
if (arguments.length > 0) {
var G__18462__i = 0, G__18462__a = new Array(arguments.length -  0);
while (G__18462__i < G__18462__a.length) {G__18462__a[G__18462__i] = arguments[G__18462__i + 0]; ++G__18462__i;}
  p__18442 = new cljs.core.IndexedSeq(G__18462__a,0,null);
} 
return G__18460__delegate.call(this,p__18442);};
G__18460.cljs$lang$maxFixedArity = 0;
G__18460.cljs$lang$applyTo = (function (arglist__18463){
var p__18442 = cljs.core.seq(arglist__18463);
return G__18460__delegate(p__18442);
});
G__18460.cljs$core$IFn$_invoke$arity$variadic = G__18460__delegate;
return G__18460;
})()
;
;})(map__18440,map__18440__$1,state,c_search,c_input,state_atom,input_text_model,map__18438,map__18438__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq18436){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18436));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__14385__auto___18544 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14385__auto___18544,out){
return (function (){
var f__14386__auto__ = (function (){var switch__14368__auto__ = ((function (c__14385__auto___18544,out){
return (function (state_18514){
var state_val_18515 = (state_18514[(1)]);
if((state_val_18515 === (7))){
var inst_18469 = (state_18514[(2)]);
var state_18514__$1 = state_18514;
var statearr_18516_18545 = state_18514__$1;
(statearr_18516_18545[(2)] = inst_18469);

(statearr_18516_18545[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18515 === (1))){
var inst_18464 = null;
var state_18514__$1 = (function (){var statearr_18517 = state_18514;
(statearr_18517[(7)] = inst_18464);

return statearr_18517;
})();
var statearr_18518_18546 = state_18514__$1;
(statearr_18518_18546[(2)] = null);

(statearr_18518_18546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18515 === (4))){
var state_18514__$1 = state_18514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18514__$1,(7),in$);
} else {
if((state_val_18515 === (15))){
var inst_18499 = (state_18514[(2)]);
var state_18514__$1 = (function (){var statearr_18519 = state_18514;
(statearr_18519[(8)] = inst_18499);

return statearr_18519;
})();
var statearr_18520_18547 = state_18514__$1;
(statearr_18520_18547[(2)] = null);

(statearr_18520_18547[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18515 === (13))){
var inst_18487 = (state_18514[(9)]);
var inst_18501 = cljs.core._EQ_.call(null,inst_18487,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_18514__$1 = state_18514;
if(inst_18501){
var statearr_18521_18548 = state_18514__$1;
(statearr_18521_18548[(1)] = (16));

} else {
var statearr_18522_18549 = state_18514__$1;
(statearr_18522_18549[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18515 === (6))){
var inst_18473 = (state_18514[(10)]);
var inst_18472 = (state_18514[(2)]);
var inst_18473__$1 = cljs.core.async.timeout.call(null,ms);
var inst_18481 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18482 = [in$,inst_18473__$1];
var inst_18483 = (new cljs.core.PersistentVector(null,2,(5),inst_18481,inst_18482,null));
var state_18514__$1 = (function (){var statearr_18523 = state_18514;
(statearr_18523[(10)] = inst_18473__$1);

(statearr_18523[(11)] = inst_18472);

return statearr_18523;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18514__$1,(8),inst_18483);
} else {
if((state_val_18515 === (17))){
var state_18514__$1 = state_18514;
var statearr_18524_18550 = state_18514__$1;
(statearr_18524_18550[(2)] = null);

(statearr_18524_18550[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18515 === (3))){
var inst_18512 = (state_18514[(2)]);
var state_18514__$1 = state_18514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18514__$1,inst_18512);
} else {
if((state_val_18515 === (12))){
var inst_18472 = (state_18514[(11)]);
var state_18514__$1 = state_18514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18514__$1,(15),out,inst_18472);
} else {
if((state_val_18515 === (2))){
var inst_18464 = (state_18514[(7)]);
var inst_18466 = (inst_18464 == null);
var state_18514__$1 = state_18514;
if(cljs.core.truth_(inst_18466)){
var statearr_18525_18551 = state_18514__$1;
(statearr_18525_18551[(1)] = (4));

} else {
var statearr_18526_18552 = state_18514__$1;
(statearr_18526_18552[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18515 === (11))){
var inst_18509 = (state_18514[(2)]);
var inst_18464 = inst_18509;
var state_18514__$1 = (function (){var statearr_18527 = state_18514;
(statearr_18527[(7)] = inst_18464);

return statearr_18527;
})();
var statearr_18528_18553 = state_18514__$1;
(statearr_18528_18553[(2)] = null);

(statearr_18528_18553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18515 === (9))){
var inst_18485 = (state_18514[(12)]);
var inst_18493 = cljs.core.nth.call(null,inst_18485,(0),null);
var inst_18494 = cljs.core.nth.call(null,inst_18485,(1),null);
var state_18514__$1 = (function (){var statearr_18529 = state_18514;
(statearr_18529[(13)] = inst_18494);

return statearr_18529;
})();
var statearr_18530_18554 = state_18514__$1;
(statearr_18530_18554[(2)] = inst_18493);

(statearr_18530_18554[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18515 === (5))){
var inst_18464 = (state_18514[(7)]);
var state_18514__$1 = state_18514;
var statearr_18531_18555 = state_18514__$1;
(statearr_18531_18555[(2)] = inst_18464);

(statearr_18531_18555[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18515 === (14))){
var inst_18507 = (state_18514[(2)]);
var state_18514__$1 = state_18514;
var statearr_18532_18556 = state_18514__$1;
(statearr_18532_18556[(2)] = inst_18507);

(statearr_18532_18556[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18515 === (16))){
var inst_18486 = (state_18514[(14)]);
var state_18514__$1 = state_18514;
var statearr_18533_18557 = state_18514__$1;
(statearr_18533_18557[(2)] = inst_18486);

(statearr_18533_18557[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18515 === (10))){
var inst_18487 = (state_18514[(9)]);
var inst_18473 = (state_18514[(10)]);
var inst_18496 = cljs.core._EQ_.call(null,inst_18487,inst_18473);
var state_18514__$1 = state_18514;
if(inst_18496){
var statearr_18534_18558 = state_18514__$1;
(statearr_18534_18558[(1)] = (12));

} else {
var statearr_18535_18559 = state_18514__$1;
(statearr_18535_18559[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18515 === (18))){
var inst_18505 = (state_18514[(2)]);
var state_18514__$1 = state_18514;
var statearr_18536_18560 = state_18514__$1;
(statearr_18536_18560[(2)] = inst_18505);

(statearr_18536_18560[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18515 === (8))){
var inst_18487 = (state_18514[(9)]);
var inst_18485 = (state_18514[(12)]);
var inst_18485__$1 = (state_18514[(2)]);
var inst_18486 = cljs.core.nth.call(null,inst_18485__$1,(0),null);
var inst_18487__$1 = cljs.core.nth.call(null,inst_18485__$1,(1),null);
var inst_18488 = cljs.core._EQ_.call(null,inst_18487__$1,in$);
var state_18514__$1 = (function (){var statearr_18537 = state_18514;
(statearr_18537[(9)] = inst_18487__$1);

(statearr_18537[(14)] = inst_18486);

(statearr_18537[(12)] = inst_18485__$1);

return statearr_18537;
})();
if(inst_18488){
var statearr_18538_18561 = state_18514__$1;
(statearr_18538_18561[(1)] = (9));

} else {
var statearr_18539_18562 = state_18514__$1;
(statearr_18539_18562[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__14385__auto___18544,out))
;
return ((function (switch__14368__auto__,c__14385__auto___18544,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__14369__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__14369__auto____0 = (function (){
var statearr_18540 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18540[(0)] = re_com$typeahead$debounce_$_state_machine__14369__auto__);

(statearr_18540[(1)] = (1));

return statearr_18540;
});
var re_com$typeahead$debounce_$_state_machine__14369__auto____1 = (function (state_18514){
while(true){
var ret_value__14370__auto__ = (function (){try{while(true){
var result__14371__auto__ = switch__14368__auto__.call(null,state_18514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14371__auto__;
}
break;
}
}catch (e18541){if((e18541 instanceof Object)){
var ex__14372__auto__ = e18541;
var statearr_18542_18563 = state_18514;
(statearr_18542_18563[(5)] = ex__14372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18564 = state_18514;
state_18514 = G__18564;
continue;
} else {
return ret_value__14370__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__14369__auto__ = function(state_18514){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__14369__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__14369__auto____1.call(this,state_18514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$debounce_$_state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__14369__auto____0;
re_com$typeahead$debounce_$_state_machine__14369__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__14369__auto____1;
return re_com$typeahead$debounce_$_state_machine__14369__auto__;
})()
;})(switch__14368__auto__,c__14385__auto___18544,out))
})();
var state__14387__auto__ = (function (){var statearr_18543 = f__14386__auto__.call(null);
(statearr_18543[(6)] = c__14385__auto___18544);

return statearr_18543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14387__auto__);
});})(c__14385__auto___18544,out))
);


return out;
});
