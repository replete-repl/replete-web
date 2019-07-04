<<<<<<< HEAD:docs/js/compiled/worker-out/reagent/core.js
// Compiled by ClojureScript 1.10.520 {:target :webworker}
goog.provide('reagent.core');
goog.require('cljs.core');
goog.require('react');
=======
// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent.core');
goog.require('cljs.core');
>>>>>>> :simple optimizations:docs/js/compiled/out/reagent/core.js
goog.require('reagent.impl.template');
goog.require('reagent.impl.component');
goog.require('reagent.impl.util');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
goog.require('reagent.dom');
reagent.core.global$module$react = goog.global["React"];
reagent.core.is_client = reagent.impl.util.is_client;
/**
 * Create a native React element, by calling React.createElement directly.
 * 
 *   That means the second argument must be a javascript object (or nil), and
 *   that any Reagent hiccup forms must be processed with as-element. For example
 *   like this:
 * 
 *  (r/create-element "div" #js{:className "foo"}
 *     "Hi " (r/as-element [:strong "world!"])
 * 
 *   which is equivalent to
 * 
 *  [:div.foo "Hi" [:strong "world!"]]
 */
reagent.core.create_element = (function reagent$core$create_element(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/reagent/core.js
var G__1150 = arguments.length;
switch (G__1150) {
=======
var G__7367 = arguments.length;
switch (G__7367) {
>>>>>>> :simple optimizations:docs/js/compiled/out/reagent/core.js
case 1:
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4751__auto__ = [];
<<<<<<< HEAD:docs/js/compiled/worker-out/reagent/core.js
var len__4730__auto___1152 = arguments.length;
var i__4731__auto___1153 = (0);
while(true){
if((i__4731__auto___1153 < len__4730__auto___1152)){
args_arr__4751__auto__.push((arguments[i__4731__auto___1153]));

var G__1154 = (i__4731__auto___1153 + (1));
i__4731__auto___1153 = G__1154;
=======
var len__4730__auto___7369 = arguments.length;
var i__4731__auto___7370 = (0);
while(true){
if((i__4731__auto___7370 < len__4730__auto___7369)){
args_arr__4751__auto__.push((arguments[i__4731__auto___7370]));

var G__7371 = (i__4731__auto___7370 + (1));
i__4731__auto___7370 = G__7371;
>>>>>>> :simple optimizations:docs/js/compiled/out/reagent/core.js
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((3)),(0),null));
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4752__auto__);

}
});

reagent.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (type){
return reagent.core.create_element.call(null,type,null);
});

reagent.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,props){
if((!(cljs.core.map_QMARK_.call(null,props)))){
} else {
throw (new Error(["Assert failed: ",["Expected a JS object, not ",cljs.core.pr_str.call(null,props)].join(''),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return reagent.core.global$module$react.createElement.call(null,type,props);
});

reagent.core.create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,props,child){
if((!(cljs.core.map_QMARK_.call(null,props)))){
} else {
throw (new Error(["Assert failed: ",["Expected a JS object, not ",cljs.core.pr_str.call(null,props)].join(''),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return reagent.core.global$module$react.createElement.call(null,type,props,child);
});

reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,child,children){
if((!(cljs.core.map_QMARK_.call(null,props)))){
} else {
throw (new Error(["Assert failed: ",["Expected a JS object, not ",cljs.core.pr_str.call(null,props)].join(''),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return cljs.core.apply.call(null,reagent.core.global$module$react.createElement,type,props,child,children);
});

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/reagent/core.js
reagent.core.create_element.cljs$lang$applyTo = (function (seq1146){
var G__1147 = cljs.core.first.call(null,seq1146);
var seq1146__$1 = cljs.core.next.call(null,seq1146);
var G__1148 = cljs.core.first.call(null,seq1146__$1);
var seq1146__$2 = cljs.core.next.call(null,seq1146__$1);
var G__1149 = cljs.core.first.call(null,seq1146__$2);
var seq1146__$3 = cljs.core.next.call(null,seq1146__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1147,G__1148,G__1149,seq1146__$3);
=======
reagent.core.create_element.cljs$lang$applyTo = (function (seq7363){
var G__7364 = cljs.core.first.call(null,seq7363);
var seq7363__$1 = cljs.core.next.call(null,seq7363);
var G__7365 = cljs.core.first.call(null,seq7363__$1);
var seq7363__$2 = cljs.core.next.call(null,seq7363__$1);
var G__7366 = cljs.core.first.call(null,seq7363__$2);
var seq7363__$3 = cljs.core.next.call(null,seq7363__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7364,G__7365,G__7366,seq7363__$3);
>>>>>>> :simple optimizations:docs/js/compiled/out/reagent/core.js
});

reagent.core.create_element.cljs$lang$maxFixedArity = (3);

/**
 * Turns a vector of Hiccup syntax into a React element. Returns form
 *   unchanged if it is not a vector.
 */
reagent.core.as_element = (function reagent$core$as_element(form){
return reagent.impl.template.as_element.call(null,form);
});
/**
 * Returns an adapter for a native React class, that may be used
 *   just like a Reagent component function or class in Hiccup forms.
 */
reagent.core.adapt_react_class = (function reagent$core$adapt_react_class(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error(["Assert failed: ",["Component"," must not be nil"].join(''),"\n","c"].join('')));
}

return reagent.impl.template.adapt_react_class.call(null,c);
});
/**
 * Returns an adapter for a Reagent component, that may be used from
 *   React, for example in JSX. A single argument, props, is passed to
 *   the component, converted to a map.
 */
reagent.core.reactify_component = (function reagent$core$reactify_component(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error(["Assert failed: ",["Component"," must not be nil"].join(''),"\n","c"].join('')));
}

return reagent.impl.component.reactify_component.call(null,c);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.core.render = (function reagent$core$render(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/reagent/core.js
var G__1156 = arguments.length;
switch (G__1156) {
=======
var G__7373 = arguments.length;
switch (G__7373) {
>>>>>>> :simple optimizations:docs/js/compiled/out/reagent/core.js
case 2:
return reagent.core.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.core.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.core.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container);
});

reagent.core.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
return reagent.dom.render.call(null,comp,container,callback);
});

reagent.core.render.cljs$lang$maxFixedArity = 3;

/**
 * Remove a component from the given DOM node.
 */
reagent.core.unmount_component_at_node = (function reagent$core$unmount_component_at_node(container){
return reagent.dom.unmount_component_at_node.call(null,container);
});
reagent.core.as_component = reagent.core.as_element;
reagent.core.render_component = reagent.core.render;
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
reagent.core.force_update_all = (function reagent$core$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

reagent.dom.force_update_all.call(null);

return reagent.impl.batching.flush_after_render.call(null);
});
goog.exportSymbol('reagent.core.force_update_all', reagent.core.force_update_all);
/**
 * Create a component, React style. Should be called with a map,
 *   looking like this:
 * 
 *  {:get-initial-state (fn [this])
 *   :component-will-receive-props (fn [this new-argv])
 *   :should-component-update (fn [this old-argv new-argv])
 *   :component-will-mount (fn [this])
 *   :component-did-mount (fn [this])
 *   :component-will-update (fn [this new-argv])
 *   :component-did-update (fn [this old-argv])
 *   :component-will-unmount (fn [this])
 *   :reagent-render (fn [args....])}   ;; or :render (fn [this])
 * 
 *   Everything is optional, except either :reagent-render or :render.
 */
reagent.core.create_class = (function reagent$core$create_class(spec){
return reagent.impl.component.create_class.call(null,spec);
});
/**
 * Returns the current React component (a.k.a this) in a component
 *   function.
 */
reagent.core.current_component = (function reagent$core$current_component(){
return reagent.impl.component._STAR_current_component_STAR_;
});
/**
 * Returns an atom containing a components state.
 */
reagent.core.state_atom = (function reagent$core$state_atom(this$){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.call(null,this$)].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return reagent.impl.component.state_atom.call(null,this$);
});
/**
 * Returns the state of a component, as set with replace-state or set-state.
 *   Equivalent to (deref (r/state-atom this))
 */
reagent.core.state = (function reagent$core$state(this$){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.call(null,this$)].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return cljs.core.deref.call(null,reagent.core.state_atom.call(null,this$));
});
/**
 * Set state of a component.
 *   Equivalent to (reset! (state-atom this) new-state)
 */
reagent.core.replace_state = (function reagent$core$replace_state(this$,new_state){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.call(null,this$)].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

if((((new_state == null)) || (cljs.core.map_QMARK_.call(null,new_state)))){
} else {
throw (new Error(["Assert failed: ",["Expected a valid new state, not ",cljs.core.pr_str.call(null,new_state)].join(''),"\n","(clojure.core/or (clojure.core/nil? new-state) (clojure.core/map? new-state))"].join('')));
}

return cljs.core.reset_BANG_.call(null,reagent.core.state_atom.call(null,this$),new_state);
});
/**
 * Merge component state with new-state.
 *   Equivalent to (swap! (state-atom this) merge new-state)
 */
reagent.core.set_state = (function reagent$core$set_state(this$,new_state){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.call(null,this$)].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

if((((new_state == null)) || (cljs.core.map_QMARK_.call(null,new_state)))){
} else {
throw (new Error(["Assert failed: ",["Expected a valid new state, not ",cljs.core.pr_str.call(null,new_state)].join(''),"\n","(clojure.core/or (clojure.core/nil? new-state) (clojure.core/map? new-state))"].join('')));
}

return cljs.core.swap_BANG_.call(null,reagent.core.state_atom.call(null,this$),cljs.core.merge,new_state);
});
/**
 * Force a component to re-render immediately.
 * 
 *   If the second argument is true, child components will also be
 *   re-rendered, even is their arguments have not changed.
 */
reagent.core.force_update = (function reagent$core$force_update(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/reagent/core.js
var G__1159 = arguments.length;
switch (G__1159) {
=======
var G__7376 = arguments.length;
switch (G__7376) {
>>>>>>> :simple optimizations:docs/js/compiled/out/reagent/core.js
case 1:
return reagent.core.force_update.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.core.force_update.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.core.force_update.cljs$core$IFn$_invoke$arity$1 = (function (this$){
return reagent.core.force_update.call(null,this$,false);
});

reagent.core.force_update.cljs$core$IFn$_invoke$arity$2 = (function (this$,deep){
reagent.ratom.flush_BANG_.call(null);

reagent.impl.util.force_update.call(null,this$,deep);

return reagent.impl.batching.flush_after_render.call(null);
});

reagent.core.force_update.cljs$lang$maxFixedArity = 2;

/**
 * Returns the props passed to a component.
 */
reagent.core.props = (function reagent$core$props(this$){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.call(null,this$)].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return reagent.impl.component.get_props.call(null,this$);
});
/**
 * Returns the children passed to a component.
 */
reagent.core.children = (function reagent$core$children(this$){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.call(null,this$)].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return reagent.impl.component.get_children.call(null,this$);
});
/**
 * Returns the entire Hiccup form passed to the component.
 */
reagent.core.argv = (function reagent$core$argv(this$){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.call(null,this$)].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return reagent.impl.component.get_argv.call(null,this$);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.core.dom_node = (function reagent$core$dom_node(this$){
return reagent.dom.dom_node.call(null,this$);
});
/**
 * Utility function that merges two maps, handling :class and :style
 *   specially, like React's transferPropsTo.
 */
reagent.core.merge_props = (function reagent$core$merge_props(defaults,props){
return reagent.impl.util.merge_props.call(null,defaults,props);
});
/**
 * Render dirty components immediately to the DOM.
 * 
 *   Note that this may not work in event handlers, since React.js does
 *   batching of updates there.
 */
reagent.core.flush = (function reagent$core$flush(){
return reagent.impl.batching.flush.call(null);
});
/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 *   Reagent components that derefs one of these are automatically
 *   re-rendered.
 */
reagent.core.atom = (function reagent$core$atom(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/reagent/core.js
var G__1164 = arguments.length;
switch (G__1164) {
=======
var G__7381 = arguments.length;
switch (G__7381) {
>>>>>>> :simple optimizations:docs/js/compiled/out/reagent/core.js
case 1:
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
<<<<<<< HEAD:docs/js/compiled/worker-out/reagent/core.js
var len__4730__auto___1166 = arguments.length;
var i__4731__auto___1167 = (0);
while(true){
if((i__4731__auto___1167 < len__4730__auto___1166)){
args_arr__4751__auto__.push((arguments[i__4731__auto___1167]));

var G__1168 = (i__4731__auto___1167 + (1));
i__4731__auto___1167 = G__1168;
=======
var len__4730__auto___7383 = arguments.length;
var i__4731__auto___7384 = (0);
while(true){
if((i__4731__auto___7384 < len__4730__auto___7383)){
args_arr__4751__auto__.push((arguments[i__4731__auto___7384]));

var G__7385 = (i__4731__auto___7384 + (1));
i__4731__auto___7384 = G__7385;
>>>>>>> :simple optimizations:docs/js/compiled/out/reagent/core.js
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((1)),(0),null));
return reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4752__auto__);

}
});

reagent.core.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return reagent.ratom.atom.call(null,x);
});

reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,rest){
return cljs.core.apply.call(null,reagent.ratom.atom,x,rest);
});

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/reagent/core.js
reagent.core.atom.cljs$lang$applyTo = (function (seq1162){
var G__1163 = cljs.core.first.call(null,seq1162);
var seq1162__$1 = cljs.core.next.call(null,seq1162);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1163,seq1162__$1);
=======
reagent.core.atom.cljs$lang$applyTo = (function (seq7379){
var G__7380 = cljs.core.first.call(null,seq7379);
var seq7379__$1 = cljs.core.next.call(null,seq7379);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7380,seq7379__$1);
>>>>>>> :simple optimizations:docs/js/compiled/out/reagent/core.js
});

reagent.core.atom.cljs$lang$maxFixedArity = (1);

/**
 * Takes a function and optional arguments, and returns a derefable
 *   containing the output of that function. If the function derefs
 *   Reagent atoms (or track, etc), the value will be updated whenever
 *   the atom changes.
 * 
 *   In other words, @(track foo bar) will produce the same result
 *   as (foo bar), but foo will only be called again when the atoms it
 *   depends on changes, and will only trigger updates of components when
 *   its result changes.
 * 
 *   track is lazy, i.e the function is only evaluated on deref.
 */
reagent.core.track = (function reagent$core$track(var_args){
var args__4736__auto__ = [];
<<<<<<< HEAD:docs/js/compiled/worker-out/reagent/core.js
var len__4730__auto___1171 = arguments.length;
var i__4731__auto___1172 = (0);
while(true){
if((i__4731__auto___1172 < len__4730__auto___1171)){
args__4736__auto__.push((arguments[i__4731__auto___1172]));

var G__1173 = (i__4731__auto___1172 + (1));
i__4731__auto___1172 = G__1173;
=======
var len__4730__auto___7388 = arguments.length;
var i__4731__auto___7389 = (0);
while(true){
if((i__4731__auto___7389 < len__4730__auto___7388)){
args__4736__auto__.push((arguments[i__4731__auto___7389]));

var G__7390 = (i__4731__auto___7389 + (1));
i__4731__auto___7389 = G__7390;
>>>>>>> :simple optimizations:docs/js/compiled/out/reagent/core.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return reagent.core.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

reagent.core.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return reagent.ratom.make_track.call(null,f,args);
});

reagent.core.track.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/reagent/core.js
reagent.core.track.cljs$lang$applyTo = (function (seq1169){
var G__1170 = cljs.core.first.call(null,seq1169);
var seq1169__$1 = cljs.core.next.call(null,seq1169);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1170,seq1169__$1);
=======
reagent.core.track.cljs$lang$applyTo = (function (seq7386){
var G__7387 = cljs.core.first.call(null,seq7386);
var seq7386__$1 = cljs.core.next.call(null,seq7386);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7387,seq7386__$1);
>>>>>>> :simple optimizations:docs/js/compiled/out/reagent/core.js
});

/**
 * An eager version of track. The function passed is called
 *   immediately, and continues to be called when needed, until stopped
 *   with dispose!.
 */
reagent.core.track_BANG_ = (function reagent$core$track_BANG_(var_args){
var args__4736__auto__ = [];
<<<<<<< HEAD:docs/js/compiled/worker-out/reagent/core.js
var len__4730__auto___1176 = arguments.length;
var i__4731__auto___1177 = (0);
while(true){
if((i__4731__auto___1177 < len__4730__auto___1176)){
args__4736__auto__.push((arguments[i__4731__auto___1177]));

var G__1178 = (i__4731__auto___1177 + (1));
i__4731__auto___1177 = G__1178;
=======
var len__4730__auto___7393 = arguments.length;
var i__4731__auto___7394 = (0);
while(true){
if((i__4731__auto___7394 < len__4730__auto___7393)){
args__4736__auto__.push((arguments[i__4731__auto___7394]));

var G__7395 = (i__4731__auto___7394 + (1));
i__4731__auto___7394 = G__7395;
>>>>>>> :simple optimizations:docs/js/compiled/out/reagent/core.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return reagent.ratom.make_track_BANG_.call(null,f,args);
});

reagent.core.track_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/reagent/core.js
reagent.core.track_BANG_.cljs$lang$applyTo = (function (seq1174){
var G__1175 = cljs.core.first.call(null,seq1174);
var seq1174__$1 = cljs.core.next.call(null,seq1174);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1175,seq1174__$1);
=======
reagent.core.track_BANG_.cljs$lang$applyTo = (function (seq7391){
var G__7392 = cljs.core.first.call(null,seq7391);
var seq7391__$1 = cljs.core.next.call(null,seq7391);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7392,seq7391__$1);
>>>>>>> :simple optimizations:docs/js/compiled/out/reagent/core.js
});

/**
 * Stop the result of track! from updating.
 */
reagent.core.dispose_BANG_ = (function reagent$core$dispose_BANG_(x){
return reagent.ratom.dispose_BANG_.call(null,x);
});
/**
 * Provide a combination of value and callback, that looks like an atom.
 * 
 *   The first argument can be any value, that will be returned when the
 *   result is deref'ed.
 * 
 *   The second argument should be a function, that is called with the
 *   optional extra arguments provided to wrap, and the new value of the
 *   resulting 'atom'.
 * 
 *   Use for example like this:
 * 
 *   (wrap (:foo @state)
 *      swap! state assoc :foo)
 * 
 *   Probably useful only for passing to child components.
 */
reagent.core.wrap = (function reagent$core$wrap(var_args){
var args__4736__auto__ = [];
<<<<<<< HEAD:docs/js/compiled/worker-out/reagent/core.js
var len__4730__auto___1182 = arguments.length;
var i__4731__auto___1183 = (0);
while(true){
if((i__4731__auto___1183 < len__4730__auto___1182)){
args__4736__auto__.push((arguments[i__4731__auto___1183]));

var G__1184 = (i__4731__auto___1183 + (1));
i__4731__auto___1183 = G__1184;
=======
var len__4730__auto___7399 = arguments.length;
var i__4731__auto___7400 = (0);
while(true){
if((i__4731__auto___7400 < len__4730__auto___7399)){
args__4736__auto__.push((arguments[i__4731__auto___7400]));

var G__7401 = (i__4731__auto___7400 + (1));
i__4731__auto___7400 = G__7401;
>>>>>>> :simple optimizations:docs/js/compiled/out/reagent/core.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic = (function (value,reset_fn,args){
if(cljs.core.ifn_QMARK_.call(null,reset_fn)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.call(null,reset_fn)].join(''),"\n","(clojure.core/ifn? reset-fn)"].join('')));
}

return reagent.ratom.make_wrapper.call(null,value,reset_fn,args);
});

reagent.core.wrap.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/reagent/core.js
reagent.core.wrap.cljs$lang$applyTo = (function (seq1179){
var G__1180 = cljs.core.first.call(null,seq1179);
var seq1179__$1 = cljs.core.next.call(null,seq1179);
var G__1181 = cljs.core.first.call(null,seq1179__$1);
var seq1179__$2 = cljs.core.next.call(null,seq1179__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1180,G__1181,seq1179__$2);
=======
reagent.core.wrap.cljs$lang$applyTo = (function (seq7396){
var G__7397 = cljs.core.first.call(null,seq7396);
var seq7396__$1 = cljs.core.next.call(null,seq7396);
var G__7398 = cljs.core.first.call(null,seq7396__$1);
var seq7396__$2 = cljs.core.next.call(null,seq7396__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7397,G__7398,seq7396__$2);
>>>>>>> :simple optimizations:docs/js/compiled/out/reagent/core.js
});

/**
 * Provide a cursor into a Reagent atom.
 * 
 *   Behaves like a Reagent atom but focuses updates and derefs to
 *   the specified path within the wrapped Reagent atom. e.g.,
 *  (let [c (cursor ra [:nested :content])]
 *    ... @c ;; equivalent to (get-in @ra [:nested :content])
 *    ... (reset! c 42) ;; equivalent to (swap! ra assoc-in [:nested :content] 42)
 *    ... (swap! c inc) ;; equivalence to (swap! ra update-in [:nested :content] inc)
 *    )
 * 
 *   The first parameter can also be a function, that should look
 *   something like this:
 * 
 *  (defn set-get
 *    ([k] (get-in @state k))
 *    ([k v] (swap! state assoc-in k v)))
 * 
 *   The function will be called with one argument – the path passed to
 *   cursor – when the cursor is deref'ed, and two arguments (path and
 *   new value) when the cursor is modified.
 * 
 *   Given that set-get function, (and that state is a Reagent atom, or
 *   another cursor) these cursors are equivalent:
 *   (cursor state [:foo]) and (cursor set-get [:foo]).
 * 
 *   Note that a cursor is lazy: its value will not change until it is
 *   used. This may be noticed with add-watch.
 */
reagent.core.cursor = (function reagent$core$cursor(src,path){
return reagent.ratom.cursor.call(null,src,path);
});
/**
 * Swaps the value of a to be (apply f current-value-of-atom args).
 * 
 *   rswap! works like swap!, except that recursive calls to rswap! on
 *   the same atom are allowed – and it always returns nil.
 */
reagent.core.rswap_BANG_ = (function reagent$core$rswap_BANG_(var_args){
var args__4736__auto__ = [];
<<<<<<< HEAD:docs/js/compiled/worker-out/reagent/core.js
var len__4730__auto___1191 = arguments.length;
var i__4731__auto___1192 = (0);
while(true){
if((i__4731__auto___1192 < len__4730__auto___1191)){
args__4736__auto__.push((arguments[i__4731__auto___1192]));

var G__1193 = (i__4731__auto___1192 + (1));
i__4731__auto___1192 = G__1193;
=======
var len__4730__auto___7408 = arguments.length;
var i__4731__auto___7409 = (0);
while(true){
if((i__4731__auto___7409 < len__4730__auto___7408)){
args__4736__auto__.push((arguments[i__4731__auto___7409]));

var G__7410 = (i__4731__auto___7409 + (1));
i__4731__auto___7409 = G__7410;
>>>>>>> :simple optimizations:docs/js/compiled/out/reagent/core.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
if((((!((a == null))))?(((((a.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IAtom$))))?true:(((!a.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,a):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,a))){
} else {
throw (new Error("Assert failed: (satisfies? IAtom a)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(cljs.core.truth_(a.rswapping)){
(function (){var or__4131__auto__ = a.rswapfs;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return a.rswapfs = [];
}
<<<<<<< HEAD:docs/js/compiled/worker-out/reagent/core.js
})().push((function (p1__1185_SHARP_){
return cljs.core.apply.call(null,f,p1__1185_SHARP_,args);
=======
})().push((function (p1__7402_SHARP_){
return cljs.core.apply.call(null,f,p1__7402_SHARP_,args);
>>>>>>> :simple optimizations:docs/js/compiled/out/reagent/core.js
}));
} else {
a.rswapping = true;

try{cljs.core.swap_BANG_.call(null,a,(function (state){
var s = cljs.core.apply.call(null,f,state,args);
while(true){
<<<<<<< HEAD:docs/js/compiled/worker-out/reagent/core.js
var temp__5722__auto__ = (function (){var G__1190 = a.rswapfs;
if((G__1190 == null)){
return null;
} else {
return G__1190.shift();
=======
var temp__5722__auto__ = (function (){var G__7407 = a.rswapfs;
if((G__7407 == null)){
return null;
} else {
return G__7407.shift();
>>>>>>> :simple optimizations:docs/js/compiled/out/reagent/core.js
}
})();
if((temp__5722__auto__ == null)){
return s;
} else {
var sf = temp__5722__auto__;
<<<<<<< HEAD:docs/js/compiled/worker-out/reagent/core.js
var G__1194 = sf.call(null,s);
s = G__1194;
=======
var G__7411 = sf.call(null,s);
s = G__7411;
>>>>>>> :simple optimizations:docs/js/compiled/out/reagent/core.js
continue;
}
break;
}
}));
}finally {a.rswapping = false;
}}

return null;
});

reagent.core.rswap_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/reagent/core.js
reagent.core.rswap_BANG_.cljs$lang$applyTo = (function (seq1186){
var G__1187 = cljs.core.first.call(null,seq1186);
var seq1186__$1 = cljs.core.next.call(null,seq1186);
var G__1188 = cljs.core.first.call(null,seq1186__$1);
var seq1186__$2 = cljs.core.next.call(null,seq1186__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1187,G__1188,seq1186__$2);
=======
reagent.core.rswap_BANG_.cljs$lang$applyTo = (function (seq7403){
var G__7404 = cljs.core.first.call(null,seq7403);
var seq7403__$1 = cljs.core.next.call(null,seq7403);
var G__7405 = cljs.core.first.call(null,seq7403__$1);
var seq7403__$2 = cljs.core.next.call(null,seq7403__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7404,G__7405,seq7403__$2);
>>>>>>> :simple optimizations:docs/js/compiled/out/reagent/core.js
});

/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just before components are rendered.
 */
reagent.core.next_tick = (function reagent$core$next_tick(f){
return reagent.impl.batching.do_before_flush.call(null,f);
});
/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just after any queued renders in the next animation
 *   frame (and even if no renders actually occur).
 */
reagent.core.after_render = (function reagent$core$after_render(f){
return reagent.impl.batching.do_after_render.call(null,f);
});
/**
 * Works just like clojure.core/partial, but the result can be compared with =
 */
reagent.core.partial = (function reagent$core$partial(var_args){
var args__4736__auto__ = [];
<<<<<<< HEAD:docs/js/compiled/worker-out/reagent/core.js
var len__4730__auto___1197 = arguments.length;
var i__4731__auto___1198 = (0);
while(true){
if((i__4731__auto___1198 < len__4730__auto___1197)){
args__4736__auto__.push((arguments[i__4731__auto___1198]));

var G__1199 = (i__4731__auto___1198 + (1));
i__4731__auto___1198 = G__1199;
=======
var len__4730__auto___7414 = arguments.length;
var i__4731__auto___7415 = (0);
while(true){
if((i__4731__auto___7415 < len__4730__auto___7414)){
args__4736__auto__.push((arguments[i__4731__auto___7415]));

var G__7416 = (i__4731__auto___7415 + (1));
i__4731__auto___7415 = G__7416;
>>>>>>> :simple optimizations:docs/js/compiled/out/reagent/core.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return reagent.impl.util.make_partial_fn.call(null,f,args);
});

reagent.core.partial.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/reagent/core.js
reagent.core.partial.cljs$lang$applyTo = (function (seq1195){
var G__1196 = cljs.core.first.call(null,seq1195);
var seq1195__$1 = cljs.core.next.call(null,seq1195);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1196,seq1195__$1);
=======
reagent.core.partial.cljs$lang$applyTo = (function (seq7412){
var G__7413 = cljs.core.first.call(null,seq7412);
var seq7412__$1 = cljs.core.next.call(null,seq7412);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7413,seq7412__$1);
>>>>>>> :simple optimizations:docs/js/compiled/out/reagent/core.js
});

reagent.core.component_path = (function reagent$core$component_path(c){
return reagent.impl.component.component_path.call(null,c);
});

//# sourceMappingURL=core.js.map
