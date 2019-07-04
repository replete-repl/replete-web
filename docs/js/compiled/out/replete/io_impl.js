// Compiled by ClojureScript 1.10.520 {}
goog.provide('replete.io_impl');
goog.require('cljs.core');
replete.io_impl.busy_sleep = (function replete$io_impl$busy_sleep(wake_up_time){
var now = (new Date()).getTime();
while(true){
if((!((now > wake_up_time)))){
var G__1109 = (new Date()).getTime();
now = G__1109;
continue;
} else {
return null;
}
break;
}
});
replete.io_impl.sleep = (function replete$io_impl$sleep(m,n){
var now = (new Date()).getTime();
return replete.io_impl.busy_sleep.call(null,(now + m));
});
/**
 * A namespace loader that looks up the source against the
 * given relative path in the dependencies bundle.
 */
replete.io_impl.load = (function replete$io_impl$load(namespace_relative_path){
return new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,replete.io_impl.dependencies,namespace_relative_path));
});
replete.io_impl.load_from_jar = (function replete$io_impl$load_from_jar(file_path,resource){
throw cljs.core.ex_info.call(null,"Unsupported",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"REPLETE_LOAD_FROM_JAR",new cljs.core.Keyword(null,"file-path","file-path",-2005501162),file_path,new cljs.core.Keyword(null,"resource","resource",251898836),resource], null));
});
replete.io_impl.unsupported_request = (function replete$io_impl$unsupported_request(var_args){
var args__4736__auto__ = [];
var len__4730__auto___1294 = arguments.length;
var i__4731__auto___1295 = (0);
while(true){
if((i__4731__auto___1295 < len__4730__auto___1294)){
args__4736__auto__.push((arguments[i__4731__auto___1295]));

var G__1296 = (i__4731__auto___1295 + (1));
i__4731__auto___1295 = G__1296;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return replete.io_impl.unsupported_request.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

replete.io_impl.unsupported_request.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw cljs.core.ex_info.call(null,"Unsupported",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"REPLETE_REQUEST",new cljs.core.Keyword(null,"args","args",1315556576),args], null));
});

replete.io_impl.unsupported_request.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
replete.io_impl.unsupported_request.cljs$lang$applyTo = (function (seq1293){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1293));
});

goog.global.REPLETE_LOAD = replete.io_impl.load;
goog.global.REPLETE_SLEEP = replete.io_impl.sleep;
goog.global.REPLETE_LOAD_FROM_JAR = replete.io_impl.load_from_jar;
goog.global.REPLETE_REQUEST = replete.io_impl.unsupported_request;