// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('replete.helpers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
/**
 * The maximum width of lines in `s` or 0 if `s` is nil
 */
replete.helpers.max_line_width = (function replete$helpers$max_line_width(s){
var or__4131__auto__ = (function (){var G__14499 = s;
var G__14499__$1 = (((G__14499 == null))?null:clojure.string.split_lines(G__14499));
var G__14499__$2 = (((G__14499__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,G__14499__$1));
if((G__14499__$2 == null)){
return null;
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,G__14499__$2);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
});
/**
 * The count of lines in `s` or 0 if `s` is nil
 */
replete.helpers.lines_count = (function replete$helpers$lines_count(s){
var or__4131__auto__ = (function (){var G__14501 = s;
var G__14501__$1 = (((G__14501 == null))?null:clojure.string.split_lines(G__14501));
if((G__14501__$1 == null)){
return null;
} else {
return cljs.core.count(G__14501__$1);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
});
