<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/core/async/impl/dispatch.js
// Compiled by ClojureScript 1.10.520 {:target :webworker}
=======
// Compiled by ClojureScript 1.10.520 {}
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/core/async/impl/dispatch.js
goog.provide('cljs.core.async.impl.dispatch');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.buffers');
goog.require('goog.async.nextTick');
cljs.core.async.impl.dispatch.tasks = cljs.core.async.impl.buffers.ring_buffer.call(null,(32));
cljs.core.async.impl.dispatch.running_QMARK_ = false;
cljs.core.async.impl.dispatch.queued_QMARK_ = false;
cljs.core.async.impl.dispatch.TASK_BATCH_SIZE = (1024);
cljs.core.async.impl.dispatch.process_messages = (function cljs$core$async$impl$dispatch$process_messages(){
cljs.core.async.impl.dispatch.running_QMARK_ = true;

cljs.core.async.impl.dispatch.queued_QMARK_ = false;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/core/async/impl/dispatch.js
var count_8254 = (0);
while(true){
var m_8255 = cljs.core.async.impl.dispatch.tasks.pop();
if((m_8255 == null)){
} else {
m_8255.call(null);

if((count_8254 < cljs.core.async.impl.dispatch.TASK_BATCH_SIZE)){
var G__8256 = (count_8254 + (1));
count_8254 = G__8256;
=======
var count_12409 = (0);
while(true){
var m_12410 = cljs.core.async.impl.dispatch.tasks.pop();
if((m_12410 == null)){
} else {
m_12410.call(null);

if((count_12409 < cljs.core.async.impl.dispatch.TASK_BATCH_SIZE)){
var G__12411 = (count_12409 + (1));
count_12409 = G__12411;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/core/async/impl/dispatch.js
continue;
} else {
}
}
break;
}

cljs.core.async.impl.dispatch.running_QMARK_ = false;

if((cljs.core.async.impl.dispatch.tasks.length > (0))){
return cljs.core.async.impl.dispatch.queue_dispatcher.call(null);
} else {
return null;
}
});
cljs.core.async.impl.dispatch.queue_dispatcher = (function cljs$core$async$impl$dispatch$queue_dispatcher(){
if(((cljs.core.async.impl.dispatch.queued_QMARK_) && (cljs.core.async.impl.dispatch.running_QMARK_))){
return null;
} else {
cljs.core.async.impl.dispatch.queued_QMARK_ = true;

return goog.async.nextTick.call(null,cljs.core.async.impl.dispatch.process_messages);
}
});
cljs.core.async.impl.dispatch.run = (function cljs$core$async$impl$dispatch$run(f){
cljs.core.async.impl.dispatch.tasks.unbounded_unshift(f);

return cljs.core.async.impl.dispatch.queue_dispatcher.call(null);
});
cljs.core.async.impl.dispatch.queue_delay = (function cljs$core$async$impl$dispatch$queue_delay(f,delay){
return setTimeout(f,delay);
});

//# sourceMappingURL=dispatch.js.map
