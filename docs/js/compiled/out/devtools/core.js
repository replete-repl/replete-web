// Compiled by ClojureScript 1.10.520 {}
goog.provide('devtools.core');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('devtools.hints');
goog.require('devtools.defaults');
goog.require('devtools.formatters');
goog.require('devtools.async');
goog.require('devtools.toolbox');
goog.require('devtools.context');
goog.require('devtools.util');
devtools.core.is_feature_available_QMARK_ = (function devtools$core$is_feature_available_QMARK_(feature){
var G__12855 = feature;
var G__12855__$1 = (((G__12855 instanceof cljs.core.Keyword))?G__12855.fqn:null);
switch (G__12855__$1) {
case "formatters":
return devtools.formatters.available_QMARK_.call(null);

break;
case "hints":
return devtools.hints.available_QMARK_.call(null);

break;
case "async":
return devtools.async.available_QMARK_.call(null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12855__$1)].join('')));

}
});
devtools.core.available_QMARK_ = (function devtools$core$available_QMARK_(var_args){
var G__12858 = arguments.length;
switch (G__12858) {
case 0:
return devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devtools.core.available_QMARK_.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = devtools.util.resolve_features_BANG_.call(null,features_desc,cljs.core.deref.call(null,devtools.defaults.feature_groups));
if(cljs.core.empty_QMARK_.call(null,features)){
return false;
} else {
return cljs.core.every_QMARK_.call(null,devtools.core.is_feature_available_QMARK_,features);
}
});

devtools.core.available_QMARK_.cljs$lang$maxFixedArity = 1;

devtools.core.is_feature_installed_QMARK_ = (function devtools$core$is_feature_installed_QMARK_(feature){
var G__12860 = feature;
var G__12860__$1 = (((G__12860 instanceof cljs.core.Keyword))?G__12860.fqn:null);
switch (G__12860__$1) {
case "formatters":
return devtools.formatters.installed_QMARK_.call(null);

break;
case "hints":
return devtools.hints.installed_QMARK_.call(null);

break;
case "async":
return devtools.async.installed_QMARK_.call(null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12860__$1)].join('')));

}
});
devtools.core.installed_QMARK_ = (function devtools$core$installed_QMARK_(var_args){
var G__12863 = arguments.length;
switch (G__12863) {
case 0:
return devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devtools.core.installed_QMARK_.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = devtools.util.resolve_features_BANG_.call(null,features_desc,cljs.core.deref.call(null,devtools.defaults.feature_groups));
if(cljs.core.empty_QMARK_.call(null,features)){
return false;
} else {
return cljs.core.every_QMARK_.call(null,devtools.core.is_feature_installed_QMARK_,features);
}
});

devtools.core.installed_QMARK_.cljs$lang$maxFixedArity = 1;

devtools.core.install_BANG_ = (function devtools$core$install_BANG_(var_args){
var G__12866 = arguments.length;
switch (G__12866) {
case 0:
return devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devtools.core.install_BANG_.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
if(cljs.core.truth_(devtools.util.under_advanced_build_QMARK_.call(null))){
return devtools.util.display_advanced_build_warning_if_needed_BANG_.call(null);
} else {
var features = devtools.util.resolve_features_BANG_.call(null,features_desc,cljs.core.deref.call(null,devtools.defaults.feature_groups));
devtools.util.display_banner_if_needed_BANG_.call(null,features,cljs.core.deref.call(null,devtools.defaults.feature_groups));

devtools.util.print_config_overrides_if_requested_BANG_.call(null,"config overrides prior install:\n");

devtools.util.install_feature_BANG_.call(null,new cljs.core.Keyword(null,"formatters","formatters",-1875637118),features,devtools.core.is_feature_available_QMARK_,devtools.formatters.install_BANG_);

devtools.util.install_feature_BANG_.call(null,new cljs.core.Keyword(null,"hints","hints",-991113151),features,devtools.core.is_feature_available_QMARK_,devtools.hints.install_BANG_);

return devtools.util.install_feature_BANG_.call(null,new cljs.core.Keyword(null,"async","async",1050769601),features,devtools.core.is_feature_available_QMARK_,devtools.async.install_BANG_);
}
});

devtools.core.install_BANG_.cljs$lang$maxFixedArity = 1;

devtools.core.uninstall_BANG_ = (function devtools$core$uninstall_BANG_(){
devtools.formatters.uninstall_BANG_.call(null);

devtools.hints.uninstall_BANG_.call(null);

return devtools.async.uninstall_BANG_.call(null);
});
devtools.core.set_prefs_BANG_ = (function devtools$core$set_prefs_BANG_(new_prefs){
return devtools.prefs.set_prefs_BANG_.call(null,new_prefs);
});
devtools.core.get_prefs = (function devtools$core$get_prefs(){
return devtools.prefs.get_prefs.call(null);
});
devtools.core.set_pref_BANG_ = (function devtools$core$set_pref_BANG_(pref,val){
return devtools.prefs.set_pref_BANG_.call(null,pref,val);
});
devtools.core.enable_BANG_ = (function devtools$core$enable_BANG_(){
return devtools.context.get_console.call(null).warn(["devtools.core/enable! was removed ","and has no effect in ",devtools.util.make_lib_info.call(null)," ","=> remove the call"].join(''));
});
devtools.core.disable_BANG_ = (function devtools$core$disable_BANG_(){
return devtools.context.get_console.call(null).warn(["devtools.core/disable! was removed ","and has no effect in ",devtools.util.make_lib_info.call(null)," ","=> remove the call"].join(''));
});
devtools.core.set_single_feature_BANG_ = (function devtools$core$set_single_feature_BANG_(_feature,_val){
return devtools.context.get_console.call(null).warn(["devtools.core/set-single-feature! was removed ","and has no effect in ",devtools.util.make_lib_info.call(null)," ","=> use (devtools.core/install! features) to install custom features"].join(''));
});
devtools.core.enable_single_feature_BANG_ = (function devtools$core$enable_single_feature_BANG_(_feature){
return devtools.context.get_console.call(null).warn(["devtools.core/enable-single-feature! was removed ","and has no effect in ",devtools.util.make_lib_info.call(null)," ","=> use (devtools.core/install! features) to install custom features"].join(''));
});
devtools.core.disable_single_feature_BANG_ = (function devtools$core$disable_single_feature_BANG_(_feature){
return devtools.context.get_console.call(null).warn(["devtools.core/disable-single-feature! was removed ","and has no effect in ",devtools.util.make_lib_info.call(null)," ","=> use (devtools.core/install! features) to install custom features"].join(''));
});
devtools.core.enable_feature_BANG_ = (function devtools$core$enable_feature_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12869 = arguments.length;
var i__4731__auto___12870 = (0);
while(true){
if((i__4731__auto___12870 < len__4730__auto___12869)){
args__4736__auto__.push((arguments[i__4731__auto___12870]));

var G__12871 = (i__4731__auto___12870 + (1));
i__4731__auto___12870 = G__12871;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return devtools.context.get_console.call(null).warn(["devtools.core/enable-feature! was removed ","and has no effect in ",devtools.util.make_lib_info.call(null)," ","=> use (devtools.core/install! features) to install custom features"].join(''));
});

devtools.core.enable_feature_BANG_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.core.enable_feature_BANG_.cljs$lang$applyTo = (function (seq12868){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12868));
});

devtools.core.disable_feature_BANG_ = (function devtools$core$disable_feature_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12873 = arguments.length;
var i__4731__auto___12874 = (0);
while(true){
if((i__4731__auto___12874 < len__4730__auto___12873)){
args__4736__auto__.push((arguments[i__4731__auto___12874]));

var G__12875 = (i__4731__auto___12874 + (1));
i__4731__auto___12874 = G__12875;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return devtools.context.get_console.call(null).warn(["devtools.core/disable-feature! was removed ","and has no effect in ",devtools.util.make_lib_info.call(null)," ","=> use (devtools.core/install! features) to install custom features"].join(''));
});

devtools.core.disable_feature_BANG_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.core.disable_feature_BANG_.cljs$lang$applyTo = (function (seq12872){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12872));
});

devtools.core.single_feature_available_QMARK_ = (function devtools$core$single_feature_available_QMARK_(_feature){
return devtools.context.get_console.call(null).warn(["devtools.core/single-feature-available? was removed ","and has no effect in ",devtools.util.make_lib_info.call(null)," ","=> use devtools.core/is-feature-available? instead"].join(''));
});
devtools.core.feature_available_QMARK_ = (function devtools$core$feature_available_QMARK_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12877 = arguments.length;
var i__4731__auto___12878 = (0);
while(true){
if((i__4731__auto___12878 < len__4730__auto___12877)){
args__4736__auto__.push((arguments[i__4731__auto___12878]));

var G__12879 = (i__4731__auto___12878 + (1));
i__4731__auto___12878 = G__12879;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return devtools.context.get_console.call(null).warn(["devtools.core/feature-available? was removed ","and has no effect in ",devtools.util.make_lib_info.call(null)," ","=> use devtools.core/is-feature-available? instead"].join(''));
});

devtools.core.feature_available_QMARK_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.core.feature_available_QMARK_.cljs$lang$applyTo = (function (seq12876){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12876));
});


//# sourceMappingURL=core.js.map
