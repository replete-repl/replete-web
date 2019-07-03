// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_com.validate');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('re_com.util');
goog.require('reagent.core');
goog.require('reagent.impl.template');
goog.require('goog.string');
goog.require('goog.date.UtcDateTime');
goog.require('goog.date.Date');
/**
 * Converts obj to a string and truncates it to max-len chars if necessary.
 * When truncation is necessary, adds an elipsis to the end
 */
re_com.validate.left_string = (function re_com$validate$left_string(obj,max_len){
var G__14647 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj);
var G__14648 = max_len;
return goog.string.truncate(G__14647,G__14648);
});
/**
 * Sends a message to the DeV Tools console as an error. Returns false to indicate 'error' condition
 */
re_com.validate.log_error = (function re_com$validate$log_error(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14650 = arguments.length;
var i__4731__auto___14651 = (0);
while(true){
if((i__4731__auto___14651 < len__4730__auto___14650)){
args__4736__auto__.push((arguments[i__4731__auto___14651]));

var G__14652 = (i__4731__auto___14651 + (1));
i__4731__auto___14651 = G__14652;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.validate.log_error.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.validate.log_error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
console.error(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args));

return false;
});

re_com.validate.log_error.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.validate.log_error.cljs$lang$applyTo = (function (seq14649){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14649));
});

/**
 * Sends a message to the DeV Tools console as an warning. Returns true to indicate 'not and error' condition
 */
re_com.validate.log_warning = (function re_com$validate$log_warning(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14654 = arguments.length;
var i__4731__auto___14655 = (0);
while(true){
if((i__4731__auto___14655 < len__4730__auto___14654)){
args__4736__auto__.push((arguments[i__4731__auto___14655]));

var G__14656 = (i__4731__auto___14655 + (1));
i__4731__auto___14655 = G__14656;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.validate.log_warning.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.validate.log_warning.cljs$core$IFn$_invoke$arity$variadic = (function (args){
console.warn(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args));

return true;
});

re_com.validate.log_warning.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.validate.log_warning.cljs$lang$applyTo = (function (seq14653){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14653));
});

re_com.validate.hash_map_with_name_keys = (function re_com$validate$hash_map_with_name_keys(v){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,v),v);
});
/**
 * Package up all the relevant data for validation purposes from the xxx-args-desc map into a new map
 */
re_com.validate.extract_arg_data = (function re_com$validate$extract_arg_data(args_desc){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$arg_DASH_names,cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,args_desc)),cljs.core.cst$kw$required_DASH_args,cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$required,args_desc))),cljs.core.cst$kw$validated_DASH_args,re_com.validate.hash_map_with_name_keys(cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$validate_DASH_fn,args_desc)))], null);
});
/**
 * returns true if every passed-args is value. Otherwise log the problem and return false
 */
re_com.validate.arg_names_valid_QMARK_ = (function re_com$validate$arg_names_valid_QMARK_(defined_args,passed_args){
var or__4131__auto__ = clojure.set.superset_QMARK_(defined_args,passed_args);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var missing_args = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(defined_args,passed_args);
return re_com.validate.log_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid argument(s): ",missing_args], 0));
}
});
/**
 * returns true if all the required args are supplied. Otherwise log the error and return false
 */
re_com.validate.required_args_passed_QMARK_ = (function re_com$validate$required_args_passed_QMARK_(required_args,passed_args){
var or__4131__auto__ = clojure.set.superset_QMARK_(passed_args,required_args);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var missing_args = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(passed_args,required_args);
return re_com.validate.log_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Missing required argument(s): ",missing_args], 0));
}
});
/**
 * Gathers together a list of args that have a validator and...
 * returns true if all argument values are valid OR are just warnings (log warning to the console).
 * Otherwise log an error to the console and return false.
 * Validation functions can return:
 *       - true:   validation success
 *       - false:  validation failed - use standard error message
 *       - map:    validation failed - includes two keys:
 *                                       :status  - :error:   log to console as error
 *                                                  :warning: log to console as warning
 *                                       :message - use this string in the message of the warning/error
 */
re_com.validate.validate_fns_pass_QMARK_ = (function re_com$validate$validate_fns_pass_QMARK_(args_with_validators,passed_args,component_name){
var validate_arg = (function (p__14657){
var vec__14658 = p__14657;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14658,(0),null);
var v_arg_def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14658,(1),null);
var arg_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(v_arg_def);
var arg_val = re_com.util.deref_or_value_peek((arg_name.cljs$core$IFn$_invoke$arity$1 ? arg_name.cljs$core$IFn$_invoke$arity$1(passed_args) : arg_name.call(null,passed_args)));
var required_QMARK_ = cljs.core.cst$kw$required.cljs$core$IFn$_invoke$arity$1(v_arg_def);
var validate_result = (function (){var fexpr__14661 = cljs.core.cst$kw$validate_DASH_fn.cljs$core$IFn$_invoke$arity$1(v_arg_def);
return (fexpr__14661.cljs$core$IFn$_invoke$arity$1 ? fexpr__14661.cljs$core$IFn$_invoke$arity$1(arg_val) : fexpr__14661.call(null,arg_val));
})();
var log_msg_base = ["Validation failed for argument '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"' in component '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_name),"': "].join('');
var comp_path = [" at ",reagent.core.component_path(reagent.core.current_component())].join('');
var warning_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(validate_result),cljs.core.cst$kw$warning);
if(((validate_result === true) || ((((arg_val == null)) && (cljs.core.not(required_QMARK_)))))){
return true;
} else {
if(validate_result === false){
return re_com.validate.log_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([log_msg_base,"Expected '",cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(v_arg_def),"'. Got '",(((arg_val == null))?"nil":re_com.validate.left_string(arg_val,(60))),"'",comp_path], 0));
} else {
if(cljs.core.map_QMARK_(validate_result)){
var G__14663 = log_msg_base;
var G__14664 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(validate_result);
var G__14665 = ((warning_QMARK_)?comp_path:null);
var fexpr__14662 = ((warning_QMARK_)?re_com.validate.log_warning:re_com.validate.log_error);
return (fexpr__14662.cljs$core$IFn$_invoke$arity$3 ? fexpr__14662.cljs$core$IFn$_invoke$arity$3(G__14663,G__14664,G__14665) : fexpr__14662.call(null,G__14663,G__14664,G__14665));
} else {
return re_com.validate.log_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid return from validate-fn: ",validate_result,comp_path], 0));

}
}
}
});
return cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(validate_arg,cljs.core.select_keys(args_with_validators,cljs.core.vec(cljs.core.keys(passed_args)))));
});
/**
 * Calls three validation tests:
 *  - Are arg names valid?
 *  - Have all required args been passed?
 *  - Specific valiadation function calls to check arg values if specified
 * If they all pass, returns true.
 * Normally used for a call to the {:pre...} at the beginning of a function
 */
re_com.validate.validate_args = (function re_com$validate$validate_args(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14669 = arguments.length;
var i__4731__auto___14670 = (0);
while(true){
if((i__4731__auto___14670 < len__4730__auto___14669)){
args__4736__auto__.push((arguments[i__4731__auto___14670]));

var G__14671 = (i__4731__auto___14670 + (1));
i__4731__auto___14670 = G__14671;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic = (function (arg_defs,passed_args,component_name){
if((!(goog.DEBUG))){
return true;
} else {
var passed_arg_keys = cljs.core.set(cljs.core.keys(passed_args));
return ((re_com.validate.arg_names_valid_QMARK_(cljs.core.cst$kw$arg_DASH_names.cljs$core$IFn$_invoke$arity$1(arg_defs),passed_arg_keys)) && (re_com.validate.required_args_passed_QMARK_(cljs.core.cst$kw$required_DASH_args.cljs$core$IFn$_invoke$arity$1(arg_defs),passed_arg_keys)) && (re_com.validate.validate_fns_pass_QMARK_(cljs.core.cst$kw$validated_DASH_args.cljs$core$IFn$_invoke$arity$1(arg_defs),passed_args,cljs.core.first(component_name))));
}
});

re_com.validate.validate_args.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
re_com.validate.validate_args.cljs$lang$applyTo = (function (seq14666){
var G__14667 = cljs.core.first(seq14666);
var seq14666__$1 = cljs.core.next(seq14666);
var G__14668 = cljs.core.first(seq14666__$1);
var seq14666__$2 = cljs.core.next(seq14666__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14667,G__14668,seq14666__$2);
});

re_com.validate.justify_options = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$start,cljs.core.cst$kw$end,cljs.core.cst$kw$center,cljs.core.cst$kw$between,cljs.core.cst$kw$around], null);
re_com.validate.align_options = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$start,cljs.core.cst$kw$end,cljs.core.cst$kw$center,cljs.core.cst$kw$baseline,cljs.core.cst$kw$stretch], null);
re_com.validate.scroll_options = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$auto,cljs.core.cst$kw$off,cljs.core.cst$kw$on,cljs.core.cst$kw$spill], null);
re_com.validate.alert_types = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$none,cljs.core.cst$kw$info,cljs.core.cst$kw$warning,cljs.core.cst$kw$danger], null);
re_com.validate.button_sizes = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$regular,cljs.core.cst$kw$smaller,cljs.core.cst$kw$larger], null);
re_com.validate.throbber_sizes = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$regular,cljs.core.cst$kw$smaller,cljs.core.cst$kw$small,cljs.core.cst$kw$large], null);
re_com.validate.input_status_types = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$success,cljs.core.cst$kw$warning,cljs.core.cst$kw$error,cljs.core.cst$kw$validating], null);
re_com.validate.popover_status_types = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$success,cljs.core.cst$kw$warning,cljs.core.cst$kw$error,cljs.core.cst$kw$validating,cljs.core.cst$kw$info], null);
re_com.validate.title_levels = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level1,cljs.core.cst$kw$level2,cljs.core.cst$kw$level3,cljs.core.cst$kw$level4], null);
re_com.validate.position_options = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$above_DASH_left,cljs.core.cst$kw$above_DASH_center,cljs.core.cst$kw$above_DASH_right,cljs.core.cst$kw$below_DASH_left,cljs.core.cst$kw$below_DASH_center,cljs.core.cst$kw$below_DASH_right,cljs.core.cst$kw$left_DASH_above,cljs.core.cst$kw$left_DASH_center,cljs.core.cst$kw$left_DASH_below,cljs.core.cst$kw$right_DASH_above,cljs.core.cst$kw$right_DASH_center,cljs.core.cst$kw$right_DASH_below], null);
/**
 * Validates the passed argument against the expected set
 */
re_com.validate.validate_arg_against_set = (function re_com$validate$validate_arg_against_set(arg,arg_name,valid_set){
var arg__$1 = re_com.util.deref_or_value_peek(arg);
var or__4131__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arg__$1]),valid_set),null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return ["Invalid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),". Expected one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(valid_set),". Got '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.validate.left_string(arg__$1,(40))),"'"].join('');
}
});
re_com.validate.justify_style_QMARK_ = (function re_com$validate$justify_style_QMARK_(arg){
return re_com.validate.validate_arg_against_set(arg,":justify-style",re_com.validate.justify_options);
});
re_com.validate.align_style_QMARK_ = (function re_com$validate$align_style_QMARK_(arg){
return re_com.validate.validate_arg_against_set(arg,":align-style",re_com.validate.align_options);
});
re_com.validate.scroll_style_QMARK_ = (function re_com$validate$scroll_style_QMARK_(arg){
return re_com.validate.validate_arg_against_set(arg,":scroll-style",re_com.validate.scroll_options);
});
re_com.validate.alert_type_QMARK_ = (function re_com$validate$alert_type_QMARK_(arg){
return re_com.validate.validate_arg_against_set(arg,":alert-type",re_com.validate.alert_types);
});
re_com.validate.button_size_QMARK_ = (function re_com$validate$button_size_QMARK_(arg){
return re_com.validate.validate_arg_against_set(arg,":size",re_com.validate.button_sizes);
});
re_com.validate.throbber_size_QMARK_ = (function re_com$validate$throbber_size_QMARK_(arg){
return re_com.validate.validate_arg_against_set(arg,":size",re_com.validate.throbber_sizes);
});
re_com.validate.input_status_type_QMARK_ = (function re_com$validate$input_status_type_QMARK_(arg){
return re_com.validate.validate_arg_against_set(arg,":status",re_com.validate.input_status_types);
});
re_com.validate.popover_status_type_QMARK_ = (function re_com$validate$popover_status_type_QMARK_(arg){
return re_com.validate.validate_arg_against_set(arg,":status",re_com.validate.popover_status_types);
});
re_com.validate.title_level_type_QMARK_ = (function re_com$validate$title_level_type_QMARK_(arg){
return re_com.validate.validate_arg_against_set(arg,":level",re_com.validate.title_levels);
});
re_com.validate.position_QMARK_ = (function re_com$validate$position_QMARK_(arg){
return re_com.validate.validate_arg_against_set(arg,":position",re_com.validate.position_options);
});
/**
 * Given a vector or list of codes, create a [:span] hiccup vector containing a comma separated list of the codes
 */
re_com.validate.make_code_list = (function re_com$validate$make_code_list(codes){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span], null),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14672_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$code,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14672_SHARP_)],null));
}),codes)));
});
re_com.validate.justify_options_list = re_com.validate.make_code_list(re_com.validate.justify_options);
re_com.validate.align_options_list = re_com.validate.make_code_list(re_com.validate.align_options);
re_com.validate.scroll_options_list = re_com.validate.make_code_list(re_com.validate.scroll_options);
re_com.validate.alert_types_list = re_com.validate.make_code_list(re_com.validate.alert_types);
re_com.validate.button_sizes_list = re_com.validate.make_code_list(re_com.validate.button_sizes);
re_com.validate.throbber_sizes_list = re_com.validate.make_code_list(re_com.validate.throbber_sizes);
re_com.validate.input_status_types_list = re_com.validate.make_code_list(re_com.validate.input_status_types);
re_com.validate.popover_status_types_list = re_com.validate.make_code_list(re_com.validate.popover_status_types);
re_com.validate.title_levels_list = re_com.validate.make_code_list(re_com.validate.title_levels);
re_com.validate.position_options_list = re_com.validate.make_code_list(re_com.validate.position_options);
re_com.validate.html_attrs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 492, [cljs.core.cst$kw$y,null,cljs.core.cst$kw$on_DASH_key_DASH_down_DASH_capture,null,cljs.core.cst$kw$role,null,cljs.core.cst$kw$rel,null,cljs.core.cst$kw$text_DASH_anchor,null,cljs.core.cst$kw$on_DASH_composition_DASH_end,null,cljs.core.cst$kw$on_DASH_drop_DASH_capture,null,cljs.core.cst$kw$divisor,null,cljs.core.cst$kw$on_DASH_drag_DASH_exit,null,cljs.core.cst$kw$text_DASH_rendering,null,cljs.core.cst$kw$on_DASH_suspend,null,cljs.core.cst$kw$font_DASH_style,null,cljs.core.cst$kw$spread_DASH_method,null,cljs.core.cst$kw$auto_DASH_complete,null,cljs.core.cst$kw$reversed,null,cljs.core.cst$kw$on_DASH_can_DASH_play_DASH_capture,null,cljs.core.cst$kw$open,null,cljs.core.cst$kw$focusable,null,cljs.core.cst$kw$mask,null,cljs.core.cst$kw$image_DASH_rendering,null,cljs.core.cst$kw$tab_DASH_index,null,cljs.core.cst$kw$stroke_DASH_dasharray,null,cljs.core.cst$kw$strikethrough_DASH_thickness,null,cljs.core.cst$kw$async,null,cljs.core.cst$kw$accumulate,null,cljs.core.cst$kw$on_DASH_input_DASH_capture,null,cljs.core.cst$kw$x_DASH_height,null,cljs.core.cst$kw$attribute_DASH_name,null,cljs.core.cst$kw$on_DASH_play_DASH_capture,null,cljs.core.cst$kw$exponent,null,cljs.core.cst$kw$on_DASH_key_DASH_press_DASH_capture,null,cljs.core.cst$kw$on_DASH_rate_DASH_change_DASH_capture,null,cljs.core.cst$kw$bbox,null,cljs.core.cst$kw$color_DASH_rendering,null,cljs.core.cst$kw$min,null,cljs.core.cst$kw$mask_DASH_units,null,cljs.core.cst$kw$fill_DASH_rule,null,cljs.core.cst$kw$on_DASH_blur_DASH_capture,null,cljs.core.cst$kw$xlink_DASH_role,null,cljs.core.cst$kw$font_DASH_stretch,null,cljs.core.cst$kw$gradient_DASH_transform,null,cljs.core.cst$kw$radio_DASH_group,null,cljs.core.cst$kw$format,null,cljs.core.cst$kw$hanging,null,cljs.core.cst$kw$sizes,null,cljs.core.cst$kw$rx,null,cljs.core.cst$kw$content_DASH_style_DASH_type,null,cljs.core.cst$kw$r,null,cljs.core.cst$kw$on_DASH_touch_DASH_cancel,null,cljs.core.cst$kw$on_DASH_key_DASH_press,null,cljs.core.cst$kw$max_DASH_length,null,cljs.core.cst$kw$on_DASH_composition_DASH_start,null,cljs.core.cst$kw$vector_DASH_effect,null,cljs.core.cst$kw$stroke,null,cljs.core.cst$kw$stop_DASH_color,null,cljs.core.cst$kw$stitch_DASH_tiles,null,cljs.core.cst$kw$on_DASH_load_DASH_capture,null,cljs.core.cst$kw$on_DASH_mouse_DASH_enter,null,cljs.core.cst$kw$clip,null,cljs.core.cst$kw$wrap,null,cljs.core.cst$kw$glyph_DASH_orientation_DASH_horizontal,null,cljs.core.cst$kw$on_DASH_emptied,null,cljs.core.cst$kw$elevation,null,cljs.core.cst$kw$marker_DASH_width,null,cljs.core.cst$kw$restart,null,cljs.core.cst$kw$on_DASH_drag_DASH_over_DASH_capture,null,cljs.core.cst$kw$intercept,null,cljs.core.cst$kw$transform,null,cljs.core.cst$kw$target_DASH_x,null,cljs.core.cst$kw$selected,null,cljs.core.cst$kw$dx,null,cljs.core.cst$kw$date_DASH_time,null,cljs.core.cst$kw$required_DASH_extensions,null,cljs.core.cst$kw$on_DASH_seeked_DASH_capture,null,cljs.core.cst$kw$on_DASH_double_DASH_click_DASH_capture,null,cljs.core.cst$kw$preserve_DASH_aspect_DASH_ratio,null,cljs.core.cst$kw$on_DASH_scroll,null,cljs.core.cst$kw$on_DASH_can_DASH_play_DASH_through_DASH_capture,null,cljs.core.cst$kw$dir,null,cljs.core.cst$kw$ref_DASH_x,null,cljs.core.cst$kw$min_DASH_length,null,cljs.core.cst$kw$on_DASH_composition_DASH_update,null,cljs.core.cst$kw$pattern_DASH_transform,null,cljs.core.cst$kw$muted,null,cljs.core.cst$kw$on_DASH_abort,null,cljs.core.cst$kw$amplitude,null,cljs.core.cst$kw$seamless,null,cljs.core.cst$kw$on_DASH_pause_DASH_capture,null,cljs.core.cst$kw$placeholder,null,cljs.core.cst$kw$disabled,null,cljs.core.cst$kw$is,null,cljs.core.cst$kw$x_DASH_channel_DASH_selector,null,cljs.core.cst$kw$font_DASH_size,null,cljs.core.cst$kw$on_DASH_rate_DASH_change,null,cljs.core.cst$kw$alt,null,cljs.core.cst$kw$cell_DASH_padding,null,cljs.core.cst$kw$offset,null,cljs.core.cst$kw$speed,null,cljs.core.cst$kw$stemv,null,cljs.core.cst$kw$scale,null,cljs.core.cst$kw$kerning,null,cljs.core.cst$kw$xlink_DASH_title,null,cljs.core.cst$kw$clip_DASH_path_DASH_units,null,cljs.core.cst$kw$on_DASH_loaded_DASH_data,null,cljs.core.cst$kw$font_DASH_variant,null,cljs.core.cst$kw$writing_DASH_mode,null,cljs.core.cst$kw$font_DASH_weight,null,cljs.core.cst$kw$frame_DASH_border,null,cljs.core.cst$kw$on_DASH_composition_DASH_end_DASH_capture,null,cljs.core.cst$kw$content_DASH_editable,null,cljs.core.cst$kw$on_DASH_mouse_DASH_out,null,cljs.core.cst$kw$repeat_DASH_dur,null,cljs.core.cst$kw$coords,null,cljs.core.cst$kw$method,null,cljs.core.cst$kw$table_DASH_values,null,cljs.core.cst$kw$content,null,cljs.core.cst$kw$margin_DASH_width,null,cljs.core.cst$kw$default,null,cljs.core.cst$kw$on_DASH_focus,null,cljs.core.cst$kw$u1,null,cljs.core.cst$kw$on_DASH_playing,null,cljs.core.cst$kw$access_DASH_key,null,cljs.core.cst$kw$overflow,null,cljs.core.cst$kw$on_DASH_stalled,null,cljs.core.cst$kw$on_DASH_composition_DASH_update_DASH_capture,null,cljs.core.cst$kw$marker_DASH_units,null,cljs.core.cst$kw$ideographic,null,cljs.core.cst$kw$specular_DASH_exponent,null,cljs.core.cst$kw$name,null,cljs.core.cst$kw$clip_DASH_rule,null,cljs.core.cst$kw$on_DASH_mouse_DASH_enter_DASH_capture,null,cljs.core.cst$kw$panose1,null,cljs.core.cst$kw$on_DASH_composition_DASH_start_DASH_capture,null,cljs.core.cst$kw$on_DASH_mouse_DASH_down_DASH_capture,null,cljs.core.cst$kw$on_DASH_progress_DASH_capture,null,cljs.core.cst$kw$xlink_DASH_href,null,cljs.core.cst$kw$stroke_DASH_opacity,null,cljs.core.cst$kw$horiz_DASH_origin_DASH_x,null,cljs.core.cst$kw$form_DASH_action,null,cljs.core.cst$kw$fill,null,cljs.core.cst$kw$surface_DASH_scale,null,cljs.core.cst$kw$value,null,cljs.core.cst$kw$optimum,null,cljs.core.cst$kw$ref_DASH_y,null,cljs.core.cst$kw$color_DASH_profile,null,cljs.core.cst$kw$vert_DASH_origin_DASH_y,null,cljs.core.cst$kw$on_DASH_progress,null,cljs.core.cst$kw$stroke_DASH_linejoin,null,cljs.core.cst$kw$on_DASH_submit_DASH_capture,null,cljs.core.cst$kw$on_DASH_transition_DASH_end,null,cljs.core.cst$kw$strikethrough_DASH_position,null,cljs.core.cst$kw$href_DASH_lang,null,cljs.core.cst$kw$y1,null,cljs.core.cst$kw$scoped,null,cljs.core.cst$kw$on_DASH_load,null,cljs.core.cst$kw$mode,null,cljs.core.cst$kw$width,null,cljs.core.cst$kw$start,null,cljs.core.cst$kw$on_DASH_ended,null,cljs.core.cst$kw$on_DASH_drop,null,cljs.core.cst$kw$auto_DASH_reverse,null,cljs.core.cst$kw$dy,null,cljs.core.cst$kw$g2,null,cljs.core.cst$kw$on_DASH_blur,null,cljs.core.cst$kw$defer,null,cljs.core.cst$kw$points_DASH_at_DASH_y,null,cljs.core.cst$kw$shape_DASH_rendering,null,cljs.core.cst$kw$on_DASH_loaded_DASH_data_DASH_capture,null,cljs.core.cst$kw$num_DASH_octaves,null,cljs.core.cst$kw$orientation,null,cljs.core.cst$kw$key_DASH_type,null,cljs.core.cst$kw$cursor,null,cljs.core.cst$kw$stroke_DASH_dashoffset,null,cljs.core.cst$kw$form_DASH_target,null,cljs.core.cst$kw$on_DASH_wheel,null,cljs.core.cst$kw$type,null,cljs.core.cst$kw$controls,null,cljs.core.cst$kw$vert_DASH_origin_DASH_x,null,cljs.core.cst$kw$on_DASH_waiting_DASH_capture,null,cljs.core.cst$kw$manifest,null,cljs.core.cst$kw$on_DASH_context_DASH_menu,null,cljs.core.cst$kw$src,null,cljs.core.cst$kw$on_DASH_can_DASH_play_DASH_through,null,cljs.core.cst$kw$xml_DASH_lang,null,cljs.core.cst$kw$xlink_DASH_type,null,cljs.core.cst$kw$points,null,cljs.core.cst$kw$on_DASH_wheel_DASH_capture,null,cljs.core.cst$kw$y_DASH_channel_DASH_selector,null,cljs.core.cst$kw$orient,null,cljs.core.cst$kw$view_DASH_box,null,cljs.core.cst$kw$underline_DASH_thickness,null,cljs.core.cst$kw$form_DASH_no_DASH_validate,null,cljs.core.cst$kw$points_DASH_at_DASH_z,null,cljs.core.cst$kw$on_DASH_animation_DASH_iteration,null,cljs.core.cst$kw$icon,null,cljs.core.cst$kw$on_DASH_drag,null,cljs.core.cst$kw$multiple,null,cljs.core.cst$kw$horiz_DASH_adv_DASH_x,null,cljs.core.cst$kw$preserve_DASH_alpha,null,cljs.core.cst$kw$on_DASH_paste_DASH_capture,null,cljs.core.cst$kw$scope,null,cljs.core.cst$kw$sandbox,null,cljs.core.cst$kw$on_DASH_mouse_DASH_leave_DASH_capture,null,cljs.core.cst$kw$string,null,cljs.core.cst$kw$ascent,null,cljs.core.cst$kw$on_DASH_error_DASH_capture,null,cljs.core.cst$kw$radius,null,cljs.core.cst$kw$length_DASH_adjust,null,cljs.core.cst$kw$word_DASH_spacing,null,cljs.core.cst$kw$on_DASH_mouse_DASH_down,null,cljs.core.cst$kw$xml_DASH_base,null,cljs.core.cst$kw$on_DASH_click,null,cljs.core.cst$kw$seed,null,cljs.core.cst$kw$stop_DASH_opacity,null,cljs.core.cst$kw$size,null,cljs.core.cst$kw$use_DASH_map,null,cljs.core.cst$kw$k,null,cljs.core.cst$kw$title,null,cljs.core.cst$kw$on_DASH_seeking,null,cljs.core.cst$kw$kernel_DASH_matrix,null,cljs.core.cst$kw$allow_DASH_full_DASH_screen,null,cljs.core.cst$kw$on_DASH_mouse_DASH_out_DASH_capture,null,cljs.core.cst$kw$arabic_DASH_form,null,cljs.core.cst$kw$on_DASH_loaded_DASH_metadata,null,cljs.core.cst$kw$headers,null,cljs.core.cst$kw$loop,null,cljs.core.cst$kw$glyph_DASH_ref,null,cljs.core.cst$kw$high,null,cljs.core.cst$kw$widths,null,cljs.core.cst$kw$on_DASH_load_DASH_start,null,cljs.core.cst$kw$on_DASH_paste,null,cljs.core.cst$kw$html_DASH_for,null,cljs.core.cst$kw$on_DASH_time_DASH_update_DASH_capture,null,cljs.core.cst$kw$unicode_DASH_range,null,cljs.core.cst$kw$clip_DASH_path,null,cljs.core.cst$kw$points_DASH_at_DASH_x,null,cljs.core.cst$kw$zoom_DASH_and_DASH_pan,null,cljs.core.cst$kw$lang,null,cljs.core.cst$kw$stroke_DASH_linecap,null,cljs.core.cst$kw$src_DASH_set,null,cljs.core.cst$kw$rows,null,cljs.core.cst$kw$flood_DASH_opacity,null,cljs.core.cst$kw$on_DASH_copy_DASH_capture,null,cljs.core.cst$kw$on_DASH_key_DASH_up,null,cljs.core.cst$kw$external_DASH_resources_DASH_required,null,cljs.core.cst$kw$in2,null,cljs.core.cst$kw$summary,null,cljs.core.cst$kw$filter_DASH_res,null,cljs.core.cst$kw$on_DASH_cut,null,cljs.core.cst$kw$begin,null,cljs.core.cst$kw$on_DASH_animation_DASH_iteration_DASH_capture,null,cljs.core.cst$kw$enc_DASH_type,null,cljs.core.cst$kw$g1,null,cljs.core.cst$kw$base_DASH_profile,null,cljs.core.cst$kw$lighting_DASH_color,null,cljs.core.cst$kw$z,null,cljs.core.cst$kw$azimuth,null,cljs.core.cst$kw$alphabetic,null,cljs.core.cst$kw$alignment_DASH_baseline,null,cljs.core.cst$kw$on_DASH_encrypted,null,cljs.core.cst$kw$on_DASH_transition_DASH_end_DASH_capture,null,cljs.core.cst$kw$http_DASH_equiv,null,cljs.core.cst$kw$on_DASH_volume_DASH_change,null,cljs.core.cst$kw$cols,null,cljs.core.cst$kw$scrolling,null,cljs.core.cst$kw$edge_DASH_mode,null,cljs.core.cst$kw$preload,null,cljs.core.cst$kw$on_DASH_waiting,null,cljs.core.cst$kw$dominant_DASH_baseline,null,cljs.core.cst$kw$units_DASH_per_DASH_em,null,cljs.core.cst$kw$on_DASH_drag_DASH_leave,null,cljs.core.cst$kw$marker_DASH_start,null,cljs.core.cst$kw$overline_DASH_position,null,cljs.core.cst$kw$filter,null,cljs.core.cst$kw$on_DASH_animation_DASH_start,null,cljs.core.cst$kw$on_DASH_select,null,cljs.core.cst$kw$on_DASH_touch_DASH_cancel_DASH_capture,null,cljs.core.cst$kw$poster,null,cljs.core.cst$kw$kernel_DASH_unit_DASH_length,null,cljs.core.cst$kw$system_DASH_language,null,cljs.core.cst$kw$on_DASH_drag_DASH_start,null,cljs.core.cst$kw$on_DASH_touch_DASH_move_DASH_capture,null,cljs.core.cst$kw$draggable,null,cljs.core.cst$kw$glyph_DASH_name,null,cljs.core.cst$kw$auto_DASH_play,null,cljs.core.cst$kw$on_DASH_scroll_DASH_capture,null,cljs.core.cst$kw$key_DASH_params,null,cljs.core.cst$kw$on_DASH_playing_DASH_capture,null,cljs.core.cst$kw$descent,null,cljs.core.cst$kw$stroke_DASH_width,null,cljs.core.cst$kw$challenge,null,cljs.core.cst$kw$list,null,cljs.core.cst$kw$cap_DASH_height,null,cljs.core.cst$kw$view_DASH_target,null,cljs.core.cst$kw$on_DASH_mouse_DASH_up_DASH_capture,null,cljs.core.cst$kw$key_DASH_times,null,cljs.core.cst$kw$result,null,cljs.core.cst$kw$on_DASH_animation_DASH_start_DASH_capture,null,cljs.core.cst$kw$from,null,cljs.core.cst$kw$on_DASH_animation_DASH_end_DASH_capture,null,cljs.core.cst$kw$u2,null,cljs.core.cst$kw$src_DASH_lang,null,cljs.core.cst$kw$hidden,null,cljs.core.cst$kw$max,null,cljs.core.cst$kw$media_DASH_group,null,cljs.core.cst$kw$opacity,null,cljs.core.cst$kw$on_DASH_double_DASH_click,null,cljs.core.cst$kw$cx,null,cljs.core.cst$kw$label,null,cljs.core.cst$kw$id,null,cljs.core.cst$kw$accept_DASH_charset,null,cljs.core.cst$kw$std_DASH_deviation,null,cljs.core.cst$kw$on_DASH_key_DASH_up_DASH_capture,null,cljs.core.cst$kw$values,null,cljs.core.cst$kw$dur,null,cljs.core.cst$kw$on_DASH_stalled_DASH_capture,null,cljs.core.cst$kw$text_DASH_length,null,cljs.core.cst$kw$on_DASH_abort_DASH_capture,null,cljs.core.cst$kw$wmode,null,cljs.core.cst$kw$no_DASH_validate,null,cljs.core.cst$kw$k3,null,cljs.core.cst$kw$cy,null,cljs.core.cst$kw$underline_DASH_position,null,cljs.core.cst$kw$on_DASH_can_DASH_play,null,cljs.core.cst$kw$on_DASH_drag_DASH_capture,null,cljs.core.cst$kw$kind,null,cljs.core.cst$kw$k4,null,cljs.core.cst$kw$char_DASH_set,null,cljs.core.cst$kw$baseline_DASH_shift,null,cljs.core.cst$kw$content_DASH_script_DASH_type,null,cljs.core.cst$kw$xml_DASH_space,null,cljs.core.cst$kw$checked,null,cljs.core.cst$kw$v_DASH_mathematical,null,cljs.core.cst$kw$context_DASH_menu,null,cljs.core.cst$kw$on_DASH_drag_DASH_enter,null,cljs.core.cst$kw$slope,null,cljs.core.cst$kw$color_DASH_interpolation_DASH_filters,null,cljs.core.cst$kw$key_DASH_points,null,cljs.core.cst$kw$on_DASH_mouse_DASH_move,null,cljs.core.cst$kw$shape,null,cljs.core.cst$kw$cross_DASH_origin,null,cljs.core.cst$kw$start_DASH_offset,null,cljs.core.cst$kw$col_DASH_span,null,cljs.core.cst$kw$additive,null,cljs.core.cst$kw$on_DASH_mouse_DASH_move_DASH_capture,null,cljs.core.cst$kw$on_DASH_copy,null,cljs.core.cst$kw$on_DASH_volume_DASH_change_DASH_capture,null,cljs.core.cst$kw$on_DASH_drag_DASH_enter_DASH_capture,null,cljs.core.cst$kw$operator,null,cljs.core.cst$kw$on_DASH_context_DASH_menu_DASH_capture,null,cljs.core.cst$kw$xlink_DASH_arcrole,null,cljs.core.cst$kw$auto_DASH_focus,null,cljs.core.cst$kw$on_DASH_touch_DASH_move,null,cljs.core.cst$kw$on_DASH_touch_DASH_end_DASH_capture,null,cljs.core.cst$kw$src_DASH_doc,null,cljs.core.cst$kw$low,null,cljs.core.cst$kw$on_DASH_drag_DASH_start_DASH_capture,null,cljs.core.cst$kw$on_DASH_animation_DASH_end,null,cljs.core.cst$kw$text_DASH_decoration,null,cljs.core.cst$kw$path_DASH_length,null,cljs.core.cst$kw$on_DASH_submit,null,cljs.core.cst$kw$rotate,null,cljs.core.cst$kw$diffuse_DASH_constant,null,cljs.core.cst$kw$display,null,cljs.core.cst$kw$on_DASH_touch_DASH_start_DASH_capture,null,cljs.core.cst$kw$on_DASH_click_DASH_capture,null,cljs.core.cst$kw$mathematical,null,cljs.core.cst$kw$on_DASH_cut_DASH_capture,null,cljs.core.cst$kw$order,null,cljs.core.cst$kw$d,null,cljs.core.cst$kw$action,null,cljs.core.cst$kw$on_DASH_mouse_DASH_up,null,cljs.core.cst$kw$target_DASH_y,null,cljs.core.cst$kw$cell_DASH_spacing,null,cljs.core.cst$kw$on_DASH_mouse_DASH_leave,null,cljs.core.cst$kw$spell_DASH_check,null,cljs.core.cst$kw$by,null,cljs.core.cst$kw$origin,null,cljs.core.cst$kw$class_DASH_name,null,cljs.core.cst$kw$fy,null,cljs.core.cst$kw$on_DASH_drag_DASH_over,null,cljs.core.cst$kw$on_DASH_mouse_DASH_over,null,cljs.core.cst$kw$stroke_DASH_miterlimit,null,cljs.core.cst$kw$key_DASH_splines,null,cljs.core.cst$kw$on_DASH_emptied_DASH_capture,null,cljs.core.cst$kw$letter_DASH_spacing,null,cljs.core.cst$kw$x,null,cljs.core.cst$kw$on_DASH_duration_DASH_change,null,cljs.core.cst$kw$pattern_DASH_content_DASH_units,null,cljs.core.cst$kw$vert_DASH_adv_DASH_y,null,cljs.core.cst$kw$x1,null,cljs.core.cst$kw$xlink_DASH_show,null,cljs.core.cst$kw$form,null,cljs.core.cst$kw$on_DASH_seeking_DASH_capture,null,cljs.core.cst$kw$capture,null,cljs.core.cst$kw$integrity,null,cljs.core.cst$kw$on_DASH_encrypted_DASH_capture,null,cljs.core.cst$kw$target,null,cljs.core.cst$kw$on_DASH_error,null,cljs.core.cst$kw$on_DASH_duration_DASH_change_DASH_capture,null,cljs.core.cst$kw$flood_DASH_color,null,cljs.core.cst$kw$rendering_DASH_intent,null,cljs.core.cst$kw$read_DASH_only,null,cljs.core.cst$kw$v_DASH_hanging,null,cljs.core.cst$kw$allow_DASH_reorder,null,cljs.core.cst$kw$unicode_DASH_bidi,null,cljs.core.cst$kw$accentheight,null,cljs.core.cst$kw$end,null,cljs.core.cst$kw$on_DASH_input,null,cljs.core.cst$kw$unicode,null,cljs.core.cst$kw$bias,null,cljs.core.cst$kw$version,null,cljs.core.cst$kw$y2,null,cljs.core.cst$kw$on_DASH_pause,null,cljs.core.cst$kw$form_DASH_method,null,cljs.core.cst$kw$on_DASH_time_DASH_update,null,cljs.core.cst$kw$on_DASH_change,null,cljs.core.cst$kw$on_DASH_touch_DASH_start,null,cljs.core.cst$kw$primitive_DASH_units,null,cljs.core.cst$kw$allow_DASH_transparency,null,cljs.core.cst$kw$calc_DASH_mode,null,cljs.core.cst$kw$required_DASH_features,null,cljs.core.cst$kw$attribute_DASH_type,null,cljs.core.cst$kw$on_DASH_key_DASH_down,null,cljs.core.cst$kw$marker_DASH_mid,null,cljs.core.cst$kw$on_DASH_play,null,cljs.core.cst$kw$v_DASH_ideographic,null,cljs.core.cst$kw$nonce,null,cljs.core.cst$kw$marker_DASH_height,null,cljs.core.cst$kw$on_DASH_suspend_DASH_capture,null,cljs.core.cst$kw$pointer_DASH_events,null,cljs.core.cst$kw$fx,null,cljs.core.cst$kw$margin_DASH_height,null,cljs.core.cst$kw$local,null,cljs.core.cst$kw$font_DASH_size_DASH_adjust,null,cljs.core.cst$kw$download,null,cljs.core.cst$kw$cite,null,cljs.core.cst$kw$k1,null,cljs.core.cst$kw$on_DASH_mouse_DASH_over_DASH_capture,null,cljs.core.cst$kw$k2,null,cljs.core.cst$kw$on_DASH_ended_DASH_capture,null,cljs.core.cst$kw$base_DASH_frequency,null,cljs.core.cst$kw$input_DASH_mode,null,cljs.core.cst$kw$step,null,cljs.core.cst$kw$decelerate,null,cljs.core.cst$kw$media,null,cljs.core.cst$kw$on_DASH_change_DASH_capture,null,cljs.core.cst$kw$glyph_DASH_orientation_DASH_vertical,null,cljs.core.cst$kw$on_DASH_focus_DASH_capture,null,cljs.core.cst$kw$x2,null,cljs.core.cst$kw$color_DASH_interpolation,null,cljs.core.cst$kw$on_DASH_loaded_DASH_metadata_DASH_capture,null,cljs.core.cst$kw$on_DASH_seeked,null,cljs.core.cst$kw$visibility,null,cljs.core.cst$kw$ry,null,cljs.core.cst$kw$filter_DASH_units,null,cljs.core.cst$kw$gradient_DASH_units,null,cljs.core.cst$kw$limiting_DASH_cone_DASH_angle,null,cljs.core.cst$kw$enable_DASH_background,null,cljs.core.cst$kw$on_DASH_touch_DASH_end,null,cljs.core.cst$kw$direction,null,cljs.core.cst$kw$href,null,cljs.core.cst$kw$profile,null,cljs.core.cst$kw$fill_DASH_opacity,null,cljs.core.cst$kw$on_DASH_load_DASH_start_DASH_capture,null,cljs.core.cst$kw$required,null,cljs.core.cst$kw$v_DASH_alphabetic,null,cljs.core.cst$kw$specular_DASH_constant,null,cljs.core.cst$kw$pattern_DASH_units,null,cljs.core.cst$kw$font_DASH_family,null,cljs.core.cst$kw$on_DASH_drag_DASH_exit_DASH_capture,null,cljs.core.cst$kw$xlink_DASH_actuate,null,cljs.core.cst$kw$form_DASH_enc_DASH_type,null,cljs.core.cst$kw$height,null,cljs.core.cst$kw$spacing,null,cljs.core.cst$kw$marker_DASH_end,null,cljs.core.cst$kw$on_DASH_drag_DASH_end_DASH_capture,null,cljs.core.cst$kw$mask_DASH_content_DASH_units,null,cljs.core.cst$kw$in,null,cljs.core.cst$kw$repeat_DASH_count,null,cljs.core.cst$kw$pattern,null,cljs.core.cst$kw$overline_DASH_thickness,null,cljs.core.cst$kw$row_DASH_span,null,cljs.core.cst$kw$on_DASH_select_DASH_capture,null,cljs.core.cst$kw$accept,null,cljs.core.cst$kw$span,null,cljs.core.cst$kw$on_DASH_drag_DASH_leave_DASH_capture,null,cljs.core.cst$kw$to,null,cljs.core.cst$kw$paint_DASH_order,null,cljs.core.cst$kw$on_DASH_drag_DASH_end,null,cljs.core.cst$kw$data,null,cljs.core.cst$kw$stemh,null], null), null);
re_com.validate.extension_attrs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$aria,null,cljs.core.cst$kw$data,null], null), null);
re_com.validate.css_styles = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 332, [cljs.core.cst$kw$transform_DASH_style,null,cljs.core.cst$kw$border_DASH_image,null,cljs.core.cst$kw$mm,null,cljs.core.cst$kw$border_DASH_image_DASH_slice,null,cljs.core.cst$kw$fr,null,cljs.core.cst$kw$border_DASH_style,null,cljs.core.cst$kw$line_DASH_height,null,cljs.core.cst$kw$text_DASH_rendering,null,cljs.core.cst$kw$min_DASH_width,null,cljs.core.cst$kw$font_DASH_style,null,cljs.core.cst$kw$block_DASH_size,null,cljs.core.cst$kw$inline_DASH_size,null,cljs.core.cst$kw$animation_DASH_delay,null,cljs.core.cst$kw$vmin,null,cljs.core.cst$kw$transition_DASH_delay,null,cljs.core.cst$kw$mask,null,cljs.core.cst$kw$image_DASH_rendering,null,cljs.core.cst$kw$image_DASH_orientation,null,cljs.core.cst$kw$mask_DASH_size,null,cljs.core.cst$kw$border_DASH_top_DASH_style,null,cljs.core.cst$kw$box_DASH_decoration_DASH_break,null,cljs.core.cst$kw$mask_DASH_type,null,cljs.core.cst$kw$box_DASH_sizing,null,cljs.core.cst$kw$font_DASH_variant_DASH_numeric,null,cljs.core.cst$kw$font_DASH_stretch,null,cljs.core.cst$kw$text_DASH_decoration_DASH_style,null,cljs.core.cst$kw$_DASH_webkit_DASH_flex_DASH_basis,null,cljs.core.cst$kw$mask_DASH_composite,null,cljs.core.cst$kw$border_DASH_block_DASH_end,null,cljs.core.cst$kw$align_DASH_items,null,cljs.core.cst$kw$inherit,null,cljs.core.cst$kw$padding_DASH_inline_DASH_end,null,cljs.core.cst$kw$object_DASH_fit,null,cljs.core.cst$kw$text_DASH_overflow,null,cljs.core.cst$kw$will_DASH_change,null,cljs.core.cst$kw$outline_DASH_offset,null,cljs.core.cst$kw$align_DASH_content,null,cljs.core.cst$kw$grid_DASH_column_DASH_end,null,cljs.core.cst$kw$pt,null,cljs.core.cst$kw$box_DASH_shadow,null,cljs.core.cst$kw$clip,null,cljs.core.cst$kw$padding_DASH_block_DASH_start,null,cljs.core.cst$kw$max_DASH_height,null,cljs.core.cst$kw$offset_DASH_block_DASH_end,null,cljs.core.cst$kw$isolation,null,cljs.core.cst$kw$border_DASH_right,null,cljs.core.cst$kw$text_DASH_transform,null,cljs.core.cst$kw$transform,null,cljs.core.cst$kw$border_DASH_inline_DASH_end_DASH_style,null,cljs.core.cst$kw$border_DASH_bottom_DASH_style,null,cljs.core.cst$kw$grid_DASH_template,null,cljs.core.cst$kw$animation,null,cljs.core.cst$kw$column_DASH_count,null,cljs.core.cst$kw$_DASH_webkit_DASH_align_DASH_content,null,cljs.core.cst$kw$color,null,cljs.core.cst$kw$list_DASH_style_DASH_position,null,cljs.core.cst$kw$margin_DASH_inline_DASH_end,null,cljs.core.cst$kw$_DASH_webkit_DASH_align_DASH_self,null,cljs.core.cst$kw$text_DASH_align,null,cljs.core.cst$kw$vertical_DASH_align,null,cljs.core.cst$kw$tab_DASH_size,null,cljs.core.cst$kw$min_DASH_height,null,cljs.core.cst$kw$font_DASH_language_DASH_override,null,cljs.core.cst$kw$page_DASH_break_DASH_inside,null,cljs.core.cst$kw$ruby_DASH_merge,null,cljs.core.cst$kw$grid_DASH_auto_DASH_position,null,cljs.core.cst$kw$border_DASH_left_DASH_width,null,cljs.core.cst$kw$_DASH_ms_DASH_user_DASH_select,null,cljs.core.cst$kw$bottom,null,cljs.core.cst$kw$line_DASH_break,null,cljs.core.cst$kw$outline_DASH_style,null,cljs.core.cst$kw$mask_DASH_repeat,null,cljs.core.cst$kw$white_DASH_space,null,cljs.core.cst$kw$text_DASH_emphasis_DASH_position,null,cljs.core.cst$kw$font_DASH_size,null,cljs.core.cst$kw$scroll_DASH_snap_DASH_type,null,cljs.core.cst$kw$transition,null,cljs.core.cst$kw$animation_DASH_direction,null,cljs.core.cst$kw$top,null,cljs.core.cst$kw$font_DASH_variant,null,cljs.core.cst$kw$writing_DASH_mode,null,cljs.core.cst$kw$font_DASH_weight,null,cljs.core.cst$kw$offset_DASH_inline_DASH_end,null,cljs.core.cst$kw$_DASH_webkit_DASH_flex_DASH_grow,null,cljs.core.cst$kw$content,null,cljs.core.cst$kw$max_DASH_block_DASH_size,null,cljs.core.cst$kw$float,null,cljs.core.cst$kw$border_DASH_right_DASH_style,null,cljs.core.cst$kw$border_DASH_top_DASH_right_DASH_radius,null,cljs.core.cst$kw$grid_DASH_gap,null,cljs.core.cst$kw$font_DASH_variant_DASH_ligatures,null,cljs.core.cst$kw$overflow,null,cljs.core.cst$kw$grid,null,cljs.core.cst$kw$columns,null,cljs.core.cst$kw$shape_DASH_outside,null,cljs.core.cst$kw$_DASH_moz_DASH_user_DASH_select,null,cljs.core.cst$kw$padding_DASH_block_DASH_end,null,cljs.core.cst$kw$backface_DASH_visibility,null,cljs.core.cst$kw$mix_DASH_blend_DASH_mode,null,cljs.core.cst$kw$min_DASH_inline_DASH_size,null,cljs.core.cst$kw$hyphens,null,cljs.core.cst$kw$break_DASH_inside,null,cljs.core.cst$kw$border_DASH_block_DASH_end_DASH_width,null,cljs.core.cst$kw$margin_DASH_left,null,cljs.core.cst$kw$text_DASH_decoration_DASH_line,null,cljs.core.cst$kw$mask_DASH_image,null,cljs.core.cst$kw$border_DASH_left_DASH_color,null,cljs.core.cst$kw$list_DASH_style,null,cljs.core.cst$kw$_DASH_webkit_DASH_flex_DASH_flow,null,cljs.core.cst$kw$_DASH_webkit_DASH_flex_DASH_wrap,null,cljs.core.cst$kw$margin_DASH_block_DASH_end,null,cljs.core.cst$kw$list_DASH_style_DASH_type,null,cljs.core.cst$kw$scroll_DASH_snap_DASH_coordinate,null,cljs.core.cst$kw$_DASH_webkit_DASH_user_DASH_select,null,cljs.core.cst$kw$background_DASH_color,null,cljs.core.cst$kw$overflow_DASH_wrap,null,cljs.core.cst$kw$word_DASH_wrap,null,cljs.core.cst$kw$margin_DASH_top,null,cljs.core.cst$kw$_DASH_webkit_DASH_flex,null,cljs.core.cst$kw$flex_DASH_grow,null,cljs.core.cst$kw$_DASH_webkit_DASH_justify_DASH_content,null,cljs.core.cst$kw$width,null,cljs.core.cst$kw$px,null,cljs.core.cst$kw$background,null,cljs.core.cst$kw$hz,null,cljs.core.cst$kw$page_DASH_break_DASH_after,null,cljs.core.cst$kw$background_DASH_blend_DASH_mode,null,cljs.core.cst$kw$rem,null,cljs.core.cst$kw$em,null,cljs.core.cst$kw$font_DASH_feature_DASH_settings,null,cljs.core.cst$kw$dppx,null,cljs.core.cst$kw$grid_DASH_auto_DASH_rows,null,cljs.core.cst$kw$background_DASH_attachment,null,cljs.core.cst$kw$flex_DASH_wrap,null,cljs.core.cst$kw$grid_DASH_template_DASH_rows,null,cljs.core.cst$kw$grid_DASH_row_DASH_start,null,cljs.core.cst$kw$dpcm,null,cljs.core.cst$kw$grid_DASH_auto_DASH_flow,null,cljs.core.cst$kw$cursor,null,cljs.core.cst$kw$border_DASH_right_DASH_width,null,cljs.core.cst$kw$border_DASH_inline_DASH_start_DASH_width,null,cljs.core.cst$kw$flex,null,cljs.core.cst$kw$border_DASH_inline_DASH_end_DASH_color,null,cljs.core.cst$kw$ruby_DASH_position,null,cljs.core.cst$kw$pc,null,cljs.core.cst$kw$text_DASH_orientation,null,cljs.core.cst$kw$border_DASH_block_DASH_start_DASH_style,null,cljs.core.cst$kw$list_DASH_style_DASH_image,null,cljs.core.cst$kw$max_DASH_width,null,cljs.core.cst$kw$border_DASH_bottom_DASH_left_DASH_radius,null,cljs.core.cst$kw$text_DASH_combine_DASH_upright,null,cljs.core.cst$kw$vh,null,cljs.core.cst$kw$ime_DASH_mode,null,cljs.core.cst$kw$all,null,cljs.core.cst$kw$border_DASH_image_DASH_source,null,cljs.core.cst$kw$outline_DASH_width,null,cljs.core.cst$kw$resize,null,cljs.core.cst$kw$transform_DASH_box,null,cljs.core.cst$kw$border_DASH_inline_DASH_end,null,cljs.core.cst$kw$border_DASH_block_DASH_end_DASH_style,null,cljs.core.cst$kw$perspective,null,cljs.core.cst$kw$border_DASH_left,null,cljs.core.cst$kw$border_DASH_top_DASH_left_DASH_radius,null,cljs.core.cst$kw$word_DASH_spacing,null,cljs.core.cst$kw$s,null,cljs.core.cst$kw$flex_DASH_shrink,null,cljs.core.cst$kw$animation_DASH_timing_DASH_function,null,cljs.core.cst$kw$padding_DASH_right,null,cljs.core.cst$kw$ch,null,cljs.core.cst$kw$border_DASH_bottom_DASH_width,null,cljs.core.cst$kw$font,null,cljs.core.cst$kw$font_DASH_variant_DASH_alternates,null,cljs.core.cst$kw$column_DASH_gap,null,cljs.core.cst$kw$border_DASH_block_DASH_start_DASH_width,null,cljs.core.cst$kw$vw,null,cljs.core.cst$kw$border_DASH_collapse,null,cljs.core.cst$kw$deg,null,cljs.core.cst$kw$_DASH_webkit_DASH_flex_DASH_shrink,null,cljs.core.cst$kw$orphans,null,cljs.core.cst$kw$border_DASH_right_DASH_color,null,cljs.core.cst$kw$background_DASH_clip,null,cljs.core.cst$kw$background_DASH_image,null,cljs.core.cst$kw$dpi,null,cljs.core.cst$kw$unicode_DASH_range,null,cljs.core.cst$kw$clip_DASH_path,null,cljs.core.cst$kw$cm,null,cljs.core.cst$kw$grid_DASH_column_DASH_gap,null,cljs.core.cst$kw$turn,null,cljs.core.cst$kw$ruby_DASH_align,null,cljs.core.cst$kw$text_DASH_align_DASH_last,null,cljs.core.cst$kw$grid_DASH_column_DASH_start,null,cljs.core.cst$kw$border_DASH_block_DASH_start_DASH_color,null,cljs.core.cst$kw$border_DASH_image_DASH_repeat,null,cljs.core.cst$kw$grid_DASH_row,null,cljs.core.cst$kw$widows,null,cljs.core.cst$kw$border_DASH_width,null,cljs.core.cst$kw$filter,null,cljs.core.cst$kw$mask_DASH_mode,null,cljs.core.cst$kw$quotes,null,cljs.core.cst$kw$offset_DASH_block_DASH_start,null,cljs.core.cst$kw$offset_DASH_inline_DASH_start,null,cljs.core.cst$kw$text_DASH_indent,null,cljs.core.cst$kw$z_DASH_index,null,cljs.core.cst$kw$margin_DASH_block_DASH_start,null,cljs.core.cst$kw$padding_DASH_top,null,cljs.core.cst$kw$revert,null,cljs.core.cst$kw$border_DASH_left_DASH_style,null,cljs.core.cst$kw$text_DASH_emphasis_DASH_style,null,cljs.core.cst$kw$empty_DASH_cells,null,cljs.core.cst$kw$padding_DASH_left,null,cljs.core.cst$kw$ex,null,cljs.core.cst$kw$font_DASH_variant_DASH_caps,null,cljs.core.cst$kw$text_DASH_decoration_DASH_color,null,cljs.core.cst$kw$word_DASH_break,null,cljs.core.cst$kw$border_DASH_top_DASH_width,null,cljs.core.cst$kw$background_DASH_origin,null,cljs.core.cst$kw$column_DASH_width,null,cljs.core.cst$kw$min_DASH_block_DASH_size,null,cljs.core.cst$kw$border_DASH_spacing,null,cljs.core.cst$kw$opacity,null,cljs.core.cst$kw$page_DASH_break_DASH_before,null,cljs.core.cst$kw$padding,null,cljs.core.cst$kw$font_DASH_kerning,null,cljs.core.cst$kw$grid_DASH_area,null,cljs.core.cst$kw$border_DASH_inline_DASH_start,null,cljs.core.cst$kw$border_DASH_top_DASH_color,null,cljs.core.cst$kw$border_DASH_image_DASH_outset,null,cljs.core.cst$kw$font_DASH_variant_DASH_position,null,cljs.core.cst$kw$mask_DASH_position,null,cljs.core.cst$kw$justify_DASH_content,null,cljs.core.cst$kw$max_DASH_inline_DASH_size,null,cljs.core.cst$kw$transition_DASH_timing_DASH_function,null,cljs.core.cst$kw$overflow_DASH_x,null,cljs.core.cst$kw$outline,null,cljs.core.cst$kw$animation_DASH_duration,null,cljs.core.cst$kw$initial,null,cljs.core.cst$kw$border_DASH_block_DASH_start,null,cljs.core.cst$kw$text_DASH_underline_DASH_position,null,cljs.core.cst$kw$border_DASH_inline_DASH_start_DASH_style,null,cljs.core.cst$kw$animation_DASH_play_DASH_state,null,cljs.core.cst$kw$transform_DASH_origin,null,cljs.core.cst$kw$object_DASH_position,null,cljs.core.cst$kw$marks,null,cljs.core.cst$kw$perspective_DASH_origin,null,cljs.core.cst$kw$right,null,cljs.core.cst$kw$text_DASH_shadow,null,cljs.core.cst$kw$border_DASH_color,null,cljs.core.cst$kw$text_DASH_decoration,null,cljs.core.cst$kw$transition_DASH_property,null,cljs.core.cst$kw$shape_DASH_margin,null,cljs.core.cst$kw$display,null,cljs.core.cst$kw$image_DASH_resolution,null,cljs.core.cst$kw$position,null,cljs.core.cst$kw$order,null,cljs.core.cst$kw$grid_DASH_template_DASH_areas,null,cljs.core.cst$kw$vmax,null,cljs.core.cst$kw$text_DASH_emphasis_DASH_color,null,cljs.core.cst$kw$shape_DASH_image_DASH_threshold,null,cljs.core.cst$kw$border_DASH_inline_DASH_end_DASH_width,null,cljs.core.cst$kw$column_DASH_fill,null,cljs.core.cst$kw$_DASH_webkit_DASH_order,null,cljs.core.cst$kw$letter_DASH_spacing,null,cljs.core.cst$kw$column_DASH_span,null,cljs.core.cst$kw$background_DASH_repeat,null,cljs.core.cst$kw$padding_DASH_bottom,null,cljs.core.cst$kw$break_DASH_before,null,cljs.core.cst$kw$unicode_DASH_bidi,null,cljs.core.cst$kw$margin_DASH_inline_DASH_start,null,cljs.core.cst$kw$align_DASH_self,null,cljs.core.cst$kw$margin_DASH_right,null,cljs.core.cst$kw$grid_DASH_row_DASH_end,null,cljs.core.cst$kw$background_DASH_position,null,cljs.core.cst$kw$scroll_DASH_behavior,null,cljs.core.cst$kw$table_DASH_layout,null,cljs.core.cst$kw$border_DASH_inline_DASH_start_DASH_color,null,cljs.core.cst$kw$grid_DASH_row_DASH_gap,null,cljs.core.cst$kw$grid_DASH_template_DASH_columns,null,cljs.core.cst$kw$border,null,cljs.core.cst$kw$column_DASH_rule_DASH_width,null,cljs.core.cst$kw$border_DASH_bottom_DASH_color,null,cljs.core.cst$kw$border_DASH_top,null,cljs.core.cst$kw$column_DASH_rule_DASH_color,null,cljs.core.cst$kw$overflow_DASH_y,null,cljs.core.cst$kw$border_DASH_radius,null,cljs.core.cst$kw$mask_DASH_clip,null,cljs.core.cst$kw$ms,null,cljs.core.cst$kw$pointer_DASH_events,null,cljs.core.cst$kw$flex_DASH_basis,null,cljs.core.cst$kw$caption_DASH_side,null,cljs.core.cst$kw$_DASH_webkit_DASH_align_DASH_items,null,cljs.core.cst$kw$font_DASH_synthesis,null,cljs.core.cst$kw$touch_DASH_action,null,cljs.core.cst$kw$break_DASH_after,null,cljs.core.cst$kw$font_DASH_size_DASH_adjust,null,cljs.core.cst$kw$rad,null,cljs.core.cst$kw$transition_DASH_duration,null,cljs.core.cst$kw$border_DASH_bottom_DASH_right_DASH_radius,null,cljs.core.cst$kw$khz,null,cljs.core.cst$kw$counter_DASH_increment,null,cljs.core.cst$kw$text_DASH_emphasis,null,cljs.core.cst$kw$font_DASH_variant_DASH_east_DASH_asian,null,cljs.core.cst$kw$scroll_DASH_snap_DASH_destination,null,cljs.core.cst$kw$margin_DASH_bottom,null,cljs.core.cst$kw$outline_DASH_color,null,cljs.core.cst$kw$animation_DASH_iteration_DASH_count,null,cljs.core.cst$kw$background_DASH_size,null,cljs.core.cst$kw$visibility,null,cljs.core.cst$kw$grad,null,cljs.core.cst$kw$column_DASH_rule,null,cljs.core.cst$kw$animation_DASH_fill_DASH_mode,null,cljs.core.cst$kw$direction,null,cljs.core.cst$kw$user_DASH_select,null,cljs.core.cst$kw$unset,null,cljs.core.cst$kw$column_DASH_rule_DASH_style,null,cljs.core.cst$kw$animation_DASH_name,null,cljs.core.cst$kw$grid_DASH_column,null,cljs.core.cst$kw$font_DASH_family,null,cljs.core.cst$kw$grid_DASH_auto_DASH_columns,null,cljs.core.cst$kw$flex_DASH_direction,null,cljs.core.cst$kw$_DASH_webkit_DASH_flex_DASH_direction,null,cljs.core.cst$kw$height,null,cljs.core.cst$kw$border_DASH_bottom,null,cljs.core.cst$kw$in,null,cljs.core.cst$kw$clear,null,cljs.core.cst$kw$left,null,cljs.core.cst$kw$mask_DASH_origin,null,cljs.core.cst$kw$padding_DASH_inline_DASH_start,null,cljs.core.cst$kw$counter_DASH_reset,null,cljs.core.cst$kw$flex_DASH_flow,null,cljs.core.cst$kw$border_DASH_image_DASH_width,null,cljs.core.cst$kw$margin,null,cljs.core.cst$kw$border_DASH_block_DASH_end_DASH_color,null], null), null);
/**
 * Returns true if the passed argument is either valid hiccup or a string, otherwise false/error
 */
re_com.validate.string_or_hiccup_QMARK_ = (function re_com$validate$string_or_hiccup_QMARK_(arg){
return reagent.impl.template.valid_tag_QMARK_(re_com.util.deref_or_value_peek(arg));
});
/**
 * Returns true if the passed argument is a vector of maps (either directly or contained in an atom), otherwise false/error
 * Notes:
 *  - actually it also accepts a list of maps (should we rename this? Potential long/ugly names: sequential-of-maps?, vector-or-list-of-maps?)
 *  - vector/list can be empty
 *  - only checks the first element in the vector/list
 */
re_com.validate.vector_of_maps_QMARK_ = (function re_com$validate$vector_of_maps_QMARK_(arg){
var arg__$1 = re_com.util.deref_or_value_peek(arg);
return ((cljs.core.sequential_QMARK_(arg__$1)) && (((cljs.core.empty_QMARK_(arg__$1)) || (cljs.core.map_QMARK_(cljs.core.first(arg__$1))))));
});
/**
 * Returns true if the passed argument is a valid CSS style.
 * Otherwise returns a warning map
 */
re_com.validate.css_style_QMARK_ = (function re_com$validate$css_style_QMARK_(arg){
if((!(goog.DEBUG))){
return true;
} else {
var arg__$1 = re_com.util.deref_or_value_peek(arg);
var and__4120__auto__ = cljs.core.map_QMARK_(arg__$1);
if(and__4120__auto__){
var arg_keys = cljs.core.keys(arg__$1);
var or__4131__auto__ = clojure.set.superset_QMARK_(re_com.validate.css_styles,arg_keys);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$status,cljs.core.cst$kw$warning,cljs.core.cst$kw$message,["Unknown CSS style(s): ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(re_com.validate.css_styles,arg_keys))].join('')], null);
}
} else {
return and__4120__auto__;
}
}
});
/**
 * Returns truthy if the attribute name is an extension attribute, that is data-* or aria-*, otherwise falsey.
 */
re_com.validate.extension_attribute_QMARK_ = (function re_com$validate$extension_attribute_QMARK_(attr){
var attr__$1 = cljs.core.name(attr);
var ext_QMARK_ = ((function (attr__$1){
return (function (p1__14673_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr__$1.indexOf(p1__14673_SHARP_),(0))) && ((cljs.core.count(attr__$1) > cljs.core.count(p1__14673_SHARP_))));
});})(attr__$1))
;
return cljs.core.some(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(ext_QMARK_,((function (attr__$1,ext_QMARK_){
return (function (p1__14674_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14674_SHARP_),"-"].join('');
});})(attr__$1,ext_QMARK_))
,cljs.core.name),re_com.validate.extension_attrs);
});
/**
 * Returns the subset of HTML attributes contained in the passed argument that are not valid HTML attributes.
 */
re_com.validate.invalid_html_attrs = (function re_com$validate$invalid_html_attrs(attrs){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__14675_SHARP_){
var or__4131__auto__ = (re_com.validate.html_attrs.cljs$core$IFn$_invoke$arity$1 ? re_com.validate.html_attrs.cljs$core$IFn$_invoke$arity$1(p1__14675_SHARP_) : re_com.validate.html_attrs.call(null,p1__14675_SHARP_));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return re_com.validate.extension_attribute_QMARK_(p1__14675_SHARP_);
}
}),attrs);
});
/**
 * Returns true if the passed argument is a valid HTML, SVG or event attribute.
 * Otherwise returns a warning map.
 * Notes:
 *  - Prevents :class and :style attributes
 */
re_com.validate.html_attr_QMARK_ = (function re_com$validate$html_attr_QMARK_(arg){
if((!(goog.DEBUG))){
return true;
} else {
var arg__$1 = re_com.util.deref_or_value_peek(arg);
var and__4120__auto__ = cljs.core.map_QMARK_(arg__$1);
if(and__4120__auto__){
var arg_keys = cljs.core.set(cljs.core.keys(arg__$1));
var contains_class_QMARK_ = cljs.core.contains_QMARK_(arg_keys,cljs.core.cst$kw$class);
var contains_style_QMARK_ = cljs.core.contains_QMARK_(arg_keys,cljs.core.cst$kw$style);
var result = ((contains_class_QMARK_)?":class not allowed in :attr argument":((contains_style_QMARK_)?":style not allowed in :attr argument":(function (){var temp__5720__auto__ = cljs.core.not_empty(re_com.validate.invalid_html_attrs(arg_keys));
if(cljs.core.truth_(temp__5720__auto__)){
var invalid = temp__5720__auto__;
return ["Unknown HTML attribute(s): ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(invalid)].join('');
} else {
return null;
}
})()
));
var or__4131__auto__ = (result == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$status,((((contains_class_QMARK_) || (contains_style_QMARK_)))?cljs.core.cst$kw$error:cljs.core.cst$kw$warning),cljs.core.cst$kw$message,result], null);
}
} else {
return and__4120__auto__;
}
}
});
/**
 * Returns true if the passed argument is a valid goog.date.UtcDateTime or goog.date.Date, otherwise false/error
 */
re_com.validate.goog_date_QMARK_ = (function re_com$validate$goog_date_QMARK_(arg){
var arg__$1 = re_com.util.deref_or_value_peek(arg);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.date.UtcDateTime,cljs.core.type(arg__$1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.date.Date,cljs.core.type(arg__$1))));
});
/**
 * Returns true if the passed argument is a valid regular expression, otherwise false/error
 */
re_com.validate.regex_QMARK_ = (function re_com$validate$regex_QMARK_(arg){
var arg__$1 = re_com.util.deref_or_value_peek(arg);
return (arg__$1 instanceof RegExp);
});
/**
 * Returns true if the passed argument is a number or a string, otherwise false/error
 */
re_com.validate.number_or_string_QMARK_ = (function re_com$validate$number_or_string_QMARK_(arg){
var arg__$1 = re_com.util.deref_or_value_peek(arg);
return ((typeof arg__$1 === 'number') || (typeof arg__$1 === 'string'));
});
/**
 * Returns true if the passed argument is a string (or a string within an atom), otherwise false/error
 */
re_com.validate.string_or_atom_QMARK_ = (function re_com$validate$string_or_atom_QMARK_(arg){
return typeof re_com.util.deref_or_value_peek(arg) === 'string';
});
/**
 * Returns true if the passed argument is a string/nil (or a string/nil within an atom), otherwise false/error
 */
re_com.validate.nillable_string_or_atom_QMARK_ = (function re_com$validate$nillable_string_or_atom_QMARK_(arg){
var value = re_com.util.deref_or_value_peek(arg);
return ((typeof value === 'string') || ((value == null)));
});
/**
 * Returns true if the passed argument is a set (or a set within an atom), otherwise false/error
 */
re_com.validate.set_or_atom_QMARK_ = (function re_com$validate$set_or_atom_QMARK_(arg){
return cljs.core.set_QMARK_(re_com.util.deref_or_value_peek(arg));
});
