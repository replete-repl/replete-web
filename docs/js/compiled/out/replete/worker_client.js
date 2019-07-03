// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('replete.worker_client');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('cljs.reader');
replete.worker_client.worker_path = ((goog.DEBUG)?"js/bootstrap_worker.js":"js/compiled/worker.js");
replete.worker_client.handle_message = (function replete$worker_client$handle_message(e){
var G__10978 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(e.data);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__10978) : re_frame.core.dispatch.call(null,G__10978));
});
if((typeof replete !== 'undefined') && (typeof replete.worker_client !== 'undefined') && (typeof replete.worker_client.worker !== 'undefined')){
} else {
replete.worker_client.worker = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
replete.worker_client.stop_BANG_ = (function replete$worker_client$stop_BANG_(){
var temp__5720__auto__ = cljs.core.deref(replete.worker_client.worker);
if(cljs.core.truth_(temp__5720__auto__)){
var w = temp__5720__auto__;
w.terminate();

return cljs.core.reset_BANG_(replete.worker_client.worker,null);
} else {
return null;
}
});
replete.worker_client.init_BANG_ = (function replete$worker_client$init_BANG_(){
replete.worker_client.stop_BANG_();

cljs.core.reset_BANG_(replete.worker_client.worker,(new Worker(replete.worker_client.worker_path)));

return cljs.core.deref(replete.worker_client.worker).addEventListener("message",replete.worker_client.handle_message);
});
replete.worker_client.send_BANG_ = (function replete$worker_client$send_BANG_(event){
return cljs.core.deref(replete.worker_client.worker).postMessage(cljs.core.str.cljs$core$IFn$_invoke$arity$1(event));
});
