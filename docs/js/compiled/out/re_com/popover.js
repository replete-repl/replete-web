// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_com.popover');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_com.util');
goog.require('re_com.box');
goog.require('re_com.close_button');
goog.require('re_com.validate');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('reagent.ratom');
re_com.popover.point = (function re_com$popover$point(x,y){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)," "].join('');
});
/**
 * Return the vector of the two keywords formed by splitting another keyword 'kw' on an internal delimiter (usually '-')
 * (split-keyword  :above-left  "-") => [:above :left]
 */
re_com.popover.split_keyword = (function re_com$popover$split_keyword(kw,delimiter){
var keywords = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(kw),cljs.core.re_pattern(["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delimiter),":]"].join('')));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((keywords.cljs$core$IFn$_invoke$arity$1 ? keywords.cljs$core$IFn$_invoke$arity$1((1)) : keywords.call(null,(1)))),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((keywords.cljs$core$IFn$_invoke$arity$1 ? keywords.cljs$core$IFn$_invoke$arity$1((2)) : keywords.call(null,(2))))], null);
});
/**
 * Determine values for :left :right :top :bottom CSS styles.
 * - pop-orient    What side of the anchor the popover will be attached to. One of :above :below :left :right
 * - p-width       The px width of the popover after it has been rendered
 * - p-height      The px height of the popover after it has been rendered
 * - pop-offset    The number of pixels the popover is offset from it's natural position in relation to the popover-arrow (ugh, hard to explain)
 * - arrow-length  The px length of the arrow (from the point to middle of arrow base)
 * - arrow-gap     The px distance between the anchor and the arrow tip. Positive numbers push the popover away from the anchor
 *   
 */
re_com.popover.calc_popover_pos = (function re_com$popover$calc_popover_pos(pop_orient,p_width,p_height,pop_offset,arrow_length,arrow_gap){
var total_offset = (arrow_length + arrow_gap);
var popover_left = (function (){var G__14962 = pop_orient;
var G__14962__$1 = (((G__14962 instanceof cljs.core.Keyword))?G__14962.fqn:null);
switch (G__14962__$1) {
case "left":
return "initial";

break;
case "right":
return re_com.util.px(total_offset);

break;
case "above":
case "below":
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic((function (){var or__4131__auto__ = pop_offset;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (p_width / (2));
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$negative], 0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14962__$1)].join('')));

}
})();
var popover_top = (function (){var G__14963 = pop_orient;
var G__14963__$1 = (((G__14963 instanceof cljs.core.Keyword))?G__14963.fqn:null);
switch (G__14963__$1) {
case "left":
case "right":
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic((function (){var or__4131__auto__ = pop_offset;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (p_height / (2));
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$negative], 0));

break;
case "above":
return "initial";

break;
case "below":
return re_com.util.px(total_offset);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14963__$1)].join('')));

}
})();
var popover_right = (function (){var G__14964 = pop_orient;
var G__14964__$1 = (((G__14964 instanceof cljs.core.Keyword))?G__14964.fqn:null);
switch (G__14964__$1) {
case "left":
return re_com.util.px(total_offset);

break;
case "right":
return null;

break;
case "above":
return null;

break;
case "below":
return null;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14964__$1)].join('')));

}
})();
var popover_bottom = (function (){var G__14965 = pop_orient;
var G__14965__$1 = (((G__14965 instanceof cljs.core.Keyword))?G__14965.fqn:null);
switch (G__14965__$1) {
case "left":
return null;

break;
case "right":
return null;

break;
case "above":
return re_com.util.px(total_offset);

break;
case "below":
return null;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14965__$1)].join('')));

}
})();
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$left,popover_left,cljs.core.cst$kw$top,popover_top,cljs.core.cst$kw$right,popover_right,cljs.core.cst$kw$bottom,popover_bottom], null);
});
/**
 * Calculate the optimal :position value that results in the least amount of clipping by the screen edges
 *   Taken from: https://github.com/Lambda-X/cljs-repl-web/blob/0.3.1/src/cljs/cljs_repl_web/views/utils.cljs#L52
 *   Thanks to @richiardiandrea and @tomek for this code
 */
re_com.popover.calculate_optimal_position = (function re_com$popover$calculate_optimal_position(p__14970){
var vec__14971 = p__14970;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14971,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14971,(1),null);
var w = window.innerWidth;
var h = window.innerHeight;
var h_threshold_left = cljs.core.quot(w,(3));
var h_threshold_cent = ((2) * h_threshold_left);
var h_position = (((x < h_threshold_left))?"right":(((x < h_threshold_cent))?"center":"left"
));
var v_threshold = cljs.core.quot(h,(2));
var v_position = (((y < v_threshold))?"below":"above");
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([v_position,"-",h_position].join(''));
});
/**
 * Given a node reference, calculate the absolute x and y coordinates of the node's midpoint
 */
re_com.popover.calc_element_midpoint = (function re_com$popover$calc_element_midpoint(node){
var bounding_rect = node.getBoundingClientRect();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((bounding_rect.right + bounding_rect.left) / (2)),((bounding_rect.bottom + bounding_rect.top) / (2))], null);
});
/**
 * Render the triangle which connects the popover to the anchor (using SVG)
 */
re_com.popover.popover_arrow = (function re_com$popover$popover_arrow(orientation,pop_offset,arrow_length,arrow_width,grey_arrow_QMARK_,no_border_QMARK_,popover_color,popover_border_color){
var half_arrow_width = (arrow_width / (2));
var arrow_shape = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$left,[re_com.popover.point((0),(0)),re_com.popover.point(arrow_length,half_arrow_width),re_com.popover.point((0),arrow_width)].join(''),cljs.core.cst$kw$right,[re_com.popover.point(arrow_length,(0)),re_com.popover.point((0),half_arrow_width),re_com.popover.point(arrow_length,arrow_width)].join(''),cljs.core.cst$kw$above,[re_com.popover.point((0),(0)),re_com.popover.point(half_arrow_width,arrow_length),re_com.popover.point(arrow_width,(0))].join(''),cljs.core.cst$kw$below,[re_com.popover.point((0),arrow_length),re_com.popover.point(half_arrow_width,(0)),re_com.popover.point(arrow_width,arrow_length)].join('')], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"popover-arrow",cljs.core.cst$kw$style,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$position,"absolute",(function (){var G__14974 = orientation;
var G__14974__$1 = (((G__14974 instanceof cljs.core.Keyword))?G__14974.fqn:null);
switch (G__14974__$1) {
case "left":
return cljs.core.cst$kw$right;

break;
case "right":
return cljs.core.cst$kw$left;

break;
case "above":
return cljs.core.cst$kw$bottom;

break;
case "below":
return cljs.core.cst$kw$top;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14974__$1)].join('')));

}
})(),re_com.util.px.cljs$core$IFn$_invoke$arity$variadic(arrow_length,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$negative], 0)),(function (){var G__14975 = orientation;
var G__14975__$1 = (((G__14975 instanceof cljs.core.Keyword))?G__14975.fqn:null);
switch (G__14975__$1) {
case "left":
case "right":
return cljs.core.cst$kw$top;

break;
case "above":
case "below":
return cljs.core.cst$kw$left;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14975__$1)].join('')));

}
})(),(((pop_offset == null))?"50%":re_com.util.px(pop_offset)),(function (){var G__14976 = orientation;
var G__14976__$1 = (((G__14976 instanceof cljs.core.Keyword))?G__14976.fqn:null);
switch (G__14976__$1) {
case "left":
case "right":
return cljs.core.cst$kw$margin_DASH_top;

break;
case "above":
case "below":
return cljs.core.cst$kw$margin_DASH_left;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14976__$1)].join('')));

}
})(),re_com.util.px.cljs$core$IFn$_invoke$arity$variadic(half_arrow_width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$negative], 0)),cljs.core.cst$kw$width,re_com.util.px((function (){var G__14977 = orientation;
var G__14977__$1 = (((G__14977 instanceof cljs.core.Keyword))?G__14977.fqn:null);
switch (G__14977__$1) {
case "left":
case "right":
return arrow_length;

break;
case "above":
case "below":
return arrow_width;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14977__$1)].join('')));

}
})()),cljs.core.cst$kw$height,re_com.util.px((function (){var G__14978 = orientation;
var G__14978__$1 = (((G__14978 instanceof cljs.core.Keyword))?G__14978.fqn:null);
switch (G__14978__$1) {
case "left":
case "right":
return arrow_width;

break;
case "above":
case "below":
return arrow_length;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14978__$1)].join('')));

}
})())])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$polyline,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$points,(arrow_shape.cljs$core$IFn$_invoke$arity$1 ? arrow_shape.cljs$core$IFn$_invoke$arity$1(orientation) : arrow_shape.call(null,orientation)),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$fill,(cljs.core.truth_(popover_color)?popover_color:(cljs.core.truth_(grey_arrow_QMARK_)?"#f7f7f7":"white")),cljs.core.cst$kw$stroke,(function (){var or__4131__auto__ = popover_border_color;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.truth_(no_border_QMARK_)){
return null;
} else {
return "rgba(0, 0, 0, .2)";
}
}
})(),cljs.core.cst$kw$stroke_DASH_width,"1"], null)], null)], null)], null);
});
re_com.popover.backdrop_args_desc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$opacity,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,0.0,cljs.core.cst$kw$type,"double | string",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.number_or_string_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"opacity of backdrop from:",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"0.0 (transparent) to 1.0 (opaque)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"-> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"a function which takes no params and returns nothing. Called when the backdrop is clicked"], null)], null);
/**
 * Renders a backdrop div which fills the entire page and responds to clicks on it. Can also specify how tranparent it should be
 */
re_com.popover.backdrop = (function re_com$popover$backdrop(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14988 = arguments.length;
var i__4731__auto___14989 = (0);
while(true){
if((i__4731__auto___14989 < len__4730__auto___14988)){
args__4736__auto__.push((arguments[i__4731__auto___14989]));

var G__14990 = (i__4731__auto___14989 + (1));
i__4731__auto___14989 = G__14990;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.popover.backdrop.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.popover.backdrop.cljs$core$IFn$_invoke$arity$variadic = (function (p__14985){
var map__14986 = p__14985;
var map__14986__$1 = (((((!((map__14986 == null))))?(((((map__14986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14986):map__14986);
var args = map__14986__$1;
var opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14986__$1,cljs.core.cst$kw$opacity);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14986__$1,cljs.core.cst$kw$on_DASH_click);
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.popover.backdrop_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["backdrop"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro backdrop-args-desc args \"backdrop\")"));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$rc_DASH_backdrop$noselect,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$left,"0px",cljs.core.cst$kw$top,"0px",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$background_DASH_color,"black",cljs.core.cst$kw$opacity,(function (){var or__4131__auto__ = opacity;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return 0.0;
}
})()], null),cljs.core.cst$kw$on_DASH_click,((function (map__14986,map__14986__$1,args,opacity,on_click){
return (function (event){
(on_click.cljs$core$IFn$_invoke$arity$0 ? on_click.cljs$core$IFn$_invoke$arity$0() : on_click.call(null));

return null;
});})(map__14986,map__14986__$1,args,opacity,on_click))
], null)], null);
});

re_com.popover.backdrop.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.popover.backdrop.cljs$lang$applyTo = (function (seq14984){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14984));
});

re_com.popover.popover_title_args_desc = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$showing_QMARK_,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"boolean atom",cljs.core.cst$kw$description,"an atom. When the value is true, the popover shows."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$title,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string | hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"describes the title of the popover. Default font size is 18px to make it stand out"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$close_DASH_button_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,true,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"when true, displays the close button"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$close_DASH_callback,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"-> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"a function which takes no params and returns nothing. Called when the close button is pressed. Not required if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":showing?"], null)," atom passed in OR ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":close-button?"], null)," is set to false"], null)], null)], null);
/**
 * Renders a title at the top of a popover with an optional close button on the far right
 */
re_com.popover.popover_title = (function re_com$popover$popover_title(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14998 = arguments.length;
var i__4731__auto___14999 = (0);
while(true){
if((i__4731__auto___14999 < len__4730__auto___14998)){
args__4736__auto__.push((arguments[i__4731__auto___14999]));

var G__15000 = (i__4731__auto___14999 + (1));
i__4731__auto___14999 = G__15000;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.popover.popover_title.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.popover.popover_title.cljs$core$IFn$_invoke$arity$variadic = (function (p__14992){
var map__14993 = p__14992;
var map__14993__$1 = (((((!((map__14993 == null))))?(((((map__14993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14993):map__14993);
var args = map__14993__$1;
var showing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14993__$1,cljs.core.cst$kw$showing_QMARK_);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14993__$1,cljs.core.cst$kw$title);
var close_button_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14993__$1,cljs.core.cst$kw$close_DASH_button_QMARK_);
var close_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14993__$1,cljs.core.cst$kw$close_DASH_callback);
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.popover.popover_title_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["popover-title"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro popover-title-args-desc args \"popover-title\")"));
}

if(cljs.core.truth_((function (){var or__4131__auto__ = (function (){var fexpr__14996 = cljs.core.complement(cljs.core.nil_QMARK_);
return (fexpr__14996.cljs$core$IFn$_invoke$arity$1 ? fexpr__14996.cljs$core$IFn$_invoke$arity$1(showing_QMARK_) : fexpr__14996.call(null,showing_QMARK_));
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var fexpr__14997 = cljs.core.complement(cljs.core.nil_QMARK_);
return (fexpr__14997.cljs$core$IFn$_invoke$arity$1 ? fexpr__14997.cljs$core$IFn$_invoke$arity$1(close_callback) : fexpr__14997.call(null,close_callback));
}
})())){
} else {
throw (new Error(["Assert failed: ","Must specify either showing? OR close-callback","\n","(or ((complement nil?) showing?) ((complement nil?) close-callback))"].join('')));
}

var close_button_QMARK___$1 = (((close_button_QMARK_ == null))?true:close_button_QMARK_);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$popover_DASH_title,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("inherit"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"18px"], null)], 0))], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,cljs.core.cst$kw$justify,cljs.core.cst$kw$between,cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,(cljs.core.truth_(close_button_QMARK___$1)?new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.close_button.close_button,cljs.core.cst$kw$on_DASH_click,((function (close_button_QMARK___$1,map__14993,map__14993__$1,args,showing_QMARK_,title,close_button_QMARK_,close_callback){
return (function (){
if(cljs.core.truth_(close_callback)){
return (close_callback.cljs$core$IFn$_invoke$arity$0 ? close_callback.cljs$core$IFn$_invoke$arity$0() : close_callback.call(null));
} else {
return cljs.core.reset_BANG_(showing_QMARK_,false);
}
});})(close_button_QMARK___$1,map__14993,map__14993__$1,args,showing_QMARK_,title,close_button_QMARK_,close_callback))
,cljs.core.cst$kw$div_DASH_size,(0),cljs.core.cst$kw$font_DASH_size,(26),cljs.core.cst$kw$top_DASH_offset,(-1),cljs.core.cst$kw$left_DASH_offset,(-5)], null):null)], null)], null)], null);
});

re_com.popover.popover_title.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.popover.popover_title.cljs$lang$applyTo = (function (seq14991){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14991));
});

re_com.popover.next_even_integer = (function re_com$popover$next_even_integer(num){
return ((((num + (1)) / (2)) | (0)) * (2));
});
re_com.popover.calc_pop_offset = (function re_com$popover$calc_pop_offset(arrow_pos,position_offset,p_width,p_height){
var G__15001 = arrow_pos;
var G__15001__$1 = (((G__15001 instanceof cljs.core.Keyword))?G__15001.fqn:null);
switch (G__15001__$1) {
case "center":
return null;

break;
case "right":
return ((20) + position_offset);

break;
case "below":
return ((20) + position_offset);

break;
case "left":
if(cljs.core.truth_(p_width)){
return ((p_width - (25)) - position_offset);
} else {
return p_width;
}

break;
case "above":
if(cljs.core.truth_(p_height)){
return ((p_height - (25)) - position_offset);
} else {
return p_height;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15001__$1)].join('')));

}
});
re_com.popover.popover_clipping = (function re_com$popover$popover_clipping(node){
var viewport_width = window.innerWidth;
var viewport_height = window.innerHeight;
var bounding_rect = node.getBoundingClientRect();
var left = bounding_rect.left;
var right = bounding_rect.right;
var top = bounding_rect.top;
var bottom = bounding_rect.bottom;
var clip_left = (((left < (0)))?(- left):null);
var clip_right = (((right > viewport_width))?(right - viewport_width):null);
var clip_top = (((top < (0)))?(- top):null);
var clip_bottom = (((bottom > viewport_height))?(bottom - viewport_height):null);
return (((!((clip_left == null)))) || ((!((clip_right == null)))) || ((!((clip_top == null)))) || ((!((clip_bottom == null)))));
});
re_com.popover.popover_border_args_desc = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$children,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"vector",cljs.core.cst$kw$validate_DASH_fn,cljs.core.sequential_QMARK_,cljs.core.cst$kw$description,"a vector of component markups"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$position,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"keyword atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.position_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$position_DASH_offset,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"integer",cljs.core.cst$kw$validate_DASH_fn,cljs.core.number_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"px offset of the arrow from its default ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":position"], null)," along the popover border. Is ignored when ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":position"], null)," is one of the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":xxx-center"], null)," variants. Positive numbers slide the popover toward its center"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS style describing the popover width"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"auto",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS style describing the popover height"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$popover_DASH_color,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"white",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"fill color of the popover"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$popover_DASH_border_DASH_color,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"color of the popover border, including the arrow"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$arrow_DASH_length,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(11),cljs.core.cst$kw$type,"integer | string",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.number_or_string_QMARK_,cljs.core.cst$kw$description,"the length in pixels of the arrow (from pointy part to middle of arrow base)"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$arrow_DASH_width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(22),cljs.core.cst$kw$type,"integer | string",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.number_or_string_QMARK_,cljs.core.cst$kw$description,"the width in pixels of arrow base"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$arrow_DASH_gap,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(-1),cljs.core.cst$kw$type,"integer",cljs.core.cst$kw$validate_DASH_fn,cljs.core.number_QMARK_,cljs.core.cst$kw$description,"px gap between the anchor and the arrow tip. Positive numbers push the popover away from the anchor"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$padding,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS style which overrides the inner padding of the popover"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$margin_DASH_left,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS style describing the horiztonal offset from anchor after position"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$margin_DASH_top,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS style describing the vertical offset from anchor after position"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip_DASH_style_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"setup popover styles for a tooltip"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$title,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string | markup",cljs.core.cst$kw$description,"describes a title"], null)], null);
/**
 * Renders an element or control along with a Bootstrap popover
 */
re_com.popover.popover_border = (function re_com$popover$popover_border(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15017 = arguments.length;
var i__4731__auto___15018 = (0);
while(true){
if((i__4731__auto___15018 < len__4730__auto___15017)){
args__4736__auto__.push((arguments[i__4731__auto___15018]));

var G__15019 = (i__4731__auto___15018 + (1));
i__4731__auto___15018 = G__15019;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.popover.popover_border.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.popover.popover_border.cljs$core$IFn$_invoke$arity$variadic = (function (p__15004){
var map__15005 = p__15004;
var map__15005__$1 = (((((!((map__15005 == null))))?(((((map__15005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15005):map__15005);
var args = map__15005__$1;
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15005__$1,cljs.core.cst$kw$position);
var position_offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15005__$1,cljs.core.cst$kw$position_DASH_offset);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15005__$1,cljs.core.cst$kw$title);
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.popover.popover_border_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["popover-border"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro popover-border-args-desc args \"popover-border\")"));
}

var pop_id = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("popover-");
var rendered_once = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var ready_to_show_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var p_width = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var p_height = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var pop_offset = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var found_optimal = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var calc_metrics = ((function (pop_id,rendered_once,ready_to_show_QMARK_,p_width,p_height,pop_offset,found_optimal,map__15005,map__15005__$1,args,position,position_offset,title){
return (function (pos){
var popover_elem = re_com.util.get_element_by_id(pop_id);
var vec__15007 = re_com.popover.split_keyword(pos,"-");
var orientation = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15007,(0),null);
var arrow_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15007,(1),null);
var grey_arrow_QMARK_ = (function (){var and__4120__auto__ = title;
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orientation,cljs.core.cst$kw$below)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arrow_pos,cljs.core.cst$kw$below)));
} else {
return and__4120__auto__;
}
})();
cljs.core.reset_BANG_(p_width,(cljs.core.truth_(popover_elem)?re_com.popover.next_even_integer(popover_elem.clientWidth):(0)));

cljs.core.reset_BANG_(p_height,(cljs.core.truth_(popover_elem)?re_com.popover.next_even_integer(popover_elem.clientHeight):(0)));

cljs.core.reset_BANG_(pop_offset,re_com.popover.calc_pop_offset(arrow_pos,position_offset,cljs.core.deref(p_width),cljs.core.deref(p_height)));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [orientation,grey_arrow_QMARK_], null);
});})(pop_id,rendered_once,ready_to_show_QMARK_,p_width,p_height,pop_offset,found_optimal,map__15005,map__15005__$1,args,position,position_offset,title))
;
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display_DASH_name,"popover-border",cljs.core.cst$kw$component_DASH_did_DASH_mount,((function (pop_id,rendered_once,ready_to_show_QMARK_,p_width,p_height,pop_offset,found_optimal,calc_metrics,map__15005,map__15005__$1,args,position,position_offset,title){
return (function (){
return cljs.core.reset_BANG_(rendered_once,true);
});})(pop_id,rendered_once,ready_to_show_QMARK_,p_width,p_height,pop_offset,found_optimal,calc_metrics,map__15005,map__15005__$1,args,position,position_offset,title))
,cljs.core.cst$kw$component_DASH_did_DASH_update,((function (pop_id,rendered_once,ready_to_show_QMARK_,p_width,p_height,pop_offset,found_optimal,calc_metrics,map__15005,map__15005__$1,args,position,position_offset,title){
return (function (this$){
var pop_border_node = reagent.core.dom_node(this$);
var clipped_QMARK_ = re_com.popover.popover_clipping(pop_border_node);
var anchor_node = pop_border_node.parentNode.parentNode.parentNode;
if(((clipped_QMARK_) && (cljs.core.not(cljs.core.deref(found_optimal))))){
cljs.core.reset_BANG_(position,re_com.popover.calculate_optimal_position(re_com.popover.calc_element_midpoint(anchor_node)));

cljs.core.reset_BANG_(found_optimal,true);
} else {
}

calc_metrics(cljs.core.deref(position));

return cljs.core.reset_BANG_(ready_to_show_QMARK_,true);
});})(pop_id,rendered_once,ready_to_show_QMARK_,p_width,p_height,pop_offset,found_optimal,calc_metrics,map__15005,map__15005__$1,args,position,position_offset,title))
,cljs.core.cst$kw$reagent_DASH_render,((function (pop_id,rendered_once,ready_to_show_QMARK_,p_width,p_height,pop_offset,found_optimal,calc_metrics,map__15005,map__15005__$1,args,position,position_offset,title){
return (function() { 
var G__15020__delegate = function (p__15010){
var map__15011 = p__15010;
var map__15011__$1 = (((((!((map__15011 == null))))?(((((map__15011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15011):map__15011);
var args__$1 = map__15011__$1;
var popover_border_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15011__$1,cljs.core.cst$kw$popover_DASH_border_DASH_color);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15011__$1,cljs.core.cst$kw$height);
var tooltip_style_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15011__$1,cljs.core.cst$kw$tooltip_DASH_style_QMARK_);
var popover_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15011__$1,cljs.core.cst$kw$popover_DASH_color);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15011__$1,cljs.core.cst$kw$children);
var arrow_length = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15011__$1,cljs.core.cst$kw$arrow_DASH_length,(11));
var position_offset__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15011__$1,cljs.core.cst$kw$position_DASH_offset);
var margin_left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15011__$1,cljs.core.cst$kw$margin_DASH_left);
var arrow_width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15011__$1,cljs.core.cst$kw$arrow_DASH_width,(22));
var margin_top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15011__$1,cljs.core.cst$kw$margin_DASH_top);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15011__$1,cljs.core.cst$kw$width);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15011__$1,cljs.core.cst$kw$title);
var arrow_gap = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15011__$1,cljs.core.cst$kw$arrow_DASH_gap,(-1));
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15011__$1,cljs.core.cst$kw$padding);
var position__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15011__$1,cljs.core.cst$kw$position);
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.popover.popover_border_args_desc),args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["popover-border"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro popover-border-args-desc args \"popover-border\")"));
}

var vec__15013 = calc_metrics(cljs.core.deref(position__$1));
var orientation = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15013,(0),null);
var grey_arrow_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15013,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$popover$fade$in,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,pop_id,cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.deref(rendered_once))?(cljs.core.truth_(pop_id)?re_com.popover.calc_popover_pos(orientation,cljs.core.deref(p_width),cljs.core.deref(p_height),cljs.core.deref(pop_offset),arrow_length,arrow_gap):null):new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,"-10000px",cljs.core.cst$kw$left,"-10000px"], null)),(cljs.core.truth_(width)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,width], null):null),(cljs.core.truth_(height)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,height], null):null),(cljs.core.truth_(popover_color)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,popover_color], null):null),(cljs.core.truth_(popover_border_color)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border_DASH_color,popover_border_color], null):null),(cljs.core.truth_(tooltip_style_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$border_DASH_radius,"4px",cljs.core.cst$kw$box_DASH_shadow,"none",cljs.core.cst$kw$border,"none"], null):null),(function (){var G__15016 = orientation;
var G__15016__$1 = (((G__15016 instanceof cljs.core.Keyword))?G__15016.fqn:null);
switch (G__15016__$1) {
case "left":
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,"-2000px"], null);

break;
case "right":
case "above":
case "below":
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_right,"-2000px"], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15016__$1)].join('')));

}
})(),(cljs.core.truth_(margin_left)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,margin_left], null):null),(cljs.core.truth_(margin_top)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,margin_top], null):null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,"block",cljs.core.cst$kw$opacity,(cljs.core.truth_(cljs.core.deref(ready_to_show_QMARK_))?"1":"0"),cljs.core.cst$kw$max_DASH_width,"none",cljs.core.cst$kw$padding,"0px"], null)], 0))], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_arrow,orientation,cljs.core.deref(pop_offset),arrow_length,arrow_width,grey_arrow_QMARK_,tooltip_style_QMARK_,popover_color,popover_border_color], null),(cljs.core.truth_(title__$1)?title__$1:null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$popover_DASH_content,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,padding], null)], null)], null),children)], null);
};
var G__15020 = function (var_args){
var p__15010 = null;
if (arguments.length > 0) {
var G__15022__i = 0, G__15022__a = new Array(arguments.length -  0);
while (G__15022__i < G__15022__a.length) {G__15022__a[G__15022__i] = arguments[G__15022__i + 0]; ++G__15022__i;}
  p__15010 = new cljs.core.IndexedSeq(G__15022__a,0,null);
} 
return G__15020__delegate.call(this,p__15010);};
G__15020.cljs$lang$maxFixedArity = 0;
G__15020.cljs$lang$applyTo = (function (arglist__15023){
var p__15010 = cljs.core.seq(arglist__15023);
return G__15020__delegate(p__15010);
});
G__15020.cljs$core$IFn$_invoke$arity$variadic = G__15020__delegate;
return G__15020;
})()
;})(pop_id,rendered_once,ready_to_show_QMARK_,p_width,p_height,pop_offset,found_optimal,calc_metrics,map__15005,map__15005__$1,args,position,position_offset,title))
], null));
});

re_com.popover.popover_border.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.popover.popover_border.cljs$lang$applyTo = (function (seq15003){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15003));
});

re_com.popover.popover_content_wrapper_args_desc = new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$showing_DASH_injected_QMARK_,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"boolean atom",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"an atom. When the value is true, the popover shows.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$strong,"NOTE: "], null),"When used as direct ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":popover"], null)," arg in popover-anchor-wrapper, this arg will be injected automatically by popover-anchor-wrapper. If using your own popover function, you must add this yourself"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$position_DASH_injected,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"keyword atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.position_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"relative to this anchor. One of ",re_com.validate.position_options_list,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$strong,"NOTE: "], null),"See above NOTE for ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":showing-injected?"], null),". Same applies"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$position_DASH_offset,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"integer",cljs.core.cst$kw$validate_DASH_fn,cljs.core.number_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"px offset of the arrow from its default ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":position"], null)," along the popover border. Is ignored when ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":position"], null)," is one of the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":xxx-center"], null)," variants. Positive numbers slide the popover toward its center"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$no_DASH_clip_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"when an anchor is in a scrolling region (e.g. scroller component), the popover can sometimes be clipped. By passing true for this parameter, re-com will use a different CSS method to show the popover. This method is slightly inferior because the popover can't track the anchor if it is repositioned"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS style representing the popover width"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS style representing the popover height"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$backdrop_DASH_opacity,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,0.0,cljs.core.cst$kw$type,"double | string",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.number_or_string_QMARK_,cljs.core.cst$kw$description,"indicates the opacity of the backdrop where 0.0=transparent, 1.0=opaque"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_cancel,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"-> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"a function which takes no params and returns nothing. Called when the popover is cancelled (e.g. user clicks away)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$title,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string | hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"describes the title of the popover. The default font size is 18px to make it stand out"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$close_DASH_button_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,true,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"when true, displays the close button"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$body,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string | hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"describes the popover body. Must be a single component"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip_DASH_style_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"setup popover styles for a tooltip"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$popover_DASH_color,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"white",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"fill color of the popover"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$popover_DASH_border_DASH_color,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"color of the popover border, including the arrow"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$arrow_DASH_length,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(11),cljs.core.cst$kw$type,"integer | string",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.number_or_string_QMARK_,cljs.core.cst$kw$description,"the length in pixels of the arrow (from pointy part to middle of arrow base)"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$arrow_DASH_width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(22),cljs.core.cst$kw$type,"integer | string",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.number_or_string_QMARK_,cljs.core.cst$kw$description,"the width in pixels of arrow base"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$arrow_DASH_gap,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(-1),cljs.core.cst$kw$type,"integer",cljs.core.cst$kw$validate_DASH_fn,cljs.core.number_QMARK_,cljs.core.cst$kw$description,"px gap between the anchor and the arrow tip. Positive numbers push the popover away from the anchor"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$padding,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS style which overrides the inner padding of the popover"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"override component style(s) with a style map, only use in case of emergency (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to the outer container)"], null)], null)], null);
/**
 * Abstracts several components to handle the 90% of cases for general popovers and dialog boxes
 */
re_com.popover.popover_content_wrapper = (function re_com$popover$popover_content_wrapper(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15031 = arguments.length;
var i__4731__auto___15032 = (0);
while(true){
if((i__4731__auto___15032 < len__4730__auto___15031)){
args__4736__auto__.push((arguments[i__4731__auto___15032]));

var G__15033 = (i__4731__auto___15032 + (1));
i__4731__auto___15032 = G__15033;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.popover.popover_content_wrapper.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.popover.popover_content_wrapper.cljs$core$IFn$_invoke$arity$variadic = (function (p__15025){
var map__15026 = p__15025;
var map__15026__$1 = (((((!((map__15026 == null))))?(((((map__15026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15026):map__15026);
var args = map__15026__$1;
var no_clip_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15026__$1,cljs.core.cst$kw$no_DASH_clip_QMARK_);
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.popover.popover_content_wrapper_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["popover-content-wrapper"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro popover-content-wrapper-args-desc args \"popover-content-wrapper\")"));
}

var left_offset = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var top_offset = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var position_no_clip_popover = ((function (left_offset,top_offset,map__15026,map__15026__$1,args,no_clip_QMARK_){
return (function re_com$popover$position_no_clip_popover(this$){
if(cljs.core.truth_(no_clip_QMARK_)){
var node = reagent.core.dom_node(this$);
var popover_point_node = node.parentNode;
var bounding_rect = popover_point_node.getBoundingClientRect();
cljs.core.reset_BANG_(left_offset,bounding_rect.left);

return cljs.core.reset_BANG_(top_offset,bounding_rect.top);
} else {
return null;
}
});})(left_offset,top_offset,map__15026,map__15026__$1,args,no_clip_QMARK_))
;
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display_DASH_name,"popover-content-wrapper",cljs.core.cst$kw$component_DASH_did_DASH_mount,((function (left_offset,top_offset,position_no_clip_popover,map__15026,map__15026__$1,args,no_clip_QMARK_){
return (function (this$){
return position_no_clip_popover(this$);
});})(left_offset,top_offset,position_no_clip_popover,map__15026,map__15026__$1,args,no_clip_QMARK_))
,cljs.core.cst$kw$component_DASH_did_DASH_update,((function (left_offset,top_offset,position_no_clip_popover,map__15026,map__15026__$1,args,no_clip_QMARK_){
return (function (this$){
return position_no_clip_popover(this$);
});})(left_offset,top_offset,position_no_clip_popover,map__15026,map__15026__$1,args,no_clip_QMARK_))
,cljs.core.cst$kw$reagent_DASH_render,((function (left_offset,top_offset,position_no_clip_popover,map__15026,map__15026__$1,args,no_clip_QMARK_){
return (function() { 
var G__15034__delegate = function (p__15028){
var map__15029 = p__15028;
var map__15029__$1 = (((((!((map__15029 == null))))?(((((map__15029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15029):map__15029);
var args__$1 = map__15029__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15029__$1,cljs.core.cst$kw$body);
var popover_border_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15029__$1,cljs.core.cst$kw$popover_DASH_border_DASH_color);
var on_cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15029__$1,cljs.core.cst$kw$on_DASH_cancel);
var showing_injected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15029__$1,cljs.core.cst$kw$showing_DASH_injected_QMARK_);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15029__$1,cljs.core.cst$kw$height);
var tooltip_style_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15029__$1,cljs.core.cst$kw$tooltip_DASH_style_QMARK_);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15029__$1,cljs.core.cst$kw$attr);
var popover_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15029__$1,cljs.core.cst$kw$popover_DASH_color);
var arrow_length = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15029__$1,cljs.core.cst$kw$arrow_DASH_length,(11));
var position_offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15029__$1,cljs.core.cst$kw$position_DASH_offset);
var backdrop_opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15029__$1,cljs.core.cst$kw$backdrop_DASH_opacity);
var position_injected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15029__$1,cljs.core.cst$kw$position_DASH_injected);
var no_clip_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15029__$1,cljs.core.cst$kw$no_DASH_clip_QMARK_);
var close_button_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15029__$1,cljs.core.cst$kw$close_DASH_button_QMARK_);
var arrow_width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15029__$1,cljs.core.cst$kw$arrow_DASH_width,(22));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15029__$1,cljs.core.cst$kw$width);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15029__$1,cljs.core.cst$kw$title);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15029__$1,cljs.core.cst$kw$style);
var arrow_gap = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15029__$1,cljs.core.cst$kw$arrow_DASH_gap,(-1));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15029__$1,cljs.core.cst$kw$class);
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15029__$1,cljs.core.cst$kw$padding);
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.popover.popover_content_wrapper_args_desc),args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["popover-content-wrapper"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro popover-content-wrapper-args-desc args \"popover-content-wrapper\")"));
}

cljs.core.deref(position_injected);

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["popover-content-wrapper ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("inherit"),(cljs.core.truth_(no_clip_QMARK___$1)?new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$left,re_com.util.px(cljs.core.deref(left_offset)),cljs.core.cst$kw$top,re_com.util.px(cljs.core.deref(top_offset))], null):null),style], 0))], null),attr], 0)),(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.deref(showing_injected_QMARK_);
if(cljs.core.truth_(and__4120__auto__)){
return on_cancel;
} else {
return and__4120__auto__;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.backdrop,cljs.core.cst$kw$opacity,backdrop_opacity,cljs.core.cst$kw$on_DASH_click,on_cancel], null):null),new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_border,cljs.core.cst$kw$position,position_injected,cljs.core.cst$kw$position_DASH_offset,position_offset,cljs.core.cst$kw$width,width,cljs.core.cst$kw$height,height,cljs.core.cst$kw$tooltip_DASH_style_QMARK_,tooltip_style_QMARK_,cljs.core.cst$kw$popover_DASH_color,popover_color,cljs.core.cst$kw$popover_DASH_border_DASH_color,popover_border_color,cljs.core.cst$kw$arrow_DASH_length,arrow_length,cljs.core.cst$kw$arrow_DASH_width,arrow_width,cljs.core.cst$kw$arrow_DASH_gap,arrow_gap,cljs.core.cst$kw$padding,padding,cljs.core.cst$kw$title,(cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_title,cljs.core.cst$kw$title,title,cljs.core.cst$kw$showing_QMARK_,showing_injected_QMARK_,cljs.core.cst$kw$close_DASH_button_QMARK_,close_button_QMARK_,cljs.core.cst$kw$close_DASH_callback,on_cancel], null):null),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body], null)], null)], null);
};
var G__15034 = function (var_args){
var p__15028 = null;
if (arguments.length > 0) {
var G__15035__i = 0, G__15035__a = new Array(arguments.length -  0);
while (G__15035__i < G__15035__a.length) {G__15035__a[G__15035__i] = arguments[G__15035__i + 0]; ++G__15035__i;}
  p__15028 = new cljs.core.IndexedSeq(G__15035__a,0,null);
} 
return G__15034__delegate.call(this,p__15028);};
G__15034.cljs$lang$maxFixedArity = 0;
G__15034.cljs$lang$applyTo = (function (arglist__15036){
var p__15028 = cljs.core.seq(arglist__15036);
return G__15034__delegate(p__15028);
});
G__15034.cljs$core$IFn$_invoke$arity$variadic = G__15034__delegate;
return G__15034;
})()
;})(left_offset,top_offset,position_no_clip_popover,map__15026,map__15026__$1,args,no_clip_QMARK_))
], null));
});

re_com.popover.popover_content_wrapper.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.popover.popover_content_wrapper.cljs$lang$applyTo = (function (seq15024){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15024));
});

re_com.popover.popover_anchor_wrapper_args_desc = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$showing_QMARK_,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"boolean atom",cljs.core.cst$kw$description,"an atom. When the value is true, the popover shows"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$position,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.position_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$anchor,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"string | hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"the component the popover is attached to"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$popover,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"string | hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"the popover body component"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"override component style(s) with a style map, only use in case of emergency (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to the outer container)"], null)], null)], null);
/**
 * Renders an element or control along with a Bootstrap popover
 */
re_com.popover.popover_anchor_wrapper = (function re_com$popover$popover_anchor_wrapper(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15049 = arguments.length;
var i__4731__auto___15050 = (0);
while(true){
if((i__4731__auto___15050 < len__4730__auto___15049)){
args__4736__auto__.push((arguments[i__4731__auto___15050]));

var G__15051 = (i__4731__auto___15050 + (1));
i__4731__auto___15050 = G__15051;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.popover.popover_anchor_wrapper.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.popover.popover_anchor_wrapper.cljs$core$IFn$_invoke$arity$variadic = (function (p__15038){
var map__15039 = p__15038;
var map__15039__$1 = (((((!((map__15039 == null))))?(((((map__15039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15039):map__15039);
var args = map__15039__$1;
var showing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15039__$1,cljs.core.cst$kw$showing_QMARK_);
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15039__$1,cljs.core.cst$kw$position);
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.popover.popover_anchor_wrapper_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["popover-anchor-wrapper"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro popover-anchor-wrapper-args-desc args \"popover-anchor-wrapper\")"));
}

var external_position = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(position);
var internal_position = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(external_position));
var reset_on_hide = reagent.ratom.make_reaction(((function (external_position,internal_position,map__15039,map__15039__$1,args,showing_QMARK_,position){
return (function (){
if(cljs.core.truth_(cljs.core.deref(showing_QMARK_))){
return null;
} else {
return cljs.core.reset_BANG_(internal_position,cljs.core.deref(external_position));
}
});})(external_position,internal_position,map__15039,map__15039__$1,args,showing_QMARK_,position))
);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display_DASH_name,"popover-anchor-wrapper",cljs.core.cst$kw$reagent_DASH_render,((function (external_position,internal_position,reset_on_hide,map__15039,map__15039__$1,args,showing_QMARK_,position){
return (function() { 
var G__15052__delegate = function (p__15041){
var map__15042 = p__15041;
var map__15042__$1 = (((((!((map__15042 == null))))?(((((map__15042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15042):map__15042);
var args__$1 = map__15042__$1;
var showing_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15042__$1,cljs.core.cst$kw$showing_QMARK_);
var position__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15042__$1,cljs.core.cst$kw$position);
var anchor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15042__$1,cljs.core.cst$kw$anchor);
var popover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15042__$1,cljs.core.cst$kw$popover);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15042__$1,cljs.core.cst$kw$class);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15042__$1,cljs.core.cst$kw$style);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15042__$1,cljs.core.cst$kw$attr);
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.popover.popover_anchor_wrapper_args_desc),args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["popover-anchor-wrapper"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro popover-anchor-wrapper-args-desc args \"popover-anchor-wrapper\")"));
}

cljs.core.deref(reset_on_hide);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(external_position),position__$1)){
cljs.core.reset_BANG_(external_position,position__$1);

cljs.core.reset_BANG_(internal_position,cljs.core.deref(external_position));
} else {
}

var vec__15044 = re_com.popover.split_keyword(cljs.core.deref(internal_position),"-");
var orientation = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15044,(0),null);
var _arrow_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15044,(1),null);
var place_anchor_before_QMARK_ = (function (){var G__15047 = orientation;
var G__15047__$1 = (((G__15047 instanceof cljs.core.Keyword))?G__15047.fqn:null);
switch (G__15047__$1) {
case "left":
case "above":
return false;

break;
default:
return true;

}
})();
var flex_flow = (function (){var G__15048 = orientation;
var G__15048__$1 = (((G__15048 instanceof cljs.core.Keyword))?G__15048.fqn:null);
switch (G__15048__$1) {
case "left":
case "right":
return "row";

break;
default:
return "column";

}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-popover-anchor-wrapper display-inline-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("inherit"),style], 0))], null),attr], 0)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"rc-point-wrapper display-inline-flex",cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("auto"),re_com.box.flex_flow_style(flex_flow),re_com.box.align_style(cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center)], 0))], null),(cljs.core.truth_(place_anchor_before_QMARK_)?anchor:null),(cljs.core.truth_(cljs.core.deref(showing_QMARK___$1))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"rc-popover-point display-inline-flex",cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("auto"),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$z_DASH_index,(4)], null)], 0))], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(popover,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$showing_DASH_injected_QMARK_,showing_QMARK___$1,cljs.core.cst$kw$position_DASH_injected,internal_position], null))], null):null),(cljs.core.truth_(place_anchor_before_QMARK_)?null:anchor)], null)], null);
};
var G__15052 = function (var_args){
var p__15041 = null;
if (arguments.length > 0) {
var G__15055__i = 0, G__15055__a = new Array(arguments.length -  0);
while (G__15055__i < G__15055__a.length) {G__15055__a[G__15055__i] = arguments[G__15055__i + 0]; ++G__15055__i;}
  p__15041 = new cljs.core.IndexedSeq(G__15055__a,0,null);
} 
return G__15052__delegate.call(this,p__15041);};
G__15052.cljs$lang$maxFixedArity = 0;
G__15052.cljs$lang$applyTo = (function (arglist__15056){
var p__15041 = cljs.core.seq(arglist__15056);
return G__15052__delegate(p__15041);
});
G__15052.cljs$core$IFn$_invoke$arity$variadic = G__15052__delegate;
return G__15052;
})()
;})(external_position,internal_position,reset_on_hide,map__15039,map__15039__$1,args,showing_QMARK_,position))
], null));
});

re_com.popover.popover_anchor_wrapper.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.popover.popover_anchor_wrapper.cljs$lang$applyTo = (function (seq15037){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15037));
});

re_com.popover.popover_tooltip_args_desc = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$label,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"string | hiccup | atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"the text (or component) for the tooltip"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$showing_QMARK_,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"boolean atom",cljs.core.cst$kw$description,"an atom. When the value is true, the tooltip shows"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_cancel,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"-> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"a function which takes no params and returns nothing. Called when the popover is cancelled (e.g. user clicks away)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$close_DASH_button_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"when true, displays the close button"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$status,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.popover_status_type_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"controls background color of the tooltip. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"nil/omitted"], null)," for black or one of ",re_com.validate.popover_status_types_list," (although ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":validating"], null)," is only used by the input-text component)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$anchor,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"the component the tooltip is attached to"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$position,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$below_DASH_center,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.position_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$no_DASH_clip_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,true,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"when an anchor is in a scrolling region (e.g. scroller component), the popover can sometimes be clipped. When this parameter is true (which is the default), re-com will use a different CSS method to show the popover. This method is slightly inferior because the popover can't track the anchor if it is repositioned"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"specifies width of the tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to popover-anchor-wrapper component)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"override component style(s) with a style map, only use in case of emergency (applies to popover-anchor-wrapper component)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to popover-anchor-wrapper component)"], null)], null)], null);
/**
 * Renders text as a tooltip in Bootstrap popover style
 */
re_com.popover.popover_tooltip = (function re_com$popover$popover_tooltip(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15062 = arguments.length;
var i__4731__auto___15063 = (0);
while(true){
if((i__4731__auto___15063 < len__4730__auto___15062)){
args__4736__auto__.push((arguments[i__4731__auto___15063]));

var G__15064 = (i__4731__auto___15063 + (1));
i__4731__auto___15063 = G__15064;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.popover.popover_tooltip.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.popover.popover_tooltip.cljs$core$IFn$_invoke$arity$variadic = (function (p__15058){
var map__15059 = p__15058;
var map__15059__$1 = (((((!((map__15059 == null))))?(((((map__15059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15059):map__15059);
var args = map__15059__$1;
var anchor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15059__$1,cljs.core.cst$kw$anchor);
var on_cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15059__$1,cljs.core.cst$kw$on_DASH_cancel);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15059__$1,cljs.core.cst$kw$attr);
var no_clip_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15059__$1,cljs.core.cst$kw$no_DASH_clip_QMARK_,true);
var close_button_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15059__$1,cljs.core.cst$kw$close_DASH_button_QMARK_);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15059__$1,cljs.core.cst$kw$width);
var showing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15059__$1,cljs.core.cst$kw$showing_QMARK_);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15059__$1,cljs.core.cst$kw$style);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15059__$1,cljs.core.cst$kw$status);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15059__$1,cljs.core.cst$kw$label);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15059__$1,cljs.core.cst$kw$class);
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15059__$1,cljs.core.cst$kw$position);
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.popover.popover_tooltip_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["popover-tooltip"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro popover-tooltip-args-desc args \"popover-tooltip\")"));
}

var label__$1 = re_com.util.deref_or_value(label);
var popover_color = (function (){var G__15061 = status;
var G__15061__$1 = (((G__15061 instanceof cljs.core.Keyword))?G__15061.fqn:null);
switch (G__15061__$1) {
case "warning":
return "#f57c00";

break;
case "error":
return "#d50000";

break;
case "info":
return "#333333";

break;
case "success":
return "#13C200";

break;
default:
return "black";

}
})();
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_anchor_wrapper,cljs.core.cst$kw$showing_QMARK_,showing_QMARK_,cljs.core.cst$kw$position,(function (){var or__4131__auto__ = position;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$below_DASH_center;
}
})(),cljs.core.cst$kw$anchor,anchor,cljs.core.cst$kw$class,["rc-popover-tooltip ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,style,cljs.core.cst$kw$attr,attr,cljs.core.cst$kw$popover,new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_content_wrapper,cljs.core.cst$kw$no_DASH_clip_QMARK_,no_clip_QMARK_,cljs.core.cst$kw$on_DASH_cancel,on_cancel,cljs.core.cst$kw$width,width,cljs.core.cst$kw$tooltip_DASH_style_QMARK_,true,cljs.core.cst$kw$popover_DASH_color,popover_color,cljs.core.cst$kw$padding,"3px 8px",cljs.core.cst$kw$arrow_DASH_length,(6),cljs.core.cst$kw$arrow_DASH_width,(12),cljs.core.cst$kw$arrow_DASH_gap,(4),cljs.core.cst$kw$body,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,cljs.core.cst$kw$style,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,cljs.core.cst$kw$info))?new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,"white",cljs.core.cst$kw$font_DASH_size,"14px",cljs.core.cst$kw$padding,"4px"], null):new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$color,"white",cljs.core.cst$kw$font_DASH_size,"12px",cljs.core.cst$kw$font_DASH_weight,"bold",cljs.core.cst$kw$text_DASH_align,"center"], null)),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(close_button_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$align_DASH_self,cljs.core.cst$kw$end,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.close_button.close_button,cljs.core.cst$kw$on_DASH_click,((function (label__$1,popover_color,map__15059,map__15059__$1,args,anchor,on_cancel,attr,no_clip_QMARK_,close_button_QMARK_,width,showing_QMARK_,style,status,label,class$,position){
return (function (){
if(cljs.core.truth_(on_cancel)){
return (on_cancel.cljs$core$IFn$_invoke$arity$0 ? on_cancel.cljs$core$IFn$_invoke$arity$0() : on_cancel.call(null));
} else {
return cljs.core.reset_BANG_(showing_QMARK_,false);
}
});})(label__$1,popover_color,map__15059,map__15059__$1,args,anchor,on_cancel,attr,no_clip_QMARK_,close_button_QMARK_,width,showing_QMARK_,style,status,label,class$,position))
,cljs.core.cst$kw$div_DASH_size,(15),cljs.core.cst$kw$font_DASH_size,(20),cljs.core.cst$kw$left_DASH_offset,(5)], null)], null):null),label__$1], null)], null)], null)], null);
});

re_com.popover.popover_tooltip.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.popover.popover_tooltip.cljs$lang$applyTo = (function (seq15057){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15057));
});

