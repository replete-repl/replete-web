// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('replete.helpers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
/**
 * The maximum width of lines in `s` or 0 if `s` is nil
 */
replete.helpers.max_line_width = (function replete$helpers$max_line_width(s){
var or__4131__auto__ = (function (){var G__11030 = s;
var G__11030__$1 = (((G__11030 == null))?null:clojure.string.split_lines(G__11030));
var G__11030__$2 = (((G__11030__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,G__11030__$1));
if((G__11030__$2 == null)){
return null;
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,G__11030__$2);
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
var or__4131__auto__ = (function (){var G__11032 = s;
var G__11032__$1 = (((G__11032 == null))?null:clojure.string.split_lines(G__11032));
if((G__11032__$1 == null)){
return null;
} else {
return cljs.core.count(G__11032__$1);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
});
