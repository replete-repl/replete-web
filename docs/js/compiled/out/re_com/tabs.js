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
var len__4730__auto___18135 = arguments.length;
var i__4731__auto___18136 = (0);
while(true){
if((i__4731__auto___18136 < len__4730__auto___18135)){
args__4736__auto__.push((arguments[i__4731__auto___18136]));

var G__18137 = (i__4731__auto___18136 + (1));
i__4731__auto___18136 = G__18137;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__18128){
var map__18129 = p__18128;
var map__18129__$1 = (((((!((map__18129 == null))))?(((((map__18129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18129):map__18129);
var args = map__18129__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18129__$1,cljs.core.cst$kw$model);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18129__$1,cljs.core.cst$kw$tabs);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18129__$1,cljs.core.cst$kw$on_DASH_change);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18129__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18129__$1,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18129__$1,cljs.core.cst$kw$class);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18129__$1,cljs.core.cst$kw$style);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18129__$1,cljs.core.cst$kw$attr);
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.tabs.tabs_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tabs"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

var current = re_com.util.deref_or_value(model);
var tabs__$1 = re_com.util.deref_or_value(tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (current,tabs__$1,map__18129,map__18129__$1,args,model,tabs,on_change,id_fn,label_fn,class$,style,attr){
return (function (p1__18126_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__18126_SHARP_) : id_fn.call(null,p1__18126_SHARP_)));
});})(current,tabs__$1,map__18129,map__18129__$1,args,model,tabs,on_change,id_fn,label_fn,class$,style,attr))
,tabs__$1)))?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(not-empty (filter (fn* [p1__18126#] (= current (id-fn p1__18126#))) tabs))"].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-tabs nav nav-tabs noselect ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,re_com.box.flex_child_style("none")], null),attr], 0)),(function (){var iter__4523__auto__ = ((function (current,tabs__$1,_,map__18129,map__18129__$1,args,model,tabs,on_change,id_fn,label_fn,class$,style,attr){
return (function re_com$tabs$iter__18131(s__18132){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__18129,map__18129__$1,args,model,tabs,on_change,id_fn,label_fn,class$,style,attr){
return (function (){
var s__18132__$1 = s__18132;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__18132__$1);
if(temp__5720__auto__){
var s__18132__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18132__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__18132__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__18134 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__18133 = (0);
while(true){
if((i__18133 < size__4522__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__18133);
cljs.core.chunk_append(b__18134,(function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,((selected_QMARK_)?"active":null),cljs.core.cst$kw$key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),style], 0)),cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(on_change)?((function (i__18133,id,label,selected_QMARK_,t,c__4521__auto__,size__4522__auto__,b__18134,s__18132__$2,temp__5720__auto__,current,tabs__$1,_,map__18129,map__18129__$1,args,model,tabs,on_change,id_fn,label_fn,class$,style,attr){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(i__18133,id,label,selected_QMARK_,t,c__4521__auto__,size__4522__auto__,b__18134,s__18132__$2,temp__5720__auto__,current,tabs__$1,_,map__18129,map__18129__$1,args,model,tabs,on_change,id_fn,label_fn,class$,style,attr))
:null)], null),label], null)], null);
})());

var G__18138 = (i__18133 + (1));
i__18133 = G__18138;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18134),re_com$tabs$iter__18131(cljs.core.chunk_rest(s__18132__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18134),null);
}
} else {
var t = cljs.core.first(s__18132__$2);
return cljs.core.cons((function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,((selected_QMARK_)?"active":null),cljs.core.cst$kw$key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),style], 0)),cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__18132__$2,temp__5720__auto__,current,tabs__$1,_,map__18129,map__18129__$1,args,model,tabs,on_change,id_fn,label_fn,class$,style,attr){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(id,label,selected_QMARK_,t,s__18132__$2,temp__5720__auto__,current,tabs__$1,_,map__18129,map__18129__$1,args,model,tabs,on_change,id_fn,label_fn,class$,style,attr))
:null)], null),label], null)], null);
})(),re_com$tabs$iter__18131(cljs.core.rest(s__18132__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__18129,map__18129__$1,args,model,tabs,on_change,id_fn,label_fn,class$,style,attr))
,null,null));
});})(current,tabs__$1,_,map__18129,map__18129__$1,args,model,tabs,on_change,id_fn,label_fn,class$,style,attr))
;
return iter__4523__auto__(tabs__$1);
})()], null);
});

re_com.tabs.horizontal_tabs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.tabs.horizontal_tabs.cljs$lang$applyTo = (function (seq18127){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18127));
});

re_com.tabs.bar_tabs = (function re_com$tabs$bar_tabs(var_args){
var args__4736__auto__ = [];
var len__4730__auto___18148 = arguments.length;
var i__4731__auto___18149 = (0);
while(true){
if((i__4731__auto___18149 < len__4730__auto___18148)){
args__4736__auto__.push((arguments[i__4731__auto___18149]));

var G__18150 = (i__4731__auto___18149 + (1));
i__4731__auto___18149 = G__18150;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__18141){
var map__18142 = p__18141;
var map__18142__$1 = (((((!((map__18142 == null))))?(((((map__18142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18142):map__18142);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18142__$1,cljs.core.cst$kw$on_DASH_change);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18142__$1,cljs.core.cst$kw$model);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18142__$1,cljs.core.cst$kw$attr);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18142__$1,cljs.core.cst$kw$label_DASH_fn);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18142__$1,cljs.core.cst$kw$tabs);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18142__$1,cljs.core.cst$kw$id_DASH_fn);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18142__$1,cljs.core.cst$kw$style);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18142__$1,cljs.core.cst$kw$class);
var vertical_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18142__$1,cljs.core.cst$kw$vertical_QMARK_);
var current = re_com.util.deref_or_value(model);
var tabs__$1 = re_com.util.deref_or_value(tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (current,tabs__$1,map__18142,map__18142__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_){
return (function (p1__18139_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__18139_SHARP_) : id_fn.call(null,p1__18139_SHARP_)));
});})(current,tabs__$1,map__18142,map__18142__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_))
,tabs__$1)))?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(not-empty (filter (fn* [p1__18139#] (= current (id-fn p1__18139#))) tabs))"].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-tabs noselect btn-group",(cljs.core.truth_(vertical_QMARK_)?"-vertical":null)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,re_com.box.flex_child_style("none")], null),attr], 0)),(function (){var iter__4523__auto__ = ((function (current,tabs__$1,_,map__18142,map__18142__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_){
return (function re_com$tabs$iter__18144(s__18145){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__18142,map__18142__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_){
return (function (){
var s__18145__$1 = s__18145;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__18145__$1);
if(temp__5720__auto__){
var s__18145__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18145__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__18145__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__18147 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__18146 = (0);
while(true){
if((i__18146 < size__4522__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__18146);
cljs.core.chunk_append(b__18147,(function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.cst$kw$class,["btn btn-default ",((selected_QMARK_)?"active":null)].join(''),cljs.core.cst$kw$style,style,cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(on_change)?((function (i__18146,id,label,selected_QMARK_,t,c__4521__auto__,size__4522__auto__,b__18147,s__18145__$2,temp__5720__auto__,current,tabs__$1,_,map__18142,map__18142__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(i__18146,id,label,selected_QMARK_,t,c__4521__auto__,size__4522__auto__,b__18147,s__18145__$2,temp__5720__auto__,current,tabs__$1,_,map__18142,map__18142__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_))
:null)], null),label], null);
})());

var G__18151 = (i__18146 + (1));
i__18146 = G__18151;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18147),re_com$tabs$iter__18144(cljs.core.chunk_rest(s__18145__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18147),null);
}
} else {
var t = cljs.core.first(s__18145__$2);
return cljs.core.cons((function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.cst$kw$class,["btn btn-default ",((selected_QMARK_)?"active":null)].join(''),cljs.core.cst$kw$style,style,cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__18145__$2,temp__5720__auto__,current,tabs__$1,_,map__18142,map__18142__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(id,label,selected_QMARK_,t,s__18145__$2,temp__5720__auto__,current,tabs__$1,_,map__18142,map__18142__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_))
:null)], null),label], null);
})(),re_com$tabs$iter__18144(cljs.core.rest(s__18145__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__18142,map__18142__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_))
,null,null));
});})(current,tabs__$1,_,map__18142,map__18142__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_))
;
return iter__4523__auto__(tabs__$1);
})()], null);
});

re_com.tabs.bar_tabs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.tabs.bar_tabs.cljs$lang$applyTo = (function (seq18140){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18140));
});

re_com.tabs.horizontal_bar_tabs = (function re_com$tabs$horizontal_bar_tabs(var_args){
var args__4736__auto__ = [];
var len__4730__auto___18156 = arguments.length;
var i__4731__auto___18157 = (0);
while(true){
if((i__4731__auto___18157 < len__4730__auto___18156)){
args__4736__auto__.push((arguments[i__4731__auto___18157]));

var G__18158 = (i__4731__auto___18157 + (1));
i__4731__auto___18157 = G__18158;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__18153){
var map__18154 = p__18153;
var map__18154__$1 = (((((!((map__18154 == null))))?(((((map__18154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18154):map__18154);
var args = map__18154__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18154__$1,cljs.core.cst$kw$model);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18154__$1,cljs.core.cst$kw$tabs);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18154__$1,cljs.core.cst$kw$on_DASH_change);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18154__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18154__$1,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18154__$1,cljs.core.cst$kw$class);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18154__$1,cljs.core.cst$kw$style);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18154__$1,cljs.core.cst$kw$attr);
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.tabs.tabs_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tabs"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$model,model,cljs.core.cst$kw$tabs,tabs,cljs.core.cst$kw$on_DASH_change,on_change,cljs.core.cst$kw$id_DASH_fn,id_fn,cljs.core.cst$kw$label_DASH_fn,label_fn,cljs.core.cst$kw$vertical_QMARK_,false,cljs.core.cst$kw$class,class$,cljs.core.cst$kw$style,style,cljs.core.cst$kw$attr,attr], 0));
});

re_com.tabs.horizontal_bar_tabs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.tabs.horizontal_bar_tabs.cljs$lang$applyTo = (function (seq18152){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18152));
});

re_com.tabs.vertical_bar_tabs = (function re_com$tabs$vertical_bar_tabs(var_args){
var args__4736__auto__ = [];
var len__4730__auto___18163 = arguments.length;
var i__4731__auto___18164 = (0);
while(true){
if((i__4731__auto___18164 < len__4730__auto___18163)){
args__4736__auto__.push((arguments[i__4731__auto___18164]));

var G__18165 = (i__4731__auto___18164 + (1));
i__4731__auto___18164 = G__18165;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__18160){
var map__18161 = p__18160;
var map__18161__$1 = (((((!((map__18161 == null))))?(((((map__18161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18161):map__18161);
var args = map__18161__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18161__$1,cljs.core.cst$kw$model);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18161__$1,cljs.core.cst$kw$tabs);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18161__$1,cljs.core.cst$kw$on_DASH_change);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18161__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18161__$1,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18161__$1,cljs.core.cst$kw$class);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18161__$1,cljs.core.cst$kw$style);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18161__$1,cljs.core.cst$kw$attr);
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.tabs.tabs_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tabs"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$model,model,cljs.core.cst$kw$tabs,tabs,cljs.core.cst$kw$on_DASH_change,on_change,cljs.core.cst$kw$id_DASH_fn,id_fn,cljs.core.cst$kw$label_DASH_fn,label_fn,cljs.core.cst$kw$vertical_QMARK_,true,cljs.core.cst$kw$class,class$,cljs.core.cst$kw$style,style,cljs.core.cst$kw$attr,attr], 0));
});

re_com.tabs.vertical_bar_tabs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.tabs.vertical_bar_tabs.cljs$lang$applyTo = (function (seq18159){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18159));
});

re_com.tabs.pill_tabs = (function re_com$tabs$pill_tabs(var_args){
var args__4736__auto__ = [];
var len__4730__auto___18175 = arguments.length;
var i__4731__auto___18176 = (0);
while(true){
if((i__4731__auto___18176 < len__4730__auto___18175)){
args__4736__auto__.push((arguments[i__4731__auto___18176]));

var G__18177 = (i__4731__auto___18176 + (1));
i__4731__auto___18176 = G__18177;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__18168){
var map__18169 = p__18168;
var map__18169__$1 = (((((!((map__18169 == null))))?(((((map__18169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18169):map__18169);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18169__$1,cljs.core.cst$kw$on_DASH_change);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18169__$1,cljs.core.cst$kw$model);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18169__$1,cljs.core.cst$kw$attr);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18169__$1,cljs.core.cst$kw$label_DASH_fn);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18169__$1,cljs.core.cst$kw$tabs);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18169__$1,cljs.core.cst$kw$id_DASH_fn);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18169__$1,cljs.core.cst$kw$style);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18169__$1,cljs.core.cst$kw$class);
var vertical_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18169__$1,cljs.core.cst$kw$vertical_QMARK_);
var current = re_com.util.deref_or_value(model);
var tabs__$1 = re_com.util.deref_or_value(tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (current,tabs__$1,map__18169,map__18169__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_){
return (function (p1__18166_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__18166_SHARP_) : id_fn.call(null,p1__18166_SHARP_)));
});})(current,tabs__$1,map__18169,map__18169__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_))
,tabs__$1)))?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(not-empty (filter (fn* [p1__18166#] (= current (id-fn p1__18166#))) tabs))"].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["rc-tabs noselect nav nav-pills",(cljs.core.truth_(vertical_QMARK_)?" nav-stacked":null)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,re_com.box.flex_child_style("none"),cljs.core.cst$kw$role,"tabslist"], null),attr], 0)),(function (){var iter__4523__auto__ = ((function (current,tabs__$1,_,map__18169,map__18169__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_){
return (function re_com$tabs$iter__18171(s__18172){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__18169,map__18169__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_){
return (function (){
var s__18172__$1 = s__18172;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__18172__$1);
if(temp__5720__auto__){
var s__18172__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18172__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__18172__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__18174 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__18173 = (0);
while(true){
if((i__18173 < size__4522__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__18173);
cljs.core.chunk_append(b__18174,(function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,((selected_QMARK_)?"active":""),cljs.core.cst$kw$key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),style], 0)),cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(on_change)?((function (i__18173,id,label,selected_QMARK_,t,c__4521__auto__,size__4522__auto__,b__18174,s__18172__$2,temp__5720__auto__,current,tabs__$1,_,map__18169,map__18169__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(i__18173,id,label,selected_QMARK_,t,c__4521__auto__,size__4522__auto__,b__18174,s__18172__$2,temp__5720__auto__,current,tabs__$1,_,map__18169,map__18169__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_))
:null)], null),label], null)], null);
})());

var G__18178 = (i__18173 + (1));
i__18173 = G__18178;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18174),re_com$tabs$iter__18171(cljs.core.chunk_rest(s__18172__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18174),null);
}
} else {
var t = cljs.core.first(s__18172__$2);
return cljs.core.cons((function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,((selected_QMARK_)?"active":""),cljs.core.cst$kw$key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),style], 0)),cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__18172__$2,temp__5720__auto__,current,tabs__$1,_,map__18169,map__18169__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(id,label,selected_QMARK_,t,s__18172__$2,temp__5720__auto__,current,tabs__$1,_,map__18169,map__18169__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_))
:null)], null),label], null)], null);
})(),re_com$tabs$iter__18171(cljs.core.rest(s__18172__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__18169,map__18169__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_))
,null,null));
});})(current,tabs__$1,_,map__18169,map__18169__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_))
;
return iter__4523__auto__(tabs__$1);
})()], null);
});

re_com.tabs.pill_tabs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.tabs.pill_tabs.cljs$lang$applyTo = (function (seq18167){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18167));
});

re_com.tabs.horizontal_pill_tabs = (function re_com$tabs$horizontal_pill_tabs(var_args){
var args__4736__auto__ = [];
var len__4730__auto___18183 = arguments.length;
var i__4731__auto___18184 = (0);
while(true){
if((i__4731__auto___18184 < len__4730__auto___18183)){
args__4736__auto__.push((arguments[i__4731__auto___18184]));

var G__18185 = (i__4731__auto___18184 + (1));
i__4731__auto___18184 = G__18185;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__18180){
var map__18181 = p__18180;
var map__18181__$1 = (((((!((map__18181 == null))))?(((((map__18181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18181):map__18181);
var args = map__18181__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18181__$1,cljs.core.cst$kw$model);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18181__$1,cljs.core.cst$kw$tabs);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18181__$1,cljs.core.cst$kw$on_DASH_change);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18181__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18181__$1,cljs.core.cst$kw$class);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18181__$1,cljs.core.cst$kw$style);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18181__$1,cljs.core.cst$kw$attr);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18181__$1,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label);
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.tabs.tabs_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tabs"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$model,model,cljs.core.cst$kw$tabs,tabs,cljs.core.cst$kw$on_DASH_change,on_change,cljs.core.cst$kw$id_DASH_fn,id_fn,cljs.core.cst$kw$label_DASH_fn,label_fn,cljs.core.cst$kw$vertical_QMARK_,false,cljs.core.cst$kw$class,class$,cljs.core.cst$kw$style,style,cljs.core.cst$kw$attr,attr], 0));
});

re_com.tabs.horizontal_pill_tabs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.tabs.horizontal_pill_tabs.cljs$lang$applyTo = (function (seq18179){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18179));
});

re_com.tabs.vertical_pill_tabs = (function re_com$tabs$vertical_pill_tabs(var_args){
var args__4736__auto__ = [];
var len__4730__auto___18190 = arguments.length;
var i__4731__auto___18191 = (0);
while(true){
if((i__4731__auto___18191 < len__4730__auto___18190)){
args__4736__auto__.push((arguments[i__4731__auto___18191]));

var G__18192 = (i__4731__auto___18191 + (1));
i__4731__auto___18191 = G__18192;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__18187){
var map__18188 = p__18187;
var map__18188__$1 = (((((!((map__18188 == null))))?(((((map__18188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18188):map__18188);
var args = map__18188__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18188__$1,cljs.core.cst$kw$model);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18188__$1,cljs.core.cst$kw$tabs);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18188__$1,cljs.core.cst$kw$on_DASH_change);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18188__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18188__$1,cljs.core.cst$kw$class);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18188__$1,cljs.core.cst$kw$style);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18188__$1,cljs.core.cst$kw$attr);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18188__$1,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label);
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.tabs.tabs_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tabs"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$model,model,cljs.core.cst$kw$tabs,tabs,cljs.core.cst$kw$on_DASH_change,on_change,cljs.core.cst$kw$id_DASH_fn,id_fn,cljs.core.cst$kw$label_DASH_fn,label_fn,cljs.core.cst$kw$vertical_QMARK_,true,cljs.core.cst$kw$class,class$,cljs.core.cst$kw$style,style,cljs.core.cst$kw$attr,attr], 0));
});

re_com.tabs.vertical_pill_tabs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.tabs.vertical_pill_tabs.cljs$lang$applyTo = (function (seq18186){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18186));
});

