// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_com.selection_list');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_com.text');
goog.require('re_com.misc');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('re_com.util');
re_com.selection_list.label_style = (function re_com$selection_list$label_style(var_args){
var G__20839 = arguments.length;
switch (G__20839) {
case 2:
return re_com.selection_list.label_style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_com.selection_list.label_style.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_com.selection_list.label_style.cljs$core$IFn$_invoke$arity$2 = (function (selected_QMARK_,as_exclusions_QMARK_){
return re_com.selection_list.label_style.cljs$core$IFn$_invoke$arity$3(selected_QMARK_,as_exclusions_QMARK_,null);
});

re_com.selection_list.label_style.cljs$core$IFn$_invoke$arity$3 = (function (selected_QMARK_,as_exclusions_QMARK_,selected_color){
var base_style = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,"1px"], null);
var base_style__$1 = (cljs.core.truth_((function (){var and__4120__auto__ = selected_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return as_exclusions_QMARK_;
} else {
return and__4120__auto__;
}
})())?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_decoration,"line-through"], null)], 0)):base_style);
var base_style__$2 = (cljs.core.truth_((function (){var and__4120__auto__ = selected_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return selected_color;
} else {
return and__4120__auto__;
}
})())?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_style__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,selected_color], null)], 0)):base_style__$1);
return base_style__$2;
});

re_com.selection_list.label_style.cljs$lang$maxFixedArity = 3;

re_com.selection_list.check_clicked = (function re_com$selection_list$check_clicked(selections,item_id,ticked_QMARK_,required_QMARK_){
var num_selected = cljs.core.count(selections);
var only_item = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num_selected))?cljs.core.first(selections):null);
if(cljs.core.truth_((function (){var and__4120__auto__ = required_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(only_item,item_id);
} else {
return and__4120__auto__;
}
})())){
return selections;
} else {
if(cljs.core.truth_(ticked_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(selections,item_id);
} else {
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(selections,item_id);
}
}
});
re_com.selection_list.as_checked = (function re_com$selection_list$as_checked(item,id_fn,selections,on_change,disabled_QMARK_,label_fn,required_QMARK_,as_exclusions_QMARK_){
var item_id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(item) : id_fn.call(null,item));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$class,"list-group-item compact",cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (item_id){
return (function (event){
if(cljs.core.truth_(disabled_QMARK_)){
} else {
var G__20841_20842 = re_com.selection_list.check_clicked(selections,item_id,cljs.core.not((selections.cljs$core$IFn$_invoke$arity$1 ? selections.cljs$core$IFn$_invoke$arity$1(item_id) : selections.call(null,item_id))),required_QMARK_);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__20841_20842) : on_change.call(null,G__20841_20842));
}

return null;
});})(item_id))
], null),cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.checkbox,cljs.core.cst$kw$model,(!(((selections.cljs$core$IFn$_invoke$arity$1 ? selections.cljs$core$IFn$_invoke$arity$1(item_id) : selections.call(null,item_id)) == null))),cljs.core.cst$kw$on_DASH_change,((function (item_id){
return (function (){
return cljs.core.List.EMPTY;
});})(item_id))
,cljs.core.cst$kw$disabled_QMARK_,disabled_QMARK_,cljs.core.cst$kw$label_DASH_style,re_com.selection_list.label_style.cljs$core$IFn$_invoke$arity$2((selections.cljs$core$IFn$_invoke$arity$1 ? selections.cljs$core$IFn$_invoke$arity$1(item_id) : selections.call(null,item_id)),as_exclusions_QMARK_),cljs.core.cst$kw$label,(label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(item) : label_fn.call(null,item))], null)], null);
});
re_com.selection_list.radio_clicked = (function re_com$selection_list$radio_clicked(selections,item_id,required_QMARK_){
if(cljs.core.truth_((function (){var and__4120__auto__ = required_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return (selections.cljs$core$IFn$_invoke$arity$1 ? selections.cljs$core$IFn$_invoke$arity$1(item_id) : selections.call(null,item_id));
} else {
return and__4120__auto__;
}
})())){
return selections;
} else {
if(cljs.core.truth_((selections.cljs$core$IFn$_invoke$arity$1 ? selections.cljs$core$IFn$_invoke$arity$1(item_id) : selections.call(null,item_id)))){
return cljs.core.PersistentHashSet.EMPTY;
} else {
return cljs.core.PersistentHashSet.createAsIfByAssoc([item_id]);
}
}
});
re_com.selection_list.as_radio = (function re_com$selection_list$as_radio(item,id_fn,selections,on_change,disabled_QMARK_,label_fn,required_QMARK_,as_exclusions_QMARK_){
var item_id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(item) : id_fn.call(null,item));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$class,"list-group-item compact",cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (item_id){
return (function (event){
if(cljs.core.truth_(disabled_QMARK_)){
} else {
var G__20843_20844 = re_com.selection_list.radio_clicked(selections,item_id,required_QMARK_);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__20843_20844) : on_change.call(null,G__20843_20844));
}

return null;
});})(item_id))
], null),cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.radio_button,cljs.core.cst$kw$model,cljs.core.first(selections),cljs.core.cst$kw$value,item_id,cljs.core.cst$kw$on_DASH_change,((function (item_id){
return (function (){
return cljs.core.List.EMPTY;
});})(item_id))
,cljs.core.cst$kw$disabled_QMARK_,disabled_QMARK_,cljs.core.cst$kw$label_DASH_style,re_com.selection_list.label_style.cljs$core$IFn$_invoke$arity$2((selections.cljs$core$IFn$_invoke$arity$1 ? selections.cljs$core$IFn$_invoke$arity$1(item_id) : selections.call(null,item_id)),as_exclusions_QMARK_),cljs.core.cst$kw$label,(label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(item) : label_fn.call(null,item))], null)], null);
});
re_com.selection_list.list_style = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$overflow_DASH_x,"hidden",cljs.core.cst$kw$overflow_DASH_y,"auto"], null);
re_com.selection_list.spacing_bordered = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$padding_DASH_top,"0px",cljs.core.cst$kw$padding_DASH_bottom,"0px",cljs.core.cst$kw$padding_DASH_left,"5px",cljs.core.cst$kw$padding_DASH_right,"5px",cljs.core.cst$kw$margin_DASH_top,"5px",cljs.core.cst$kw$margin_DASH_bottom,"5px"], null);
re_com.selection_list.spacing_unbordered = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$padding_DASH_left,"0px",cljs.core.cst$kw$padding_DASH_right,"5px",cljs.core.cst$kw$padding_DASH_top,"0px",cljs.core.cst$kw$padding_DASH_bottom,"0px",cljs.core.cst$kw$margin_DASH_top,"0px",cljs.core.cst$kw$margin_DASH_bottom,"0px"], null);
re_com.selection_list.selection_list_args_desc = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$choices,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"vector of choices | atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.vector_of_maps_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"the selectable items. Elements can be strings or more interesting data items like {:label \"some name\" :sort 5}. Also see ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":label-fn"], null)," below (list of maps also allowed)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$model,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"set of :ids within :choices | atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.set_or_atom_QMARK_,cljs.core.cst$kw$description,"the currently selected items. Note: items are considered distinct"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"set of :ids -> nil | atom",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"a callback which will be passed set of the ids (as defined by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":id-fn"], null),") of the selected items"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$id,cljs.core.cst$kw$type,"choice -> anything",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":choices"], null),", returns its unique identifier (aka id)"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$label,cljs.core.cst$kw$type,"choice -> anything",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":choices"], null),", returns its displayable label"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$multi_DASH_select_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,true,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,"when true, use check boxes, otherwise radio buttons"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$as_DASH_exclusions_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,"when true, selected items are shown with struck-out labels"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$required_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,"when true, at least one item must be selected. Note: being able to un-select a radio button is not a common use case, so this should probably be set to true when in single select mode"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string | atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_atom_QMARK_,cljs.core.cst$kw$description,"a CSS style e.g. \"250px\". When specified, item labels may be clipped. Otherwise based on widest label"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string | atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_atom_QMARK_,cljs.core.cst$kw$description,"a CSS style e.g. \"150px\". Size beyond which items will scroll"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$max_DASH_height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string | atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_atom_QMARK_,cljs.core.cst$kw$description,"a CSS style e.g. \"150px\". If there are less items then this height, box will shrink. If there are more, items will scroll"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$disabled_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,"when true, the time input will be disabled. Can be atom or value"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$hide_DASH_border_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,"when true, the list will be displayed without a border"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$item_DASH_renderer,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"-> nil | atom",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"a function which takes no params and returns nothing. Called for each element during setup, the returned component renders the element, responds to clicks etc."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to the outer container)"], null)], null)], null);
re_com.selection_list.list_container = (function re_com$selection_list$list_container(p__20848){
var map__20849 = p__20848;
var map__20849__$1 = (((((!((map__20849 == null))))?(((((map__20849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20849):map__20849);
var args = map__20849__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20849__$1,cljs.core.cst$kw$disabled_QMARK_);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20849__$1,cljs.core.cst$kw$on_DASH_change);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20849__$1,cljs.core.cst$kw$height);
var item_renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20849__$1,cljs.core.cst$kw$item_DASH_renderer);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20849__$1,cljs.core.cst$kw$model);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20849__$1,cljs.core.cst$kw$attr);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20849__$1,cljs.core.cst$kw$label_DASH_fn);
var required_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20849__$1,cljs.core.cst$kw$required_QMARK_);
var as_exclusions_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20849__$1,cljs.core.cst$kw$as_DASH_exclusions_QMARK_);
var max_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20849__$1,cljs.core.cst$kw$max_DASH_height);
var hide_border_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20849__$1,cljs.core.cst$kw$hide_DASH_border_QMARK_);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20849__$1,cljs.core.cst$kw$width);
var choices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20849__$1,cljs.core.cst$kw$choices);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20849__$1,cljs.core.cst$kw$id_DASH_fn);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20849__$1,cljs.core.cst$kw$style);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20849__$1,cljs.core.cst$kw$class);
var multi_select_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20849__$1,cljs.core.cst$kw$multi_DASH_select_QMARK_);
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.selection_list.selection_list_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["selection-list"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro selection-list-args-desc args \"selection-list\")"));
}

var selected = (cljs.core.truth_(multi_select_QMARK_)?model:cljs.core.set((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.first(model)],null))));
var items = cljs.core.map.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(item_renderer)?((function (selected,map__20849,map__20849__$1,args,disabled_QMARK_,on_change,height,item_renderer,model,attr,label_fn,required_QMARK_,as_exclusions_QMARK_,max_height,hide_border_QMARK_,width,choices,id_fn,style,class$,multi_select_QMARK_){
return (function (p1__20845_SHARP_){
return (item_renderer.cljs$core$IFn$_invoke$arity$8 ? item_renderer.cljs$core$IFn$_invoke$arity$8(p1__20845_SHARP_,id_fn,selected,on_change,disabled_QMARK_,label_fn,required_QMARK_,as_exclusions_QMARK_) : item_renderer.call(null,p1__20845_SHARP_,id_fn,selected,on_change,disabled_QMARK_,label_fn,required_QMARK_,as_exclusions_QMARK_));
});})(selected,map__20849,map__20849__$1,args,disabled_QMARK_,on_change,height,item_renderer,model,attr,label_fn,required_QMARK_,as_exclusions_QMARK_,max_height,hide_border_QMARK_,width,choices,id_fn,style,class$,multi_select_QMARK_))
:(cljs.core.truth_(multi_select_QMARK_)?((function (selected,map__20849,map__20849__$1,args,disabled_QMARK_,on_change,height,item_renderer,model,attr,label_fn,required_QMARK_,as_exclusions_QMARK_,max_height,hide_border_QMARK_,width,choices,id_fn,style,class$,multi_select_QMARK_){
return (function (p1__20846_SHARP_){
return re_com.selection_list.as_checked(p1__20846_SHARP_,id_fn,selected,on_change,disabled_QMARK_,label_fn,required_QMARK_,as_exclusions_QMARK_);
});})(selected,map__20849,map__20849__$1,args,disabled_QMARK_,on_change,height,item_renderer,model,attr,label_fn,required_QMARK_,as_exclusions_QMARK_,max_height,hide_border_QMARK_,width,choices,id_fn,style,class$,multi_select_QMARK_))
:((function (selected,map__20849,map__20849__$1,args,disabled_QMARK_,on_change,height,item_renderer,model,attr,label_fn,required_QMARK_,as_exclusions_QMARK_,max_height,hide_border_QMARK_,width,choices,id_fn,style,class$,multi_select_QMARK_){
return (function (p1__20847_SHARP_){
return re_com.selection_list.as_radio(p1__20847_SHARP_,id_fn,selected,on_change,disabled_QMARK_,label_fn,required_QMARK_,as_exclusions_QMARK_);
});})(selected,map__20849,map__20849__$1,args,disabled_QMARK_,on_change,height,item_renderer,model,attr,label_fn,required_QMARK_,as_exclusions_QMARK_,max_height,hide_border_QMARK_,width,choices,id_fn,style,class$,multi_select_QMARK_))
)),choices);
var bounds = cljs.core.select_keys(args,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$width,cljs.core.cst$kw$height,cljs.core.cst$kw$max_DASH_height], null));
var spacing = (cljs.core.truth_(hide_border_QMARK_)?new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$padding_DASH_left,"0px",cljs.core.cst$kw$padding_DASH_right,"5px",cljs.core.cst$kw$padding_DASH_top,"0px",cljs.core.cst$kw$padding_DASH_bottom,"0px",cljs.core.cst$kw$margin_DASH_top,"0px",cljs.core.cst$kw$margin_DASH_bottom,"0px"], null):new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$padding_DASH_top,"0px",cljs.core.cst$kw$padding_DASH_bottom,"0px",cljs.core.cst$kw$padding_DASH_left,"5px",cljs.core.cst$kw$padding_DASH_right,"5px",cljs.core.cst$kw$margin_DASH_top,"5px",cljs.core.cst$kw$margin_DASH_bottom,"5px"], null));
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.border,cljs.core.cst$kw$class,["rc-selection-list ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,style,cljs.core.cst$kw$attr,attr,cljs.core.cst$kw$radius,"4px",cljs.core.cst$kw$border,(cljs.core.truth_(hide_border_QMARK_)?"none":null),cljs.core.cst$kw$child,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"list-group noselect",cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$overflow_DASH_x,"hidden",cljs.core.cst$kw$overflow_DASH_y,"auto"], null),bounds,spacing], 0))], null)], null),items)], null);
});
/**
 * Augment passed attributes with defaults and deref any atoms
 */
re_com.selection_list.configure = (function re_com$selection_list$configure(attributes){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$multi_DASH_select_QMARK_,true,cljs.core.cst$kw$as_DASH_exclusions_QMARK_,false,cljs.core.cst$kw$required_QMARK_,false,cljs.core.cst$kw$disabled_QMARK_,false,cljs.core.cst$kw$hide_DASH_border_QMARK_,false,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label], null),re_com.util.fmap(re_com.util.deref_or_value,attributes)], 0));
});
/**
 * Produce a list box with items arranged vertically
 */
re_com.selection_list.selection_list = (function re_com$selection_list$selection_list(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20858 = arguments.length;
var i__4731__auto___20859 = (0);
while(true){
if((i__4731__auto___20859 < len__4730__auto___20858)){
args__4736__auto__.push((arguments[i__4731__auto___20859]));

var G__20860 = (i__4731__auto___20859 + (1));
i__4731__auto___20859 = G__20860;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.selection_list.selection_list.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.selection_list.selection_list.cljs$core$IFn$_invoke$arity$variadic = (function (p__20852){
var map__20853 = p__20852;
var map__20853__$1 = (((((!((map__20853 == null))))?(((((map__20853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20853):map__20853);
var args = map__20853__$1;
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.selection_list.selection_list_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["selection-list"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro selection-list-args-desc args \"selection-list\")"));
}

return ((function (map__20853,map__20853__$1,args){
return (function() { 
var G__20861__delegate = function (p__20855){
var map__20856 = p__20855;
var map__20856__$1 = (((((!((map__20856 == null))))?(((((map__20856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20856):map__20856);
var args__$1 = map__20856__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.selection_list.list_container,re_com.selection_list.configure(args__$1)], null);
};
var G__20861 = function (var_args){
var p__20855 = null;
if (arguments.length > 0) {
var G__20862__i = 0, G__20862__a = new Array(arguments.length -  0);
while (G__20862__i < G__20862__a.length) {G__20862__a[G__20862__i] = arguments[G__20862__i + 0]; ++G__20862__i;}
  p__20855 = new cljs.core.IndexedSeq(G__20862__a,0,null);
} 
return G__20861__delegate.call(this,p__20855);};
G__20861.cljs$lang$maxFixedArity = 0;
G__20861.cljs$lang$applyTo = (function (arglist__20863){
var p__20855 = cljs.core.seq(arglist__20863);
return G__20861__delegate(p__20855);
});
G__20861.cljs$core$IFn$_invoke$arity$variadic = G__20861__delegate;
return G__20861;
})()
;
;})(map__20853,map__20853__$1,args))
});

re_com.selection_list.selection_list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.selection_list.selection_list.cljs$lang$applyTo = (function (seq20851){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20851));
});

