// Compiled by ClojureScript 1.10.520 {:target :webworker}
goog.provide('replete.helpers');
goog.require('cljs.core');
goog.require('clojure.string');
/**
 * The maximum width of lines in `s` or 0 if `s` is nil
 */
replete.helpers.max_line_width = (function replete$helpers$max_line_width(s){
var or__4131__auto__ = (function (){var G__2014 = s;
var G__2014__$1 = (((G__2014 == null))?null:clojure.string.split_lines.call(null,G__2014));
var G__2014__$2 = (((G__2014__$1 == null))?null:cljs.core.map.call(null,cljs.core.count,G__2014__$1));
if((G__2014__$2 == null)){
return null;
} else {
return cljs.core.reduce.call(null,cljs.core.max,G__2014__$2);
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
var or__4131__auto__ = (function (){var G__2016 = s;
var G__2016__$1 = (((G__2016 == null))?null:clojure.string.split_lines.call(null,G__2016));
if((G__2016__$1 == null)){
return null;
} else {
return cljs.core.count.call(null,G__2016__$1);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
});

//# sourceMappingURL=helpers.js.map
