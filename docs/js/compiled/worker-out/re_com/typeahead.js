// Compiled by ClojureScript 1.10.520 {:target :webworker}
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
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__12067){
var map__12068 = p__12067;
var map__12068__$1 = (((((!((map__12068 == null))))?(((((map__12068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12068):map__12068);
var args = map__12068__$1;
var on_change = cljs.core.get.call(null,map__12068__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__12068__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__12068__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var immediate_model_update_QMARK_ = cljs.core.get.call(null,map__12068__$1,new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618));
var data_source = cljs.core.get.call(null,map__12068__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__12068__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__12068__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__12068__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__12070 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__4131__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,immediate_model_update_QMARK_,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__12070,external_model_value);
} else {
return G__12070;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__12071,event){
var map__12072 = p__12071;
var map__12072__$1 = (((((!((map__12072 == null))))?(((((map__12072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12072):map__12072);
var state = map__12072__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__12072__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__12072__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var immediate_model_update_QMARK_ = cljs.core.get.call(null,map__12072__$1,new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var immediate_model_update_QMARK___$1 = re_com.util.deref_or_value.call(null,immediate_model_update_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__12074 = event;
var G__12074__$1 = (((G__12074 instanceof cljs.core.Keyword))?G__12074.fqn:null);
switch (G__12074__$1) {
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
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__12076,event){
var map__12077 = p__12076;
var map__12077__$1 = (((((!((map__12077 == null))))?(((((map__12077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12077):map__12077);
var state = map__12077__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__12077__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__12079 = event;
var G__12079__$1 = (((G__12079 instanceof cljs.core.Keyword))?G__12079.fqn:null);
switch (G__12079__$1) {
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
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__12081,new_value){
var map__12082 = p__12081;
var map__12082__$1 = (((((!((map__12082 == null))))?(((((map__12082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12082):map__12082);
var state = map__12082__$1;
var on_change = cljs.core.get.call(null,map__12082__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__12084,suggestion){
var map__12085 = p__12084;
var map__12085__$1 = (((((!((map__12085 == null))))?(((((map__12085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12085):map__12085);
var state = map__12085__$1;
var suggestion_to_string = cljs.core.get.call(null,map__12085__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__12087 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__12087,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__12087;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__12088,index){
var map__12089 = p__12088;
var map__12089__$1 = (((((!((map__12089 == null))))?(((((map__12089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12089):map__12089);
var state = map__12089__$1;
var suggestions = cljs.core.get.call(null,map__12089__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__12091 = state;
var G__12091__$1 = cljs.core.assoc.call(null,G__12091,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__12091__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__12091__$1,suggestion):G__12091__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__12091__$2,suggestion);
} else {
return G__12091__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__12092,index){
var map__12093 = p__12092;
var map__12093__$1 = (((((!((map__12093 == null))))?(((((map__12093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12093):map__12093);
var state = map__12093__$1;
var suggestions = cljs.core.get.call(null,map__12093__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__12095){
var map__12096 = p__12095;
var map__12096__$1 = (((((!((map__12096 == null))))?(((((map__12096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12096):map__12096);
var state = map__12096__$1;
var suggestion_active_index = cljs.core.get.call(null,map__12096__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__12098 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__12098,suggestion_active_index);
} else {
return G__12098;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__12099){
var map__12100 = p__12099;
var map__12100__$1 = (((((!((map__12100 == null))))?(((((map__12100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12100):map__12100);
var state = map__12100__$1;
var suggestions = cljs.core.get.call(null,map__12100__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__12100__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__12102 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__12102,re_com.typeahead.wrap.call(null,((function (){var or__4131__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__12102;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__12103){
var map__12104 = p__12103;
var map__12104__$1 = (((((!((map__12104 == null))))?(((((map__12104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12104):map__12104);
var state = map__12104__$1;
var suggestions = cljs.core.get.call(null,map__12104__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__12104__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__12106 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__12106,re_com.typeahead.wrap.call(null,((function (){var or__4131__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__12106;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__12107 = state;
var G__12107__$1 = re_com.typeahead.clear_suggestions.call(null,G__12107)
;
var G__12107__$2 = cljs.core.assoc.call(null,G__12107__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__12107__$2,null);
} else {
return G__12107__$2;
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
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__12108){
var map__12109 = p__12108;
var map__12109__$1 = (((((!((map__12109 == null))))?(((((map__12109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12109):map__12109);
var state = map__12109__$1;
var input_text = cljs.core.get.call(null,map__12109__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__12109__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
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
var temp__5718__auto__ = data_source.call(null,text,(function (p1__12111_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__12111_SHARP_);
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
var c__10049__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10049__auto__){
return (function (){
var f__10050__auto__ = (function (){var switch__10032__auto__ = ((function (c__10049__auto__){
return (function (state_12129){
var state_val_12130 = (state_12129[(1)]);
if((state_val_12130 === (1))){
var state_12129__$1 = state_12129;
var statearr_12131_12144 = state_12129__$1;
(statearr_12131_12144[(2)] = null);

(statearr_12131_12144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12130 === (2))){
var state_12129__$1 = state_12129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12129__$1,(4),c_search);
} else {
if((state_val_12130 === (3))){
var inst_12127 = (state_12129[(2)]);
var state_12129__$1 = state_12129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12129__$1,inst_12127);
} else {
if((state_val_12130 === (4))){
var inst_12114 = (state_12129[(7)]);
var inst_12114__$1 = (state_12129[(2)]);
var inst_12115 = cljs.core.deref.call(null,state_atom);
var inst_12116 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_12115);
var inst_12117 = cljs.core._EQ_.call(null,"",inst_12114__$1);
var state_12129__$1 = (function (){var statearr_12132 = state_12129;
(statearr_12132[(7)] = inst_12114__$1);

(statearr_12132[(8)] = inst_12116);

return statearr_12132;
})();
if(inst_12117){
var statearr_12133_12145 = state_12129__$1;
(statearr_12133_12145[(1)] = (5));

} else {
var statearr_12134_12146 = state_12129__$1;
(statearr_12134_12146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12130 === (5))){
var inst_12116 = (state_12129[(8)]);
var inst_12119 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var inst_12120 = re_com.typeahead.search_data_source_BANG_.call(null,inst_12116,state_atom,"");
var state_12129__$1 = (function (){var statearr_12135 = state_12129;
(statearr_12135[(9)] = inst_12119);

return statearr_12135;
})();
var statearr_12136_12147 = state_12129__$1;
(statearr_12136_12147[(2)] = inst_12120);

(statearr_12136_12147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12130 === (6))){
var inst_12114 = (state_12129[(7)]);
var inst_12116 = (state_12129[(8)]);
var inst_12122 = re_com.typeahead.search_data_source_BANG_.call(null,inst_12116,state_atom,inst_12114);
var state_12129__$1 = state_12129;
var statearr_12137_12148 = state_12129__$1;
(statearr_12137_12148[(2)] = inst_12122);

(statearr_12137_12148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12130 === (7))){
var inst_12124 = (state_12129[(2)]);
var state_12129__$1 = (function (){var statearr_12138 = state_12129;
(statearr_12138[(10)] = inst_12124);

return statearr_12138;
})();
var statearr_12139_12149 = state_12129__$1;
(statearr_12139_12149[(2)] = null);

(statearr_12139_12149[(1)] = (2));


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
});})(c__10049__auto__))
;
return ((function (switch__10032__auto__,c__10049__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__10033__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__10033__auto____0 = (function (){
var statearr_12140 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12140[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__10033__auto__);

(statearr_12140[(1)] = (1));

return statearr_12140;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__10033__auto____1 = (function (state_12129){
while(true){
var ret_value__10034__auto__ = (function (){try{while(true){
var result__10035__auto__ = switch__10032__auto__.call(null,state_12129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10035__auto__;
}
break;
}
}catch (e12141){if((e12141 instanceof Object)){
var ex__10036__auto__ = e12141;
var statearr_12142_12150 = state_12129;
(statearr_12142_12150[(5)] = ex__10036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12141;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12151 = state_12129;
state_12129 = G__12151;
continue;
} else {
return ret_value__10034__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__10033__auto__ = function(state_12129){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__10033__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__10033__auto____1.call(this,state_12129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__10033__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__10033__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__10033__auto__;
})()
;})(switch__10032__auto__,c__10049__auto__))
})();
var state__10051__auto__ = (function (){var statearr_12143 = f__10050__auto__.call(null);
(statearr_12143[(6)] = c__10049__auto__);

return statearr_12143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10051__auto__);
});})(c__10049__auto__))
);

return c__10049__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__12153 = cljs.core.deref.call(null,state_atom);
var map__12153__$1 = (((((!((map__12153 == null))))?(((((map__12153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12153):map__12153);
var state = map__12153__$1;
var input_text = cljs.core.get.call(null,map__12153__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__12153__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__12153,map__12153__$1,state,input_text,c_input){
return (function (p1__12152_SHARP_){
var G__12155 = p1__12152_SHARP_;
var G__12155__$1 = cljs.core.assoc.call(null,G__12155,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__12155__$1,new_text);
} else {
return G__12155__$1;
}
});})(map__12153,map__12153__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__12156 = cljs.core._EQ_;
var expr__12157 = event.which;
if(cljs.core.truth_(pred__12156.call(null,goog.events.KeyCodes.UP,expr__12157))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__12156.call(null,goog.events.KeyCodes.DOWN,expr__12157))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__12156.call(null,goog.events.KeyCodes.ENTER,expr__12157))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__12156.call(null,goog.events.KeyCodes.ESC,expr__12157))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,cljs.core.PersistentVector.EMPTY);
} else {
if(cljs.core.truth_(pred__12156.call(null,goog.events.KeyCodes.TAB,expr__12157))){
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
var len__4730__auto___12181 = arguments.length;
var i__4731__auto___12182 = (0);
while(true){
if((i__4731__auto___12182 < len__4730__auto___12181)){
args__4736__auto__.push((arguments[i__4731__auto___12182]));

var G__12183 = (i__4731__auto___12182 + (1));
i__4731__auto___12182 = G__12183;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__12161){
var map__12162 = p__12161;
var map__12162__$1 = (((((!((map__12162 == null))))?(((((map__12162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12162):map__12162);
var args = map__12162__$1;
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead"))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__12164 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__12164__$1 = (((((!((map__12164 == null))))?(((((map__12164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12164):map__12164);
var state = map__12164__$1;
var c_search = cljs.core.get.call(null,map__12164__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__12164__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__12164,map__12164__$1,state,c_search,c_input,state_atom,input_text_model,map__12162,map__12162__$1,args){
return (function() { 
var G__12184__delegate = function (p__12166){
var map__12167 = p__12166;
var map__12167__$1 = (((((!((map__12167 == null))))?(((((map__12167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12167):map__12167);
var args__$1 = map__12167__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__12167__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__12167__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__12167__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__12167__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__12167__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.call(null,map__12167__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var attr = cljs.core.get.call(null,map__12167__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var _on_change = cljs.core.get.call(null,map__12167__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.call(null,map__12167__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__12167__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.call(null,map__12167__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.call(null,map__12167__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.call(null,map__12167__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.call(null,map__12167__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.call(null,map__12167__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.call(null,map__12167__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var _immediate_model_update_QMARK_ = cljs.core.get.call(null,map__12167__$1,new cljs.core.Keyword(null,"_immediate-model-update?","_immediate-model-update?",1035374450));
var status = cljs.core.get.call(null,map__12167__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__12167__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead"))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__12169 = cljs.core.deref.call(null,state_atom);
var map__12169__$1 = (((((!((map__12169 == null))))?(((((map__12169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12169):map__12169);
var state__$1 = map__12169__$1;
var suggestions = cljs.core.get.call(null,map__12169__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__12169__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__12169__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__12169__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
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

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead",new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),((function (map__12169,map__12169__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__12167,map__12167__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__12164,map__12164__$1,state,c_search,c_input,state_atom,input_text_model,map__12162,map__12162__$1,args){
return (function (){
return cljs.core.List.EMPTY;
});})(map__12169,map__12169__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__12167,map__12167__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__12164,map__12164__$1,state,c_search,c_input,state_atom,input_text_model,map__12162,map__12162__$1,args))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (map__12169,map__12169__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__12167,map__12167__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__12164,map__12164__$1,state,c_search,c_input,state_atom,input_text_model,map__12162,map__12162__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,cljs.core.PersistentVector.EMPTY);
});})(map__12169,map__12169__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__12167,map__12167__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__12164,map__12164__$1,state,c_search,c_input,state_atom,input_text_model,map__12162,map__12162__$1,args))
], null)], null),(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__4523__auto__ = ((function (map__12169,map__12169__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__12167,map__12167__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__12164,map__12164__$1,state,c_search,c_input,state_atom,input_text_model,map__12162,map__12162__$1,args){
return (function re_com$typeahead$iter__12171(s__12172){
return (new cljs.core.LazySeq(null,((function (map__12169,map__12169__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__12167,map__12167__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__12164,map__12164__$1,state,c_search,c_input,state_atom,input_text_model,map__12162,map__12162__$1,args){
return (function (){
var s__12172__$1 = s__12172;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__12172__$1);
if(temp__5720__auto__){
var s__12172__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12172__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__12172__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__12174 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__12173 = (0);
while(true){
if((i__12173 < size__4522__auto__)){
var vec__12175 = cljs.core._nth.call(null,c__4521__auto__,i__12173);
var i = cljs.core.nth.call(null,vec__12175,(0),null);
var s = cljs.core.nth.call(null,vec__12175,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__12174,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",((selected_QMARK_)?" active":null)].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__12173,selected_QMARK_,vec__12175,i,s,c__4521__auto__,size__4522__auto__,b__12174,s__12172__$2,temp__5720__auto__,map__12169,map__12169__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__12167,map__12167__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__12164,map__12164__$1,state,c_search,c_input,state_atom,input_text_model,map__12162,map__12162__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__12173,selected_QMARK_,vec__12175,i,s,c__4521__auto__,size__4522__auto__,b__12174,s__12172__$2,temp__5720__auto__,map__12169,map__12169__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__12167,map__12167__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__12164,map__12164__$1,state,c_search,c_input,state_atom,input_text_model,map__12162,map__12162__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__12173,selected_QMARK_,vec__12175,i,s,c__4521__auto__,size__4522__auto__,b__12174,s__12172__$2,temp__5720__auto__,map__12169,map__12169__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__12167,map__12167__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__12164,map__12164__$1,state,c_search,c_input,state_atom,input_text_model,map__12162,map__12162__$1,args){
return (function (p1__12159_SHARP_){
p1__12159_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__12173,selected_QMARK_,vec__12175,i,s,c__4521__auto__,size__4522__auto__,b__12174,s__12172__$2,temp__5720__auto__,map__12169,map__12169__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__12167,map__12167__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__12164,map__12164__$1,state,c_search,c_input,state_atom,input_text_model,map__12162,map__12162__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__12185 = (i__12173 + (1));
i__12173 = G__12185;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12174),re_com$typeahead$iter__12171.call(null,cljs.core.chunk_rest.call(null,s__12172__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12174),null);
}
} else {
var vec__12178 = cljs.core.first.call(null,s__12172__$2);
var i = cljs.core.nth.call(null,vec__12178,(0),null);
var s = cljs.core.nth.call(null,vec__12178,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",((selected_QMARK_)?" active":null)].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__12178,i,s,s__12172__$2,temp__5720__auto__,map__12169,map__12169__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__12167,map__12167__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__12164,map__12164__$1,state,c_search,c_input,state_atom,input_text_model,map__12162,map__12162__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__12178,i,s,s__12172__$2,temp__5720__auto__,map__12169,map__12169__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__12167,map__12167__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__12164,map__12164__$1,state,c_search,c_input,state_atom,input_text_model,map__12162,map__12162__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__12178,i,s,s__12172__$2,temp__5720__auto__,map__12169,map__12169__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__12167,map__12167__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__12164,map__12164__$1,state,c_search,c_input,state_atom,input_text_model,map__12162,map__12162__$1,args){
return (function (p1__12159_SHARP_){
p1__12159_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__12178,i,s,s__12172__$2,temp__5720__auto__,map__12169,map__12169__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__12167,map__12167__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__12164,map__12164__$1,state,c_search,c_input,state_atom,input_text_model,map__12162,map__12162__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__12171.call(null,cljs.core.rest.call(null,s__12172__$2)));
}
} else {
return null;
}
break;
}
});})(map__12169,map__12169__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__12167,map__12167__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__12164,map__12164__$1,state,c_search,c_input,state_atom,input_text_model,map__12162,map__12162__$1,args))
,null,null));
});})(map__12169,map__12169__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__12167,map__12167__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__12164,map__12164__$1,state,c_search,c_input,state_atom,input_text_model,map__12162,map__12162__$1,args))
;
return iter__4523__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__12184 = function (var_args){
var p__12166 = null;
if (arguments.length > 0) {
var G__12186__i = 0, G__12186__a = new Array(arguments.length -  0);
while (G__12186__i < G__12186__a.length) {G__12186__a[G__12186__i] = arguments[G__12186__i + 0]; ++G__12186__i;}
  p__12166 = new cljs.core.IndexedSeq(G__12186__a,0,null);
} 
return G__12184__delegate.call(this,p__12166);};
G__12184.cljs$lang$maxFixedArity = 0;
G__12184.cljs$lang$applyTo = (function (arglist__12187){
var p__12166 = cljs.core.seq(arglist__12187);
return G__12184__delegate(p__12166);
});
G__12184.cljs$core$IFn$_invoke$arity$variadic = G__12184__delegate;
return G__12184;
})()
;
;})(map__12164,map__12164__$1,state,c_search,c_input,state_atom,input_text_model,map__12162,map__12162__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq12160){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12160));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__10049__auto___12268 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10049__auto___12268,out){
return (function (){
var f__10050__auto__ = (function (){var switch__10032__auto__ = ((function (c__10049__auto___12268,out){
return (function (state_12238){
var state_val_12239 = (state_12238[(1)]);
if((state_val_12239 === (7))){
var inst_12193 = (state_12238[(2)]);
var state_12238__$1 = state_12238;
var statearr_12240_12269 = state_12238__$1;
(statearr_12240_12269[(2)] = inst_12193);

(statearr_12240_12269[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12239 === (1))){
var inst_12188 = null;
var state_12238__$1 = (function (){var statearr_12241 = state_12238;
(statearr_12241[(7)] = inst_12188);

return statearr_12241;
})();
var statearr_12242_12270 = state_12238__$1;
(statearr_12242_12270[(2)] = null);

(statearr_12242_12270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12239 === (4))){
var state_12238__$1 = state_12238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12238__$1,(7),in$);
} else {
if((state_val_12239 === (15))){
var inst_12223 = (state_12238[(2)]);
var state_12238__$1 = (function (){var statearr_12243 = state_12238;
(statearr_12243[(8)] = inst_12223);

return statearr_12243;
})();
var statearr_12244_12271 = state_12238__$1;
(statearr_12244_12271[(2)] = null);

(statearr_12244_12271[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12239 === (13))){
var inst_12211 = (state_12238[(9)]);
var inst_12225 = cljs.core._EQ_.call(null,inst_12211,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_12238__$1 = state_12238;
if(inst_12225){
var statearr_12245_12272 = state_12238__$1;
(statearr_12245_12272[(1)] = (16));

} else {
var statearr_12246_12273 = state_12238__$1;
(statearr_12246_12273[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12239 === (6))){
var inst_12197 = (state_12238[(10)]);
var inst_12196 = (state_12238[(2)]);
var inst_12197__$1 = cljs.core.async.timeout.call(null,ms);
var inst_12205 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12206 = [in$,inst_12197__$1];
var inst_12207 = (new cljs.core.PersistentVector(null,2,(5),inst_12205,inst_12206,null));
var state_12238__$1 = (function (){var statearr_12247 = state_12238;
(statearr_12247[(10)] = inst_12197__$1);

(statearr_12247[(11)] = inst_12196);

return statearr_12247;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_12238__$1,(8),inst_12207);
} else {
if((state_val_12239 === (17))){
var state_12238__$1 = state_12238;
var statearr_12248_12274 = state_12238__$1;
(statearr_12248_12274[(2)] = null);

(statearr_12248_12274[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12239 === (3))){
var inst_12236 = (state_12238[(2)]);
var state_12238__$1 = state_12238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12238__$1,inst_12236);
} else {
if((state_val_12239 === (12))){
var inst_12196 = (state_12238[(11)]);
var state_12238__$1 = state_12238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12238__$1,(15),out,inst_12196);
} else {
if((state_val_12239 === (2))){
var inst_12188 = (state_12238[(7)]);
var inst_12190 = (inst_12188 == null);
var state_12238__$1 = state_12238;
if(cljs.core.truth_(inst_12190)){
var statearr_12249_12275 = state_12238__$1;
(statearr_12249_12275[(1)] = (4));

} else {
var statearr_12250_12276 = state_12238__$1;
(statearr_12250_12276[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12239 === (11))){
var inst_12233 = (state_12238[(2)]);
var inst_12188 = inst_12233;
var state_12238__$1 = (function (){var statearr_12251 = state_12238;
(statearr_12251[(7)] = inst_12188);

return statearr_12251;
})();
var statearr_12252_12277 = state_12238__$1;
(statearr_12252_12277[(2)] = null);

(statearr_12252_12277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12239 === (9))){
var inst_12209 = (state_12238[(12)]);
var inst_12217 = cljs.core.nth.call(null,inst_12209,(0),null);
var inst_12218 = cljs.core.nth.call(null,inst_12209,(1),null);
var state_12238__$1 = (function (){var statearr_12253 = state_12238;
(statearr_12253[(13)] = inst_12218);

return statearr_12253;
})();
var statearr_12254_12278 = state_12238__$1;
(statearr_12254_12278[(2)] = inst_12217);

(statearr_12254_12278[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12239 === (5))){
var inst_12188 = (state_12238[(7)]);
var state_12238__$1 = state_12238;
var statearr_12255_12279 = state_12238__$1;
(statearr_12255_12279[(2)] = inst_12188);

(statearr_12255_12279[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12239 === (14))){
var inst_12231 = (state_12238[(2)]);
var state_12238__$1 = state_12238;
var statearr_12256_12280 = state_12238__$1;
(statearr_12256_12280[(2)] = inst_12231);

(statearr_12256_12280[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12239 === (16))){
var inst_12210 = (state_12238[(14)]);
var state_12238__$1 = state_12238;
var statearr_12257_12281 = state_12238__$1;
(statearr_12257_12281[(2)] = inst_12210);

(statearr_12257_12281[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12239 === (10))){
var inst_12211 = (state_12238[(9)]);
var inst_12197 = (state_12238[(10)]);
var inst_12220 = cljs.core._EQ_.call(null,inst_12211,inst_12197);
var state_12238__$1 = state_12238;
if(inst_12220){
var statearr_12258_12282 = state_12238__$1;
(statearr_12258_12282[(1)] = (12));

} else {
var statearr_12259_12283 = state_12238__$1;
(statearr_12259_12283[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12239 === (18))){
var inst_12229 = (state_12238[(2)]);
var state_12238__$1 = state_12238;
var statearr_12260_12284 = state_12238__$1;
(statearr_12260_12284[(2)] = inst_12229);

(statearr_12260_12284[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12239 === (8))){
var inst_12209 = (state_12238[(12)]);
var inst_12211 = (state_12238[(9)]);
var inst_12209__$1 = (state_12238[(2)]);
var inst_12210 = cljs.core.nth.call(null,inst_12209__$1,(0),null);
var inst_12211__$1 = cljs.core.nth.call(null,inst_12209__$1,(1),null);
var inst_12212 = cljs.core._EQ_.call(null,inst_12211__$1,in$);
var state_12238__$1 = (function (){var statearr_12261 = state_12238;
(statearr_12261[(12)] = inst_12209__$1);

(statearr_12261[(9)] = inst_12211__$1);

(statearr_12261[(14)] = inst_12210);

return statearr_12261;
})();
if(inst_12212){
var statearr_12262_12285 = state_12238__$1;
(statearr_12262_12285[(1)] = (9));

} else {
var statearr_12263_12286 = state_12238__$1;
(statearr_12263_12286[(1)] = (10));

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
});})(c__10049__auto___12268,out))
;
return ((function (switch__10032__auto__,c__10049__auto___12268,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__10033__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__10033__auto____0 = (function (){
var statearr_12264 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12264[(0)] = re_com$typeahead$debounce_$_state_machine__10033__auto__);

(statearr_12264[(1)] = (1));

return statearr_12264;
});
var re_com$typeahead$debounce_$_state_machine__10033__auto____1 = (function (state_12238){
while(true){
var ret_value__10034__auto__ = (function (){try{while(true){
var result__10035__auto__ = switch__10032__auto__.call(null,state_12238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10035__auto__;
}
break;
}
}catch (e12265){if((e12265 instanceof Object)){
var ex__10036__auto__ = e12265;
var statearr_12266_12287 = state_12238;
(statearr_12266_12287[(5)] = ex__10036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12288 = state_12238;
state_12238 = G__12288;
continue;
} else {
return ret_value__10034__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__10033__auto__ = function(state_12238){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__10033__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__10033__auto____1.call(this,state_12238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$debounce_$_state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__10033__auto____0;
re_com$typeahead$debounce_$_state_machine__10033__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__10033__auto____1;
return re_com$typeahead$debounce_$_state_machine__10033__auto__;
})()
;})(switch__10032__auto__,c__10049__auto___12268,out))
})();
var state__10051__auto__ = (function (){var statearr_12267 = f__10050__auto__.call(null);
(statearr_12267[(6)] = c__10049__auto___12268);

return statearr_12267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10051__auto__);
});})(c__10049__auto___12268,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map
