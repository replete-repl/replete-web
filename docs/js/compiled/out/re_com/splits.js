// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_com.splits');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_com.util');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
/**
 * Return a drag handle to go into a vertical or horizontal splitter bar:
 *  orientation: Can be :horizonal or :vertical
 *  over?:       When true, the mouse is assumed to be over the splitter so show a bolder color
 */
re_com.splits.drag_handle = (function re_com$splits$drag_handle(orientation,over_QMARK_){
var vertical_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orientation,cljs.core.cst$kw$vertical);
var length = "20px";
var width = "8px";
var pos1 = "3px";
var pos2 = "3px";
var color = (cljs.core.truth_(over_QMARK_)?"#999":"#ccc");
var border = ["solid 1px ",color].join('');
var flex_flow = [((vertical_QMARK_)?"row":"column")," nowrap"].join('');
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"display-flex",cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_flow_style(flex_flow),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,((vertical_QMARK_)?width:length),cljs.core.cst$kw$height,((vertical_QMARK_)?length:width),cljs.core.cst$kw$margin,"auto"], null)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,((vertical_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,pos1,cljs.core.cst$kw$height,length,cljs.core.cst$kw$border_DASH_right,border], null):new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,length,cljs.core.cst$kw$height,pos1,cljs.core.cst$kw$border_DASH_bottom,border], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,((vertical_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,pos2,cljs.core.cst$kw$height,length,cljs.core.cst$kw$border_DASH_right,border], null):new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,length,cljs.core.cst$kw$height,pos2,cljs.core.cst$kw$border_DASH_bottom,border], null))], null)], null)], null);
});
re_com.splits.hv_split_args_desc = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$panel_DASH_1,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"markup to go in the left (or top) panel"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$panel_DASH_2,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"markup to go in the right (or bottom) panel"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$size,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"auto",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"applied to the outer container of the two panels. Equivalent to CSS style ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$bold,"flex"], null),".",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"Examples: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"initial"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"auto"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"none"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"100px"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"2"], null)," or a generic triple of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"grow shrink basis"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"width of the outer container of the two panels. A CSS width style"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"height of the outer container of the two panels. A CSS height style"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_split_DASH_change,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"double -> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"called when the user moves the splitter bar (on mouse up, not on each mouse move). Given the new ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":panel-1"], null)," percentage split"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$initial_DASH_split,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(50),cljs.core.cst$kw$type,"double | string",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.number_or_string_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"initial split percentage for ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":panel-1"], null),". Can be double value or string (with/without percentage sign)"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$splitter_DASH_size,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"8px",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"thickness of the splitter"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$margin,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"8px",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"thickness of the margin around the panels"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to the outer container)"], null)], null)], null);
/**
 * Returns markup for a horizontal layout component
 */
re_com.splits.h_split = (function re_com$splits$h_split(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20118 = arguments.length;
var i__4731__auto___20119 = (0);
while(true){
if((i__4731__auto___20119 < len__4730__auto___20118)){
args__4736__auto__.push((arguments[i__4731__auto___20119]));

var G__20120 = (i__4731__auto___20119 + (1));
i__4731__auto___20119 = G__20120;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.splits.h_split.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.splits.h_split.cljs$core$IFn$_invoke$arity$variadic = (function (p__20111){
var map__20112 = p__20111;
var map__20112__$1 = (((((!((map__20112 == null))))?(((((map__20112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20112):map__20112);
var args = map__20112__$1;
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20112__$1,cljs.core.cst$kw$size,"auto");
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20112__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20112__$1,cljs.core.cst$kw$height);
var on_split_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20112__$1,cljs.core.cst$kw$on_DASH_split_DASH_change);
var initial_split = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20112__$1,cljs.core.cst$kw$initial_DASH_split,(50));
var splitter_size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20112__$1,cljs.core.cst$kw$splitter_DASH_size,"8px");
var margin = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20112__$1,cljs.core.cst$kw$margin,"8px");
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.splits.hv_split_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["h-split"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro hv-split-args-desc args \"h-split\")"));
}

var container_id = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("h-split-");
var split_perc = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(parseInt(initial_split));
var dragging_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var over_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var stop_drag = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,map__20112,map__20112__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (){
if(cljs.core.truth_(on_split_change)){
var G__20114_20121 = cljs.core.deref(split_perc);
(on_split_change.cljs$core$IFn$_invoke$arity$1 ? on_split_change.cljs$core$IFn$_invoke$arity$1(G__20114_20121) : on_split_change.call(null,G__20114_20121));
} else {
}

return cljs.core.reset_BANG_(dragging_QMARK_,false);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,map__20112,map__20112__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
var calc_perc = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,map__20112,map__20112__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (mouse_x){
var container = re_com.util.get_element_by_id(container_id);
var offsets = re_com.util.sum_scroll_offsets(container);
var c_width = container.clientWidth;
var c_left_x = container.offsetLeft;
var relative_x = ((mouse_x - c_left_x) + cljs.core.cst$kw$left.cljs$core$IFn$_invoke$arity$1(offsets));
return (100.0 * (relative_x / c_width));
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,map__20112,map__20112__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
var _LT_html_GT__QMARK_ = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,map__20112,map__20112__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (p1__20109_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__20109_SHARP_,document.documentElement);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,map__20112,map__20112__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
var mouseout = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,map__20112,map__20112__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (event){
if(_LT_html_GT__QMARK_(event.relatedTarget)){
return stop_drag();
} else {
return null;
}
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,map__20112,map__20112__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
var mousemove = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,map__20112,map__20112__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (event){
return cljs.core.reset_BANG_(split_perc,calc_perc(event.clientX));
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,map__20112,map__20112__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
var mousedown = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,map__20112,map__20112__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (event){
event.preventDefault();

return cljs.core.reset_BANG_(dragging_QMARK_,true);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,map__20112,map__20112__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
var mouseover_split = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,map__20112,map__20112__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (){
return cljs.core.reset_BANG_(over_QMARK_,true);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,map__20112,map__20112__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
var mouseout_split = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,map__20112,map__20112__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (){
return cljs.core.reset_BANG_(over_QMARK_,false);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,map__20112,map__20112__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
var make_container_attrs = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__20112,map__20112__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (class$,style,attr,in_drag_QMARK_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["rc-h-split display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$id,container_id,cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style(size),re_com.box.flex_flow_style("row nowrap"),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$margin,margin,cljs.core.cst$kw$width,width,cljs.core.cst$kw$height,height], null),style], 0))], null),(cljs.core.truth_(in_drag_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_mouse_DASH_up,((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__20112,map__20112__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (event){
stop_drag();

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__20112,map__20112__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
,cljs.core.cst$kw$on_DASH_mouse_DASH_move,((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__20112,map__20112__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (event){
mousemove(event);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__20112,map__20112__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__20112,map__20112__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (event){
mouseout(event);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__20112,map__20112__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
], null):null),attr], 0));
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__20112,map__20112__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
var make_panel_attrs = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,map__20112,map__20112__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (class$,in_drag_QMARK_,percentage){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style([cljs.core.str.cljs$core$IFn$_invoke$arity$1(percentage)," 1 0px"].join('')),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$overflow,"hidden"], null),(cljs.core.truth_(in_drag_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pointer_DASH_events,"none"], null):null)], 0))], null);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,map__20112,map__20112__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
var make_splitter_attrs = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__20112,map__20112__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (class$){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$class,["display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$on_DASH_mouse_DASH_down,((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__20112,map__20112__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (event){
mousedown(event);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__20112,map__20112__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
,cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__20112,map__20112__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (event){
mouseover_split();

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__20112,map__20112__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__20112,map__20112__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (event){
mouseout_split();

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__20112,map__20112__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
,cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style(["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(splitter_size)].join('')),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"col-resize"], null),(cljs.core.truth_(cljs.core.deref(over_QMARK_))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"#f8f8f8"], null):null)], 0))], null);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__20112,map__20112__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
return ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,make_splitter_attrs,map__20112,map__20112__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function() { 
var G__20122__delegate = function (p__20115){
var map__20116 = p__20115;
var map__20116__$1 = (((((!((map__20116 == null))))?(((((map__20116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20116):map__20116);
var _splitter_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20116__$1,cljs.core.cst$kw$_splitter_DASH_size);
var panel_2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20116__$1,cljs.core.cst$kw$panel_DASH_2);
var panel_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20116__$1,cljs.core.cst$kw$panel_DASH_1);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20116__$1,cljs.core.cst$kw$attr);
var _margin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20116__$1,cljs.core.cst$kw$_margin);
var _on_split_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20116__$1,cljs.core.cst$kw$_on_DASH_split_DASH_change);
var _width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20116__$1,cljs.core.cst$kw$_width);
var _size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20116__$1,cljs.core.cst$kw$_size);
var _height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20116__$1,cljs.core.cst$kw$_height);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20116__$1,cljs.core.cst$kw$style);
var _initial_split = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20116__$1,cljs.core.cst$kw$_initial_DASH_split);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20116__$1,cljs.core.cst$kw$class);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,make_container_attrs(class$,style,attr,cljs.core.deref(dragging_QMARK_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,make_panel_attrs("rc-h-split-top",cljs.core.deref(dragging_QMARK_),cljs.core.deref(split_perc)),panel_1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,make_splitter_attrs("rc-h-split-splitter"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.splits.drag_handle,cljs.core.cst$kw$vertical,cljs.core.deref(over_QMARK_)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,make_panel_attrs("rc-h-split-bottom",cljs.core.deref(dragging_QMARK_),((100) - cljs.core.deref(split_perc))),panel_2], null)], null);
};
var G__20122 = function (var_args){
var p__20115 = null;
if (arguments.length > 0) {
var G__20123__i = 0, G__20123__a = new Array(arguments.length -  0);
while (G__20123__i < G__20123__a.length) {G__20123__a[G__20123__i] = arguments[G__20123__i + 0]; ++G__20123__i;}
  p__20115 = new cljs.core.IndexedSeq(G__20123__a,0,null);
} 
return G__20122__delegate.call(this,p__20115);};
G__20122.cljs$lang$maxFixedArity = 0;
G__20122.cljs$lang$applyTo = (function (arglist__20124){
var p__20115 = cljs.core.seq(arglist__20124);
return G__20122__delegate(p__20115);
});
G__20122.cljs$core$IFn$_invoke$arity$variadic = G__20122__delegate;
return G__20122;
})()
;
;})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,make_splitter_attrs,map__20112,map__20112__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
});

re_com.splits.h_split.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.splits.h_split.cljs$lang$applyTo = (function (seq20110){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20110));
});

/**
 * Returns markup for a vertical layout component
 */
re_com.splits.v_split = (function re_com$splits$v_split(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20134 = arguments.length;
var i__4731__auto___20135 = (0);
while(true){
if((i__4731__auto___20135 < len__4730__auto___20134)){
args__4736__auto__.push((arguments[i__4731__auto___20135]));

var G__20136 = (i__4731__auto___20135 + (1));
i__4731__auto___20135 = G__20136;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.splits.v_split.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.splits.v_split.cljs$core$IFn$_invoke$arity$variadic = (function (p__20127){
var map__20128 = p__20127;
var map__20128__$1 = (((((!((map__20128 == null))))?(((((map__20128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20128):map__20128);
var args = map__20128__$1;
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20128__$1,cljs.core.cst$kw$size,"auto");
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20128__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20128__$1,cljs.core.cst$kw$height);
var on_split_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20128__$1,cljs.core.cst$kw$on_DASH_split_DASH_change);
var initial_split = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20128__$1,cljs.core.cst$kw$initial_DASH_split,(50));
var splitter_size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20128__$1,cljs.core.cst$kw$splitter_DASH_size,"8px");
var margin = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20128__$1,cljs.core.cst$kw$margin,"8px");
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.splits.hv_split_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["v-split"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro hv-split-args-desc args \"v-split\")"));
}

var container_id = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("v-split-");
var split_perc = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(parseInt(initial_split));
var dragging_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var over_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var stop_drag = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,map__20128,map__20128__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (){
if(cljs.core.truth_(on_split_change)){
var G__20130_20137 = cljs.core.deref(split_perc);
(on_split_change.cljs$core$IFn$_invoke$arity$1 ? on_split_change.cljs$core$IFn$_invoke$arity$1(G__20130_20137) : on_split_change.call(null,G__20130_20137));
} else {
}

return cljs.core.reset_BANG_(dragging_QMARK_,false);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,map__20128,map__20128__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
var calc_perc = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,map__20128,map__20128__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (mouse_y){
var container = re_com.util.get_element_by_id(container_id);
var offsets = re_com.util.sum_scroll_offsets(container);
var c_height = container.clientHeight;
var c_top_y = container.offsetTop;
var relative_y = ((mouse_y - c_top_y) + cljs.core.cst$kw$top.cljs$core$IFn$_invoke$arity$1(offsets));
return (100.0 * (relative_y / c_height));
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,map__20128,map__20128__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
var _LT_html_GT__QMARK_ = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,map__20128,map__20128__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (p1__20125_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__20125_SHARP_,document.documentElement);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,map__20128,map__20128__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
var mouseout = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,map__20128,map__20128__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (event){
if(_LT_html_GT__QMARK_(event.relatedTarget)){
return stop_drag();
} else {
return null;
}
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,map__20128,map__20128__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
var mousemove = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,map__20128,map__20128__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (event){
return cljs.core.reset_BANG_(split_perc,calc_perc(event.clientY));
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,map__20128,map__20128__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
var mousedown = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,map__20128,map__20128__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (event){
event.preventDefault();

return cljs.core.reset_BANG_(dragging_QMARK_,true);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,map__20128,map__20128__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
var mouseover_split = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,map__20128,map__20128__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (){
return cljs.core.reset_BANG_(over_QMARK_,true);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,map__20128,map__20128__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
var mouseout_split = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,map__20128,map__20128__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (){
return cljs.core.reset_BANG_(over_QMARK_,false);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,map__20128,map__20128__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
var make_container_attrs = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__20128,map__20128__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (class$,style,attr,in_drag_QMARK_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["rc-v-split display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$id,container_id,cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style(size),re_com.box.flex_flow_style("column nowrap"),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$margin,margin,cljs.core.cst$kw$width,width,cljs.core.cst$kw$height,height], null),style], 0))], null),(cljs.core.truth_(in_drag_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_mouse_DASH_up,((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__20128,map__20128__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (event){
stop_drag();

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__20128,map__20128__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
,cljs.core.cst$kw$on_DASH_mouse_DASH_move,((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__20128,map__20128__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (event){
mousemove(event);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__20128,map__20128__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__20128,map__20128__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (event){
mouseout(event);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__20128,map__20128__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
], null):null),attr], 0));
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__20128,map__20128__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
var make_panel_attrs = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,map__20128,map__20128__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (class$,in_drag_QMARK_,percentage){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style([cljs.core.str.cljs$core$IFn$_invoke$arity$1(percentage)," 1 0px"].join('')),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$overflow,"hidden"], null),(cljs.core.truth_(in_drag_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pointer_DASH_events,"none"], null):null)], 0))], null);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,map__20128,map__20128__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
var make_splitter_attrs = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__20128,map__20128__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (class$){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$class,["display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$on_DASH_mouse_DASH_down,((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__20128,map__20128__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (event){
mousedown(event);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__20128,map__20128__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
,cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__20128,map__20128__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (event){
mouseover_split();

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__20128,map__20128__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__20128,map__20128__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (event){
mouseout_split();

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__20128,map__20128__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
,cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style(["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(splitter_size)].join('')),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"row-resize"], null),(cljs.core.truth_(cljs.core.deref(over_QMARK_))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"#f8f8f8"], null):null)], 0))], null);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__20128,map__20128__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
return ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,make_splitter_attrs,map__20128,map__20128__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function() { 
var G__20138__delegate = function (p__20131){
var map__20132 = p__20131;
var map__20132__$1 = (((((!((map__20132 == null))))?(((((map__20132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20132):map__20132);
var _splitter_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20132__$1,cljs.core.cst$kw$_splitter_DASH_size);
var panel_2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20132__$1,cljs.core.cst$kw$panel_DASH_2);
var panel_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20132__$1,cljs.core.cst$kw$panel_DASH_1);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20132__$1,cljs.core.cst$kw$attr);
var _margin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20132__$1,cljs.core.cst$kw$_margin);
var _on_split_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20132__$1,cljs.core.cst$kw$_on_DASH_split_DASH_change);
var _width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20132__$1,cljs.core.cst$kw$_width);
var _size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20132__$1,cljs.core.cst$kw$_size);
var _height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20132__$1,cljs.core.cst$kw$_height);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20132__$1,cljs.core.cst$kw$style);
var _initial_split = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20132__$1,cljs.core.cst$kw$_initial_DASH_split);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20132__$1,cljs.core.cst$kw$class);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,make_container_attrs(class$,style,attr,cljs.core.deref(dragging_QMARK_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,make_panel_attrs("re-v-split-top",cljs.core.deref(dragging_QMARK_),cljs.core.deref(split_perc)),panel_1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,make_splitter_attrs("re-v-split-splitter"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.splits.drag_handle,cljs.core.cst$kw$horizontal,cljs.core.deref(over_QMARK_)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,make_panel_attrs("re-v-split-bottom",cljs.core.deref(dragging_QMARK_),((100) - cljs.core.deref(split_perc))),panel_2], null)], null);
};
var G__20138 = function (var_args){
var p__20131 = null;
if (arguments.length > 0) {
var G__20139__i = 0, G__20139__a = new Array(arguments.length -  0);
while (G__20139__i < G__20139__a.length) {G__20139__a[G__20139__i] = arguments[G__20139__i + 0]; ++G__20139__i;}
  p__20131 = new cljs.core.IndexedSeq(G__20139__a,0,null);
} 
return G__20138__delegate.call(this,p__20131);};
G__20138.cljs$lang$maxFixedArity = 0;
G__20138.cljs$lang$applyTo = (function (arglist__20140){
var p__20131 = cljs.core.seq(arglist__20140);
return G__20138__delegate(p__20131);
});
G__20138.cljs$core$IFn$_invoke$arity$variadic = G__20138__delegate;
return G__20138;
})()
;
;})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,make_splitter_attrs,map__20128,map__20128__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
});

re_com.splits.v_split.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.splits.v_split.cljs$lang$applyTo = (function (seq20126){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20126));
});

