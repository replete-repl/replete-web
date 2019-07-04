<<<<<<< HEAD:docs/js/compiled/worker-out/cljs_time/internal/unparse.js
// Compiled by ClojureScript 1.10.520 {:target :webworker}
=======
// Compiled by ClojureScript 1.10.520 {}
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs_time/internal/unparse.js
goog.provide('cljs_time.internal.unparse');
goog.require('cljs.core');
goog.require('cljs_time.internal.core');
goog.require('cljs_time.internal.parse');
goog.require('goog.date');
goog.require('goog.date.Date');
goog.require('goog.date.DateTime');
goog.require('goog.date.UtcDateTime');
goog.require('goog.date.Interval');
cljs_time.internal.unparse.unparse_period = (function cljs_time$internal$unparse$unparse_period(s,d,num,min,max){
var n = cljs_time.internal.core.zero_pad.call(null,num,min);
var c = cljs.core.count.call(null,n);
var n__$1 = cljs.core.subs.call(null,n,(c - max));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n__$1)].join(''),d], null);
});
cljs_time.internal.unparse.unparse_millis = (function cljs_time$internal$unparse$unparse_millis(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs_time/internal/unparse.js
var G__1858 = arguments.length;
switch (G__1858) {
=======
var G__8757 = arguments.length;
switch (G__8757) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs_time/internal/unparse.js
case 1:
return cljs_time.internal.unparse.unparse_millis.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_millis.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_millis.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_millis.call(null,min,min);
});

cljs_time.internal.unparse.unparse_millis.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period.call(null,s,d,d.getMilliseconds(),min,max);
});
});

cljs_time.internal.unparse.unparse_millis.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_seconds = (function cljs_time$internal$unparse$unparse_seconds(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs_time/internal/unparse.js
var G__1861 = arguments.length;
switch (G__1861) {
=======
var G__8760 = arguments.length;
switch (G__8760) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs_time/internal/unparse.js
case 1:
return cljs_time.internal.unparse.unparse_seconds.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_seconds.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_seconds.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_seconds.call(null,min,min);
});

cljs_time.internal.unparse.unparse_seconds.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period.call(null,s,d,d.getSeconds(),min,max);
});
});

cljs_time.internal.unparse.unparse_seconds.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_minutes = (function cljs_time$internal$unparse$unparse_minutes(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs_time/internal/unparse.js
var G__1864 = arguments.length;
switch (G__1864) {
=======
var G__8763 = arguments.length;
switch (G__8763) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs_time/internal/unparse.js
case 1:
return cljs_time.internal.unparse.unparse_minutes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_minutes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_minutes.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_minutes.call(null,min,min);
});

cljs_time.internal.unparse.unparse_minutes.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period.call(null,s,d,d.getMinutes(),min,max);
});
});

cljs_time.internal.unparse.unparse_minutes.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_hours = (function cljs_time$internal$unparse$unparse_hours(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs_time/internal/unparse.js
var G__1867 = arguments.length;
switch (G__1867) {
=======
var G__8766 = arguments.length;
switch (G__8766) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs_time/internal/unparse.js
case 1:
return cljs_time.internal.unparse.unparse_hours.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_hours.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_hours.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_hours.call(null,min,min);
});

cljs_time.internal.unparse.unparse_hours.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
var hr = cljs.core.mod.call(null,d.getHours(),(12));
var hours = (((hr === (0)))?(12):hr);
return cljs_time.internal.unparse.unparse_period.call(null,s,d,hours,min,max);
});
});

cljs_time.internal.unparse.unparse_hours.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_HOURS = (function cljs_time$internal$unparse$unparse_HOURS(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs_time/internal/unparse.js
var G__1870 = arguments.length;
switch (G__1870) {
=======
var G__8769 = arguments.length;
switch (G__8769) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs_time/internal/unparse.js
case 1:
return cljs_time.internal.unparse.unparse_HOURS.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_HOURS.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_HOURS.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_HOURS.call(null,min,min);
});

cljs_time.internal.unparse.unparse_HOURS.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period.call(null,s,d,d.getHours(),min,max);
});
});

cljs_time.internal.unparse.unparse_HOURS.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_day = (function cljs_time$internal$unparse$unparse_day(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs_time/internal/unparse.js
var G__1873 = arguments.length;
switch (G__1873) {
=======
var G__8772 = arguments.length;
switch (G__8772) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs_time/internal/unparse.js
case 1:
return cljs_time.internal.unparse.unparse_day.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_day.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_day.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_day.call(null,min,min);
});

cljs_time.internal.unparse.unparse_day.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period.call(null,s,d,d.getDate(),min,max);
});
});

cljs_time.internal.unparse.unparse_day.cljs$lang$maxFixedArity = 2;

/**
 * .getDay returns 0-6, shifts to 1-7
 */
cljs_time.internal.unparse.unparse_day_of_week = (function cljs_time$internal$unparse$unparse_day_of_week(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs_time/internal/unparse.js
var G__1876 = arguments.length;
switch (G__1876) {
=======
var G__8775 = arguments.length;
switch (G__8775) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs_time/internal/unparse.js
case 1:
return cljs_time.internal.unparse.unparse_day_of_week.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_day_of_week.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_day_of_week.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_day_of_week.call(null,min,min);
});

cljs_time.internal.unparse.unparse_day_of_week.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
var raw_day_of_week = d.getDay();
var day_of_week = ((cljs.core._EQ_.call(null,raw_day_of_week,(0)))?(7):raw_day_of_week);
return cljs_time.internal.unparse.unparse_period.call(null,s,d,day_of_week,min,max);
});
});

cljs_time.internal.unparse.unparse_day_of_week.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_day_of_year = (function cljs_time$internal$unparse$unparse_day_of_year(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs_time/internal/unparse.js
var G__1879 = arguments.length;
switch (G__1879) {
=======
var G__8778 = arguments.length;
switch (G__8778) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs_time/internal/unparse.js
case 1:
return cljs_time.internal.unparse.unparse_day_of_year.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_day_of_year.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_day_of_year.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_day.call(null,min,min);
});

cljs_time.internal.unparse.unparse_day_of_year.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period.call(null,s,d,d.getDate(),min,max);
});
});

cljs_time.internal.unparse.unparse_day_of_year.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_month = (function cljs_time$internal$unparse$unparse_month(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs_time/internal/unparse.js
var G__1882 = arguments.length;
switch (G__1882) {
=======
var G__8781 = arguments.length;
switch (G__8781) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs_time/internal/unparse.js
case 1:
return cljs_time.internal.unparse.unparse_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_month.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_month.call(null,min,min);
});

cljs_time.internal.unparse.unparse_month.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period.call(null,s,d,(d.getMonth() + (1)),min,max);
});
});

cljs_time.internal.unparse.unparse_month.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_year = (function cljs_time$internal$unparse$unparse_year(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs_time/internal/unparse.js
var G__1885 = arguments.length;
switch (G__1885) {
=======
var G__8784 = arguments.length;
switch (G__8784) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs_time/internal/unparse.js
case 1:
return cljs_time.internal.unparse.unparse_year.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_year.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_year.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_year.call(null,min,min);
});

cljs_time.internal.unparse.unparse_year.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period.call(null,s,d,d.getYear(),min,max);
});
});

cljs_time.internal.unparse.unparse_year.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_quoted = (function cljs_time$internal$unparse$unparse_quoted(quoted){
return (function (s,d){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.str,s,quoted),d], null);
});
});
cljs_time.internal.unparse.unparse_period_name = (function cljs_time$internal$unparse$unparse_period_name(s,d,n,periods,short_QMARK_){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs_time/internal/unparse.js
var periods__$1 = cljs.core.vec.call(null,(function (){var G__1888 = periods;
if(cljs.core.truth_(short_QMARK_)){
return cljs.core.map.call(null,((function (G__1888){
return (function (p1__1887_SHARP_){
return cljs.core.subs.call(null,p1__1887_SHARP_,(0),(3));
});})(G__1888))
,G__1888);
} else {
return G__1888;
=======
var periods__$1 = cljs.core.vec.call(null,(function (){var G__8787 = periods;
if(cljs.core.truth_(short_QMARK_)){
return cljs.core.map.call(null,((function (G__8787){
return (function (p1__8786_SHARP_){
return cljs.core.subs.call(null,p1__8786_SHARP_,(0),(3));
});})(G__8787))
,G__8787);
} else {
return G__8787;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs_time/internal/unparse.js
}
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(periods__$1.call(null,n))].join(''),d], null);
});
cljs_time.internal.unparse.unparse_month_name = (function cljs_time$internal$unparse$unparse_month_name(short_QMARK_){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period_name.call(null,s,d,d.getMonth(),cljs_time.internal.core.months,short_QMARK_);
});
});
cljs_time.internal.unparse.unparse_day_name = (function cljs_time$internal$unparse$unparse_day_name(short_QMARK_){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period_name.call(null,s,d,d.getDay(),cljs_time.internal.core.days,short_QMARK_);
});
});
cljs_time.internal.unparse.unparse_weekyear = (function cljs_time$internal$unparse$unparse_weekyear(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs_time/internal/unparse.js
var G__1890 = arguments.length;
switch (G__1890) {
=======
var G__8789 = arguments.length;
switch (G__8789) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs_time/internal/unparse.js
case 1:
return cljs_time.internal.unparse.unparse_weekyear.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_weekyear.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_weekyear.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_weekyear.call(null,min,min);
});

cljs_time.internal.unparse.unparse_weekyear.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
var year = d.getYear();
var month = d.getMonth();
var day = d.getDate();
return cljs_time.internal.unparse.unparse_period.call(null,s,d,cljs_time.internal.core.get_week_year.call(null,year,month,day),min,max);
});
});

cljs_time.internal.unparse.unparse_weekyear.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_weekyear_week = (function cljs_time$internal$unparse$unparse_weekyear_week(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs_time/internal/unparse.js
var G__1893 = arguments.length;
switch (G__1893) {
=======
var G__8792 = arguments.length;
switch (G__8792) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs_time/internal/unparse.js
case 1:
return cljs_time.internal.unparse.unparse_weekyear_week.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_weekyear_week.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_weekyear_week.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_weekyear_week.call(null,min,min);
});

cljs_time.internal.unparse.unparse_weekyear_week.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
var year = d.getYear();
var month = d.getMonth();
var day = d.getDate();
return cljs_time.internal.unparse.unparse_period.call(null,s,d,goog.date.getWeekNumber(year,month,day),min,max);
});
});

cljs_time.internal.unparse.unparse_weekyear_week.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_meridiem = (function cljs_time$internal$unparse$unparse_meridiem(capitalize_QMARK_){
return (function (s,d){
var hours = d.getHours();
var meridiem = (cljs.core.truth_(capitalize_QMARK_)?(((hours < (12)))?"AM":"PM"):(((hours < (12)))?"am":"pm"));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),meridiem].join(''),d], null);
});
});
cljs_time.internal.unparse.unparse_timezone = (function cljs_time$internal$unparse$unparse_timezone(){
return (function (s,d){
if((d instanceof goog.date.UtcDateTime)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(d.getTimezoneOffsetString())].join(''),d], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,d], null);
}
});
});
cljs_time.internal.unparse.unparse_ordinal_suffix = (function cljs_time$internal$unparse$unparse_ordinal_suffix(getter){
return (function (s,d){
var n = getter.call(null,d);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs_time/internal/unparse.js
var o = (function (){var G__1895 = n;
switch (G__1895) {
=======
var o = (function (){var G__8794 = n;
switch (G__8794) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs_time/internal/unparse.js
case (1):
return "st";

break;
case (2):
return "nd";

break;
case (3):
return "rd";

break;
case (21):
return "st";

break;
case (22):
return "nd";

break;
case (23):
return "rd";

break;
case (31):
return "st";

break;
default:
return "th";

}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o)].join(''),d], null);
});
});
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs_time/internal/unparse.js
cljs_time.internal.unparse.lookup = (function cljs_time$internal$unparse$lookup(p__1897){
var vec__1898 = p__1897;
var t = cljs.core.nth.call(null,vec__1898,(0),null);
var pattern = cljs.core.nth.call(null,vec__1898,(1),null);
if(cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"token","token",-1211463215))){
var G__1901 = pattern;
switch (G__1901) {
=======
cljs_time.internal.unparse.lookup = (function cljs_time$internal$unparse$lookup(p__8796){
var vec__8797 = p__8796;
var t = cljs.core.nth.call(null,vec__8797,(0),null);
var pattern = cljs.core.nth.call(null,vec__8797,(1),null);
if(cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"token","token",-1211463215))){
var G__8800 = pattern;
switch (G__8800) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs_time/internal/unparse.js
case "S":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"millis","millis",-1338288387),(1),(2)], null);

break;
case "SSS":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"millis","millis",-1338288387),(3),(3)], null);

break;
case "s":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seconds","seconds",-445266194),(1),(2)], null);

break;
case "ss":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seconds","seconds",-445266194),(2),(2)], null);

break;
case "m":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minutes","minutes",1319166394),(1),(2)], null);

break;
case "mm":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minutes","minutes",1319166394),(2),(2)], null);

break;
case "h":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hours","hours",58380855),(1),(2)], null);

break;
case "hh":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hours","hours",58380855),(2),(2)], null);

break;
case "H":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"HOURS","HOURS",-1611068963),(1),(2)], null);

break;
case "HH":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"HOURS","HOURS",-1611068963),(2),(2)], null);

break;
case "d":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day","day",-274800446),(1),(2)], null);

break;
case "dd":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day","day",-274800446),(2),(2)], null);

break;
case "D":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day","day",-274800446),(1),(3)], null);

break;
case "DD":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day","day",-274800446),(2),(3)], null);

break;
case "DDD":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day","day",-274800446),(3),(3)], null);

break;
case "M":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month","month",-1960248533),(1),(2)], null);

break;
case "MM":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month","month",-1960248533),(2),(2)], null);

break;
case "MMM":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month-name","month-name",-605509534),true], null);

break;
case "MMMM":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month-name","month-name",-605509534),false], null);

break;
case "y":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),(1),(4)], null);

break;
case "yy":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),(2),(2)], null);

break;
case "yyyy":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),(4),(4)], null);

break;
case "Y":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),(1),(4)], null);

break;
case "YY":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),(2),(2)], null);

break;
case "YYYY":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),(4),(4)], null);

break;
case "x":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekyear","weekyear",-74064500),(1),(4)], null);

break;
case "xx":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekyear","weekyear",-74064500),(2),(2)], null);

break;
case "xxxx":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekyear","weekyear",-74064500),(4),(4)], null);

break;
case "w":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekyear-week","weekyear-week",795291571),(1),(2)], null);

break;
case "ww":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekyear-week","weekyear-week",795291571),(2),(2)], null);

break;
case "e":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day-of-week","day-of-week",1639326729),(1),(1)], null);

break;
case "E":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day-name","day-name",1806125744),true], null);

break;
case "EEE":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day-name","day-name",1806125744),true], null);

break;
case "EEEE":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day-name","day-name",1806125744),false], null);

break;
case "a":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meridiem","meridiem",1668960617),false], null);

break;
case "A":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meridiem","meridiem",1668960617),true], null);

break;
case "Z":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timezone","timezone",1831928099)], null);

break;
case "ZZ":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timezone","timezone",1831928099)], null);

break;
case "o":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ordinal-suffix","ordinal-suffix",-1311843199)], null);

break;
default:
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs_time/internal/unparse.js
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1901)].join('')));
=======
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8800)].join('')));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs_time/internal/unparse.js

}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quoted","quoted",2117344952),pattern], null);
}
});
cljs_time.internal.unparse.lookup_getter = (function cljs_time$internal$unparse$lookup_getter(key){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs_time/internal/unparse.js
var G__1911 = key;
var G__1911__$1 = (((G__1911 instanceof cljs.core.Keyword))?G__1911.fqn:null);
switch (G__1911__$1) {
case "millis":
return ((function (G__1911,G__1911__$1){
return (function (p1__1903_SHARP_){
return p1__1903_SHARP_.getMilliseconds();
});
;})(G__1911,G__1911__$1))

break;
case "seconds":
return ((function (G__1911,G__1911__$1){
return (function (p1__1904_SHARP_){
return p1__1904_SHARP_.getSeconds();
});
;})(G__1911,G__1911__$1))

break;
case "minutes":
return ((function (G__1911,G__1911__$1){
return (function (p1__1905_SHARP_){
return p1__1905_SHARP_.getMinutes();
});
;})(G__1911,G__1911__$1))

break;
case "hours":
return ((function (G__1911,G__1911__$1){
return (function (p1__1906_SHARP_){
return p1__1906_SHARP_.getHours();
});
;})(G__1911,G__1911__$1))

break;
case "HOURS":
return ((function (G__1911,G__1911__$1){
return (function (p1__1907_SHARP_){
return p1__1907_SHARP_.getHours();
});
;})(G__1911,G__1911__$1))

break;
case "day":
return ((function (G__1911,G__1911__$1){
return (function (p1__1908_SHARP_){
return p1__1908_SHARP_.getDate();
});
;})(G__1911,G__1911__$1))

break;
case "month":
return ((function (G__1911,G__1911__$1){
return (function (p1__1909_SHARP_){
return p1__1909_SHARP_.getMonth();
});
;})(G__1911,G__1911__$1))

break;
case "year":
return ((function (G__1911,G__1911__$1){
return (function (p1__1910_SHARP_){
return p1__1910_SHARP_.getYear();
});
;})(G__1911,G__1911__$1))

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1911__$1)].join('')));

}
});
cljs_time.internal.unparse.lookup_fn = (function cljs_time$internal$unparse$lookup_fn(syntax_list,i,p__1913){
var vec__1914 = p__1913;
var seq__1915 = cljs.core.seq.call(null,vec__1914);
var first__1916 = cljs.core.first.call(null,seq__1915);
var seq__1915__$1 = cljs.core.next.call(null,seq__1915);
var key = first__1916;
var args = seq__1915__$1;
var G__1917 = key;
var G__1917__$1 = (((G__1917 instanceof cljs.core.Keyword))?G__1917.fqn:null);
switch (G__1917__$1) {
=======
var G__8810 = key;
var G__8810__$1 = (((G__8810 instanceof cljs.core.Keyword))?G__8810.fqn:null);
switch (G__8810__$1) {
case "millis":
return ((function (G__8810,G__8810__$1){
return (function (p1__8802_SHARP_){
return p1__8802_SHARP_.getMilliseconds();
});
;})(G__8810,G__8810__$1))

break;
case "seconds":
return ((function (G__8810,G__8810__$1){
return (function (p1__8803_SHARP_){
return p1__8803_SHARP_.getSeconds();
});
;})(G__8810,G__8810__$1))

break;
case "minutes":
return ((function (G__8810,G__8810__$1){
return (function (p1__8804_SHARP_){
return p1__8804_SHARP_.getMinutes();
});
;})(G__8810,G__8810__$1))

break;
case "hours":
return ((function (G__8810,G__8810__$1){
return (function (p1__8805_SHARP_){
return p1__8805_SHARP_.getHours();
});
;})(G__8810,G__8810__$1))

break;
case "HOURS":
return ((function (G__8810,G__8810__$1){
return (function (p1__8806_SHARP_){
return p1__8806_SHARP_.getHours();
});
;})(G__8810,G__8810__$1))

break;
case "day":
return ((function (G__8810,G__8810__$1){
return (function (p1__8807_SHARP_){
return p1__8807_SHARP_.getDate();
});
;})(G__8810,G__8810__$1))

break;
case "month":
return ((function (G__8810,G__8810__$1){
return (function (p1__8808_SHARP_){
return p1__8808_SHARP_.getMonth();
});
;})(G__8810,G__8810__$1))

break;
case "year":
return ((function (G__8810,G__8810__$1){
return (function (p1__8809_SHARP_){
return p1__8809_SHARP_.getYear();
});
;})(G__8810,G__8810__$1))

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8810__$1)].join('')));

}
});
cljs_time.internal.unparse.lookup_fn = (function cljs_time$internal$unparse$lookup_fn(syntax_list,i,p__8812){
var vec__8813 = p__8812;
var seq__8814 = cljs.core.seq.call(null,vec__8813);
var first__8815 = cljs.core.first.call(null,seq__8814);
var seq__8814__$1 = cljs.core.next.call(null,seq__8814);
var key = first__8815;
var args = seq__8814__$1;
var G__8816 = key;
var G__8816__$1 = (((G__8816 instanceof cljs.core.Keyword))?G__8816.fqn:null);
switch (G__8816__$1) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs_time/internal/unparse.js
case "millis":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_millis,args);

break;
case "seconds":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_seconds,args);

break;
case "minutes":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_minutes,args);

break;
case "hours":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_hours,args);

break;
case "HOURS":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_HOURS,args);

break;
case "day":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_day,args);

break;
case "month":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_month,args);

break;
case "month-name":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_month_name,args);

break;
case "year":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_year,args);

break;
case "weekyear":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_weekyear,args);

break;
case "weekyear-week":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_weekyear_week,args);

break;
case "day-name":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_day_name,args);

break;
case "day-of-week":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_day_of_week,args);

break;
case "meridiem":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_meridiem,args);

break;
case "timezone":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_timezone,args);

break;
case "ordinal-suffix":
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs_time/internal/unparse.js
var vec__1918 = syntax_list.call(null,(i - (1)));
var k = cljs.core.nth.call(null,vec__1918,(0),null);
=======
var vec__8817 = syntax_list.call(null,(i - (1)));
var k = cljs.core.nth.call(null,vec__8817,(0),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs_time/internal/unparse.js
return cljs_time.internal.unparse.unparse_ordinal_suffix.call(null,cljs_time.internal.unparse.lookup_getter.call(null,k));

break;
case "quoted":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_quoted,args);

break;
default:
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs_time/internal/unparse.js
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1917__$1)].join('')));
=======
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8816__$1)].join('')));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs_time/internal/unparse.js

}
});
cljs_time.internal.unparse.unparse = (function cljs_time$internal$unparse$unparse(pattern,value){
var syn_list = cljs.core.mapv.call(null,cljs_time.internal.unparse.lookup,cljs_time.internal.parse.read_pattern.call(null,pattern));
var d = value;
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs_time/internal/unparse.js
var G__1925 = cljs.core.map_indexed.call(null,cljs.core.partial.call(null,cljs_time.internal.unparse.lookup_fn,syn_list),syn_list);
var vec__1926 = G__1925;
var seq__1927 = cljs.core.seq.call(null,vec__1926);
var first__1928 = cljs.core.first.call(null,seq__1927);
var seq__1927__$1 = cljs.core.next.call(null,seq__1927);
var unparser = first__1928;
var more = seq__1927__$1;
var s = "";
var d__$1 = d;
var G__1925__$1 = G__1925;
var s__$1 = s;
while(true){
var d__$2 = d__$1;
var vec__1935 = G__1925__$1;
var seq__1936 = cljs.core.seq.call(null,vec__1935);
var first__1937 = cljs.core.first.call(null,seq__1936);
var seq__1936__$1 = cljs.core.next.call(null,seq__1936);
var unparser__$1 = first__1937;
var more__$1 = seq__1936__$1;
=======
var G__8824 = cljs.core.map_indexed.call(null,cljs.core.partial.call(null,cljs_time.internal.unparse.lookup_fn,syn_list),syn_list);
var vec__8825 = G__8824;
var seq__8826 = cljs.core.seq.call(null,vec__8825);
var first__8827 = cljs.core.first.call(null,seq__8826);
var seq__8826__$1 = cljs.core.next.call(null,seq__8826);
var unparser = first__8827;
var more = seq__8826__$1;
var s = "";
var d__$1 = d;
var G__8824__$1 = G__8824;
var s__$1 = s;
while(true){
var d__$2 = d__$1;
var vec__8834 = G__8824__$1;
var seq__8835 = cljs.core.seq.call(null,vec__8834);
var first__8836 = cljs.core.first.call(null,seq__8835);
var seq__8835__$1 = cljs.core.next.call(null,seq__8835);
var unparser__$1 = first__8836;
var more__$1 = seq__8835__$1;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs_time/internal/unparse.js
var s__$2 = s__$1;
if((unparser__$1 == null)){
return s__$2;
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs_time/internal/unparse.js
var vec__1938 = unparser__$1.call(null,s__$2,d__$2);
var s__$3 = cljs.core.nth.call(null,vec__1938,(0),null);
var d__$3 = cljs.core.nth.call(null,vec__1938,(1),null);
var G__1941 = d__$3;
var G__1942 = more__$1;
var G__1943 = s__$3;
d__$1 = G__1941;
G__1925__$1 = G__1942;
s__$1 = G__1943;
=======
var vec__8837 = unparser__$1.call(null,s__$2,d__$2);
var s__$3 = cljs.core.nth.call(null,vec__8837,(0),null);
var d__$3 = cljs.core.nth.call(null,vec__8837,(1),null);
var G__8840 = d__$3;
var G__8841 = more__$1;
var G__8842 = s__$3;
d__$1 = G__8840;
G__8824__$1 = G__8841;
s__$1 = G__8842;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs_time/internal/unparse.js
continue;
}
break;
}
});

//# sourceMappingURL=unparse.js.map
