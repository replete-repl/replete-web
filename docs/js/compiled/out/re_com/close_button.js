// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_com.close_button');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_com.util');
goog.require('re_com.validate');
goog.require('re_com.box');
goog.require('reagent.core');
re_com.close_button.close_button_args_desc = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"-> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"a function which takes no params and returns nothing. Called when the button is clicked"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$div_DASH_size,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(16),cljs.core.cst$kw$type,"number",cljs.core.cst$kw$validate_DASH_fn,cljs.core.number_QMARK_,cljs.core.cst$kw$description,"numeric px size of the div containing the close button (can be 0 because the 'x' button text is absolutely positioned and centered within the div)"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$font_DASH_size,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(16),cljs.core.cst$kw$type,"number",cljs.core.cst$kw$validate_DASH_fn,cljs.core.number_QMARK_,cljs.core.cst$kw$description,"numeric px font size of the 'x' button text"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$color,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"#ccc",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"HTML color of the 'x' button text"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$hover_DASH_color,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"#999",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"HTML color of the button text when the mouse is hovering over it"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string | hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"what to show in the tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$top_DASH_offset,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"number",cljs.core.cst$kw$validate_DASH_fn,cljs.core.number_QMARK_,cljs.core.cst$kw$description,"offset the 'x' button text up or down from it's default position in the containing div (can be positive or negative)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$left_DASH_offset,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"number",cljs.core.cst$kw$validate_DASH_fn,cljs.core.number_QMARK_,cljs.core.cst$kw$description,"offset the 'x' button text left or right from it's default position in the containing div (can be positive or negative)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$disabled_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,"if true, the user can't click the button"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the button, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles (applies to the button, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to the button, not the wrapping div)"], null)], null)], null);
re_com.close_button.close_button = (function re_com$close_button$close_button(){
var over_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (over_QMARK_){
return (function() { 
var re_com$close_button$close_button_$_close_button_render__delegate = function (p__14849){
var map__14850 = p__14849;
var map__14850__$1 = (((((!((map__14850 == null))))?(((((map__14850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14850):map__14850);
var args = map__14850__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14850__$1,cljs.core.cst$kw$disabled_QMARK_);
var tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14850__$1,cljs.core.cst$kw$tooltip);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14850__$1,cljs.core.cst$kw$attr);
var left_offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14850__$1,cljs.core.cst$kw$left_DASH_offset);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14850__$1,cljs.core.cst$kw$color,"#ccc");
var font_size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14850__$1,cljs.core.cst$kw$font_DASH_size,(16));
var div_size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14850__$1,cljs.core.cst$kw$div_DASH_size,(16));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14850__$1,cljs.core.cst$kw$on_DASH_click);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14850__$1,cljs.core.cst$kw$style);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14850__$1,cljs.core.cst$kw$class);
var top_offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14850__$1,cljs.core.cst$kw$top_DASH_offset);
var hover_color = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14850__$1,cljs.core.cst$kw$hover_DASH_color,"#999");
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.close_button.close_button_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["close-button"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro close-button-args-desc args \"close-button\")"));
}

var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$class,"rc-close-button",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,"inline-block",cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$width,re_com.util.px(div_size),cljs.core.cst$kw$height,re_com.util.px(div_size)], null),cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$class,class$,cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$cursor,(cljs.core.truth_(disabled_QMARK___$1)?null:"pointer"),cljs.core.cst$kw$font_DASH_size,re_com.util.px(font_size),cljs.core.cst$kw$color,(cljs.core.truth_(cljs.core.deref(over_QMARK_))?hover_color:color),cljs.core.cst$kw$top,re_com.util.px.cljs$core$IFn$_invoke$arity$variadic((((font_size - div_size) / (2)) - top_offset),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$negative], 0)),cljs.core.cst$kw$left,re_com.util.px.cljs$core$IFn$_invoke$arity$variadic((((font_size - div_size) / (2)) - left_offset),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$negative], 0))], null),style], 0)),cljs.core.cst$kw$attr,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,tooltip,cljs.core.cst$kw$on_DASH_click,((function (disabled_QMARK___$1,map__14850,map__14850__$1,args,disabled_QMARK_,tooltip,attr,left_offset,color,font_size,div_size,on_click,style,class$,top_offset,hover_color,over_QMARK_){
return (function (event){
if(cljs.core.truth_((function (){var and__4120__auto__ = on_click;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(disabled_QMARK___$1);
} else {
return and__4120__auto__;
}
})())){
(on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(event) : on_click.call(null,event));

event.stopPropagation();
} else {
}

return null;
});})(disabled_QMARK___$1,map__14850,map__14850__$1,args,disabled_QMARK_,tooltip,attr,left_offset,color,font_size,div_size,on_click,style,class$,top_offset,hover_color,over_QMARK_))
,cljs.core.cst$kw$on_DASH_mouse_DASH_enter,((function (disabled_QMARK___$1,map__14850,map__14850__$1,args,disabled_QMARK_,tooltip,attr,left_offset,color,font_size,div_size,on_click,style,class$,top_offset,hover_color,over_QMARK_){
return (function (event){
cljs.core.reset_BANG_(over_QMARK_,true);

return null;
});})(disabled_QMARK___$1,map__14850,map__14850__$1,args,disabled_QMARK_,tooltip,attr,left_offset,color,font_size,div_size,on_click,style,class$,top_offset,hover_color,over_QMARK_))
,cljs.core.cst$kw$on_DASH_mouse_DASH_leave,((function (disabled_QMARK___$1,map__14850,map__14850__$1,args,disabled_QMARK_,tooltip,attr,left_offset,color,font_size,div_size,on_click,style,class$,top_offset,hover_color,over_QMARK_){
return (function (event){
cljs.core.reset_BANG_(over_QMARK_,false);

return null;
});})(disabled_QMARK___$1,map__14850,map__14850__$1,args,disabled_QMARK_,tooltip,attr,left_offset,color,font_size,div_size,on_click,style,class$,top_offset,hover_color,over_QMARK_))
], null),attr], 0)),cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"zmdi zmdi-hc-fw-rc zmdi zmdi-close"], null)], null)], null)], null);
};
var re_com$close_button$close_button_$_close_button_render = function (var_args){
var p__14849 = null;
if (arguments.length > 0) {
var G__14852__i = 0, G__14852__a = new Array(arguments.length -  0);
while (G__14852__i < G__14852__a.length) {G__14852__a[G__14852__i] = arguments[G__14852__i + 0]; ++G__14852__i;}
  p__14849 = new cljs.core.IndexedSeq(G__14852__a,0,null);
} 
return re_com$close_button$close_button_$_close_button_render__delegate.call(this,p__14849);};
re_com$close_button$close_button_$_close_button_render.cljs$lang$maxFixedArity = 0;
re_com$close_button$close_button_$_close_button_render.cljs$lang$applyTo = (function (arglist__14853){
var p__14849 = cljs.core.seq(arglist__14853);
return re_com$close_button$close_button_$_close_button_render__delegate(p__14849);
});
re_com$close_button$close_button_$_close_button_render.cljs$core$IFn$_invoke$arity$variadic = re_com$close_button$close_button_$_close_button_render__delegate;
return re_com$close_button$close_button_$_close_button_render;
})()
;
;})(over_QMARK_))
});
