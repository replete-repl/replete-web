// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.imported !== 'undefined')){
} else {
reagent.dom.imported = null;
}
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode.call(null,container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__7279 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__7280 = true;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__7280;

try{return reagent.dom.global$module$react_dom.render.call(null,comp.call(null),container,((function (_STAR_always_update_STAR__orig_val__7279,_STAR_always_update_STAR__temp_val__7280){
return (function (){
var _STAR_always_update_STAR__orig_val__7281 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__7282 = false;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__7282;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__7281;
}});})(_STAR_always_update_STAR__orig_val__7279,_STAR_always_update_STAR__temp_val__7280))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__7279;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__7284 = arguments.length;
switch (G__7284) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode.call(null,this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__7286_7290 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__7287_7291 = null;
var count__7288_7292 = (0);
var i__7289_7293 = (0);
while(true){
if((i__7289_7293 < count__7288_7292)){
var v_7294 = cljs.core._nth.call(null,chunk__7287_7291,i__7289_7293);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_7294);


var G__7295 = seq__7286_7290;
var G__7296 = chunk__7287_7291;
var G__7297 = count__7288_7292;
var G__7298 = (i__7289_7293 + (1));
seq__7286_7290 = G__7295;
chunk__7287_7291 = G__7296;
count__7288_7292 = G__7297;
i__7289_7293 = G__7298;
continue;
} else {
var temp__5720__auto___7299 = cljs.core.seq.call(null,seq__7286_7290);
if(temp__5720__auto___7299){
var seq__7286_7300__$1 = temp__5720__auto___7299;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7286_7300__$1)){
var c__4550__auto___7301 = cljs.core.chunk_first.call(null,seq__7286_7300__$1);
var G__7302 = cljs.core.chunk_rest.call(null,seq__7286_7300__$1);
var G__7303 = c__4550__auto___7301;
var G__7304 = cljs.core.count.call(null,c__4550__auto___7301);
var G__7305 = (0);
seq__7286_7290 = G__7302;
chunk__7287_7291 = G__7303;
count__7288_7292 = G__7304;
i__7289_7293 = G__7305;
continue;
} else {
var v_7306 = cljs.core.first.call(null,seq__7286_7300__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_7306);


var G__7307 = cljs.core.next.call(null,seq__7286_7300__$1);
var G__7308 = null;
var G__7309 = (0);
var G__7310 = (0);
seq__7286_7290 = G__7307;
chunk__7287_7291 = G__7308;
count__7288_7292 = G__7309;
i__7289_7293 = G__7310;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
