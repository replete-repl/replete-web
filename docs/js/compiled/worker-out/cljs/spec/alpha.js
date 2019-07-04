// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.spec.alpha');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('cljs.spec.gen.alpha');
goog.require('clojure.string');
cljs.spec.alpha.MAX_INT = (9007199254740991);
/**
 * A soft limit on how many times a branching spec (or/alt/* /opt-keys/multi-spec)
 *   can be recursed through during generation. After this a
 *   non-recursive branch will be chosen.
 */
cljs.spec.alpha._STAR_recursion_limit_STAR_ = (4);
/**
 * The number of times an anonymous fn specified by fspec will be (generatively) tested during conform
 */
cljs.spec.alpha._STAR_fspec_iterations_STAR_ = (21);
/**
 * The number of items validated in a collection spec'ed with 'every'
 */
cljs.spec.alpha._STAR_coll_check_limit_STAR_ = (101);
/**
 * The number of errors reported by explain in a collection spec'ed with 'every'
 */
cljs.spec.alpha._STAR_coll_error_limit_STAR_ = (20);

/**
 * @interface
 */
cljs.spec.alpha.Spec = function(){};

cljs.spec.alpha.conform_STAR_ = (function cljs$spec$alpha$conform_STAR_(spec,x){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$conform_STAR_$arity$2 == null)))))){
return spec.cljs$spec$alpha$Spec$conform_STAR_$arity$2(spec,x);
} else {
var x__4433__auto__ = (((spec == null))?null:spec);
var m__4434__auto__ = (cljs.spec.alpha.conform_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,spec,x);
} else {
var m__4431__auto__ = (cljs.spec.alpha.conform_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,spec,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.conform*",spec);
}
}
}
});

cljs.spec.alpha.unform_STAR_ = (function cljs$spec$alpha$unform_STAR_(spec,y){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$unform_STAR_$arity$2 == null)))))){
return spec.cljs$spec$alpha$Spec$unform_STAR_$arity$2(spec,y);
} else {
var x__4433__auto__ = (((spec == null))?null:spec);
var m__4434__auto__ = (cljs.spec.alpha.unform_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,spec,y);
} else {
var m__4431__auto__ = (cljs.spec.alpha.unform_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,spec,y);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.unform*",spec);
}
}
}
});

cljs.spec.alpha.explain_STAR_ = (function cljs$spec$alpha$explain_STAR_(spec,path,via,in$,x){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$explain_STAR_$arity$5 == null)))))){
return spec.cljs$spec$alpha$Spec$explain_STAR_$arity$5(spec,path,via,in$,x);
} else {
var x__4433__auto__ = (((spec == null))?null:spec);
var m__4434__auto__ = (cljs.spec.alpha.explain_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,spec,path,via,in$,x);
} else {
var m__4431__auto__ = (cljs.spec.alpha.explain_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,spec,path,via,in$,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.explain*",spec);
}
}
}
});

cljs.spec.alpha.gen_STAR_ = (function cljs$spec$alpha$gen_STAR_(spec,overrides,path,rmap){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$gen_STAR_$arity$4 == null)))))){
return spec.cljs$spec$alpha$Spec$gen_STAR_$arity$4(spec,overrides,path,rmap);
} else {
var x__4433__auto__ = (((spec == null))?null:spec);
var m__4434__auto__ = (cljs.spec.alpha.gen_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,spec,overrides,path,rmap);
} else {
var m__4431__auto__ = (cljs.spec.alpha.gen_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,spec,overrides,path,rmap);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.gen*",spec);
}
}
}
});

cljs.spec.alpha.with_gen_STAR_ = (function cljs$spec$alpha$with_gen_STAR_(spec,gfn){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 == null)))))){
return spec.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2(spec,gfn);
} else {
var x__4433__auto__ = (((spec == null))?null:spec);
var m__4434__auto__ = (cljs.spec.alpha.with_gen_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,spec,gfn);
} else {
var m__4431__auto__ = (cljs.spec.alpha.with_gen_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,spec,gfn);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.with-gen*",spec);
}
}
}
});

cljs.spec.alpha.describe_STAR_ = (function cljs$spec$alpha$describe_STAR_(spec){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$describe_STAR_$arity$1 == null)))))){
return spec.cljs$spec$alpha$Spec$describe_STAR_$arity$1(spec);
} else {
var x__4433__auto__ = (((spec == null))?null:spec);
var m__4434__auto__ = (cljs.spec.alpha.describe_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,spec);
} else {
var m__4431__auto__ = (cljs.spec.alpha.describe_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,spec);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.describe*",spec);
}
}
}
});

if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.registry_ref !== 'undefined')){
} else {
cljs.spec.alpha.registry_ref = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
cljs.spec.alpha.deep_resolve = (function cljs$spec$alpha$deep_resolve(reg,k){
var spec = k;
while(true){
if(cljs.core.ident_QMARK_.call(null,spec)){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var G__15242 = cljs.core.get.call(null,reg,spec);
spec = G__15242;
=======
var G__11824 = cljs.core.get.call(null,reg,spec);
spec = G__11824;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
continue;
} else {
return spec;
}
break;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, nil if not found, k if k not ident
 */
cljs.spec.alpha.reg_resolve = (function cljs$spec$alpha$reg_resolve(k){
if(cljs.core.ident_QMARK_.call(null,k)){
var reg = cljs.core.deref.call(null,cljs.spec.alpha.registry_ref);
var spec = cljs.core.get.call(null,reg,k);
if((!(cljs.core.ident_QMARK_.call(null,spec)))){
return spec;
} else {
return cljs.spec.alpha.deep_resolve.call(null,reg,spec);
}
} else {
return k;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, throws if not found, k if k not ident
 */
cljs.spec.alpha.reg_resolve_BANG_ = (function cljs$spec$alpha$reg_resolve_BANG_(k){
if(cljs.core.ident_QMARK_.call(null,k)){
var or__4131__auto__ = cljs.spec.alpha.reg_resolve.call(null,k);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
throw (new Error(["Unable to resolve spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')));
}
} else {
return k;
}
});
/**
 * returns x if x is a spec object, else logical false
 */
cljs.spec.alpha.spec_QMARK_ = (function cljs$spec$alpha$spec_QMARK_(x){
if((((!((x == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$spec$alpha$Spec$))))?true:false):false)){
return x;
} else {
return null;
}
});
/**
 * returns x if x is a (cljs.spec.alpha) regex op, else logical false
 */
cljs.spec.alpha.regex_QMARK_ = (function cljs$spec$alpha$regex_QMARK_(x){
var and__4120__auto__ = new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__4120__auto__)){
return x;
} else {
return and__4120__auto__;
}
});
cljs.spec.alpha.with_name = (function cljs$spec$alpha$with_name(spec,name){
if(cljs.core.ident_QMARK_.call(null,spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_.call(null,spec))){
return cljs.core.assoc.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570),name);
} else {
if((((!((spec == null))))?(((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$))))?true:false):false)){
return cljs.core.with_meta.call(null,spec,cljs.core.assoc.call(null,cljs.core.meta.call(null,spec),new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570),name));
} else {
return null;
}
}
}
});
cljs.spec.alpha.spec_name = (function cljs$spec$alpha$spec_name(spec){
if(cljs.core.ident_QMARK_.call(null,spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_.call(null,spec))){
return new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570).cljs$core$IFn$_invoke$arity$1(spec);
} else {
if((((!((spec == null))))?(((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$))))?true:false):false)){
return new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,spec));
} else {
return null;
}
}
}
});
/**
 * spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.
 */
cljs.spec.alpha.maybe_spec = (function cljs$spec$alpha$maybe_spec(spec_or_k){
var s = (function (){var or__4131__auto__ = (function (){var and__4120__auto__ = cljs.core.ident_QMARK_.call(null,spec_or_k);
if(and__4120__auto__){
return cljs.spec.alpha.reg_resolve.call(null,spec_or_k);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = cljs.spec.alpha.spec_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = cljs.spec.alpha.regex_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_.call(null,s))){
return cljs.spec.alpha.with_name.call(null,cljs.spec.alpha.regex_spec_impl.call(null,s,null),cljs.spec.alpha.spec_name.call(null,s));
} else {
return s;
}
});
/**
 * spec-or-k must be a spec, regex or kw/sym, else returns nil. Throws if unresolvable kw/sym
 */
cljs.spec.alpha.the_spec = (function cljs$spec$alpha$the_spec(spec_or_k){
var or__4131__auto__ = cljs.spec.alpha.maybe_spec.call(null,spec_or_k);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.ident_QMARK_.call(null,spec_or_k)){
throw (new Error(["Unable to resolve spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_or_k)].join('')));
} else {
return null;
}
}
});
cljs.spec.alpha.fn_sym = (function cljs$spec$alpha$fn_sym(f_n){
if(clojure.string.blank_QMARK_.call(null,f_n)){
return null;
} else {
var xs = cljs.core.map.call(null,cljs.core.demunge,clojure.string.split.call(null,f_n,"$"));
if(((((2) <= cljs.core.count.call(null,xs))) && (cljs.core.every_QMARK_.call(null,((function (xs){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
return (function (p1__15246_SHARP_){
return (!(clojure.string.blank_QMARK_.call(null,p1__15246_SHARP_)));
});})(xs))
,xs)))){
var vec__15247 = cljs.core.juxt.call(null,cljs.core.butlast,cljs.core.last).call(null,xs);
var xs__$1 = cljs.core.nth.call(null,vec__15247,(0),null);
var y = cljs.core.nth.call(null,vec__15247,(1),null);
=======
return (function (p1__11828_SHARP_){
return (!(clojure.string.blank_QMARK_.call(null,p1__11828_SHARP_)));
});})(xs))
,xs)))){
var vec__11829 = cljs.core.juxt.call(null,cljs.core.butlast,cljs.core.last).call(null,xs);
var xs__$1 = cljs.core.nth.call(null,vec__11829,(0),null);
var y = cljs.core.nth.call(null,vec__11829,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,".",xs__$1)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join(''));
} else {
return null;
}
}
});

/**
 * @interface
 */
cljs.spec.alpha.Specize = function(){};

cljs.spec.alpha.specize_STAR_ = (function cljs$spec$alpha$specize_STAR_(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var G__15251 = arguments.length;
switch (G__15251) {
=======
var G__11833 = arguments.length;
switch (G__11833) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
case 1:
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.cljs$spec$alpha$Specize$specize_STAR_$arity$1 == null)))))){
return _.cljs$spec$alpha$Specize$specize_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.spec.alpha.specize_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.spec.alpha.specize_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Specize.specize*",_);
}
}
}
});

cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_,form){
if((((!((_ == null)))) && ((!((_.cljs$spec$alpha$Specize$specize_STAR_$arity$2 == null)))))){
return _.cljs$spec$alpha$Specize$specize_STAR_$arity$2(_,form);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.spec.alpha.specize_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_,form);
} else {
var m__4431__auto__ = (cljs.spec.alpha.specize_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_,form);
} else {
throw cljs.core.missing_protocol.call(null,"Specize.specize*",_);
}
}
}
});

cljs.spec.alpha.specize_STAR_.cljs$lang$maxFixedArity = 2;


cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (k){
var k__$1 = this;
return cljs.spec.alpha.specize_STAR_.call(null,cljs.spec.alpha.reg_resolve_BANG_.call(null,k__$1));
});

cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (k,_){
var k__$1 = this;
return cljs.spec.alpha.specize_STAR_.call(null,cljs.spec.alpha.reg_resolve_BANG_.call(null,k__$1));
});

cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var s__$1 = this;
return cljs.spec.alpha.specize_STAR_.call(null,cljs.spec.alpha.reg_resolve_BANG_.call(null,s__$1));
});

cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var s__$1 = this;
return cljs.spec.alpha.specize_STAR_.call(null,cljs.spec.alpha.reg_resolve_BANG_.call(null,s__$1));
});

cljs.core.PersistentHashSet.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashSet.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var s__$1 = this;
return cljs.spec.alpha.spec_impl.call(null,s__$1,s__$1,null,null);
});

cljs.core.PersistentHashSet.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,form){
var s__$1 = this;
return cljs.spec.alpha.spec_impl.call(null,form,s__$1,null,null);
});

cljs.core.PersistentTreeSet.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeSet.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var s__$1 = this;
return cljs.spec.alpha.spec_impl.call(null,s__$1,s__$1,null,null);
});

cljs.core.PersistentTreeSet.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,form){
var s__$1 = this;
return cljs.spec.alpha.spec_impl.call(null,form,s__$1,null,null);
});

goog.object.set(cljs.spec.alpha.Specize,"_",true);

goog.object.set(cljs.spec.alpha.specize_STAR_,"_",(function() {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var G__15253 = null;
var G__15253__1 = (function (o){
=======
var G__11835 = null;
var G__11835__1 = (function (o){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
var temp__5718__auto__ = (function (){var and__4120__auto__ = cljs.core.fn_QMARK_.call(null,o);
if(and__4120__auto__){
return cljs.spec.alpha.fn_sym.call(null,o.name);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var f_n = temp__5718__auto__;
return cljs.spec.alpha.spec_impl.call(null,f_n,o,null,null);
} else {
return cljs.spec.alpha.spec_impl.call(null,new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818),o,null,null);
}
});
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var G__15253__2 = (function (o,form){
return cljs.spec.alpha.spec_impl.call(null,form,o,null,null);
});
G__15253 = function(o,form){
switch(arguments.length){
case 1:
return G__15253__1.call(this,o);
case 2:
return G__15253__2.call(this,o,form);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15253.cljs$core$IFn$_invoke$arity$1 = G__15253__1;
G__15253.cljs$core$IFn$_invoke$arity$2 = G__15253__2;
return G__15253;
})()
);
cljs.spec.alpha.specize = (function cljs$spec$alpha$specize(var_args){
var G__15255 = arguments.length;
switch (G__15255) {
=======
var G__11835__2 = (function (o,form){
return cljs.spec.alpha.spec_impl.call(null,form,o,null,null);
});
G__11835 = function(o,form){
switch(arguments.length){
case 1:
return G__11835__1.call(this,o);
case 2:
return G__11835__2.call(this,o,form);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11835.cljs$core$IFn$_invoke$arity$1 = G__11835__1;
G__11835.cljs$core$IFn$_invoke$arity$2 = G__11835__2;
return G__11835;
})()
);
cljs.spec.alpha.specize = (function cljs$spec$alpha$specize(var_args){
var G__11837 = arguments.length;
switch (G__11837) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
case 1:
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1 = (function (s){
var or__4131__auto__ = cljs.spec.alpha.spec_QMARK_.call(null,s);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.spec.alpha.specize_STAR_.call(null,s);
}
});

cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2 = (function (s,form){
var or__4131__auto__ = cljs.spec.alpha.spec_QMARK_.call(null,s);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.spec.alpha.specize_STAR_.call(null,s,form);
}
});

cljs.spec.alpha.specize.cljs$lang$maxFixedArity = 2;

/**
 * tests the validity of a conform return value
 */
cljs.spec.alpha.invalid_QMARK_ = (function cljs$spec$alpha$invalid_QMARK_(ret){
return cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119),ret);
});
/**
 * Given a spec and a value, returns :cljs.spec.alpha/invalid if value does
 *   not match spec, else the (possibly destructured) value.
 */
cljs.spec.alpha.conform = (function cljs$spec$alpha$conform(spec,x){
return cljs.spec.alpha.conform_STAR_.call(null,cljs.spec.alpha.specize.call(null,spec),x);
});
/**
 * Given a spec and a value created by or compliant with a call to
 *   'conform' with the same spec, returns a value with all conform
 * destructuring undone.
 */
cljs.spec.alpha.unform = (function cljs$spec$alpha$unform(spec,x){
return cljs.spec.alpha.unform_STAR_.call(null,cljs.spec.alpha.specize.call(null,spec),x);
});
/**
 * returns the spec as data
 */
cljs.spec.alpha.form = (function cljs$spec$alpha$form(spec){
return cljs.spec.alpha.describe_STAR_.call(null,cljs.spec.alpha.specize.call(null,spec));
});
cljs.spec.alpha.abbrev = (function cljs$spec$alpha$abbrev(form){
if(cljs.core.seq_QMARK_.call(null,form)){
return clojure.walk.postwalk.call(null,(function (form__$1){
if(cljs.core.truth_((function (){var and__4120__auto__ = (form__$1 instanceof cljs.core.Symbol);
if(and__4120__auto__){
return cljs.core.namespace.call(null,form__$1);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form__$1));
} else {
if(((cljs.core.seq_QMARK_.call(null,form__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.first.call(null,form__$1))) && (cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.second.call(null,form__$1))))){
return cljs.core.last.call(null,form__$1);
} else {
return form__$1;

}
}
}),form);
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = (form instanceof cljs.core.Symbol);
if(and__4120__auto__){
return cljs.core.namespace.call(null,form);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form));
} else {
return form;

}
}
});
/**
 * returns an abbreviated description of the spec as data
 */
cljs.spec.alpha.describe = (function cljs$spec$alpha$describe(spec){
return cljs.spec.alpha.abbrev.call(null,cljs.spec.alpha.form.call(null,spec));
});
/**
 * Takes a spec and a no-arg, generator-returning fn and returns a version of that spec that uses that generator
 */
cljs.spec.alpha.with_gen = (function cljs$spec$alpha$with_gen(spec,gen_fn){
var spec__$1 = cljs.spec.alpha.reg_resolve.call(null,spec);
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_.call(null,spec__$1))){
return cljs.core.assoc.call(null,spec__$1,new cljs.core.Keyword("cljs.spec.alpha","gfn","cljs.spec.alpha/gfn",-593120375),gen_fn);
} else {
return cljs.spec.alpha.with_gen_STAR_.call(null,cljs.spec.alpha.specize.call(null,spec__$1),gen_fn);
}
});
cljs.spec.alpha.explain_data_STAR_ = (function cljs$spec$alpha$explain_data_STAR_(spec,path,via,in$,x){
var temp__5720__auto__ = cljs.spec.alpha.explain_STAR_.call(null,cljs.spec.alpha.specize.call(null,spec),path,via,in$,x);
if(cljs.core.truth_(temp__5720__auto__)){
var probs = temp__5720__auto__;
if(cljs.core.empty_QMARK_.call(null,probs)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),probs,new cljs.core.Keyword("cljs.spec.alpha","spec","cljs.spec.alpha/spec",1947137578),spec,new cljs.core.Keyword("cljs.spec.alpha","value","cljs.spec.alpha/value",1974786274),x], null);
}
} else {
return null;
}
});
/**
 * Given a spec and a value x which ought to conform, returns nil if x
 *   conforms, else a map with at least the key ::problems whose value is
 *   a collection of problem-maps, where problem-map has at least :path :pred and :val
 *   keys describing the predicate and the value that failed at that
 *   path.
 */
cljs.spec.alpha.explain_data = (function cljs$spec$alpha$explain_data(spec,x){
return cljs.spec.alpha.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__5718__auto__ = cljs.spec.alpha.spec_name.call(null,spec);
if(cljs.core.truth_(temp__5718__auto__)){
var name = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * Default printer for explain-data. nil indicates a successful validation.
 */
cljs.spec.alpha.explain_printer = (function cljs$spec$alpha$explain_printer(ed){
if(cljs.core.truth_(ed)){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var problems = cljs.core.sort_by.call(null,(function (p1__15258_SHARP_){
return (- cljs.core.count.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__15258_SHARP_)));
}),cljs.core.sort_by.call(null,(function (p1__15257_SHARP_){
return (- cljs.core.count.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(p1__15257_SHARP_)));
}),new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814).cljs$core$IFn$_invoke$arity$1(ed)));
return cljs.core.print.call(null,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__15259_15339 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15260_15340 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15261_15341 = true;
var _STAR_print_fn_STAR__temp_val__15262_15342 = ((function (_STAR_print_newline_STAR__orig_val__15259_15339,_STAR_print_fn_STAR__orig_val__15260_15340,_STAR_print_newline_STAR__temp_val__15261_15341,sb__4661__auto__,problems){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__15259_15339,_STAR_print_fn_STAR__orig_val__15260_15340,_STAR_print_newline_STAR__temp_val__15261_15341,sb__4661__auto__,problems))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15261_15341;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15262_15342;

try{var seq__15263_15343 = cljs.core.seq.call(null,problems);
var chunk__15264_15344 = null;
var count__15265_15345 = (0);
var i__15266_15346 = (0);
while(true){
if((i__15266_15346 < count__15265_15345)){
var map__15303_15347 = cljs.core._nth.call(null,chunk__15264_15344,i__15266_15346);
var map__15303_15348__$1 = (((((!((map__15303_15347 == null))))?(((((map__15303_15347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15303_15347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15303_15347):map__15303_15347);
var prob_15349 = map__15303_15348__$1;
var path_15350 = cljs.core.get.call(null,map__15303_15348__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_15351 = cljs.core.get.call(null,map__15303_15348__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_15352 = cljs.core.get.call(null,map__15303_15348__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_15353 = cljs.core.get.call(null,map__15303_15348__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_15354 = cljs.core.get.call(null,map__15303_15348__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_15355 = cljs.core.get.call(null,map__15303_15348__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
cljs.core.pr.call(null,val_15352);

cljs.core.print.call(null," - failed: ");

if(cljs.core.truth_(reason_15353)){
cljs.core.print.call(null,reason_15353);
} else {
cljs.core.pr.call(null,cljs.spec.alpha.abbrev.call(null,pred_15351));
}

if(cljs.core.empty_QMARK_.call(null,in_15355)){
} else {
cljs.core.print.call(null,[" in: ",cljs.core.pr_str.call(null,in_15355)].join(''));
}

if(cljs.core.empty_QMARK_.call(null,path_15350)){
} else {
cljs.core.print.call(null,[" at: ",cljs.core.pr_str.call(null,path_15350)].join(''));
}

if(cljs.core.empty_QMARK_.call(null,via_15354)){
} else {
cljs.core.print.call(null,[" spec: ",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_15354))].join(''));
}

var seq__15305_15356 = cljs.core.seq.call(null,prob_15349);
var chunk__15306_15357 = null;
var count__15307_15358 = (0);
var i__15308_15359 = (0);
while(true){
if((i__15308_15359 < count__15307_15358)){
var vec__15315_15360 = cljs.core._nth.call(null,chunk__15306_15357,i__15308_15359);
var k_15361 = cljs.core.nth.call(null,vec__15315_15360,(0),null);
var v_15362 = cljs.core.nth.call(null,vec__15315_15360,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_15361))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_15361)," ");

cljs.core.pr.call(null,v_15362);
}


var G__15363 = seq__15305_15356;
var G__15364 = chunk__15306_15357;
var G__15365 = count__15307_15358;
var G__15366 = (i__15308_15359 + (1));
seq__15305_15356 = G__15363;
chunk__15306_15357 = G__15364;
count__15307_15358 = G__15365;
i__15308_15359 = G__15366;
continue;
} else {
var temp__5720__auto___15367 = cljs.core.seq.call(null,seq__15305_15356);
if(temp__5720__auto___15367){
var seq__15305_15368__$1 = temp__5720__auto___15367;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15305_15368__$1)){
var c__4550__auto___15369 = cljs.core.chunk_first.call(null,seq__15305_15368__$1);
var G__15370 = cljs.core.chunk_rest.call(null,seq__15305_15368__$1);
var G__15371 = c__4550__auto___15369;
var G__15372 = cljs.core.count.call(null,c__4550__auto___15369);
var G__15373 = (0);
seq__15305_15356 = G__15370;
chunk__15306_15357 = G__15371;
count__15307_15358 = G__15372;
i__15308_15359 = G__15373;
continue;
} else {
var vec__15318_15374 = cljs.core.first.call(null,seq__15305_15368__$1);
var k_15375 = cljs.core.nth.call(null,vec__15318_15374,(0),null);
var v_15376 = cljs.core.nth.call(null,vec__15318_15374,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_15375))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_15375)," ");

cljs.core.pr.call(null,v_15376);
}


var G__15377 = cljs.core.next.call(null,seq__15305_15368__$1);
var G__15378 = null;
var G__15379 = (0);
var G__15380 = (0);
seq__15305_15356 = G__15377;
chunk__15306_15357 = G__15378;
count__15307_15358 = G__15379;
i__15308_15359 = G__15380;
=======
var problems = cljs.core.sort_by.call(null,(function (p1__11840_SHARP_){
return (- cljs.core.count.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__11840_SHARP_)));
}),cljs.core.sort_by.call(null,(function (p1__11839_SHARP_){
return (- cljs.core.count.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(p1__11839_SHARP_)));
}),new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814).cljs$core$IFn$_invoke$arity$1(ed)));
return cljs.core.print.call(null,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11841_11921 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11842_11922 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11843_11923 = true;
var _STAR_print_fn_STAR__temp_val__11844_11924 = ((function (_STAR_print_newline_STAR__orig_val__11841_11921,_STAR_print_fn_STAR__orig_val__11842_11922,_STAR_print_newline_STAR__temp_val__11843_11923,sb__4661__auto__,problems){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__11841_11921,_STAR_print_fn_STAR__orig_val__11842_11922,_STAR_print_newline_STAR__temp_val__11843_11923,sb__4661__auto__,problems))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11843_11923;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11844_11924;

try{var seq__11845_11925 = cljs.core.seq.call(null,problems);
var chunk__11846_11926 = null;
var count__11847_11927 = (0);
var i__11848_11928 = (0);
while(true){
if((i__11848_11928 < count__11847_11927)){
var map__11885_11929 = cljs.core._nth.call(null,chunk__11846_11926,i__11848_11928);
var map__11885_11930__$1 = (((((!((map__11885_11929 == null))))?(((((map__11885_11929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11885_11929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11885_11929):map__11885_11929);
var prob_11931 = map__11885_11930__$1;
var path_11932 = cljs.core.get.call(null,map__11885_11930__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_11933 = cljs.core.get.call(null,map__11885_11930__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_11934 = cljs.core.get.call(null,map__11885_11930__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_11935 = cljs.core.get.call(null,map__11885_11930__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_11936 = cljs.core.get.call(null,map__11885_11930__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_11937 = cljs.core.get.call(null,map__11885_11930__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
cljs.core.pr.call(null,val_11934);

cljs.core.print.call(null," - failed: ");

if(cljs.core.truth_(reason_11935)){
cljs.core.print.call(null,reason_11935);
} else {
cljs.core.pr.call(null,cljs.spec.alpha.abbrev.call(null,pred_11933));
}

if(cljs.core.empty_QMARK_.call(null,in_11937)){
} else {
cljs.core.print.call(null,[" in: ",cljs.core.pr_str.call(null,in_11937)].join(''));
}

if(cljs.core.empty_QMARK_.call(null,path_11932)){
} else {
cljs.core.print.call(null,[" at: ",cljs.core.pr_str.call(null,path_11932)].join(''));
}

if(cljs.core.empty_QMARK_.call(null,via_11936)){
} else {
cljs.core.print.call(null,[" spec: ",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_11936))].join(''));
}

var seq__11887_11938 = cljs.core.seq.call(null,prob_11931);
var chunk__11888_11939 = null;
var count__11889_11940 = (0);
var i__11890_11941 = (0);
while(true){
if((i__11890_11941 < count__11889_11940)){
var vec__11897_11942 = cljs.core._nth.call(null,chunk__11888_11939,i__11890_11941);
var k_11943 = cljs.core.nth.call(null,vec__11897_11942,(0),null);
var v_11944 = cljs.core.nth.call(null,vec__11897_11942,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_11943))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_11943)," ");

cljs.core.pr.call(null,v_11944);
}


var G__11945 = seq__11887_11938;
var G__11946 = chunk__11888_11939;
var G__11947 = count__11889_11940;
var G__11948 = (i__11890_11941 + (1));
seq__11887_11938 = G__11945;
chunk__11888_11939 = G__11946;
count__11889_11940 = G__11947;
i__11890_11941 = G__11948;
continue;
} else {
var temp__5720__auto___11949 = cljs.core.seq.call(null,seq__11887_11938);
if(temp__5720__auto___11949){
var seq__11887_11950__$1 = temp__5720__auto___11949;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11887_11950__$1)){
var c__4550__auto___11951 = cljs.core.chunk_first.call(null,seq__11887_11950__$1);
var G__11952 = cljs.core.chunk_rest.call(null,seq__11887_11950__$1);
var G__11953 = c__4550__auto___11951;
var G__11954 = cljs.core.count.call(null,c__4550__auto___11951);
var G__11955 = (0);
seq__11887_11938 = G__11952;
chunk__11888_11939 = G__11953;
count__11889_11940 = G__11954;
i__11890_11941 = G__11955;
continue;
} else {
var vec__11900_11956 = cljs.core.first.call(null,seq__11887_11950__$1);
var k_11957 = cljs.core.nth.call(null,vec__11900_11956,(0),null);
var v_11958 = cljs.core.nth.call(null,vec__11900_11956,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_11957))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_11957)," ");

cljs.core.pr.call(null,v_11958);
}


var G__11959 = cljs.core.next.call(null,seq__11887_11950__$1);
var G__11960 = null;
var G__11961 = (0);
var G__11962 = (0);
seq__11887_11938 = G__11959;
chunk__11888_11939 = G__11960;
count__11889_11940 = G__11961;
i__11890_11941 = G__11962;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);


<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var G__15381 = seq__15263_15343;
var G__15382 = chunk__15264_15344;
var G__15383 = count__15265_15345;
var G__15384 = (i__15266_15346 + (1));
seq__15263_15343 = G__15381;
chunk__15264_15344 = G__15382;
count__15265_15345 = G__15383;
i__15266_15346 = G__15384;
continue;
} else {
var temp__5720__auto___15385 = cljs.core.seq.call(null,seq__15263_15343);
if(temp__5720__auto___15385){
var seq__15263_15386__$1 = temp__5720__auto___15385;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15263_15386__$1)){
var c__4550__auto___15387 = cljs.core.chunk_first.call(null,seq__15263_15386__$1);
var G__15388 = cljs.core.chunk_rest.call(null,seq__15263_15386__$1);
var G__15389 = c__4550__auto___15387;
var G__15390 = cljs.core.count.call(null,c__4550__auto___15387);
var G__15391 = (0);
seq__15263_15343 = G__15388;
chunk__15264_15344 = G__15389;
count__15265_15345 = G__15390;
i__15266_15346 = G__15391;
continue;
} else {
var map__15321_15392 = cljs.core.first.call(null,seq__15263_15386__$1);
var map__15321_15393__$1 = (((((!((map__15321_15392 == null))))?(((((map__15321_15392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15321_15392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15321_15392):map__15321_15392);
var prob_15394 = map__15321_15393__$1;
var path_15395 = cljs.core.get.call(null,map__15321_15393__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_15396 = cljs.core.get.call(null,map__15321_15393__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_15397 = cljs.core.get.call(null,map__15321_15393__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_15398 = cljs.core.get.call(null,map__15321_15393__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_15399 = cljs.core.get.call(null,map__15321_15393__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_15400 = cljs.core.get.call(null,map__15321_15393__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
cljs.core.pr.call(null,val_15397);

cljs.core.print.call(null," - failed: ");

if(cljs.core.truth_(reason_15398)){
cljs.core.print.call(null,reason_15398);
} else {
cljs.core.pr.call(null,cljs.spec.alpha.abbrev.call(null,pred_15396));
}

if(cljs.core.empty_QMARK_.call(null,in_15400)){
} else {
cljs.core.print.call(null,[" in: ",cljs.core.pr_str.call(null,in_15400)].join(''));
}

if(cljs.core.empty_QMARK_.call(null,path_15395)){
} else {
cljs.core.print.call(null,[" at: ",cljs.core.pr_str.call(null,path_15395)].join(''));
}

if(cljs.core.empty_QMARK_.call(null,via_15399)){
} else {
cljs.core.print.call(null,[" spec: ",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_15399))].join(''));
}

var seq__15323_15401 = cljs.core.seq.call(null,prob_15394);
var chunk__15324_15402 = null;
var count__15325_15403 = (0);
var i__15326_15404 = (0);
while(true){
if((i__15326_15404 < count__15325_15403)){
var vec__15333_15405 = cljs.core._nth.call(null,chunk__15324_15402,i__15326_15404);
var k_15406 = cljs.core.nth.call(null,vec__15333_15405,(0),null);
var v_15407 = cljs.core.nth.call(null,vec__15333_15405,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_15406))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_15406)," ");

cljs.core.pr.call(null,v_15407);
}


var G__15408 = seq__15323_15401;
var G__15409 = chunk__15324_15402;
var G__15410 = count__15325_15403;
var G__15411 = (i__15326_15404 + (1));
seq__15323_15401 = G__15408;
chunk__15324_15402 = G__15409;
count__15325_15403 = G__15410;
i__15326_15404 = G__15411;
continue;
} else {
var temp__5720__auto___15412__$1 = cljs.core.seq.call(null,seq__15323_15401);
if(temp__5720__auto___15412__$1){
var seq__15323_15413__$1 = temp__5720__auto___15412__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15323_15413__$1)){
var c__4550__auto___15414 = cljs.core.chunk_first.call(null,seq__15323_15413__$1);
var G__15415 = cljs.core.chunk_rest.call(null,seq__15323_15413__$1);
var G__15416 = c__4550__auto___15414;
var G__15417 = cljs.core.count.call(null,c__4550__auto___15414);
var G__15418 = (0);
seq__15323_15401 = G__15415;
chunk__15324_15402 = G__15416;
count__15325_15403 = G__15417;
i__15326_15404 = G__15418;
continue;
} else {
var vec__15336_15419 = cljs.core.first.call(null,seq__15323_15413__$1);
var k_15420 = cljs.core.nth.call(null,vec__15336_15419,(0),null);
var v_15421 = cljs.core.nth.call(null,vec__15336_15419,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_15420))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_15420)," ");

cljs.core.pr.call(null,v_15421);
}


var G__15422 = cljs.core.next.call(null,seq__15323_15413__$1);
var G__15423 = null;
var G__15424 = (0);
var G__15425 = (0);
seq__15323_15401 = G__15422;
chunk__15324_15402 = G__15423;
count__15325_15403 = G__15424;
i__15326_15404 = G__15425;
=======
var G__11963 = seq__11845_11925;
var G__11964 = chunk__11846_11926;
var G__11965 = count__11847_11927;
var G__11966 = (i__11848_11928 + (1));
seq__11845_11925 = G__11963;
chunk__11846_11926 = G__11964;
count__11847_11927 = G__11965;
i__11848_11928 = G__11966;
continue;
} else {
var temp__5720__auto___11967 = cljs.core.seq.call(null,seq__11845_11925);
if(temp__5720__auto___11967){
var seq__11845_11968__$1 = temp__5720__auto___11967;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11845_11968__$1)){
var c__4550__auto___11969 = cljs.core.chunk_first.call(null,seq__11845_11968__$1);
var G__11970 = cljs.core.chunk_rest.call(null,seq__11845_11968__$1);
var G__11971 = c__4550__auto___11969;
var G__11972 = cljs.core.count.call(null,c__4550__auto___11969);
var G__11973 = (0);
seq__11845_11925 = G__11970;
chunk__11846_11926 = G__11971;
count__11847_11927 = G__11972;
i__11848_11928 = G__11973;
continue;
} else {
var map__11903_11974 = cljs.core.first.call(null,seq__11845_11968__$1);
var map__11903_11975__$1 = (((((!((map__11903_11974 == null))))?(((((map__11903_11974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11903_11974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11903_11974):map__11903_11974);
var prob_11976 = map__11903_11975__$1;
var path_11977 = cljs.core.get.call(null,map__11903_11975__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_11978 = cljs.core.get.call(null,map__11903_11975__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_11979 = cljs.core.get.call(null,map__11903_11975__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_11980 = cljs.core.get.call(null,map__11903_11975__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_11981 = cljs.core.get.call(null,map__11903_11975__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_11982 = cljs.core.get.call(null,map__11903_11975__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
cljs.core.pr.call(null,val_11979);

cljs.core.print.call(null," - failed: ");

if(cljs.core.truth_(reason_11980)){
cljs.core.print.call(null,reason_11980);
} else {
cljs.core.pr.call(null,cljs.spec.alpha.abbrev.call(null,pred_11978));
}

if(cljs.core.empty_QMARK_.call(null,in_11982)){
} else {
cljs.core.print.call(null,[" in: ",cljs.core.pr_str.call(null,in_11982)].join(''));
}

if(cljs.core.empty_QMARK_.call(null,path_11977)){
} else {
cljs.core.print.call(null,[" at: ",cljs.core.pr_str.call(null,path_11977)].join(''));
}

if(cljs.core.empty_QMARK_.call(null,via_11981)){
} else {
cljs.core.print.call(null,[" spec: ",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_11981))].join(''));
}

var seq__11905_11983 = cljs.core.seq.call(null,prob_11976);
var chunk__11906_11984 = null;
var count__11907_11985 = (0);
var i__11908_11986 = (0);
while(true){
if((i__11908_11986 < count__11907_11985)){
var vec__11915_11987 = cljs.core._nth.call(null,chunk__11906_11984,i__11908_11986);
var k_11988 = cljs.core.nth.call(null,vec__11915_11987,(0),null);
var v_11989 = cljs.core.nth.call(null,vec__11915_11987,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_11988))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_11988)," ");

cljs.core.pr.call(null,v_11989);
}


var G__11990 = seq__11905_11983;
var G__11991 = chunk__11906_11984;
var G__11992 = count__11907_11985;
var G__11993 = (i__11908_11986 + (1));
seq__11905_11983 = G__11990;
chunk__11906_11984 = G__11991;
count__11907_11985 = G__11992;
i__11908_11986 = G__11993;
continue;
} else {
var temp__5720__auto___11994__$1 = cljs.core.seq.call(null,seq__11905_11983);
if(temp__5720__auto___11994__$1){
var seq__11905_11995__$1 = temp__5720__auto___11994__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11905_11995__$1)){
var c__4550__auto___11996 = cljs.core.chunk_first.call(null,seq__11905_11995__$1);
var G__11997 = cljs.core.chunk_rest.call(null,seq__11905_11995__$1);
var G__11998 = c__4550__auto___11996;
var G__11999 = cljs.core.count.call(null,c__4550__auto___11996);
var G__12000 = (0);
seq__11905_11983 = G__11997;
chunk__11906_11984 = G__11998;
count__11907_11985 = G__11999;
i__11908_11986 = G__12000;
continue;
} else {
var vec__11918_12001 = cljs.core.first.call(null,seq__11905_11995__$1);
var k_12002 = cljs.core.nth.call(null,vec__11918_12001,(0),null);
var v_12003 = cljs.core.nth.call(null,vec__11918_12001,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_12002))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_12002)," ");

cljs.core.pr.call(null,v_12003);
}


var G__12004 = cljs.core.next.call(null,seq__11905_11995__$1);
var G__12005 = null;
var G__12006 = (0);
var G__12007 = (0);
seq__11905_11983 = G__12004;
chunk__11906_11984 = G__12005;
count__11907_11985 = G__12006;
i__11908_11986 = G__12007;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);


<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var G__15426 = cljs.core.next.call(null,seq__15263_15386__$1);
var G__15427 = null;
var G__15428 = (0);
var G__15429 = (0);
seq__15263_15343 = G__15426;
chunk__15264_15344 = G__15427;
count__15265_15345 = G__15428;
i__15266_15346 = G__15429;
=======
var G__12008 = cljs.core.next.call(null,seq__11845_11968__$1);
var G__12009 = null;
var G__12010 = (0);
var G__12011 = (0);
seq__11845_11925 = G__12008;
chunk__11846_11926 = G__12009;
count__11847_11927 = G__12010;
i__11848_11928 = G__12011;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
continue;
}
} else {
}
}
break;
}
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15260_15340;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15259_15339;
=======
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11842_11922;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11841_11921;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return cljs.core.println.call(null,"Success!");
}
});
cljs.spec.alpha._STAR_explain_out_STAR_ = cljs.spec.alpha.explain_printer;
/**
 * Prints explanation data (per 'explain-data') to *out* using the printer in *explain-out*,
 *  by default explain-printer.
 */
cljs.spec.alpha.explain_out = (function cljs$spec$alpha$explain_out(ed){
return cljs.spec.alpha._STAR_explain_out_STAR_.call(null,ed);
});
/**
 * Given a spec and a value that fails to conform, prints an explanation to *out*.
 */
cljs.spec.alpha.explain = (function cljs$spec$alpha$explain(spec,x){
return cljs.spec.alpha.explain_out.call(null,cljs.spec.alpha.explain_data.call(null,spec,x));
});
/**
 * Given a spec and a value that fails to conform, returns an explanation as a string.
 */
cljs.spec.alpha.explain_str = (function cljs$spec$alpha$explain_str(spec,x){
var sb__4661__auto__ = (new goog.string.StringBuffer());
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var _STAR_print_newline_STAR__orig_val__15430_15434 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15431_15435 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15432_15436 = true;
var _STAR_print_fn_STAR__temp_val__15433_15437 = ((function (_STAR_print_newline_STAR__orig_val__15430_15434,_STAR_print_fn_STAR__orig_val__15431_15435,_STAR_print_newline_STAR__temp_val__15432_15436,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__15430_15434,_STAR_print_fn_STAR__orig_val__15431_15435,_STAR_print_newline_STAR__temp_val__15432_15436,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15432_15436;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15433_15437;

try{cljs.spec.alpha.explain.call(null,spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15431_15435;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15430_15434;
=======
var _STAR_print_newline_STAR__orig_val__12012_12016 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12013_12017 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12014_12018 = true;
var _STAR_print_fn_STAR__temp_val__12015_12019 = ((function (_STAR_print_newline_STAR__orig_val__12012_12016,_STAR_print_fn_STAR__orig_val__12013_12017,_STAR_print_newline_STAR__temp_val__12014_12018,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__12012_12016,_STAR_print_fn_STAR__orig_val__12013_12017,_STAR_print_newline_STAR__temp_val__12014_12018,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12014_12018;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12015_12019;

try{cljs.spec.alpha.explain.call(null,spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12013_12017;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12012_12016;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
});
cljs.spec.alpha.gensub = (function cljs$spec$alpha$gensub(spec,overrides,path,rmap,form){
var spec__$1 = cljs.spec.alpha.specize.call(null,spec);
var temp__5718__auto__ = (function (){var or__4131__auto__ = (function (){var temp__5720__auto__ = (function (){var or__4131__auto__ = cljs.core.get.call(null,overrides,(function (){var or__4131__auto__ = cljs.spec.alpha.spec_name.call(null,spec__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return spec__$1;
}
})());
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,overrides,path);
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var gfn = temp__5720__auto__;
return gfn.call(null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.spec.alpha.gen_STAR_.call(null,spec__$1,overrides,path,rmap);
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var g = temp__5718__auto__;
return cljs.spec.gen.alpha.such_that.call(null,((function (g,temp__5718__auto__,spec__$1){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
return (function (p1__15438_SHARP_){
return cljs.spec.alpha.valid_QMARK_.call(null,spec__$1,p1__15438_SHARP_);
=======
return (function (p1__12020_SHARP_){
return cljs.spec.alpha.valid_QMARK_.call(null,spec__$1,p1__12020_SHARP_);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
});})(g,temp__5718__auto__,spec__$1))
,g,(100));
} else {
throw (new Error(["Unable to construct gen at: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)," for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.abbrev.call(null,form))].join('')));
}
});
/**
 * Given a spec, returns the generator for it, or throws if none can
 *   be constructed. Optionally an overrides map can be provided which
 *   should map spec names or paths (vectors of keywords) to no-arg
 *   generator-creating fns. These will be used instead of the generators at those
 *   names/paths. Note that parent generator (in the spec or overrides
 *   map) will supersede those of any subtrees. A generator for a regex
 *   op must always return a sequential collection (i.e. a generator for
 *   s/? should return either an empty sequence/vector or a
 *   sequence/vector with one item in it)
 */
cljs.spec.alpha.gen = (function cljs$spec$alpha$gen(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var G__15440 = arguments.length;
switch (G__15440) {
=======
var G__12022 = arguments.length;
switch (G__12022) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
case 1:
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.alpha.gen.call(null,spec,null);
});

cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2 = (function (spec,overrides){
return cljs.spec.alpha.gensub.call(null,spec,overrides,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","recursion-limit","cljs.spec.alpha/recursion-limit",601284994),cljs.spec.alpha._STAR_recursion_limit_STAR_], null),spec);
});

cljs.spec.alpha.gen.cljs$lang$maxFixedArity = 2;

/**
 * Do not call this directly, use 'def'
 */
cljs.spec.alpha.def_impl = (function cljs$spec$alpha$def_impl(k,form,spec){
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.ident_QMARK_.call(null,k);
if(and__4120__auto__){
return cljs.core.namespace.call(null,k);
} else {
return and__4120__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","k must be namespaced keyword or resolveable symbol","\n","(c/and (ident? k) (namespace k))"].join('')));
}

if((spec == null)){
cljs.core.swap_BANG_.call(null,cljs.spec.alpha.registry_ref,cljs.core.dissoc,k);
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var spec_15442__$1 = (cljs.core.truth_((function (){var or__4131__auto__ = cljs.spec.alpha.spec_QMARK_.call(null,spec);
=======
var spec_12024__$1 = (cljs.core.truth_((function (){var or__4131__auto__ = cljs.spec.alpha.spec_QMARK_.call(null,spec);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = cljs.spec.alpha.regex_QMARK_.call(null,spec);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.alpha.registry_ref),spec);
}
}
})())?spec:cljs.spec.alpha.spec_impl.call(null,form,spec,null,null));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.core.swap_BANG_.call(null,cljs.spec.alpha.registry_ref,cljs.core.assoc,k,cljs.spec.alpha.with_name.call(null,spec_15442__$1,k));
=======
cljs.core.swap_BANG_.call(null,cljs.spec.alpha.registry_ref,cljs.core.assoc,k,cljs.spec.alpha.with_name.call(null,spec_12024__$1,k));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
}

return k;
});
/**
 * returns the registry map, prefer 'get-spec' to lookup a spec by name
 */
cljs.spec.alpha.registry = (function cljs$spec$alpha$registry(){
return cljs.core.deref.call(null,cljs.spec.alpha.registry_ref);
});
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.alpha.__GT_sym = (function cljs$spec$alpha$__GT_sym(x){
if(cljs.core.var_QMARK_.call(null,x)){
return x.sym;
} else {
return x;
}
});
/**
 * Returns spec registered for keyword/symbol/var k, or nil.
 */
cljs.spec.alpha.get_spec = (function cljs$spec$alpha$get_spec(k){
return cljs.core.get.call(null,cljs.spec.alpha.registry.call(null),(((k instanceof cljs.core.Keyword))?k:cljs.spec.alpha.__GT_sym.call(null,k)));
});
cljs.spec.alpha.macroexpand_check = (function cljs$spec$alpha$macroexpand_check(v,args){
var specs = cljs.spec.alpha.get_spec.call(null,v);
var temp__5720__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(temp__5720__auto__)){
var arg_spec = temp__5720__auto__;
if(cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.conform.call(null,arg_spec,args))){
var ed = cljs.core.assoc.call(null,cljs.spec.alpha.explain_data_STAR_.call(null,arg_spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__5718__auto__ = cljs.spec.alpha.spec_name.call(null,arg_spec);
if(cljs.core.truth_(temp__5718__auto__)){
var name = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,args),new cljs.core.Keyword("cljs.spec.alpha","args","cljs.spec.alpha/args",1870769783),args);
throw cljs.core.ex_info.call(null,["Call to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.__GT_sym.call(null,v))," did not conform to spec."].join(''),ed);
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.alpha.recur_limit_QMARK_ = (function cljs$spec$alpha$recur_limit_QMARK_(rmap,id,path,k){
return (((cljs.core.get.call(null,rmap,id) > new cljs.core.Keyword("cljs.spec.alpha","recursion-limit","cljs.spec.alpha/recursion-limit",601284994).cljs$core$IFn$_invoke$arity$1(rmap))) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,path),k)));
});
cljs.spec.alpha.inck = (function cljs$spec$alpha$inck(m,k){
return cljs.core.assoc.call(null,m,k,((function (){var or__4131__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() + (1)));
});
cljs.spec.alpha.dt = (function cljs$spec$alpha$dt(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var G__15444 = arguments.length;
switch (G__15444) {
=======
var G__12026 = arguments.length;
switch (G__12026) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
case 3:
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.spec.alpha.dt.call(null,pred,x,form,null);
});

cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4 = (function (pred,x,form,cpred_QMARK_){
if(cljs.core.truth_(pred)){
var temp__5718__auto__ = cljs.spec.alpha.the_spec.call(null,pred);
if(cljs.core.truth_(temp__5718__auto__)){
var spec = temp__5718__auto__;
return cljs.spec.alpha.conform.call(null,spec,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,pred)){
if(cljs.core.truth_(cpred_QMARK_)){
return pred.call(null,x);
} else {
if(cljs.core.truth_(pred.call(null,x))){
return x;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}
} else {
throw (new Error([cljs.core.pr_str.call(null,form)," is not a fn, expected predicate fn"].join('')));
}
}
} else {
return x;
}
});

cljs.spec.alpha.dt.cljs$lang$maxFixedArity = 4;

/**
 * Helper function that returns true when x is valid for spec.
 */
cljs.spec.alpha.valid_QMARK_ = (function cljs$spec$alpha$valid_QMARK_(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var G__15447 = arguments.length;
switch (G__15447) {
=======
var G__12029 = arguments.length;
switch (G__12029) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
case 2:
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,x){
var spec__$1 = cljs.spec.alpha.specize.call(null,spec);
return (!(cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.conform_STAR_.call(null,spec__$1,x))));
});

cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (spec,x,form){
var spec__$1 = cljs.spec.alpha.specize.call(null,spec,form);
return (!(cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.conform_STAR_.call(null,spec__$1,x))));
});

cljs.spec.alpha.valid_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * internal helper function that returns true when x is valid for spec.
 */
cljs.spec.alpha.pvalid_QMARK_ = (function cljs$spec$alpha$pvalid_QMARK_(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var G__15450 = arguments.length;
switch (G__15450) {
=======
var G__12032 = arguments.length;
switch (G__12032) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
case 2:
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return (!(cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.dt.call(null,pred,x,new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818)))));
});

cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return (!(cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.dt.call(null,pred,x,form))));
});

cljs.spec.alpha.pvalid_QMARK_.cljs$lang$maxFixedArity = 3;

cljs.spec.alpha.explain_1 = (function cljs$spec$alpha$explain_1(form,pred,path,via,in$,v){
var pred__$1 = cljs.spec.alpha.maybe_spec.call(null,pred);
if(cljs.core.truth_(cljs.spec.alpha.spec_QMARK_.call(null,pred__$1))){
return cljs.spec.alpha.explain_STAR_.call(null,pred__$1,path,(function (){var temp__5718__auto__ = cljs.spec.alpha.spec_name.call(null,pred__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var name = temp__5718__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})(),in$,v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),form,new cljs.core.Keyword(null,"val","val",128701612),v,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});

/**
 * returns a generator for form f, which can be a keyword or a list
 *   starting with 'or or 'and.
 */
cljs.spec.alpha.k_gen = (function cljs$spec$alpha$k_gen(f){
if((f instanceof cljs.core.Keyword)){
return cljs.spec.gen.alpha.return$.call(null,f);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.first.call(null,f))){
return cljs.spec.alpha.or_k_gen.call(null,(1),cljs.core.rest.call(null,f));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.first.call(null,f))){
return cljs.spec.alpha.and_k_gen.call(null,cljs.core.rest.call(null,f));
} else {
return null;
}
}
}
});
/**
 * returns a tuple generator made up of generators for a random subset
 *   of min-count (default 0) to all elements in s.
 */
cljs.spec.alpha.or_k_gen = (function cljs$spec$alpha$or_k_gen(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var G__15453 = arguments.length;
switch (G__15453) {
=======
var G__12035 = arguments.length;
switch (G__12035) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
case 1:
return cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.spec.alpha.or_k_gen.call(null,(0),s);
});

cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$2 = (function (min_count,s){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
return cljs.spec.gen.alpha.bind.call(null,cljs.spec.gen.alpha.tuple.call(null,cljs.spec.gen.alpha.choose.call(null,min_count,cljs.core.count.call(null,s)),cljs.spec.gen.alpha.shuffle.call(null,cljs.core.map.call(null,cljs.spec.alpha.k_gen,s))),(function (p__15454){
var vec__15455 = p__15454;
var n = cljs.core.nth.call(null,vec__15455,(0),null);
var gens = cljs.core.nth.call(null,vec__15455,(1),null);
=======
return cljs.spec.gen.alpha.bind.call(null,cljs.spec.gen.alpha.tuple.call(null,cljs.spec.gen.alpha.choose.call(null,min_count,cljs.core.count.call(null,s)),cljs.spec.gen.alpha.shuffle.call(null,cljs.core.map.call(null,cljs.spec.alpha.k_gen,s))),(function (p__12036){
var vec__12037 = p__12036;
var n = cljs.core.nth.call(null,vec__12037,(0),null);
var gens = cljs.core.nth.call(null,vec__12037,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,cljs.core.take.call(null,n,gens));
}));
});

cljs.spec.alpha.or_k_gen.cljs$lang$maxFixedArity = 2;

/**
 * returns a tuple generator made up of generators for every element
 *   in s.
 */
cljs.spec.alpha.and_k_gen = (function cljs$spec$alpha$and_k_gen(s){
return cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,cljs.core.map.call(null,cljs.spec.alpha.k_gen,s));
});
/**
 * Do not call this directly, use 'spec' with a map argument
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.map_spec_impl = (function cljs$spec$alpha$map_spec_impl(p__15462){
var map__15463 = p__15462;
var map__15463__$1 = (((((!((map__15463 == null))))?(((((map__15463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15463):map__15463);
var argm = map__15463__$1;
var opt = cljs.core.get.call(null,map__15463__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var req_un = cljs.core.get.call(null,map__15463__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.call(null,map__15463__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var gfn = cljs.core.get.call(null,map__15463__$1,new cljs.core.Keyword(null,"gfn","gfn",791517474));
var pred_exprs = cljs.core.get.call(null,map__15463__$1,new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395));
var keys_pred = cljs.core.get.call(null,map__15463__$1,new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739));
var opt_keys = cljs.core.get.call(null,map__15463__$1,new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261));
var req_specs = cljs.core.get.call(null,map__15463__$1,new cljs.core.Keyword(null,"req-specs","req-specs",553962313));
var req = cljs.core.get.call(null,map__15463__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var req_keys = cljs.core.get.call(null,map__15463__$1,new cljs.core.Keyword(null,"req-keys","req-keys",514319221));
var opt_specs = cljs.core.get.call(null,map__15463__$1,new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450));
var pred_forms = cljs.core.get.call(null,map__15463__$1,new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832));
var k__GT_s = cljs.core.zipmap.call(null,cljs.core.concat.call(null,req_keys,opt_keys),cljs.core.concat.call(null,req_specs,opt_specs));
var keys__GT_specnames = ((function (k__GT_s,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__15459_SHARP_){
var or__4131__auto__ = k__GT_s.call(null,p1__15459_SHARP_);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return p1__15459_SHARP_;
}
});})(k__GT_s,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid.call(null);
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha15465 !== 'undefined')){
=======
cljs.spec.alpha.map_spec_impl = (function cljs$spec$alpha$map_spec_impl(p__12044){
var map__12045 = p__12044;
var map__12045__$1 = (((((!((map__12045 == null))))?(((((map__12045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12045):map__12045);
var argm = map__12045__$1;
var opt = cljs.core.get.call(null,map__12045__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var req_un = cljs.core.get.call(null,map__12045__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.call(null,map__12045__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var gfn = cljs.core.get.call(null,map__12045__$1,new cljs.core.Keyword(null,"gfn","gfn",791517474));
var pred_exprs = cljs.core.get.call(null,map__12045__$1,new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395));
var keys_pred = cljs.core.get.call(null,map__12045__$1,new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739));
var opt_keys = cljs.core.get.call(null,map__12045__$1,new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261));
var req_specs = cljs.core.get.call(null,map__12045__$1,new cljs.core.Keyword(null,"req-specs","req-specs",553962313));
var req = cljs.core.get.call(null,map__12045__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var req_keys = cljs.core.get.call(null,map__12045__$1,new cljs.core.Keyword(null,"req-keys","req-keys",514319221));
var opt_specs = cljs.core.get.call(null,map__12045__$1,new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450));
var pred_forms = cljs.core.get.call(null,map__12045__$1,new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832));
var k__GT_s = cljs.core.zipmap.call(null,cljs.core.concat.call(null,req_keys,opt_keys),cljs.core.concat.call(null,req_specs,opt_specs));
var keys__GT_specnames = ((function (k__GT_s,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__12041_SHARP_){
var or__4131__auto__ = k__GT_s.call(null,p1__12041_SHARP_);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return p1__12041_SHARP_;
}
});})(k__GT_s,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid.call(null);
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha12047 !== 'undefined')){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15465 = (function (map__15463,keys__GT_specnames,opt,req_un,opt_un,p__15462,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,req,id,req_keys,opt_specs,k__GT_s,pred_forms,meta15466){
this.map__15463 = map__15463;
=======
cljs.spec.alpha.t_cljs$spec$alpha12047 = (function (keys__GT_specnames,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,map__12045,req,p__12044,id,req_keys,opt_specs,k__GT_s,pred_forms,meta12048){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
this.keys__GT_specnames = keys__GT_specnames;
this.opt = opt;
this.req_un = req_un;
this.opt_un = opt_un;
this.p__15462 = p__15462;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.argm = argm;
this.opt_keys = opt_keys;
this.req_specs = req_specs;
this.map__12045 = map__12045;
this.req = req;
this.p__12044 = p__12044;
this.id = id;
this.req_keys = req_keys;
this.opt_specs = opt_specs;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
this.meta15466 = meta15466;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha15465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_15467,meta15466__$1){
var self__ = this;
var _15467__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15465(self__.map__15463,self__.keys__GT_specnames,self__.opt,self__.req_un,self__.opt_un,self__.p__15462,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.opt_keys,self__.req_specs,self__.req,self__.id,self__.req_keys,self__.opt_specs,self__.k__GT_s,self__.pred_forms,meta15466__$1));
});})(k__GT_s,keys__GT_specnames,id,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha15465.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_15467){
var self__ = this;
var _15467__$1 = this;
return self__.meta15466;
});})(k__GT_s,keys__GT_specnames,id,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha15465.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15465.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
=======
this.meta12048 = meta12048;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha12047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_12049,meta12048__$1){
var self__ = this;
var _12049__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha12047(self__.keys__GT_specnames,self__.opt,self__.req_un,self__.opt_un,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.opt_keys,self__.req_specs,self__.map__12045,self__.req,self__.p__12044,self__.id,self__.req_keys,self__.opt_specs,self__.k__GT_s,self__.pred_forms,meta12048__$1));
});})(k__GT_s,keys__GT_specnames,id,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha12047.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_12049){
var self__ = this;
var _12049__$1 = this;
return self__.meta12048;
});})(k__GT_s,keys__GT_specnames,id,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha12047.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha12047.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
});})(k__GT_s,keys__GT_specnames,id,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha15465.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
=======
});})(k__GT_s,keys__GT_specnames,id,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha12047.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
});})(k__GT_s,keys__GT_specnames,id,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha15465.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15465.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
=======
});})(k__GT_s,keys__GT_specnames,id,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha12047.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha12047.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys_pred.call(null,m))){
var reg = cljs.spec.alpha.registry.call(null);
var ret = m;
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var G__15474 = m;
var vec__15475 = G__15474;
var seq__15476 = cljs.core.seq.call(null,vec__15475);
var first__15477 = cljs.core.first.call(null,seq__15476);
var seq__15476__$1 = cljs.core.next.call(null,seq__15476);
var vec__15478 = first__15477;
var k = cljs.core.nth.call(null,vec__15478,(0),null);
var v = cljs.core.nth.call(null,vec__15478,(1),null);
var ks = seq__15476__$1;
var keys = vec__15475;
var ret__$1 = ret;
var G__15474__$1 = G__15474;
while(true){
var ret__$2 = ret__$1;
var vec__15481 = G__15474__$1;
var seq__15482 = cljs.core.seq.call(null,vec__15481);
var first__15483 = cljs.core.first.call(null,seq__15482);
var seq__15482__$1 = cljs.core.next.call(null,seq__15482);
var vec__15484 = first__15483;
var k__$1 = cljs.core.nth.call(null,vec__15484,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__15484,(1),null);
var ks__$1 = seq__15482__$1;
var keys__$1 = vec__15481;
=======
var G__12056 = m;
var vec__12057 = G__12056;
var seq__12058 = cljs.core.seq.call(null,vec__12057);
var first__12059 = cljs.core.first.call(null,seq__12058);
var seq__12058__$1 = cljs.core.next.call(null,seq__12058);
var vec__12060 = first__12059;
var k = cljs.core.nth.call(null,vec__12060,(0),null);
var v = cljs.core.nth.call(null,vec__12060,(1),null);
var ks = seq__12058__$1;
var keys = vec__12057;
var ret__$1 = ret;
var G__12056__$1 = G__12056;
while(true){
var ret__$2 = ret__$1;
var vec__12063 = G__12056__$1;
var seq__12064 = cljs.core.seq.call(null,vec__12063);
var first__12065 = cljs.core.first.call(null,seq__12064);
var seq__12064__$1 = cljs.core.next.call(null,seq__12064);
var vec__12066 = first__12065;
var k__$1 = cljs.core.nth.call(null,vec__12066,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__12066,(1),null);
var ks__$1 = seq__12064__$1;
var keys__$1 = vec__12063;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
if(cljs.core.truth_(keys__$1)){
var sname = self__.keys__GT_specnames.call(null,k__$1);
var temp__5718__auto__ = cljs.core.get.call(null,reg,sname);
if(cljs.core.truth_(temp__5718__auto__)){
var s = temp__5718__auto__;
var cv = cljs.spec.alpha.conform.call(null,s,v__$1);
if(cljs.spec.alpha.invalid_QMARK_.call(null,cv)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var G__15509 = (((cv === v__$1))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,cv));
var G__15510 = ks__$1;
ret__$1 = G__15509;
G__15474__$1 = G__15510;
continue;
}
} else {
var G__15511 = ret__$2;
var G__15512 = ks__$1;
ret__$1 = G__15511;
G__15474__$1 = G__15512;
=======
var G__12091 = (((cv === v__$1))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,cv));
var G__12092 = ks__$1;
ret__$1 = G__12091;
G__12056__$1 = G__12092;
continue;
}
} else {
var G__12093 = ret__$2;
var G__12094 = ks__$1;
ret__$1 = G__12093;
G__12056__$1 = G__12094;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
continue;
}
} else {
return ret__$2;
}
break;
}
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
});})(k__GT_s,keys__GT_specnames,id,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha15465.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
=======
});})(k__GT_s,keys__GT_specnames,id,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha12047.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,m){
var self__ = this;
var ___$1 = this;
var reg = cljs.spec.alpha.registry.call(null);
var ret = m;
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var G__15490 = cljs.core.keys.call(null,m);
var vec__15491 = G__15490;
var seq__15492 = cljs.core.seq.call(null,vec__15491);
var first__15493 = cljs.core.first.call(null,seq__15492);
var seq__15492__$1 = cljs.core.next.call(null,seq__15492);
var k = first__15493;
var ks = seq__15492__$1;
var keys = vec__15491;
var ret__$1 = ret;
var G__15490__$1 = G__15490;
while(true){
var ret__$2 = ret__$1;
var vec__15497 = G__15490__$1;
var seq__15498 = cljs.core.seq.call(null,vec__15497);
var first__15499 = cljs.core.first.call(null,seq__15498);
var seq__15498__$1 = cljs.core.next.call(null,seq__15498);
var k__$1 = first__15499;
var ks__$1 = seq__15498__$1;
var keys__$1 = vec__15497;
=======
var G__12072 = cljs.core.keys.call(null,m);
var vec__12073 = G__12072;
var seq__12074 = cljs.core.seq.call(null,vec__12073);
var first__12075 = cljs.core.first.call(null,seq__12074);
var seq__12074__$1 = cljs.core.next.call(null,seq__12074);
var k = first__12075;
var ks = seq__12074__$1;
var keys = vec__12073;
var ret__$1 = ret;
var G__12072__$1 = G__12072;
while(true){
var ret__$2 = ret__$1;
var vec__12079 = G__12072__$1;
var seq__12080 = cljs.core.seq.call(null,vec__12079);
var first__12081 = cljs.core.first.call(null,seq__12080);
var seq__12080__$1 = cljs.core.next.call(null,seq__12080);
var k__$1 = first__12081;
var ks__$1 = seq__12080__$1;
var keys__$1 = vec__12079;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specnames.call(null,k__$1))){
var cv = cljs.core.get.call(null,m,k__$1);
var v = cljs.spec.alpha.unform.call(null,self__.keys__GT_specnames.call(null,k__$1),cv);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var G__15513 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,v));
var G__15514 = ks__$1;
ret__$1 = G__15513;
G__15490__$1 = G__15514;
continue;
} else {
var G__15515 = ret__$2;
var G__15516 = ks__$1;
ret__$1 = G__15515;
G__15490__$1 = G__15516;
=======
var G__12095 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,v));
var G__12096 = ks__$1;
ret__$1 = G__12095;
G__12072__$1 = G__12096;
continue;
} else {
var G__12097 = ret__$2;
var G__12098 = ks__$1;
ret__$1 = G__12097;
G__12072__$1 = G__12098;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
continue;
}
} else {
return ret__$2;
}
break;
}
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
});})(k__GT_s,keys__GT_specnames,id,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha15465.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (k__GT_s,keys__GT_specnames,id,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
=======
});})(k__GT_s,keys__GT_specnames,id,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha12047.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (k__GT_s,keys__GT_specnames,id,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if((!(cljs.core.map_QMARK_.call(null,x)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var reg = cljs.spec.alpha.registry.call(null);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
return cljs.core.apply.call(null,cljs.core.concat,(function (){var temp__5720__auto__ = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
=======
return cljs.core.apply.call(null,cljs.core.concat,(function (){var temp__5720__auto__ = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (pred,form){
if(cljs.core.truth_(pred.call(null,x))){
return null;
} else {
return form;
}
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__5720__auto__){
var probs = temp__5720__auto__;
return cljs.core.map.call(null,((function (probs,temp__5720__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__15460_SHARP_){
return cljs.core.identity.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),p1__15460_SHARP_,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));
});})(probs,temp__5720__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
=======
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__5720__auto__){
var probs = temp__5720__auto__;
return cljs.core.map.call(null,((function (probs,temp__5720__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__12042_SHARP_){
return cljs.core.identity.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),p1__12042_SHARP_,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));
});})(probs,temp__5720__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
,probs);
} else {
return null;
}
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
})(),cljs.core.map.call(null,((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__15500){
var vec__15501 = p__15500;
var k = cljs.core.nth.call(null,vec__15501,(0),null);
var v = cljs.core.nth.call(null,vec__15501,(1),null);
=======
})(),cljs.core.map.call(null,((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__12082){
var vec__12083 = p__12082;
var k = cljs.core.nth.call(null,vec__12083,(0),null);
var v = cljs.core.nth.call(null,vec__12083,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
if((((!(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specnames.call(null,k))))) || (cljs.spec.alpha.pvalid_QMARK_.call(null,self__.keys__GT_specnames.call(null,k),v,k)))){
return null;
} else {
return cljs.spec.alpha.explain_1.call(null,self__.keys__GT_specnames.call(null,k),self__.keys__GT_specnames.call(null,k),cljs.core.conj.call(null,path,k),via,cljs.core.conj.call(null,in$,k),v);
}
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq.call(null,x)));
}
});})(k__GT_s,keys__GT_specnames,id,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha15465.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (k__GT_s,keys__GT_specnames,id,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
=======
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq.call(null,x)));
}
});})(k__GT_s,keys__GT_specnames,id,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha12047.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (k__GT_s,keys__GT_specnames,id,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var rmap__$1 = cljs.spec.alpha.inck.call(null,rmap,self__.id);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var rgen = ((function (rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.alpha.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k)], null);
});})(rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,rgen,___$1,k__GT_s,keys__GT_specnames,id,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
=======
var rgen = ((function (rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.alpha.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k)], null);
});})(rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,rgen,___$1,k__GT_s,keys__GT_specnames,id,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (k,s){
if(cljs.spec.alpha.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k)){
return null;
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,rgen,___$1,k__GT_s,keys__GT_specnames,id,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.alpha.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,rgen,___$1,k__GT_s,keys__GT_specnames,id,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,rgen,___$1,k__GT_s,keys__GT_specnames,id,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
=======
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,rgen,___$1,k__GT_s,keys__GT_specnames,id,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.alpha.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,rgen,___$1,k__GT_s,keys__GT_specnames,id,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,rgen,___$1,k__GT_s,keys__GT_specnames,id,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
;
var reqs = cljs.core.map.call(null,rgen,self__.req_keys,self__.req_specs);
var opts = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.second,reqs),cljs.core.map.call(null,cljs.core.second,opts)))){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
return cljs.spec.gen.alpha.bind.call(null,cljs.spec.gen.alpha.tuple.call(null,cljs.spec.alpha.and_k_gen.call(null,self__.req),cljs.spec.alpha.or_k_gen.call(null,self__.opt),cljs.spec.alpha.and_k_gen.call(null,self__.req_un),cljs.spec.alpha.or_k_gen.call(null,self__.opt_un)),((function (rmap__$1,rgen,ogen,reqs,opts,___$1,k__GT_s,keys__GT_specnames,id,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__15504){
var vec__15505 = p__15504;
var req_ks = cljs.core.nth.call(null,vec__15505,(0),null);
var opt_ks = cljs.core.nth.call(null,vec__15505,(1),null);
var req_un_ks = cljs.core.nth.call(null,vec__15505,(2),null);
var opt_un_ks = cljs.core.nth.call(null,vec__15505,(3),null);
var qks = cljs.core.flatten.call(null,cljs.core.concat.call(null,req_ks,opt_ks));
var unqks = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.keyword,cljs.core.name),cljs.core.flatten.call(null,cljs.core.concat.call(null,req_un_ks,opt_un_ks)));
return cljs.core.apply.call(null,cljs.spec.gen.alpha.hash_map,cljs.core.apply.call(null,cljs.core.concat,cljs.core.filter.call(null,((function (qks,unqks,vec__15505,req_ks,opt_ks,req_un_ks,opt_un_ks,rmap__$1,rgen,ogen,reqs,opts,___$1,k__GT_s,keys__GT_specnames,id,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__15461_SHARP_){
return cljs.core.set.call(null,cljs.core.concat.call(null,qks,unqks)).call(null,cljs.core.first.call(null,p1__15461_SHARP_));
});})(qks,unqks,vec__15505,req_ks,opt_ks,req_un_ks,opt_un_ks,rmap__$1,rgen,ogen,reqs,opts,___$1,k__GT_s,keys__GT_specnames,id,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.into.call(null,reqs,opts))));
});})(rmap__$1,rgen,ogen,reqs,opts,___$1,k__GT_s,keys__GT_specnames,id,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
=======
return cljs.spec.gen.alpha.bind.call(null,cljs.spec.gen.alpha.tuple.call(null,cljs.spec.alpha.and_k_gen.call(null,self__.req),cljs.spec.alpha.or_k_gen.call(null,self__.opt),cljs.spec.alpha.and_k_gen.call(null,self__.req_un),cljs.spec.alpha.or_k_gen.call(null,self__.opt_un)),((function (rmap__$1,rgen,ogen,reqs,opts,___$1,k__GT_s,keys__GT_specnames,id,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__12086){
var vec__12087 = p__12086;
var req_ks = cljs.core.nth.call(null,vec__12087,(0),null);
var opt_ks = cljs.core.nth.call(null,vec__12087,(1),null);
var req_un_ks = cljs.core.nth.call(null,vec__12087,(2),null);
var opt_un_ks = cljs.core.nth.call(null,vec__12087,(3),null);
var qks = cljs.core.flatten.call(null,cljs.core.concat.call(null,req_ks,opt_ks));
var unqks = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.keyword,cljs.core.name),cljs.core.flatten.call(null,cljs.core.concat.call(null,req_un_ks,opt_un_ks)));
return cljs.core.apply.call(null,cljs.spec.gen.alpha.hash_map,cljs.core.apply.call(null,cljs.core.concat,cljs.core.filter.call(null,((function (qks,unqks,vec__12087,req_ks,opt_ks,req_un_ks,opt_un_ks,rmap__$1,rgen,ogen,reqs,opts,___$1,k__GT_s,keys__GT_specnames,id,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__12043_SHARP_){
return cljs.core.set.call(null,cljs.core.concat.call(null,qks,unqks)).call(null,cljs.core.first.call(null,p1__12043_SHARP_));
});})(qks,unqks,vec__12087,req_ks,opt_ks,req_un_ks,opt_un_ks,rmap__$1,rgen,ogen,reqs,opts,___$1,k__GT_s,keys__GT_specnames,id,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.into.call(null,reqs,opts))));
});})(rmap__$1,rgen,ogen,reqs,opts,___$1,k__GT_s,keys__GT_specnames,id,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
);
} else {
return null;
}
}
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
});})(k__GT_s,keys__GT_specnames,id,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha15465.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
=======
});})(k__GT_s,keys__GT_specnames,id,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha12047.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.assoc.call(null,self__.argm,new cljs.core.Keyword(null,"gfn","gfn",791517474),gfn__$1));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
});})(k__GT_s,keys__GT_specnames,id,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha15465.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),(function (){var G__15508 = cljs.core.PersistentVector.EMPTY;
var G__15508__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.call(null,G__15508,new cljs.core.Keyword(null,"req","req",-326448303),self__.req):G__15508);
var G__15508__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.call(null,G__15508__$1,new cljs.core.Keyword(null,"opt","opt",-794706369),self__.opt):G__15508__$1);
var G__15508__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.call(null,G__15508__$2,new cljs.core.Keyword(null,"req-un","req-un",1074571008),self__.req_un):G__15508__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.call(null,G__15508__$3,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),self__.opt_un);
} else {
return G__15508__$3;
}
})());
});})(k__GT_s,keys__GT_specnames,id,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha15465.getBasis = ((function (k__GT_s,keys__GT_specnames,id,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map__15463","map__15463",-791029695,null),new cljs.core.Symbol(null,"keys->specnames","keys->specnames",1791294693,null),new cljs.core.Symbol(null,"opt","opt",845825158,null),new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"p__15462","p__15462",-1523806488,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"keys-pred","keys-pred",-1795451030,null),new cljs.core.Symbol(null,"argm","argm",-181546357,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"k->s","k->s",-1685112801,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"meta15466","meta15466",-1740597976,null)], null);
});})(k__GT_s,keys__GT_specnames,id,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha15465.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha15465.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15465";

cljs.spec.alpha.t_cljs$spec$alpha15465.cljs$lang$ctorPrWriter = ((function (k__GT_s,keys__GT_specnames,id,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15465");
});})(k__GT_s,keys__GT_specnames,id,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha15465.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha15465 = ((function (k__GT_s,keys__GT_specnames,id,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$alpha$map_spec_impl_$___GT_t_cljs$spec$alpha15465(map__15463__$2,keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,p__15462__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta15466){
return (new cljs.spec.alpha.t_cljs$spec$alpha15465(map__15463__$2,keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,p__15462__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta15466));
});})(k__GT_s,keys__GT_specnames,id,map__15463,map__15463__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
=======
});})(k__GT_s,keys__GT_specnames,id,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha12047.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),(function (){var G__12090 = cljs.core.PersistentVector.EMPTY;
var G__12090__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.call(null,G__12090,new cljs.core.Keyword(null,"req","req",-326448303),self__.req):G__12090);
var G__12090__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.call(null,G__12090__$1,new cljs.core.Keyword(null,"opt","opt",-794706369),self__.opt):G__12090__$1);
var G__12090__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.call(null,G__12090__$2,new cljs.core.Keyword(null,"req-un","req-un",1074571008),self__.req_un):G__12090__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.call(null,G__12090__$3,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),self__.opt_un);
} else {
return G__12090__$3;
}
})());
});})(k__GT_s,keys__GT_specnames,id,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha12047.getBasis = ((function (k__GT_s,keys__GT_specnames,id,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys->specnames","keys->specnames",1791294693,null),new cljs.core.Symbol(null,"opt","opt",845825158,null),new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"keys-pred","keys-pred",-1795451030,null),new cljs.core.Symbol(null,"argm","argm",-181546357,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"map__12045","map__12045",1191126550,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"p__12044","p__12044",-1284304773,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"k->s","k->s",-1685112801,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"meta12048","meta12048",-1138494948,null)], null);
});})(k__GT_s,keys__GT_specnames,id,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha12047.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha12047.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha12047";

cljs.spec.alpha.t_cljs$spec$alpha12047.cljs$lang$ctorPrWriter = ((function (k__GT_s,keys__GT_specnames,id,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.spec.alpha/t_cljs$spec$alpha12047");
});})(k__GT_s,keys__GT_specnames,id,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha12047.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha12047 = ((function (k__GT_s,keys__GT_specnames,id,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$alpha$map_spec_impl_$___GT_t_cljs$spec$alpha12047(keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,map__12045__$2,req__$1,p__12044__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta12048){
return (new cljs.spec.alpha.t_cljs$spec$alpha12047(keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,map__12045__$2,req__$1,p__12044__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta12048));
});})(k__GT_s,keys__GT_specnames,id,map__12045,map__12045__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
;

}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
return (new cljs.spec.alpha.t_cljs$spec$alpha15465(map__15463__$1,keys__GT_specnames,opt,req_un,opt_un,p__15462,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,req,id,req_keys,opt_specs,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new cljs.spec.alpha.t_cljs$spec$alpha12047(keys__GT_specnames,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,map__12045__$1,req,p__12044,id,req_keys,opt_specs,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.alpha.spec_impl = (function cljs$spec$alpha$spec_impl(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var G__15518 = arguments.length;
switch (G__15518) {
=======
var G__12100 = arguments.length;
switch (G__12100) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
case 4:
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,gfn,cpred_QMARK_){
return cljs.spec.alpha.spec_impl.call(null,form,pred,gfn,cpred_QMARK_,null);
});

cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5 = (function (form,pred,gfn,cpred_QMARK_,unc){
if(cljs.core.truth_(cljs.spec.alpha.spec_QMARK_.call(null,pred))){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var G__15519 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.alpha.with_gen.call(null,G__15519,gfn);
} else {
return G__15519;
=======
var G__12101 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.alpha.with_gen.call(null,G__12101,gfn);
} else {
return G__12101;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
}
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_.call(null,pred))){
return cljs.spec.alpha.regex_spec_impl.call(null,pred,gfn);
} else {
if(cljs.core.ident_QMARK_.call(null,pred)){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var G__15520 = cljs.spec.alpha.the_spec.call(null,pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.alpha.with_gen.call(null,G__15520,gfn);
} else {
return G__15520;
}
} else {
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha15521 !== 'undefined')){
=======
var G__12102 = cljs.spec.alpha.the_spec.call(null,pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.alpha.with_gen.call(null,G__12102,gfn);
} else {
return G__12102;
}
} else {
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha12103 !== 'undefined')){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15521 = (function (form,pred,gfn,cpred_QMARK_,unc,meta15522){
=======
cljs.spec.alpha.t_cljs$spec$alpha12103 = (function (form,pred,gfn,cpred_QMARK_,unc,meta12104){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.unc = unc;
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
this.meta15522 = meta15522;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha15521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15523,meta15522__$1){
var self__ = this;
var _15523__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15521(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta15522__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha15521.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15523){
var self__ = this;
var _15523__$1 = this;
return self__.meta15522;
});

cljs.spec.alpha.t_cljs$spec$alpha15521.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15521.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
=======
this.meta12104 = meta12104;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha12103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12105,meta12104__$1){
var self__ = this;
var _12105__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha12103(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta12104__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha12103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12105){
var self__ = this;
var _12105__$1 = this;
return self__.meta12104;
});

cljs.spec.alpha.t_cljs$spec$alpha12103.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha12103.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
var self__ = this;
var s__$1 = this;
return s__$1;
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15521.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
=======
cljs.spec.alpha.t_cljs$spec$alpha12103.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
var self__ = this;
var s__$1 = this;
return s__$1;
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15521.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15521.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
=======
cljs.spec.alpha.t_cljs$spec$alpha12103.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha12103.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
var self__ = this;
var ___$1 = this;
var ret = self__.pred.call(null,x);
if(cljs.core.truth_(self__.cpred_QMARK_)){
return ret;
} else {
if(cljs.core.truth_(ret)){
return x;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15521.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
=======
cljs.spec.alpha.t_cljs$spec$alpha12103.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.cpred_QMARK_)){
if(cljs.core.truth_(self__.unc)){
return self__.unc.call(null,x);
} else {
throw (new Error("no unform fn for conformer"));
}
} else {
return x;
}
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15521.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
=======
cljs.spec.alpha.t_cljs$spec$alpha12103.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
var self__ = this;
var ___$1 = this;
if(cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),self__.form,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15521.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
=======
cljs.spec.alpha.t_cljs$spec$alpha12103.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gen.alpha.gen_for_pred.call(null,self__.pred);
}
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15521.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
=======
cljs.spec.alpha.t_cljs$spec$alpha12103.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.spec_impl.call(null,self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_,self__.unc);
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15521.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
=======
cljs.spec.alpha.t_cljs$spec$alpha12103.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
var self__ = this;
var ___$1 = this;
return self__.form;
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15521.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"cpred?","cpred?",35589515,null),new cljs.core.Symbol(null,"unc","unc",-465250751,null),new cljs.core.Symbol(null,"meta15522","meta15522",1470617516,null)], null);
});

cljs.spec.alpha.t_cljs$spec$alpha15521.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha15521.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15521";

cljs.spec.alpha.t_cljs$spec$alpha15521.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15521");
});

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha15521.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha15521 = (function cljs$spec$alpha$__GT_t_cljs$spec$alpha15521(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta15522){
return (new cljs.spec.alpha.t_cljs$spec$alpha15521(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta15522));
=======
cljs.spec.alpha.t_cljs$spec$alpha12103.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"cpred?","cpred?",35589515,null),new cljs.core.Symbol(null,"unc","unc",-465250751,null),new cljs.core.Symbol(null,"meta12104","meta12104",786578044,null)], null);
});

cljs.spec.alpha.t_cljs$spec$alpha12103.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha12103.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha12103";

cljs.spec.alpha.t_cljs$spec$alpha12103.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.spec.alpha/t_cljs$spec$alpha12103");
});

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha12103.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha12103 = (function cljs$spec$alpha$__GT_t_cljs$spec$alpha12103(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta12104){
return (new cljs.spec.alpha.t_cljs$spec$alpha12103(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta12104));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
});

}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
return (new cljs.spec.alpha.t_cljs$spec$alpha15521(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new cljs.spec.alpha.t_cljs$spec$alpha12103(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js

}
}
}
});

cljs.spec.alpha.spec_impl.cljs$lang$maxFixedArity = 5;

/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.alpha.multi_spec_impl = (function cljs$spec$alpha$multi_spec_impl(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var G__15531 = arguments.length;
switch (G__15531) {
=======
var G__12113 = arguments.length;
switch (G__12113) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
case 3:
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.alpha.multi_spec_impl.call(null,form,mmvar,retag,null);
});

cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid.call(null);
var predx = ((function (id){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
return (function (p1__15525_SHARP_){
var mm = cljs.core.deref.call(null,mmvar);
var and__4120__auto__ = cljs.core._get_method.call(null,mm,cljs.core._dispatch_fn.call(null,mm).call(null,p1__15525_SHARP_));
if(cljs.core.truth_(and__4120__auto__)){
return mm.call(null,p1__15525_SHARP_);
=======
return (function (p1__12107_SHARP_){
var mm = cljs.core.deref.call(null,mmvar);
var and__4120__auto__ = cljs.core._get_method.call(null,mm,cljs.core._dispatch_fn.call(null,mm).call(null,p1__12107_SHARP_));
if(cljs.core.truth_(and__4120__auto__)){
return mm.call(null,p1__12107_SHARP_);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
} else {
return and__4120__auto__;
}
});})(id))
;
var dval = ((function (id,predx){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
return (function (p1__15526_SHARP_){
return cljs.core._dispatch_fn.call(null,cljs.core.deref.call(null,mmvar)).call(null,p1__15526_SHARP_);
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__15527_SHARP_,p2__15528_SHARP_){
return cljs.core.assoc.call(null,p1__15527_SHARP_,retag,p2__15528_SHARP_);
});})(id,predx,dval))
:retag);
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha15532 !== 'undefined')){
=======
return (function (p1__12108_SHARP_){
return cljs.core._dispatch_fn.call(null,cljs.core.deref.call(null,mmvar)).call(null,p1__12108_SHARP_);
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__12109_SHARP_,p2__12110_SHARP_){
return cljs.core.assoc.call(null,p1__12109_SHARP_,retag,p2__12110_SHARP_);
});})(id,predx,dval))
:retag);
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha12114 !== 'undefined')){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15532 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta15533){
=======
cljs.spec.alpha.t_cljs$spec$alpha12114 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta12115){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
this.meta15533 = meta15533;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha15532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_15534,meta15533__$1){
var self__ = this;
var _15534__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15532(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta15533__$1));
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha15532.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_15534){
var self__ = this;
var _15534__$1 = this;
return self__.meta15533;
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha15532.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15532.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (id,predx,dval,tag){
=======
this.meta12115 = meta12115;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha12114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_12116,meta12115__$1){
var self__ = this;
var _12116__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha12114(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta12115__$1));
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha12114.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_12116){
var self__ = this;
var _12116__$1 = this;
return self__.meta12115;
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha12114.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha12114.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (id,predx,dval,tag){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15532.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (id,predx,dval,tag){
=======
cljs.spec.alpha.t_cljs$spec$alpha12114.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (id,predx,dval,tag){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15532.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15532.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
=======
cljs.spec.alpha.t_cljs$spec$alpha12114.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha12114.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__5718__auto__)){
var pred = temp__5718__auto__;
return cljs.spec.alpha.dt.call(null,pred,x,self__.form);
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
});})(id,predx,dval,tag))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15532.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (id,predx,dval,tag){
=======
cljs.spec.alpha.t_cljs$spec$alpha12114.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (id,predx,dval,tag){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__5718__auto__)){
var pred = temp__5718__auto__;
return cljs.spec.alpha.unform.call(null,pred,x);
} else {
throw (new Error(["No method of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.form)," for dispatch value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.dval.call(null,x))].join('')));
}
});})(id,predx,dval,tag))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15532.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
=======
cljs.spec.alpha.t_cljs$spec$alpha12114.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var dv = self__.dval.call(null,x);
var path__$1 = cljs.core.conj.call(null,path,dv);
var temp__5718__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__5718__auto__)){
var pred = temp__5718__auto__;
return cljs.spec.alpha.explain_1.call(null,self__.form,pred,path__$1,via,in$,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"pred","pred",1927423397),self__.form,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"reason","reason",-2070751759),"no method",new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});})(id,predx,dval,tag))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15532.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
=======
cljs.spec.alpha.t_cljs$spec$alpha12114.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,predx,dval,tag){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
return (function (p__15535){
var vec__15536 = p__15535;
var k = cljs.core.nth.call(null,vec__15536,(0),null);
var f = cljs.core.nth.call(null,vec__15536,(1),null);
=======
return (function (p__12117){
var vec__12118 = p__12117;
var k = cljs.core.nth.call(null,vec__12118,(0),null);
var f = cljs.core.nth.call(null,vec__12118,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
var p = f.call(null,null);
var rmap__$1 = cljs.spec.alpha.inck.call(null,rmap,self__.id);
if(cljs.spec.alpha.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k)){
return null;
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
return cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,p,vec__15536,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.gen.alpha.fmap.call(null,((function (rmap__$1,p,vec__15536,k,f,___$1,id,predx,dval,tag){
return (function (p1__15529_SHARP_){
return self__.tag.call(null,p1__15529_SHARP_,k);
});})(rmap__$1,p,vec__15536,k,f,___$1,id,predx,dval,tag))
,cljs.spec.alpha.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,(new cljs.core.List(null,new cljs.core.Symbol(null,"method","method",1696235119,null),(new cljs.core.List(null,self__.form,(new cljs.core.List(null,k,null,(1),null)),(2),null)),(3),null))));
});})(rmap__$1,p,vec__15536,k,f,___$1,id,predx,dval,tag))
=======
return cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,p,vec__12118,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.gen.alpha.fmap.call(null,((function (rmap__$1,p,vec__12118,k,f,___$1,id,predx,dval,tag){
return (function (p1__12111_SHARP_){
return self__.tag.call(null,p1__12111_SHARP_,k);
});})(rmap__$1,p,vec__12118,k,f,___$1,id,predx,dval,tag))
,cljs.spec.alpha.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,(new cljs.core.List(null,new cljs.core.Symbol(null,"method","method",1696235119,null),(new cljs.core.List(null,self__.form,(new cljs.core.List(null,k,null,(1),null)),(2),null)),(3),null))));
});})(rmap__$1,p,vec__12118,k,f,___$1,id,predx,dval,tag))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
,null)));
}
});})(___$1,id,predx,dval,tag))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,cljs.core.remove.call(null,((function (gen,___$1,id,predx,dval,tag){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
return (function (p__15539){
var vec__15540 = p__15539;
var k = cljs.core.nth.call(null,vec__15540,(0),null);
=======
return (function (p__12121){
var vec__12122 = p__12121;
var k = cljs.core.nth.call(null,vec__12122,(0),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return cljs.spec.alpha.invalid_QMARK_.call(null,k);
});})(gen,___$1,id,predx,dval,tag))
,cljs.core.methods$.call(null,cljs.core.deref.call(null,self__.mmvar)))));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.spec.gen.alpha.one_of.call(null,gs);
} else {
return null;
}
}
});})(id,predx,dval,tag))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15532.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
=======
cljs.spec.alpha.t_cljs$spec$alpha12114.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.multi_spec_impl.call(null,self__.form,self__.mmvar,self__.retag,gfn__$1);
});})(id,predx,dval,tag))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15532.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
=======
cljs.spec.alpha.t_cljs$spec$alpha12114.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","multi-spec","cljs.spec.alpha/multi-spec",175821274,null),null,(1),null)),(new cljs.core.List(null,self__.form,null,(1),null)),(new cljs.core.List(null,self__.retag,null,(1),null)))));
});})(id,predx,dval,tag))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15532.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"mmvar","mmvar",-1714325675,null),new cljs.core.Symbol(null,"retag","retag",528972725,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"predx","predx",2063470948,null),new cljs.core.Symbol(null,"dval","dval",835211877,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta15533","meta15533",942623209,null)], null);
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha15532.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha15532.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15532";

cljs.spec.alpha.t_cljs$spec$alpha15532.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15532");
=======
cljs.spec.alpha.t_cljs$spec$alpha12114.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"mmvar","mmvar",-1714325675,null),new cljs.core.Symbol(null,"retag","retag",528972725,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"predx","predx",2063470948,null),new cljs.core.Symbol(null,"dval","dval",835211877,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta12115","meta12115",-2102749087,null)], null);
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha12114.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha12114.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha12114";

cljs.spec.alpha.t_cljs$spec$alpha12114.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.spec.alpha/t_cljs$spec$alpha12114");
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
});})(id,predx,dval,tag))
;

/**
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha15532.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha15532 = ((function (id,predx,dval,tag){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha15532(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta15533){
return (new cljs.spec.alpha.t_cljs$spec$alpha15532(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta15533));
=======
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha12114.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha12114 = ((function (id,predx,dval,tag){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha12114(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta12115){
return (new cljs.spec.alpha.t_cljs$spec$alpha12114(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta12115));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
});})(id,predx,dval,tag))
;

}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
return (new cljs.spec.alpha.t_cljs$spec$alpha15532(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new cljs.spec.alpha.t_cljs$spec$alpha12114(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
});

cljs.spec.alpha.multi_spec_impl.cljs$lang$maxFixedArity = 4;

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.alpha.tuple_impl = (function cljs$spec$alpha$tuple_impl(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var G__15545 = arguments.length;
switch (G__15545) {
=======
var G__12127 = arguments.length;
switch (G__12127) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
case 2:
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2 = (function (forms,preds){
return cljs.spec.alpha.tuple_impl.call(null,forms,preds,null);
});

cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3 = (function (forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.call(null,cljs.spec.alpha.specize,preds,forms);
}),null));
var cnt = cljs.core.count.call(null,preds);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha15546 !== 'undefined')){
=======
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha12128 !== 'undefined')){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15546 = (function (forms,preds,gfn,specs,cnt,meta15547){
=======
cljs.spec.alpha.t_cljs$spec$alpha12128 = (function (forms,preds,gfn,specs,cnt,meta12129){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cnt = cnt;
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
this.meta15547 = meta15547;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha15546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cnt){
return (function (_15548,meta15547__$1){
var self__ = this;
var _15548__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15546(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cnt,meta15547__$1));
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha15546.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cnt){
return (function (_15548){
var self__ = this;
var _15548__$1 = this;
return self__.meta15547;
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha15546.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15546.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs,cnt){
=======
this.meta12129 = meta12129;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha12128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cnt){
return (function (_12130,meta12129__$1){
var self__ = this;
var _12130__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha12128(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cnt,meta12129__$1));
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha12128.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cnt){
return (function (_12130){
var self__ = this;
var _12130__$1 = this;
return self__.meta12129;
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha12128.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha12128.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs,cnt){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15546.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs,cnt){
=======
cljs.spec.alpha.t_cljs$spec$alpha12128.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs,cnt){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15546.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15546.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs,cnt){
=======
cljs.spec.alpha.t_cljs$spec$alpha12128.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha12128.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs,cnt){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,x){
var self__ = this;
var ___$1 = this;
var specs__$1 = cljs.core.deref.call(null,self__.specs);
if((!(((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),self__.cnt)))))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,self__.cnt)){
return ret;
} else {
var v = x.call(null,i);
var cv = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,i),v);
if(cljs.spec.alpha.invalid_QMARK_.call(null,cv)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var G__15550 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,cv));
var G__15551 = (i + (1));
ret = G__15550;
i = G__15551;
=======
var G__12132 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,cv));
var G__12133 = (i + (1));
ret = G__12132;
i = G__12133;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
continue;
}
}
break;
}
}
});})(specs,cnt))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15546.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs,cnt){
=======
cljs.spec.alpha.t_cljs$spec$alpha12128.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs,cnt){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,x){
var self__ = this;
var ___$1 = this;
if(((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))))){
} else {
throw (new Error("Assert failed: (c/and (vector? x) (= (count x) (count preds)))"));
}

var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,x))){
return ret;
} else {
var cv = x.call(null,i);
var v = cljs.spec.alpha.unform.call(null,self__.preds.call(null,i),cv);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var G__15552 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,v));
var G__15553 = (i + (1));
ret = G__15552;
i = G__15553;
=======
var G__12134 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,v));
var G__12135 = (i + (1));
ret = G__12134;
i = G__12135;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
continue;
}
break;
}
});})(specs,cnt))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15546.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs,cnt){
=======
cljs.spec.alpha.t_cljs$spec$alpha12128.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs,cnt){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if((!(cljs.core.vector_QMARK_.call(null,x)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.count.call(null,self__.preds),null,(1),null))))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (___$1,specs,cnt){
return (function (i,form,pred){
var v = x.call(null,i);
if(cljs.spec.alpha.pvalid_QMARK_.call(null,pred,v)){
return null;
} else {
return cljs.spec.alpha.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,i),via,cljs.core.conj.call(null,in$,i),v);
}
});})(___$1,specs,cnt))
,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.forms,self__.preds));

}
}
});})(specs,cnt))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15546.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs,cnt){
=======
cljs.spec.alpha.t_cljs$spec$alpha12128.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs,cnt){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,specs,cnt){
return (function (i,p,f){
return cljs.spec.alpha.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,i),rmap,f);
});})(___$1,specs,cnt))
;
var gs = cljs.core.map.call(null,gen,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.preds,self__.forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gs);
} else {
return null;
}
}
});})(specs,cnt))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15546.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs,cnt){
=======
cljs.spec.alpha.t_cljs$spec$alpha12128.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs,cnt){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.tuple_impl.call(null,self__.forms,self__.preds,gfn__$1);
});})(specs,cnt))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15546.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs,cnt){
=======
cljs.spec.alpha.t_cljs$spec$alpha12128.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs,cnt){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),null,(1),null)),self__.forms)));
});})(specs,cnt))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15546.getBasis = ((function (specs,cnt){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.Symbol(null,"meta15547","meta15547",-1195530430,null)], null);
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha15546.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha15546.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15546";

cljs.spec.alpha.t_cljs$spec$alpha15546.cljs$lang$ctorPrWriter = ((function (specs,cnt){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15546");
=======
cljs.spec.alpha.t_cljs$spec$alpha12128.getBasis = ((function (specs,cnt){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.Symbol(null,"meta12129","meta12129",-1808447443,null)], null);
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha12128.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha12128.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha12128";

cljs.spec.alpha.t_cljs$spec$alpha12128.cljs$lang$ctorPrWriter = ((function (specs,cnt){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.spec.alpha/t_cljs$spec$alpha12128");
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
});})(specs,cnt))
;

/**
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha15546.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha15546 = ((function (specs,cnt){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha15546(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta15547){
return (new cljs.spec.alpha.t_cljs$spec$alpha15546(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta15547));
=======
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha12128.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha12128 = ((function (specs,cnt){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha12128(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta12129){
return (new cljs.spec.alpha.t_cljs$spec$alpha12128(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta12129));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
});})(specs,cnt))
;

}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
return (new cljs.spec.alpha.t_cljs$spec$alpha15546(forms,preds,gfn,specs,cnt,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new cljs.spec.alpha.t_cljs$spec$alpha12128(forms,preds,gfn,specs,cnt,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
});

cljs.spec.alpha.tuple_impl.cljs$lang$maxFixedArity = 3;

cljs.spec.alpha.tagged_ret = (function cljs$spec$alpha$tagged_ret(tag,ret){
return (new cljs.core.MapEntry(tag,ret,null));
});
/**
 * Do not call this directly, use 'or'
 */
cljs.spec.alpha.or_spec_impl = (function cljs$spec$alpha$or_spec_impl(keys,forms,preds,gfn){
var id = cljs.core.random_uuid.call(null);
var kps = cljs.core.zipmap.call(null,keys,preds);
var specs = (new cljs.core.Delay(((function (id,kps){
return (function (){
return cljs.core.mapv.call(null,cljs.spec.alpha.specize,preds,forms);
});})(id,kps))
,null));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var cform = (function (){var G__15554 = cljs.core.count.call(null,preds);
switch (G__15554) {
case (2):
return ((function (G__15554,id,kps,specs){
=======
var cform = (function (){var G__12136 = cljs.core.count.call(null,preds);
switch (G__12136) {
case (2):
return ((function (G__12136,id,kps,specs){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret)){
var ret__$1 = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(1)),x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$1)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.spec.alpha.tagged_ret.call(null,keys.call(null,(1)),ret__$1);
}
} else {
return cljs.spec.alpha.tagged_ret.call(null,keys.call(null,(0)),ret);
}
});
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
;})(G__15554,id,kps,specs))

break;
case (3):
return ((function (G__15554,id,kps,specs){
=======
;})(G__12136,id,kps,specs))

break;
case (3):
return ((function (G__12136,id,kps,specs){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret)){
var ret__$1 = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(1)),x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$1)){
var ret__$2 = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(2)),x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$2)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.spec.alpha.tagged_ret.call(null,keys.call(null,(2)),ret__$2);
}
} else {
return cljs.spec.alpha.tagged_ret.call(null,keys.call(null,(1)),ret__$1);
}
} else {
return cljs.spec.alpha.tagged_ret.call(null,keys.call(null,(0)),ret);
}
});
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
;})(G__15554,id,kps,specs))

break;
default:
return ((function (G__15554,id,kps,specs){
=======
;})(G__12136,id,kps,specs))

break;
default:
return ((function (G__12136,id,kps,specs){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var i = (0);
while(true){
if((i < cljs.core.count.call(null,specs__$1))){
var spec = specs__$1.call(null,i);
var ret = cljs.spec.alpha.conform_STAR_.call(null,spec,x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret)){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var G__15563 = (i + (1));
i = G__15563;
=======
var G__12145 = (i + (1));
i = G__12145;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
continue;
} else {
return cljs.spec.alpha.tagged_ret.call(null,keys.call(null,i),ret);
}
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
break;
}
});
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
;})(G__15554,id,kps,specs))

}
})();
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha15555 !== 'undefined')){
=======
;})(G__12136,id,kps,specs))

}
})();
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha12137 !== 'undefined')){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15555 = (function (keys,forms,preds,gfn,id,kps,specs,cform,meta15556){
=======
cljs.spec.alpha.t_cljs$spec$alpha12137 = (function (keys,forms,preds,gfn,id,kps,specs,cform,meta12138){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.kps = kps;
this.specs = specs;
this.cform = cform;
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
this.meta15556 = meta15556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha15555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,kps,specs,cform){
return (function (_15557,meta15556__$1){
var self__ = this;
var _15557__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15555(self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.specs,self__.cform,meta15556__$1));
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha15555.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,kps,specs,cform){
return (function (_15557){
var self__ = this;
var _15557__$1 = this;
return self__.meta15556;
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha15555.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15555.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (id,kps,specs,cform){
=======
this.meta12138 = meta12138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha12137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,kps,specs,cform){
return (function (_12139,meta12138__$1){
var self__ = this;
var _12139__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha12137(self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.specs,self__.cform,meta12138__$1));
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha12137.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,kps,specs,cform){
return (function (_12139){
var self__ = this;
var _12139__$1 = this;
return self__.meta12138;
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha12137.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha12137.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (id,kps,specs,cform){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15555.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (id,kps,specs,cform){
=======
cljs.spec.alpha.t_cljs$spec$alpha12137.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (id,kps,specs,cform){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15555.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15555.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (id,kps,specs,cform){
=======
cljs.spec.alpha.t_cljs$spec$alpha12137.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha12137.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (id,kps,specs,cform){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
});})(id,kps,specs,cform))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15555.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,p__15558){
var self__ = this;
var vec__15559 = p__15558;
var k = cljs.core.nth.call(null,vec__15559,(0),null);
var x = cljs.core.nth.call(null,vec__15559,(1),null);
=======
cljs.spec.alpha.t_cljs$spec$alpha12137.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,p__12140){
var self__ = this;
var vec__12141 = p__12140;
var k = cljs.core.nth.call(null,vec__12141,(0),null);
var x = cljs.core.nth.call(null,vec__12141,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
var ___$1 = this;
return cljs.spec.alpha.unform.call(null,self__.kps.call(null,k),x);
});})(id,kps,specs,cform))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15555.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (id,kps,specs,cform){
=======
cljs.spec.alpha.t_cljs$spec$alpha12137.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (id,kps,specs,cform){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.spec.alpha.pvalid_QMARK_.call(null,this$__$1,x)){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (this$__$1,id,kps,specs,cform){
return (function (k,form,pred){
if(cljs.spec.alpha.pvalid_QMARK_.call(null,pred,x)){
return null;
} else {
return cljs.spec.alpha.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,k),via,in$,x);
}
});})(this$__$1,id,kps,specs,cform))
,self__.keys,self__.forms,self__.preds));
}
});})(id,kps,specs,cform))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15555.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (id,kps,specs,cform){
=======
cljs.spec.alpha.t_cljs$spec$alpha12137.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (id,kps,specs,cform){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,kps,specs,cform){
return (function (k,p,f){
var rmap__$1 = cljs.spec.alpha.inck.call(null,rmap,self__.id);
if(cljs.spec.alpha.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k)){
return null;
} else {
return cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,___$1,id,kps,specs,cform){
return (function (){
return cljs.spec.alpha.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,f);
});})(rmap__$1,___$1,id,kps,specs,cform))
,null)));
}
});})(___$1,id,kps,specs,cform))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,self__.keys,self__.preds,self__.forms));
if(cljs.core.empty_QMARK_.call(null,gs)){
return null;
} else {
return cljs.spec.gen.alpha.one_of.call(null,gs);
}
}
});})(id,kps,specs,cform))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15555.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (id,kps,specs,cform){
=======
cljs.spec.alpha.t_cljs$spec$alpha12137.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (id,kps,specs,cform){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1);
});})(id,kps,specs,cform))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15555.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (id,kps,specs,cform){
=======
cljs.spec.alpha.t_cljs$spec$alpha12137.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (id,kps,specs,cform){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),null,(1),null)),cljs.core.mapcat.call(null,cljs.core.vector,self__.keys,self__.forms))));
});})(id,kps,specs,cform))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15555.getBasis = ((function (id,kps,specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"kps","kps",-1157342767,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta15556","meta15556",-1927960482,null)], null);
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha15555.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha15555.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15555";

cljs.spec.alpha.t_cljs$spec$alpha15555.cljs$lang$ctorPrWriter = ((function (id,kps,specs,cform){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15555");
=======
cljs.spec.alpha.t_cljs$spec$alpha12137.getBasis = ((function (id,kps,specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"kps","kps",-1157342767,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta12138","meta12138",1300351097,null)], null);
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha12137.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha12137.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha12137";

cljs.spec.alpha.t_cljs$spec$alpha12137.cljs$lang$ctorPrWriter = ((function (id,kps,specs,cform){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.spec.alpha/t_cljs$spec$alpha12137");
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
});})(id,kps,specs,cform))
;

/**
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha15555.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha15555 = ((function (id,kps,specs,cform){
return (function cljs$spec$alpha$or_spec_impl_$___GT_t_cljs$spec$alpha15555(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta15556){
return (new cljs.spec.alpha.t_cljs$spec$alpha15555(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta15556));
=======
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha12137.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha12137 = ((function (id,kps,specs,cform){
return (function cljs$spec$alpha$or_spec_impl_$___GT_t_cljs$spec$alpha12137(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta12138){
return (new cljs.spec.alpha.t_cljs$spec$alpha12137(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta12138));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
});})(id,kps,specs,cform))
;

}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
return (new cljs.spec.alpha.t_cljs$spec$alpha15555(keys,forms,preds,gfn,id,kps,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.and_preds = (function cljs$spec$alpha$and_preds(x,preds,forms){
var ret = x;
var G__15570 = preds;
var vec__15572 = G__15570;
var seq__15573 = cljs.core.seq.call(null,vec__15572);
var first__15574 = cljs.core.first.call(null,seq__15573);
var seq__15573__$1 = cljs.core.next.call(null,seq__15573);
var pred = first__15574;
var preds__$1 = seq__15573__$1;
var G__15571 = forms;
var vec__15575 = G__15571;
var seq__15576 = cljs.core.seq.call(null,vec__15575);
var first__15577 = cljs.core.first.call(null,seq__15576);
var seq__15576__$1 = cljs.core.next.call(null,seq__15576);
var form = first__15577;
var forms__$1 = seq__15576__$1;
var ret__$1 = ret;
var G__15570__$1 = G__15570;
var G__15571__$1 = G__15571;
while(true){
var ret__$2 = ret__$1;
var vec__15578 = G__15570__$1;
var seq__15579 = cljs.core.seq.call(null,vec__15578);
var first__15580 = cljs.core.first.call(null,seq__15579);
var seq__15579__$1 = cljs.core.next.call(null,seq__15579);
var pred__$1 = first__15580;
var preds__$2 = seq__15579__$1;
var vec__15581 = G__15571__$1;
var seq__15582 = cljs.core.seq.call(null,vec__15581);
var first__15583 = cljs.core.first.call(null,seq__15582);
var seq__15582__$1 = cljs.core.next.call(null,seq__15582);
var form__$1 = first__15583;
var forms__$2 = seq__15582__$1;
=======
return (new cljs.spec.alpha.t_cljs$spec$alpha12137(keys,forms,preds,gfn,id,kps,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.and_preds = (function cljs$spec$alpha$and_preds(x,preds,forms){
var ret = x;
var G__12152 = preds;
var vec__12154 = G__12152;
var seq__12155 = cljs.core.seq.call(null,vec__12154);
var first__12156 = cljs.core.first.call(null,seq__12155);
var seq__12155__$1 = cljs.core.next.call(null,seq__12155);
var pred = first__12156;
var preds__$1 = seq__12155__$1;
var G__12153 = forms;
var vec__12157 = G__12153;
var seq__12158 = cljs.core.seq.call(null,vec__12157);
var first__12159 = cljs.core.first.call(null,seq__12158);
var seq__12158__$1 = cljs.core.next.call(null,seq__12158);
var form = first__12159;
var forms__$1 = seq__12158__$1;
var ret__$1 = ret;
var G__12152__$1 = G__12152;
var G__12153__$1 = G__12153;
while(true){
var ret__$2 = ret__$1;
var vec__12160 = G__12152__$1;
var seq__12161 = cljs.core.seq.call(null,vec__12160);
var first__12162 = cljs.core.first.call(null,seq__12161);
var seq__12161__$1 = cljs.core.next.call(null,seq__12161);
var pred__$1 = first__12162;
var preds__$2 = seq__12161__$1;
var vec__12163 = G__12153__$1;
var seq__12164 = cljs.core.seq.call(null,vec__12163);
var first__12165 = cljs.core.first.call(null,seq__12164);
var seq__12164__$1 = cljs.core.next.call(null,seq__12164);
var form__$1 = first__12165;
var forms__$2 = seq__12164__$1;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.alpha.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.spec.alpha.invalid_QMARK_.call(null,nret)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var G__15584 = nret;
var G__15585 = preds__$2;
var G__15586 = forms__$2;
ret__$1 = G__15584;
G__15570__$1 = G__15585;
G__15571__$1 = G__15586;
=======
var G__12166 = nret;
var G__12167 = preds__$2;
var G__12168 = forms__$2;
ret__$1 = G__12166;
G__12152__$1 = G__12167;
G__12153__$1 = G__12168;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
continue;
}
} else {
return ret__$2;
}
break;
}
});
cljs.spec.alpha.explain_pred_list = (function cljs$spec$alpha$explain_pred_list(forms,preds,path,via,in$,x){
var ret = x;
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var G__15593 = forms;
var vec__15595 = G__15593;
var seq__15596 = cljs.core.seq.call(null,vec__15595);
var first__15597 = cljs.core.first.call(null,seq__15596);
var seq__15596__$1 = cljs.core.next.call(null,seq__15596);
var form = first__15597;
var forms__$1 = seq__15596__$1;
var G__15594 = preds;
var vec__15598 = G__15594;
var seq__15599 = cljs.core.seq.call(null,vec__15598);
var first__15600 = cljs.core.first.call(null,seq__15599);
var seq__15599__$1 = cljs.core.next.call(null,seq__15599);
var pred = first__15600;
var preds__$1 = seq__15599__$1;
var ret__$1 = ret;
var G__15593__$1 = G__15593;
var G__15594__$1 = G__15594;
while(true){
var ret__$2 = ret__$1;
var vec__15601 = G__15593__$1;
var seq__15602 = cljs.core.seq.call(null,vec__15601);
var first__15603 = cljs.core.first.call(null,seq__15602);
var seq__15602__$1 = cljs.core.next.call(null,seq__15602);
var form__$1 = first__15603;
var forms__$2 = seq__15602__$1;
var vec__15604 = G__15594__$1;
var seq__15605 = cljs.core.seq.call(null,vec__15604);
var first__15606 = cljs.core.first.call(null,seq__15605);
var seq__15605__$1 = cljs.core.next.call(null,seq__15605);
var pred__$1 = first__15606;
var preds__$2 = seq__15605__$1;
=======
var G__12175 = forms;
var vec__12177 = G__12175;
var seq__12178 = cljs.core.seq.call(null,vec__12177);
var first__12179 = cljs.core.first.call(null,seq__12178);
var seq__12178__$1 = cljs.core.next.call(null,seq__12178);
var form = first__12179;
var forms__$1 = seq__12178__$1;
var G__12176 = preds;
var vec__12180 = G__12176;
var seq__12181 = cljs.core.seq.call(null,vec__12180);
var first__12182 = cljs.core.first.call(null,seq__12181);
var seq__12181__$1 = cljs.core.next.call(null,seq__12181);
var pred = first__12182;
var preds__$1 = seq__12181__$1;
var ret__$1 = ret;
var G__12175__$1 = G__12175;
var G__12176__$1 = G__12176;
while(true){
var ret__$2 = ret__$1;
var vec__12183 = G__12175__$1;
var seq__12184 = cljs.core.seq.call(null,vec__12183);
var first__12185 = cljs.core.first.call(null,seq__12184);
var seq__12184__$1 = cljs.core.next.call(null,seq__12184);
var form__$1 = first__12185;
var forms__$2 = seq__12184__$1;
var vec__12186 = G__12176__$1;
var seq__12187 = cljs.core.seq.call(null,vec__12186);
var first__12188 = cljs.core.first.call(null,seq__12187);
var seq__12187__$1 = cljs.core.next.call(null,seq__12187);
var pred__$1 = first__12188;
var preds__$2 = seq__12187__$1;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.alpha.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.spec.alpha.invalid_QMARK_.call(null,nret)){
return cljs.spec.alpha.explain_1.call(null,form__$1,pred__$1,path,via,in$,ret__$2);
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var G__15607 = nret;
var G__15608 = forms__$2;
var G__15609 = preds__$2;
ret__$1 = G__15607;
G__15593__$1 = G__15608;
G__15594__$1 = G__15609;
=======
var G__12189 = nret;
var G__12190 = forms__$2;
var G__12191 = preds__$2;
ret__$1 = G__12189;
G__12175__$1 = G__12190;
G__12176__$1 = G__12191;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Do not call this directly, use 'and'
 */
cljs.spec.alpha.and_spec_impl = (function cljs$spec$alpha$and_spec_impl(forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.call(null,cljs.spec.alpha.specize,preds,forms);
}),null));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var cform = (function (){var G__15612 = cljs.core.count.call(null,preds);
switch (G__15612) {
case (2):
return ((function (G__15612,specs){
=======
var cform = (function (){var G__12194 = cljs.core.count.call(null,preds);
switch (G__12194) {
case (2):
return ((function (G__12194,specs){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(1)),ret);
}
});
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
;})(G__15612,specs))

break;
case (3):
return ((function (G__15612,specs){
=======
;})(G__12194,specs))

break;
case (3):
return ((function (G__12194,specs){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var ret__$1 = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(1)),ret);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$1)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(2)),ret__$1);
}
}
});
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
;})(G__15612,specs))

break;
default:
return ((function (G__15612,specs){
=======
;})(G__12194,specs))

break;
default:
return ((function (G__12194,specs){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = x;
var i = (0);
while(true){
if((i < cljs.core.count.call(null,specs__$1))){
var nret = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,i),ret);
if(cljs.spec.alpha.invalid_QMARK_.call(null,nret)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var G__15617 = nret;
var G__15618 = (i + (1));
ret = G__15617;
i = G__15618;
=======
var G__12199 = nret;
var G__12200 = (i + (1));
ret = G__12199;
i = G__12200;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
continue;
}
} else {
return ret;
}
break;
}
});
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
;})(G__15612,specs))

}
})();
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha15613 !== 'undefined')){
=======
;})(G__12194,specs))

}
})();
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha12195 !== 'undefined')){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15613 = (function (forms,preds,gfn,specs,cform,meta15614){
=======
cljs.spec.alpha.t_cljs$spec$alpha12195 = (function (forms,preds,gfn,specs,cform,meta12196){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cform = cform;
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
this.meta15614 = meta15614;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha15613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cform){
return (function (_15615,meta15614__$1){
var self__ = this;
var _15615__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15613(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cform,meta15614__$1));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha15613.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cform){
return (function (_15615){
var self__ = this;
var _15615__$1 = this;
return self__.meta15614;
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha15613.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15613.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs,cform){
=======
this.meta12196 = meta12196;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha12195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cform){
return (function (_12197,meta12196__$1){
var self__ = this;
var _12197__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha12195(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cform,meta12196__$1));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha12195.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cform){
return (function (_12197){
var self__ = this;
var _12197__$1 = this;
return self__.meta12196;
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha12195.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha12195.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs,cform){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15613.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs,cform){
=======
cljs.spec.alpha.t_cljs$spec$alpha12195.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs,cform){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15613.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15613.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs,cform){
=======
cljs.spec.alpha.t_cljs$spec$alpha12195.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha12195.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs,cform){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
});})(specs,cform))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15613.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs,cform){
=======
cljs.spec.alpha.t_cljs$spec$alpha12195.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs,cform){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.call(null,((function (___$1,specs,cform){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
return (function (p1__15611_SHARP_,p2__15610_SHARP_){
return cljs.spec.alpha.unform.call(null,p2__15610_SHARP_,p1__15611_SHARP_);
=======
return (function (p1__12193_SHARP_,p2__12192_SHARP_){
return cljs.spec.alpha.unform.call(null,p2__12192_SHARP_,p1__12193_SHARP_);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
});})(___$1,specs,cform))
,x,cljs.core.reverse.call(null,self__.preds));
});})(specs,cform))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15613.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs,cform){
=======
cljs.spec.alpha.t_cljs$spec$alpha12195.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs,cform){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.explain_pred_list.call(null,self__.forms,self__.preds,path,via,in$,x);
});})(specs,cform))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15613.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs,cform){
=======
cljs.spec.alpha.t_cljs$spec$alpha12195.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs,cform){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.alpha.gensub.call(null,cljs.core.first.call(null,self__.preds),overrides,path,rmap,cljs.core.first.call(null,self__.forms));
}
});})(specs,cform))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15613.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs,cform){
=======
cljs.spec.alpha.t_cljs$spec$alpha12195.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs,cform){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});})(specs,cform))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15613.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs,cform){
=======
cljs.spec.alpha.t_cljs$spec$alpha12195.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs,cform){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),null,(1),null)),self__.forms)));
});})(specs,cform))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15613.getBasis = ((function (specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta15614","meta15614",-1083776132,null)], null);
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha15613.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha15613.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15613";

cljs.spec.alpha.t_cljs$spec$alpha15613.cljs$lang$ctorPrWriter = ((function (specs,cform){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15613");
=======
cljs.spec.alpha.t_cljs$spec$alpha12195.getBasis = ((function (specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta12196","meta12196",-1144278262,null)], null);
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha12195.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha12195.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha12195";

cljs.spec.alpha.t_cljs$spec$alpha12195.cljs$lang$ctorPrWriter = ((function (specs,cform){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.spec.alpha/t_cljs$spec$alpha12195");
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
});})(specs,cform))
;

/**
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha15613.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha15613 = ((function (specs,cform){
return (function cljs$spec$alpha$and_spec_impl_$___GT_t_cljs$spec$alpha15613(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta15614){
return (new cljs.spec.alpha.t_cljs$spec$alpha15613(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta15614));
=======
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha12195.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha12195 = ((function (specs,cform){
return (function cljs$spec$alpha$and_spec_impl_$___GT_t_cljs$spec$alpha12195(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta12196){
return (new cljs.spec.alpha.t_cljs$spec$alpha12195(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta12196));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
});})(specs,cform))
;

}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
return (new cljs.spec.alpha.t_cljs$spec$alpha15613(forms,preds,gfn,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new cljs.spec.alpha.t_cljs$spec$alpha12195(forms,preds,gfn,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
});
cljs.spec.alpha.coll_prob = (function cljs$spec$alpha$coll_prob(x,kfn,kform,distinct,count,min_count,max_count,path,via,in$){
var pred = (function (){var or__4131__auto__ = kfn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.coll_QMARK_;
}
})();
var kform__$1 = (function (){var or__4131__auto__ = kform;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null);
}
})();
if((!(cljs.spec.alpha.pvalid_QMARK_.call(null,pred,x)))){
return cljs.spec.alpha.explain_1.call(null,kform__$1,pred,path,via,in$,x);
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = count;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.call(null,count,cljs.core.bounded_count.call(null,count,x));
} else {
return and__4120__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,count,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))))),null,(1),null))))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = (function (){var or__4131__auto__ = min_count;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return max_count;
}
})();
if(cljs.core.truth_(and__4120__auto__)){
return (!(((((function (){var or__4131__auto__ = min_count;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count.call(null,(cljs.core.truth_(max_count)?(max_count + (1)):min_count),x))) && ((cljs.core.bounded_count.call(null,(cljs.core.truth_(max_count)?(max_count + (1)):min_count),x) <= (function (){var or__4131__auto__ = max_count;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (9007199254740991);
}
})())))));
} else {
return and__4120__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),null,(1),null)),(new cljs.core.List(null,(function (){var or__4131__auto__ = min_count;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})(),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,(function (){var or__4131__auto__ = max_count;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (9007199254740991);
}
})(),null,(1),null))))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = distinct;
if(cljs.core.truth_(and__4120__auto__)){
return (((!(cljs.core.empty_QMARK_.call(null,x)))) && (cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core.distinct_QMARK_,x))));
} else {
return and__4120__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"distinct?","distinct?",-1684357959,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
}
}
}
});
/**
 * Do not call this directly, use 'merge'
 */
cljs.spec.alpha.merge_spec_impl = (function cljs$spec$alpha$merge_spec_impl(forms,preds,gfn){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha15627 !== 'undefined')){
=======
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha12209 !== 'undefined')){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15627 = (function (forms,preds,gfn,meta15628){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta15628 = meta15628;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha15627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15629,meta15628__$1){
var self__ = this;
var _15629__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15627(self__.forms,self__.preds,self__.gfn,meta15628__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha15627.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15629){
var self__ = this;
var _15629__$1 = this;
return self__.meta15628;
});

cljs.spec.alpha.t_cljs$spec$alpha15627.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15627.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
=======
cljs.spec.alpha.t_cljs$spec$alpha12209 = (function (forms,preds,gfn,meta12210){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta12210 = meta12210;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha12209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12211,meta12210__$1){
var self__ = this;
var _12211__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha12209(self__.forms,self__.preds,self__.gfn,meta12210__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha12209.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12211){
var self__ = this;
var _12211__$1 = this;
return self__.meta12210;
});

cljs.spec.alpha.t_cljs$spec$alpha12209.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha12209.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
var self__ = this;
var s__$1 = this;
return s__$1;
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15627.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
=======
cljs.spec.alpha.t_cljs$spec$alpha12209.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
var self__ = this;
var s__$1 = this;
return s__$1;
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15627.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15627.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ms = cljs.core.map.call(null,((function (___$1){
return (function (p1__15619_SHARP_,p2__15620_SHARP_){
return cljs.spec.alpha.dt.call(null,p1__15619_SHARP_,x,p2__15620_SHARP_);
=======
cljs.spec.alpha.t_cljs$spec$alpha12209.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha12209.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ms = cljs.core.map.call(null,((function (___$1){
return (function (p1__12201_SHARP_,p2__12202_SHARP_){
return cljs.spec.alpha.dt.call(null,p1__12201_SHARP_,x,p2__12202_SHARP_);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
});})(___$1))
,self__.preds,self__.forms);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.spec.alpha.invalid_QMARK_,ms))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.core.apply.call(null,cljs.core.merge,ms);
}
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15627.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (___$1){
return (function (p1__15621_SHARP_){
return cljs.spec.alpha.unform.call(null,p1__15621_SHARP_,x);
=======
cljs.spec.alpha.t_cljs$spec$alpha12209.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (___$1){
return (function (p1__12203_SHARP_){
return cljs.spec.alpha.unform.call(null,p1__12203_SHARP_,x);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
});})(___$1))
,cljs.core.reverse.call(null,self__.preds)));
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15627.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (___$1){
return (function (p1__15622_SHARP_,p2__15623_SHARP_){
return cljs.spec.alpha.explain_1.call(null,p1__15622_SHARP_,p2__15623_SHARP_,path,via,in$,x);
=======
cljs.spec.alpha.t_cljs$spec$alpha12209.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (___$1){
return (function (p1__12204_SHARP_,p2__12205_SHARP_){
return cljs.spec.alpha.explain_1.call(null,p1__12204_SHARP_,p2__12205_SHARP_,path,via,in$,x);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
});})(___$1))
,self__.forms,self__.preds));
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15627.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
=======
cljs.spec.alpha.t_cljs$spec$alpha12209.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gen.alpha.fmap.call(null,((function (___$1){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
return (function (p1__15624_SHARP_){
return cljs.core.apply.call(null,cljs.core.merge,p1__15624_SHARP_);
});})(___$1))
,cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,cljs.core.map.call(null,((function (___$1){
return (function (p1__15625_SHARP_,p2__15626_SHARP_){
return cljs.spec.alpha.gensub.call(null,p1__15625_SHARP_,overrides,path,rmap,p2__15626_SHARP_);
=======
return (function (p1__12206_SHARP_){
return cljs.core.apply.call(null,cljs.core.merge,p1__12206_SHARP_);
});})(___$1))
,cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,cljs.core.map.call(null,((function (___$1){
return (function (p1__12207_SHARP_,p2__12208_SHARP_){
return cljs.spec.alpha.gensub.call(null,p1__12207_SHARP_,overrides,path,rmap,p2__12208_SHARP_);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
});})(___$1))
,self__.preds,self__.forms)));
}
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15627.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
=======
cljs.spec.alpha.t_cljs$spec$alpha12209.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.merge_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15627.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
=======
cljs.spec.alpha.t_cljs$spec$alpha12209.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","merge","cljs.spec.alpha/merge",1420080689,null),null,(1),null)),self__.forms)));
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15627.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta15628","meta15628",-1686729045,null)], null);
});

cljs.spec.alpha.t_cljs$spec$alpha15627.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha15627.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15627";

cljs.spec.alpha.t_cljs$spec$alpha15627.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15627");
});

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha15627.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha15627 = (function cljs$spec$alpha$merge_spec_impl_$___GT_t_cljs$spec$alpha15627(forms__$1,preds__$1,gfn__$1,meta15628){
return (new cljs.spec.alpha.t_cljs$spec$alpha15627(forms__$1,preds__$1,gfn__$1,meta15628));
=======
cljs.spec.alpha.t_cljs$spec$alpha12209.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta12210","meta12210",51258625,null)], null);
});

cljs.spec.alpha.t_cljs$spec$alpha12209.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha12209.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha12209";

cljs.spec.alpha.t_cljs$spec$alpha12209.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.spec.alpha/t_cljs$spec$alpha12209");
});

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha12209.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha12209 = (function cljs$spec$alpha$merge_spec_impl_$___GT_t_cljs$spec$alpha12209(forms__$1,preds__$1,gfn__$1,meta12210){
return (new cljs.spec.alpha.t_cljs$spec$alpha12209(forms__$1,preds__$1,gfn__$1,meta12210));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
});

}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
return (new cljs.spec.alpha.t_cljs$spec$alpha15627(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new cljs.spec.alpha.t_cljs$spec$alpha12209(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
});
cljs.spec.alpha.empty_coll = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.PersistentVector.EMPTY,new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Symbol("cljs.core","list?","cljs.core/list?",-684796618,null),cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Do not call this directly, use 'every', 'every-kv', 'coll-of' or 'map-of'
 */
cljs.spec.alpha.every_impl = (function cljs$spec$alpha$every_impl(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var G__15635 = arguments.length;
switch (G__15635) {
=======
var G__12217 = arguments.length;
switch (G__12217) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
case 3:
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,pred,opts){
return cljs.spec.alpha.every_impl.call(null,form,pred,opts,null);
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__15636,gfn){
var map__15637 = p__15636;
var map__15637__$1 = (((((!((map__15637 == null))))?(((((map__15637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15637):map__15637);
var opts = map__15637__$1;
var max_count = cljs.core.get.call(null,map__15637__$1,new cljs.core.Keyword(null,"max-count","max-count",1539185305));
var kind_form = cljs.core.get.call(null,map__15637__$1,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697));
var gen_max = cljs.core.get.call(null,map__15637__$1,new cljs.core.Keyword(null,"gen-max","gen-max",-793680445),(20));
var cpred = cljs.core.get.call(null,map__15637__$1,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218));
var conform_keys = cljs.core.get.call(null,map__15637__$1,new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814));
var describe_form = cljs.core.get.call(null,map__15637__$1,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911));
var distinct = cljs.core.get.call(null,map__15637__$1,new cljs.core.Keyword(null,"distinct","distinct",-1788879121));
var kfn = cljs.core.get.call(null,map__15637__$1,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897));
var count = cljs.core.get.call(null,map__15637__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var min_count = cljs.core.get.call(null,map__15637__$1,new cljs.core.Keyword(null,"min-count","min-count",1594709013));
var kind = cljs.core.get.call(null,map__15637__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var conform_all = cljs.core.get.call(null,map__15637__$1,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917));
var conform_into = cljs.core.get.call(null,map__15637__$1,new cljs.core.Keyword(null,"into","into",-150836029));
var gen_into = (cljs.core.truth_(conform_into)?cljs.core.empty.call(null,conform_into):cljs.core.get.call(null,cljs.spec.alpha.empty_coll,kind_form));
var spec = (new cljs.core.Delay(((function (gen_into,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (){
return cljs.spec.alpha.specize.call(null,pred);
});})(gen_into,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
,null));
var check_QMARK_ = ((function (gen_into,spec,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (p1__15630_SHARP_){
return cljs.spec.alpha.valid_QMARK_.call(null,cljs.core.deref.call(null,spec),p1__15630_SHARP_);
});})(gen_into,spec,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
=======
cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__12218,gfn){
var map__12219 = p__12218;
var map__12219__$1 = (((((!((map__12219 == null))))?(((((map__12219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12219):map__12219);
var opts = map__12219__$1;
var max_count = cljs.core.get.call(null,map__12219__$1,new cljs.core.Keyword(null,"max-count","max-count",1539185305));
var kind_form = cljs.core.get.call(null,map__12219__$1,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697));
var gen_max = cljs.core.get.call(null,map__12219__$1,new cljs.core.Keyword(null,"gen-max","gen-max",-793680445),(20));
var cpred = cljs.core.get.call(null,map__12219__$1,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218));
var conform_keys = cljs.core.get.call(null,map__12219__$1,new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814));
var describe_form = cljs.core.get.call(null,map__12219__$1,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911));
var distinct = cljs.core.get.call(null,map__12219__$1,new cljs.core.Keyword(null,"distinct","distinct",-1788879121));
var kfn = cljs.core.get.call(null,map__12219__$1,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897));
var count = cljs.core.get.call(null,map__12219__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var min_count = cljs.core.get.call(null,map__12219__$1,new cljs.core.Keyword(null,"min-count","min-count",1594709013));
var kind = cljs.core.get.call(null,map__12219__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var conform_all = cljs.core.get.call(null,map__12219__$1,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917));
var conform_into = cljs.core.get.call(null,map__12219__$1,new cljs.core.Keyword(null,"into","into",-150836029));
var gen_into = (cljs.core.truth_(conform_into)?cljs.core.empty.call(null,conform_into):cljs.core.get.call(null,cljs.spec.alpha.empty_coll,kind_form));
var spec = (new cljs.core.Delay(((function (gen_into,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (){
return cljs.spec.alpha.specize.call(null,pred);
});})(gen_into,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
,null));
var check_QMARK_ = ((function (gen_into,spec,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (p1__12212_SHARP_){
return cljs.spec.alpha.valid_QMARK_.call(null,cljs.core.deref.call(null,spec),p1__12212_SHARP_);
});})(gen_into,spec,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
;
var kfn__$1 = (function (){var or__4131__auto__ = kfn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
return ((function (or__4131__auto__,gen_into,spec,check_QMARK_,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (i,v){
return i;
});
;})(or__4131__auto__,gen_into,spec,check_QMARK_,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
}
})();
var addcv = ((function (gen_into,spec,check_QMARK_,kfn__$1,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (ret,i,v,cv){
return cljs.core.conj.call(null,ret,cv);
});})(gen_into,spec,check_QMARK_,kfn__$1,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;
var cfns = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (x){
if(((cljs.core.vector_QMARK_.call(null,x)) && (((cljs.core.not.call(null,conform_into)) || (cljs.core.vector_QMARK_.call(null,conform_into)))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
=======
return ((function (or__4131__auto__,gen_into,spec,check_QMARK_,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (i,v){
return i;
});
;})(or__4131__auto__,gen_into,spec,check_QMARK_,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
}
})();
var addcv = ((function (gen_into,spec,check_QMARK_,kfn__$1,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (ret,i,v,cv){
return cljs.core.conj.call(null,ret,cv);
});})(gen_into,spec,check_QMARK_,kfn__$1,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;
var cfns = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (x){
if(((cljs.core.vector_QMARK_.call(null,x)) && (((cljs.core.not.call(null,conform_into)) || (cljs.core.vector_QMARK_.call(null,conform_into)))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (ret,i,v,cv){
if((v === cv)){
return ret;
} else {
return cljs.core.assoc.call(null,ret,i,cv);
}
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
=======
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
,cljs.core.identity], null);
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__4120__auto__){
var or__4131__auto__ = (function (){var and__4120__auto____$1 = kind;
if(cljs.core.truth_(and__4120__auto____$1)){
return cljs.core.not.call(null,conform_into);
} else {
return and__4120__auto____$1;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.map_QMARK_.call(null,conform_into);
}
} else {
return and__4120__auto__;
}
})())){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(conform_keys)?cljs.core.empty:cljs.core.identity),((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
=======
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(conform_keys)?cljs.core.empty:cljs.core.identity),((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (ret,i,v,cv){
if((((v === cv)) && (cljs.core.not.call(null,conform_keys)))){
return ret;
} else {
return cljs.core.assoc.call(null,ret,cljs.core.nth.call(null,(cljs.core.truth_(conform_keys)?cv:v),(0)),cljs.core.nth.call(null,cv,(1)));
}
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
=======
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
,cljs.core.identity], null);
} else {
if(((cljs.core.list_QMARK_.call(null,conform_into)) || (cljs.core.seq_QMARK_.call(null,conform_into)) || (((cljs.core.not.call(null,conform_into)) && (((cljs.core.list_QMARK_.call(null,x)) || (cljs.core.seq_QMARK_.call(null,x)))))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.empty,addcv,cljs.core.reverse], null);
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (p1__15631_SHARP_){
=======
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (p1__12213_SHARP_){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return cljs.core.empty.call(null,(function (){var or__4131__auto__ = conform_into;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
return p1__15631_SHARP_;
}
})());
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
=======
return p1__12213_SHARP_;
}
})());
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
,addcv,cljs.core.identity], null);

}
}
}
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha15639 !== 'undefined')){
=======
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha12221 !== 'undefined')){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15639 = (function (form,max_count,check_QMARK_,p__15636,gfn,gen_max,map__15637,pred,cpred,conform_keys,kind_form,addcv,cfns,describe_form,distinct,spec,kfn,gen_into,count,min_count,opts,kind,conform_all,conform_into,meta15640){
=======
cljs.spec.alpha.t_cljs$spec$alpha12221 = (function (form,max_count,check_QMARK_,gfn,gen_max,pred,map__12219,cpred,conform_keys,kind_form,addcv,cfns,describe_form,p__12218,distinct,spec,kfn,gen_into,count,min_count,opts,kind,conform_all,conform_into,meta12222){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
this.form = form;
this.max_count = max_count;
this.check_QMARK_ = check_QMARK_;
this.p__15636 = p__15636;
this.gfn = gfn;
this.gen_max = gen_max;
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
this.map__15637 = map__15637;
this.pred = pred;
=======
this.pred = pred;
this.map__12219 = map__12219;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
this.cpred = cpred;
this.conform_keys = conform_keys;
this.kind_form = kind_form;
this.addcv = addcv;
this.cfns = cfns;
this.describe_form = describe_form;
this.p__12218 = p__12218;
this.distinct = distinct;
this.spec = spec;
this.kfn = kfn;
this.gen_into = gen_into;
this.count = count;
this.min_count = min_count;
this.opts = opts;
this.kind = kind;
this.conform_all = conform_all;
this.conform_into = conform_into;
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
this.meta15640 = meta15640;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha15639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (_15641,meta15640__$1){
var self__ = this;
var _15641__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15639(self__.form,self__.max_count,self__.check_QMARK_,self__.p__15636,self__.gfn,self__.gen_max,self__.map__15637,self__.pred,self__.cpred,self__.conform_keys,self__.kind_form,self__.addcv,self__.cfns,self__.describe_form,self__.distinct,self__.spec,self__.kfn,self__.gen_into,self__.count,self__.min_count,self__.opts,self__.kind,self__.conform_all,self__.conform_into,meta15640__$1));
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha15639.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (_15641){
var self__ = this;
var _15641__$1 = this;
return self__.meta15640;
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha15639.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15639.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
=======
this.meta12222 = meta12222;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha12221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (_12223,meta12222__$1){
var self__ = this;
var _12223__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha12221(self__.form,self__.max_count,self__.check_QMARK_,self__.gfn,self__.gen_max,self__.pred,self__.map__12219,self__.cpred,self__.conform_keys,self__.kind_form,self__.addcv,self__.cfns,self__.describe_form,self__.p__12218,self__.distinct,self__.spec,self__.kfn,self__.gen_into,self__.count,self__.min_count,self__.opts,self__.kind,self__.conform_all,self__.conform_into,meta12222__$1));
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha12221.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (_12223){
var self__ = this;
var _12223__$1 = this;
return self__.meta12222;
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha12221.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha12221.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha15639.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
=======
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha12221.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha15639.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15639.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
=======
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha12221.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha12221.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,x){
var self__ = this;
var ___$1 = this;
var spec__$1 = cljs.core.deref.call(null,self__.spec);
if(cljs.core.not.call(null,self__.cpred.call(null,x))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
if(cljs.core.truth_(self__.conform_all)){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var vec__15642 = self__.cfns.call(null,x);
var init = cljs.core.nth.call(null,vec__15642,(0),null);
var add = cljs.core.nth.call(null,vec__15642,(1),null);
var complete = cljs.core.nth.call(null,vec__15642,(2),null);
var ret = init.call(null,x);
var i = (0);
var G__15648 = cljs.core.seq.call(null,x);
var vec__15649 = G__15648;
var seq__15650 = cljs.core.seq.call(null,vec__15649);
var first__15651 = cljs.core.first.call(null,seq__15650);
var seq__15650__$1 = cljs.core.next.call(null,seq__15650);
var v = first__15651;
var vs = seq__15650__$1;
var vseq = vec__15649;
var ret__$1 = ret;
var i__$1 = i;
var G__15648__$1 = G__15648;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__15652 = G__15648__$1;
var seq__15653 = cljs.core.seq.call(null,vec__15652);
var first__15654 = cljs.core.first.call(null,seq__15653);
var seq__15653__$1 = cljs.core.next.call(null,seq__15653);
var v__$1 = first__15654;
var vs__$1 = seq__15653__$1;
var vseq__$1 = vec__15652;
=======
var vec__12224 = self__.cfns.call(null,x);
var init = cljs.core.nth.call(null,vec__12224,(0),null);
var add = cljs.core.nth.call(null,vec__12224,(1),null);
var complete = cljs.core.nth.call(null,vec__12224,(2),null);
var ret = init.call(null,x);
var i = (0);
var G__12230 = cljs.core.seq.call(null,x);
var vec__12231 = G__12230;
var seq__12232 = cljs.core.seq.call(null,vec__12231);
var first__12233 = cljs.core.first.call(null,seq__12232);
var seq__12232__$1 = cljs.core.next.call(null,seq__12232);
var v = first__12233;
var vs = seq__12232__$1;
var vseq = vec__12231;
var ret__$1 = ret;
var i__$1 = i;
var G__12230__$1 = G__12230;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__12234 = G__12230__$1;
var seq__12235 = cljs.core.seq.call(null,vec__12234);
var first__12236 = cljs.core.first.call(null,seq__12235);
var seq__12235__$1 = cljs.core.next.call(null,seq__12235);
var v__$1 = first__12236;
var vs__$1 = seq__12235__$1;
var vseq__$1 = vec__12234;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
if(vseq__$1){
var cv = cljs.spec.alpha.conform_STAR_.call(null,spec__$1,v__$1);
if(cljs.spec.alpha.invalid_QMARK_.call(null,cv)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var G__15679 = add.call(null,ret__$2,i__$2,v__$1,cv);
var G__15680 = (i__$2 + (1));
var G__15681 = vs__$1;
ret__$1 = G__15679;
i__$1 = G__15680;
G__15648__$1 = G__15681;
=======
var G__12261 = add.call(null,ret__$2,i__$2,v__$1,cv);
var G__12262 = (i__$2 + (1));
var G__12263 = vs__$1;
ret__$1 = G__12261;
i__$1 = G__12262;
G__12230__$1 = G__12263;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
continue;
}
} else {
return complete.call(null,ret__$2);
}
break;
}
} else {
if(cljs.core.indexed_QMARK_.call(null,x)){
var step = (function (){var x__4219__auto__ = (1);
var y__4220__auto__ = cljs.core.long$.call(null,(cljs.core.count.call(null,x) / cljs.spec.alpha._STAR_coll_check_limit_STAR_));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var i = (0);
while(true){
if((i >= cljs.core.count.call(null,x))){
return x;
} else {
if(cljs.spec.alpha.valid_QMARK_.call(null,spec__$1,cljs.core.nth.call(null,x,i))){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var G__15682 = (i + step);
i = G__15682;
=======
var G__12264 = (i + step);
i = G__12264;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
continue;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}
break;
}
} else {
var limit = cljs.spec.alpha._STAR_coll_check_limit_STAR_;
var i = (0);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var G__15658 = cljs.core.seq.call(null,x);
var vec__15659 = G__15658;
var seq__15660 = cljs.core.seq.call(null,vec__15659);
var first__15661 = cljs.core.first.call(null,seq__15660);
var seq__15660__$1 = cljs.core.next.call(null,seq__15660);
var v = first__15661;
var vs = seq__15660__$1;
var vseq = vec__15659;
var i__$1 = i;
var G__15658__$1 = G__15658;
while(true){
var i__$2 = i__$1;
var vec__15662 = G__15658__$1;
var seq__15663 = cljs.core.seq.call(null,vec__15662);
var first__15664 = cljs.core.first.call(null,seq__15663);
var seq__15663__$1 = cljs.core.next.call(null,seq__15663);
var v__$1 = first__15664;
var vs__$1 = seq__15663__$1;
var vseq__$1 = vec__15662;
=======
var G__12240 = cljs.core.seq.call(null,x);
var vec__12241 = G__12240;
var seq__12242 = cljs.core.seq.call(null,vec__12241);
var first__12243 = cljs.core.first.call(null,seq__12242);
var seq__12242__$1 = cljs.core.next.call(null,seq__12242);
var v = first__12243;
var vs = seq__12242__$1;
var vseq = vec__12241;
var i__$1 = i;
var G__12240__$1 = G__12240;
while(true){
var i__$2 = i__$1;
var vec__12244 = G__12240__$1;
var seq__12245 = cljs.core.seq.call(null,vec__12244);
var first__12246 = cljs.core.first.call(null,seq__12245);
var seq__12245__$1 = cljs.core.next.call(null,seq__12245);
var v__$1 = first__12246;
var vs__$1 = seq__12245__$1;
var vseq__$1 = vec__12244;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
if((((vseq__$1 == null)) || (cljs.core._EQ_.call(null,i__$2,limit)))){
return x;
} else {
if(cljs.spec.alpha.valid_QMARK_.call(null,spec__$1,v__$1)){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var G__15683 = (i__$2 + (1));
var G__15684 = vs__$1;
i__$1 = G__15683;
G__15658__$1 = G__15684;
=======
var G__12265 = (i__$2 + (1));
var G__12266 = vs__$1;
i__$1 = G__12265;
G__12240__$1 = G__12266;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
continue;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);

}
}
break;
}
}

}
}
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha15639.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
=======
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha12221.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.conform_all)){
var spec__$1 = cljs.core.deref.call(null,self__.spec);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var vec__15665 = self__.cfns.call(null,x);
var init = cljs.core.nth.call(null,vec__15665,(0),null);
var add = cljs.core.nth.call(null,vec__15665,(1),null);
var complete = cljs.core.nth.call(null,vec__15665,(2),null);
var ret = init.call(null,x);
var i = (0);
var G__15671 = cljs.core.seq.call(null,x);
var vec__15672 = G__15671;
var seq__15673 = cljs.core.seq.call(null,vec__15672);
var first__15674 = cljs.core.first.call(null,seq__15673);
var seq__15673__$1 = cljs.core.next.call(null,seq__15673);
var v = first__15674;
var vs = seq__15673__$1;
var vseq = vec__15672;
var ret__$1 = ret;
var i__$1 = i;
var G__15671__$1 = G__15671;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__15675 = G__15671__$1;
var seq__15676 = cljs.core.seq.call(null,vec__15675);
var first__15677 = cljs.core.first.call(null,seq__15676);
var seq__15676__$1 = cljs.core.next.call(null,seq__15676);
var v__$1 = first__15677;
var vs__$1 = seq__15676__$1;
var vseq__$1 = vec__15675;
if((i__$2 >= cljs.core.count.call(null,x))){
return complete.call(null,ret__$2);
} else {
var G__15685 = add.call(null,ret__$2,i__$2,v__$1,cljs.spec.alpha.unform_STAR_.call(null,spec__$1,v__$1));
var G__15686 = (i__$2 + (1));
var G__15687 = vs__$1;
ret__$1 = G__15685;
i__$1 = G__15686;
G__15671__$1 = G__15687;
=======
var vec__12247 = self__.cfns.call(null,x);
var init = cljs.core.nth.call(null,vec__12247,(0),null);
var add = cljs.core.nth.call(null,vec__12247,(1),null);
var complete = cljs.core.nth.call(null,vec__12247,(2),null);
var ret = init.call(null,x);
var i = (0);
var G__12253 = cljs.core.seq.call(null,x);
var vec__12254 = G__12253;
var seq__12255 = cljs.core.seq.call(null,vec__12254);
var first__12256 = cljs.core.first.call(null,seq__12255);
var seq__12255__$1 = cljs.core.next.call(null,seq__12255);
var v = first__12256;
var vs = seq__12255__$1;
var vseq = vec__12254;
var ret__$1 = ret;
var i__$1 = i;
var G__12253__$1 = G__12253;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__12257 = G__12253__$1;
var seq__12258 = cljs.core.seq.call(null,vec__12257);
var first__12259 = cljs.core.first.call(null,seq__12258);
var seq__12258__$1 = cljs.core.next.call(null,seq__12258);
var v__$1 = first__12259;
var vs__$1 = seq__12258__$1;
var vseq__$1 = vec__12257;
if((i__$2 >= cljs.core.count.call(null,x))){
return complete.call(null,ret__$2);
} else {
var G__12267 = add.call(null,ret__$2,i__$2,v__$1,cljs.spec.alpha.unform_STAR_.call(null,spec__$1,v__$1));
var G__12268 = (i__$2 + (1));
var G__12269 = vs__$1;
ret__$1 = G__12267;
i__$1 = G__12268;
G__12253__$1 = G__12269;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
continue;
}
break;
}
} else {
return x;
}
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha15639.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
=======
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha12221.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var or__4131__auto__ = cljs.spec.alpha.coll_prob.call(null,x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,path,via,in$);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
return cljs.core.apply.call(null,cljs.core.concat,(cljs.core.truth_(self__.conform_all)?cljs.core.identity:cljs.core.partial.call(null,cljs.core.take,cljs.spec.alpha._STAR_coll_error_limit_STAR_)).call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (or__4131__auto__,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
=======
return cljs.core.apply.call(null,cljs.core.concat,(cljs.core.truth_(self__.conform_all)?cljs.core.identity:cljs.core.partial.call(null,cljs.core.take,cljs.spec.alpha._STAR_coll_error_limit_STAR_)).call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (or__4131__auto__,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (i,v){
var k = self__.kfn.call(null,i,v);
if(cljs.core.truth_(self__.check_QMARK_.call(null,v))){
return null;
} else {
var prob = cljs.spec.alpha.explain_1.call(null,self__.form,self__.pred,path,via,cljs.core.conj.call(null,in$,k),v);
return prob;
}
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
});})(or__4131__auto__,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
,cljs.core.range.call(null),x))));
}
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha15639.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
=======
});})(or__4131__auto__,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
,cljs.core.range.call(null),x))));
}
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha12221.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var pgen = cljs.spec.alpha.gensub.call(null,self__.pred,overrides,path,rmap,self__.form);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
return cljs.spec.gen.alpha.bind.call(null,(cljs.core.truth_(self__.gen_into)?cljs.spec.gen.alpha.return$.call(null,self__.gen_into):(cljs.core.truth_(self__.kind)?cljs.spec.gen.alpha.fmap.call(null,((function (pgen,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (p1__15632_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p1__15632_SHARP_)){
return p1__15632_SHARP_;
} else {
return cljs.core.empty.call(null,p1__15632_SHARP_);
}
});})(pgen,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
,cljs.spec.alpha.gensub.call(null,self__.kind,overrides,path,rmap,self__.form)):cljs.spec.gen.alpha.return$.call(null,cljs.core.PersistentVector.EMPTY)
)),((function (pgen,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (init){
return cljs.spec.gen.alpha.fmap.call(null,((function (pgen,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (p1__15633_SHARP_){
if(cljs.core.vector_QMARK_.call(null,init)){
return p1__15633_SHARP_;
} else {
return cljs.core.into.call(null,init,p1__15633_SHARP_);
}
});})(pgen,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
=======
return cljs.spec.gen.alpha.bind.call(null,(cljs.core.truth_(self__.gen_into)?cljs.spec.gen.alpha.return$.call(null,self__.gen_into):(cljs.core.truth_(self__.kind)?cljs.spec.gen.alpha.fmap.call(null,((function (pgen,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (p1__12214_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p1__12214_SHARP_)){
return p1__12214_SHARP_;
} else {
return cljs.core.empty.call(null,p1__12214_SHARP_);
}
});})(pgen,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
,cljs.spec.alpha.gensub.call(null,self__.kind,overrides,path,rmap,self__.form)):cljs.spec.gen.alpha.return$.call(null,cljs.core.PersistentVector.EMPTY)
)),((function (pgen,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (init){
return cljs.spec.gen.alpha.fmap.call(null,((function (pgen,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (p1__12215_SHARP_){
if(cljs.core.vector_QMARK_.call(null,init)){
return p1__12215_SHARP_;
} else {
return cljs.core.into.call(null,init,p1__12215_SHARP_);
}
});})(pgen,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
,(cljs.core.truth_(self__.distinct)?(cljs.core.truth_(self__.count)?cljs.spec.gen.alpha.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-elements","num-elements",1960422107),self__.count,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null)):cljs.spec.gen.alpha.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-elements","min-elements",949370780),(function (){var or__4131__auto__ = self__.min_count;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"max-elements","max-elements",433034073),(function (){var or__4131__auto__ = self__.max_count;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var x__4219__auto__ = self__.gen_max;
var y__4220__auto__ = ((2) * (function (){var or__4131__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return (0);
}
})());
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
}
})(),new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null))):(cljs.core.truth_(self__.count)?cljs.spec.gen.alpha.vector.call(null,pgen,self__.count):(cljs.core.truth_((function (){var or__4131__auto__ = self__.min_count;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return self__.max_count;
}
})())?cljs.spec.gen.alpha.vector.call(null,pgen,(function (){var or__4131__auto__ = self__.min_count;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})(),(function (){var or__4131__auto__ = self__.max_count;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var x__4219__auto__ = self__.gen_max;
var y__4220__auto__ = ((2) * (function (){var or__4131__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return (0);
}
})());
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
}
})()):cljs.spec.gen.alpha.vector.call(null,pgen,(0),self__.gen_max)
))));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
});})(pgen,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
);
}
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha15639.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
=======
});})(pgen,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
);
}
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha12221.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.every_impl.call(null,self__.form,self__.pred,self__.opts,gfn__$1);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha15639.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
=======
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha12221.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_){
var self__ = this;
var ___$1 = this;
var or__4131__auto__ = self__.describe_form;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),null,(1),null)),(new cljs.core.List(null,self__.form,null,(1),null)),cljs.core.mapcat.call(null,cljs.core.identity,self__.opts))));
}
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha15639.getBasis = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (){
return new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"max-count","max-count",-1115250464,null),new cljs.core.Symbol(null,"check?","check?",409539557,null),new cljs.core.Symbol(null,"p__15636","p__15636",-1928683576,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"gen-max","gen-max",846851082,null),new cljs.core.Symbol(null,"map__15637","map__15637",1876739307,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"cpred","cpred",-540353554,null),new cljs.core.Symbol(null,"conform-keys","conform-keys",-159510287,null),new cljs.core.Symbol(null,"kind-form","kind-form",1155997457,null),new cljs.core.Symbol(null,"addcv","addcv",-1552991247,null),new cljs.core.Symbol(null,"cfns","cfns",1335482066,null),new cljs.core.Symbol(null,"describe-form","describe-form",-1410156588,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"kfn","kfn",729311001,null),new cljs.core.Symbol(null,"gen-into","gen-into",592640985,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"min-count","min-count",-1059726756,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"conform-all","conform-all",-980179459,null),new cljs.core.Symbol(null,"conform-into","conform-into",-1039113729,null),new cljs.core.Symbol(null,"meta15640","meta15640",-1652514938,null)], null);
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha15639.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha15639.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15639";

cljs.spec.alpha.t_cljs$spec$alpha15639.cljs$lang$ctorPrWriter = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15639");
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha15639.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha15639 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha15639(form__$1,max_count__$1,check_QMARK___$1,p__15636__$1,gfn__$1,gen_max__$1,map__15637__$2,pred__$1,cpred__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,describe_form__$1,distinct__$1,spec__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta15640){
return (new cljs.spec.alpha.t_cljs$spec$alpha15639(form__$1,max_count__$1,check_QMARK___$1,p__15636__$1,gfn__$1,gen_max__$1,map__15637__$2,pred__$1,cpred__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,describe_form__$1,distinct__$1,spec__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta15640));
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15637,map__15637__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
=======
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha12221.getBasis = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (){
return new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"max-count","max-count",-1115250464,null),new cljs.core.Symbol(null,"check?","check?",409539557,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"gen-max","gen-max",846851082,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"map__12219","map__12219",767364685,null),new cljs.core.Symbol(null,"cpred","cpred",-540353554,null),new cljs.core.Symbol(null,"conform-keys","conform-keys",-159510287,null),new cljs.core.Symbol(null,"kind-form","kind-form",1155997457,null),new cljs.core.Symbol(null,"addcv","addcv",-1552991247,null),new cljs.core.Symbol(null,"cfns","cfns",1335482066,null),new cljs.core.Symbol(null,"describe-form","describe-form",-1410156588,null),new cljs.core.Symbol(null,"p__12218","p__12218",1281714357,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"kfn","kfn",729311001,null),new cljs.core.Symbol(null,"gen-into","gen-into",592640985,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"min-count","min-count",-1059726756,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"conform-all","conform-all",-980179459,null),new cljs.core.Symbol(null,"conform-into","conform-into",-1039113729,null),new cljs.core.Symbol(null,"meta12222","meta12222",1851335184,null)], null);
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha12221.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha12221.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha12221";

cljs.spec.alpha.t_cljs$spec$alpha12221.cljs$lang$ctorPrWriter = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.spec.alpha/t_cljs$spec$alpha12221");
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha12221.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha12221 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha12221(form__$1,max_count__$1,check_QMARK___$1,gfn__$1,gen_max__$1,pred__$1,map__12219__$2,cpred__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,describe_form__$1,p__12218__$1,distinct__$1,spec__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta12222){
return (new cljs.spec.alpha.t_cljs$spec$alpha12221(form__$1,max_count__$1,check_QMARK___$1,gfn__$1,gen_max__$1,pred__$1,map__12219__$2,cpred__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,describe_form__$1,p__12218__$1,distinct__$1,spec__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta12222));
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__12219,map__12219__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
;

}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
return (new cljs.spec.alpha.t_cljs$spec$alpha15639(form,max_count,check_QMARK_,p__15636,gfn,gen_max,map__15637__$1,pred,cpred,conform_keys,kind_form,addcv,cfns,describe_form,distinct,spec,kfn__$1,gen_into,count,min_count,opts,kind,conform_all,conform_into,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new cljs.spec.alpha.t_cljs$spec$alpha12221(form,max_count,check_QMARK_,gfn,gen_max,pred,map__12219__$1,cpred,conform_keys,kind_form,addcv,cfns,describe_form,p__12218,distinct,spec,kfn__$1,gen_into,count,min_count,opts,kind,conform_all,conform_into,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
});

cljs.spec.alpha.every_impl.cljs$lang$maxFixedArity = 4;

cljs.spec.alpha.accept = (function cljs$spec$alpha$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),new cljs.core.Keyword(null,"ret","ret",-468222814),x], null);
});
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.accept_QMARK_ = (function cljs$spec$alpha$accept_QMARK_(p__15688){
var map__15689 = p__15688;
var map__15689__$1 = (((((!((map__15689 == null))))?(((((map__15689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15689):map__15689);
var op = cljs.core.get.call(null,map__15689__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
return cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),op);
});
cljs.spec.alpha.pcat_STAR_ = (function cljs$spec$alpha$pcat_STAR_(p__15691){
var map__15692 = p__15691;
var map__15692__$1 = (((((!((map__15692 == null))))?(((((map__15692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15692):map__15692);
var vec__15693 = cljs.core.get.call(null,map__15692__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__15694 = cljs.core.seq.call(null,vec__15693);
var first__15695 = cljs.core.first.call(null,seq__15694);
var seq__15694__$1 = cljs.core.next.call(null,seq__15694);
var p1 = first__15695;
var pr = seq__15694__$1;
var ps = vec__15693;
var vec__15696 = cljs.core.get.call(null,map__15692__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__15697 = cljs.core.seq.call(null,vec__15696);
var first__15698 = cljs.core.first.call(null,seq__15697);
var seq__15697__$1 = cljs.core.next.call(null,seq__15697);
var k1 = first__15698;
var kr = seq__15697__$1;
var ks = vec__15696;
var vec__15699 = cljs.core.get.call(null,map__15692__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var seq__15700 = cljs.core.seq.call(null,vec__15699);
var first__15701 = cljs.core.first.call(null,seq__15700);
var seq__15700__$1 = cljs.core.next.call(null,seq__15700);
var f1 = first__15701;
var fr = seq__15700__$1;
var forms = vec__15699;
var ret = cljs.core.get.call(null,map__15692__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var rep_PLUS_ = cljs.core.get.call(null,map__15692__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
=======
cljs.spec.alpha.accept_QMARK_ = (function cljs$spec$alpha$accept_QMARK_(p__12270){
var map__12271 = p__12270;
var map__12271__$1 = (((((!((map__12271 == null))))?(((((map__12271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12271):map__12271);
var op = cljs.core.get.call(null,map__12271__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
return cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),op);
});
cljs.spec.alpha.pcat_STAR_ = (function cljs$spec$alpha$pcat_STAR_(p__12273){
var map__12274 = p__12273;
var map__12274__$1 = (((((!((map__12274 == null))))?(((((map__12274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12274):map__12274);
var vec__12275 = cljs.core.get.call(null,map__12274__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__12276 = cljs.core.seq.call(null,vec__12275);
var first__12277 = cljs.core.first.call(null,seq__12276);
var seq__12276__$1 = cljs.core.next.call(null,seq__12276);
var p1 = first__12277;
var pr = seq__12276__$1;
var ps = vec__12275;
var vec__12278 = cljs.core.get.call(null,map__12274__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__12279 = cljs.core.seq.call(null,vec__12278);
var first__12280 = cljs.core.first.call(null,seq__12279);
var seq__12279__$1 = cljs.core.next.call(null,seq__12279);
var k1 = first__12280;
var kr = seq__12279__$1;
var ks = vec__12278;
var vec__12281 = cljs.core.get.call(null,map__12274__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var seq__12282 = cljs.core.seq.call(null,vec__12281);
var first__12283 = cljs.core.first.call(null,seq__12282);
var seq__12282__$1 = cljs.core.next.call(null,seq__12282);
var f1 = first__12283;
var fr = seq__12282__$1;
var forms = vec__12281;
var ret = cljs.core.get.call(null,map__12274__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var rep_PLUS_ = cljs.core.get.call(null,map__12274__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ps)){
if(cljs.spec.alpha.accept_QMARK_.call(null,p1)){
var rp = new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.call(null,ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,rp]):rp));
if(pr){
return cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),fr,new cljs.core.Keyword(null,"ret","ret",-468222814),ret__$1], null));
} else {
return cljs.spec.alpha.accept.call(null,ret__$1);
}
} else {
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),ret,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"rep+","rep+",-281382396),rep_PLUS_], null);
}
} else {
return null;
}
});
cljs.spec.alpha.pcat = (function cljs$spec$alpha$pcat(var_args){
var args__4736__auto__ = [];
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var len__4730__auto___15704 = arguments.length;
var i__4731__auto___15705 = (0);
while(true){
if((i__4731__auto___15705 < len__4730__auto___15704)){
args__4736__auto__.push((arguments[i__4731__auto___15705]));

var G__15706 = (i__4731__auto___15705 + (1));
i__4731__auto___15705 = G__15706;
=======
var len__4730__auto___12286 = arguments.length;
var i__4731__auto___12287 = (0);
while(true){
if((i__4731__auto___12287 < len__4730__auto___12286)){
args__4736__auto__.push((arguments[i__4731__auto___12287]));

var G__12288 = (i__4731__auto___12287 + (1));
i__4731__auto___12287 = G__12288;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.alpha.pcat.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

cljs.spec.alpha.pcat.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY], null));
});

cljs.spec.alpha.pcat.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.pcat.cljs$lang$applyTo = (function (seq15703){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15703));
=======
cljs.spec.alpha.pcat.cljs$lang$applyTo = (function (seq12285){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12285));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
});

/**
 * Do not call this directly, use 'cat'
 */
cljs.spec.alpha.cat_impl = (function cljs$spec$alpha$cat_impl(ks,ps,forms){
return cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.spec.alpha.rep_STAR_ = (function cljs$spec$alpha$rep_STAR_(p1,p2,ret,splice,form){
if(cljs.core.truth_(p1)){
var r = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),new cljs.core.Keyword(null,"p2","p2",905500641),p2,new cljs.core.Keyword(null,"splice","splice",449588165),splice,new cljs.core.Keyword(null,"forms","forms",2045992350),form,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null)], null);
if(cljs.spec.alpha.accept_QMARK_.call(null,p1)){
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p2,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.conj.call(null,ret,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)));
} else {
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p1,new cljs.core.Keyword(null,"ret","ret",-468222814),ret);
}
} else {
return null;
}
});
/**
 * Do not call this directly, use '*'
 */
cljs.spec.alpha.rep_impl = (function cljs$spec$alpha$rep_impl(form,p){
return cljs.spec.alpha.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,false,form);
});
/**
 * Do not call this directly, use '+'
 */
cljs.spec.alpha.rep_PLUS_impl = (function cljs$spec$alpha$rep_PLUS_impl(form,p){
return cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.alpha.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,true,form)], null),new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)))))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"rep+","rep+",-281382396),form], null));
});
/**
 * Do not call this directly, use '&'
 */
cljs.spec.alpha.amp_impl = (function cljs$spec$alpha$amp_impl(re,re_form,preds,pred_forms){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),new cljs.core.Keyword(null,"p1","p1",-936759954),re,new cljs.core.Keyword(null,"amp","amp",271690571),re_form,new cljs.core.Keyword(null,"ps","ps",292358046),preds,new cljs.core.Keyword(null,"forms","forms",2045992350),pred_forms], null);
});
cljs.spec.alpha.filter_alt = (function cljs$spec$alpha$filter_alt(ps,ks,forms,f){
if(cljs.core.truth_((function (){var or__4131__auto__ = ks;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return forms;
}
})())){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var pks = cljs.core.filter.call(null,(function (p1__15707_SHARP_){
return f.call(null,cljs.core.first.call(null,p1__15707_SHARP_));
=======
var pks = cljs.core.filter.call(null,(function (p1__12289_SHARP_){
return f.call(null,cljs.core.first.call(null,p1__12289_SHARP_));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
}),cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__4131__auto__ = cljs.core.seq.call(null,ks);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__4131__auto__ = cljs.core.seq.call(null,forms);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,pks)),(cljs.core.truth_(ks)?cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,pks)):null),(cljs.core.truth_(forms)?cljs.core.seq.call(null,cljs.core.map.call(null,((function (pks){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
return (function (p1__15708_SHARP_){
return cljs.core.nth.call(null,p1__15708_SHARP_,(2));
=======
return (function (p1__12290_SHARP_){
return cljs.core.nth.call(null,p1__12290_SHARP_,(2));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
});})(pks))
,pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.filter.call(null,f,ps)),ks,forms], null);
}
});
cljs.spec.alpha.alt_STAR_ = (function cljs$spec$alpha$alt_STAR_(ps,ks,forms){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var vec__15709 = cljs.spec.alpha.filter_alt.call(null,ps,ks,forms,cljs.core.identity);
var vec__15712 = cljs.core.nth.call(null,vec__15709,(0),null);
var seq__15713 = cljs.core.seq.call(null,vec__15712);
var first__15714 = cljs.core.first.call(null,seq__15713);
var seq__15713__$1 = cljs.core.next.call(null,seq__15713);
var p1 = first__15714;
var pr = seq__15713__$1;
var ps__$1 = vec__15712;
var vec__15715 = cljs.core.nth.call(null,vec__15709,(1),null);
var k1 = cljs.core.nth.call(null,vec__15715,(0),null);
var ks__$1 = vec__15715;
var forms__$1 = cljs.core.nth.call(null,vec__15709,(2),null);
=======
var vec__12291 = cljs.spec.alpha.filter_alt.call(null,ps,ks,forms,cljs.core.identity);
var vec__12294 = cljs.core.nth.call(null,vec__12291,(0),null);
var seq__12295 = cljs.core.seq.call(null,vec__12294);
var first__12296 = cljs.core.first.call(null,seq__12295);
var seq__12295__$1 = cljs.core.next.call(null,seq__12295);
var p1 = first__12296;
var pr = seq__12295__$1;
var ps__$1 = vec__12294;
var vec__12297 = cljs.core.nth.call(null,vec__12291,(1),null);
var k1 = cljs.core.nth.call(null,vec__12297,(0),null);
var ks__$1 = vec__12297;
var forms__$1 = cljs.core.nth.call(null,vec__12291,(2),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
if(cljs.core.truth_(ps__$1)){
var ret = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),new cljs.core.Keyword(null,"ps","ps",292358046),ps__$1,new cljs.core.Keyword(null,"ks","ks",1900203942),ks__$1,new cljs.core.Keyword(null,"forms","forms",2045992350),forms__$1], null);
if((pr == null)){
if(cljs.core.truth_(k1)){
if(cljs.spec.alpha.accept_QMARK_.call(null,p1)){
return cljs.spec.alpha.accept.call(null,cljs.spec.alpha.tagged_ret.call(null,k1,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)));
} else {
return ret;
}
} else {
return p1;
}
} else {
return ret;
}
} else {
return null;
}
});
cljs.spec.alpha.alts = (function cljs$spec$alpha$alts(var_args){
var args__4736__auto__ = [];
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var len__4730__auto___15719 = arguments.length;
var i__4731__auto___15720 = (0);
while(true){
if((i__4731__auto___15720 < len__4730__auto___15719)){
args__4736__auto__.push((arguments[i__4731__auto___15720]));

var G__15721 = (i__4731__auto___15720 + (1));
i__4731__auto___15720 = G__15721;
=======
var len__4730__auto___12301 = arguments.length;
var i__4731__auto___12302 = (0);
while(true){
if((i__4731__auto___12302 < len__4730__auto___12301)){
args__4736__auto__.push((arguments[i__4731__auto___12302]));

var G__12303 = (i__4731__auto___12302 + (1));
i__4731__auto___12302 = G__12303;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alpha.alt_STAR_.call(null,ps,null,null);
});

cljs.spec.alpha.alts.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.alts.cljs$lang$applyTo = (function (seq15718){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15718));
=======
cljs.spec.alpha.alts.cljs$lang$applyTo = (function (seq12300){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12300));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
});

cljs.spec.alpha.alt2 = (function cljs$spec$alpha$alt2(p1,p2){
if(cljs.core.truth_((function (){var and__4120__auto__ = p1;
if(cljs.core.truth_(and__4120__auto__)){
return p2;
} else {
return and__4120__auto__;
}
})())){
return cljs.spec.alpha.alts.call(null,p1,p2);
} else {
var or__4131__auto__ = p1;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return p2;
}
}
});
/**
 * Do not call this directly, use 'alt'
 */
cljs.spec.alpha.alt_impl = (function cljs$spec$alpha$alt_impl(ks,ps,forms){
return cljs.core.assoc.call(null,cljs.spec.alpha.alt_STAR_.call(null,ps,ks,forms),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null));
});
/**
 * Do not call this directly, use '?'
 */
cljs.spec.alpha.maybe_impl = (function cljs$spec$alpha$maybe_impl(p,form){
return cljs.core.assoc.call(null,cljs.spec.alpha.alt_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.alpha.accept.call(null,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950)], null)),new cljs.core.Keyword(null,"maybe","maybe",-314397560),form);
});
cljs.spec.alpha.noret_QMARK_ = (function cljs$spec$alpha$noret_QMARK_(p1,pret){
var or__4131__auto__ = cljs.core._EQ_.call(null,pret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (function (){var and__4120__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),null], null), null).call(null,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252).cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_.call(null,p1)));
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.empty_QMARK_.call(null,pret);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return null;
}
}
});
cljs.spec.alpha.accept_nil_QMARK_ = (function cljs$spec$alpha$accept_nil_QMARK_(p){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var map__15722 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__15722__$1 = (((((!((map__15722 == null))))?(((((map__15722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15722):map__15722);
var p__$1 = map__15722__$1;
var op = cljs.core.get.call(null,map__15722__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.call(null,map__15722__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var p1 = cljs.core.get.call(null,map__15722__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__15722__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var forms = cljs.core.get.call(null,map__15722__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__15724 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__15724)){
return true;
} else {
if(cljs.core._EQ_.call(null,null,G__15724)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__15724)){
=======
var map__12304 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__12304__$1 = (((((!((map__12304 == null))))?(((((map__12304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12304):map__12304);
var p__$1 = map__12304__$1;
var op = cljs.core.get.call(null,map__12304__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.call(null,map__12304__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var p1 = cljs.core.get.call(null,map__12304__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__12304__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var forms = cljs.core.get.call(null,map__12304__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__12306 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__12306)){
return true;
} else {
if(cljs.core._EQ_.call(null,null,G__12306)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__12306)){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
var and__4120__auto__ = cljs.spec.alpha.accept_nil_QMARK_.call(null,p1);
if(cljs.core.truth_(and__4120__auto__)){
var ret = cljs.spec.alpha.and_preds.call(null,cljs.spec.alpha.preturn.call(null,p1),ps,cljs.core.next.call(null,forms));
return (!(cljs.spec.alpha.invalid_QMARK_.call(null,ret)));
} else {
return and__4120__auto__;
}
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__15724)){
=======
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__12306)){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
var or__4131__auto__ = (p1 === p2);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.spec.alpha.accept_nil_QMARK_.call(null,p1);
}
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__15724)){
return cljs.core.every_QMARK_.call(null,cljs.spec.alpha.accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__15724)){
return cljs.core.some.call(null,cljs.spec.alpha.accept_nil_QMARK_,ps);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15724)].join('')));
=======
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__12306)){
return cljs.core.every_QMARK_.call(null,cljs.spec.alpha.accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__12306)){
return cljs.core.some.call(null,cljs.spec.alpha.accept_nil_QMARK_,ps);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12306)].join('')));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js

}
}
}
}
}
}
});
cljs.spec.alpha.preturn = (function cljs$spec$alpha$preturn(p){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var map__15725 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__15725__$1 = (((((!((map__15725 == null))))?(((((map__15725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15725):map__15725);
var p__$1 = map__15725__$1;
var vec__15726 = cljs.core.get.call(null,map__15725__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__15727 = cljs.core.seq.call(null,vec__15726);
var first__15728 = cljs.core.first.call(null,seq__15727);
var seq__15727__$1 = cljs.core.next.call(null,seq__15727);
var p0 = first__15728;
var pr = seq__15727__$1;
var ps = vec__15726;
var vec__15729 = cljs.core.get.call(null,map__15725__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__15729,(0),null);
var ks = vec__15729;
var op = cljs.core.get.call(null,map__15725__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var p1 = cljs.core.get.call(null,map__15725__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__15725__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__15725__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__15733 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__15733)){
return ret;
} else {
if(cljs.core._EQ_.call(null,null,G__15733)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__15733)){
=======
var map__12307 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__12307__$1 = (((((!((map__12307 == null))))?(((((map__12307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12307):map__12307);
var p__$1 = map__12307__$1;
var vec__12308 = cljs.core.get.call(null,map__12307__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__12309 = cljs.core.seq.call(null,vec__12308);
var first__12310 = cljs.core.first.call(null,seq__12309);
var seq__12309__$1 = cljs.core.next.call(null,seq__12309);
var p0 = first__12310;
var pr = seq__12309__$1;
var ps = vec__12308;
var vec__12311 = cljs.core.get.call(null,map__12307__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__12311,(0),null);
var ks = vec__12311;
var op = cljs.core.get.call(null,map__12307__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var p1 = cljs.core.get.call(null,map__12307__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__12307__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__12307__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__12315 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__12315)){
return ret;
} else {
if(cljs.core._EQ_.call(null,null,G__12315)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__12315)){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
var pret = cljs.spec.alpha.preturn.call(null,p1);
if(cljs.core.truth_(cljs.spec.alpha.noret_QMARK_.call(null,p1,pret))){
return new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950);
} else {
return cljs.spec.alpha.and_preds.call(null,pret,ps,forms);
}
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__15733)){
return cljs.spec.alpha.add_ret.call(null,p1,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__15733)){
return cljs.spec.alpha.add_ret.call(null,p0,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__15733)){
var vec__15734 = cljs.spec.alpha.filter_alt.call(null,ps,ks,forms,cljs.spec.alpha.accept_nil_QMARK_);
var vec__15737 = cljs.core.nth.call(null,vec__15734,(0),null);
var p0__$1 = cljs.core.nth.call(null,vec__15737,(0),null);
var vec__15740 = cljs.core.nth.call(null,vec__15734,(1),null);
var k0 = cljs.core.nth.call(null,vec__15740,(0),null);
=======
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__12315)){
return cljs.spec.alpha.add_ret.call(null,p1,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__12315)){
return cljs.spec.alpha.add_ret.call(null,p0,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__12315)){
var vec__12316 = cljs.spec.alpha.filter_alt.call(null,ps,ks,forms,cljs.spec.alpha.accept_nil_QMARK_);
var vec__12319 = cljs.core.nth.call(null,vec__12316,(0),null);
var p0__$1 = cljs.core.nth.call(null,vec__12319,(0),null);
var vec__12322 = cljs.core.nth.call(null,vec__12316,(1),null);
var k0 = cljs.core.nth.call(null,vec__12322,(0),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
var r = (((p0__$1 == null))?new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950):cljs.spec.alpha.preturn.call(null,p0__$1));
if(cljs.core.truth_(k0)){
return cljs.spec.alpha.tagged_ret.call(null,k0,r);
} else {
return r;
}
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15733)].join('')));
=======
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12315)].join('')));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js

}
}
}
}
}
}
});
cljs.spec.alpha.op_unform = (function cljs$spec$alpha$op_unform(p,x){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var map__15747 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__15747__$1 = (((((!((map__15747 == null))))?(((((map__15747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15747):map__15747);
var p__$1 = map__15747__$1;
var vec__15748 = cljs.core.get.call(null,map__15747__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__15749 = cljs.core.seq.call(null,vec__15748);
var first__15750 = cljs.core.first.call(null,seq__15749);
var seq__15749__$1 = cljs.core.next.call(null,seq__15749);
var p0 = first__15750;
var pr = seq__15749__$1;
var ps = vec__15748;
var vec__15751 = cljs.core.get.call(null,map__15747__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__15751,(0),null);
var ks = vec__15751;
var op = cljs.core.get.call(null,map__15747__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var p1 = cljs.core.get.call(null,map__15747__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__15747__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__15747__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var rep_PLUS_ = cljs.core.get.call(null,map__15747__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__15747__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
var kps = cljs.core.zipmap.call(null,ks,ps);
var G__15755 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__15755)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.call(null,null,G__15755)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.unform.call(null,p__$1,x)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__15755)){
var px = cljs.core.reduce.call(null,((function (G__15755,map__15747,map__15747__$1,p__$1,vec__15748,seq__15749,first__15750,seq__15749__$1,p0,pr,ps,vec__15751,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__15744_SHARP_,p2__15743_SHARP_){
return cljs.spec.alpha.unform.call(null,p2__15743_SHARP_,p1__15744_SHARP_);
});})(G__15755,map__15747,map__15747__$1,p__$1,vec__15748,seq__15749,first__15750,seq__15749__$1,p0,pr,ps,vec__15751,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x,cljs.core.reverse.call(null,ps));
return cljs.spec.alpha.op_unform.call(null,p1,px);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__15755)){
return cljs.core.mapcat.call(null,((function (G__15755,map__15747,map__15747__$1,p__$1,vec__15748,seq__15749,first__15750,seq__15749__$1,p0,pr,ps,vec__15751,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__15745_SHARP_){
return cljs.spec.alpha.op_unform.call(null,p1,p1__15745_SHARP_);
});})(G__15755,map__15747,map__15747__$1,p__$1,vec__15748,seq__15749,first__15750,seq__15749__$1,p0,pr,ps,vec__15751,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__15755)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.call(null,((function (G__15755,map__15747,map__15747__$1,p__$1,vec__15748,seq__15749,first__15750,seq__15749__$1,p0,pr,ps,vec__15751,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__15746_SHARP_){
return cljs.spec.alpha.op_unform.call(null,p0,p1__15746_SHARP_);
});})(G__15755,map__15747,map__15747__$1,p__$1,vec__15748,seq__15749,first__15750,seq__15749__$1,p0,pr,ps,vec__15751,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
return cljs.core.mapcat.call(null,((function (G__15755,map__15747,map__15747__$1,p__$1,vec__15748,seq__15749,first__15750,seq__15749__$1,p0,pr,ps,vec__15751,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
=======
var map__12329 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__12329__$1 = (((((!((map__12329 == null))))?(((((map__12329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12329):map__12329);
var p__$1 = map__12329__$1;
var vec__12330 = cljs.core.get.call(null,map__12329__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__12331 = cljs.core.seq.call(null,vec__12330);
var first__12332 = cljs.core.first.call(null,seq__12331);
var seq__12331__$1 = cljs.core.next.call(null,seq__12331);
var p0 = first__12332;
var pr = seq__12331__$1;
var ps = vec__12330;
var vec__12333 = cljs.core.get.call(null,map__12329__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__12333,(0),null);
var ks = vec__12333;
var op = cljs.core.get.call(null,map__12329__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var p1 = cljs.core.get.call(null,map__12329__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__12329__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__12329__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var rep_PLUS_ = cljs.core.get.call(null,map__12329__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__12329__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
var kps = cljs.core.zipmap.call(null,ks,ps);
var G__12337 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__12337)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.call(null,null,G__12337)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.unform.call(null,p__$1,x)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__12337)){
var px = cljs.core.reduce.call(null,((function (G__12337,map__12329,map__12329__$1,p__$1,vec__12330,seq__12331,first__12332,seq__12331__$1,p0,pr,ps,vec__12333,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__12326_SHARP_,p2__12325_SHARP_){
return cljs.spec.alpha.unform.call(null,p2__12325_SHARP_,p1__12326_SHARP_);
});})(G__12337,map__12329,map__12329__$1,p__$1,vec__12330,seq__12331,first__12332,seq__12331__$1,p0,pr,ps,vec__12333,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x,cljs.core.reverse.call(null,ps));
return cljs.spec.alpha.op_unform.call(null,p1,px);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__12337)){
return cljs.core.mapcat.call(null,((function (G__12337,map__12329,map__12329__$1,p__$1,vec__12330,seq__12331,first__12332,seq__12331__$1,p0,pr,ps,vec__12333,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__12327_SHARP_){
return cljs.spec.alpha.op_unform.call(null,p1,p1__12327_SHARP_);
});})(G__12337,map__12329,map__12329__$1,p__$1,vec__12330,seq__12331,first__12332,seq__12331__$1,p0,pr,ps,vec__12333,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__12337)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.call(null,((function (G__12337,map__12329,map__12329__$1,p__$1,vec__12330,seq__12331,first__12332,seq__12331__$1,p0,pr,ps,vec__12333,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__12328_SHARP_){
return cljs.spec.alpha.op_unform.call(null,p0,p1__12328_SHARP_);
});})(G__12337,map__12329,map__12329__$1,p__$1,vec__12330,seq__12331,first__12332,seq__12331__$1,p0,pr,ps,vec__12333,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
return cljs.core.mapcat.call(null,((function (G__12337,map__12329,map__12329__$1,p__$1,vec__12330,seq__12331,first__12332,seq__12331__$1,p0,pr,ps,vec__12333,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (k__$1){
if(cljs.core.contains_QMARK_.call(null,x,k__$1)){
return cljs.spec.alpha.op_unform.call(null,kps.call(null,k__$1),cljs.core.get.call(null,x,k__$1));
} else {
return null;
}
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
});})(G__15755,map__15747,map__15747__$1,p__$1,vec__15748,seq__15749,first__15750,seq__15749__$1,p0,pr,ps,vec__15751,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,ks);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__15755)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.unform.call(null,p0,x)], null);
} else {
var vec__15756 = x;
var k__$1 = cljs.core.nth.call(null,vec__15756,(0),null);
var v = cljs.core.nth.call(null,vec__15756,(1),null);
return cljs.spec.alpha.op_unform.call(null,kps.call(null,k__$1),v);
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15755)].join('')));
=======
});})(G__12337,map__12329,map__12329__$1,p__$1,vec__12330,seq__12331,first__12332,seq__12331__$1,p0,pr,ps,vec__12333,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,ks);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__12337)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.unform.call(null,p0,x)], null);
} else {
var vec__12338 = x;
var k__$1 = cljs.core.nth.call(null,vec__12338,(0),null);
var v = cljs.core.nth.call(null,vec__12338,(1),null);
return cljs.spec.alpha.op_unform.call(null,kps.call(null,k__$1),v);
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12337)].join('')));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js

}
}
}
}
}
}
});
cljs.spec.alpha.add_ret = (function cljs$spec$alpha$add_ret(p,r,k){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var map__15759 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__15759__$1 = (((((!((map__15759 == null))))?(((((map__15759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15759):map__15759);
var p__$1 = map__15759__$1;
var op = cljs.core.get.call(null,map__15759__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.call(null,map__15759__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var splice = cljs.core.get.call(null,map__15759__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var prop = ((function (map__15759,map__15759__$1,p__$1,op,ps,splice){
=======
var map__12341 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__12341__$1 = (((((!((map__12341 == null))))?(((((map__12341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12341):map__12341);
var p__$1 = map__12341__$1;
var op = cljs.core.get.call(null,map__12341__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.call(null,map__12341__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var splice = cljs.core.get.call(null,map__12341__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var prop = ((function (map__12341,map__12341__$1,p__$1,op,ps,splice){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (){
var ret = cljs.spec.alpha.preturn.call(null,p__$1);
if(cljs.core.empty_QMARK_.call(null,ret)){
return r;
} else {
return (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj).call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
});})(map__15759,map__15759__$1,p__$1,op,ps,splice))
;
var G__15761 = op;
if(cljs.core._EQ_.call(null,null,G__15761)){
return r;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__15761)){
=======
});})(map__12341,map__12341__$1,p__$1,op,ps,splice))
;
var G__12343 = op;
if(cljs.core._EQ_.call(null,null,G__12343)){
return r;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__12343)){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
var ret = cljs.spec.alpha.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__15761)){
=======
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__12343)){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
var ret = cljs.spec.alpha.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__15761)){
=======
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__12343)){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
var ret = cljs.spec.alpha.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__15761)){
return prop.call(null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__15761)){
return prop.call(null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15761)].join('')));
=======
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__12343)){
return prop.call(null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__12343)){
return prop.call(null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12343)].join('')));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js

}
}
}
}
}
}
});
cljs.spec.alpha.deriv = (function cljs$spec$alpha$deriv(p,x){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var map__15763 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__15763__$1 = (((((!((map__15763 == null))))?(((((map__15763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15763):map__15763);
var p__$1 = map__15763__$1;
var forms = cljs.core.get.call(null,map__15763__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var p2 = cljs.core.get.call(null,map__15763__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var vec__15764 = cljs.core.get.call(null,map__15763__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__15765 = cljs.core.seq.call(null,vec__15764);
var first__15766 = cljs.core.first.call(null,seq__15765);
var seq__15765__$1 = cljs.core.next.call(null,seq__15765);
var p0 = first__15766;
var pr = seq__15765__$1;
var ps = vec__15764;
var ret = cljs.core.get.call(null,map__15763__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var op = cljs.core.get.call(null,map__15763__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var splice = cljs.core.get.call(null,map__15763__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var vec__15767 = cljs.core.get.call(null,map__15763__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__15768 = cljs.core.seq.call(null,vec__15767);
var first__15769 = cljs.core.first.call(null,seq__15768);
var seq__15768__$1 = cljs.core.next.call(null,seq__15768);
var k0 = first__15769;
var kr = seq__15768__$1;
var ks = vec__15767;
var amp = cljs.core.get.call(null,map__15763__$1,new cljs.core.Keyword(null,"amp","amp",271690571));
var p1 = cljs.core.get.call(null,map__15763__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
if(cljs.core.truth_(p__$1)){
var G__15771 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__15771)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__15771)){
=======
var map__12345 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__12345__$1 = (((((!((map__12345 == null))))?(((((map__12345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12345):map__12345);
var p__$1 = map__12345__$1;
var forms = cljs.core.get.call(null,map__12345__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var p2 = cljs.core.get.call(null,map__12345__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var vec__12346 = cljs.core.get.call(null,map__12345__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__12347 = cljs.core.seq.call(null,vec__12346);
var first__12348 = cljs.core.first.call(null,seq__12347);
var seq__12347__$1 = cljs.core.next.call(null,seq__12347);
var p0 = first__12348;
var pr = seq__12347__$1;
var ps = vec__12346;
var ret = cljs.core.get.call(null,map__12345__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var op = cljs.core.get.call(null,map__12345__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var splice = cljs.core.get.call(null,map__12345__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var vec__12349 = cljs.core.get.call(null,map__12345__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__12350 = cljs.core.seq.call(null,vec__12349);
var first__12351 = cljs.core.first.call(null,seq__12350);
var seq__12350__$1 = cljs.core.next.call(null,seq__12350);
var k0 = first__12351;
var kr = seq__12350__$1;
var ks = vec__12349;
var amp = cljs.core.get.call(null,map__12345__$1,new cljs.core.Keyword(null,"amp","amp",271690571));
var p1 = cljs.core.get.call(null,map__12345__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
if(cljs.core.truth_(p__$1)){
var G__12353 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__12353)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__12353)){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
var ret__$1 = cljs.spec.alpha.dt.call(null,p__$1,x,p__$1);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$1)){
return null;
} else {
return cljs.spec.alpha.accept.call(null,ret__$1);
}
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__15771)){
=======
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__12353)){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
var temp__5720__auto__ = cljs.spec.alpha.deriv.call(null,p1,x);
if(cljs.core.truth_(temp__5720__auto__)){
var p1__$1 = temp__5720__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252).cljs$core$IFn$_invoke$arity$1(p1__$1))){
var ret__$1 = cljs.spec.alpha.and_preds.call(null,cljs.spec.alpha.preturn.call(null,p1__$1),ps,cljs.core.next.call(null,forms));
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$1)){
return null;
} else {
return cljs.spec.alpha.accept.call(null,ret__$1);
}
} else {
return cljs.spec.alpha.amp_impl.call(null,p1__$1,amp,ps,forms);
}
} else {
return null;
}
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__15771)){
return cljs.spec.alpha.alt2.call(null,cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.cons.call(null,cljs.spec.alpha.deriv.call(null,p0,x),pr),new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),ret], null)),(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_.call(null,p0))?cljs.spec.alpha.deriv.call(null,cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.next.call(null,forms),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.spec.alpha.add_ret.call(null,p0,ret,k0)], null)),x):null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__15771)){
return cljs.spec.alpha.alt_STAR_.call(null,cljs.core.map.call(null,((function (G__15771,map__15763,map__15763__$1,p__$1,forms,p2,vec__15764,seq__15765,first__15766,seq__15765__$1,p0,pr,ps,ret,op,splice,vec__15767,seq__15768,first__15769,seq__15768__$1,k0,kr,ks,amp,p1){
return (function (p1__15762_SHARP_){
return cljs.spec.alpha.deriv.call(null,p1__15762_SHARP_,x);
});})(G__15771,map__15763,map__15763__$1,p__$1,forms,p2,vec__15764,seq__15765,first__15766,seq__15765__$1,p0,pr,ps,ret,op,splice,vec__15767,seq__15768,first__15769,seq__15768__$1,k0,kr,ks,amp,p1))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__15771)){
return cljs.spec.alpha.alt2.call(null,cljs.spec.alpha.rep_STAR_.call(null,cljs.spec.alpha.deriv.call(null,p1,x),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_.call(null,p1))?cljs.spec.alpha.deriv.call(null,cljs.spec.alpha.rep_STAR_.call(null,p2,p2,cljs.spec.alpha.add_ret.call(null,p1,ret,null),splice,forms),x):null));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15771)].join('')));
=======
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__12353)){
return cljs.spec.alpha.alt2.call(null,cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.cons.call(null,cljs.spec.alpha.deriv.call(null,p0,x),pr),new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),ret], null)),(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_.call(null,p0))?cljs.spec.alpha.deriv.call(null,cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.next.call(null,forms),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.spec.alpha.add_ret.call(null,p0,ret,k0)], null)),x):null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__12353)){
return cljs.spec.alpha.alt_STAR_.call(null,cljs.core.map.call(null,((function (G__12353,map__12345,map__12345__$1,p__$1,forms,p2,vec__12346,seq__12347,first__12348,seq__12347__$1,p0,pr,ps,ret,op,splice,vec__12349,seq__12350,first__12351,seq__12350__$1,k0,kr,ks,amp,p1){
return (function (p1__12344_SHARP_){
return cljs.spec.alpha.deriv.call(null,p1__12344_SHARP_,x);
});})(G__12353,map__12345,map__12345__$1,p__$1,forms,p2,vec__12346,seq__12347,first__12348,seq__12347__$1,p0,pr,ps,ret,op,splice,vec__12349,seq__12350,first__12351,seq__12350__$1,k0,kr,ks,amp,p1))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__12353)){
return cljs.spec.alpha.alt2.call(null,cljs.spec.alpha.rep_STAR_.call(null,cljs.spec.alpha.deriv.call(null,p1,x),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_.call(null,p1))?cljs.spec.alpha.deriv.call(null,cljs.spec.alpha.rep_STAR_.call(null,p2,p2,cljs.spec.alpha.add_ret.call(null,p1,ret,null),splice,forms),x):null));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12353)].join('')));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.op_describe = (function cljs$spec$alpha$op_describe(p){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var map__15772 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__15772__$1 = (((((!((map__15772 == null))))?(((((map__15772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15772):map__15772);
var p__$1 = map__15772__$1;
var ps = cljs.core.get.call(null,map__15772__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var forms = cljs.core.get.call(null,map__15772__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var rep_PLUS_ = cljs.core.get.call(null,map__15772__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var op = cljs.core.get.call(null,map__15772__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var splice = cljs.core.get.call(null,map__15772__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var ks = cljs.core.get.call(null,map__15772__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var maybe = cljs.core.get.call(null,map__15772__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
var amp = cljs.core.get.call(null,map__15772__$1,new cljs.core.Keyword(null,"amp","amp",271690571));
var p1 = cljs.core.get.call(null,map__15772__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
if(cljs.core.truth_(p__$1)){
var G__15774 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__15774)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__15774)){
return p__$1;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__15774)){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("cljs.spec.alpha","&","cljs.spec.alpha/&",1635809823,null),amp,forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__15774)){
=======
var map__12354 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__12354__$1 = (((((!((map__12354 == null))))?(((((map__12354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12354):map__12354);
var p__$1 = map__12354__$1;
var ps = cljs.core.get.call(null,map__12354__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var forms = cljs.core.get.call(null,map__12354__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var rep_PLUS_ = cljs.core.get.call(null,map__12354__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var op = cljs.core.get.call(null,map__12354__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var splice = cljs.core.get.call(null,map__12354__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var ks = cljs.core.get.call(null,map__12354__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var maybe = cljs.core.get.call(null,map__12354__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
var amp = cljs.core.get.call(null,map__12354__$1,new cljs.core.Keyword(null,"amp","amp",271690571));
var p1 = cljs.core.get.call(null,map__12354__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
if(cljs.core.truth_(p__$1)){
var G__12356 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__12356)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__12356)){
return p__$1;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__12356)){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("cljs.spec.alpha","&","cljs.spec.alpha/&",1635809823,null),amp,forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__12356)){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
if(cljs.core.truth_(rep_PLUS_)){
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),(new cljs.core.List(null,rep_PLUS_,null,(1),null)),(2),null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),cljs.core.mapcat.call(null,cljs.core.vector,(function (){var or__4131__auto__ = cljs.core.seq.call(null,ks);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.core.repeat.call(null,new cljs.core.Keyword(null,"_","_",1453416199));
}
})(),forms));
}
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__15774)){
=======
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__12356)){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
if(cljs.core.truth_(maybe)){
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),(new cljs.core.List(null,maybe,null,(1),null)),(2),null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec.alpha","alt","cljs.spec.alpha/alt",-2130750332,null),cljs.core.mapcat.call(null,cljs.core.vector,ks,forms));
}
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__15774)){
return (new cljs.core.List(null,(cljs.core.truth_(splice)?new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null):new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null)),(new cljs.core.List(null,forms,null,(1),null)),(2),null));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15774)].join('')));
=======
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__12356)){
return (new cljs.core.List(null,(cljs.core.truth_(splice)?new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null):new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null)),(new cljs.core.List(null,forms,null,(1),null)),(2),null));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12356)].join('')));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.op_explain = (function cljs$spec$alpha$op_explain(form,p,path,via,in$,input){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var vec__15775 = input;
var x = cljs.core.nth.call(null,vec__15775,(0),null);
var input__$1 = vec__15775;
var map__15778 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__15778__$1 = (((((!((map__15778 == null))))?(((((map__15778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15778):map__15778);
var p__$1 = map__15778__$1;
var op = cljs.core.get.call(null,map__15778__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.call(null,map__15778__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__15778__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__15778__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__15778__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__15778__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__15778__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
=======
var vec__12357 = input;
var x = cljs.core.nth.call(null,vec__12357,(0),null);
var input__$1 = vec__12357;
var map__12360 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__12360__$1 = (((((!((map__12360 == null))))?(((((map__12360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12360):map__12360);
var p__$1 = map__12360__$1;
var op = cljs.core.get.call(null,map__12360__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.call(null,map__12360__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__12360__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__12360__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__12360__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__12360__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__12360__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
var via__$1 = (function (){var temp__5718__auto__ = cljs.spec.alpha.spec_name.call(null,p__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var name = temp__5718__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})();
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var insufficient = ((function (vec__15775,x,input__$1,map__15778,map__15778__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Insufficient input",new cljs.core.Keyword(null,"pred","pred",1927423397),form__$1,new cljs.core.Keyword(null,"val","val",128701612),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"via","via",-1904457336),via__$1,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
});})(vec__15775,x,input__$1,map__15778,map__15778__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__15780 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__15780)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__15780)){
=======
var insufficient = ((function (vec__12357,x,input__$1,map__12360,map__12360__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Insufficient input",new cljs.core.Keyword(null,"pred","pred",1927423397),form__$1,new cljs.core.Keyword(null,"val","val",128701612),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"via","via",-1904457336),via__$1,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
});})(vec__12357,x,input__$1,map__12360,map__12360__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__12362 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__12362)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__12362)){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,form);
} else {
return cljs.spec.alpha.explain_1.call(null,form,p__$1,path,via__$1,in$,x);
}
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__15780)){
=======
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__12362)){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
if(cljs.core.empty_QMARK_.call(null,input__$1)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_.call(null,p1))){
return cljs.spec.alpha.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.alpha.preturn.call(null,p1));
} else {
return insufficient.call(null,path,new cljs.core.Keyword(null,"amp","amp",271690571).cljs$core$IFn$_invoke$arity$1(p__$1));
}
} else {
var temp__5718__auto__ = cljs.spec.alpha.deriv.call(null,p1,x);
if(cljs.core.truth_(temp__5718__auto__)){
var p1__$1 = temp__5718__auto__;
return cljs.spec.alpha.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.alpha.preturn.call(null,p1__$1));
} else {
return cljs.spec.alpha.op_explain.call(null,new cljs.core.Keyword(null,"amp","amp",271690571).cljs$core$IFn$_invoke$arity$1(p__$1),p1,path,via__$1,in$,input__$1);
}
}
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__15780)){
=======
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__12362)){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
var pkfs = cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__4131__auto__ = cljs.core.seq.call(null,ks);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__4131__auto__ = cljs.core.seq.call(null,forms);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var vec__15781 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,pkfs)))?cljs.core.first.call(null,pkfs):cljs.core.first.call(null,cljs.core.remove.call(null,((function (pkfs,G__15780,vec__15775,x,input__$1,map__15778,map__15778__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__15784){
var vec__15785 = p__15784;
var p__$2 = cljs.core.nth.call(null,vec__15785,(0),null);
return cljs.spec.alpha.accept_nil_QMARK_.call(null,p__$2);
});})(pkfs,G__15780,vec__15775,x,input__$1,map__15778,map__15778__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.call(null,vec__15781,(0),null);
var k = cljs.core.nth.call(null,vec__15781,(1),null);
var form__$1 = cljs.core.nth.call(null,vec__15781,(2),null);
=======
var vec__12363 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,pkfs)))?cljs.core.first.call(null,pkfs):cljs.core.first.call(null,cljs.core.remove.call(null,((function (pkfs,G__12362,vec__12357,x,input__$1,map__12360,map__12360__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__12366){
var vec__12367 = p__12366;
var p__$2 = cljs.core.nth.call(null,vec__12367,(0),null);
return cljs.spec.alpha.accept_nil_QMARK_.call(null,p__$2);
});})(pkfs,G__12362,vec__12357,x,input__$1,map__12360,map__12360__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.call(null,vec__12363,(0),null);
var k = cljs.core.nth.call(null,vec__12363,(1),null);
var form__$1 = cljs.core.nth.call(null,vec__12363,(2),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
var path__$1 = (cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path);
var form__$2 = (function (){var or__4131__auto__ = form__$1;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.spec.alpha.op_describe.call(null,pred);
}
})();
if(((cljs.core.empty_QMARK_.call(null,input__$1)) && (cljs.core.not.call(null,pred)))){
return insufficient.call(null,path__$1,form__$2);
} else {
return cljs.spec.alpha.op_explain.call(null,form__$2,pred,path__$1,via__$1,in$,input__$1);
}
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__15780)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,cljs.spec.alpha.op_describe.call(null,p__$1));
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (G__15780,vec__15775,x,input__$1,map__15778,map__15778__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
=======
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__12362)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,cljs.spec.alpha.op_describe.call(null,p__$1));
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (G__12362,vec__12357,x,input__$1,map__12360,map__12360__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (k,form__$1,pred){
return cljs.spec.alpha.op_explain.call(null,(function (){var or__4131__auto__ = form__$1;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.spec.alpha.op_describe.call(null,pred);
}
})(),pred,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),via__$1,in$,input__$1);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
});})(G__15780,vec__15775,x,input__$1,map__15778,map__15778__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
=======
});})(G__12362,vec__12357,x,input__$1,map__12360,map__12360__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
,(function (){var or__4131__auto__ = cljs.core.seq.call(null,ks);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__4131__auto__ = cljs.core.seq.call(null,forms);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),ps));
}
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__15780)){
return cljs.spec.alpha.op_explain.call(null,(((p1 === p2))?forms:cljs.spec.alpha.op_describe.call(null,p1)),p1,path,via__$1,in$,input__$1);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15780)].join('')));
=======
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__12362)){
return cljs.spec.alpha.op_explain.call(null,(((p1 === p2))?forms:cljs.spec.alpha.op_describe.call(null,p1)),p1,path,via__$1,in$,input__$1);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12362)].join('')));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.re_gen = (function cljs$spec$alpha$re_gen(p,overrides,path,rmap,f){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var map__15789 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__15789__$1 = (((((!((map__15789 == null))))?(((((map__15789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15789):map__15789);
var p__$1 = map__15789__$1;
var ps = cljs.core.get.call(null,map__15789__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var forms = cljs.core.get.call(null,map__15789__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var p2 = cljs.core.get.call(null,map__15789__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.call(null,map__15789__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var gfn = cljs.core.get.call(null,map__15789__$1,new cljs.core.Keyword("cljs.spec.alpha","gfn","cljs.spec.alpha/gfn",-593120375));
var op = cljs.core.get.call(null,map__15789__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var splice = cljs.core.get.call(null,map__15789__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var ks = cljs.core.get.call(null,map__15789__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var p1 = cljs.core.get.call(null,map__15789__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var id = cljs.core.get.call(null,map__15789__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.alpha.inck.call(null,rmap,id):rmap);
var ggens = ((function (map__15789,map__15789__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__15789,map__15789__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
=======
var map__12371 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__12371__$1 = (((((!((map__12371 == null))))?(((((map__12371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12371):map__12371);
var p__$1 = map__12371__$1;
var ps = cljs.core.get.call(null,map__12371__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var forms = cljs.core.get.call(null,map__12371__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var p2 = cljs.core.get.call(null,map__12371__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.call(null,map__12371__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var gfn = cljs.core.get.call(null,map__12371__$1,new cljs.core.Keyword("cljs.spec.alpha","gfn","cljs.spec.alpha/gfn",-593120375));
var op = cljs.core.get.call(null,map__12371__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var splice = cljs.core.get.call(null,map__12371__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var ks = cljs.core.get.call(null,map__12371__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var p1 = cljs.core.get.call(null,map__12371__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var id = cljs.core.get.call(null,map__12371__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.alpha.inck.call(null,rmap,id):rmap);
var ggens = ((function (map__12371,map__12371__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__12371,map__12371__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (p__$2,k,f__$1){
if(cljs.core.truth_((function (){var and__4120__auto__ = rmap__$1;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = id;
if(cljs.core.truth_(and__4120__auto____$1)){
var and__4120__auto____$2 = k;
if(cljs.core.truth_(and__4120__auto____$2)){
return cljs.spec.alpha.recur_limit_QMARK_.call(null,rmap__$1,id,path,k);
} else {
return and__4120__auto____$2;
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(id)){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
return cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay(((function (map__15789,map__15789__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
=======
return cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay(((function (map__12371,map__12371__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (){
return cljs.spec.alpha.re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__4131__auto__ = f__$1;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return p__$2;
}
})());
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
});})(map__15789,map__15789__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
=======
});})(map__12371,map__12371__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
,null)));
} else {
return cljs.spec.alpha.re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__4131__auto__ = f__$1;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return p__$2;
}
})());
}
}
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
});})(map__15789,map__15789__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
=======
});})(map__12371,map__12371__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
;
return cljs.core.map.call(null,gen,ps__$1,(function (){var or__4131__auto__ = cljs.core.seq.call(null,ks__$1);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__4131__auto__ = cljs.core.seq.call(null,forms__$1);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
});})(map__15789,map__15789__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
=======
});})(map__12371,map__12371__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
;
var or__4131__auto__ = (function (){var temp__5720__auto__ = cljs.core.get.call(null,overrides,path);
if(cljs.core.truth_(temp__5720__auto__)){
var g = temp__5720__auto__;
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var G__15792 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"accept","accept",1874130431),G__15792)){
return cljs.spec.gen.alpha.fmap.call(null,cljs.core.vector,g);
} else {
if(cljs.core._EQ_.call(null,null,G__15792)){
=======
var G__12374 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"accept","accept",1874130431),G__12374)){
return cljs.spec.gen.alpha.fmap.call(null,cljs.core.vector,g);
} else {
if(cljs.core._EQ_.call(null,null,G__12374)){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return cljs.spec.gen.alpha.fmap.call(null,cljs.core.vector,g);
} else {
return g;

}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (cljs.core.truth_(gfn)?gfn.call(null):null);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
if(cljs.core.truth_(p__$1)){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var G__15793 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__15793)){
=======
var G__12375 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__12375)){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return cljs.spec.gen.alpha.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.spec.gen.alpha.return$.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null));
}
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
if(cljs.core._EQ_.call(null,null,G__15793)){
=======
if(cljs.core._EQ_.call(null,null,G__12375)){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
var temp__5720__auto__ = cljs.spec.alpha.gensub.call(null,p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__5720__auto__)){
var g = temp__5720__auto__;
return cljs.spec.gen.alpha.fmap.call(null,cljs.core.vector,g);
} else {
return null;
}
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__15793)){
return cljs.spec.alpha.re_gen.call(null,p1,overrides,path,rmap__$1,cljs.spec.alpha.op_describe.call(null,p1));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__15793)){
=======
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__12375)){
return cljs.spec.alpha.re_gen.call(null,p1,overrides,path,rmap__$1,cljs.spec.alpha.op_describe.call(null,p1));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__12375)){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
var gens = ggens.call(null,ps,ks,forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gens)){
return cljs.core.apply.call(null,cljs.spec.gen.alpha.cat,gens);
} else {
return null;
}
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__15793)){
=======
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__12375)){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
var gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,ggens.call(null,ps,ks,forms));
if(cljs.core.empty_QMARK_.call(null,gens)){
return null;
} else {
return cljs.spec.gen.alpha.one_of.call(null,gens);
}
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__15793)){
=======
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__12375)){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
if(cljs.spec.alpha.recur_limit_QMARK_.call(null,rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id)){
return cljs.spec.gen.alpha.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
var temp__5720__auto__ = cljs.spec.alpha.re_gen.call(null,p2,overrides,path,rmap__$1,forms);
if(cljs.core.truth_(temp__5720__auto__)){
var g = temp__5720__auto__;
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
return cljs.spec.gen.alpha.fmap.call(null,((function (g,temp__5720__auto__,G__15793,or__4131__auto____$1,or__4131__auto__,map__15789,map__15789__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1,ggens){
return (function (p1__15788_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__15788_SHARP_);
});})(g,temp__5720__auto__,G__15793,or__4131__auto____$1,or__4131__auto__,map__15789,map__15789__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1,ggens))
=======
return cljs.spec.gen.alpha.fmap.call(null,((function (g,temp__5720__auto__,G__12375,or__4131__auto____$1,or__4131__auto__,map__12371,map__12371__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1,ggens){
return (function (p1__12370_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__12370_SHARP_);
});})(g,temp__5720__auto__,G__12375,or__4131__auto____$1,or__4131__auto__,map__12371,map__12371__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1,ggens))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
,cljs.spec.gen.alpha.vector.call(null,g));
} else {
return null;
}
}
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15793)].join('')));
=======
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12375)].join('')));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js

}
}
}
}
}
}
} else {
return null;
}
}
}
});
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.re_conform = (function cljs$spec$alpha$re_conform(p,p__15794){
while(true){
var vec__15795 = p__15794;
var seq__15796 = cljs.core.seq.call(null,vec__15795);
var first__15797 = cljs.core.first.call(null,seq__15796);
var seq__15796__$1 = cljs.core.next.call(null,seq__15796);
var x = first__15797;
var xs = seq__15796__$1;
var data = vec__15795;
=======
cljs.spec.alpha.re_conform = (function cljs$spec$alpha$re_conform(p,p__12376){
while(true){
var vec__12377 = p__12376;
var seq__12378 = cljs.core.seq.call(null,vec__12377);
var first__12379 = cljs.core.first.call(null,seq__12378);
var seq__12378__$1 = cljs.core.next.call(null,seq__12378);
var x = first__12379;
var xs = seq__12378__$1;
var data = vec__12377;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
if(cljs.core.empty_QMARK_.call(null,data)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_.call(null,p))){
var ret = cljs.spec.alpha.preturn.call(null,p);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return null;
} else {
return ret;
}
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
} else {
var temp__5718__auto__ = cljs.spec.alpha.deriv.call(null,p,x);
if(cljs.core.truth_(temp__5718__auto__)){
var dp = temp__5718__auto__;
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var G__15798 = dp;
var G__15799 = xs;
p = G__15798;
p__15794 = G__15799;
=======
var G__12380 = dp;
var G__12381 = xs;
p = G__12380;
p__12376 = G__12381;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
continue;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}
break;
}
});
cljs.spec.alpha.re_explain = (function cljs$spec$alpha$re_explain(path,via,in$,re,input){
var p = re;
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var G__15803 = input;
var vec__15804 = G__15803;
var seq__15805 = cljs.core.seq.call(null,vec__15804);
var first__15806 = cljs.core.first.call(null,seq__15805);
var seq__15805__$1 = cljs.core.next.call(null,seq__15805);
var x = first__15806;
var xs = seq__15805__$1;
var data = vec__15804;
var i = (0);
var p__$1 = p;
var G__15803__$1 = G__15803;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__15807 = G__15803__$1;
var seq__15808 = cljs.core.seq.call(null,vec__15807);
var first__15809 = cljs.core.first.call(null,seq__15808);
var seq__15808__$1 = cljs.core.next.call(null,seq__15808);
var x__$1 = first__15809;
var xs__$1 = seq__15808__$1;
var data__$1 = vec__15807;
=======
var G__12385 = input;
var vec__12386 = G__12385;
var seq__12387 = cljs.core.seq.call(null,vec__12386);
var first__12388 = cljs.core.first.call(null,seq__12387);
var seq__12387__$1 = cljs.core.next.call(null,seq__12387);
var x = first__12388;
var xs = seq__12387__$1;
var data = vec__12386;
var i = (0);
var p__$1 = p;
var G__12385__$1 = G__12385;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__12389 = G__12385__$1;
var seq__12390 = cljs.core.seq.call(null,vec__12389);
var first__12391 = cljs.core.first.call(null,seq__12390);
var seq__12390__$1 = cljs.core.next.call(null,seq__12390);
var x__$1 = first__12391;
var xs__$1 = seq__12390__$1;
var data__$1 = vec__12389;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
var i__$2 = i__$1;
if(cljs.core.empty_QMARK_.call(null,data__$1)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_.call(null,p__$2))){
return null;
} else {
return cljs.spec.alpha.op_explain.call(null,cljs.spec.alpha.op_describe.call(null,p__$2),p__$2,path,via,in$,null);
}
} else {
var temp__5718__auto__ = cljs.spec.alpha.deriv.call(null,p__$2,x__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var dp = temp__5718__auto__;
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var G__15810 = dp;
var G__15811 = xs__$1;
var G__15812 = (i__$2 + (1));
p__$1 = G__15810;
G__15803__$1 = G__15811;
i__$1 = G__15812;
=======
var G__12392 = dp;
var G__12393 = xs__$1;
var G__12394 = (i__$2 + (1));
p__$1 = G__12392;
G__12385__$1 = G__12393;
i__$1 = G__12394;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
continue;
} else {
if(cljs.spec.alpha.accept_QMARK_.call(null,p__$2)){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252).cljs$core$IFn$_invoke$arity$1(p__$2),new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623))){
return cljs.spec.alpha.op_explain.call(null,cljs.spec.alpha.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.alpha.op_describe.call(null,re),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], null);
}
} else {
var or__4131__auto__ = cljs.spec.alpha.op_explain.call(null,cljs.spec.alpha.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.alpha.op_describe.call(null,p__$2),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], null);
}
}
}
}
break;
}
});
/**
 * Do not call this directly, use 'spec' with a regex op argument
 */
cljs.spec.alpha.regex_spec_impl = (function cljs$spec$alpha$regex_spec_impl(re,gfn){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha15813 !== 'undefined')){
=======
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha12395 !== 'undefined')){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15813 = (function (re,gfn,meta15814){
this.re = re;
this.gfn = gfn;
this.meta15814 = meta15814;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha15813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15815,meta15814__$1){
var self__ = this;
var _15815__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15813(self__.re,self__.gfn,meta15814__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha15813.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15815){
var self__ = this;
var _15815__$1 = this;
return self__.meta15814;
});

cljs.spec.alpha.t_cljs$spec$alpha15813.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15813.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
=======
cljs.spec.alpha.t_cljs$spec$alpha12395 = (function (re,gfn,meta12396){
this.re = re;
this.gfn = gfn;
this.meta12396 = meta12396;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha12395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12397,meta12396__$1){
var self__ = this;
var _12397__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha12395(self__.re,self__.gfn,meta12396__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha12395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12397){
var self__ = this;
var _12397__$1 = this;
return self__.meta12396;
});

cljs.spec.alpha.t_cljs$spec$alpha12395.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha12395.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
var self__ = this;
var s__$1 = this;
return s__$1;
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15813.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
=======
cljs.spec.alpha.t_cljs$spec$alpha12395.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
var self__ = this;
var s__$1 = this;
return s__$1;
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15813.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15813.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
=======
cljs.spec.alpha.t_cljs$spec$alpha12395.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha12395.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
var self__ = this;
var ___$1 = this;
if((((x == null)) || (cljs.core.sequential_QMARK_.call(null,x)))){
return cljs.spec.alpha.re_conform.call(null,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15813.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
=======
cljs.spec.alpha.t_cljs$spec$alpha12395.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.op_unform.call(null,self__.re,x);
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15813.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
=======
cljs.spec.alpha.t_cljs$spec$alpha12395.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
var self__ = this;
var ___$1 = this;
if((((x == null)) || (cljs.core.sequential_QMARK_.call(null,x)))){
return cljs.spec.alpha.re_explain.call(null,path,via,in$,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15813.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
=======
cljs.spec.alpha.t_cljs$spec$alpha12395.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.alpha.re_gen.call(null,self__.re,overrides,path,rmap,cljs.spec.alpha.op_describe.call(null,self__.re));
}
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15813.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
=======
cljs.spec.alpha.t_cljs$spec$alpha12395.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.regex_spec_impl.call(null,self__.re,gfn__$1);
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15813.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
=======
cljs.spec.alpha.t_cljs$spec$alpha12395.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.op_describe.call(null,self__.re);
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15813.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta15814","meta15814",179070706,null)], null);
});

cljs.spec.alpha.t_cljs$spec$alpha15813.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha15813.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15813";

cljs.spec.alpha.t_cljs$spec$alpha15813.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15813");
});

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha15813.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha15813 = (function cljs$spec$alpha$regex_spec_impl_$___GT_t_cljs$spec$alpha15813(re__$1,gfn__$1,meta15814){
return (new cljs.spec.alpha.t_cljs$spec$alpha15813(re__$1,gfn__$1,meta15814));
=======
cljs.spec.alpha.t_cljs$spec$alpha12395.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta12396","meta12396",-1393348706,null)], null);
});

cljs.spec.alpha.t_cljs$spec$alpha12395.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha12395.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha12395";

cljs.spec.alpha.t_cljs$spec$alpha12395.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.spec.alpha/t_cljs$spec$alpha12395");
});

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha12395.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha12395 = (function cljs$spec$alpha$regex_spec_impl_$___GT_t_cljs$spec$alpha12395(re__$1,gfn__$1,meta12396){
return (new cljs.spec.alpha.t_cljs$spec$alpha12395(re__$1,gfn__$1,meta12396));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
});

}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
return (new cljs.spec.alpha.t_cljs$spec$alpha15813(re,gfn,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new cljs.spec.alpha.t_cljs$spec$alpha12395(re,gfn,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
});
cljs.spec.alpha.call_valid_QMARK_ = (function cljs$spec$alpha$call_valid_QMARK_(f,specs,args){
var cargs = cljs.spec.alpha.conform.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args);
if(cljs.spec.alpha.invalid_QMARK_.call(null,cargs)){
return null;
} else {
var ret = cljs.core.apply.call(null,f,args);
var cret = cljs.spec.alpha.conform.call(null,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs),ret);
var and__4120__auto__ = (!(cljs.spec.alpha.invalid_QMARK_.call(null,cret)));
if(and__4120__auto__){
if(cljs.core.truth_(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs))){
return cljs.spec.alpha.pvalid_QMARK_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return true;
}
} else {
return and__4120__auto__;
}
}
});
/**
 * returns f if valid, else smallest
 */
cljs.spec.alpha.validate_fn = (function cljs$spec$alpha$validate_fn(f,specs,iters){
var g = cljs.spec.alpha.gen.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs));
var prop = cljs.spec.gen.alpha.for_all_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (g){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
return (function (p1__15816_SHARP_){
return cljs.spec.alpha.call_valid_QMARK_.call(null,f,specs,p1__15816_SHARP_);
=======
return (function (p1__12398_SHARP_){
return cljs.spec.alpha.call_valid_QMARK_.call(null,f,specs,p1__12398_SHARP_);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
});})(g))
);
var ret = cljs.spec.gen.alpha.quick_check.call(null,iters,prop);
var temp__5718__auto__ = new cljs.core.Keyword(null,"smallest","smallest",-152623883).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__5718__auto__)){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var vec__15817 = temp__5718__auto__;
var smallest = cljs.core.nth.call(null,vec__15817,(0),null);
=======
var vec__12399 = temp__5718__auto__;
var smallest = cljs.core.nth.call(null,vec__12399,(0),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return smallest;
} else {
return f;
}
});
/**
 * Do not call this directly, use 'fspec'
 */
cljs.spec.alpha.fspec_impl = (function cljs$spec$alpha$fspec_impl(argspec,aform,retspec,rform,fnspec,fform,gfn){
var specs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),argspec,new cljs.core.Keyword(null,"ret","ret",-468222814),retspec,new cljs.core.Keyword(null,"fn","fn",-1175266204),fnspec], null);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha15820 !== 'undefined')){
=======
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha12402 !== 'undefined')){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15820 = (function (argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta15821){
=======
cljs.spec.alpha.t_cljs$spec$alpha12402 = (function (argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta12403){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
this.meta15821 = meta15821;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha15820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_15822,meta15821__$1){
var self__ = this;
var _15822__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15820(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta15821__$1));
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha15820.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_15822){
var self__ = this;
var _15822__$1 = this;
return self__.meta15821;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha15820.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (specs){
=======
this.meta12403 = meta12403;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha12402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_12404,meta12403__$1){
var self__ = this;
var _12404__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha12402(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta12403__$1));
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha12402.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_12404){
var self__ = this;
var _12404__$1 = this;
return self__.meta12403;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha12402.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (specs){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,self__.specs,k);
});})(specs))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15820.prototype.cljs$core$ILookup$_lookup$arity$3 = ((function (specs){
=======
cljs.spec.alpha.t_cljs$spec$alpha12402.prototype.cljs$core$ILookup$_lookup$arity$3 = ((function (specs){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.call(null,self__.specs,k,not_found);
});})(specs))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15820.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15820.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs){
=======
cljs.spec.alpha.t_cljs$spec$alpha12402.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha12402.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15820.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs){
=======
cljs.spec.alpha.t_cljs$spec$alpha12402.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15820.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15820.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs){
=======
cljs.spec.alpha.t_cljs$spec$alpha12402.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha12402.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
if((f === cljs.spec.alpha.validate_fn.call(null,f,self__.specs,cljs.spec.alpha._STAR_fspec_iterations_STAR_))){
return f;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
});})(specs))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15820.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs){
=======
cljs.spec.alpha.t_cljs$spec$alpha12402.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,f){
var self__ = this;
var ___$1 = this;
return f;
});})(specs))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15820.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs){
=======
cljs.spec.alpha.t_cljs$spec$alpha12402.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
var args = cljs.spec.alpha.validate_fn.call(null,f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.call(null,f,args);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
}catch (e15823){if((e15823 instanceof Error)){
var t = e15823;
return t;
} else {
throw e15823;
=======
}catch (e12405){if((e12405 instanceof Error)){
var t = e12405;
return t;
} else {
throw e12405;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js

}
}})();
if((ret instanceof Error)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"fn","fn",465265323,null)),new cljs.core.Keyword(null,"val","val",128701612),args,new cljs.core.Keyword(null,"reason","reason",-2070751759),ret.message,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var cret = cljs.spec.alpha.dt.call(null,self__.retspec,ret,self__.rform);
if(cljs.spec.alpha.invalid_QMARK_.call(null,cret)){
return cljs.spec.alpha.explain_1.call(null,self__.rform,self__.retspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"ret","ret",-468222814)),via,in$,ret);
} else {
if(cljs.core.truth_(self__.fnspec)){
var cargs = cljs.spec.alpha.conform.call(null,self__.argspec,args);
return cljs.spec.alpha.explain_1.call(null,self__.fform,self__.fnspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"fn","fn",-1175266204)),via,in$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return null;
}
}
}
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Keyword(null,"val","val",128701612),f,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});})(specs))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15820.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs){
=======
cljs.spec.alpha.t_cljs$spec$alpha12402.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,overrides,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gen.alpha.return$.call(null,((function (___$3,specs){
return (function() { 
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var G__15832__delegate = function (args){
if(cljs.spec.alpha.pvalid_QMARK_.call(null,self__.argspec,args)){
} else {
throw (new Error(["Assert failed: ",(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__15828_15833 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15829_15834 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15830_15835 = true;
var _STAR_print_fn_STAR__temp_val__15831_15836 = ((function (_STAR_print_newline_STAR__orig_val__15828_15833,_STAR_print_fn_STAR__orig_val__15829_15834,_STAR_print_newline_STAR__temp_val__15830_15835,sb__4661__auto__,___$3,specs){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__15828_15833,_STAR_print_fn_STAR__orig_val__15829_15834,_STAR_print_newline_STAR__temp_val__15830_15835,sb__4661__auto__,___$3,specs))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15830_15835;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15831_15836;

try{cljs.spec.alpha.explain.call(null,self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15829_15834;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15828_15833;
=======
var G__12414__delegate = function (args){
if(cljs.spec.alpha.pvalid_QMARK_.call(null,self__.argspec,args)){
} else {
throw (new Error(["Assert failed: ",(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__12410_12415 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12411_12416 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12412_12417 = true;
var _STAR_print_fn_STAR__temp_val__12413_12418 = ((function (_STAR_print_newline_STAR__orig_val__12410_12415,_STAR_print_fn_STAR__orig_val__12411_12416,_STAR_print_newline_STAR__temp_val__12412_12417,sb__4661__auto__,___$3,specs){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__12410_12415,_STAR_print_fn_STAR__orig_val__12411_12416,_STAR_print_newline_STAR__temp_val__12412_12417,sb__4661__auto__,___$3,specs))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12412_12417;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12413_12418;

try{cljs.spec.alpha.explain.call(null,self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12411_12416;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12410_12415;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})(),"\n","(pvalid? argspec args)"].join('')));
}

return cljs.spec.gen.alpha.generate.call(null,cljs.spec.alpha.gen.call(null,self__.retspec,overrides));
};
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var G__15832 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15837__i = 0, G__15837__a = new Array(arguments.length -  0);
while (G__15837__i < G__15837__a.length) {G__15837__a[G__15837__i] = arguments[G__15837__i + 0]; ++G__15837__i;}
  args = new cljs.core.IndexedSeq(G__15837__a,0,null);
} 
return G__15832__delegate.call(this,args);};
G__15832.cljs$lang$maxFixedArity = 0;
G__15832.cljs$lang$applyTo = (function (arglist__15838){
var args = cljs.core.seq(arglist__15838);
return G__15832__delegate(args);
});
G__15832.cljs$core$IFn$_invoke$arity$variadic = G__15832__delegate;
return G__15832;
=======
var G__12414 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12419__i = 0, G__12419__a = new Array(arguments.length -  0);
while (G__12419__i < G__12419__a.length) {G__12419__a[G__12419__i] = arguments[G__12419__i + 0]; ++G__12419__i;}
  args = new cljs.core.IndexedSeq(G__12419__a,0,null);
} 
return G__12414__delegate.call(this,args);};
G__12414.cljs$lang$maxFixedArity = 0;
G__12414.cljs$lang$applyTo = (function (arglist__12420){
var args = cljs.core.seq(arglist__12420);
return G__12414__delegate(args);
});
G__12414.cljs$core$IFn$_invoke$arity$variadic = G__12414__delegate;
return G__12414;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
})()
;})(___$3,specs))
);
}
});})(specs))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15820.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs){
=======
cljs.spec.alpha.t_cljs$spec$alpha12402.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1);
});})(specs))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15820.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs){
=======
cljs.spec.alpha.t_cljs$spec$alpha12402.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"args","args",1315556576),null,(1),null)),(new cljs.core.List(null,self__.aform,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"ret","ret",-468222814),null,(1),null)),(new cljs.core.List(null,self__.rform,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,(1),null)),(new cljs.core.List(null,self__.fform,null,(1),null)))));
});})(specs))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15820.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"meta15821","meta15821",884514807,null)], null);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha15820.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha15820.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15820";

cljs.spec.alpha.t_cljs$spec$alpha15820.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15820");
=======
cljs.spec.alpha.t_cljs$spec$alpha12402.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"meta12403","meta12403",1374658691,null)], null);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha12402.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha12402.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha12402";

cljs.spec.alpha.t_cljs$spec$alpha12402.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.spec.alpha/t_cljs$spec$alpha12402");
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
});})(specs))
;

/**
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha15820.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha15820 = ((function (specs){
return (function cljs$spec$alpha$fspec_impl_$___GT_t_cljs$spec$alpha15820(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta15821){
return (new cljs.spec.alpha.t_cljs$spec$alpha15820(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta15821));
=======
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha12402.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha12402 = ((function (specs){
return (function cljs$spec$alpha$fspec_impl_$___GT_t_cljs$spec$alpha12402(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta12403){
return (new cljs.spec.alpha.t_cljs$spec$alpha12402(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta12403));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
});})(specs))
;

}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
return (new cljs.spec.alpha.t_cljs$spec$alpha15820(argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("cljs.spec.alpha","kvs->map","cljs.spec.alpha/kvs->map",579713455),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__15839#","p1__15839#",-905331797,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"p1__15839#","p1__15839#",-905331797,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"p1__15839#","p1__15839#",-905331797,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__15840#","p1__15840#",-1939627305,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"p1__15840#","p1__15840#",-1939627305,null)))),cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"%","%",-950237169,null)))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__15839_SHARP_){
return cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),p1__15839_SHARP_),cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),p1__15839_SHARP_));
}),null,true,(function (p1__15840_SHARP_){
return cljs.core.map.call(null,(function (p__15841){
var vec__15842 = p__15841;
var k = cljs.core.nth.call(null,vec__15842,(0),null);
var v = cljs.core.nth.call(null,vec__15842,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),k,new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),v], null);
}),p1__15840_SHARP_);
=======
return (new cljs.spec.alpha.t_cljs$spec$alpha12402(argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("cljs.spec.alpha","kvs->map","cljs.spec.alpha/kvs->map",579713455),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__12421#","p1__12421#",2106246611,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"p1__12421#","p1__12421#",2106246611,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"p1__12421#","p1__12421#",2106246611,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__12422#","p1__12422#",-1344855614,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"p1__12422#","p1__12422#",-1344855614,null)))),cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"%","%",-950237169,null)))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__12421_SHARP_){
return cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),p1__12421_SHARP_),cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),p1__12421_SHARP_));
}),null,true,(function (p1__12422_SHARP_){
return cljs.core.map.call(null,(function (p__12423){
var vec__12424 = p__12423;
var k = cljs.core.nth.call(null,vec__12424,(0),null);
var v = cljs.core.nth.call(null,vec__12424,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),k,new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),v], null);
}),p1__12422_SHARP_);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
})));
/**
 * takes a spec and returns a spec that has the same properties except
 *   'conform' returns the original (not the conformed) value. Note, will specize regex ops.
 */
cljs.spec.alpha.nonconforming = (function cljs$spec$alpha$nonconforming(spec){
var spec__$1 = (new cljs.core.Delay((function (){
return cljs.spec.alpha.specize.call(null,spec);
}),null));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha15845 !== 'undefined')){
=======
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha12427 !== 'undefined')){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15845 = (function (spec,meta15846){
this.spec = spec;
this.meta15846 = meta15846;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha15845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec__$1){
return (function (_15847,meta15846__$1){
var self__ = this;
var _15847__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15845(self__.spec,meta15846__$1));
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha15845.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec__$1){
return (function (_15847){
var self__ = this;
var _15847__$1 = this;
return self__.meta15846;
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha15845.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15845.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (spec__$1){
=======
cljs.spec.alpha.t_cljs$spec$alpha12427 = (function (spec,meta12428){
this.spec = spec;
this.meta12428 = meta12428;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha12427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec__$1){
return (function (_12429,meta12428__$1){
var self__ = this;
var _12429__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha12427(self__.spec,meta12428__$1));
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha12427.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec__$1){
return (function (_12429){
var self__ = this;
var _12429__$1 = this;
return self__.meta12428;
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha12427.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha12427.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (spec__$1){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15845.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (spec__$1){
=======
cljs.spec.alpha.t_cljs$spec$alpha12427.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (spec__$1){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15845.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15845.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (spec__$1){
=======
cljs.spec.alpha.t_cljs$spec$alpha12427.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha12427.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (spec__$1){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,x){
var self__ = this;
var ___$1 = this;
var ret = cljs.spec.alpha.conform_STAR_.call(null,cljs.core.deref.call(null,self__.spec),x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return x;
}
});})(spec__$1))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15845.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (spec__$1){
=======
cljs.spec.alpha.t_cljs$spec$alpha12427.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (spec__$1){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.unform_STAR_.call(null,cljs.core.deref.call(null,self__.spec),x);
});})(spec__$1))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15845.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (spec__$1){
=======
cljs.spec.alpha.t_cljs$spec$alpha12427.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (spec__$1){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.explain_STAR_.call(null,cljs.core.deref.call(null,self__.spec),path,via,in$,x);
});})(spec__$1))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15845.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (spec__$1){
=======
cljs.spec.alpha.t_cljs$spec$alpha12427.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (spec__$1){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.gen_STAR_.call(null,cljs.core.deref.call(null,self__.spec),overrides,path,rmap);
});})(spec__$1))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15845.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (spec__$1){
=======
cljs.spec.alpha.t_cljs$spec$alpha12427.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (spec__$1){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,gfn){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.nonconforming.call(null,cljs.spec.alpha.with_gen_STAR_.call(null,cljs.core.deref.call(null,self__.spec),gfn));
});})(spec__$1))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15845.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (spec__$1){
=======
cljs.spec.alpha.t_cljs$spec$alpha12427.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (spec__$1){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","nonconforming","cljs.spec.alpha/nonconforming",-1009218508,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha.describe_STAR_.call(null,cljs.core.deref.call(null,self__.spec)),null,(1),null)))));
});})(spec__$1))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15845.getBasis = ((function (spec__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"meta15846","meta15846",1578056995,null)], null);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha15845.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha15845.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15845";

cljs.spec.alpha.t_cljs$spec$alpha15845.cljs$lang$ctorPrWriter = ((function (spec__$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15845");
=======
cljs.spec.alpha.t_cljs$spec$alpha12427.getBasis = ((function (spec__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"meta12428","meta12428",-495988654,null)], null);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha12427.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha12427.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha12427";

cljs.spec.alpha.t_cljs$spec$alpha12427.cljs$lang$ctorPrWriter = ((function (spec__$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.spec.alpha/t_cljs$spec$alpha12427");
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
});})(spec__$1))
;

/**
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha15845.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha15845 = ((function (spec__$1){
return (function cljs$spec$alpha$nonconforming_$___GT_t_cljs$spec$alpha15845(spec__$2,meta15846){
return (new cljs.spec.alpha.t_cljs$spec$alpha15845(spec__$2,meta15846));
=======
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha12427.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha12427 = ((function (spec__$1){
return (function cljs$spec$alpha$nonconforming_$___GT_t_cljs$spec$alpha12427(spec__$2,meta12428){
return (new cljs.spec.alpha.t_cljs$spec$alpha12427(spec__$2,meta12428));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
});})(spec__$1))
;

}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
return (new cljs.spec.alpha.t_cljs$spec$alpha15845(spec__$1,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new cljs.spec.alpha.t_cljs$spec$alpha12427(spec__$1,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
});
/**
 * Do not call this directly, use 'nilable'
 */
cljs.spec.alpha.nilable_impl = (function cljs$spec$alpha$nilable_impl(form,pred,gfn){
var spec = (new cljs.core.Delay((function (){
return cljs.spec.alpha.specize.call(null,pred,form);
}),null));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha15848 !== 'undefined')){
=======
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha12430 !== 'undefined')){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15848 = (function (form,pred,gfn,spec,meta15849){
=======
cljs.spec.alpha.t_cljs$spec$alpha12430 = (function (form,pred,gfn,spec,meta12431){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.spec = spec;
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
this.meta15849 = meta15849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha15848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec){
return (function (_15850,meta15849__$1){
var self__ = this;
var _15850__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15848(self__.form,self__.pred,self__.gfn,self__.spec,meta15849__$1));
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha15848.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec){
return (function (_15850){
var self__ = this;
var _15850__$1 = this;
return self__.meta15849;
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha15848.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15848.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (spec){
=======
this.meta12431 = meta12431;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha12430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec){
return (function (_12432,meta12431__$1){
var self__ = this;
var _12432__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha12430(self__.form,self__.pred,self__.gfn,self__.spec,meta12431__$1));
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha12430.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec){
return (function (_12432){
var self__ = this;
var _12432__$1 = this;
return self__.meta12431;
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha12430.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha12430.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (spec){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15848.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (spec){
=======
cljs.spec.alpha.t_cljs$spec$alpha12430.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (spec){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15848.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15848.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (spec){
=======
cljs.spec.alpha.t_cljs$spec$alpha12430.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha12430.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (spec){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.alpha.conform_STAR_.call(null,cljs.core.deref.call(null,self__.spec),x);
}
});})(spec))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15848.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (spec){
=======
cljs.spec.alpha.t_cljs$spec$alpha12430.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (spec){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.alpha.unform_STAR_.call(null,cljs.core.deref.call(null,self__.spec),x);
}
});})(spec))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15848.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (spec){
=======
cljs.spec.alpha.t_cljs$spec$alpha12430.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (spec){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(((cljs.spec.alpha.pvalid_QMARK_.call(null,cljs.core.deref.call(null,self__.spec),x)) || ((x == null)))){
return null;
} else {
return cljs.core.conj.call(null,cljs.spec.alpha.explain_1.call(null,self__.form,self__.pred,cljs.core.conj.call(null,path,new cljs.core.Keyword("cljs.spec.alpha","pred","cljs.spec.alpha/pred",-798342594)),via,in$,x),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.call(null,path,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950)),new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));
}
});})(spec))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15848.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (spec){
=======
cljs.spec.alpha.t_cljs$spec$alpha12430.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (spec){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gen.alpha.frequency.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay(((function (___$1,spec){
return (function (){
return cljs.spec.gen.alpha.return$.call(null,null);
});})(___$1,spec))
,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay(((function (___$1,spec){
return (function (){
return cljs.spec.alpha.gensub.call(null,self__.pred,overrides,cljs.core.conj.call(null,path,new cljs.core.Keyword("cljs.spec.alpha","pred","cljs.spec.alpha/pred",-798342594)),rmap,self__.form);
});})(___$1,spec))
,null)))], null)], null));
}
});})(spec))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15848.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (spec){
=======
cljs.spec.alpha.t_cljs$spec$alpha12430.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (spec){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.nilable_impl.call(null,self__.form,self__.pred,gfn__$1);
});})(spec))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15848.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (spec){
=======
cljs.spec.alpha.t_cljs$spec$alpha12430.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (spec){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),null,(1),null)),(new cljs.core.List(null,self__.form,null,(1),null)))));
});})(spec))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
cljs.spec.alpha.t_cljs$spec$alpha15848.getBasis = ((function (spec){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"meta15849","meta15849",-446403435,null)], null);
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha15848.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha15848.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15848";

cljs.spec.alpha.t_cljs$spec$alpha15848.cljs$lang$ctorPrWriter = ((function (spec){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15848");
=======
cljs.spec.alpha.t_cljs$spec$alpha12430.getBasis = ((function (spec){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"meta12431","meta12431",-246150972,null)], null);
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha12430.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha12430.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha12430";

cljs.spec.alpha.t_cljs$spec$alpha12430.cljs$lang$ctorPrWriter = ((function (spec){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.spec.alpha/t_cljs$spec$alpha12430");
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
});})(spec))
;

/**
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha15848.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha15848 = ((function (spec){
return (function cljs$spec$alpha$nilable_impl_$___GT_t_cljs$spec$alpha15848(form__$1,pred__$1,gfn__$1,spec__$1,meta15849){
return (new cljs.spec.alpha.t_cljs$spec$alpha15848(form__$1,pred__$1,gfn__$1,spec__$1,meta15849));
=======
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha12430.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha12430 = ((function (spec){
return (function cljs$spec$alpha$nilable_impl_$___GT_t_cljs$spec$alpha12430(form__$1,pred__$1,gfn__$1,spec__$1,meta12431){
return (new cljs.spec.alpha.t_cljs$spec$alpha12430(form__$1,pred__$1,gfn__$1,spec__$1,meta12431));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
});})(spec))
;

}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
return (new cljs.spec.alpha.t_cljs$spec$alpha15848(form,pred,gfn,spec,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new cljs.spec.alpha.t_cljs$spec$alpha12430(form,pred,gfn,spec,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
});
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.alpha.exercise = (function cljs$spec$alpha$exercise(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var G__15853 = arguments.length;
switch (G__15853) {
=======
var G__12435 = arguments.length;
switch (G__12435) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
case 1:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.alpha.exercise.call(null,spec,(10));
});

cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.alpha.exercise.call(null,spec,n,null);
});

cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
return cljs.core.map.call(null,(function (p1__15851_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__15851_SHARP_,cljs.spec.alpha.conform.call(null,spec,p1__15851_SHARP_)],null));
=======
return cljs.core.map.call(null,(function (p1__12433_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__12433_SHARP_,cljs.spec.alpha.conform.call(null,spec,p1__12433_SHARP_)],null));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
}),cljs.spec.gen.alpha.sample.call(null,cljs.spec.alpha.gen.call(null,spec,overrides),n));
});

cljs.spec.alpha.exercise.cljs$lang$maxFixedArity = 3;

/**
 * Return true if inst at or after start and before end
 */
cljs.spec.alpha.inst_in_range_QMARK_ = (function cljs$spec$alpha$inst_in_range_QMARK_(start,end,inst){
var and__4120__auto__ = cljs.core.inst_QMARK_.call(null,inst);
if(and__4120__auto__){
var t = cljs.core.inst_ms.call(null,inst);
return (((cljs.core.inst_ms.call(null,start) <= t)) && ((t < cljs.core.inst_ms.call(null,end))));
} else {
return and__4120__auto__;
}
});
/**
 * Return true if start <= val, val < end and val is a fixed
 *   precision integer.
 */
cljs.spec.alpha.int_in_range_QMARK_ = (function cljs$spec$alpha$int_in_range_QMARK_(start,end,val){
if(cljs.core.integer_QMARK_.call(null,val)){
return (((start <= val)) && ((val < end)));
} else {
if((val instanceof goog.math.Long)){
var and__4120__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__4120__auto__)){
return val.lessThan(end);
} else {
return and__4120__auto__;
}
} else {
if((val instanceof goog.math.Integer)){
var and__4120__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__4120__auto__)){
return val.lessThan(end);
} else {
return and__4120__auto__;
}
} else {
return false;

}
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha._STAR_compile_asserts_STAR_ !== 'undefined')){
} else {
/**
 * If true, compiler will enable spec asserts, which are then
 * subject to runtime control via check-asserts? If false, compiler
 * will eliminate all spec assert overhead. See 'assert'.
 * Initially set to the negation of the ':elide-asserts' compiler option.
 * Defaults to true.
 */
cljs.spec.alpha._STAR_compile_asserts_STAR_ = true;
}
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha._STAR_runtime_asserts_STAR_ !== 'undefined')){
} else {
cljs.spec.alpha._STAR_runtime_asserts_STAR_ = false;
}
/**
 * Returns the value set by check-asserts.
 */
cljs.spec.alpha.check_asserts_QMARK_ = (function cljs$spec$alpha$check_asserts_QMARK_(){
return cljs.spec.alpha._STAR_runtime_asserts_STAR_;
});
/**
 * Enable or disable spec asserts that have been compiled
 * with '*compile-asserts*' true.  See 'assert'.
 * Initially set to boolean value of cljs.spec.alpha/*runtime-asserts*.
 * Defaults to false.
 */
cljs.spec.alpha.check_asserts = (function cljs$spec$alpha$check_asserts(flag){
return cljs.spec.alpha._STAR_runtime_asserts_STAR_ = flag;
});
/**
 * Do not call this directly, use 'assert'.
 */
cljs.spec.alpha.assert_STAR_ = (function cljs$spec$alpha$assert_STAR_(spec,x){
if(cljs.spec.alpha.valid_QMARK_.call(null,spec,x)){
return x;
} else {
var ed = cljs.core.merge.call(null,cljs.core.assoc.call(null,cljs.spec.alpha.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,x),new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"assertion-failed","assertion-failed",-970534477)));
throw (new Error(["Spec assertion failed\n",(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/spec/alpha.js
var _STAR_print_newline_STAR__orig_val__15859_15863 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15860_15864 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15861_15865 = true;
var _STAR_print_fn_STAR__temp_val__15862_15866 = ((function (_STAR_print_newline_STAR__orig_val__15859_15863,_STAR_print_fn_STAR__orig_val__15860_15864,_STAR_print_newline_STAR__temp_val__15861_15865,sb__4661__auto__,ed){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__15859_15863,_STAR_print_fn_STAR__orig_val__15860_15864,_STAR_print_newline_STAR__temp_val__15861_15865,sb__4661__auto__,ed))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15861_15865;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15862_15866;

try{cljs.spec.alpha.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15860_15864;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15859_15863;
=======
var _STAR_print_newline_STAR__orig_val__12441_12445 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12442_12446 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12443_12447 = true;
var _STAR_print_fn_STAR__temp_val__12444_12448 = ((function (_STAR_print_newline_STAR__orig_val__12441_12445,_STAR_print_fn_STAR__orig_val__12442_12446,_STAR_print_newline_STAR__temp_val__12443_12447,sb__4661__auto__,ed){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__12441_12445,_STAR_print_fn_STAR__orig_val__12442_12446,_STAR_print_newline_STAR__temp_val__12443_12447,sb__4661__auto__,ed))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12443_12447;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12444_12448;

try{cljs.spec.alpha.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12442_12446;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12441_12445;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/spec/alpha.js
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})()].join('')));
}
});

//# sourceMappingURL=alpha.js.map
