// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('replete.system');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('replete.editor');
goog.require('replete.events');
goog.require('replete.worker_client');
replete.system.dev_setup = (function replete$system$dev_setup(){
return cljs.core.enable_console_print_BANG_();
});
replete.system.mount_root = (function replete$system$mount_root(){
(re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frame.core.clear_subscription_cache_BANG_.call(null));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [replete.editor.replete_editor], null),document.getElementById("app"));
});
replete.system.init = (function replete$system$init(){
replete.worker_client.init_BANG_();

var G__21119_21120 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$replete$events_SLASH_initialize_DASH_db], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__21119_21120) : re_frame.core.dispatch_sync.call(null,G__21119_21120));

replete.system.dev_setup();

return replete.system.mount_root();
});
goog.exportSymbol('replete.system.init', replete.system.init);
