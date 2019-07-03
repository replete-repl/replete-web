// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_com.buttons');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_com.util');
goog.require('re_com.validate');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('reagent.core');
re_com.buttons.button_args_desc = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$label,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"string | hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"label for the button"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"-> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"a function which takes no params and returns nothing. Called when the button is clicked"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string | hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"what to show in the tooltip"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip_DASH_position,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$below_DASH_center,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.position_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$disabled_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,"if true, the user can't click the button"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the button, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles (applies to the button, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to the button, not the wrapping div)"], null)], null)], null);
/**
 * Returns the markup for a basic button
 */
re_com.buttons.button = (function re_com$buttons$button(){
var showing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (showing_QMARK_){
return (function() { 
var G__19137__delegate = function (p__19134){
var map__19135 = p__19134;
var map__19135__$1 = (((((!((map__19135 == null))))?(((((map__19135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19135):map__19135);
var args = map__19135__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19135__$1,cljs.core.cst$kw$label);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19135__$1,cljs.core.cst$kw$on_DASH_click);
var tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19135__$1,cljs.core.cst$kw$tooltip);
var tooltip_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19135__$1,cljs.core.cst$kw$tooltip_DASH_position);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19135__$1,cljs.core.cst$kw$disabled_QMARK_);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19135__$1,cljs.core.cst$kw$class,"btn-default");
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19135__$1,cljs.core.cst$kw$style);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19135__$1,cljs.core.cst$kw$attr);
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.buttons.button_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["button"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro button-args-desc args \"button\")"));
}

if(cljs.core.truth_(tooltip)){
} else {
cljs.core.reset_BANG_(showing_QMARK_,false);
}

var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
var the_button = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,["rc-button btn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),style], 0)),cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$on_DASH_click,((function (disabled_QMARK___$1,map__19135,map__19135__$1,args,label,on_click,tooltip,tooltip_position,disabled_QMARK_,class$,style,attr,showing_QMARK_){
return (function (event){
if(cljs.core.truth_((function (){var and__4120__auto__ = on_click;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(disabled_QMARK___$1);
} else {
return and__4120__auto__;
}
})())){
(on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(event) : on_click.call(null,event));
} else {
}

return null;
});})(disabled_QMARK___$1,map__19135,map__19135__$1,args,label,on_click,tooltip,tooltip_position,disabled_QMARK_,class$,style,attr,showing_QMARK_))
], null),(cljs.core.truth_(tooltip)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (disabled_QMARK___$1,map__19135,map__19135__$1,args,label,on_click,tooltip,tooltip_position,disabled_QMARK_,class$,style,attr,showing_QMARK_){
return (function (event){
cljs.core.reset_BANG_(showing_QMARK_,true);

return null;
});})(disabled_QMARK___$1,map__19135,map__19135__$1,args,label,on_click,tooltip,tooltip_position,disabled_QMARK_,class$,style,attr,showing_QMARK_))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (disabled_QMARK___$1,map__19135,map__19135__$1,args,label,on_click,tooltip,tooltip_position,disabled_QMARK_,class$,style,attr,showing_QMARK_){
return (function (event){
cljs.core.reset_BANG_(showing_QMARK_,false);

return null;
});})(disabled_QMARK___$1,map__19135,map__19135__$1,args,label,on_click,tooltip,tooltip_position,disabled_QMARK_,class$,style,attr,showing_QMARK_))
], null):null),attr], 0)),label], null);
if(cljs.core.truth_(disabled_QMARK___$1)){
cljs.core.reset_BANG_(showing_QMARK_,false);
} else {
}

return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$class,"rc-button-wrapper display-inline-flex",cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$child,(cljs.core.truth_(tooltip)?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_tooltip,cljs.core.cst$kw$label,tooltip,cljs.core.cst$kw$position,(function (){var or__4131__auto__ = tooltip_position;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$below_DASH_center;
}
})(),cljs.core.cst$kw$showing_QMARK_,showing_QMARK_,cljs.core.cst$kw$anchor,the_button], null):the_button)], null);
};
var G__19137 = function (var_args){
var p__19134 = null;
if (arguments.length > 0) {
var G__19138__i = 0, G__19138__a = new Array(arguments.length -  0);
while (G__19138__i < G__19138__a.length) {G__19138__a[G__19138__i] = arguments[G__19138__i + 0]; ++G__19138__i;}
  p__19134 = new cljs.core.IndexedSeq(G__19138__a,0,null);
} 
return G__19137__delegate.call(this,p__19134);};
G__19137.cljs$lang$maxFixedArity = 0;
G__19137.cljs$lang$applyTo = (function (arglist__19139){
var p__19134 = cljs.core.seq(arglist__19139);
return G__19137__delegate(p__19134);
});
G__19137.cljs$core$IFn$_invoke$arity$variadic = G__19137__delegate;
return G__19137;
})()
;
;})(showing_QMARK_))
});
re_com.buttons.md_circle_icon_button_args_desc = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$md_DASH_icon_DASH_name,cljs.core.cst$kw$required,true,cljs.core.cst$kw$default,"zmdi-plus",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"the name of the icon.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"For example, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"\"zmdi-plus\""], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"\"zmdi-undo\""], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"-> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"a function which takes no params and returns nothing. Called when the button is clicked"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$size,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$regular,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.button_size_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"one of ",re_com.validate.button_sizes_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string | hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"what to show in the tooltip"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip_DASH_position,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$below_DASH_center,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.position_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$emphasise_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"if true, use emphasised styling so the button really stands out"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$disabled_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"if true, the user can't click the button"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the button, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override (applies to the button, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to the button, not the wrapping div)"], null)], null)], null);
/**
 * a circular button containing a material design icon
 */
re_com.buttons.md_circle_icon_button = (function re_com$buttons$md_circle_icon_button(){
var showing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (showing_QMARK_){
return (function() { 
var G__19145__delegate = function (p__19140){
var map__19141 = p__19140;
var map__19141__$1 = (((((!((map__19141 == null))))?(((((map__19141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19141):map__19141);
var args = map__19141__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19141__$1,cljs.core.cst$kw$disabled_QMARK_);
var tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19141__$1,cljs.core.cst$kw$tooltip);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19141__$1,cljs.core.cst$kw$attr);
var emphasise_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19141__$1,cljs.core.cst$kw$emphasise_QMARK_);
var md_icon_name = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19141__$1,cljs.core.cst$kw$md_DASH_icon_DASH_name,"zmdi-plus");
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19141__$1,cljs.core.cst$kw$on_DASH_click);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19141__$1,cljs.core.cst$kw$size);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19141__$1,cljs.core.cst$kw$style);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19141__$1,cljs.core.cst$kw$class);
var tooltip_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19141__$1,cljs.core.cst$kw$tooltip_DASH_position);
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.buttons.md_circle_icon_button_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["md-circle-icon-button"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro md-circle-icon-button-args-desc args \"md-circle-icon-button\")"));
}

if(cljs.core.truth_(tooltip)){
} else {
cljs.core.reset_BANG_(showing_QMARK_,false);
}

var the_button = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["rc-md-circle-icon-button noselect ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__19144 = size;
var G__19144__$1 = (((G__19144 instanceof cljs.core.Keyword))?G__19144.fqn:null);
switch (G__19144__$1) {
case "smaller":
return "rc-circle-smaller ";

break;
case "larger":
return "rc-circle-larger ";

break;
default:
return " ";

}
})()),(cljs.core.truth_(emphasise_QMARK_)?"rc-circle-emphasis ":null),(cljs.core.truth_(disabled_QMARK_)?"rc-circle-disabled ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,(cljs.core.truth_(disabled_QMARK_)?null:"pointer")], null),style], 0)),cljs.core.cst$kw$on_DASH_click,((function (map__19141,map__19141__$1,args,disabled_QMARK_,tooltip,attr,emphasise_QMARK_,md_icon_name,on_click,size,style,class$,tooltip_position,showing_QMARK_){
return (function (event){
if(cljs.core.truth_((function (){var and__4120__auto__ = on_click;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(disabled_QMARK_);
} else {
return and__4120__auto__;
}
})())){
(on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(event) : on_click.call(null,event));
} else {
}

return null;
});})(map__19141,map__19141__$1,args,disabled_QMARK_,tooltip,attr,emphasise_QMARK_,md_icon_name,on_click,size,style,class$,tooltip_position,showing_QMARK_))
], null),(cljs.core.truth_(tooltip)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (map__19141,map__19141__$1,args,disabled_QMARK_,tooltip,attr,emphasise_QMARK_,md_icon_name,on_click,size,style,class$,tooltip_position,showing_QMARK_){
return (function (event){
cljs.core.reset_BANG_(showing_QMARK_,true);

return null;
});})(map__19141,map__19141__$1,args,disabled_QMARK_,tooltip,attr,emphasise_QMARK_,md_icon_name,on_click,size,style,class$,tooltip_position,showing_QMARK_))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (map__19141,map__19141__$1,args,disabled_QMARK_,tooltip,attr,emphasise_QMARK_,md_icon_name,on_click,size,style,class$,tooltip_position,showing_QMARK_){
return (function (event){
cljs.core.reset_BANG_(showing_QMARK_,false);

return null;
});})(map__19141,map__19141__$1,args,disabled_QMARK_,tooltip,attr,emphasise_QMARK_,md_icon_name,on_click,size,style,class$,tooltip_position,showing_QMARK_))
], null):null),attr], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,["zmdi zmdi-hc-fw-rc ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(md_icon_name)].join('')], null)], null)], null);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$class,"rc-md-circle-icon-button-wrapper display-inline-flex",cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$child,(cljs.core.truth_(tooltip)?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_tooltip,cljs.core.cst$kw$label,tooltip,cljs.core.cst$kw$position,(function (){var or__4131__auto__ = tooltip_position;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$below_DASH_center;
}
})(),cljs.core.cst$kw$showing_QMARK_,showing_QMARK_,cljs.core.cst$kw$anchor,the_button], null):the_button)], null);
};
var G__19145 = function (var_args){
var p__19140 = null;
if (arguments.length > 0) {
var G__19147__i = 0, G__19147__a = new Array(arguments.length -  0);
while (G__19147__i < G__19147__a.length) {G__19147__a[G__19147__i] = arguments[G__19147__i + 0]; ++G__19147__i;}
  p__19140 = new cljs.core.IndexedSeq(G__19147__a,0,null);
} 
return G__19145__delegate.call(this,p__19140);};
G__19145.cljs$lang$maxFixedArity = 0;
G__19145.cljs$lang$applyTo = (function (arglist__19148){
var p__19140 = cljs.core.seq(arglist__19148);
return G__19145__delegate(p__19140);
});
G__19145.cljs$core$IFn$_invoke$arity$variadic = G__19145__delegate;
return G__19145;
})()
;
;})(showing_QMARK_))
});
re_com.buttons.md_icon_button_args_desc = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$md_DASH_icon_DASH_name,cljs.core.cst$kw$required,true,cljs.core.cst$kw$default,"zmdi-plus",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"the name of the icon.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"For example, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"\"zmdi-plus\""], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"\"zmdi-undo\""], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"-> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"a function which takes no params and returns nothing. Called when the button is clicked"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$size,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$regular,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.button_size_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"one of ",re_com.validate.button_sizes_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string | hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"what to show in the tooltip"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip_DASH_position,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$below_DASH_center,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.position_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$emphasise_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"if true, use emphasised styling so the button really stands out"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$disabled_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"if true, the user can't click the button"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the button, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override (applies to the button, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to the button, not the wrapping div)"], null)], null)], null);
/**
 * a square button containing a material design icon
 */
re_com.buttons.md_icon_button = (function re_com$buttons$md_icon_button(){
var showing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (showing_QMARK_){
return (function() { 
var G__19154__delegate = function (p__19149){
var map__19150 = p__19149;
var map__19150__$1 = (((((!((map__19150 == null))))?(((((map__19150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19150):map__19150);
var args = map__19150__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19150__$1,cljs.core.cst$kw$disabled_QMARK_);
var tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19150__$1,cljs.core.cst$kw$tooltip);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19150__$1,cljs.core.cst$kw$attr);
var emphasise_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19150__$1,cljs.core.cst$kw$emphasise_QMARK_);
var md_icon_name = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19150__$1,cljs.core.cst$kw$md_DASH_icon_DASH_name,"zmdi-plus");
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19150__$1,cljs.core.cst$kw$on_DASH_click);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19150__$1,cljs.core.cst$kw$size);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19150__$1,cljs.core.cst$kw$style);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19150__$1,cljs.core.cst$kw$class);
var tooltip_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19150__$1,cljs.core.cst$kw$tooltip_DASH_position);
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.buttons.md_icon_button_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["md-icon-button"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro md-icon-button-args-desc args \"md-icon-button\")"));
}

if(cljs.core.truth_(tooltip)){
} else {
cljs.core.reset_BANG_(showing_QMARK_,false);
}

var the_button = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["rc-md-icon-button noselect ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__19153 = size;
var G__19153__$1 = (((G__19153 instanceof cljs.core.Keyword))?G__19153.fqn:null);
switch (G__19153__$1) {
case "smaller":
return "rc-icon-smaller ";

break;
case "larger":
return "rc-icon-larger ";

break;
default:
return " ";

}
})()),(cljs.core.truth_(emphasise_QMARK_)?"rc-icon-emphasis ":null),(cljs.core.truth_(disabled_QMARK_)?"rc-icon-disabled ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,(cljs.core.truth_(disabled_QMARK_)?null:"pointer")], null),style], 0)),cljs.core.cst$kw$on_DASH_click,((function (map__19150,map__19150__$1,args,disabled_QMARK_,tooltip,attr,emphasise_QMARK_,md_icon_name,on_click,size,style,class$,tooltip_position,showing_QMARK_){
return (function (event){
if(cljs.core.truth_((function (){var and__4120__auto__ = on_click;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(disabled_QMARK_);
} else {
return and__4120__auto__;
}
})())){
(on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(event) : on_click.call(null,event));
} else {
}

return null;
});})(map__19150,map__19150__$1,args,disabled_QMARK_,tooltip,attr,emphasise_QMARK_,md_icon_name,on_click,size,style,class$,tooltip_position,showing_QMARK_))
], null),(cljs.core.truth_(tooltip)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (map__19150,map__19150__$1,args,disabled_QMARK_,tooltip,attr,emphasise_QMARK_,md_icon_name,on_click,size,style,class$,tooltip_position,showing_QMARK_){
return (function (event){
cljs.core.reset_BANG_(showing_QMARK_,true);

return null;
});})(map__19150,map__19150__$1,args,disabled_QMARK_,tooltip,attr,emphasise_QMARK_,md_icon_name,on_click,size,style,class$,tooltip_position,showing_QMARK_))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (map__19150,map__19150__$1,args,disabled_QMARK_,tooltip,attr,emphasise_QMARK_,md_icon_name,on_click,size,style,class$,tooltip_position,showing_QMARK_){
return (function (event){
cljs.core.reset_BANG_(showing_QMARK_,false);

return null;
});})(map__19150,map__19150__$1,args,disabled_QMARK_,tooltip,attr,emphasise_QMARK_,md_icon_name,on_click,size,style,class$,tooltip_position,showing_QMARK_))
], null):null),attr], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,["zmdi zmdi-hc-fw-rc ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(md_icon_name)].join('')], null)], null)], null);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$class,"rc-md-icon-button-wrapper display-inline-flex",cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$child,(cljs.core.truth_(tooltip)?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_tooltip,cljs.core.cst$kw$label,tooltip,cljs.core.cst$kw$position,(function (){var or__4131__auto__ = tooltip_position;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$below_DASH_center;
}
})(),cljs.core.cst$kw$showing_QMARK_,showing_QMARK_,cljs.core.cst$kw$anchor,the_button], null):the_button)], null);
};
var G__19154 = function (var_args){
var p__19149 = null;
if (arguments.length > 0) {
var G__19156__i = 0, G__19156__a = new Array(arguments.length -  0);
while (G__19156__i < G__19156__a.length) {G__19156__a[G__19156__i] = arguments[G__19156__i + 0]; ++G__19156__i;}
  p__19149 = new cljs.core.IndexedSeq(G__19156__a,0,null);
} 
return G__19154__delegate.call(this,p__19149);};
G__19154.cljs$lang$maxFixedArity = 0;
G__19154.cljs$lang$applyTo = (function (arglist__19157){
var p__19149 = cljs.core.seq(arglist__19157);
return G__19154__delegate(p__19149);
});
G__19154.cljs$core$IFn$_invoke$arity$variadic = G__19154__delegate;
return G__19154;
})()
;
;})(showing_QMARK_))
});
re_com.buttons.info_button_args_desc = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$info,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"string | hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"what's shown in the popover"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$position,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$right_DASH_below,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.position_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"250px",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"width in px"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the button, not the popover wrapper)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override (applies to the button, not the popover wrapper)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to the button, not the popover wrapper)"], null)], null)], null);
/**
 * A tiny light grey button, with an 'i' in it. Meant to be unobrusive.
 *   When pressed, displays a popup assumidly containing helpful information.
 *   Primarily designed to be nestled against the label of an input field, explaining the purpose of that field.
 *   Create a very small "i" icon via SVG
 */
re_com.buttons.info_button = (function re_com$buttons$info_button(){
var showing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (showing_QMARK_){
return (function() { 
var G__19161__delegate = function (p__19158){
var map__19159 = p__19158;
var map__19159__$1 = (((((!((map__19159 == null))))?(((((map__19159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19159):map__19159);
var args = map__19159__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19159__$1,cljs.core.cst$kw$info);
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19159__$1,cljs.core.cst$kw$position);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19159__$1,cljs.core.cst$kw$width);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19159__$1,cljs.core.cst$kw$class);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19159__$1,cljs.core.cst$kw$style);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19159__$1,cljs.core.cst$kw$attr);
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.buttons.info_button_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["info-button"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro info-button-args-desc args \"info-button\")"));
}

return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_tooltip,cljs.core.cst$kw$label,info,cljs.core.cst$kw$status,cljs.core.cst$kw$info,cljs.core.cst$kw$position,(function (){var or__4131__auto__ = position;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$right_DASH_below;
}
})(),cljs.core.cst$kw$width,(function (){var or__4131__auto__ = width;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "250px";
}
})(),cljs.core.cst$kw$showing_QMARK_,showing_QMARK_,cljs.core.cst$kw$on_DASH_cancel,((function (map__19159,map__19159__$1,args,info,position,width,class$,style,attr,showing_QMARK_){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(showing_QMARK_,cljs.core.not);
});})(map__19159,map__19159__$1,args,info,position,width,class$,style,attr,showing_QMARK_))
,cljs.core.cst$kw$anchor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["rc-info-button noselect ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),style], 0)),cljs.core.cst$kw$on_DASH_click,((function (map__19159,map__19159__$1,args,info,position,width,class$,style,attr,showing_QMARK_){
return (function (event){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(showing_QMARK_,cljs.core.not);

return null;
});})(map__19159,map__19159__$1,args,info,position,width,class$,style,attr,showing_QMARK_))
], null),attr], 0)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"11",cljs.core.cst$kw$height,"11"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,"5.5",cljs.core.cst$kw$cy,"5.5",cljs.core.cst$kw$r,"5.5"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cx,"5.5",cljs.core.cst$kw$cy,"2.5",cljs.core.cst$kw$r,"1.4",cljs.core.cst$kw$fill,"white"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x1,"5.5",cljs.core.cst$kw$y1,"5.2",cljs.core.cst$kw$x2,"5.5",cljs.core.cst$kw$y2,"9.7",cljs.core.cst$kw$stroke,"white",cljs.core.cst$kw$stroke_DASH_width,"2.5"], null)], null)], null)], null)], null);
};
var G__19161 = function (var_args){
var p__19158 = null;
if (arguments.length > 0) {
var G__19162__i = 0, G__19162__a = new Array(arguments.length -  0);
while (G__19162__i < G__19162__a.length) {G__19162__a[G__19162__i] = arguments[G__19162__i + 0]; ++G__19162__i;}
  p__19158 = new cljs.core.IndexedSeq(G__19162__a,0,null);
} 
return G__19161__delegate.call(this,p__19158);};
G__19161.cljs$lang$maxFixedArity = 0;
G__19161.cljs$lang$applyTo = (function (arglist__19163){
var p__19158 = cljs.core.seq(arglist__19163);
return G__19161__delegate(p__19158);
});
G__19161.cljs$core$IFn$_invoke$arity$variadic = G__19161__delegate;
return G__19161;
})()
;
;})(showing_QMARK_))
});
re_com.buttons.row_button_args_desc = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$md_DASH_icon_DASH_name,cljs.core.cst$kw$required,true,cljs.core.cst$kw$default,"zmdi-plus",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"the name of the icon.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"For example, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"\"zmdi-plus\""], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"\"zmdi-undo\""], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"-> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"a function which takes no params and returns nothing. Called when the button is clicked"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$mouse_DASH_over_DASH_row_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"true if the mouse is hovering over the row"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string | hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"what to show in the tooltip"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip_DASH_position,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$below_DASH_center,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.position_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$disabled_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"if true, the user can't click the button"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the button, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override (applies to the button, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to the button, not the wrapping div)"], null)], null)], null);
/**
 * a small button containing a material design icon
 */
re_com.buttons.row_button = (function re_com$buttons$row_button(){
var showing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (showing_QMARK_){
return (function() { 
var G__19167__delegate = function (p__19164){
var map__19165 = p__19164;
var map__19165__$1 = (((((!((map__19165 == null))))?(((((map__19165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19165):map__19165);
var args = map__19165__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19165__$1,cljs.core.cst$kw$disabled_QMARK_);
var tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19165__$1,cljs.core.cst$kw$tooltip);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19165__$1,cljs.core.cst$kw$attr);
var md_icon_name = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19165__$1,cljs.core.cst$kw$md_DASH_icon_DASH_name,"zmdi-plus");
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19165__$1,cljs.core.cst$kw$on_DASH_click);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19165__$1,cljs.core.cst$kw$style);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19165__$1,cljs.core.cst$kw$class);
var tooltip_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19165__$1,cljs.core.cst$kw$tooltip_DASH_position);
var mouse_over_row_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19165__$1,cljs.core.cst$kw$mouse_DASH_over_DASH_row_QMARK_);
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.buttons.row_button_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["row-button"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro row-button-args-desc args \"row-button\")"));
}

if(cljs.core.truth_(tooltip)){
} else {
cljs.core.reset_BANG_(showing_QMARK_,false);
}

var the_button = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["rc-row-button noselect ",(cljs.core.truth_(mouse_over_row_QMARK_)?"rc-row-mouse-over-row ":null),(cljs.core.truth_(disabled_QMARK_)?"rc-row-disabled ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,style,cljs.core.cst$kw$on_DASH_click,((function (map__19165,map__19165__$1,args,disabled_QMARK_,tooltip,attr,md_icon_name,on_click,style,class$,tooltip_position,mouse_over_row_QMARK_,showing_QMARK_){
return (function (event){
if(cljs.core.truth_((function (){var and__4120__auto__ = on_click;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(disabled_QMARK_);
} else {
return and__4120__auto__;
}
})())){
(on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(event) : on_click.call(null,event));
} else {
}

return null;
});})(map__19165,map__19165__$1,args,disabled_QMARK_,tooltip,attr,md_icon_name,on_click,style,class$,tooltip_position,mouse_over_row_QMARK_,showing_QMARK_))
], null),(cljs.core.truth_(tooltip)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (map__19165,map__19165__$1,args,disabled_QMARK_,tooltip,attr,md_icon_name,on_click,style,class$,tooltip_position,mouse_over_row_QMARK_,showing_QMARK_){
return (function (event){
cljs.core.reset_BANG_(showing_QMARK_,true);

return null;
});})(map__19165,map__19165__$1,args,disabled_QMARK_,tooltip,attr,md_icon_name,on_click,style,class$,tooltip_position,mouse_over_row_QMARK_,showing_QMARK_))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (map__19165,map__19165__$1,args,disabled_QMARK_,tooltip,attr,md_icon_name,on_click,style,class$,tooltip_position,mouse_over_row_QMARK_,showing_QMARK_){
return (function (event){
cljs.core.reset_BANG_(showing_QMARK_,false);

return null;
});})(map__19165,map__19165__$1,args,disabled_QMARK_,tooltip,attr,md_icon_name,on_click,style,class$,tooltip_position,mouse_over_row_QMARK_,showing_QMARK_))
], null):null),attr], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,["zmdi zmdi-hc-fw-rc ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(md_icon_name)].join('')], null)], null)], null);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$class,"rc-row-button-wrapper display-inline-flex",cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$child,(cljs.core.truth_(tooltip)?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_tooltip,cljs.core.cst$kw$label,tooltip,cljs.core.cst$kw$position,(function (){var or__4131__auto__ = tooltip_position;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$below_DASH_center;
}
})(),cljs.core.cst$kw$showing_QMARK_,showing_QMARK_,cljs.core.cst$kw$anchor,the_button], null):the_button)], null);
};
var G__19167 = function (var_args){
var p__19164 = null;
if (arguments.length > 0) {
var G__19168__i = 0, G__19168__a = new Array(arguments.length -  0);
while (G__19168__i < G__19168__a.length) {G__19168__a[G__19168__i] = arguments[G__19168__i + 0]; ++G__19168__i;}
  p__19164 = new cljs.core.IndexedSeq(G__19168__a,0,null);
} 
return G__19167__delegate.call(this,p__19164);};
G__19167.cljs$lang$maxFixedArity = 0;
G__19167.cljs$lang$applyTo = (function (arglist__19169){
var p__19164 = cljs.core.seq(arglist__19169);
return G__19167__delegate(p__19164);
});
G__19167.cljs$core$IFn$_invoke$arity$variadic = G__19167__delegate;
return G__19167;
})()
;
;})(showing_QMARK_))
});
re_com.buttons.hyperlink_args_desc = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$label,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"string | hiccup | atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"label/hiccup for the button"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"-> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"a function which takes no params and returns nothing. Called when the button is clicked"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string | hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"what to show in the tooltip"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip_DASH_position,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$below_DASH_center,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.position_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$disabled_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,"if true, the user can't click the button"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the hyperlink, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override (applies to the hyperlink, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to the hyperlink, not the wrapping div)"], null)], null)], null);
/**
 * Renders an underlined text hyperlink component.
 * This is very similar to the button component above but styled to looks like a hyperlink.
 * Useful for providing button functionality for less important functions, e.g. Cancel
 */
re_com.buttons.hyperlink = (function re_com$buttons$hyperlink(){
var showing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (showing_QMARK_){
return (function() { 
var G__19173__delegate = function (p__19170){
var map__19171 = p__19170;
var map__19171__$1 = (((((!((map__19171 == null))))?(((((map__19171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19171):map__19171);
var args = map__19171__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19171__$1,cljs.core.cst$kw$label);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19171__$1,cljs.core.cst$kw$on_DASH_click);
var tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19171__$1,cljs.core.cst$kw$tooltip);
var tooltip_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19171__$1,cljs.core.cst$kw$tooltip_DASH_position);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19171__$1,cljs.core.cst$kw$disabled_QMARK_);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19171__$1,cljs.core.cst$kw$class);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19171__$1,cljs.core.cst$kw$style);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19171__$1,cljs.core.cst$kw$attr);
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.buttons.hyperlink_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["hyperlink"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro hyperlink-args-desc args \"hyperlink\")"));
}

if(cljs.core.truth_(tooltip)){
} else {
cljs.core.reset_BANG_(showing_QMARK_,false);
}

var label__$1 = re_com.util.deref_or_value(label);
var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
var the_button = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["rc-hyperlink noselect ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cursor,(cljs.core.truth_(disabled_QMARK___$1)?"not-allowed":"pointer"),cljs.core.cst$kw$color,(cljs.core.truth_(disabled_QMARK___$1)?"grey":null)], null),style], 0)),cljs.core.cst$kw$on_DASH_click,((function (label__$1,disabled_QMARK___$1,map__19171,map__19171__$1,args,label,on_click,tooltip,tooltip_position,disabled_QMARK_,class$,style,attr,showing_QMARK_){
return (function (event){
if(cljs.core.truth_((function (){var and__4120__auto__ = on_click;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(disabled_QMARK___$1);
} else {
return and__4120__auto__;
}
})())){
(on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(event) : on_click.call(null,event));
} else {
}

return null;
});})(label__$1,disabled_QMARK___$1,map__19171,map__19171__$1,args,label,on_click,tooltip,tooltip_position,disabled_QMARK_,class$,style,attr,showing_QMARK_))
], null),(cljs.core.truth_(tooltip)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (label__$1,disabled_QMARK___$1,map__19171,map__19171__$1,args,label,on_click,tooltip,tooltip_position,disabled_QMARK_,class$,style,attr,showing_QMARK_){
return (function (event){
cljs.core.reset_BANG_(showing_QMARK_,true);

return null;
});})(label__$1,disabled_QMARK___$1,map__19171,map__19171__$1,args,label,on_click,tooltip,tooltip_position,disabled_QMARK_,class$,style,attr,showing_QMARK_))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (label__$1,disabled_QMARK___$1,map__19171,map__19171__$1,args,label,on_click,tooltip,tooltip_position,disabled_QMARK_,class$,style,attr,showing_QMARK_){
return (function (event){
cljs.core.reset_BANG_(showing_QMARK_,false);

return null;
});})(label__$1,disabled_QMARK___$1,map__19171,map__19171__$1,args,label,on_click,tooltip,tooltip_position,disabled_QMARK_,class$,style,attr,showing_QMARK_))
], null):null),attr], 0)),label__$1], null)], null);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$class,"rc-hyperlink-wrapper display-inline-flex",cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$child,(cljs.core.truth_(tooltip)?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_tooltip,cljs.core.cst$kw$label,tooltip,cljs.core.cst$kw$position,(function (){var or__4131__auto__ = tooltip_position;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$below_DASH_center;
}
})(),cljs.core.cst$kw$showing_QMARK_,showing_QMARK_,cljs.core.cst$kw$anchor,the_button], null):the_button)], null);
};
var G__19173 = function (var_args){
var p__19170 = null;
if (arguments.length > 0) {
var G__19174__i = 0, G__19174__a = new Array(arguments.length -  0);
while (G__19174__i < G__19174__a.length) {G__19174__a[G__19174__i] = arguments[G__19174__i + 0]; ++G__19174__i;}
  p__19170 = new cljs.core.IndexedSeq(G__19174__a,0,null);
} 
return G__19173__delegate.call(this,p__19170);};
G__19173.cljs$lang$maxFixedArity = 0;
G__19173.cljs$lang$applyTo = (function (arglist__19175){
var p__19170 = cljs.core.seq(arglist__19175);
return G__19173__delegate(p__19170);
});
G__19173.cljs$core$IFn$_invoke$arity$variadic = G__19173__delegate;
return G__19173;
})()
;
;})(showing_QMARK_))
});
re_com.buttons.hyperlink_href_args_desc = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$label,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"string | hiccup | atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"label/hiccup for the button"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$href,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"string | atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_atom_QMARK_,cljs.core.cst$kw$description,"if specified, the link target URL"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$target,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"_self",cljs.core.cst$kw$type,"string | atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_atom_QMARK_,cljs.core.cst$kw$description,"one of \"_self\" or \"_blank\""], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string | hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"what to show in the tooltip"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip_DASH_position,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$below_DASH_center,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.position_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the hyperlink, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override (applies to the hyperlink, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to the hyperlink, not the wrapping div)"], null)], null)], null);
/**
 * Renders an underlined text hyperlink component.
 * This is very similar to the button component above but styled to looks like a hyperlink.
 * Useful for providing button functionality for less important functions, e.g. Cancel
 */
re_com.buttons.hyperlink_href = (function re_com$buttons$hyperlink_href(){
var showing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (showing_QMARK_){
return (function() { 
var G__19179__delegate = function (p__19176){
var map__19177 = p__19176;
var map__19177__$1 = (((((!((map__19177 == null))))?(((((map__19177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19177):map__19177);
var args = map__19177__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19177__$1,cljs.core.cst$kw$label);
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19177__$1,cljs.core.cst$kw$href);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19177__$1,cljs.core.cst$kw$target);
var tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19177__$1,cljs.core.cst$kw$tooltip);
var tooltip_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19177__$1,cljs.core.cst$kw$tooltip_DASH_position);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19177__$1,cljs.core.cst$kw$class);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19177__$1,cljs.core.cst$kw$style);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19177__$1,cljs.core.cst$kw$attr);
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.buttons.hyperlink_href_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["hyperlink-href"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro hyperlink-href-args-desc args \"hyperlink-href\")"));
}

if(cljs.core.truth_(tooltip)){
} else {
cljs.core.reset_BANG_(showing_QMARK_,false);
}

var label__$1 = re_com.util.deref_or_value(label);
var href__$1 = re_com.util.deref_or_value(href);
var target__$1 = re_com.util.deref_or_value(target);
var the_button = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,["rc-hyperlink-href noselect ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),style], 0)),cljs.core.cst$kw$href,href__$1,cljs.core.cst$kw$target,target__$1], null),(cljs.core.truth_(tooltip)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (label__$1,href__$1,target__$1,map__19177,map__19177__$1,args,label,href,target,tooltip,tooltip_position,class$,style,attr,showing_QMARK_){
return (function (event){
cljs.core.reset_BANG_(showing_QMARK_,true);

return null;
});})(label__$1,href__$1,target__$1,map__19177,map__19177__$1,args,label,href,target,tooltip,tooltip_position,class$,style,attr,showing_QMARK_))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (label__$1,href__$1,target__$1,map__19177,map__19177__$1,args,label,href,target,tooltip,tooltip_position,class$,style,attr,showing_QMARK_){
return (function (event){
cljs.core.reset_BANG_(showing_QMARK_,false);

return null;
});})(label__$1,href__$1,target__$1,map__19177,map__19177__$1,args,label,href,target,tooltip,tooltip_position,class$,style,attr,showing_QMARK_))
], null):null),attr], 0)),label__$1], null);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$class,"rc-hyperlink-href-wrapper display-inline-flex",cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$child,(cljs.core.truth_(tooltip)?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_tooltip,cljs.core.cst$kw$label,tooltip,cljs.core.cst$kw$position,(function (){var or__4131__auto__ = tooltip_position;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$below_DASH_center;
}
})(),cljs.core.cst$kw$showing_QMARK_,showing_QMARK_,cljs.core.cst$kw$anchor,the_button], null):the_button)], null);
};
var G__19179 = function (var_args){
var p__19176 = null;
if (arguments.length > 0) {
var G__19180__i = 0, G__19180__a = new Array(arguments.length -  0);
while (G__19180__i < G__19180__a.length) {G__19180__a[G__19180__i] = arguments[G__19180__i + 0]; ++G__19180__i;}
  p__19176 = new cljs.core.IndexedSeq(G__19180__a,0,null);
} 
return G__19179__delegate.call(this,p__19176);};
G__19179.cljs$lang$maxFixedArity = 0;
G__19179.cljs$lang$applyTo = (function (arglist__19181){
var p__19176 = cljs.core.seq(arglist__19181);
return G__19179__delegate(p__19176);
});
G__19179.cljs$core$IFn$_invoke$arity$variadic = G__19179__delegate;
return G__19179;
})()
;
;})(showing_QMARK_))
});
