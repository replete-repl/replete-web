// https://github.com/bhauman/lein-figwheel/wiki/Using-Figwheel-with-Web-Workers

CLOSURE_BASE_PATH = "/js/compiled/out/goog/";
/**
 * Imports a script using the Web Worker importScript API.
 *
 * @param {string} src The script source.
 * @return {boolean} True if the script was imported, false otherwise.
 */
this.CLOSURE_IMPORT_SCRIPT = (function(global) {
  return function(src) {
    global['importScripts'](src);
    return true;
  };
})(this);

if(typeof goog == "undefined") importScripts(CLOSURE_BASE_PATH + "base.js");

importScripts("compiled/worker.js");
goog.require('replete.worker');
