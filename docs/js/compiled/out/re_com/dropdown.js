// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_com.dropdown');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_com.util');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('clojure.string');
goog.require('reagent.core');
/**
 * In a vector of maps (where each map has an :id), return the id of the choice offset posititions away
 * from id (usually +1 or -1 to go to next/previous). Also accepts :start and :end
 */
re_com.dropdown.move_to_new_choice = (function re_com$dropdown$move_to_new_choice(choices,id_fn,id,offset){
var current_index = re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic(id,choices,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id_DASH_fn,id_fn], 0));
var new_index = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(offset,cljs.core.cst$kw$start))?(0):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(offset,cljs.core.cst$kw$end))?(cljs.core.count(choices) - (1)):(((current_index == null))?(0):cljs.core.mod((current_index + offset),cljs.core.count(choices))
)));
if(cljs.core.truth_((function (){var and__4120__auto__ = new_index;
if(cljs.core.truth_(and__4120__auto__)){
return (cljs.core.count(choices) > (0));
} else {
return and__4120__auto__;
}
})())){
var G__20915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(choices,new_index);
return (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(G__20915) : id_fn.call(null,G__20915));
} else {
return null;
}
});
/**
 * If necessary, inserts group headings entries into the choices
 */
re_com.dropdown.choices_with_group_headings = (function re_com$dropdown$choices_with_group_headings(opts,group_fn){
var groups = cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(group_fn,opts);
var group_headers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (groups){
return (function (p1__20916_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$id,cljs.core.cst$kw$group],[cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),p1__20916_SHARP_]);
});})(groups))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(group_fn,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,groups)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_headers,groups], null);
});
/**
 * Filter a list of choices based on a filter string using plain string searches (case insensitive). Less powerful
 * than regex's but no confusion with reserved characters
 */
re_com.dropdown.filter_choices = (function re_com$dropdown$filter_choices(choices,group_fn,label_fn,filter_text){
var lower_filter_text = clojure.string.lower_case(filter_text);
var filter_fn = ((function (lower_filter_text){
return (function (opt){
var group = ((((group_fn.cljs$core$IFn$_invoke$arity$1 ? group_fn.cljs$core$IFn$_invoke$arity$1(opt) : group_fn.call(null,opt)) == null))?"":(group_fn.cljs$core$IFn$_invoke$arity$1 ? group_fn.cljs$core$IFn$_invoke$arity$1(opt) : group_fn.call(null,opt)));
var label = cljs.core.str.cljs$core$IFn$_invoke$arity$1((label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(opt) : label_fn.call(null,opt)));
return (((clojure.string.lower_case(group).indexOf(lower_filter_text) >= (0))) || ((clojure.string.lower_case(label).indexOf(lower_filter_text) >= (0))));
});})(lower_filter_text))
;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filter_fn,choices);
});
/**
 * Filter a list of choices based on a filter string using regex's (case insensitive). More powerful but can cause
 * confusion for users entering reserved characters such as [ ] * + . ( ) etc.
 */
re_com.dropdown.filter_choices_regex = (function re_com$dropdown$filter_choices_regex(choices,group_fn,label_fn,filter_text){
var re = (function (){try{return (new RegExp(filter_text,"i"));
}catch (e20917){if((e20917 instanceof Object)){
var e = e20917;
return null;
} else {
throw e20917;

}
}})();
var filter_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(((function (re){
return (function (re__$1,opt){
if((re__$1 == null)){
return null;
} else {
var or__4131__auto__ = re__$1.test((group_fn.cljs$core$IFn$_invoke$arity$1 ? group_fn.cljs$core$IFn$_invoke$arity$1(opt) : group_fn.call(null,opt)));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return re__$1.test((label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(opt) : label_fn.call(null,opt)));
}
}
});})(re))
,re);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filter_fn,choices);
});
/**
 * Filter a list of choices extra data within the choices vector
 */
re_com.dropdown.filter_choices_by_keyword = (function re_com$dropdown$filter_choices_by_keyword(choices,keyword,value){
var filter_fn = (function (opt){
return ((keyword.cljs$core$IFn$_invoke$arity$1 ? keyword.cljs$core$IFn$_invoke$arity$1(opt) : keyword.call(null,opt)).indexOf(value) >= (0));
});
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filter_fn,choices);
});
re_com.dropdown.show_selected_item = (function re_com$dropdown$show_selected_item(node){
var item_offset_top = node.offsetTop;
var item_offset_bottom = (item_offset_top + node.clientHeight);
var parent = node.parentNode;
var parent_height = parent.clientHeight;
var parent_visible_top = parent.scrollTop;
var parent_visible_bottom = (parent_visible_top + parent_height);
var new_scroll_top = (((item_offset_bottom > parent_visible_bottom))?(function (){var x__4219__auto__ = (item_offset_bottom - parent_height);
var y__4220__auto__ = (0);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})():(((item_offset_top < parent_visible_top))?item_offset_top:null));
if(cljs.core.truth_(new_scroll_top)){
return parent.scrollTop = new_scroll_top;
} else {
return null;
}
});
/**
 * Render a group heading
 */
re_com.dropdown.make_group_heading = (function re_com$dropdown$make_group_heading(m){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$group_DASH_result,cljs.core.cst$kw$group.cljs$core$IFn$_invoke$arity$1(m)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(m)], null));
});
/**
 * Render a choice item and set up appropriate mouse events
 */
re_com.dropdown.choice_item = (function re_com$dropdown$choice_item(id,label,on_click,internal_model){
var mouse_over_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$component_DASH_did_DASH_mount,((function (mouse_over_QMARK_){
return (function (this$){
var node = reagent.core.dom_node(this$);
var selected = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(internal_model),id);
if(selected){
return re_com.dropdown.show_selected_item(node);
} else {
return null;
}
});})(mouse_over_QMARK_))
,cljs.core.cst$kw$component_DASH_did_DASH_update,((function (mouse_over_QMARK_){
return (function (this$){
var node = reagent.core.dom_node(this$);
var selected = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(internal_model),id);
if(selected){
return re_com.dropdown.show_selected_item(node);
} else {
return null;
}
});})(mouse_over_QMARK_))
,cljs.core.cst$kw$display_DASH_name,"choice-item",cljs.core.cst$kw$reagent_DASH_render,((function (mouse_over_QMARK_){
return (function (id__$1,label__$1,on_click__$1,internal_model__$1){
var selected = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(internal_model__$1),id__$1);
var class$ = ((selected)?"highlighted":(cljs.core.truth_(cljs.core.deref(mouse_over_QMARK_))?"mouseover":null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,["active-result group-option ",class$].join(''),cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (selected,class$,mouse_over_QMARK_){
return (function (event){
cljs.core.reset_BANG_(mouse_over_QMARK_,true);

return null;
});})(selected,class$,mouse_over_QMARK_))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (selected,class$,mouse_over_QMARK_){
return (function (event){
cljs.core.reset_BANG_(mouse_over_QMARK_,false);

return null;
});})(selected,class$,mouse_over_QMARK_))
,cljs.core.cst$kw$on_DASH_mouse_DASH_down,((function (selected,class$,mouse_over_QMARK_){
return (function (event){
(on_click__$1.cljs$core$IFn$_invoke$arity$1 ? on_click__$1.cljs$core$IFn$_invoke$arity$1(id__$1) : on_click__$1.call(null,id__$1));

return null;
});})(selected,class$,mouse_over_QMARK_))
], null),label__$1], null);
});})(mouse_over_QMARK_))
], null));
});
re_com.dropdown.make_choice_item = (function re_com$dropdown$make_choice_item(id_fn,render_fn,callback,internal_model,opt){
var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(opt) : id_fn.call(null,opt));
var markup = (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(opt) : render_fn.call(null,opt));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.dropdown.choice_item,id,markup,callback,internal_model], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null));
});
/**
 * Base function (before lifecycle metadata) to render a filter text box
 */
re_com.dropdown.filter_text_box_base = (function re_com$dropdown$filter_text_box_base(filter_box_QMARK_,filter_text,key_handler,drop_showing_QMARK_,set_filter_text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$chosen_DASH_search,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$auto_DASH_complete,"off",cljs.core.cst$kw$style,(cljs.core.truth_(filter_box_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$width,"0px",cljs.core.cst$kw$padding,"0px",cljs.core.cst$kw$border,"none"], null)),cljs.core.cst$kw$value,cljs.core.deref(filter_text),cljs.core.cst$kw$on_DASH_change,(function (event){
var G__20918_20919 = event.target.value;
(set_filter_text.cljs$core$IFn$_invoke$arity$1 ? set_filter_text.cljs$core$IFn$_invoke$arity$1(G__20918_20919) : set_filter_text.call(null,G__20918_20919));

return null;
}),cljs.core.cst$kw$on_DASH_key_DASH_down,(function (event){
if(cljs.core.truth_((key_handler.cljs$core$IFn$_invoke$arity$1 ? key_handler.cljs$core$IFn$_invoke$arity$1(event) : key_handler.call(null,event)))){
} else {
event.preventDefault();
}

return null;
}),cljs.core.cst$kw$on_DASH_blur,(function (event){
cljs.core.reset_BANG_(drop_showing_QMARK_,false);

return null;
})], null)], null)], null);
});
/**
 * Render a filter text box
 */
re_com.dropdown.filter_text_box = cljs.core.with_meta(re_com.dropdown.filter_text_box_base,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (p1__20920_SHARP_){
var node = reagent.core.dom_node(p1__20920_SHARP_).firstChild;
return node.focus();
}),cljs.core.cst$kw$component_DASH_did_DASH_update,(function (p1__20921_SHARP_){
var node = reagent.core.dom_node(p1__20921_SHARP_).firstChild;
return node.focus();
})], null));
/**
 * Render the top part of the dropdown, with the clickable area and the up/down arrow
 */
re_com.dropdown.dropdown_top = (function re_com$dropdown$dropdown_top(){
var ignore_click = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (ignore_click){
return (function (internal_model,choices,id_fn,label_fn,tab_index,placeholder,dropdown_click,key_handler,filter_box_QMARK_,drop_showing_QMARK_,title_QMARK_){
var _ = reagent.core.set_state(reagent.core.current_component(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$filter_DASH_box_QMARK_,filter_box_QMARK_], null));
var text = (cljs.core.truth_(cljs.core.deref(internal_model))?(function (){var G__20922 = re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(internal_model),choices,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id_DASH_fn,id_fn], 0));
return (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(G__20922) : label_fn.call(null,G__20922));
})():placeholder);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$chosen_DASH_single$chosen_DASH_default,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$href,"javascript:",cljs.core.cst$kw$tab_DASH_index,tab_index,cljs.core.cst$kw$on_DASH_click,((function (_,text,ignore_click){
return (function (event){
if(cljs.core.truth_(cljs.core.deref(ignore_click))){
cljs.core.reset_BANG_(ignore_click,false);
} else {
(dropdown_click.cljs$core$IFn$_invoke$arity$0 ? dropdown_click.cljs$core$IFn$_invoke$arity$0() : dropdown_click.call(null));
}

return null;
});})(_,text,ignore_click))
,cljs.core.cst$kw$on_DASH_mouse_DASH_down,((function (_,text,ignore_click){
return (function (event){
if(cljs.core.truth_(cljs.core.deref(drop_showing_QMARK_))){
cljs.core.reset_BANG_(ignore_click,true);
} else {
}

return null;
});})(_,text,ignore_click))
,cljs.core.cst$kw$on_DASH_key_DASH_down,((function (_,text,ignore_click){
return (function (event){
(key_handler.cljs$core$IFn$_invoke$arity$1 ? key_handler.cljs$core$IFn$_invoke$arity$1(event) : key_handler.call(null,event));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.which,(13))){
cljs.core.reset_BANG_(ignore_click,true);
} else {
}

return null;
});})(_,text,ignore_click))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,(cljs.core.truth_(title_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$title,text], null):null),text], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b], null)], null)], null);
});
;})(ignore_click))
});
re_com.dropdown.fn_or_vector_of_maps_QMARK_ = (function re_com$dropdown$fn_or_vector_of_maps_QMARK_(v){
return ((cljs.core.fn_QMARK_(v)) || (re_com.validate.vector_of_maps_QMARK_(v)));
});
/**
 * Load choices if choices is callback.
 */
re_com.dropdown.load_choices_STAR_ = (function re_com$dropdown$load_choices_STAR_(choices_state,choices,text,regex_filter_QMARK_){
var id = (cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(choices_state)) + (1));
var callback = ((function (id){
return (function (p__20925){
var map__20926 = p__20925;
var map__20926__$1 = (((((!((map__20926 == null))))?(((((map__20926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20926):map__20926);
var args = map__20926__$1;
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20926__$1,cljs.core.cst$kw$result);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20926__$1,cljs.core.cst$kw$error);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(choices_state)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(choices_state,cljs.core.assoc,cljs.core.cst$kw$loading_QMARK_,false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$error,error,cljs.core.cst$kw$choices,result], 0));
} else {
return null;
}
});})(id))
;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(choices_state,cljs.core.assoc,cljs.core.cst$kw$loading_QMARK_,true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$error,null,cljs.core.cst$kw$id,id,cljs.core.cst$kw$timer,null], 0));

var G__20928 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$filter_DASH_text,text,cljs.core.cst$kw$regex_DASH_filter_QMARK_,regex_filter_QMARK_], null);
var G__20929 = ((function (G__20928,id,callback){
return (function (p1__20923_SHARP_){
return callback(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$result,p1__20923_SHARP_], null));
});})(G__20928,id,callback))
;
var G__20930 = ((function (G__20928,G__20929,id,callback){
return (function (p1__20924_SHARP_){
return callback(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,p1__20924_SHARP_], null));
});})(G__20928,G__20929,id,callback))
;
return (choices.cljs$core$IFn$_invoke$arity$3 ? choices.cljs$core$IFn$_invoke$arity$3(G__20928,G__20929,G__20930) : choices.call(null,G__20928,G__20929,G__20930));
});
/**
 * Load choices or schedule lodaing depending on debounce?
 */
re_com.dropdown.load_choices = (function re_com$dropdown$load_choices(choices_state,choices,debounce_delay,text,regex_filter_QMARK_,debounce_QMARK_){
if(cljs.core.fn_QMARK_(choices)){
var temp__5720__auto___20931 = cljs.core.cst$kw$timer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(choices_state));
if(cljs.core.truth_(temp__5720__auto___20931)){
var timer_20932 = temp__5720__auto___20931;
clearTimeout(timer_20932);
} else {
}

if(cljs.core.truth_(debounce_QMARK_)){
var timer = setTimeout((function (){
return re_com.dropdown.load_choices_STAR_(choices_state,choices,text,regex_filter_QMARK_);
}),debounce_delay);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(choices_state,cljs.core.assoc,cljs.core.cst$kw$timer,timer);
} else {
return re_com.dropdown.load_choices_STAR_(choices_state,choices,text,regex_filter_QMARK_);
}
} else {
return null;
}
});
re_com.dropdown.single_dropdown_args_desc = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$choices,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"vector of choices | atom | (opts, done, fail) -> nil",cljs.core.cst$kw$validate_DASH_fn,re_com.dropdown.fn_or_vector_of_maps_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Each is expected to have an id, label and, optionally, a group, provided by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":id-fn"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":label-fn"], null)," & ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":group-fn"], null),". May also be a callback ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"(opts, done, fail)"], null)," where opts is map of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":filter-text"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":regex-filter?."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$model,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"the id of a choice | atom",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"the id of the selected choice. If nil, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":placeholder"], null)," text is shown"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"id -> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"called when a new choice is selected. Passed the id of new choice"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$id,cljs.core.cst$kw$type,"choice -> anything",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":choices"], null),", returns its unique identifier (aka id)"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$label,cljs.core.cst$kw$type,"choice -> string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":choices"], null),", returns its displayable label."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$group_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$group,cljs.core.cst$kw$type,"choice -> anything",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":choices"], null),", returns its group identifier"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$render_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"choice -> string | hiccup",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":choices"], null),", returns the markup that will be rendered for that choice. Defaults to the label if no custom markup is required."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$disabled_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,"if true, no user selection is allowed"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$filter_DASH_box_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"if true, a filter text field is placed at the top of the dropdown"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$regex_DASH_filter_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,"if true, the filter text field will support JavaScript regular expressions. If false, just plain text"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$placeholder,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"background text when no selection"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$title_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"if true, allows the title for the selected dropdown to be displayed via a mouse over. Handy when dropdown width is small and text is truncated"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"100%",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"the CSS width. e.g.: \"500px\" or \"20em\""], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$max_DASH_height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"240px",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"the maximum height of the dropdown part"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$tab_DASH_index,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"integer | string",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.number_or_string_QMARK_,cljs.core.cst$kw$description,"component's tabindex. A value of -1 removes from order"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$debounce_DASH_delay,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"integer",cljs.core.cst$kw$validate_DASH_fn,cljs.core.number_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"delay to debounce loading requests when using callback ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":choices"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to the outer container)"], null)], null)], null);
/**
 * Render a single dropdown component which emulates the bootstrap-choosen style. Sample choices object:
 *   [{:id "AU" :label "Australia"      :group "Group 1"}
 *    {:id "US" :label "United States"  :group "Group 1"}
 *    {:id "GB" :label "United Kingdom" :group "Group 1"}
 *    {:id "AF" :label "Afghanistan"    :group "Group 2"}]
 */
re_com.dropdown.single_dropdown = (function re_com$dropdown$single_dropdown(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20953 = arguments.length;
var i__4731__auto___20954 = (0);
while(true){
if((i__4731__auto___20954 < len__4730__auto___20953)){
args__4736__auto__.push((arguments[i__4731__auto___20954]));

var G__20955 = (i__4731__auto___20954 + (1));
i__4731__auto___20954 = G__20955;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.dropdown.single_dropdown.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.dropdown.single_dropdown.cljs$core$IFn$_invoke$arity$variadic = (function (p__20938){
var map__20939 = p__20938;
var map__20939__$1 = (((((!((map__20939 == null))))?(((((map__20939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20939):map__20939);
var args = map__20939__$1;
var choices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20939__$1,cljs.core.cst$kw$choices);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20939__$1,cljs.core.cst$kw$model);
var regex_filter_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20939__$1,cljs.core.cst$kw$regex_DASH_filter_QMARK_);
var debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20939__$1,cljs.core.cst$kw$debounce_DASH_delay,(250));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.dropdown.single_dropdown_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["single-dropdown"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro single-dropdown-args-desc args \"single-dropdown\")"));
}

var external_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(model));
var internal_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(external_model));
var drop_showing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var filter_text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var choices_fn_QMARK_ = cljs.core.fn_QMARK_(choices);
var choices_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$loading_QMARK_,choices_fn_QMARK_,cljs.core.cst$kw$error,null,cljs.core.cst$kw$choices,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$id,(0),cljs.core.cst$kw$timer,null], null));
var load_choices = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(re_com.dropdown.load_choices,choices_state,choices,debounce_delay);
var set_filter_text = ((function (external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,map__20939,map__20939__$1,args,choices,model,regex_filter_QMARK_,debounce_delay){
return (function (text,p__20941,debounce_QMARK_){
var map__20942 = p__20941;
var map__20942__$1 = (((((!((map__20942 == null))))?(((((map__20942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20942):map__20942);
var args__$1 = map__20942__$1;
var regex_filter_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20942__$1,cljs.core.cst$kw$regex_DASH_filter_QMARK_);
(load_choices.cljs$core$IFn$_invoke$arity$3 ? load_choices.cljs$core$IFn$_invoke$arity$3(text,regex_filter_QMARK___$1,debounce_QMARK_) : load_choices.call(null,text,regex_filter_QMARK___$1,debounce_QMARK_));

return cljs.core.reset_BANG_(filter_text,text);
});})(external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,map__20939,map__20939__$1,args,choices,model,regex_filter_QMARK_,debounce_delay))
;
(load_choices.cljs$core$IFn$_invoke$arity$3 ? load_choices.cljs$core$IFn$_invoke$arity$3("",regex_filter_QMARK_,false) : load_choices.call(null,"",regex_filter_QMARK_,false));

return ((function (external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__20939,map__20939__$1,args,choices,model,regex_filter_QMARK_,debounce_delay){
return (function() { 
var G__20956__delegate = function (p__20944){
var map__20945 = p__20944;
var map__20945__$1 = (((((!((map__20945 == null))))?(((((map__20945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20945):map__20945);
var args__$1 = map__20945__$1;
var group_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20945__$1,cljs.core.cst$kw$group_DASH_fn,cljs.core.cst$kw$group);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20945__$1,cljs.core.cst$kw$disabled_QMARK_);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20945__$1,cljs.core.cst$kw$on_DASH_change);
var model__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20945__$1,cljs.core.cst$kw$model);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20945__$1,cljs.core.cst$kw$attr);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20945__$1,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label);
var tab_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20945__$1,cljs.core.cst$kw$tab_DASH_index);
var max_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20945__$1,cljs.core.cst$kw$max_DASH_height);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20945__$1,cljs.core.cst$kw$placeholder);
var title_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20945__$1,cljs.core.cst$kw$title_QMARK_);
var render_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20945__$1,cljs.core.cst$kw$render_DASH_fn,label_fn);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20945__$1,cljs.core.cst$kw$width);
var regex_filter_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20945__$1,cljs.core.cst$kw$regex_DASH_filter_QMARK_);
var choices__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20945__$1,cljs.core.cst$kw$choices);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20945__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20945__$1,cljs.core.cst$kw$style);
var debounce_delay__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20945__$1,cljs.core.cst$kw$debounce_DASH_delay);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20945__$1,cljs.core.cst$kw$class);
var filter_box_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20945__$1,cljs.core.cst$kw$filter_DASH_box_QMARK_);
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.dropdown.single_dropdown_args_desc),args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["single-dropdown"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro single-dropdown-args-desc args \"single-dropdown\")"));
}

var choices__$2 = ((choices_fn_QMARK_)?cljs.core.cst$kw$choices.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(choices_state)):re_com.util.deref_or_value(choices__$1));
var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
var regex_filter_QMARK___$2 = re_com.util.deref_or_value(regex_filter_QMARK___$1);
var latest_ext_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(model__$1));
var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(external_model),cljs.core.deref(latest_ext_model)))?(function (){
cljs.core.reset_BANG_(external_model,cljs.core.deref(latest_ext_model));

return cljs.core.reset_BANG_(internal_model,cljs.core.deref(latest_ext_model));
})()
:null);
var changeable_QMARK_ = (function (){var and__4120__auto__ = on_change;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(disabled_QMARK___$1);
} else {
return and__4120__auto__;
}
})();
var callback = ((function (choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,map__20945,map__20945__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__20939,map__20939__$1,args,choices,model,regex_filter_QMARK_,debounce_delay){
return (function (p1__20933_SHARP_){
cljs.core.reset_BANG_(internal_model,p1__20933_SHARP_);

if(cljs.core.truth_((function (){var and__4120__auto__ = changeable_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(internal_model),cljs.core.deref(latest_ext_model));
} else {
return and__4120__auto__;
}
})())){
var G__20947_20957 = cljs.core.deref(internal_model);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__20947_20957) : on_change.call(null,G__20947_20957));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(drop_showing_QMARK_,cljs.core.not);

return set_filter_text("",args__$1,false);
});})(choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,map__20945,map__20945__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__20939,map__20939__$1,args,choices,model,regex_filter_QMARK_,debounce_delay))
;
var cancel = ((function (choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,map__20945,map__20945__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__20939,map__20939__$1,args,choices,model,regex_filter_QMARK_,debounce_delay){
return (function (){
cljs.core.reset_BANG_(drop_showing_QMARK_,false);

set_filter_text("",args__$1,false);

return cljs.core.reset_BANG_(internal_model,cljs.core.deref(external_model));
});})(choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,map__20945,map__20945__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__20939,map__20939__$1,args,choices,model,regex_filter_QMARK_,debounce_delay))
;
var dropdown_click = ((function (choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,map__20945,map__20945__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__20939,map__20939__$1,args,choices,model,regex_filter_QMARK_,debounce_delay){
return (function (){
if(cljs.core.truth_(disabled_QMARK___$1)){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(drop_showing_QMARK_,cljs.core.not);
}
});})(choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,map__20945,map__20945__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__20939,map__20939__$1,args,choices,model,regex_filter_QMARK_,debounce_delay))
;
var filtered_choices = ((choices_fn_QMARK_)?choices__$2:(cljs.core.truth_(regex_filter_QMARK___$2)?re_com.dropdown.filter_choices_regex(choices__$2,group_fn,label_fn,cljs.core.deref(filter_text)):re_com.dropdown.filter_choices(choices__$2,group_fn,label_fn,cljs.core.deref(filter_text))));
var press_enter = ((function (choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,map__20945,map__20945__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__20939,map__20939__$1,args,choices,model,regex_filter_QMARK_,debounce_delay){
return (function (){
if(cljs.core.truth_(disabled_QMARK___$1)){
cancel();
} else {
callback(cljs.core.deref(internal_model));
}

return true;
});})(choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,map__20945,map__20945__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__20939,map__20939__$1,args,choices,model,regex_filter_QMARK_,debounce_delay))
;
var press_escape = ((function (choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,press_enter,map__20945,map__20945__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__20939,map__20939__$1,args,choices,model,regex_filter_QMARK_,debounce_delay){
return (function (){
cancel();

return true;
});})(choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,press_enter,map__20945,map__20945__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__20939,map__20939__$1,args,choices,model,regex_filter_QMARK_,debounce_delay))
;
var press_tab = ((function (choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,press_enter,press_escape,map__20945,map__20945__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__20939,map__20939__$1,args,choices,model,regex_filter_QMARK_,debounce_delay){
return (function (){
if(cljs.core.truth_(disabled_QMARK___$1)){
cancel();
} else {
if(cljs.core.truth_(changeable_QMARK_)){
var G__20948_20958 = cljs.core.deref(internal_model);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__20948_20958) : on_change.call(null,G__20948_20958));
} else {
}

cljs.core.reset_BANG_(drop_showing_QMARK_,false);

set_filter_text("",args__$1,false);
}

cljs.core.reset_BANG_(drop_showing_QMARK_,false);

return true;
});})(choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,press_enter,press_escape,map__20945,map__20945__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__20939,map__20939__$1,args,choices,model,regex_filter_QMARK_,debounce_delay))
;
var press_up = ((function (choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,press_enter,press_escape,press_tab,map__20945,map__20945__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__20939,map__20939__$1,args,choices,model,regex_filter_QMARK_,debounce_delay){
return (function (){
if(cljs.core.truth_(cljs.core.deref(drop_showing_QMARK_))){
cljs.core.reset_BANG_(internal_model,re_com.dropdown.move_to_new_choice(filtered_choices,id_fn,cljs.core.deref(internal_model),(-1)));
} else {
cljs.core.reset_BANG_(drop_showing_QMARK_,true);
}

return true;
});})(choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,press_enter,press_escape,press_tab,map__20945,map__20945__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__20939,map__20939__$1,args,choices,model,regex_filter_QMARK_,debounce_delay))
;
var press_down = ((function (choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,press_enter,press_escape,press_tab,press_up,map__20945,map__20945__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__20939,map__20939__$1,args,choices,model,regex_filter_QMARK_,debounce_delay){
return (function (){
if(cljs.core.truth_(cljs.core.deref(drop_showing_QMARK_))){
cljs.core.reset_BANG_(internal_model,re_com.dropdown.move_to_new_choice(filtered_choices,id_fn,cljs.core.deref(internal_model),(1)));
} else {
cljs.core.reset_BANG_(drop_showing_QMARK_,true);
}

return true;
});})(choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,press_enter,press_escape,press_tab,press_up,map__20945,map__20945__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__20939,map__20939__$1,args,choices,model,regex_filter_QMARK_,debounce_delay))
;
var press_home = ((function (choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,press_enter,press_escape,press_tab,press_up,press_down,map__20945,map__20945__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__20939,map__20939__$1,args,choices,model,regex_filter_QMARK_,debounce_delay){
return (function (){
cljs.core.reset_BANG_(internal_model,re_com.dropdown.move_to_new_choice(filtered_choices,id_fn,cljs.core.deref(internal_model),cljs.core.cst$kw$start));

return true;
});})(choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,press_enter,press_escape,press_tab,press_up,press_down,map__20945,map__20945__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__20939,map__20939__$1,args,choices,model,regex_filter_QMARK_,debounce_delay))
;
var press_end = ((function (choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,press_enter,press_escape,press_tab,press_up,press_down,press_home,map__20945,map__20945__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__20939,map__20939__$1,args,choices,model,regex_filter_QMARK_,debounce_delay){
return (function (){
cljs.core.reset_BANG_(internal_model,re_com.dropdown.move_to_new_choice(filtered_choices,id_fn,cljs.core.deref(internal_model),cljs.core.cst$kw$end));

return true;
});})(choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,press_enter,press_escape,press_tab,press_up,press_down,press_home,map__20945,map__20945__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__20939,map__20939__$1,args,choices,model,regex_filter_QMARK_,debounce_delay))
;
var key_handler = ((function (choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,press_enter,press_escape,press_tab,press_up,press_down,press_home,press_end,map__20945,map__20945__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__20939,map__20939__$1,args,choices,model,regex_filter_QMARK_,debounce_delay){
return (function (p1__20934_SHARP_){
if(cljs.core.truth_(disabled_QMARK___$1)){
return false;
} else {
var G__20949 = p1__20934_SHARP_.which;
switch (G__20949) {
case (13):
return press_enter();

break;
case (27):
return press_escape();

break;
case (9):
return press_tab();

break;
case (38):
return press_up();

break;
case (40):
return press_down();

break;
case (36):
return press_home();

break;
case (35):
return press_end();

break;
default:
return filter_box_QMARK_;

}
}
});})(choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,press_enter,press_escape,press_tab,press_up,press_down,press_home,press_end,map__20945,map__20945__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__20939,map__20939__$1,args,choices,model,regex_filter_QMARK_,debounce_delay))
;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-dropdown chosen-container chosen-container-single noselect ",(cljs.core.truth_(cljs.core.deref(drop_showing_QMARK_))?"chosen-container-active chosen-with-drop ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style((cljs.core.truth_(width)?"0 0 auto":"auto")),re_com.box.align_style(cljs.core.cst$kw$align_DASH_self,cljs.core.cst$kw$start),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,width], null),style], 0))], null),attr], 0)),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.dropdown.dropdown_top,internal_model,choices__$2,id_fn,label_fn,tab_index,placeholder,dropdown_click,key_handler,filter_box_QMARK_,drop_showing_QMARK_,title_QMARK_], null),(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.deref(drop_showing_QMARK_);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(disabled_QMARK___$1);
} else {
return and__4120__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$chosen_DASH_drop,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.dropdown.filter_text_box,filter_box_QMARK_,filter_text,key_handler,drop_showing_QMARK_,((function (choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,press_enter,press_escape,press_tab,press_up,press_down,press_home,press_end,key_handler,map__20945,map__20945__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__20939,map__20939__$1,args,choices,model,regex_filter_QMARK_,debounce_delay){
return (function (p1__20935_SHARP_){
return set_filter_text(p1__20935_SHARP_,args__$1,true);
});})(choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,press_enter,press_escape,press_tab,press_up,press_down,press_home,press_end,key_handler,map__20945,map__20945__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__20939,map__20939__$1,args,choices,model,regex_filter_QMARK_,debounce_delay))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$chosen_DASH_results,(cljs.core.truth_(max_height)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_height,max_height], null)], null):null),(cljs.core.truth_((function (){var and__4120__auto__ = choices_fn_QMARK_;
if(and__4120__auto__){
return cljs.core.cst$kw$loading_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(choices_state));
} else {
return and__4120__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$loading,"Loading..."], null):(cljs.core.truth_((function (){var and__4120__auto__ = choices_fn_QMARK_;
if(and__4120__auto__){
return cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(choices_state));
} else {
return and__4120__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$error,cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(choices_state))], null):(((cljs.core.count(filtered_choices) > (0)))?(function (){var vec__20950 = re_com.dropdown.choices_with_group_headings(filtered_choices,group_fn);
var group_names = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20950,(0),null);
var group_opt_lists = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20950,(1),null);
var make_a_choice = cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(re_com.dropdown.make_choice_item,id_fn,render_fn,callback,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([internal_model], 0));
var make_choices = ((function (vec__20950,group_names,group_opt_lists,make_a_choice,choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,press_enter,press_escape,press_tab,press_up,press_down,press_home,press_end,key_handler,map__20945,map__20945__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__20939,map__20939__$1,args,choices,model,regex_filter_QMARK_,debounce_delay){
return (function (p1__20936_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(make_a_choice,p1__20936_SHARP_);
});})(vec__20950,group_names,group_opt_lists,make_a_choice,choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,press_enter,press_escape,press_tab,press_up,press_down,press_home,press_end,key_handler,map__20945,map__20945__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__20939,map__20939__$1,args,choices,model,regex_filter_QMARK_,debounce_delay))
;
var make_h_then_choices = ((function (vec__20950,group_names,group_opt_lists,make_a_choice,make_choices,choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,press_enter,press_escape,press_tab,press_up,press_down,press_home,press_end,key_handler,map__20945,map__20945__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__20939,map__20939__$1,args,choices,model,regex_filter_QMARK_,debounce_delay){
return (function (h,opts){
return cljs.core.cons(re_com.dropdown.make_group_heading(h),make_choices(opts));
});})(vec__20950,group_names,group_opt_lists,make_a_choice,make_choices,choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,press_enter,press_escape,press_tab,press_up,press_down,press_home,press_end,key_handler,map__20945,map__20945__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__20939,map__20939__$1,args,choices,model,regex_filter_QMARK_,debounce_delay))
;
var has_no_group_names_QMARK_ = (cljs.core.cst$kw$group.cljs$core$IFn$_invoke$arity$1(cljs.core.first(group_names)) == null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(group_opt_lists))) && (has_no_group_names_QMARK_))){
return make_choices(cljs.core.first(group_opt_lists));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$3(make_h_then_choices,group_names,group_opt_lists));
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$no_DASH_results,["No results match \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(filter_text)),"\""].join('')], null)
)))], null)], null):null)], null);
};
var G__20956 = function (var_args){
var p__20944 = null;
if (arguments.length > 0) {
var G__20960__i = 0, G__20960__a = new Array(arguments.length -  0);
while (G__20960__i < G__20960__a.length) {G__20960__a[G__20960__i] = arguments[G__20960__i + 0]; ++G__20960__i;}
  p__20944 = new cljs.core.IndexedSeq(G__20960__a,0,null);
} 
return G__20956__delegate.call(this,p__20944);};
G__20956.cljs$lang$maxFixedArity = 0;
G__20956.cljs$lang$applyTo = (function (arglist__20961){
var p__20944 = cljs.core.seq(arglist__20961);
return G__20956__delegate(p__20944);
});
G__20956.cljs$core$IFn$_invoke$arity$variadic = G__20956__delegate;
return G__20956;
})()
;
;})(external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__20939,map__20939__$1,args,choices,model,regex_filter_QMARK_,debounce_delay))
});

re_com.dropdown.single_dropdown.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.dropdown.single_dropdown.cljs$lang$applyTo = (function (seq20937){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20937));
});

