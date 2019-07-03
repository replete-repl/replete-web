// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('cljs_time.coerce');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
goog.require('goog.date.UtcDateTime');

/**
 * @interface
 */
cljs_time.coerce.ICoerce = function(){};

/**
 * Convert `obj` to a goog.date.DateTime instance.
 */
cljs_time.coerce.to_date_time = (function cljs_time$coerce$to_date_time(obj){
if((((!((obj == null)))) && ((!((obj.cljs_time$coerce$ICoerce$to_date_time$arity$1 == null)))))){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else {
var x__4433__auto__ = (((obj == null))?null:obj);
var m__4434__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__4434__auto__.call(null,obj));
} else {
var m__4431__auto__ = (cljs_time.coerce.to_date_time["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__4431__auto__.call(null,obj));
} else {
throw cljs.core.missing_protocol("ICoerce.to-date-time",obj);
}
}
}
});

/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.from_long = (function cljs_time$coerce$from_long(millis){
var G__20603 = millis;
if((G__20603 == null)){
return null;
} else {
return (goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1 ? goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1(G__20603) : goog.date.UtcDateTime.fromTimestamp.call(null,G__20603));
}
});
/**
 * Returns DateTime instance from string using formatters in cljs-time.format,
 *   returning first which parses
 */
cljs_time.coerce.from_string = (function cljs_time$coerce$from_string(s){
if(cljs.core.truth_(s)){
return cljs.core.first((function (){var iter__4523__auto__ = (function cljs_time$coerce$from_string_$_iter__20604(s__20605){
return (new cljs.core.LazySeq(null,(function (){
var s__20605__$1 = s__20605;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__20605__$1);
if(temp__5720__auto__){
var s__20605__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20605__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__20605__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__20607 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__20606 = (0);
while(true){
if((i__20606 < size__4522__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__20606);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e20608){if((e20608 instanceof Error)){
var _ = e20608;
return null;
} else {
throw e20608;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__20607,d);

var G__20610 = (i__20606 + (1));
i__20606 = G__20610;
continue;
} else {
var G__20611 = (i__20606 + (1));
i__20606 = G__20611;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20607),cljs_time$coerce$from_string_$_iter__20604(cljs.core.chunk_rest(s__20605__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20607),null);
}
} else {
var f = cljs.core.first(s__20605__$2);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e20609){if((e20609 instanceof Error)){
var _ = e20609;
return null;
} else {
throw e20609;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$coerce$from_string_$_iter__20604(cljs.core.rest(s__20605__$2)));
} else {
var G__20612 = cljs.core.rest(s__20605__$2);
s__20605__$1 = G__20612;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
} else {
return null;
}
});
/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   js Date object.
 */
cljs_time.coerce.from_date = (function cljs_time$coerce$from_date(date){
var G__20613 = date;
var G__20613__$1 = (((G__20613 == null))?null:G__20613.getTime());
if((G__20613__$1 == null)){
return null;
} else {
return cljs_time.coerce.from_long(G__20613__$1);
}
});
/**
 * Convert `obj` to the number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.to_long = (function cljs_time$coerce$to_long(obj){
var G__20614 = obj;
var G__20614__$1 = (((G__20614 == null))?null:cljs_time.coerce.to_date_time(G__20614));
if((G__20614__$1 == null)){
return null;
} else {
return G__20614__$1.getTime();
}
});
/**
 * Convert `obj` to Unix epoch.
 */
cljs_time.coerce.to_epoch = (function cljs_time$coerce$to_epoch(obj){
var millis = cljs_time.coerce.to_long(obj);
var and__4120__auto__ = millis;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.quot(millis,(1000));
} else {
return and__4120__auto__;
}
});
/**
 * Convert `obj` to a JavaScript Date instance.
 */
cljs_time.coerce.to_date = (function cljs_time$coerce$to_date(obj){
var G__20615 = obj;
var G__20615__$1 = (((G__20615 == null))?null:cljs_time.coerce.to_date_time(G__20615));
var G__20615__$2 = (((G__20615__$1 == null))?null:G__20615__$1.getTime());
if((G__20615__$2 == null)){
return null;
} else {
return (new Date(G__20615__$2));
}
});
/**
 * Returns a string representation of obj in UTC time-zone
 *   using "yyyy-MM-dd'T'HH:mm:ss.SSSZZ" date-time representation.
 */
cljs_time.coerce.to_string = (function cljs_time$coerce$to_string(obj){
var G__20616 = obj;
var G__20616__$1 = (((G__20616 == null))?null:cljs_time.coerce.to_date_time(G__20616));
if((G__20616__$1 == null)){
return null;
} else {
return cljs_time.format.unparse(cljs.core.cst$kw$date_DASH_time.cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),G__20616__$1);
}
});
/**
 * Convert `obj` to a goog.date.Date instance
 */
cljs_time.coerce.to_local_date = (function cljs_time$coerce$to_local_date(obj){
if(cljs.core.truth_(obj)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.date.Date,cljs.core.type(obj))){
return obj;
} else {
var temp__5718__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__5718__auto__)){
var dt = temp__5718__auto__;
return (new goog.date.Date(dt.getYear(),dt.getMonth(),dt.getDate()));
} else {
return null;
}
}
} else {
return null;
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance
 */
cljs_time.coerce.to_local_date_time = (function cljs_time$coerce$to_local_date_time(obj){
if(cljs.core.truth_(obj)){
var temp__5718__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__5718__auto__)){
var dt = temp__5718__auto__;
var G__20617 = (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate()));
G__20617.setHours(dt.getHours());

G__20617.setMinutes(dt.getMinutes());

G__20617.setSeconds(dt.getSeconds());

G__20617.setMilliseconds(dt.getMilliseconds());

return G__20617;
} else {
return null;
}
} else {
return null;
}
});
goog.object.set(cljs_time.coerce.ICoerce,"null",true);

var G__20618_20627 = cljs_time.coerce.to_date_time;
var G__20619_20628 = "null";
var G__20620_20629 = ((function (G__20618_20627,G__20619_20628){
return (function (_){
return null;
});})(G__20618_20627,G__20619_20628))
;
goog.object.set(G__20618_20627,G__20619_20628,G__20620_20629);

Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.coerce.from_date(date__$1);
});

goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date){
var local_date__$1 = this;
if(cljs.core.truth_(local_date__$1)){
return cljs_time.core.to_utc_time_zone(local_date__$1);
} else {
return null;
}
});

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date_time){
var local_date_time__$1 = this;
if(cljs.core.truth_(local_date_time__$1)){
return cljs_time.core.to_utc_time_zone(local_date_time__$1);
} else {
return null;
}
});

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return date_time__$1;
});

goog.object.set(cljs_time.coerce.ICoerce,"number",true);

var G__20621_20630 = cljs_time.coerce.to_date_time;
var G__20622_20631 = "number";
var G__20623_20632 = ((function (G__20621_20630,G__20622_20631){
return (function (long$){
return cljs_time.coerce.from_long(long$);
});})(G__20621_20630,G__20622_20631))
;
goog.object.set(G__20621_20630,G__20622_20631,G__20623_20632);

goog.object.set(cljs_time.coerce.ICoerce,"string",true);

var G__20624_20633 = cljs_time.coerce.to_date_time;
var G__20625_20634 = "string";
var G__20626_20635 = ((function (G__20624_20633,G__20625_20634){
return (function (string){
return cljs_time.coerce.from_string(string);
});})(G__20624_20633,G__20625_20634))
;
goog.object.set(G__20624_20633,G__20625_20634,G__20626_20635);
