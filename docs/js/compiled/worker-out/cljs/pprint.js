// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.pprint');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__4736__auto__ = [];
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var len__4730__auto___16666 = arguments.length;
var i__4731__auto___16667 = (0);
while(true){
if((i__4731__auto___16667 < len__4730__auto___16666)){
args__4736__auto__.push((arguments[i__4731__auto___16667]));

var G__16668 = (i__4731__auto___16667 + (1));
i__4731__auto___16667 = G__16668;
=======
var len__4730__auto___9875 = arguments.length;
var i__4731__auto___9876 = (0);
while(true){
if((i__4731__auto___9876 < len__4730__auto___9875)){
args__4736__auto__.push((arguments[i__4731__auto___9876]));

var G__9877 = (i__4731__auto___9876 + (1));
i__4731__auto___9876 = G__9877;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.apply.call(null,cljs.core.print_str,more));
});

cljs.pprint.print.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.print.cljs$lang$applyTo = (function (seq16665){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16665));
=======
cljs.pprint.print.cljs$lang$applyTo = (function (seq9874){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9874));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__4736__auto__ = [];
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var len__4730__auto___16670 = arguments.length;
var i__4731__auto___16671 = (0);
while(true){
if((i__4731__auto___16671 < len__4730__auto___16670)){
args__4736__auto__.push((arguments[i__4731__auto___16671]));

var G__16672 = (i__4731__auto___16671 + (1));
i__4731__auto___16671 = G__16672;
=======
var len__4730__auto___9879 = arguments.length;
var i__4731__auto___9880 = (0);
while(true){
if((i__4731__auto___9880 < len__4730__auto___9879)){
args__4736__auto__.push((arguments[i__4731__auto___9880]));

var G__9881 = (i__4731__auto___9880 + (1));
i__4731__auto___9880 = G__9881;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.call(null,cljs.pprint.print,more);

return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.println.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.println.cljs$lang$applyTo = (function (seq16669){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16669));
});

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,(function (){var pred__16673 = cljs.core._EQ_;
var expr__16674 = c;
if(cljs.core.truth_(pred__16673.call(null,"\b",expr__16674))){
return "\\backspace";
} else {
if(cljs.core.truth_(pred__16673.call(null,"\t",expr__16674))){
return "\\tab";
} else {
if(cljs.core.truth_(pred__16673.call(null,"\n",expr__16674))){
return "\\newline";
} else {
if(cljs.core.truth_(pred__16673.call(null,"\f",expr__16674))){
return "\\formfeed";
} else {
if(cljs.core.truth_(pred__16673.call(null,"\r",expr__16674))){
return "\\return";
} else {
if(cljs.core.truth_(pred__16673.call(null,"\"",expr__16674))){
return "\\\"";
} else {
if(cljs.core.truth_(pred__16673.call(null,"\\",expr__16674))){
=======
cljs.pprint.println.cljs$lang$applyTo = (function (seq9878){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9878));
});

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,(function (){var pred__9882 = cljs.core._EQ_;
var expr__9883 = c;
if(cljs.core.truth_(pred__9882.call(null,"\b",expr__9883))){
return "\\backspace";
} else {
if(cljs.core.truth_(pred__9882.call(null,"\t",expr__9883))){
return "\\tab";
} else {
if(cljs.core.truth_(pred__9882.call(null,"\n",expr__9883))){
return "\\newline";
} else {
if(cljs.core.truth_(pred__9882.call(null,"\f",expr__9883))){
return "\\formfeed";
} else {
if(cljs.core.truth_(pred__9882.call(null,"\r",expr__9883))){
return "\\return";
} else {
if(cljs.core.truth_(pred__9882.call(null,"\"",expr__9883))){
return "\\\"";
} else {
if(cljs.core.truth_(pred__9882.call(null,"\\",expr__9883))){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
return "\\\\";
} else {
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(var_args){
var args__4736__auto__ = [];
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var len__4730__auto___16677 = arguments.length;
var i__4731__auto___16678 = (0);
while(true){
if((i__4731__auto___16678 < len__4730__auto___16677)){
args__4736__auto__.push((arguments[i__4731__auto___16678]));

var G__16679 = (i__4731__auto___16678 + (1));
i__4731__auto___16678 = G__16679;
=======
var len__4730__auto___9886 = arguments.length;
var i__4731__auto___9887 = (0);
while(true){
if((i__4731__auto___9887 < len__4730__auto___9886)){
args__4736__auto__.push((arguments[i__4731__auto___9887]));

var G__9888 = (i__4731__auto___9887 + (1));
i__4731__auto___9887 = G__9888;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.apply.call(null,cljs.core.pr_str,more));
});

cljs.pprint.pr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.pr.cljs$lang$applyTo = (function (seq16676){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16676));
=======
cljs.pprint.pr.cljs$lang$applyTo = (function (seq9885){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9885));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__4736__auto__ = [];
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var len__4730__auto___16681 = arguments.length;
var i__4731__auto___16682 = (0);
while(true){
if((i__4731__auto___16682 < len__4730__auto___16681)){
args__4736__auto__.push((arguments[i__4731__auto___16682]));

var G__16683 = (i__4731__auto___16682 + (1));
i__4731__auto___16682 = G__16683;
=======
var len__4730__auto___9890 = arguments.length;
var i__4731__auto___9891 = (0);
while(true){
if((i__4731__auto___9891 < len__4730__auto___9890)){
args__4736__auto__.push((arguments[i__4731__auto___9891]));

var G__9892 = (i__4731__auto___9891 + (1));
i__4731__auto___9891 = G__9892;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.call(null,cljs.pprint.pr,more);

return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.prn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.prn.cljs$lang$applyTo = (function (seq16680){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16680));
=======
cljs.pprint.prn.cljs$lang$applyTo = (function (seq9889){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9889));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});

/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return ((typeof n === 'number') && ((!(isNaN(n)))) && ((!((n === Infinity)))) && ((!((parseFloat(n) === parseInt(n,(10)))))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if(((typeof c === 'string') && ((c.length === (1))))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first.call(null,lis__$1);
var remainder = cljs.core.next.call(null,lis__$1);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__16687 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.call(null,vec__16687,(0),null);
var new_context = cljs.core.nth.call(null,vec__16687,(1),null);
var G__16690 = new_context;
var G__16691 = remainder;
var G__16692 = cljs.core.conj.call(null,acc,result);
context = G__16690;
lis__$1 = G__16691;
acc = G__16692;
=======
var vec__9896 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.call(null,vec__9896,(0),null);
var new_context = cljs.core.nth.call(null,vec__9896,(1),null);
var G__9899 = new_context;
var G__9900 = remainder;
var G__9901 = cljs.core.conj.call(null,acc,result);
context = G__9899;
lis__$1 = G__9900;
acc = G__9901;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__16696 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.call(null,vec__16696,(0),null);
var new_context = cljs.core.nth.call(null,vec__16696,(1),null);
if(cljs.core.not.call(null,result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__16699 = new_context;
var G__16700 = cljs.core.conj.call(null,acc,result);
context = G__16699;
acc = G__16700;
=======
var vec__9905 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.call(null,vec__9905,(0),null);
var new_context = cljs.core.nth.call(null,vec__9905,(1),null);
if(cljs.core.not.call(null,result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__9908 = new_context;
var G__9909 = cljs.core.conj.call(null,acc,result);
context = G__9908;
acc = G__9909;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__16704 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.call(null,vec__16704,(0),null);
var continue$ = cljs.core.nth.call(null,vec__16704,(1),null);
var new_context = cljs.core.nth.call(null,vec__16704,(2),null);
if(cljs.core.not.call(null,continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__16707 = new_context;
var G__16708 = cljs.core.conj.call(null,acc,result);
context = G__16707;
acc = G__16708;
=======
var vec__9913 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.call(null,vec__9913,(0),null);
var continue$ = cljs.core.nth.call(null,vec__9913,(1),null);
var new_context = cljs.core.nth.call(null,vec__9913,(2),null);
if(cljs.core.not.call(null,continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__9916 = new_context;
var G__9917 = cljs.core.conj.call(null,acc,result);
context = G__9916;
acc = G__9917;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function cljs$pprint$unzip_map_$_iter__16709(s__16710){
return (new cljs.core.LazySeq(null,(function (){
var s__16710__$1 = s__16710;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__16710__$1);
if(temp__5720__auto__){
var s__16710__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16710__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__16710__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__16712 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__16711 = (0);
while(true){
if((i__16711 < size__4522__auto__)){
var vec__16713 = cljs.core._nth.call(null,c__4521__auto__,i__16711);
var k = cljs.core.nth.call(null,vec__16713,(0),null);
var vec__16716 = cljs.core.nth.call(null,vec__16713,(1),null);
var v1 = cljs.core.nth.call(null,vec__16716,(0),null);
var v2 = cljs.core.nth.call(null,vec__16716,(1),null);
cljs.core.chunk_append.call(null,b__16712,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__16741 = (i__16711 + (1));
i__16711 = G__16741;
=======
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function cljs$pprint$unzip_map_$_iter__9918(s__9919){
return (new cljs.core.LazySeq(null,(function (){
var s__9919__$1 = s__9919;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__9919__$1);
if(temp__5720__auto__){
var s__9919__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9919__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__9919__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__9921 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__9920 = (0);
while(true){
if((i__9920 < size__4522__auto__)){
var vec__9922 = cljs.core._nth.call(null,c__4521__auto__,i__9920);
var k = cljs.core.nth.call(null,vec__9922,(0),null);
var vec__9925 = cljs.core.nth.call(null,vec__9922,(1),null);
var v1 = cljs.core.nth.call(null,vec__9925,(0),null);
var v2 = cljs.core.nth.call(null,vec__9925,(1),null);
cljs.core.chunk_append.call(null,b__9921,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__9950 = (i__9920 + (1));
i__9920 = G__9950;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
} else {
return true;
}
break;
}
})()){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16712),cljs$pprint$unzip_map_$_iter__16709.call(null,cljs.core.chunk_rest.call(null,s__16710__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16712),null);
}
} else {
var vec__16719 = cljs.core.first.call(null,s__16710__$2);
var k = cljs.core.nth.call(null,vec__16719,(0),null);
var vec__16722 = cljs.core.nth.call(null,vec__16719,(1),null);
var v1 = cljs.core.nth.call(null,vec__16722,(0),null);
var v2 = cljs.core.nth.call(null,vec__16722,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__16709.call(null,cljs.core.rest.call(null,s__16710__$2)));
=======
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9921),cljs$pprint$unzip_map_$_iter__9918.call(null,cljs.core.chunk_rest.call(null,s__9919__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9921),null);
}
} else {
var vec__9928 = cljs.core.first.call(null,s__9919__$2);
var k = cljs.core.nth.call(null,vec__9928,(0),null);
var vec__9931 = cljs.core.nth.call(null,vec__9928,(1),null);
var v1 = cljs.core.nth.call(null,vec__9931,(0),null);
var v2 = cljs.core.nth.call(null,vec__9931,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__9918.call(null,cljs.core.rest.call(null,s__9919__$2)));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,m);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function cljs$pprint$unzip_map_$_iter__16725(s__16726){
return (new cljs.core.LazySeq(null,(function (){
var s__16726__$1 = s__16726;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__16726__$1);
if(temp__5720__auto__){
var s__16726__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16726__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__16726__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__16728 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__16727 = (0);
while(true){
if((i__16727 < size__4522__auto__)){
var vec__16729 = cljs.core._nth.call(null,c__4521__auto__,i__16727);
var k = cljs.core.nth.call(null,vec__16729,(0),null);
var vec__16732 = cljs.core.nth.call(null,vec__16729,(1),null);
var v1 = cljs.core.nth.call(null,vec__16732,(0),null);
var v2 = cljs.core.nth.call(null,vec__16732,(1),null);
cljs.core.chunk_append.call(null,b__16728,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__16742 = (i__16727 + (1));
i__16727 = G__16742;
=======
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function cljs$pprint$unzip_map_$_iter__9934(s__9935){
return (new cljs.core.LazySeq(null,(function (){
var s__9935__$1 = s__9935;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__9935__$1);
if(temp__5720__auto__){
var s__9935__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9935__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__9935__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__9937 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__9936 = (0);
while(true){
if((i__9936 < size__4522__auto__)){
var vec__9938 = cljs.core._nth.call(null,c__4521__auto__,i__9936);
var k = cljs.core.nth.call(null,vec__9938,(0),null);
var vec__9941 = cljs.core.nth.call(null,vec__9938,(1),null);
var v1 = cljs.core.nth.call(null,vec__9941,(0),null);
var v2 = cljs.core.nth.call(null,vec__9941,(1),null);
cljs.core.chunk_append.call(null,b__9937,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__9951 = (i__9936 + (1));
i__9936 = G__9951;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
} else {
return true;
}
break;
}
})()){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16728),cljs$pprint$unzip_map_$_iter__16725.call(null,cljs.core.chunk_rest.call(null,s__16726__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16728),null);
}
} else {
var vec__16735 = cljs.core.first.call(null,s__16726__$2);
var k = cljs.core.nth.call(null,vec__16735,(0),null);
var vec__16738 = cljs.core.nth.call(null,vec__16735,(1),null);
var v1 = cljs.core.nth.call(null,vec__16738,(0),null);
var v2 = cljs.core.nth.call(null,vec__16738,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__16725.call(null,cljs.core.rest.call(null,s__16726__$2)));
=======
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9937),cljs$pprint$unzip_map_$_iter__9934.call(null,cljs.core.chunk_rest.call(null,s__9935__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9937),null);
}
} else {
var vec__9944 = cljs.core.first.call(null,s__9935__$2);
var k = cljs.core.nth.call(null,vec__9944,(0),null);
var vec__9947 = cljs.core.nth.call(null,vec__9944,(1),null);
var v1 = cljs.core.nth.call(null,vec__9947,(0),null);
var v2 = cljs.core.nth.call(null,vec__9947,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__9934.call(null,cljs.core.rest.call(null,s__9935__$2)));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function cljs$pprint$tuple_map_$_iter__16743(s__16744){
return (new cljs.core.LazySeq(null,(function (){
var s__16744__$1 = s__16744;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__16744__$1);
if(temp__5720__auto__){
var s__16744__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16744__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__16744__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__16746 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__16745 = (0);
while(true){
if((i__16745 < size__4522__auto__)){
var vec__16747 = cljs.core._nth.call(null,c__4521__auto__,i__16745);
var k = cljs.core.nth.call(null,vec__16747,(0),null);
var v = cljs.core.nth.call(null,vec__16747,(1),null);
cljs.core.chunk_append.call(null,b__16746,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__16753 = (i__16745 + (1));
i__16745 = G__16753;
=======
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function cljs$pprint$tuple_map_$_iter__9952(s__9953){
return (new cljs.core.LazySeq(null,(function (){
var s__9953__$1 = s__9953;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__9953__$1);
if(temp__5720__auto__){
var s__9953__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9953__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__9953__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__9955 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__9954 = (0);
while(true){
if((i__9954 < size__4522__auto__)){
var vec__9956 = cljs.core._nth.call(null,c__4521__auto__,i__9954);
var k = cljs.core.nth.call(null,vec__9956,(0),null);
var v = cljs.core.nth.call(null,vec__9956,(1),null);
cljs.core.chunk_append.call(null,b__9955,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__9962 = (i__9954 + (1));
i__9954 = G__9962;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
} else {
return true;
}
break;
}
})()){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16746),cljs$pprint$tuple_map_$_iter__16743.call(null,cljs.core.chunk_rest.call(null,s__16744__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16746),null);
}
} else {
var vec__16750 = cljs.core.first.call(null,s__16744__$2);
var k = cljs.core.nth.call(null,vec__16750,(0),null);
var v = cljs.core.nth.call(null,vec__16750,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__16743.call(null,cljs.core.rest.call(null,s__16744__$2)));
=======
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9955),cljs$pprint$tuple_map_$_iter__9952.call(null,cljs.core.chunk_rest.call(null,s__9953__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9955),null);
}
} else {
var vec__9959 = cljs.core.first.call(null,s__9953__$2);
var k = cljs.core.nth.call(null,vec__9959,(0),null);
var v = cljs.core.nth.call(null,vec__9959,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__9952.call(null,cljs.core.rest.call(null,s__9953__$2)));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count.call(null,s);
if((((len > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,(cljs.core.count.call(null,s) - (1))),c)))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if((!(cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,n),c)))){
return cljs.core.subs.call(null,s,(0),(n + (1)));
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var G__16754 = (n - (1));
n = G__16754;
=======
var G__9963 = (n - (1));
n = G__9963;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count.call(null,s);
if((((len > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,(0)),c)))){
var n = (0);
while(true){
if(((cljs.core._EQ_.call(null,n,len)) || ((!(cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,n),c)))))){
return cljs.core.subs.call(null,s,n);
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var G__16755 = (n + (1));
n = G__16755;
=======
var G__9964 = (n + (1));
n = G__9964;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_.call(null,val))?cljs.core.set.call(null,val):cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
var pos = (0);
while(true){
if(((cljs.core._EQ_.call(null,pos,cljs.core.count.call(null,aseq))) || (cljs.core.not.call(null,test.call(null,cljs.core.nth.call(null,aseq,pos)))))){
return pos;
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var G__16756 = (pos + (1));
pos = G__16756;
=======
var G__9965 = (pos + (1));
pos = G__9965;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
}
break;
}
});

/**
 * @interface
 */
cljs.pprint.IPrettyFlush = function(){};

cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if((((!((pp == null)))) && ((!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null)))))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
var x__4433__auto__ = (((pp == null))?null:pp);
var m__4434__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,pp);
} else {
var m__4431__auto__ = (cljs.pprint._ppflush["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,pp);
} else {
throw cljs.core.missing_protocol.call(null,"IPrettyFlush.-ppflush",pp);
}
}
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
return sym.call(null,cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599));
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"line","line",212345235));
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"max","max",61366548));
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"max","max",61366548),new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"base","base",185279322));
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.call(null,c,"\n")){
cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599),(0));

cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"line","line",212345235)) + (1)));
} else {
cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599)) + (1)));
}

return cljs.core._write.call(null,cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"base","base",185279322)),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var G__16759 = arguments.length;
switch (G__16759) {
=======
var G__9968 = arguments.length;
switch (G__9968) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
case 1:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.call(null,writer,cljs.pprint._STAR_default_page_width_STAR_);
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max","max",61366548),max_columns,new cljs.core.Keyword(null,"cur","cur",1153190599),(0),new cljs.core.Keyword(null,"line","line",212345235),(0),new cljs.core.Keyword(null,"base","base",185279322),writer], null));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint16760 !== 'undefined')){
=======
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint9969 !== 'undefined')){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.t_cljs$pprint16760 = (function (writer,max_columns,fields,meta16761){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta16761 = meta16761;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint16760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (fields){
return (function (_16762,meta16761__$1){
var self__ = this;
var _16762__$1 = this;
return (new cljs.pprint.t_cljs$pprint16760(self__.writer,self__.max_columns,self__.fields,meta16761__$1));
});})(fields))
;

cljs.pprint.t_cljs$pprint16760.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (fields){
return (function (_16762){
var self__ = this;
var _16762__$1 = this;
return self__.meta16761;
});})(fields))
;

cljs.pprint.t_cljs$pprint16760.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (fields){
=======
cljs.pprint.t_cljs$pprint9969 = (function (writer,max_columns,fields,meta9970){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta9970 = meta9970;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint9969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (fields){
return (function (_9971,meta9970__$1){
var self__ = this;
var _9971__$1 = this;
return (new cljs.pprint.t_cljs$pprint9969(self__.writer,self__.max_columns,self__.fields,meta9970__$1));
});})(fields))
;

cljs.pprint.t_cljs$pprint9969.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (fields){
return (function (_9971){
var self__ = this;
var _9971__$1 = this;
return self__.meta9970;
});})(fields))
;

cljs.pprint.t_cljs$pprint9969.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (fields){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(fields))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.t_cljs$pprint16760.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (fields){
=======
cljs.pprint.t_cljs$pprint9969.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (fields){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(fields))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.t_cljs$pprint16760.prototype.cljs$core$IWriter$_write$arity$2 = ((function (fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__16763 = cljs.core._EQ_;
var expr__16764 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__16763.call(null,String,expr__16764))){
=======
cljs.pprint.t_cljs$pprint9969.prototype.cljs$core$IWriter$_write$arity$2 = ((function (fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__9972 = cljs.core._EQ_;
var expr__9973 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__9972.call(null,String,expr__9973))){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599)) + cljs.core.count.call(null,s)));
} else {
cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),((cljs.core.count.call(null,s) - nl) - (1)));

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"line","line",212345235)) + cljs.core.count.call(null,cljs.core.filter.call(null,((function (s,nl,pred__16763,expr__16764,this$__$1,fields){
return (function (p1__16757_SHARP_){
return cljs.core._EQ_.call(null,p1__16757_SHARP_,"\n");
});})(s,nl,pred__16763,expr__16764,this$__$1,fields))
=======
cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"line","line",212345235)) + cljs.core.count.call(null,cljs.core.filter.call(null,((function (s,nl,pred__9972,expr__9973,this$__$1,fields){
return (function (p1__9966_SHARP_){
return cljs.core._EQ_.call(null,p1__9966_SHARP_,"\n");
});})(s,nl,pred__9972,expr__9973,this$__$1,fields))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
,s))));
}

return cljs.core._write.call(null,cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"base","base",185279322)),s);
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
if(cljs.core.truth_(pred__16763.call(null,Number,expr__16764))){
return cljs.pprint.c_write_char.call(null,this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__16764)].join('')));
=======
if(cljs.core.truth_(pred__9972.call(null,Number,expr__9973))){
return cljs.pprint.c_write_char.call(null,this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__9973)].join('')));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}
}
});})(fields))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.t_cljs$pprint16760.getBasis = ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta16761","meta16761",-471912331,null)], null);
});})(fields))
;

cljs.pprint.t_cljs$pprint16760.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint16760.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint16760";

cljs.pprint.t_cljs$pprint16760.cljs$lang$ctorPrWriter = ((function (fields){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.pprint/t_cljs$pprint16760");
=======
cljs.pprint.t_cljs$pprint9969.getBasis = ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta9970","meta9970",-1456129499,null)], null);
});})(fields))
;

cljs.pprint.t_cljs$pprint9969.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint9969.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint9969";

cljs.pprint.t_cljs$pprint9969.cljs$lang$ctorPrWriter = ((function (fields){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.pprint/t_cljs$pprint9969");
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});})(fields))
;

/**
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
 * Positional factory function for cljs.pprint/t_cljs$pprint16760.
 */
cljs.pprint.__GT_t_cljs$pprint16760 = ((function (fields){
return (function cljs$pprint$__GT_t_cljs$pprint16760(writer__$1,max_columns__$1,fields__$1,meta16761){
return (new cljs.pprint.t_cljs$pprint16760(writer__$1,max_columns__$1,fields__$1,meta16761));
=======
 * Positional factory function for cljs.pprint/t_cljs$pprint9969.
 */
cljs.pprint.__GT_t_cljs$pprint9969 = ((function (fields){
return (function cljs$pprint$__GT_t_cljs$pprint9969(writer__$1,max_columns__$1,fields__$1,meta9970){
return (new cljs.pprint.t_cljs$pprint9969(writer__$1,max_columns__$1,fields__$1,meta9970));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});})(fields))
;

}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return (new cljs.pprint.t_cljs$pprint16760(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new cljs.pprint.t_cljs$pprint9969(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});

cljs.pprint.column_writer.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k16768,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__16772 = k16768;
var G__16772__$1 = (((G__16772 instanceof cljs.core.Keyword))?G__16772.fqn:null);
switch (G__16772__$1) {
=======
cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k9977,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__9981 = k9977;
var G__9981__$1 = (((G__9981 instanceof cljs.core.Keyword))?G__9981.fqn:null);
switch (G__9981__$1) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "start-col":
return self__.start_col;

break;
case "indent":
return self__.indent;

break;
case "done-nl":
return self__.done_nl;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "suffix":
return self__.suffix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
default:
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return cljs.core.get.call(null,self__.__extmap,k16768,else__4388__auto__);
=======
return cljs.core.get.call(null,self__.__extmap,k9977,else__4388__auto__);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js

}
});

cljs.pprint.logical_block.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return (function (ret__4407__auto__,p__16773){
var vec__16774 = p__16773;
var k__4408__auto__ = cljs.core.nth.call(null,vec__16774,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__16774,(1),null);
=======
return (function (ret__4407__auto__,p__9982){
var vec__9983 = p__9982;
var k__4408__auto__ = cljs.core.nth.call(null,vec__9983,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__9983,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#cljs.pprint.logical-block{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"section","section",-300141526),self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback],null))], null),self__.__extmap));
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16767){
var self__ = this;
var G__16767__$1 = this;
return (new cljs.core.RecordIter((0),G__16767__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
=======
cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9976){
var self__ = this;
var G__9976__$1 = this;
return (new cljs.core.RecordIter((0),G__9976__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});

cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (10 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (1977012399 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16769,other16770){
var self__ = this;
var this16769__$1 = this;
return (((!((other16770 == null)))) && ((this16769__$1.constructor === other16770.constructor)) && (cljs.core._EQ_.call(null,this16769__$1.parent,other16770.parent)) && (cljs.core._EQ_.call(null,this16769__$1.section,other16770.section)) && (cljs.core._EQ_.call(null,this16769__$1.start_col,other16770.start_col)) && (cljs.core._EQ_.call(null,this16769__$1.indent,other16770.indent)) && (cljs.core._EQ_.call(null,this16769__$1.done_nl,other16770.done_nl)) && (cljs.core._EQ_.call(null,this16769__$1.intra_block_nl,other16770.intra_block_nl)) && (cljs.core._EQ_.call(null,this16769__$1.prefix,other16770.prefix)) && (cljs.core._EQ_.call(null,this16769__$1.per_line_prefix,other16770.per_line_prefix)) && (cljs.core._EQ_.call(null,this16769__$1.suffix,other16770.suffix)) && (cljs.core._EQ_.call(null,this16769__$1.logical_block_callback,other16770.logical_block_callback)) && (cljs.core._EQ_.call(null,this16769__$1.__extmap,other16770.__extmap)));
=======
cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this9978,other9979){
var self__ = this;
var this9978__$1 = this;
return (((!((other9979 == null)))) && ((this9978__$1.constructor === other9979.constructor)) && (cljs.core._EQ_.call(null,this9978__$1.parent,other9979.parent)) && (cljs.core._EQ_.call(null,this9978__$1.section,other9979.section)) && (cljs.core._EQ_.call(null,this9978__$1.start_col,other9979.start_col)) && (cljs.core._EQ_.call(null,this9978__$1.indent,other9979.indent)) && (cljs.core._EQ_.call(null,this9978__$1.done_nl,other9979.done_nl)) && (cljs.core._EQ_.call(null,this9978__$1.intra_block_nl,other9979.intra_block_nl)) && (cljs.core._EQ_.call(null,this9978__$1.prefix,other9979.prefix)) && (cljs.core._EQ_.call(null,this9978__$1.per_line_prefix,other9979.per_line_prefix)) && (cljs.core._EQ_.call(null,this9978__$1.suffix,other9979.suffix)) && (cljs.core._EQ_.call(null,this9978__$1.logical_block_callback,other9979.logical_block_callback)) && (cljs.core._EQ_.call(null,this9978__$1.__extmap,other9979.__extmap)));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});

cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"suffix","suffix",367373057),null,new cljs.core.Keyword(null,"indent","indent",-148200125),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),null,new cljs.core.Keyword(null,"start-col","start-col",668080143),null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__16767){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__16777 = cljs.core.keyword_identical_QMARK_;
var expr__16778 = k__4393__auto__;
if(cljs.core.truth_(pred__16777.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__16778))){
return (new cljs.pprint.logical_block(G__16767,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16777.call(null,new cljs.core.Keyword(null,"section","section",-300141526),expr__16778))){
return (new cljs.pprint.logical_block(self__.parent,G__16767,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16777.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143),expr__16778))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__16767,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16777.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125),expr__16778))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__16767,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16777.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),expr__16778))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__16767,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16777.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),expr__16778))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__16767,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16777.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__16778))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__16767,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16777.call(null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),expr__16778))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__16767,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16777.call(null,new cljs.core.Keyword(null,"suffix","suffix",367373057),expr__16778))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__16767,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16777.call(null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),expr__16778))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__16767,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__16767),null));
=======
cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__9976){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__9986 = cljs.core.keyword_identical_QMARK_;
var expr__9987 = k__4393__auto__;
if(cljs.core.truth_(pred__9986.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__9987))){
return (new cljs.pprint.logical_block(G__9976,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9986.call(null,new cljs.core.Keyword(null,"section","section",-300141526),expr__9987))){
return (new cljs.pprint.logical_block(self__.parent,G__9976,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9986.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143),expr__9987))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__9976,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9986.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125),expr__9987))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__9976,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9986.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),expr__9987))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__9976,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9986.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),expr__9987))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__9976,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9986.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__9987))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__9976,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9986.call(null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),expr__9987))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__9976,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9986.call(null,new cljs.core.Keyword(null,"suffix","suffix",367373057),expr__9987))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__9976,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9986.call(null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),expr__9987))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__9976,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__9976),null));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}
}
}
}
}
}
}
}
}
}
});

cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"section","section",-300141526),self__.section,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback,null))], null),self__.__extmap));
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__16767){
var self__ = this;
var this__4384__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__16767,self__.__extmap,self__.__hash));
=======
cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__9976){
var self__ = this;
var this__4384__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__9976,self__.__extmap,self__.__hash));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});

cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"section","section",1340390001,null),new cljs.core.Symbol(null,"start-col","start-col",-1986355626,null),new cljs.core.Symbol(null,"indent","indent",1492331402,null),new cljs.core.Symbol(null,"done-nl","done-nl",1259507187,null),new cljs.core.Symbol(null,"intra-block-nl","intra-block-nl",-845608894,null),new cljs.core.Symbol(null,"prefix","prefix",1374623062,null),new cljs.core.Symbol(null,"per-line-prefix","per-line-prefix",-1807493956,null),new cljs.core.Symbol(null,"suffix","suffix",2007904584,null),new cljs.core.Symbol(null,"logical-block-callback","logical-block-callback",-1041744575,null)], null);
});

cljs.pprint.logical_block.cljs$lang$type = true;

cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"cljs.pprint/logical-block",null,(1),null));
});

cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.pprint/logical-block");
});

/**
 * Positional factory function for cljs.pprint/logical-block.
 */
cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

/**
 * Factory function for cljs.pprint/logical-block, taking a map of keywords to field values.
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__16771){
var extmap__4424__auto__ = (function (){var G__16780 = cljs.core.dissoc.call(null,G__16771,new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194));
if(cljs.core.record_QMARK_.call(null,G__16771)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__16780);
} else {
return G__16780;
}
})();
return (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__16771),new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(G__16771),new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(G__16771),new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(G__16771),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(G__16771),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(G__16771),new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__16771),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(G__16771),new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(G__16771),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(G__16771),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
=======
cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__9980){
var extmap__4424__auto__ = (function (){var G__9989 = cljs.core.dissoc.call(null,G__9980,new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194));
if(cljs.core.record_QMARK_.call(null,G__9980)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__9989);
} else {
return G__9989;
}
})();
return (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__9980),new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(G__9980),new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(G__9980),new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(G__9980),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(G__9980),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(G__9980),new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__9980),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(G__9980),new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(G__9980),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(G__9980),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var G__16782 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__16782;
=======
var G__9991 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__9991;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq.call(null,l);
if(l__$1){
return (new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,l__$1)) - new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,l__$1)));
} else {
return (0);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k16784,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__16788 = k16784;
var G__16788__$1 = (((G__16788 instanceof cljs.core.Keyword))?G__16788.fqn:null);
switch (G__16788__$1) {
=======
cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k9993,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__9997 = k9993;
var G__9997__$1 = (((G__9997 instanceof cljs.core.Keyword))?G__9997.fqn:null);
switch (G__9997__$1) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return cljs.core.get.call(null,self__.__extmap,k16784,else__4388__auto__);
=======
return cljs.core.get.call(null,self__.__extmap,k9993,else__4388__auto__);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js

}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return (function (ret__4407__auto__,p__16789){
var vec__16790 = p__16789;
var k__4408__auto__ = cljs.core.nth.call(null,vec__16790,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__16790,(1),null);
=======
return (function (ret__4407__auto__,p__9998){
var vec__9999 = p__9998;
var k__4408__auto__ = cljs.core.nth.call(null,vec__9999,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__9999,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16783){
var self__ = this;
var G__16783__$1 = this;
return (new cljs.core.RecordIter((0),G__16783__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
=======
cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9992){
var self__ = this;
var G__9992__$1 = this;
return (new cljs.core.RecordIter((0),G__9992__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (1809113693 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16785,other16786){
var self__ = this;
var this16785__$1 = this;
return (((!((other16786 == null)))) && ((this16785__$1.constructor === other16786.constructor)) && (cljs.core._EQ_.call(null,this16785__$1.type_tag,other16786.type_tag)) && (cljs.core._EQ_.call(null,this16785__$1.data,other16786.data)) && (cljs.core._EQ_.call(null,this16785__$1.trailing_white_space,other16786.trailing_white_space)) && (cljs.core._EQ_.call(null,this16785__$1.start_pos,other16786.start_pos)) && (cljs.core._EQ_.call(null,this16785__$1.end_pos,other16786.end_pos)) && (cljs.core._EQ_.call(null,this16785__$1.__extmap,other16786.__extmap)));
=======
cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this9994,other9995){
var self__ = this;
var this9994__$1 = this;
return (((!((other9995 == null)))) && ((this9994__$1.constructor === other9995.constructor)) && (cljs.core._EQ_.call(null,this9994__$1.type_tag,other9995.type_tag)) && (cljs.core._EQ_.call(null,this9994__$1.data,other9995.data)) && (cljs.core._EQ_.call(null,this9994__$1.trailing_white_space,other9995.trailing_white_space)) && (cljs.core._EQ_.call(null,this9994__$1.start_pos,other9995.start_pos)) && (cljs.core._EQ_.call(null,this9994__$1.end_pos,other9995.end_pos)) && (cljs.core._EQ_.call(null,this9994__$1.__extmap,other9995.__extmap)));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__16783){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__16793 = cljs.core.keyword_identical_QMARK_;
var expr__16794 = k__4393__auto__;
if(cljs.core.truth_(pred__16793.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__16794))){
return (new cljs.pprint.buffer_blob(G__16783,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16793.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__16794))){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__16783,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16793.call(null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),expr__16794))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__16783,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16793.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__16794))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__16783,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16793.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__16794))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__16783,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__16783),null));
=======
cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__9992){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__10002 = cljs.core.keyword_identical_QMARK_;
var expr__10003 = k__4393__auto__;
if(cljs.core.truth_(pred__10002.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__10003))){
return (new cljs.pprint.buffer_blob(G__9992,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10002.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__10003))){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__9992,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10002.call(null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),expr__10003))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__9992,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10002.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__10003))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__9992,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10002.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__10003))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__9992,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__9992),null));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}
}
}
}
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__16783){
var self__ = this;
var this__4384__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__16783,self__.__extmap,self__.__hash));
=======
cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__9992){
var self__ = this;
var this__4384__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__9992,self__.__extmap,self__.__hash));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"trailing-white-space","trailing-white-space",-1158428773,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.buffer_blob.cljs$lang$type = true;

cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"cljs.pprint/buffer-blob",null,(1),null));
});

cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.pprint/buffer-blob");
});

/**
 * Positional factory function for cljs.pprint/buffer-blob.
 */
cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/buffer-blob, taking a map of keywords to field values.
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__16787){
var extmap__4424__auto__ = (function (){var G__16796 = cljs.core.dissoc.call(null,G__16787,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__16787)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__16796);
} else {
return G__16796;
}
})();
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__16787),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__16787),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(G__16787),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__16787),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__16787),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
=======
cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__9996){
var extmap__4424__auto__ = (function (){var G__10005 = cljs.core.dissoc.call(null,G__9996,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__9996)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__10005);
} else {
return G__10005;
}
})();
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__9996),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__9996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(G__9996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__9996),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__9996),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),data,trailing_white_space,start_pos,end_pos,null,null,null));
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__16596__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__16596__auto__),new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173));
=======
cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__9805__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__9805__auto__),new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k16799,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__16803 = k16799;
var G__16803__$1 = (((G__16803 instanceof cljs.core.Keyword))?G__16803.fqn:null);
switch (G__16803__$1) {
=======
cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k10008,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__10012 = k10008;
var G__10012__$1 = (((G__10012 instanceof cljs.core.Keyword))?G__10012.fqn:null);
switch (G__10012__$1) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return cljs.core.get.call(null,self__.__extmap,k16799,else__4388__auto__);
=======
return cljs.core.get.call(null,self__.__extmap,k10008,else__4388__auto__);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js

}
});

cljs.pprint.nl_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return (function (ret__4407__auto__,p__16804){
var vec__16805 = p__16804;
var k__4408__auto__ = cljs.core.nth.call(null,vec__16805,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__16805,(1),null);
=======
return (function (ret__4407__auto__,p__10013){
var vec__10014 = p__10013;
var k__4408__auto__ = cljs.core.nth.call(null,vec__10014,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__10014,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#cljs.pprint.nl-t{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16798){
var self__ = this;
var G__16798__$1 = this;
return (new cljs.core.RecordIter((0),G__16798__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
=======
cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10007){
var self__ = this;
var G__10007__$1 = this;
return (new cljs.core.RecordIter((0),G__10007__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});

cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1640656800 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16800,other16801){
var self__ = this;
var this16800__$1 = this;
return (((!((other16801 == null)))) && ((this16800__$1.constructor === other16801.constructor)) && (cljs.core._EQ_.call(null,this16800__$1.type_tag,other16801.type_tag)) && (cljs.core._EQ_.call(null,this16800__$1.type,other16801.type)) && (cljs.core._EQ_.call(null,this16800__$1.logical_block,other16801.logical_block)) && (cljs.core._EQ_.call(null,this16800__$1.start_pos,other16801.start_pos)) && (cljs.core._EQ_.call(null,this16800__$1.end_pos,other16801.end_pos)) && (cljs.core._EQ_.call(null,this16800__$1.__extmap,other16801.__extmap)));
=======
cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this10009,other10010){
var self__ = this;
var this10009__$1 = this;
return (((!((other10010 == null)))) && ((this10009__$1.constructor === other10010.constructor)) && (cljs.core._EQ_.call(null,this10009__$1.type_tag,other10010.type_tag)) && (cljs.core._EQ_.call(null,this10009__$1.type,other10010.type)) && (cljs.core._EQ_.call(null,this10009__$1.logical_block,other10010.logical_block)) && (cljs.core._EQ_.call(null,this10009__$1.start_pos,other10010.start_pos)) && (cljs.core._EQ_.call(null,this10009__$1.end_pos,other10010.end_pos)) && (cljs.core._EQ_.call(null,this10009__$1.__extmap,other10010.__extmap)));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});

cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__16798){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__16808 = cljs.core.keyword_identical_QMARK_;
var expr__16809 = k__4393__auto__;
if(cljs.core.truth_(pred__16808.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__16809))){
return (new cljs.pprint.nl_t(G__16798,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16808.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__16809))){
return (new cljs.pprint.nl_t(self__.type_tag,G__16798,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16808.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__16809))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__16798,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16808.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__16809))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__16798,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16808.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__16809))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__16798,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__16798),null));
=======
cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__10007){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__10017 = cljs.core.keyword_identical_QMARK_;
var expr__10018 = k__4393__auto__;
if(cljs.core.truth_(pred__10017.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__10018))){
return (new cljs.pprint.nl_t(G__10007,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10017.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__10018))){
return (new cljs.pprint.nl_t(self__.type_tag,G__10007,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10017.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__10018))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__10007,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10017.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__10018))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__10007,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10017.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__10018))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__10007,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__10007),null));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}
}
}
}
}
});

cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type","type",1174270348),self__.type,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__16798){
var self__ = this;
var this__4384__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__16798,self__.__extmap,self__.__hash));
=======
cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__10007){
var self__ = this;
var this__4384__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__10007,self__.__extmap,self__.__hash));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});

cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.nl_t.cljs$lang$type = true;

cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"cljs.pprint/nl-t",null,(1),null));
});

cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.pprint/nl-t");
});

/**
 * Positional factory function for cljs.pprint/nl-t.
 */
cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/nl-t, taking a map of keywords to field values.
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__16802){
var extmap__4424__auto__ = (function (){var G__16811 = cljs.core.dissoc.call(null,G__16802,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__16802)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__16811);
} else {
return G__16811;
}
})();
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__16802),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__16802),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__16802),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__16802),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__16802),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
=======
cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__10011){
var extmap__4424__auto__ = (function (){var G__10020 = cljs.core.dissoc.call(null,G__10011,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__10011)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__10020);
} else {
return G__10020;
}
})();
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__10011),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__10011),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__10011),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__10011),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__10011),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),type,logical_block,start_pos,end_pos,null,null,null));
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__16596__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__16596__auto__),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114));
=======
cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__9805__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__9805__auto__),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k16814,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__16818 = k16814;
var G__16818__$1 = (((G__16818 instanceof cljs.core.Keyword))?G__16818.fqn:null);
switch (G__16818__$1) {
=======
cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k10023,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__10027 = k10023;
var G__10027__$1 = (((G__10027 instanceof cljs.core.Keyword))?G__10027.fqn:null);
switch (G__10027__$1) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return cljs.core.get.call(null,self__.__extmap,k16814,else__4388__auto__);
=======
return cljs.core.get.call(null,self__.__extmap,k10023,else__4388__auto__);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js

}
});

cljs.pprint.start_block_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return (function (ret__4407__auto__,p__16819){
var vec__16820 = p__16819;
var k__4408__auto__ = cljs.core.nth.call(null,vec__16820,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__16820,(1),null);
=======
return (function (ret__4407__auto__,p__10028){
var vec__10029 = p__10028;
var k__4408__auto__ = cljs.core.nth.call(null,vec__10029,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__10029,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16813){
var self__ = this;
var G__16813__$1 = this;
return (new cljs.core.RecordIter((0),G__16813__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
=======
cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10022){
var self__ = this;
var G__10022__$1 = this;
return (new cljs.core.RecordIter((0),G__10022__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});

cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-414877272 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16815,other16816){
var self__ = this;
var this16815__$1 = this;
return (((!((other16816 == null)))) && ((this16815__$1.constructor === other16816.constructor)) && (cljs.core._EQ_.call(null,this16815__$1.type_tag,other16816.type_tag)) && (cljs.core._EQ_.call(null,this16815__$1.logical_block,other16816.logical_block)) && (cljs.core._EQ_.call(null,this16815__$1.start_pos,other16816.start_pos)) && (cljs.core._EQ_.call(null,this16815__$1.end_pos,other16816.end_pos)) && (cljs.core._EQ_.call(null,this16815__$1.__extmap,other16816.__extmap)));
=======
cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this10024,other10025){
var self__ = this;
var this10024__$1 = this;
return (((!((other10025 == null)))) && ((this10024__$1.constructor === other10025.constructor)) && (cljs.core._EQ_.call(null,this10024__$1.type_tag,other10025.type_tag)) && (cljs.core._EQ_.call(null,this10024__$1.logical_block,other10025.logical_block)) && (cljs.core._EQ_.call(null,this10024__$1.start_pos,other10025.start_pos)) && (cljs.core._EQ_.call(null,this10024__$1.end_pos,other10025.end_pos)) && (cljs.core._EQ_.call(null,this10024__$1.__extmap,other10025.__extmap)));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});

cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__16813){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__16823 = cljs.core.keyword_identical_QMARK_;
var expr__16824 = k__4393__auto__;
if(cljs.core.truth_(pred__16823.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__16824))){
return (new cljs.pprint.start_block_t(G__16813,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16823.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__16824))){
return (new cljs.pprint.start_block_t(self__.type_tag,G__16813,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16823.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__16824))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__16813,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16823.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__16824))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__16813,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__16813),null));
=======
cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__10022){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__10032 = cljs.core.keyword_identical_QMARK_;
var expr__10033 = k__4393__auto__;
if(cljs.core.truth_(pred__10032.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__10033))){
return (new cljs.pprint.start_block_t(G__10022,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10032.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__10033))){
return (new cljs.pprint.start_block_t(self__.type_tag,G__10022,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10032.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__10033))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__10022,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10032.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__10033))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__10022,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__10022),null));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}
}
}
}
});

cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__16813){
var self__ = this;
var this__4384__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__16813,self__.__extmap,self__.__hash));
=======
cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__10022){
var self__ = this;
var this__4384__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__10022,self__.__extmap,self__.__hash));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});

cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.start_block_t.cljs$lang$type = true;

cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"cljs.pprint/start-block-t",null,(1),null));
});

cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.pprint/start-block-t");
});

/**
 * Positional factory function for cljs.pprint/start-block-t.
 */
cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/start-block-t, taking a map of keywords to field values.
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__16817){
var extmap__4424__auto__ = (function (){var G__16826 = cljs.core.dissoc.call(null,G__16817,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__16817)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__16826);
} else {
return G__16826;
}
})();
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__16817),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__16817),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__16817),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__16817),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
=======
cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__10026){
var extmap__4424__auto__ = (function (){var G__10035 = cljs.core.dissoc.call(null,G__10026,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__10026)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__10035);
} else {
return G__10035;
}
})();
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__10026),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__10026),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__10026),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__10026),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),logical_block,start_pos,end_pos,null,null,null));
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__16596__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__16596__auto__),new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594));
=======
cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__9805__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__9805__auto__),new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k16829,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__16833 = k16829;
var G__16833__$1 = (((G__16833 instanceof cljs.core.Keyword))?G__16833.fqn:null);
switch (G__16833__$1) {
=======
cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k10038,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__10042 = k10038;
var G__10042__$1 = (((G__10042 instanceof cljs.core.Keyword))?G__10042.fqn:null);
switch (G__10042__$1) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return cljs.core.get.call(null,self__.__extmap,k16829,else__4388__auto__);
=======
return cljs.core.get.call(null,self__.__extmap,k10038,else__4388__auto__);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js

}
});

cljs.pprint.end_block_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return (function (ret__4407__auto__,p__16834){
var vec__16835 = p__16834;
var k__4408__auto__ = cljs.core.nth.call(null,vec__16835,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__16835,(1),null);
=======
return (function (ret__4407__auto__,p__10043){
var vec__10044 = p__10043;
var k__4408__auto__ = cljs.core.nth.call(null,vec__10044,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__10044,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16828){
var self__ = this;
var G__16828__$1 = this;
return (new cljs.core.RecordIter((0),G__16828__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
=======
cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10037){
var self__ = this;
var G__10037__$1 = this;
return (new cljs.core.RecordIter((0),G__10037__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});

cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (1365867980 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16830,other16831){
var self__ = this;
var this16830__$1 = this;
return (((!((other16831 == null)))) && ((this16830__$1.constructor === other16831.constructor)) && (cljs.core._EQ_.call(null,this16830__$1.type_tag,other16831.type_tag)) && (cljs.core._EQ_.call(null,this16830__$1.logical_block,other16831.logical_block)) && (cljs.core._EQ_.call(null,this16830__$1.start_pos,other16831.start_pos)) && (cljs.core._EQ_.call(null,this16830__$1.end_pos,other16831.end_pos)) && (cljs.core._EQ_.call(null,this16830__$1.__extmap,other16831.__extmap)));
=======
cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this10039,other10040){
var self__ = this;
var this10039__$1 = this;
return (((!((other10040 == null)))) && ((this10039__$1.constructor === other10040.constructor)) && (cljs.core._EQ_.call(null,this10039__$1.type_tag,other10040.type_tag)) && (cljs.core._EQ_.call(null,this10039__$1.logical_block,other10040.logical_block)) && (cljs.core._EQ_.call(null,this10039__$1.start_pos,other10040.start_pos)) && (cljs.core._EQ_.call(null,this10039__$1.end_pos,other10040.end_pos)) && (cljs.core._EQ_.call(null,this10039__$1.__extmap,other10040.__extmap)));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});

cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__16828){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__16838 = cljs.core.keyword_identical_QMARK_;
var expr__16839 = k__4393__auto__;
if(cljs.core.truth_(pred__16838.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__16839))){
return (new cljs.pprint.end_block_t(G__16828,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16838.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__16839))){
return (new cljs.pprint.end_block_t(self__.type_tag,G__16828,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16838.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__16839))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__16828,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16838.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__16839))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__16828,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__16828),null));
=======
cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__10037){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__10047 = cljs.core.keyword_identical_QMARK_;
var expr__10048 = k__4393__auto__;
if(cljs.core.truth_(pred__10047.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__10048))){
return (new cljs.pprint.end_block_t(G__10037,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10047.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__10048))){
return (new cljs.pprint.end_block_t(self__.type_tag,G__10037,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10047.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__10048))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__10037,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10047.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__10048))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__10037,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__10037),null));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}
}
}
}
});

cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__16828){
var self__ = this;
var this__4384__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__16828,self__.__extmap,self__.__hash));
=======
cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__10037){
var self__ = this;
var this__4384__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__10037,self__.__extmap,self__.__hash));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});

cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.end_block_t.cljs$lang$type = true;

cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"cljs.pprint/end-block-t",null,(1),null));
});

cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.pprint/end-block-t");
});

/**
 * Positional factory function for cljs.pprint/end-block-t.
 */
cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/end-block-t, taking a map of keywords to field values.
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__16832){
var extmap__4424__auto__ = (function (){var G__16841 = cljs.core.dissoc.call(null,G__16832,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__16832)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__16841);
} else {
return G__16841;
}
})();
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__16832),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__16832),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__16832),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__16832),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
=======
cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__10041){
var extmap__4424__auto__ = (function (){var G__10050 = cljs.core.dissoc.call(null,G__10041,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__10041)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__10050);
} else {
return G__10050;
}
})();
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__10041),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__10041),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__10041),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__10041),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),logical_block,start_pos,end_pos,null,null,null));
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__16596__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__16596__auto__),new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735));
=======
cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__9805__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__9805__auto__),new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k16844,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__16848 = k16844;
var G__16848__$1 = (((G__16848 instanceof cljs.core.Keyword))?G__16848.fqn:null);
switch (G__16848__$1) {
=======
cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k10053,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__10057 = k10053;
var G__10057__$1 = (((G__10057 instanceof cljs.core.Keyword))?G__10057.fqn:null);
switch (G__10057__$1) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return cljs.core.get.call(null,self__.__extmap,k16844,else__4388__auto__);
=======
return cljs.core.get.call(null,self__.__extmap,k10053,else__4388__auto__);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js

}
});

cljs.pprint.indent_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return (function (ret__4407__auto__,p__16849){
var vec__16850 = p__16849;
var k__4408__auto__ = cljs.core.nth.call(null,vec__16850,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__16850,(1),null);
=======
return (function (ret__4407__auto__,p__10058){
var vec__10059 = p__10058;
var k__4408__auto__ = cljs.core.nth.call(null,vec__10059,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__10059,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#cljs.pprint.indent-t{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16843){
var self__ = this;
var G__16843__$1 = this;
return (new cljs.core.RecordIter((0),G__16843__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
=======
cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10052){
var self__ = this;
var G__10052__$1 = this;
return (new cljs.core.RecordIter((0),G__10052__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});

cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1602780238 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16845,other16846){
var self__ = this;
var this16845__$1 = this;
return (((!((other16846 == null)))) && ((this16845__$1.constructor === other16846.constructor)) && (cljs.core._EQ_.call(null,this16845__$1.type_tag,other16846.type_tag)) && (cljs.core._EQ_.call(null,this16845__$1.logical_block,other16846.logical_block)) && (cljs.core._EQ_.call(null,this16845__$1.relative_to,other16846.relative_to)) && (cljs.core._EQ_.call(null,this16845__$1.offset,other16846.offset)) && (cljs.core._EQ_.call(null,this16845__$1.start_pos,other16846.start_pos)) && (cljs.core._EQ_.call(null,this16845__$1.end_pos,other16846.end_pos)) && (cljs.core._EQ_.call(null,this16845__$1.__extmap,other16846.__extmap)));
=======
cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this10054,other10055){
var self__ = this;
var this10054__$1 = this;
return (((!((other10055 == null)))) && ((this10054__$1.constructor === other10055.constructor)) && (cljs.core._EQ_.call(null,this10054__$1.type_tag,other10055.type_tag)) && (cljs.core._EQ_.call(null,this10054__$1.logical_block,other10055.logical_block)) && (cljs.core._EQ_.call(null,this10054__$1.relative_to,other10055.relative_to)) && (cljs.core._EQ_.call(null,this10054__$1.offset,other10055.offset)) && (cljs.core._EQ_.call(null,this10054__$1.start_pos,other10055.start_pos)) && (cljs.core._EQ_.call(null,this10054__$1.end_pos,other10055.end_pos)) && (cljs.core._EQ_.call(null,this10054__$1.__extmap,other10055.__extmap)));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});

cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__16843){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__16853 = cljs.core.keyword_identical_QMARK_;
var expr__16854 = k__4393__auto__;
if(cljs.core.truth_(pred__16853.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__16854))){
return (new cljs.pprint.indent_t(G__16843,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16853.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__16854))){
return (new cljs.pprint.indent_t(self__.type_tag,G__16843,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16853.call(null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),expr__16854))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__16843,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16853.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__16854))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__16843,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16853.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__16854))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__16843,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16853.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__16854))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__16843,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__16843),null));
=======
cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__10052){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__10062 = cljs.core.keyword_identical_QMARK_;
var expr__10063 = k__4393__auto__;
if(cljs.core.truth_(pred__10062.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__10063))){
return (new cljs.pprint.indent_t(G__10052,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10062.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__10063))){
return (new cljs.pprint.indent_t(self__.type_tag,G__10052,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10062.call(null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),expr__10063))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__10052,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10062.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__10063))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__10052,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10062.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__10063))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__10052,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10062.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__10063))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__10052,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__10052),null));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}
}
}
}
}
}
});

cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__16843){
var self__ = this;
var this__4384__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__16843,self__.__extmap,self__.__hash));
=======
cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__10052){
var self__ = this;
var this__4384__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__10052,self__.__extmap,self__.__hash));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});

cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"relative-to","relative-to",1170431476,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.indent_t.cljs$lang$type = true;

cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"cljs.pprint/indent-t",null,(1),null));
});

cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.pprint/indent-t");
});

/**
 * Positional factory function for cljs.pprint/indent-t.
 */
cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/indent-t, taking a map of keywords to field values.
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__16847){
var extmap__4424__auto__ = (function (){var G__16856 = cljs.core.dissoc.call(null,G__16847,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__16847)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__16856);
} else {
return G__16856;
}
})();
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__16847),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__16847),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(G__16847),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__16847),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__16847),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__16847),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
=======
cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__10056){
var extmap__4424__auto__ = (function (){var G__10065 = cljs.core.dissoc.call(null,G__10056,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__10056)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__10065);
} else {
return G__10065;
}
})();
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__10056),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__10056),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(G__10056),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__10056),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__10056),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__10056),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"indent-t","indent-t",528318969),logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__16596__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__16596__auto__),new cljs.core.Keyword(null,"indent-t","indent-t",528318969));
=======
cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__9805__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__9805__auto__),new cljs.core.Keyword(null,"indent-t","indent-t",528318969));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.write_token !== 'undefined')){
} else {
cljs.pprint.write_token = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","write-token"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return (function (p1__16859_SHARP_,p2__16858_SHARP_){
return new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(p2__16858_SHARP_);
=======
return (function (p1__10068_SHARP_,p2__10067_SHARP_){
return new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(p2__10067_SHARP_);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),(function (this$,token){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var temp__5720__auto___16860 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5720__auto___16860)){
var cb_16861 = temp__5720__auto___16860;
cb_16861.call(null,new cljs.core.Keyword(null,"start","start",-355208981));
=======
var temp__5720__auto___10069 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5720__auto___10069)){
var cb_10070 = temp__5720__auto___10069;
cb_10070.call(null,new cljs.core.Keyword(null,"start","start",-355208981));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
} else {
}

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var temp__5720__auto___16862 = new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__5720__auto___16862)){
var prefix_16863 = temp__5720__auto___16862;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix_16863);
=======
var temp__5720__auto___10071 = new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__5720__auto___10071)){
var prefix_10072 = temp__5720__auto___10071;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix_10072);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
} else {
}

var col = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),(function (this$,token){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var temp__5720__auto___16864 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5720__auto___16864)){
var cb_16865 = temp__5720__auto___16864;
cb_16865.call(null,new cljs.core.Keyword(null,"end","end",-268185958));
=======
var temp__5720__auto___10073 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5720__auto___10073)){
var cb_10074 = temp__5720__auto___10073;
cb_10074.call(null,new cljs.core.Keyword(null,"end","end",-268185958));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
} else {
}

var temp__5720__auto__ = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__5720__auto__)){
var suffix = temp__5720__auto__;
return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),suffix);
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"indent-t","indent-t",528318969),(function (this$,token){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__16866 = cljs.core._EQ_;
var expr__16867 = new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_(pred__16866.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__16867))){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_(pred__16866.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__16867))){
return cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__16867)].join('')));
=======
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__10075 = cljs.core._EQ_;
var expr__10076 = new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_(pred__10075.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__10076))){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_(pred__10075.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__10076))){
return cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__10076)].join('')));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}
}
})()));
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),(function (this$,token){
return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),(function (this$,token){
if(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"mandatory","mandatory",542802336));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var and__4120__auto__ = (!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"fill","fill",883462889))));
if(and__4120__auto__){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token)));
} else {
return and__4120__auto__;
}
}
})())){
cljs.pprint.emit_nl.call(null,this$,token);
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var temp__5718__auto___16869 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5718__auto___16869)){
var tws_16870 = temp__5718__auto___16869;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_16870);
=======
var temp__5718__auto___10078 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5718__auto___10078)){
var tws_10079 = temp__5718__auto___10078;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_10079);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
} else {
}
}

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var seq__16871 = cljs.core.seq.call(null,tokens);
var chunk__16872 = null;
var count__16873 = (0);
var i__16874 = (0);
while(true){
if((i__16874 < count__16873)){
var token = cljs.core._nth.call(null,chunk__16872,i__16874);
if((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114))))){
var temp__5718__auto___16875 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5718__auto___16875)){
var tws_16876 = temp__5718__auto___16875;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_16876);
=======
var seq__10080 = cljs.core.seq.call(null,tokens);
var chunk__10081 = null;
var count__10082 = (0);
var i__10083 = (0);
while(true){
if((i__10083 < count__10082)){
var token = cljs.core._nth.call(null,chunk__10081,i__10083);
if((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114))))){
var temp__5718__auto___10084 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5718__auto___10084)){
var tws_10085 = temp__5718__auto___10084;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_10085);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
} else {
}
} else {
}

cljs.pprint.write_token.call(null,this$,token);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var tws_16877 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_((function (){var and__4120__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__4120__auto__)){
return tws_16877;
=======
var tws_10086 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_((function (){var and__4120__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__4120__auto__)){
return tws_10086;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
} else {
return and__4120__auto__;
}
})())){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_16877);
=======
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_10086);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}


<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var G__16878 = seq__16871;
var G__16879 = chunk__16872;
var G__16880 = count__16873;
var G__16881 = (i__16874 + (1));
seq__16871 = G__16878;
chunk__16872 = G__16879;
count__16873 = G__16880;
i__16874 = G__16881;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__16871);
if(temp__5720__auto__){
var seq__16871__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16871__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__16871__$1);
var G__16882 = cljs.core.chunk_rest.call(null,seq__16871__$1);
var G__16883 = c__4550__auto__;
var G__16884 = cljs.core.count.call(null,c__4550__auto__);
var G__16885 = (0);
seq__16871 = G__16882;
chunk__16872 = G__16883;
count__16873 = G__16884;
i__16874 = G__16885;
continue;
} else {
var token = cljs.core.first.call(null,seq__16871__$1);
if((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114))))){
var temp__5718__auto___16886 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5718__auto___16886)){
var tws_16887 = temp__5718__auto___16886;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_16887);
=======
var G__10087 = seq__10080;
var G__10088 = chunk__10081;
var G__10089 = count__10082;
var G__10090 = (i__10083 + (1));
seq__10080 = G__10087;
chunk__10081 = G__10088;
count__10082 = G__10089;
i__10083 = G__10090;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__10080);
if(temp__5720__auto__){
var seq__10080__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10080__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__10080__$1);
var G__10091 = cljs.core.chunk_rest.call(null,seq__10080__$1);
var G__10092 = c__4550__auto__;
var G__10093 = cljs.core.count.call(null,c__4550__auto__);
var G__10094 = (0);
seq__10080 = G__10091;
chunk__10081 = G__10092;
count__10082 = G__10093;
i__10083 = G__10094;
continue;
} else {
var token = cljs.core.first.call(null,seq__10080__$1);
if((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114))))){
var temp__5718__auto___10095 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5718__auto___10095)){
var tws_10096 = temp__5718__auto___10095;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_10096);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
} else {
}
} else {
}

cljs.pprint.write_token.call(null,this$,token);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var tws_16888 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_((function (){var and__4120__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__4120__auto__)){
return tws_16888;
=======
var tws_10097 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_((function (){var and__4120__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__4120__auto__)){
return tws_10097;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
} else {
return and__4120__auto__;
}
})())){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_16888);
=======
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_10097);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}


<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var G__16889 = cljs.core.next.call(null,seq__16871__$1);
var G__16890 = null;
var G__16891 = (0);
var G__16892 = (0);
seq__16871 = G__16889;
chunk__16872 = G__16890;
count__16873 = G__16891;
i__16874 = G__16892;
=======
var G__10098 = cljs.core.next.call(null,seq__10080__$1);
var G__10099 = null;
var G__10100 = (0);
var G__10101 = (0);
seq__10080 = G__10098;
chunk__10081 = G__10099;
count__10082 = G__10100;
i__10083 = G__10101;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
return (((maxcol == null)) || (((cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)))) + cljs.pprint.buffer_length.call(null,tokens)) < maxcol)));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__4131__auto__ = cljs.core.deref.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (!(cljs.pprint.tokens_fit_QMARK_.call(null,this$,section)));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = cljs.pprint.get_miser_width.call(null,this$);
var maxcol = cljs.pprint.get_max_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
var and__4120__auto__ = miser_width;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = maxcol;
if(cljs.core.truth_(and__4120__auto____$1)){
var and__4120__auto____$2 = (cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb)) >= (maxcol - miser_width));
if(and__4120__auto____$2){
return cljs.pprint.linear_nl_QMARK_.call(null,this$,lb,section);
} else {
return and__4120__auto____$2;
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined')){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","emit-nl?"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (t,_,___$1,___$2){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t);
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"linear","linear",872268697),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_.call(null,this$,lb,section);
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"miser","miser",-556060186),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_.call(null,this$,lb,section);
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"fill","fill",883462889),(function (newl,this$,section,subsection){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
var or__4131__auto__ = cljs.core.deref.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (!(cljs.pprint.tokens_fit_QMARK_.call(null,this$,subsection)));
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_.call(null,this$,lb,section);
}
}
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"mandatory","mandatory",542802336),(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first.call(null,buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq.call(null,cljs.core.take_while.call(null,((function (nl,lb){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return (function (p1__16893_SHARP_){
return (!(((cljs.pprint.nl_t_QMARK_.call(null,p1__16893_SHARP_)) && (cljs.pprint.ancestor_QMARK_.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__16893_SHARP_),lb)))));
=======
return (function (p1__10102_SHARP_){
return (!(((cljs.pprint.nl_t_QMARK_.call(null,p1__10102_SHARP_)) && (cljs.pprint.ancestor_QMARK_.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__10102_SHARP_),lb)))));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});})(nl,lb))
,cljs.core.next.call(null,buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq.call(null,cljs.core.drop.call(null,(cljs.core.count.call(null,section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first.call(null,buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq.call(null,cljs.core.take_while.call(null,((function (nl,lb){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return (function (p1__16894_SHARP_){
var nl_lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__16894_SHARP_);
return (!(((cljs.pprint.nl_t_QMARK_.call(null,p1__16894_SHARP_)) && (((cljs.core._EQ_.call(null,nl_lb,lb)) || (cljs.pprint.ancestor_QMARK_.call(null,nl_lb,lb)))))));
=======
return (function (p1__10103_SHARP_){
var nl_lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__10103_SHARP_);
return (!(((cljs.pprint.nl_t_QMARK_.call(null,p1__10103_SHARP_)) && (((cljs.core._EQ_.call(null,nl_lb,lb)) || (cljs.pprint.ancestor_QMARK_.call(null,nl_lb,lb)))))));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});})(nl,lb))
,cljs.core.next.call(null,buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb),true);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb),true);

var lb__$1 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var G__16895 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__16895;
=======
var G__10104 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__10104;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var istr_16896 = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(cljs.core.deref.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count.call(null,prefix))," "));
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),istr_16896);
=======
var istr_10105 = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(cljs.core.deref.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count.call(null,prefix))," "));
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),istr_10105);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js

return cljs.pprint.update_nl_state.call(null,lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var pre = cljs.core.seq.call(null,cljs.core.take_while.call(null,(function (p1__16897_SHARP_){
return (!(cljs.pprint.nl_t_QMARK_.call(null,p1__16897_SHARP_)));
=======
var pre = cljs.core.seq.call(null,cljs.core.take_while.call(null,(function (p1__10106_SHARP_){
return (!(cljs.pprint.nl_t_QMARK_.call(null,p1__10106_SHARP_)));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__16898 = cljs.pprint.split_at_newline.call(null,tokens);
var a = cljs.core.nth.call(null,vec__16898,(0),null);
var b = cljs.core.nth.call(null,vec__16898,(1),null);
=======
var vec__10107 = cljs.pprint.split_at_newline.call(null,tokens);
var a = cljs.core.nth.call(null,vec__10107,(0),null);
var b = cljs.core.nth.call(null,vec__10107,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens.call(null,this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__16901 = cljs.pprint.get_section.call(null,b);
var section = cljs.core.nth.call(null,vec__16901,(0),null);
var remainder = cljs.core.nth.call(null,vec__16901,(1),null);
=======
var vec__10110 = cljs.pprint.get_section.call(null,b);
var section = cljs.core.nth.call(null,vec__10110,(0),null);
var remainder = cljs.core.nth.call(null,vec__10110,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
var newl = cljs.core.first.call(null,b);
var do_nl = cljs.pprint.emit_nl_QMARK_.call(null,newl,this$,section,cljs.pprint.get_sub_section.call(null,b));
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl.call(null,this$,newl);

return cljs.core.next.call(null,b);
})()
:b);
var long_section = (!(cljs.pprint.tokens_fit_QMARK_.call(null,this$,result)));
var result__$1 = ((long_section)?(function (){var rem2 = cljs.pprint.write_token_string.call(null,this$,section);
if(cljs.core._EQ_.call(null,rem2,section)){
cljs.pprint.write_tokens.call(null,this$,section,false);

return remainder;
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
while(true){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,buffer));

if((!(cljs.pprint.tokens_fit_QMARK_.call(null,this$,buffer)))){
var new_buffer = cljs.pprint.write_token_string.call(null,this$,buffer);
if((!((buffer === new_buffer)))){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var G__16904 = new_buffer;
buffer = G__16904;
=======
var G__10113 = new_buffer;
buffer = G__10113;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.conj.call(null,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),token));

if((!(cljs.pprint.tokens_fit_QMARK_.call(null,this$,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))))))){
return cljs.pprint.write_line.call(null,this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line.call(null,this$);

var temp__5718__auto__ = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5718__auto__)){
var buf = temp__5718__auto__;
cljs.pprint.write_tokens.call(null,this$,buf,true);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__5720__auto__ = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5720__auto__)){
var tws = temp__5720__auto__;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.call(null,s,"\n",(-1));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,lines),(1))){
return s;
} else {
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)))));
var l = cljs.core.first.call(null,lines);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"buffering","buffering",-876713613),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))))){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var oldpos_16909 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos_16910 = (oldpos_16909 + cljs.core.count.call(null,l));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_16910);

cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_buffer_blob.call(null,l,null,oldpos_16909,newpos_16910));
=======
var oldpos_10118 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos_10119 = (oldpos_10118 + cljs.core.count.call(null,l));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_10119);

cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_buffer_blob.call(null,l,null,oldpos_10118,newpos_10119));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js

cljs.pprint.write_buffered_output.call(null,this$);
} else {
cljs.pprint.write_white_space.call(null,this$);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l);
}

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),"\n");

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var seq__16905_16911 = cljs.core.seq.call(null,cljs.core.next.call(null,cljs.core.butlast.call(null,lines)));
var chunk__16906_16912 = null;
var count__16907_16913 = (0);
var i__16908_16914 = (0);
while(true){
if((i__16908_16914 < count__16907_16913)){
var l_16915__$1 = cljs.core._nth.call(null,chunk__16906_16912,i__16908_16914);
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l_16915__$1);
=======
var seq__10114_10120 = cljs.core.seq.call(null,cljs.core.next.call(null,cljs.core.butlast.call(null,lines)));
var chunk__10115_10121 = null;
var count__10116_10122 = (0);
var i__10117_10123 = (0);
while(true){
if((i__10117_10123 < count__10116_10122)){
var l_10124__$1 = cljs.core._nth.call(null,chunk__10115_10121,i__10117_10123);
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l_10124__$1);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}


<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var G__16916 = seq__16905_16911;
var G__16917 = chunk__16906_16912;
var G__16918 = count__16907_16913;
var G__16919 = (i__16908_16914 + (1));
seq__16905_16911 = G__16916;
chunk__16906_16912 = G__16917;
count__16907_16913 = G__16918;
i__16908_16914 = G__16919;
continue;
} else {
var temp__5720__auto___16920 = cljs.core.seq.call(null,seq__16905_16911);
if(temp__5720__auto___16920){
var seq__16905_16921__$1 = temp__5720__auto___16920;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16905_16921__$1)){
var c__4550__auto___16922 = cljs.core.chunk_first.call(null,seq__16905_16921__$1);
var G__16923 = cljs.core.chunk_rest.call(null,seq__16905_16921__$1);
var G__16924 = c__4550__auto___16922;
var G__16925 = cljs.core.count.call(null,c__4550__auto___16922);
var G__16926 = (0);
seq__16905_16911 = G__16923;
chunk__16906_16912 = G__16924;
count__16907_16913 = G__16925;
i__16908_16914 = G__16926;
continue;
} else {
var l_16927__$1 = cljs.core.first.call(null,seq__16905_16921__$1);
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l_16927__$1);
=======
var G__10125 = seq__10114_10120;
var G__10126 = chunk__10115_10121;
var G__10127 = count__10116_10122;
var G__10128 = (i__10117_10123 + (1));
seq__10114_10120 = G__10125;
chunk__10115_10121 = G__10126;
count__10116_10122 = G__10127;
i__10117_10123 = G__10128;
continue;
} else {
var temp__5720__auto___10129 = cljs.core.seq.call(null,seq__10114_10120);
if(temp__5720__auto___10129){
var seq__10114_10130__$1 = temp__5720__auto___10129;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10114_10130__$1)){
var c__4550__auto___10131 = cljs.core.chunk_first.call(null,seq__10114_10130__$1);
var G__10132 = cljs.core.chunk_rest.call(null,seq__10114_10130__$1);
var G__10133 = c__4550__auto___10131;
var G__10134 = cljs.core.count.call(null,c__4550__auto___10131);
var G__10135 = (0);
seq__10114_10120 = G__10132;
chunk__10115_10121 = G__10133;
count__10116_10122 = G__10134;
i__10117_10123 = G__10135;
continue;
} else {
var l_10136__$1 = cljs.core.first.call(null,seq__10114_10130__$1);
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l_10136__$1);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}


<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var G__16928 = cljs.core.next.call(null,seq__16905_16921__$1);
var G__16929 = null;
var G__16930 = (0);
var G__16931 = (0);
seq__16905_16911 = G__16928;
chunk__16906_16912 = G__16929;
count__16907_16913 = G__16930;
i__16908_16914 = G__16931;
=======
var G__10137 = cljs.core.next.call(null,seq__10114_10130__$1);
var G__10138 = null;
var G__10139 = (0);
var G__10140 = (0);
seq__10114_10120 = G__10137;
chunk__10115_10121 = G__10138;
count__10116_10122 = G__10139;
i__10117_10123 = G__10140;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffering","buffering",-876713613),new cljs.core.Keyword(null,"writing","writing",-1486865108));

return cljs.core.last.call(null,lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),c);
} else {
if(cljs.core._EQ_.call(null,c,"\n")){
return cljs.pprint.write_initial_lines.call(null,this$,"\n");
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_buffer_blob.call(null,cljs.core.char$.call(null,c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,false),cljs.core.atom.call(null,false),null,null,null,null,null,null,null));
var fields = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437),new cljs.core.Keyword(null,"buffer-block","buffer-block",-10937307),new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267),new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"buffer-level","buffer-level",928864731),new cljs.core.Keyword(null,"buffer","buffer",617295198)],[lb,miser_width,lb,true,null,new cljs.core.Keyword(null,"writing","writing",-1486865108),(0),null,cljs.pprint.column_writer.call(null,writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint16932 !== 'undefined')){
=======
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint10141 !== 'undefined')){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.t_cljs$pprint16932 = (function (writer,max_columns,miser_width,lb,fields,meta16933){
=======
cljs.pprint.t_cljs$pprint10141 = (function (writer,max_columns,miser_width,lb,fields,meta10142){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
this.meta16933 = meta16933;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint16932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (lb,fields){
return (function (_16934,meta16933__$1){
var self__ = this;
var _16934__$1 = this;
return (new cljs.pprint.t_cljs$pprint16932(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta16933__$1));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint16932.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (lb,fields){
return (function (_16934){
var self__ = this;
var _16934__$1 = this;
return self__.meta16933;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint16932.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (lb,fields){
=======
this.meta10142 = meta10142;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint10141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (lb,fields){
return (function (_10143,meta10142__$1){
var self__ = this;
var _10143__$1 = this;
return (new cljs.pprint.t_cljs$pprint10141(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta10142__$1));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint10141.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (lb,fields){
return (function (_10143){
var self__ = this;
var _10143__$1 = this;
return self__.meta10142;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint10141.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (lb,fields){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(lb,fields))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.t_cljs$pprint16932.prototype.cljs$core$IWriter$_write$arity$2 = ((function (lb,fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__16935 = cljs.core._EQ_;
var expr__16936 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__16935.call(null,String,expr__16936))){
=======
cljs.pprint.t_cljs$pprint10141.prototype.cljs$core$IWriter$_write$arity$2 = ((function (lb,fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__10144 = cljs.core._EQ_;
var expr__10145 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__10144.call(null,String,expr__10145))){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
var s0 = cljs.pprint.write_initial_lines.call(null,this$__$1,x);
var s = clojure.string.replace_first.call(null,s0,/\s+$/,"");
var white_space = cljs.core.subs.call(null,s0,cljs.core.count.call(null,s));
var mode = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1)));
if(cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$__$1);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),s);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),white_space);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1)));
var newpos = (oldpos + cljs.core.count.call(null,s0));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer.call(null,this$__$1,cljs.pprint.make_buffer_blob.call(null,s,white_space,oldpos,newpos));
}
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
if(cljs.core.truth_(pred__16935.call(null,Number,expr__16936))){
return cljs.pprint.p_write_char.call(null,this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__16936)].join('')));
=======
if(cljs.core.truth_(pred__10144.call(null,Number,expr__10145))){
return cljs.pprint.p_write_char.call(null,this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__10145)].join('')));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}
}
});})(lb,fields))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.t_cljs$pprint16932.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (lb,fields){
=======
cljs.pprint.t_cljs$pprint10141.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (lb,fields){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
return (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.pprint._ppflush.call(null,this$__$1);

return cljs.core._flush.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))));
});})(lb,fields))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.t_cljs$pprint16932.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.t_cljs$pprint16932.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = ((function (lb,fields){
=======
cljs.pprint.t_cljs$pprint10141.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.t_cljs$pprint10141.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = ((function (lb,fields){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),new cljs.core.Keyword(null,"buffering","buffering",-876713613))){
cljs.pprint.write_tokens.call(null,this$__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),true);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space.call(null,this$__$1);
}
});})(lb,fields))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.t_cljs$pprint16932.getBasis = ((function (lb,fields){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"miser-width","miser-width",330482090,null),new cljs.core.Symbol(null,"lb","lb",950310490,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta16933","meta16933",-986406734,null)], null);
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint16932.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint16932.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint16932";

cljs.pprint.t_cljs$pprint16932.cljs$lang$ctorPrWriter = ((function (lb,fields){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.pprint/t_cljs$pprint16932");
=======
cljs.pprint.t_cljs$pprint10141.getBasis = ((function (lb,fields){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"miser-width","miser-width",330482090,null),new cljs.core.Symbol(null,"lb","lb",950310490,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta10142","meta10142",-472381917,null)], null);
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint10141.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint10141.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint10141";

cljs.pprint.t_cljs$pprint10141.cljs$lang$ctorPrWriter = ((function (lb,fields){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.pprint/t_cljs$pprint10141");
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});})(lb,fields))
;

/**
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
 * Positional factory function for cljs.pprint/t_cljs$pprint16932.
 */
cljs.pprint.__GT_t_cljs$pprint16932 = ((function (lb,fields){
return (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint16932(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta16933){
return (new cljs.pprint.t_cljs$pprint16932(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta16933));
=======
 * Positional factory function for cljs.pprint/t_cljs$pprint10141.
 */
cljs.pprint.__GT_t_cljs$pprint10141 = ((function (lb,fields){
return (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint10141(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta10142){
return (new cljs.pprint.t_cljs$pprint10141(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta10142));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});})(lb,fields))
;

}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return (new cljs.pprint.t_cljs$pprint16932(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new cljs.pprint.t_cljs$pprint10141(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),null,cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,false),cljs.core.atom.call(null,false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),lb);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var temp__5720__auto___16938 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5720__auto___16938)){
var cb_16939 = temp__5720__auto___16938;
cb_16939.call(null,new cljs.core.Keyword(null,"start","start",-355208981));
=======
var temp__5720__auto___10147 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5720__auto___10147)){
var cb_10148 = temp__5720__auto___10147;
cb_10148.call(null,new cljs.core.Keyword(null,"start","start",-355208981));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var col = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),col);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count.call(null,prefix):(0)));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_start_block_t.call(null,lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var suffix = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

if(cljs.core.truth_(suffix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),suffix);
} else {
}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var temp__5720__auto___16940 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5720__auto___16940)){
var cb_16941 = temp__5720__auto___16940;
cb_16941.call(null,new cljs.core.Keyword(null,"end","end",-268185958));
} else {
}
} else {
var oldpos_16942 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos_16943 = (oldpos_16942 + (cljs.core.truth_(suffix)?cljs.core.count.call(null,suffix):(0)));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_16943);

cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_end_block_t.call(null,lb,oldpos_16942,newpos_16943));
=======
var temp__5720__auto___10149 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5720__auto___10149)){
var cb_10150 = temp__5720__auto___10149;
cb_10150.call(null,new cljs.core.Keyword(null,"end","end",-268185958));
} else {
}
} else {
var oldpos_10151 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos_10152 = (oldpos_10151 + (cljs.core.truth_(suffix)?cljs.core.count.call(null,suffix):(0)));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_10152);

cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_end_block_t.call(null,lb,oldpos_10151,newpos_10152));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"buffering","buffering",-876713613));

var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_nl_t.call(null,type,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__16944 = cljs.core._EQ_;
var expr__16945 = relative_to;
if(cljs.core.truth_(pred__16944.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__16945))){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_(pred__16944.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__16945))){
return cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__16945)].join('')));
=======
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__10153 = cljs.core._EQ_;
var expr__10154 = relative_to;
if(cljs.core.truth_(pred__10153.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__10154))){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_(pred__10153.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__10154))){
return cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__10154)].join('')));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}
}
})()));
} else {
var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_indent_t.call(null,lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined')){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base* 
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p1__16947_SHARP_){
var temp__5720__auto__ = cljs.core.get.call(null,t,cljs.core.key.call(null,p1__16947_SHARP_));
if(cljs.core.truth_(temp__5720__auto__)){
var v = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val.call(null,p1__16947_SHARP_)], null);
=======
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p1__10156_SHARP_){
var temp__5720__auto__ = cljs.core.get.call(null,t,cljs.core.key.call(null,p1__10156_SHARP_));
if(cljs.core.truth_(temp__5720__auto__)){
var v = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val.call(null,p1__10156_SHARP_)], null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
} else {
return null;
}
}),m));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
var and__4120__auto__ = (((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x));
if(and__4120__auto__){
return new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,x)));
} else {
return and__4120__auto__;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer.call(null,base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface. 
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__4120__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__4120__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
if((!(cljs.pprint._STAR_print_pretty_STAR_))){
cljs.pprint.pr.call(null,object);
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1));
} else {
}

cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object);
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 *   Keyword              Meaning                              Default value
 *   :stream              Writer for output or nil             true (indicates *out*)
 *   :base                Base to use for writing rationals    Current value of *print-base*
 *   :circle*             If true, mark circular structures    Current value of *print-circle*
 *   :length              Maximum elements to show in sublists Current value of *print-length*
 *   :level               Maximum depth                        Current value of *print-level*
 *   :lines*              Maximum lines of output              Current value of *print-lines*
 *   :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 *   :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 *   :pretty              If true, do pretty printing          Current value of *print-pretty*
 *   :radix               If true, prepend a radix specifier   Current value of *print-radix*
 *   :readably*           If true, print readably              Current value of *print-readably*
 *   :right-margin        The column for the right margin      Current value of *print-right-margin*
 *   :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 *   * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(var_args){
var args__4736__auto__ = [];
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var len__4730__auto___16980 = arguments.length;
var i__4731__auto___16981 = (0);
while(true){
if((i__4731__auto___16981 < len__4730__auto___16980)){
args__4736__auto__.push((arguments[i__4731__auto___16981]));

var G__16982 = (i__4731__auto___16981 + (1));
i__4731__auto___16981 = G__16982;
=======
var len__4730__auto___10189 = arguments.length;
var i__4731__auto___10190 = (0);
while(true){
if((i__4731__auto___10190 < len__4730__auto___10189)){
args__4736__auto__.push((arguments[i__4731__auto___10190]));

var G__10191 = (i__4731__auto___10190 + (1));
i__4731__auto___10190 = G__10191;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stream","stream",1534941648),true], null),cljs.core.apply.call(null,cljs.core.hash_map,kw_args));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var _STAR_print_base_STAR__orig_val__16952 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR__orig_val__16953 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR__orig_val__16954 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__16955 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR__orig_val__16956 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR__orig_val__16957 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR__orig_val__16958 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR__orig_val__16959 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR__orig_val__16960 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR__orig_val__16961 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR__orig_val__16962 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR__orig_val__16963 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
var _STAR_print_base_STAR__temp_val__16964 = new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);
var _STAR_print_circle_STAR__temp_val__16965 = new cljs.core.Keyword(null,"circle","circle",1903212362).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);
var _STAR_print_length_STAR__temp_val__16966 = new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);
var _STAR_print_level_STAR__temp_val__16967 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);
var _STAR_print_lines_STAR__temp_val__16968 = new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);
var _STAR_print_miser_width_STAR__temp_val__16969 = new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);
var _STAR_print_pprint_dispatch_STAR__temp_val__16970 = new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);
var _STAR_print_pretty_STAR__temp_val__16971 = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);
var _STAR_print_radix_STAR__temp_val__16972 = new cljs.core.Keyword(null,"radix","radix",857016463).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);
var _STAR_print_readably_STAR__temp_val__16973 = new cljs.core.Keyword(null,"readably","readably",1129599760).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);
var _STAR_print_right_margin_STAR__temp_val__16974 = new cljs.core.Keyword(null,"right-margin","right-margin",-810413306).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);
var _STAR_print_suppress_namespaces_STAR__temp_val__16975 = new cljs.core.Keyword(null,"suppress-namespaces","suppress-namespaces",2130686956).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);
cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR__temp_val__16964;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR__temp_val__16965;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__16966;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__16967;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR__temp_val__16968;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__temp_val__16969;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__16970;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__temp_val__16971;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR__temp_val__16972;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__16973;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__temp_val__16974;

cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR__temp_val__16975;
=======
var _STAR_print_base_STAR__orig_val__10161 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR__orig_val__10162 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR__orig_val__10163 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__10164 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR__orig_val__10165 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR__orig_val__10166 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR__orig_val__10167 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR__orig_val__10168 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR__orig_val__10169 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR__orig_val__10170 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR__orig_val__10171 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR__orig_val__10172 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
var _STAR_print_base_STAR__temp_val__10173 = new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);
var _STAR_print_circle_STAR__temp_val__10174 = new cljs.core.Keyword(null,"circle","circle",1903212362).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);
var _STAR_print_length_STAR__temp_val__10175 = new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);
var _STAR_print_level_STAR__temp_val__10176 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);
var _STAR_print_lines_STAR__temp_val__10177 = new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);
var _STAR_print_miser_width_STAR__temp_val__10178 = new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);
var _STAR_print_pprint_dispatch_STAR__temp_val__10179 = new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);
var _STAR_print_pretty_STAR__temp_val__10180 = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);
var _STAR_print_radix_STAR__temp_val__10181 = new cljs.core.Keyword(null,"radix","radix",857016463).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);
var _STAR_print_readably_STAR__temp_val__10182 = new cljs.core.Keyword(null,"readably","readably",1129599760).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);
var _STAR_print_right_margin_STAR__temp_val__10183 = new cljs.core.Keyword(null,"right-margin","right-margin",-810413306).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);
var _STAR_print_suppress_namespaces_STAR__temp_val__10184 = new cljs.core.Keyword(null,"suppress-namespaces","suppress-namespaces",2130686956).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);
cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR__temp_val__10173;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR__temp_val__10174;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__10175;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__10176;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR__temp_val__10177;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__temp_val__10178;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__10179;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__temp_val__10180;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR__temp_val__10181;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__10182;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__temp_val__10183;

cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR__temp_val__10184;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_.call(null,options,new cljs.core.Keyword(null,"stream","stream",1534941648)))?new cljs.core.Keyword(null,"stream","stream",1534941648).cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = ((((optval === true) || ((optval == null))))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.pprint._STAR_print_pretty_STAR_){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var base_writer__16579__auto___16983 = base_writer;
var new_writer__16580__auto___16984 = cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,base_writer__16579__auto___16983));
var _STAR_out_STAR__orig_val__16976_16985 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__16977_16986 = ((new_writer__16580__auto___16984)?cljs.pprint.make_pretty_writer.call(null,base_writer__16579__auto___16983,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__16579__auto___16983);
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__16977_16986;
=======
var base_writer__9788__auto___10192 = base_writer;
var new_writer__9789__auto___10193 = cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,base_writer__9788__auto___10192));
var _STAR_out_STAR__orig_val__10185_10194 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__10186_10195 = ((new_writer__9789__auto___10193)?cljs.pprint.make_pretty_writer.call(null,base_writer__9788__auto___10192,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__9788__auto___10192);
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__10186_10195;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js

try{cljs.pprint.write_out.call(null,object);

cljs.pprint._ppflush.call(null,cljs.core._STAR_out_STAR_);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__16976_16985;
}} else {
var _STAR_out_STAR__orig_val__16978_16987 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__16979_16988 = base_writer;
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__16979_16988;

try{cljs.pprint.pr.call(null,object);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__16978_16987;
=======
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__10185_10194;
}} else {
var _STAR_out_STAR__orig_val__10187_10196 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__10188_10197 = base_writer;
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__10188_10197;

try{cljs.pprint.pr.call(null,object);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__10187_10196;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}}

if(optval === true){
cljs.core.string_print.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
} else {
}

if((optval == null)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
return null;
}
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
}finally {}}finally {cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR__orig_val__16963;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__orig_val__16962;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__16961;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR__orig_val__16960;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__orig_val__16959;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__16958;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__orig_val__16957;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR__orig_val__16956;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__16955;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__16954;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR__orig_val__16953;

cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR__orig_val__16952;
=======
}finally {}}finally {cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR__orig_val__10172;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__orig_val__10171;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__10170;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR__orig_val__10169;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__orig_val__10168;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__10167;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__orig_val__10166;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR__orig_val__10165;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__10164;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__10163;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR__orig_val__10162;

cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR__orig_val__10161;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}});

cljs.pprint.write.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.write.cljs$lang$applyTo = (function (seq16950){
var G__16951 = cljs.core.first.call(null,seq16950);
var seq16950__$1 = cljs.core.next.call(null,seq16950);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16951,seq16950__$1);
});

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var G__16990 = arguments.length;
switch (G__16990) {
=======
cljs.pprint.write.cljs$lang$applyTo = (function (seq10159){
var G__10160 = cljs.core.first.call(null,seq10159);
var seq10159__$1 = cljs.core.next.call(null,seq10159);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10160,seq10159__$1);
});

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var G__10199 = arguments.length;
switch (G__10199) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
case 1:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var _STAR_out_STAR__orig_val__16991 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__16992 = (new cljs.core.StringBufferWriter(sb));
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__16992;
=======
var _STAR_out_STAR__orig_val__10200 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__10201 = (new cljs.core.StringBufferWriter(sb));
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__10201;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js

try{cljs.pprint.pprint.call(null,object,cljs.core._STAR_out_STAR_);

return cljs.core.string_print.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__16991;
}});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__16579__auto__ = writer;
var new_writer__16580__auto__ = cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,base_writer__16579__auto__));
var _STAR_out_STAR__orig_val__16993 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__16994 = ((new_writer__16580__auto__)?cljs.pprint.make_pretty_writer.call(null,base_writer__16579__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__16579__auto__);
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__16994;

try{var _STAR_print_pretty_STAR__orig_val__16995_16998 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_pretty_STAR__temp_val__16996_16999 = true;
cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__temp_val__16996_16999;

try{cljs.pprint.write_out.call(null,object);
}finally {cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__orig_val__16995_16998;
=======
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__10200;
}});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__9788__auto__ = writer;
var new_writer__9789__auto__ = cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,base_writer__9788__auto__));
var _STAR_out_STAR__orig_val__10202 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__10203 = ((new_writer__9789__auto__)?cljs.pprint.make_pretty_writer.call(null,base_writer__9788__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__9788__auto__);
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__10203;

try{var _STAR_print_pretty_STAR__orig_val__10204_10207 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_pretty_STAR__temp_val__10205_10208 = true;
cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__temp_val__10205_10208;

try{cljs.pprint.write_out.call(null,object);
}finally {cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__orig_val__10204_10207;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}
if((!(cljs.core._EQ_.call(null,(0),cljs.pprint.get_column.call(null,cljs.core._STAR_out_STAR_))))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush.call(null,cljs.core._STAR_out_STAR_);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__16993;
=======
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__10202;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}});

cljs.pprint.pprint.cljs$lang$maxFixedArity = 2;

cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$;

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not.call(null,choices.call(null,arg))){
throw (new Error(["Bad argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg),". It must be one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__4120__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__4120__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__4120__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 *   newline is :linear, :miser, :fill, or :mandatory.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg.call(null,kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mandatory","mandatory",542802336),null,new cljs.core.Keyword(null,"miser","miser",-556060186),null,new cljs.core.Keyword(null,"fill","fill",883462889),null,new cljs.core.Keyword(null,"linear","linear",872268697),null], null), null));

return cljs.pprint.nl.call(null,cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg.call(null,relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),null,new cljs.core.Keyword(null,"current","current",-1088038603),null], null), null));

return cljs.pprint.indent.call(null,cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg.call(null,kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"line-relative","line-relative",1149548219),null,new cljs.core.Keyword(null,"section-relative","section-relative",-658298724),null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 *  (let [results [46 38 22]]
 *      (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 *                 (count results) results))
 * 
 * Prints via *print-fn*:
 *  There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(var_args){
var args__4736__auto__ = [];
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var len__4730__auto___17003 = arguments.length;
var i__4731__auto___17004 = (0);
while(true){
if((i__4731__auto___17004 < len__4730__auto___17003)){
args__4736__auto__.push((arguments[i__4731__auto___17004]));

var G__17005 = (i__4731__auto___17004 + (1));
i__4731__auto___17004 = G__17005;
=======
var len__4730__auto___10212 = arguments.length;
var i__4731__auto___10213 = (0);
while(true){
if((i__4731__auto___10213 < len__4730__auto___10212)){
args__4736__auto__.push((arguments[i__4731__auto___10213]));

var G__10214 = (i__4731__auto___10213 + (1));
i__4731__auto___10213 = G__10214;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?cljs.pprint.compile_format.call(null,format_in):format_in);
var navigator = cljs.pprint.init_navigator.call(null,args);
return cljs.pprint.execute_format.call(null,writer,compiled_format,navigator);
});

cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq17000){
var G__17001 = cljs.core.first.call(null,seq17000);
var seq17000__$1 = cljs.core.next.call(null,seq17000);
var G__17002 = cljs.core.first.call(null,seq17000__$1);
var seq17000__$2 = cljs.core.next.call(null,seq17000__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17001,G__17002,seq17000__$2);
=======
cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq10209){
var G__10210 = cljs.core.first.call(null,seq10209);
var seq10209__$1 = cljs.core.next.call(null,seq10209);
var G__10211 = cljs.core.first.call(null,seq10209__$1);
var seq10209__$2 = cljs.core.next.call(null,seq10209__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10210,G__10211,seq10209__$2);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});

cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),"\n",cljs.pprint._STAR_format_str_STAR_,"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,offset," "))),"^","\n"].join('');
throw Error(full_message);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k17007,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__17011 = k17007;
var G__17011__$1 = (((G__17011 instanceof cljs.core.Keyword))?G__17011.fqn:null);
switch (G__17011__$1) {
=======
cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k10216,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__10220 = k10216;
var G__10220__$1 = (((G__10220 instanceof cljs.core.Keyword))?G__10220.fqn:null);
switch (G__10220__$1) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return cljs.core.get.call(null,self__.__extmap,k17007,else__4388__auto__);
=======
return cljs.core.get.call(null,self__.__extmap,k10216,else__4388__auto__);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js

}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return (function (ret__4407__auto__,p__17012){
var vec__17013 = p__17012;
var k__4408__auto__ = cljs.core.nth.call(null,vec__17013,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__17013,(1),null);
=======
return (function (ret__4407__auto__,p__10221){
var vec__10222 = p__10221;
var k__4408__auto__ = cljs.core.nth.call(null,vec__10222,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__10222,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17006){
var self__ = this;
var G__17006__$1 = this;
return (new cljs.core.RecordIter((0),G__17006__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
=======
cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10215){
var self__ = this;
var G__10215__$1 = this;
return (new cljs.core.RecordIter((0),G__10215__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-402038447 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17008,other17009){
var self__ = this;
var this17008__$1 = this;
return (((!((other17009 == null)))) && ((this17008__$1.constructor === other17009.constructor)) && (cljs.core._EQ_.call(null,this17008__$1.seq,other17009.seq)) && (cljs.core._EQ_.call(null,this17008__$1.rest,other17009.rest)) && (cljs.core._EQ_.call(null,this17008__$1.pos,other17009.pos)) && (cljs.core._EQ_.call(null,this17008__$1.__extmap,other17009.__extmap)));
=======
cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this10217,other10218){
var self__ = this;
var this10217__$1 = this;
return (((!((other10218 == null)))) && ((this10217__$1.constructor === other10218.constructor)) && (cljs.core._EQ_.call(null,this10217__$1.seq,other10218.seq)) && (cljs.core._EQ_.call(null,this10217__$1.rest,other10218.rest)) && (cljs.core._EQ_.call(null,this10217__$1.pos,other10218.pos)) && (cljs.core._EQ_.call(null,this10217__$1.__extmap,other10218.__extmap)));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),null,new cljs.core.Keyword(null,"seq","seq",-1817803783),null,new cljs.core.Keyword(null,"rest","rest",-1241696419),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__17006){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__17016 = cljs.core.keyword_identical_QMARK_;
var expr__17017 = k__4393__auto__;
if(cljs.core.truth_(pred__17016.call(null,new cljs.core.Keyword(null,"seq","seq",-1817803783),expr__17017))){
return (new cljs.pprint.arg_navigator(G__17006,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__17016.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419),expr__17017))){
return (new cljs.pprint.arg_navigator(self__.seq,G__17006,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__17016.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),expr__17017))){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__17006,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__17006),null));
=======
cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__10215){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__10225 = cljs.core.keyword_identical_QMARK_;
var expr__10226 = k__4393__auto__;
if(cljs.core.truth_(pred__10225.call(null,new cljs.core.Keyword(null,"seq","seq",-1817803783),expr__10226))){
return (new cljs.pprint.arg_navigator(G__10215,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10225.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419),expr__10226))){
return (new cljs.pprint.arg_navigator(self__.seq,G__10215,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10225.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),expr__10226))){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__10215,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__10215),null));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}
}
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos,null))], null),self__.__extmap));
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__17006){
var self__ = this;
var this__4384__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__17006,self__.__extmap,self__.__hash));
=======
cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__10215){
var self__ = this;
var this__4384__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__10215,self__.__extmap,self__.__hash));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"rest","rest",398835108,null),new cljs.core.Symbol(null,"pos","pos",775924307,null)], null);
});

cljs.pprint.arg_navigator.cljs$lang$type = true;

cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"cljs.pprint/arg-navigator",null,(1),null));
});

cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.pprint/arg-navigator");
});

/**
 * Positional factory function for cljs.pprint/arg-navigator.
 */
cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/arg-navigator, taking a map of keywords to field values.
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__17010){
var extmap__4424__auto__ = (function (){var G__17019 = cljs.core.dissoc.call(null,G__17010,new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220));
if(cljs.core.record_QMARK_.call(null,G__17010)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__17019);
} else {
return G__17019;
}
})();
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(G__17010),new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(G__17010),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__17010),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
=======
cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__10219){
var extmap__4424__auto__ = (function (){var G__10228 = cljs.core.dissoc.call(null,G__10219,new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220));
if(cljs.core.record_QMARK_.call(null,G__10219)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__10228);
} else {
return G__10228;
}
})();
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(G__10219),new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(G__10219),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__10219),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq.call(null,s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next.call(null,rst),(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next.call(null,rst),(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__17021 = cljs.pprint.next_arg.call(null,navigator);
var raw_format = cljs.core.nth.call(null,vec__17021,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__17021,(1),null);
=======
var vec__10230 = cljs.pprint.next_arg.call(null,navigator);
var raw_format = cljs.core.nth.call(null,vec__10230,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__10230,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
var compiled_format = ((typeof raw_format === 'string')?cljs.pprint.compile_format.call(null,raw_format):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator))){
return cljs.pprint.relative_reposition.call(null,navigator,(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) - position));
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.call(null,position,new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition.call(null,navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.call(null,position,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k17025,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__17029 = k17025;
var G__17029__$1 = (((G__17029 instanceof cljs.core.Keyword))?G__17029.fqn:null);
switch (G__17029__$1) {
=======
cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k10234,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__10238 = k10234;
var G__10238__$1 = (((G__10238 instanceof cljs.core.Keyword))?G__10238.fqn:null);
switch (G__10238__$1) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return cljs.core.get.call(null,self__.__extmap,k17025,else__4388__auto__);
=======
return cljs.core.get.call(null,self__.__extmap,k10234,else__4388__auto__);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js

}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return (function (ret__4407__auto__,p__17030){
var vec__17031 = p__17030;
var k__4408__auto__ = cljs.core.nth.call(null,vec__17031,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__17031,(1),null);
=======
return (function (ret__4407__auto__,p__10239){
var vec__10240 = p__10239;
var k__4408__auto__ = cljs.core.nth.call(null,vec__10240,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__10240,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",-238706040),self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"def","def",-1043430536),self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null))], null),self__.__extmap));
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17024){
var self__ = this;
var G__17024__$1 = this;
return (new cljs.core.RecordIter((0),G__17024__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"func","func",-238706040),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
=======
cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10233){
var self__ = this;
var G__10233__$1 = this;
return (new cljs.core.RecordIter((0),G__10233__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"func","func",-238706040),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-829256337 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17026,other17027){
var self__ = this;
var this17026__$1 = this;
return (((!((other17027 == null)))) && ((this17026__$1.constructor === other17027.constructor)) && (cljs.core._EQ_.call(null,this17026__$1.func,other17027.func)) && (cljs.core._EQ_.call(null,this17026__$1.def,other17027.def)) && (cljs.core._EQ_.call(null,this17026__$1.params,other17027.params)) && (cljs.core._EQ_.call(null,this17026__$1.offset,other17027.offset)) && (cljs.core._EQ_.call(null,this17026__$1.__extmap,other17027.__extmap)));
=======
cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this10235,other10236){
var self__ = this;
var this10235__$1 = this;
return (((!((other10236 == null)))) && ((this10235__$1.constructor === other10236.constructor)) && (cljs.core._EQ_.call(null,this10235__$1.func,other10236.func)) && (cljs.core._EQ_.call(null,this10235__$1.def,other10236.def)) && (cljs.core._EQ_.call(null,this10235__$1.params,other10236.params)) && (cljs.core._EQ_.call(null,this10235__$1.offset,other10236.offset)) && (cljs.core._EQ_.call(null,this10235__$1.__extmap,other10236.__extmap)));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"func","func",-238706040),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"def","def",-1043430536),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__17024){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__17034 = cljs.core.keyword_identical_QMARK_;
var expr__17035 = k__4393__auto__;
if(cljs.core.truth_(pred__17034.call(null,new cljs.core.Keyword(null,"func","func",-238706040),expr__17035))){
return (new cljs.pprint.compiled_directive(G__17024,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__17034.call(null,new cljs.core.Keyword(null,"def","def",-1043430536),expr__17035))){
return (new cljs.pprint.compiled_directive(self__.func,G__17024,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__17034.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__17035))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__17024,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__17034.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__17035))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__17024,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__17024),null));
=======
cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__10233){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__10243 = cljs.core.keyword_identical_QMARK_;
var expr__10244 = k__4393__auto__;
if(cljs.core.truth_(pred__10243.call(null,new cljs.core.Keyword(null,"func","func",-238706040),expr__10244))){
return (new cljs.pprint.compiled_directive(G__10233,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10243.call(null,new cljs.core.Keyword(null,"def","def",-1043430536),expr__10244))){
return (new cljs.pprint.compiled_directive(self__.func,G__10233,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10243.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__10244))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__10233,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10243.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__10244))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__10233,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__10233),null));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}
}
}
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"func","func",-238706040),self__.func,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"def","def",-1043430536),self__.def,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset,null))], null),self__.__extmap));
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__17024){
var self__ = this;
var this__4384__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__17024,self__.__extmap,self__.__hash));
=======
cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__10233){
var self__ = this;
var this__4384__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__10233,self__.__extmap,self__.__hash));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null)], null);
});

cljs.pprint.compiled_directive.cljs$lang$type = true;

cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"cljs.pprint/compiled-directive",null,(1),null));
});

cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.pprint/compiled-directive");
});

/**
 * Positional factory function for cljs.pprint/compiled-directive.
 */
cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

/**
 * Factory function for cljs.pprint/compiled-directive, taking a map of keywords to field values.
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__17028){
var extmap__4424__auto__ = (function (){var G__17037 = cljs.core.dissoc.call(null,G__17028,new cljs.core.Keyword(null,"func","func",-238706040),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311));
if(cljs.core.record_QMARK_.call(null,G__17028)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__17037);
} else {
return G__17037;
}
})();
return (new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(G__17028),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(G__17028),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__17028),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__17028),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__17039,navigator){
var vec__17040 = p__17039;
var param = cljs.core.nth.call(null,vec__17040,(0),null);
var vec__17043 = cljs.core.nth.call(null,vec__17040,(1),null);
var raw_val = cljs.core.nth.call(null,vec__17043,(0),null);
var offset = cljs.core.nth.call(null,vec__17043,(1),null);
var vec__17046 = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.call(null,raw_val,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196)))?cljs.pprint.next_arg.call(null,navigator):((cljs.core._EQ_.call(null,raw_val,new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.call(null,vec__17046,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__17046,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__17049 = cljs.pprint.map_passing_context.call(null,cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.call(null,vec__17049,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__17049,(1),null);
=======
cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__10237){
var extmap__4424__auto__ = (function (){var G__10246 = cljs.core.dissoc.call(null,G__10237,new cljs.core.Keyword(null,"func","func",-238706040),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311));
if(cljs.core.record_QMARK_.call(null,G__10237)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__10246);
} else {
return G__10246;
}
})();
return (new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(G__10237),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(G__10237),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__10237),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__10237),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__10248,navigator){
var vec__10249 = p__10248;
var param = cljs.core.nth.call(null,vec__10249,(0),null);
var vec__10252 = cljs.core.nth.call(null,vec__10249,(1),null);
var raw_val = cljs.core.nth.call(null,vec__10252,(0),null);
var offset = cljs.core.nth.call(null,vec__10252,(1),null);
var vec__10255 = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.call(null,raw_val,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196)))?cljs.pprint.next_arg.call(null,navigator):((cljs.core._EQ_.call(null,raw_val,new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.call(null,vec__10255,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__10255,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__10258 = cljs.pprint.map_passing_context.call(null,cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.call(null,vec__10258,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__10258,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_.call(null,n)){
if(cljs.core._EQ_.call(null,cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),(cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__4131__auto__ = cljs.core.get.call(null,cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_print_base_STAR_),"r"].join('');
}
})():null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.opt_base_str.call(null,cljs.pprint._STAR_print_base_STAR_,n))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__17052 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__17052,(0),null);
var arg_navigator__$1 = cljs.core.nth.call(null,vec__17052,(1),null);
=======
var vec__10261 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__10261,(0),null);
var arg_navigator__$1 = cljs.core.nth.call(null,vec__10261,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
var base_output = (function (){var or__4131__auto__ = cljs.pprint.format_simple_number.call(null,arg);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return print_func.call(null,arg);
}
})();
var base_width = base_output.length;
var min_width = (base_width + new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot.call(null,((new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params)) + (1)) * new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(width - base_width),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output)].join(''));
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars)].join(''));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_.call(null,x)){
return true;
} else {
if(cljs.pprint.float_QMARK_.call(null,x)){
return cljs.core._EQ_.call(null,x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return cljs.core.reverse.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (p1__17055_SHARP_){
if((p1__17055_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem.call(null,p1__17055_SHARP_,base),cljs.core.quot.call(null,p1__17055_SHARP_,base)], null);
=======
return cljs.core.reverse.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (p1__10264_SHARP_){
if((p1__10264_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem.call(null,p1__10264_SHARP_,base),cljs.core.quot.call(null,p1__10264_SHARP_,base)], null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (xlated_val){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return (function (p1__17056_SHARP_){
if((p1__17056_SHARP_ < (10))){
return cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,"0") + p1__17056_SHARP_));
} else {
return cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,"a") + (p1__17056_SHARP_ - (10))));
=======
return (function (p1__10265_SHARP_){
if((p1__10265_SHARP_ < (10))){
return cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,"0") + p1__10265_SHARP_));
} else {
return cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,"a") + (p1__10265_SHARP_ - (10))));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}
});})(xlated_val))
,cljs.pprint.remainders.call(null,base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str.call(null,base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.reverse.call(null,cljs.core.take.call(null,unit,x))),cljs.core.seq.call(null,cljs.core.drop.call(null,unit,x))], null);
}),cljs.core.reverse.call(null,lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__17058 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__17058,(0),null);
var arg_navigator__$1 = cljs.core.nth.call(null,vec__17058,(1),null);
if(cljs.pprint.integral_QMARK_.call(null,arg)){
var neg_17061 = (arg < (0));
var pos_arg_17062 = ((neg_17061)?(- arg):arg);
var raw_str_17063 = cljs.pprint.opt_base_str.call(null,base,pos_arg_17062);
var group_str_17064 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.call(null,((function (neg_17061,pos_arg_17062,raw_str_17063,vec__17058,arg,arg_navigator__$1){
return (function (p1__17057_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,p1__17057_SHARP_);
});})(neg_17061,pos_arg_17062,raw_str_17063,vec__17058,arg,arg_navigator__$1))
,cljs.pprint.group_by_STAR_.call(null,new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083).cljs$core$IFn$_invoke$arity$1(params),raw_str_17063));
var commas = cljs.core.repeat.call(null,cljs.core.count.call(null,groups),new cljs.core.Keyword(null,"commachar","commachar",652859327).cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.next.call(null,cljs.core.interleave.call(null,commas,groups)));
})():raw_str_17063);
var signed_str_17065 = ((neg_17061)?["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_17064)].join(''):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_17064)].join(''):group_str_17064
));
var padded_str_17066 = (((signed_str_17065.length < new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - signed_str_17065.length),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_17065)].join(''):signed_str_17065);
cljs.pprint.print.call(null,padded_str_17066);
=======
var vec__10267 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__10267,(0),null);
var arg_navigator__$1 = cljs.core.nth.call(null,vec__10267,(1),null);
if(cljs.pprint.integral_QMARK_.call(null,arg)){
var neg_10270 = (arg < (0));
var pos_arg_10271 = ((neg_10270)?(- arg):arg);
var raw_str_10272 = cljs.pprint.opt_base_str.call(null,base,pos_arg_10271);
var group_str_10273 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.call(null,((function (neg_10270,pos_arg_10271,raw_str_10272,vec__10267,arg,arg_navigator__$1){
return (function (p1__10266_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,p1__10266_SHARP_);
});})(neg_10270,pos_arg_10271,raw_str_10272,vec__10267,arg,arg_navigator__$1))
,cljs.pprint.group_by_STAR_.call(null,new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083).cljs$core$IFn$_invoke$arity$1(params),raw_str_10272));
var commas = cljs.core.repeat.call(null,cljs.core.count.call(null,groups),new cljs.core.Keyword(null,"commachar","commachar",652859327).cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.next.call(null,cljs.core.interleave.call(null,commas,groups)));
})():raw_str_10272);
var signed_str_10274 = ((neg_10270)?["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_10273)].join(''):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_10273)].join(''):group_str_10273
));
var padded_str_10275 = (((signed_str_10274.length < new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - signed_str_10274.length),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_10274)].join(''):signed_str_10274);
cljs.pprint.print.call(null,padded_str_10275);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
} else {
cljs.pprint.format_ascii.call(null,cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"colinc","colinc",-584873385),(1),new cljs.core.Keyword(null,"minpad","minpad",323570901),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",1476951349),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot.call(null,num,(100));
var tens = cljs.core.rem.call(null,num,(100));
return [(((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null),(((((hundreds > (0))) && ((tens > (0)))))?" ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot.call(null,tens,(10));
var unit_digit = cljs.core.rem.call(null,tens,(10));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_tens,ten_digit):null)),(((((ten_digit > (0))) && ((unit_digit > (0)))))?"-":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 *   offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count.call(null,parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first.call(null,parts);
var remainder = cljs.core.next.call(null,parts);
while(true){
if((remainder == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,", ",acc))),(((((!(cljs.core.empty_QMARK_.call(null,this$)))) && ((!(cljs.core.empty_QMARK_.call(null,acc))))))?", ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$),(((((!(cljs.core.empty_QMARK_.call(null,this$)))) && (((pos + offset) > (0)))))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null)].join('');
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var G__17067 = ((cljs.core.empty_QMARK_.call(null,this$))?acc:cljs.core.conj.call(null,acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__17068 = (pos - (1));
var G__17069 = cljs.core.first.call(null,remainder);
var G__17070 = cljs.core.next.call(null,remainder);
acc = G__17067;
pos = G__17068;
this$ = G__17069;
remainder = G__17070;
=======
var G__10276 = ((cljs.core.empty_QMARK_.call(null,this$))?acc:cljs.core.conj.call(null,acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__10277 = (pos - (1));
var G__10278 = cljs.core.first.call(null,remainder);
var G__10279 = cljs.core.next.call(null,remainder);
acc = G__10276;
pos = G__10277;
this$ = G__10278;
remainder = G__10279;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__17071 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__17071,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__17071,(1),null);
if(cljs.core._EQ_.call(null,(0),arg)){
cljs.pprint.print.call(null,"zero");
} else {
var abs_arg_17074 = (((arg < (0)))?(- arg):arg);
var parts_17075 = cljs.pprint.remainders.call(null,(1000),abs_arg_17074);
if((cljs.core.count.call(null,parts_17075) <= cljs.core.count.call(null,cljs.pprint.english_scale_numbers))){
var parts_strs_17076 = cljs.core.map.call(null,cljs.pprint.format_simple_cardinal,parts_17075);
var full_str_17077 = cljs.pprint.add_english_scales.call(null,parts_strs_17076,(0));
cljs.pprint.print.call(null,[(((arg < (0)))?"minus ":null),full_str_17077].join(''));
=======
var vec__10280 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__10280,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__10280,(1),null);
if(cljs.core._EQ_.call(null,(0),arg)){
cljs.pprint.print.call(null,"zero");
} else {
var abs_arg_10283 = (((arg < (0)))?(- arg):arg);
var parts_10284 = cljs.pprint.remainders.call(null,(1000),abs_arg_10283);
if((cljs.core.count.call(null,parts_10284) <= cljs.core.count.call(null,cljs.pprint.english_scale_numbers))){
var parts_strs_10285 = cljs.core.map.call(null,cljs.pprint.format_simple_cardinal,parts_10284);
var full_str_10286 = cljs.pprint.add_english_scales.call(null,parts_strs_10285,(0));
cljs.pprint.print.call(null,[(((arg < (0)))?"minus ":null),full_str_10286].join(''));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 *   Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot.call(null,num,(100));
var tens = cljs.core.rem.call(null,num,(100));
return [(((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null),(((((hundreds > (0))) && ((tens > (0)))))?" ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.call(null,cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot.call(null,tens,(10));
var unit_digit = cljs.core.rem.call(null,tens,(10));
if((((ten_digit > (0))) && ((!((unit_digit > (0))))))){
return cljs.core.nth.call(null,cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_tens,ten_digit):null)),(((((ten_digit > (0))) && ((unit_digit > (0)))))?"-":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__17078 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__17078,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__17078,(1),null);
if(cljs.core._EQ_.call(null,(0),arg)){
cljs.pprint.print.call(null,"zeroth");
} else {
var abs_arg_17081 = (((arg < (0)))?(- arg):arg);
var parts_17082 = cljs.pprint.remainders.call(null,(1000),abs_arg_17081);
if((cljs.core.count.call(null,parts_17082) <= cljs.core.count.call(null,cljs.pprint.english_scale_numbers))){
var parts_strs_17083 = cljs.core.map.call(null,cljs.pprint.format_simple_cardinal,cljs.core.drop_last.call(null,parts_17082));
var head_str_17084 = cljs.pprint.add_english_scales.call(null,parts_strs_17083,(1));
var tail_str_17085 = cljs.pprint.format_simple_ordinal.call(null,cljs.core.last.call(null,parts_17082));
cljs.pprint.print.call(null,[(((arg < (0)))?"minus ":null),(((((!(cljs.core.empty_QMARK_.call(null,head_str_17084)))) && ((!(cljs.core.empty_QMARK_.call(null,tail_str_17085))))))?[head_str_17084,", ",tail_str_17085].join(''):(((!(cljs.core.empty_QMARK_.call(null,head_str_17084))))?[head_str_17084,"th"].join(''):tail_str_17085
=======
var vec__10287 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__10287,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__10287,(1),null);
if(cljs.core._EQ_.call(null,(0),arg)){
cljs.pprint.print.call(null,"zeroth");
} else {
var abs_arg_10290 = (((arg < (0)))?(- arg):arg);
var parts_10291 = cljs.pprint.remainders.call(null,(1000),abs_arg_10290);
if((cljs.core.count.call(null,parts_10291) <= cljs.core.count.call(null,cljs.pprint.english_scale_numbers))){
var parts_strs_10292 = cljs.core.map.call(null,cljs.pprint.format_simple_cardinal,cljs.core.drop_last.call(null,parts_10291));
var head_str_10293 = cljs.pprint.add_english_scales.call(null,parts_strs_10292,(1));
var tail_str_10294 = cljs.pprint.format_simple_ordinal.call(null,cljs.core.last.call(null,parts_10291));
cljs.pprint.print.call(null,[(((arg < (0)))?"minus ":null),(((((!(cljs.core.empty_QMARK_.call(null,head_str_10293)))) && ((!(cljs.core.empty_QMARK_.call(null,tail_str_10294))))))?[head_str_10293,", ",tail_str_10294].join(''):(((!(cljs.core.empty_QMARK_.call(null,head_str_10293))))?[head_str_10293,"th"].join(''):tail_str_10294
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
))].join(''));
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var low_two_digits_17086 = cljs.core.rem.call(null,arg,(100));
var not_teens_17087 = ((((11) < low_two_digits_17086)) || (((19) > low_two_digits_17086)));
var low_digit_17088 = cljs.core.rem.call(null,low_two_digits_17086,(10));
cljs.pprint.print.call(null,(((((low_digit_17088 === (1))) && (not_teens_17087)))?"st":(((((low_digit_17088 === (2))) && (not_teens_17087)))?"nd":(((((low_digit_17088 === (3))) && (not_teens_17087)))?"rd":"th"
=======
var low_two_digits_10295 = cljs.core.rem.call(null,arg,(100));
var not_teens_10296 = ((((11) < low_two_digits_10295)) || (((19) > low_two_digits_10295)));
var low_digit_10297 = cljs.core.rem.call(null,low_two_digits_10295,(10));
cljs.pprint.print.call(null,(((((low_digit_10297 === (1))) && (not_teens_10296)))?"st":(((((low_digit_10297 === (2))) && (not_teens_10296)))?"nd":(((((low_digit_10297 === (3))) && (not_teens_10296)))?"rd":"th"
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
))));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__17089 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__17089,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__17089,(1),null);
if(((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000))))){
var digits_17092 = cljs.pprint.remainders.call(null,(10),arg);
var acc_17093 = cljs.core.PersistentVector.EMPTY;
var pos_17094 = (cljs.core.count.call(null,digits_17092) - (1));
var digits_17095__$1 = digits_17092;
while(true){
if(cljs.core.empty_QMARK_.call(null,digits_17095__$1)){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,acc_17093));
} else {
var digit_17096 = cljs.core.first.call(null,digits_17095__$1);
var G__17097 = ((cljs.core._EQ_.call(null,(0),digit_17096))?acc_17093:cljs.core.conj.call(null,acc_17093,cljs.core.nth.call(null,cljs.core.nth.call(null,table,pos_17094),(digit_17096 - (1)))));
var G__17098 = (pos_17094 - (1));
var G__17099 = cljs.core.next.call(null,digits_17095__$1);
acc_17093 = G__17097;
pos_17094 = G__17098;
digits_17095__$1 = G__17099;
=======
var vec__10298 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__10298,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__10298,(1),null);
if(((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000))))){
var digits_10301 = cljs.pprint.remainders.call(null,(10),arg);
var acc_10302 = cljs.core.PersistentVector.EMPTY;
var pos_10303 = (cljs.core.count.call(null,digits_10301) - (1));
var digits_10304__$1 = digits_10301;
while(true){
if(cljs.core.empty_QMARK_.call(null,digits_10304__$1)){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,acc_10302));
} else {
var digit_10305 = cljs.core.first.call(null,digits_10304__$1);
var G__10306 = ((cljs.core._EQ_.call(null,(0),digit_10305))?acc_10302:cljs.core.conj.call(null,acc_10302,cljs.core.nth.call(null,cljs.core.nth.call(null,table,pos_10303),(digit_10305 - (1)))));
var G__10307 = (pos_10303 - (1));
var G__10308 = cljs.core.next.call(null,digits_10304__$1);
acc_10302 = G__10306;
pos_10303 = G__10307;
digits_10304__$1 = G__10308;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
}
break;
}
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman.call(null,cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman.call(null,cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__17100 = cljs.pprint.next_arg.call(null,navigator);
var c = cljs.core.nth.call(null,vec__17100,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__17100,(1),null);
=======
var vec__10309 = cljs.pprint.next_arg.call(null,navigator);
var c = cljs.core.nth.call(null,vec__10309,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__10309,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
var as_int = cljs.pprint.char_code.call(null,c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.call(null,cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.call(null,"Meta-");
} else {
}

cljs.pprint.print.call(null,(cljs.core.truth_(special)?special:(((base_char < (32)))?["Control-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$.call(null,(base_char + (64))))].join(''):((cljs.core._EQ_.call(null,base_char,(127)))?"Control-?":cljs.core.char$.call(null,base_char)
))));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__17103 = cljs.pprint.next_arg.call(null,navigator);
var c = cljs.core.nth.call(null,vec__17103,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__17103,(1),null);
var pred__17106_17109 = cljs.core._EQ_;
var expr__17107_17110 = new cljs.core.Keyword(null,"char-format","char-format",-1016499218).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(pred__17106_17109.call(null,"o",expr__17107_17110))){
cljs.pprint.cl_format.call(null,true,"\\o~3, '0o",cljs.pprint.char_code.call(null,c));
} else {
if(cljs.core.truth_(pred__17106_17109.call(null,"u",expr__17107_17110))){
cljs.pprint.cl_format.call(null,true,"\\u~4, '0x",cljs.pprint.char_code.call(null,c));
} else {
if(cljs.core.truth_(pred__17106_17109.call(null,null,expr__17107_17110))){
cljs.pprint.print_char.call(null,c);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__17107_17110)].join('')));
=======
var vec__10312 = cljs.pprint.next_arg.call(null,navigator);
var c = cljs.core.nth.call(null,vec__10312,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__10312,(1),null);
var pred__10315_10318 = cljs.core._EQ_;
var expr__10316_10319 = new cljs.core.Keyword(null,"char-format","char-format",-1016499218).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(pred__10315_10318.call(null,"o",expr__10316_10319))){
cljs.pprint.cl_format.call(null,true,"\\o~3, '0o",cljs.pprint.char_code.call(null,c));
} else {
if(cljs.core.truth_(pred__10315_10318.call(null,"u",expr__10316_10319))){
cljs.pprint.cl_format.call(null,true,"\\u~4, '0x",cljs.pprint.char_code.call(null,c));
} else {
if(cljs.core.truth_(pred__10315_10318.call(null,null,expr__10316_10319))){
cljs.pprint.print_char.call(null,c);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__10316_10319)].join('')));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__17111 = cljs.pprint.next_arg.call(null,navigator);
var char$ = cljs.core.nth.call(null,vec__17111,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__17111,(1),null);
=======
var vec__10320 = cljs.pprint.next_arg.call(null,navigator);
var char$ = cljs.core.nth.call(null,vec__10320,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__10320,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
cljs.pprint.print.call(null,char$);

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first.call(null,context);
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),token)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),token)));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second.call(null,cljs.pprint.map_passing_context.call(null,(function (element,context){
if(cljs.pprint.abort_QMARK_.call(null,context)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__17114 = cljs.pprint.realize_parameter_list.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.call(null,vec__17114,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__17114,(1),null);
var vec__17117 = cljs.pprint.unzip_map.call(null,params);
var params__$1 = cljs.core.nth.call(null,vec__17117,(0),null);
var offsets = cljs.core.nth.call(null,vec__17117,(1),null);
=======
var vec__10323 = cljs.pprint.realize_parameter_list.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.call(null,vec__10323,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__10323,(1),null);
var vec__10326 = cljs.pprint.unzip_map.call(null,params);
var params__$1 = cljs.core.nth.call(null,vec__10326,(0),null);
var offsets = cljs.core.nth.call(null,vec__10326,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
var params__$2 = cljs.core.assoc.call(null,params__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822),base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.call(null,new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(f));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.count.call(null,s) - (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(0),dotloc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(dotloc + (1))))].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1((dotloc - (1)))], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,(0),exploc),cljs.core.subs.call(null,s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(0),(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(2),exploc))].join(''),cljs.core.subs.call(null,s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__17120 = cljs.pprint.float_parts_base.call(null,f);
var m = cljs.core.nth.call(null,vec__17120,(0),null);
var e = cljs.core.nth.call(null,vec__17120,(1),null);
=======
var vec__10329 = cljs.pprint.float_parts_base.call(null,f);
var m = cljs.core.nth.call(null,vec__10329,(0),null);
var e = cljs.core.nth.call(null,vec__10329,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
var m1 = cljs.pprint.rtrim.call(null,m,"0");
var m2 = cljs.pprint.ltrim.call(null,m1,"0");
var delta = (cljs.core.count.call(null,m1) - cljs.core.count.call(null,m2));
var e__$1 = (((((cljs.core.count.call(null,e) > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,e,(0)),"+"))))?cljs.core.subs.call(null,e,(1)):e);
if(cljs.core.empty_QMARK_.call(null,m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1,(10)) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 *   and no other characters. Return a string containing one or more
 *   decimal digits containing a decimal number one larger than the input
 *   string. The output string will always be the same length as the input
 *   string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count.call(null,s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.call(null,cljs.core.str,"1",cljs.core.repeat.call(null,(len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.call(null,"9",s.charAt(i))){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var G__17123 = (i - (1));
i = G__17123;
=======
var G__10332 = (i - (1));
i = G__10332;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
} else {
return cljs.core.apply.call(null,cljs.core.str,cljs.core.subs.call(null,s,(0),i),cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,s.charAt(i)) + (1))),cljs.core.repeat.call(null,(len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__4131__auto__ = d;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count.call(null,m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__4219__auto__ = (2);
var y__4220__auto__ = w;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__4219__auto__ = (e + (1));
var y__4220__auto__ = (w__$1 - (1));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})():(w__$1 + e)
));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__17124 = ((cljs.core._EQ_.call(null,round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.call(null,vec__17124,(0),null);
var e1 = cljs.core.nth.call(null,vec__17124,(1),null);
var round_pos__$1 = cljs.core.nth.call(null,vec__17124,(2),null);
var len__$1 = cljs.core.nth.call(null,vec__17124,(3),null);
=======
var vec__10333 = ((cljs.core._EQ_.call(null,round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.call(null,vec__10333,(0),null);
var e1 = cljs.core.nth.call(null,vec__10333,(1),null);
var round_pos__$1 = cljs.core.nth.call(null,vec__10333,(2),null);
var len__$1 = cljs.core.nth.call(null,vec__10333,(3),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.call(null,m1,round_pos__$1);
var result = cljs.core.subs.call(null,m1,(0),round_pos__$1);
if((cljs.pprint.char_code.call(null,round_char) >= cljs.pprint.char_code.call(null,"5"))){
var round_up_result = cljs.pprint.inc_s.call(null,result);
var expanded = (cljs.core.count.call(null,round_up_result) > cljs.core.count.call(null,result));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.call(null,round_up_result,(0),(cljs.core.count.call(null,round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__17127 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((- e) - (1)),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.call(null,vec__17127,(0),null);
var e1 = cljs.core.nth.call(null,vec__17127,(1),null);
=======
var vec__10336 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((- e) - (1)),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.call(null,vec__10336,(0),null);
var e1 = cljs.core.nth.call(null,vec__10336,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
var len = cljs.core.count.call(null,m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(m1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,m,(0),loc)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,m,loc))].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal.call(null,cljs.pprint.expand_fixed.call(null,m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,m,(0),k)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,m,k))].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__17130 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__17130,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__17130,(1),null);
var vec__17133 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.call(null,vec__17133,(0),null);
var abs = cljs.core.nth.call(null,vec__17133,(1),null);
var abs__$1 = cljs.pprint.convert_ratio.call(null,abs);
var vec__17136 = cljs.pprint.float_parts.call(null,abs__$1);
var mantissa = cljs.core.nth.call(null,vec__17136,(0),null);
var exp = cljs.core.nth.call(null,vec__17136,(1),null);
=======
var vec__10339 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__10339,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__10339,(1),null);
var vec__10342 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.call(null,vec__10342,(0),null);
var abs = cljs.core.nth.call(null,vec__10342,(1),null);
var abs__$1 = cljs.pprint.convert_ratio.call(null,abs);
var vec__10345 = cljs.pprint.float_parts.call(null,abs__$1);
var mantissa = cljs.core.nth.call(null,vec__10345,(0),null);
var exp = cljs.core.nth.call(null,vec__10345,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
var scaled_exp = (exp + new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = ((cljs.core.not.call(null,d)) && (((cljs.core.count.call(null,mantissa) - (1)) <= scaled_exp)));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__17139 = cljs.pprint.round_str.call(null,mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.call(null,vec__17139,(0),null);
var scaled_exp__$1 = cljs.core.nth.call(null,vec__17139,(1),null);
var expanded = cljs.core.nth.call(null,vec__17139,(2),null);
=======
var vec__10348 = cljs.pprint.round_str.call(null,mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.call(null,vec__10348,(0),null);
var scaled_exp__$1 = cljs.core.nth.call(null,vec__10348,(1),null);
var expanded = cljs.core.nth.call(null,vec__10348,(2),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
var fixed_repr = cljs.pprint.get_fixed.call(null,rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__4120__auto__ = w;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = d;
if(cljs.core.truth_(and__4120__auto____$1)){
return (((d >= (1))) && (cljs.core._EQ_.call(null,fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.call(null,fixed_repr.charAt((1)),".")) && ((cljs.core.count.call(null,fixed_repr) > (w - (cljs.core.truth_(add_sign)?(1):(0))))));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())?cljs.core.subs.call(null,fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.call(null,cljs.core.first.call(null,fixed_repr__$1),".");
if(cljs.core.truth_(w)){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var len_17142 = cljs.core.count.call(null,fixed_repr__$1);
var signed_len_17143 = (cljs.core.truth_(add_sign)?(len_17142 + (1)):len_17142);
var prepend_zero_17144__$1 = ((prepend_zero) && ((!((signed_len_17143 >= w)))));
var append_zero_17145__$1 = ((append_zero) && ((!((signed_len_17143 >= w)))));
var full_len_17146 = ((((prepend_zero_17144__$1) || (append_zero_17145__$1)))?(signed_len_17143 + (1)):signed_len_17143);
if(cljs.core.truth_((function (){var and__4120__auto__ = (full_len_17146 > w);
=======
var len_10351 = cljs.core.count.call(null,fixed_repr__$1);
var signed_len_10352 = (cljs.core.truth_(add_sign)?(len_10351 + (1)):len_10351);
var prepend_zero_10353__$1 = ((prepend_zero) && ((!((signed_len_10352 >= w)))));
var append_zero_10354__$1 = ((append_zero) && ((!((signed_len_10352 >= w)))));
var full_len_10355 = ((((prepend_zero_10353__$1) || (append_zero_10354__$1)))?(signed_len_10352 + (1)):signed_len_10352);
if(cljs.core.truth_((function (){var and__4120__auto__ = (full_len_10355 > w);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
if(and__4120__auto__){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4120__auto__;
}
})())){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,w,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params))));
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(w - full_len_17146),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),((prepend_zero_17144__$1)?"0":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),((append_zero_17145__$1)?"0":null)].join(''));
=======
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(w - full_len_10355),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),((prepend_zero_10353__$1)?"0":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),((append_zero_10354__$1)?"0":null)].join(''));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),((prepend_zero)?"0":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),((append_zero)?"0":null)].join(''));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__17147 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__17147,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__17147,(1),null);
var arg__$1 = cljs.pprint.convert_ratio.call(null,arg);
var G__17153_17163 = cljs.pprint.float_parts.call(null,(((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__17154_17164 = G__17153_17163;
var mantissa_17165 = cljs.core.nth.call(null,vec__17154_17164,(0),null);
var exp_17166 = cljs.core.nth.call(null,vec__17154_17164,(1),null);
var G__17153_17167__$1 = G__17153_17163;
while(true){
var vec__17157_17168 = G__17153_17167__$1;
var mantissa_17169__$1 = cljs.core.nth.call(null,vec__17157_17168,(0),null);
var exp_17170__$1 = cljs.core.nth.call(null,vec__17157_17168,(1),null);
var w_17171 = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d_17172 = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e_17173 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var k_17174 = new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params);
var expchar_17175 = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222).cljs$core$IFn$_invoke$arity$1(params);
=======
var vec__10356 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__10356,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__10356,(1),null);
var arg__$1 = cljs.pprint.convert_ratio.call(null,arg);
var G__10362_10372 = cljs.pprint.float_parts.call(null,(((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__10363_10373 = G__10362_10372;
var mantissa_10374 = cljs.core.nth.call(null,vec__10363_10373,(0),null);
var exp_10375 = cljs.core.nth.call(null,vec__10363_10373,(1),null);
var G__10362_10376__$1 = G__10362_10372;
while(true){
var vec__10366_10377 = G__10362_10376__$1;
var mantissa_10378__$1 = cljs.core.nth.call(null,vec__10366_10377,(0),null);
var exp_10379__$1 = cljs.core.nth.call(null,vec__10366_10377,(1),null);
var w_10380 = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d_10381 = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e_10382 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var k_10383 = new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params);
var expchar_10384 = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222).cljs$core$IFn$_invoke$arity$1(params);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "E";
}
})();
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var add_sign_17176 = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
=======
var add_sign_10385 = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (arg__$1 < (0));
}
})();
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var prepend_zero_17177 = (k_17174 <= (0));
var scaled_exp_17178 = (exp_17170__$1 - (k_17174 - (1)));
var scaled_exp_str_17179 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_17178));
var scaled_exp_str_17180__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_17175),(((scaled_exp_17178 < (0)))?"-":"+"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_17173)?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(e_17173 - cljs.core.count.call(null,scaled_exp_str_17179)),"0")):null)),scaled_exp_str_17179].join('');
var exp_width_17181 = cljs.core.count.call(null,scaled_exp_str_17180__$1);
var base_mantissa_width_17182 = cljs.core.count.call(null,mantissa_17169__$1);
var scaled_mantissa_17183 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(- k_17174),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_17169__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_17172)?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((d_17172 - (base_mantissa_width_17182 - (1))) - (((k_17174 < (0)))?(- k_17174):(0))),"0")):null))].join('');
var w_mantissa_17184 = (cljs.core.truth_(w_17171)?(w_17171 - exp_width_17181):null);
var vec__17160_17185 = cljs.pprint.round_str.call(null,scaled_mantissa_17183,(0),((cljs.core._EQ_.call(null,k_17174,(0)))?(d_17172 - (1)):(((k_17174 > (0)))?d_17172:(((k_17174 < (0)))?(d_17172 - (1)):null))),(cljs.core.truth_(w_mantissa_17184)?(w_mantissa_17184 - (cljs.core.truth_(add_sign_17176)?(1):(0))):null));
var rounded_mantissa_17186 = cljs.core.nth.call(null,vec__17160_17185,(0),null);
var __17187 = cljs.core.nth.call(null,vec__17160_17185,(1),null);
var incr_exp_17188 = cljs.core.nth.call(null,vec__17160_17185,(2),null);
var full_mantissa_17189 = cljs.pprint.insert_scaled_decimal.call(null,rounded_mantissa_17186,k_17174);
var append_zero_17190 = ((cljs.core._EQ_.call(null,k_17174,cljs.core.count.call(null,rounded_mantissa_17186))) && ((d_17172 == null)));
if(cljs.core.not.call(null,incr_exp_17188)){
if(cljs.core.truth_(w_17171)){
var len_17191 = (cljs.core.count.call(null,full_mantissa_17189) + exp_width_17181);
var signed_len_17192 = (cljs.core.truth_(add_sign_17176)?(len_17191 + (1)):len_17191);
var prepend_zero_17193__$1 = ((prepend_zero_17177) && ((!(cljs.core._EQ_.call(null,signed_len_17192,w_17171)))));
var full_len_17194 = ((prepend_zero_17193__$1)?(signed_len_17192 + (1)):signed_len_17192);
var append_zero_17195__$1 = ((append_zero_17190) && ((full_len_17194 < w_17171)));
if(cljs.core.truth_((function (){var and__4120__auto__ = (function (){var or__4131__auto__ = (full_len_17194 > w_17171);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var and__4120__auto__ = e_17173;
if(cljs.core.truth_(and__4120__auto__)){
return ((exp_width_17181 - (2)) > e_17173);
=======
var prepend_zero_10386 = (k_10383 <= (0));
var scaled_exp_10387 = (exp_10379__$1 - (k_10383 - (1)));
var scaled_exp_str_10388 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_10387));
var scaled_exp_str_10389__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_10384),(((scaled_exp_10387 < (0)))?"-":"+"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_10382)?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(e_10382 - cljs.core.count.call(null,scaled_exp_str_10388)),"0")):null)),scaled_exp_str_10388].join('');
var exp_width_10390 = cljs.core.count.call(null,scaled_exp_str_10389__$1);
var base_mantissa_width_10391 = cljs.core.count.call(null,mantissa_10378__$1);
var scaled_mantissa_10392 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(- k_10383),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_10378__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_10381)?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((d_10381 - (base_mantissa_width_10391 - (1))) - (((k_10383 < (0)))?(- k_10383):(0))),"0")):null))].join('');
var w_mantissa_10393 = (cljs.core.truth_(w_10380)?(w_10380 - exp_width_10390):null);
var vec__10369_10394 = cljs.pprint.round_str.call(null,scaled_mantissa_10392,(0),((cljs.core._EQ_.call(null,k_10383,(0)))?(d_10381 - (1)):(((k_10383 > (0)))?d_10381:(((k_10383 < (0)))?(d_10381 - (1)):null))),(cljs.core.truth_(w_mantissa_10393)?(w_mantissa_10393 - (cljs.core.truth_(add_sign_10385)?(1):(0))):null));
var rounded_mantissa_10395 = cljs.core.nth.call(null,vec__10369_10394,(0),null);
var __10396 = cljs.core.nth.call(null,vec__10369_10394,(1),null);
var incr_exp_10397 = cljs.core.nth.call(null,vec__10369_10394,(2),null);
var full_mantissa_10398 = cljs.pprint.insert_scaled_decimal.call(null,rounded_mantissa_10395,k_10383);
var append_zero_10399 = ((cljs.core._EQ_.call(null,k_10383,cljs.core.count.call(null,rounded_mantissa_10395))) && ((d_10381 == null)));
if(cljs.core.not.call(null,incr_exp_10397)){
if(cljs.core.truth_(w_10380)){
var len_10400 = (cljs.core.count.call(null,full_mantissa_10398) + exp_width_10390);
var signed_len_10401 = (cljs.core.truth_(add_sign_10385)?(len_10400 + (1)):len_10400);
var prepend_zero_10402__$1 = ((prepend_zero_10386) && ((!(cljs.core._EQ_.call(null,signed_len_10401,w_10380)))));
var full_len_10403 = ((prepend_zero_10402__$1)?(signed_len_10401 + (1)):signed_len_10401);
var append_zero_10404__$1 = ((append_zero_10399) && ((full_len_10403 < w_10380)));
if(cljs.core.truth_((function (){var and__4120__auto__ = (function (){var or__4131__auto__ = (full_len_10403 > w_10380);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var and__4120__auto__ = e_10382;
if(cljs.core.truth_(and__4120__auto__)){
return ((exp_width_10390 - (2)) > e_10382);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
} else {
return and__4120__auto__;
}
}
})();
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4120__auto__;
}
})())){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,w_17171,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params))));
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((w_17171 - full_len_17194) - ((append_zero_17195__$1)?(1):(0))),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),(cljs.core.truth_(add_sign_17176)?(((arg__$1 < (0)))?"-":"+"):null),((prepend_zero_17193__$1)?"0":null),full_mantissa_17189,((append_zero_17195__$1)?"0":null),scaled_exp_str_17180__$1].join(''));
}
} else {
cljs.pprint.print.call(null,[(cljs.core.truth_(add_sign_17176)?(((arg__$1 < (0)))?"-":"+"):null),((prepend_zero_17177)?"0":null),full_mantissa_17189,((append_zero_17190)?"0":null),scaled_exp_str_17180__$1].join(''));
}
} else {
var G__17196 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_17186,(exp_17170__$1 + (1))], null);
G__17153_17167__$1 = G__17196;
=======
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,w_10380,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params))));
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((w_10380 - full_len_10403) - ((append_zero_10404__$1)?(1):(0))),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),(cljs.core.truth_(add_sign_10385)?(((arg__$1 < (0)))?"-":"+"):null),((prepend_zero_10402__$1)?"0":null),full_mantissa_10398,((append_zero_10404__$1)?"0":null),scaled_exp_str_10389__$1].join(''));
}
} else {
cljs.pprint.print.call(null,[(cljs.core.truth_(add_sign_10385)?(((arg__$1 < (0)))?"-":"+"):null),((prepend_zero_10386)?"0":null),full_mantissa_10398,((append_zero_10399)?"0":null),scaled_exp_str_10389__$1].join(''));
}
} else {
var G__10405 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_10395,(exp_10379__$1 + (1))], null);
G__10362_10376__$1 = G__10405;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__17197 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__17197,(0),null);
var _ = cljs.core.nth.call(null,vec__17197,(1),null);
var arg__$1 = cljs.pprint.convert_ratio.call(null,arg);
var vec__17200 = cljs.pprint.float_parts.call(null,(((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.call(null,vec__17200,(0),null);
var exp = cljs.core.nth.call(null,vec__17200,(1),null);
=======
var vec__10406 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__10406,(0),null);
var _ = cljs.core.nth.call(null,vec__10406,(1),null);
var arg__$1 = cljs.pprint.convert_ratio.call(null,arg);
var vec__10409 = cljs.pprint.float_parts.call(null,(((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.call(null,vec__10409,(0),null);
var exp = cljs.core.nth.call(null,vec__10409,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.call(null,arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__4219__auto__ = cljs.core.count.call(null,mantissa);
var y__4220__auto__ = (function (){var x__4222__auto__ = n;
var y__4223__auto__ = (7);
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})());
var dd = (d__$1 - n);
if(((((0) <= dd)) && ((dd <= d__$1)))){
var navigator__$1 = cljs.pprint.fixed_float.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"w","w",354169001),ww,new cljs.core.Keyword(null,"d","d",1972142424),dd,new cljs.core.Keyword(null,"k","k",-2146297393),(0),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",1476951349),new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,ee," ")));

return navigator__$1;
} else {
return cljs.pprint.exponential_float.call(null,params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__17203 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__17203,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__17203,(1),null);
var vec__17206 = cljs.pprint.float_parts.call(null,Math.abs(arg));
var mantissa = cljs.core.nth.call(null,vec__17206,(0),null);
var exp = cljs.core.nth.call(null,vec__17206,(1),null);
=======
var vec__10412 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__10412,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__10412,(1),null);
var vec__10415 = cljs.pprint.float_parts.call(null,Math.abs(arg));
var mantissa = cljs.core.nth.call(null,vec__10415,(0),null);
var exp = cljs.core.nth.call(null,vec__10415,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (arg < (0));
}
})();
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__17209 = cljs.pprint.round_str.call(null,mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.call(null,vec__17209,(0),null);
var scaled_exp = cljs.core.nth.call(null,vec__17209,(1),null);
var expanded = cljs.core.nth.call(null,vec__17209,(2),null);
=======
var vec__10418 = cljs.pprint.round_str.call(null,mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.call(null,vec__10418,(0),null);
var scaled_exp = cljs.core.nth.call(null,vec__10418,(1),null);
var expanded = cljs.core.nth.call(null,vec__10418,(2),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
var fixed_repr = cljs.pprint.get_fixed.call(null,rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - fixed_repr.indexOf(".")),"0"))),fixed_repr].join('');
var full_len = (cljs.core.count.call(null,full_repr) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.call(null,[(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4120__auto__)){
return add_sign;
} else {
return and__4120__auto__;
}
})())?(((arg < (0)))?"-":"+"):null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(w - full_len),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params));
if(and__4120__auto__){
return add_sign;
} else {
return and__4120__auto__;
}
})())?(((arg < (0)))?"-":"+"):null),full_repr].join(''));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(params);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__17212 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg.call(null,arg_navigator));
var arg__$1 = cljs.core.nth.call(null,vec__17212,(0),null);
var navigator = cljs.core.nth.call(null,vec__17212,(1),null);
=======
var vec__10421 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg.call(null,arg_navigator));
var arg__$1 = cljs.core.nth.call(null,vec__10421,(0),null);
var navigator = cljs.core.nth.call(null,vec__10421,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count.call(null,clauses)))))?cljs.core.first.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.call(null,clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__17215 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__17215,(0),null);
var navigator = cljs.core.nth.call(null,vec__17215,(1),null);
=======
var vec__10424 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__10424,(0),null);
var navigator = cljs.core.nth.call(null,vec__10424,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second.call(null,clauses):cljs.core.first.call(null,clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__17218 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__17218,(0),null);
var navigator = cljs.core.nth.call(null,vec__17218,(1),null);
=======
var vec__10427 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__10427,(0),null);
var navigator = cljs.core.nth.call(null,vec__10427,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first.call(null,clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,arg_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__17221 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__17221,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__17221,(1),null);
var vec__17224 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg_list = cljs.core.nth.call(null,vec__17224,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__17224,(1),null);
=======
var vec__10430 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__10430,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__10430,(1),null);
var vec__10433 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg_list = cljs.core.nth.call(null,vec__10433,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__10433,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
var args = cljs.pprint.init_navigator.call(null,arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not.call(null,max_count)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1))))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__4131__auto__ = ((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(args__$1))) && (((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var and__4120__auto__ = max_count;
if(cljs.core.truth_(and__4120__auto__)){
return (count >= max_count);
} else {
return and__4120__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,args__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return navigator__$2;
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var G__17227 = (count + (1));
var G__17228 = iter_result;
var G__17229 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__17227;
args__$1 = G__17228;
last_pos = G__17229;
=======
var G__10436 = (count + (1));
var G__10437 = iter_result;
var G__10438 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__10436;
args__$1 = G__10437;
last_pos = G__10438;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__17230 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__17230,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__17230,(1),null);
var vec__17233 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg_list = cljs.core.nth.call(null,vec__17233,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__17233,(1),null);
=======
var vec__10439 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__10439,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__10439,(1),null);
var vec__10442 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg_list = cljs.core.nth.call(null,vec__10442,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__10442,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__4131__auto__ = ((cljs.core.empty_QMARK_.call(null,arg_list__$1)) && (((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var and__4120__auto__ = max_count;
if(cljs.core.truth_(and__4120__auto__)){
return (count >= max_count);
} else {
return and__4120__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,cljs.pprint.init_navigator.call(null,cljs.core.first.call(null,arg_list__$1)),cljs.pprint.init_navigator.call(null,cljs.core.next.call(null,arg_list__$1)));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first.call(null,iter_result))){
return navigator__$2;
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var G__17236 = (count + (1));
var G__17237 = cljs.core.next.call(null,arg_list__$1);
count = G__17236;
arg_list__$1 = G__17237;
=======
var G__10445 = (count + (1));
var G__10446 = cljs.core.next.call(null,arg_list__$1);
count = G__10445;
arg_list__$1 = G__10446;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__17238 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__17238,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__17238,(1),null);
=======
var vec__10447 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__10447,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__10447,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not.call(null,max_count)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1))))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__4131__auto__ = ((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var and__4120__auto__ = max_count;
if(cljs.core.truth_(and__4120__auto__)){
return (count >= max_count);
} else {
return and__4120__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return cljs.core.second.call(null,iter_result);
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var G__17241 = (count + (1));
var G__17242 = iter_result;
var G__17243 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__17241;
navigator__$2 = G__17242;
last_pos = G__17243;
=======
var G__10450 = (count + (1));
var G__10451 = iter_result;
var G__10452 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__10450;
navigator__$2 = G__10451;
last_pos = G__10452;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__17244 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__17244,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__17244,(1),null);
=======
var vec__10453 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__10453,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__10453,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__4131__auto__ = ((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var and__4120__auto__ = max_count;
if(cljs.core.truth_(and__4120__auto__)){
return (count >= max_count);
} else {
return and__4120__auto__;
}
}
})())){
return navigator__$2;
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__17250 = cljs.pprint.next_arg_or_nil.call(null,navigator__$2);
var sublist = cljs.core.nth.call(null,vec__17250,(0),null);
var navigator__$3 = cljs.core.nth.call(null,vec__17250,(1),null);
=======
var vec__10459 = cljs.pprint.next_arg_or_nil.call(null,navigator__$2);
var sublist = cljs.core.nth.call(null,vec__10459,(0),null);
var navigator__$3 = cljs.core.nth.call(null,vec__10459,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,cljs.pprint.init_navigator.call(null,sublist),navigator__$3);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first.call(null,iter_result))){
return navigator__$3;
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var G__17253 = (count + (1));
var G__17254 = navigator__$3;
count = G__17253;
navigator__$2 = G__17254;
=======
var G__10462 = (count + (1));
var G__10463 = navigator__$3;
count = G__10462;
navigator__$2 = G__10463;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
}
}
break;
}
});
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))){
return cljs.pprint.format_logical_block.call(null,params,navigator,offsets);
} else {
return cljs.pprint.justify_clauses.call(null,params,navigator,offsets);
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_.call(null,clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first.call(null,clauses__$1);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__17260 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR__orig_val__17263 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__17264 = (new cljs.core.StringBufferWriter(sb));
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__17264;

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format.call(null,clause,navigator__$1,base_navigator),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)], null);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__17263;
}})();
var iter_result = cljs.core.nth.call(null,vec__17260,(0),null);
var result_str = cljs.core.nth.call(null,vec__17260,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second.call(null,iter_result)], null);
} else {
var G__17265 = cljs.core.next.call(null,clauses__$1);
var G__17266 = cljs.core.conj.call(null,acc,result_str);
var G__17267 = iter_result;
clauses__$1 = G__17265;
acc = G__17266;
navigator__$1 = G__17267;
=======
var vec__10469 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR__orig_val__10472 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__10473 = (new cljs.core.StringBufferWriter(sb));
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__10473;

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format.call(null,clause,navigator__$1,base_navigator),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)], null);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__10472;
}})();
var iter_result = cljs.core.nth.call(null,vec__10469,(0),null);
var result_str = cljs.core.nth.call(null,vec__10469,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second.call(null,iter_result)], null);
} else {
var G__10474 = cljs.core.next.call(null,clauses__$1);
var G__10475 = cljs.core.conj.call(null,acc,result_str);
var G__10476 = iter_result;
clauses__$1 = G__10474;
acc = G__10475;
navigator__$1 = G__10476;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__17268 = (function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params);
=======
var vec__10477 = (function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
if(cljs.core.truth_(temp__5720__auto__)){
var else$ = temp__5720__auto__;
return cljs.pprint.render_clauses.call(null,else$,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__17271 = cljs.core.nth.call(null,vec__17268,(0),null);
var eol_str = cljs.core.nth.call(null,vec__17271,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__17268,(1),null);
=======
var vec__10480 = cljs.core.nth.call(null,vec__10477,(0),null);
var eol_str = cljs.core.nth.call(null,vec__10480,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__10477,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
var navigator__$1 = (function (){var or__4131__auto__ = new_navigator;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return navigator;
}
})();
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__17274 = (function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"else-params","else-params",-832171646).cljs$core$IFn$_invoke$arity$1(params);
=======
var vec__10483 = (function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"else-params","else-params",-832171646).cljs$core$IFn$_invoke$arity$1(params);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
if(cljs.core.truth_(temp__5720__auto__)){
var p = temp__5720__auto__;
return cljs.pprint.realize_parameter_list.call(null,p,navigator__$1);
} else {
return null;
}
})();
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var else_params = cljs.core.nth.call(null,vec__17274,(0),null);
var new_navigator__$1 = cljs.core.nth.call(null,vec__17274,(1),null);
=======
var else_params = cljs.core.nth.call(null,vec__10483,(0),null);
var new_navigator__$1 = cljs.core.nth.call(null,vec__10483,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
var navigator__$2 = (function (){var or__4131__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__4131__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__4131__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"max-columns","max-columns",1742323262).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.pprint.get_max_column.call(null,cljs.core._STAR_out_STAR_);
}
})();
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__17277 = cljs.pprint.render_clauses.call(null,clauses,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.call(null,vec__17277,(0),null);
var navigator__$3 = cljs.core.nth.call(null,vec__17277,(1),null);
=======
var vec__10486 = cljs.pprint.render_clauses.call(null,clauses,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.call(null,vec__10486,(0),null);
var navigator__$3 = cljs.core.nth.call(null,vec__10486,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
var slots = (function (){var x__4219__auto__ = (1);
var y__4220__auto__ = (((cljs.core.count.call(null,strs) - (1)) + (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var chars = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.count,strs));
var mincol = new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params);
var minpad = new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params);
var colinc = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot.call(null,((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__4219__auto__ = minpad;
var y__4220__auto__ = cljs.core.quot.call(null,total_pad,slots);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,pad,new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__4120__auto__ = eol_str;
if(cljs.core.truth_(and__4120__auto__)){
return (((cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_)))) + min_remaining) + result_columns) > max_columns);
} else {
return and__4120__auto__;
}
})())){
cljs.pprint.print.call(null,eol_str);
} else {
}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var slots_17280__$1 = slots;
var extra_pad_17281__$1 = extra_pad;
var strs_17282__$1 = strs;
var pad_only_17283 = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((cljs.core._EQ_.call(null,cljs.core.count.call(null,strs_17282__$1),(1))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))));
}
})();
while(true){
if(cljs.core.seq.call(null,strs_17282__$1)){
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not.call(null,pad_only_17283))?cljs.core.first.call(null,strs_17282__$1):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__4131__auto__ = pad_only_17283;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = cljs.core.next.call(null,strs_17282__$1);
=======
var slots_10489__$1 = slots;
var extra_pad_10490__$1 = extra_pad;
var strs_10491__$1 = strs;
var pad_only_10492 = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((cljs.core._EQ_.call(null,cljs.core.count.call(null,strs_10491__$1),(1))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))));
}
})();
while(true){
if(cljs.core.seq.call(null,strs_10491__$1)){
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not.call(null,pad_only_10492))?cljs.core.first.call(null,strs_10491__$1):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__4131__auto__ = pad_only_10492;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = cljs.core.next.call(null,strs_10491__$1);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
return new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
}
}
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
})())?pad_str:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_17281__$1 > (0)))?new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params):null))].join(''));

var G__17284 = (slots_17280__$1 - (1));
var G__17285 = (extra_pad_17281__$1 - (1));
var G__17286 = (cljs.core.truth_(pad_only_17283)?strs_17282__$1:cljs.core.next.call(null,strs_17282__$1));
var G__17287 = false;
slots_17280__$1 = G__17284;
extra_pad_17281__$1 = G__17285;
strs_17282__$1 = G__17286;
pad_only_17283 = G__17287;
=======
})())?pad_str:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_10490__$1 > (0)))?new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params):null))].join(''));

var G__10493 = (slots_10489__$1 - (1));
var G__10494 = (extra_pad_10490__$1 - (1));
var G__10495 = (cljs.core.truth_(pad_only_10492)?strs_10491__$1:cljs.core.next.call(null,strs_10491__$1));
var G__10496 = false;
slots_10489__$1 = G__10493;
extra_pad_10490__$1 = G__10494;
strs_10491__$1 = G__10495;
pad_only_10492 = G__10496;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint17288 !== 'undefined')){
=======
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint10497 !== 'undefined')){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.t_cljs$pprint17288 = (function (writer,meta17289){
this.writer = writer;
this.meta17289 = meta17289;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint17288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17290,meta17289__$1){
var self__ = this;
var _17290__$1 = this;
return (new cljs.pprint.t_cljs$pprint17288(self__.writer,meta17289__$1));
});

cljs.pprint.t_cljs$pprint17288.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17290){
var self__ = this;
var _17290__$1 = this;
return self__.meta17289;
});

cljs.pprint.t_cljs$pprint17288.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
=======
cljs.pprint.t_cljs$pprint10497 = (function (writer,meta10498){
this.writer = writer;
this.meta10498 = meta10498;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint10497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10499,meta10498__$1){
var self__ = this;
var _10499__$1 = this;
return (new cljs.pprint.t_cljs$pprint10497(self__.writer,meta10498__$1));
});

cljs.pprint.t_cljs$pprint10497.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10499){
var self__ = this;
var _10499__$1 = this;
return self__.meta10498;
});

cljs.pprint.t_cljs$pprint10497.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.t_cljs$pprint17288.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__17291 = cljs.core._EQ_;
var expr__17292 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__17291.call(null,String,expr__17292))){
var s = x;
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,s));
} else {
if(cljs.core.truth_(pred__17291.call(null,Number,expr__17292))){
var c = x;
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,cljs.core.char$.call(null,c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__17292)].join('')));
=======
cljs.pprint.t_cljs$pprint10497.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__10500 = cljs.core._EQ_;
var expr__10501 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__10500.call(null,String,expr__10501))){
var s = x;
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,s));
} else {
if(cljs.core.truth_(pred__10500.call(null,Number,expr__10501))){
var c = x;
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,cljs.core.char$.call(null,c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__10501)].join('')));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}
}
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.t_cljs$pprint17288.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta17289","meta17289",-511325298,null)], null);
});

cljs.pprint.t_cljs$pprint17288.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint17288.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint17288";

cljs.pprint.t_cljs$pprint17288.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.pprint/t_cljs$pprint17288");
});

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint17288.
 */
cljs.pprint.__GT_t_cljs$pprint17288 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint17288(writer__$1,meta17289){
return (new cljs.pprint.t_cljs$pprint17288(writer__$1,meta17289));
=======
cljs.pprint.t_cljs$pprint10497.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta10498","meta10498",-125189348,null)], null);
});

cljs.pprint.t_cljs$pprint10497.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint10497.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint10497";

cljs.pprint.t_cljs$pprint10497.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.pprint/t_cljs$pprint10497");
});

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint10497.
 */
cljs.pprint.__GT_t_cljs$pprint10497 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint10497(writer__$1,meta10498){
return (new cljs.pprint.t_cljs$pprint10497(writer__$1,meta10498));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});

}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return (new cljs.pprint.t_cljs$pprint17288(writer,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new cljs.pprint.t_cljs$pprint10497(writer,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint17294 !== 'undefined')){
=======
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint10503 !== 'undefined')){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.t_cljs$pprint17294 = (function (writer,meta17295){
this.writer = writer;
this.meta17295 = meta17295;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint17294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17296,meta17295__$1){
var self__ = this;
var _17296__$1 = this;
return (new cljs.pprint.t_cljs$pprint17294(self__.writer,meta17295__$1));
});

cljs.pprint.t_cljs$pprint17294.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17296){
var self__ = this;
var _17296__$1 = this;
return self__.meta17295;
});

cljs.pprint.t_cljs$pprint17294.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
=======
cljs.pprint.t_cljs$pprint10503 = (function (writer,meta10504){
this.writer = writer;
this.meta10504 = meta10504;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint10503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10505,meta10504__$1){
var self__ = this;
var _10505__$1 = this;
return (new cljs.pprint.t_cljs$pprint10503(self__.writer,meta10504__$1));
});

cljs.pprint.t_cljs$pprint10503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10505){
var self__ = this;
var _10505__$1 = this;
return self__.meta10504;
});

cljs.pprint.t_cljs$pprint10503.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.t_cljs$pprint17294.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__17297 = cljs.core._EQ_;
var expr__17298 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__17297.call(null,String,expr__17298))){
var s = x;
return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,s));
} else {
if(cljs.core.truth_(pred__17297.call(null,Number,expr__17298))){
var c = x;
return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,cljs.core.char$.call(null,c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__17298)].join('')));
=======
cljs.pprint.t_cljs$pprint10503.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__10506 = cljs.core._EQ_;
var expr__10507 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__10506.call(null,String,expr__10507))){
var s = x;
return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,s));
} else {
if(cljs.core.truth_(pred__10506.call(null,Number,expr__10507))){
var c = x;
return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,cljs.core.char$.call(null,c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__10507)].join('')));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}
}
});

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.t_cljs$pprint17294.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta17295","meta17295",-1629727478,null)], null);
});

cljs.pprint.t_cljs$pprint17294.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint17294.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint17294";

cljs.pprint.t_cljs$pprint17294.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.pprint/t_cljs$pprint17294");
});

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint17294.
 */
cljs.pprint.__GT_t_cljs$pprint17294 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint17294(writer__$1,meta17295){
return (new cljs.pprint.t_cljs$pprint17294(writer__$1,meta17295));
=======
cljs.pprint.t_cljs$pprint10503.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta10504","meta10504",2598305,null)], null);
});

cljs.pprint.t_cljs$pprint10503.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint10503.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint10503";

cljs.pprint.t_cljs$pprint10503.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.pprint/t_cljs$pprint10503");
});

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint10503.
 */
cljs.pprint.__GT_t_cljs$pprint10503 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint10503(writer__$1,meta10504){
return (new cljs.pprint.t_cljs$pprint10503(writer__$1,meta10504));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});

}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return (new cljs.pprint.t_cljs$pprint17294(writer,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new cljs.pprint.t_cljs$pprint10503(writer,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first.call(null,s);
var s__$1 = (cljs.core.truth_((function (){var and__4120__auto__ = first_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = f;
if(cljs.core.truth_(and__4120__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(1)))].join(''):s);
return cljs.core.apply.call(null,cljs.core.str,cljs.core.first.call(null,cljs.pprint.consume.call(null,((function (f,s__$1){
return (function (s__$2){
if(cljs.core.empty_QMARK_.call(null,s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__4120__auto__ = m;
if(cljs.core.truth_(and__4120__auto__)){
return (m.index + (1));
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s__$2,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,cljs.core.nth.call(null,s__$2,offset)))].join(''),cljs.core.subs.call(null,s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
});})(f,s__$1))
,s__$1)));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = cljs.core.atom.call(null,true);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint17300 !== 'undefined')){
=======
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint10509 !== 'undefined')){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.t_cljs$pprint17300 = (function (writer,last_was_whitespace_QMARK_,meta17301){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta17301 = meta17301;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint17300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (_17302,meta17301__$1){
var self__ = this;
var _17302__$1 = this;
return (new cljs.pprint.t_cljs$pprint17300(self__.writer,self__.last_was_whitespace_QMARK_,meta17301__$1));
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint17300.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_17302){
var self__ = this;
var _17302__$1 = this;
return self__.meta17301;
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint17300.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (last_was_whitespace_QMARK_){
=======
cljs.pprint.t_cljs$pprint10509 = (function (writer,last_was_whitespace_QMARK_,meta10510){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta10510 = meta10510;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint10509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (_10511,meta10510__$1){
var self__ = this;
var _10511__$1 = this;
return (new cljs.pprint.t_cljs$pprint10509(self__.writer,self__.last_was_whitespace_QMARK_,meta10510__$1));
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint10509.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_10511){
var self__ = this;
var _10511__$1 = this;
return self__.meta10510;
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint10509.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (last_was_whitespace_QMARK_){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(last_was_whitespace_QMARK_))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.t_cljs$pprint17300.prototype.cljs$core$IWriter$_write$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__17303 = cljs.core._EQ_;
var expr__17304 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__17303.call(null,String,expr__17304))){
=======
cljs.pprint.t_cljs$pprint10509.prototype.cljs$core$IWriter$_write$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__10512 = cljs.core._EQ_;
var expr__10513 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__10512.call(null,String,expr__10513))){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
var s = x;
cljs.core._write.call(null,self__.writer,cljs.pprint.capitalize_string.call(null,s.toLowerCase(),cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_.call(null,self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(cljs.core.nth.call(null,s,(cljs.core.count.call(null,s) - (1)))));
} else {
return null;
}
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
if(cljs.core.truth_(pred__17303.call(null,Number,expr__17304))){
=======
if(cljs.core.truth_(pred__10512.call(null,Number,expr__10513))){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
var c = cljs.core.char$.call(null,x);
var mod_c = (cljs.core.truth_(cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_))?clojure.string.upper_case.call(null,c):c);
cljs.core._write.call(null,self__.writer,mod_c);

return cljs.core.reset_BANG_.call(null,self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__17304)].join('')));
=======
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__10513)].join('')));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}
}
});})(last_was_whitespace_QMARK_))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.t_cljs$pprint17300.getBasis = ((function (last_was_whitespace_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"last-was-whitespace?","last-was-whitespace?",-1073928093,null),new cljs.core.Symbol(null,"meta17301","meta17301",447274587,null)], null);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint17300.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint17300.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint17300";

cljs.pprint.t_cljs$pprint17300.cljs$lang$ctorPrWriter = ((function (last_was_whitespace_QMARK_){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.pprint/t_cljs$pprint17300");
=======
cljs.pprint.t_cljs$pprint10509.getBasis = ((function (last_was_whitespace_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"last-was-whitespace?","last-was-whitespace?",-1073928093,null),new cljs.core.Symbol(null,"meta10510","meta10510",1797587135,null)], null);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint10509.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint10509.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint10509";

cljs.pprint.t_cljs$pprint10509.cljs$lang$ctorPrWriter = ((function (last_was_whitespace_QMARK_){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.pprint/t_cljs$pprint10509");
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});})(last_was_whitespace_QMARK_))
;

/**
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
 * Positional factory function for cljs.pprint/t_cljs$pprint17300.
 */
cljs.pprint.__GT_t_cljs$pprint17300 = ((function (last_was_whitespace_QMARK_){
return (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint17300(writer__$1,last_was_whitespace_QMARK___$1,meta17301){
return (new cljs.pprint.t_cljs$pprint17300(writer__$1,last_was_whitespace_QMARK___$1,meta17301));
=======
 * Positional factory function for cljs.pprint/t_cljs$pprint10509.
 */
cljs.pprint.__GT_t_cljs$pprint10509 = ((function (last_was_whitespace_QMARK_){
return (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint10509(writer__$1,last_was_whitespace_QMARK___$1,meta10510){
return (new cljs.pprint.t_cljs$pprint10509(writer__$1,last_was_whitespace_QMARK___$1,meta10510));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});})(last_was_whitespace_QMARK_))
;

}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return (new cljs.pprint.t_cljs$pprint17300(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new cljs.pprint.t_cljs$pprint10509(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.call(null,false);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint17306 !== 'undefined')){
=======
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint10515 !== 'undefined')){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.t_cljs$pprint17306 = (function (writer,capped,meta17307){
this.writer = writer;
this.capped = capped;
this.meta17307 = meta17307;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint17306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (capped){
return (function (_17308,meta17307__$1){
var self__ = this;
var _17308__$1 = this;
return (new cljs.pprint.t_cljs$pprint17306(self__.writer,self__.capped,meta17307__$1));
});})(capped))
;

cljs.pprint.t_cljs$pprint17306.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (capped){
return (function (_17308){
var self__ = this;
var _17308__$1 = this;
return self__.meta17307;
});})(capped))
;

cljs.pprint.t_cljs$pprint17306.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (capped){
=======
cljs.pprint.t_cljs$pprint10515 = (function (writer,capped,meta10516){
this.writer = writer;
this.capped = capped;
this.meta10516 = meta10516;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint10515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (capped){
return (function (_10517,meta10516__$1){
var self__ = this;
var _10517__$1 = this;
return (new cljs.pprint.t_cljs$pprint10515(self__.writer,self__.capped,meta10516__$1));
});})(capped))
;

cljs.pprint.t_cljs$pprint10515.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (capped){
return (function (_10517){
var self__ = this;
var _10517__$1 = this;
return self__.meta10516;
});})(capped))
;

cljs.pprint.t_cljs$pprint10515.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (capped){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(capped))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.t_cljs$pprint17306.prototype.cljs$core$IWriter$_write$arity$2 = ((function (capped){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__17309 = cljs.core._EQ_;
var expr__17310 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__17309.call(null,String,expr__17310))){
=======
cljs.pprint.t_cljs$pprint10515.prototype.cljs$core$IWriter$_write$arity$2 = ((function (capped){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__10518 = cljs.core._EQ_;
var expr__10519 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__10518.call(null,String,expr__10519))){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
var s = clojure.string.lower_case.call(null,x);
if(cljs.core.not.call(null,cljs.core.deref.call(null,self__.capped))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__4120__auto__ = m;
if(cljs.core.truth_(and__4120__auto__)){
return m.index;
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write.call(null,self__.writer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,cljs.core.nth.call(null,s,offset))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,(offset + (1)))))].join(''));

return cljs.core.reset_BANG_.call(null,self__.capped,true);
} else {
return cljs.core._write.call(null,self__.writer,s);
}
} else {
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,s));
}
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
if(cljs.core.truth_(pred__17309.call(null,Number,expr__17310))){
=======
if(cljs.core.truth_(pred__10518.call(null,Number,expr__10519))){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
var c = cljs.core.char$.call(null,x);
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not.call(null,cljs.core.deref.call(null,self__.capped));
if(and__4120__auto__){
return goog.string.isUnicodeChar(c);
} else {
return and__4120__auto__;
}
})())){
cljs.core.reset_BANG_.call(null,self__.capped,true);

return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,c));
} else {
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,c));
}
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__17310)].join('')));
=======
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__10519)].join('')));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}
}
});})(capped))
;

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.t_cljs$pprint17306.getBasis = ((function (capped){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"capped","capped",-1650988402,null),new cljs.core.Symbol(null,"meta17307","meta17307",82925118,null)], null);
});})(capped))
;

cljs.pprint.t_cljs$pprint17306.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint17306.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint17306";

cljs.pprint.t_cljs$pprint17306.cljs$lang$ctorPrWriter = ((function (capped){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.pprint/t_cljs$pprint17306");
=======
cljs.pprint.t_cljs$pprint10515.getBasis = ((function (capped){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"capped","capped",-1650988402,null),new cljs.core.Symbol(null,"meta10516","meta10516",-521853287,null)], null);
});})(capped))
;

cljs.pprint.t_cljs$pprint10515.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint10515.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint10515";

cljs.pprint.t_cljs$pprint10515.cljs$lang$ctorPrWriter = ((function (capped){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.pprint/t_cljs$pprint10515");
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});})(capped))
;

/**
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
 * Positional factory function for cljs.pprint/t_cljs$pprint17306.
 */
cljs.pprint.__GT_t_cljs$pprint17306 = ((function (capped){
return (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint17306(writer__$1,capped__$1,meta17307){
return (new cljs.pprint.t_cljs$pprint17306(writer__$1,capped__$1,meta17307));
=======
 * Positional factory function for cljs.pprint/t_cljs$pprint10515.
 */
cljs.pprint.__GT_t_cljs$pprint10515 = ((function (capped){
return (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint10515(writer__$1,capped__$1,meta10516){
return (new cljs.pprint.t_cljs$pprint10515(writer__$1,capped__$1,meta10516));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});})(capped))
;

}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return (new cljs.pprint.t_cljs$pprint17306(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR__orig_val__17312 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__17313 = make_writer.call(null,cljs.core._STAR_out_STAR_);
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__17313;

try{return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__17312;
=======
return (new cljs.pprint.t_cljs$pprint10515(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR__orig_val__10521 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__10522 = make_writer.call(null,cljs.core._STAR_out_STAR_);
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__10522;

try{return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__10521;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 *  (defn print-table [aseq column-width]
 *    (binding [*out* (get-pretty-writer *out*)]
 *      (doseq [row aseq]
 *        (doseq [col row]
 *          (cl-format true "~4D~7,vT" col column-width))
 *        (prn))))
 * 
 * Now when you run:
 * 
 *  user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 *     1      1       1
 *     2      4       8
 *     3      9      27
 *     4     16      64
 *     5     25     125
 *     6     36     216
 *     7     49     343
 *     8     64     512
 *     9     81     729
 *    10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_.call(null,writer))){
return writer;
} else {
return cljs.pprint.pretty_writer.call(null,writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if((((!((cljs.core._STAR_out_STAR_ == null))))?(((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === cljs.core._STAR_out_STAR_.cljs$core$IDeref$))))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if((!(cljs.core._EQ_.call(null,(0),cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_)))))))){
return cljs.pprint.prn.call(null);
} else {
return null;
}
} else {
return cljs.pprint.prn.call(null);
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var colnum_17315 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_17316 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var current_17317 = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_))));
var space_count_17318 = (((current_17317 < colnum_17315))?(colnum_17315 - current_17317):((cljs.core._EQ_.call(null,colinc_17316,(0)))?(0):(colinc_17316 - cljs.core.rem.call(null,(current_17317 - colnum_17315),colinc_17316))
));
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,space_count_17318," ")));
=======
var colnum_10524 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_10525 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var current_10526 = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_))));
var space_count_10527 = (((current_10526 < colnum_10524))?(colnum_10524 - current_10526):((cljs.core._EQ_.call(null,colinc_10525,(0)))?(0):(colinc_10525 - cljs.core.rem.call(null,(current_10526 - colnum_10524),colinc_10525))
));
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,space_count_10527," ")));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var colrel_17319 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_17320 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var start_col_17321 = (colrel_17319 + cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_)))));
var offset_17322 = (((colinc_17320 > (0)))?cljs.core.rem.call(null,start_col_17321,colinc_17320):(0));
var space_count_17323 = (colrel_17319 + ((cljs.core._EQ_.call(null,(0),offset_17322))?(0):(colinc_17320 - offset_17322)));
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,space_count_17323," ")));
=======
var colrel_10528 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_10529 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var start_col_10530 = (colrel_10528 + cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_)))));
var offset_10531 = (((colinc_10529 > (0)))?cljs.core.rem.call(null,start_col_10530,colinc_10529):(0));
var space_count_10532 = (colrel_10528 + ((cljs.core._EQ_.call(null,(0),offset_10531))?(0):(colinc_10529 - offset_10531)));
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,space_count_10532," ")));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count.call(null,clauses);
var prefix = (((clause_count > (1)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.first.call(null,clauses)))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.call(null,clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,clauses,(2))))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?")":null));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__17324 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__17324,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__17324,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__17327_17331 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__17328_17332 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__17329_17333 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__17330_17334 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__17329_17333;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__17330_17334;
=======
var vec__10533 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__10533,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__10533,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__10536_10540 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__10537_10541 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__10538_10542 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__10539_10543 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__10538_10542;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__10539_10543;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format.call(null,body,cljs.pprint.init_navigator.call(null,arg),new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__17328_17332;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__17327_17331;
=======
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__10537_10541;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__10536_10540;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"current","current",-1088038603):new cljs.core.Keyword(null,"block","block",664686210));
cljs.pprint.pprint_indent.call(null,relative_to,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"mandatory","mandatory",542802336):new cljs.core.Keyword(null,"fill","fill",883462889)):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"miser","miser",-556060186):new cljs.core.Keyword(null,"linear","linear",872268697)));
cljs.pprint.pprint_newline.call(null,kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"A",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return (function (p1__17335_SHARP_,p2__17336_SHARP_,p3__17337_SHARP_){
return cljs.pprint.format_ascii.call(null,cljs.core.print_str,p1__17335_SHARP_,p2__17336_SHARP_,p3__17337_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"S",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__17338_SHARP_,p2__17339_SHARP_,p3__17340_SHARP_){
return cljs.pprint.format_ascii.call(null,cljs.core.pr_str,p1__17338_SHARP_,p2__17339_SHARP_,p3__17340_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"D",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__17341_SHARP_,p2__17342_SHARP_,p3__17343_SHARP_){
return cljs.pprint.format_integer.call(null,(10),p1__17341_SHARP_,p2__17342_SHARP_,p3__17343_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"B",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__17344_SHARP_,p2__17345_SHARP_,p3__17346_SHARP_){
return cljs.pprint.format_integer.call(null,(2),p1__17344_SHARP_,p2__17345_SHARP_,p3__17346_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"O",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__17347_SHARP_,p2__17348_SHARP_,p3__17349_SHARP_){
return cljs.pprint.format_integer.call(null,(8),p1__17347_SHARP_,p2__17348_SHARP_,p3__17349_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"X",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__17350_SHARP_,p2__17351_SHARP_,p3__17352_SHARP_){
return cljs.pprint.format_integer.call(null,(16),p1__17350_SHARP_,p2__17351_SHARP_,p3__17352_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"R",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(cljs.core.first.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__17353_SHARP_,p2__17354_SHARP_,p3__17355_SHARP_){
return cljs.pprint.format_integer.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(p1__17353_SHARP_),p1__17353_SHARP_,p2__17354_SHARP_,p3__17355_SHARP_);
=======
return (function (p1__10544_SHARP_,p2__10545_SHARP_,p3__10546_SHARP_){
return cljs.pprint.format_ascii.call(null,cljs.core.print_str,p1__10544_SHARP_,p2__10545_SHARP_,p3__10546_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"S",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__10547_SHARP_,p2__10548_SHARP_,p3__10549_SHARP_){
return cljs.pprint.format_ascii.call(null,cljs.core.pr_str,p1__10547_SHARP_,p2__10548_SHARP_,p3__10549_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"D",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__10550_SHARP_,p2__10551_SHARP_,p3__10552_SHARP_){
return cljs.pprint.format_integer.call(null,(10),p1__10550_SHARP_,p2__10551_SHARP_,p3__10552_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"B",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__10553_SHARP_,p2__10554_SHARP_,p3__10555_SHARP_){
return cljs.pprint.format_integer.call(null,(2),p1__10553_SHARP_,p2__10554_SHARP_,p3__10555_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"O",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__10556_SHARP_,p2__10557_SHARP_,p3__10558_SHARP_){
return cljs.pprint.format_integer.call(null,(8),p1__10556_SHARP_,p2__10557_SHARP_,p3__10558_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"X",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__10559_SHARP_,p2__10560_SHARP_,p3__10561_SHARP_){
return cljs.pprint.format_integer.call(null,(16),p1__10559_SHARP_,p2__10560_SHARP_,p3__10561_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"R",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(cljs.core.first.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__10562_SHARP_,p2__10563_SHARP_,p3__10564_SHARP_){
return cljs.pprint.format_integer.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(p1__10562_SHARP_),p1__10562_SHARP_,p2__10563_SHARP_,p3__10564_SHARP_);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4120__auto__;
}
})())){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return (function (p1__17356_SHARP_,p2__17357_SHARP_,p3__17358_SHARP_){
return cljs.pprint.format_old_roman.call(null,p1__17356_SHARP_,p2__17357_SHARP_,p3__17358_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__17359_SHARP_,p2__17360_SHARP_,p3__17361_SHARP_){
return cljs.pprint.format_new_roman.call(null,p1__17359_SHARP_,p2__17360_SHARP_,p3__17361_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__17362_SHARP_,p2__17363_SHARP_,p3__17364_SHARP_){
return cljs.pprint.format_ordinal_english.call(null,p1__17362_SHARP_,p2__17363_SHARP_,p3__17364_SHARP_);
});
} else {
return (function (p1__17365_SHARP_,p2__17366_SHARP_,p3__17367_SHARP_){
return cljs.pprint.format_cardinal_english.call(null,p1__17365_SHARP_,p2__17366_SHARP_,p3__17367_SHARP_);
=======
return (function (p1__10565_SHARP_,p2__10566_SHARP_,p3__10567_SHARP_){
return cljs.pprint.format_old_roman.call(null,p1__10565_SHARP_,p2__10566_SHARP_,p3__10567_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__10568_SHARP_,p2__10569_SHARP_,p3__10570_SHARP_){
return cljs.pprint.format_new_roman.call(null,p1__10568_SHARP_,p2__10569_SHARP_,p3__10570_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__10571_SHARP_,p2__10572_SHARP_,p3__10573_SHARP_){
return cljs.pprint.format_ordinal_english.call(null,p1__10571_SHARP_,p2__10572_SHARP_,p3__10573_SHARP_);
});
} else {
return (function (p1__10574_SHARP_,p2__10575_SHARP_,p3__10576_SHARP_){
return cljs.pprint.format_cardinal_english.call(null,p1__10574_SHARP_,p2__10575_SHARP_,p3__10576_SHARP_);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"P",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition.call(null,navigator,(-1)):navigator);
var strs = (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__17377 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg = cljs.core.nth.call(null,vec__17377,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__17377,(1),null);
=======
var vec__10586 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg = cljs.core.nth.call(null,vec__10586,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__10586,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
cljs.pprint.print.call(null,((cljs.core._EQ_.call(null,arg,(1)))?cljs.core.first.call(null,strs):cljs.core.second.call(null,strs)));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"C",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"char-format","char-format",-1016499218),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"F",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"E",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"G",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"$",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"%",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var n__4607__auto___17395 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_17396 = (0);
while(true){
if((i_17396 < n__4607__auto___17395)){
cljs.pprint.prn.call(null);

var G__17397 = (i_17396 + (1));
i_17396 = G__17397;
=======
var n__4607__auto___10604 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_10605 = (0);
while(true){
if((i_10605 < n__4607__auto___10604)){
cljs.pprint.prn.call(null);

var G__10606 = (i_10605 + (1));
i_10605 = G__10606;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"&",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var cnt_17398 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_17398 > (0))){
=======
var cnt_10607 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_10607 > (0))){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
cljs.pprint.fresh_line.call(null);
} else {
}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var n__4607__auto___17399 = (cnt_17398 - (1));
var i_17400 = (0);
while(true){
if((i_17400 < n__4607__auto___17399)){
cljs.pprint.prn.call(null);

var G__17401 = (i_17400 + (1));
i_17400 = G__17401;
=======
var n__4607__auto___10608 = (cnt_10607 - (1));
var i_10609 = (0);
while(true){
if((i_10609 < n__4607__auto___10608)){
cljs.pprint.prn.call(null);

var G__10610 = (i_10609 + (1));
i_10609 = G__10610;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"|",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var n__4607__auto___17402 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_17403 = (0);
while(true){
if((i_17403 < n__4607__auto___17402)){
cljs.pprint.print.call(null,"\f");

var G__17404 = (i_17403 + (1));
i_17403 = G__17404;
=======
var n__4607__auto___10611 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_10612 = (0);
while(true){
if((i_10612 < n__4607__auto___10611)){
cljs.pprint.print.call(null,"\f");

var G__10613 = (i_10612 + (1));
i_10612 = G__10613;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"~",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"~")));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"\n",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn.call(null);
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"T",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"colnum","colnum",2023796854),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return (function (p1__17368_SHARP_,p2__17369_SHARP_,p3__17370_SHARP_){
return cljs.pprint.relative_tabulation.call(null,p1__17368_SHARP_,p2__17369_SHARP_,p3__17370_SHARP_);
});
} else {
return (function (p1__17371_SHARP_,p2__17372_SHARP_,p3__17373_SHARP_){
return cljs.pprint.absolute_tabulation.call(null,p1__17371_SHARP_,p2__17372_SHARP_,p3__17373_SHARP_);
=======
return (function (p1__10577_SHARP_,p2__10578_SHARP_,p3__10579_SHARP_){
return cljs.pprint.relative_tabulation.call(null,p1__10577_SHARP_,p2__10578_SHARP_,p3__10579_SHARP_);
});
} else {
return (function (p1__10580_SHARP_,p2__10581_SHARP_,p3__10582_SHARP_){
return cljs.pprint.absolute_tabulation.call(null,p1__10580_SHARP_,p2__10581_SHARP_,p3__10582_SHARP_);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"*",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition.call(null,navigator,n);
} else {
return cljs.pprint.relative_reposition.call(null,navigator,(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"?",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__17380 = cljs.pprint.get_format_arg.call(null,navigator);
var subformat = cljs.core.nth.call(null,vec__17380,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__17380,(1),null);
=======
var vec__10589 = cljs.pprint.get_format_arg.call(null,navigator);
var subformat = cljs.core.nth.call(null,vec__10589,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__10589,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
return cljs.pprint.execute_sub_format.call(null,subformat,navigator__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__17383 = cljs.pprint.get_format_arg.call(null,navigator);
var subformat = cljs.core.nth.call(null,vec__17383,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__17383,(1),null);
var vec__17386 = cljs.pprint.next_arg.call(null,navigator__$1);
var subargs = cljs.core.nth.call(null,vec__17386,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__17386,(1),null);
=======
var vec__10592 = cljs.pprint.get_format_arg.call(null,navigator);
var subformat = cljs.core.nth.call(null,vec__10592,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__10592,(1),null);
var vec__10595 = cljs.pprint.next_arg.call(null,navigator__$1);
var subargs = cljs.core.nth.call(null,vec__10595,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__10595,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
var sub_navigator = cljs.pprint.init_navigator.call(null,subargs);
cljs.pprint.execute_sub_format.call(null,subformat,sub_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"(",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),")",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),null,new cljs.core.Keyword(null,"else","else",-1508377146),null], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4120__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return ((function (mod_case_writer){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return (function (p1__17374_SHARP_,p2__17375_SHARP_,p3__17376_SHARP_){
return cljs.pprint.modify_case.call(null,mod_case_writer,p1__17374_SHARP_,p2__17375_SHARP_,p3__17376_SHARP_);
=======
return (function (p1__10583_SHARP_,p2__10584_SHARP_,p3__10585_SHARP_){
return cljs.pprint.modify_case.call(null,mod_case_writer,p1__10583_SHARP_,p2__10584_SHARP_,p3__10585_SHARP_);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});
;})(mod_case_writer))
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),")",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"[",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),"]",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),true,new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.Keyword(null,"last","last",1105735132)], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),";",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"max-columns","max-columns",1742323262),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"separator","separator",-1628749125),true], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"]",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"{",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right","right",-452581833),"}",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),false], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4120__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"}",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"<",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),">",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),true,new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.Keyword(null,"first","first",-644103046)], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),">",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"^",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(3),[new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007):new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333));
if(cljs.core.truth_((function (){var and__4120__auto__ = arg1;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = arg2;
if(cljs.core.truth_(and__4120__auto____$1)){
return arg3;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
if((((arg1 <= arg2)) && ((arg2 <= arg3)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = arg1;
if(cljs.core.truth_(and__4120__auto__)){
return arg2;
} else {
return and__4120__auto__;
}
})())){
if(cljs.core._EQ_.call(null,arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.call(null,arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"W",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),null,new cljs.core.Keyword(null,"length","length",588987862),null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),true], null):cljs.core.PersistentVector.EMPTY));
return ((function (bindings){
return (function (params__$1,navigator,offsets){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__17389 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__17389,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__17389,(1),null);
=======
var vec__10598 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__10598,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__10598,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
if(cljs.core.truth_(cljs.core.apply.call(null,cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
;})(bindings))
} else {
return (function (params__$1,navigator,offsets){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__17392 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__17392,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__17392,(1),null);
=======
var vec__10601 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__10601,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__10601,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
if(cljs.core.truth_(cljs.pprint.write_out.call(null,arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"_",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"I",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335),null,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196),null], null), null);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__17405){
var vec__17406 = p__17405;
var s = cljs.core.nth.call(null,vec__17406,(0),null);
var offset = cljs.core.nth.call(null,vec__17406,(1),null);
var saw_comma = cljs.core.nth.call(null,vec__17406,(2),null);
=======
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__10614){
var vec__10615 = p__10614;
var s = cljs.core.nth.call(null,vec__10615,(0),null);
var offset = cljs.core.nth.call(null,vec__10615,(1),null);
var saw_comma = cljs.core.nth.call(null,vec__10615,(2),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first.call(null,param);
var remainder = cljs.core.subs.call(null,s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if((!(cljs.core._EQ_.call(null,",",cljs.core.nth.call(null,remainder,(0)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error.call(null,"Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume.call(null,cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 *                                    representation
 */
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__17409){
var vec__17410 = p__17409;
var p = cljs.core.nth.call(null,vec__17410,(0),null);
var offset = cljs.core.nth.call(null,vec__17410,(1),null);
=======
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__10618){
var vec__10619 = p__10618;
var p = cljs.core.nth.call(null,vec__10619,(0),null);
var offset = cljs.core.nth.call(null,vec__10619,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,p.length,(0)))?null:((((cljs.core._EQ_.call(null,p.length,(1))) && (cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.call(null,p,(0))))))?new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196):((((cljs.core._EQ_.call(null,p.length,(1))) && (cljs.core._EQ_.call(null,"#",cljs.core.nth.call(null,p,(0))))))?new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335):((((cljs.core._EQ_.call(null,p.length,(2))) && (cljs.core._EQ_.call(null,"'",cljs.core.nth.call(null,p,(0))))))?cljs.core.nth.call(null,p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",new cljs.core.Keyword(null,"colon","colon",-965200945),"@",new cljs.core.Keyword(null,"at","at",1476951349)], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return cljs.pprint.consume.call(null,(function (p__17413){
var vec__17414 = p__17413;
var s__$1 = cljs.core.nth.call(null,vec__17414,(0),null);
var offset__$1 = cljs.core.nth.call(null,vec__17414,(1),null);
var flags = cljs.core.nth.call(null,vec__17414,(2),null);
=======
return cljs.pprint.consume.call(null,(function (p__10622){
var vec__10623 = p__10622;
var s__$1 = cljs.core.nth.call(null,vec__10623,(0),null);
var offset__$1 = cljs.core.nth.call(null,vec__10623,(1),null);
var flags = cljs.core.nth.call(null,vec__10623,(2),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.call(null,cljs.pprint.flag_defs,cljs.core.first.call(null,s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_.call(null,flags,flag)){
return cljs.pprint.format_error.call(null,["Flag \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,s__$1)),"\" appears more than once in a directive"].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.call(null,flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__4120__auto__){
return new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__4120__auto__;
}
})())){
cljs.pprint.format_error.call(null,["\"@\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__4120__auto__){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__4120__auto__;
}
})())){
cljs.pprint.format_error.call(null,["\":\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"both","both",-393648840).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__4120__auto__){
var and__4120__auto____$1 = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__4120__auto____$1)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return cljs.pprint.format_error.call(null,["Cannot combine \"@\" and \":\" flags for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),(function (){var x__4222__auto__ = cljs.core.nth.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__4223__auto__ = cljs.core.nth.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags.call(null,def,flags);

if((cljs.core.count.call(null,params) > cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error.call(null,cljs.pprint.cl_format.call(null,null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def),cljs.core.count.call(null,params),cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def))),cljs.core.second.call(null,cljs.core.first.call(null,params)));
} else {
}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__17417_SHARP_,p2__17418_SHARP_){
var val = cljs.core.first.call(null,p1__17417_SHARP_);
if((!((((val == null)) || (cljs.core.contains_QMARK_.call(null,cljs.pprint.special_params,val)) || (cljs.core._EQ_.call(null,cljs.core.second.call(null,cljs.core.second.call(null,p2__17418_SHARP_)),cljs.core.type.call(null,val))))))){
return cljs.pprint.format_error.call(null,["Parameter ",cljs.core.name.call(null,cljs.core.first.call(null,p2__17418_SHARP_))," has bad type in directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,val))].join(''),cljs.core.second.call(null,p1__17417_SHARP_));
=======
cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__10626_SHARP_,p2__10627_SHARP_){
var val = cljs.core.first.call(null,p1__10626_SHARP_);
if((!((((val == null)) || (cljs.core.contains_QMARK_.call(null,cljs.pprint.special_params,val)) || (cljs.core._EQ_.call(null,cljs.core.second.call(null,cljs.core.second.call(null,p2__10627_SHARP_)),cljs.core.type.call(null,val))))))){
return cljs.pprint.format_error.call(null,["Parameter ",cljs.core.name.call(null,cljs.core.first.call(null,p2__10627_SHARP_))," has bad type in directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,val))].join(''),cljs.core.second.call(null,p1__10626_SHARP_));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
} else {
return null;
}
}),params,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)));

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return cljs.core.merge.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse.call(null,(function (){var iter__4523__auto__ = (function cljs$pprint$map_params_$_iter__17422(s__17423){
return (new cljs.core.LazySeq(null,(function (){
var s__17423__$1 = s__17423;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__17423__$1);
if(temp__5720__auto__){
var s__17423__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17423__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__17423__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__17425 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__17424 = (0);
while(true){
if((i__17424 < size__4522__auto__)){
var vec__17426 = cljs.core._nth.call(null,c__4521__auto__,i__17424);
var name = cljs.core.nth.call(null,vec__17426,(0),null);
var vec__17429 = cljs.core.nth.call(null,vec__17426,(1),null);
var default$ = cljs.core.nth.call(null,vec__17429,(0),null);
cljs.core.chunk_append.call(null,b__17425,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__17438 = (i__17424 + (1));
i__17424 = G__17438;
=======
return cljs.core.merge.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse.call(null,(function (){var iter__4523__auto__ = (function cljs$pprint$map_params_$_iter__10631(s__10632){
return (new cljs.core.LazySeq(null,(function (){
var s__10632__$1 = s__10632;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__10632__$1);
if(temp__5720__auto__){
var s__10632__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10632__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__10632__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__10634 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__10633 = (0);
while(true){
if((i__10633 < size__4522__auto__)){
var vec__10635 = cljs.core._nth.call(null,c__4521__auto__,i__10633);
var name = cljs.core.nth.call(null,vec__10635,(0),null);
var vec__10638 = cljs.core.nth.call(null,vec__10635,(1),null);
var default$ = cljs.core.nth.call(null,vec__10638,(0),null);
cljs.core.chunk_append.call(null,b__10634,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__10647 = (i__10633 + (1));
i__10633 = G__10647;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
} else {
return true;
}
break;
}
})()){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17425),cljs$pprint$map_params_$_iter__17422.call(null,cljs.core.chunk_rest.call(null,s__17423__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17425),null);
}
} else {
var vec__17432 = cljs.core.first.call(null,s__17423__$2);
var name = cljs.core.nth.call(null,vec__17432,(0),null);
var vec__17435 = cljs.core.nth.call(null,vec__17432,(1),null);
var default$ = cljs.core.nth.call(null,vec__17435,(0),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__17422.call(null,cljs.core.rest.call(null,s__17423__$2)));
=======
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10634),cljs$pprint$map_params_$_iter__10631.call(null,cljs.core.chunk_rest.call(null,s__10632__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10634),null);
}
} else {
var vec__10641 = cljs.core.first.call(null,s__10632__$2);
var name = cljs.core.nth.call(null,vec__10641,(0),null);
var vec__10644 = cljs.core.nth.call(null,vec__10641,(1),null);
var default$ = cljs.core.nth.call(null,vec__10644,(0),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__10631.call(null,cljs.core.rest.call(null,s__10632__$2)));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def));
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
})())),cljs.core.reduce.call(null,(function (p1__17419_SHARP_,p2__17420_SHARP_){
return cljs.core.apply.call(null,cljs.core.assoc,p1__17419_SHARP_,p2__17420_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__17421_SHARP_){
return cljs.core.first.call(null,cljs.core.nth.call(null,p1__17421_SHARP_,(1)));
}),cljs.core.zipmap.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)),params))),flags);
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__17439 = cljs.pprint.extract_params.call(null,s,offset);
var raw_params = cljs.core.nth.call(null,vec__17439,(0),null);
var vec__17442 = cljs.core.nth.call(null,vec__17439,(1),null);
var rest = cljs.core.nth.call(null,vec__17442,(0),null);
var offset__$1 = cljs.core.nth.call(null,vec__17442,(1),null);
var vec__17445 = cljs.pprint.extract_flags.call(null,rest,offset__$1);
var _ = cljs.core.nth.call(null,vec__17445,(0),null);
var vec__17448 = cljs.core.nth.call(null,vec__17445,(1),null);
var rest__$1 = cljs.core.nth.call(null,vec__17448,(0),null);
var offset__$2 = cljs.core.nth.call(null,vec__17448,(1),null);
var flags = cljs.core.nth.call(null,vec__17448,(2),null);
=======
})())),cljs.core.reduce.call(null,(function (p1__10628_SHARP_,p2__10629_SHARP_){
return cljs.core.apply.call(null,cljs.core.assoc,p1__10628_SHARP_,p2__10629_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__10630_SHARP_){
return cljs.core.first.call(null,cljs.core.nth.call(null,p1__10630_SHARP_,(1)));
}),cljs.core.zipmap.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)),params))),flags);
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__10648 = cljs.pprint.extract_params.call(null,s,offset);
var raw_params = cljs.core.nth.call(null,vec__10648,(0),null);
var vec__10651 = cljs.core.nth.call(null,vec__10648,(1),null);
var rest = cljs.core.nth.call(null,vec__10651,(0),null);
var offset__$1 = cljs.core.nth.call(null,vec__10651,(1),null);
var vec__10654 = cljs.pprint.extract_flags.call(null,rest,offset__$1);
var _ = cljs.core.nth.call(null,vec__10654,(0),null);
var vec__10657 = cljs.core.nth.call(null,vec__10654,(1),null);
var rest__$1 = cljs.core.nth.call(null,vec__10657,(0),null);
var offset__$2 = cljs.core.nth.call(null,vec__10657,(1),null);
var flags = cljs.core.nth.call(null,vec__10657,(2),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
var directive = cljs.core.first.call(null,rest__$1);
var def = cljs.core.get.call(null,cljs.pprint.directive_table,clojure.string.upper_case.call(null,directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params.call(null,def,cljs.core.map.call(null,cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not.call(null,directive)){
cljs.pprint.format_error.call(null,"Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not.call(null,def)){
cljs.pprint.format_error.call(null,["Directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(directive),"\" is undefined"].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656).cljs$core$IFn$_invoke$arity$1(def).call(null,params,offset__$2),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.call(null,rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = ((cljs.core._EQ_.call(null,"\n",new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count.call(null,remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.call(null,remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.call(null,s);

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",-1989541586),s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__4120__auto__ = new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__4120__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__17451 = cljs.pprint.collect_clauses.call(null,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),remainder);
var subex = cljs.core.nth.call(null,vec__17451,(0),null);
var remainder__$1 = cljs.core.nth.call(null,vec__17451,(1),null);
=======
var vec__10660 = cljs.pprint.collect_clauses.call(null,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),remainder);
var subex = cljs.core.nth.call(null,vec__10660,(0),null);
var remainder__$1 = cljs.core.nth.call(null,vec__10660,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map.call(null,subex,new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$))),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume.call(null,(function (remainder__$1){
if(cljs.core.empty_QMARK_.call(null,remainder__$1)){
return cljs.pprint.format_error.call(null,"No closing bracket found.",offset);
} else {
var this$ = cljs.core.first.call(null,remainder__$1);
var remainder__$2 = cljs.core.next.call(null,remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket.call(null,this$))){
return cljs.pprint.process_bracket.call(null,this$,remainder__$2);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bracket_info),new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right-bracket","right-bracket",951856080),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_.call(null,this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"else","else",-1508377146),null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_.call(null,this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"separator","separator",-1628749125),null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return cljs.core.second.call(null,cljs.pprint.consume.call(null,(function (p__17454){
var vec__17455 = p__17454;
var clause_map = cljs.core.nth.call(null,vec__17455,(0),null);
var saw_else = cljs.core.nth.call(null,vec__17455,(1),null);
var remainder__$1 = cljs.core.nth.call(null,vec__17455,(2),null);
var vec__17458 = cljs.pprint.process_clause.call(null,bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.call(null,vec__17458,(0),null);
var vec__17461 = cljs.core.nth.call(null,vec__17458,(1),null);
var type = cljs.core.nth.call(null,vec__17461,(0),null);
var right_params = cljs.core.nth.call(null,vec__17461,(1),null);
var else_params = cljs.core.nth.call(null,vec__17461,(2),null);
var remainder__$2 = cljs.core.nth.call(null,vec__17461,(3),null);
=======
return cljs.core.second.call(null,cljs.pprint.consume.call(null,(function (p__10663){
var vec__10664 = p__10663;
var clause_map = cljs.core.nth.call(null,vec__10664,(0),null);
var saw_else = cljs.core.nth.call(null,vec__10664,(1),null);
var remainder__$1 = cljs.core.nth.call(null,vec__10664,(2),null);
var vec__10667 = cljs.pprint.process_clause.call(null,bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.call(null,vec__10667,(0),null);
var vec__10670 = cljs.core.nth.call(null,vec__10667,(1),null);
var type = cljs.core.nth.call(null,vec__10670,(0),null);
var right_params = cljs.core.nth.call(null,vec__10670,(1),null);
var else_params = cljs.core.nth.call(null,vec__10670,(2),null);
var remainder__$2 = cljs.core.nth.call(null,vec__10670,(3),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"right-bracket","right-bracket",951856080))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(saw_else)?new cljs.core.Keyword(null,"else","else",-1508377146):new cljs.core.Keyword(null,"clauses","clauses",1454841241)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"right-params","right-params",-1790676237),right_params])),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"else","else",-1508377146))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error.call(null,"Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error.call(null,"An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(clause_map))))){
return cljs.pprint.format_error.call(null,"The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"else-params","else-params",-832171646),else_params], null)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"separator","separator",-1628749125))){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error.call(null,"A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error.call(null,"A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (remainder){
var this$ = cljs.core.first.call(null,remainder);
var remainder__$1 = cljs.core.next.call(null,remainder);
var bracket = new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket.call(null,this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var _STAR_format_str_STAR__orig_val__17464 = cljs.pprint._STAR_format_str_STAR_;
var _STAR_format_str_STAR__temp_val__17465 = format_str;
cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR__temp_val__17465;

try{return cljs.pprint.process_nesting.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,((function (_STAR_format_str_STAR__orig_val__17464,_STAR_format_str_STAR__temp_val__17465){
return (function (p__17466){
var vec__17467 = p__17466;
var s = cljs.core.nth.call(null,vec__17467,(0),null);
var offset = cljs.core.nth.call(null,vec__17467,(1),null);
=======
var _STAR_format_str_STAR__orig_val__10673 = cljs.pprint._STAR_format_str_STAR_;
var _STAR_format_str_STAR__temp_val__10674 = format_str;
cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR__temp_val__10674;

try{return cljs.pprint.process_nesting.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,((function (_STAR_format_str_STAR__orig_val__10673,_STAR_format_str_STAR__temp_val__10674){
return (function (p__10675){
var vec__10676 = p__10675;
var s = cljs.core.nth.call(null,vec__10676,(0),null);
var offset = cljs.core.nth.call(null,vec__10676,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
if(cljs.core.empty_QMARK_.call(null,s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string.call(null,s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive.call(null,cljs.core.subs.call(null,s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string.call(null,cljs.core.subs.call(null,s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,tilde),(tilde + offset)], null)], null);

}
}
}
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
});})(_STAR_format_str_STAR__orig_val__17464,_STAR_format_str_STAR__temp_val__17465))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR__orig_val__17464;
=======
});})(_STAR_format_str_STAR__orig_val__10673,_STAR_format_str_STAR__temp_val__10674))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR__orig_val__10673;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_.call(null,format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1))));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = cljs.core.some.call(null,cljs.pprint.needs_pretty,cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1)))));
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return cljs.core.some.call(null,cljs.pprint.needs_pretty,cljs.core.first.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1)))));
}
}
})())){
return true;
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var G__17470 = cljs.core.next.call(null,format__$1);
format__$1 = G__17470;
=======
var G__10679 = cljs.core.next.call(null,format__$1);
format__$1 = G__10679;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var G__17472 = arguments.length;
switch (G__17472) {
=======
var G__10681 = arguments.length;
switch (G__10681) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
case 3:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = ((((cljs.core.not.call(null,stream)) || (stream === true)))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = ((((cljs.pprint.needs_pretty.call(null,format)) && (cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,real_stream)))))?cljs.pprint.get_pretty_writer.call(null,real_stream):real_stream);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var _STAR_out_STAR__orig_val__17473 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__17474 = wrapped_stream;
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__17474;
=======
var _STAR_out_STAR__orig_val__10682 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__10683 = wrapped_stream;
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__10683;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js

try{try{cljs.pprint.execute_format.call(null,format,args);
}finally {if((!((real_stream === wrapped_stream)))){
cljs.core._flush.call(null,wrapped_stream);
} else {
}
}
if(cljs.core.not.call(null,stream)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
if(stream === true){
return cljs.core.string_print.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
} else {
return null;

}
}
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__17473;
=======
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__10682;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context.call(null,(function (element,context){
if(cljs.pprint.abort_QMARK_.call(null,context)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__17475 = cljs.pprint.realize_parameter_list.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.call(null,vec__17475,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__17475,(1),null);
var vec__17478 = cljs.pprint.unzip_map.call(null,params);
var params__$1 = cljs.core.nth.call(null,vec__17478,(0),null);
var offsets = cljs.core.nth.call(null,vec__17478,(1),null);
=======
var vec__10684 = cljs.pprint.realize_parameter_list.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.call(null,vec__10684,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__10684,(1),null);
var vec__10687 = cljs.pprint.unzip_map.call(null,params);
var params__$1 = cljs.core.nth.call(null,vec__10687,(0),null);
var offsets = cljs.core.nth.call(null,vec__10687,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
var params__$2 = cljs.core.assoc.call(null,params__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822),args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.call(null,new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
});

cljs.pprint.execute_format.cljs$lang$maxFixedArity = 3;

cljs.pprint.cached_compile = cljs.core.memoize.call(null,cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value. 
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method.call(null,multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"quote","quote",1377916282,null),"'",new cljs.core.Symbol(null,"var","var",870848730,null),"#'",new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),"@",new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",843087510,null),"~",new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),"@",new cljs.core.Symbol("cljs.core","unquote","cljs.core/unquote",1013085760,null),"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = cljs.pprint.reader_macros.call(null,cljs.core.first.call(null,alis));
if(cljs.core.truth_((function (){var and__4120__auto__ = macro_char;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,alis));
} else {
return and__4120__auto__;
}
})())){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var _STAR_current_level_STAR__orig_val__17482_17487 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__17483_17488 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__17484_17489 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__17485_17490 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__17484_17489;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__17485_17490;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

var length_count17486_17491 = (0);
var alis_17492__$1 = cljs.core.seq.call(null,alis);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count17486_17491 < cljs.core._STAR_print_length_STAR_)))){
if(alis_17492__$1){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_17492__$1));

if(cljs.core.next.call(null,alis_17492__$1)){
=======
var _STAR_current_level_STAR__orig_val__10691_10696 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__10692_10697 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__10693_10698 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__10694_10699 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__10693_10698;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__10694_10699;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

var length_count10695_10700 = (0);
var alis_10701__$1 = cljs.core.seq.call(null,alis);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count10695_10700 < cljs.core._STAR_print_length_STAR_)))){
if(alis_10701__$1){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_10701__$1));

if(cljs.core.next.call(null,alis_10701__$1)){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var G__17493 = (length_count17486_17491 + (1));
var G__17494 = cljs.core.next.call(null,alis_17492__$1);
length_count17486_17491 = G__17493;
alis_17492__$1 = G__17494;
=======
var G__10702 = (length_count10695_10700 + (1));
var G__10703 = cljs.core.next.call(null,alis_10701__$1);
length_count10695_10700 = G__10702;
alis_10701__$1 = G__10703;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__17483_17488;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__17482_17487;
=======
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__10692_10697;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__10691_10696;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not.call(null,cljs.pprint.pprint_reader_macro.call(null,alis))){
return cljs.pprint.pprint_simple_list.call(null,alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var _STAR_current_level_STAR__orig_val__17495_17500 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__17496_17501 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__17497_17502 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__17498_17503 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__17497_17502;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__17498_17503;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count17499_17504 = (0);
var aseq_17505 = cljs.core.seq.call(null,avec);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count17499_17504 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_17505){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,aseq_17505));

if(cljs.core.next.call(null,aseq_17505)){
=======
var _STAR_current_level_STAR__orig_val__10704_10709 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__10705_10710 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__10706_10711 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__10707_10712 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__10706_10711;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__10707_10712;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count10708_10713 = (0);
var aseq_10714 = cljs.core.seq.call(null,avec);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count10708_10713 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_10714){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,aseq_10714));

if(cljs.core.next.call(null,aseq_10714)){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var G__17506 = (length_count17499_17504 + (1));
var G__17507 = cljs.core.next.call(null,aseq_17505);
length_count17499_17504 = G__17506;
aseq_17505 = G__17507;
=======
var G__10715 = (length_count10708_10713 + (1));
var G__10716 = cljs.core.next.call(null,aseq_10714);
length_count10708_10713 = G__10715;
aseq_10714 = G__10716;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__17496_17501;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__17495_17500;
=======
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__10705_10710;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__10704_10709;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}}

return null;
});
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.pprint_array = (function (){var format_in__16644__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__16645__auto__ = ((typeof format_in__16644__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16644__auto__):format_in__16644__auto__);
return ((function (format_in__16644__auto__,cf__16645__auto__){
return (function() { 
var G__17508__delegate = function (args__16646__auto__){
var navigator__16647__auto__ = cljs.pprint.init_navigator.call(null,args__16646__auto__);
return cljs.pprint.execute_format.call(null,cf__16645__auto__,navigator__16647__auto__);
};
var G__17508 = function (var_args){
var args__16646__auto__ = null;
if (arguments.length > 0) {
var G__17509__i = 0, G__17509__a = new Array(arguments.length -  0);
while (G__17509__i < G__17509__a.length) {G__17509__a[G__17509__i] = arguments[G__17509__i + 0]; ++G__17509__i;}
  args__16646__auto__ = new cljs.core.IndexedSeq(G__17509__a,0,null);
} 
return G__17508__delegate.call(this,args__16646__auto__);};
G__17508.cljs$lang$maxFixedArity = 0;
G__17508.cljs$lang$applyTo = (function (arglist__17510){
var args__16646__auto__ = cljs.core.seq(arglist__17510);
return G__17508__delegate(args__16646__auto__);
});
G__17508.cljs$core$IFn$_invoke$arity$variadic = G__17508__delegate;
return G__17508;
})()
;
;})(format_in__16644__auto__,cf__16645__auto__))
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
var vec__17511 = (((!(cljs.core.record_QMARK_.call(null,amap))))?new cljs.core.Var(function(){return cljs.core.lift_ns;},new cljs.core.Symbol("cljs.core","lift-ns","cljs.core/lift-ns",463499081,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"lift-ns","lift-ns",602311926,null),"cljs/core.cljs",(15),(1),(10284),(10284),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null)], null)),"Returns [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)])).call(null,amap):null);
var ns = cljs.core.nth.call(null,vec__17511,(0),null);
var lift_map = cljs.core.nth.call(null,vec__17511,(1),null);
=======
cljs.pprint.pprint_array = (function (){var format_in__9853__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__9854__auto__ = ((typeof format_in__9853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__9853__auto__):format_in__9853__auto__);
return ((function (format_in__9853__auto__,cf__9854__auto__){
return (function() { 
var G__10717__delegate = function (args__9855__auto__){
var navigator__9856__auto__ = cljs.pprint.init_navigator.call(null,args__9855__auto__);
return cljs.pprint.execute_format.call(null,cf__9854__auto__,navigator__9856__auto__);
};
var G__10717 = function (var_args){
var args__9855__auto__ = null;
if (arguments.length > 0) {
var G__10718__i = 0, G__10718__a = new Array(arguments.length -  0);
while (G__10718__i < G__10718__a.length) {G__10718__a[G__10718__i] = arguments[G__10718__i + 0]; ++G__10718__i;}
  args__9855__auto__ = new cljs.core.IndexedSeq(G__10718__a,0,null);
} 
return G__10717__delegate.call(this,args__9855__auto__);};
G__10717.cljs$lang$maxFixedArity = 0;
G__10717.cljs$lang$applyTo = (function (arglist__10719){
var args__9855__auto__ = cljs.core.seq(arglist__10719);
return G__10717__delegate(args__9855__auto__);
});
G__10717.cljs$core$IFn$_invoke$arity$variadic = G__10717__delegate;
return G__10717;
})()
;
;})(format_in__9853__auto__,cf__9854__auto__))
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
var vec__10720 = (((!(cljs.core.record_QMARK_.call(null,amap))))?new cljs.core.Var(function(){return cljs.core.lift_ns;},new cljs.core.Symbol("cljs.core","lift-ns","cljs.core/lift-ns",463499081,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"lift-ns","lift-ns",602311926,null),"cljs/core.cljs",(15),(1),(10284),(10284),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null)], null)),"Returns [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)])).call(null,amap):null);
var ns = cljs.core.nth.call(null,vec__10720,(0),null);
var lift_map = cljs.core.nth.call(null,vec__10720,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
var amap__$1 = (function (){var or__4131__auto__ = lift_map;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return amap;
}
})();
var prefix = (cljs.core.truth_(ns)?["#:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"{"].join(''):"{");
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var _STAR_current_level_STAR__orig_val__17514_17523 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__17515_17524 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__17516_17525 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__17517_17526 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__17516_17525;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__17517_17526;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count17518_17527 = (0);
var aseq_17528 = cljs.core.seq.call(null,amap__$1);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count17518_17527 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_17528){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__17519_17529 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__17520_17530 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__17521_17531 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__17522_17532 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__17521_17531;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__17522_17532;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out.call(null,cljs.core.ffirst.call(null,aseq_17528));
=======
var _STAR_current_level_STAR__orig_val__10723_10732 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__10724_10733 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__10725_10734 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__10726_10735 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__10725_10734;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__10726_10735;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count10727_10736 = (0);
var aseq_10737 = cljs.core.seq.call(null,amap__$1);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count10727_10736 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_10737){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__10728_10738 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__10729_10739 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__10730_10740 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__10731_10741 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__10730_10740;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__10731_10741;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out.call(null,cljs.core.ffirst.call(null,aseq_10737));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js

cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

cljs.pprint._STAR_current_length_STAR_ = (0);

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.write_out.call(null,cljs.core.fnext.call(null,cljs.core.first.call(null,aseq_17528)));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__17520_17530;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__17519_17529;
}}


if(cljs.core.next.call(null,aseq_17528)){
=======
cljs.pprint.write_out.call(null,cljs.core.fnext.call(null,cljs.core.first.call(null,aseq_10737)));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__10729_10739;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__10728_10738;
}}


if(cljs.core.next.call(null,aseq_10737)){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var G__17533 = (length_count17518_17527 + (1));
var G__17534 = cljs.core.next.call(null,aseq_17528);
length_count17518_17527 = G__17533;
aseq_17528 = G__17534;
=======
var G__10742 = (length_count10727_10736 + (1));
var G__10743 = cljs.core.next.call(null,aseq_10737);
length_count10727_10736 = G__10742;
aseq_10737 = G__10743;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__17515_17524;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__17514_17523;
=======
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__10724_10733;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__10723_10732;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.pr_str.call(null,obj));
});
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.pprint_set = (function (){var format_in__16644__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__16645__auto__ = ((typeof format_in__16644__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16644__auto__):format_in__16644__auto__);
return ((function (format_in__16644__auto__,cf__16645__auto__){
return (function() { 
var G__17535__delegate = function (args__16646__auto__){
var navigator__16647__auto__ = cljs.pprint.init_navigator.call(null,args__16646__auto__);
return cljs.pprint.execute_format.call(null,cf__16645__auto__,navigator__16647__auto__);
};
var G__17535 = function (var_args){
var args__16646__auto__ = null;
if (arguments.length > 0) {
var G__17536__i = 0, G__17536__a = new Array(arguments.length -  0);
while (G__17536__i < G__17536__a.length) {G__17536__a[G__17536__i] = arguments[G__17536__i + 0]; ++G__17536__i;}
  args__16646__auto__ = new cljs.core.IndexedSeq(G__17536__a,0,null);
} 
return G__17535__delegate.call(this,args__16646__auto__);};
G__17535.cljs$lang$maxFixedArity = 0;
G__17535.cljs$lang$applyTo = (function (arglist__17537){
var args__16646__auto__ = cljs.core.seq(arglist__17537);
return G__17535__delegate(args__16646__auto__);
});
G__17535.cljs$core$IFn$_invoke$arity$variadic = G__17535__delegate;
return G__17535;
})()
;
;})(format_in__16644__auto__,cf__16645__auto__))
=======
cljs.pprint.pprint_set = (function (){var format_in__9853__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__9854__auto__ = ((typeof format_in__9853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__9853__auto__):format_in__9853__auto__);
return ((function (format_in__9853__auto__,cf__9854__auto__){
return (function() { 
var G__10744__delegate = function (args__9855__auto__){
var navigator__9856__auto__ = cljs.pprint.init_navigator.call(null,args__9855__auto__);
return cljs.pprint.execute_format.call(null,cf__9854__auto__,navigator__9856__auto__);
};
var G__10744 = function (var_args){
var args__9855__auto__ = null;
if (arguments.length > 0) {
var G__10745__i = 0, G__10745__a = new Array(arguments.length -  0);
while (G__10745__i < G__10745__a.length) {G__10745__a[G__10745__i] = arguments[G__10745__i + 0]; ++G__10745__i;}
  args__9855__auto__ = new cljs.core.IndexedSeq(G__10745__a,0,null);
} 
return G__10744__delegate.call(this,args__9855__auto__);};
G__10744.cljs$lang$maxFixedArity = 0;
G__10744.cljs$lang$applyTo = (function (arglist__10746){
var args__9855__auto__ = cljs.core.seq(arglist__10746);
return G__10744__delegate(args__9855__auto__);
});
G__10744.cljs$core$IFn$_invoke$arity$variadic = G__10744__delegate;
return G__10744;
})()
;
;})(format_in__9853__auto__,cf__9854__auto__))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__4131__auto__ = (function (){var temp__5720__auto__ = cljs.core.re_find.call(null,/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__5720__auto__)){
var match = temp__5720__auto__;
return cljs.pprint.type_map.call(null,match);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = ["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.map_ref_type.call(null,cljs.core.type.call(null,o).name)),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.getUid(o)),": "].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var _STAR_current_level_STAR__orig_val__17538_17544 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__17539_17545 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__17540_17546 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__17541_17547 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__17540_17546;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__17541_17547;
=======
var _STAR_current_level_STAR__orig_val__10747_10753 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__10748_10754 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__10749_10755 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__10750_10756 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__10749_10755;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__10750_10756;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(- (cljs.core.count.call(null,prefix) - (2))));

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

cljs.pprint.write_out.call(null,(((function (){var and__4120__auto__ = (((!((o == null))))?(((((o.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IPending$))))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPending,o));
if(and__4120__auto__){
return (!(cljs.core._realized_QMARK_.call(null,o)));
} else {
return and__4120__auto__;
}
})())?new cljs.core.Keyword(null,"not-delivered","not-delivered",1599158697):cljs.core.deref.call(null,o)));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__17539_17545;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__17538_17544;
=======
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__10748_10754;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__10747_10753;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}}

return null;
});
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.pprint_pqueue = (function (){var format_in__16644__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__16645__auto__ = ((typeof format_in__16644__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16644__auto__):format_in__16644__auto__);
return ((function (format_in__16644__auto__,cf__16645__auto__){
return (function() { 
var G__17548__delegate = function (args__16646__auto__){
var navigator__16647__auto__ = cljs.pprint.init_navigator.call(null,args__16646__auto__);
return cljs.pprint.execute_format.call(null,cf__16645__auto__,navigator__16647__auto__);
};
var G__17548 = function (var_args){
var args__16646__auto__ = null;
if (arguments.length > 0) {
var G__17549__i = 0, G__17549__a = new Array(arguments.length -  0);
while (G__17549__i < G__17549__a.length) {G__17549__a[G__17549__i] = arguments[G__17549__i + 0]; ++G__17549__i;}
  args__16646__auto__ = new cljs.core.IndexedSeq(G__17549__a,0,null);
} 
return G__17548__delegate.call(this,args__16646__auto__);};
G__17548.cljs$lang$maxFixedArity = 0;
G__17548.cljs$lang$applyTo = (function (arglist__17550){
var args__16646__auto__ = cljs.core.seq(arglist__17550);
return G__17548__delegate(args__16646__auto__);
});
G__17548.cljs$core$IFn$_invoke$arity$variadic = G__17548__delegate;
return G__17548;
})()
;
;})(format_in__16644__auto__,cf__16645__auto__))
=======
cljs.pprint.pprint_pqueue = (function (){var format_in__9853__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__9854__auto__ = ((typeof format_in__9853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__9853__auto__):format_in__9853__auto__);
return ((function (format_in__9853__auto__,cf__9854__auto__){
return (function() { 
var G__10757__delegate = function (args__9855__auto__){
var navigator__9856__auto__ = cljs.pprint.init_navigator.call(null,args__9855__auto__);
return cljs.pprint.execute_format.call(null,cf__9854__auto__,navigator__9856__auto__);
};
var G__10757 = function (var_args){
var args__9855__auto__ = null;
if (arguments.length > 0) {
var G__10758__i = 0, G__10758__a = new Array(arguments.length -  0);
while (G__10758__i < G__10758__a.length) {G__10758__a[G__10758__i] = arguments[G__10758__i + 0]; ++G__10758__i;}
  args__9855__auto__ = new cljs.core.IndexedSeq(G__10758__a,0,null);
} 
return G__10757__delegate.call(this,args__9855__auto__);};
G__10757.cljs$lang$maxFixedArity = 0;
G__10757.cljs$lang$applyTo = (function (arglist__10759){
var args__9855__auto__ = cljs.core.seq(arglist__10759);
return G__10757__delegate(args__9855__auto__);
});
G__10757.cljs$core$IFn$_invoke$arity$variadic = G__10757__delegate;
return G__10757;
})()
;
;})(format_in__9853__auto__,cf__9854__auto__))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return new cljs.core.Keyword(null,"queue","queue",1455835879);
} else {
if((((!((obj == null))))?(((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$))))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,obj))){
return new cljs.core.Keyword(null,"deref","deref",-145586795);
} else {
if((obj instanceof cljs.core.Symbol)){
return new cljs.core.Keyword(null,"symbol","symbol",-1038572696);
} else {
if(cljs.core.seq_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"list","list",765357683);
} else {
if(cljs.core.map_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(cljs.core.vector_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"vector","vector",1902966158);
} else {
if(cljs.core.set_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((obj == null)){
return null;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);

}
}
}
}
}
}
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.simple_dispatch !== 'undefined')){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"list","list",765357683),cljs.pprint.pprint_list);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.pprint.pprint_vector);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"map","map",1371690461),cljs.pprint.pprint_map);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"set","set",304602554),cljs.pprint.pprint_set);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.pr_str.call(null,null));
}));
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch.call(null,cljs.pprint.simple_dispatch);
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_.call(null,form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_.call(null,reference)){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__17552 = cljs.pprint.brackets.call(null,reference);
var start = cljs.core.nth.call(null,vec__17552,(0),null);
var end = cljs.core.nth.call(null,vec__17552,(1),null);
var vec__17555 = reference;
var seq__17556 = cljs.core.seq.call(null,vec__17555);
var first__17557 = cljs.core.first.call(null,seq__17556);
var seq__17556__$1 = cljs.core.next.call(null,seq__17556);
var keyw = first__17557;
var args = seq__17556__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__17558_17572 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__17559_17573 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__17560_17574 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__17561_17575 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__17560_17574;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__17561_17575;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,start,null,end);

(function (){var format_in__16644__auto__ = "~w~:i";
var cf__16645__auto__ = ((typeof format_in__16644__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16644__auto__):format_in__16644__auto__);
return ((function (format_in__16644__auto__,cf__16645__auto__,_STAR_current_level_STAR__orig_val__17558_17572,_STAR_current_length_STAR__orig_val__17559_17573,_STAR_current_level_STAR__temp_val__17560_17574,_STAR_current_length_STAR__temp_val__17561_17575,vec__17552,start,end,vec__17555,seq__17556,first__17557,seq__17556__$1,keyw,args){
return (function() { 
var G__17576__delegate = function (args__16646__auto__){
var navigator__16647__auto__ = cljs.pprint.init_navigator.call(null,args__16646__auto__);
return cljs.pprint.execute_format.call(null,cf__16645__auto__,navigator__16647__auto__);
};
var G__17576 = function (var_args){
var args__16646__auto__ = null;
if (arguments.length > 0) {
var G__17577__i = 0, G__17577__a = new Array(arguments.length -  0);
while (G__17577__i < G__17577__a.length) {G__17577__a[G__17577__i] = arguments[G__17577__i + 0]; ++G__17577__i;}
  args__16646__auto__ = new cljs.core.IndexedSeq(G__17577__a,0,null);
} 
return G__17576__delegate.call(this,args__16646__auto__);};
G__17576.cljs$lang$maxFixedArity = 0;
G__17576.cljs$lang$applyTo = (function (arglist__17578){
var args__16646__auto__ = cljs.core.seq(arglist__17578);
return G__17576__delegate(args__16646__auto__);
});
G__17576.cljs$core$IFn$_invoke$arity$variadic = G__17576__delegate;
return G__17576;
})()
;
;})(format_in__16644__auto__,cf__16645__auto__,_STAR_current_level_STAR__orig_val__17558_17572,_STAR_current_length_STAR__orig_val__17559_17573,_STAR_current_level_STAR__temp_val__17560_17574,_STAR_current_length_STAR__temp_val__17561_17575,vec__17552,start,end,vec__17555,seq__17556,first__17557,seq__17556__$1,keyw,args))
})().call(null,keyw);

var args_17579__$1 = args;
while(true){
if(cljs.core.seq.call(null,args_17579__$1)){
(function (){var format_in__16644__auto__ = " ";
var cf__16645__auto__ = ((typeof format_in__16644__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16644__auto__):format_in__16644__auto__);
return ((function (args_17579__$1,format_in__16644__auto__,cf__16645__auto__,_STAR_current_level_STAR__orig_val__17558_17572,_STAR_current_length_STAR__orig_val__17559_17573,_STAR_current_level_STAR__temp_val__17560_17574,_STAR_current_length_STAR__temp_val__17561_17575,vec__17552,start,end,vec__17555,seq__17556,first__17557,seq__17556__$1,keyw,args){
return (function() { 
var G__17580__delegate = function (args__16646__auto__){
var navigator__16647__auto__ = cljs.pprint.init_navigator.call(null,args__16646__auto__);
return cljs.pprint.execute_format.call(null,cf__16645__auto__,navigator__16647__auto__);
};
var G__17580 = function (var_args){
var args__16646__auto__ = null;
if (arguments.length > 0) {
var G__17581__i = 0, G__17581__a = new Array(arguments.length -  0);
while (G__17581__i < G__17581__a.length) {G__17581__a[G__17581__i] = arguments[G__17581__i + 0]; ++G__17581__i;}
  args__16646__auto__ = new cljs.core.IndexedSeq(G__17581__a,0,null);
} 
return G__17580__delegate.call(this,args__16646__auto__);};
G__17580.cljs$lang$maxFixedArity = 0;
G__17580.cljs$lang$applyTo = (function (arglist__17582){
var args__16646__auto__ = cljs.core.seq(arglist__17582);
return G__17580__delegate(args__16646__auto__);
});
G__17580.cljs$core$IFn$_invoke$arity$variadic = G__17580__delegate;
return G__17580;
})()
;
;})(args_17579__$1,format_in__16644__auto__,cf__16645__auto__,_STAR_current_level_STAR__orig_val__17558_17572,_STAR_current_length_STAR__orig_val__17559_17573,_STAR_current_level_STAR__temp_val__17560_17574,_STAR_current_length_STAR__temp_val__17561_17575,vec__17552,start,end,vec__17555,seq__17556,first__17557,seq__17556__$1,keyw,args))
})().call(null);

var arg_17583 = cljs.core.first.call(null,args_17579__$1);
if(cljs.core.sequential_QMARK_.call(null,arg_17583)){
var vec__17562_17584 = cljs.pprint.brackets.call(null,arg_17583);
var start_17585__$1 = cljs.core.nth.call(null,vec__17562_17584,(0),null);
var end_17586__$1 = cljs.core.nth.call(null,vec__17562_17584,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__17565_17587 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__17566_17588 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__17567_17589 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__17568_17590 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__17567_17589;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__17568_17590;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,start_17585__$1,null,end_17586__$1);

if(((cljs.core._EQ_.call(null,cljs.core.count.call(null,arg_17583),(3))) && ((cljs.core.second.call(null,arg_17583) instanceof cljs.core.Keyword)))){
var vec__17569_17591 = arg_17583;
var ns_17592 = cljs.core.nth.call(null,vec__17569_17591,(0),null);
var kw_17593 = cljs.core.nth.call(null,vec__17569_17591,(1),null);
var lis_17594 = cljs.core.nth.call(null,vec__17569_17591,(2),null);
(function (){var format_in__16644__auto__ = "~w ~w ";
var cf__16645__auto__ = ((typeof format_in__16644__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16644__auto__):format_in__16644__auto__);
return ((function (args_17579__$1,format_in__16644__auto__,cf__16645__auto__,vec__17569_17591,ns_17592,kw_17593,lis_17594,_STAR_current_level_STAR__orig_val__17565_17587,_STAR_current_length_STAR__orig_val__17566_17588,_STAR_current_level_STAR__temp_val__17567_17589,_STAR_current_length_STAR__temp_val__17568_17590,vec__17562_17584,start_17585__$1,end_17586__$1,arg_17583,_STAR_current_level_STAR__orig_val__17558_17572,_STAR_current_length_STAR__orig_val__17559_17573,_STAR_current_level_STAR__temp_val__17560_17574,_STAR_current_length_STAR__temp_val__17561_17575,vec__17552,start,end,vec__17555,seq__17556,first__17557,seq__17556__$1,keyw,args){
return (function() { 
var G__17595__delegate = function (args__16646__auto__){
var navigator__16647__auto__ = cljs.pprint.init_navigator.call(null,args__16646__auto__);
return cljs.pprint.execute_format.call(null,cf__16645__auto__,navigator__16647__auto__);
};
var G__17595 = function (var_args){
var args__16646__auto__ = null;
if (arguments.length > 0) {
var G__17596__i = 0, G__17596__a = new Array(arguments.length -  0);
while (G__17596__i < G__17596__a.length) {G__17596__a[G__17596__i] = arguments[G__17596__i + 0]; ++G__17596__i;}
  args__16646__auto__ = new cljs.core.IndexedSeq(G__17596__a,0,null);
} 
return G__17595__delegate.call(this,args__16646__auto__);};
G__17595.cljs$lang$maxFixedArity = 0;
G__17595.cljs$lang$applyTo = (function (arglist__17597){
var args__16646__auto__ = cljs.core.seq(arglist__17597);
return G__17595__delegate(args__16646__auto__);
});
G__17595.cljs$core$IFn$_invoke$arity$variadic = G__17595__delegate;
return G__17595;
})()
;
;})(args_17579__$1,format_in__16644__auto__,cf__16645__auto__,vec__17569_17591,ns_17592,kw_17593,lis_17594,_STAR_current_level_STAR__orig_val__17565_17587,_STAR_current_length_STAR__orig_val__17566_17588,_STAR_current_level_STAR__temp_val__17567_17589,_STAR_current_length_STAR__temp_val__17568_17590,vec__17562_17584,start_17585__$1,end_17586__$1,arg_17583,_STAR_current_level_STAR__orig_val__17558_17572,_STAR_current_length_STAR__orig_val__17559_17573,_STAR_current_level_STAR__temp_val__17560_17574,_STAR_current_length_STAR__temp_val__17561_17575,vec__17552,start,end,vec__17555,seq__17556,first__17557,seq__17556__$1,keyw,args))
})().call(null,ns_17592,kw_17593);

if(cljs.core.sequential_QMARK_.call(null,lis_17594)){
(function (){var format_in__16644__auto__ = ((cljs.core.vector_QMARK_.call(null,lis_17594))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__16645__auto__ = ((typeof format_in__16644__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16644__auto__):format_in__16644__auto__);
return ((function (args_17579__$1,format_in__16644__auto__,cf__16645__auto__,vec__17569_17591,ns_17592,kw_17593,lis_17594,_STAR_current_level_STAR__orig_val__17565_17587,_STAR_current_length_STAR__orig_val__17566_17588,_STAR_current_level_STAR__temp_val__17567_17589,_STAR_current_length_STAR__temp_val__17568_17590,vec__17562_17584,start_17585__$1,end_17586__$1,arg_17583,_STAR_current_level_STAR__orig_val__17558_17572,_STAR_current_length_STAR__orig_val__17559_17573,_STAR_current_level_STAR__temp_val__17560_17574,_STAR_current_length_STAR__temp_val__17561_17575,vec__17552,start,end,vec__17555,seq__17556,first__17557,seq__17556__$1,keyw,args){
return (function() { 
var G__17598__delegate = function (args__16646__auto__){
var navigator__16647__auto__ = cljs.pprint.init_navigator.call(null,args__16646__auto__);
return cljs.pprint.execute_format.call(null,cf__16645__auto__,navigator__16647__auto__);
};
var G__17598 = function (var_args){
var args__16646__auto__ = null;
if (arguments.length > 0) {
var G__17599__i = 0, G__17599__a = new Array(arguments.length -  0);
while (G__17599__i < G__17599__a.length) {G__17599__a[G__17599__i] = arguments[G__17599__i + 0]; ++G__17599__i;}
  args__16646__auto__ = new cljs.core.IndexedSeq(G__17599__a,0,null);
} 
return G__17598__delegate.call(this,args__16646__auto__);};
G__17598.cljs$lang$maxFixedArity = 0;
G__17598.cljs$lang$applyTo = (function (arglist__17600){
var args__16646__auto__ = cljs.core.seq(arglist__17600);
return G__17598__delegate(args__16646__auto__);
});
G__17598.cljs$core$IFn$_invoke$arity$variadic = G__17598__delegate;
return G__17598;
})()
;
;})(args_17579__$1,format_in__16644__auto__,cf__16645__auto__,vec__17569_17591,ns_17592,kw_17593,lis_17594,_STAR_current_level_STAR__orig_val__17565_17587,_STAR_current_length_STAR__orig_val__17566_17588,_STAR_current_level_STAR__temp_val__17567_17589,_STAR_current_length_STAR__temp_val__17568_17590,vec__17562_17584,start_17585__$1,end_17586__$1,arg_17583,_STAR_current_level_STAR__orig_val__17558_17572,_STAR_current_length_STAR__orig_val__17559_17573,_STAR_current_level_STAR__temp_val__17560_17574,_STAR_current_length_STAR__temp_val__17561_17575,vec__17552,start,end,vec__17555,seq__17556,first__17557,seq__17556__$1,keyw,args))
})().call(null,lis_17594);
} else {
cljs.pprint.write_out.call(null,lis_17594);
}
} else {
cljs.core.apply.call(null,(function (){var format_in__16644__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__16645__auto__ = ((typeof format_in__16644__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16644__auto__):format_in__16644__auto__);
return ((function (args_17579__$1,format_in__16644__auto__,cf__16645__auto__,_STAR_current_level_STAR__orig_val__17565_17587,_STAR_current_length_STAR__orig_val__17566_17588,_STAR_current_level_STAR__temp_val__17567_17589,_STAR_current_length_STAR__temp_val__17568_17590,vec__17562_17584,start_17585__$1,end_17586__$1,arg_17583,_STAR_current_level_STAR__orig_val__17558_17572,_STAR_current_length_STAR__orig_val__17559_17573,_STAR_current_level_STAR__temp_val__17560_17574,_STAR_current_length_STAR__temp_val__17561_17575,vec__17552,start,end,vec__17555,seq__17556,first__17557,seq__17556__$1,keyw,args){
return (function() { 
var G__17601__delegate = function (args__16646__auto__){
var navigator__16647__auto__ = cljs.pprint.init_navigator.call(null,args__16646__auto__);
return cljs.pprint.execute_format.call(null,cf__16645__auto__,navigator__16647__auto__);
};
var G__17601 = function (var_args){
var args__16646__auto__ = null;
if (arguments.length > 0) {
var G__17602__i = 0, G__17602__a = new Array(arguments.length -  0);
while (G__17602__i < G__17602__a.length) {G__17602__a[G__17602__i] = arguments[G__17602__i + 0]; ++G__17602__i;}
  args__16646__auto__ = new cljs.core.IndexedSeq(G__17602__a,0,null);
} 
return G__17601__delegate.call(this,args__16646__auto__);};
G__17601.cljs$lang$maxFixedArity = 0;
G__17601.cljs$lang$applyTo = (function (arglist__17603){
var args__16646__auto__ = cljs.core.seq(arglist__17603);
return G__17601__delegate(args__16646__auto__);
});
G__17601.cljs$core$IFn$_invoke$arity$variadic = G__17601__delegate;
return G__17601;
})()
;
;})(args_17579__$1,format_in__16644__auto__,cf__16645__auto__,_STAR_current_level_STAR__orig_val__17565_17587,_STAR_current_length_STAR__orig_val__17566_17588,_STAR_current_level_STAR__temp_val__17567_17589,_STAR_current_length_STAR__temp_val__17568_17590,vec__17562_17584,start_17585__$1,end_17586__$1,arg_17583,_STAR_current_level_STAR__orig_val__17558_17572,_STAR_current_length_STAR__orig_val__17559_17573,_STAR_current_level_STAR__temp_val__17560_17574,_STAR_current_length_STAR__temp_val__17561_17575,vec__17552,start,end,vec__17555,seq__17556,first__17557,seq__17556__$1,keyw,args))
})(),arg_17583);
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__17566_17588;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__17565_17587;
}}


if(cljs.core.next.call(null,args_17579__$1)){
(function (){var format_in__16644__auto__ = "~_";
var cf__16645__auto__ = ((typeof format_in__16644__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16644__auto__):format_in__16644__auto__);
return ((function (args_17579__$1,format_in__16644__auto__,cf__16645__auto__,vec__17562_17584,start_17585__$1,end_17586__$1,arg_17583,_STAR_current_level_STAR__orig_val__17558_17572,_STAR_current_length_STAR__orig_val__17559_17573,_STAR_current_level_STAR__temp_val__17560_17574,_STAR_current_length_STAR__temp_val__17561_17575,vec__17552,start,end,vec__17555,seq__17556,first__17557,seq__17556__$1,keyw,args){
return (function() { 
var G__17604__delegate = function (args__16646__auto__){
var navigator__16647__auto__ = cljs.pprint.init_navigator.call(null,args__16646__auto__);
return cljs.pprint.execute_format.call(null,cf__16645__auto__,navigator__16647__auto__);
};
var G__17604 = function (var_args){
var args__16646__auto__ = null;
if (arguments.length > 0) {
var G__17605__i = 0, G__17605__a = new Array(arguments.length -  0);
while (G__17605__i < G__17605__a.length) {G__17605__a[G__17605__i] = arguments[G__17605__i + 0]; ++G__17605__i;}
  args__16646__auto__ = new cljs.core.IndexedSeq(G__17605__a,0,null);
} 
return G__17604__delegate.call(this,args__16646__auto__);};
G__17604.cljs$lang$maxFixedArity = 0;
G__17604.cljs$lang$applyTo = (function (arglist__17606){
var args__16646__auto__ = cljs.core.seq(arglist__17606);
return G__17604__delegate(args__16646__auto__);
});
G__17604.cljs$core$IFn$_invoke$arity$variadic = G__17604__delegate;
return G__17604;
})()
;
;})(args_17579__$1,format_in__16644__auto__,cf__16645__auto__,vec__17562_17584,start_17585__$1,end_17586__$1,arg_17583,_STAR_current_level_STAR__orig_val__17558_17572,_STAR_current_length_STAR__orig_val__17559_17573,_STAR_current_level_STAR__temp_val__17560_17574,_STAR_current_length_STAR__temp_val__17561_17575,vec__17552,start,end,vec__17555,seq__17556,first__17557,seq__17556__$1,keyw,args))
=======
var vec__10761 = cljs.pprint.brackets.call(null,reference);
var start = cljs.core.nth.call(null,vec__10761,(0),null);
var end = cljs.core.nth.call(null,vec__10761,(1),null);
var vec__10764 = reference;
var seq__10765 = cljs.core.seq.call(null,vec__10764);
var first__10766 = cljs.core.first.call(null,seq__10765);
var seq__10765__$1 = cljs.core.next.call(null,seq__10765);
var keyw = first__10766;
var args = seq__10765__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__10767_10781 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__10768_10782 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__10769_10783 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__10770_10784 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__10769_10783;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__10770_10784;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,start,null,end);

(function (){var format_in__9853__auto__ = "~w~:i";
var cf__9854__auto__ = ((typeof format_in__9853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__9853__auto__):format_in__9853__auto__);
return ((function (format_in__9853__auto__,cf__9854__auto__,_STAR_current_level_STAR__orig_val__10767_10781,_STAR_current_length_STAR__orig_val__10768_10782,_STAR_current_level_STAR__temp_val__10769_10783,_STAR_current_length_STAR__temp_val__10770_10784,vec__10761,start,end,vec__10764,seq__10765,first__10766,seq__10765__$1,keyw,args){
return (function() { 
var G__10785__delegate = function (args__9855__auto__){
var navigator__9856__auto__ = cljs.pprint.init_navigator.call(null,args__9855__auto__);
return cljs.pprint.execute_format.call(null,cf__9854__auto__,navigator__9856__auto__);
};
var G__10785 = function (var_args){
var args__9855__auto__ = null;
if (arguments.length > 0) {
var G__10786__i = 0, G__10786__a = new Array(arguments.length -  0);
while (G__10786__i < G__10786__a.length) {G__10786__a[G__10786__i] = arguments[G__10786__i + 0]; ++G__10786__i;}
  args__9855__auto__ = new cljs.core.IndexedSeq(G__10786__a,0,null);
} 
return G__10785__delegate.call(this,args__9855__auto__);};
G__10785.cljs$lang$maxFixedArity = 0;
G__10785.cljs$lang$applyTo = (function (arglist__10787){
var args__9855__auto__ = cljs.core.seq(arglist__10787);
return G__10785__delegate(args__9855__auto__);
});
G__10785.cljs$core$IFn$_invoke$arity$variadic = G__10785__delegate;
return G__10785;
})()
;
;})(format_in__9853__auto__,cf__9854__auto__,_STAR_current_level_STAR__orig_val__10767_10781,_STAR_current_length_STAR__orig_val__10768_10782,_STAR_current_level_STAR__temp_val__10769_10783,_STAR_current_length_STAR__temp_val__10770_10784,vec__10761,start,end,vec__10764,seq__10765,first__10766,seq__10765__$1,keyw,args))
})().call(null,keyw);

var args_10788__$1 = args;
while(true){
if(cljs.core.seq.call(null,args_10788__$1)){
(function (){var format_in__9853__auto__ = " ";
var cf__9854__auto__ = ((typeof format_in__9853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__9853__auto__):format_in__9853__auto__);
return ((function (args_10788__$1,format_in__9853__auto__,cf__9854__auto__,_STAR_current_level_STAR__orig_val__10767_10781,_STAR_current_length_STAR__orig_val__10768_10782,_STAR_current_level_STAR__temp_val__10769_10783,_STAR_current_length_STAR__temp_val__10770_10784,vec__10761,start,end,vec__10764,seq__10765,first__10766,seq__10765__$1,keyw,args){
return (function() { 
var G__10789__delegate = function (args__9855__auto__){
var navigator__9856__auto__ = cljs.pprint.init_navigator.call(null,args__9855__auto__);
return cljs.pprint.execute_format.call(null,cf__9854__auto__,navigator__9856__auto__);
};
var G__10789 = function (var_args){
var args__9855__auto__ = null;
if (arguments.length > 0) {
var G__10790__i = 0, G__10790__a = new Array(arguments.length -  0);
while (G__10790__i < G__10790__a.length) {G__10790__a[G__10790__i] = arguments[G__10790__i + 0]; ++G__10790__i;}
  args__9855__auto__ = new cljs.core.IndexedSeq(G__10790__a,0,null);
} 
return G__10789__delegate.call(this,args__9855__auto__);};
G__10789.cljs$lang$maxFixedArity = 0;
G__10789.cljs$lang$applyTo = (function (arglist__10791){
var args__9855__auto__ = cljs.core.seq(arglist__10791);
return G__10789__delegate(args__9855__auto__);
});
G__10789.cljs$core$IFn$_invoke$arity$variadic = G__10789__delegate;
return G__10789;
})()
;
;})(args_10788__$1,format_in__9853__auto__,cf__9854__auto__,_STAR_current_level_STAR__orig_val__10767_10781,_STAR_current_length_STAR__orig_val__10768_10782,_STAR_current_level_STAR__temp_val__10769_10783,_STAR_current_length_STAR__temp_val__10770_10784,vec__10761,start,end,vec__10764,seq__10765,first__10766,seq__10765__$1,keyw,args))
})().call(null);

var arg_10792 = cljs.core.first.call(null,args_10788__$1);
if(cljs.core.sequential_QMARK_.call(null,arg_10792)){
var vec__10771_10793 = cljs.pprint.brackets.call(null,arg_10792);
var start_10794__$1 = cljs.core.nth.call(null,vec__10771_10793,(0),null);
var end_10795__$1 = cljs.core.nth.call(null,vec__10771_10793,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__10774_10796 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__10775_10797 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__10776_10798 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__10777_10799 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__10776_10798;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__10777_10799;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,start_10794__$1,null,end_10795__$1);

if(((cljs.core._EQ_.call(null,cljs.core.count.call(null,arg_10792),(3))) && ((cljs.core.second.call(null,arg_10792) instanceof cljs.core.Keyword)))){
var vec__10778_10800 = arg_10792;
var ns_10801 = cljs.core.nth.call(null,vec__10778_10800,(0),null);
var kw_10802 = cljs.core.nth.call(null,vec__10778_10800,(1),null);
var lis_10803 = cljs.core.nth.call(null,vec__10778_10800,(2),null);
(function (){var format_in__9853__auto__ = "~w ~w ";
var cf__9854__auto__ = ((typeof format_in__9853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__9853__auto__):format_in__9853__auto__);
return ((function (args_10788__$1,format_in__9853__auto__,cf__9854__auto__,vec__10778_10800,ns_10801,kw_10802,lis_10803,_STAR_current_level_STAR__orig_val__10774_10796,_STAR_current_length_STAR__orig_val__10775_10797,_STAR_current_level_STAR__temp_val__10776_10798,_STAR_current_length_STAR__temp_val__10777_10799,vec__10771_10793,start_10794__$1,end_10795__$1,arg_10792,_STAR_current_level_STAR__orig_val__10767_10781,_STAR_current_length_STAR__orig_val__10768_10782,_STAR_current_level_STAR__temp_val__10769_10783,_STAR_current_length_STAR__temp_val__10770_10784,vec__10761,start,end,vec__10764,seq__10765,first__10766,seq__10765__$1,keyw,args){
return (function() { 
var G__10804__delegate = function (args__9855__auto__){
var navigator__9856__auto__ = cljs.pprint.init_navigator.call(null,args__9855__auto__);
return cljs.pprint.execute_format.call(null,cf__9854__auto__,navigator__9856__auto__);
};
var G__10804 = function (var_args){
var args__9855__auto__ = null;
if (arguments.length > 0) {
var G__10805__i = 0, G__10805__a = new Array(arguments.length -  0);
while (G__10805__i < G__10805__a.length) {G__10805__a[G__10805__i] = arguments[G__10805__i + 0]; ++G__10805__i;}
  args__9855__auto__ = new cljs.core.IndexedSeq(G__10805__a,0,null);
} 
return G__10804__delegate.call(this,args__9855__auto__);};
G__10804.cljs$lang$maxFixedArity = 0;
G__10804.cljs$lang$applyTo = (function (arglist__10806){
var args__9855__auto__ = cljs.core.seq(arglist__10806);
return G__10804__delegate(args__9855__auto__);
});
G__10804.cljs$core$IFn$_invoke$arity$variadic = G__10804__delegate;
return G__10804;
})()
;
;})(args_10788__$1,format_in__9853__auto__,cf__9854__auto__,vec__10778_10800,ns_10801,kw_10802,lis_10803,_STAR_current_level_STAR__orig_val__10774_10796,_STAR_current_length_STAR__orig_val__10775_10797,_STAR_current_level_STAR__temp_val__10776_10798,_STAR_current_length_STAR__temp_val__10777_10799,vec__10771_10793,start_10794__$1,end_10795__$1,arg_10792,_STAR_current_level_STAR__orig_val__10767_10781,_STAR_current_length_STAR__orig_val__10768_10782,_STAR_current_level_STAR__temp_val__10769_10783,_STAR_current_length_STAR__temp_val__10770_10784,vec__10761,start,end,vec__10764,seq__10765,first__10766,seq__10765__$1,keyw,args))
})().call(null,ns_10801,kw_10802);

if(cljs.core.sequential_QMARK_.call(null,lis_10803)){
(function (){var format_in__9853__auto__ = ((cljs.core.vector_QMARK_.call(null,lis_10803))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__9854__auto__ = ((typeof format_in__9853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__9853__auto__):format_in__9853__auto__);
return ((function (args_10788__$1,format_in__9853__auto__,cf__9854__auto__,vec__10778_10800,ns_10801,kw_10802,lis_10803,_STAR_current_level_STAR__orig_val__10774_10796,_STAR_current_length_STAR__orig_val__10775_10797,_STAR_current_level_STAR__temp_val__10776_10798,_STAR_current_length_STAR__temp_val__10777_10799,vec__10771_10793,start_10794__$1,end_10795__$1,arg_10792,_STAR_current_level_STAR__orig_val__10767_10781,_STAR_current_length_STAR__orig_val__10768_10782,_STAR_current_level_STAR__temp_val__10769_10783,_STAR_current_length_STAR__temp_val__10770_10784,vec__10761,start,end,vec__10764,seq__10765,first__10766,seq__10765__$1,keyw,args){
return (function() { 
var G__10807__delegate = function (args__9855__auto__){
var navigator__9856__auto__ = cljs.pprint.init_navigator.call(null,args__9855__auto__);
return cljs.pprint.execute_format.call(null,cf__9854__auto__,navigator__9856__auto__);
};
var G__10807 = function (var_args){
var args__9855__auto__ = null;
if (arguments.length > 0) {
var G__10808__i = 0, G__10808__a = new Array(arguments.length -  0);
while (G__10808__i < G__10808__a.length) {G__10808__a[G__10808__i] = arguments[G__10808__i + 0]; ++G__10808__i;}
  args__9855__auto__ = new cljs.core.IndexedSeq(G__10808__a,0,null);
} 
return G__10807__delegate.call(this,args__9855__auto__);};
G__10807.cljs$lang$maxFixedArity = 0;
G__10807.cljs$lang$applyTo = (function (arglist__10809){
var args__9855__auto__ = cljs.core.seq(arglist__10809);
return G__10807__delegate(args__9855__auto__);
});
G__10807.cljs$core$IFn$_invoke$arity$variadic = G__10807__delegate;
return G__10807;
})()
;
;})(args_10788__$1,format_in__9853__auto__,cf__9854__auto__,vec__10778_10800,ns_10801,kw_10802,lis_10803,_STAR_current_level_STAR__orig_val__10774_10796,_STAR_current_length_STAR__orig_val__10775_10797,_STAR_current_level_STAR__temp_val__10776_10798,_STAR_current_length_STAR__temp_val__10777_10799,vec__10771_10793,start_10794__$1,end_10795__$1,arg_10792,_STAR_current_level_STAR__orig_val__10767_10781,_STAR_current_length_STAR__orig_val__10768_10782,_STAR_current_level_STAR__temp_val__10769_10783,_STAR_current_length_STAR__temp_val__10770_10784,vec__10761,start,end,vec__10764,seq__10765,first__10766,seq__10765__$1,keyw,args))
})().call(null,lis_10803);
} else {
cljs.pprint.write_out.call(null,lis_10803);
}
} else {
cljs.core.apply.call(null,(function (){var format_in__9853__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__9854__auto__ = ((typeof format_in__9853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__9853__auto__):format_in__9853__auto__);
return ((function (args_10788__$1,format_in__9853__auto__,cf__9854__auto__,_STAR_current_level_STAR__orig_val__10774_10796,_STAR_current_length_STAR__orig_val__10775_10797,_STAR_current_level_STAR__temp_val__10776_10798,_STAR_current_length_STAR__temp_val__10777_10799,vec__10771_10793,start_10794__$1,end_10795__$1,arg_10792,_STAR_current_level_STAR__orig_val__10767_10781,_STAR_current_length_STAR__orig_val__10768_10782,_STAR_current_level_STAR__temp_val__10769_10783,_STAR_current_length_STAR__temp_val__10770_10784,vec__10761,start,end,vec__10764,seq__10765,first__10766,seq__10765__$1,keyw,args){
return (function() { 
var G__10810__delegate = function (args__9855__auto__){
var navigator__9856__auto__ = cljs.pprint.init_navigator.call(null,args__9855__auto__);
return cljs.pprint.execute_format.call(null,cf__9854__auto__,navigator__9856__auto__);
};
var G__10810 = function (var_args){
var args__9855__auto__ = null;
if (arguments.length > 0) {
var G__10811__i = 0, G__10811__a = new Array(arguments.length -  0);
while (G__10811__i < G__10811__a.length) {G__10811__a[G__10811__i] = arguments[G__10811__i + 0]; ++G__10811__i;}
  args__9855__auto__ = new cljs.core.IndexedSeq(G__10811__a,0,null);
} 
return G__10810__delegate.call(this,args__9855__auto__);};
G__10810.cljs$lang$maxFixedArity = 0;
G__10810.cljs$lang$applyTo = (function (arglist__10812){
var args__9855__auto__ = cljs.core.seq(arglist__10812);
return G__10810__delegate(args__9855__auto__);
});
G__10810.cljs$core$IFn$_invoke$arity$variadic = G__10810__delegate;
return G__10810;
})()
;
;})(args_10788__$1,format_in__9853__auto__,cf__9854__auto__,_STAR_current_level_STAR__orig_val__10774_10796,_STAR_current_length_STAR__orig_val__10775_10797,_STAR_current_level_STAR__temp_val__10776_10798,_STAR_current_length_STAR__temp_val__10777_10799,vec__10771_10793,start_10794__$1,end_10795__$1,arg_10792,_STAR_current_level_STAR__orig_val__10767_10781,_STAR_current_length_STAR__orig_val__10768_10782,_STAR_current_level_STAR__temp_val__10769_10783,_STAR_current_length_STAR__temp_val__10770_10784,vec__10761,start,end,vec__10764,seq__10765,first__10766,seq__10765__$1,keyw,args))
})(),arg_10792);
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__10775_10797;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__10774_10796;
}}


if(cljs.core.next.call(null,args_10788__$1)){
(function (){var format_in__9853__auto__ = "~_";
var cf__9854__auto__ = ((typeof format_in__9853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__9853__auto__):format_in__9853__auto__);
return ((function (args_10788__$1,format_in__9853__auto__,cf__9854__auto__,vec__10771_10793,start_10794__$1,end_10795__$1,arg_10792,_STAR_current_level_STAR__orig_val__10767_10781,_STAR_current_length_STAR__orig_val__10768_10782,_STAR_current_level_STAR__temp_val__10769_10783,_STAR_current_length_STAR__temp_val__10770_10784,vec__10761,start,end,vec__10764,seq__10765,first__10766,seq__10765__$1,keyw,args){
return (function() { 
var G__10813__delegate = function (args__9855__auto__){
var navigator__9856__auto__ = cljs.pprint.init_navigator.call(null,args__9855__auto__);
return cljs.pprint.execute_format.call(null,cf__9854__auto__,navigator__9856__auto__);
};
var G__10813 = function (var_args){
var args__9855__auto__ = null;
if (arguments.length > 0) {
var G__10814__i = 0, G__10814__a = new Array(arguments.length -  0);
while (G__10814__i < G__10814__a.length) {G__10814__a[G__10814__i] = arguments[G__10814__i + 0]; ++G__10814__i;}
  args__9855__auto__ = new cljs.core.IndexedSeq(G__10814__a,0,null);
} 
return G__10813__delegate.call(this,args__9855__auto__);};
G__10813.cljs$lang$maxFixedArity = 0;
G__10813.cljs$lang$applyTo = (function (arglist__10815){
var args__9855__auto__ = cljs.core.seq(arglist__10815);
return G__10813__delegate(args__9855__auto__);
});
G__10813.cljs$core$IFn$_invoke$arity$variadic = G__10813__delegate;
return G__10813;
})()
;
;})(args_10788__$1,format_in__9853__auto__,cf__9854__auto__,vec__10771_10793,start_10794__$1,end_10795__$1,arg_10792,_STAR_current_level_STAR__orig_val__10767_10781,_STAR_current_length_STAR__orig_val__10768_10782,_STAR_current_level_STAR__temp_val__10769_10783,_STAR_current_length_STAR__temp_val__10770_10784,vec__10761,start,end,vec__10764,seq__10765,first__10766,seq__10765__$1,keyw,args))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
})().call(null);
} else {
}
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.write_out.call(null,arg_17583);

if(cljs.core.next.call(null,args_17579__$1)){
(function (){var format_in__16644__auto__ = "~:_";
var cf__16645__auto__ = ((typeof format_in__16644__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16644__auto__):format_in__16644__auto__);
return ((function (args_17579__$1,format_in__16644__auto__,cf__16645__auto__,arg_17583,_STAR_current_level_STAR__orig_val__17558_17572,_STAR_current_length_STAR__orig_val__17559_17573,_STAR_current_level_STAR__temp_val__17560_17574,_STAR_current_length_STAR__temp_val__17561_17575,vec__17552,start,end,vec__17555,seq__17556,first__17557,seq__17556__$1,keyw,args){
return (function() { 
var G__17607__delegate = function (args__16646__auto__){
var navigator__16647__auto__ = cljs.pprint.init_navigator.call(null,args__16646__auto__);
return cljs.pprint.execute_format.call(null,cf__16645__auto__,navigator__16647__auto__);
};
var G__17607 = function (var_args){
var args__16646__auto__ = null;
if (arguments.length > 0) {
var G__17608__i = 0, G__17608__a = new Array(arguments.length -  0);
while (G__17608__i < G__17608__a.length) {G__17608__a[G__17608__i] = arguments[G__17608__i + 0]; ++G__17608__i;}
  args__16646__auto__ = new cljs.core.IndexedSeq(G__17608__a,0,null);
} 
return G__17607__delegate.call(this,args__16646__auto__);};
G__17607.cljs$lang$maxFixedArity = 0;
G__17607.cljs$lang$applyTo = (function (arglist__17609){
var args__16646__auto__ = cljs.core.seq(arglist__17609);
return G__17607__delegate(args__16646__auto__);
});
G__17607.cljs$core$IFn$_invoke$arity$variadic = G__17607__delegate;
return G__17607;
})()
;
;})(args_17579__$1,format_in__16644__auto__,cf__16645__auto__,arg_17583,_STAR_current_level_STAR__orig_val__17558_17572,_STAR_current_length_STAR__orig_val__17559_17573,_STAR_current_level_STAR__temp_val__17560_17574,_STAR_current_length_STAR__temp_val__17561_17575,vec__17552,start,end,vec__17555,seq__17556,first__17557,seq__17556__$1,keyw,args))
=======
cljs.pprint.write_out.call(null,arg_10792);

if(cljs.core.next.call(null,args_10788__$1)){
(function (){var format_in__9853__auto__ = "~:_";
var cf__9854__auto__ = ((typeof format_in__9853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__9853__auto__):format_in__9853__auto__);
return ((function (args_10788__$1,format_in__9853__auto__,cf__9854__auto__,arg_10792,_STAR_current_level_STAR__orig_val__10767_10781,_STAR_current_length_STAR__orig_val__10768_10782,_STAR_current_level_STAR__temp_val__10769_10783,_STAR_current_length_STAR__temp_val__10770_10784,vec__10761,start,end,vec__10764,seq__10765,first__10766,seq__10765__$1,keyw,args){
return (function() { 
var G__10816__delegate = function (args__9855__auto__){
var navigator__9856__auto__ = cljs.pprint.init_navigator.call(null,args__9855__auto__);
return cljs.pprint.execute_format.call(null,cf__9854__auto__,navigator__9856__auto__);
};
var G__10816 = function (var_args){
var args__9855__auto__ = null;
if (arguments.length > 0) {
var G__10817__i = 0, G__10817__a = new Array(arguments.length -  0);
while (G__10817__i < G__10817__a.length) {G__10817__a[G__10817__i] = arguments[G__10817__i + 0]; ++G__10817__i;}
  args__9855__auto__ = new cljs.core.IndexedSeq(G__10817__a,0,null);
} 
return G__10816__delegate.call(this,args__9855__auto__);};
G__10816.cljs$lang$maxFixedArity = 0;
G__10816.cljs$lang$applyTo = (function (arglist__10818){
var args__9855__auto__ = cljs.core.seq(arglist__10818);
return G__10816__delegate(args__9855__auto__);
});
G__10816.cljs$core$IFn$_invoke$arity$variadic = G__10816__delegate;
return G__10816;
})()
;
;})(args_10788__$1,format_in__9853__auto__,cf__9854__auto__,arg_10792,_STAR_current_level_STAR__orig_val__10767_10781,_STAR_current_length_STAR__orig_val__10768_10782,_STAR_current_level_STAR__temp_val__10769_10783,_STAR_current_length_STAR__temp_val__10770_10784,vec__10761,start,end,vec__10764,seq__10765,first__10766,seq__10765__$1,keyw,args))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
})().call(null);
} else {
}
}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var G__17610 = cljs.core.next.call(null,args_17579__$1);
args_17579__$1 = G__17610;
=======
var G__10819 = cljs.core.next.call(null,args_10788__$1);
args_10788__$1 = G__10819;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
} else {
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__17559_17573;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__17558_17572;
=======
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__10768_10782;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__10767_10781;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}}

return null;
} else {
return cljs.pprint.write_out.call(null,reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next.call(null,alis)){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__17611 = alis;
var seq__17612 = cljs.core.seq.call(null,vec__17611);
var first__17613 = cljs.core.first.call(null,seq__17612);
var seq__17612__$1 = cljs.core.next.call(null,seq__17612);
var ns_sym = first__17613;
var first__17613__$1 = cljs.core.first.call(null,seq__17612__$1);
var seq__17612__$2 = cljs.core.next.call(null,seq__17612__$1);
var ns_name = first__17613__$1;
var stuff = seq__17612__$2;
var vec__17614 = ((typeof cljs.core.first.call(null,stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff),cljs.core.next.call(null,stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.call(null,vec__17614,(0),null);
var stuff__$1 = cljs.core.nth.call(null,vec__17614,(1),null);
var vec__17617 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff__$1),cljs.core.next.call(null,stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.call(null,vec__17617,(0),null);
var references = cljs.core.nth.call(null,vec__17617,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__17620_17624 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__17621_17625 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__17622_17626 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__17623_17627 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__17622_17626;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__17623_17627;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__16644__auto__ = "~w ~1I~@_~w";
var cf__16645__auto__ = ((typeof format_in__16644__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16644__auto__):format_in__16644__auto__);
return ((function (format_in__16644__auto__,cf__16645__auto__,_STAR_current_level_STAR__orig_val__17620_17624,_STAR_current_length_STAR__orig_val__17621_17625,_STAR_current_level_STAR__temp_val__17622_17626,_STAR_current_length_STAR__temp_val__17623_17627,vec__17611,seq__17612,first__17613,seq__17612__$1,ns_sym,first__17613__$1,seq__17612__$2,ns_name,stuff,vec__17614,doc_str,stuff__$1,vec__17617,attr_map,references){
return (function() { 
var G__17628__delegate = function (args__16646__auto__){
var navigator__16647__auto__ = cljs.pprint.init_navigator.call(null,args__16646__auto__);
return cljs.pprint.execute_format.call(null,cf__16645__auto__,navigator__16647__auto__);
};
var G__17628 = function (var_args){
var args__16646__auto__ = null;
if (arguments.length > 0) {
var G__17629__i = 0, G__17629__a = new Array(arguments.length -  0);
while (G__17629__i < G__17629__a.length) {G__17629__a[G__17629__i] = arguments[G__17629__i + 0]; ++G__17629__i;}
  args__16646__auto__ = new cljs.core.IndexedSeq(G__17629__a,0,null);
} 
return G__17628__delegate.call(this,args__16646__auto__);};
G__17628.cljs$lang$maxFixedArity = 0;
G__17628.cljs$lang$applyTo = (function (arglist__17630){
var args__16646__auto__ = cljs.core.seq(arglist__17630);
return G__17628__delegate(args__16646__auto__);
});
G__17628.cljs$core$IFn$_invoke$arity$variadic = G__17628__delegate;
return G__17628;
})()
;
;})(format_in__16644__auto__,cf__16645__auto__,_STAR_current_level_STAR__orig_val__17620_17624,_STAR_current_length_STAR__orig_val__17621_17625,_STAR_current_level_STAR__temp_val__17622_17626,_STAR_current_length_STAR__temp_val__17623_17627,vec__17611,seq__17612,first__17613,seq__17612__$1,ns_sym,first__17613__$1,seq__17612__$2,ns_name,stuff,vec__17614,doc_str,stuff__$1,vec__17617,attr_map,references))
=======
var vec__10820 = alis;
var seq__10821 = cljs.core.seq.call(null,vec__10820);
var first__10822 = cljs.core.first.call(null,seq__10821);
var seq__10821__$1 = cljs.core.next.call(null,seq__10821);
var ns_sym = first__10822;
var first__10822__$1 = cljs.core.first.call(null,seq__10821__$1);
var seq__10821__$2 = cljs.core.next.call(null,seq__10821__$1);
var ns_name = first__10822__$1;
var stuff = seq__10821__$2;
var vec__10823 = ((typeof cljs.core.first.call(null,stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff),cljs.core.next.call(null,stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.call(null,vec__10823,(0),null);
var stuff__$1 = cljs.core.nth.call(null,vec__10823,(1),null);
var vec__10826 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff__$1),cljs.core.next.call(null,stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.call(null,vec__10826,(0),null);
var references = cljs.core.nth.call(null,vec__10826,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__10829_10833 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__10830_10834 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__10831_10835 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__10832_10836 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__10831_10835;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__10832_10836;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__9853__auto__ = "~w ~1I~@_~w";
var cf__9854__auto__ = ((typeof format_in__9853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__9853__auto__):format_in__9853__auto__);
return ((function (format_in__9853__auto__,cf__9854__auto__,_STAR_current_level_STAR__orig_val__10829_10833,_STAR_current_length_STAR__orig_val__10830_10834,_STAR_current_level_STAR__temp_val__10831_10835,_STAR_current_length_STAR__temp_val__10832_10836,vec__10820,seq__10821,first__10822,seq__10821__$1,ns_sym,first__10822__$1,seq__10821__$2,ns_name,stuff,vec__10823,doc_str,stuff__$1,vec__10826,attr_map,references){
return (function() { 
var G__10837__delegate = function (args__9855__auto__){
var navigator__9856__auto__ = cljs.pprint.init_navigator.call(null,args__9855__auto__);
return cljs.pprint.execute_format.call(null,cf__9854__auto__,navigator__9856__auto__);
};
var G__10837 = function (var_args){
var args__9855__auto__ = null;
if (arguments.length > 0) {
var G__10838__i = 0, G__10838__a = new Array(arguments.length -  0);
while (G__10838__i < G__10838__a.length) {G__10838__a[G__10838__i] = arguments[G__10838__i + 0]; ++G__10838__i;}
  args__9855__auto__ = new cljs.core.IndexedSeq(G__10838__a,0,null);
} 
return G__10837__delegate.call(this,args__9855__auto__);};
G__10837.cljs$lang$maxFixedArity = 0;
G__10837.cljs$lang$applyTo = (function (arglist__10839){
var args__9855__auto__ = cljs.core.seq(arglist__10839);
return G__10837__delegate(args__9855__auto__);
});
G__10837.cljs$core$IFn$_invoke$arity$variadic = G__10837__delegate;
return G__10837;
})()
;
;})(format_in__9853__auto__,cf__9854__auto__,_STAR_current_level_STAR__orig_val__10829_10833,_STAR_current_length_STAR__orig_val__10830_10834,_STAR_current_level_STAR__temp_val__10831_10835,_STAR_current_length_STAR__temp_val__10832_10836,vec__10820,seq__10821,first__10822,seq__10821__$1,ns_sym,first__10822__$1,seq__10821__$2,ns_name,stuff,vec__10823,doc_str,stuff__$1,vec__10826,attr_map,references))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
})().call(null,ns_sym,ns_name);

if(cljs.core.truth_((function (){var or__4131__auto__ = doc_str;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = attr_map;
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return cljs.core.seq.call(null,references);
}
}
})())){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
(function (){var format_in__16644__auto__ = "~@:_";
var cf__16645__auto__ = ((typeof format_in__16644__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16644__auto__):format_in__16644__auto__);
return ((function (format_in__16644__auto__,cf__16645__auto__,_STAR_current_level_STAR__orig_val__17620_17624,_STAR_current_length_STAR__orig_val__17621_17625,_STAR_current_level_STAR__temp_val__17622_17626,_STAR_current_length_STAR__temp_val__17623_17627,vec__17611,seq__17612,first__17613,seq__17612__$1,ns_sym,first__17613__$1,seq__17612__$2,ns_name,stuff,vec__17614,doc_str,stuff__$1,vec__17617,attr_map,references){
return (function() { 
var G__17631__delegate = function (args__16646__auto__){
var navigator__16647__auto__ = cljs.pprint.init_navigator.call(null,args__16646__auto__);
return cljs.pprint.execute_format.call(null,cf__16645__auto__,navigator__16647__auto__);
};
var G__17631 = function (var_args){
var args__16646__auto__ = null;
if (arguments.length > 0) {
var G__17632__i = 0, G__17632__a = new Array(arguments.length -  0);
while (G__17632__i < G__17632__a.length) {G__17632__a[G__17632__i] = arguments[G__17632__i + 0]; ++G__17632__i;}
  args__16646__auto__ = new cljs.core.IndexedSeq(G__17632__a,0,null);
} 
return G__17631__delegate.call(this,args__16646__auto__);};
G__17631.cljs$lang$maxFixedArity = 0;
G__17631.cljs$lang$applyTo = (function (arglist__17633){
var args__16646__auto__ = cljs.core.seq(arglist__17633);
return G__17631__delegate(args__16646__auto__);
});
G__17631.cljs$core$IFn$_invoke$arity$variadic = G__17631__delegate;
return G__17631;
})()
;
;})(format_in__16644__auto__,cf__16645__auto__,_STAR_current_level_STAR__orig_val__17620_17624,_STAR_current_length_STAR__orig_val__17621_17625,_STAR_current_level_STAR__temp_val__17622_17626,_STAR_current_length_STAR__temp_val__17623_17627,vec__17611,seq__17612,first__17613,seq__17612__$1,ns_sym,first__17613__$1,seq__17612__$2,ns_name,stuff,vec__17614,doc_str,stuff__$1,vec__17617,attr_map,references))
=======
(function (){var format_in__9853__auto__ = "~@:_";
var cf__9854__auto__ = ((typeof format_in__9853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__9853__auto__):format_in__9853__auto__);
return ((function (format_in__9853__auto__,cf__9854__auto__,_STAR_current_level_STAR__orig_val__10829_10833,_STAR_current_length_STAR__orig_val__10830_10834,_STAR_current_level_STAR__temp_val__10831_10835,_STAR_current_length_STAR__temp_val__10832_10836,vec__10820,seq__10821,first__10822,seq__10821__$1,ns_sym,first__10822__$1,seq__10821__$2,ns_name,stuff,vec__10823,doc_str,stuff__$1,vec__10826,attr_map,references){
return (function() { 
var G__10840__delegate = function (args__9855__auto__){
var navigator__9856__auto__ = cljs.pprint.init_navigator.call(null,args__9855__auto__);
return cljs.pprint.execute_format.call(null,cf__9854__auto__,navigator__9856__auto__);
};
var G__10840 = function (var_args){
var args__9855__auto__ = null;
if (arguments.length > 0) {
var G__10841__i = 0, G__10841__a = new Array(arguments.length -  0);
while (G__10841__i < G__10841__a.length) {G__10841__a[G__10841__i] = arguments[G__10841__i + 0]; ++G__10841__i;}
  args__9855__auto__ = new cljs.core.IndexedSeq(G__10841__a,0,null);
} 
return G__10840__delegate.call(this,args__9855__auto__);};
G__10840.cljs$lang$maxFixedArity = 0;
G__10840.cljs$lang$applyTo = (function (arglist__10842){
var args__9855__auto__ = cljs.core.seq(arglist__10842);
return G__10840__delegate(args__9855__auto__);
});
G__10840.cljs$core$IFn$_invoke$arity$variadic = G__10840__delegate;
return G__10840;
})()
;
;})(format_in__9853__auto__,cf__9854__auto__,_STAR_current_level_STAR__orig_val__10829_10833,_STAR_current_length_STAR__orig_val__10830_10834,_STAR_current_level_STAR__temp_val__10831_10835,_STAR_current_length_STAR__temp_val__10832_10836,vec__10820,seq__10821,first__10822,seq__10821__$1,ns_sym,first__10822__$1,seq__10821__$2,ns_name,stuff,vec__10823,doc_str,stuff__$1,vec__10826,attr_map,references))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
})().call(null);
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.call(null,true,"\"~a\"~:[~;~:@_~]",doc_str,(function (){var or__4131__auto__ = attr_map;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.seq.call(null,references);
}
})());
} else {
}

if(cljs.core.truth_(attr_map)){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
(function (){var format_in__16644__auto__ = "~w~:[~;~:@_~]";
var cf__16645__auto__ = ((typeof format_in__16644__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16644__auto__):format_in__16644__auto__);
return ((function (format_in__16644__auto__,cf__16645__auto__,_STAR_current_level_STAR__orig_val__17620_17624,_STAR_current_length_STAR__orig_val__17621_17625,_STAR_current_level_STAR__temp_val__17622_17626,_STAR_current_length_STAR__temp_val__17623_17627,vec__17611,seq__17612,first__17613,seq__17612__$1,ns_sym,first__17613__$1,seq__17612__$2,ns_name,stuff,vec__17614,doc_str,stuff__$1,vec__17617,attr_map,references){
return (function() { 
var G__17634__delegate = function (args__16646__auto__){
var navigator__16647__auto__ = cljs.pprint.init_navigator.call(null,args__16646__auto__);
return cljs.pprint.execute_format.call(null,cf__16645__auto__,navigator__16647__auto__);
};
var G__17634 = function (var_args){
var args__16646__auto__ = null;
if (arguments.length > 0) {
var G__17635__i = 0, G__17635__a = new Array(arguments.length -  0);
while (G__17635__i < G__17635__a.length) {G__17635__a[G__17635__i] = arguments[G__17635__i + 0]; ++G__17635__i;}
  args__16646__auto__ = new cljs.core.IndexedSeq(G__17635__a,0,null);
} 
return G__17634__delegate.call(this,args__16646__auto__);};
G__17634.cljs$lang$maxFixedArity = 0;
G__17634.cljs$lang$applyTo = (function (arglist__17636){
var args__16646__auto__ = cljs.core.seq(arglist__17636);
return G__17634__delegate(args__16646__auto__);
});
G__17634.cljs$core$IFn$_invoke$arity$variadic = G__17634__delegate;
return G__17634;
})()
;
;})(format_in__16644__auto__,cf__16645__auto__,_STAR_current_level_STAR__orig_val__17620_17624,_STAR_current_length_STAR__orig_val__17621_17625,_STAR_current_level_STAR__temp_val__17622_17626,_STAR_current_length_STAR__temp_val__17623_17627,vec__17611,seq__17612,first__17613,seq__17612__$1,ns_sym,first__17613__$1,seq__17612__$2,ns_name,stuff,vec__17614,doc_str,stuff__$1,vec__17617,attr_map,references))
=======
(function (){var format_in__9853__auto__ = "~w~:[~;~:@_~]";
var cf__9854__auto__ = ((typeof format_in__9853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__9853__auto__):format_in__9853__auto__);
return ((function (format_in__9853__auto__,cf__9854__auto__,_STAR_current_level_STAR__orig_val__10829_10833,_STAR_current_length_STAR__orig_val__10830_10834,_STAR_current_level_STAR__temp_val__10831_10835,_STAR_current_length_STAR__temp_val__10832_10836,vec__10820,seq__10821,first__10822,seq__10821__$1,ns_sym,first__10822__$1,seq__10821__$2,ns_name,stuff,vec__10823,doc_str,stuff__$1,vec__10826,attr_map,references){
return (function() { 
var G__10843__delegate = function (args__9855__auto__){
var navigator__9856__auto__ = cljs.pprint.init_navigator.call(null,args__9855__auto__);
return cljs.pprint.execute_format.call(null,cf__9854__auto__,navigator__9856__auto__);
};
var G__10843 = function (var_args){
var args__9855__auto__ = null;
if (arguments.length > 0) {
var G__10844__i = 0, G__10844__a = new Array(arguments.length -  0);
while (G__10844__i < G__10844__a.length) {G__10844__a[G__10844__i] = arguments[G__10844__i + 0]; ++G__10844__i;}
  args__9855__auto__ = new cljs.core.IndexedSeq(G__10844__a,0,null);
} 
return G__10843__delegate.call(this,args__9855__auto__);};
G__10843.cljs$lang$maxFixedArity = 0;
G__10843.cljs$lang$applyTo = (function (arglist__10845){
var args__9855__auto__ = cljs.core.seq(arglist__10845);
return G__10843__delegate(args__9855__auto__);
});
G__10843.cljs$core$IFn$_invoke$arity$variadic = G__10843__delegate;
return G__10843;
})()
;
;})(format_in__9853__auto__,cf__9854__auto__,_STAR_current_level_STAR__orig_val__10829_10833,_STAR_current_length_STAR__orig_val__10830_10834,_STAR_current_level_STAR__temp_val__10831_10835,_STAR_current_length_STAR__temp_val__10832_10836,vec__10820,seq__10821,first__10822,seq__10821__$1,ns_sym,first__10822__$1,seq__10821__$2,ns_name,stuff,vec__10823,doc_str,stuff__$1,vec__10826,attr_map,references))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
})().call(null,attr_map,cljs.core.seq.call(null,references));
} else {
}

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var references_17637__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference.call(null,cljs.core.first.call(null,references_17637__$1));

var temp__5720__auto___17638 = cljs.core.next.call(null,references_17637__$1);
if(temp__5720__auto___17638){
var references_17639__$2 = temp__5720__auto___17638;
cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__17640 = references_17639__$2;
references_17637__$1 = G__17640;
=======
var references_10846__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference.call(null,cljs.core.first.call(null,references_10846__$1));

var temp__5720__auto___10847 = cljs.core.next.call(null,references_10846__$1);
if(temp__5720__auto___10847){
var references_10848__$2 = temp__5720__auto___10847;
cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__10849 = references_10848__$2;
references_10846__$1 = G__10849;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
} else {
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__17621_17625;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__17620_17624;
=======
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__10830_10834;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__10829_10833;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}}

return null;
} else {
return cljs.pprint.write_out.call(null,alis);
}
});
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.pprint_hold_first = (function (){var format_in__16644__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__16645__auto__ = ((typeof format_in__16644__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16644__auto__):format_in__16644__auto__);
return ((function (format_in__16644__auto__,cf__16645__auto__){
return (function() { 
var G__17641__delegate = function (args__16646__auto__){
var navigator__16647__auto__ = cljs.pprint.init_navigator.call(null,args__16646__auto__);
return cljs.pprint.execute_format.call(null,cf__16645__auto__,navigator__16647__auto__);
};
var G__17641 = function (var_args){
var args__16646__auto__ = null;
if (arguments.length > 0) {
var G__17642__i = 0, G__17642__a = new Array(arguments.length -  0);
while (G__17642__i < G__17642__a.length) {G__17642__a[G__17642__i] = arguments[G__17642__i + 0]; ++G__17642__i;}
  args__16646__auto__ = new cljs.core.IndexedSeq(G__17642__a,0,null);
} 
return G__17641__delegate.call(this,args__16646__auto__);};
G__17641.cljs$lang$maxFixedArity = 0;
G__17641.cljs$lang$applyTo = (function (arglist__17643){
var args__16646__auto__ = cljs.core.seq(arglist__17643);
return G__17641__delegate(args__16646__auto__);
});
G__17641.cljs$core$IFn$_invoke$arity$variadic = G__17641__delegate;
return G__17641;
})()
;
;})(format_in__16644__auto__,cf__16645__auto__))
=======
cljs.pprint.pprint_hold_first = (function (){var format_in__9853__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__9854__auto__ = ((typeof format_in__9853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__9853__auto__):format_in__9853__auto__);
return ((function (format_in__9853__auto__,cf__9854__auto__){
return (function() { 
var G__10850__delegate = function (args__9855__auto__){
var navigator__9856__auto__ = cljs.pprint.init_navigator.call(null,args__9855__auto__);
return cljs.pprint.execute_format.call(null,cf__9854__auto__,navigator__9856__auto__);
};
var G__10850 = function (var_args){
var args__9855__auto__ = null;
if (arguments.length > 0) {
var G__10851__i = 0, G__10851__a = new Array(arguments.length -  0);
while (G__10851__i < G__10851__a.length) {G__10851__a[G__10851__i] = arguments[G__10851__i + 0]; ++G__10851__i;}
  args__9855__auto__ = new cljs.core.IndexedSeq(G__10851__a,0,null);
} 
return G__10850__delegate.call(this,args__9855__auto__);};
G__10850.cljs$lang$maxFixedArity = 0;
G__10850.cljs$lang$applyTo = (function (arglist__10852){
var args__9855__auto__ = cljs.core.seq(arglist__10852);
return G__10850__delegate(args__9855__auto__);
});
G__10850.cljs$core$IFn$_invoke$arity$variadic = G__10850__delegate;
return G__10850;
})()
;
;})(format_in__9853__auto__,cf__9854__auto__))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq.call(null,alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
(function (){var format_in__16644__auto__ = " ~_";
var cf__16645__auto__ = ((typeof format_in__16644__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16644__auto__):format_in__16644__auto__);
return ((function (format_in__16644__auto__,cf__16645__auto__){
return (function() { 
var G__17644__delegate = function (args__16646__auto__){
var navigator__16647__auto__ = cljs.pprint.init_navigator.call(null,args__16646__auto__);
return cljs.pprint.execute_format.call(null,cf__16645__auto__,navigator__16647__auto__);
};
var G__17644 = function (var_args){
var args__16646__auto__ = null;
if (arguments.length > 0) {
var G__17645__i = 0, G__17645__a = new Array(arguments.length -  0);
while (G__17645__i < G__17645__a.length) {G__17645__a[G__17645__i] = arguments[G__17645__i + 0]; ++G__17645__i;}
  args__16646__auto__ = new cljs.core.IndexedSeq(G__17645__a,0,null);
} 
return G__17644__delegate.call(this,args__16646__auto__);};
G__17644.cljs$lang$maxFixedArity = 0;
G__17644.cljs$lang$applyTo = (function (arglist__17646){
var args__16646__auto__ = cljs.core.seq(arglist__17646);
return G__17644__delegate(args__16646__auto__);
});
G__17644.cljs$core$IFn$_invoke$arity$variadic = G__17644__delegate;
return G__17644;
})()
;
;})(format_in__16644__auto__,cf__16645__auto__))
})().call(null);
} else {
(function (){var format_in__16644__auto__ = " ~@_";
var cf__16645__auto__ = ((typeof format_in__16644__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16644__auto__):format_in__16644__auto__);
return ((function (format_in__16644__auto__,cf__16645__auto__){
return (function() { 
var G__17647__delegate = function (args__16646__auto__){
var navigator__16647__auto__ = cljs.pprint.init_navigator.call(null,args__16646__auto__);
return cljs.pprint.execute_format.call(null,cf__16645__auto__,navigator__16647__auto__);
};
var G__17647 = function (var_args){
var args__16646__auto__ = null;
if (arguments.length > 0) {
var G__17648__i = 0, G__17648__a = new Array(arguments.length -  0);
while (G__17648__i < G__17648__a.length) {G__17648__a[G__17648__i] = arguments[G__17648__i + 0]; ++G__17648__i;}
  args__16646__auto__ = new cljs.core.IndexedSeq(G__17648__a,0,null);
} 
return G__17647__delegate.call(this,args__16646__auto__);};
G__17647.cljs$lang$maxFixedArity = 0;
G__17647.cljs$lang$applyTo = (function (arglist__17649){
var args__16646__auto__ = cljs.core.seq(arglist__17649);
return G__17647__delegate(args__16646__auto__);
});
G__17647.cljs$core$IFn$_invoke$arity$variadic = G__17647__delegate;
return G__17647;
})()
;
;})(format_in__16644__auto__,cf__16645__auto__))
})().call(null);
}

return (function (){var format_in__16644__auto__ = "~{~w~^ ~_~}";
var cf__16645__auto__ = ((typeof format_in__16644__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16644__auto__):format_in__16644__auto__);
return ((function (format_in__16644__auto__,cf__16645__auto__){
return (function() { 
var G__17650__delegate = function (args__16646__auto__){
var navigator__16647__auto__ = cljs.pprint.init_navigator.call(null,args__16646__auto__);
return cljs.pprint.execute_format.call(null,cf__16645__auto__,navigator__16647__auto__);
};
var G__17650 = function (var_args){
var args__16646__auto__ = null;
if (arguments.length > 0) {
var G__17651__i = 0, G__17651__a = new Array(arguments.length -  0);
while (G__17651__i < G__17651__a.length) {G__17651__a[G__17651__i] = arguments[G__17651__i + 0]; ++G__17651__i;}
  args__16646__auto__ = new cljs.core.IndexedSeq(G__17651__a,0,null);
} 
return G__17650__delegate.call(this,args__16646__auto__);};
G__17650.cljs$lang$maxFixedArity = 0;
G__17650.cljs$lang$applyTo = (function (arglist__17652){
var args__16646__auto__ = cljs.core.seq(arglist__17652);
return G__17650__delegate(args__16646__auto__);
});
G__17650.cljs$core$IFn$_invoke$arity$variadic = G__17650__delegate;
return G__17650;
})()
;
;})(format_in__16644__auto__,cf__16645__auto__))
=======
(function (){var format_in__9853__auto__ = " ~_";
var cf__9854__auto__ = ((typeof format_in__9853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__9853__auto__):format_in__9853__auto__);
return ((function (format_in__9853__auto__,cf__9854__auto__){
return (function() { 
var G__10853__delegate = function (args__9855__auto__){
var navigator__9856__auto__ = cljs.pprint.init_navigator.call(null,args__9855__auto__);
return cljs.pprint.execute_format.call(null,cf__9854__auto__,navigator__9856__auto__);
};
var G__10853 = function (var_args){
var args__9855__auto__ = null;
if (arguments.length > 0) {
var G__10854__i = 0, G__10854__a = new Array(arguments.length -  0);
while (G__10854__i < G__10854__a.length) {G__10854__a[G__10854__i] = arguments[G__10854__i + 0]; ++G__10854__i;}
  args__9855__auto__ = new cljs.core.IndexedSeq(G__10854__a,0,null);
} 
return G__10853__delegate.call(this,args__9855__auto__);};
G__10853.cljs$lang$maxFixedArity = 0;
G__10853.cljs$lang$applyTo = (function (arglist__10855){
var args__9855__auto__ = cljs.core.seq(arglist__10855);
return G__10853__delegate(args__9855__auto__);
});
G__10853.cljs$core$IFn$_invoke$arity$variadic = G__10853__delegate;
return G__10853;
})()
;
;})(format_in__9853__auto__,cf__9854__auto__))
})().call(null);
} else {
(function (){var format_in__9853__auto__ = " ~@_";
var cf__9854__auto__ = ((typeof format_in__9853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__9853__auto__):format_in__9853__auto__);
return ((function (format_in__9853__auto__,cf__9854__auto__){
return (function() { 
var G__10856__delegate = function (args__9855__auto__){
var navigator__9856__auto__ = cljs.pprint.init_navigator.call(null,args__9855__auto__);
return cljs.pprint.execute_format.call(null,cf__9854__auto__,navigator__9856__auto__);
};
var G__10856 = function (var_args){
var args__9855__auto__ = null;
if (arguments.length > 0) {
var G__10857__i = 0, G__10857__a = new Array(arguments.length -  0);
while (G__10857__i < G__10857__a.length) {G__10857__a[G__10857__i] = arguments[G__10857__i + 0]; ++G__10857__i;}
  args__9855__auto__ = new cljs.core.IndexedSeq(G__10857__a,0,null);
} 
return G__10856__delegate.call(this,args__9855__auto__);};
G__10856.cljs$lang$maxFixedArity = 0;
G__10856.cljs$lang$applyTo = (function (arglist__10858){
var args__9855__auto__ = cljs.core.seq(arglist__10858);
return G__10856__delegate(args__9855__auto__);
});
G__10856.cljs$core$IFn$_invoke$arity$variadic = G__10856__delegate;
return G__10856;
})()
;
;})(format_in__9853__auto__,cf__9854__auto__))
})().call(null);
}

return (function (){var format_in__9853__auto__ = "~{~w~^ ~_~}";
var cf__9854__auto__ = ((typeof format_in__9853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__9853__auto__):format_in__9853__auto__);
return ((function (format_in__9853__auto__,cf__9854__auto__){
return (function() { 
var G__10859__delegate = function (args__9855__auto__){
var navigator__9856__auto__ = cljs.pprint.init_navigator.call(null,args__9855__auto__);
return cljs.pprint.execute_format.call(null,cf__9854__auto__,navigator__9856__auto__);
};
var G__10859 = function (var_args){
var args__9855__auto__ = null;
if (arguments.length > 0) {
var G__10860__i = 0, G__10860__a = new Array(arguments.length -  0);
while (G__10860__i < G__10860__a.length) {G__10860__a[G__10860__i] = arguments[G__10860__i + 0]; ++G__10860__i;}
  args__9855__auto__ = new cljs.core.IndexedSeq(G__10860__a,0,null);
} 
return G__10859__delegate.call(this,args__9855__auto__);};
G__10859.cljs$lang$maxFixedArity = 0;
G__10859.cljs$lang$applyTo = (function (arglist__10861){
var args__9855__auto__ = cljs.core.seq(arglist__10861);
return G__10859__delegate(args__9855__auto__);
});
G__10859.cljs$core$IFn$_invoke$arity$variadic = G__10859__delegate;
return G__10859;
})()
;
;})(format_in__9853__auto__,cf__9854__auto__))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq.call(null,alis)){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return (function (){var format_in__16644__auto__ = " ~_~{~w~^ ~_~}";
var cf__16645__auto__ = ((typeof format_in__16644__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16644__auto__):format_in__16644__auto__);
return ((function (format_in__16644__auto__,cf__16645__auto__){
return (function() { 
var G__17653__delegate = function (args__16646__auto__){
var navigator__16647__auto__ = cljs.pprint.init_navigator.call(null,args__16646__auto__);
return cljs.pprint.execute_format.call(null,cf__16645__auto__,navigator__16647__auto__);
};
var G__17653 = function (var_args){
var args__16646__auto__ = null;
if (arguments.length > 0) {
var G__17654__i = 0, G__17654__a = new Array(arguments.length -  0);
while (G__17654__i < G__17654__a.length) {G__17654__a[G__17654__i] = arguments[G__17654__i + 0]; ++G__17654__i;}
  args__16646__auto__ = new cljs.core.IndexedSeq(G__17654__a,0,null);
} 
return G__17653__delegate.call(this,args__16646__auto__);};
G__17653.cljs$lang$maxFixedArity = 0;
G__17653.cljs$lang$applyTo = (function (arglist__17655){
var args__16646__auto__ = cljs.core.seq(arglist__17655);
return G__17653__delegate(args__16646__auto__);
});
G__17653.cljs$core$IFn$_invoke$arity$variadic = G__17653__delegate;
return G__17653;
})()
;
;})(format_in__16644__auto__,cf__16645__auto__))
=======
return (function (){var format_in__9853__auto__ = " ~_~{~w~^ ~_~}";
var cf__9854__auto__ = ((typeof format_in__9853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__9853__auto__):format_in__9853__auto__);
return ((function (format_in__9853__auto__,cf__9854__auto__){
return (function() { 
var G__10862__delegate = function (args__9855__auto__){
var navigator__9856__auto__ = cljs.pprint.init_navigator.call(null,args__9855__auto__);
return cljs.pprint.execute_format.call(null,cf__9854__auto__,navigator__9856__auto__);
};
var G__10862 = function (var_args){
var args__9855__auto__ = null;
if (arguments.length > 0) {
var G__10863__i = 0, G__10863__a = new Array(arguments.length -  0);
while (G__10863__i < G__10863__a.length) {G__10863__a[G__10863__i] = arguments[G__10863__i + 0]; ++G__10863__i;}
  args__9855__auto__ = new cljs.core.IndexedSeq(G__10863__a,0,null);
} 
return G__10862__delegate.call(this,args__9855__auto__);};
G__10862.cljs$lang$maxFixedArity = 0;
G__10862.cljs$lang$applyTo = (function (arglist__10864){
var args__9855__auto__ = cljs.core.seq(arglist__10864);
return G__10862__delegate(args__9855__auto__);
});
G__10862.cljs$core$IFn$_invoke$arity$variadic = G__10862__delegate;
return G__10862;
})()
;
;})(format_in__9853__auto__,cf__9854__auto__))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next.call(null,alis)){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var vec__17656 = alis;
var seq__17657 = cljs.core.seq.call(null,vec__17656);
var first__17658 = cljs.core.first.call(null,seq__17657);
var seq__17657__$1 = cljs.core.next.call(null,seq__17657);
var defn_sym = first__17658;
var first__17658__$1 = cljs.core.first.call(null,seq__17657__$1);
var seq__17657__$2 = cljs.core.next.call(null,seq__17657__$1);
var defn_name = first__17658__$1;
var stuff = seq__17657__$2;
var vec__17659 = ((typeof cljs.core.first.call(null,stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff),cljs.core.next.call(null,stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.call(null,vec__17659,(0),null);
var stuff__$1 = cljs.core.nth.call(null,vec__17659,(1),null);
var vec__17662 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff__$1),cljs.core.next.call(null,stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.call(null,vec__17662,(0),null);
var stuff__$2 = cljs.core.nth.call(null,vec__17662,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__17665_17669 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__17666_17670 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__17667_17671 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__17668_17672 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__17667_17671;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__17668_17672;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__16644__auto__ = "~w ~1I~@_~w";
var cf__16645__auto__ = ((typeof format_in__16644__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16644__auto__):format_in__16644__auto__);
return ((function (format_in__16644__auto__,cf__16645__auto__,_STAR_current_level_STAR__orig_val__17665_17669,_STAR_current_length_STAR__orig_val__17666_17670,_STAR_current_level_STAR__temp_val__17667_17671,_STAR_current_length_STAR__temp_val__17668_17672,vec__17656,seq__17657,first__17658,seq__17657__$1,defn_sym,first__17658__$1,seq__17657__$2,defn_name,stuff,vec__17659,doc_str,stuff__$1,vec__17662,attr_map,stuff__$2){
return (function() { 
var G__17673__delegate = function (args__16646__auto__){
var navigator__16647__auto__ = cljs.pprint.init_navigator.call(null,args__16646__auto__);
return cljs.pprint.execute_format.call(null,cf__16645__auto__,navigator__16647__auto__);
};
var G__17673 = function (var_args){
var args__16646__auto__ = null;
if (arguments.length > 0) {
var G__17674__i = 0, G__17674__a = new Array(arguments.length -  0);
while (G__17674__i < G__17674__a.length) {G__17674__a[G__17674__i] = arguments[G__17674__i + 0]; ++G__17674__i;}
  args__16646__auto__ = new cljs.core.IndexedSeq(G__17674__a,0,null);
} 
return G__17673__delegate.call(this,args__16646__auto__);};
G__17673.cljs$lang$maxFixedArity = 0;
G__17673.cljs$lang$applyTo = (function (arglist__17675){
var args__16646__auto__ = cljs.core.seq(arglist__17675);
return G__17673__delegate(args__16646__auto__);
});
G__17673.cljs$core$IFn$_invoke$arity$variadic = G__17673__delegate;
return G__17673;
})()
;
;})(format_in__16644__auto__,cf__16645__auto__,_STAR_current_level_STAR__orig_val__17665_17669,_STAR_current_length_STAR__orig_val__17666_17670,_STAR_current_level_STAR__temp_val__17667_17671,_STAR_current_length_STAR__temp_val__17668_17672,vec__17656,seq__17657,first__17658,seq__17657__$1,defn_sym,first__17658__$1,seq__17657__$2,defn_name,stuff,vec__17659,doc_str,stuff__$1,vec__17662,attr_map,stuff__$2))
})().call(null,defn_sym,defn_name);

if(cljs.core.truth_(doc_str)){
(function (){var format_in__16644__auto__ = " ~_~w";
var cf__16645__auto__ = ((typeof format_in__16644__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16644__auto__):format_in__16644__auto__);
return ((function (format_in__16644__auto__,cf__16645__auto__,_STAR_current_level_STAR__orig_val__17665_17669,_STAR_current_length_STAR__orig_val__17666_17670,_STAR_current_level_STAR__temp_val__17667_17671,_STAR_current_length_STAR__temp_val__17668_17672,vec__17656,seq__17657,first__17658,seq__17657__$1,defn_sym,first__17658__$1,seq__17657__$2,defn_name,stuff,vec__17659,doc_str,stuff__$1,vec__17662,attr_map,stuff__$2){
return (function() { 
var G__17676__delegate = function (args__16646__auto__){
var navigator__16647__auto__ = cljs.pprint.init_navigator.call(null,args__16646__auto__);
return cljs.pprint.execute_format.call(null,cf__16645__auto__,navigator__16647__auto__);
};
var G__17676 = function (var_args){
var args__16646__auto__ = null;
if (arguments.length > 0) {
var G__17677__i = 0, G__17677__a = new Array(arguments.length -  0);
while (G__17677__i < G__17677__a.length) {G__17677__a[G__17677__i] = arguments[G__17677__i + 0]; ++G__17677__i;}
  args__16646__auto__ = new cljs.core.IndexedSeq(G__17677__a,0,null);
} 
return G__17676__delegate.call(this,args__16646__auto__);};
G__17676.cljs$lang$maxFixedArity = 0;
G__17676.cljs$lang$applyTo = (function (arglist__17678){
var args__16646__auto__ = cljs.core.seq(arglist__17678);
return G__17676__delegate(args__16646__auto__);
});
G__17676.cljs$core$IFn$_invoke$arity$variadic = G__17676__delegate;
return G__17676;
})()
;
;})(format_in__16644__auto__,cf__16645__auto__,_STAR_current_level_STAR__orig_val__17665_17669,_STAR_current_length_STAR__orig_val__17666_17670,_STAR_current_level_STAR__temp_val__17667_17671,_STAR_current_length_STAR__temp_val__17668_17672,vec__17656,seq__17657,first__17658,seq__17657__$1,defn_sym,first__17658__$1,seq__17657__$2,defn_name,stuff,vec__17659,doc_str,stuff__$1,vec__17662,attr_map,stuff__$2))
=======
var vec__10865 = alis;
var seq__10866 = cljs.core.seq.call(null,vec__10865);
var first__10867 = cljs.core.first.call(null,seq__10866);
var seq__10866__$1 = cljs.core.next.call(null,seq__10866);
var defn_sym = first__10867;
var first__10867__$1 = cljs.core.first.call(null,seq__10866__$1);
var seq__10866__$2 = cljs.core.next.call(null,seq__10866__$1);
var defn_name = first__10867__$1;
var stuff = seq__10866__$2;
var vec__10868 = ((typeof cljs.core.first.call(null,stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff),cljs.core.next.call(null,stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.call(null,vec__10868,(0),null);
var stuff__$1 = cljs.core.nth.call(null,vec__10868,(1),null);
var vec__10871 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff__$1),cljs.core.next.call(null,stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.call(null,vec__10871,(0),null);
var stuff__$2 = cljs.core.nth.call(null,vec__10871,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__10874_10878 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__10875_10879 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__10876_10880 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__10877_10881 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__10876_10880;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__10877_10881;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__9853__auto__ = "~w ~1I~@_~w";
var cf__9854__auto__ = ((typeof format_in__9853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__9853__auto__):format_in__9853__auto__);
return ((function (format_in__9853__auto__,cf__9854__auto__,_STAR_current_level_STAR__orig_val__10874_10878,_STAR_current_length_STAR__orig_val__10875_10879,_STAR_current_level_STAR__temp_val__10876_10880,_STAR_current_length_STAR__temp_val__10877_10881,vec__10865,seq__10866,first__10867,seq__10866__$1,defn_sym,first__10867__$1,seq__10866__$2,defn_name,stuff,vec__10868,doc_str,stuff__$1,vec__10871,attr_map,stuff__$2){
return (function() { 
var G__10882__delegate = function (args__9855__auto__){
var navigator__9856__auto__ = cljs.pprint.init_navigator.call(null,args__9855__auto__);
return cljs.pprint.execute_format.call(null,cf__9854__auto__,navigator__9856__auto__);
};
var G__10882 = function (var_args){
var args__9855__auto__ = null;
if (arguments.length > 0) {
var G__10883__i = 0, G__10883__a = new Array(arguments.length -  0);
while (G__10883__i < G__10883__a.length) {G__10883__a[G__10883__i] = arguments[G__10883__i + 0]; ++G__10883__i;}
  args__9855__auto__ = new cljs.core.IndexedSeq(G__10883__a,0,null);
} 
return G__10882__delegate.call(this,args__9855__auto__);};
G__10882.cljs$lang$maxFixedArity = 0;
G__10882.cljs$lang$applyTo = (function (arglist__10884){
var args__9855__auto__ = cljs.core.seq(arglist__10884);
return G__10882__delegate(args__9855__auto__);
});
G__10882.cljs$core$IFn$_invoke$arity$variadic = G__10882__delegate;
return G__10882;
})()
;
;})(format_in__9853__auto__,cf__9854__auto__,_STAR_current_level_STAR__orig_val__10874_10878,_STAR_current_length_STAR__orig_val__10875_10879,_STAR_current_level_STAR__temp_val__10876_10880,_STAR_current_length_STAR__temp_val__10877_10881,vec__10865,seq__10866,first__10867,seq__10866__$1,defn_sym,first__10867__$1,seq__10866__$2,defn_name,stuff,vec__10868,doc_str,stuff__$1,vec__10871,attr_map,stuff__$2))
})().call(null,defn_sym,defn_name);

if(cljs.core.truth_(doc_str)){
(function (){var format_in__9853__auto__ = " ~_~w";
var cf__9854__auto__ = ((typeof format_in__9853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__9853__auto__):format_in__9853__auto__);
return ((function (format_in__9853__auto__,cf__9854__auto__,_STAR_current_level_STAR__orig_val__10874_10878,_STAR_current_length_STAR__orig_val__10875_10879,_STAR_current_level_STAR__temp_val__10876_10880,_STAR_current_length_STAR__temp_val__10877_10881,vec__10865,seq__10866,first__10867,seq__10866__$1,defn_sym,first__10867__$1,seq__10866__$2,defn_name,stuff,vec__10868,doc_str,stuff__$1,vec__10871,attr_map,stuff__$2){
return (function() { 
var G__10885__delegate = function (args__9855__auto__){
var navigator__9856__auto__ = cljs.pprint.init_navigator.call(null,args__9855__auto__);
return cljs.pprint.execute_format.call(null,cf__9854__auto__,navigator__9856__auto__);
};
var G__10885 = function (var_args){
var args__9855__auto__ = null;
if (arguments.length > 0) {
var G__10886__i = 0, G__10886__a = new Array(arguments.length -  0);
while (G__10886__i < G__10886__a.length) {G__10886__a[G__10886__i] = arguments[G__10886__i + 0]; ++G__10886__i;}
  args__9855__auto__ = new cljs.core.IndexedSeq(G__10886__a,0,null);
} 
return G__10885__delegate.call(this,args__9855__auto__);};
G__10885.cljs$lang$maxFixedArity = 0;
G__10885.cljs$lang$applyTo = (function (arglist__10887){
var args__9855__auto__ = cljs.core.seq(arglist__10887);
return G__10885__delegate(args__9855__auto__);
});
G__10885.cljs$core$IFn$_invoke$arity$variadic = G__10885__delegate;
return G__10885;
})()
;
;})(format_in__9853__auto__,cf__9854__auto__,_STAR_current_level_STAR__orig_val__10874_10878,_STAR_current_length_STAR__orig_val__10875_10879,_STAR_current_level_STAR__temp_val__10876_10880,_STAR_current_length_STAR__temp_val__10877_10881,vec__10865,seq__10866,first__10867,seq__10866__$1,defn_sym,first__10867__$1,seq__10866__$2,defn_name,stuff,vec__10868,doc_str,stuff__$1,vec__10871,attr_map,stuff__$2))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
})().call(null,doc_str);
} else {
}

if(cljs.core.truth_(attr_map)){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
(function (){var format_in__16644__auto__ = " ~_~w";
var cf__16645__auto__ = ((typeof format_in__16644__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16644__auto__):format_in__16644__auto__);
return ((function (format_in__16644__auto__,cf__16645__auto__,_STAR_current_level_STAR__orig_val__17665_17669,_STAR_current_length_STAR__orig_val__17666_17670,_STAR_current_level_STAR__temp_val__17667_17671,_STAR_current_length_STAR__temp_val__17668_17672,vec__17656,seq__17657,first__17658,seq__17657__$1,defn_sym,first__17658__$1,seq__17657__$2,defn_name,stuff,vec__17659,doc_str,stuff__$1,vec__17662,attr_map,stuff__$2){
return (function() { 
var G__17679__delegate = function (args__16646__auto__){
var navigator__16647__auto__ = cljs.pprint.init_navigator.call(null,args__16646__auto__);
return cljs.pprint.execute_format.call(null,cf__16645__auto__,navigator__16647__auto__);
};
var G__17679 = function (var_args){
var args__16646__auto__ = null;
if (arguments.length > 0) {
var G__17680__i = 0, G__17680__a = new Array(arguments.length -  0);
while (G__17680__i < G__17680__a.length) {G__17680__a[G__17680__i] = arguments[G__17680__i + 0]; ++G__17680__i;}
  args__16646__auto__ = new cljs.core.IndexedSeq(G__17680__a,0,null);
} 
return G__17679__delegate.call(this,args__16646__auto__);};
G__17679.cljs$lang$maxFixedArity = 0;
G__17679.cljs$lang$applyTo = (function (arglist__17681){
var args__16646__auto__ = cljs.core.seq(arglist__17681);
return G__17679__delegate(args__16646__auto__);
});
G__17679.cljs$core$IFn$_invoke$arity$variadic = G__17679__delegate;
return G__17679;
})()
;
;})(format_in__16644__auto__,cf__16645__auto__,_STAR_current_level_STAR__orig_val__17665_17669,_STAR_current_length_STAR__orig_val__17666_17670,_STAR_current_level_STAR__temp_val__17667_17671,_STAR_current_length_STAR__temp_val__17668_17672,vec__17656,seq__17657,first__17658,seq__17657__$1,defn_sym,first__17658__$1,seq__17657__$2,defn_name,stuff,vec__17659,doc_str,stuff__$1,vec__17662,attr_map,stuff__$2))
=======
(function (){var format_in__9853__auto__ = " ~_~w";
var cf__9854__auto__ = ((typeof format_in__9853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__9853__auto__):format_in__9853__auto__);
return ((function (format_in__9853__auto__,cf__9854__auto__,_STAR_current_level_STAR__orig_val__10874_10878,_STAR_current_length_STAR__orig_val__10875_10879,_STAR_current_level_STAR__temp_val__10876_10880,_STAR_current_length_STAR__temp_val__10877_10881,vec__10865,seq__10866,first__10867,seq__10866__$1,defn_sym,first__10867__$1,seq__10866__$2,defn_name,stuff,vec__10868,doc_str,stuff__$1,vec__10871,attr_map,stuff__$2){
return (function() { 
var G__10888__delegate = function (args__9855__auto__){
var navigator__9856__auto__ = cljs.pprint.init_navigator.call(null,args__9855__auto__);
return cljs.pprint.execute_format.call(null,cf__9854__auto__,navigator__9856__auto__);
};
var G__10888 = function (var_args){
var args__9855__auto__ = null;
if (arguments.length > 0) {
var G__10889__i = 0, G__10889__a = new Array(arguments.length -  0);
while (G__10889__i < G__10889__a.length) {G__10889__a[G__10889__i] = arguments[G__10889__i + 0]; ++G__10889__i;}
  args__9855__auto__ = new cljs.core.IndexedSeq(G__10889__a,0,null);
} 
return G__10888__delegate.call(this,args__9855__auto__);};
G__10888.cljs$lang$maxFixedArity = 0;
G__10888.cljs$lang$applyTo = (function (arglist__10890){
var args__9855__auto__ = cljs.core.seq(arglist__10890);
return G__10888__delegate(args__9855__auto__);
});
G__10888.cljs$core$IFn$_invoke$arity$variadic = G__10888__delegate;
return G__10888;
})()
;
;})(format_in__9853__auto__,cf__9854__auto__,_STAR_current_level_STAR__orig_val__10874_10878,_STAR_current_length_STAR__orig_val__10875_10879,_STAR_current_level_STAR__temp_val__10876_10880,_STAR_current_length_STAR__temp_val__10877_10881,vec__10865,seq__10866,first__10867,seq__10866__$1,defn_sym,first__10867__$1,seq__10866__$2,defn_name,stuff,vec__10868,doc_str,stuff__$1,vec__10871,attr_map,stuff__$2))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
})().call(null,attr_map);
} else {
}

if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,stuff__$2))){
cljs.pprint.single_defn.call(null,stuff__$2,(function (){var or__4131__auto__ = doc_str;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn.call(null,stuff__$2,(function (){var or__4131__auto__ = doc_str;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__17666_17670;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__17665_17669;
=======
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__10875_10879;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__10874_10878;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var _STAR_current_level_STAR__orig_val__17682_17691 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__17683_17692 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__17684_17693 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__17685_17694 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__17684_17693;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__17685_17694;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count17686_17695 = (0);
var binding_17696 = binding_vec;
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count17686_17695 < cljs.core._STAR_print_length_STAR_)))){
if(cljs.core.seq.call(null,binding_17696)){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__17687_17697 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__17688_17698 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__17689_17699 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__17690_17700 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__17689_17699;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__17690_17700;
=======
var _STAR_current_level_STAR__orig_val__10891_10900 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__10892_10901 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__10893_10902 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__10894_10903 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__10893_10902;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__10894_10903;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count10895_10904 = (0);
var binding_10905 = binding_vec;
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count10895_10904 < cljs.core._STAR_print_length_STAR_)))){
if(cljs.core.seq.call(null,binding_10905)){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__10896_10906 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__10897_10907 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__10898_10908 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__10899_10909 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__10898_10908;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__10899_10909;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.write_out.call(null,cljs.core.first.call(null,binding_17696));

if(cljs.core.next.call(null,binding_17696)){
=======
cljs.pprint.write_out.call(null,cljs.core.first.call(null,binding_10905));

if(cljs.core.next.call(null,binding_10905)){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.write_out.call(null,cljs.core.second.call(null,binding_17696));
=======
cljs.pprint.write_out.call(null,cljs.core.second.call(null,binding_10905));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__17688_17698;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__17687_17697;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,binding_17696))){
=======
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__10897_10907;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__10896_10906;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,binding_10905))){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var G__17701 = (length_count17686_17695 + (1));
var G__17702 = cljs.core.next.call(null,cljs.core.rest.call(null,binding_17696));
length_count17686_17695 = G__17701;
binding_17696 = G__17702;
=======
var G__10910 = (length_count10895_10904 + (1));
var G__10911 = cljs.core.next.call(null,cljs.core.rest.call(null,binding_10905));
length_count10895_10904 = G__10910;
binding_10905 = G__10911;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__17683_17692;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__17682_17691;
=======
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__10892_10901;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__10891_10900;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first.call(null,alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var _STAR_current_level_STAR__orig_val__17703_17707 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__17704_17708 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__17705_17709 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__17706_17710 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__17705_17709;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__17706_17710;
=======
var _STAR_current_level_STAR__orig_val__10912_10916 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__10913_10917 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__10914_10918 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__10915_10919 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__10914_10918;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__10915_10919;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

if(((cljs.core.next.call(null,alis)) && (cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,alis))))){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
(function (){var format_in__16644__auto__ = "~w ~1I~@_";
var cf__16645__auto__ = ((typeof format_in__16644__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16644__auto__):format_in__16644__auto__);
return ((function (format_in__16644__auto__,cf__16645__auto__,_STAR_current_level_STAR__orig_val__17703_17707,_STAR_current_length_STAR__orig_val__17704_17708,_STAR_current_level_STAR__temp_val__17705_17709,_STAR_current_length_STAR__temp_val__17706_17710,base_sym){
return (function() { 
var G__17711__delegate = function (args__16646__auto__){
var navigator__16647__auto__ = cljs.pprint.init_navigator.call(null,args__16646__auto__);
return cljs.pprint.execute_format.call(null,cf__16645__auto__,navigator__16647__auto__);
};
var G__17711 = function (var_args){
var args__16646__auto__ = null;
if (arguments.length > 0) {
var G__17712__i = 0, G__17712__a = new Array(arguments.length -  0);
while (G__17712__i < G__17712__a.length) {G__17712__a[G__17712__i] = arguments[G__17712__i + 0]; ++G__17712__i;}
  args__16646__auto__ = new cljs.core.IndexedSeq(G__17712__a,0,null);
} 
return G__17711__delegate.call(this,args__16646__auto__);};
G__17711.cljs$lang$maxFixedArity = 0;
G__17711.cljs$lang$applyTo = (function (arglist__17713){
var args__16646__auto__ = cljs.core.seq(arglist__17713);
return G__17711__delegate(args__16646__auto__);
});
G__17711.cljs$core$IFn$_invoke$arity$variadic = G__17711__delegate;
return G__17711;
})()
;
;})(format_in__16644__auto__,cf__16645__auto__,_STAR_current_level_STAR__orig_val__17703_17707,_STAR_current_length_STAR__orig_val__17704_17708,_STAR_current_level_STAR__temp_val__17705_17709,_STAR_current_length_STAR__temp_val__17706_17710,base_sym))
=======
(function (){var format_in__9853__auto__ = "~w ~1I~@_";
var cf__9854__auto__ = ((typeof format_in__9853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__9853__auto__):format_in__9853__auto__);
return ((function (format_in__9853__auto__,cf__9854__auto__,_STAR_current_level_STAR__orig_val__10912_10916,_STAR_current_length_STAR__orig_val__10913_10917,_STAR_current_level_STAR__temp_val__10914_10918,_STAR_current_length_STAR__temp_val__10915_10919,base_sym){
return (function() { 
var G__10920__delegate = function (args__9855__auto__){
var navigator__9856__auto__ = cljs.pprint.init_navigator.call(null,args__9855__auto__);
return cljs.pprint.execute_format.call(null,cf__9854__auto__,navigator__9856__auto__);
};
var G__10920 = function (var_args){
var args__9855__auto__ = null;
if (arguments.length > 0) {
var G__10921__i = 0, G__10921__a = new Array(arguments.length -  0);
while (G__10921__i < G__10921__a.length) {G__10921__a[G__10921__i] = arguments[G__10921__i + 0]; ++G__10921__i;}
  args__9855__auto__ = new cljs.core.IndexedSeq(G__10921__a,0,null);
} 
return G__10920__delegate.call(this,args__9855__auto__);};
G__10920.cljs$lang$maxFixedArity = 0;
G__10920.cljs$lang$applyTo = (function (arglist__10922){
var args__9855__auto__ = cljs.core.seq(arglist__10922);
return G__10920__delegate(args__9855__auto__);
});
G__10920.cljs$core$IFn$_invoke$arity$variadic = G__10920__delegate;
return G__10920;
})()
;
;})(format_in__9853__auto__,cf__9854__auto__,_STAR_current_level_STAR__orig_val__10912_10916,_STAR_current_length_STAR__orig_val__10913_10917,_STAR_current_level_STAR__temp_val__10914_10918,_STAR_current_length_STAR__temp_val__10915_10919,base_sym))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
})().call(null,base_sym);

cljs.pprint.pprint_binding_form.call(null,cljs.core.second.call(null,alis));

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
(function (){var format_in__16644__auto__ = " ~_~{~w~^ ~_~}";
var cf__16645__auto__ = ((typeof format_in__16644__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16644__auto__):format_in__16644__auto__);
return ((function (format_in__16644__auto__,cf__16645__auto__,_STAR_current_level_STAR__orig_val__17703_17707,_STAR_current_length_STAR__orig_val__17704_17708,_STAR_current_level_STAR__temp_val__17705_17709,_STAR_current_length_STAR__temp_val__17706_17710,base_sym){
return (function() { 
var G__17714__delegate = function (args__16646__auto__){
var navigator__16647__auto__ = cljs.pprint.init_navigator.call(null,args__16646__auto__);
return cljs.pprint.execute_format.call(null,cf__16645__auto__,navigator__16647__auto__);
};
var G__17714 = function (var_args){
var args__16646__auto__ = null;
if (arguments.length > 0) {
var G__17715__i = 0, G__17715__a = new Array(arguments.length -  0);
while (G__17715__i < G__17715__a.length) {G__17715__a[G__17715__i] = arguments[G__17715__i + 0]; ++G__17715__i;}
  args__16646__auto__ = new cljs.core.IndexedSeq(G__17715__a,0,null);
} 
return G__17714__delegate.call(this,args__16646__auto__);};
G__17714.cljs$lang$maxFixedArity = 0;
G__17714.cljs$lang$applyTo = (function (arglist__17716){
var args__16646__auto__ = cljs.core.seq(arglist__17716);
return G__17714__delegate(args__16646__auto__);
});
G__17714.cljs$core$IFn$_invoke$arity$variadic = G__17714__delegate;
return G__17714;
})()
;
;})(format_in__16644__auto__,cf__16645__auto__,_STAR_current_level_STAR__orig_val__17703_17707,_STAR_current_length_STAR__orig_val__17704_17708,_STAR_current_level_STAR__temp_val__17705_17709,_STAR_current_length_STAR__temp_val__17706_17710,base_sym))
=======
(function (){var format_in__9853__auto__ = " ~_~{~w~^ ~_~}";
var cf__9854__auto__ = ((typeof format_in__9853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__9853__auto__):format_in__9853__auto__);
return ((function (format_in__9853__auto__,cf__9854__auto__,_STAR_current_level_STAR__orig_val__10912_10916,_STAR_current_length_STAR__orig_val__10913_10917,_STAR_current_level_STAR__temp_val__10914_10918,_STAR_current_length_STAR__temp_val__10915_10919,base_sym){
return (function() { 
var G__10923__delegate = function (args__9855__auto__){
var navigator__9856__auto__ = cljs.pprint.init_navigator.call(null,args__9855__auto__);
return cljs.pprint.execute_format.call(null,cf__9854__auto__,navigator__9856__auto__);
};
var G__10923 = function (var_args){
var args__9855__auto__ = null;
if (arguments.length > 0) {
var G__10924__i = 0, G__10924__a = new Array(arguments.length -  0);
while (G__10924__i < G__10924__a.length) {G__10924__a[G__10924__i] = arguments[G__10924__i + 0]; ++G__10924__i;}
  args__9855__auto__ = new cljs.core.IndexedSeq(G__10924__a,0,null);
} 
return G__10923__delegate.call(this,args__9855__auto__);};
G__10923.cljs$lang$maxFixedArity = 0;
G__10923.cljs$lang$applyTo = (function (arglist__10925){
var args__9855__auto__ = cljs.core.seq(arglist__10925);
return G__10923__delegate(args__9855__auto__);
});
G__10923.cljs$core$IFn$_invoke$arity$variadic = G__10923__delegate;
return G__10923;
})()
;
;})(format_in__9853__auto__,cf__9854__auto__,_STAR_current_level_STAR__orig_val__10912_10916,_STAR_current_length_STAR__orig_val__10913_10917,_STAR_current_level_STAR__temp_val__10914_10918,_STAR_current_length_STAR__temp_val__10915_10919,base_sym))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
})().call(null,cljs.core.next.call(null,cljs.core.rest.call(null,alis)));
} else {
cljs.pprint.pprint_simple_code_list.call(null,alis);
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__17704_17708;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__17703_17707;
=======
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__10913_10917;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__10912_10916;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}}

return null;
});
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.pprint_if = (function (){var format_in__16644__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__16645__auto__ = ((typeof format_in__16644__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16644__auto__):format_in__16644__auto__);
return ((function (format_in__16644__auto__,cf__16645__auto__){
return (function() { 
var G__17717__delegate = function (args__16646__auto__){
var navigator__16647__auto__ = cljs.pprint.init_navigator.call(null,args__16646__auto__);
return cljs.pprint.execute_format.call(null,cf__16645__auto__,navigator__16647__auto__);
};
var G__17717 = function (var_args){
var args__16646__auto__ = null;
if (arguments.length > 0) {
var G__17718__i = 0, G__17718__a = new Array(arguments.length -  0);
while (G__17718__i < G__17718__a.length) {G__17718__a[G__17718__i] = arguments[G__17718__i + 0]; ++G__17718__i;}
  args__16646__auto__ = new cljs.core.IndexedSeq(G__17718__a,0,null);
} 
return G__17717__delegate.call(this,args__16646__auto__);};
G__17717.cljs$lang$maxFixedArity = 0;
G__17717.cljs$lang$applyTo = (function (arglist__17719){
var args__16646__auto__ = cljs.core.seq(arglist__17719);
return G__17717__delegate(args__16646__auto__);
});
G__17717.cljs$core$IFn$_invoke$arity$variadic = G__17717__delegate;
return G__17717;
})()
;
;})(format_in__16644__auto__,cf__16645__auto__))
=======
cljs.pprint.pprint_if = (function (){var format_in__9853__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__9854__auto__ = ((typeof format_in__9853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__9853__auto__):format_in__9853__auto__);
return ((function (format_in__9853__auto__,cf__9854__auto__){
return (function() { 
var G__10926__delegate = function (args__9855__auto__){
var navigator__9856__auto__ = cljs.pprint.init_navigator.call(null,args__9855__auto__);
return cljs.pprint.execute_format.call(null,cf__9854__auto__,navigator__9856__auto__);
};
var G__10926 = function (var_args){
var args__9855__auto__ = null;
if (arguments.length > 0) {
var G__10927__i = 0, G__10927__a = new Array(arguments.length -  0);
while (G__10927__i < G__10927__a.length) {G__10927__a[G__10927__i] = arguments[G__10927__i + 0]; ++G__10927__i;}
  args__9855__auto__ = new cljs.core.IndexedSeq(G__10927__a,0,null);
} 
return G__10926__delegate.call(this,args__9855__auto__);};
G__10926.cljs$lang$maxFixedArity = 0;
G__10926.cljs$lang$applyTo = (function (arglist__10928){
var args__9855__auto__ = cljs.core.seq(arglist__10928);
return G__10926__delegate(args__9855__auto__);
});
G__10926.cljs$core$IFn$_invoke$arity$variadic = G__10926__delegate;
return G__10926;
})()
;
;})(format_in__9853__auto__,cf__9854__auto__))
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var _STAR_current_level_STAR__orig_val__17720_17729 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__17721_17730 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__17722_17731 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__17723_17732 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__17722_17731;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__17723_17732;
=======
var _STAR_current_level_STAR__orig_val__10929_10938 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__10930_10939 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__10931_10940 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__10932_10941 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__10931_10940;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__10932_10941;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis));

if(cljs.core.next.call(null,alis)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var length_count17724_17733 = (0);
var alis_17734__$1 = cljs.core.next.call(null,alis);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count17724_17733 < cljs.core._STAR_print_length_STAR_)))){
if(alis_17734__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__17725_17735 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__17726_17736 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__17727_17737 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__17728_17738 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__17727_17737;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__17728_17738;
=======
var length_count10933_10942 = (0);
var alis_10943__$1 = cljs.core.next.call(null,alis);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count10933_10942 < cljs.core._STAR_print_length_STAR_)))){
if(alis_10943__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__10934_10944 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__10935_10945 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__10936_10946 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__10937_10947 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__10936_10946;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__10937_10947;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_17734__$1));

if(cljs.core.next.call(null,alis_17734__$1)){
=======
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_10943__$1));

if(cljs.core.next.call(null,alis_10943__$1)){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis_17734__$1));
=======
cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis_10943__$1));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__17726_17736;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__17725_17735;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,alis_17734__$1))){
=======
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__10935_10945;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__10934_10944;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,alis_10943__$1))){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var G__17739 = (length_count17724_17733 + (1));
var G__17740 = cljs.core.next.call(null,cljs.core.rest.call(null,alis_17734__$1));
length_count17724_17733 = G__17739;
alis_17734__$1 = G__17740;
=======
var G__10948 = (length_count10933_10942 + (1));
var G__10949 = cljs.core.next.call(null,cljs.core.rest.call(null,alis_10943__$1));
length_count10933_10942 = G__10948;
alis_10943__$1 = G__10949;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__17721_17730;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__17720_17729;
=======
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__10930_10939;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__10929_10938;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count.call(null,alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var _STAR_current_level_STAR__orig_val__17741_17750 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__17742_17751 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__17743_17752 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__17744_17753 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__17743_17752;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__17744_17753;
=======
var _STAR_current_level_STAR__orig_val__10950_10959 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__10951_10960 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__10952_10961 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__10953_10962 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__10952_10961;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__10953_10962;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.core.apply.call(null,(function (){var format_in__16644__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__16645__auto__ = ((typeof format_in__16644__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16644__auto__):format_in__16644__auto__);
return ((function (format_in__16644__auto__,cf__16645__auto__,_STAR_current_level_STAR__orig_val__17741_17750,_STAR_current_length_STAR__orig_val__17742_17751,_STAR_current_level_STAR__temp_val__17743_17752,_STAR_current_length_STAR__temp_val__17744_17753){
return (function() { 
var G__17754__delegate = function (args__16646__auto__){
var navigator__16647__auto__ = cljs.pprint.init_navigator.call(null,args__16646__auto__);
return cljs.pprint.execute_format.call(null,cf__16645__auto__,navigator__16647__auto__);
};
var G__17754 = function (var_args){
var args__16646__auto__ = null;
if (arguments.length > 0) {
var G__17755__i = 0, G__17755__a = new Array(arguments.length -  0);
while (G__17755__i < G__17755__a.length) {G__17755__a[G__17755__i] = arguments[G__17755__i + 0]; ++G__17755__i;}
  args__16646__auto__ = new cljs.core.IndexedSeq(G__17755__a,0,null);
} 
return G__17754__delegate.call(this,args__16646__auto__);};
G__17754.cljs$lang$maxFixedArity = 0;
G__17754.cljs$lang$applyTo = (function (arglist__17756){
var args__16646__auto__ = cljs.core.seq(arglist__17756);
return G__17754__delegate(args__16646__auto__);
});
G__17754.cljs$core$IFn$_invoke$arity$variadic = G__17754__delegate;
return G__17754;
})()
;
;})(format_in__16644__auto__,cf__16645__auto__,_STAR_current_level_STAR__orig_val__17741_17750,_STAR_current_length_STAR__orig_val__17742_17751,_STAR_current_level_STAR__temp_val__17743_17752,_STAR_current_length_STAR__temp_val__17744_17753))
})(),alis);

var length_count17745_17757 = (0);
var alis_17758__$1 = cljs.core.seq.call(null,cljs.core.drop.call(null,(3),alis));
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count17745_17757 < cljs.core._STAR_print_length_STAR_)))){
if(alis_17758__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__17746_17759 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__17747_17760 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__17748_17761 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__17749_17762 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__17748_17761;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__17749_17762;
=======
cljs.core.apply.call(null,(function (){var format_in__9853__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__9854__auto__ = ((typeof format_in__9853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__9853__auto__):format_in__9853__auto__);
return ((function (format_in__9853__auto__,cf__9854__auto__,_STAR_current_level_STAR__orig_val__10950_10959,_STAR_current_length_STAR__orig_val__10951_10960,_STAR_current_level_STAR__temp_val__10952_10961,_STAR_current_length_STAR__temp_val__10953_10962){
return (function() { 
var G__10963__delegate = function (args__9855__auto__){
var navigator__9856__auto__ = cljs.pprint.init_navigator.call(null,args__9855__auto__);
return cljs.pprint.execute_format.call(null,cf__9854__auto__,navigator__9856__auto__);
};
var G__10963 = function (var_args){
var args__9855__auto__ = null;
if (arguments.length > 0) {
var G__10964__i = 0, G__10964__a = new Array(arguments.length -  0);
while (G__10964__i < G__10964__a.length) {G__10964__a[G__10964__i] = arguments[G__10964__i + 0]; ++G__10964__i;}
  args__9855__auto__ = new cljs.core.IndexedSeq(G__10964__a,0,null);
} 
return G__10963__delegate.call(this,args__9855__auto__);};
G__10963.cljs$lang$maxFixedArity = 0;
G__10963.cljs$lang$applyTo = (function (arglist__10965){
var args__9855__auto__ = cljs.core.seq(arglist__10965);
return G__10963__delegate(args__9855__auto__);
});
G__10963.cljs$core$IFn$_invoke$arity$variadic = G__10963__delegate;
return G__10963;
})()
;
;})(format_in__9853__auto__,cf__9854__auto__,_STAR_current_level_STAR__orig_val__10950_10959,_STAR_current_length_STAR__orig_val__10951_10960,_STAR_current_level_STAR__temp_val__10952_10961,_STAR_current_length_STAR__temp_val__10953_10962))
})(),alis);

var length_count10954_10966 = (0);
var alis_10967__$1 = cljs.core.seq.call(null,cljs.core.drop.call(null,(3),alis));
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count10954_10966 < cljs.core._STAR_print_length_STAR_)))){
if(alis_10967__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__10955_10968 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__10956_10969 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__10957_10970 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__10958_10971 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__10957_10970;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__10958_10971;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_17758__$1));

if(cljs.core.next.call(null,alis_17758__$1)){
=======
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_10967__$1));

if(cljs.core.next.call(null,alis_10967__$1)){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis_17758__$1));
=======
cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis_10967__$1));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__17747_17760;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__17746_17759;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,alis_17758__$1))){
=======
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__10956_10969;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__10955_10968;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,alis_10967__$1))){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var G__17763 = (length_count17745_17757 + (1));
var G__17764 = cljs.core.next.call(null,cljs.core.rest.call(null,alis_17758__$1));
length_count17745_17757 = G__17763;
alis_17758__$1 = G__17764;
=======
var G__10972 = (length_count10954_10966 + (1));
var G__10973 = cljs.core.next.call(null,cljs.core.rest.call(null,alis_10967__$1));
length_count10954_10966 = G__10972;
alis_10967__$1 = G__10973;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__17742_17751;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__17741_17750;
=======
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__10951_10960;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__10950_10959;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second.call(null,alis);
var nlis = cljs.core.first.call(null,cljs.core.rest.call(null,cljs.core.rest.call(null,alis)));
if(cljs.core.vector_QMARK_.call(null,args)){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var _STAR_symbol_map_STAR__orig_val__17767 = cljs.pprint._STAR_symbol_map_STAR_;
var _STAR_symbol_map_STAR__temp_val__17768 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,args),"%"]):cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (_STAR_symbol_map_STAR__orig_val__17767,args,nlis){
return (function (p1__17765_SHARP_,p2__17766_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__17765_SHARP_,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__17766_SHARP_)].join('')],null));
});})(_STAR_symbol_map_STAR__orig_val__17767,args,nlis))
,args,cljs.core.range.call(null,(1),(cljs.core.count.call(null,args) + (1))))));
cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR__temp_val__17768;

try{return (function (){var format_in__16644__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__16645__auto__ = ((typeof format_in__16644__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16644__auto__):format_in__16644__auto__);
return ((function (format_in__16644__auto__,cf__16645__auto__,_STAR_symbol_map_STAR__orig_val__17767,_STAR_symbol_map_STAR__temp_val__17768,args,nlis){
return (function() { 
var G__17769__delegate = function (args__16646__auto__){
var navigator__16647__auto__ = cljs.pprint.init_navigator.call(null,args__16646__auto__);
return cljs.pprint.execute_format.call(null,cf__16645__auto__,navigator__16647__auto__);
};
var G__17769 = function (var_args){
var args__16646__auto__ = null;
if (arguments.length > 0) {
var G__17770__i = 0, G__17770__a = new Array(arguments.length -  0);
while (G__17770__i < G__17770__a.length) {G__17770__a[G__17770__i] = arguments[G__17770__i + 0]; ++G__17770__i;}
  args__16646__auto__ = new cljs.core.IndexedSeq(G__17770__a,0,null);
} 
return G__17769__delegate.call(this,args__16646__auto__);};
G__17769.cljs$lang$maxFixedArity = 0;
G__17769.cljs$lang$applyTo = (function (arglist__17771){
var args__16646__auto__ = cljs.core.seq(arglist__17771);
return G__17769__delegate(args__16646__auto__);
});
G__17769.cljs$core$IFn$_invoke$arity$variadic = G__17769__delegate;
return G__17769;
})()
;
;})(format_in__16644__auto__,cf__16645__auto__,_STAR_symbol_map_STAR__orig_val__17767,_STAR_symbol_map_STAR__temp_val__17768,args,nlis))
})().call(null,nlis);
}finally {cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR__orig_val__17767;
=======
var _STAR_symbol_map_STAR__orig_val__10976 = cljs.pprint._STAR_symbol_map_STAR_;
var _STAR_symbol_map_STAR__temp_val__10977 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,args),"%"]):cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (_STAR_symbol_map_STAR__orig_val__10976,args,nlis){
return (function (p1__10974_SHARP_,p2__10975_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__10974_SHARP_,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__10975_SHARP_)].join('')],null));
});})(_STAR_symbol_map_STAR__orig_val__10976,args,nlis))
,args,cljs.core.range.call(null,(1),(cljs.core.count.call(null,args) + (1))))));
cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR__temp_val__10977;

try{return (function (){var format_in__9853__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__9854__auto__ = ((typeof format_in__9853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__9853__auto__):format_in__9853__auto__);
return ((function (format_in__9853__auto__,cf__9854__auto__,_STAR_symbol_map_STAR__orig_val__10976,_STAR_symbol_map_STAR__temp_val__10977,args,nlis){
return (function() { 
var G__10978__delegate = function (args__9855__auto__){
var navigator__9856__auto__ = cljs.pprint.init_navigator.call(null,args__9855__auto__);
return cljs.pprint.execute_format.call(null,cf__9854__auto__,navigator__9856__auto__);
};
var G__10978 = function (var_args){
var args__9855__auto__ = null;
if (arguments.length > 0) {
var G__10979__i = 0, G__10979__a = new Array(arguments.length -  0);
while (G__10979__i < G__10979__a.length) {G__10979__a[G__10979__i] = arguments[G__10979__i + 0]; ++G__10979__i;}
  args__9855__auto__ = new cljs.core.IndexedSeq(G__10979__a,0,null);
} 
return G__10978__delegate.call(this,args__9855__auto__);};
G__10978.cljs$lang$maxFixedArity = 0;
G__10978.cljs$lang$applyTo = (function (arglist__10980){
var args__9855__auto__ = cljs.core.seq(arglist__10980);
return G__10978__delegate(args__9855__auto__);
});
G__10978.cljs$core$IFn$_invoke$arity$variadic = G__10978__delegate;
return G__10978;
})()
;
;})(format_in__9853__auto__,cf__9854__auto__,_STAR_symbol_map_STAR__orig_val__10976,_STAR_symbol_map_STAR__temp_val__10977,args,nlis))
})().call(null,nlis);
}finally {cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR__orig_val__10976;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var _STAR_current_level_STAR__orig_val__17772_17777 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__17773_17778 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__17774_17779 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__17775_17780 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__17774_17779;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__17775_17780;
=======
var _STAR_current_level_STAR__orig_val__10981_10986 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__10982_10987 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__10983_10988 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__10984_10989 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__10983_10988;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__10984_10989;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var length_count17776_17781 = (0);
var alis_17782__$1 = cljs.core.seq.call(null,alis);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count17776_17781 < cljs.core._STAR_print_length_STAR_)))){
if(alis_17782__$1){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_17782__$1));

if(cljs.core.next.call(null,alis_17782__$1)){
=======
var length_count10985_10990 = (0);
var alis_10991__$1 = cljs.core.seq.call(null,alis);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count10985_10990 < cljs.core._STAR_print_length_STAR_)))){
if(alis_10991__$1){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_10991__$1));

if(cljs.core.next.call(null,alis_10991__$1)){
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var G__17783 = (length_count17776_17781 + (1));
var G__17784 = cljs.core.next.call(null,alis_17782__$1);
length_count17776_17781 = G__17783;
alis_17782__$1 = G__17784;
=======
var G__10992 = (length_count10985_10990 + (1));
var G__10993 = cljs.core.next.call(null,alis_10991__$1);
length_count10985_10990 = G__10992;
alis_10991__$1 = G__10993;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__17773_17778;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__17772_17777;
=======
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__10982_10987;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__10981_10986;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.call(null,cljs.core.identity,(function (){var iter__4523__auto__ = (function cljs$pprint$two_forms_$_iter__17785(s__17786){
return (new cljs.core.LazySeq(null,(function (){
var s__17786__$1 = s__17786;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__17786__$1);
if(temp__5720__auto__){
var s__17786__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17786__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__17786__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__17788 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__17787 = (0);
while(true){
if((i__17787 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__17787);
cljs.core.chunk_append.call(null,b__17788,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.name.call(null,cljs.core.first.call(null,x))),cljs.core.second.call(null,x)], null)], null));

var G__17789 = (i__17787 + (1));
i__17787 = G__17789;
=======
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.call(null,cljs.core.identity,(function (){var iter__4523__auto__ = (function cljs$pprint$two_forms_$_iter__10994(s__10995){
return (new cljs.core.LazySeq(null,(function (){
var s__10995__$1 = s__10995;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__10995__$1);
if(temp__5720__auto__){
var s__10995__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10995__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__10995__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__10997 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__10996 = (0);
while(true){
if((i__10996 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__10996);
cljs.core.chunk_append.call(null,b__10997,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.name.call(null,cljs.core.first.call(null,x))),cljs.core.second.call(null,x)], null)], null));

var G__10998 = (i__10996 + (1));
i__10996 = G__10998;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
} else {
return true;
}
break;
}
})()){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17788),cljs$pprint$two_forms_$_iter__17785.call(null,cljs.core.chunk_rest.call(null,s__17786__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17788),null);
}
} else {
var x = cljs.core.first.call(null,s__17786__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.name.call(null,cljs.core.first.call(null,x))),cljs.core.second.call(null,x)], null)], null),cljs$pprint$two_forms_$_iter__17785.call(null,cljs.core.rest.call(null,s__17786__$2)));
=======
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10997),cljs$pprint$two_forms_$_iter__10994.call(null,cljs.core.chunk_rest.call(null,s__10995__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10997),null);
}
} else {
var x = cljs.core.first.call(null,s__10995__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.name.call(null,cljs.core.first.call(null,x))),cljs.core.second.call(null,x)], null)], null),cljs$pprint$two_forms_$_iter__10994.call(null,cljs.core.rest.call(null,s__10995__$2)));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,amap);
})()));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (core){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return (function (p1__17790_SHARP_){
var vec__17791 = p1__17790_SHARP_;
var s = cljs.core.nth.call(null,vec__17791,(0),null);
var f = cljs.core.nth.call(null,vec__17791,(1),null);
=======
return (function (p1__10999_SHARP_){
var vec__11000 = p1__10999_SHARP_;
var s = cljs.core.nth.call(null,vec__11000,(0),null);
var f = cljs.core.nth.call(null,vec__11000,(1),null);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
if(cljs.core.not.call(null,(function (){var or__4131__auto__ = cljs.core.namespace.call(null,s);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.special_symbol_QMARK_.call(null,s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,core,cljs.core.name.call(null,s)),f], null);
} else {
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return p1__17790_SHARP_;
=======
return p1__10999_SHARP_;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}
});})(core))
,amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms.call(null,cljs.pprint.add_core_ns.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.Symbol(null,"when-first","when-first",821699168,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"condp","condp",1054325175,null),new cljs.core.Symbol(null,"..","..",-300507420,null),new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.Symbol(null,"struct","struct",325972931,null),new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.Symbol(null,"if-not","if-not",-265415609,null),new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"with-open","with-open",172119667,null),new cljs.core.Symbol(null,"with-local-vars","with-local-vars",837642072,null),new cljs.core.Symbol(null,"defonce","defonce",-1681484013,null),new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"dotimes","dotimes",-818708397,null),new cljs.core.Symbol(null,"cond","cond",1606708055,null),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"defn-","defn-",1097765044,null),new cljs.core.Symbol(null,"locking","locking",1542862874,null),new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"struct-map","struct-map",-1387540878,null)],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not.call(null,cljs.pprint.pprint_reader_macro.call(null,alis))){
var temp__5718__auto__ = cljs.pprint._STAR_code_table_STAR_.call(null,cljs.core.first.call(null,alis));
if(cljs.core.truth_(temp__5718__auto__)){
var special_form = temp__5718__auto__;
return special_form.call(null,alis);
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__5718__auto__ = sym.call(null,cljs.pprint._STAR_symbol_map_STAR_);
if(cljs.core.truth_(temp__5718__auto__)){
var arg_num = temp__5718__auto__;
return cljs.pprint.print.call(null,arg_num);
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.call(null,cljs.core.name.call(null,sym));
} else {
return cljs.pprint.pr.call(null,sym);
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.code_dispatch !== 'undefined')){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"list","list",765357683),cljs.pprint.pprint_code_list);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.pprint.pprint_vector);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"map","map",1371690461),cljs.pprint.pprint_map);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"set","set",304602554),cljs.pprint.pprint_set);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.pprint.pprint_pqueue);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"deref","deref",-145586795),cljs.pprint.pprint_ideref);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch.call(null,cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__4219__auto__ = (0);
var y__4220__auto__ = (width - cljs.core.count.call(null,s));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
return cljs.core.apply.call(null,cljs.core.str,clojure.string.join.call(null,cljs.core.repeat.call(null,padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var G__17798 = arguments.length;
switch (G__17798) {
=======
var G__11007 = arguments.length;
switch (G__11007) {
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
case 2:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
if(cljs.core.seq.call(null,rows)){
var widths = cljs.core.map.call(null,(function (k){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return cljs.core.apply.call(null,cljs.core.max,cljs.core.count.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)),cljs.core.map.call(null,(function (p1__17794_SHARP_){
return cljs.core.count.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,p1__17794_SHARP_,k)));
}),rows));
}),ks);
var spacers = cljs.core.map.call(null,((function (widths){
return (function (p1__17795_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,p1__17795_SHARP_,"-"));
=======
return cljs.core.apply.call(null,cljs.core.max,cljs.core.count.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)),cljs.core.map.call(null,(function (p1__11003_SHARP_){
return cljs.core.count.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,p1__11003_SHARP_,k)));
}),rows));
}),ks);
var spacers = cljs.core.map.call(null,((function (widths){
return (function (p1__11004_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,p1__11004_SHARP_,"-"));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});})(widths))
,widths);
var fmt_row = ((function (widths,spacers){
return (function (leader,divider,trailer,row){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(leader),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,divider,(function (){var iter__4523__auto__ = ((function (widths,spacers){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return (function cljs$pprint$iter__17809(s__17810){
return (new cljs.core.LazySeq(null,((function (widths,spacers){
return (function (){
var s__17810__$1 = s__17810;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__17810__$1);
if(temp__5720__auto__){
var s__17810__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17810__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__17810__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__17812 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__17811 = (0);
while(true){
if((i__17811 < size__4522__auto__)){
var vec__17813 = cljs.core._nth.call(null,c__4521__auto__,i__17811);
var col = cljs.core.nth.call(null,vec__17813,(0),null);
var width = cljs.core.nth.call(null,vec__17813,(1),null);
cljs.core.chunk_append.call(null,b__17812,cljs.pprint.add_padding.call(null,width,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)));

var G__17824 = (i__17811 + (1));
i__17811 = G__17824;
=======
return (function cljs$pprint$iter__11018(s__11019){
return (new cljs.core.LazySeq(null,((function (widths,spacers){
return (function (){
var s__11019__$1 = s__11019;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__11019__$1);
if(temp__5720__auto__){
var s__11019__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11019__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__11019__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__11021 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__11020 = (0);
while(true){
if((i__11020 < size__4522__auto__)){
var vec__11022 = cljs.core._nth.call(null,c__4521__auto__,i__11020);
var col = cljs.core.nth.call(null,vec__11022,(0),null);
var width = cljs.core.nth.call(null,vec__11022,(1),null);
cljs.core.chunk_append.call(null,b__11021,cljs.pprint.add_padding.call(null,width,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)));

var G__11033 = (i__11020 + (1));
i__11020 = G__11033;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
} else {
return true;
}
break;
}
})()){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17812),cljs$pprint$iter__17809.call(null,cljs.core.chunk_rest.call(null,s__17810__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17812),null);
}
} else {
var vec__17816 = cljs.core.first.call(null,s__17810__$2);
var col = cljs.core.nth.call(null,vec__17816,(0),null);
var width = cljs.core.nth.call(null,vec__17816,(1),null);
return cljs.core.cons.call(null,cljs.pprint.add_padding.call(null,width,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)),cljs$pprint$iter__17809.call(null,cljs.core.rest.call(null,s__17810__$2)));
=======
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11021),cljs$pprint$iter__11018.call(null,cljs.core.chunk_rest.call(null,s__11019__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11021),null);
}
} else {
var vec__11025 = cljs.core.first.call(null,s__11019__$2);
var col = cljs.core.nth.call(null,vec__11025,(0),null);
var width = cljs.core.nth.call(null,vec__11025,(1),null);
return cljs.core.cons.call(null,cljs.pprint.add_padding.call(null,width,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)),cljs$pprint$iter__11018.call(null,cljs.core.rest.call(null,s__11019__$2)));
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
}
} else {
return null;
}
break;
}
});})(widths,spacers))
,null,null));
});})(widths,spacers))
;
return iter__4523__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,((function (iter__4523__auto__,widths,spacers){
<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
return (function (p1__17796_SHARP_){
return cljs.core.get.call(null,row,p1__17796_SHARP_);
=======
return (function (p1__11005_SHARP_){
return cljs.core.get.call(null,row,p1__11005_SHARP_);
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
});})(iter__4523__auto__,widths,spacers))
,ks),widths));
})()))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailer)].join('');
});})(widths,spacers))
;
cljs.core.println.call(null);

cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",cljs.core.zipmap.call(null,ks,ks)));

cljs.core.println.call(null,fmt_row.call(null,"|-","-+-","-|",cljs.core.zipmap.call(null,ks,spacers)));

<<<<<<< HEAD:docs/js/compiled/worker-out/cljs/pprint.js
var seq__17819 = cljs.core.seq.call(null,rows);
var chunk__17820 = null;
var count__17821 = (0);
var i__17822 = (0);
while(true){
if((i__17822 < count__17821)){
var row = cljs.core._nth.call(null,chunk__17820,i__17822);
cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",row));


var G__17825 = seq__17819;
var G__17826 = chunk__17820;
var G__17827 = count__17821;
var G__17828 = (i__17822 + (1));
seq__17819 = G__17825;
chunk__17820 = G__17826;
count__17821 = G__17827;
i__17822 = G__17828;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__17819);
if(temp__5720__auto__){
var seq__17819__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17819__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__17819__$1);
var G__17829 = cljs.core.chunk_rest.call(null,seq__17819__$1);
var G__17830 = c__4550__auto__;
var G__17831 = cljs.core.count.call(null,c__4550__auto__);
var G__17832 = (0);
seq__17819 = G__17829;
chunk__17820 = G__17830;
count__17821 = G__17831;
i__17822 = G__17832;
continue;
} else {
var row = cljs.core.first.call(null,seq__17819__$1);
cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",row));


var G__17833 = cljs.core.next.call(null,seq__17819__$1);
var G__17834 = null;
var G__17835 = (0);
var G__17836 = (0);
seq__17819 = G__17833;
chunk__17820 = G__17834;
count__17821 = G__17835;
i__17822 = G__17836;
=======
var seq__11028 = cljs.core.seq.call(null,rows);
var chunk__11029 = null;
var count__11030 = (0);
var i__11031 = (0);
while(true){
if((i__11031 < count__11030)){
var row = cljs.core._nth.call(null,chunk__11029,i__11031);
cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",row));


var G__11034 = seq__11028;
var G__11035 = chunk__11029;
var G__11036 = count__11030;
var G__11037 = (i__11031 + (1));
seq__11028 = G__11034;
chunk__11029 = G__11035;
count__11030 = G__11036;
i__11031 = G__11037;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__11028);
if(temp__5720__auto__){
var seq__11028__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11028__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__11028__$1);
var G__11038 = cljs.core.chunk_rest.call(null,seq__11028__$1);
var G__11039 = c__4550__auto__;
var G__11040 = cljs.core.count.call(null,c__4550__auto__);
var G__11041 = (0);
seq__11028 = G__11038;
chunk__11029 = G__11039;
count__11030 = G__11040;
i__11031 = G__11041;
continue;
} else {
var row = cljs.core.first.call(null,seq__11028__$1);
cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",row));


var G__11042 = cljs.core.next.call(null,seq__11028__$1);
var G__11043 = null;
var G__11044 = (0);
var G__11045 = (0);
seq__11028 = G__11042;
chunk__11029 = G__11043;
count__11030 = G__11044;
i__11031 = G__11045;
>>>>>>> :simple optimizations:docs/js/compiled/out/cljs/pprint.js
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,rows)),rows);
});

cljs.pprint.print_table.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=pprint.js.map
