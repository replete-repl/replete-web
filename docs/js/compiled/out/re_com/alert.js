// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_com.alert');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_com.util');
goog.require('re_com.buttons');
goog.require('re_com.close_button');
goog.require('re_com.box');
goog.require('re_com.validate');
re_com.alert.alert_box_args_desc = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$id,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"anything",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"a unique identifier, usually an integer or string."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$alert_DASH_type,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$info,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.alert_type_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"one of ",re_com.validate.alert_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$heading,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string | hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"displayed as a larger heading. One of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":heading"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":body"], null)," should be provided"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$body,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string | hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"displayed within the body of the alert"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$padding,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"15px",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"padding surounding the alert"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$closeable_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"if true, render a close button. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-close"], null)," should be supplied"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_close,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,":id -> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"called when the user clicks the close 'X' button. Passed the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":id"], null)," of the alert to close"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to the outer container)"], null)], null)], null);
/**
 * Displays one alert box. A close button allows the message to be removed
 */
re_com.alert.alert_box = (function re_com$alert$alert_box(var_args){
var args__4736__auto__ = [];
var len__4730__auto___18326 = arguments.length;
var i__4731__auto___18327 = (0);
while(true){
if((i__4731__auto___18327 < len__4730__auto___18326)){
args__4736__auto__.push((arguments[i__4731__auto___18327]));

var G__18328 = (i__4731__auto___18327 + (1));
i__4731__auto___18327 = G__18328;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.alert.alert_box.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.alert.alert_box.cljs$core$IFn$_invoke$arity$variadic = (function (p__18322){
var map__18323 = p__18322;
var map__18323__$1 = (((((!((map__18323 == null))))?(((((map__18323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18323):map__18323);
var args = map__18323__$1;
var closeable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18323__$1,cljs.core.cst$kw$closeable_QMARK_);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18323__$1,cljs.core.cst$kw$body);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18323__$1,cljs.core.cst$kw$attr);
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18323__$1,cljs.core.cst$kw$heading);
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18323__$1,cljs.core.cst$kw$on_DASH_close);
var alert_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18323__$1,cljs.core.cst$kw$alert_DASH_type,cljs.core.cst$kw$info);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18323__$1,cljs.core.cst$kw$style);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18323__$1,cljs.core.cst$kw$id);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18323__$1,cljs.core.cst$kw$class);
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18323__$1,cljs.core.cst$kw$padding);
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.alert.alert_box_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["alert-box"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro alert-box-args-desc args \"alert-box\")"));
}

var close_alert = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.close_button.close_button,cljs.core.cst$kw$on_DASH_click,((function (map__18323,map__18323__$1,args,closeable_QMARK_,body,attr,heading,on_close,alert_type,style,id,class$,padding){
return (function (){
return (on_close.cljs$core$IFn$_invoke$arity$1 ? on_close.cljs$core$IFn$_invoke$arity$1(id) : on_close.call(null,id));
});})(map__18323,map__18323__$1,args,closeable_QMARK_,body,attr,heading,on_close,alert_type,style,id,class$,padding))
,cljs.core.cst$kw$div_DASH_size,(20),cljs.core.cst$kw$font_DASH_size,(20)], null);
var alert_class = (function (){var G__18325 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$none,"",cljs.core.cst$kw$info,"alert-success",cljs.core.cst$kw$warning,"alert-warning",cljs.core.cst$kw$danger,"alert-danger"], null);
return (alert_type.cljs$core$IFn$_invoke$arity$1 ? alert_type.cljs$core$IFn$_invoke$arity$1(G__18325) : alert_type.call(null,G__18325));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-alert alert fade in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alert_class)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,padding], null),style], 0))], null),attr], 0)),(cljs.core.truth_(heading)?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,cljs.core.cst$kw$justify,cljs.core.cst$kw$between,cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_bottom,(cljs.core.truth_(body)?"10px":"0px")], null),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_bottom,"0px"], null)], null),heading], null),(cljs.core.truth_((function (){var and__4120__auto__ = closeable_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return on_close;
} else {
return and__4120__auto__;
}
})())?close_alert:null)], null)], null):null),(cljs.core.truth_(body)?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,cljs.core.cst$kw$justify,cljs.core.cst$kw$between,cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,body], null),(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not(heading);
if(and__4120__auto__){
var and__4120__auto____$1 = closeable_QMARK_;
if(cljs.core.truth_(and__4120__auto____$1)){
return on_close;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())?close_alert:null)], null)], null):null)], null);
});

re_com.alert.alert_box.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.alert.alert_box.cljs$lang$applyTo = (function (seq18321){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18321));
});

re_com.alert.alert_list_args_desc = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$alerts,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"vector of maps | atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.vector_of_maps_QMARK_,cljs.core.cst$kw$description,"alerts to render (in the order supplied). Can also be a list of maps"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_close,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,":id -> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"called when the user clicks the close 'X' button. Passed the alert's ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":id"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$max_DASH_height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS style for maximum list height. By default, it grows forever"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$padding,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"4px",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS padding within the alert"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$border_DASH_style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"1px solid lightgrey",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS border style surrounding the list"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$alert_DASH_class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to each alert-box component)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$alert_DASH_style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles (applies to each alert-box component)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to the outer container)"], null)], null)], null);
/**
 * Displays a list of alert-box components in a v-box. Sample alerts object:
 *   [{:id 2
 *     :alert-type :warning
 *     :heading "Heading"
 *     :body "Body"
 *     :padding "8px"
 *     :closeable? true}
 *    {:id 1
 *     :alert-type :info
 *     :heading "Heading"
 *     :body "Body"}]
 */
re_com.alert.alert_list = (function re_com$alert$alert_list(var_args){
var args__4736__auto__ = [];
var len__4730__auto___18341 = arguments.length;
var i__4731__auto___18342 = (0);
while(true){
if((i__4731__auto___18342 < len__4730__auto___18341)){
args__4736__auto__.push((arguments[i__4731__auto___18342]));

var G__18343 = (i__4731__auto___18342 + (1));
i__4731__auto___18342 = G__18343;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.alert.alert_list.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.alert.alert_list.cljs$core$IFn$_invoke$arity$variadic = (function (p__18330){
var map__18331 = p__18330;
var map__18331__$1 = (((((!((map__18331 == null))))?(((((map__18331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18331):map__18331);
var args = map__18331__$1;
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18331__$1,cljs.core.cst$kw$attr);
var border_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18331__$1,cljs.core.cst$kw$border_DASH_style);
var max_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18331__$1,cljs.core.cst$kw$max_DASH_height);
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18331__$1,cljs.core.cst$kw$on_DASH_close);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18331__$1,cljs.core.cst$kw$style);
var alert_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18331__$1,cljs.core.cst$kw$alert_DASH_style);
var alert_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18331__$1,cljs.core.cst$kw$alert_DASH_class);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18331__$1,cljs.core.cst$kw$class);
var alerts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18331__$1,cljs.core.cst$kw$alerts);
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18331__$1,cljs.core.cst$kw$padding,"4px");
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.alert.alert_list_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["alert-list"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro alert-list-args-desc args \"alert-list\")"));
}

var alerts__$1 = re_com.util.deref_or_value(alerts);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.border,cljs.core.cst$kw$class,["rc-alert-list ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,style,cljs.core.cst$kw$attr,attr,cljs.core.cst$kw$padding,padding,cljs.core.cst$kw$border,border_style,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.scroller,cljs.core.cst$kw$v_DASH_scroll,cljs.core.cst$kw$auto,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_height,max_height], null),cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,cljs.core.cst$kw$size,"auto",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var iter__4523__auto__ = ((function (alerts__$1,map__18331,map__18331__$1,args,attr,border_style,max_height,on_close,style,alert_style,alert_class,class$,alerts,padding){
return (function re_com$alert$iter__18333(s__18334){
return (new cljs.core.LazySeq(null,((function (alerts__$1,map__18331,map__18331__$1,args,attr,border_style,max_height,on_close,style,alert_style,alert_class,class$,alerts,padding){
return (function (){
var s__18334__$1 = s__18334;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__18334__$1);
if(temp__5720__auto__){
var s__18334__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18334__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__18334__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__18336 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__18335 = (0);
while(true){
if((i__18335 < size__4522__auto__)){
var alert = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__18335);
cljs.core.chunk_append(b__18336,(function (){var map__18337 = alert;
var map__18337__$1 = (((((!((map__18337 == null))))?(((((map__18337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18337):map__18337);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18337__$1,cljs.core.cst$kw$id);
var alert_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18337__$1,cljs.core.cst$kw$alert_DASH_type);
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18337__$1,cljs.core.cst$kw$heading);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18337__$1,cljs.core.cst$kw$body);
var padding__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18337__$1,cljs.core.cst$kw$padding);
var closeable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18337__$1,cljs.core.cst$kw$closeable_QMARK_);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.alert.alert_box,cljs.core.cst$kw$id,id,cljs.core.cst$kw$alert_DASH_type,alert_type,cljs.core.cst$kw$heading,heading,cljs.core.cst$kw$body,body,cljs.core.cst$kw$padding,padding__$1,cljs.core.cst$kw$closeable_QMARK_,closeable_QMARK_,cljs.core.cst$kw$on_DASH_close,on_close,cljs.core.cst$kw$class,alert_class,cljs.core.cst$kw$style,alert_style], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null));
})());

var G__18344 = (i__18335 + (1));
i__18335 = G__18344;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18336),re_com$alert$iter__18333(cljs.core.chunk_rest(s__18334__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18336),null);
}
} else {
var alert = cljs.core.first(s__18334__$2);
return cljs.core.cons((function (){var map__18339 = alert;
var map__18339__$1 = (((((!((map__18339 == null))))?(((((map__18339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18339):map__18339);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18339__$1,cljs.core.cst$kw$id);
var alert_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18339__$1,cljs.core.cst$kw$alert_DASH_type);
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18339__$1,cljs.core.cst$kw$heading);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18339__$1,cljs.core.cst$kw$body);
var padding__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18339__$1,cljs.core.cst$kw$padding);
var closeable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18339__$1,cljs.core.cst$kw$closeable_QMARK_);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.alert.alert_box,cljs.core.cst$kw$id,id,cljs.core.cst$kw$alert_DASH_type,alert_type,cljs.core.cst$kw$heading,heading,cljs.core.cst$kw$body,body,cljs.core.cst$kw$padding,padding__$1,cljs.core.cst$kw$closeable_QMARK_,closeable_QMARK_,cljs.core.cst$kw$on_DASH_close,on_close,cljs.core.cst$kw$class,alert_class,cljs.core.cst$kw$style,alert_style], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null));
})(),re_com$alert$iter__18333(cljs.core.rest(s__18334__$2)));
}
} else {
return null;
}
break;
}
});})(alerts__$1,map__18331,map__18331__$1,args,attr,border_style,max_height,on_close,style,alert_style,alert_class,class$,alerts,padding))
,null,null));
});})(alerts__$1,map__18331,map__18331__$1,args,attr,border_style,max_height,on_close,style,alert_style,alert_class,class$,alerts,padding))
;
return iter__4523__auto__(alerts__$1);
})()], null)], null)], null)], null)], null);
});

re_com.alert.alert_list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.alert.alert_list.cljs$lang$applyTo = (function (seq18329){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18329));
});

