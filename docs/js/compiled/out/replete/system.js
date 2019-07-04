// Compiled by ClojureScript 1.10.520 {}
goog.provide('replete.system');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('replete.editor');
goog.require('replete.events');
goog.require('replete.worker_client');
replete.system.dev_setup = (function replete$system$dev_setup(){
return cljs.core.enable_console_print_BANG_.call(null);
});
replete.system.mount_root = (function replete$system$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [replete.editor.replete_editor], null),document.getElementById("app"));
});
replete.system.init = (function replete$system$init(){
replete.worker_client.init_BANG_.call(null);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replete.events","initialize-db","replete.events/initialize-db",697826432)], null));

replete.system.dev_setup.call(null);

return replete.system.mount_root.call(null);
});
goog.exportSymbol('replete.system.init', replete.system.init);
