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
var G__18248__delegate = function (p__18245){
var map__18246 = p__18245;
var map__18246__$1 = (((((!((map__18246 == null))))?(((((map__18246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18246):map__18246);
var args = map__18246__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18246__$1,cljs.core.cst$kw$label);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18246__$1,cljs.core.cst$kw$on_DASH_click);
var tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18246__$1,cljs.core.cst$kw$tooltip);
var tooltip_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18246__$1,cljs.core.cst$kw$tooltip_DASH_position);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18246__$1,cljs.core.cst$kw$disabled_QMARK_);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18246__$1,cljs.core.cst$kw$class,"btn-default");
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18246__$1,cljs.core.cst$kw$style);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18246__$1,cljs.core.cst$kw$attr);
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.buttons.button_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["button"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro button-args-desc args \"button\")"));
}

if(cljs.core.truth_(tooltip)){
} else {
cljs.core.reset_BANG_(showing_QMARK_,false);
}

var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
var the_button = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,["rc-button btn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),style], 0)),cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$on_DASH_click,((function (disabled_QMARK___$1,map__18246,map__18246__$1,args,label,on_click,tooltip,tooltip_position,disabled_QMARK_,class$,style,attr,showing_QMARK_){
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
});})(disabled_QMARK___$1,map__18246,map__18246__$1,args,label,on_click,tooltip,tooltip_position,disabled_QMARK_,class$,style,attr,showing_QMARK_))
], null),(cljs.core.truth_(tooltip)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (disabled_QMARK___$1,map__18246,map__18246__$1,args,label,on_click,tooltip,tooltip_position,disabled_QMARK_,class$,style,attr,showing_QMARK_){
return (function (event){
cljs.core.reset_BANG_(showing_QMARK_,true);

return null;
});})(disabled_QMARK___$1,map__18246,map__18246__$1,args,label,on_click,tooltip,tooltip_position,disabled_QMARK_,class$,style,attr,showing_QMARK_))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (disabled_QMARK___$1,map__18246,map__18246__$1,args,label,on_click,tooltip,tooltip_position,disabled_QMARK_,class$,style,attr,showing_QMARK_){
return (function (event){
cljs.core.reset_BANG_(showing_QMARK_,false);

return null;
});})(disabled_QMARK___$1,map__18246,map__18246__$1,args,label,on_click,tooltip,tooltip_position,disabled_QMARK_,class$,style,attr,showing_QMARK_))
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
var G__18248 = function (var_args){
var p__18245 = null;
if (arguments.length > 0) {
var G__18249__i = 0, G__18249__a = new Array(arguments.length -  0);
while (G__18249__i < G__18249__a.length) {G__18249__a[G__18249__i] = arguments[G__18249__i + 0]; ++G__18249__i;}
  p__18245 = new cljs.core.IndexedSeq(G__18249__a,0,null);
} 
return G__18248__delegate.call(this,p__18245);};
G__18248.cljs$lang$maxFixedArity = 0;
G__18248.cljs$lang$applyTo = (function (arglist__18250){
var p__18245 = cljs.core.seq(arglist__18250);
return G__18248__delegate(p__18245);
});
G__18248.cljs$core$IFn$_invoke$arity$variadic = G__18248__delegate;
return G__18248;
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
var G__18256__delegate = function (p__18251){
var map__18252 = p__18251;
var map__18252__$1 = (((((!((map__18252 == null))))?(((((map__18252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18252):map__18252);
var args = map__18252__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18252__$1,cljs.core.cst$kw$disabled_QMARK_);
var tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18252__$1,cljs.core.cst$kw$tooltip);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18252__$1,cljs.core.cst$kw$attr);
var emphasise_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18252__$1,cljs.core.cst$kw$emphasise_QMARK_);
var md_icon_name = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18252__$1,cljs.core.cst$kw$md_DASH_icon_DASH_name,"zmdi-plus");
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18252__$1,cljs.core.cst$kw$on_DASH_click);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18252__$1,cljs.core.cst$kw$size);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18252__$1,cljs.core.cst$kw$style);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18252__$1,cljs.core.cst$kw$class);
var tooltip_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18252__$1,cljs.core.cst$kw$tooltip_DASH_position);
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.buttons.md_circle_icon_button_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["md-circle-icon-button"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro md-circle-icon-button-args-desc args \"md-circle-icon-button\")"));
}

if(cljs.core.truth_(tooltip)){
} else {
cljs.core.reset_BANG_(showing_QMARK_,false);
}

var the_button = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["rc-md-circle-icon-button noselect ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__18255 = size;
var G__18255__$1 = (((G__18255 instanceof cljs.core.Keyword))?G__18255.fqn:null);
switch (G__18255__$1) {
case "smaller":
return "rc-circle-smaller ";

break;
case "larger":
return "rc-circle-larger ";

break;
default:
return " ";

}
})()),(cljs.core.truth_(emphasise_QMARK_)?"rc-circle-emphasis ":null),(cljs.core.truth_(disabled_QMARK_)?"rc-circle-disabled ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,(cljs.core.truth_(disabled_QMARK_)?null:"pointer")], null),style], 0)),cljs.core.cst$kw$on_DASH_click,((function (map__18252,map__18252__$1,args,disabled_QMARK_,tooltip,attr,emphasise_QMARK_,md_icon_name,on_click,size,style,class$,tooltip_position,showing_QMARK_){
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
});})(map__18252,map__18252__$1,args,disabled_QMARK_,tooltip,attr,emphasise_QMARK_,md_icon_name,on_click,size,style,class$,tooltip_position,showing_QMARK_))
], null),(cljs.core.truth_(tooltip)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (map__18252,map__18252__$1,args,disabled_QMARK_,tooltip,attr,emphasise_QMARK_,md_icon_name,on_click,size,style,class$,tooltip_position,showing_QMARK_){
return (function (event){
cljs.core.reset_BANG_(showing_QMARK_,true);

return null;
});})(map__18252,map__18252__$1,args,disabled_QMARK_,tooltip,attr,emphasise_QMARK_,md_icon_name,on_click,size,style,class$,tooltip_position,showing_QMARK_))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (map__18252,map__18252__$1,args,disabled_QMARK_,tooltip,attr,emphasise_QMARK_,md_icon_name,on_click,size,style,class$,tooltip_position,showing_QMARK_){
return (function (event){
cljs.core.reset_BANG_(showing_QMARK_,false);

return null;
});})(map__18252,map__18252__$1,args,disabled_QMARK_,tooltip,attr,emphasise_QMARK_,md_icon_name,on_click,size,style,class$,tooltip_position,showing_QMARK_))
], null):null),attr], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,["zmdi zmdi-hc-fw-rc ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(md_icon_name)].join('')], null)], null)], null);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$class,"rc-md-circle-icon-button-wrapper display-inline-flex",cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$child,(cljs.core.truth_(tooltip)?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_tooltip,cljs.core.cst$kw$label,tooltip,cljs.core.cst$kw$position,(function (){var or__4131__auto__ = tooltip_position;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$below_DASH_center;
}
})(),cljs.core.cst$kw$showing_QMARK_,showing_QMARK_,cljs.core.cst$kw$anchor,the_button], null):the_button)], null);
};
var G__18256 = function (var_args){
var p__18251 = null;
if (arguments.length > 0) {
var G__18258__i = 0, G__18258__a = new Array(arguments.length -  0);
while (G__18258__i < G__18258__a.length) {G__18258__a[G__18258__i] = arguments[G__18258__i + 0]; ++G__18258__i;}
  p__18251 = new cljs.core.IndexedSeq(G__18258__a,0,null);
} 
return G__18256__delegate.call(this,p__18251);};
G__18256.cljs$lang$maxFixedArity = 0;
G__18256.cljs$lang$applyTo = (function (arglist__18259){
var p__18251 = cljs.core.seq(arglist__18259);
return G__18256__delegate(p__18251);
});
G__18256.cljs$core$IFn$_invoke$arity$variadic = G__18256__delegate;
return G__18256;
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
var G__18265__delegate = function (p__18260){
var map__18261 = p__18260;
var map__18261__$1 = (((((!((map__18261 == null))))?(((((map__18261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18261):map__18261);
var args = map__18261__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18261__$1,cljs.core.cst$kw$disabled_QMARK_);
var tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18261__$1,cljs.core.cst$kw$tooltip);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18261__$1,cljs.core.cst$kw$attr);
var emphasise_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18261__$1,cljs.core.cst$kw$emphasise_QMARK_);
var md_icon_name = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18261__$1,cljs.core.cst$kw$md_DASH_icon_DASH_name,"zmdi-plus");
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18261__$1,cljs.core.cst$kw$on_DASH_click);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18261__$1,cljs.core.cst$kw$size);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18261__$1,cljs.core.cst$kw$style);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18261__$1,cljs.core.cst$kw$class);
var tooltip_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18261__$1,cljs.core.cst$kw$tooltip_DASH_position);
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.buttons.md_icon_button_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["md-icon-button"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro md-icon-button-args-desc args \"md-icon-button\")"));
}

if(cljs.core.truth_(tooltip)){
} else {
cljs.core.reset_BANG_(showing_QMARK_,false);
}

var the_button = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["rc-md-icon-button noselect ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__18264 = size;
var G__18264__$1 = (((G__18264 instanceof cljs.core.Keyword))?G__18264.fqn:null);
switch (G__18264__$1) {
case "smaller":
return "rc-icon-smaller ";

break;
case "larger":
return "rc-icon-larger ";

break;
default:
return " ";

}
})()),(cljs.core.truth_(emphasise_QMARK_)?"rc-icon-emphasis ":null),(cljs.core.truth_(disabled_QMARK_)?"rc-icon-disabled ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,(cljs.core.truth_(disabled_QMARK_)?null:"pointer")], null),style], 0)),cljs.core.cst$kw$on_DASH_click,((function (map__18261,map__18261__$1,args,disabled_QMARK_,tooltip,attr,emphasise_QMARK_,md_icon_name,on_click,size,style,class$,tooltip_position,showing_QMARK_){
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
});})(map__18261,map__18261__$1,args,disabled_QMARK_,tooltip,attr,emphasise_QMARK_,md_icon_name,on_click,size,style,class$,tooltip_position,showing_QMARK_))
], null),(cljs.core.truth_(tooltip)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (map__18261,map__18261__$1,args,disabled_QMARK_,tooltip,attr,emphasise_QMARK_,md_icon_name,on_click,size,style,class$,tooltip_position,showing_QMARK_){
return (function (event){
cljs.core.reset_BANG_(showing_QMARK_,true);

return null;
});})(map__18261,map__18261__$1,args,disabled_QMARK_,tooltip,attr,emphasise_QMARK_,md_icon_name,on_click,size,style,class$,tooltip_position,showing_QMARK_))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (map__18261,map__18261__$1,args,disabled_QMARK_,tooltip,attr,emphasise_QMARK_,md_icon_name,on_click,size,style,class$,tooltip_position,showing_QMARK_){
return (function (event){
cljs.core.reset_BANG_(showing_QMARK_,false);

return null;
});})(map__18261,map__18261__$1,args,disabled_QMARK_,tooltip,attr,emphasise_QMARK_,md_icon_name,on_click,size,style,class$,tooltip_position,showing_QMARK_))
], null):null),attr], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,["zmdi zmdi-hc-fw-rc ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(md_icon_name)].join('')], null)], null)], null);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$class,"rc-md-icon-button-wrapper display-inline-flex",cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$child,(cljs.core.truth_(tooltip)?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_tooltip,cljs.core.cst$kw$label,tooltip,cljs.core.cst$kw$position,(function (){var or__4131__auto__ = tooltip_position;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$below_DASH_center;
}
})(),cljs.core.cst$kw$showing_QMARK_,showing_QMARK_,cljs.core.cst$kw$anchor,the_button], null):the_button)], null);
};
var G__18265 = function (var_args){
var p__18260 = null;
if (arguments.length > 0) {
var G__18267__i = 0, G__18267__a = new Array(arguments.length -  0);
while (G__18267__i < G__18267__a.length) {G__18267__a[G__18267__i] = arguments[G__18267__i + 0]; ++G__18267__i;}
  p__18260 = new cljs.core.IndexedSeq(G__18267__a,0,null);
} 
return G__18265__delegate.call(this,p__18260);};
G__18265.cljs$lang$maxFixedArity = 0;
G__18265.cljs$lang$applyTo = (function (arglist__18268){
var p__18260 = cljs.core.seq(arglist__18268);
return G__18265__delegate(p__18260);
});
G__18265.cljs$core$IFn$_invoke$arity$variadic = G__18265__delegate;
return G__18265;
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
var G__18272__delegate = function (p__18269){
var map__18270 = p__18269;
var map__18270__$1 = (((((!((map__18270 == null))))?(((((map__18270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18270):map__18270);
var args = map__18270__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18270__$1,cljs.core.cst$kw$info);
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18270__$1,cljs.core.cst$kw$position);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18270__$1,cljs.core.cst$kw$width);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18270__$1,cljs.core.cst$kw$class);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18270__$1,cljs.core.cst$kw$style);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18270__$1,cljs.core.cst$kw$attr);
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
})(),cljs.core.cst$kw$showing_QMARK_,showing_QMARK_,cljs.core.cst$kw$on_DASH_cancel,((function (map__18270,map__18270__$1,args,info,position,width,class$,style,attr,showing_QMARK_){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(showing_QMARK_,cljs.core.not);
});})(map__18270,map__18270__$1,args,info,position,width,class$,style,attr,showing_QMARK_))
,cljs.core.cst$kw$anchor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["rc-info-button noselect ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),style], 0)),cljs.core.cst$kw$on_DASH_click,((function (map__18270,map__18270__$1,args,info,position,width,class$,style,attr,showing_QMARK_){
return (function (event){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(showing_QMARK_,cljs.core.not);

return null;
});})(map__18270,map__18270__$1,args,info,position,width,class$,style,attr,showing_QMARK_))
], null),attr], 0)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"11",cljs.core.cst$kw$height,"11"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,"5.5",cljs.core.cst$kw$cy,"5.5",cljs.core.cst$kw$r,"5.5"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cx,"5.5",cljs.core.cst$kw$cy,"2.5",cljs.core.cst$kw$r,"1.4",cljs.core.cst$kw$fill,"white"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x1,"5.5",cljs.core.cst$kw$y1,"5.2",cljs.core.cst$kw$x2,"5.5",cljs.core.cst$kw$y2,"9.7",cljs.core.cst$kw$stroke,"white",cljs.core.cst$kw$stroke_DASH_width,"2.5"], null)], null)], null)], null)], null);
};
var G__18272 = function (var_args){
var p__18269 = null;
if (arguments.length > 0) {
var G__18273__i = 0, G__18273__a = new Array(arguments.length -  0);
while (G__18273__i < G__18273__a.length) {G__18273__a[G__18273__i] = arguments[G__18273__i + 0]; ++G__18273__i;}
  p__18269 = new cljs.core.IndexedSeq(G__18273__a,0,null);
} 
return G__18272__delegate.call(this,p__18269);};
G__18272.cljs$lang$maxFixedArity = 0;
G__18272.cljs$lang$applyTo = (function (arglist__18274){
var p__18269 = cljs.core.seq(arglist__18274);
return G__18272__delegate(p__18269);
});
G__18272.cljs$core$IFn$_invoke$arity$variadic = G__18272__delegate;
return G__18272;
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
var G__18278__delegate = function (p__18275){
var map__18276 = p__18275;
var map__18276__$1 = (((((!((map__18276 == null))))?(((((map__18276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18276):map__18276);
var args = map__18276__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18276__$1,cljs.core.cst$kw$disabled_QMARK_);
var tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18276__$1,cljs.core.cst$kw$tooltip);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18276__$1,cljs.core.cst$kw$attr);
var md_icon_name = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18276__$1,cljs.core.cst$kw$md_DASH_icon_DASH_name,"zmdi-plus");
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18276__$1,cljs.core.cst$kw$on_DASH_click);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18276__$1,cljs.core.cst$kw$style);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18276__$1,cljs.core.cst$kw$class);
var tooltip_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18276__$1,cljs.core.cst$kw$tooltip_DASH_position);
var mouse_over_row_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18276__$1,cljs.core.cst$kw$mouse_DASH_over_DASH_row_QMARK_);
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.buttons.row_button_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["row-button"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro row-button-args-desc args \"row-button\")"));
}

if(cljs.core.truth_(tooltip)){
} else {
cljs.core.reset_BANG_(showing_QMARK_,false);
}

var the_button = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["rc-row-button noselect ",(cljs.core.truth_(mouse_over_row_QMARK_)?"rc-row-mouse-over-row ":null),(cljs.core.truth_(disabled_QMARK_)?"rc-row-disabled ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,style,cljs.core.cst$kw$on_DASH_click,((function (map__18276,map__18276__$1,args,disabled_QMARK_,tooltip,attr,md_icon_name,on_click,style,class$,tooltip_position,mouse_over_row_QMARK_,showing_QMARK_){
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
});})(map__18276,map__18276__$1,args,disabled_QMARK_,tooltip,attr,md_icon_name,on_click,style,class$,tooltip_position,mouse_over_row_QMARK_,showing_QMARK_))
], null),(cljs.core.truth_(tooltip)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (map__18276,map__18276__$1,args,disabled_QMARK_,tooltip,attr,md_icon_name,on_click,style,class$,tooltip_position,mouse_over_row_QMARK_,showing_QMARK_){
return (function (event){
cljs.core.reset_BANG_(showing_QMARK_,true);

return null;
});})(map__18276,map__18276__$1,args,disabled_QMARK_,tooltip,attr,md_icon_name,on_click,style,class$,tooltip_position,mouse_over_row_QMARK_,showing_QMARK_))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (map__18276,map__18276__$1,args,disabled_QMARK_,tooltip,attr,md_icon_name,on_click,style,class$,tooltip_position,mouse_over_row_QMARK_,showing_QMARK_){
return (function (event){
cljs.core.reset_BANG_(showing_QMARK_,false);

return null;
});})(map__18276,map__18276__$1,args,disabled_QMARK_,tooltip,attr,md_icon_name,on_click,style,class$,tooltip_position,mouse_over_row_QMARK_,showing_QMARK_))
], null):null),attr], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,["zmdi zmdi-hc-fw-rc ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(md_icon_name)].join('')], null)], null)], null);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$class,"rc-row-button-wrapper display-inline-flex",cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$child,(cljs.core.truth_(tooltip)?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_tooltip,cljs.core.cst$kw$label,tooltip,cljs.core.cst$kw$position,(function (){var or__4131__auto__ = tooltip_position;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$below_DASH_center;
}
})(),cljs.core.cst$kw$showing_QMARK_,showing_QMARK_,cljs.core.cst$kw$anchor,the_button], null):the_button)], null);
};
var G__18278 = function (var_args){
var p__18275 = null;
if (arguments.length > 0) {
var G__18279__i = 0, G__18279__a = new Array(arguments.length -  0);
while (G__18279__i < G__18279__a.length) {G__18279__a[G__18279__i] = arguments[G__18279__i + 0]; ++G__18279__i;}
  p__18275 = new cljs.core.IndexedSeq(G__18279__a,0,null);
} 
return G__18278__delegate.call(this,p__18275);};
G__18278.cljs$lang$maxFixedArity = 0;
G__18278.cljs$lang$applyTo = (function (arglist__18280){
var p__18275 = cljs.core.seq(arglist__18280);
return G__18278__delegate(p__18275);
});
G__18278.cljs$core$IFn$_invoke$arity$variadic = G__18278__delegate;
return G__18278;
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
var G__18284__delegate = function (p__18281){
var map__18282 = p__18281;
var map__18282__$1 = (((((!((map__18282 == null))))?(((((map__18282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18282):map__18282);
var args = map__18282__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18282__$1,cljs.core.cst$kw$label);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18282__$1,cljs.core.cst$kw$on_DASH_click);
var tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18282__$1,cljs.core.cst$kw$tooltip);
var tooltip_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18282__$1,cljs.core.cst$kw$tooltip_DASH_position);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18282__$1,cljs.core.cst$kw$disabled_QMARK_);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18282__$1,cljs.core.cst$kw$class);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18282__$1,cljs.core.cst$kw$style);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18282__$1,cljs.core.cst$kw$attr);
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
var the_button = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["rc-hyperlink noselect ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cursor,(cljs.core.truth_(disabled_QMARK___$1)?"not-allowed":"pointer"),cljs.core.cst$kw$color,(cljs.core.truth_(disabled_QMARK___$1)?"grey":null)], null),style], 0)),cljs.core.cst$kw$on_DASH_click,((function (label__$1,disabled_QMARK___$1,map__18282,map__18282__$1,args,label,on_click,tooltip,tooltip_position,disabled_QMARK_,class$,style,attr,showing_QMARK_){
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
});})(label__$1,disabled_QMARK___$1,map__18282,map__18282__$1,args,label,on_click,tooltip,tooltip_position,disabled_QMARK_,class$,style,attr,showing_QMARK_))
], null),(cljs.core.truth_(tooltip)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (label__$1,disabled_QMARK___$1,map__18282,map__18282__$1,args,label,on_click,tooltip,tooltip_position,disabled_QMARK_,class$,style,attr,showing_QMARK_){
return (function (event){
cljs.core.reset_BANG_(showing_QMARK_,true);

return null;
});})(label__$1,disabled_QMARK___$1,map__18282,map__18282__$1,args,label,on_click,tooltip,tooltip_position,disabled_QMARK_,class$,style,attr,showing_QMARK_))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (label__$1,disabled_QMARK___$1,map__18282,map__18282__$1,args,label,on_click,tooltip,tooltip_position,disabled_QMARK_,class$,style,attr,showing_QMARK_){
return (function (event){
cljs.core.reset_BANG_(showing_QMARK_,false);

return null;
});})(label__$1,disabled_QMARK___$1,map__18282,map__18282__$1,args,label,on_click,tooltip,tooltip_position,disabled_QMARK_,class$,style,attr,showing_QMARK_))
], null):null),attr], 0)),label__$1], null)], null);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$class,"rc-hyperlink-wrapper display-inline-flex",cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$child,(cljs.core.truth_(tooltip)?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_tooltip,cljs.core.cst$kw$label,tooltip,cljs.core.cst$kw$position,(function (){var or__4131__auto__ = tooltip_position;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$below_DASH_center;
}
})(),cljs.core.cst$kw$showing_QMARK_,showing_QMARK_,cljs.core.cst$kw$anchor,the_button], null):the_button)], null);
};
var G__18284 = function (var_args){
var p__18281 = null;
if (arguments.length > 0) {
var G__18285__i = 0, G__18285__a = new Array(arguments.length -  0);
while (G__18285__i < G__18285__a.length) {G__18285__a[G__18285__i] = arguments[G__18285__i + 0]; ++G__18285__i;}
  p__18281 = new cljs.core.IndexedSeq(G__18285__a,0,null);
} 
return G__18284__delegate.call(this,p__18281);};
G__18284.cljs$lang$maxFixedArity = 0;
G__18284.cljs$lang$applyTo = (function (arglist__18286){
var p__18281 = cljs.core.seq(arglist__18286);
return G__18284__delegate(p__18281);
});
G__18284.cljs$core$IFn$_invoke$arity$variadic = G__18284__delegate;
return G__18284;
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
var G__18290__delegate = function (p__18287){
var map__18288 = p__18287;
var map__18288__$1 = (((((!((map__18288 == null))))?(((((map__18288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18288):map__18288);
var args = map__18288__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18288__$1,cljs.core.cst$kw$label);
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18288__$1,cljs.core.cst$kw$href);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18288__$1,cljs.core.cst$kw$target);
var tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18288__$1,cljs.core.cst$kw$tooltip);
var tooltip_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18288__$1,cljs.core.cst$kw$tooltip_DASH_position);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18288__$1,cljs.core.cst$kw$class);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18288__$1,cljs.core.cst$kw$style);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18288__$1,cljs.core.cst$kw$attr);
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
var the_button = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,["rc-hyperlink-href noselect ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),style], 0)),cljs.core.cst$kw$href,href__$1,cljs.core.cst$kw$target,target__$1], null),(cljs.core.truth_(tooltip)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (label__$1,href__$1,target__$1,map__18288,map__18288__$1,args,label,href,target,tooltip,tooltip_position,class$,style,attr,showing_QMARK_){
return (function (event){
cljs.core.reset_BANG_(showing_QMARK_,true);

return null;
});})(label__$1,href__$1,target__$1,map__18288,map__18288__$1,args,label,href,target,tooltip,tooltip_position,class$,style,attr,showing_QMARK_))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (label__$1,href__$1,target__$1,map__18288,map__18288__$1,args,label,href,target,tooltip,tooltip_position,class$,style,attr,showing_QMARK_){
return (function (event){
cljs.core.reset_BANG_(showing_QMARK_,false);

return null;
});})(label__$1,href__$1,target__$1,map__18288,map__18288__$1,args,label,href,target,tooltip,tooltip_position,class$,style,attr,showing_QMARK_))
], null):null),attr], 0)),label__$1], null);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$class,"rc-hyperlink-href-wrapper display-inline-flex",cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$child,(cljs.core.truth_(tooltip)?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_tooltip,cljs.core.cst$kw$label,tooltip,cljs.core.cst$kw$position,(function (){var or__4131__auto__ = tooltip_position;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$below_DASH_center;
}
})(),cljs.core.cst$kw$showing_QMARK_,showing_QMARK_,cljs.core.cst$kw$anchor,the_button], null):the_button)], null);
};
var G__18290 = function (var_args){
var p__18287 = null;
if (arguments.length > 0) {
var G__18291__i = 0, G__18291__a = new Array(arguments.length -  0);
while (G__18291__i < G__18291__a.length) {G__18291__a[G__18291__i] = arguments[G__18291__i + 0]; ++G__18291__i;}
  p__18287 = new cljs.core.IndexedSeq(G__18291__a,0,null);
} 
return G__18290__delegate.call(this,p__18287);};
G__18290.cljs$lang$maxFixedArity = 0;
G__18290.cljs$lang$applyTo = (function (arglist__18292){
var p__18287 = cljs.core.seq(arglist__18292);
return G__18290__delegate(p__18287);
});
G__18290.cljs$core$IFn$_invoke$arity$variadic = G__18290__delegate;
return G__18290;
})()
;
;})(showing_QMARK_))
});
