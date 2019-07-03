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
var G__19714 = millis;
if((G__19714 == null)){
return null;
} else {
return (goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1 ? goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1(G__19714) : goog.date.UtcDateTime.fromTimestamp.call(null,G__19714));
}
});
/**
 * Returns DateTime instance from string using formatters in cljs-time.format,
 *   returning first which parses
 */
cljs_time.coerce.from_string = (function cljs_time$coerce$from_string(s){
if(cljs.core.truth_(s)){
return cljs.core.first((function (){var iter__4523__auto__ = (function cljs_time$coerce$from_string_$_iter__19715(s__19716){
return (new cljs.core.LazySeq(null,(function (){
var s__19716__$1 = s__19716;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__19716__$1);
if(temp__5720__auto__){
var s__19716__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19716__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__19716__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__19718 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__19717 = (0);
while(true){
if((i__19717 < size__4522__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__19717);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e19719){if((e19719 instanceof Error)){
var _ = e19719;
return null;
} else {
throw e19719;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__19718,d);

var G__19721 = (i__19717 + (1));
i__19717 = G__19721;
continue;
} else {
var G__19722 = (i__19717 + (1));
i__19717 = G__19722;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19718),cljs_time$coerce$from_string_$_iter__19715(cljs.core.chunk_rest(s__19716__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19718),null);
}
} else {
var f = cljs.core.first(s__19716__$2);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e19720){if((e19720 instanceof Error)){
var _ = e19720;
return null;
} else {
throw e19720;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$coerce$from_string_$_iter__19715(cljs.core.rest(s__19716__$2)));
} else {
var G__19723 = cljs.core.rest(s__19716__$2);
s__19716__$1 = G__19723;
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
var G__19724 = date;
var G__19724__$1 = (((G__19724 == null))?null:G__19724.getTime());
if((G__19724__$1 == null)){
return null;
} else {
return cljs_time.coerce.from_long(G__19724__$1);
}
});
/**
 * Convert `obj` to the number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.to_long = (function cljs_time$coerce$to_long(obj){
var G__19725 = obj;
var G__19725__$1 = (((G__19725 == null))?null:cljs_time.coerce.to_date_time(G__19725));
if((G__19725__$1 == null)){
return null;
} else {
return G__19725__$1.getTime();
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
var G__19726 = obj;
var G__19726__$1 = (((G__19726 == null))?null:cljs_time.coerce.to_date_time(G__19726));
var G__19726__$2 = (((G__19726__$1 == null))?null:G__19726__$1.getTime());
if((G__19726__$2 == null)){
return null;
} else {
return (new Date(G__19726__$2));
}
});
/**
 * Returns a string representation of obj in UTC time-zone
 *   using "yyyy-MM-dd'T'HH:mm:ss.SSSZZ" date-time representation.
 */
cljs_time.coerce.to_string = (function cljs_time$coerce$to_string(obj){
var G__19727 = obj;
var G__19727__$1 = (((G__19727 == null))?null:cljs_time.coerce.to_date_time(G__19727));
if((G__19727__$1 == null)){
return null;
} else {
return cljs_time.format.unparse(cljs.core.cst$kw$date_DASH_time.cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),G__19727__$1);
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
var G__19728 = (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate()));
G__19728.setHours(dt.getHours());

G__19728.setMinutes(dt.getMinutes());

G__19728.setSeconds(dt.getSeconds());

G__19728.setMilliseconds(dt.getMilliseconds());

return G__19728;
} else {
return null;
}
} else {
return null;
}
});
goog.object.set(cljs_time.coerce.ICoerce,"null",true);

var G__19729_19738 = cljs_time.coerce.to_date_time;
var G__19730_19739 = "null";
var G__19731_19740 = ((function (G__19729_19738,G__19730_19739){
return (function (_){
return null;
});})(G__19729_19738,G__19730_19739))
;
goog.object.set(G__19729_19738,G__19730_19739,G__19731_19740);

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

var G__19732_19741 = cljs_time.coerce.to_date_time;
var G__19733_19742 = "number";
var G__19734_19743 = ((function (G__19732_19741,G__19733_19742){
return (function (long$){
return cljs_time.coerce.from_long(long$);
});})(G__19732_19741,G__19733_19742))
;
goog.object.set(G__19732_19741,G__19733_19742,G__19734_19743);

goog.object.set(cljs_time.coerce.ICoerce,"string",true);

var G__19735_19744 = cljs_time.coerce.to_date_time;
var G__19736_19745 = "string";
var G__19737_19746 = ((function (G__19735_19744,G__19736_19745){
return (function (string){
return cljs_time.coerce.from_string(string);
});})(G__19735_19744,G__19736_19745))
;
goog.object.set(G__19735_19744,G__19736_19745,G__19737_19746);
