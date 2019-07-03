// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_com.misc');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
re_com.misc.throbber_args_desc = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$size,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$regular,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.throbber_size_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"one of ",re_com.validate.throbber_sizes_list], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$color,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"#999",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS color"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the throbber, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override (applies to the throbber, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to the throbber, not the wrapping div)"], null)], null)], null);
/**
 * Render an animated throbber using CSS
 */
re_com.misc.throbber = (function re_com$misc$throbber(var_args){
var args__4736__auto__ = [];
var len__4730__auto___17507 = arguments.length;
var i__4731__auto___17508 = (0);
while(true){
if((i__4731__auto___17508 < len__4730__auto___17507)){
args__4736__auto__.push((arguments[i__4731__auto___17508]));

var G__17509 = (i__4731__auto___17508 + (1));
i__4731__auto___17508 = G__17509;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.misc.throbber.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.misc.throbber.cljs$core$IFn$_invoke$arity$variadic = (function (p__17502){
var map__17503 = p__17502;
var map__17503__$1 = (((((!((map__17503 == null))))?(((((map__17503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17503):map__17503);
var args = map__17503__$1;
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17503__$1,cljs.core.cst$kw$size);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17503__$1,cljs.core.cst$kw$color);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17503__$1,cljs.core.cst$kw$class);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17503__$1,cljs.core.cst$kw$style);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17503__$1,cljs.core.cst$kw$attr);
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.misc.throbber_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["throbber"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro throbber-args-desc args \"throbber\")"));
}

var seg = ((function (map__17503,map__17503__$1,args,size,color,class$,style,attr){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,(cljs.core.truth_(color)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,color], null)], null):null)], null);
});})(map__17503,map__17503__$1,args,size,color,class$,style,attr))
;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$class,"rc-throbber-wrapper",cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-throbber loader ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__17506 = size;
var G__17506__$1 = (((G__17506 instanceof cljs.core.Keyword))?G__17506.fqn:null);
switch (G__17506__$1) {
case "regular":
return "";

break;
case "smaller":
return "smaller ";

break;
case "small":
return "small ";

break;
case "large":
return "large ";

break;
default:
return "";

}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,style], null),attr], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seg], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seg], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seg], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seg], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seg], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seg], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seg], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seg], null)], null)], null);
});

re_com.misc.throbber.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.misc.throbber.cljs$lang$applyTo = (function (seq17501){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17501));
});

re_com.misc.input_text_args_desc = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$model,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"string/nil | atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.nillable_string_or_atom_QMARK_,cljs.core.cst$kw$description,"text of the input (can be atom or value/nil)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"string -> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":change-on-blur?"], null)," controls when it is called. Passed the current input string"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$status,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.input_status_type_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$status_DASH_icon_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$status_DASH_tooltip,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$placeholder,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"250px",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$rows,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(3),cljs.core.cst$kw$type,"integer | string",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.number_or_string_QMARK_,cljs.core.cst$kw$description,"ONLY applies to 'input-textarea': the number of rows of text to show"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,true,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-change"], null)," function on blur, otherwise on every change (character by character)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$validation_DASH_regex,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"regex",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.regex_QMARK_,cljs.core.cst$kw$description,"user input is only accepted if it would result in a string that matches this regular expression"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$disabled_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the textbox, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override (applies to the textbox, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to the textbox, not the wrapping div)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$input_DASH_type,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,cljs.core.keyword_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"ONLY applies to super function 'base-input-text': either ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":input"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":password"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":textarea"], null)], null)], null)], null);
/**
 * Returns markup for a basic text input label
 */
re_com.misc.input_text_base = (function re_com$misc$input_text_base(var_args){
var args__4736__auto__ = [];
var len__4730__auto___17526 = arguments.length;
var i__4731__auto___17527 = (0);
while(true){
if((i__4731__auto___17527 < len__4730__auto___17526)){
args__4736__auto__.push((arguments[i__4731__auto___17527]));

var G__17528 = (i__4731__auto___17527 + (1));
i__4731__auto___17527 = G__17528;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.misc.input_text_base.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.misc.input_text_base.cljs$core$IFn$_invoke$arity$variadic = (function (p__17512){
var map__17513 = p__17512;
var map__17513__$1 = (((((!((map__17513 == null))))?(((((map__17513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17513):map__17513);
var args = map__17513__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17513__$1,cljs.core.cst$kw$model);
var input_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17513__$1,cljs.core.cst$kw$input_DASH_type);
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.misc.input_text_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["input-text"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro input-text-args-desc args \"input-text\")"));
}

var external_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(model));
var internal_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((((cljs.core.deref(external_model) == null))?"":cljs.core.deref(external_model)));
return ((function (external_model,internal_model,map__17513,map__17513__$1,args,model,input_type){
return (function() { 
var G__17529__delegate = function (p__17515){
var map__17516 = p__17515;
var map__17516__$1 = (((((!((map__17516 == null))))?(((((map__17516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17516):map__17516);
var args__$1 = map__17516__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17516__$1,cljs.core.cst$kw$disabled_QMARK_);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17516__$1,cljs.core.cst$kw$on_DASH_change);
var status_icon_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17516__$1,cljs.core.cst$kw$status_DASH_icon_QMARK_);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17516__$1,cljs.core.cst$kw$height);
var status_tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17516__$1,cljs.core.cst$kw$status_DASH_tooltip);
var model__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17516__$1,cljs.core.cst$kw$model);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17516__$1,cljs.core.cst$kw$attr);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17516__$1,cljs.core.cst$kw$placeholder);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17516__$1,cljs.core.cst$kw$width);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17516__$1,cljs.core.cst$kw$rows);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17516__$1,cljs.core.cst$kw$style);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17516__$1,cljs.core.cst$kw$status);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17516__$1,cljs.core.cst$kw$class);
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17516__$1,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_,true);
var validation_regex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17516__$1,cljs.core.cst$kw$validation_DASH_regex);
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.misc.input_text_args_desc),args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["input-text"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro input-text-args-desc args \"input-text\")"));
}

var latest_ext_model = re_com.util.deref_or_value(model__$1);
var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var showing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(external_model),latest_ext_model)){
cljs.core.reset_BANG_(external_model,latest_ext_model);

cljs.core.reset_BANG_(internal_model,latest_ext_model);
} else {
}

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,cljs.core.cst$kw$class,"rc-input-text ",cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$width,(cljs.core.truth_(width)?width:"250px"),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-input-text-inner ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__17519 = status;
var G__17519__$1 = (((G__17519 instanceof cljs.core.Keyword))?G__17519.fqn:null);
switch (G__17519__$1) {
case "success":
return "has-success ";

break;
case "warning":
return "has-warning ";

break;
case "error":
return "has-error ";

break;
default:
return "";

}
})()),(cljs.core.truth_((function (){var and__4120__auto__ = status;
if(cljs.core.truth_(and__4120__auto__)){
return status_icon_QMARK_;
} else {
return and__4120__auto__;
}
})())?"has-feedback":null)].join(''),cljs.core.cst$kw$style,re_com.box.flex_child_style("auto")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_type,cljs.core.cst$kw$password))?cljs.core.cst$kw$input:input_type),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$placeholder,cljs.core.cst$kw$disabled,cljs.core.cst$kw$value,cljs.core.cst$kw$on_DASH_blur,cljs.core.cst$kw$type,cljs.core.cst$kw$style,cljs.core.cst$kw$rows,cljs.core.cst$kw$on_DASH_key_DASH_up,cljs.core.cst$kw$class,cljs.core.cst$kw$on_DASH_change],[placeholder,disabled_QMARK___$1,cljs.core.deref(internal_model),((function (latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__17516,map__17516__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__17513,map__17513__$1,args,model,input_type){
return (function (event){
if(cljs.core.truth_((function (){var and__4120__auto__ = on_change;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__4120__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(internal_model),cljs.core.deref(external_model));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
cljs.core.reset_BANG_(external_model,cljs.core.deref(internal_model));

var G__17520_17531 = cljs.core.deref(internal_model);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__17520_17531) : on_change.call(null,G__17520_17531));
} else {
}

return null;
});})(latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__17516,map__17516__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__17513,map__17513__$1,args,model,input_type))
,(function (){var G__17521 = input_type;
var G__17521__$1 = (((G__17521 instanceof cljs.core.Keyword))?G__17521.fqn:null);
switch (G__17521__$1) {
case "input":
return "text";

break;
case "password":
return "password";

break;
default:
return null;

}
})(),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$height,height,cljs.core.cst$kw$padding_DASH_right,"12px"], null),style], 0)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_type,cljs.core.cst$kw$textarea))?(function (){var or__4131__auto__ = rows;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (3);
}
})():null),((function (latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__17516,map__17516__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__17513,map__17513__$1,args,model,input_type){
return (function (event){
if(cljs.core.truth_(disabled_QMARK___$1)){
event.preventDefault();
} else {
var G__17522_17533 = event.which;
switch (G__17522_17533) {
case (13):
if(cljs.core.truth_(on_change)){
cljs.core.reset_BANG_(external_model,cljs.core.deref(internal_model));

var G__17523_17535 = cljs.core.deref(internal_model);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__17523_17535) : on_change.call(null,G__17523_17535));
} else {
}

break;
case (27):
cljs.core.reset_BANG_(internal_model,cljs.core.deref(external_model));

break;
default:

}
}

return null;
});})(latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__17516,map__17516__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__17513,map__17513__$1,args,model,input_type))
,["form-control ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),((function (latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__17516,map__17516__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__17513,map__17513__$1,args,model,input_type){
return (function (event){
var new_val_17536 = event.target.value;
if(cljs.core.truth_((function (){var and__4120__auto__ = on_change;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = cljs.core.not(disabled_QMARK___$1);
if(and__4120__auto____$1){
if(cljs.core.truth_(validation_regex)){
return cljs.core.re_find(validation_regex,new_val_17536);
} else {
return true;
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
cljs.core.reset_BANG_(internal_model,new_val_17536);

if(cljs.core.truth_(change_on_blur_QMARK___$1)){
} else {
cljs.core.reset_BANG_(external_model,cljs.core.deref(internal_model));

var G__17524_17537 = cljs.core.deref(internal_model);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__17524_17537) : on_change.call(null,G__17524_17537));
}
} else {
}

return null;
});})(latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__17516,map__17516__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__17513,map__17513__$1,args,model,input_type))
]),attr], 0))], null)], null),(cljs.core.truth_((function (){var and__4120__auto__ = status_icon_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return status;
} else {
return and__4120__auto__;
}
})())?(function (){var icon_class = (function (){var G__17525 = status;
var G__17525__$1 = (((G__17525 instanceof cljs.core.Keyword))?G__17525.fqn:null);
switch (G__17525__$1) {
case "success":
return "zmdi-check-circle";

break;
case "warning":
return "zmdi-alert-triangle";

break;
case "error":
return "zmdi-alert-circle zmdi-spinner";

break;
case "validating":
return "zmdi-hc-spin zmdi-rotate-right zmdi-spinner";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17525__$1)].join('')));

}
})();
if(cljs.core.truth_(status_tooltip)){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_tooltip,cljs.core.cst$kw$label,status_tooltip,cljs.core.cst$kw$position,cljs.core.cst$kw$right_DASH_center,cljs.core.cst$kw$status,status,cljs.core.cst$kw$showing_QMARK_,showing_QMARK_,cljs.core.cst$kw$anchor,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$validating,status))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,cljs.core.cst$kw$size,cljs.core.cst$kw$regular,cljs.core.cst$kw$class,"smaller",cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (icon_class,latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__17516,map__17516__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__17513,map__17513__$1,args,model,input_type){
return (function (event){
if(cljs.core.truth_((function (){var and__4120__auto__ = status_icon_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return status;
} else {
return and__4120__auto__;
}
})())){
cljs.core.reset_BANG_(showing_QMARK_,true);
} else {
}

return null;
});})(icon_class,latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__17516,map__17516__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__17513,map__17513__$1,args,model,input_type))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (icon_class,latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__17516,map__17516__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__17513,map__17513__$1,args,model,input_type){
return (function (event){
cljs.core.reset_BANG_(showing_QMARK_,false);

return null;
});})(icon_class,latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__17516,map__17516__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__17513,map__17513__$1,args,model,input_type))
], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,["zmdi zmdi-hc-fw ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon_class)," form-control-feedback"].join(''),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"static",cljs.core.cst$kw$height,"auto",cljs.core.cst$kw$opacity,(cljs.core.truth_((function (){var and__4120__auto__ = status_icon_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return status;
} else {
return and__4120__auto__;
}
})())?"1":"0")], null),cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (icon_class,latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__17516,map__17516__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__17513,map__17513__$1,args,model,input_type){
return (function (event){
if(cljs.core.truth_((function (){var and__4120__auto__ = status_icon_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return status;
} else {
return and__4120__auto__;
}
})())){
cljs.core.reset_BANG_(showing_QMARK_,true);
} else {
}

return null;
});})(icon_class,latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__17516,map__17516__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__17513,map__17513__$1,args,model,input_type))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (icon_class,latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__17516,map__17516__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__17513,map__17513__$1,args,model,input_type){
return (function (event){
cljs.core.reset_BANG_(showing_QMARK_,false);

return null;
});})(icon_class,latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__17516,map__17516__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__17513,map__17513__$1,args,model,input_type))
], null)], null)),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),re_com.box.align_style(cljs.core.cst$kw$align_DASH_self,cljs.core.cst$kw$center),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_size,"130%",cljs.core.cst$kw$margin_DASH_left,"4px"], null)], 0))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$validating,status)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,cljs.core.cst$kw$size,cljs.core.cst$kw$regular,cljs.core.cst$kw$class,"smaller"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["zmdi zmdi-hc-fw ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon_class)," form-control-feedback"].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),re_com.box.align_style(cljs.core.cst$kw$align_DASH_self,cljs.core.cst$kw$center),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$position,"static",cljs.core.cst$kw$font_DASH_size,"130%",cljs.core.cst$kw$margin_DASH_left,"4px",cljs.core.cst$kw$opacity,(cljs.core.truth_((function (){var and__4120__auto__ = status_icon_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return status;
} else {
return and__4120__auto__;
}
})())?"1":"0"),cljs.core.cst$kw$height,"auto"], null)], 0)),cljs.core.cst$kw$title,status_tooltip], null)], null);
}
}
})():null)], null)], null);
};
var G__17529 = function (var_args){
var p__17515 = null;
if (arguments.length > 0) {
var G__17539__i = 0, G__17539__a = new Array(arguments.length -  0);
while (G__17539__i < G__17539__a.length) {G__17539__a[G__17539__i] = arguments[G__17539__i + 0]; ++G__17539__i;}
  p__17515 = new cljs.core.IndexedSeq(G__17539__a,0,null);
} 
return G__17529__delegate.call(this,p__17515);};
G__17529.cljs$lang$maxFixedArity = 0;
G__17529.cljs$lang$applyTo = (function (arglist__17540){
var p__17515 = cljs.core.seq(arglist__17540);
return G__17529__delegate(p__17515);
});
G__17529.cljs$core$IFn$_invoke$arity$variadic = G__17529__delegate;
return G__17529;
})()
;
;})(external_model,internal_model,map__17513,map__17513__$1,args,model,input_type))
});

re_com.misc.input_text_base.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.misc.input_text_base.cljs$lang$applyTo = (function (seq17511){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17511));
});

re_com.misc.input_text = (function re_com$misc$input_text(var_args){
var args__4736__auto__ = [];
var len__4730__auto___17542 = arguments.length;
var i__4731__auto___17543 = (0);
while(true){
if((i__4731__auto___17543 < len__4730__auto___17542)){
args__4736__auto__.push((arguments[i__4731__auto___17543]));

var G__17544 = (i__4731__auto___17543 + (1));
i__4731__auto___17543 = G__17544;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.misc.input_text.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.misc.input_text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(re_com.misc.input_text_base,cljs.core.cst$kw$input_DASH_type,cljs.core.cst$kw$input,args);
});

re_com.misc.input_text.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.misc.input_text.cljs$lang$applyTo = (function (seq17541){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17541));
});

re_com.misc.input_password = (function re_com$misc$input_password(var_args){
var args__4736__auto__ = [];
var len__4730__auto___17546 = arguments.length;
var i__4731__auto___17547 = (0);
while(true){
if((i__4731__auto___17547 < len__4730__auto___17546)){
args__4736__auto__.push((arguments[i__4731__auto___17547]));

var G__17548 = (i__4731__auto___17547 + (1));
i__4731__auto___17547 = G__17548;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.misc.input_password.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.misc.input_password.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(re_com.misc.input_text_base,cljs.core.cst$kw$input_DASH_type,cljs.core.cst$kw$password,args);
});

re_com.misc.input_password.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.misc.input_password.cljs$lang$applyTo = (function (seq17545){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17545));
});

re_com.misc.input_textarea = (function re_com$misc$input_textarea(var_args){
var args__4736__auto__ = [];
var len__4730__auto___17550 = arguments.length;
var i__4731__auto___17551 = (0);
while(true){
if((i__4731__auto___17551 < len__4730__auto___17550)){
args__4736__auto__.push((arguments[i__4731__auto___17551]));

var G__17552 = (i__4731__auto___17551 + (1));
i__4731__auto___17551 = G__17552;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.misc.input_textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.misc.input_textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(re_com.misc.input_text_base,cljs.core.cst$kw$input_DASH_type,cljs.core.cst$kw$textarea,args);
});

re_com.misc.input_textarea.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.misc.input_textarea.cljs$lang$applyTo = (function (seq17549){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17549));
});

re_com.misc.checkbox_args_desc = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$model,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,"holds state of the checkbox when it is called"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"boolean -> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"called when the checkbox is clicked. Passed the new value of the checkbox"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$label,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string | hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"the label shown to the right"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$disabled_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,"if true, user interaction is disabled"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$label_DASH_class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names (applies to the label)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$label_DASH_style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS style map (applies to the label)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the checkbox, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS style map (applies to the checkbox, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to the checkbox, not the wrapping div)"], null)], null)], null);
/**
 * I return the markup for a checkbox, with an optional RHS label
 */
re_com.misc.checkbox = (function re_com$misc$checkbox(var_args){
var args__4736__auto__ = [];
var len__4730__auto___17558 = arguments.length;
var i__4731__auto___17559 = (0);
while(true){
if((i__4731__auto___17559 < len__4730__auto___17558)){
args__4736__auto__.push((arguments[i__4731__auto___17559]));

var G__17560 = (i__4731__auto___17559 + (1));
i__4731__auto___17559 = G__17560;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.misc.checkbox.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.misc.checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (p__17554){
var map__17555 = p__17554;
var map__17555__$1 = (((((!((map__17555 == null))))?(((((map__17555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17555):map__17555);
var args = map__17555__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17555__$1,cljs.core.cst$kw$disabled_QMARK_);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17555__$1,cljs.core.cst$kw$on_DASH_change);
var label_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17555__$1,cljs.core.cst$kw$label_DASH_class);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17555__$1,cljs.core.cst$kw$model);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17555__$1,cljs.core.cst$kw$attr);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17555__$1,cljs.core.cst$kw$style);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17555__$1,cljs.core.cst$kw$label);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17555__$1,cljs.core.cst$kw$class);
var label_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17555__$1,cljs.core.cst$kw$label_DASH_style);
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.misc.checkbox_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["checkbox"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro checkbox-args-desc args \"checkbox\")"));
}

var cursor = "default";
var model__$1 = re_com.util.deref_or_value(model);
var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
var callback_fn = ((function (cursor,model__$1,disabled_QMARK___$1,map__17555,map__17555__$1,args,disabled_QMARK_,on_change,label_class,model,attr,style,label,class$,label_style){
return (function (){
if(cljs.core.truth_((function (){var and__4120__auto__ = on_change;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(disabled_QMARK___$1);
} else {
return and__4120__auto__;
}
})())){
var G__17557 = cljs.core.not(model__$1);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__17557) : on_change.call(null,G__17557));
} else {
return null;
}
});})(cursor,model__$1,disabled_QMARK___$1,map__17555,map__17555__$1,args,disabled_QMARK_,on_change,label_class,model,attr,style,label,class$,label_style))
;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,cljs.core.cst$kw$class,"rc-checkbox-wrapper noselect",cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$class,["rc-checkbox ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,cursor], null),style], 0)),cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$checked,cljs.core.boolean$(model__$1),cljs.core.cst$kw$on_DASH_change,((function (cursor,model__$1,disabled_QMARK___$1,callback_fn,map__17555,map__17555__$1,args,disabled_QMARK_,on_change,label_class,model,attr,style,label,class$,label_style){
return (function (event){
callback_fn();

return null;
});})(cursor,model__$1,disabled_QMARK___$1,callback_fn,map__17555,map__17555__$1,args,disabled_QMARK_,on_change,label_class,model,attr,style,label,class$,label_style))
], null),attr], 0))], null),(cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,label_class,cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding_DASH_left,"8px",cljs.core.cst$kw$cursor,cursor], null),label_style], 0)),cljs.core.cst$kw$on_DASH_click,((function (cursor,model__$1,disabled_QMARK___$1,callback_fn,map__17555,map__17555__$1,args,disabled_QMARK_,on_change,label_class,model,attr,style,label,class$,label_style){
return (function (event){
callback_fn();

return null;
});})(cursor,model__$1,disabled_QMARK___$1,callback_fn,map__17555,map__17555__$1,args,disabled_QMARK_,on_change,label_class,model,attr,style,label,class$,label_style))
], null),label], null):null)], null)], null);
});

re_com.misc.checkbox.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.misc.checkbox.cljs$lang$applyTo = (function (seq17553){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17553));
});

re_com.misc.radio_button_args_desc = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$model,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"anything | atom",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"selected value of the radio button group. See also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":value"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$value,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"anything",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":model"], null)," equals ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":value"], null)," then this radio button is selected"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"anything -> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"called when the radio button is clicked. Passed ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":value"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$label,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string | hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"the label shown to the right"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$disabled_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,"if true, the user can't click the radio button"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$label_DASH_class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names (applies to the label)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$label_DASH_style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS style map (applies to the label)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the radio-button, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS style map (applies to the radio-button, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to the radio-button, not the wrapping div)"], null)], null)], null);
/**
 * I return the markup for a radio button, with an optional RHS label
 */
re_com.misc.radio_button = (function re_com$misc$radio_button(var_args){
var args__4736__auto__ = [];
var len__4730__auto___17565 = arguments.length;
var i__4731__auto___17566 = (0);
while(true){
if((i__4731__auto___17566 < len__4730__auto___17565)){
args__4736__auto__.push((arguments[i__4731__auto___17566]));

var G__17567 = (i__4731__auto___17566 + (1));
i__4731__auto___17566 = G__17567;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.misc.radio_button.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.misc.radio_button.cljs$core$IFn$_invoke$arity$variadic = (function (p__17562){
var map__17563 = p__17562;
var map__17563__$1 = (((((!((map__17563 == null))))?(((((map__17563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17563):map__17563);
var args = map__17563__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17563__$1,cljs.core.cst$kw$disabled_QMARK_);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17563__$1,cljs.core.cst$kw$on_DASH_change);
var label_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17563__$1,cljs.core.cst$kw$label_DASH_class);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17563__$1,cljs.core.cst$kw$model);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17563__$1,cljs.core.cst$kw$attr);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17563__$1,cljs.core.cst$kw$value);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17563__$1,cljs.core.cst$kw$style);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17563__$1,cljs.core.cst$kw$label);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17563__$1,cljs.core.cst$kw$class);
var label_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17563__$1,cljs.core.cst$kw$label_DASH_style);
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.misc.radio_button_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["radio-button"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro radio-button-args-desc args \"radio-button\")"));
}

var cursor = "default";
var model__$1 = re_com.util.deref_or_value(model);
var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
var callback_fn = ((function (cursor,model__$1,disabled_QMARK___$1,map__17563,map__17563__$1,args,disabled_QMARK_,on_change,label_class,model,attr,value,style,label,class$,label_style){
return (function (){
if(cljs.core.truth_((function (){var and__4120__auto__ = on_change;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(disabled_QMARK___$1);
} else {
return and__4120__auto__;
}
})())){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(value) : on_change.call(null,value));
} else {
return null;
}
});})(cursor,model__$1,disabled_QMARK___$1,map__17563,map__17563__$1,args,disabled_QMARK_,on_change,label_class,model,attr,value,style,label,class$,label_style))
;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,cljs.core.cst$kw$class,"rc-radio-button-wrapper noselect",cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$class,["rc-radio-button ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,cursor], null),style], 0)),cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$checked,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(model__$1,value),cljs.core.cst$kw$on_DASH_change,((function (cursor,model__$1,disabled_QMARK___$1,callback_fn,map__17563,map__17563__$1,args,disabled_QMARK_,on_change,label_class,model,attr,value,style,label,class$,label_style){
return (function (event){
callback_fn();

return null;
});})(cursor,model__$1,disabled_QMARK___$1,callback_fn,map__17563,map__17563__$1,args,disabled_QMARK_,on_change,label_class,model,attr,value,style,label,class$,label_style))
], null),attr], 0))], null),(cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,label_class,cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding_DASH_left,"8px",cljs.core.cst$kw$cursor,cursor], null),label_style], 0)),cljs.core.cst$kw$on_DASH_click,((function (cursor,model__$1,disabled_QMARK___$1,callback_fn,map__17563,map__17563__$1,args,disabled_QMARK_,on_change,label_class,model,attr,value,style,label,class$,label_style){
return (function (event){
callback_fn();

return null;
});})(cursor,model__$1,disabled_QMARK___$1,callback_fn,map__17563,map__17563__$1,args,disabled_QMARK_,on_change,label_class,model,attr,value,style,label,class$,label_style))
], null),label], null):null)], null)], null);
});

re_com.misc.radio_button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.misc.radio_button.cljs$lang$applyTo = (function (seq17561){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17561));
});

re_com.misc.slider_args_desc = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$model,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"double | string | atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.number_or_string_QMARK_,cljs.core.cst$kw$description,"current value of the slider"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"double -> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"called when the slider is moved. Passed the new value of the slider"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$min,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(0),cljs.core.cst$kw$type,"double | string | atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.number_or_string_QMARK_,cljs.core.cst$kw$description,"the minimum value of the slider"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$max,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(100),cljs.core.cst$kw$type,"double | string | atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.number_or_string_QMARK_,cljs.core.cst$kw$description,"the maximum value of the slider"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$step,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(1),cljs.core.cst$kw$type,"double | string | atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.number_or_string_QMARK_,cljs.core.cst$kw$description,"step value between min and max"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"400px",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"standard CSS width setting for the slider"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$disabled_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,"if true, the user can't change the slider"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the slider, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override (applies to the slider, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to the slider, not the wrapping div)"], null)], null)], null);
/**
 * Returns markup for an HTML5 slider input
 */
re_com.misc.slider = (function re_com$misc$slider(var_args){
var args__4736__auto__ = [];
var len__4730__auto___17573 = arguments.length;
var i__4731__auto___17574 = (0);
while(true){
if((i__4731__auto___17574 < len__4730__auto___17573)){
args__4736__auto__.push((arguments[i__4731__auto___17574]));

var G__17575 = (i__4731__auto___17574 + (1));
i__4731__auto___17574 = G__17575;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.misc.slider.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.misc.slider.cljs$core$IFn$_invoke$arity$variadic = (function (p__17569){
var map__17570 = p__17569;
var map__17570__$1 = (((((!((map__17570 == null))))?(((((map__17570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17570):map__17570);
var args = map__17570__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17570__$1,cljs.core.cst$kw$disabled_QMARK_);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17570__$1,cljs.core.cst$kw$on_DASH_change);
var step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17570__$1,cljs.core.cst$kw$step);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17570__$1,cljs.core.cst$kw$model);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17570__$1,cljs.core.cst$kw$attr);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17570__$1,cljs.core.cst$kw$min,(0));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17570__$1,cljs.core.cst$kw$width);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17570__$1,cljs.core.cst$kw$style);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17570__$1,cljs.core.cst$kw$class);
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17570__$1,cljs.core.cst$kw$max,(100));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.misc.slider_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["slider"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro slider-args-desc args \"slider\")"));
}

var model__$1 = re_com.util.deref_or_value(model);
var min__$1 = re_com.util.deref_or_value(min);
var max__$1 = re_com.util.deref_or_value(max);
var step__$1 = re_com.util.deref_or_value(step);
var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$class,"rc-slider-wrapper",cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$min,cljs.core.cst$kw$disabled,cljs.core.cst$kw$value,cljs.core.cst$kw$type,cljs.core.cst$kw$style,cljs.core.cst$kw$max,cljs.core.cst$kw$class,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$step],[min__$1,disabled_QMARK___$1,model__$1,"range",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(function (){var or__4131__auto__ = width;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "400px";
}
})(),cljs.core.cst$kw$cursor,(cljs.core.truth_(disabled_QMARK___$1)?"not-allowed":"default")], null),style], 0)),max__$1,["rc-slider ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),((function (model__$1,min__$1,max__$1,step__$1,disabled_QMARK___$1,map__17570,map__17570__$1,args,disabled_QMARK_,on_change,step,model,attr,min,width,style,class$,max){
return (function (event){
var G__17572_17576 = Number(event.target.value);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__17572_17576) : on_change.call(null,G__17572_17576));

return null;
});})(model__$1,min__$1,max__$1,step__$1,disabled_QMARK___$1,map__17570,map__17570__$1,args,disabled_QMARK_,on_change,step,model,attr,min,width,style,class$,max))
,step__$1]),attr], 0))], null)], null);
});

re_com.misc.slider.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.misc.slider.cljs$lang$applyTo = (function (seq17568){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17568));
});

re_com.misc.progress_bar_args_desc = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$model,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"double | string | atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.number_or_string_QMARK_,cljs.core.cst$kw$description,"current value of the slider. A number between 0 and 100"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"100%",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS width"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$striped_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"when true, the progress section is a set of animated stripes"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$bar_DASH_class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class name(s) for the actual progress bar itself, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the progress-bar, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override (applies to the progress-bar, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to the progress-bar, not the wrapping div)"], null)], null)], null);
/**
 * Render a bootstrap styled progress bar
 */
re_com.misc.progress_bar = (function re_com$misc$progress_bar(var_args){
var args__4736__auto__ = [];
var len__4730__auto___17581 = arguments.length;
var i__4731__auto___17582 = (0);
while(true){
if((i__4731__auto___17582 < len__4730__auto___17581)){
args__4736__auto__.push((arguments[i__4731__auto___17582]));

var G__17583 = (i__4731__auto___17582 + (1));
i__4731__auto___17582 = G__17583;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.misc.progress_bar.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.misc.progress_bar.cljs$core$IFn$_invoke$arity$variadic = (function (p__17578){
var map__17579 = p__17578;
var map__17579__$1 = (((((!((map__17579 == null))))?(((((map__17579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17579):map__17579);
var args = map__17579__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17579__$1,cljs.core.cst$kw$model);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17579__$1,cljs.core.cst$kw$width,"100%");
var striped_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17579__$1,cljs.core.cst$kw$striped_QMARK_);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17579__$1,cljs.core.cst$kw$class);
var bar_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17579__$1,cljs.core.cst$kw$bar_DASH_class);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17579__$1,cljs.core.cst$kw$style);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17579__$1,cljs.core.cst$kw$attr);
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.misc.progress_bar_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["progress-bar"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro progress-bar-args-desc args \"progress-bar\")"));
}

var model__$1 = re_com.util.deref_or_value(model);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$class,"rc-progress-bar-wrapper",cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-progress-bar progress ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,width], null),style], 0))], null),attr], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["progress-bar ",(cljs.core.truth_(striped_QMARK_)?"progress-bar-striped active ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bar_class)].join(''),cljs.core.cst$kw$role,"progressbar",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(model__$1),"%"].join(''),cljs.core.cst$kw$transition,"none"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(model__$1),"%"].join('')], null)], null)], null);
});

re_com.misc.progress_bar.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.misc.progress_bar.cljs$lang$applyTo = (function (seq17577){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17577));
});

