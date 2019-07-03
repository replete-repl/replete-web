var CLOSURE_BASE_PATH = "/js/compiled/out/goog/";
var CLOSURE_UNCOMPILED_DEFINES = {"cljs.core._STAR_target_STAR_":"webworker"};
var CLOSURE_IMPORT_SCRIPT = (function(global) { return function(src) {global['importScripts'](src); return true;};})(this);
if(typeof goog == 'undefined') importScripts("/js/compiled/out/goog/base.js");
importScripts("/js/compiled/out/cljs_deps.js");
goog.require("process.env");
goog.require("replete.worker");
