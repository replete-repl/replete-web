// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_com.modal_panel');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_com.validate');
re_com.modal_panel.modal_panel_args_desc = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$child,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"string | hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"hiccup to be centered within in the browser window"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$wrap_DASH_nicely_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,true,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"if true, wrap ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":child"], null)," in a white, rounded panel"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$backdrop_DASH_color,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"black",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS color of backdrop"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$backdrop_DASH_opacity,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,0.6,cljs.core.cst$kw$type,"double | string",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.number_or_string_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"opacity of backdrop from:",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"0.0 (transparent) to 1.0 (opaque)"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$backdrop_DASH_on_DASH_click,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,null,cljs.core.cst$kw$type,"-> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"a function which takes no params and returns nothing. Called when the backdrop is clicked"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to the outer container)"], null)], null)], null);
/**
 * Renders a modal window centered on screen. A dark transparent backdrop sits between this and the underlying
 * main window to prevent UI interactivity and place user focus on the modal window.
 * Parameters:
 *  - child:  The message to display in the modal (a string or a hiccup vector or function returning a hiccup vector)
 */
re_com.modal_panel.modal_panel = (function re_com$modal_panel$modal_panel(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21045 = arguments.length;
var i__4731__auto___21046 = (0);
while(true){
if((i__4731__auto___21046 < len__4730__auto___21045)){
args__4736__auto__.push((arguments[i__4731__auto___21046]));

var G__21047 = (i__4731__auto___21046 + (1));
i__4731__auto___21046 = G__21047;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.modal_panel.modal_panel.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.modal_panel.modal_panel.cljs$core$IFn$_invoke$arity$variadic = (function (p__21042){
var map__21043 = p__21042;
var map__21043__$1 = (((((!((map__21043 == null))))?(((((map__21043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21043):map__21043);
var args = map__21043__$1;
var child = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21043__$1,cljs.core.cst$kw$child);
var wrap_nicely_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21043__$1,cljs.core.cst$kw$wrap_DASH_nicely_QMARK_,true);
var backdrop_color = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21043__$1,cljs.core.cst$kw$backdrop_DASH_color,"black");
var backdrop_opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21043__$1,cljs.core.cst$kw$backdrop_DASH_opacity,0.6);
var backdrop_on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21043__$1,cljs.core.cst$kw$backdrop_DASH_on_DASH_click);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21043__$1,cljs.core.cst$kw$class);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21043__$1,cljs.core.cst$kw$style);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21043__$1,cljs.core.cst$kw$attr);
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.modal_panel.modal_panel_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["modal-panel"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro modal-panel-args-desc args \"modal-panel\")"));
}

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-modal-panel display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$left,"0px",cljs.core.cst$kw$top,"0px",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$z_DASH_index,(1020)], null),style], 0))], null),attr], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"rc-modal-panel-backdrop",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$background_DASH_color,backdrop_color,cljs.core.cst$kw$opacity,backdrop_opacity,cljs.core.cst$kw$z_DASH_index,(1)], null),cljs.core.cst$kw$on_DASH_click,((function (map__21043,map__21043__$1,args,child,wrap_nicely_QMARK_,backdrop_color,backdrop_opacity,backdrop_on_click,class$,style,attr){
return (function (event){
if(cljs.core.truth_(backdrop_on_click)){
(backdrop_on_click.cljs$core$IFn$_invoke$arity$0 ? backdrop_on_click.cljs$core$IFn$_invoke$arity$0() : backdrop_on_click.call(null));
} else {
}

event.preventDefault();

event.stopPropagation();

return null;
});})(map__21043,map__21043__$1,args,child,wrap_nicely_QMARK_,backdrop_color,backdrop_opacity,backdrop_on_click,class$,style,attr))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"rc-modal-panel-container",cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin,"auto",cljs.core.cst$kw$z_DASH_index,(2)], null),(cljs.core.truth_(wrap_nicely_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$background_DASH_color,"white",cljs.core.cst$kw$padding,"16px",cljs.core.cst$kw$border_DASH_radius,"6px"], null):null)], 0))], null),child], null)], null);
});

re_com.modal_panel.modal_panel.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.modal_panel.modal_panel.cljs$lang$applyTo = (function (seq21041){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21041));
});

