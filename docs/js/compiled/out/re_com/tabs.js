// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_com.tabs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_com.util');
goog.require('re_com.box');
goog.require('re_com.validate');
re_com.tabs.tabs_args_desc = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$model,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"unique-id | atom",cljs.core.cst$kw$description,"the unique identifier of the currently selected tab"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$tabs,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"vector of tabs | atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.vector_of_maps_QMARK_,cljs.core.cst$kw$description,"one element in the vector for each tab. Typically, each element is a map with :id and :label keys"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"unique-id -> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"called when user alters the selection. Passed the unique identifier of the selection"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$id,cljs.core.cst$kw$type,"tab -> anything",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":tabs"], null),", returns its unique identifier (aka id)"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$label,cljs.core.cst$kw$type,"tab -> string | hiccup",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":tabs"], null),", returns its displayable label"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"CSS styles to add or override (aplies to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$bold,"each individual tab"], null)," rather than the container)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to the outer container)"], null)], null)], null);
re_com.tabs.horizontal_tabs = (function re_com$tabs$horizontal_tabs(var_args){
var args__4736__auto__ = [];
var len__4730__auto___19024 = arguments.length;
var i__4731__auto___19025 = (0);
while(true){
if((i__4731__auto___19025 < len__4730__auto___19024)){
args__4736__auto__.push((arguments[i__4731__auto___19025]));

var G__19026 = (i__4731__auto___19025 + (1));
i__4731__auto___19025 = G__19026;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__19017){
var map__19018 = p__19017;
var map__19018__$1 = (((((!((map__19018 == null))))?(((((map__19018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19018):map__19018);
var args = map__19018__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19018__$1,cljs.core.cst$kw$model);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19018__$1,cljs.core.cst$kw$tabs);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19018__$1,cljs.core.cst$kw$on_DASH_change);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19018__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19018__$1,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19018__$1,cljs.core.cst$kw$class);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19018__$1,cljs.core.cst$kw$style);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19018__$1,cljs.core.cst$kw$attr);
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.tabs.tabs_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tabs"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

var current = re_com.util.deref_or_value(model);
var tabs__$1 = re_com.util.deref_or_value(tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (current,tabs__$1,map__19018,map__19018__$1,args,model,tabs,on_change,id_fn,label_fn,class$,style,attr){
return (function (p1__19015_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__19015_SHARP_) : id_fn.call(null,p1__19015_SHARP_)));
});})(current,tabs__$1,map__19018,map__19018__$1,args,model,tabs,on_change,id_fn,label_fn,class$,style,attr))
,tabs__$1)))?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(not-empty (filter (fn* [p1__19015#] (= current (id-fn p1__19015#))) tabs))"].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-tabs nav nav-tabs noselect ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,re_com.box.flex_child_style("none")], null),attr], 0)),(function (){var iter__4523__auto__ = ((function (current,tabs__$1,_,map__19018,map__19018__$1,args,model,tabs,on_change,id_fn,label_fn,class$,style,attr){
return (function re_com$tabs$iter__19020(s__19021){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__19018,map__19018__$1,args,model,tabs,on_change,id_fn,label_fn,class$,style,attr){
return (function (){
var s__19021__$1 = s__19021;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__19021__$1);
if(temp__5720__auto__){
var s__19021__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19021__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__19021__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__19023 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__19022 = (0);
while(true){
if((i__19022 < size__4522__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__19022);
cljs.core.chunk_append(b__19023,(function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,((selected_QMARK_)?"active":null),cljs.core.cst$kw$key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),style], 0)),cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(on_change)?((function (i__19022,id,label,selected_QMARK_,t,c__4521__auto__,size__4522__auto__,b__19023,s__19021__$2,temp__5720__auto__,current,tabs__$1,_,map__19018,map__19018__$1,args,model,tabs,on_change,id_fn,label_fn,class$,style,attr){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(i__19022,id,label,selected_QMARK_,t,c__4521__auto__,size__4522__auto__,b__19023,s__19021__$2,temp__5720__auto__,current,tabs__$1,_,map__19018,map__19018__$1,args,model,tabs,on_change,id_fn,label_fn,class$,style,attr))
:null)], null),label], null)], null);
})());

var G__19027 = (i__19022 + (1));
i__19022 = G__19027;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19023),re_com$tabs$iter__19020(cljs.core.chunk_rest(s__19021__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19023),null);
}
} else {
var t = cljs.core.first(s__19021__$2);
return cljs.core.cons((function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,((selected_QMARK_)?"active":null),cljs.core.cst$kw$key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),style], 0)),cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__19021__$2,temp__5720__auto__,current,tabs__$1,_,map__19018,map__19018__$1,args,model,tabs,on_change,id_fn,label_fn,class$,style,attr){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(id,label,selected_QMARK_,t,s__19021__$2,temp__5720__auto__,current,tabs__$1,_,map__19018,map__19018__$1,args,model,tabs,on_change,id_fn,label_fn,class$,style,attr))
:null)], null),label], null)], null);
})(),re_com$tabs$iter__19020(cljs.core.rest(s__19021__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__19018,map__19018__$1,args,model,tabs,on_change,id_fn,label_fn,class$,style,attr))
,null,null));
});})(current,tabs__$1,_,map__19018,map__19018__$1,args,model,tabs,on_change,id_fn,label_fn,class$,style,attr))
;
return iter__4523__auto__(tabs__$1);
})()], null);
});

re_com.tabs.horizontal_tabs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.tabs.horizontal_tabs.cljs$lang$applyTo = (function (seq19016){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19016));
});

re_com.tabs.bar_tabs = (function re_com$tabs$bar_tabs(var_args){
var args__4736__auto__ = [];
var len__4730__auto___19037 = arguments.length;
var i__4731__auto___19038 = (0);
while(true){
if((i__4731__auto___19038 < len__4730__auto___19037)){
args__4736__auto__.push((arguments[i__4731__auto___19038]));

var G__19039 = (i__4731__auto___19038 + (1));
i__4731__auto___19038 = G__19039;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__19030){
var map__19031 = p__19030;
var map__19031__$1 = (((((!((map__19031 == null))))?(((((map__19031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19031):map__19031);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19031__$1,cljs.core.cst$kw$on_DASH_change);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19031__$1,cljs.core.cst$kw$model);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19031__$1,cljs.core.cst$kw$attr);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19031__$1,cljs.core.cst$kw$label_DASH_fn);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19031__$1,cljs.core.cst$kw$tabs);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19031__$1,cljs.core.cst$kw$id_DASH_fn);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19031__$1,cljs.core.cst$kw$style);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19031__$1,cljs.core.cst$kw$class);
var vertical_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19031__$1,cljs.core.cst$kw$vertical_QMARK_);
var current = re_com.util.deref_or_value(model);
var tabs__$1 = re_com.util.deref_or_value(tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (current,tabs__$1,map__19031,map__19031__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_){
return (function (p1__19028_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__19028_SHARP_) : id_fn.call(null,p1__19028_SHARP_)));
});})(current,tabs__$1,map__19031,map__19031__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_))
,tabs__$1)))?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(not-empty (filter (fn* [p1__19028#] (= current (id-fn p1__19028#))) tabs))"].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-tabs noselect btn-group",(cljs.core.truth_(vertical_QMARK_)?"-vertical":null)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,re_com.box.flex_child_style("none")], null),attr], 0)),(function (){var iter__4523__auto__ = ((function (current,tabs__$1,_,map__19031,map__19031__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_){
return (function re_com$tabs$iter__19033(s__19034){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__19031,map__19031__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_){
return (function (){
var s__19034__$1 = s__19034;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__19034__$1);
if(temp__5720__auto__){
var s__19034__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19034__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__19034__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__19036 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__19035 = (0);
while(true){
if((i__19035 < size__4522__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__19035);
cljs.core.chunk_append(b__19036,(function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.cst$kw$class,["btn btn-default ",((selected_QMARK_)?"active":null)].join(''),cljs.core.cst$kw$style,style,cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(on_change)?((function (i__19035,id,label,selected_QMARK_,t,c__4521__auto__,size__4522__auto__,b__19036,s__19034__$2,temp__5720__auto__,current,tabs__$1,_,map__19031,map__19031__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(i__19035,id,label,selected_QMARK_,t,c__4521__auto__,size__4522__auto__,b__19036,s__19034__$2,temp__5720__auto__,current,tabs__$1,_,map__19031,map__19031__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_))
:null)], null),label], null);
})());

var G__19040 = (i__19035 + (1));
i__19035 = G__19040;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19036),re_com$tabs$iter__19033(cljs.core.chunk_rest(s__19034__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19036),null);
}
} else {
var t = cljs.core.first(s__19034__$2);
return cljs.core.cons((function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.cst$kw$class,["btn btn-default ",((selected_QMARK_)?"active":null)].join(''),cljs.core.cst$kw$style,style,cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__19034__$2,temp__5720__auto__,current,tabs__$1,_,map__19031,map__19031__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(id,label,selected_QMARK_,t,s__19034__$2,temp__5720__auto__,current,tabs__$1,_,map__19031,map__19031__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_))
:null)], null),label], null);
})(),re_com$tabs$iter__19033(cljs.core.rest(s__19034__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__19031,map__19031__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_))
,null,null));
});})(current,tabs__$1,_,map__19031,map__19031__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_))
;
return iter__4523__auto__(tabs__$1);
})()], null);
});

re_com.tabs.bar_tabs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.tabs.bar_tabs.cljs$lang$applyTo = (function (seq19029){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19029));
});

re_com.tabs.horizontal_bar_tabs = (function re_com$tabs$horizontal_bar_tabs(var_args){
var args__4736__auto__ = [];
var len__4730__auto___19045 = arguments.length;
var i__4731__auto___19046 = (0);
while(true){
if((i__4731__auto___19046 < len__4730__auto___19045)){
args__4736__auto__.push((arguments[i__4731__auto___19046]));

var G__19047 = (i__4731__auto___19046 + (1));
i__4731__auto___19046 = G__19047;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__19042){
var map__19043 = p__19042;
var map__19043__$1 = (((((!((map__19043 == null))))?(((((map__19043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19043):map__19043);
var args = map__19043__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19043__$1,cljs.core.cst$kw$model);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19043__$1,cljs.core.cst$kw$tabs);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19043__$1,cljs.core.cst$kw$on_DASH_change);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19043__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19043__$1,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19043__$1,cljs.core.cst$kw$class);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19043__$1,cljs.core.cst$kw$style);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19043__$1,cljs.core.cst$kw$attr);
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.tabs.tabs_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tabs"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$model,model,cljs.core.cst$kw$tabs,tabs,cljs.core.cst$kw$on_DASH_change,on_change,cljs.core.cst$kw$id_DASH_fn,id_fn,cljs.core.cst$kw$label_DASH_fn,label_fn,cljs.core.cst$kw$vertical_QMARK_,false,cljs.core.cst$kw$class,class$,cljs.core.cst$kw$style,style,cljs.core.cst$kw$attr,attr], 0));
});

re_com.tabs.horizontal_bar_tabs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.tabs.horizontal_bar_tabs.cljs$lang$applyTo = (function (seq19041){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19041));
});

re_com.tabs.vertical_bar_tabs = (function re_com$tabs$vertical_bar_tabs(var_args){
var args__4736__auto__ = [];
var len__4730__auto___19052 = arguments.length;
var i__4731__auto___19053 = (0);
while(true){
if((i__4731__auto___19053 < len__4730__auto___19052)){
args__4736__auto__.push((arguments[i__4731__auto___19053]));

var G__19054 = (i__4731__auto___19053 + (1));
i__4731__auto___19053 = G__19054;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__19049){
var map__19050 = p__19049;
var map__19050__$1 = (((((!((map__19050 == null))))?(((((map__19050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19050):map__19050);
var args = map__19050__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19050__$1,cljs.core.cst$kw$model);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19050__$1,cljs.core.cst$kw$tabs);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19050__$1,cljs.core.cst$kw$on_DASH_change);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19050__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19050__$1,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19050__$1,cljs.core.cst$kw$class);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19050__$1,cljs.core.cst$kw$style);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19050__$1,cljs.core.cst$kw$attr);
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.tabs.tabs_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tabs"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$model,model,cljs.core.cst$kw$tabs,tabs,cljs.core.cst$kw$on_DASH_change,on_change,cljs.core.cst$kw$id_DASH_fn,id_fn,cljs.core.cst$kw$label_DASH_fn,label_fn,cljs.core.cst$kw$vertical_QMARK_,true,cljs.core.cst$kw$class,class$,cljs.core.cst$kw$style,style,cljs.core.cst$kw$attr,attr], 0));
});

re_com.tabs.vertical_bar_tabs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.tabs.vertical_bar_tabs.cljs$lang$applyTo = (function (seq19048){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19048));
});

re_com.tabs.pill_tabs = (function re_com$tabs$pill_tabs(var_args){
var args__4736__auto__ = [];
var len__4730__auto___19064 = arguments.length;
var i__4731__auto___19065 = (0);
while(true){
if((i__4731__auto___19065 < len__4730__auto___19064)){
args__4736__auto__.push((arguments[i__4731__auto___19065]));

var G__19066 = (i__4731__auto___19065 + (1));
i__4731__auto___19065 = G__19066;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__19057){
var map__19058 = p__19057;
var map__19058__$1 = (((((!((map__19058 == null))))?(((((map__19058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19058):map__19058);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19058__$1,cljs.core.cst$kw$on_DASH_change);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19058__$1,cljs.core.cst$kw$model);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19058__$1,cljs.core.cst$kw$attr);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19058__$1,cljs.core.cst$kw$label_DASH_fn);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19058__$1,cljs.core.cst$kw$tabs);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19058__$1,cljs.core.cst$kw$id_DASH_fn);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19058__$1,cljs.core.cst$kw$style);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19058__$1,cljs.core.cst$kw$class);
var vertical_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19058__$1,cljs.core.cst$kw$vertical_QMARK_);
var current = re_com.util.deref_or_value(model);
var tabs__$1 = re_com.util.deref_or_value(tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (current,tabs__$1,map__19058,map__19058__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_){
return (function (p1__19055_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__19055_SHARP_) : id_fn.call(null,p1__19055_SHARP_)));
});})(current,tabs__$1,map__19058,map__19058__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_))
,tabs__$1)))?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(not-empty (filter (fn* [p1__19055#] (= current (id-fn p1__19055#))) tabs))"].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["rc-tabs noselect nav nav-pills",(cljs.core.truth_(vertical_QMARK_)?" nav-stacked":null)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,re_com.box.flex_child_style("none"),cljs.core.cst$kw$role,"tabslist"], null),attr], 0)),(function (){var iter__4523__auto__ = ((function (current,tabs__$1,_,map__19058,map__19058__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_){
return (function re_com$tabs$iter__19060(s__19061){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__19058,map__19058__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_){
return (function (){
var s__19061__$1 = s__19061;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__19061__$1);
if(temp__5720__auto__){
var s__19061__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19061__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__19061__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__19063 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__19062 = (0);
while(true){
if((i__19062 < size__4522__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__19062);
cljs.core.chunk_append(b__19063,(function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,((selected_QMARK_)?"active":""),cljs.core.cst$kw$key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),style], 0)),cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(on_change)?((function (i__19062,id,label,selected_QMARK_,t,c__4521__auto__,size__4522__auto__,b__19063,s__19061__$2,temp__5720__auto__,current,tabs__$1,_,map__19058,map__19058__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(i__19062,id,label,selected_QMARK_,t,c__4521__auto__,size__4522__auto__,b__19063,s__19061__$2,temp__5720__auto__,current,tabs__$1,_,map__19058,map__19058__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_))
:null)], null),label], null)], null);
})());

var G__19067 = (i__19062 + (1));
i__19062 = G__19067;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19063),re_com$tabs$iter__19060(cljs.core.chunk_rest(s__19061__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19063),null);
}
} else {
var t = cljs.core.first(s__19061__$2);
return cljs.core.cons((function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,((selected_QMARK_)?"active":""),cljs.core.cst$kw$key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),style], 0)),cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__19061__$2,temp__5720__auto__,current,tabs__$1,_,map__19058,map__19058__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(id,label,selected_QMARK_,t,s__19061__$2,temp__5720__auto__,current,tabs__$1,_,map__19058,map__19058__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_))
:null)], null),label], null)], null);
})(),re_com$tabs$iter__19060(cljs.core.rest(s__19061__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__19058,map__19058__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_))
,null,null));
});})(current,tabs__$1,_,map__19058,map__19058__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_))
;
return iter__4523__auto__(tabs__$1);
})()], null);
});

re_com.tabs.pill_tabs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.tabs.pill_tabs.cljs$lang$applyTo = (function (seq19056){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19056));
});

re_com.tabs.horizontal_pill_tabs = (function re_com$tabs$horizontal_pill_tabs(var_args){
var args__4736__auto__ = [];
var len__4730__auto___19072 = arguments.length;
var i__4731__auto___19073 = (0);
while(true){
if((i__4731__auto___19073 < len__4730__auto___19072)){
args__4736__auto__.push((arguments[i__4731__auto___19073]));

var G__19074 = (i__4731__auto___19073 + (1));
i__4731__auto___19073 = G__19074;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__19069){
var map__19070 = p__19069;
var map__19070__$1 = (((((!((map__19070 == null))))?(((((map__19070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19070):map__19070);
var args = map__19070__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19070__$1,cljs.core.cst$kw$model);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19070__$1,cljs.core.cst$kw$tabs);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19070__$1,cljs.core.cst$kw$on_DASH_change);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19070__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19070__$1,cljs.core.cst$kw$class);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19070__$1,cljs.core.cst$kw$style);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19070__$1,cljs.core.cst$kw$attr);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19070__$1,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label);
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.tabs.tabs_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tabs"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$model,model,cljs.core.cst$kw$tabs,tabs,cljs.core.cst$kw$on_DASH_change,on_change,cljs.core.cst$kw$id_DASH_fn,id_fn,cljs.core.cst$kw$label_DASH_fn,label_fn,cljs.core.cst$kw$vertical_QMARK_,false,cljs.core.cst$kw$class,class$,cljs.core.cst$kw$style,style,cljs.core.cst$kw$attr,attr], 0));
});

re_com.tabs.horizontal_pill_tabs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.tabs.horizontal_pill_tabs.cljs$lang$applyTo = (function (seq19068){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19068));
});

re_com.tabs.vertical_pill_tabs = (function re_com$tabs$vertical_pill_tabs(var_args){
var args__4736__auto__ = [];
var len__4730__auto___19079 = arguments.length;
var i__4731__auto___19080 = (0);
while(true){
if((i__4731__auto___19080 < len__4730__auto___19079)){
args__4736__auto__.push((arguments[i__4731__auto___19080]));

var G__19081 = (i__4731__auto___19080 + (1));
i__4731__auto___19080 = G__19081;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__19076){
var map__19077 = p__19076;
var map__19077__$1 = (((((!((map__19077 == null))))?(((((map__19077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19077):map__19077);
var args = map__19077__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19077__$1,cljs.core.cst$kw$model);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19077__$1,cljs.core.cst$kw$tabs);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19077__$1,cljs.core.cst$kw$on_DASH_change);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19077__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19077__$1,cljs.core.cst$kw$class);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19077__$1,cljs.core.cst$kw$style);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19077__$1,cljs.core.cst$kw$attr);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19077__$1,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label);
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.tabs.tabs_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tabs"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$model,model,cljs.core.cst$kw$tabs,tabs,cljs.core.cst$kw$on_DASH_change,on_change,cljs.core.cst$kw$id_DASH_fn,id_fn,cljs.core.cst$kw$label_DASH_fn,label_fn,cljs.core.cst$kw$vertical_QMARK_,true,cljs.core.cst$kw$class,class$,cljs.core.cst$kw$style,style,cljs.core.cst$kw$attr,attr], 0));
});

re_com.tabs.vertical_pill_tabs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.tabs.vertical_pill_tabs.cljs$lang$applyTo = (function (seq19075){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19075));
});

