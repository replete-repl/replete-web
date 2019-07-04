// Compiled by ClojureScript 1.10.520 {}
goog.provide('fipp.engine');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('fipp.deque');
if((typeof fipp !== 'undefined') && (typeof fipp.engine !== 'undefined') && (typeof fipp.engine.serialize_node !== 'undefined')){
} else {
fipp.engine.serialize_node = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"fipp.engine","serialize-node"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
fipp.engine.serialize = (function fipp$engine$serialize(doc){
if((doc == null)){
return null;
} else {
if(cljs.core.seq_QMARK_.call(null,doc)){
return cljs.core.mapcat.call(null,fipp.engine.serialize,doc);
} else {
if(typeof doc === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697),doc], null)], null);
} else {
if((doc instanceof cljs.core.Keyword)){
return fipp.engine.serialize_node.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null));
} else {
if(cljs.core.vector_QMARK_.call(null,doc)){
return fipp.engine.serialize_node.call(null,doc);
} else {
throw cljs.core.ex_info.call(null,"Unexpected class for doc node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),doc], null));

}
}
}
}
}
});
<<<<<<< HEAD:docs/js/compiled/worker-out/fipp/engine.js
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"text","text",-1790561697),(function (p__14759){
var vec__14760 = p__14759;
var seq__14761 = cljs.core.seq.call(null,vec__14760);
var first__14762 = cljs.core.first.call(null,seq__14761);
var seq__14761__$1 = cljs.core.next.call(null,seq__14761);
var _ = first__14762;
var text = seq__14761__$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.apply.call(null,cljs.core.str,text)], null)], null);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (p__14763){
var vec__14764 = p__14763;
var seq__14765 = cljs.core.seq.call(null,vec__14764);
var first__14766 = cljs.core.first.call(null,seq__14765);
var seq__14765__$1 = cljs.core.next.call(null,seq__14765);
var _ = first__14766;
var text = seq__14765__$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.apply.call(null,cljs.core.str,text)], null)], null);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"escaped","escaped",-1007929769),(function (p__14767){
var vec__14768 = p__14767;
var _ = cljs.core.nth.call(null,vec__14768,(0),null);
var text = cljs.core.nth.call(null,vec__14768,(1),null);
=======
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"text","text",-1790561697),(function (p__18978){
var vec__18979 = p__18978;
var seq__18980 = cljs.core.seq.call(null,vec__18979);
var first__18981 = cljs.core.first.call(null,seq__18980);
var seq__18980__$1 = cljs.core.next.call(null,seq__18980);
var _ = first__18981;
var text = seq__18980__$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.apply.call(null,cljs.core.str,text)], null)], null);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (p__18982){
var vec__18983 = p__18982;
var seq__18984 = cljs.core.seq.call(null,vec__18983);
var first__18985 = cljs.core.first.call(null,seq__18984);
var seq__18984__$1 = cljs.core.next.call(null,seq__18984);
var _ = first__18985;
var text = seq__18984__$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.apply.call(null,cljs.core.str,text)], null)], null);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"escaped","escaped",-1007929769),(function (p__18986){
var vec__18987 = p__18986;
var _ = cljs.core.nth.call(null,vec__18987,(0),null);
var text = cljs.core.nth.call(null,vec__18987,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/fipp/engine.js
if(typeof text === 'string'){
} else {
throw (new Error("Assert failed: (string? text)"));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"escaped","escaped",-1007929769),new cljs.core.Keyword(null,"text","text",-1790561697),text], null)], null);
}));
<<<<<<< HEAD:docs/js/compiled/worker-out/fipp/engine.js
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"span","span",1394872991),(function (p__14771){
var vec__14772 = p__14771;
var seq__14773 = cljs.core.seq.call(null,vec__14772);
var first__14774 = cljs.core.first.call(null,seq__14773);
var seq__14773__$1 = cljs.core.next.call(null,seq__14773);
var _ = first__14774;
var children = seq__14773__$1;
return fipp.engine.serialize.call(null,children);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"line","line",212345235),(function (p__14775){
var vec__14776 = p__14775;
var _ = cljs.core.nth.call(null,vec__14776,(0),null);
var inline = cljs.core.nth.call(null,vec__14776,(1),null);
var terminate = cljs.core.nth.call(null,vec__14776,(2),null);
=======
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"span","span",1394872991),(function (p__18990){
var vec__18991 = p__18990;
var seq__18992 = cljs.core.seq.call(null,vec__18991);
var first__18993 = cljs.core.first.call(null,seq__18992);
var seq__18992__$1 = cljs.core.next.call(null,seq__18992);
var _ = first__18993;
var children = seq__18992__$1;
return fipp.engine.serialize.call(null,children);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"line","line",212345235),(function (p__18994){
var vec__18995 = p__18994;
var _ = cljs.core.nth.call(null,vec__18995,(0),null);
var inline = cljs.core.nth.call(null,vec__18995,(1),null);
var terminate = cljs.core.nth.call(null,vec__18995,(2),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/fipp/engine.js
var inline__$1 = (function (){var or__4131__auto__ = inline;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return " ";
}
})();
var terminate__$1 = (function (){var or__4131__auto__ = terminate;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})();
if(typeof inline__$1 === 'string'){
} else {
throw (new Error("Assert failed: (string? inline)"));
}

if(typeof terminate__$1 === 'string'){
} else {
throw (new Error("Assert failed: (string? terminate)"));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"inline","inline",1399884222),inline__$1,new cljs.core.Keyword(null,"terminate","terminate",1256003496),terminate__$1], null)], null);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"break","break",126570225),(function() { 
<<<<<<< HEAD:docs/js/compiled/worker-out/fipp/engine.js
var G__14779__delegate = function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"break","break",126570225)], null)], null);
};
var G__14779 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__14780__i = 0, G__14780__a = new Array(arguments.length -  0);
while (G__14780__i < G__14780__a.length) {G__14780__a[G__14780__i] = arguments[G__14780__i + 0]; ++G__14780__i;}
  _ = new cljs.core.IndexedSeq(G__14780__a,0,null);
} 
return G__14779__delegate.call(this,_);};
G__14779.cljs$lang$maxFixedArity = 0;
G__14779.cljs$lang$applyTo = (function (arglist__14781){
var _ = cljs.core.seq(arglist__14781);
return G__14779__delegate(_);
});
G__14779.cljs$core$IFn$_invoke$arity$variadic = G__14779__delegate;
return G__14779;
})()
);
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"group","group",582596132),(function (p__14782){
var vec__14783 = p__14782;
var seq__14784 = cljs.core.seq.call(null,vec__14783);
var first__14785 = cljs.core.first.call(null,seq__14784);
var seq__14784__$1 = cljs.core.next.call(null,seq__14784);
var _ = first__14785;
var children = seq__14784__$1;
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"begin","begin",-319034319)], null)], null),fipp.engine.serialize.call(null,children),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"end","end",-268185958)], null)], null));
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"nest","nest",-314993663),(function (p__14786){
var vec__14787 = p__14786;
var seq__14788 = cljs.core.seq.call(null,vec__14787);
var first__14789 = cljs.core.first.call(null,seq__14788);
var seq__14788__$1 = cljs.core.next.call(null,seq__14788);
var _ = first__14789;
var args = seq__14788__$1;
var vec__14790 = ((typeof cljs.core.first.call(null,args) === 'number')?args:cljs.core.cons.call(null,(2),args));
var seq__14791 = cljs.core.seq.call(null,vec__14790);
var first__14792 = cljs.core.first.call(null,seq__14791);
var seq__14791__$1 = cljs.core.next.call(null,seq__14791);
var offset = first__14792;
var children = seq__14791__$1;
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"nest","nest",-314993663),new cljs.core.Keyword(null,"offset","offset",296498311),offset], null)], null),fipp.engine.serialize.call(null,children),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"outdent","outdent",467209411)], null)], null));
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"align","align",1964212802),(function (p__14793){
var vec__14794 = p__14793;
var seq__14795 = cljs.core.seq.call(null,vec__14794);
var first__14796 = cljs.core.first.call(null,seq__14795);
var seq__14795__$1 = cljs.core.next.call(null,seq__14795);
var _ = first__14796;
var args = seq__14795__$1;
var vec__14797 = ((typeof cljs.core.first.call(null,args) === 'number')?args:cljs.core.cons.call(null,(0),args));
var seq__14798 = cljs.core.seq.call(null,vec__14797);
var first__14799 = cljs.core.first.call(null,seq__14798);
var seq__14798__$1 = cljs.core.next.call(null,seq__14798);
var offset = first__14799;
var children = seq__14798__$1;
=======
var G__18998__delegate = function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"break","break",126570225)], null)], null);
};
var G__18998 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__18999__i = 0, G__18999__a = new Array(arguments.length -  0);
while (G__18999__i < G__18999__a.length) {G__18999__a[G__18999__i] = arguments[G__18999__i + 0]; ++G__18999__i;}
  _ = new cljs.core.IndexedSeq(G__18999__a,0,null);
} 
return G__18998__delegate.call(this,_);};
G__18998.cljs$lang$maxFixedArity = 0;
G__18998.cljs$lang$applyTo = (function (arglist__19000){
var _ = cljs.core.seq(arglist__19000);
return G__18998__delegate(_);
});
G__18998.cljs$core$IFn$_invoke$arity$variadic = G__18998__delegate;
return G__18998;
})()
);
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"group","group",582596132),(function (p__19001){
var vec__19002 = p__19001;
var seq__19003 = cljs.core.seq.call(null,vec__19002);
var first__19004 = cljs.core.first.call(null,seq__19003);
var seq__19003__$1 = cljs.core.next.call(null,seq__19003);
var _ = first__19004;
var children = seq__19003__$1;
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"begin","begin",-319034319)], null)], null),fipp.engine.serialize.call(null,children),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"end","end",-268185958)], null)], null));
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"nest","nest",-314993663),(function (p__19005){
var vec__19006 = p__19005;
var seq__19007 = cljs.core.seq.call(null,vec__19006);
var first__19008 = cljs.core.first.call(null,seq__19007);
var seq__19007__$1 = cljs.core.next.call(null,seq__19007);
var _ = first__19008;
var args = seq__19007__$1;
var vec__19009 = ((typeof cljs.core.first.call(null,args) === 'number')?args:cljs.core.cons.call(null,(2),args));
var seq__19010 = cljs.core.seq.call(null,vec__19009);
var first__19011 = cljs.core.first.call(null,seq__19010);
var seq__19010__$1 = cljs.core.next.call(null,seq__19010);
var offset = first__19011;
var children = seq__19010__$1;
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"nest","nest",-314993663),new cljs.core.Keyword(null,"offset","offset",296498311),offset], null)], null),fipp.engine.serialize.call(null,children),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"outdent","outdent",467209411)], null)], null));
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"align","align",1964212802),(function (p__19012){
var vec__19013 = p__19012;
var seq__19014 = cljs.core.seq.call(null,vec__19013);
var first__19015 = cljs.core.first.call(null,seq__19014);
var seq__19014__$1 = cljs.core.next.call(null,seq__19014);
var _ = first__19015;
var args = seq__19014__$1;
var vec__19016 = ((typeof cljs.core.first.call(null,args) === 'number')?args:cljs.core.cons.call(null,(0),args));
var seq__19017 = cljs.core.seq.call(null,vec__19016);
var first__19018 = cljs.core.first.call(null,seq__19017);
var seq__19017__$1 = cljs.core.next.call(null,seq__19017);
var offset = first__19018;
var children = seq__19017__$1;
>>>>>>> :simple optimizations:docs/js/compiled/out/fipp/engine.js
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"offset","offset",296498311),offset], null)], null),fipp.engine.serialize.call(null,children),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"outdent","outdent",467209411)], null)], null));
}));
/**
 * A transducer which annotates the right-side of nodes assuming a
 *   hypothetical single-line formatting of the document. Groups and indentation
 *   directives are temporarily assumed to be zero-width. These values are used
 *   by subsequent passes to produce the final layout.
 */
fipp.engine.annotate_rights = (function fipp$engine$annotate_rights(rf){
var pos = cljs.core.volatile_BANG_.call(null,(0));
return ((function (pos){
return (function() {
<<<<<<< HEAD:docs/js/compiled/worker-out/fipp/engine.js
var G__14801 = null;
var G__14801__0 = (function (){
return rf.call(null);
});
var G__14801__1 = (function (res){
return rf.call(null,res);
});
var G__14801__2 = (function (res,node){
var delta = (function (){var G__14800 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(node);
var G__14800__$1 = (((G__14800 instanceof cljs.core.Keyword))?G__14800.fqn:null);
switch (G__14800__$1) {
=======
var G__19020 = null;
var G__19020__0 = (function (){
return rf.call(null);
});
var G__19020__1 = (function (res){
return rf.call(null,res);
});
var G__19020__2 = (function (res,node){
var delta = (function (){var G__19019 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(node);
var G__19019__$1 = (((G__19019 instanceof cljs.core.Keyword))?G__19019.fqn:null);
switch (G__19019__$1) {
>>>>>>> :simple optimizations:docs/js/compiled/out/fipp/engine.js
case "text":
return cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node));

break;
case "line":
return cljs.core.count.call(null,new cljs.core.Keyword(null,"inline","inline",1399884222).cljs$core$IFn$_invoke$arity$1(node));

break;
case "escaped":
return (1);

break;
default:
return (0);

}
})();
var p = cljs.core._vreset_BANG_.call(null,pos,(cljs.core._deref.call(null,pos) + delta));
return rf.call(null,res,cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"right","right",-452581833),p));
});
<<<<<<< HEAD:docs/js/compiled/worker-out/fipp/engine.js
G__14801 = function(res,node){
switch(arguments.length){
case 0:
return G__14801__0.call(this);
case 1:
return G__14801__1.call(this,res);
case 2:
return G__14801__2.call(this,res,node);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14801.cljs$core$IFn$_invoke$arity$0 = G__14801__0;
G__14801.cljs$core$IFn$_invoke$arity$1 = G__14801__1;
G__14801.cljs$core$IFn$_invoke$arity$2 = G__14801__2;
return G__14801;
=======
G__19020 = function(res,node){
switch(arguments.length){
case 0:
return G__19020__0.call(this);
case 1:
return G__19020__1.call(this,res);
case 2:
return G__19020__2.call(this,res,node);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19020.cljs$core$IFn$_invoke$arity$0 = G__19020__0;
G__19020.cljs$core$IFn$_invoke$arity$1 = G__19020__1;
G__19020.cljs$core$IFn$_invoke$arity$2 = G__19020__2;
return G__19020;
>>>>>>> :simple optimizations:docs/js/compiled/out/fipp/engine.js
})()
;})(pos))
});
fipp.engine.update_right = (function fipp$engine$update_right(var_args){
var args__4736__auto__ = [];
<<<<<<< HEAD:docs/js/compiled/worker-out/fipp/engine.js
var len__4730__auto___14806 = arguments.length;
var i__4731__auto___14807 = (0);
while(true){
if((i__4731__auto___14807 < len__4730__auto___14806)){
args__4736__auto__.push((arguments[i__4731__auto___14807]));

var G__14808 = (i__4731__auto___14807 + (1));
i__4731__auto___14807 = G__14808;
=======
var len__4730__auto___19025 = arguments.length;
var i__4731__auto___19026 = (0);
while(true){
if((i__4731__auto___19026 < len__4730__auto___19025)){
args__4736__auto__.push((arguments[i__4731__auto___19026]));

var G__19027 = (i__4731__auto___19026 + (1));
i__4731__auto___19026 = G__19027;
>>>>>>> :simple optimizations:docs/js/compiled/out/fipp/engine.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return fipp.engine.update_right.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

fipp.engine.update_right.cljs$core$IFn$_invoke$arity$variadic = (function (deque,f,args){
return fipp.deque.conjr.call(null,cljs.core.pop.call(null,deque),cljs.core.apply.call(null,f,cljs.core.peek.call(null,deque),args));
});

fipp.engine.update_right.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/fipp/engine.js
fipp.engine.update_right.cljs$lang$applyTo = (function (seq14803){
var G__14804 = cljs.core.first.call(null,seq14803);
var seq14803__$1 = cljs.core.next.call(null,seq14803);
var G__14805 = cljs.core.first.call(null,seq14803__$1);
var seq14803__$2 = cljs.core.next.call(null,seq14803__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14804,G__14805,seq14803__$2);
=======
fipp.engine.update_right.cljs$lang$applyTo = (function (seq19022){
var G__19023 = cljs.core.first.call(null,seq19022);
var seq19022__$1 = cljs.core.next.call(null,seq19022);
var G__19024 = cljs.core.first.call(null,seq19022__$1);
var seq19022__$2 = cljs.core.next.call(null,seq19022__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19023,G__19024,seq19022__$2);
>>>>>>> :simple optimizations:docs/js/compiled/out/fipp/engine.js
});

/**
 * Given printing options, returns a transducer which annotate the right-side
 *   of groups on their :begin nodes.  This includes the pruning algorithm which
 *   will annotate some :begin nodes as being :too-far to the right without
 *   calculating their exact sizes.
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/fipp/engine.js
fipp.engine.annotate_begins = (function fipp$engine$annotate_begins(p__14809){
var map__14810 = p__14809;
var map__14810__$1 = (((((!((map__14810 == null))))?(((((map__14810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14810):map__14810);
var options = map__14810__$1;
var width = cljs.core.get.call(null,map__14810__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return ((function (map__14810,map__14810__$1,options,width){
return (function (rf){
var pos = cljs.core.volatile_BANG_.call(null,(0));
var bufs = cljs.core.volatile_BANG_.call(null,fipp.deque.empty);
return ((function (pos,bufs,map__14810,map__14810__$1,options,width){
return (function() {
var G__14815 = null;
var G__14815__0 = (function (){
return rf.call(null);
});
var G__14815__1 = (function (res){
return rf.call(null,res);
});
var G__14815__2 = (function (res,p__14812){
var map__14813 = p__14812;
var map__14813__$1 = (((((!((map__14813 == null))))?(((((map__14813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14813):map__14813);
var node = map__14813__$1;
var op = cljs.core.get.call(null,map__14813__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var right = cljs.core.get.call(null,map__14813__$1,new cljs.core.Keyword(null,"right","right",-452581833));
=======
fipp.engine.annotate_begins = (function fipp$engine$annotate_begins(p__19028){
var map__19029 = p__19028;
var map__19029__$1 = (((((!((map__19029 == null))))?(((((map__19029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19029):map__19029);
var options = map__19029__$1;
var width = cljs.core.get.call(null,map__19029__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return ((function (map__19029,map__19029__$1,options,width){
return (function (rf){
var pos = cljs.core.volatile_BANG_.call(null,(0));
var bufs = cljs.core.volatile_BANG_.call(null,fipp.deque.empty);
return ((function (pos,bufs,map__19029,map__19029__$1,options,width){
return (function() {
var G__19034 = null;
var G__19034__0 = (function (){
return rf.call(null);
});
var G__19034__1 = (function (res){
return rf.call(null,res);
});
var G__19034__2 = (function (res,p__19031){
var map__19032 = p__19031;
var map__19032__$1 = (((((!((map__19032 == null))))?(((((map__19032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19032):map__19032);
var node = map__19032__$1;
var op = cljs.core.get.call(null,map__19032__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var right = cljs.core.get.call(null,map__19032__$1,new cljs.core.Keyword(null,"right","right",-452581833));
>>>>>>> :simple optimizations:docs/js/compiled/out/fipp/engine.js
var buffers = cljs.core.deref.call(null,bufs);
if(cljs.core.empty_QMARK_.call(null,buffers)){
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"begin","begin",-319034319))){
var position_STAR_ = (right + width);
var buffer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),position_STAR_,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),fipp.deque.empty], null);
cljs.core.vreset_BANG_.call(null,pos,position_STAR_);

cljs.core.vreset_BANG_.call(null,bufs,fipp.deque.create.call(null,buffer));

return res;
} else {
return rf.call(null,res,node);
}
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"end","end",-268185958))){
var buffer = cljs.core.peek.call(null,buffers);
var buffers_STAR_ = cljs.core.pop.call(null,buffers);
var begin = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.Keyword(null,"right","right",-452581833),right], null);
var nodes = fipp.deque.conjlr.call(null,begin,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(buffer),node);
if(cljs.core.empty_QMARK_.call(null,buffers_STAR_)){
cljs.core.vreset_BANG_.call(null,pos,(0));

cljs.core.vreset_BANG_.call(null,bufs,fipp.deque.empty);

return cljs.core.reduce.call(null,rf,res,nodes);
} else {
if(cljs.core.vector_QMARK_.call(null,buffers_STAR_)){
} else {
throw (new Error("Assert failed: (vector? buffers*)"));
}

if(cljs.core.vector_QMARK_.call(null,nodes)){
} else {
throw (new Error("Assert failed: (vector? nodes)"));
}

cljs.core.vreset_BANG_.call(null,bufs,fipp.engine.update_right.call(null,buffers_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),fipp.deque.concat,nodes));

return res;
}
} else {
var buffers_STAR_ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"begin","begin",-319034319)))?fipp.deque.conjr.call(null,buffers,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),(right + width),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),fipp.deque.empty], null)):fipp.engine.update_right.call(null,buffers,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),fipp.deque.conjr,node));
var res__$1 = res;
while(true){
if((((right <= cljs.core.deref.call(null,pos))) && ((cljs.core.count.call(null,buffers_STAR_) <= width)))){
cljs.core.vreset_BANG_.call(null,bufs,buffers_STAR_);

return res__$1;
} else {
var buffer = cljs.core.first.call(null,buffers_STAR_);
var buffers_STAR__STAR_ = fipp.deque.popl.call(null,buffers_STAR_);
var begin = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"too-far","too-far",85800617)], null);
var res_STAR_ = rf.call(null,res__$1,begin);
var res_STAR___$1 = cljs.core.reduce.call(null,rf,res_STAR_,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(buffer));
if(cljs.core.empty_QMARK_.call(null,buffers_STAR__STAR_)){
cljs.core.vreset_BANG_.call(null,pos,(0));

cljs.core.vreset_BANG_.call(null,bufs,fipp.deque.empty);

return res_STAR___$1;
} else {
cljs.core.vreset_BANG_.call(null,pos,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,buffers_STAR__STAR_)));

<<<<<<< HEAD:docs/js/compiled/worker-out/fipp/engine.js
var G__14816 = buffers_STAR__STAR_;
var G__14817 = res_STAR___$1;
buffers_STAR_ = G__14816;
res__$1 = G__14817;
=======
var G__19035 = buffers_STAR__STAR_;
var G__19036 = res_STAR___$1;
buffers_STAR_ = G__19035;
res__$1 = G__19036;
>>>>>>> :simple optimizations:docs/js/compiled/out/fipp/engine.js
continue;
}
}
break;
}
}
}
});
<<<<<<< HEAD:docs/js/compiled/worker-out/fipp/engine.js
G__14815 = function(res,p__14812){
switch(arguments.length){
case 0:
return G__14815__0.call(this);
case 1:
return G__14815__1.call(this,res);
case 2:
return G__14815__2.call(this,res,p__14812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14815.cljs$core$IFn$_invoke$arity$0 = G__14815__0;
G__14815.cljs$core$IFn$_invoke$arity$1 = G__14815__1;
G__14815.cljs$core$IFn$_invoke$arity$2 = G__14815__2;
return G__14815;
})()
;})(pos,bufs,map__14810,map__14810__$1,options,width))
});
;})(map__14810,map__14810__$1,options,width))
=======
G__19034 = function(res,p__19031){
switch(arguments.length){
case 0:
return G__19034__0.call(this);
case 1:
return G__19034__1.call(this,res);
case 2:
return G__19034__2.call(this,res,p__19031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19034.cljs$core$IFn$_invoke$arity$0 = G__19034__0;
G__19034.cljs$core$IFn$_invoke$arity$1 = G__19034__1;
G__19034.cljs$core$IFn$_invoke$arity$2 = G__19034__2;
return G__19034;
})()
;})(pos,bufs,map__19029,map__19029__$1,options,width))
});
;})(map__19029,map__19029__$1,options,width))
>>>>>>> :simple optimizations:docs/js/compiled/out/fipp/engine.js
});
/**
 * Given printing options, returns a transducer which produces the fully
 *   laid-out strings.
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/fipp/engine.js
fipp.engine.format_nodes = (function fipp$engine$format_nodes(p__14818){
var map__14819 = p__14818;
var map__14819__$1 = (((((!((map__14819 == null))))?(((((map__14819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14819):map__14819);
var options = map__14819__$1;
var width = cljs.core.get.call(null,map__14819__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return ((function (map__14819,map__14819__$1,options,width){
=======
fipp.engine.format_nodes = (function fipp$engine$format_nodes(p__19037){
var map__19038 = p__19037;
var map__19038__$1 = (((((!((map__19038 == null))))?(((((map__19038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19038):map__19038);
var options = map__19038__$1;
var width = cljs.core.get.call(null,map__19038__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return ((function (map__19038,map__19038__$1,options,width){
>>>>>>> :simple optimizations:docs/js/compiled/out/fipp/engine.js
return (function (rf){
var fits = cljs.core.volatile_BANG_.call(null,(0));
var length = cljs.core.volatile_BANG_.call(null,width);
var tab_stops = cljs.core.volatile_BANG_.call(null,cljs.core.list((0)));
var column = cljs.core.volatile_BANG_.call(null,(0));
<<<<<<< HEAD:docs/js/compiled/worker-out/fipp/engine.js
return ((function (fits,length,tab_stops,column,map__14819,map__14819__$1,options,width){
return (function() {
var G__14825 = null;
var G__14825__0 = (function (){
return rf.call(null);
});
var G__14825__1 = (function (res){
return rf.call(null,res);
});
var G__14825__2 = (function (res,p__14821){
var map__14822 = p__14821;
var map__14822__$1 = (((((!((map__14822 == null))))?(((((map__14822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14822):map__14822);
var node = map__14822__$1;
var op = cljs.core.get.call(null,map__14822__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var right = cljs.core.get.call(null,map__14822__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var indent = cljs.core.peek.call(null,cljs.core.deref.call(null,tab_stops));
var G__14824 = op;
var G__14824__$1 = (((G__14824 instanceof cljs.core.Keyword))?G__14824.fqn:null);
switch (G__14824__$1) {
=======
return ((function (fits,length,tab_stops,column,map__19038,map__19038__$1,options,width){
return (function() {
var G__19044 = null;
var G__19044__0 = (function (){
return rf.call(null);
});
var G__19044__1 = (function (res){
return rf.call(null,res);
});
var G__19044__2 = (function (res,p__19040){
var map__19041 = p__19040;
var map__19041__$1 = (((((!((map__19041 == null))))?(((((map__19041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19041):map__19041);
var node = map__19041__$1;
var op = cljs.core.get.call(null,map__19041__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var right = cljs.core.get.call(null,map__19041__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var indent = cljs.core.peek.call(null,cljs.core.deref.call(null,tab_stops));
var G__19043 = op;
var G__19043__$1 = (((G__19043 instanceof cljs.core.Keyword))?G__19043.fqn:null);
switch (G__19043__$1) {
>>>>>>> :simple optimizations:docs/js/compiled/out/fipp/engine.js
case "text":
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node);
var res_STAR_ = (((cljs.core.deref.call(null,column) === (0)))?(function (){
cljs.core._vreset_BANG_.call(null,column,(cljs.core._deref.call(null,column) + indent));

return rf.call(null,res,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,indent," ")));
})()
:res);
cljs.core._vreset_BANG_.call(null,column,(cljs.core._deref.call(null,column) + cljs.core.count.call(null,text)));

return rf.call(null,res_STAR_,text);

break;
case "escaped":
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node);
var res_STAR_ = (((cljs.core.deref.call(null,column) === (0)))?(function (){
cljs.core._vreset_BANG_.call(null,column,(cljs.core._deref.call(null,column) + indent));

return rf.call(null,res,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,indent," ")));
})()
:res);
cljs.core._vreset_BANG_.call(null,column,(cljs.core._deref.call(null,column) + (1)));

return rf.call(null,res_STAR_,text);

break;
case "pass":
return rf.call(null,res,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node));

break;
case "line":
if((cljs.core.deref.call(null,fits) === (0))){
cljs.core.vreset_BANG_.call(null,length,((right + width) - indent));

cljs.core.vreset_BANG_.call(null,column,(0));

return rf.call(null,res,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"terminate","terminate",1256003496).cljs$core$IFn$_invoke$arity$1(node)),"\n"].join(''));
} else {
var inline = new cljs.core.Keyword(null,"inline","inline",1399884222).cljs$core$IFn$_invoke$arity$1(node);
cljs.core._vreset_BANG_.call(null,column,(cljs.core._deref.call(null,column) + cljs.core.count.call(null,inline)));

return rf.call(null,res,inline);
}

break;
case "break":
cljs.core.vreset_BANG_.call(null,length,((right + width) - indent));

cljs.core.vreset_BANG_.call(null,column,(0));

return rf.call(null,res,"\n");

break;
case "nest":
cljs.core._vreset_BANG_.call(null,tab_stops,cljs.core.conj.call(null,cljs.core._deref.call(null,tab_stops),(indent + new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(node))));

return res;

break;
case "align":
cljs.core._vreset_BANG_.call(null,tab_stops,cljs.core.conj.call(null,cljs.core._deref.call(null,tab_stops),(cljs.core.deref.call(null,column) + new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(node))));

return res;

break;
case "outdent":
cljs.core._vreset_BANG_.call(null,tab_stops,cljs.core.pop.call(null,cljs.core._deref.call(null,tab_stops)));

return res;

break;
case "begin":
cljs.core.vreset_BANG_.call(null,fits,(((cljs.core.deref.call(null,fits) > (0)))?(cljs.core.deref.call(null,fits) + (1)):((cljs.core._EQ_.call(null,right,new cljs.core.Keyword(null,"too-far","too-far",85800617)))?(0):(((right <= cljs.core.deref.call(null,length)))?(1):(0)
))));

return res;

break;
case "end":
cljs.core.vreset_BANG_.call(null,fits,(function (){var x__4219__auto__ = (0);
var y__4220__auto__ = (cljs.core.deref.call(null,fits) - (1));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})());

return res;

break;
default:
throw cljs.core.ex_info.call(null,"Unexpected node op",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));

}
});
<<<<<<< HEAD:docs/js/compiled/worker-out/fipp/engine.js
G__14825 = function(res,p__14821){
switch(arguments.length){
case 0:
return G__14825__0.call(this);
case 1:
return G__14825__1.call(this,res);
case 2:
return G__14825__2.call(this,res,p__14821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14825.cljs$core$IFn$_invoke$arity$0 = G__14825__0;
G__14825.cljs$core$IFn$_invoke$arity$1 = G__14825__1;
G__14825.cljs$core$IFn$_invoke$arity$2 = G__14825__2;
return G__14825;
})()
;})(fits,length,tab_stops,column,map__14819,map__14819__$1,options,width))
});
;})(map__14819,map__14819__$1,options,width))
});
fipp.engine.pprint_document = (function fipp$engine$pprint_document(var_args){
var G__14828 = arguments.length;
switch (G__14828) {
=======
G__19044 = function(res,p__19040){
switch(arguments.length){
case 0:
return G__19044__0.call(this);
case 1:
return G__19044__1.call(this,res);
case 2:
return G__19044__2.call(this,res,p__19040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19044.cljs$core$IFn$_invoke$arity$0 = G__19044__0;
G__19044.cljs$core$IFn$_invoke$arity$1 = G__19044__1;
G__19044.cljs$core$IFn$_invoke$arity$2 = G__19044__2;
return G__19044;
})()
;})(fits,length,tab_stops,column,map__19038,map__19038__$1,options,width))
});
;})(map__19038,map__19038__$1,options,width))
});
fipp.engine.pprint_document = (function fipp$engine$pprint_document(var_args){
var G__19047 = arguments.length;
switch (G__19047) {
>>>>>>> :simple optimizations:docs/js/compiled/out/fipp/engine.js
case 1:
return fipp.engine.pprint_document.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fipp.engine.pprint_document.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fipp.engine.pprint_document.cljs$core$IFn$_invoke$arity$1 = (function (document){
return fipp.engine.pprint_document.call(null,document,cljs.core.PersistentArrayMap.EMPTY);
});

fipp.engine.pprint_document.cljs$core$IFn$_invoke$arity$2 = (function (document,options){
<<<<<<< HEAD:docs/js/compiled/worker-out/fipp/engine.js
var options_14830__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(70)], null),options);
cljs.core.run_BANG_.call(null,cljs.core.print,cljs.core.eduction.call(null,fipp.engine.annotate_rights,fipp.engine.annotate_begins.call(null,options_14830__$1),fipp.engine.format_nodes.call(null,options_14830__$1),fipp.engine.serialize.call(null,document)));
=======
var options_19049__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(70)], null),options);
cljs.core.run_BANG_.call(null,cljs.core.print,cljs.core.eduction.call(null,fipp.engine.annotate_rights,fipp.engine.annotate_begins.call(null,options_19049__$1),fipp.engine.format_nodes.call(null,options_19049__$1),fipp.engine.serialize.call(null,document)));
>>>>>>> :simple optimizations:docs/js/compiled/out/fipp/engine.js

return cljs.core.println.call(null);
});

fipp.engine.pprint_document.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=engine.js.map
